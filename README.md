# wed1601

asdasd

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![pnpm](https://img.shields.io/badge/pnpm-9.0-FF6C37)](https://pnpm.io/)
[![Storybook](https://img.shields.io/badge/Storybook-7.0-FF4785)](https://storybook.js.org/)
[![Style Dictionary](https://img.shields.io/badge/Style_Dictionary-3.0-FF6B6B)](https://amzn.github.io/style-dictionary/)

## 🚀 Quick Start

```bash
# Install pnpm if you don't have it
npm install -g pnpm

# Install dependencies
pnpm install

# Setup the project (installs components & builds tokens)
pnpm run setup

# Start development server
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your design system.

## ✨ What's Included

### Core Framework
- **Next.js 15** with App Router
- **React 18** with TypeScript
- **pnpm** for fast package management
- **Tailwind CSS** for styling

### Design System Features

- **Complete ShadCN UI Library** - All 45+ ShadCN components installed
  - Includes: Button, Card, Input, Dialog, Alert, Badge, Table, Form, and 40+ more
  - Fully typed with TypeScript
  - Accessible and customizable  
  - Installed via: `npx shadcn@latest add --all`

- **Design Tokens** with 3 output formats
  - style-dictionary
  - design-tokens-css-variables
  - design-tokens-tailwind-theme

- **Storybook** documentation
  - Addons: shadcn-stories, visual-tests, accessibility

### Development Tools
- **ESLint** for code quality
- **TypeScript** for type safety

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm run dev` | Start development server |
| `pnpm run build` | Build for production |
| `pnpm run start` | Start production server |
| `pnpm run lint` | Run ESLint |
| `pnpm run setup` | Install components & build tokens |

| `pnpm run build:tokens` | Build design tokens |
| `pnpm run build:tokens:watch` | Watch mode for tokens |

| `pnpm run storybook` | Start Storybook |
| `pnpm run build-storybook` | Build Storybook |

## 📁 Project Structure

```
wed1601/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
│   └── ui/                # ShadCN UI components
├── lib/                   # Utility functions
│   └── utils.ts           # Utility functions
├── tokens/                # Design token source files
│   ├── base.json          # Base tokens
│   └── theme/             # Theme-specific tokens
├── dist/                  # Generated design token outputs
│   ├── css/               # CSS variables
│   ├── js/                # JavaScript tokens
│   ├── style-dictionary/          # style-dictionary format outputs
│   ├── design-tokens-css-variables/          # design-tokens-css-variables format outputs
│   ├── design-tokens-tailwind-theme/          # design-tokens-tailwind-theme format outputs
│   └── ...
├── .storybook/            # Storybook configuration
├── stories/               # Component stories
├── scripts/               # Build and setup scripts
├── components.json        # ShadCN UI configuration
├── style-dictionary.config.js # Token build configuration
└── package.json           # Dependencies and scripts
```

## 🔧 Setup Details

### Component Installation
This project uses the **complete ShadCN UI component library**:

- **45+ Components** - Entire ShadCN library installed via `npx shadcn@latest add --all`
- **Production Ready** - Includes Button, Card, Dialog, Input, Table, Form, and all other components
- **Fully Typed** - Complete TypeScript support with proper type definitions
- **Accessible** - Built with Radix UI primitives for WCAG compliance
- **Customizable** - Full source code included in `components/ui/` directory
- **Auto-Install** - All components installed automatically when you run `pnpm run setup`
- **Storybook stories included** - All components come with pre-built Storybook stories for documentation and testing

Components are automatically installed and configured when you run `pnpm run setup`. Design tokens are also built automatically during setup.

### Design Token System
This project uses **Style Dictionary** to generate design tokens in multiple formats:

**Available Formats:**
- **style-dictionary** - Generated in `dist/style-dictionary/` directory
- **design-tokens-css-variables** - Generated in `dist/design-tokens-css-variables/` directory
- **design-tokens-tailwind-theme** - Generated in `dist/design-tokens-tailwind-theme/` directory

**Token Source:** `tokens/` directory
**Generated Output:** `dist/` directory

**Build Commands:**
```bash
# Build all token formats
pnpm run build:tokens

# Watch for changes
pnpm run build:tokens:watch
```

**Using Tokens:**
```css
/* CSS Variables */
:root {
  --color-primary: hsl(210, 100%, 50%);
  --spacing-md: 1rem;
}
```

```javascript
// JavaScript/TypeScript
import tokens from './dist/js/tokens.js';
console.log(tokens.color.primary);
```

### Documentation
This project includes **Storybook** for component documentation:

**Start Storybook:**
```bash
pnpm run storybook
```

**Available Addons:**
- shadcn-stories
- visual-tests
- accessibility

**Build Storybook:**
```bash
pnpm run build-storybook
```



## 🔄 Development Workflow

### First Time Setup
1. **Install dependencies:** `pnpm install`
2. **Setup project:** `pnpm run setup` (installs components & builds tokens)
3. **Start development:** `pnpm run dev`

### Daily Development
1. **Start dev server:** `pnpm run dev`
2. **Make changes** to components in `components/`
3. **View changes** at [http://localhost:3000](http://localhost:3000)
4. **View stories** at [http://localhost:6006](http://localhost:6006)

### Before Committing
1. **Run linting:** `pnpm run lint`
2. **Build project:** `pnpm run build`
3. **Rebuild tokens:** `pnpm run build:tokens` (if token changes)

## 🆘 Troubleshooting

### Common Issues

**Components not showing correctly?**
```bash
# Re-run setup to ensure components are properly installed and tokens are built
pnpm run setup
```

**Design tokens not updating?**
```bash
# Rebuild tokens after making changes
pnpm run build:tokens
```

**TypeScript errors?**
```bash
# Ensure all dependencies are installed
pnpm install
# Check TypeScript configuration
pnpm run lint
```

**Port already in use?**
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use a different port
pnpm run dev -- -p 3001
```

### Getting Help
- Check the [Next.js documentation](https://nextjs.org/docs)
- Review [Tailwind CSS docs](https://tailwindcss.com/docs)
- Browse [Storybook documentation](https://storybook.js.org/docs)
- Learn about [Style Dictionary](https://amzn.github.io/style-dictionary/)

