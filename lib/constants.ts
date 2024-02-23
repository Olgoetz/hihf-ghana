export const BASE_URL = "https://hihf-ghana.org";

export const payPalInitialOptions = {
  clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID as string,
  currency: "EUR",
  intent: "capture",
};
