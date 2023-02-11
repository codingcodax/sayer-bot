const { addKeyword, addAnswer } = require('@bot-whatsapp/bot');

const finishFlow = require('./finish');

const schedules = addKeyword(['1', '1.', 'horarios', 'horario']).addAnswer(
  [
    'Nuestro horario es el siguiente:',
    '',
    'Lunes a Viernes:  9:00 am - 6:00pm',
    'Sabado:              9:00 am - 5:00pm',
    'Domingo:           Cerrado',
  ],
  { buttons: [{ body: 'Menú' }, { body: 'Terminar' }] },
  null,
  [finishFlow]
);

module.exports = schedules;
