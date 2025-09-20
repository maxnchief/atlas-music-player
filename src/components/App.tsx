import React, { useState } from "react";
import Footer from "./Footer.tsx";
import MusicPlayer from "./MusicPlayer.tsx";
import DarkModeButton from "./DarkModeButton.jsx";


const App: React.FC = () => {
  const [darkMode, setDarkMode] = React.useState<boolean>(false);
  return (
    <div className={`h-full flex flex-col justify-between p-8 min-h-screen ${darkMode ? "dark bg-gray-900" : "bg-midnight"}`}>
      <MusicPlayer />
      <DarkModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
      <Footer />
    </div>
  );
};

export default App;
