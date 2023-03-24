import { Link } from "react-router-dom"

export default function CareersError() {
	return (
		<div className="flex flex-col gap-2 text-white">
			<h1 className="text-3xl font-bold">Error</h1>
			<p className="text-xl">Could not find that career.</p>
			<Link
				to="/"
				className="bg-slate-400 p-2 rounded-sm w-1/6 text-center hover:bg-slate-500"
			>
				Back to homepage
			</Link>
		</div>
	)
}
