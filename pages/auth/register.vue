<template>
  <v-layout justify-center>
    <v-flex md4>
      <v-card>
        <v-card-title>Buat Akun</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="email"
            label="Email"
            :error-messages="errors.collect('email')"
            v-validate="'required|email'"
            data-vv-name="email"
          ></v-text-field>
          <v-text-field
            v-model="fullName"
            label="Nama Lengkap"
            :error-messages="errors.collect('fullName')"
            v-validate="'required'"
            data-vv-name="fullName"
            required
          ></v-text-field>
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
            :counter="5"
            :error-messages="errors.collect('password')"
            v-validate="'required|min:6'"
            data-vv-name="password"
            required
            hint="setidaknya 6 karakter"
            :append-icon="passwordVisibility ? 'visibility' : 'visibility_off'"
            @click:append="() => (passwordVisibility = !passwordVisibility)"
            :type="passwordVisibility ? 'password' : 'text'"
          ></v-text-field>
          <v-text-field
            v-model="confirmPassword"
            label="Confirm Password"
            :counter="5"
            :error-messages="errors.collect('confirmPassword')"
            v-validate="'required|min:6'"
            data-vv-name="confirmPassword"
            required
            hint="setidaknya 6 karakter"
            :append-icon="confirmPasswordVisibility ? 'visibility' : 'visibility_off'"
            @click:append="() => (confirmPasswordVisibility = !confirmPasswordVisibility)"
            :type="confirmPasswordVisibility ? 'password' : 'text'"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" flat>Login saja</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary">Buat Akun</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      fullName: '',
      username: '',
      password: '',
      confirmPassword: '',
      passwordVisibility: true,
      confirmPasswordVisibility: true
    }
  }
}
</script>
