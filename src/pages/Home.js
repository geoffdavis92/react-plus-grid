import React from "react";
import { Link } from "react-router-dom";

import Page from "../shared/Page";

const Home = () =>
	<Page name="home">
		<p>This is a simple React app to showcase how React can be used with CSS Grid.</p>
		<p>
			I've made 2 example pages, one a grid-friendly design I modeled after an{" "}
			<a href="https://www.uplabs.com" target="_blank" rel="noopener noreferrer">
				Uplabs
			</a>{" "}
			post, and the other a very simple app with a sidebar.
		</p>
	</Page>;

export default Home;
