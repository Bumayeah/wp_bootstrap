<script setup lang="ts">
interface GalleryImage {
  src: string
  href?: string
  alt?: string
}

defineProps<{
  heading: string
  accountLabel?: string
  accountUrl?: string
  images: GalleryImage[]
}>()

// Fixed alternating col widths for the left 2×2 grid
const colWidths = [5, 7, 7, 5]
</script>

<template>
  <section class="position-relative pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
    <div
      class="bg-secondary position-absolute start-0 bottom-0 w-100 d-none d-sm-block"
      style="height: 110px"
    ></div>
    <div
      class="bg-secondary position-absolute start-0 bottom-0 w-100 d-sm-none"
      style="height: 80px"
    ></div>

    <div class="container position-relative z-2 pt-2 pt-sm-4 pt-lg-5 mt-md-2 mt-lg-0">
      <h2 class="h1 text-center pb-3 mb-3 mb-lg-4">
        {{ heading }}
        <a v-if="accountUrl" :href="accountUrl" class="text-primary text-decoration-none">{{
          accountLabel ?? 'Instagram'
        }}</a>
      </h2>

      <div class="row g-4">
        <!-- Left 2×2 grid (first 4 images) -->
        <div class="col-md-8">
          <div class="row g-3 g-sm-4">
            <div
              v-for="(img, index) in images.slice(0, 4)"
              :key="img.src"
              :class="`col-${colWidths[index]}`"
            >
              <a class="d-block card-hover zoom-effect" :href="img.href ?? '#'">
                <div
                  class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-5 overflow-hidden z-2 opacity-0"
                >
                  <i class="bi bi-instagram lead text-white position-relative z-2"></i>
                  <div
                    class="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-25"
                  ></div>
                </div>
                <div class="zoom-effect-wrapper rounded-5">
                  <img class="zoom-effect-img" :src="img.src" :alt="img.alt ?? 'Instagram image'" />
                </div>
              </a>
            </div>
          </div>
        </div>

        <!-- Right featured image (5th image, desktop only) -->
        <div v-if="images[4]" class="col-md-4 d-none d-md-block">
          <a class="d-block card-hover zoom-effect" :href="images[4].href ?? '#'">
            <div
              class="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-5 overflow-hidden z-2 opacity-0"
            >
              <i class="bi bi-instagram lead text-white position-relative z-2"></i>
              <div class="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-20"></div>
            </div>
            <div class="zoom-effect-wrapper rounded-5">
              <img
                class="zoom-effect-img"
                :src="images[4].src"
                :alt="images[4].alt ?? 'Instagram image'"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
