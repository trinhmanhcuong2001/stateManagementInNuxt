<template>
    <div>
        <h2>Bài viết trong danh mục</h2>
        <ul>
            <li v-for="post in posts" :key="post.id">
                <nuxt-link :to="`/categories/${categorySlug}/${post.id}`">{{
                    post.title
                }}</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { useBlogStore } from "~/stores/blog";

const props = defineProps<{ categorySlug: string }>();
const blogStore = useBlogStore();
const posts = blogStore.getPostsByCategory(props.categorySlug);
</script>
