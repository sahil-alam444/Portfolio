import { NextResponse } from "next/server";

export async function POST(request) {
	try {
		const body = await request.json();
		const { name, email, subject, message } = body;

		if (!name || !email || !message) {
			return NextResponse.json(
				{ error: "Name, email, and message are required." },
				{ status: 400 }
			);
		}

		// Simulate message receipt and optional webhook / email integration
		return NextResponse.json({
			success: true,
			message: `Thank you ${name}! Your message has been received.`,
			receivedAt: new Date().toISOString(),
		});
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to process contact message.", details: error.message },
			{ status: 500 }
		);
	}
}
