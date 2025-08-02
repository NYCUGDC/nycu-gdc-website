<script setup>
    const props = defineProps(['link', 'name', 'date'])
</script>

<template>
    <NuxtLink :to="props.link" style="color: unset; text-decoration: none;">
        <article class="link-block">
            <div>
                <h1 style="margin: 0px; letter-spacing: 1px; font-size: 18px;">{{ props.name }}</h1>
                <div style="font: 400 12px Noto Sans TC; color: var(--blue)">{{ props.date }}</div>
            </div>
            <div style="align-self: center; line-height: 0;">
                <img v-if="props.link.startsWith('https://')" src="/link.png" alt="" width="30" style="image-rendering: pixelated;">
                <div v-else-if="props.link" class="link-block-button"></div>
            </div>
        </article>
    </NuxtLink>
</template>

<style>
    .link-block {
        padding: 25px;
        background: var(--gray);
        border: 2px solid #fafafa;
        border-radius: 10px;
        display: grid;
        grid-template-columns: 1fr 30px;
        gap: 20px;
    }

    .link-block-button {
        width: 18px;
        height: 24px;
        background: var(--orange);
        clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
    }
</style>