<template>
  <div class="blog-list">
    <h2 class="section-title">Recent Posts</h2>
    <div class="posts-grid">
      <article
        v-for="post in posts"
        :key="post.id"
        class="post-card"
        @click="$emit('select-post', post)"
      >
        <div class="post-header">
          <span class="post-category">{{ post.category }}</span>
          <span class="post-date">{{ post.date }}</span>
        </div>
        <h3 class="post-title">{{ post.title }}</h3>
        <p class="post-excerpt">{{ post.excerpt }}</p>
        <div class="post-tags">
          <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
        <button class="read-more">Read More →</button>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogList',
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  emits: ['select-post']
}
</script>

<style scoped>
.blog-list {
  margin: 2rem 0;
}

.section-title {
  color: white;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.post-card {
  background: var(--bg-card);
  border-radius: 12px;
  padding: 1.5rem;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.post-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.post-category {
  background: var(--gradient-primary);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.post-date {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.post-title {
  color: var(--text-primary);
  font-size: 1.5rem;
  margin: 0.5rem 0;
  font-weight: 700;
  transition: color 0.3s ease;
}

.post-excerpt {
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 1rem 0;
  transition: color 0.3s ease;
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
}

.tag {
  background: var(--tag-bg);
  color: var(--text-secondary);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.85rem;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.read-more {
  background: transparent;
  border: 2px solid #667eea;
  color: #667eea;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.read-more:hover {
  background: #667eea;
  color: white;
}

@media (max-width: 768px) {
  .posts-grid {
    grid-template-columns: 1fr;
  }
}
</style>
