<script setup>
    import { gsap } from 'gsap'
    
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
        title: '資料'
    })
</script>

<template>
    <main style="padding: 5vw;">
        <h1>文檔</h1>
        <section style="display: flex; flex-direction: column; gap: 15px;">
            <h2>GDC 暑期角色專案</h2>
            <LinkBlock link="" name="Check Point 1" date="2025" />
            <LinkBlock link="" name="Check Point 2" date="2025" />
            <LinkBlock link="" name="Check Point 3" date="2025" />
            <LinkBlock link="" name="像素風格簡介" date="2025" />
        </section>
    </main>
</template>

<style>
</style>