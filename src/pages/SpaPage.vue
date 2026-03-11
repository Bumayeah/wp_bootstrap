<template>
  <!-- Page wrapper -->
  <main class="page-wrapper">
    <!-- Navbar -->
    <SiteNavbar
      brand-name="Tech Heroes"
      brand-href="index.html"
      fixed
      :logo-svg="logo"
      :nav-links="navLinks"
      :cta="{
        text: 'Buy now',
        href: '#',
        icon: 'cart',
        target: '_blank',
      }"
    />

    <!-- Hero slider -->
    <HeroSlider
      heading="Conference 2026"
      description="Fe+male Tech Heroes events and activities. Such as our mentoring sessions, dinners and conferences."
      :cta="{ text: 'Subscribe', href: '#' }"
      :slides="heroSlides"
    />

    <!-- Features slider -->
    <FeaturesSlider
      heading="Why attend Tech Heroes 2026"
      description="A full-day immersive conference packed with cutting-edge sessions, hands-on workshops and unmatched networking opportunities."
      slider-id="feature"
      :features="advantageFeatures"
      :cta="{
        title: 'Secure your spot today',
        description:
          'Limited seats available. Join 500+ tech professionals at the most inspiring conference of the year.',
        buttonText: 'Register now',
        buttonHref: '#',
      }"
    />

    <!-- Workshops (Tabs) -->
    <ClassesTabs
      heading="Our workshops"
      subheading="Hands-on sessions led by industry experts. Pick the track that fits your goals."
      :classes="workshops"
    />

    <!-- Speakers (Grid) -->
    <TrainersGrid heading="Meet our speakers" :trainers="speakers" />

    <!-- CTA -->
    <CtaBanner
      label="Early bird offer"
      heading="Register before April 1st and save 30%"
      :cta="{ text: 'Claim early bird ticket', href: '#' }"
      :image="{
        src: `${baseUrl}/assets/img/event/event-05.jpg`,
        width: 534,
        alt: 'Conference',
      }"
    />

    <!-- Pricing -->
    <PricingSection
      heading="Choose your ticket"
      description="Whether you join for one day or the full experience including dinner and hotel — there is a pass for every attendee."
      :features="pricingFeatures"
      :plans="pricingPlans"
    />

    <!-- Photo gallery -->
    <InstagramGallery
      heading="See more photos on"
      account-label="Instagram"
      account-url="#"
      :images="galleryImages"
    />
  </main>

  <!-- Footer -->
  <SiteFooter
    brand-name="Tech Heroes"
    brand-href="index.html"
    :logo-svg="logo"
    :nav-links="navLinks"
    :social-links="footerSocialLinks"
    copyright="© All rights reserved."
  />

  <!-- Back to top button -->
  <BackToTop />
</template>

<script setup lang="ts">
import ClassesTabs from '@/components/ClassesTabs.vue'
import HeroSlider from '@/components/HeroSlider.vue'
const baseUrl = import.meta.env.VITE_BASE_URL

const heroSlides = [
  { image: `${baseUrl}/assets/img/event/event-01.jpg` },
  { image: `${baseUrl}/assets/img/event/event-17.jpg` },
  { image: `${baseUrl}/assets/img/event/event-03.jpeg` },
]
import TrainersGrid from '@/components/TrainersGrid.vue'
import CtaBanner from '@/components/CtaBanner.vue'
import PricingSection from '@/components/PricingSection.vue'
import InstagramGallery from '@/components/InstagramGallery.vue'
import BackToTop from '@/components/BackToTop.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import FeaturesSlider from '@/components/FeaturesSlider.vue'
import SiteNavbar from '@/components/SiteNavbar.vue'

const advantageFeatures = [
  {
    icon: 'cpu',
    title: 'AI & Machine Learning',
    bgImage: `${baseUrl}/assets/img/tech/item-04.jpg`,
    description: 'Orci purus, in tellus sit bibendum scelerisque adipiscing venenatis.',
  },
  {
    icon: 'code',
    title: 'Live coding sessions',
    bgImage: `${baseUrl}/assets/img/tech/item-08.jpg`,
    description:
      'Non est nullam amet netus ut vitae, penatibus lacus a ut sed molestie lectus lobortis.',
  },
  {
    icon: 'network',
    title: 'Networking',
    bgImage: `${baseUrl}/assets/img/tech/item-12.jpg`,
    description: 'Nisi vestibulum quam amet, egestas aliquam cursus mauris dignissim tellus.',
  },
  {
    icon: 'cafe',
    title: 'Lounge & catering',
    bgImage: `${baseUrl}/assets/img/tech/item-16.jpg`,
    description:
      'Amet diam imperdiet nisi non eu, pharetra lorem amet, ac ut aliquam diam sed cras.',
  },
  {
    icon: 'award',
    title: 'Certificates',
    bgImage: `${baseUrl}/assets/img/tech/item-20.jpg`,
    description:
      'Non est nullam amet netus ut vitae, penatibus lacus a ut sed molestie lectus lobortis.',
  },
  {
    icon: 'cloud',
    title: 'Cloud & DevOps',
    bgImage: `${baseUrl}/assets/img/tech/item-24.jpg`,
    description:
      'Amet diam imperdiet nisi non eu, pharetra lorem amet, ac ut aliquam diam sed cras.',
  },
]

const logo = `<img src="${baseUrl}/logo.png" width="32">`

const navLinks = [
  { label: 'Workshops', href: '#' },
  { label: 'Speakers', href: '#' },
  { label: 'Schedule', href: '#' },
  { label: 'Tickets', href: '#' },
  { label: 'Contact', href: '#' },
]

const footerSocialLinks = [
  { platform: 'instagram', icon: 'instagram', href: '#', ariaLabel: 'Instagram' },
  { platform: 'facebook', icon: 'facebook', href: '#', ariaLabel: 'Facebook' },
  { platform: 'youtube', icon: 'youtube', href: '#', ariaLabel: 'YouTube' },
]

const galleryImages = [
  { src: `${baseUrl}/assets/img/event/event-06.jpg` },
  { src: `${baseUrl}/assets/img/event/event-07.jpg` },
  { src: `${baseUrl}/assets/img/event/event-09.jpg` },
  { src: `${baseUrl}/assets/img/event/event-10.jpg` },
  { src: `${baseUrl}/assets/img/event/event-08.jpg` },
]

const pricingFeatures = [
  {
    text: 'Access to all sessions & workshops',
    svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M11.9266 11.9488V7.48998C11.9266 7.22049 11.7181 7 11.4633 7C11.2085 7 11 7.22049 11 7.48998V12.1448C11 12.2673 11.0463 12.3898 11.139 12.4878L16.2124 15.853C16.305 15.951 16.4208 16 16.5367 16C16.6525 16 16.7683 15.951 16.861 15.853C17.0463 15.657 17.0463 15.363 16.861 15.167L11.9266 11.9488Z"/><path d="M12 1C5.92609 1 1 5.92609 1 12C1 18.0739 5.92609 23 12 23C18.0739 23 23 18.0739 23 12C23 5.92609 18.0739 1 12 1ZM12 22.0435C6.45217 22.0435 1.95652 17.5478 1.95652 12C1.95652 6.45217 6.45217 1.95652 12 1.95652C17.5478 1.95652 22.0435 6.45217 22.0435 12C22.0435 17.5478 17.5478 22.0435 12 22.0435Z"/></svg>`,
  },
  {
    text: 'Certificate of attendance included',
    svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M11 24C4.935 24 0 19.065 0 13C0 6.935 4.935 2 11 2C13.109 2 15.161 2.601 16.934 3.739C17.166 3.888 17.234 4.197 17.085 4.43C16.935 4.662 16.626 4.73 16.394 4.581C14.782 3.546 12.917 3 11 3C5.486 3 1 7.486 1 13C1 18.514 5.486 23 11 23C16.514 23 21 18.514 21 13C21 12.67 20.984 12.345 20.953 12.024C20.926 11.749 21.127 11.504 21.402 11.478C21.682 11.455 21.922 11.652 21.948 11.927C21.982 12.28 22 12.638 22 13C22 19.065 17.065 24 11 24Z"/><path d="M12.5002 15.2502C12.3723 15.2502 12.2442 15.2012 12.1462 15.1042L7.64625 10.6042C7.45125 10.4092 7.45125 10.0922 7.64625 9.89725C7.84125 9.70225 8.15825 9.70225 8.35325 9.89725L12.4992 14.0432L23.1462 3.39625C23.3412 3.20125 23.6583 3.20125 23.8533 3.39625C24.0483 3.59125 24.0483 3.90825 23.8533 4.10325L12.8532 15.1032C12.7562 15.2012 12.6282 15.2502 12.5002 15.2502Z"/></svg>`,
  },
  {
    text: 'Networking with 500+ tech professionals',
    svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23.479 10.9238C23.9514 10.4634 24.1181 9.78767 23.9144 9.15956C23.7101 8.53144 23.1781 8.08307 22.5245 7.98791L16.7134 7.14354C16.4659 7.1075 16.252 6.95227 16.1415 6.72784L13.5435 1.46216C13.2518 0.870571 12.6597 0.50293 11.9999 0.50293C11.3405 0.50293 10.7485 0.870571 10.4568 1.46216L7.85829 6.72784C7.74776 6.95227 7.53342 7.1075 7.28592 7.14354L1.47479 7.98839C0.821687 8.08307 0.289688 8.53144 0.0854429 9.15956C-0.118322 9.78767 0.0484385 10.4634 0.520845 10.9238L4.72541 15.0221C4.90467 15.197 4.98684 15.4489 4.94455 15.6949L3.95216 21.4825C3.84067 22.1327 4.10258 22.7772 4.6365 23.1655C5.16994 23.5543 5.86438 23.6047 6.44924 23.2967L11.6462 20.5641C11.8677 20.4478 12.1321 20.4478 12.3536 20.5641L17.551 23.2967C17.8048 23.4303 18.0797 23.4961 18.3531 23.4961C18.7083 23.4961 19.062 23.3851 19.3638 23.1655C19.8977 22.7772 20.1596 22.1327 20.0481 21.4825L19.0552 15.6954C19.013 15.4489 19.0951 15.1975 19.2744 15.0226L23.479 10.9238ZM18.1085 15.8578L19.1009 21.6449C19.1509 21.9362 19.0379 22.2144 18.7986 22.3884C18.5588 22.5619 18.2604 22.583 17.9985 22.4465L12.801 19.7135C12.5506 19.5823 12.2748 19.516 11.9999 19.516C11.725 19.516 11.4496 19.5823 11.1988 19.714L6.0023 22.4465C5.73943 22.583 5.44099 22.5619 5.20166 22.3884C4.96234 22.2144 4.84988 21.9366 4.89938 21.6449L5.89177 15.8578C5.98741 15.2994 5.80238 14.7294 5.39678 14.3344L1.19173 10.2356C0.979796 10.0289 0.90771 9.73769 0.9995 9.45655C1.09081 9.17494 1.32004 8.98174 1.61272 8.93897L7.42337 8.0946C7.9842 8.01338 8.4691 7.6616 8.71948 7.15315L11.318 1.88747C11.4487 1.62219 11.7039 1.46408 11.9994 1.46408C12.2955 1.46408 12.5502 1.62219 12.6814 1.88747L15.2798 7.15315C15.5302 7.6616 16.0146 8.01338 16.5755 8.0946L22.3866 8.93897C22.6793 8.98174 22.9085 9.17494 22.9998 9.45655C23.0911 9.73769 23.0195 10.0289 22.8076 10.2356L18.603 14.3339C18.1974 14.7294 18.0124 15.2989 18.1085 15.8578Z"/></svg>`,
  },
]

const pricingPlans = [
  {
    title: '1-day ticket',
    description: 'Full access to all sessions',
    price: '€149',
    priceNote: 'per person',
    ctaText: 'Register',
  },
  {
    title: '2-day ticket',
    description: 'Both conference days included',
    price: '€249',
    priceNote: 'per person',
    ctaText: 'Register',
  },
  {
    title: '2-day + conference dinner',
    description: 'Ticket + networking dinner on day one',
    price: '€329',
    priceNote: 'per person',
    ctaText: 'Register',
  },
  {
    title: 'Full experience',
    description: 'Ticket + dinner + hotel (2 nights)',
    price: '€549',
    priceNote: 'per person',
    ctaText: 'Register',
  },
]

const speakers = [
  {
    name: 'Alisa Black',
    role: 'AI Research Lead',
    image: `${baseUrl}/assets/img/people/female-01.jpg`,
  },
  {
    name: 'Michelle Yang',
    role: 'Cloud Architect @ Google',
    image: `${baseUrl}/assets/img/people/female-02.png`,
  },
  {
    name: 'Robert Fox',
    role: 'Founder, DevStream',
    image: `${baseUrl}/assets/img/people/man-01.png`,
  },
  {
    name: 'Jane Cooper',
    role: 'CTO, FinTech Innovations',
    image: `${baseUrl}/assets/img/people/female-03.png`,
  },
  {
    name: 'Cody Fisher',
    role: 'Open Source Advocate',
    image: `${baseUrl}/assets/img/people/man-02.png`,
  },
  {
    name: 'Jenny Wilson',
    role: 'Diversity in Tech Lead',
    image: `${baseUrl}/assets/img/people/female-04.png`,
  },
  {
    name: 'Annette Black',
    role: 'Security Engineer',
    image: `${baseUrl}/assets/img/people/female-05.png`,
  },
  {
    name: 'Ralph Edwards',
    role: 'DevOps & Platform Eng.',
    image: `${baseUrl}/assets/img/people/man-03.png`,
  },
]

const workshops = [
  {
    id: 'ai-ml',
    label: 'AI & ML',
    image: `${baseUrl}/assets/img/tech/item-05.jpg`,
    title: 'Artificial Intelligence & Machine Learning',
    description:
      'Purus magna lectus feugiat arcu tellus vitae urna neque, eu velit in vulputate sodales ut tellus amet lorem sit consectetur quisque justo laoreet proin.',
    features: [
      {
        icon: 'cpu',
        title: 'Hands-on demos',
        description: 'Neque, blandit consectetur viverra placerat ante.',
      },
      {
        icon: 'code',
        title: 'Live coding',
        description: 'Neque, blandit consectetur viverra placerat ante.',
      },
      {
        icon: 'cafe',
        title: 'Lounge & catering',
        description: 'Neque, blandit consectetur viverra placerat ante.',
      },
      {
        icon: 'award',
        title: 'Certificate',
        description: 'Neque, blandit consectetur viverra placerat ante.',
      },
    ],
    cta: { text: 'Register for workshop', href: '#' },
  },
  {
    id: 'web-dev',
    label: 'Web Development',
    image: `${baseUrl}/assets/img/tech/item-39.jpg`,
    title: 'Modern Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id lectus nec nunc bibendum facilisis pellentesque ut eros. Praesent bibendum sed mi aliquet tempus.',
    features: [
      {
        icon: 'code',
        title: 'Live coding',
        description: 'Neque, blandit consectetur viverra placerat ante.',
      },
      {
        icon: 'cpu',
        title: 'Framework deep dive',
        description: 'Neque, blandit consectetur viverra placerat ante.',
      },
      {
        icon: 'cafe',
        title: 'Lounge & catering',
        description: 'Neque, blandit consectetur viverra placerat ante.',
      },
      {
        icon: 'award',
        title: 'Certificate',
        description: 'Neque, blandit consectetur viverra placerat ante.',
      },
    ],
    cta: { text: 'Register for workshop', href: '#' },
  },
  {
    id: 'cloud-devops',
    label: 'Cloud & DevOps',
    image: `${baseUrl}/assets/img/tech/item-15.jpg`,
    title: 'Cloud & DevOps Engineering',
    description:
      'Varius purus dui nunc faucibus mauris iaculis tortor enim cursus quisque eu, vel amet massa suscipit cursus sit mattis quis magnis dignissim dui fames tortor.',
    features: [
      {
        icon: 'cloud',
        title: 'Cloud platforms',
        description: 'Neque, blandit consectetur viverra placerat ante.',
      },
      {
        icon: 'code',
        title: 'CI/CD pipelines',
        description: 'Neque, blandit consectetur viverra placerat ante.',
      },
      {
        icon: 'cafe',
        title: 'Lounge & catering',
        description: 'Neque, blandit consectetur viverra placerat ante.',
      },
      {
        icon: 'award',
        title: 'Certificate',
        description: 'Neque, blandit consectetur viverra placerat ante.',
      },
    ],
    cta: { text: 'Register for workshop', href: '#' },
  },
  {
    id: 'cybersecurity',
    label: 'Cybersecurity',
    image: `${baseUrl}/assets/img/tech/item-28.jpg`,
    title: 'Cybersecurity Essentials',
    description:
      'At duis est ante tortor, dictum dictumst nisl erat. Tellus erat pharetra eget vestibulum. Netus eu sit cursus et vehicula porttitor nulla turpis a. In volutpat.',
    features: [
      {
        icon: 'shield',
        title: 'Threat modelling',
        description: 'Neque, blandit consectetur viverra placerat ante.',
      },
      {
        icon: 'code',
        title: 'Pen testing intro',
        description: 'Neque, blandit consectetur viverra placerat ante.',
      },
      {
        icon: 'cafe',
        title: 'Lounge & catering',
        description: 'Neque, blandit consectetur viverra placerat ante.',
      },
      {
        icon: 'award',
        title: 'Certificate',
        description: 'Neque, blandit consectetur viverra placerat ante.',
      },
    ],
    cta: { text: 'Register for workshop', href: '#' },
  },
  {
    id: 'product',
    label: 'Product & Design',
    image: `${baseUrl}/assets/img/tech/item-25.jpg`,
    title: 'Product Thinking & UX Design',
    description:
      'Facilisi tempus pharetra, egestas dolor. Nulla lorem interdum cursus habitasse. Morbi aliquam, mauris, varius nulla tortor ut nullam. Est eu eu eget fames leo.',
    features: [
      {
        icon: 'layers',
        title: 'Design systems',
        description: 'Neque, blandit consectetur viverra placerat ante.',
      },
      {
        icon: 'code',
        title: 'Prototyping',
        description: 'Neque, blandit consectetur viverra placerat ante.',
      },
      {
        icon: 'cafe',
        title: 'Lounge & catering',
        description: 'Neque, blandit consectetur viverra placerat ante.',
      },
      {
        icon: 'award',
        title: 'Certificate',
        description: 'Neque, blandit consectetur viverra placerat ante.',
      },
    ],
    cta: { text: 'Register for workshop', href: '#' },
  },
]
</script>

<style scoped></style>
