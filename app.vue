<script setup>
import { useCounterStore } from "~/stores/counter";
const counter = useCounterStore();
const increment = () => {
    counter.increment();
};
const decrement = () => {
    counter.decrement();
};
</script>
<template>
    <p>Count: {{ counter.count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
</template>
