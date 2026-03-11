import Swiper, { Autoplay, Navigation, Pagination, Thumbs, Controller, FreeMode } from 'swiper'
import 'swiper/css'

Swiper.use([Autoplay, Navigation, Pagination, Thumbs, Controller, FreeMode])

/**
 * Content carousel with extensive options to control behaviour and appearance
 * @requires https://github.com/nolimits4web/swiper
 */
export default function initSwiper() {
  // helper forEach (NodeList -> Array)
  const forEach = (array, callback, scope) => {
    for (let i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i])
    }
  }

  // initialize all swipers
  const swipers = document.querySelectorAll('.swiper')
  console.log(swipers)
  forEach(swipers, (_, element) => {
    let options = {}
    if (element.dataset.swiperOptions) {
      try {
        options = JSON.parse(element.dataset.swiperOptions)
      } catch (e) {
        console.warn('Invalid JSON in data-swiper-options', e)
      }
    }

    // Thumbnails
    if (options.thumbnails) {
      const images = options.thumbnails.images || []
      options = {
        ...options,
        pagination: {
          el: options.thumbnails.el,
          clickable: true,
          bulletActiveClass: 'active',
          renderBullet: (idx, className) => `
            <li class="swiper-thumbnail ${className}">
              <img src="${images[idx] || ''}" alt="Thumbnail">
            </li>
          `,
        },
      }
    }

    const swiperInstance = new Swiper(element, options)

    // Controlled slider
    if (options.controlledSlider) {
      const controlledSlider = document.querySelector(options.controlledSlider)
      if (controlledSlider) {
        let controlledSliderOptions = {}
        if (controlledSlider.dataset.swiperOptions) {
          try {
            controlledSliderOptions = JSON.parse(controlledSlider.dataset.swiperOptions)
          } catch (e) {
            console.warn('Invalid JSON in controlled slider options', e)
          }
        }
        const swiperControlled = new Swiper(controlledSlider, controlledSliderOptions)
        swiperInstance.controller.control = swiperControlled
      }
    }

    // Binded content
    if (options.bindedContent) {
      swiperInstance.on('activeIndexChange', (e) => {
        const targetItem = document.querySelector(e.slides[e.activeIndex]?.dataset.swiperBinded)
        const previousItem = document.querySelector(e.slides[e.previousIndex]?.dataset.swiperBinded)

        previousItem?.classList.remove('active')
        targetItem?.classList.add('active')
      })
    }
  })
}
