<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-row justify="center">
          <v-col v-for="post in posts" :key="post.sys.id" cols="12" sm="6">
            <Card
              :id="post.sys.id"
              :title="post.fields.title"
              :thumbnail="post.fields.thumbnail.fields.file.url"
              :tags="post.fields.tags"
              :updatedAt="post.fields.updatedAt"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="2">
        <div class="mb-6 text-center">
          <span class="font-weight-bold border--bottom-slight">タグ 一覧</span>
        </div>
        <Tag v-for="tag in tags" :key="tag.sys.id" :tag="tag" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card from '@/components/Card.vue'
import Tag from '@/components/Tag.vue'
import client from '@/plugins/contentful.js'

export default {
  components: {
    Card,
    Tag,
  },
  async asyncData({ query }) {
    const promisePosts = client.getEntries({
      content_type: 'post',
      order: '-sys.createdAt',
      limit: 10,
    })
    const promiseTags = client.getEntries({
      content_type: 'tags',
    })
    const [entryPosts, entryTags] = await Promise.all([
      promisePosts,
      promiseTags,
    ])

    return {
      posts: entryPosts.items,
      tags: entryTags.items,
    }
  },
}
</script>

<style scoped lang="scss">
.margin--pagination {
  margin: 0px 1px;
}

.border--bottom {
  border-bottom: 5px solid #356859;

  &-slight {
    border-bottom: 3px solid #356859;
  }
}
</style>
