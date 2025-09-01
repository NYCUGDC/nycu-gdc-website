<script setup>
    import { gsap } from 'gsap'

    const { data } = await useAsyncData(() => queryCollection('news').order('date', 'DESC').select('title', 'date', 'path').all())
    
    let ctx

    onMounted(() => {
        ctx = gsap.context(() => {
            gsap.from('.link-block', { y: 60, opacity: 0, stagger: 0.1 })
        })
    })

    onUnmounted(() => {
        ctx.revert()
    })

    useSeoMeta({
        title: '最新消息'
    })
</script>

<template>
    <main style="padding: 5vw;">
        <h1>最新消息</h1>
        <section style="display: flex; flex-direction: column; gap: 15px;">
            <LinkBlock v-for="news in data" :link="news.path" :name="news.title" :date="news.date" />
        </section>
    </main>
</template>

<style>
</style>