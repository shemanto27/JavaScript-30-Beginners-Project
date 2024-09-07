const passInput = document.getElementById('Password');
const passCopy = document.getElementById('copypass');
const passGenerate = document.getElementById('generatepass');

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '!@#$%^&*()';

const allChar = upperCase + lowerCase + number + symbol;

const passLength = 12; 

function createPassword(){
    let password = '';
    while(passLength > password.length){
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password += number[Math.floor(Math.random() * number.length)];
        password += symbol[Math.floor(Math.random() * symbol.length)];
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }

    passInput.value = password;
}

function copyPassword(){
    passInput.select();
    navigator.clipboard.writeText(passInput.value);
    alert('Password copied in Clipboard!');
    
}

