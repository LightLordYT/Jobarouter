import { useLoaderData, useParams } from "react-router-dom"

export default function CareerDetails() {
	const { id } = useParams()
	const career: any = useLoaderData()
	const data = career.data
	return (
		<div className="grid p-3 rounded-md bg-slate-800 grid-rows-3 gap-2">
			<h2 className="text-2xl font-bold">
				<span className="text-blue-500">{data[0].job_title}</span> at{" "}
				<span className="text-blue-500">{data[0].employer_name}</span>
			</h2>
			<h3 className="">
				Employment type:{" "}
				<span className="text-blue-500">{data[0].job_employment_type}</span>
			</h3>
			<p className="">
				Starting Salary:{" "}
				{data[0].job_min_salary && (
					<span className="text-blue-500">
						{new Intl.NumberFormat("en-US", {
							style: "currency",
							currency: "USD",
							currencyDisplay: "narrowSymbol",
						}).format(data[0].job_min_salary)}
					</span>
				)}
			</p>
			<p className="">
				Possible Max Salary:{" "}
				{data[0].job_max_salary && (
					<span className="text-blue-500">
						{new Intl.NumberFormat("en-US", {
							style: "currency",
							currency: "USD",
							currencyDisplay: "narrowSymbol",
						}).format(data[0].job_max_salary)}
					</span>
				)}
			</p>
			<p>
				Benefits:{" "}
				{data[0].job_benefits ? (
					<span className="text-blue-500">{data[0].job_benefits}</span>
				) : (
					<span className="text-blue-500">None</span>
				)}
			</p>
			<p className="">
				Location:{" "}
				<span className="text-blue-500">
					{data[0].job_city +
						", " +
						data[0].job_state +
						" ," +
						data[0].job_country}
				</span>
			</p>
			<p>
				Job description:{" "}
				<span className="text-slate-300">{data[0].job_description}</span>
			</p>
			<a
				href={data[0].job_apply_link}
				target="_blank"
				className="p-2 rounded-sm bg-slate-500 w-1/6 text-center hover:text-blue-400 hover:bg-slate-600 active:text-blue-500 active:bg-slate-700"
			>
				Apply Now
			</a>
			<p>
				Offer expires at:{" "}
				<span className="text-blue-500">
					{new Intl.DateTimeFormat("en-US").format(
						new Date(data[0].job_offer_expiration_datetime_utc)
					)}
				</span>
			</p>
		</div>
	)
}

const options: {} = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": process.env.API_KEY,
		"X-RapidAPI-Host": "jsearch.p.rapidapi.com",
	},
}

export const careerDetailsLoader = async ({ params }: any) => {
	const { id } = params

	const res = await fetch(
		`https://jsearch.p.rapidapi.com/job-details?job_id=${id}&extended_publisher_details=false`,
		options
	)

	return res.json()
}
