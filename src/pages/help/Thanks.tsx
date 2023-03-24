import { Link } from "react-router-dom"

export default function Thanks() {
	return (
		<div className="text-white flex flex-row justify-center gap-2">
			<h1 className="text-2xl font-bold">Thanks for emailing us!</h1>
			<Link
				to="/"
				className="p-2 rounded-sm bg-slate-700 active:bg-slate-200 hover:bg-white hover:text-black w-1/6"
			>
				Return to Homepage
			</Link>
		</div>
	)
}
