# Legal Intake Management Platform - Website Files

This folder contains complete HTML/CSS websites for selling the Legal Intake Management Platform to law firms.

## Files Included

### Core Files
- **index.html** - Generic landing page (white label)
- **style.css** - Shared styling (light blue, soft colors, responsive)

### Firm-Specific Websites
- **st-ives.html** - St Ives Solicitors branded version
- **nautillus-legal.html** - Nautillus Legal branded version
- **ops-firm.html** - Ops (Operations) branded version
- **zed-law.html** - ZED Law branded version

### Documentation
- **CLAUDE.md** - Complete product guide with features, demos, and technical specs
- **README.md** - This file

## Getting Started

### 1. View the Websites Locally
Simply open any HTML file in your browser:
```
Right-click → Open with → Web Browser
```

Or drag the file into your browser window.

### 2. Customize for a Firm

Edit the HTML file and change:

**Company Name:**
```html
<h2>Your Firm Name Intake</h2>
```

**Hero Section:**
```html
<h1>Your Firm Name Client Intake Platform</h1>
<p>Your custom description here</p>
```

**Contact Info (in footer):**
```html
<li><a href="#">sales@yourfirm.com</a></li>
<li><a href="#">support@yourfirm.com</a></li>
<li><a href="#">+1 (555) 123-4567</a></li>
```

**Logo:**
Replace "LegalIntake" or firm name in navbar

### 3. Color Customization

Edit `style.css` colors:
```css
:root {
    --primary-color: #E8F4F8;      /* Light blue background */
    --secondary-color: #B3E0E8;    /* Medium blue */
    --accent-color: #7ECFE0;       /* Bright blue (buttons) */
    --dark-text: #2C3E50;          /* Dark text */
    --light-text: #5A7280;         /* Gray text */
}
```

**Pre-defined soft colors:**
- Light Blue (current): `#E8F4F8`, `#B3E0E8`, `#7ECFE0`
- Soft Green: `#E8F5E9`, `#A5D6A7`, `#4CAF50`
- Soft Purple: `#F3E5F5`, `#CE93D8`, `#9C27B0`
- Soft Orange: `#FFF3E0`, `#FFB74D`, `#FF9800`

## Feature Highlights by Section

### Hero Section
- Compelling headline
- Brief value prop
- CTA buttons
- Kanban board mockup

### Features Section
- 6-8 feature cards with icons
- Easy to scan descriptions
- Benefits-focused

### How It Works
- 4-step workflow visualization
- Clear progression
- Mobile responsive

### Demo Section
- Video placeholder (can add YouTube embed)
- Key demo highlights
- CTA button

### Integrations
- Shows CMS compatibility
- Case management systems
- Webhook/automation options

### Pricing Section
- Flexible pricing tiers
- Contact sales option
- Feature lists

### CTA Section
- Final call-to-action
- High-contrast design
- Clear value proposition

### Footer
- Company info
- Quick links
- Contact details
- Legal links (Privacy, Terms, DPA)

## Responsive Design

All pages are mobile-responsive:
- Desktop: Full width layout
- Tablet: Adjusted grid columns
- Mobile: Single column, optimized touch targets

## Deployment Options

### 1. Static Hosting (Free/Cheap)
- **Netlify** - Drag & drop deployment
- **GitHub Pages** - Free static hosting
- **Vercel** - Optimized for web performance

### 2. Self-Hosted
- Copy files to your web server
- Update file paths if needed
- Ensure CSS loads correctly

### 3. Web Builder Integration
- Export HTML/CSS
- Import into Webflow, Wix, etc.
- Customize further

## Adding Interactive Features

To make websites more dynamic:

1. **Add Contact Form**
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
  <input type="email" name="email" required>
  <button type="submit">Get Demo</button>
</form>
```

2. **Add YouTube Video**
Replace video placeholder with:
```html
<iframe width="100%" height="400" 
  src="https://www.youtube.com/embed/VIDEO_ID" 
  frameborder="0" allowfullscreen></iframe>
```

3. **Add Scheduling Widget**
Use Calendly, Acuity Scheduling, or Typeform embed

## Customization Checklist

- [ ] Update company name/logo
- [ ] Change hero headline
- [ ] Update firm-specific features
- [ ] Add contact email/phone
- [ ] Add/remove feature cards
- [ ] Update integration names
- [ ] Change color scheme (optional)
- [ ] Add video or screenshots
- [ ] Update footer links
- [ ] Test on mobile

## Best Practices

1. **Keep it simple** - Don't overcomplicate
2. **Mobile first** - Test on phones
3. **Fast loading** - Images optimized
4. **Clear CTAs** - Make action obvious
5. **Consistent branding** - Use same colors/fonts
6. **Social proof** - Add testimonials if available

## File Structure

```
for selling/
├── index.html              (Generic white-label)
├── style.css               (Shared styles)
├── st-ives.html           (St Ives version)
├── nautillus-legal.html   (Nautillus Legal version)
├── ops-firm.html          (Ops version)
├── zed-law.html           (ZED Law version)
├── CLAUDE.md              (Product guide)
└── README.md              (This file)
```

## Color Palette (Soft & Easy on Eyes)

### Current Theme: Light Blue
```
Primary: #E8F4F8 (very light blue background)
Secondary: #B3E0E8 (medium light blue)
Accent: #7ECFE0 (bright blue for buttons/highlights)
Text Dark: #2C3E50 (dark blue-gray text)
Text Light: #5A7280 (medium gray text)
White: #FFFFFF (pure white)
```

### Alternative Themes
**Soft Green:**
```css
--primary-color: #E8F5E9;
--secondary-color: #C8E6C9;
--accent-color: #81C784;
```

**Soft Purple:**
```css
--primary-color: #F3E5F5;
--secondary-color: #E1BEE7;
--accent-color: #CE93D8;
```

## Support & Updates

### To Update All Sites
1. Edit `style.css` (affects all pages)
2. Copy common sections to other HTML files
3. Test on each firm-specific page

### To Add New Features
1. Create new section in HTML
2. Add corresponding CSS
3. Test responsiveness
4. Copy to other files if needed

## Next Steps

1. **Test Locally** - Open in browser
2. **Customize** - Update firm names/colors
3. **Deploy** - Upload to Netlify/Vercel
4. **Add Forms** - Connect to Formspree or similar
5. **Add Analytics** - Track visitor behavior
6. **Promote** - Share link with prospects

## Questions?

Refer to CLAUDE.md for:
- Product features overview
- Live demo walkthrough
- Integration details
- Technical architecture
- Sales positioning
- Success metrics

---

**Created**: 2026-09-22  
**Version**: 1.0  
**Status**: Production Ready

All files use soft, light-focused design that's easy on the eyes. No dark mode by default.
