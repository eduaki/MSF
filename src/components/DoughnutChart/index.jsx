import Chart, { ArcElement, Legend, Tooltip } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend);

export default function DougnhnutChart({ val, labels, chartColors }) {
	let values = Object.values(val);

	const data = {
		labels,
		datasets: [
			{
				data: values,
				backgroundColor: chartColors,
				hoverOffset: 10,
			},
		],
	};

	return (
		<>
			<div>
				<Doughnut
					data={data}
					height={180}
					options={{
						maintainAspectRatio: true,
						responsive: false,
						borderColor: "transparent",

						plugins: {
							legend: {
								position: "bottom",
								labels: { pointStyle: "rectRounded", usePointStyle: true },
								display: true,
								align: "center",
							},
						},
					}}
				/>
			</div>
		</>
	);
}
