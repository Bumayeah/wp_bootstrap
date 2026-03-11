<script setup lang="ts">
interface Feature {
  svg: string
  text: string
}

interface Plan {
  title: string
  description: string
  price: string
  priceNote: string
  ctaText?: string
}

defineProps<{
  heading: string
  description: string
  features: Feature[]
  plans: Plan[]
}>()
</script>

<template>
  <section class="pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
    <div class="container pt-2 pt-sm-4 pt-lg-5 mt-md-2">
      <div class="row">
        <!-- Sticky sidebar -->
        <div class="col-md-5 col-xl-4 mb-5 mb-md-0" style="margin-top: -125px">
          <div class="position-sticky top-0" style="padding-top: 125px">
            <h2 class="h1 pb-2 pb-lg-3">{{ heading }}</h2>
            <div class="row">
              <div class="col-md-10">
                <p class="mb-4">{{ description }}</p>
              </div>
            </div>
            <ul class="list-unstyled mb-0">
              <li
                v-for="(feature, index) in features"
                :key="index"
                class="d-flex align-items-center"
                :class="{ 'mb-3': index < features.length - 1 }"
              >
                <span
                  class="d-block flex-shrink-0 text-primary"
                  v-html="feature.svg"
                ></span>
                <div class="ps-2 ms-1">
                  <div class="text-nav fw-medium">{{ feature.text }}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- Pricing list -->
        <div class="col-md-7 offset-xl-1">
          <div class="ps-md-4 ps-xxl-5">
            <div
              v-for="(plan, index) in plans"
              :key="plan.title"
              class="card border-0 bg-secondary rounded-4 position-relative"
              :class="{ 'mb-3': index < plans.length - 1 }"
            >
              <div class="card-body d-sm-flex align-items-start text-center text-sm-start">
                <div class="w-100 pe-sm-4 mb-3 mb-sm-0" style="max-width: 27rem">
                  <h3 class="mb-2">{{ plan.title }}</h3>
                  <p class="fs-lg mb-0">{{ plan.description }}</p>
                </div>
                <div class="w-100 pe-sm-3 mx-auto me-sm-0 mb-3 mb-sm-0" style="max-width: 8rem">
                  <div class="h3 text-primary mb-0 mb-sm-2">{{ plan.price }}</div>
                  <span class="fs-sm">{{ plan.priceNote }}</span>
                </div>
                <button
                  class="btn btn-sm btn-outline-primary stretched-link w-100 w-sm-auto"
                  type="button"
                >
                  {{ plan.ctaText ?? 'Buy' }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
