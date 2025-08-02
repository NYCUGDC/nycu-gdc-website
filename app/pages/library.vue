<script setup>
    import { gsap } from 'gsap'

    const { data } = await useAsyncData(() => queryCollection('library').all())
    
    let ctx

    onMounted(() => {
        ctx = gsap.context(() => {
            gsap.from('h2, .link-block', { y: 60, opacity: 0, stagger: 0.1 })
        })
    })

    onUnmounted(() => {
        ctx.revert()
    })

    useSeoMeta({
        title: '資料'
    })
</script>

<template>
    <main style="padding: 5vw;">
        <h1>資料</h1>
        <section v-for="section in data" style="display: flex; flex-direction: column; gap: 15px; margin-bottom: 120px;">
            <h2>{{ section.title }}</h2>
            <LinkBlock v-for="file in section.documents" :link="file.link" :name="file.title" :date="file.subtitle" target="_blank" />
        </section>
    </main>
</template>

<style>
</style>