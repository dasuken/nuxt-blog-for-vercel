<template>
  <v-card color="basil">
    <v-card-title class="text-center justify-center py-3">
      <h1 class="font-weight-black display-1 basil--text" n-link to="/">
        <n-link to="/" class="basil--text">My Blog</n-link>
      </h1>
    </v-card-title>
    <v-tabs background-color="transparent" color="basil" grow>
      <v-tab>
        最新記事一覧
      </v-tab>
    </v-tabs>
  </v-card>
</template>

<style>
/* Helper classes */
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>
