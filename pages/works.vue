<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <div class="font-weight-black text-h5 mb-5">作ったもの</div>
        <v-card
          v-for="work in works"
          :key="work.title"
          class="mb-10 rounded-xl"
        >
          <v-card-title class="font-weight-black">
            <a :href="work.link">
              {{ work.title }}
            </a>
          </v-card-title>
          <v-card-text>
            <v-img :src="work.img" aspect-ratio="2"></v-img>
          </v-card-text>

          <v-card-text>
            <div>詳細</div>
            {{ work.description }}
          </v-card-text>

          <v-card-text>
            使った技術:
            <div>
              <v-chip
                v-for="tech in work.techs"
                :key="tech"
                tag
                small
                color="pink"
                label
                text-color="white"
                class="mr-1"
              >
                {{ tech }}
              </v-chip>
            </div>
          </v-card-text>
          <v-card-text v-if="work.article">
            <v-btn outlined :to="`/articles/${work.article}`">関連記事</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      works: [
        {
          title: 'NUXTEC',
          link: 'https://d21iuqrezm3div.cloudfront.net',
          description:
            'ServerlessでECサイトを作ってみたかった。stripeは本番使用じゃないので平気\n sample email: testuser@gmail.com\n sample pass: testuser\n sample card: 4242424242424242/ ',
          img: 'https://i.gyazo.com/6de28f5cfbf3973f4aebf898a6706b05.png',
          techs: ['Nuxt', 'Express', 'Serverless', 'Aws'],
          article: '',
        },
        {
          title: 'KUYOU',
          link: 'https://haraichi-kuyou.com/',
          description:
            '読まれなかった没メールを供養するために作ったサービス。のはずが、サイト自体が没になる',
          img: 'https://i.gyazo.com/2e40f44f5156ab0e3f97fabd4937828d.jpg',
          techs: ['Vue2', 'Graphql', 'Express', 'apollo-client'],
          article: '',
        },
        {
          title: 'これ',
          link: 'https://gue-techblog.com/',
          // link: 'https://gue-tech-blog.ga/',
          description: 'JAMstack体験型ブログ',
          img: 'https://i.gyazo.com/d36a17a8d779e01feeba99bd73e30a14.png',
          techs: ['Nuxt', 'Contentful'],
          article: '',
        },
        {
          title: 'nbaスレ翻訳',
          link: 'https://www.nba-honyaku.net/posts/sr5jzi',
          description: 'redditのを自動で日本語翻訳して表示するサイト',
          img: 'https://i.gyazo.com/510aa2967aae77155db7ba759eb3ed5a.png',
          techs: ['Vue', 'Golang', 'Lambda', 'dynamodb'],
          article: '',
        },
        {
          title: 'sshctl',
          link: 'https://github.com/dasuken/sshctl',
          description: 'ssh configを編集するcli',
          img: 'https://raw.githubusercontent.com/dasuken/sshctl/main/docs/add_commandline2.png',
          techs: ['Golang'],
          article: 'https://speakerdeck.com/dasuken/oss-gov2',
        },
        {
          title: 'Gnavi',
          link: 'https://gue-tech-blog.ga/',
          description:
            'RDS, ECSインスタンスがお高いので基本動かいてないです()',
          img: 'https://i.gyazo.com/3d5bef0f5322b520deabb562dfc534c5.jpg',
          techs: ['rails', 'ECS', 'CircleCI'],
          article: '',
        },
      ],
    }
  },
}
</script>
