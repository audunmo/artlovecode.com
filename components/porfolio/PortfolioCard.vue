<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img v-if="image.length > 0" class="w-full" :src="image" :alt="altText" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ title }}</div>
      <p class="text-gray-700 text-base">{{ description }}</p>
    </div>
    <div class="px-6 py-4">
      <span
        v-for="(tech, index) in stack"
        :key="index"
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
        >#{{ tech }}</span
      >
    </div>
  </div>
</template>
<script>
export default {
  name: 'PortfolioCard',
  computed: {
    altText() {
      return `Photo of ${this.title}`
    }
  },
  props: {
    image: {
      type: String,
      default() {
        return ''
      }
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    stack: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
