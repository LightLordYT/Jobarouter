import { useState } from "react"
import { Navigate } from "react-router-dom"

export default function About() {
	const [user, setUser]: any = useState("mario")

	if (!user) return <Navigate to="/" replace={true} />

	return (
		<div className="h-full text-white flex flex-col gap-2 justify-start">
			<h1 className="font-bold text-2xl">About Page</h1>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
			doloremque numquam, quaerat laboriosam praesentium ipsam fugiat sapiente
			optio fuga, eaque natus earum accusantium tenetur beatae reprehenderit
			alias labore nisi tempora!
			<button
				onClick={() => setUser(null)}
				className="w-1/6 p-1 rounded-sm bg-slate-800 text-white hover:bg-white hover:text-black"
			>
				Log Out
			</button>
		</div>
	)
}
