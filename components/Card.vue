<template>
  <v-hover>
    <template v-slot="{ hover }">
      <v-card
        nuxt-link
        :to="`/posts/${id}`"
        :elevation="hover ? 3 : 0"
        class="mt-n2 mb-n2"
      >
        <v-row>
          <v-col cols="3">
            <v-img :src="thumbnail" aspect-ratio="1.3"></v-img>
          </v-col>
          <v-col cols="9">
            <v-card-text class="py-0 caption grey--text">
              {{ updatedAt }}
            </v-card-text>
            <v-card-title
              class="text-h6 pt-0 pb-2 font-weight-bold card--title"
              style="min-height: 65px;"
              >{{ title | shortenText }}</v-card-title
            >
            <v-card-text
              class="font-weight-bold grey--text text-caption"
              style=""
              >{{ content | shortenContent }}</v-card-text
            >
            <div class="ml-2 pb-2" style="height: 40px;">
              <v-chip
                v-for="tag in tags"
                :key="tag.sys.id"
                class="ma-1"
                color="basil"
                tag
                small
                outlined
                n-link
                :to="`/tags/${tag.sys.id}`"
              >
                {{ tag.fields.name }}
              </v-chip>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      default: '',
    },
    thumbnail: {
      type: String,
      default: '',
    },
    tags: {
      type: Array,
      default: null,
    },
    updatedAt: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      n: 2,
    }
  },
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 600px) and (max-width: 960px) {
  .card--title {
    font-size: 1rem !important;
  }
}
</style>
