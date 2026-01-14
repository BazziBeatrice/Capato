# Website Improvement Plan
## Azienda Agricola Capato

---

## 🎯 Overview

This document outlines potential improvements for the Azienda Agricola Capato website to enhance performance, user experience, accessibility, SEO, and modern web standards.

---

## 🚀 Performance Optimizations

### Video Optimization
- **Current Issue**: Background video (`video-home_2.mp4`) may be large and impact load times
- **Recommendations**:
  - Compress video file using modern codecs (H.265/HEVC)
  - Provide multiple formats (WebM, MP4) for browser compatibility
  - Add poster image for faster initial render
  - Consider lazy loading or using intersection observer
  - Add preload hints: `<link rel="preload" as="video" href="...">`

### Image Optimization
- **Recommendations**:
  - Convert images to modern formats (WebP with fallbacks)
  - Implement responsive images with `srcset` and `sizes` attributes
  - Add lazy loading: `loading="lazy"` for images below the fold
  - Optimize favicon sizes (currently loading 5 different sizes)
  - Host social media preview images locally instead of using external services (ibb.co)

### Resource Loading
- **Current Issue**: Multiple external font sources and libraries
- **Recommendations**:
  - Combine and minimize font requests
  - Use `font-display: swap` to prevent invisible text
  - Consider self-hosting Google Fonts for better performance
  - Defer non-critical JavaScript
  - Minify CSS and JavaScript files
  - Implement critical CSS inline for above-the-fold content

---

## ♿ Accessibility Improvements

### Semantic HTML
- **Issues**:
  - Using `<p>` tags for main title instead of `<h1>` (line 131-132)
  - Missing proper heading hierarchy
  - Iframe missing title attribute (line 226)
  
- **Recommendations**:
  - Change `<p id="main-title-h1">` to actual `<h1>` element
  - Ensure proper heading hierarchy (h1 → h2 → h3)
  - Add `title` attribute to iframe: `title="Google Maps Location"`
  - Add `<main>` landmark (already present ✓)

### ARIA and Labels
- **Recommendations**:
  - Add `aria-label` to navigation buttons
  - Add `aria-expanded` state to menu toggle
  - Add `aria-current="page"` for active navigation items
  - Ensure all interactive elements have accessible names
  - Add skip-to-content link for keyboard navigation

### Language Switching
- **Current Issue**: Language switching uses inline onclick handlers
- **Recommendations**:
  - Move JavaScript to external file
  - Add `aria-label` to language switcher buttons
  - Consider using `<select>` dropdown for better accessibility
  - Add visual indicator for current language

### Keyboard Navigation
- **Recommendations**:
  - Ensure all interactive elements are keyboard accessible
  - Add visible focus indicators
  - Test tab order is logical
  - Add escape key handler to close overlay menu

---

## 🔍 SEO Enhancements - fatto!

### Meta Tags
- **Current Issues**:
  - Meta keywords tag is outdated and ignored by search engines (line 12)
  - OG image uses external hosting service
  
- **Recommendations**:
  - Remove meta keywords tag
  - Host OG image locally
  - Add structured data (JSON-LD) for local business
  - Add canonical URL tags
  - Implement hreflang tags for Italian/English versions

### Structured Data Example
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Capato Angelino Mario Bruno E Figli Società Agricola S.S.",
  "image": "https://societaagricolacapato.it/assets/images/og-image.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via Rovigo, 298",
    "addressLocality": "Lusia",
    "addressRegion": "RO",
    "postalCode": "45020",
    "addressCountry": "IT"
  },
  "telephone": "+39 3465358629",
  "openingHours": "Mo-Sa 07:00-18:00"
}
```

### Content Optimization
- **Recommendations**:
  - Add alt text to all images (loader gif, flags, icons)
  - Ensure unique page titles for all pages
  - Add meta descriptions to all pages
  - Create XML sitemap
  - Add robots.txt file

---

## 🎨 Modern Web Standards - sta facendo!

### HTML5 Best Practices
- **Issues**:
  - Using deprecated `frameborder="0"` on iframe (line 226)
  - Inline styles scattered throughout (lines 107, 108, 166, etc.)
  
- **Recommendations**:
  - Remove `frameborder` (use CSS instead)
  - Move all inline styles to CSS files
  - Use CSS custom properties (variables) for consistent theming
  - Consider using CSS Grid for layout instead of Bootstrap grid

### JavaScript Improvements
- **Current Issues**:
  - Inline onclick handlers (lines 88-92, 103, 107, 108, 141)
  - Multiple jQuery versions loaded
  
- **Recommendations**:
  - Move all event handlers to external JS files
  - Use modern JavaScript (ES6+)
  - Consider removing jQuery dependency (vanilla JS is sufficient)
  - Implement event delegation
  - Add error handling for video playback

### CSS Architecture
- **Recommendations**:
  - Implement BEM or similar naming convention
  - Use CSS custom properties for colors, spacing, fonts
  - Create utility classes for common patterns
  - Ensure responsive design works on all devices
  - Add print stylesheet

---

## 🌐 Internationalization (i18n)

### Current Implementation Issues
- **Problems**:
  - Language switching uses CSS display toggle (body class)
  - Duplicate content in HTML for both languages
  - No language persistence (resets on page reload)
  
- **Recommendations**:
  - Implement proper i18n solution:
    - Option 1: Separate HTML files per language
    - Option 2: JavaScript-based translation system
    - Option 3: Server-side language detection and rendering
  - Store language preference in localStorage or cookie
  - Add `lang` attribute to `<html>` tag dynamically
  - Use proper language codes in URLs (e.g., `/it/`, `/en/`)

---

## 🔒 Security & Privacy

### Current Issues
- **Recommendations**:
  - Add Content Security Policy (CSP) headers
  - Implement Subresource Integrity (SRI) for external scripts
  - Use HTTPS for all resources (check video, images)
  - Add privacy policy page
  - Implement proper cookie consent (currently using third-party script)
  - Update email link (line 256): use `mailto:` protocol

### Cookie Consent
- **Current**: Using external service (nibirumail.com)
- **Recommendation**: Implement GDPR-compliant cookie banner with:
  - Clear explanation of cookies used
  - Granular consent options
  - Easy opt-out mechanism

---

## 📱 Mobile Experience

### Recommendations
- **Touch Interactions**:
  - Ensure touch targets are at least 44x44px
  - Add touch-friendly hover states
  - Test swipe gestures don't conflict with navigation
  
- **Mobile Performance**:
  - Reduce video quality on mobile devices
  - Implement responsive images
  - Test on various screen sizes and devices
  
- **Mobile Navigation**:
  - Ensure menu is easily accessible
  - Add hamburger menu animation
  - Test overlay menu on small screens

---

## 🎬 User Experience Enhancements

### Video Controls
- **Current**: Mute/unmute button only
- **Recommendations**:
  - Add play/pause control
  - Add loading state for video
  - Provide fallback for browsers without video support
  - Consider autoplay policies (many browsers block autoplay with sound)

### Navigation Improvements
- **Recommendations**:
  - Add active state to current page in menu
  - Add smooth scroll behavior
  - Improve arrow-down scroll indicators (make more prominent)
  - Add breadcrumb navigation on inner pages
  - Consider sticky header on scroll

### Loading Experience
- **Current**: Loader with animated GIF
- **Recommendations**:
  - Optimize loader animation (consider CSS animation instead of GIF)
  - Add minimum display time to prevent flash
  - Show loading progress if possible
  - Add fade-out transition

### Interactive Elements
- **Recommendations**:
  - Add hover effects to category cards
  - Implement smooth transitions
  - Add micro-interactions for better feedback
  - Consider parallax effects for depth

---

## 📊 Analytics & Monitoring

### Recommendations
- **Analytics**:
  - Implement Google Analytics or privacy-friendly alternative (Plausible, Fathom)
  - Track user interactions (menu clicks, language switches, video plays)
  - Monitor page load times
  - Track conversion goals (contact form submissions, phone clicks)

- **Error Monitoring**:
  - Implement error tracking (Sentry, LogRocket)
  - Monitor JavaScript errors
  - Track failed resource loads

---

## 🧪 Testing Recommendations

### Cross-Browser Testing
- Test on: Chrome, Firefox, Safari, Edge
- Test on mobile browsers (iOS Safari, Chrome Mobile)
- Verify video playback across browsers

### Performance Testing
- Run Lighthouse audit
- Test with slow 3G connection
- Measure Core Web Vitals (LCP, FID, CLS)
- Use WebPageTest for detailed analysis

### Accessibility Testing
- Run WAVE or axe DevTools
- Test with screen readers (NVDA, JAWS, VoiceOver)
- Verify keyboard navigation
- Check color contrast ratios

---

## 🔧 Technical Debt

### Code Quality
- **Recommendations**:
  - Remove commented-out code (lines 88-89, 245)
  - Consolidate duplicate code
  - Add code comments for complex sections
  - Implement linting (ESLint, Stylelint)
  - Add code formatting (Prettier)

### File Organization
- **Current Structure**: ✓ Good separation of concerns
- **Recommendations**:
  - Consider build process (Webpack, Vite, Parcel)
  - Implement version control for assets
  - Create development vs. production builds
  - Add source maps for debugging

---

## 🎯 Priority Matrix

### High Priority (Do First)
1. ✅ Fix semantic HTML (h1 tag)
2. ✅ Optimize video file size
3. ✅ Add proper alt text to images
4. ✅ Remove inline JavaScript
5. ✅ Fix iframe accessibility
6. ✅ Implement proper email link

### Medium Priority (Do Soon)
1. 🔶 Implement structured data
2. 🔶 Optimize images (WebP)
3. 🔶 Improve language switching
4. 🔶 Add loading states
5. 🔶 Implement analytics

### Low Priority (Nice to Have)
1. 🔷 Remove jQuery dependency
2. 🔷 Implement CSS custom properties
3. 🔷 Add build process
4. 🔷 Create component library
5. 🔷 Add animations and micro-interactions

---

## 📝 Quick Wins (Easy Fixes)

These can be implemented immediately with minimal effort:

1. **Line 131-132**: Change `<p id="main-title-h1">` to `<h1>`
2. **Line 226**: Add `title="Mappa Google - Sede Capato"` to iframe
3. **Line 226**: Remove `frameborder="0"` from iframe
4. **Line 256**: Change to `<a href="mailto:societaagricolacapato@gmail.com">`
5. **Line 12**: Remove meta keywords tag
6. **Lines 88-89**: Remove commented code
7. **Line 124**: Add poster attribute to video
8. **Add** `lang="it"` to html tag (line 2)
9. **Add** alt text to images (lines 58, 142)
10. **Add** `rel="noopener noreferrer"` to external links

---

## 🎓 Learning Resources

- [Web.dev - Performance](https://web.dev/performance/)
- [MDN Web Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Schema.org - Local Business](https://schema.org/LocalBusiness)

---

## 📞 Next Steps

1. Review this document and prioritize improvements
2. Create a development roadmap
3. Set up testing environment
4. Implement high-priority fixes
5. Test thoroughly before deployment
6. Monitor performance and user feedback

---

**Document Created**: January 10, 2026  
**Website**: Azienda Agricola Capato  
**Version**: 1.0
