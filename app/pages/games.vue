<script setup>
    import { gsap } from 'gsap'
    
    let ctx

    onMounted(() => {
        ctx = gsap.context(() => {
            gsap.from('.game-block', { y: 60, opacity: 0, stagger: 0.1 })
        })
    })

    onUnmounted(() => {
        ctx.revert()
    })

    useSeoMeta({
        title: '遊戲作品'
    })
</script>

<template>
    <main style="padding: 5vw;">
        <h1>遊戲作品</h1>
        <section id="games">
            <GameBlock link="" name="遊戲 1" date="2025" description="測試" img="/games/game1.png" />
            <GameBlock link="" name="遊戲 2" date="2025" description="測試" img="/games/game1.png" />
            <GameBlock link="" name="遊戲 3" date="2025" description="測試" img="/games/game1.png" />
        </section>
    </main>
</template>

<style>
    #games {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(390px, 1fr));
        gap: 15px;
    }

    @media (max-width: 800px) {
        #games {
            grid-template-columns: 1fr;
        }
    }
</style>