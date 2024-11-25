interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export default defineEventHandler(async (e) => {
    const method = e.node.req.method;
    const id = e.context.params?.id;

    if (method === "GET" && id) {
        const todo = await $fetch(
            "https://jsonplaceholder.typicode.com/todos/" + id
        );

        if (!todo) {
            throw new Error("Không tìm thấy công việc");
        }
        return todo;
    }
});
