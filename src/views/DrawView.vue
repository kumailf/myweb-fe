<script lang="ts">
import axios from 'axios';

export default {
  data() {
    return {
      lotteryTypes: [
        { value: 'repost', label: '转发抽奖' },
        { value: 'comment', label: '评论抽奖' },
        // 添加其他抽奖方式的选项
      ],
      selectedLotteryType: 'repost', // 设置默认选中的抽奖方式
      lotteryResult: '',
      isDisabled: false,
    };
  },
  methods: {
    startLottery() {
      this.isDisabled = true;

      axios.post('https://www.kumail.moe/api/draw', { weiboLink: this.weiboLink, selectedLotteryType: this.selectedLotteryType, }, { withCredentials: true })
        .then((response: { data: { winner: string } }) => {
          console.log(response.data)
          // 将接口返回的数据添加到消息记录中
          this.lotteryResult = response.data.winner
          setTimeout(() => {
            this.isDisabled = false; // Enable the button after two minutes
          }, 120000);
        })

    },
      },
    }
</script>

<template>
  <main>
    <div class="card w-96 bg-base-100 shadow-xl"
      style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
      <div class="card-body">
        <h2 class="card-title">微博抽奖</h2>

        <label for="lotteryType">选择抽奖方式:</label>
        <select v-model="selectedLotteryType" id="lotteryType">
          <!-- 保留了选择抽奖方式的下拉框 -->
          <option v-for="type in lotteryTypes" :key="type.value" :value="type.value">{{ type.label }}</option>
        </select>

        <label for="weiboLink">输入微博链接:</label>
        <input v-model="weiboLink" type="text" id="weiboLink" placeholder="在这里输入微博链接">

        <div class="card-actions justify-end">
          <button class="btn btn-primary" :disabled="isDisabled" @click="startLottery">开始抽奖</button>
        </div>

        <p v-if="lotteryResult">{{ lotteryResult }}</p>
      </div>
    </div>

  </main>
</template>
