const { addKeyword, addAnswer } = require('@bot-whatsapp/bot');

const finishFlow = require('./finish');

const paymentMethods = addKeyword(['3', '3.', 'métodos de pago']).addAnswer(
  [
    'Aceptamos:',
    '',
    '- Efectivo',
    '- Transferencia',
    '- Tarjeta de débito/crédito',
    '- Codi',
    '- Mercado pago',
  ],
  { buttons: [{ body: 'Menú' }, { body: 'Terminar' }] },
  null,
  [finishFlow]
);

module.exports = paymentMethods;
