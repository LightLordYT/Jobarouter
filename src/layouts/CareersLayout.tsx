import { Outlet } from "react-router-dom"

export default function CareersLayout() {
	return (
		<div className="text-white flex flex-col gap-2">
			<h2 className="font-bold text-3xl">Careers</h2>
			<p className="">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, iste?
			</p>

			<Outlet />
		</div>
	)
}
