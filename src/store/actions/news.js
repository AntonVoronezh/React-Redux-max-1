const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';
const fetchNewsRequestAC = () => ({
	type: FETCH_NEWS_REQUEST,
});

const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
const fetchNewsSuccessAC = data => ({
	type: FETCH_NEWS_SUCCESS,
	data,
});

const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE';
const fetchNewsFailureAC = errorMsg => ({
	type: FETCH_NEWS_FAILURE,
	errorMsg,
});

const fetchNews = service => () => (dispatch, getState) => {
	const {
		login: { userNameText, passwordText },
	} = getState();

	dispatch(fetchNewsRequestAC());
	service
		.tryLogin(userNameText, passwordText)
		.then(data => {
			const { status, message } = data;
			if (status === 'ok') {
				localStorage.setItem('token', true);
				dispatch(fetchNewsSuccessAC());
			} else if (status === 'err') {
				dispatch(fetchNewsFailureAC(message));
			}
		})

		.catch(err => dispatch(fetchNewsFailureAC(err.message)));
};

