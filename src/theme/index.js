import initSwiper from './components/swiper'
import initAOS from './components/aos'
import initColorMode from './components/dark-light-modus'
import scrollTopButton from './components/scroll-top-button'
import smoothScroll from './components/smooth-scroll'
const initComponents = () => {
  initAOS()
  initColorMode()
  initSwiper()
  scrollTopButton()
  smoothScroll()
}

export default initComponents
