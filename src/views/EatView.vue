<script lang="ts">
export default {
    data() {
        return {
            cards: [
                { title: "kfc", content: "难吃,但也可以吃" },
                { title: "麦当劳", content: "还行" },
                { title: "不吃", content: "减肥" },
                { title: "沙县", content: "你永远的家" },
                { title: "萨莉亚", content: "好!" },
                { title: "公司食堂", content: "如果有的话" },
                { title: "便宜外卖", content: "嗯造" },
                { title: "水果", content: "太健康了" },
                { title: "轻食沙拉", content: "难吃" },
                { title: "麻辣烫", content: "张亮除外" },
                { title: "日本菜", content: "大的" },
                { title: "便利店", content: "社畜最爱" },
                { title: "挂逼面", content: "挂逼嘞" },
                { title: "烤肉", content: "大白天就吃?" },
                { title: "寿司", content: "哦依稀" },
                { title: "烧烤", content: "上海的不行" },
                { title: "火锅", content: "还得是大宅门" },
                { title: "牛排", content: "吃牛!" },
                { title: "炒饭", content: "适合配拉面" },
                { title: "拉面", content: "适合配炒饭" },
                { title: "粥", content: "粥" },
                { title: "酒", content: "不上班?" },
                { title: "河南烩面", content: "中!" },
		{ title: "滨寿司", content: "hama!" },
		{ title: "放题", content: "粉一下水" },
		{ title: "麻辣香锅", content:"如题" },
		{ title: "小馄饨", content: "mini kaosu" },
		{ title: "放题", content: "粉一下水" },
		{ title: "鸡蛋灌饼", content: "这个好诶" },
		{ title: "二郎", content: "猪鼻部部活" },
            ],
            title: "吃啥吃啥",
            content: "说话说话",
            isDisabled: false, // 添加一个禁用按钮的数据绑定
        };
    },
    methods: {
        changeCard() {
            this.isDisabled = true; // 禁用按钮
            const index = Math.floor(Math.random() * this.cards.length);
            this.title = this.cards[index].title;
            this.content = this.cards[index].content;
            setTimeout(() => {
                // 启用按钮
                this.isDisabled = false;
            }, 500);
        },
    },
}
</script>

<template>
    <main>
        <div class="card w-96 bg-base-100 shadow-xl"
            style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
            <div class="card-body">
                <h2 class="card-title">{{ title }}</h2>
                <p>{{ content }}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary" :disabled="isDisabled" @click="changeCard">吃啥</button>
                </div>
            </div>
        </div>
    </main>
</template>
