<script lang="ts">
export default {
    props: ['botmsg', 'usermsg'],

}
</script>

<template>
    <div class="container">
        <div class="chat chat-end">
            <!-- <div class="chat-image avatar">
                        <div class="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div> -->
            <div class="chat-header">
                You
            </div>
            <div class="chat-bubble">{{ usermsg }}</div>
        </div>
        <div class="chat chat-start">
            <!-- <div class="chat-image avatar">
                        <div class="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div> -->
            <div class="chat-header">
                Bot
            </div>
            <div class="chat-bubble">{{ botmsg }}</div>
        </div>
    </div>
</template>

