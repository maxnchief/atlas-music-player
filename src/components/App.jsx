import { Volume } from "lucide-react";
import CoverArt from "./CoverArt";
import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";
import PlayControls from "./PlayControls";
import SongTitle from "./SongTitle";
import VolumeControls from "./VolumeControls";
import PlayListItem from "./PlayListItem";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

function App() {
  return (
    <div className="h-full flex flex-col justify-between p-8 min-h-screen">
      <MusicPlayer />
      <SongTitle />
      <PlayControls />
      <VolumeControls />
      <PlayListItem />
      <CurrentlyPlaying />
      <Playlist />
      <Footer />
    </div>
  );
}

export default App;
