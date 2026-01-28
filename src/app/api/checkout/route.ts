import { NextRequest, NextResponse } from "next/server";
import { stripe, GENOMIC_PRODUCTS, GenomicProductId } from "@/lib/stripe";
import { headers } from "next/headers";

export async function POST(req: NextRequest) {
  try {
    const headersList = await headers();
    const origin = headersList.get("origin") || "http://localhost:3000";
    
    const { items } = await req.json();

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: "No items provided" },
        { status: 400 }
      );
    }

    const lineItems = items.map((item: { id: string }) => {
      const product = GENOMIC_PRODUCTS[item.id as GenomicProductId];
      if (!product) {
        throw new Error(`Invalid product: ${item.id}`);
      }
      return {
        price_data: {
          currency: "inr",
          product_data: {
            name: product.name,
            description: product.description,
          },
          unit_amount: product.priceInPaise,
        },
        quantity: 1,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout/cancel`,
      billing_address_collection: "required",
      phone_number_collection: {
        enabled: true,
      },
      custom_text: {
        submit: {
          message: "Your genomic sample collection kit will be dispatched within 48 hours of payment confirmation.",
        },
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout session error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
