<script setup>
    import { gsap } from 'gsap'
    import { ScrollTrigger } from 'gsap/ScrollTrigger'
    import Lenis from 'lenis'
    
    gsap.registerPlugin(ScrollTrigger)

    let lenis
    function update(time) {
        lenis.raf(time * 1000)
    }

    let ctx

    onMounted(() => {
        lenis = new Lenis()
        lenis.on('scroll', ScrollTrigger.update)
        gsap.ticker.add(update)
        gsap.ticker.lagSmoothing(0)
        
        ctx = gsap.context(() => {
            gsap.to('#loading', { opacity: 0, delay: 1 })
        })
    })

    onUnmounted(() => {
        ctx.revert()
        lenis.destroy()
        gsap.ticker.remove(update)
    })

    useHead({
        link: [
            { rel: 'icon', type: 'image', href: '/icon.png' }
        ]
    })

    useSeoMeta({
        lang: 'zh-tw',
        titleTemplate: titleChunk => (titleChunk? `${titleChunk} | NYCU GDC 遊戲設計社` : `NYCU GDC 遊戲設計社`),
        ogTitle: 'NYCU GDC 遊戲設計社',
        description: '陽明交大遊戲設計社（NYCU GDC），誠徵邀請對遊戲製作、虛擬實境、動畫/角色/場景建模有興趣的你 (不論科系)，在大學期間與夥伴一起玩遊戲、做遊戲！',
        ogDescription: '陽明交大遊戲設計社（NYCU GDC），誠徵邀請對遊戲製作、虛擬實境、動畫/角色/場景建模有興趣的你 (不論科系)，在大學期間與夥伴一起玩遊戲、做遊戲！',
        themeColor: '#ff9a00'
    })

    const route = useRoute()
    watch(() => route.path, () => lenis.scrollTo(0, { immediate: true, lock: true }))
</script>

<template>
    <NuxtLoadingIndicator color="#ff9a00" />
    <SiteHeader />
    <NuxtPage />
    <SiteFooter />
    <div id="loading">
        LOADING<span style="animation: loading 1.5s 0s infinite steps(1);">.</span><span style="animation: loading 1.5s 0.25s infinite steps(1);">.</span><span style="animation: loading 1.5s 0.5s infinite steps(1);">.</span>
    </div>
</template>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&family=Press+Start+2P&display=swap');

    :root {
        --orange: #ff9a00;
        --blue: #2cc2ff;
        --gray: #f4f4f4;
        --dark: #a3a3a3;
    }

    body {
        margin: 0;
        color: var(--orange);
        background: repeating-linear-gradient(90deg, transparent 0px, transparent 19px, var(--gray) 19px, var(--gray) 20px), repeating-linear-gradient(0deg, transparent 0px, transparent 19px, var(--gray) 19px, var(--gray) 20px);
        background: radial-gradient(var(--gray) 0px, var(--gray) 1px, transparent 2px);
        background-size: 20px 20px;
    }

    ::selection {
        background: var(--blue);
        color: #ffffff;
    }

    h1, h2, h3, p {
        font-family: Noto Sans TC;
    }

    #loading {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        background: var(--orange);
        color: #ffffff;
        pointer-events: none;
        display: flex;
        justify-content: center;
        align-items: center;
        font: 400 21px 'Press Start 2P';
        z-index: 3;
    }

    @keyframes loading {
        0% { opacity: 0; }
        50% { opacity: 1; }
        100% { opacity: 1; }
    }
</style>