<script setup>
    import { gsap } from 'gsap'
    
    const { data } = await useAsyncData(() => queryCollection('character').first())

    let ctx

    onMounted(() => {
        ctx = gsap.context(() => {
            gsap.from('main', {  opacity: 0, stagger: 0.1 })
        })
    })

    onUnmounted(() => {
        ctx.revert()
    })

    useSeoMeta({
        title: '原創角色'
    })
</script>

<template>
    <main style="padding: 5vw;">
        <h1>原創角色</h1>
        <p style="margin-top: 60px; font-family: Noto Sans TC; letter-spacing: 1px;">準備中，敬請期待...</p>
        <div class="gallery">
            <img v-for="image in data.gallery" :src="image" alt="">
        </div>
    </main>
</template>

<style>
    .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    }

    .gallery img {
        width: 100%;
    }

    @media (max-width: 800px) {
        .gallery {
            grid-template-columns: 1fr;
        }
    }
</style>