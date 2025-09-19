import React, { useState } from "react";
import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";
import DarkModeButton from "./DarkModeButton";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`h-full flex flex-col justify-between p-8 min-h-screen ${darkMode ? "dark bg-gray-900" : "bg-midnight"}`}>
      <MusicPlayer />
      <DarkModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
      <Footer />
    </div>
  );
}

export default App;
