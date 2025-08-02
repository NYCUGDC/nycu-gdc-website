<script setup>
    import { gsap } from 'gsap'

    const { data } = await useAsyncData(() => queryCollection('committee').first())
    
    let ctx

    onMounted(() => {
        ctx = gsap.context(() => {
            gsap.from('main > img, main > p, main > section', { y: 60, opacity: 0, stagger: 0.1 })
        })
    })

    onUnmounted(() => {
        ctx.revert()
    })

    useSeoMeta({
        title: '關於'
    })
</script>

<template>
    <main style="padding: 5vw;" id="about">
        <h1>關於本社團</h1>
        <img src="/about.jpg" alt="" style="width: 100%; height: 500px; object-fit: cover; border-radius: 10px;">
        <p style="text-align: center; font-size: 30px; margin: 90px 0;">"Fun to Play, Play to Live, Live for Fun"</p>
        <section style="margin-bottom: 120px;">
            <h2>活動內容</h2>
            <div class="grid">
                <div>
                    <h3>遊戲創作課程</h3>
                    <p>針對遊戲相關相關的專業領域（例如：遊戲引擎操作、3D 美術與 VR 開發等），提供完整社課內容。</p>
                </div>
                <div>
                    <h3>即興遊戲創作</h3>
                    <p>不定期舉辦實體的 Gamejam、遊戲接龍等活動並提供免費零食，讓大家能在愉快的氛圍中，體驗短時間內與他人合作，並短期創作出成品的過程。</p>
                </div>
                <div>
                    <h3>線上社群</h3>
                    <p>我們的 Discord 社群設有多種遊戲相關領域的討論區，歡迎遊戲創作同好一起交流不同的技術與製作心得！</p>
                </div>
            </div>
        </section>
        <section class="split-view" style="margin-bottom: 120px;">
            <div>
                <h2>社費</h2>
                <p>( 114-1 起 ) 一學期 300 元 / 人。三學期後終生免費。</p>
            </div>
            <div>
                <h2>活動參與費用</h2>
                <p>筆電設備自行攜帶、其餘吃喝由社費負擔。</p>
            </div>
        </section>
        <section style="margin-bottom: 120px;">
            <h2>幹部</h2>
            <div id="committees">
                <div v-for="committee in data.list">
                    <img :src="committee.image" alt="">
                    <div style="padding: 15px;">
                        <div style="font: 700 21px Noto Sans TC;">{{ committee.name }}</div>
                        <div style="font: 400 12px Noto Sans TC;">{{ committee.role }}</div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style>
    #about p {
        font: 400 15px Noto Sans TC;
        line-height: 2;
        letter-spacing: 1px;
    }

    #about .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 15px;
    }

    #about .grid > div {
        background: var(--gray);
        padding: 20px;
        border-radius: 10px;
    }

    #about .grid h3 {
        color: var(--blue);
    }

    #about .grid p {
        color: var(--dark);
        font-size: 12px;
    }

    #committees {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 15px;
    }

    #committees > div {
        background: var(--gray);
        border-radius: 10px;
        display: flex;
        overflow: hidden;
    }

    #committees > div > img {
        width: 80px;
        aspect-ratio: 1;
        object-fit: cover;
    }

    .split-view {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 800px) {
        #about .grid {
            grid-template-columns: 1fr;
        }

        .split-view {
            grid-template-columns: 1fr;
        }
    }
</style>