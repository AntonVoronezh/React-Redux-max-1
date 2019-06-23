export default class AuthService {
	tryLogin(username, password) {
		const data = () => {
			if (username === 'Admin' && password === '12345') {
				return {
					status: 'ok',
					data: {
						id: 1,
					},
				};
			} else {
				// console.log('---');
				return {
					status: 'err',
					message: 'wrong_email_or_password',
				};
			}
		};

		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (Math.random() > 0.75) {
					reject(new Error('Network Error'));
				} else {
					resolve(data());
				}
			}, 1200);
		});
	}
}
