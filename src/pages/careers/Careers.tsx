import { useLoaderData, Link } from "react-router-dom"

export default function Careers() {
	const data: any = useLoaderData()
	const careers = data.data
	return (
		<div className="grid grid-flow-row-dense text-center grid-cols-4">
			{/* @ts-ignore */}
			{careers.map((career) => (
				<Link
					to={career.job_id}
					key={Math.random() + data.request_id}
					className="m-2 bg-slate-700 p-2 rounded-md flex flex-wrap flex-col justify-center gap-2 hover:bg-slate-600 active:bg-slate-800"
				>
					<p className="text-xl">{career.job_title}</p>
					<p className="text-slate-300">{career.job_city}</p>
				</Link>
			))}
		</div>
	)
}

const options: {} = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
		"X-RapidAPI-Host": "jsearch.p.rapidapi.com",
	},
}

export const careerLoader = async () => {
	const res = await fetch(
		"https://jsearch.p.rapidapi.com/search?query=Python%20developer%20in%20USA&page=1&num_pages=1",
		options
	)

	return res.json()
}
