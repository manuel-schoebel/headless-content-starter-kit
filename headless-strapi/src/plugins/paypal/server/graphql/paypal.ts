import axios from "axios";

const generateAccessToken = async (strapi) => {
  const { config } = strapi.plugin("paypal");
  const clientId = config("clientId");
  const secret = config("secret");
  const baseURL = config("baseUrl");

  console.log("clientId", clientId);
  console.log("secret", secret);
  console.log("baseURL", baseURL);

  try {
    const tokenResp = await axios({
      method: "post",
      url: `${baseURL}/v1/oauth2/token`,
      auth: {
        username: clientId,
        password: secret,
      },
      data: `grant_type=client_credentials`,
    });

    const {
      token_type,
      access_token,
      expires_in, //seconds
    } = tokenResp.data;
    return access_token;
  } catch (e) {
    console.error("error authorizing paypal client", e.message);
  }
};

export default (strapi) =>
  ({ nexus }) => ({
    types: [
      nexus.objectType({
        name: "PaypalLink",
        definition(t) {
          t.string("href");
          t.string("rel");
          t.string("method");
        },
      }),
      nexus.objectType({
        name: "PaypalCreateOrderResponse",
        definition(t) {
          t.string("id");
          t.string("status");
          t.list.field("links", {
            type: "PaypalLink",
          });
        },
      }),
      nexus.extendType({
        type: "Mutation",
        definition(t) {
          t.string("createPaypalOrder", {
            type: "PaypalCreateOrderResponse",
            args: {
              amount: "String",
              currency: "String",
              orderId: "String",
            },
            resolve: async (root, args, ctx) => {
              const { amount, currency, orderId } = args;
              const { config } = strapi.plugin("paypal");
              const baseURL = config("baseUrl");

              const url = `${baseURL}/v2/checkout/orders`;
              const accessToken = await generateAccessToken(strapi);
              const payload = {
                intent: "CAPTURE",
                purchase_units: [
                  {
                    custom_id: orderId,
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              };

              console.log(
                "payload",
                JSON.stringify(payload, null, 2),
                accessToken
              );
              try {
                const resp = await axios({
                  method: "post",
                  url,
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                  },
                  data: JSON.stringify(payload),
                });

                console.log("resp", JSON.stringify(resp.data, null, 2));

                return resp.data;
              } catch (e) {
                console.error("error creating paypal order", e.message);
              }
            },
          });
        },
      }),
      nexus.objectType({
        name: "PaypalCaptureOrderResponse",
        definition(t) {
          t.boolean("success");
        },
      }),
      nexus.extendType({
        type: "Mutation",
        definition(t) {
          t.string("capturePaypalOrder", {
            type: "PaypalCaptureOrderResponse",
            args: {
              paypalOrderId: "String",
              orderId: "String",
            },
            async resolve(root, args, ctx) {
              const { config } = strapi.plugin("paypal");
              const baseURL = config("baseUrl");

              const { paypalOrderId, orderId } = args;

              console.log("capture payment", { paypalOrderId, orderId });

              const url = `${baseURL}/v2/checkout/orders/${paypalOrderId}/capture`;
              const accessToken = await generateAccessToken(strapi);

              const resp = await axios({
                method: "post",
                url,
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${accessToken}`,
                },
              });

              console.log("capture response", resp.data);

              await strapi.entityService.update("api::order.order", orderId, {
                data: {
                  paid: true,
                  pspId: resp.data.id,
                },
              });

              //todo set order to paid

              return { success: true };
            },
          });
        },
      }),
    ],
    resolversConfig: {
      "Mutation.createPaypalOrder": {
        auth: false,
      },
      "Mutation.capturePaypalOrder": {
        auth: false,
      },
    },
  });
