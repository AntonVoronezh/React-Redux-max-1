import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { TopMenu } from '../../../components/elements';
import { changeActivePageAC } from '../../../store/actions';

const menuList = [
	{ id: 1, to: '/', content: 'На главную' },
	{ id: 2, to: '/news', content: 'Новости' },
	{ id: 3, to: '/profile', content: 'Профайл' },
	{ id: 4, to: '/login', content: 'Логин' },
];

class TopMenuContainer extends Component {
	render() {
		return <TopMenu {...this.props} menuList={menuList} />;
	}
}

const mapStateToProps = ({ menu: { activePage } }) => {
	return {
		activePage,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onChange: page => dispatch(changeActivePageAC(page)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(TopMenuContainer));
