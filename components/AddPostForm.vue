<template>
    <form @submit.prevent="handleSubmit">
        <div>
            <label>Tiêu đề</label>
            <input v-model="newPost.title" type="text" required />
        </div>
        <div>
            <label>Nội dung</label>
            <textarea v-model="newPost.content" required></textarea>
        </div>
        <div>
            <label>Danh mục</label>
            <select v-model="newPost.category" required>
                <option
                    v-for="category in categories"
                    :key="category.slug"
                    :value="category.slug"
                >
                    {{ category.name }}
                </option>
            </select>
        </div>
        <button type="submit">Thêm bài viết</button>
    </form>
</template>

<script setup lang="ts">
import { useBlogStore } from "~/stores/blog";
import { reactive } from "vue";

const blogStore = useBlogStore();
const categories = blogStore.categories;

const newPost = reactive({
    title: "",
    content: "",
    category: "",
});

const handleSubmit = () => {
    blogStore.addPost({ id: Date.now(), ...newPost });
    alert("Bài viết đã được thêm!");
};
</script>
