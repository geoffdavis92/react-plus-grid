import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Page from "../shared/Page";

// Layout containers
const Grid = styled.div`
	display: grid;
	grid-template-columns: 60% 40%;
`;

const LeftColumn = styled.div`
	background-color: #483d8b;
	height: 100vh;
	position: relative;
	&:before {
		content: "";
		background: linear-gradient(to top right, #483d8b 56%, transparent 100%);
		display: block;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 3;
	}
	&:after {
		content: "";
		background: linear-gradient(130deg, transparent 33%, #594e9c 33%, #594e9c 48%, transparent 48%);
		display: block;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 2;
	}
`;

const RightColumn = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 100%);
	grid-template-rows: 50% 25% 25%;
`;

const ComboTile = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 50%);
`;

const Content = styled.div`
	z-index: 3;
	position: absolute;
	top: 33%;
	left: 22.5%;
	height: 34%;
	width: 55%;
`;

const Button = styled.a`
	appearance: none;
	background-color: #6495ed;
	border: none;
	color: #f0f8ff;
	cursor: pointer;
	font-size: inherit;
	letter-spacing: .66px;
	margin: 0 0 0 .75em;
	padding: .75em .5em;
	position: relative;
	text-decoration: none;
	z-index: 25;
	&:before {
		content: "";
		background-color: #6495ed;
		border-top-left-radius: 75%;
		border-bottom-left-radius: 75%;
		height: 100%;
		position: absolute;
		top: 0;
		left: -15%;
		width: 30%;
		z-index: -1;
	}
	&:after {
		content: "";
		background-color: #6495ed;
		border-top-right-radius: 75%;
		border-bottom-right-radius: 75%;
		height: 100%;
		position: absolute;
		top: 0;
		right: -15%;
		width: 30%;
		z-index: -1;
	}
	&:hover {
		background-color: #5384dc;
		&:before,
		&:after {
			background-color: #5384dc;
		}
	}
`;

// Colored Tiles
const PinkTile = styled.div`
	background-color: #ff93a4;
	position: relative;
	&:before {
		content: "";
		background-color: #fd7182;
		border-radius: 100%;
		display: block;
		height: 15vw;
		opacity: .6;
		position: absolute;
		top: 20%;
		left: 10%;
		width: 15vw;
	}
	&:after {
		content: "";
		background-color: #fd7182;
		border-radius: 100%;
		display: block;
		height: 15vw;
		opacity: .6;
		position: absolute;
		top: 20%;
		right: 10%;
		width: 15vw;
	}
`;

const GoldTile = styled.div`
	background-color: #ffd700;
	position: relative;
	&:after {
		content: "";
		background-color: #ddb500;
		display: block;
		height: 76%;
		position: absolute;
		top: 12%;
		left: 10%;
		width: 80%;
	}
`;

const HotPinkTile = styled.div`
	background-color: #ff69b4;
	position: relative;
	&:after {
		content: "";
		border-color: #dd4792 transparent transparent;
		border-style: solid;
		border-width: 75px 45px 0 45px;
		display: block;
		height: 0px;
		position: absolute;
		top: 33%;
		left: calc(50% - 50px);
		transform: rotate(-5deg);
		width: 0;
	}
`;

const TealTile = styled.div`
	background-color: #0ff;
	position: relative;
	&:after {
		content: "";
		background-color: #0dd;
		display: block;
		height: 60%;
		position: absolute;
		top: 20%;
		left: 10%;
		width: 80%;
	}
`;

const Splash = ({ children }) =>
	<Page name="splash">
		<Grid>
			<LeftColumn>
				<Content>
					<h2 style={{ color: "#6495ed", fontSize: "2.5em", margin: ".5em 0" }}>
						Primitive<span style={{ fontWeight: "800" }}>.</span>
					</h2>
					<p style={{ color: "#f0f8ff", fontSize: "1.5em", margin: "0 0 1.75em" }}>Simplest geometric objects that any graphics system can handle with ease.</p>
					<p style={{ color: "#f0f8ff", fontSize: "1.25em", margin: "0" }}>
						<Button href="https://www.uplabs.com/posts/primitive-ui" target="_blank" rel="noopener noreferrer">READ MORE</Button>
					</p>
				</Content>
			</LeftColumn>
			<RightColumn>
				<PinkTile />
				<ComboTile>
					<GoldTile />
					<HotPinkTile />
				</ComboTile>
				<TealTile />
			</RightColumn>
		</Grid>
	</Page>;

export default Splash;
