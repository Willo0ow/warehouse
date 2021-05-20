<template>
  <v-app :style="{background: $vuetify.theme.themes[theme].background}">
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center" @click="returnHome">
        <v-icon class="mr-4" large>mdi-warehouse</v-icon>
        <v-toolbar-title>WarehouseApp</v-toolbar-title>
      </div>
      <v-spacer></v-spacer>
      <v-btn
        link
        to="login"
        text
      >
        <span class="mr-2">Login</span>
        <v-icon>mdi-login-variant</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
  computed: {
    theme() {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light';
    },
  },
  methods: {
    returnHome() {
      this.$router.push('/');
    },
  },
};
</script>
