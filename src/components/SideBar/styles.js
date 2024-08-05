import styled from "styled-components";

export const Container = styled.div`
	width: 260px;
	height: calc(100vh - 20px);
	margin: 0 10px;
	padding: 25px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	border-radius: 20px 0 0 20px;

	background-color: var(--secondary-dark);

	.top-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 15px;
	}

	.icon {
		color: white;
		transition: 0.8s ease;
	}
	p,
	button {
		font-size: 14px;
		font-weight: 600;
		color: var(--offwhite);
		transition: 0.5s ease;
	}
	button:hover {
		background-color: var(--secondary_hover);
		p {
			color: white;
			font-weight: 700;
		}
	}

	button.logout {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
		transition: 0.8s ease;
	}
	button.logout:hover {
		background-color: transparent;
		scale: 1.1;
		color: var(--red);
		.icon {
			color: var(--red);
		}
	}

	.active {
		p {
			color: white;
			font-weight: 700;
		}
		background-color: var(--secondary_hover);
	}
`;

export const Button = styled.button`
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 0 10px;

	width: 220px;
	height: 52px;

	border-radius: 10px;
`;
