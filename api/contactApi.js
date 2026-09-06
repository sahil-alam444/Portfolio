"use client";

import { useMutation } from "@tanstack/react-query";
import request from "./request";

/**
 * Send contact inquiry message using Axios
 * @param {Object} payload - Contact form details { name, email, subject, message }
 * @returns {Promise<Object>} API delivery confirmation
 */
export async function sendContactMessage(payload) {
	const response = await request.post("/api/contact", payload);
	return response.data;
}

/**
 * TanStack Mutation hook for dispatching contact inquiries
 * @param {Object} [options] - TanStack useMutation options (onSuccess, onError, etc.)
 * @returns {import("@tanstack/react-query").UseMutationResult}
 */
export function useContactMutation(options = {}) {
	return useMutation({
		mutationFn: sendContactMessage,
		...options,
	});
}

export default sendContactMessage;
