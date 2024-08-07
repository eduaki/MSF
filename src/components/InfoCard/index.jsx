import "./styles.css";

export default function InfoCard({ title, content }) {
	return (
		<li className="cardwrapper">
			<div>
				<h2>{title}</h2>
				<p>{content}</p>
			</div>
		</li>
	);
}
