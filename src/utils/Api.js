import axios from 'axios';

import { consts, Auth } from './';

const instance = axios.create({
	baseURL: consts.BASE_URL,
});

if (Auth.getToken()) {
	instance.defaults.headers.common[
		'Authorization'
	] = `Bearer ${Auth.getToken()}`;
}

instance.interceptors.request.use(
	function(config) {
		if (config.headers.common.Authorization) {
			if (!Auth.isLogged()) {
				throw new axios.Cancel('Invalid token');
			}
		}

		return config;
	},
	function(error) {
		return Promise.reject(error);
	}
);

class Api {
	static get(uri) {
		return instance.get(`${uri}`);
	}
}

export default Api;
