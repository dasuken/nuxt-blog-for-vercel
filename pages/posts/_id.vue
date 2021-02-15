<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8">
        <div class="mb-2 font-weight-bold grey--text">
          <span>
            {{ updatedAt }}
          </span>
        </div>
        <h1
          class="text-h3 font-weight-bold my-12"
          style="word-wrap: break-word;"
        >
          {{ post.fields.title }}
        </h1>
        <v-img :src="post.fields.thumbnail.fields.file.url"></v-img>
        <v-chip
          v-for="tag in post.fields.tags"
          :key="tag.sys.id"
          tag
          small
          dark
          class="mt-2 mb-6 mr-1"
        >
          {{ tag.fields.name }}
        </v-chip>
        <div class="blog-contents">
          <div v-html="$md.render(post.fields.content)"></div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import client from '@/plugins/contentful.js'
import Prism from '@/plugins/prism'

export default {
  async asyncData({ params }) {
    const post = await client.getEntry(params.id)
    return {
      post,
    }
  },
  computed: {
    updatedAt() {
      const date = this.post.fields.updatedAt
      return this.$dayjs(date).format('YYYY/MM/DD')
    },
  },
  mounted() {
    Prism.highlightAll()
  },
}
</script>

<style lang="scss">
.blog-contents {
  img {
    max-width: 100%;
    max-height: 400px;
    display: block;
    margin: 1rem 0;
  }

  pre {
    margin-bottom: 20px;
  }

  code {
    background-color: #322931;
    color: gainsboro;
    padding: 5px;
  }

  pre code {
    display: block !important;
    padding: 1rem !important;
  }

  h2 {
    padding: 10px 0;
    margin: 3rem 0 2rem 0;
    border-bottom: 4px dashed #007d7a;
  }

  h3 {
    padding: 5px;
    margin: 2rem 0 1rem 0;
    border-left: 10px solid #007d7a;
  }

  ul,
  ol {
    background-color: #ffffee;
    border: dashed 1px #ff9933;
    padding: 40px;
    margin: 20px 0;

    li {
      margin-bottom: 10px;
      &:last-child {
        margin-bottom: 0px !important;
      }
    }
  }
}
</style>
