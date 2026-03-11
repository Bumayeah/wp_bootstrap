<script setup lang="ts">
interface Feature {
  icon: string
  title: string
  description: string
  bgImage: string
}

interface CtaCard {
  title: string
  description: string
  buttonText: string
  buttonHref?: string
  decorImage?: string
}

const props = defineProps<{
  heading: string
  description: string
  features: Feature[]
  cta?: CtaCard
  sliderId?: string
}>()

const id = props.sliderId ?? 'features'
</script>

<template>
  <section class="pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
    <div class="container pt-2 pt-sm-4 pt-lg-5 mt-md-3 mt-lg-0">
      <div class="row pb-3 mb-3 mb-lg-4">
        <div class="col-lg-11 d-sm-flex justify-content-between text-center text-sm-start">
          <h2 class="h1 mb-sm-0 mx-auto me-sm-4" style="max-width: 440px">{{ heading }}</h2>
          <p class="pt-2 mb-0 mx-auto" style="max-width: 420px">{{ description }}</p>
        </div>
      </div>
    </div>

    <div class="container-start pe-0">
      <div
        class="swiper"
        :data-swiper-options="`{
          &quot;slidesPerView&quot;: &quot;auto&quot;,
          &quot;spaceBetween&quot;: 24,
          &quot;loop&quot;: true,
          &quot;navigation&quot;: {
            &quot;prevEl&quot;: &quot;#prev-${id}&quot;,
            &quot;nextEl&quot;: &quot;#next-${id}&quot;
          }
        }`"
      >
        <div class="swiper-wrapper">
          <!-- Feature cards -->
          <div v-for="feature in features" :key="feature.title" class="swiper-slide w-auto h-auto">
            <div class="card border-0 bg-secondary card-hover h-100 py-4" style="max-width: 306px">
              <div
                class="opacity-0 position-absolute top-0 start-0 w-100 h-100 bg-size-cover bg-position-center rounded-5"
                :style="`background-image: url(${feature.bgImage})`"
              ></div>
              <div class="card-body text-center">
                <i :class="`ai-${feature.icon} h1 fw-normal text-primary d-block mb-4`"></i>
                <h3>{{ feature.title }}</h3>
                <p class="card-text">{{ feature.description }}</p>
              </div>
            </div>
          </div>

          <!-- Optional CTA card -->
          <div v-if="cta" class="swiper-slide w-auto h-auto">
            <div class="card border-0 bg-primary card-hover h-100 py-4" style="max-width: 306px">
              <img
                v-if="cta.decorImage"
                class="position-absolute top-0 start-0"
                :src="cta.decorImage"
                width="306"
                alt="Decor"
              />
              <div class="card-body position-relative z-2 text-center">
                <h3 class="text-white">{{ cta.title }}</h3>
                <p class="text-white fs-sm">{{ cta.description }}</p>
                <a class="btn btn-light text-primary" :href="cta.buttonHref ?? '#'">
                  {{ cta.buttonText }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Slider controls -->
      <div class="container d-flex justify-content-center justify-content-sm-end pt-3 mt-3 mt-lg-4">
        <button
          class="btn btn-icon btn-sm btn-outline-primary rounded-circle me-3"
          type="button"
          :id="`prev-${id}`"
          aria-label="Prev"
        >
          <i class="bi bi-arrow-left"></i>
        </button>
        <button
          class="btn btn-icon btn-sm btn-outline-primary rounded-circle"
          type="button"
          :id="`next-${id}`"
          aria-label="Next"
        >
          <i class="bi bi-arrow-right"></i>
        </button>
      </div>
    </div>
  </section>
</template>
