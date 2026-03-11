<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface NavLink {
  label: string
  href: string
}

interface Cta {
  text: string
  href: string
  icon?: string
  target?: string
}

const props = defineProps<{
  brandName: string
  brandHref?: string
  logoSvg?: string
  navLinks?: NavLink[]
  cta?: Cta
  theme?: string
  fixed?: boolean
}>()

const navbarEl = ref<HTMLElement | null>(null)

function updateStuck() {
  if (!navbarEl.value) return
  navbarEl.value.classList.toggle('navbar-stuck', window.scrollY > 20)
}

onMounted(() => {
  if (props.fixed === false) return
  updateStuck()
  window.addEventListener('scroll', updateStuck, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateStuck)
})
</script>

<template>
  <header
    ref="navbarEl"
    class="navbar navbar-expand-lg"
    :class="fixed !== false ? 'fixed-top' : ''"
    :data-bs-theme="theme ?? 'light'"
  >
    <div class="container">
      <!-- Brand -->
      <a class="navbar-brand pe-sm-3" :href="brandHref ?? '#'">
        <span v-if="logoSvg" class="text-primary flex-shrink-0 me-2" v-html="logoSvg"></span>
        <span v-else class="text-primary flex-shrink-0 me-2">Logo</span>
        {{ brandName }}
      </a>

      <!-- Theme switcher -->
      <div
        class="form-check form-switch mode-switch order-lg-2 me-3 me-lg-4 ms-auto"
        data-bs-toggle="mode"
      >
        <input class="form-check-input" type="checkbox" id="theme-mode" />
        <label class="form-check-label" for="theme-mode">
          <i class="bi bi-sun fs-lg"></i>
        </label>
        <label class="form-check-label" for="theme-mode">
          <i class="bi bi-moon fs-lg"></i>
        </label>
      </div>

      <!-- CTA button -->
      <a
        v-if="cta"
        class="btn btn-primary btn-sm fs-sm order-lg-3 d-none d-sm-inline-flex"
        :href="cta.href"
        :target="cta.target"
        :rel="cta.target === '_blank' ? 'noopener' : undefined"
      >
        <i v-if="cta.icon" :class="`ai-${cta.icon} fs-xl me-2 ms-n1`"></i>
        {{ cta.text }}
      </a>

      <!-- Mobile toggler -->
      <button
        v-if="navLinks?.length"
        class="navbar-toggler ms-sm-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Nav links -->
      <div v-if="navLinks?.length" class="collapse navbar-collapse order-lg-1" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li v-for="link in navLinks" :key="link.label" class="nav-item">
            <a class="nav-link" :href="link.href">{{ link.label }}</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
