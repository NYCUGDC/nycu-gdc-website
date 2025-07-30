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
        title: '原創角色'
    })
</script>

<template>
    <main style="padding: 5vw;">
        <h1 style="margin-top: 200px;">準備中，敬請期待...</h1>
    </main>
</template>

<style>
</style>