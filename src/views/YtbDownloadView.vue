<script lang="ts">
import axios from 'axios';

export default {
  data() {
    return {
      video_url: "",
      title: "",
      file_name: "",
      newMsg: "", // 添加一个新消息的数据绑定
      isDisabled: false, // 添加一个禁用按钮的数据绑定
      isLoading: true, // 缓存展示条
    }
  },
  methods: {
    getVideo() {
      this.isDisabled = true; // 禁用按钮
      this.title = "";
      this.isLoading = false;
      axios.post('https://www.kumail.moe/api/ytb-download', { video_url: this.video_url }, { withCredentials: true })
        .then((response: { data: { status: string, title: string, file_name: string } }) => {
          console.log(response.data)
          if (response.data.status !== "success") {
            this.isDisabled = false; // 启用按钮
            alert("你的url可能有问题,要不再确认下")
            return;
          }
          this.title = response.data.title
          this.file_name = response.data.file_name
          this.isLoading = true;
          this.isDisabled = false; // Enable the button after two minutes
          
        })
        .catch((error: any) => {
          console.error(error);
          this.isDisabled = false; // 启用按钮
          this.isLoading = true;
          alert("服务挂了,别急,在修了")
        });
      this.isLoading = true;
    }
  }
}
</script>

<template>
    <main>
        <div style="display: flex; justify-content: center;">
            <div class="form-control">
                <div class="input-group">
                    <input type="text" placeholder="Video URL" class="input input-lg input-bordered"
                        v-model="video_url" @keyup.enter="getVideo()" />
                    <button class="btn btn-lg btn-square" :disabled="isDisabled" @click="getVideo()">获取下载链接</button>
                </div>
            </div>
        </div>
        <span class="loading loading-infinity loading-lg" style="display: flex; justify-content: center;" :disabled="isLoading"></span>
        <a style="display: flex; justify-content: center;" href="/tmp/${file_name}.mp4" v-if="file_name">{{ title }}  点击下载</a>
    </main>
</template>
