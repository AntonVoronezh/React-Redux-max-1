import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';

export default ({ changeActiveMenuItemCB, changeActiveMenuItem, loginCB, isLogged }) => {
	const onItemClickHandler = item => {
		changeActiveMenuItemCB(item);
		// loginCB();
	};
	// if (isLogged) {
	// 	return <Redirect from="/login" to="/profile" />;
	// }
	return (
		<Menu>
			<Link to="/" onClick={() => onItemClickHandler('/')}>
				<Menu.Item content="На главную" active={changeActiveMenuItem === '/'} />
			</Link>
			<Link to="/news" onClick={() => onItemClickHandler('/news')}>
				<Menu.Item content="Новости" active={changeActiveMenuItem === '/news'} />
			</Link>
			<Link
				to={isLogged ? '/profile' : '/login'}
				onClick={() => onItemClickHandler(isLogged ? '/profile' : '/login')}
			>
				<Menu.Item
					content={isLogged ? 'Профиль' : 'Логин'}
					active={changeActiveMenuItem === '/profile' || changeActiveMenuItem === '/login'}
				/>
			</Link>
		</Menu>
	);
};
