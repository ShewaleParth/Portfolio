# 🚀 Parth Shewale — AI & Data Science Portfolio

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Portfolio-Live-brightgreen?style=for-the-badge&logo=vercel)
![Built With](https://img.shields.io/badge/Built%20With-React%20%2B%20Vite-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

**A sci-fi themed, interactive portfolio showcasing AI/ML projects, skills, and engineering experience.**

[🌐 Live Demo](#) • [📄 Resume](#) • [💼 LinkedIn](https://linkedin.com/in/parth-shewale) • [🐙 GitHub](https://github.com/ShewaleParth)

</div>

---

## 👨‍💻 About

This is the personal portfolio of **Parth Shewale**, a final-year B.E. student in **Artificial Intelligence & Data Science** at Terna Engineering College, Navi Mumbai. The portfolio is designed with a dark sci-fi / intelligence-engine aesthetic to showcase AI/ML projects, technical skills, certifications, and more.

---

## ✨ Features

- 🎨 **Sci-Fi Dark Theme** — Custom intelligence-engine interface with glassmorphism and neon accents
- ⚡ **Smooth Animations** — GSAP + Framer Motion powered transitions and scroll effects
- 🤖 **AI Systems Showcase** — Highlighted projects: MisinfoGuard AI, Predictive Inventory, GenAI Reports
- 📊 **Capability Matrix** — Visual skill proficiency display across ML, Python, Web, and Data stacks
- 🧪 **Interactive AI Simulator** — Live demo-style interactive section
- 📈 **Engineering Timeline** — Career & project milestone visualization
- 📬 **Contact Console** — Supabase-powered contact form
- 📥 **Resume Download** — One-click resume PDF download
- 📱 **Fully Responsive** — Optimized for all screen sizes

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Frontend** | React 18, TypeScript, Vite |
| **Styling** | Tailwind CSS, shadcn/ui, Radix UI |
| **Animations** | Framer Motion, GSAP, Lenis (smooth scroll) |
| **Backend / DB** | Supabase (contact form + data) |
| **State Management** | TanStack React Query |
| **Routing** | React Router DOM v6 |
| **Charts** | Recharts |
| **Forms** | React Hook Form + Zod |
| **Deployment** | Vercel |

---

## 🗂️ Project Structure

```
portfolio/
├── public/              # Static assets (resume PDF, favicon, profile photo)
├── src/
│   ├── components/      # All UI components (70+ components)
│   │   ├── sections/    # Page sections (Hero, Projects, Skills, etc.)
│   │   └── ui/          # Reusable shadcn UI components
│   ├── hooks/           # Custom React hooks
│   ├── integrations/    # Supabase client & type definitions
│   ├── pages/           # Page-level components
│   ├── lib/             # Utility functions
│   └── App.tsx          # Root app with routing
├── supabase/            # Supabase configuration
├── index.html           # HTML entry point
├── vite.config.ts       # Vite configuration
├── tailwind.config.ts   # Tailwind configuration
└── tsconfig.json        # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v18+`
- npm or bun

### 1. Clone the repository
```bash
git clone https://github.com/ShewaleParth/Portfolio-Main.git
cd Portfolio-Main
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env` file in the root directory:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
VITE_SUPABASE_PROJECT_ID=your_supabase_project_id
```

> Get these from your [Supabase project dashboard](https://supabase.com/dashboard).

### 4. Start the development server
```bash
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

---

## 🔧 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint for code quality checks |

---

## ☁️ Deployment

This project is deployed on **Vercel** with automatic deployments on every push to `main`.

### Manual Deployment Steps
1. Fork or clone this repository
2. Connect the repo to [Vercel](https://vercel.com)
3. Set the environment variables in Vercel project settings:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`
   - `VITE_SUPABASE_PROJECT_ID`
4. Vercel auto-detects Vite — build command: `npm run build`, output: `dist`
5. Click **Deploy** 🚀

---

## 📬 Featured Projects

| Project | Description | Stack |
|---|---|---|
| **MisinfoGuard AI** | Multi-agent LLM system for automated fact-checking & credibility scoring | Python, FastAPI, LangChain, Gemini |
| **Predictive Inventory** | ML pipeline for stock depletion prediction & demand forecasting | Python, PyTorch, NeuralProphet, Streamlit |
| **GenAI Reports** | GenAI assistant to auto-generate executive reports using RAG pipeline | Python, LangChain, Llama-3, Pinecone |

---

## 🎓 Education

**Bachelor of Engineering — Artificial Intelligence & Data Science**  
Terna Engineering College, Navi Mumbai | 2022 – 2026 | CGPA: 7.14

---

## 📫 Contact

- 📧 Email: [sparth7972@gmail.com](mailto:sparth7972@gmail.com)
- 📍 Location: Thane, Maharashtra, India
- 💼 LinkedIn: [linkedin.com/in/parth-shewale](https://linkedin.com/in/parth-shewale)
- 🐙 GitHub: [github.com/ShewaleParth](https://github.com/ShewaleParth)

---

<div align="center">

Made with ❤️ by **Parth Shewale**

⭐ If you found this project helpful, consider giving it a star!

</div>
