<template>
  <div v-if="githubProjects.length > 0">
    <ul>
      <li v-for="project in githubProjects" :key="project.id">
        { project.titile }
      </li>
    </ul>
  </div>
  <div v-else>
    Nothing here yet, check back later
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  asyncData() {
    return {
      githubProjects: []
    }
  }
}
</script>
