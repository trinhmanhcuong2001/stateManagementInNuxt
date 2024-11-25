interface PostDetails {
    [key: string]: { title: string; content: string };
}

export default defineEventHandler((event) => {
    const params = event.context.params;
    const category = params?.category;
    const post = params?.post;

    if (!category || !post) {
        throw createError({
            statusCode: 400,
            message: "Thiếu tham số category hoặc post.",
        });
    }

    const details: PostDetails = {
        "ai-va-tuong-lai": {
            title: "AI và tương lai",
            content: "AI sẽ thay đổi thế giới.",
        },
        "5g-co-thuc-su-nhanh": {
            title: "5G có thực sự nhanh?",
            content: "5G là bước tiến lớn.",
        },
        "world-cup-2024": {
            title: "World Cup 2024",
            content: "Giải bóng đá lớn nhất thế giới.",
        },
        "ronaldo-va-messi": {
            title: "Cristiano Ronaldo và Messi",
            content: "Ai xuất sắc hơn?",
        },
        "kpop-va-the-gioi": {
            title: "Kpop và thế giới",
            content: "Làn sóng Hallyu.",
        },
        "nhac-viet-quoc-te": {
            title: "Nhạc Việt trên bản đồ quốc tế",
            content: "Nhạc Việt vươn xa.",
        },
    };

    return details[post] || { title: "Không tìm thấy bài viết", content: "" };
});
