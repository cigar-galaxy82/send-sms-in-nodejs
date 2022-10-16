import { SuperfaceClient } from "@superfaceai/one-sdk";
const sdk = new SuperfaceClient();

async function run(apiSecret, apiKey, phone1, phone2) {
  // Load the profile
  const profile = await sdk.getProfile('communication/send-sms@2.0.1');

  // Use the profile
  const result = await profile
    .getUseCase('SendMessage')
    .perform({
      to: phone1,//this is a dummy number
      from: phone2,//this is a dummy number
      text: 'Your order is ready to be picked up!'
    }, {
      provider: 'vonage-nexmo',
      parameters: {
        apiSecret: apiSecret
      },
      security: {
        apiKey: {
          apikey: apiKey
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

const apiSecret = 'Pg5iDkhk7Azamywh'
const apiKey = '45d883c6'
const phone1 = '+12127290149'
const phone2 = '+4915207955279'

run(apiSecret, apiKey, phone1, phone2);