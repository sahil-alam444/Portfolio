import axios from "axios";

export const request = axios.create({
	baseURL: "",
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
	},
});

// Axios response interceptor for streamlined error extraction
request.interceptors.response.use(
	(response) => response,
	(error) => {
		const message =
			error.response?.data?.error ||
			error.response?.data?.message ||
			error.message ||
			"An unexpected API error occurred.";
		return Promise.reject(new Error(message));
	}
);

export default request;
