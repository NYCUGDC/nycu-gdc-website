<script setup>
    import { gsap } from 'gsap'
    
    let ctx

    onMounted(() => {
        ctx = gsap.context(() => {
            gsap.to('#text-animation > div', { x: -document.querySelector('#text-animation > div > div').clientWidth - 90, repeat: -1, ease: 'none', duration: 10 })
        })
    })

    onUnmounted(() => {
        ctx.revert()
    })
</script>

<template>
    <footer>
        <img src="/logo_gray.png" alt="" style="position: absolute; bottom: 160px; right: 10vw; width: max(50vw, 300px); transform: rotate(9deg); z-index: -1;">
        <div id="text-animation">
            <div style="white-space: nowrap;">
                <div>Fun to Play, Play to Live, Live for Fun</div>
                <div>Fun to Play, Play to Live, Live for Fun</div>
                <div>Fun to Play, Play to Live, Live for Fun</div>
            </div>
        </div>
        <div id="footer-content">
            <div>NYCU GDC 陽明交通大學遊戲設計社</div>
            <div id="footer-links">
                <NuxtLink to="https://www.facebook.com/NYCUGDC">Facebook</NuxtLink>
                <NuxtLink to="https://www.instagram.com/nycu_gdc/">Instagram</NuxtLink>
                <NuxtLink to="https://discord.gg/7tUWM2Dj53">Discord</NuxtLink>
                <NuxtLink to="https://nycu-gdc.itch.io/">itch.io</NuxtLink>
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
        background: var(--gray);
        color: #ffffff;
        border-top: 2px solid;
        font: 400 24px 'Press Start 2P';
        padding: 36px 0px;
    }

    #text-animation > div > div {
        display: inline-block;
        margin-right: 90px;
    }

    #footer-content {
        color: #ffffff;
        font: 700 15px Noto Sans Tc;
        letter-spacing: 1px;
        background: var(--orange);
        padding: 30px 5vw;
    }

    #footer-links {
        margin-top: 10px;
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }

    #footer-links a {
        font-size: 12px;
        font-weight: 400;
        color: #ffffff
    }
</style>