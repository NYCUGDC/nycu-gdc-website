<script setup>
    import { gsap } from 'gsap'
    
    const path = useRoute().path
    const { data } = await useAsyncData(path, () => queryCollection('news').path(path).first())

    let ctx

    onMounted(() => {
        ctx = gsap.context(() => {
            gsap.from('main h1, main h2, #news', { y: 60, opacity: 0, stagger: 0.1 })
        })
    })

    onUnmounted(() => {
        ctx.revert()
        console.log
    })

    useSeoMeta({
        title: '最新消息'
    })
</script>

<template>
    <main style="padding: 5vw;">
        <NuxtLink to="/news" style="color: var(--orange); text-decoration: none; padding: 2px 10px; background: var(--gray); border-radius: 10px; font: 400 12px Noto Sans TC;">最新消息</NuxtLink>
        <h1>{{ data.title }}</h1>
        <h2>{{ data.date }}</h2>
        <ContentRenderer :value="data" id="news"/>
    </main>
</template>

<style>
    #news p {
        font: 400 15px Noto Sans TC;
        line-height: 2;
        letter-spacing: 1px;
        color: var(--dark);
    }
</style>