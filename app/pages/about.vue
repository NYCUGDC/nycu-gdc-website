<script setup>
    import { gsap } from 'gsap'
    
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
        title: '關於'
    })
</script>

<template>
    <main style="padding: 5vw;">
        <h1>關於本社團</h1>
        <h2>社費</h2>
        <p>( 114-1 起 ) 一學期 300 元 / 人。三學期後終生免費。</p>
        <h2>活動參與費用</h2>
        <p>筆電設備自行攜帶、其餘吃喝由社費負擔。</p>
        <h2>活動內容</h2>
        <p>Game Jam、遊戲體驗、遊戲接龍等</p>
    </main>
</template>

<style>
</style>