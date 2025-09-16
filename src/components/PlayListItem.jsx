

export default function PlayListItem({ title = "", artist = "", duration = "" }) {
	return (
		<div className="flex items-start justify-between py-2 px-4 w-full">
			<div>
				<div className="text-lg font-bold text-gray-900">{title}</div>
				<div className="text-lg text-gray-500 mt-1">{artist}</div>
			</div>
			<div className="text-lg font-bold text-gray-400 mt-1">{duration}</div>
		</div>
	);
}
