import React from 'react';
import './TopMenu.scss';
import { Menu } from 'semantic-ui-react';

const TopMenu = () => {
	return (
		<Menu>
			<Menu.Item content="На главную" active={true} />
			<Menu.Item content="Новости" />
			<Menu.Item content="Профайл" />
			<Menu.Item content="Логин" position="right" />
		</Menu>
	);
};

export default TopMenu;
