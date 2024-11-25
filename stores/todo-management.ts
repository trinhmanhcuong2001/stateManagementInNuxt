interface Todo {
    id: number;
    title: string;
    completed: boolean;
}
export const todoManagement = defineStore("todo-management", {
    state: () => ({
        todo_list: <Todo[]>[],
        nextId: 1,
    }),
    actions: {
        addTodo(todo: Todo) {
            this.todo_list.push({
                id: this.nextId,
                title: todo.title,
                completed: todo.completed,
            });
        },
        updateTodo(todo: Todo) {
            const task = this.todo_list.find((t) => t.id === Number(todo.id));
            if (task) {
                Object.assign(task, todo);
            }
        },
        deleteTodo(id: number) {
            this.todo_list = this.todo_list.filter((t) => t.id !== id);
        },
    },
    getters: {
        todoById:
            (state) =>
            (id: number): Todo | undefined => {
                return state.todo_list.find((t) => t.id === id);
            },
    },
});
