# 🚀 Quick Start Guide

## Get Your Website Running in 3 Steps

### Step 1: Install Dependencies
Open your terminal in the project folder and run:
```bash
npm install
```
This will download all required packages (React, Tailwind, Framer Motion, etc.)

### Step 2: Start Development Server
```bash
npm run dev
```
Your website will open at `http://localhost:3000`

### Step 3: Make It Yours
Edit these files to customize:

#### 📝 Update Your Content
- **Services**: `src/components/Services.jsx` (line 7-26)
- **Projects**: `src/components/Projects.jsx` (line 8-43)
- **WhatsApp Number**: `src/components/ContactForm.jsx` (line 32)
- **Company Name**: `src/components/Navigation.jsx` (line 33)

#### 🎨 Change Colors (Optional)
- Edit `tailwind.config.js` lines 9-15

#### 🔤 Change Fonts (Optional)
- Update `index.html` line 11 (Google Fonts)
- Edit `tailwind.config.js` lines 16-19

---

## 📱 Test on Mobile

After starting the dev server:
1. Find your computer's IP address
2. Open `http://YOUR-IP:3000` on your phone

---

## 🌐 Deploy to Production

### Build your site:
```bash
npm run build
```

This creates a `dist` folder with optimized files ready for hosting.

### Hosting Options:
- **Netlify** (easiest): Drag & drop the `dist` folder
- **Vercel**: Connect your GitHub repo
- **Traditional**: Upload `dist` to your web host

---

## 🆘 Common Issues

### "Command not found: npm"
- Install Node.js from https://nodejs.org

### "Port 3000 already in use"
- Change port in `vite.config.js` line 6

### WhatsApp not opening?
- Check phone number format in ContactForm.jsx
- Must be: country code + number (no spaces)

---

## 📞 Need Help?

WhatsApp: (+27) 677 020 221

---

**You're all set! 🎉**
