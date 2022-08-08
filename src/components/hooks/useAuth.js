import axios from 'axios';
import { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';

const useAuth = () => {
	const [userInfo, setUserInfo] = useState();
	const [token, setToken] = useState(localStorage.getItem('token'));

	const logout = () => {
		localStorage.removeItem('token');
		// window.location = '/auth/login';
		setUserInfo(null);
	};

	useEffect(() => {
		try {
			const queryString = window.location.search;
			const urlParams = new URLSearchParams(queryString);
			const urlToken = urlParams.get('token');

			let decodedToken = token ? jwtDecode(token) : null;

			if (!decodedToken) {
				decodedToken = urlToken ? jwtDecode(urlToken) : null;

				if (decodedToken) {
					localStorage.setItem('token', urlToken);
					setToken(urlToken);
				}
			}

			if (decodedToken && Date.now() < decodedToken.exp * 1000) {
				setUserInfo(decodedToken);
				axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
			} else {
				logout();
			}
		} catch (err) {
			logout();
		}
	}, [token]);

	return { userInfo, setUserInfo };
};

export default useAuth;