<script setup>
    import { gsap } from 'gsap'

    const { data } = await useAsyncData(() => queryCollection('committee').first())

    const images = [
    '/114-1-about.png',
    '/114-1-about-2.png',
    '/114-1-about-3.jpg',
    ]
    const alts = ['關於本社團 1', '關於本社團 2', '關於本社團 3']
    
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
        <br>
        <!-- <img src="/114-1-about.png" alt="" style="display:block; margin:0 auto; width: 1000px; height: 100%; object-fit: fill; border-radius: 10px;"> -->
        <Carousel :images="images" :alts="alts" :autoplayMs="4000" aspect="16/9" />
        <p style="text-align: center; font-size: 30px; margin: 90px 0;">"Fun to Play, Play to Live, Live for Fun"</p>
        <section style="margin-bottom: 120px;">
            <h2>社課內容</h2>
            <div class="grid">
                <div>
                    <h3>Unity2D 基礎課程</h3>
                    <p><b>講師：</b><a href="https://www.youtube.com/@remptygame">阿空 @remptygame</a></p>
                    <p><b>時間：</b>每週二 18:30 ~ 21:30</p>
                    <p><b>地點：</b>EAB06 工程一館創意溫室</p>
                    <p><b>學員：</b>實體30人、線上不限。有熱忱為主！需自備電腦。</p>
                    <p><b>形式：</b>線上同步實體教室授課、搭配教務幹部協助</p>
                    <p><b>週次：</b>共9週授課 + 1週Showcase活動 (期中期末各休息兩週)</p>
                    <p><b>特色：</b>零基礎導向、附章節講義及影片留檔、課程Discord、課後解惑表單</p>
                    <p>前半課程以2D平台遊戲為主題，教學Unity引擎基本功能及操作，製作出一個完整遊戲。後半課程為教學進階組件、分組製作遊戲專案 與 講師回饋。</p>
                </div>
                <div>
                    <h3>Unity3D 進階課程</h3>
                    <p><b>講師：</b><span style="color: blue;">社長.Brian / 副社長.Johnson</span></p>
                    <p><b>時間：</b>每週三 18:30 ~ 21:30</p>
                    <p><b>地點：</b>(暫定) 人社一館 101 </p>
                    <p><b>學員：</b>實體30人，依場地大小為主。有熱誠為主！需自備電腦、具基礎Unity操作及C#編寫。</p>
                    <p><b>形式：</b>實體教室授課為主</p>
                    <p><b>週次：</b>共9週授課 + 1週Showcase活動 (期中期末各休息兩週)</p>
                    <p><b>特色：</b>進階導向、Team Project、附章節講義及影片留檔、課程Discord</p>
                    <p>團隊遊戲製作、於第一週進行分組活動。使用 Unity 6000.0 教學單元式進階內容，包含Input Systems、Terrian&Water、Networking、AI Tree、VFX Shader、Profiling等等。</p>
                </div>
                <div>
                    <h3>Blender 3D 場景設計課程</h3>
                    <p><b>講師：</b><a href="https://www.artstation.com/hugie">虎奇 Hugie LI</a></p>
                    <p><b>時間：</b>每週五 18:30 ~ 21:30</p>
                    <p><b>地點：</b>EA101 工程一館共創基地</p>
                    <p><b>學員：</b>實體30人(線上+實體)。有熱忱為主！需自備電腦、不限背景。</p>
                    <p><b>形式：</b>線上同步實體教室授課、搭配教務幹部協助</p>
                    <p><b>週次：</b>共9週授課 + 1週Showcase活動 (期中期末各休息兩週)</p>
                    <p><b>特色：</b>零基礎導向、附章節講義及YT留檔、課程Discord、課後小作業</p>
                    <p>從快捷鍵、介面操作，到插件、建模、構圖與渲染，手把手讓你熟悉Blender軟體實作、專業老師帶你訓練設計美感，最後完成一張高完成度的3D場景作品。</p>
                </div>
            </div>
        </section>
        <section style="margin-bottom: 120px;">
            <h2>活動內容</h2>
            <div class="grid">
                <div>
                    <h3>VR體驗會</h3>
                    <p>現場體驗 Quest3、Apple Vision Pro 等最新頭顯裝置，遊玩最夯VR遊戲、並有競賽排行、提供飲食。</p>
                    <p><b>時間：</b>時長一個晚上。預計10月初</p>
                    <p><b>地點：</b>EC028 工程三館地下一樓</p>
                    <p><b>費用：</b>$150/人。社員可折抵50元。可額外使用折抵券。</p>
                    <p><b>遊戲：</b>包含Beat Saber、Attack on Titan等等。</p>
                </div>
                <div>
                    <h3>遊戲製作接龍 (Game Chain)</h3>
                    <p>接龍式遊戲創作、並於每階段抽選遊戲添增要素。體驗短時間內與他人合作，並短期創作出成品的過程！</p>
                    <p><b>時間：</b>時長一整天。預計11月中旬</p>
                    <p><b>地點：</b>EC028 工程三館地下一樓</p>
                    <p><b>費用：</b>免費！提供簡單飲食！</p>
                </div>
                <div>
                    <h3>NYCU Game Jam</h3>
                    <p>給定主題下，整整兩日的即興團隊遊戲創作！短時間的角色分工合作、體驗跨夜做遊戲的快感，更有設立成就系統供參加者挑戰！</p>
                    <p><b>時間：</b>時長兩日。預計12月下旬</p>
                    <p><b>地點：</b>EC028 工程三館地下一樓</p>
                    <p><b>費用：</b>免費！提供飲食！</p>
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
            <div>
                <h2>社群平台</h2>
                <p>我們的 <a href="https://discord.gg/7tUWM2Dj53">Discord 社群</a> 設有多種遊戲相關領域的討論區，歡迎遊戲創作同好一起交流不同的技術與製作心得！</p>
                <p><b>IG粉絲專頁：</b><a href="https://www.instagram.com/nycu_gdc/">連結</a>、
                <b>FB粉絲團：</b><a href="https://www.facebook.com/NYCUGDC">連結</a></p>
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
        margin-bottom: 10px;
    }

    #about .grid p {
        color: var(--dark);
        font-size: 12px;
    }

    #committees {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
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
        gap: 60px;
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