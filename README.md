# Claude Code Learning Blog

A modern, responsive blog application built with Vue.js 3 and Vite, featuring educational content about learning and mastering Claude Code - the AI-powered coding assistant.

## Features

- **Beautiful UI**: Modern gradient design with smooth animations
- **Responsive Layout**: Works seamlessly on desktop and mobile devices
- **6 Blog Posts**: Comprehensive tutorials and guides about Claude Code
- **Easy Navigation**: Click any post card to view the full article in a modal
- **Rich Content**: Formatted articles with code examples, lists, and proper typography

## Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone this repository or navigate to the project directory
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server with hot-reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Project Structure

```
claude-code-blog/
├── src/
│   ├── components/
│   │   ├── BlogHeader.vue    # Header component
│   │   ├── BlogList.vue      # Post grid component
│   │   └── BlogPost.vue      # Full post modal
│   ├── data/
│   │   └── posts.js          # Blog post content
│   ├── App.vue               # Root component
│   ├── main.js               # Application entry point
│   └── style.css             # Global styles
├── index.html                # HTML template
├── vite.config.js           # Vite configuration
└── package.json             # Project dependencies
```

## Blog Topics

The blog covers six comprehensive topics:

1. **Getting Started with Claude Code** - Installation and setup guide
2. **Understanding Claude Code's AI Capabilities** - Deep dive into AI features
3. **Best Practices for Using Claude Code** - Productivity tips and workflow strategies
4. **Building a Vue.js App with Claude Code** - Step-by-step project tutorial
5. **Debugging with Claude Code** - AI-powered debugging techniques
6. **Advanced Claude Code Features** - Custom commands, MCP servers, and automation

## Adding New Posts

To add a new blog post, edit `src/data/posts.js` and add a new object to the posts array:

```javascript
{
  id: 7,
  title: "Your Post Title",
  category: "Category Name",
  date: "YYYY-MM-DD",
  author: "Author Name",
  excerpt: "Brief preview text",
  tags: ["tag1", "tag2"],
  content: `<h2>Your Content</h2><p>HTML formatted content here</p>`
}
```

## Technology Stack

- **Vue.js 3** - Progressive JavaScript framework
- **Vite** - Next-generation frontend tooling
- **Composition API** - Modern Vue.js patterns
- **CSS3** - Custom styling with gradients and animations

## License

ISC

## Contributing

Feel free to fork this project and add your own blog posts about Claude Code or other development topics!
