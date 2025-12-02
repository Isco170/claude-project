import { ref, watch, onMounted } from 'vue'

const THEME_STORAGE_KEY = 'claude-blog-theme'

export function useTheme() {
  // Initialize with system preference or stored preference
  const theme = ref('light')

  // Get stored theme preference
  const getStoredTheme = () => {
    try {
      return localStorage.getItem(THEME_STORAGE_KEY)
    } catch (error) {
      console.warn('Failed to read theme from localStorage:', error)
      return null
    }
  }

  // Get system theme preference
  const getSystemTheme = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  }

  // Initialize theme on mount
  onMounted(() => {
    const storedTheme = getStoredTheme()
    theme.value = storedTheme || getSystemTheme()
    applyTheme(theme.value)

    // Listen for system theme changes
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      mediaQuery.addEventListener('change', (e) => {
        if (!getStoredTheme()) {
          theme.value = e.matches ? 'dark' : 'light'
        }
      })
    }
  })

  // Apply theme to document
  const applyTheme = (newTheme) => {
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  // Watch for theme changes and persist to localStorage
  watch(theme, (newTheme) => {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, newTheme)
      applyTheme(newTheme)
    } catch (error) {
      console.warn('Failed to save theme to localStorage:', error)
    }
  })

  // Toggle between light and dark
  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  // Set specific theme
  const setTheme = (newTheme) => {
    if (newTheme === 'light' || newTheme === 'dark') {
      theme.value = newTheme
    }
  }

  // Check if current theme is dark
  const isDark = () => theme.value === 'dark'

  return {
    theme,
    toggleTheme,
    setTheme,
    isDark
  }
}
