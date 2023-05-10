<script lang="ts">
import marked from "marked";

export default {
    name: "Markdown",
    props: {
        markdown: {
            type: String,
            required: true,
        },
    },
    computed: {
        parsedMarkdown() {
            return marked(this.markdown);
        },
    },
};
</script>

<template>
    <div class="markdown-container">
        <div v-html="parsedMarkdown"></div>
    </div>
</template>
  


  