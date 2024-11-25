<script setup lang="ts">
interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
const { data, error } = useFetch<Todo[]>("/api/todos");
</script>
<template>
    <div>
        <h1>Danh sách công việc</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tiêu đề</th>
                    <th>Trạng thái</th>
                    <th>Chức năng</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="data" v-for="todo in data" :key="todo.id">
                    <td>{{ todo.id }}</td>
                    <td>{{ todo.title }}</td>
                    <td>{{ todo.completed }}</td>
                    <td>
                        <nuxt-link :to="`/todos/${todo.id}`"
                            >Chi tiết</nuxt-link
                        >
                    </td>
                </tr>
                <tr v-else-if="!data">
                    Đang load dữ liệu
                </tr>
                <tr v-else>
                    Lỗi khi tải dữ liệu
                </tr>
            </tbody>
        </table>
    </div>
</template>
