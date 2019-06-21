import React from 'react';
import './TopMenu.scss';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const TopMenu = () => {
	return (
		<Menu>
			<Link to="/">
				<Menu.Item content="На главную" active={true} />
			</Link>
			<Link to="/news">
				<Menu.Item content="Новости" />
			</Link>
			<Link to="/profile">
				<Menu.Item content="Профайл" />
			</Link>
			<Link to="/login">
				<Menu.Item content="Логин" position="right" />
			</Link>
		</Menu>
	);
};

export default TopMenu;
