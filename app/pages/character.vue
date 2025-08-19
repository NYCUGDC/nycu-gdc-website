<script setup>
    import { gsap } from 'gsap'
    
    const { data } = await useAsyncData(() => queryCollection('character').first())

    let ctx

    onMounted(() => {
        ctx = gsap.context(() => {
            gsap.from('article', { y: 60, opacity: 0, stagger: 0.1 })
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
        <h1>原創角色</h1>
        <p v-if="!data || !data.gallery || data.gallery.length === 0" style="margin-top: 60px; font-family: Noto Sans TC; letter-spacing: 1px;">準備中，敬請期待...</p>
        <div v-else class="gallery">
            <article v-for="(character, i) in data.gallery" :key="character.name" class="w-2/3" :class="i % 2 === 0 ? 'justify-self-start' : 'justify-self-end'">
                <div class="character-split-view">
                    <img :src="character.image" :alt="character.name"></img>
                    <div style="padding: 10px;">
                        <h1>{{ character.name }}</h1>
                        <p style="font: 400 15px Noto Sans TC; color: var(--dark); white-space: pre-wrap;">{{ character.description }}</p>
                    </div>
                </div>
            </article>
        </div>
    </main>
</template>

<style>
    .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(900px, 1fr));
        gap: 20px;
    }

    .gallery img {
        width: 100%;
        border-radius: 5px;
    }

    .character-split-view {
        display: grid;
        grid-template-columns: 1fr 1fr;
        background: var(--gray);
        overflow: hidden;
        border-radius: 10px;
        gap: 10px;
        padding: 10px;
    }

    @media (max-width: 800px) {
        .gallery {
            grid-template-columns: 1fr;
        }

        .character-split-view {
            grid-template-columns: 1fr;
        }
    }
</style>