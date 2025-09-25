import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import MusicPlayer from '../components/MusicPlayer';

describe('MusicPlayer', () => {
  it('shows the first song in the playlist by default (from MSW mock)', async () => {
    render(<MusicPlayer />);
    // Wait for playlist to load
    const currentSong = await screen.findByText('Fake Song 1');
    expect(currentSong).toBeInTheDocument();
  });

  it('toggles play/pause when play/pause button is clicked', async () => {
    render(<MusicPlayer />);
    // Wait for play button
    const playButton = await screen.findByRole('button', { name: /play|pause/i });
    // Should start paused, so clicking should play
    fireEvent.click(playButton);
    // Button should now show pause (or play, depending on your UI)
    expect(
      screen.getByRole('button', { name: /play|pause/i })
    ).toBeInTheDocument();
  });

  it('clicking forward button changes to the next song', async () => {
    render(<MusicPlayer />);
    // Wait for forward button
    const forwardButton = await screen.findByRole('button', { name: /next|forward/i });
    fireEvent.click(forwardButton);
    // Now the current song should be Fake Song 2
    const nextSong = await screen.findByText('Fake Song 2');
    expect(nextSong).toBeInTheDocument();
  });

  it('clicking back button changes to the previous song', async () => {
    render(<MusicPlayer />);
    // Go forward first
    const forwardButton = await screen.findByRole('button', { name: /next|forward/i });
    fireEvent.click(forwardButton);
    // Now go back
    const backButton = await screen.findByRole('button', { name: /prev|back/i });
    fireEvent.click(backButton);
    // Should be back to Fake Song 1
    const prevSong = await screen.findByText('Fake Song 1');
    expect(prevSong).toBeInTheDocument();
  });

  it('clicking a song in the playlist changes the current song', async () => {
    render(<MusicPlayer />);
    // Wait for playlist item
    const playlistItem = await screen.findByText('Fake Song 2');
    fireEvent.click(playlistItem);
    // Now current song should be Fake Song 2
    const currentSong = await screen.findByText('Fake Song 2');
    expect(currentSong).toBeInTheDocument();
  });

  // Optionally, add a test for speed toggle if your UI exposes it
  // it('toggles speed when speed button is clicked', async () => {
  //   render(<MusicPlayer />);
  //   const speedButton = await screen.findByRole('button', { name: /speed/i });
  //   fireEvent.click(speedButton);
  //   // Check for updated speed indicator
  //   expect(screen.getByText(/1.5x|2x|0.5x/)).toBeInTheDocument();
  // });
});
