import { resolve } from 'path'
import GitHub from 'github-api'
import dotenv from 'dotenv'

dotenv.config({
  path: resolve(__dirname, '.env')
})

export default async (event = null, context = null, callback = null) => {
  const gh = new GitHub({
    token: process.env.GITHUB_TOKEN
  })

  const githubProjects = await gh.getRepos()
  return {
    githubProjects
  }
}
