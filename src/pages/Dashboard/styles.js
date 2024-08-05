import styled from "styled-components";

export const Container = styled.div`
	h3 {
		font-size: 25px;
		font-weight: 700;
		color: var(--offwhite);
	}
`;

export const Layout = styled.div`
	animation: surge 1.1s ease-in-out;

	@keyframes surge {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	display: grid;
	grid-template-areas:
		"lt mt rr"
		"ll mm rr"
		"ll  mb rr";

	grid-template-columns: 350px 350px 350px;
	grid-template-rows: 250px 250px 250px;

	row-gap: 20px;

	justify-content: space-between;
	align-self: center;
	margin: 3% 5vw;
	width: calc(95vw - 410px);

	@media (max-width: 1605px) {
		column-gap: 20px;
	}
	.block {
		transition: 500ms ease;
	}
	.block:hover {
		scale: 1.1;
		box-shadow: 1px 1px 60px 1px rgba(0, 0, 2, 30%);
	}

	.lt {
		grid-area: lt;
		background-color: var(--secondary-dark);
		border-radius: 10px;
	}
	.ll {
		grid-area: ll;
		background-color: var(--secondary-dark);
		border-radius: 10px;
	}
	.mt {
		grid-area: mt;
		background-color: var(--secondary-dark);
		border-radius: 10px;
	}
	.mm {
		grid-area: mm;
		background-color: var(--secondary-dark);
		border-radius: 10px;
	}
	.mb {
		grid-area: mb;
		background-color: var(--secondary-dark);
		border-radius: 10px;
	}
	.rr {
		grid-area: rr;
		background-color: var(--secondary-dark);
		border-radius: 10px;
	}
`;
