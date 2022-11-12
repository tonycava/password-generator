const checkNum = document.getElementById('Num')
const checkLow = document.getElementById('Low')
const checkUp = document.getElementById('Up')
const checkSyb = document.getElementById('Syb')

checkNum.checked = true
checkUp.checked = true

const buttonGeneratePassword = document.getElementById('generatePassword')
const copyToClipboard = document.getElementById('copyToClipboard')
const output = document.getElementById('output')

const lengthPassword = document.getElementById('lengthPassword')
let finalChooseOption = ['', '', '', '']

copyToClipboard.addEventListener("click", () =>
  navigator.clipboard.writeText(output.value))

checkUp.addEventListener('click', () =>
  checkUp.checked ? finalChooseOption[0] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : finalChooseOption[0] = "")

checkLow.addEventListener('click', () =>
  checkLow.checked ? finalChooseOption[1] = "abcdefghijklmnopqrstuvwxyz" : finalChooseOption[1] = "")

checkNum.addEventListener('click', () =>
  checkNum.checked ? finalChooseOption[2] = "0123456789" : finalChooseOption[2] = "")

checkSyb.addEventListener('click', () =>
  checkSyb.checked ? finalChooseOption[3] = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~" : finalChooseOption[3] = "")

buttonGeneratePassword.addEventListener("click", () =>
  GetPassword(lengthPassword.value, finalChooseOption))

const GetPassword = (number, finalChooseOption) => {
  let result = '';
  finalChooseOption = finalChooseOption.join("")
  for (let i = 0; i < number; i++) {
    result += finalChooseOption.charAt(Math.floor(Math.random() * finalChooseOption.length));
  }
  output.value = result;
}