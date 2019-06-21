import React from 'react';
import './ProfilePage.scss';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const ProfilePage = ({ isLoggedIn }) => {
	if (isLoggedIn) {
		return <h2>ProfilePage</h2>;
	}
	return <Redirect to="/login" />;
};

PropTypes.ProfilePage = {
	isLoggedIn: PropTypes.bool.isRequired,
};

export default ProfilePage;
