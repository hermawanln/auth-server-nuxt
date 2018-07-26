<template>
  <v-app>
    <v-navigation-drawer
      clipped
      width="256"
      v-model="drawer"
      fixed
      disable-resize-watcher
      disable-route-watcher
      app
    >
      <v-list>
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app clipped-left color="primary" dark class="elevation-1">
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title" style="cursor: pointer" @click="$router.push('/')"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn v-for="(item, index) in items" :key="index" :to="item.to" flat>{{ item.title }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Akun FLS',
        drawer: false,
        items: [
          { icon: 'apps', title: 'Profile', to: '/profile' },
          { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
        ],
      }
    }
  }
</script>
