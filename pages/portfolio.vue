<template>
  <div v-if="projects.length > 0">
    <ul>
      <li v-for="project in projects" :key="project._id">
        <PortfolioCard
          :stack="project.stack"
          :title="project.title"
          :description="project.description"
        />
      </li>
    </ul>
  </div>
  <div v-else>
    Nothing here yet, check back later
  </div>
</template>

<script>
import sanityClient from '@sanity/client'
import PortfolioCard from '../components/porfolio/PortfolioCard.vue'

const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: true
})

export default {
  name: 'Portfolio',
  components: { PortfolioCard },
  async asyncData() {
    const projects = await client.fetch('*[_type == "Project"]')
    return {
      projects
    }
  }
}
</script>
