const { addKeyword, addAnswer } = require('@bot-whatsapp/bot');

const schedulesFlow = require('./schedules');
const addressFlow = require('./address');
const paymentMethodsFlow = require('./paymentMethods');
const payFlow = require('./pay');

const main = addKeyword(['bot'])
  .addAnswer([
    '¡Hola! 👋 Soy un bot 🤖 de *Sayer - La Vía*',
    'Gracias por contactarnos.',
  ])
  .addAnswer('¿Cómo puedo ayudarte?')
  .addAnswer(
    [
      'Escribe un número basado en lo que quieras hacer.',
      'En cualquier momento puedes regresar a este menú escribiendo la palabra *bot*.',
      '',
      '*1.* Horarios',
      '*2.* Donde nos ubicamos',
      '*3.* Métodos de pago',
      '*4.* Pagar',
      // '4. Consultar un precio',
      // '5. Info acerca de algun producto',
    ],
    null,
    null,
    [schedulesFlow, addressFlow, paymentMethodsFlow, payFlow]
  );

module.exports = main;
