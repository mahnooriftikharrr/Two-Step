# Rhythm Therapy App

A React + Vite application for music-based therapy sessions that synchronizes music with patient movement.

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