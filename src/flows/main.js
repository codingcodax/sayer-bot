const { addKeyword, addAnswer } = require('@bot-whatsapp/bot');

const main = addKeyword(['hola', 'ole', 'alo', 'ola', 'menu']).addAnswer(
  [
    'Hola!, bienvenid@ a *Sayer - La Via*',
    'Recuerda que soy un bot',
    'Selecciona una de las siguientes opciones.',
  ],
  {
    buttons: [{ body: 'Horarios' }, { body: 'Direccion' }],
  }
);

module.exports = main;
