<script setup>
    const props = defineProps(['link', 'name', 'date'])
</script>

<template>
    <NuxtLink :to="props.link" target="_blank" style="color: unset; text-decoration: none;">
        <article class="link-block">
            <div>
                <h1 style="margin: 0px;">{{ props.name }}</h1>
                <div style="font: 400 12px Noto Sans TC; color: var(--blue)">{{ props.date }}</div>
            </div>
            <div style="align-self: center;">
                <div class="link-block-button" v-if="props.link"></div>
            </div>
        </article>
    </NuxtLink>
</template>

<style>
    .link-block {
        padding: 25px;
        background: var(--gray);
        border-radius: 30px;
        display: grid;
        grid-template-columns: 1fr 30px;
        gap: 30px;
    }

    .link-block-button {
        width: 18px;
        height: 24px;
        background: var(--orange);
        clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
    }
</style>