const { addKeyword, addAnswer } = require('@bot-whatsapp/bot');

const finish = addKeyword(['terminar', 'finalizar']).addAnswer([
  '¡Yey! Espero haberte podido ayudar.',
  'Regresa cuando quieras.',
]);

module.exports = finish;
