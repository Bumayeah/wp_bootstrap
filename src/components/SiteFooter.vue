<script setup lang="ts">
interface NavLink {
  label: string
  href: string
}

interface SocialLink {
  platform: string
  icon: string
  href: string
  ariaLabel?: string
}

defineProps<{
  brandName: string
  brandHref?: string
  logoSvg?: string
  navLinks?: NavLink[]
  socialLinks?: SocialLink[]
  copyright?: string
}>()
</script>

<template>
  <footer class="footer bg-secondary py-5">
    <div class="container pt-1 pt-sm-2 pt-md-3 pt-lg-4 pt-xl-5">
      <div class="border-bottom text-center pb-4">
        <a class="navbar-brand d-inline-flex text-nav py-0 mb-3 mb-md-4" :href="brandHref ?? '#'">
          <span v-if="logoSvg" class="text-primary flex-shrink-0 me-2" v-html="logoSvg"></span>
          <span>{{ brandName }}</span>
        </a>
        <ul v-if="navLinks?.length" class="nav justify-content-center py-1 pb-sm-2">
          <li v-for="link in navLinks" :key="link.label" class="nav-item">
            <a class="nav-link py-2 px-3 mx-1" :href="link.href">{{ link.label }}</a>
          </li>
        </ul>
      </div>
      <div class="d-sm-flex align-items-center justify-content-between pt-4 mt-2 mt-sm-0">
        <div
          v-if="socialLinks?.length"
          class="d-flex justify-content-center gap-3 order-sm-2 mb-4 mb-sm-0"
        >
          <a
            v-for="social in socialLinks"
            :key="social.platform"
            :class="`btn btn-icon btn-sm btn-secondary btn-${social.platform} rounded-circle`"
            :href="social.href"
            :aria-label="social.ariaLabel ?? social.platform"
          >
            <i :class="`bi bi-${social.icon}`"></i>
          </a>
        </div>
        <p v-if="copyright" class="nav fs-sm order-sm-1 justify-content-center mb-0">
          <span class="text-body-secondary">{{ copyright }}</span>
        </p>
      </div>
    </div>
  </footer>
</template>
