<script lang="ts" setup>
import { todoManagement } from "~/stores/todo-management";

const todoStore = todoManagement();

const router = useRouter();

const newTodo = reactive({
    id: todoStore.nextId,
    title: "",
    completed: false,
});

const handleCreate = () => {
    todoStore.addTodo(newTodo);
    router.push("/");
};
</script>

<template>
    <div class="">
        <h1>Tạo công việc</h1>
        <input type="text" v-model="newTodo.title" />
        <select v-model="newTodo.completed">
            <option value="false">Chưa hoàn thành</option>
            <option value="true">Hoàn thành</option>
        </select>
        <button @click="handleCreate">Tạo</button>
    </div>
</template>

<style lang="scss" scoped></style>
