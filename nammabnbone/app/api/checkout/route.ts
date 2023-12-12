import { NextRequest, NextResponse } from 'next/server';
import { env } from 'process';
import Stripe from 'stripe';

export async function POST(req: NextRequest) {
	const redirectURL =
		process.env.NODE_ENV === 'development'
			? 'http://localhost:3000'
			: process.env.DEPLOYED_APP_URL;
	try {
		const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
		const { price, title, currency, startDate, endDate, listingId } =
			await req.json();
			const startDateFormatted = new Date(startDate).toISOString();
			const endDateFormatted = new Date(endDate).toISOString();
		const url = `${redirectURL}/payment-confirmation?startDate=${startDateFormatted}&endDate=${endDateFormatted}&listingId=${listingId}&totalPrice=${price}`;

		const session = await stripe.checkout.sessions.create({
			mode: 'payment',
			payment_method_types: ['card'],
			success_url: url,
			cancel_url: `${redirectURL}/checkout`,
			line_items: [
				{
					price_data: {
						unit_amount_decimal: price,
						currency,
						product_data: {
							name: title,
						},
					},
					quantity: 1,
				},
			],
		});
		const isPaymentValueZero = price === 0 || price === isNaN;
		if (isPaymentValueZero) {
			return NextResponse.json({
				success: false,
				message: 'Please send a valid payment value',
			});
		}

		const response = NextResponse.json(session.url, { status: 201 });
		return response;
	} catch (err: any) {
		return NextResponse.json({ success: false, message: err.message });
	}
}
