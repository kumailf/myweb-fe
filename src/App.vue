<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/layout/NavBar.vue';

const toggleTheme = () => {
  const htmlTag = document.getElementsByTagName('html')[0];
  if (htmlTag.getAttribute('data-theme') === 'dark') {
    htmlTag.setAttribute('data-theme', 'light');
  } else {
    htmlTag.setAttribute('data-theme', 'dark');
  }
}
</script>

<template>
  <header>
    <NavBar />
    <div class="form-control" style="display: flex; justify-content: flex-end;">
      <label class="label cursor-pointer">
        <span class="label-text">Light </span>
        <input type="checkbox" class="toggle" @click="toggleTheme()" checked />
        <span class="label-text"> Dark</span>
      </label>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
