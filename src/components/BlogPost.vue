<template>
  <div class="blog-post-overlay" @click.self="$emit('close')">
    <div class="blog-post">
      <button class="close-btn" @click="$emit('close')">×</button>
      <header class="post-header">
        <span class="category">{{ post.category }}</span>
        <h1 class="title">{{ post.title }}</h1>
        <div class="meta">
          <span class="date">{{ post.date }}</span>
          <span class="author">By {{ post.author }}</span>
        </div>
      </header>

      <div class="post-content">
        <div v-html="post.content"></div>
      </div>

      <footer class="post-footer">
        <div class="tags">
          <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  emits: ['close']
}
</script>

<style scoped>
.blog-post-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--bg-overlay);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  z-index: 1000;
  overflow-y: auto;
}

.blog-post {
  background: var(--bg-card);
  border-radius: 12px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  padding: 3rem;
  animation: slideUp 0.3s ease;
  transition: background-color 0.3s ease;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2.5rem;
  color: var(--text-secondary);
  cursor: pointer;
  line-height: 1;
  padding: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background: var(--tag-bg);
  color: var(--text-primary);
}

.post-header {
  margin-bottom: 2rem;
}

.category {
  background: var(--gradient-primary);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 1rem;
}

.title {
  color: var(--text-primary);
  font-size: 2.5rem;
  margin: 1rem 0;
  line-height: 1.2;
  transition: color 0.3s ease;
}

.meta {
  display: flex;
  gap: 1.5rem;
  color: var(--text-secondary);
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.post-content {
  color: var(--text-primary);
  line-height: 1.8;
  font-size: 1.1rem;
  margin: 2rem 0;
  transition: color 0.3s ease;
}

.post-content :deep(h2) {
  color: var(--text-primary);
  margin: 2rem 0 1rem;
  font-size: 1.8rem;
}

.post-content :deep(h3) {
  color: var(--text-primary);
  margin: 1.5rem 0 0.75rem;
  font-size: 1.4rem;
}

.post-content :deep(p) {
  margin: 1rem 0;
}

.post-content :deep(ul), .post-content :deep(ol) {
  margin: 1rem 0;
  padding-left: 2rem;
}

.post-content :deep(li) {
  margin: 0.5rem 0;
}

.post-content :deep(code) {
  background: var(--code-bg);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.95em;
  color: var(--text-primary);
}

.post-content :deep(pre) {
  background: var(--code-block-bg);
  color: #f8f8f2;
  padding: 1.5rem;
  border-radius: 8px;
  overflow-x: auto;
  margin: 1.5rem 0;
}

.post-content :deep(pre code) {
  background: none;
  padding: 0;
  color: inherit;
}

.post-footer {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px solid var(--border-color);
  transition: border-color 0.3s ease;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: var(--tag-bg);
  color: var(--text-secondary);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: background-color 0.3s ease, color 0.3s ease;
}

@media (max-width: 768px) {
  .blog-post {
    padding: 2rem 1.5rem;
  }

  .title {
    font-size: 1.8rem;
  }

  .post-content {
    font-size: 1rem;
  }
}
</style>
