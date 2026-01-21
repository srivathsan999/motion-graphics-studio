# Motion Graphics Studio - Professional HTML Template

A professional, production-ready HTML template for motion graphics studios. Built with clean, semantic HTML5, Tailwind CSS, and vanilla JavaScript.

## Features

- ✅ **Dark/Light Theme Toggle** - Seamless theme switching with localStorage persistence
- ✅ **Fully Responsive** - Mobile-first design that works on all devices
- ✅ **SEO Optimized** - Semantic HTML structure with proper meta tags
- ✅ **Accessibility** - WCAG AA compliant contrast ratios and focus states
- ✅ **No Dependencies** - Pure HTML, CSS, and vanilla JavaScript
- ✅ **Content Rich** - All pages include substantial, realistic content
- ✅ **Professional Design** - Clean, modern UI suitable for client presentation

## Technology Stack

- **HTML5** - Semantic, SEO-friendly markup
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **Vanilla JavaScript** - Theme toggle functionality only
- **CSS Transitions** - Smooth hover effects and animations

## File Structure

```
motion-graphics-template/
├── assets/
│   ├── css/
│   │   └── style.css          # Custom styles and theme variables
│   ├── js/
│   │   └── theme.js           # Theme toggle functionality
│   └── images/                # Image assets directory
├── pages/
│   ├── index.html             # Home Page 1 - Creative Studio
│   ├── home-saas.html         # Home Page 2 - SaaS Style
│   ├── work.html              # Portfolio page (12 items)
│   ├── project-details.html   # Project detail page
│   ├── services.html          # Services page (6 services)
│   ├── clients.html           # Clients page with testimonials
│   ├── about.html             # About page with team and values
│   ├── contact.html           # Contact page with form
│   ├── login.html             # Login page
│   ├── register.html          # Registration page
│   ├── dashboard.html         # Dashboard (static UI)
│   ├── 404.html               # 404 error page
│   └── coming-soon.html       # Coming soon page
└── README.md                  # This file
```

## Color Palette

### Dark Mode (Default)
- Background: `#0F172A`
- Surface: `#020617`
- Card BG: `#020617`
- Primary Text: `#F8FAFC`
- Secondary Text: `#CBD5E1`
- Accent: `#3B82F6`

### Light Mode
- Background: `#FFFFFF`
- Surface: `#F8FAFC`
- Card BG: `#FFFFFF`
- Primary Text: `#0F172A`
- Secondary Text: `#475569`
- Accent: `#3B82F6`

## Pages Overview

### Home Pages
- **index.html** - Creative studio style homepage with hero, featured work, services preview, client logos, testimonials, and CTA
- **home-saas.html** - Digital/SaaS style homepage with process steps, case studies, tools, and pricing

### Content Pages
- **work.html** - Portfolio grid with 12 project items
- **project-details.html** - Detailed project view with gallery and testimonial
- **services.html** - 6 detailed service descriptions with images
- **clients.html** - Client logo grid and testimonials
- **about.html** - Mission, team members, and company values
- **contact.html** - Contact form and business information

### Utility Pages
- **login.html** - User login form
- **register.html** - User registration form
- **dashboard.html** - Static dashboard UI
- **404.html** - 404 error page
- **coming-soon.html** - Coming soon page

## Usage

1. Open any HTML file in a web browser
2. The theme toggle button (sun/moon icon) switches between dark and light modes
3. Theme preference is saved in localStorage
4. All images use Picsum placeholders - replace with your own images

## Customization

### Changing Colors
Edit the CSS variables in `assets/css/style.css`:

```css
:root {
  --bg-primary: #0F172A;
  --bg-surface: #020617;
  --accent: #3B82F6;
  /* ... */
}
```

### Replacing Images
All images use Picsum placeholders. Replace with your own images:

```html
<!-- Replace this -->
<img src="https://picsum.photos/800/600?random=1" ...>

<!-- With your image -->
<img src="assets/images/your-image.jpg" ...>
```

### Adding Content
All pages use semantic HTML structure. Simply edit the HTML files to add or modify content.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- All animations use CSS transitions only (no JavaScript libraries)
- Images are lazy-loaded for performance
- No external dependencies except Tailwind CSS CDN
- Theme toggle works without page reload
- All text meets WCAG AA contrast requirements

## License

This template is provided as-is for commercial use. Customize as needed for your projects.

## Support

For questions or issues, please refer to the documentation or contact support.

---

**MotionStudio** - Professional Motion Graphics Template
© 2024 All rights reserved

