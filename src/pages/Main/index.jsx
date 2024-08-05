// import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import Analytics from "../Analytics";
import Dashboard from "../Dashboard";
import Transations from "../Transations";
import "./styles.css";

export default function Main({ page }) {
	return (
		<div className="container">
			<SideBar />

			{page === "home" && <Dashboard />}
			{page === "transations" && <Transations />}
			{page === "analytics" && <Analytics />}
		</div>
	);
}
