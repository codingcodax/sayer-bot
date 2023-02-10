const { addKeyword, addAnswer } = require('@bot-whatsapp/bot');

const address = addKeyword([
  'direccion',
  'dirección',
  'cual es tu dirección',
]).addAnswer([
  'Nuestra direccion es la siguiente',
  '',
  'https://g.page/Sayer-La-Via',
]);

module.exports = address;
