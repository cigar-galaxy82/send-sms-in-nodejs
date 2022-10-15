import { SuperfaceClient } from "@superfaceai/one-sdk";

const sdk = new SuperfaceClient();

async function run() {
  // Load the profile
  const profile = await sdk.getProfile('communication/send-sms@2.0.1');

  // Use the profile
  const result = await profile
    .getUseCase('SendMessage')
    .perform({
      to: '+12127290149',//You need to get this number verified
      from: '+4915207955279',//You need to get this number verified
      text: 'Your order is ready to be picked up!'
    }, {
      provider: 'vonage-nexmo',
      parameters: {
        apiSecret: 'Pg5iDkhk7Azamywh'
      },
      security: {
        apiKey: {
          apikey: '45d883c6'
        }
      }
    });

  // Handle the result
  try {
    const data = result.unwrap();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

run();