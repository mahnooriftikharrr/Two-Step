<!-- 🎵 Animated Header -->

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=26&duration=3000&pause=800&color=FF69B4&center=true&vCenter=true&width=800&lines=🎵+TwoStep+–+Adaptive+Music+Therapy+Platform;Built+at+HackMIT+2025+in+24+Hours;AI+Music+for+Gait+Rehabilitation+💻💗" alt="Typing Animation" />
</p>

---

# 🎵 TwoStep – Adaptive Music Therapy Platform

**TwoStep** is an **AI-powered adaptive music therapy platform** designed to support **gait rehabilitation** in individuals with **Parkinson’s disease** and other motor disorders.
By combining **rhythmic auditory stimulation (RAS)** and **generative AI music**, TwoStep personalizes walking therapy by adapting tempo, rhythm, and style in real time — making rehabilitation **more engaging, motivating, and accessible.**

Built in just **24 hours at HackMIT 2025**, TwoStep merges **AI, neuroscience, and creativity** to reimagine how we move, heal, and listen.

---

## 🌟 Overview

TwoStep helps patients walk to the beat of dynamically generated music that adapts to their pace.

Patients can:

* Walk at their natural rhythm while TwoStep’s AI adjusts the music tempo automatically
* Choose between two therapy modes — **Follow** and **Set** — to personalize sessions
* Track cadence (BPM) and control session start/pause/resume
* Experience therapy through an intuitive, web-based interface

---

## ⚙️ How It Works

| Component               | Description                                                                                                |
| ----------------------- | ---------------------------------------------------------------------------------------------------------- |
| 🎨 **Frontend**         | Built with **React** and **Tailwind CSS** for an interactive, responsive design                            |
| 🎵 **Music Generation** | Real-time adaptive sound using **Suno API**                                                                |
| 🧠 **Adaptive Logic**   | Continuously monitors cadence and modifies music tempo accordingly                                         |
| 💻 **Data Input**       | Simulated keystrokes for testing (future integration: **wearable sensors**)                                |
| 🩺 **Therapy Modes**    | **Follow Mode:** Music matches the patient’s pace<br>**Set Mode:** Patient synchronizes steps to the music |

---

## 🧠 Tech Stack

| Category               | Technologies                                                    |
| ---------------------- | --------------------------------------------------------------- |
| 💻 **Frontend**        | React, Tailwind CSS                                             |
| 🎧 **Music AI**        | Suno API                                                        |
| ⚙️ **Logic**           | JavaScript, Node.js                                             |
| 🧩 **Prototype Input** | Simulated cadence via keystrokes                                |
| 🚀 **Future Scope**    | Integration with IMU sensors, smart shoes, and wearable devices |

---

## 💻 Features

* 🎵 Real-time **BPM monitoring and adjustment**
* 🧠 Intelligent **adaptive music generation** using generative AI
* 🩰 **Two interactive therapy modes** (Follow / Set)
* ⏯️ **Session control panel** (start, pause, resume)
* 🌐 Fully responsive **web interface** for desktop and mobile

---

## 🧩 Setup & Installation

### Prerequisites

* Node.js ≥ 16
* npm or yarn

### Installation

```bash
# Create project directory
mkdir rhythm-therapy-app
cd rhythm-therapy-app

# Initialize React app with Vite
npm create vite@latest . -- --template react

# Install dependencies
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Add your components
mkdir src/components
```

Add these files:
`Header.jsx`, `BPMDisplay.jsx`, `MusicGeneration.jsx`, `ControlPanel.jsx`, `SessionStatus.jsx`, `SessionData.jsx`

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## 💡 Inspiration

Research on **Rhythmic Auditory Stimulation (RAS)** shows that music with consistent rhythm can **improve stride length, cadence, and balance** in people with Parkinson’s disease.
TwoStep takes that concept further — combining it with **AI-generated adaptive music** to make therapy more personalized and fun. 🎶

---

## 🤝 Contributing

1. **Fork** this repository
2. **Create** a new branch
3. **Commit** and test your changes
4. **Submit** a pull request

---

## 🩷 Team

Developed at **HackMIT 2025** by a team of students passionate about **AI, accessibility, and creative technology**.
Our goal: make therapy sessions not only effective, but *musical, human, and hopeful.*


Would you like me to make you a **matching GitHub banner** (like your animated pink profile theme, with “🎵 TwoStep | Adaptive AI Music Therapy Platform”) to place at the top of this project repo? It would look perfect with this layout.
