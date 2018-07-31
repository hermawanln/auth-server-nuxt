<template>
  <div>
    <v-layout>
      <v-flex md6>
        <v-card flat color="transparent">
          <v-card-title class="title">Profil Akun</v-card-title>
          <v-card-text>
            <p>
              Profil pengguna berisi informasi tentang diri Anda (gambar profil, nama lengkap, alamat email, nomor telepon, dll). Tulis atau perbarui informasi pribadi Anda. Bantu orang lain mengenali Anda.
            </p>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex md6>
        <v-card>
          <v-card-text>
            <strong>Avatar</strong>
            <p>
              <v-avatar
                tile
                size="96px"
                color="grey"
                class="mr-3">
                <img :src="'https://img.devidentify.com/' + user.info.email" alt="">
              </v-avatar>
            </p>
            <strong>Nama</strong>
            <p>{{ user.info.fullName }}</p>
            <strong></strong>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <br class="my-2">
    <v-layout>
      <v-flex md6>
        <v-card flat color="transparent">
          <v-card-title class="title">Informasi Akun</v-card-title>
          <v-card-text>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ea cum corporis illo architecto itaque! Vitae commodi ducimus cumque alias magnam mollitia accusamus ipsa suscipit fuga neque illum, exercitationem eaque.
            </p>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex md6>
        <v-card>
          <v-card-text>
            <strong>Email</strong>
            <p>
              {{ user.email }}
              <v-chip v-if="user.emailVerified" small color="success" text-color="white">terverifikasi</v-chip>
              <v-chip v-else small color="error" text-color="white">belum terverifikasi</v-chip>
            </p>
            <strong>Username</strong>
            <p>{{ user.username }}</p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        info: {}
      }
    }
  },
  methods: {
    getUser () {
      this.$axios.$get('/api/auth').then(response => {
        this.user = response
      }).catch(err => {
        console.log('err', err);
      })
    }
  },
  mounted () {
    this.getUser()
  }
}
</script>
