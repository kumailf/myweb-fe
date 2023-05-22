<script lang="ts">
import axios from 'axios';

export default {
  data() {
    return {
      image_prompt: "",
      image: "",
      newMsg: "", // 添加一个新消息的数据绑定
      isDisabled: false, // 添加一个禁用按钮的数据绑定
    }
  },
  methods: {
    geneImg() {
      this.isDisabled = true; // 禁用按钮
      axios.post('http://www.kumail.moe:8081/api/gene-image', { image_prompt: this.image_prompt }, { withCredentials: true })
        .then((response: { data: { image_url: string } }) => {
          console.log(response.data)
          // 将接口返回的数据添加到消息记录中
          this.image = response.data.image_url
          // this.image_prompt = ""; // 清空输入框
          setTimeout(() => {
            this.isDisabled = false; // Enable the button after two minutes
          }, 120000);
        })
        .catch((error: any) => {
          console.error(error);
          this.isDisabled = false; // 启用按钮
          alert("服务挂了,别急,在修了,也有可能是你输入了一些不太policy的关键词")
        });

    }
  }
}
</script>

<template>
  <main>
    <p style="display: flex; justify-content: center;">请使用英语,中文大概率造出掉san图</p>
    <p style="display: flex; justify-content: center;">token不够用嘞,加了个两分钟的限制</p>

    <div style="display: flex; justify-content: center;">
      <div class="form-control">
        <div class="input-group">
          <input type="text" placeholder="Describe Your Image" class="input input-lg input-bordered"
            v-model="image_prompt" @keyup.enter="geneImg()" />
          <button class="btn btn-lg btn-square" :disabled="isDisabled" @click="geneImg()">Go</button>
        </div>
      </div>
    </div>
    <p style="display: flex; justify-content: center;">{{ image_prompt }}</p>
    <div style="display: flex; justify-content: center;">
      <img :src="image" alt="Image" v-if="image" />
    </div>

  </main>
</template>
