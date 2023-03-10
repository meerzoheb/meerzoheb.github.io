function generatePassword() {
  var length = document.getElementById('length').value
  var uppercase = document.getElementById('uppercase').checked
  var lowercase = document.getElementById('lowercase').checked
  var numbers = document.getElementById('numbers').checked
  var symbols = document.getElementById('symbols').checked

  var charset = ''
  if (uppercase) {
    charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }
  if (lowercase) {
    charset += 'abcdefghijklmnopqrstuvwxyz'
  }
  if (numbers) {
    charset += '0123456789'
  }
  if (symbols) {
    charset += '!@#$%^&*()_+-={}[]|\\:;"\'<>,.?/'
  }

  var password = ''
  for (var i = 0; i < length; i++) {
    var index = Math.floor(Math.random() * charset.length)
    password += charset.charAt(index)
  }

  document.getElementById('password').innerHTML = password
}
