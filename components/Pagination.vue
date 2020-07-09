<template>
  <div class="text-center">
    <v-icon v-if="hasPrev()" @click="changePage(prevPage)">chevron_left</v-icon>
    <v-chip
      dark
      tag
      :class="{ 'orange darken-3': n === current }"
      style="margin: 0 3px;"
      v-for="n in 4"
      :key="n"
      @click="changePage(n)"
    >
      {{ n }}
    </v-chip>
    <v-icon v-if="hasNext()" @click="changePage(nextPage)"
      >chevron_right</v-icon
    >
  </div>
</template>

<script>
export default {
  props: {
    totalCount: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      current: parseInt(this.$route.params.id),
    }
  },
  methods: {
    hasPrev() {
      return this.current > 1
    },
    hasNext() {
      return this.current < 4
    },
    changePage(page) {
      this.$router.push(`/articles/${page}`)
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalCount / 10)
    },
    nextPage() {
      return this.current + 1
    },
    prevPage() {
      return this.current - 1
    },
  },
}
</script>
