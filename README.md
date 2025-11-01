# TWO STEP

<img width="293" height="223" alt="TwoStep Prototype" src="https://github.com/user-attachments/assets/8c2cf641-5754-4398-a0fe-ef15e50c65c5" />

**TwoStep** is an adaptive music therapy platform for gait rehabilitation in people with Parkinson’s and other motor disorders. Using rhythmic auditory stimulation (RAS) and generative AI music, it adapts tempo, style, and energy in real time to guide patients and make therapy engaging.

<img width="485" height="329" alt="TwoStep Interface" src="https://github.com/user-attachments/assets/555afdf1-b8ad-447a-a309-62cb11982c42" />

---

## Features

* Real-time BPM monitoring
* Adaptive music generation via Suno API
* Two therapy modes: **Follow** (music follows patient) and **Set** (patient follows music)
* Session start/pause/resume controls
* Responsive design for web

---

## How It Works

* **Frontend:** React + Tailwind CSS
* **Data Capture:** Simulated keystrokes (future wearable support)
* **Control Logic:** Monitors cadence and adjusts music
* **Music Generation:** Suno API creates dynamic, real-time audio

---

## Setup

### Prerequisites

* Node.js ≥16
* npm or yarn

### Installation

```bash
mkdir rhythm-therapy-app
cd rhythm-therapy-app
npm create vite@latest . -- --template react
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
mkdir src/components
```

Add components: `Header.jsx`, `BPMDisplay.jsx`, `MusicGeneration.jsx`, `ControlPanel.jsx`, `SessionStatus.jsx`, `SessionData.jsx`

Start dev server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## Contributing

1. Fork the repo
2. Create a branch
3. Make changes & test
4. Submit a pull request

---
