const { addKeyword, addAnswer } = require('@bot-whatsapp/bot');

const paymentMethods = addKeyword(['3', '3.', 'métodos de pago']).addAnswer([
  'Aceptamos:',
  '',
  '- Efectivo',
  '- Transferencia',
  '- Tarjeta de débito/crédito',
  '- Codi',
  '- Mercado pago',
]);

module.exports = paymentMethods;
