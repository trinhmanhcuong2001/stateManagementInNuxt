<template>
    <BlogList :categorySlug="route.params.category" />
</template>

<script setup>
const route = useRoute();
</script>
