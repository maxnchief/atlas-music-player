
import React from "react";

interface DarkModeButtonProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const DarkModeButton: React.FC<DarkModeButtonProps> = ({ darkMode, setDarkMode }) => {
  return (
    <div className="flex justify-center my-6">
      <button
        className="px-4 py-2 rounded-lg font-semibold border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        onClick={() => setDarkMode((d) => !d)}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default DarkModeButton;