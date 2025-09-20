import React, { useEffect, useRef } from "react";

interface AudioPlayerProps {
		songId: string;
		isPlaying: boolean;
		volume: number; // 0-100
		playbackRate: number;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ songId, isPlaying, volume, playbackRate }) => {
		const audioRef = useRef<HTMLAudioElement>(null);
		const [audioSrc, setAudioSrc] = React.useState<string>("");
		const [loading, setLoading] = React.useState<boolean>(true);

		// Fetch song link from API when songId changes
		React.useEffect(() => {
			if (!songId) {
				setAudioSrc("");
				setLoading(false);
				return;
			}
			setLoading(true);
				async function fetchSongLink() {
					try {
						const res = await fetch(`/api/v1/songs/${songId}`);
						const data = await res.json();
						setAudioSrc(data?.song || "");
					} catch {
						setAudioSrc("");
					} finally {
						setLoading(false);
					}
				}
				fetchSongLink();
		}, [songId]);

		// Play/pause control
		useEffect(() => {
			const audio = audioRef.current;
			if (!audio) return;
			if (isPlaying) {
				audio.play();
			} else {
				audio.pause();
			}
		}, [isPlaying, audioSrc]);

		// Volume control
		useEffect(() => {
			const audio = audioRef.current;
			if (audio) {
				audio.volume = volume / 100;
			}
		}, [volume]);

		// Playback rate control
		useEffect(() => {
			const audio = audioRef.current;
			if (audio) {
				audio.playbackRate = playbackRate;
			}
		}, [playbackRate]);

		if (loading || !audioSrc) return null;

		return (
			<audio ref={audioRef} src={audioSrc} controls={false} />
		);
};

export default AudioPlayer;
