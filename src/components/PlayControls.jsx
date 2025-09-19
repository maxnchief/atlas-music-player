


import { Rewind, Play, FastForward, Shuffle } from "lucide-react";

export default function PlayControls() {
	return (
		<div className="flex items-center justify-between w-full px-8 py-4 ">
			{/* Speed */}
			<span className="text-xl font-bold text-burntorange">1x</span>

			{/* Previous */}
			<button className="focus:outline-none">
				<Rewind size={32} strokeWidth={2.5} className="text-burntorange" />
			</button>

			{/* Play */}
				<button className="border-2 border-burntorange rounded-lg p-2 focus:outline-none">
						<Play size={32} strokeWidth={2.5} className="text fill-burntorange" />
					</button>

			{/* Next */}
			<button className="focus:outline-none">
				<FastForward size={32} strokeWidth={2.5} className="text-burntorange" />
			</button>

			{/* Shuffle */}
			<button className="focus:outline-none">
				<Shuffle size={32} strokeWidth={2.5} className="text-burntorange" />
			</button>
		</div>
	);
}
