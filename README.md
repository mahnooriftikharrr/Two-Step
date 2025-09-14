# TWO STEP
<img width="293" height="223" alt="image" src="https://github.com/user-attachments/assets/8c2cf641-5754-4398-a0fe-ef15e50c65c5" />

TwoStep is an adaptive music therapy platform designed to support gait rehabilitation for people with Parkinson’s disease and other motor disorders. Our inspiration came from the universal power of music—something people turn to in moments of joy, sadness, or healing—and the scientific evidence showing that rhythmic auditory stimulation (RAS) can improve stride length, cadence, and mobility. We wanted to combine healthcare and music into a solution that not only restores movement but also motivates and uplifts patients.

The platform captures the rhythm of a patient’s steps—simulated through keyboard input in our prototype, with future integration planned for wearable devices like the Apple Watch—and compares it to a therapeutic target BPM. Using adaptive control logic, TwoStep analyzes deviations in cadence and adjusts music in real time, changing tempo, energy, and style to guide patients toward their therapeutic goals.

To generate this adaptive music, we integrated Suno’s generative audio API, which allows us to dynamically create tracks that evolve as the patient progresses. Instead of relying on pre-recorded songs with fixed tempos, Suno lets us modulate tempo and intensity on the fly, ensuring smooth transitions and a more natural therapy experience. This not only provides clinical precision but also keeps sessions engaging by tailoring music to the patient’s rhythm and preferences.

Our prototype demonstrates a flexible, scalable framework that bridges software development, signal processing, and generative AI. With further development, TwoStep could integrate personalized genres, emotional tones, and patient-specific health data, making therapy both clinically effective and deeply personal. We envision it being piloted in rehabilitation clinics and eventually widely adopted in healthcare to improve quality of life for people living with gait disorders.
<img width="485" height="329" alt="image" src="https://github.com/user-attachments/assets/555afdf1-b8ad-447a-a309-62cb11982c42" />


## Inspiration

We were inspired by the challenges people with Parkinson’s disease and other motor disorders face in maintaining mobility and independence. Beyond the clinical side, we were also drawn to the universal role of music in human life—whether people are happy, sad, or in need of comfort, they turn to music as a source of healing, motivation, and emotional strength. Research already shows that rhythmic auditory stimulation (RAS) can improve gait, yet current tools remain rigid or impersonal. We wanted to bring together the emotional power of music and the precision of healthcare technology to create something truly impactful: a therapy platform that adapts to each patient in real time, helping them heal both physically and emotionally.

## What it does

TWOSTEP is an adaptive music therapy platform designed for gait rehabilitation. It captures the rhythm of a patient’s steps—simulated via keyboard input in our prototype, with future integration for wearables like the Apple Watch—and compares it to a therapeutic target BPM. The system then generates music that continuously adapts its tempo, style, and energy based on patient progress. By evolving alongside the patient’s movement, PLUME transforms therapy into a personalized and motivating experience.

## How we built it

Frontend: Built with React, offering a clean, intuitive interface for both therapists and patients.
Data Capture: Simulated step inputs through keystrokes, with future plans to integrate Apple Watch sensors for real-world tracking.
Control Logic: Algorithms monitor cadence, detect deviations from the target BPM, and determine music adjustments.
Music Generation: Leveraged generative music APIs (e.g., Suno) to produce real-time, adaptive audio.
Testing: Conducted prototype sessions using simulated data to validate responsiveness, smooth tempo transitions, and overall user experience.

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
