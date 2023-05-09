<script lang="ts">
import axios from 'axios';
import Chatbox from '../components/chatgpt/Chatbox.vue';

export default {
  components: {
    Chatbox
  },
  data() {
    return {
      msgs: [
        { botmsg: "hello", usermsg: "hello" },
      ],
      newMsg: "", // 添加一个新消息的数据绑定
      isDisabled: false, // 添加一个禁用按钮的数据绑定
    }
  },
  methods: {
    addMsg() {
      this.isDisabled = true; // 禁用按钮
      axios.post('http://www.kumail.moe:8081/api/chat', { usermsg: this.newMsg }, { withCredentials: true })
        .then((response: { data: { chat: string } }) => {
          console.log(response.data)
          // 将接口返回的数据添加到消息记录中
          this.msgs.push({
            botmsg: response.data.chat,
            usermsg: this.newMsg
          });
          this.newMsg = ""; // 清空输入框
          this.isDisabled = false; // 启用按钮
        })
        .catch((error: any) => {
          console.error(error);
          this.isDisabled = false; // 启用按钮
        });

    }
  }
}
</script>



<template>
  <main>
    <div style="display: flex; justify-content: center;">
      <div class="form-control">
        <div class="input-group">
          <input type="text" placeholder="Type here" class="input input-lg input-bordered" v-model="newMsg" @keyup.enter="addMsg()" />
          <button class="btn btn-lg btn-square" :disabled="isDisabled" @click="addMsg()">Send</button>
        </div>
      </div>
    </div>
    <Chatbox
      v-for="msg in msgs"
      :botmsg="msg.botmsg"
      :usermsg="msg.usermsg"
    ></Chatbox>
  </main>
</template>
