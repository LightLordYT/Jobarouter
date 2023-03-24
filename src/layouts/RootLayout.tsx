import { NavLink, Outlet } from "react-router-dom"

export default function RootLayout() {
	return (
		<div className="box-border">
			<header>
				<nav className="flex justify-end m-3 p-4 flex-wrap phone:justify-center">
					<a
						className="font-bold text-5xl text-blue-400 mr-auto drop-shadow-2xl"
						href="/"
					>
						Jobarouter
					</a>
					<NavLink
						to="/"
						className="text-white hover:text-slate-800 font-bold text-xl p-2 bg-slate-700 m-1 rounded-sm active:bg-slate-200 hover:bg-white [&.active]:bg-slate-400"
					>
						Home
					</NavLink>
					<NavLink
						to="careers"
						className="text-white hover:text-slate-800 font-bold text-xl p-2 bg-slate-700  m-1 rounded-sm active:bg-slate-200 hover:bg-white [&.active]:bg-slate-400"
					>
						Careers
					</NavLink>
					<NavLink
						to="about"
						className="text-white hover:text-slate-800 font-bold text-xl p-2 bg-slate-700 m-1 rounded-sm active:bg-slate-200 hover:bg-white [&.active]:bg-slate-400"
					>
						About
					</NavLink>
					<NavLink
						to="help"
						className="text-white hover:text-slate-800 font-bold text-xl p-2 bg-slate-700 m-1 rounded-sm active:bg-slate-200 hover:bg-white [&.active]:bg-slate-400"
					>
						Help
					</NavLink>
				</nav>
			</header>
			<main className="m-10">
				<Outlet />
			</main>
		</div>
	)
}
