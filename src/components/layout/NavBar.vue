<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>
<template>
    <div class="navbar bg-base-100">
        <div class="navbar-start">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <RouterLink to="/">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/chatgpt">Chatgpt</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/eat">吃啥吃啥</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/geneimg">图片生成</RouterLink>
                    </li>
                </ul>
            </div>
            <a class="btn btn-ghost normal-case text-xl">Kumail`Home</a>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
                <li>
                    <RouterLink to="/">Home</RouterLink>
                </li>
                <li>
                    <RouterLink to="/chatgpt">Chatgpt</RouterLink>
                </li>
                <li>
                    <RouterLink to="/eat">吃啥吃啥</RouterLink>
                </li>
                <li>
                    <RouterLink to="/geneimg">图片生成</RouterLink>
                </li>
            </ul>
        </div>

    </div>
</template>
