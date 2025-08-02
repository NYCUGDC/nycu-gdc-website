<script setup>
    let showMenu = ref(false)

    function toggleMenu() {
        showMenu.value = !showMenu.value
    }
</script>

<template>
    <header>
        <NuxtLink class="button" to="/" style="color: unset; text-decoration: none; flex: 0 0 310px;">
            <div style="font: 400 12px 'Press Start 2P'; margin-bottom: 15px; color: var(--blue)">NYCU GAME DESIGN CLUB</div>
            <div style="display: flex; gap: 15px; align-items: center;">
                <img src="/icon.png" alt="" style="image-rendering: pixelated; width: 55px; height: 55px; border-radius: 10px;">
                <h1>
                    <div style="font: 400 12px Noto Sans TC; letter-spacing: 3px;">陽明交通大學</div>
                    <div style="font: 700 28px Noto Sans TC; letter-spacing: 3px; margin-left: -2px;">遊戲設計社</div>
                </h1>
            </div>
        </NuxtLink>
        <div style="flex: 1;"></div>
        <nav :data-show="showMenu" @click="showMenu = false">
            <NuxtLink class="button" to="/" :data-highlight="$route.path == '/'">
                <div class="button-text-1">Home</div>
                <div class="button-text-2">主頁</div>
            </NuxtLink>
            <NuxtLink class="button" to="/about" :data-highlight="$route.path.startsWith('/about')">
                <div class="button-text-1">About</div>
                <div class="button-text-2">關於</div>
            </NuxtLink>
            <NuxtLink class="button" to="/news" :data-highlight="$route.path.startsWith('/news')">
                <div class="button-text-1">News</div>
                <div class="button-text-2">最新消息</div>
            </NuxtLink>
            <NuxtLink class="button" to="/library" :data-highlight="$route.path.startsWith('/library')">
                <div class="button-text-1">Library</div>
                <div class="button-text-2">資料</div>
            </NuxtLink>
            <NuxtLink class="button" to="/games" :data-highlight="$route.path.startsWith('/games')">
                <div class="button-text-1">Games</div>
                <div class="button-text-2">遊戲作品</div>
            </NuxtLink>
            <NuxtLink class="button" to="/character" :data-highlight="$route.path.startsWith('/character')">
                <div class="button-text-1">Character</div>
                <div class="button-text-2">原創角色</div>
            </NuxtLink>
        </nav>
        <div id="menu-button" @click="toggleMenu"></div>
    </header>
</template>

<style>
    header {
        display: flex;
        background: var(--gray);
        padding: 15px 5vw;
        align-items: flex-end;
        gap: 30px;
        position: sticky;
        top: 0;
        z-index: 1;
        border-bottom: 2px solid #fafafa;
    }
    
    header h1 {
        line-height: 1;
        margin: 0;
    }

    nav {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
    }

    nav .button {
        display: block;
        padding-left: 36px;
        color: unset;
        text-decoration: none;
        position: relative;
        margin-bottom: 3px;
    }

    nav .button[data-highlight='false'] {
        color: var(--dark);
    }

    nav .button::after {
        content: '';
        position: absolute;
        width: 12px;
        height: 18px;
        background: var(--orange);
        left: 15px;
        top: 3px;
        clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
        visibility: hidden;
    }

    nav .button:hover::after {
        visibility: visible;
    }

    nav .button-text-1 {
        font: 400 15px 'Press Start 2P';
    }

    nav .button-text-2 {
        font: 400 12px Noto Sans TC;
        letter-spacing: 5px;
    }

    #menu-button {
        position: fixed;
        top: 0;
        right: 0;
        width: 60px;
        height: 60px;
        background: var(--orange);
        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px;
        z-index: 2;
    }

    #menu-button::before, #menu-button::after {
        content: '';
        display: block;
        width: 30px;
        height: 3px;
        background: #ffffff;
    }

    @media (max-width: 800px) {
        #menu-button {
            display: flex;
        }

        nav {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            flex-direction: column;
            background: #ffffff;
            z-index: 1;
            padding: 30px;
            pointer-events: none;
            gap: 20px;
            transition-duration: 0.5s;
            transform: translateX(100%);
        }

        nav[data-show='true'] {
            pointer-events: all;
            transform: translateX(0%);
        }
    }
</style>