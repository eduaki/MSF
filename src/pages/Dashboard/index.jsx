import DougnhnutChart from "../../components/DoughnutChart";
import Header from "../../components/Header";
import InfoCard from "../../components/InfoCard";
import { Container, Layout, Separator } from "./styles";

export default function Dashboard() {
	var AccountBalance = 45.30;

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
					<DougnhnutChart />
				</div>
				<div className="block mb"></div>
				<div className="block rr"></div>
			</Layout>
		</Container>
	);
}
