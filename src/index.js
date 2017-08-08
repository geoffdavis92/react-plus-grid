import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import AppContainer from './shared/AppContainer'
import Header from './shared/Header'
import Home from './pages/Home'
import Splash from './pages/Splash'
import AppWithSidebar from './pages/AppWithSidebar'

const App = ({ children }) => <AppContainer><Header/>{children}</AppContainer>

render(<Router>
	<App>
		<Route exact path="/" component={Home}/>
		<Route path="/splash" component={Splash}/>
		<Route path="/sidebar" component={AppWithSidebar}/>
	</App>
</Router>, document.getElementById('root'))