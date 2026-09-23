# Quick Customization Guide

## How to Customize Each Website for Your Firm

### Step 1: Open the File
- Right-click HTML file → Open with Notepad (or code editor)
- Or use VS Code / Sublime Text

### Step 2: Find & Replace

Use **Ctrl+H** (Find & Replace) in your editor:

#### Company Name
| Find | Replace |
|------|---------|
| `LegalIntake` | Your Company Name |
| `Nautillus Intake` | Your Company Name |
| `St Ives Intake` | Your Company Name |

#### Contact Email
| Find | Replace |
|------|---------|
| `sales@stivestech.com` | your@email.com |
| `support@stivestech.com` | support@email.com |

#### Phone Number
| Find | Replace |
|------|---------|
| `+1 (555) 123-4567` | Your actual number |
| `+1 (555) 987-6543` | Your actual number |

### Step 3: Edit Hero Section

**File Location:**
```html
<section class="hero">
  <div class="hero-content">
    <h1>← CHANGE THIS</h1>
    <p>← CHANGE THIS</p>
```

**Example Changes:**

```html
<!-- Before -->
<h1>Streamline Your Legal Intake in Minutes</h1>
<p>Complete client screening, multi-part forms...</p>

<!-- After (St Ives) -->
<h1>St Ives Legal Intake Platform</h1>
<p>Streamline client screening, form management, and Smokeball submission. Built specifically for St Ives' workflow and team.</p>
```

### Step 4: Change Color Theme (Optional)

Open `style.css` and edit the `:root` section:

```css
:root {
    /* Change these colors */
    --primary-color: #E8F4F8;      /* Light background */
    --secondary-color: #B3E0E8;    /* Medium accent */
    --accent-color: #7ECFE0;       /* Button color */
    --dark-text: #2C3E50;          /* Text */
    --light-text: #5A7280;         /* Subtext */
}
```

**Soft Color Palettes (pick one):**

**Option 1: Light Blue (current)**
```css
--primary-color: #E8F4F8;
--secondary-color: #B3E0E8;
--accent-color: #7ECFE0;
```

**Option 2: Soft Green**
```css
--primary-color: #E8F5E9;
--secondary-color: #C8E6C9;
--accent-color: #81C784;
```

**Option 3: Soft Purple**
```css
--primary-color: #F3E5F5;
--secondary-color: #E1BEE7;
--accent-color: #CE93D8;
```

**Option 4: Soft Orange**
```css
--primary-color: #FFF3E0;
--secondary-color: #FFE0B2;
--accent-color: #FFB74D;
```

### Step 5: Update Logo/Brand Name

**Location 1: Navbar**
```html
<div class="nav-logo">
    <h2>LegalIntake</h2>  <!-- Change this -->
</div>
```

**Location 2: Footer**
```html
<h4>LegalIntake</h4>  <!-- Change this -->
<p>Modern intake management for law firms</p>  <!-- And this -->
```

### Step 6: Customize Features Section

**Each feature card has:**
```html
<div class="feature-card">
    <div class="feature-icon">📋</div>      <!-- Emoji icon -->
    <h3>Lead Screening</h3>                 <!-- Title -->
    <p>Quickly screen new clients...</p>    <!-- Description -->
</div>
```

**To customize:**
1. Change emoji icon (any emoji.com emoji works)
2. Update title
3. Update description
4. Remove/add cards as needed

**Available emoji icons:**
- 📋 Documents/Forms
- ⚡ Speed/Performance
- 🔗 Connections/Integration
- 👥 People/Team
- 🔔 Notifications/Alerts
- 📊 Data/Reports
- 🎯 Target/Focus
- ✅ Checkmark/Complete
- 📝 Writing/Notes
- 🌍 Global/Locations
- 📧 Email/Communication
- ⚙️ Settings/Configuration

### Step 7: Update Workflow Steps

**Location:**
```html
<section class="how-it-works">
    <h2>How It Works</h2>
    <div class="steps">
        <div class="step">
            <div class="step-number">1</div>
            <h3>Create Lead</h3>          <!-- Change -->
            <p>Enter client info in...</p>  <!-- Change -->
        </div>
```

**Simple Example Change:**
```html
<!-- Default -->
<h3>Create Lead</h3>
<p>Enter client info in screening form</p>

<!-- Customized -->
<h3>Receive Inquiry</h3>
<p>New prospect contacts firm</p>
```

### Step 8: Update Pricing Section (Optional)

**Location:**
```html
<div class="pricing-card">
    <h3>Professional</h3>
    <p class="price">Custom</p>
    <ul>
        <li>✓ Up to 15 lawyers</li>
        <li>✓ Unlimited forms</li>
        <li>✓ All features</li>
    </ul>
</div>
```

**To customize:**
1. Keep "Custom" for pricing (or add actual price)
2. Update feature list based on your offering
3. Change button text: "Contact Sales" → "Start Free Trial"

### Step 9: Update Footer Links

**Location:**
```html
<footer class="footer">
    <div class="footer-content">
        <div class="footer-section">
            <h4>Company</h4>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>  <!-- These links -->
            </ul>
        </div>
```

**Update with real links:**
```html
<li><a href="https://yoursite.com/about">About</a></li>
<li><a href="https://yoursite.com/blog">Blog</a></li>
<li><a href="https://yoursite.com/contact">Contact</a></li>
```

### Step 10: Test Your Changes

**Before uploading:**
1. Open HTML file in browser
2. Check all text renders correctly
3. Test on mobile (resize browser)
4. Click buttons (they don't go anywhere, that's OK)
5. Check colors look good

## Common Customizations Checklist

- [ ] Company name
- [ ] Hero headline
- [ ] Hero subheading
- [ ] Feature cards (update titles/descriptions)
- [ ] Workflow steps
- [ ] Contact email
- [ ] Phone number
- [ ] Footer company name
- [ ] Footer description
- [ ] Color scheme (if desired)
- [ ] Logo/branding

## Quick Edits for Each Firm

### St Ives Version
```html
<!-- Key edits -->
<h1>St Ives Legal Intake Platform</h1>
<h2>St Ives Intake System</h2>
<p>Built specifically for St Ives' workflow and team.</p>
```

### Nautillus Legal Version
```html
<!-- Key edits -->
<h1>Nautillus Legal Client Intake Platform</h1>
<h2>Nautillus Intake</h2>
<p>Designed for estate planning and family law practices.</p>
```

### Ops Firm Version
```html
<!-- Key edits -->
<h1>Ops Intake Management Hub</h1>
<h2>Ops Intake Hub</h2>
<p>Perfect for managing high-volume intake across departments.</p>
```

### ZED Law Version
```html
<!-- Key edits -->
<h1>ZED Law Client Intake Platform</h1>
<h2>ZED Intake Platform</h2>
<p>From screening to Smokeball submission in one system.</p>
```

## Adding Custom Content

### Add Testimonial
```html
<section class="testimonials">
    <div class="testimonial">
        <p>"This saved us 5+ hours every week!" - John Smith, Partner</p>
    </div>
</section>
```

### Add Case Study
```html
<section class="case-study">
    <h2>Case Study: [Firm Name]</h2>
    <p>How [Firm] improved intake by 40%</p>
</section>
```

### Add Form
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
    <input type="email" name="email" placeholder="your@email.com">
    <input type="text" name="name" placeholder="Your name">
    <button type="submit">Request Demo</button>
</form>
```

## Save & Deploy

### 1. Save Changes
- File → Save (Ctrl+S)
- Make sure file is saved as `.html`

### 2. Test Locally
- Open file in browser
- Test responsiveness
- Click buttons

### 3. Deploy
**Option A: Netlify (FREE)**
1. Go to netlify.com
2. Drag & drop your HTML and CSS files
3. Get live URL instantly

**Option B: GitHub Pages (FREE)**
1. Create GitHub account
2. Create new repository
3. Upload HTML/CSS files
4. Enable GitHub Pages
5. Get free domain

**Option C: Your Web Server**
1. Upload files via FTP
2. Point domain to server
3. Update links as needed

## Troubleshooting

**Images/CSS not loading?**
- Ensure `style.css` is in same folder as HTML
- Check file paths are relative: `href="style.css"` not `href="C:\..."`

**Buttons not working?**
- That's normal. Add onclick handlers or form attributes for functionality
- Right now they're just placeholder buttons

**Colors look wrong?**
- Check CSS file is loaded (open browser DevTools)
- Make sure color values are in correct format: `#RRGGBB`

**Text cut off on mobile?**
- CSS is responsive, should work fine
- Test by resizing browser window

## Support

For questions about:
- **Product features** → See CLAUDE.md
- **Deployment** → Search "[Platform] deploy HTML"
- **Customization** → See CUSTOMIZATION_GUIDE.md (this file)
- **Technical issues** → Check browser console (F12)

---

**Last Updated**: 2026-09-22  
**Status**: Ready to deploy
