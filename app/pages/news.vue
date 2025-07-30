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
        title: '最新消息'
    })
</script>

<template>
    <main style="padding: 5vw;">
        <h1>最新消息</h1>
        <section style="display: flex; flex-direction: column; gap: 15px;">
            <LinkBlock link="https://forms.gle/WBncoqgTAm56ygKH8" name="NYCU GDC • 活動三｜NYCU Game Jam 第0屆" date="2025-06-14" />
            <LinkBlock link="https://forms.gle/6RMwnjFkNNshYvF37" name="NYCU GDC • 活動二｜遊戲製作接龍" date="2025-04-26" />
            <LinkBlock link="https://forms.gle/2cqJryFGp3Pe35776" name="NYCU GDC • 活動一｜VR遊戲體驗會" date="2025-03-22" />
            <LinkBlock name="社團連署已達標!!" date="2025-02-24" />
        </section>
    </main>
</template>

<style>
</style>