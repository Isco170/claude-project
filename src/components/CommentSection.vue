<template>
  <div class="comment-section">
    <h2 class="section-title">Comments ({{ comments.length }})</h2>

    <div class="comment-form">
      <h3>Leave a Comment</h3>
      <form @submit.prevent="submitComment">
        <div class="form-group">
          <input
            v-model="newComment.name"
            type="text"
            placeholder="Your Name"
            required
            class="form-input"
          />
        </div>
        <div class="form-group">
          <textarea
            v-model="newComment.text"
            placeholder="Your Comment"
            required
            rows="4"
            class="form-textarea"
          ></textarea>
        </div>
        <button type="submit" class="submit-btn">Post Comment</button>
      </form>
    </div>

    <div class="comments-list">
      <div v-if="comments.length === 0" class="no-comments">
        No comments yet. Be the first to comment!
      </div>
      <div
        v-for="comment in sortedComments"
        :key="comment.id"
        class="comment"
      >
        <div class="comment-header">
          <div class="comment-avatar">{{ comment.name.charAt(0).toUpperCase() }}</div>
          <div class="comment-info">
            <span class="comment-author">{{ comment.name }}</span>
            <span class="comment-date">{{ formatDate(comment.date) }}</span>
          </div>
          <button @click="deleteComment(comment.id)" class="delete-btn" title="Delete comment">
            ×
          </button>
        </div>
        <div class="comment-text">{{ comment.text }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'

export default {
  name: 'CommentSection',
  props: {
    postId: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const comments = ref([])
    const newComment = ref({
      name: '',
      text: ''
    })

    const STORAGE_KEY = 'blog-comments'

    const loadComments = () => {
      const storedComments = localStorage.getItem(STORAGE_KEY)
      if (storedComments) {
        const allComments = JSON.parse(storedComments)
        comments.value = allComments[props.postId] || []
      }
    }

    const saveComments = () => {
      const storedComments = localStorage.getItem(STORAGE_KEY)
      const allComments = storedComments ? JSON.parse(storedComments) : {}
      allComments[props.postId] = comments.value
      localStorage.setItem(STORAGE_KEY, JSON.stringify(allComments))
    }

    const submitComment = () => {
      if (newComment.value.name.trim() && newComment.value.text.trim()) {
        const comment = {
          id: Date.now(),
          postId: props.postId,
          name: newComment.value.name.trim(),
          text: newComment.value.text.trim(),
          date: new Date().toISOString()
        }

        comments.value.push(comment)
        saveComments()

        newComment.value = {
          name: '',
          text: ''
        }
      }
    }

    const deleteComment = (commentId) => {
      if (confirm('Are you sure you want to delete this comment?')) {
        comments.value = comments.value.filter(c => c.id !== commentId)
        saveComments()
      }
    }

    const formatDate = (dateString) => {
      const date = new Date(dateString)
      const now = new Date()
      const diffMs = now - date
      const diffMins = Math.floor(diffMs / 60000)
      const diffHours = Math.floor(diffMs / 3600000)
      const diffDays = Math.floor(diffMs / 86400000)

      if (diffMins < 1) return 'Just now'
      if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`
      if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`
      if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`

      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    }

    const sortedComments = computed(() => {
      return [...comments.value].sort((a, b) => new Date(b.date) - new Date(a.date))
    })

    onMounted(() => {
      loadComments()
    })

    return {
      comments,
      newComment,
      sortedComments,
      submitComment,
      deleteComment,
      formatDate
    }
  }
}
</script>

<style scoped>
.comment-section {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px solid var(--border-color);
}

.section-title {
  color: var(--text-primary);
  font-size: 1.8rem;
  margin-bottom: 2rem;
  transition: color 0.3s ease;
}

.comment-form {
  background: var(--bg-secondary);
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  transition: background-color 0.3s ease;
}

.comment-form h3 {
  color: var(--text-primary);
  font-size: 1.2rem;
  margin-bottom: 1rem;
  transition: color 0.3s ease;
}

.form-group {
  margin-bottom: 1rem;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: 1rem;
  font-family: inherit;
  background: var(--bg-card);
  color: var(--text-primary);
  transition: all 0.3s ease;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
}

.submit-btn {
  background: var(--gradient-primary);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.submit-btn:active {
  transform: translateY(0);
}

.comments-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.no-comments {
  text-align: center;
  padding: 2rem;
  color: var(--text-secondary);
  font-style: italic;
  transition: color 0.3s ease;
}

.comment {
  background: var(--bg-secondary);
  padding: 1.5rem;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.comment:hover {
  transform: translateX(4px);
}

.comment-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.comment-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--gradient-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.comment-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.comment-author {
  color: var(--text-primary);
  font-weight: 600;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.comment-date {
  color: var(--text-secondary);
  font-size: 0.85rem;
  transition: color 0.3s ease;
}

.delete-btn {
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.delete-btn:hover {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
}

.comment-text {
  color: var(--text-primary);
  line-height: 1.6;
  white-space: pre-wrap;
  word-wrap: break-word;
  transition: color 0.3s ease;
}

@media (max-width: 768px) {
  .comment-form {
    padding: 1rem;
  }

  .comment {
    padding: 1rem;
  }

  .comment-avatar {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
}
</style>
