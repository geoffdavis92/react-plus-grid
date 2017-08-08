import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

import Menu from "../data/menus.json";

const SiteLink = styled(NavLink)`
	background-color: #fff;
	border-radius: 2px;
	color: #ca1211;
	display: inline-block;
	padding: .5em 1em;
	text-decoration: none;
	&:active {
		background-color: #eee;
	}
	&:focus {
		text-decoration: underline;
	}
	&:not(:last-of-type) {
		margin-right: .5em;
	}
`;

export default function Header(props) {
	return (
		<header>
			<nav style={{ padding: ".5em 0" }}>
				{Menu.map(({ route, text }) =>
					<SiteLink key={route} to={route}>
						{text}
					</SiteLink>
				)}
			</nav>
		</header>
	);
}
