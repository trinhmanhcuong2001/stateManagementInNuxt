<script lang="ts" setup>
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}
import { todoManagement } from "~/stores/todo-management";

const todoStore = todoManagement();

const router = useRouter();

const route = useRoute();

const id = route.params.id;

const todo = computed<Todo | undefined>(() => todoStore.todoById(Number(id)));

const editTodo = reactive({
    id: todo.value?.id || 0,
    title: todo.value?.title || "",
    completed: todo.value?.completed || false,
});

const handleUpdate = () => {
    todoStore.updateTodo(editTodo);
    router.push("/");
};
</script>

<template>
    <div class="">
        <input type="text" v-model="editTodo.title" />
        <select v-model="editTodo.completed">
            <option value="false">Chưa hoàn thành</option>
            <option value="true">Hoàn thành</option>
        </select>
        <button @click="handleUpdate">Cập nhật</button>
    </div>
</template>

<style lang="scss" scoped></style>
