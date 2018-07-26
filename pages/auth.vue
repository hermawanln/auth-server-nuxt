<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <nuxt-child />
      </v-container>
    </v-content>
    <v-footer app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  layout: 'blank'
}
</script>
