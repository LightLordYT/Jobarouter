import { Link } from "react-router-dom"

export default function Notfound() {
	return (
		<div className="text-white flex flex-col gap-2">
			<h2 className="font-bold text-4xl m-1">Page not found</h2>
			<p className="m-2">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
				nesciunt magni ab id cupiditate expedita exercitationem dignissimos
				deserunt nemo incidunt alias, perspiciatis neque quisquam mollitia quasi
				consequuntur? Quaerat, enim nihil?
			</p>
			<p className="m-2">
				Go to the{" "}
				<Link
					to="/"
					className="bg-slate-600 p-2 rounded-sm m-1 hover:text-slate-800 hover:bg-white"
				>
					Homepage
				</Link>{" "}
			</p>
		</div>
	)
}
