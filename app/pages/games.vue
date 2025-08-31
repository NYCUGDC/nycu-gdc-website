<script setup>
    import { gsap } from 'gsap'

    const { data } = await useAsyncData(() => queryCollection('games').order('date', 'DESC').all())
    
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
            <GameBlock v-for="game in data" :link="game.link" :name="game.name" :date="game.date" :description="game.description" :img="game.image" />
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