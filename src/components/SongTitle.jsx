

export default function SongTitle({ title = "Tidal Drift", subtitle = "Echoes of the Sea" }) {
	return (
		<div>
			<h1 className="text-3xl font-bold text-gray-900">{title}</h1>
			<h2 className="mt-4 text-2xl font-normal text-gray-500">{subtitle}</h2>
		</div>
	);
}
