import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Menu from './Menu';
import homepageStyles from './../assets/css/Homepage.scss';

export default class Homepage extends Component {
    render() {
		return (
            <div className={ homepageStyles.component }>
                <Helmet
					title="Homepage"
				/>
                <div>
                    <Menu />
                    <h1>Homepage</h1>
                </div>
            </div>
		);
	}
}