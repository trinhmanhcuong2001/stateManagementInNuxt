interface Post {
    [key: string]: { id: number; title: string; slug: string }[];
}
export default defineEventHandler((event) => {
    const category = event.context.params?.category;

    if (!category) {
        throw createError({
            statusCode: 400,
            message: "Thiếu tham số category.",
        });
    }

    const posts: Post = {
        "cong-nghe": [
            { id: 1, title: "AI và tương lai", slug: "ai-va-tuong-lai" },
            {
                id: 2,
                title: "5G có thực sự nhanh?",
                slug: "5g-co-thuc-su-nhanh",
            },
        ],
        "the-thao": [
            { id: 1, title: "World Cup 2024", slug: "world-cup-2024" },
            {
                id: 2,
                title: "Cristiano Ronaldo và Messi",
                slug: "ronaldo-va-messi",
            },
        ],
        "am-nhac": [
            { id: 1, title: "Kpop và thế giới", slug: "kpop-va-the-gioi" },
            {
                id: 2,
                title: "Nhạc Việt trên bản đồ quốc tế",
                slug: "nhac-viet-quoc-te",
            },
        ],
    };

    return posts[category] || [];
});
