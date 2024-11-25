interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export default defineEventHandler(async () => {
    const response = await $fetch<Todo[]>(
        "https://jsonplaceholder.typicode.com/todos"
    );

    return response;
});
