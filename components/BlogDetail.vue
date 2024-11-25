<template>
    <div v-if="post">
        <h1>{{ post.title }}</h1>
        <p>{{ post.content }}</p>
        <nuxt-link :to="`/categories/${post.category}`"
            >Quay lại danh mục</nuxt-link
        >
    </div>
</template>

<script setup lang="ts">
import { useBlogStore } from "~/stores/blog";

const route = useRoute();
const blogStore = useBlogStore();
const post = blogStore.getPostById(Number(route.params.post));
</script>
