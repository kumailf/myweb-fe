<script lang="ts">
import axios from 'axios';

export default {
  data() {
    return {
      song_title: "",
      song_artist: "",
      your_name: "",
      message: "", // 添加一个新消息的数据绑定
      isDisabled: false, // 添加一个禁用按钮的数据绑定
    }
  },
  methods: {
    async submit() {
      this.isDisabled = true;

      try {
        const response = await axios.post('https://www.kumail.moe/api/recommend', {
            song_title: this.song_title,
            song_artist: this.song_artist,
            your_name: this.your_name
        }, {
          withCredentials: true
        });

        console.log(response.data);
        this.message = response.data.message;

        this.isDisabled = false;
      } catch (error) {
        console.error('请求错误:', error);
        this.isDisabled = false; // 请求错误时也要启用按钮
      }
    }
  }
}

</script>

<template>
    <main>
      <div class="card w-96 bg-base-100 shadow-xl"
        style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
        <div class="card-body">
          <h2 class="card-title">推歌</h2>
  
          <label for="song_title">歌名:</label>
          <input v-model="song_title" type="text" id="song_title" placeholder="歌名">
          
          <label for="song_artist">演唱者:</label>
          <input v-model="song_artist" type="text" id="song_artist" placeholder="演唱者">
          
          <label for="your_name">推荐人:</label>
          <input v-model="your_name" type="text" id="your_name" placeholder="推荐人">

          <div class="card-actions justify-end">
            <button class="btn btn-primary" :disabled="isDisabled" @click="submit">提交</button>
          </div>
  
          <p v-if="message">{{ message }}</p>
        </div>
      </div>
  
    </main>
  </template>