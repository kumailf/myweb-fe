<script lang="ts">
import axios from 'axios';

export default {
  data() {
    return {
        image_prompt: "white cat",
        image: "",
        newMsg: "", // 添加一个新消息的数据绑定
        isDisabled: false, // 添加一个禁用按钮的数据绑定
    }
  },
  methods: {
    geneImg() {
      this.isDisabled = true; // 禁用按钮
      axios.post('http://www.kumail.moe:8081/api/gene/image', { usermsg: this.image_prompt }, { withCredentials: true })
        .then((response: { data: { image_url: string } }) => {
          console.log(response.data)
          // 将接口返回的数据添加到消息记录中
          this.image = response.data.image_url
          this.image_prompt = ""; // 清空输入框
          this.isDisabled = false; // 启用按钮
        })
        .catch((error: any) => {
          console.error(error);
          this.isDisabled = false; // 启用按钮
          alert("服务挂了,别急,在修了")
        });

    }
  }
}
</script>

<template>
    <main>
      <div>
        <img :src="image" alt="Image" v-if="image" />
        <p>{{ image_prompt }}</p>
      </div>
      <div>
        <input type="text" v-model="image_prompt" placeholder="Image Prompt" />
        <button @click="geneImg" :disabled="isDisabled">Generate Image</button>
      </div>
    </main>
  </template>
