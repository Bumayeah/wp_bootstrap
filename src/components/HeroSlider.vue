<script setup lang="ts">
interface Slide {
  image: string
  position?: string
}

defineProps<{
  slides: Slide[]
  heading: string
  description?: string
  cta?: { text: string; href: string }
  theme?: string
}>()
</script>

<template>
  <section class="position-relative min-vh-100 py-5" :data-bs-theme="theme ?? 'light'">
    <!-- Background image slider -->
    <div
      class="swiper swiper-scale-effect position-absolute top-0 start-0 w-100 h-100"
      data-swiper-options='{
        "effect": "fade",
        "speed": 800,
        "autoplay": {
          "delay": 7000,
          "disableOnInteraction": false
        },
        "pagination": {
          "el": ".swiper-pagination",
          "clickable": true
        }
      }'
    >
      <div class="swiper-wrapper">
        <div v-for="slide in slides" :key="slide.image" class="swiper-slide">
          <div
            class="swiper-slide-cover"
            :class="slide.position ?? 'bg-position-top-center'"
            :style="`background-image: url(${slide.image})`"
          ></div>
        </div>
      </div>
      <div class="swiper-pagination mb-4"></div>
    </div>

    <!-- Content -->
    <div class="container position-relative z-2 py-lg-3 py-xl-5 my-5">
      <div class="row pt-md-3 py-xxl-5 my-5">
        <div class="col-12 col-md-9 py-5 mb-md-4 mb-lg-5 px-5 position-relative">
          <div
            class="rounded-5 bg-dark opacity-40 position-absolute start-0 top-0 bottom-0 end-0 zindex-1"
          ></div>
          <div class="position-relative z-10">
            <h1 class="display-1 text-uppercase mb-4">{{ heading }}</h1>
            <p
              v-if="description"
              class="d-block text-white fs-xl pb-2 mb-4 mb-md-5"
              style="max-width: 500px"
            >
              {{ description }}
            </p>
            <div v-if="cta" class="position-relative d-inline-flex align-items-center">
              <a class="btn btn-lg btn-primary" :href="cta.href">{{ cta.text }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
