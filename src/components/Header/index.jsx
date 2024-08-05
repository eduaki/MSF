import "./styles.css";

export default function Header() {
	var saudation;
	var username = "Eduardo" || null;

	var now = new Date();

	if (now.getHours >= 5 && now.getHours() < 12) saudation = "Bom dia";
	else if (now.getHours() > 18) saudation = "Boa noite";
	else if (now.getHours() <= 18 && now.getHours() >= 12)
		saudation = "Boa Tarde";

	return (
		<div className="container">
			<h1>
				{saudation}, ‎ ‎ ‎ ‎ ‎ ‎ {username}
			</h1>
		</div>
	);
}
