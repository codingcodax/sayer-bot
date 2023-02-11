const { addKeyword, addAnswer } = require('@bot-whatsapp/bot');

const pay = addKeyword('4', '4.', 'pagar')
  .addAnswer(
    'Te paso la clabe interbancaria para que hagas la transferencia a *Maria Luisa Ines* al banco *Banco Azteca*.'
  )
  .addAnswer('Clabe interbancaria: 127180013355278209');

module.exports = pay;
