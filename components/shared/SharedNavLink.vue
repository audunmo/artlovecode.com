<template>
  <a
    :href="href"
    class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
  >
    {{ text }}
  </a>
</template>

<script>
export default {
  name: 'SharedNavLink',
  props: {
    text: {
      type: String,
      required: true
    },
    href: {
      type: String,
      required: true
    }
  }
}
</script>
