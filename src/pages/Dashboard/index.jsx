import Header from "../../components/Header";
import { Container, Layout } from "./styles";

export default function Dashboard() {
	return (
		<Container>
			<Header />

			<div>
				<h3>Dashboard</h3>
			</div>

			<Layout>
				<div className="block lt">
					<p>Contas conectadas: </p>
					<ul>
						<li></li>
					</ul>
				</div>
				<div className="block ll">
					<p>Histórico</p>
				</div>
				<div className="block mt"></div>
				<div className="block mm"></div>
				<div className="block mb"></div>
				<div className="block rr"></div>
			</Layout>
		</Container>
	);
}
