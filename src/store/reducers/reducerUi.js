const CHANGE_ACTIVE_MENU_ITEM = 'CHANGE_ACTIVE_MENU_ITEM';

const initialState = {
	changeActiveMenuItem: '/',
	aaa: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_ACTIVE_MENU_ITEM:
			return {
				...state,
				changeActiveMenuItem: action.payload,
			};
		default:
			return state;
	}
};

export const changeActiveMenuItemAC = item => ({ type: CHANGE_ACTIVE_MENU_ITEM, payload: item });
