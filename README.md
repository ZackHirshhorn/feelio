# 🌀 Feelio

Feelio is a minimalist mood tracker designed to be joyful, visual, and frictionless. It helps you log your feelings in just a tap — and get greeted with cats (or dogs!) while you’re at it.

## ✨ Features

- 🎯 **Single-button Mood Ring UI**  
  Tap the main button to reveal a circular mood selector — choose from Happy, Neutral, Angry, Sad, or Tired.

- 🐱 **Cat Photo Carousel**  
  See adorable cats between your mood selector and mood history. Don’t like cats? You monster? Fine. Switch to dogs in the settings.

- 📜 **Mood History Log**  
  See a short timeline of your most recent mood entries.

- ⚙️ **Settings Menu**  
  A 3-dot menu opens a modal where you can switch your preferred animal source between The Cat API and The Dog API.

## 📦 Tech Stack

- [React Native](https://reactnative.dev/) via [Expo](https://expo.dev/)
- Functional components with React Hooks
- Fetching images from [The Cat API](https://thecatapi.com) and [The Dog API](https://thedogapi.com)
- Clean and responsive styling using Flexbox

## 🚀 Running the App

Make sure you have Expo CLI installed:

```bash
npm install -g expo-cli
```

Then run the app:

```bash
npm install
npm start
```

Use an emulator or the Expo Go app on your phone to view it.

📁 Folder Structure
```
.
├── App.js
├── components/
│   ├── MoodSelector.js
│   ├── CatCarousel.js
│   └── SettingsMenu.js
├── assets/
├── package.json
└── ...
```

🐾 Future Ideas


Mood analytics (graphs, summaries)

Notifications to reflect on your day

Daily journaling prompts

Theme options (light/dark)

Customizable mood list

📜 License
MIT. Feel free to use, fork, remix, or hug a cat.

Made with 🐾 and 🤍 by Ezekiel Hirshhorn.