const { addKeyword, addAnswer } = require('@bot-whatsapp/bot');

const finishFlow = require('./finish');

const address = addKeyword('2').addAnswer(
  ['Nuestra direccion es la siguiente', '', 'https://g.page/Sayer-La-Via'],
  { buttons: [{ body: 'Menú' }, { body: 'Terminar' }] },
  null,
  [finishFlow]
);

module.exports = address;
