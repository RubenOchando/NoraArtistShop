import { Client } from "@vippsmobilepay/sdk";

// Create a client
const client = Client({
    merchantSerialNumber,
    subscriptionKey,
    useTestMode: true,
    retryRequests: false,
});

// Get a token
const accessToken = await client.auth.getToken({
    clientId,
    clientSecret,
    subscriptionKey,
});


// Create a checkout session separate in a new file?
const checkout = await client.checkout.create(clientId, clientSecret, {
    merchantInfo: {
      callbackUrl: "https://example.com/callbackUrl",
      returnUrl: "https://example.com/page-customer-returns-to-after-success-or-failure-or-cancel",
    },
    transaction: {
      amount: {
        currency: "NOK",
        value: 1000, // This value equals NOK 10,-
      },
      paymentDescription: "One pair of socks.",
    },
  });
 
  // Create a payment  separate in a new file?
const payment = await client.payment.create(token, {
    amount: {
      currency: "NOK",
      value: 1000, // This value equals 10 NOK
    },
    paymentMethod: { type: "WALLET" },
    customer: { phoneNumber: "4712345678" },
    returnUrl: `https://yourwebsite.com/redirect`,
    userFlow: "WEB_REDIRECT",
    paymentDescription: "One pair of socks",
  });