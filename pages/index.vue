<script lang="ts" setup>
import { todoManagement } from "~/stores/todo-management";
const todoStore = todoManagement();

const handleDelete = (id: number) => {
    todoStore.deleteTodo(id)
}
</script>

<template>
    <div>
        <button>
            <nuxt-link class="link" to="/todos/create"
                >Thêm công việc</nuxt-link
            >
        </button>
        <h1>Danh sách công việc</h1>
        <table border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Completed</th>
                    <th>Tính năng</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="todo in todoStore.todo_list">
                    <td>{{ todo.id }}</td>
                    <td>{{ todo.title }}</td>
                    <td>{{ todo.completed }}</td>
                    <td>
                        <nuxt-link :to="`/todos/edit-${todo.id}`"
                            >Cập nhật</nuxt-link
                        >
                        <button @click="handleDelete(todo.id)">Xóa</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<style>
.link {
    color: black;
    font-size: 16px;
    text-decoration: none;
}
</style>
