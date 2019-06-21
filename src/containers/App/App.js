import { connect } from 'react-redux';
import { isLoggedAC } from '../../store/reducers/loginReducer';
import { changeActiveMenuItemAC } from '../../store/reducers/reducerUi';
import App from '../../components/App/App'

const mapStateToProps = state => {
	return {
		...state.login,
		...state.ui,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		loginCB: () => dispatch(isLoggedAC()),
		changeActiveMenuItemCB: item => dispatch(changeActiveMenuItemAC(item)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
