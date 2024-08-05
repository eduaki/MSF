import "./styles.css";

export default function Header() {
	var saldation;
	var username = "Eduardo" || null;

	var now = new Date();

	if (now.getHours() < 12) saldation = "Bom dia";
	else if (now.getHours() > 18) saldation = "Boa noite";
	else if (now.getHours() <= 18 && now.getHours() >= 12)
		saldation = "Boa Tarde";

	return (
		<div className="container">
			<h1>
				{saldation}, ‎ ‎ ‎ ‎ ‎ ‎ {username}
			</h1>
		</div>
	);
}
