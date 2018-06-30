import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import {Helmet} from "react-helmet";
// Import Components
import Homepage from './Home';
import About from './About';
import Contact from './Contact';

export default class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Helmet
					htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
					titleTemplate="%s | React App"
					titleAttributes={{itemprop: "name", lang: "en"}}
					meta={[
						{name: "description", content: "Server side rendering example"},
						{name: "viewport", content: "width=device-width, initial-scale=1"},
					]}
				/>
				<Switch>
					<Route exact path='/' component={ Homepage } />
					<Route path="/about" component={ About } />
					<Route path="/contact" component={ Contact } />
				</Switch>
			</div>
		);
	}
}