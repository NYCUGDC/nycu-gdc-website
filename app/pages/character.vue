<script setup>
    import { gsap } from 'gsap'
    import { ref } from 'vue'
    
    const { data } = await useAsyncData(() => queryCollection('character').first())

    let ctx

    const lightboxImage = ref('')
    const showLightbox = ref(false)

    function openLightbox(image) {
        lightboxImage.value = image
        showLightbox.value = true
    }

    function closeLightbox() {
        showLightbox.value = false
    }

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
        <div class="grid grid-cols-3 gap-8">
            <article v-for="(character, i) in data.gallery" :key="character.name">
                <div class="bg-gray-100">
                    <div class="relative">
                        <img :src="character.image" :alt="character.name" @click="openLightbox(character.image)" style="cursor: pointer;">
                        <span v-if="character.author" class="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                            作者: {{ character.author }}
                        </span>
                    </div>
                    <div style="padding: 10px;">
                        <h1>{{ character.name }}</h1>
                        <ul>
                            <li v-for="(desc, index) in character.description" :key="index" class="m-2">
                                <strong class="bg-amber-500 text-white p-1">{{ desc.label }}</strong> {{ desc.value }}
                            </li>
                        </ul>
                    </div>
                </div>
            </article>
        </div>
        <div v-if="showLightbox" class="lightbox" @click.self="closeLightbox">
            <span class="close" @click="closeLightbox">&times;</span>
            <img class="lightbox-content" :src="lightboxImage">
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

    .lightbox {
        position: fixed;
        z-index: 999;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .lightbox-content {
        max-width: 90vw;
        max-height: 90vh;
    }

    .close {
        position: absolute;
        top: 15px;
        right: 35px;
        color: #f1f1f1;
        font-size: 40px;
        font-weight: bold;
        cursor: pointer;
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