<script setup>
    import { gsap } from 'gsap'
    
    let ctx

    onMounted(() => {
        ctx = gsap.context(() => {
            gsap.to('#text-animation > div', { x: -1026, repeat: -1, ease: 'none', duration: 8 })
        })
    })

    onUnmounted(() => {
        ctx.revert()
    })
</script>

<template>
    <footer>
        <img src="/logo_gray.png" alt="" style="position: absolute; bottom: 60px; right: 10vw; width: max(50vw, 300px); transform: rotate(9deg); z-index: -1;">
        <div id="text-animation">
            <div style="white-space: nowrap;">
                <div>Fun to Play, Play to Live, Live for Fun</div>
                <div>Fun to Play, Play to Live, Live for Fun</div>
                <div>Fun to Play, Play to Live, Live for Fun</div>
            </div>
        </div>
    </footer>
</template>

<style>
    footer {
        position: relative;
        margin-top: 250px;
    }

    #text-animation {
        position: relative;
        overflow: hidden;
        background: var(--orange);
        color: white;
        font: 400 24px 'Press Start 2P';
        padding: 36px 0px;
    }

    #text-animation > div > div {
        display: inline-block;
        margin-right: 90px;
    }
</style>