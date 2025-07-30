<script setup>
    const props = defineProps(['link', 'name', 'date', 'description', 'img'])
</script>

<template>
    <NuxtLink :to="props.link" target="_blank" style="color: unset; text-decoration: none;">
        <article class="game-block">
            <img :src="props.img" alt="" >
            <div>
                <h1 style="margin: 0px;">{{ props.name }}</h1>
                <div style="font: 400 12px Noto Sans TC; color: var(--blue)">{{ props.date }}</div>
                <p style="color: var(--dark);">{{ props.description }}</p>
            </div>
        </article>
    </NuxtLink>
</template>

<style>
    .game-block {
        padding: 25px;
        background: var(--gray);
        border-radius: 30px;
    }

    .game-block img {
        border-radius: 5px;
        width: 100%;
        aspect-ratio: 1.5;
        object-fit: cover;
        margin-bottom: 10px;
    }
</style>