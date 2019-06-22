import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginPage } from '../../../components/pages';

class LoginPageContainer extends Component {
	// if (loading) {
	// 	return <Spinner />;
	//   }

	//   if (error) {
	// 	return <ErrorIndicator />;
	//   }

	//   return <BookList books={books} onAddedToCart={onAddedToCart}/>;
	render() {
		return <LoginPage />;
	}
}

const mapStateToProps = () => {
	return {
		// activePage,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		// onChange: page => dispatch(changeActivePageAC(page)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginPageContainer);
