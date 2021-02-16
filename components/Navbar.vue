<template>
  <v-card color="basil" style="border-bottom: 2px solid gray;">
    <v-card-title class="text-center justify-center py-3">
      <h3
        class="font-weight-black black--text d-flex align-center"
        n-link
        to="/"
      >
        <v-avatar size="40">
          <v-img src="/g_small.png"></v-img>
        </v-avatar>
        <n-link to="/">ue Tech Blog</n-link>
      </h3>
    </v-card-title>
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
