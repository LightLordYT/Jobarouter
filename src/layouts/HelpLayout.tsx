import { Outlet, NavLink } from "react-router-dom"

export default function HelpLayout() {
	return (
		<div className="text-center">
			<h2 className="font-bold text-3xl m-1 text-white">Website Help</h2>
			<p className="m-8 text-white">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
				sapiente.
			</p>

			<nav className="flex flex-wrap justify-center">
				<NavLink
					to="faq"
					className="p-2 rounded-sm border-gray-50 border-2 m-4 text-white hover:bg-slate-500 [&.active]:bg-slate-600"
				>
					View the FAQ
				</NavLink>
				<NavLink
					to="contact"
					className="p-2 rounded-sm border-gray-50 border-2 m-4 text-white hover:bg-slate-500 [&.active]:bg-slate-600"
				>
					Contact Us
				</NavLink>
			</nav>

			<Outlet />
		</div>
	)
}
