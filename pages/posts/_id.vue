<template>
  <v-row justify="center">
    <v-col cols="12" sm="8">
      <div class="mb-2 font-weight-bold grey--text">
        <span>
          {{ updatedAt }}
        </span>
      </div>
      <h1 class="text-h3 font-weight-bold my-12" style="word-wrap: break-word;">
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
        <markdown-it-vue :content="post.fields.content" />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import MarkdownItVue from 'markdown-it-vue'

import client from '@/plugins/contentful.js'
import 'markdown-it-vue/dist/markdown-it-vue.css'

export default {
  components: {
    MarkdownItVue,
  },
  async asyncData({ params }) {
    const post = await client.getEntry(params.id)
    return {
      post,
    }
  },
  head() {
    return {
      title: this.post && this.post.fields.title,
    }
  },
  computed: {
    updatedAt() {
      const date = this.post.fields.updatedAt
      return this.$dayjs(date).format('YYYY/MM/DD')
    },
  },
}
</script>

<style lang="scss">
.blog-contents {
  margin-top: 30px;

  img {
    max-width: 100%;
    max-height: 400px;
    display: block;
    margin: 1rem 0;
  }

  strong {
    font-size: 25px;
    margin-top: 20px;
  }

  pre {
    position: relative;
    margin: 1.3rem 0;
    background: #eee;
    border-radius: 3px;
  }

  pre code {
    margin: 0;
    font-size: 0.9em;
    color: #555555;
  }

  code {
    background-color: #eee;
    color: #555555;
    padding: 5px;
  }

  h2 {
    margin: 3rem 0 1rem 0;
    border-bottom: double 5px #ef6c00;
    padding: 0.5em 0 0.5em 0; /*文字周りの余白*/
  }

  h3 {
    margin: 3rem 0 1rem 0;
  }

  // ul,
  // ol {
  //   background-color: #ffffee;
  //   border: dashed 1px #ff9933;
  //   padding: 40px;
  //   margin: 20px 0;

  //   li {
  //     margin-bottom: 10px;
  //     &:last-child {
  //       margin-bottom: 0px !important;
  //     }
  //   }
  // }
}
</style>
