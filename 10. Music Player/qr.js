const userInput = document.getElementById('inputId');
const qrCode = document.getElementById('qrId');

function createQr() {
    qrCode.src =  'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + userInput.value;
}