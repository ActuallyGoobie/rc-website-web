import AppConfigs from '../../config/app_configs';

const apiHeaders = {
	Accept: 'application/json, text/javascript, */*; q=0.01',
	'Content-Type': 'application/json',
	'X-Requested-With': 'XMLHttpRequest',
};

const getUrl = uri => {
	return AppConfigs.server_url + '/api' + uri;
};

export const makeApiRequest = params => {
	return fetch(getUrl(params.url), {
		method: params.method,
		headers: apiHeaders,
		body: JSON.stringify(params.body),
		credentials: 'include',
	}).then(response => {
		if (response.ok) {
			return response.json();
		} else {
			return response.json().then(err => {
				if (err.error === 'Unable to authenticate user') {
					alert('Access token expired, please log in again');
					window.location.href = '/auth/login';
					return;
				} else {
					throw err;
				}
			});
		}
	});
};
