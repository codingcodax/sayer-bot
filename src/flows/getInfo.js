const { addKeyword, addAnswer } = require('@bot-whatsapp/bot');

const getInfo = addKeyword(['5', '5.', 'info']).addAnswer(
  [
    'Porfavor dime la clave del producto del cual quieres saber mas.',
    'Ejemplo:',
    '✅ ex-0200',
    '❌ ex-0200.30',
  ],
  { capture: true }
);

module.exports = getInfo;
