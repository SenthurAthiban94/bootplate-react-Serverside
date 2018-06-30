import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Menu from './Menu';

export default class About extends Component {
	render() {
		return (
            <div>
                <Helmet
					title="AboutUs"
				/>
                <div>
                    <Menu />
                    <h1>About</h1>
                </div>
            </div>
		);
	}
}