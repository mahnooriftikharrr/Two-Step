🌸 <p align="center"> <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=40&duration=3000&pause=500&color=FF69B4&center=true&vCenter=true&width=700&lines=🎵+TwoStep+-+Adaptive+Music+Therapy+for+Gait+Rehabilitation" /></p>
<img width="293" height="223" src="https://github.com/user-attachments/assets/8c2cf641-5754-4398-a0fe-ef15e50c65c5" alt="TwoStep Prototype" />

TwoStep is an adaptive music therapy platform designed for people with Parkinson’s disease and other motor disorders. By combining rhythmic auditory stimulation (RAS) with generative AI music, TwoStep creates therapy sessions that are motivating, adaptive, and uplifting.

🌟 Inspiration

People with motor disorders face challenges in mobility and independence. Music is universal—joyful, soothing, healing.

We wanted to combine:

💻 Tech & AI – clinical precision for rehab

🎶 Music – emotional engagement and motivation

Result: a personalized, adaptive therapy experience that evolves with each patient.

🛠 What It Does

Captures step rhythm (keyboard input in prototype; future wearable integration)

Compares patient cadence to target BPM

Generates adaptive music in real time with Suno API

Therapy modes:

Follow Mode – music follows patient

Set Mode – patient follows music

💡 How We Built It

Frontend: React + Tailwind CSS (💖 responsive & cute interface)

Data Capture: Step rhythm simulation; wearable integration next

Control Logic: Detects BPM deviations & adjusts music

Music Generation: Adaptive generative music using Suno

Testing: Validated smooth tempo transitions and user experience

🎯 Features

🎵 Real-time BPM monitoring

🌈 Adaptive music sessions

⏯️ Start/pause/resume session controls

🧩 Two therapy modes (Follow & Set)

📱 Responsive web design

📊 Export session data as JSON

<img width="485" height="329" src="https://github.com/user-attachments/assets/555afdf1-b8ad-447a-a309-62cb11982c42" alt="TwoStep Interface" />
⚡ Setup Instructions
Prerequisites

Node.js ≥16

npm or yarn

Installation
# Create project folder
mkdir rhythm-therapy-app
cd rhythm-therapy-app

# Initialize React project with Vite
npm create vite@latest . -- --template react

# Install dependencies
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


Replace or create files:
package.json, vite.config.js, tailwind.config.js, postcss.config.js, index.html, src/main.jsx, src/App.jsx, src/index.css

Create components folder & files:

mkdir src/components


Components: Header.jsx, BPMDisplay.jsx, MusicGeneration.jsx, ControlPanel.jsx, SessionStatus.jsx, SessionData.jsx

Start dev server:

npm run dev


Open http://localhost:5173

🗂 Project Structure
rhythm-therapy-app/
├── public/
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js

🎵 Key Features Explained
BPM Simulation

Simulates patient and music BPM updating in real time

Therapy Modes

Follow: Music adapts to patient pace

Set: Patient matches a target BPM

Session Management

Start/pause/resume

Real-time timer ⏱

Sync status indicators

Export session data 💾

Music Generation

Adaptive tracks via Suno API

Control: genre 🎸, tempo 🎶, mood 🌈, prompts ✨
