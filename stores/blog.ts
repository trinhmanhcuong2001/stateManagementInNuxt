interface Post {
    id: number;
    title: string;
    content: string;
    category: string;
}

export const useBlogStore = defineStore("blog", {
    state: () => ({
        categories: [
            { name: "Công Nghệ", slug: "cong-nghe" },
            { name: "Thể Thao", slug: "the-thao" },
        ],
        posts: [
            {
                id: 1,
                title: "AI và Tương Lai",
                content: "AI sẽ thay đổi thế giới.",
                category: "cong-nghe",
            },
            {
                id: 2,
                title: "World Cup 2024",
                content: "Giải đấu lớn nhất thế giới.",
                category: "the-thao",
            },
        ],
    }),
    getters: {
        getPostsByCategory: (state) => (categorySlug: string) =>
            state.posts.filter((post) => post.category === categorySlug),
        getPostById: (state) => (id: number) =>
            state.posts.find((post) => post.id === id),
    },
    actions: {
        addPost(newPost: Post) {
            this.posts.push(newPost);
        },
    },
});
