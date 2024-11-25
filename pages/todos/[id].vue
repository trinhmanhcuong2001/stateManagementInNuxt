<script setup lang="ts">
interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
const route = useRoute();
const id = route.params.id;

const { data, error } = await useFetch<Todo>(`/api/todos/${id}`);

console.log(data);
</script>
<template>
    <div>
        <h1>Chi tiết công việc</h1>
        <template v-if="data">
            <h3>ID: {{ data.id }}</h3>
            <h3>Title: {{ data.title }}</h3>
            <h3>Completed: {{ data.completed }}</h3>
            <h3>User: {{ data.userId }}</h3>
        </template>
    </div>
</template>
