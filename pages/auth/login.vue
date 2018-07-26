<template>
  <v-layout justify-center>
    <v-card>
      <v-card-title>Login</v-card-title>
      <v-card-text>
        <!-- TODO: implemen vee validate -->
        <v-text-field
          name="email"
          label="Email"
          id="email"
          v-model="email"
          required
        ></v-text-field>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  }
}
</script>
