<template>
    <div>
        <h1>Bài viết trong danh mục</h1>
        <ul>
            <li v-for="post in posts" :key="post.id">
                <nuxt-link :to="`/categories/${categorySlug}/${post.slug}`">{{
                    post.title
                }}</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
const categorySlug = route.params.category;

const { data: posts } = await useFetch(`/api/categories/${categorySlug}`);
</script>
