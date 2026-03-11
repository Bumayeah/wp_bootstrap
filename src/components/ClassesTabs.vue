<script setup lang="ts">
interface Feature {
  icon: string
  title: string
  description: string
}

interface ClassItem {
  id: string
  label: string
  image: string
  title: string
  description: string
  features: Feature[]
  cta?: { text: string; href: string }
}

defineProps<{
  heading?: string
  subheading?: string
  classes: ClassItem[]
}>()
</script>

<template>
  <section class="container pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
    <h2 v-if="heading" class="h1 text-center pt-2 pt-sm-3">{{ heading }}</h2>
    <p v-if="subheading" class="text-center pb-3 mb-3 mb-lg-4">{{ subheading }}</p>

    <!-- Nav tabs -->
    <ul
      class="nav nav-tabs flex-nowrap overflow-auto text-nowrap w-100 mx-auto pb-3 mb-3 mb-lg-4"
      role="tablist"
      style="max-width: 892px"
    >
      <li v-for="(item, index) in classes" :key="item.id" class="nav-item mb-0">
        <a
          class="nav-link"
          :class="{ active: index === 0 }"
          :href="`#${item.id}`"
          data-bs-toggle="tab"
          role="tab"
        >{{ item.label }}</a>
      </li>
    </ul>

    <!-- Tab content -->
    <div class="tab-content">
      <div
        v-for="(item, index) in classes"
        :key="item.id"
        class="tab-pane fade"
        :class="{ 'show active': index === 0 }"
        :id="item.id"
        role="tabpanel"
      >
        <div class="row align-items-lg-center">
          <div class="col-md-6 pb-4 pb-md-0 mb-2 mb-md-0">
            <img class="rounded-5" :src="item.image" :alt="item.label" />
          </div>
          <div class="col-md-6 col-lg-5 col-xl-4 offset-lg-1">
            <div class="ps-md-4 ps-lg-0">
              <h2 class="mb-xl-4">{{ item.title }}</h2>
              <p class="pb-3 mb-3 mb-xl-4">{{ item.description }}</p>
              <div class="row row-cols-2 g-4 pb-2 pb-xl-0 mb-4 mb-xl-5">
                <div v-for="feature in item.features" :key="feature.title" class="col">
                  <i :class="`ai-${feature.icon} d-block h2 text-primary fw-normal pb-2 mb-1`"></i>
                  <h3 class="h6 mb-2">{{ feature.title }}</h3>
                  <p class="fs-sm mb-0">{{ feature.description }}</p>
                </div>
              </div>
              <a
                v-if="item.cta"
                class="btn btn-primary w-100 w-sm-auto"
                :href="item.cta.href"
              >{{ item.cta.text }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
