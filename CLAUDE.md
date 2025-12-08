# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A blog application about learning Claude Code, built with Vue.js 3 and Vite. The blog features educational content about Claude Code's capabilities, best practices, and tutorials for developers learning AI-assisted development.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
claude-code-blog/
├── node_modules/           # Installed dependencies (generated)
├── src/                    # Source code directory
│   ├── components/         # Vue components
│   │   ├── BlogHeader.vue  # Header component with branding
│   │   ├── BlogList.vue    # Grid of blog post cards
│   │   └── BlogPost.vue    # Full post view modal
        hooks/              # Reusable hooks
│   ├── data/               # Static data
│   │   └── posts.js        # Blog posts array with 6 articles
│   ├── App.vue             # Root Vue component
│   ├── main.js             # Application entry point
│   └── style.css           # Global CSS styles
├── .git/                   # Git repository (generated)
├── .gitignore              # Git ignore rules
├── CLAUDE.md               # This file - Claude Code documentation
├── README.md               # Project documentation
├── index.html              # HTML entry point
├── package.json            # NPM dependencies and scripts
├── package-lock.json       # NPM lock file (generated)
└── vite.config.js          # Vite build configuration
```

## Architecture

### Technology Stack
- **Vue.js 3**: Using Composition API for reactive components
- **Vite**: Fast build tool and development server
- **Single Page Application**: Client-side routing and state management

### Component Structure

The application follows a component-based architecture:

- **App.vue**: Root component managing blog state and post selection
- **BlogHeader.vue**: Header with branding and title
- **BlogList.vue**: Displays grid of blog post cards with preview information
- **BlogPost.vue**: Modal overlay showing full post content with formatted HTML

### Data Management

Blog posts are stored in `src/data/posts.js` as a JavaScript module. Each post contains:
- id, title, category, date, author
- excerpt (short preview)
- tags (array of topic tags)
- content (HTML string with formatted article content)

### Styling Approach

- Scoped component styles using Vue's `<style scoped>`
- Global base styles in `src/style.css`
- Purple gradient theme (#667eea to #764ba2)
- Responsive design with mobile breakpoints
- Custom scrollbar styling

## Key Features

1. **Post Grid Display**: Responsive card layout with hover effects
2. **Modal Post View**: Click any post to view full content in overlay
3. **Categorization**: Posts organized by category (Tutorial, Deep Dive, Tips & Tricks, etc.)
4. **Tag System**: Each post tagged with relevant topics
5. **Formatted Content**: HTML content rendering with styled code blocks, lists, and headings

## Adding New Blog Posts

To add a new post, edit `src/data/posts.js` and add a new object to the posts array following this structure:

```javascript
{
  id: 7,  // Increment from last post
  title: "Your Post Title",
  category: "Category Name",
  date: "YYYY-MM-DD",
  author: "Author Name",
  excerpt: "Brief description for card preview",
  tags: ["tag1", "tag2"],
  content: `<h2>Section</h2><p>Content with HTML formatting</p>`
}
```
- Use Context7 to check up-to-date docs when needed for implementing new libraries or frameworks, or adding features using them.