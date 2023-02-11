const { addKeyword, addAnswer } = require('@bot-whatsapp/bot');

const address = addKeyword([
  '2',
  '2.',
  'direccion',
  'dirección',
  'cual es tu dirección',
]).addAnswer(
  ['Nuestra direccion es la siguiente', '', 'https://g.page/Sayer-La-Via'],
  { buttons: [{ body: 'Menú' }, { body: 'Terminar' }] }
);

module.exports = address;
