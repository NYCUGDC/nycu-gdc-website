<template>
  <div class="carousel" @keydown.left.prevent="prev" @keydown.right.prevent="next" tabindex="0">
    <div class="viewport">
      <div class="track" :style="{ transform: `translateX(-${current * 100}%)` }">
        <div class="slide" v-for="(src, i) in images" :key="i">
          <img :src="src" :alt="alts?.[i] ?? `image-${i}`" />
        </div>
      </div>
    </div>

    <div class="dots">
      <button
        v-for="(_, i) in images"
        :key="i"
        class="dot"
        :class="{ active: i === current }"
        @click="go(i)"
        :aria-label="`Go to slide ${i+1}`"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = withDefaults(defineProps<{
  images: string[]
  alts?: string[]
  startIndex?: number
  autoplayMs?: number | null   // 例：4000；null/0 = 不自動播放
  aspect?: string              // CSS 比例，預設 '16/9'，可改 '4/3'、'21/9' 等
}>(), {
  startIndex: 0,
  autoplayMs: null,
  aspect: '16/9'
})

const current = ref(props.startIndex)
let timer: number | null = null

function go(i: number) { current.value = (i + props.images.length) % props.images.length }
function next() { go(current.value + 1) }
function prev() { go(current.value - 1) }

onMounted(() => {
  if (props.autoplayMs && props.autoplayMs > 0) {
    timer = window.setInterval(next, props.autoplayMs)
  }
})
onBeforeUnmount(() => { if (timer) clearInterval(timer) })

// 觸控滑動
// let startX = 0
// function onTouchStart(e: TouchEvent) { startX = e.touches[0].clientX }
// function onTouchEnd(e: TouchEvent) {
//   const dx = e.changedTouches[0].clientX - startX
//   if (Math.abs(dx) > 40) (dx < 0 ? next() : prev())
// }
</script>

<style scoped>
.carousel {
  width: min(1000px, 100%);
  margin: 0 auto 24px;
  border: 3px solid #000;
  border-radius: 24px/18px;   /* 膠囊形邊框 */
  position: relative;
  padding-bottom: 44px;       /* 圓點區 */
  background: #fff;
  outline: none;
}

.viewport {
  overflow: hidden;
  border-radius: 18px;
}

.track {
  display: flex;
  transition: transform 300ms ease;
  touch-action: pan-y;
}

.slide {
  min-width: 100%;
  display: grid;
  place-items: center;
  aspect-ratio: v-bind('aspect');  /* 由 props 控制比例 */
  background: #fff;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: contain;        /* 保比例不拉伸 */
  border-radius: 12px;
}

/* dots */
.dots {
  position: absolute;
  left: 0; right: 0; bottom: 10px;
  display: flex;
  justify-content: center;
  gap: 12px;
}

.dot {
  width: 12px; height: 12px;
  border-radius: 50%;
  border: 2px solid #000;
  background: transparent;
  cursor: pointer;
}
.dot.active { background: #000; }
</style>
