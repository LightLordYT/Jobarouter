import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom"
import CareersLayout from "./layouts/CareersLayout"
import HelpLayout from "./layouts/HelpLayout"
import RootLayout from "./layouts/RootLayout"
import About from "./pages/About"
import CareerDetails, {
	careerDetailsLoader,
} from "./pages/careers/CareerDetails"
import Careers, { careerLoader } from "./pages/careers/Careers"
import CareersError from "./pages/careers/CareersError"
import Contact, { contactAction } from "./pages/help/Contact"
import Faq from "./pages/help/Faq"
import Thanks from "./pages/help/Thanks"
import Home from "./pages/Home"
import Notfound from "./pages/Notfound"

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path="about" element={<About />} />

			<Route path="help" element={<HelpLayout />}>
				<Route path="faq" element={<Faq />}></Route>
				<Route
					path="contact"
					element={<Contact />}
					action={contactAction}
				></Route>
				<Route path="thanks" element={<Thanks />}></Route>
			</Route>

			<Route
				path="careers"
				element={<CareersLayout />}
				errorElement={<CareersError />}
			>
				<Route index element={<Careers />} loader={careerLoader} />
				<Route
					path=":id"
					element={<CareerDetails />}
					loader={careerDetailsLoader}
				/>
			</Route>

			<Route path="*" element={<Notfound />}></Route>
		</Route>
	)
)

function App() {
	return <RouterProvider router={router} />
}

export default App
