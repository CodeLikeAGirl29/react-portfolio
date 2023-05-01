import React from 'react';
import './App.module.css';
import BaseLayout from './components/BaseLayout';
import { BrowserRouter } from 'react-router-dom';
import Favicon from 'react-favicon';
import Overlay from './components/Overlay';

// google analytics
import ReactGA from 'react-ga';
const TRACKING_ID = 'UA-179589074-1'; // tracking id
ReactGA.initialize(TRACKING_ID);

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showOverlay: true,
		};
	}

	handleShowOverlay = () => {
		this.setState({ showOverlay: false });
	};

	componentDidMount() {
		this.autoshowOverlay = setTimeout(
			function() {
				this.handleShowOverlay();
			}.bind(this),
			3000
		);
	}

	render() {
		return (
			<div>
				<Overlay active={this.state.showOverlay} marginTop='150px'>
					<Favicon url='https://res.cloudinary.com/codelikeagirl29/image/upload/v1661995914/icons/favicon_c9hk5n.ico'></Favicon>
					<BrowserRouter>
						<BaseLayout />
					</BrowserRouter>
				</Overlay>
			</div>
		);
	}
}
