import React, { Component } from 'react';
import GoogleAnalytics from 'react-ga';

GoogleAnalytics.initialize('UA-109559667-1');

const withTracker = (WrappedComponent, options = {}) => {
	// here options works as props for WrappedComponent, and passed  in render function
	const trackPage = (page) => {
		GoogleAnalytics.set({
			page,
			...options
		});
		GoogleAnalytics.pageview(page);
	};

	// eslint-disable-next-line
	const HOC = class extends Component {
		componentDidMount() {
			// eslint-disable-next-line
			const page = this.props.location.pathname + this.props.location.search;
			trackPage(page);
		}

		componentDidUpdate(prevProps) {
			const currentPage = prevProps.location.pathname + prevProps.location.search;
			const nextPage = this.props.location.pathname + this.props.location.search;

			if (currentPage !== nextPage) {
				trackPage(nextPage);
			}
		}

		render() {
			return <WrappedComponent {...options} />;
		}
	};

	return HOC;
};

export default withTracker;
