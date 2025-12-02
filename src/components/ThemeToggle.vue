<template>
  <button
    class="theme-toggle"
    @click="toggleTheme"
    :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
    :title="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <span class="icon" v-if="theme === 'light'">🌙</span>
    <span class="icon" v-else>☀️</span>
  </button>
</template>

<script>
import { useTheme } from '../hooks/useTheme'

export default {
  name: 'ThemeToggle',
  setup() {
    const { theme, toggleTheme } = useTheme()

    return {
      theme,
      toggleTheme
    }
  }
}
</script>

<style scoped>
.theme-toggle {
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.theme-toggle:hover {
  transform: scale(1.1);
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
}

.theme-toggle:active {
  transform: scale(0.95);
}

.icon {
  font-size: 1.5rem;
  line-height: 1;
  transition: transform 0.3s ease;
}

.theme-toggle:hover .icon {
  transform: rotate(20deg);
}

/* Dark theme adjustments */
[data-theme="dark"] .theme-toggle {
  border-color: rgba(255, 255, 255, 0.2);
  background: rgba(0, 0, 0, 0.3);
}

[data-theme="dark"] .theme-toggle:hover {
  background: rgba(0, 0, 0, 0.4);
  border-color: rgba(255, 255, 255, 0.4);
}

@media (max-width: 768px) {
  .theme-toggle {
    top: 1rem;
    right: 1rem;
    width: 45px;
    height: 45px;
  }

  .icon {
    font-size: 1.3rem;
  }
}
</style>
