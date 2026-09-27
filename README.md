# Arhan Ahmed — Portfolio Website

A luxury **White & Gold** personal portfolio website for **Arhan Ahmed** — Computer Science undergraduate, Full-Stack Developer, and aspiring AI Engineer.

Built with inspiration from **brittanychiang.com** (clean typography, cursor spotlight glow, fixed side socials) and **bruno-simon.com** (playful micro-interactions, smooth motion, high visual polish).

---

## 🌟 Key Features

1. **Cinematic Preloader Animation**:
   - Fullscreen deep black intro canvas.
   - Elegant golden cursive handwriting signature (`Arhan`) in *Great Vibes* with metallic shimmer.
   - Smooth upward wipe transition revealing the white & gold site.
   - Skippable with a single click; plays only once per session (`sessionStorage`).

2. **Brittany Chiang Cursor Spotlight**:
   - Fluid radial gold glow (`#D4AF37`) tracking the user's cursor across all sections.
   - Subtle low-opacity halo with zero interference with text or buttons.
   - Automatically disabled on mobile/touch screens for optimal performance.

3. **Hero Section & Interactive 3D Orbit**:
   - Animated typewriter cycling through:
     - *"Full Stack Developer"*
     - *"AI Engineer"*
     - *"Computer Science Undergrad"*
   - Interactive orbit graphic: Central core node (*Arhan*) surrounded by 4 continuous orbital satellites (*AI*, *Code*, *Build*, *Learning*) with mouse parallax 3D tilt.
   - Direct CTA buttons: "Explore Projects" & "Download Resume".

4. **Structured Bio & Vision**:
   - Polished narrative breakdown highlighting MERN stack craft and AI engineering.
   - Luxury pull-quote: *"Building intelligent, human-centered software — one real problem at a time."*
   - Education cards for **GRIET (9.1 CGPA)** and **SBTET (9.2 CGPA)**.
   - Production internship timeline at **FlyRank** with token optimization and prompt engineering metrics.
   - Interactive categorized skills matrix (AI/ML, Languages, Frontend, Backend, Databases, Cloud & DevOps).

5. **Featured Projects with GIF/Media Ready Slots**:
   - **Cloud Video Conferencing Platform** (WebRTC, Socket.io, React, Node.js, Express, MongoDB)
   - **BecomeBest: Full-Stack AI Roadmap Planner** (React, Node.js, Express, MongoDB)
   - **Stock Trading Platform** (React, Node.js, Redis, WebSockets)
   - Includes browser mockups with interactive tech visuals and clearly marked `[ADD PROJECT GIF/SCREENSHOT HERE]` slots ready for your GIFs.

6. **Honors & Achievements**:
   - **LeetCode**: 400+ algorithmic problems solved with Easy/Medium/Hard breakdown.
   - **Microsoft Azure**: Full Stack Development Workshop certification card.
   - **Academic Honors**: Top tier 9.2 CGPA distinction card.

7. **Contact & Socials**:
   - Fixed side vertical columns on desktop (GitHub, LinkedIn, LeetCode, direct email).
   - Working contact form with instant validation, Formspree support, and celebratory gold confetti.
   - One-click copy email button with feedback tooltip.

8. **Interactive Resume Modal & PDF**:
   - Instant in-browser CV preview modal.
   - Download button linked to `public/resume.pdf`.

---

## 🛠️ Tech Stack

- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS v4 + Custom Gold Theme Variables
- **Icons:** Lucide React + Custom Brand SVGs
- **Animation:** Framer Motion + Canvas Confetti
- **Typography:** Great Vibes, Plus Jakarta Sans, Cinzel, JetBrains Mono

---

## 🚀 How to Run Locally

```bash
# 1. Navigate to the project folder
cd protfolio

# 2. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

To create a production build:
```bash
npm run build
npm run preview
```

---

## 🖼️ How to Add Your Project GIFs

When you are ready to add your GIFs:
1. Copy your GIF files into `protfolio/src/assets/` (or `protfolio/public/`).
2. Open `protfolio/src/components/ProjectsSection.jsx`.
3. In the `projects` array, update `gifSrc` for each project:
   ```javascript
   // Example:
   gifSrc: '/assets/video-conf-demo.gif',
   ```
4. You can also update the `github` and `demo` URLs with your actual repository and live deployment links.

---

## 📄 How to Update the Resume PDF

A valid PDF has already been generated at `protfolio/public/resume.pdf`.
When you have your updated official resume PDF:
- Simply copy your PDF into `protfolio/public/` and rename it to `resume.pdf`.
- It will automatically be used by both the "Download Resume" buttons and the Resume Modal.

---

## 🚢 Deploying to Vercel

1. Push this repository to your GitHub account (`Md-Arhan24`).
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import this repository.
4. Set the **Root Directory** to `protfolio`.
5. Click **Deploy**. Vercel will automatically detect Vite and publish your site!
