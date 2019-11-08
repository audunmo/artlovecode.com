const resolve = require('path').resolve
const GitHub = require('github-api')
const dotenv = require('dotenv')

dotenv.config({
  path: resolve(__dirname, '.env')
})

const extractRepoData = ({ description, name, html_url, id }) => ({
  description,
  name,
  html_url,
  id
})

const repoFilter = repo =>
  repo.fork === false &&
  repo.name.match(/.+test.+/) === null &&
  repo.private === false &&
  (repo.description && repo.description.includes('include in portfolio'))

module.exports.handler = async (
  event = null,
  context = null,
  callback = null
) => {
  const gh = new GitHub({
    token: process.env.GITHUB_TOKEN
  })

  const me = await gh.getUser('artlovecode')

  const repos = await me.listRepos()

  const body = JSON.stringify(
    repos.data.filter(repoFilter).map(extractRepoData)
  )

  return {
    body,
    statusCode: 200,
    headers: {
      'Content-type': 'application/json'
    }
  }
}
