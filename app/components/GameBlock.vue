<script setup>
    const props = defineProps(['link', 'name', 'date', 'description', 'img'])
</script>

<template>
    <NuxtLink :to="props.link" class="game-block" target="_blank">
        <article>
            <img :src="props.img" alt="" >
            <div>
                <h1 style="margin: 0px;">{{ props.name }}</h1>
                <div style="font: 400 12px Noto Sans TC; color: var(--blue)">{{ props.date }}</div>
                <p style="color: var(--dark); white-space: pre-wrap;">{{ props.description }}</p>
            </div>
        </article>
    </NuxtLink>
</template>

<style>
    .game-block {
        color: unset;
        text-decoration: none;
        padding: 25px;
        background: var(--gray);
        border: 2px solid #fafafa;
        border-radius: 10px;
    }

    .game-block img {
        border-radius: 5px;
        width: 100%;
        aspect-ratio: 1.5;
        object-fit: cover;
        margin-bottom: 10px;
    }
</style>