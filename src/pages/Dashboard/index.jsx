import DougnhnutChart from "../../components/DoughnutChart";
import Header from "../../components/Header";
import InfoCard from "../../components/InfoCard";
import { Container, Layout, Separator } from "./styles";

export default function Dashboard() {
	var AccountBalance = 45.3;
	var reservas = 1000;
	var gastoJogos = 50;
	var fixas = 300;

	let chartValues = { fixas, gastoJogos, reservas, AccountBalance };
	let labels = ["Contas fixas", "Jogos", "Reservas", "em conta"];
	let chartColors = [
		"rgb(8, 100, 175)",
		"rgb(235, 54, 54)",
		"rgb(255, 205, 86)",
		"#8fb4a0",
	];

	return (
		<Container>
			<Header />

			<div>
				<h3>Dashboard</h3>
			</div>

			<Layout>
				<div className="block lt">
					<h4>Contas conectadas: </h4>
					<Separator />
					<ul>
						<li></li>
					</ul>
				</div>
				<div className="block ll">
					<h4>Histórico</h4>
					<Separator />
					<ul>
						<InfoCard
							title={"teste"}
							content={
								"isso é um teste de conteudoaasdadasdas  asd asd asd asdasdasdasd ads asdadsasdasd "
							}
						/>
						<InfoCard title={"teste"} content={"isso é um teste de conteudo"} />
						<InfoCard title={"teste"} content={"isso é um teste de conteudo"} />
						<InfoCard title={"teste"} content={"isso é um teste de conteudo"} />
						<InfoCard title={"teste"} content={"isso é um teste de conteudo"} />
						<InfoCard title={"teste"} content={"isso é um teste de conteudo"} />
						<InfoCard title={"teste"} content={"isso é um teste de conteudo"} />
						<InfoCard title={"teste"} content={"isso é um teste de conteudo"} />
						<InfoCard title={"teste"} content={"isso é um teste de conteudo"} />
						<InfoCard title={"teste"} content={"isso é um teste de conteudo"} />
						<InfoCard title={"teste"} content={"isso é um teste de conteudo"} />
					</ul>
				</div>
				<div className="block mt">
					<h4>Valor em Conta</h4>
					<Separator />
					<div className="content">
						<h2>
							<bigger>R$</bigger>
							{AccountBalance.toLocaleString("pt-br", {
								minimumFractionDigits: 2,
							})}
						</h2>
						<span>(o valor pode estar desatualizado)</span>
					</div>
				</div>
				<div className="block mm">
					<h2>Compromentimento da renda</h2>
					<Separator style={{ marginBottom: 20 }} />
					<DougnhnutChart
						val={chartValues}
						labels={labels}
						chartColors={chartColors}
					/>
				</div>
				<div className="block mb"></div>
				<div className="block rr"></div>
			</Layout>
		</Container>
	);
}
