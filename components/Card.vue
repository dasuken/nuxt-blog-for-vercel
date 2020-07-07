<template>
  <v-card
    nuxt-link
    :to="`/posts/${id}`"
    :elevation="n"
    @mouseover="n += 6"
    @mouseleave="n -= 6"
  >
    <div style="height: 100%;" class="red"></div>
    <v-img :src="thumbnail" class="align-end"></v-img>
    <v-card-text class="py-1">{{ updatedAt }}</v-card-text>
    <v-card-title class="text-h6 py-2 pb-4" style="height: 80px;">{{
      title | shortenText(35)
    }}</v-card-title>
    <div class="ml-2 pb-2">
      <v-chip
        class="ma-1"
        color="basil"
        tag
        small
        outlined
        v-for="tag in tags"
        :key="tag.sys.id"
        n-link
        :to="`/tags/${tag.sys.id}`"
      >
        {{ tag.fields.name }}
      </v-chip>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
    },
    tags: {
      type: Array,
    },
    updatedAt: {
      type: String,
    },
  },
  data() {
    return {
      n: 2,
    }
  },
}
</script>
