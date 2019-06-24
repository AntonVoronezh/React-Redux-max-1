import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { NewsPage } from '../../../components/pages';
import { fetchNews } from '../../../store/actions';
import { Spinner } from '../../../components/elements';
import { withNewsapiService } from '../../../hoc';
import { statuses } from '../../../helpers';

class NewsPageContainer extends Component {
	componentDidMount() {
		this.props.getNews();
	}

	render() {
		const { status, isLoggedIn, ...rest } = this.props;

		if (status === statuses.REQUEST) {
			return <Spinner />;
		}

		return <NewsPage {...rest} />;
	}
}

const mapStateToProps = ({ news }) => {
	return {
		...news,
	};
};

const mapDispatchToProps = (dispatch, { newsapiService }) => {
	return bindActionCreators(
		{
			getNews: fetchNews(newsapiService),
		},
		dispatch
	);
};

export default withNewsapiService()(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(NewsPageContainer)
);
