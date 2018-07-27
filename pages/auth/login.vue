<template>
  <v-layout justify-center>
    <v-flex md4>
      <v-card>
        <v-card-title class="title">Login</v-card-title>
        <v-card-text>
          <!-- TODO: implemen vee validate -->
          <v-text-field
            v-model="username"
            label="Username"
            :error-messages="errors.collect('username')"
            v-validate="'required|alpha_num'"
            data-vv-name="username"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            :error-messages="errors.collect('password')"
            v-validate="'required'"
            data-vv-name="password"
            data-vv-as="Password"
            required
            hint="setidaknya 6 karakter"
            :append-icon="passwordVisibility ? 'visibility' : 'visibility_off'"
            @click:append="() => (passwordVisibility = !passwordVisibility)"
            :type="passwordVisibility ? 'password' : 'text'"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn to="/auth/register" color="primary" flat>Buat Akun</v-btn>
          <v-spacer></v-spacer>
          <v-btn @click="login()" :loading="loadingLogin" color="primary">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      username: '',
      password: '',
      loadingLogin: false,
      passwordVisibility: true
    }
  },
  methods: {
    ...mapActions(['setToken', 'setAuthInfo']),
    login () {
      this.$validator.validateAll().then(valid => {
        if (valid) {
          this.loadingLogin = true
          this.$axios.$post('/api/auth/login', {
            username: this.username,
            password: this.password
          }).then(response => {
            console.log('ok', response)
            this.setToken(response.token)
            this.setAuthInfo(response.token)
            this.$router.push('/profile')
            this.loadingLogin = false
          }).catch(err => {
            console.log('err', err);
            this.loadingLogin = false
          })
        }
      })
    }
  }
}
</script>
