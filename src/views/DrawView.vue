<script lang="ts">
import axios from 'axios';

export default {
  data() {
    return {
      weiboLink: '',
      lotteryTypes: [
        { value: 'repost', label: '转发抽奖' },
        { value: 'comment', label: '评论抽奖' },
        // 添加其他抽奖方式的选项
      ],
      selectedLotteryType: 'repost', // 设置默认选中的抽奖方式
      winningCount: 1,
      lotteryResult: '',
      isDisabled: false,
    };
  },
  methods: {
    async startLottery() {
      this.isDisabled = true;

      try {
        const response = await axios.post('https://www.kumail.moe/api/draw', {
          weiboLink: this.weiboLink,
          selectedLotteryType: this.selectedLotteryType,
          winningCount: this.winningCount
        }, {
          withCredentials: true
        });

        console.log(response.data);
        this.lotteryResult = response.data.winner;

        // 等待两分钟后启用按钮
        await new Promise(resolve => setTimeout(resolve, 120000));
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
        <h2 class="card-title">微博抽奖</h2>

        <label for="lotteryType">选择抽奖方式:</label>
        <select v-model="selectedLotteryType" id="lotteryType">
          <!-- 保留了选择抽奖方式的下拉框 -->
          <option v-for="type in lotteryTypes" :key="type.value" :value="type.value">{{ type.label }}</option>
        </select>

        <label for="weiboLink">输入微博链接:</label>
        <input v-model="weiboLink" type="text" id="weiboLink" placeholder="在这里输入微博链接">
        
        <label for="winningCount">中奖人数:</label>
        <input v-model.number="winningCount" type="number" id="winningCount" placeholder="中奖人数">

        <div class="card-actions justify-end">
          <button class="btn btn-primary" :disabled="isDisabled" @click="startLottery">开始抽奖</button>
        </div>

        <p v-if="lotteryResult">{{ lotteryResult }}</p>
      </div>
    </div>

  </main>
</template>
