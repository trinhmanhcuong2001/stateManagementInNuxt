<template>
    <h1>Chi tiết</h1>
    <div v-if="post">
        <h1>{{ post.title }}</h1>
        <p>{{ post.content }}</p>
        <nuxt-link :to="`/categories/${categorySlug}`"
            >Quay lại danh mục</nuxt-link
        >
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
const categorySlug = route.params.category;
const postSlug = route.params.post;

const { data: post } = useFetch(`/api/categories/${categorySlug}/${postSlug}`);
</script>S
