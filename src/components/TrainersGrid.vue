<script setup lang="ts">
interface Trainer {
  name: string
  role: string
  image: string
  href?: string
}

defineProps<{
  heading?: string
  trainers: Trainer[]
}>()
</script>

<template>
  <section class="container pb-2 pb-sm-3 pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
    <h2 v-if="heading" class="h1 text-center pt-2 pt-sm-4 pt-lg-5 pb-2 mb-3 mb-lg-4 mt-md-3 mt-lg-0">
      {{ heading }}
    </h2>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      <div v-for="trainer in trainers" :key="trainer.name" class="col text-center pt-2">
        <a class="card-hover card-lifted d-inline-block text-decoration-none" :href="trainer.href ?? '#'">
          <img
            class="card-lifted d-block rounded-5 mb-3"
            :src="trainer.image"
            width="340"
            :alt="trainer.name"
          />
          <h3 class="h5 mb-1">{{ trainer.name }}</h3>
          <p class="mb-0 text-body-secondary">{{ trainer.role }}</p>
        </a>
      </div>
    </div>
  </section>
</template>
