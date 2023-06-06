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
      this.isDisabled = true; // 禁用按钮
      this.progress = "下载中,默认最高画质,如果视频比较大要等很久,虽然页面不会动但是真的在下载中,千万别刷新"
      axios.post('https://www.kumail.moe/api/ytb-download', { video_url: this.video_url }, { withCredentials: true, responseType: 'blob' })
      .then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data])); // 创建一个临时URL
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'video.mp4'); // 设置下载文件的名称
        document.body.appendChild(link);

        link.addEventListener('click', () => {
        // 视频下载完成后执行的操作
          this.isDisabled = false; // 启用按钮
          this.progress = "下载完成!"; 
        });

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

