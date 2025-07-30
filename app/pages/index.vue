<script setup>
    import { gsap } from 'gsap'
    
    let ctx

    onMounted(() => {
        ctx = gsap.context(() => {
            gsap.from('.window', { y: 60, opacity: 0 })
        })
    })

    onUnmounted(() => {
        ctx.revert()
    })
</script>

<template>
    <main style="padding: 5vw;">
        <div class="window">
            <div style="background: var(--orange); padding: 10px 35px; font: 400 15px 'Press Start 2P'; color: #ffffff">HELLO WORLD!</div>
            <p>陽明交大遊戲設計社（NYCU GDC），誠徵邀請對遊戲製作、虛擬實境、動畫/角色/場景建模有興趣的你 (不論科系)，在大學期間與夥伴一起玩遊戲、做遊戲！</p>
            <div class="window-buttons">
                <NuxtLink id="link-button-1" to="https://discord.gg/7tUWM2Dj53" target="_blank">加入 Discord</NuxtLink>
                <NuxtLink id="link-button-2" to="https://linktr.ee/nycugdc" target="_blank">其他連結</NuxtLink>
            </div>
        </div>
    </main>
</template>

<style>
    .window {
        margin-top: 100px;
        max-width: 550px;
        border: 2px solid var(--orange);
        border-radius: 20px;
        overflow: hidden;
        background: #ffffff;
    }

    .window p {
        font: 400 18px Noto Sans TC;
        letter-spacing: 1px;
        color: var(--dark);
        line-height: 2;
        padding: 10px 35px;
    }

    #link-button-1 {
        text-decoration: none;
        display: inline-block;
        font: 700 15px Noto Sans TC;
        letter-spacing: 1px;
        color: #ffffff;
        background: var(--blue);
        border-radius: 30px;
        padding: 8px 30px;
        border: 2px solid var(--blue );
        transition-duration: 0.3s;
    }

    #link-button-2 {
        text-decoration: none;
        display: inline-block;
        font: 700 15px Noto Sans TC;
        letter-spacing: 1px;
        color: var(--blue);
        border-radius: 30px;
        padding: 8px 30px;
        border: 2px solid;
        transition-duration: 0.3s;
    }

    #link-button-1:hover, #link-button-2:hover {
        transform: scale(0.95);
    }

    .window-buttons {
        padding: 20px 35px;
        display: flex;
        justify-content: flex-end;
        gap: 10px;
    }

    @media (max-width: 800px) {
        .window p {
            padding: 15px;
        }

        .window-buttons {
            flex-direction: column;
            text-align: center;
        }
    }
</style>