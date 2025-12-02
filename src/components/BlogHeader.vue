<template>
  <header class="blog-header">
    <div class="header-content">
      <h1 class="title">
        <span class="claude-icon">🤖</span>
        Claude Code Learning Journey
      </h1>
      <p class="subtitle">Mastering AI-Assisted Development with Claude Code</p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'BlogHeader'
}
</script>

<style scoped>
.blog-header {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  padding: 2rem 0;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.title {
  color: white;
  font-size: 3rem;
  margin: 0;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.claude-icon {
  font-size: 3.5rem;
}

.subtitle {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  margin: 0.5rem 0 0;
  font-weight: 300;
}

@media (max-width: 768px) {
  .title {
    font-size: 2rem;
  }

  .claude-icon {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1rem;
  }
}
</style>
