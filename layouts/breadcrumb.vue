<script lang="ts" setup>
const { data } = await useFetch('/api/hello')
</script>

<template>
  <div>
    <p>This is the Breadcrumb {{ data?.hello }}</p>
    <slot />
  </div>
</template>

<style scoped></style>
