<template>
  <main>
    <p style="display: flex; justify-content: center; font-weight: bold; color: red;">重要提示: 请扫描下面的二维码进行付款</p>
    
    <div style="display: flex; justify-content: center; margin: 20px 0;">
      <div style="text-align: center; margin: 0 20px;">
        <p>支付宝收款码</p>
      </div>
      <div style="text-align: center; margin: 0 20px;">
        <p>微信收款码</p>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import alipayQrCode from '@/images/alipay-qr-code.png';
import wechatQrCode from '@/images/wechat-qr-code.png';

export default defineComponent({
  data() {
    return {
      alipayQrCode,
      wechatQrCode
    }
  }
});
</script>

<style scoped>
main {
  font-family: Arial, sans-serif;
}
</style>

