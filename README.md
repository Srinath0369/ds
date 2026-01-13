# App Portfolio Site

A modern, dark-themed portfolio website for showcasing your Play Store application. Built with React.js, Tailwind CSS, and Framer Motion for beautiful animations.

## Features

- 🌙 **Dark Theme Design** - Eye-friendly dark color scheme
- ⚡ **Dynamic Header** - Scroll-responsive navigation with smooth transitions
- 🎨 **Modern Animations** - Powered by Framer Motion
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🚀 **Fast Performance** - Built with Vite for optimal loading speeds

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Customization

### Update App Information

1. **App Name & Logo**: Edit [src/components/Header.jsx](src/components/Header.jsx) and [src/components/Hero.jsx](src/components/Hero.jsx)
2. **Features**: Modify the features array in [src/components/Features.jsx](src/components/Features.jsx)
3. **Stats**: Update download counts and ratings in [src/components/Hero.jsx](src/components/Hero.jsx)
4. **Play Store Link**: Replace the link in [src/components/Download.jsx](src/components/Download.jsx)

### Add Screenshots

Replace placeholder content in [src/components/Screenshots.jsx](src/components/Screenshots.jsx) with actual app screenshots.

### Colors

Customize the color scheme in [tailwind.config.js](tailwind.config.js) under the `theme.extend.colors` section.

## Technologies Used

- React 18
- Vite
- Tailwind CSS 3
- Framer Motion 11
- React Icons

## License

MIT License - Feel free to use this template for your projects!
