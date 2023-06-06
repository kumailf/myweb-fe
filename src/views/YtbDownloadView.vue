<script lang="ts">
import axios from 'axios';

export default {
  data() {
    return {
      video_url: "",
      title: "",
      isDisabled: false, // 添加一个禁用按钮的数据绑定
      progress: ""
    }
  },
  methods: {
    downloadVideo() {
      axios.post('https://www.kumail.moe/api/ytb-download', { video_url: this.video_url }, { withCredentials: true, responseType: 'blob' })
      .then(response => {
        this.isDisabled = true; // 禁用按钮
        this.progress = "下载中"
        const url = window.URL.createObjectURL(new Blob([response.data])); // 创建一个临时URL
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'video.mp4'); // 设置下载文件的名称
        document.body.appendChild(link);
        link.click(); // 触发点击事件下载文件
        
      })
      .catch(error => {
        console.error(error);
        this.isDisabled = false; // 启用按钮
        this.progress = ""
        alert("服务挂了,别急,在修了,也有可能是你的url有问题")
        // 处理错误
      });
      
    },
    
  }
}
</script>

<template>
    <main>
        <div style="display: flex; justify-content: center;">
            <div class="form-control">
                <div class="input-group">
                    <input type="text" placeholder="Video URL" class="input input-lg input-bordered"
                        v-model="video_url" @keyup.enter="downloadVideo()" />
                    <button class="btn btn-lg btn-square" :disabled="isDisabled" @click="downloadVideo()">下载</button>
                </div>
            </div>
        </div>
        <p style="display: flex; justify-content: center;">{{ progress}}</p>
      </main>
</template>

