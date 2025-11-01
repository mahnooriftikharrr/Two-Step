# 🎵 TwoStep – Adaptive Music Therapy Platform

<img width="293" height="223" alt="TwoStep Prototype" src="https://github.com/user-attachments/assets/8c2cf641-5754-4398-a0fe-ef15e50c65c5" />

**TwoStep** is an adaptive **AI-powered music therapy platform** for **gait rehabilitation** in people with **Parkinson’s** and other motor disorders.
Using **rhythmic auditory stimulation (RAS)** and **generative AI**, TwoStep adapts **tempo, rhythm, and energy** in real time — guiding patients through movement therapy that’s both effective and engaging.

🧠 Built in **24 hours at HackMIT 2025**, TwoStep combines **AI**, **neuroscience**, and **human-centered design** to make rehabilitation musical, personalized, and fun.

---

## 🌟 Features

✨ **Real-Time BPM Monitoring** – Tracks cadence dynamically
🎶 **Adaptive Music Generation** – Uses **Suno API** to create music that responds in real time
🩰 **Dual Therapy Modes**

* **Follow Mode:** Music adapts to the patient’s steps
* **Set Mode:** Patient follows the rhythm of the generated music
  ⏯️ **Interactive Session Controls** – Start, pause, and resume therapy with one click
  💻 **Responsive Web Interface** – Built for accessibility and ease of use

<img width="485" height="329" alt="TwoStep Interface" src="https://github.com/user-attachments/assets/555afdf1-b8ad-447a-a309-62cb11982c42" />

---

## ⚙️ How It Works

🖥 **Frontend:** React + Tailwind CSS for a smooth, responsive UI
⌨️ **Data Input:** Simulated keystrokes to represent patient cadence (future: wearable integration)
🎚 **Control Logic:** Continuously adjusts BPM to match or guide gait rhythm
🎵 **Generative Audio:** **Suno API** generates dynamic music that adapts in real time

---

## 🧠 Tech Stack

| 💻 Category         | 🛠️ Technologies                                   |
| ------------------- | -------------------------------------------------- |
| **Frontend**        | React, Tailwind CSS                                |
| **Logic Layer**     | JavaScript, Node.js                                |
| **Music Engine**    | Suno API                                           |
| **Data Simulation** | Keystroke-based cadence (future: wearable sensors) |

---

## 🚀 Setup & Installation

### 🧩 Prerequisites

* Node.js ≥ 16
* npm or yarn

### ⚙️ Installation

```bash
# Create project directory
mkdir rhythm-therapy-app
cd rhythm-therapy-app

# Create a new React app with Vite
npm create vite@latest . -- --template react

# Install dependencies
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Create components folder
mkdir src/components
```

Add components:
`Header.jsx`, `BPMDisplay.jsx`, `MusicGeneration.jsx`, `ControlPanel.jsx`, `SessionStatus.jsx`, `SessionData.jsx`

### ▶️ Run the App

```bash
npm run dev
```

Then open 👉 [http://localhost:5173](http://localhost:5173)

---

## 💡 Inspiration

Research shows that **rhythmic auditory stimulation (RAS)** helps improve **stride length, cadence, and mobility** in individuals with Parkinson’s and other movement disorders.
TwoStep reimagines this concept by merging **AI-generated adaptive music** with **personalized therapy**, turning rehabilitation into an interactive and empowering experience.

> 🎧 *“We wanted to make therapy feel less like treatment — and more like dancing with your recovery.”*

---

## 🩷 Team

Built at **HackMIT 2025** by a team of students passionate about **AI**, **music**, and **health tech**.
Our goal: make therapy **smarter**, **personalized**, and **human-centered**.

---

## 🏷️ Project Info

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge\&logo=react\&logoColor=black)
![Tailwind](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge\&logo=tailwindcss\&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-6DA55F?style=for-the-badge\&logo=node.js\&logoColor=white)
![Suno API](https://img.shields.io/badge/Suno%20API-FF69B4?style=for-the-badge\&logo=musicbrainz\&logoColor=white)
![HackMIT](https://img.shields.io/badge/HackMIT-FFC0CB?style=for-the-badge\&logo=github\&logoColor=black)

---

## 🤝 Contributing

1. Fork this repository
2. Create a new feature branch
3. Implement and test your updates
4. Submit a pull request 💡

---

## 📫 Connect

👩🏻‍💻 [LinkedIn](https://linkedin.com/in/mahnooriftikharrr)
📧 [mahnooriftikharrr@gmail.com](mailto:mahnooriftikharrr@gmail.com)
