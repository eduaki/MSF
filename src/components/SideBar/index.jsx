import {
	TbChartPieFilled,
	TbLayoutDashboardFilled,
	TbLogout,
} from "react-icons/tb";
import { Button, Container } from "./styles";
import { IoLayers } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router";

export default function SideBar() {
	const navigate = useNavigate();
	const route = useLocation();

	const iconSize = 25;
	return (
		<>
			<Container>
				<div className="top-content">
					<Button
						className={route.pathname === "/" && "active"}
						onClick={() => navigate("/")}>
						<TbLayoutDashboardFilled size={iconSize} className="icon" />
						<p>Dashboard</p>
					</Button>
					<Button
						className={route.pathname === "/transations" && "active"}
						onClick={() => navigate("/transations")}>
						<IoLayers size={iconSize} className="icon" />
						<p>Histórico</p>
					</Button>
					<Button
						className={route.pathname === "/analytics" && "active"}
						onClick={() => navigate("/analytics")}>
						<TbChartPieFilled size={iconSize} className="icon" />
						<p>Estatísticas Gerais</p>
					</Button>
				</div>

				<button className="logout">
					<TbLogout size={iconSize} className="icon" />
					Sair
				</button>
			</Container>
		</>
	);
}
