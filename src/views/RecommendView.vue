<script lang="ts">
import axios from 'axios';

export default {
  data() {
    return {
      song_title: "",
      song_artist: "",
      your_name: "",
      newMsg: "", // 添加一个新消息的数据绑定
      isDisabled: false, // 添加一个禁用按钮的数据绑定
    }
  },
  methods: {
    async submit() {
      this.isDisabled = true; // 禁用按钮
      try {
        const response = await axios.post('https://www.kumail.moe/recommend', {
          song_title: this.song_title,
          song_artist: this.song_artist,
          your_name: this.your_name
        }, { withCredentials: true });
        // 将接口返回的数据添加到消息记录中
        console.log(response.data)
        // 假设接口返回的数据中有 message 字段
        this.newMsg = response.data.message || "提交成功！";
        // 清空输入框
        this.song_title = "";
        this.song_artist = "";
        this.your_name = "";
      } catch (error: any) {
        console.error(error);
        this.newMsg = "服务挂了,别急,在修了";
      } finally {
        this.isDisabled = false; // 启用按钮
      }
    }
  }
}
</script>

<template>
  <main>
    <div style="display: flex; justify-content: center;">
      <div class="form-control">
        <div class="input-group">
          <input type="text" placeholder="歌名" class="input input-lg input-bordered" v-model="song_title" />
        </div>
        <div class="input-group">
          <input type="text" placeholder="演唱者" class="input input-lg input-bordered" v-model="song_artist" />
        </div>
        <div class="input-group">
          <input type="text" placeholder="你的名字" class="input input-lg input-bordered" v-model="your_name" />
        </div>
        <button class="btn btn-lg btn-square" :disabled="isDisabled" @click="submit()">提交</button>
      </div>
    </div>
    <p style="display: flex; justify-content: center;" v-if="newMsg">{{ newMsg }}</p>
  </main>
</template>