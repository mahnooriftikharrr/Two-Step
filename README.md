# TWO STEP

TwoStep is an adaptive music therapy platform designed to support gait rehabilitation for people with Parkinson’s disease and other motor disorders. Inspired by both the scientific evidence of rhythmic auditory stimulation (RAS) and the universal healing power of music, our team wanted to combine healthcare and music to create something impactful. Music is a constant in people’s lives—whether they are happy, sad, or seeking comfort, they rely on it for motivation and healing. We set out to channel that same emotional and therapeutic strength into a tool that helps patients regain mobility and independence. The platform works by capturing the rhythm of a patient’s steps—simulated via keyboard input in our prototype, with future integration planned for wearables like the Apple Watch—and comparing it to a therapeutic target BPM. Using control logic and generative music APIs, TwoStep adapts the tempo, style, and energy of the music in real time based on patient progress. This creates a personalized, engaging, and motivating therapy experience where the music evolves dynamically to guide movement and reinforce motor learning. We built TwoStep by combining software development, signal processing, and real-time generative audio. The frontend, built with React, provides a clean and intuitive interface for therapists and patients. Algorithms track cadence, calculate deviations, and adjust music parameters seamlessly, while generative music tools (such as Suno) produce adaptive audio that transitions smoothly without lag. Our prototype validated the framework using simulated step data, demonstrating responsiveness and therapeutic potential. What makes TwoStep unique is its flexibility and scalability. It is designed to integrate with wearable devices, capture patient preferences, and personalize therapy experiences not only to clinical goals but also to individual tastes and emotional needs. With more development, TwoStep has the potential to be widely adopted in healthcare, bridging rehabilitation science, patient-centered care, and the emotional impact of music to create meaningful real-world outcomes.

##Inspiration

We were inspired by the challenges people with Parkinson’s disease and other motor disorders face in maintaining mobility and independence. Beyond the clinical side, we were also drawn to the universal role of music in human life—whether people are happy, sad, or in need of comfort, they turn to music as a source of healing, motivation, and emotional strength. Research already shows that rhythmic auditory stimulation (RAS) can improve gait, yet current tools remain rigid or impersonal. We wanted to bring together the emotional power of music and the precision of healthcare technology to create something truly impactful: a therapy platform that adapts to each patient in real time, helping them heal both physically and emotionally.

##What it does

TWOSTEP is an adaptive music therapy platform designed for gait rehabilitation. It captures the rhythm of a patient’s steps—simulated via keyboard input in our prototype, with future integration for wearables like the Apple Watch—and compares it to a therapeutic target BPM. The system then generates music that continuously adapts its tempo, style, and energy based on patient progress. By evolving alongside the patient’s movement, PLUME transforms therapy into a personalized and motivating experience.

## Features

- Real-time BPM monitoring and display
- Music generation integration with Suno
- Session management with start/pause/stop controls
- Two therapy modes: Follow (music follows patient) and Set (patient follows music)
- Session data export and management
- Responsive design with beautiful animations

## Setup Instructions

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Create a new project directory:**
   ```bash
   mkdir rhythm-therapy-app
   cd rhythm-therapy-app
   ```

2. **Initialize the project:**
   ```bash
   npm create vite@latest . -- --template react
   ```

3. **Install dependencies:**
   ```bash
   npm install
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

4. **Replace/Create the following files with the provided code:**

   - `package.json`
   - `vite.config.js`
   - `tailwind.config.js`
   - `postcss.config.js`
   - `index.html`
   - `src/main.jsx`
   - `src/App.jsx`
   - `src/index.css`

5. **Create the components directory and add component files:**
   ```bash
   mkdir src/components
   ```
   
   Then create these component files:
   - `src/components/Header.jsx`
   - `src/components/BPMDisplay.jsx`
   - `src/components/MusicGeneration.jsx`
   - `src/components/ControlPanel.jsx`
   - `src/components/SessionStatus.jsx`
   - `src/components/SessionData.jsx`

6. **Start the development server:**
   ```bash
   npm run dev
   ```

7. **Open your browser and navigate to:**
   ```
   http://localhost:5173
   ```

## Project Structure

```
rhythm-therapy-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── BPMDisplay.jsx
│   │   ├── MusicGeneration.jsx
│   │   ├── ControlPanel.jsx
│   │   ├── SessionStatus.jsx
│   │   └── SessionData.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Key Features Explained

### BPM Simulation
The app simulates patient and music BPM values that update in real-time during active sessions.

### Therapy Modes
- **Follow Mode**: Music BPM adjusts to match the patient's pace
- **Set Mode**: Patient is guided to match a target BPM set by the therapist

### Session Management
- Start/pause/resume sessions
- Real-time session timer
- Sync status indicators
- Session data export as JSON

### Music Generation
Integration placeholder for Suno API to generate custom music based on:
- Genre selection
- Tempo preferences
- Mood settings
- Custom prompts

## Customization

### Styling
The app uses Tailwind CSS with custom animations and gradients. Modify `src/index.css` for global styles and individual components for specific styling.

### BPM Ranges
Adjust BPM simulation ranges and sync thresholds in `src/App.jsx`.

### Animation Timing
Modify animation delays and durations in the CSS custom properties and Tailwind config.

## Browser Support

Modern browsers supporting:
- ES6+ features
- CSS Custom Properties
- CSS Grid and Flexbox
- WebAPI features (Blob, URL.createObjectURL)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details.
