<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <template v-else>
      <h1 v-if="error.init">Can not start app</h1>
      <h1>An error occurred: {{ error.statusCode }}</h1>
      <p>{{ error.message }}</p>
    </template>
    <nuxt-link v-if="!error.init" to="/">Home page</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'] // you can set a custom layout for the error page
}
</script>
