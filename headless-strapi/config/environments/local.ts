export default (env) => ({
  enablePreviewUrl: "http://localhost:3000/api/draft",
  revalidationUrl: "http://localhost:3000/api/revalidate",
  paypal: {
    baseUrl: "https://api.sandbox.paypal.com",
    clientId: "",
    secret: env("PAYPAL_CLIENT_SECRET", ""),
  },
});
