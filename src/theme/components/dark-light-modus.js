/**
 * Switch between light and dark themes (color modes)
 */

export default function initColorMode() {
  const getStoredTheme = () => localStorage.getItem('theme')
  const setStoredTheme = (theme) => localStorage.setItem('theme', theme)

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme()
    if (storedTheme) return storedTheme

    return 'light'
  }

  const setTheme = (theme) => {
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }

  const showActiveTheme = (theme) => {
    const themeSwitcher = document.querySelector('[data-bs-toggle="mode"]')
    if (!themeSwitcher) return

    const checkbox = themeSwitcher.querySelector('input[type="checkbox"]')
    if (!checkbox) return

    checkbox.checked = theme === 'dark'
  }

  // apply theme immediately
  const preferredTheme = getPreferredTheme()
  setTheme(preferredTheme)
  showActiveTheme(preferredTheme)

  // prevent duplicate listeners in SPA
  if (window.__colorModeInitialized) return
  window.__colorModeInitialized = true

  // system theme change
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const storedTheme = getStoredTheme()
    if (storedTheme !== 'light' && storedTheme !== 'dark') {
      setTheme(getPreferredTheme())
    }
  })

  // toggle switch
  document.querySelectorAll('[data-bs-toggle="mode"]').forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const checkbox = toggle.querySelector('input[type="checkbox"]')
      const theme = checkbox.checked ? 'dark' : 'light'

      setStoredTheme(theme)
      setTheme(theme)
      showActiveTheme(theme)
    })
  })
}
