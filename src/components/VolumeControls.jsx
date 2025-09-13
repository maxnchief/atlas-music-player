
import { Volume2 } from "lucide-react";
import React, { useState } from "react";

export default function VolumeControls() {
	const [volume, setVolume] = useState(60);

		return (
			<div className="flex items-center w-full px-4 py-2">
				<Volume2 size={28} strokeWidth={2.5} className="text-black mr-4" />
				<input
					type="range"
					min={0}
					max={100}
					value={volume}
					onChange={e => setVolume(Number(e.target.value))}
					className="w-full h-2 rounded-lg appearance-none bg-gray-200 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-slate-500 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-slate-500 [&::-webkit-slider-thumb]:shadow [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-slate-500 [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-slate-500 [&::-moz-range-thumb]:shadow [&::-moz-range-thumb]:cursor-pointer [&::-ms-thumb]:w-6 [&::-ms-thumb]:h-6 [&::-ms-thumb]:rounded-full [&::-ms-thumb]:bg-slate-500 [&::-ms-thumb]:border-2 [&::-ms-thumb]:border-slate-500 [&::-ms-thumb]:shadow [&::-ms-thumb]:cursor-pointer"
					style={{
						background: `linear-gradient(to right, #64748b ${volume}%, #f3f4f6 ${volume}%)`
					}}
				/>
			</div>
		);
}
