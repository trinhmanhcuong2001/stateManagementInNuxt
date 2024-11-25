<template>
    <div>
        <h2>Danh mục bài viết</h2>
        <ul>
            <li v-for="category in categories" :key="category.slug">
                <nuxt-link :to="`/categories/${category.slug}`">{{
                    category.name
                }}</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { useBlogStore } from "~/stores/blog";

const blogStore = useBlogStore();
const categories = blogStore.categories;
</script>
