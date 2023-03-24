import { Form, redirect, useActionData } from "react-router-dom"

export default function Contact() {
	const data: any = useActionData()

	return (
		<div className="m-8 text-white">
			<h3 className="font-bold text-2xl m-3">Contact Us</h3>
			<Form
				className="flex flex-col p-1 rounded-3xl m-4 justify-center flex-shrink-0"
				method="post"
				action="/help/contact"
			>
				<label className="m-2 text-black">
					<span>Your email: </span>
					<input
						type="email"
						name="email"
						required
						placeholder=" foobar@gmail.com"
						className="rounded-md p-1 w-full"
					/>
				</label>
				<label className="m-2 text-center text-black">
					<span className="block">Your message: </span>
					<textarea
						name="message"
						required
						placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ab."
						className="p-2 rounded-md m-1 w-full"
					></textarea>
				</label>
				<button className="bg-blue-800 rounded-sm w-1/2 m-1 self-center hover:bg-blue-700 active:bg-blue-900 border-white border-2 p-2">
					Submit
				</button>
				{data && data.error && <p>{data.error}</p>}
			</Form>
		</div>
	)
}

export const contactAction = async ({ request }: any) => {
	const data = await request.formData()

	const submission = {
		email: data.get("email"),
		message: data.get("message"),
	}

	console.log(submission)

	//*send post request
	if (submission.message.length < 3)
		return { error: "Message must be over 3 characters*" }

	//* redirect the user
	return redirect("/help/thanks")
}
