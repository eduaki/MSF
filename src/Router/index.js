import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main page={"home"} />,
		errorElement: (
			<>
				<h1>erro 404!</h1>
				<br />
				<p>nenhuma pagina foi encontrada</p>
			</>
		),
	},
	{
		path: "transations",
		element: <Main page={"transations"} />,
	},
	{
		path: "analytics",
		element: <Main page={"analytics"} />,
	},
]);
