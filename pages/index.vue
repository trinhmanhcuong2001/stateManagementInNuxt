<template>
    <div>
        <h1>Danh mục bài viết</h1>
        <ul>
            <li v-for="category in categories" :key="category.id">
                <nuxt-link :to="`/categories/${category.slug}`">{{
                    category.name
                }}</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
const { data: categories } = await useFetch("/api/categories");
</script>
