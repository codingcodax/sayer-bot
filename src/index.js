const { createBot, createProvider, createFlow } = require('@bot-whatsapp/bot');

const mainFlow = require('./flows/main');
const schedulesFlow = require('./flows/schedules');
const addressFlow = require('./flows/address');

const QRPortalWeb = require('@bot-whatsapp/portal');
const BaileysProvider = require('@bot-whatsapp/provider/baileys');
const JsonAdapter = require('@bot-whatsapp/database/json');
const paymentMethodsFlow = require('./flows/paymentMethods');
const finishFlow = require('./flows/finish');

const main = async () => {
  const adapterDB = new JsonAdapter();
  const adapterFlow = createFlow([
    mainFlow,
    schedulesFlow,
    addressFlow,
    paymentMethodsFlow,
    finishFlow,
  ]);
  const adapterProvider = createProvider(BaileysProvider);
  createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  });
  QRPortalWeb();
};

main();
