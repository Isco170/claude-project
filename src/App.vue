<template>
  <div class="app">
    <ThemeToggle />
    <BlogHeader />
    <main class="main-content">
      <BlogList :posts="blogPosts" @select-post="selectPost" />
      <BlogPost v-if="selectedPost" :post="selectedPost" @close="selectedPost = null" />
    </main>
  </div>
</template>

<script>
import { ref } from 'vue'
import BlogHeader from './components/BlogHeader.vue'
import BlogList from './components/BlogList.vue'
import BlogPost from './components/BlogPost.vue'
import ThemeToggle from './components/ThemeToggle.vue'
import { posts } from './data/posts.js'
import { useTheme } from './hooks/useTheme'

export default {
  name: 'App',
  components: {
    BlogHeader,
    BlogList,
    BlogPost,
    ThemeToggle
  },
  setup() {
    // Initialize theme
    useTheme()

    const blogPosts = ref(posts)
    const selectedPost = ref(null)

    const selectPost = (post) => {
      selectedPost.value = post
    }

    return {
      blogPosts,
      selectedPost,
      selectPost
    }
  }
}
</script>

<style scoped>
.app {
  min-height: 100vh;
  background: var(--gradient-bg);
  transition: background 0.3s ease;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}
</style>
