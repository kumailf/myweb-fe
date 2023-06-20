<script lang="ts">
export default {
  data() {
    return {
      activeItem: '',
      blogs: [
        "test_blog1",
        "test_blog2",
      ],
    };
  },
  methods: {
    setActiveItem(item: string) {
      this.activeItem = item;
    }
  }
};
</script>

<template>
    <main>
        <ul class="menu menu-lg bg-base-200 w-56 rounded-box">
            <ul class="menu bg-base-200 w-56">
                <li v-for="blog in blogs" :key="blog" :class="{ 'active': activeItem === blog }" @click="setActiveItem(blog)">
                    <a>{{ blog }}</a>
                </li>
            </ul>
        </ul>
    </main>
</template>
