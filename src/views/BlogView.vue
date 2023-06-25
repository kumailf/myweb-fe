<script lang="ts">
import axios from 'axios';

export default {
  data() {
    return {
      activeItem: '',
      blogs: ["凯子统计学"],
      content: ''
    };
  },
  methods: {
    setActiveItem(item: string) {
      this.activeItem = item;
      // 发送请求获取文章内容
      axios.get(`https://www.kumail.moe/api/get-blog/${item}`)
        .then(response => {
          this.content = response.data.content;
        })
        .catch(error => {
          console.error(error);
        });
    },
    fetchTitleList() {
      // 发送请求获取标题列表
      axios.get('https://www.kumail.moe/api/get-title-list')
        .then(response => {
          this.blogs = response.data.articles;
        })
        .catch(error => {
          console.error(error);
        });
    }
  },
  created() {
    // 在组件创建时获取标题列表
    this.fetchTitleList();
  }
};
</script>

<template>
  <main>
    <ul class="menu menu-lg bg-base-200 w-56 rounded-box">
      <ul class="menu bg-base-200 w-56">
        <li v-for="blog in blogs" :key="blog" :class="{ 'active': activeItem === blog }" @click="setActiveItem(blog)">
          <a>{{ blog }}</a>
        </li>
      </ul>
    </ul>
    <div class="article-content">
      <h2>{{ activeItem }}</h2>
      <div v-html="content"></div>
    </div>
  </main>
</template>
