import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";

import Page from "../shared/Page";
import SubPage from "../shared/SubPage";

const Code = styled.code`
	background-color: #eee;
	display: inline-block;
	margin: 0 1px;
	padding: 1px 4px 3px;
	vertical-align: top;
`;

const WrappedPage = styled(Page)`
	border: 1px solid #ddd;
	border-radius: 2px;
	display: grid;
	font-family: 'Roboto','Arial',sans-serif;
	grid-template-columns: 200px;
	grid-column-gap: 2em;
	padding: 1.25em 1.25em 1.25em 1.25em;
`;

const DummyMenu = styled.div`
	grid-column: 1 / 10;
	grid-row: 1 / 1;
	border: 1px solid currentColor;
	border-radius: 2px;
	color: #ccc;
	font-size: 14px;
	margin-bottom: 1em;
	padding: 6px;
	width: calc(100% - 14px);
`;

const AddressBar = styled.input`
	border: 1px solid transparent;
	border-left: 0;
	color: #ccc;
	font-family: 'Roboto', 'Arial', sans-serif;
	font-size: 14px;
	margin-left: 0;
	padding-left: 0;
	transition: .125s color;
	width: calc(100% - 114px - 12px);
	&:focus {
		color: #333;
		outline: none;
		transition: .125s color;
	}
`;

const Sidebar = styled.aside`
	background-color: #f5f5f5;
	display: block;
	grid-column: 1 / 4;
	grid-row: 2 / 2;
	padding: .5em 0;
`;

const SidebarNav = styled.ul`
	list-style-type: none;
	padding: 0;
`;

const SidebarNavLink = styled.a`
	color: #333;
	cursor: pointer;
	display: block;
	padding: .5em 1em;
	text-decoration: none;
	&:focus {
		background-color: #efefef;
	}
`;

const SidebarExternalLink = styled.a`
	background: linear-gradient(to top, #f5f5f5, #f5f5f5);
	color: #333;
	cursor: pointer;
	display: block;
	padding: .5em 1em;
	text-decoration: none;
	&:focus {
		color: #f5f5f5;
		background: linear-gradient(to top, #3270a1, #4682c4);
	}
`;

const MainContent = styled.div`
	grid-column: 4 / 10;
	grid-row: 2 / 2;
`;

const InnerContent = styled.section`display: grid;`;

const HomeContent = styled(InnerContent)`
	grid-column-gap: 1em;
	grid-template-columns: repeat(2,minmax(auto,calc(50% - .5em)));
`;

const SignupContent = styled(InnerContent)`
	grid-column-gap: 1em;
	grid-template-columns: repeat(2,calc(50% - .5em));
	grid-template-rows: auto [row2];
`;

const SignupForm = styled.form`
	border: 1px solid #4682b4;
	grid-column: 1 / 3;
	padding: 1em;
`;

const SignupInput = styled.input`
	border: 1px solid #ccc;
	display: block;
	font-size: 1em;
	margin: .25em 0 .75em;
	padding: .45em .3em;
	width: 100%;
	&:focus {
		border-color: #333;
		outline: none;
	}
	@media only screen and (min-width: 640px) {
		width: 50%;
		max-width: 320px;
	}
`;

const SignupSubmit = styled.input`
	background-color: #4682b4;
	border: 1px solid #4682b4;
	color: #fff;
	cursor: pointer;
	font-size: 1em;
	padding: .5em 1em;
	transition: .125s background-color, .125s border-color;
	&:active {
		background-color: #3571a3;
		border-color: #3571a3;
		transition: .125s background-color, .125s border-color;
	}
`;

const TiledContentContent = styled(InnerContent)`
	grid-column-gap: 1em;
	grid-row-gap: 1em;
	grid-template-columns: repeat(2,calc(50% - .5em));
`;

const Tile = styled.p`
	background-color: #f5f5f5;
	margin: 0;
	padding: 1em;
`;

const OffsetContent = styled(InnerContent)`
	grid-column-gap: 1em;
	grid-row-gap: 1em;
	grid-template-areas: 'tile1 .' '. tile2' 'tile3 .' '. tile4';
`;

const Tile1 = styled(Tile)`
	background-color: lightcoral;
	color: #fff;
	grid-area: tile1;
`;

const Tile2 = styled(Tile)`
	background-color: lightpink;
	grid-area: tile2;
`;

const Tile3 = styled(Tile)`
	background-color: mistyrose;
	grid-area: tile3;
`;

const Tile4 = styled(Tile)`
	background-color: palevioletred;
	color: #fff;
	grid-area: tile4;
`;

const SubHome = ({ children }) =>
	<SubPage name="Home">
		<h2 style={{ marginBottom: 0 }}>App Home</h2>
		<hr style={{ border: "1px solid #666" }} />
		{children}
	</SubPage>;

const SubSignup = ({ children }) =>
	<SubPage name="Signup">
		<h2 style={{ marginBottom: 0 }}>Signup</h2>
		<hr style={{ border: "1px solid #666" }} />
		{children}
	</SubPage>;

const SubTiledContent = ({ children }) =>
	<SubPage name="TiledContent">
		<h2 style={{ marginBottom: 0 }}>Tiled Content</h2>
		<hr style={{ border: "1px solid #666" }} />
		{children}
	</SubPage>;

const SubOffsetContent = ({ children }) =>
	<SubPage name="TiledContent">
		<h2 style={{ marginBottom: 0 }}>Fun With Offsets</h2>
		<hr style={{ border: "1px solid #666" }} />
		{children}
	</SubPage>;

class AppWithSidebar extends Component {
	constructor() {
		super();
		this.state = { path: "", username: "" };
		this.updateDummyRoute = this.updateDummyRoute.bind(this);
	}
	updateDummyRoute(path) {
		this.setState(prevState => ({ path }));
	}
	render() {
		return (
			<WrappedPage name="AppWithSidebar">
				<DummyMenu>
					<span style={{ cursor: "pointer", userSelect: "none" }} onClick={e => this.AddressBar.focus()}>
						https://your.app.io/
					</span>
					<AddressBar
						type="text"
						value={this.state.path}
						onChange={e => this.updateDummyRoute(e.target.value)}
						onKeyDown={e => {
							if (e.key === "Enter") {
								this.AddressBar.blur();
							}
						}}
						innerRef={node => (this.AddressBar = node)}
					/>
				</DummyMenu>
				<Sidebar>
					<SidebarNav>
						<li>
							<SidebarNavLink
								href
								onClick={e => {
									e.preventDefault();
									this.updateDummyRoute("");
								}}
							>
								Home
							</SidebarNavLink>
						</li>
						<li>
							<SidebarNavLink
								href
								onClick={e => {
									e.preventDefault();
									this.updateDummyRoute("signup");
								}}
							>
								Signup
							</SidebarNavLink>
						</li>
						<li>
							<SidebarNavLink
								href
								onClick={e => {
									e.preventDefault();
									this.updateDummyRoute("tiled-content");
								}}
							>
								Tiled Content
							</SidebarNavLink>
						</li>
						<li>
							<SidebarNavLink
								href
								onClick={e => {
									e.preventDefault();
									this.updateDummyRoute("fun-with-offsets");
								}}
							>
								Fun With Offsets
							</SidebarNavLink>
						</li>
						<li>
							<SidebarExternalLink
								href="https://github.com/geoffdavis92/react-plus-grid"
								target="_blank"
								rel="noopener noreferrer"
							>
								View The Code&nbsp;&raquo;
							</SidebarExternalLink>
						</li>
					</SidebarNav>
				</Sidebar>
				<MainContent>
					{this.state.path === "" &&
						<SubHome>
							<p>
								A very simple container using <Code>display: grid</Code> and <Code>repeat()</Code> and <Code>minmax()</Code> CSS functions.
							</p>
							<HomeContent>
								<p>
									Duis sit pariatur cupidatat laborum esse. Culpa laborum deserunt ea duis quis labore fugiat ea labore ad id. Et cillum ipsum mollit esse
									occaecat qui elit officia pariatur adipisicing. Dolor velit eiusmod Lorem magna deserunt sunt do voluptate sit officia. Adipisicing magna
									nulla velit cillum quis id fugiat magna proident minim anim voluptate duis tempor. Proident Lorem qui quis labore fugiat laboris id
									consectetur sint.
								</p>
								<p>
									Reprehenderit eiusmod aliqua in velit. Occaecat non velit ut pariatur duis incididunt nostrud cupidatat aliqua eu. Nostrud ullamco duis
									exercitation eiusmod incididunt minim. Nisi quis fugiat minim duis fugiat dolore consequat sint pariatur nostrud enim. Commodo irure magna
									magna ullamco reprehenderit consequat id ipsum. Sunt et ipsum elit veniam ut exercitation laboris do id quis id veniam pariatur.
								</p>
							</HomeContent>
						</SubHome>}
					{this.state.path === "signup" &&
						<SubSignup>
							<p>
								Simple signup-style page, using <Code>grid-column</Code> only on the form to create the form's row.
							</p>
							<SignupContent>
								<article>
									<p>
										Consequat est eiusmod consequat et deserunt Lorem voluptate ut occaecat. Cillum quis id exercitation excepteur Lorem aliquip tempor. Amet
										culpa id velit amet.
									</p>
								</article>
								<article>
									<p>
										Aute nisi Lorem non exercitation et cillum ad consequat laborum amet consectetur cupidatat nostrud officia. Aliquip ea commodo incididunt
										Lorem. Veniam irure proident ipsum consectetur laboris exercitation commodo.
									</p>
								</article>
								<SignupForm
									onSubmit={e => {
										e.preventDefault();
										if (this.state.username !== this.SignupInputEl.value && this.SignupInputEl.value !== "") {
											this.setState(
												prevState => ({ username: this.SignupInputEl.value }),
												state => {
													this.SignupInputEl.value = null;
													this.SignupInputEl.blur();
												}
											);
										}
									}}
								>
									<label htmlFor="dummyText">
										Username: <span style={{ color: "#aaa" }}>{this.state.username}</span>
									</label>
									<SignupInput type="text" name="dummyText" innerRef={n => (this.SignupInputEl = n)} />
									<SignupSubmit type="submit" value="sign up" />
								</SignupForm>
							</SignupContent>
						</SubSignup>}
					{this.state.path === "tiled-content" &&
						<SubTiledContent>
							<p>
								Container allocating each <Code>{"<Tile/>"}</Code> component into rows/columns using the <Code>repeat()</Code> CSS function.
							</p>
							<TiledContentContent>
								<Tile>Voluptate irure duis minim velit.</Tile>
								<Tile>Id eiusmod labore id duis eu et ut duis consectetur nostrud ipsum.</Tile>
								<Tile>Exercitation cupidatat ullamco proident proident cupidatat labore.</Tile>
								<Tile>Ea esse minim ipsum consequat ad et.</Tile>
								<Tile>Enim pariatur elit nisi reprehenderit in.</Tile>
								<Tile>Proident velit ut cupidatat minim eu amet esse laborum.</Tile>
								<Tile>Ex incididunt excepteur voluptate proident anim sit enim duis ad consectetur velit.</Tile>
								<Tile style={{ backgroundColor: "transparent", border: "1px dashed #ccc" }}>
									Deserunt ex duis commodo fugiat quis culpa voluptate proident nulla nisi.
								</Tile>
							</TiledContentContent>
						</SubTiledContent>}
					{this.state.path === "fun-with-offsets" &&
						<SubOffsetContent>
							<p>
								Container using <Code>display: grid</Code> and <Code>grid-area</Code> to style tiles in an offset design.
							</p>
							<OffsetContent>
								<Tile1>Sunt fugiat ut mollit ex aliquip voluptate laborum sit et incididunt nisi dolore.</Tile1>
								<Tile2>Velit est amet enim dolore Lorem do irure est sint adipisicing ut nostrud cupidatat aliquip.</Tile2>
								<Tile3>Laboris laborum mollit in culpa sunt consequat consequat eiusmod magna.</Tile3>
								<Tile4>Dolore ea ullamco commodo eiusmod. Sunt veniam cillum non et proident dolor.</Tile4>
							</OffsetContent>
						</SubOffsetContent>}
				</MainContent>
			</WrappedPage>
		);
	}
}

export default AppWithSidebar;
