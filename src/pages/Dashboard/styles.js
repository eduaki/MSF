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

	row-gap: 10px;

	justify-content: space-between;
	align-self: center;
	margin: 3% 5vw;
	width: calc(95vw - 410px);

	transition: 0.4s;

	@media (max-width: 1605px) {
		column-gap: 10px;
	}
	@media (max-width: 1400px) {
		gap: 5px;
	}
	@media (min-width: 1606px) {
		column-gap: 10px;
		justify-content: center;
	}
	.block {
		transition: 500ms ease;
		background-color: var(--secondary-dark);
		border-radius: 10px;
		padding: 10px;
	}
	.block:hover {
		scale: 1.01;
		background-color: #354057;
		box-shadow: 1px 1px 60px 1px rgba(0, 0, 2, 30%);
	}

	.lt {
		grid-area: lt;
	}
	.ll {
		grid-area: ll;
		overflow-y: hidden;
		overflow-y: scroll;
	}
	.mt {
		grid-area: mt;
		.content {
			height: calc(100% - 45px);
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			h2 {
				margin-top: 50px;
				font-size: 40px;
				font-weight: 900;
				letter-spacing: 0.5px;
				color: #cacaca;
				bigger {
					font-size: 55px;
				}
				font-family: "Noto Sans JP", sans-serif;
			}
			span {
				font-size: 10px;
				color: #dedede;
			}
		}
	}
	.mm {
		grid-area: mm;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.mb {
		grid-area: mb;
	}
	.rr {
		grid-area: rr;
	}
`;
export const Separator = styled.div`
	width: 100%;
	height: 1px;
	border-radius: 1000px;
	background-color: gray;
	margin: 10px 0 5px 0;
`;
