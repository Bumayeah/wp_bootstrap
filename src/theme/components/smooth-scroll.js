/**
 * Anchor smooth scrolling
 * @requires https://github.com/cferdinandi/smooth-scroll/
 */

import SmoothScroll from 'smooth-scroll'

export default function initSmoothScroll() {
  const selector = '[data-scroll]'
  const fixedHeader = '[data-scroll-header]'

  const elements = document.querySelectorAll(selector)
  if (!elements.length) return

  new SmoothScroll(selector, {
    speed: 800,
    speedAsDuration: true,
    header: fixedHeader,
    updateURL: false,
    offset: (anchor, toggle) => {
      return toggle.dataset.scrollOffset || 20
    },
  })
}
