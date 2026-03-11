import AOS from 'aos'
import 'aos/dist/aos.css'

/**
 * Animation on scroll (AOS)
 * @requires https://github.com/michalsnik/aos
 */
export default function animateOnscroll() {
  const animationToggle = document.querySelector('[data-aos]')
  if (animationToggle === null) return

  AOS.init()
}
