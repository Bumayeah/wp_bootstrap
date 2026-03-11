<script setup lang="ts">
defineProps<{
  label?: string
  heading: string
  cta: { text: string; href: string }
  image: { src: string; width?: number; alt?: string }
  bgImage?: { src: string; width?: number; alt?: string }
  color?: string
}>()
</script>

<template>
  <section class="container pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
    <div :class="`bg-${color ?? 'primary'} rounded-5 overflow-hidden mt-2 mt-sm-4 mt-lg-5`">
      <img
        v-if="bgImage"
        class="position-absolute top-50 start-0 translate-middle-y d-none d-md-block"
        :src="bgImage.src"
        :width="bgImage.width"
        :alt="bgImage.alt ?? ''"
      />
      <div class="row position-relative z-2 align-items-center">
        <div class="col-md-6 col-lg-5 offset-lg-1">
          <div class="text-center text-md-start py-5 px-4 px-sm-5 pe-md-0 ps-lg-4 ps-xl-5">
            <div
              v-if="label"
              class="d-flex align-items-center justify-content-center justify-content-md-start mb-2"
            >
              <span
                class="bg-white opacity-70 me-2 d-none d-md-block"
                style="width: 40px; height: 1px; margin-top: -1px"
              ></span>
              <span class="fs-xs fw-semibold text-white opacity-70 text-uppercase">{{
                label
              }}</span>
            </div>
            <h2 class="h1 text-white pb-2 pb-sm-3">{{ heading }}</h2>
            <a class="btn btn-outline-light fs-base" :href="cta.href">{{ cta.text }}</a>
          </div>
        </div>
        <div class="col-md-6">
          <img
            class="d-block mx-auto mx-md-0 mt-n4 mt-md-0 w-100 background-cover"
            :src="image.src"
            :width="image.width"
            :alt="image.alt ?? ''"
          />
        </div>
      </div>
    </div>
  </section>
</template>
