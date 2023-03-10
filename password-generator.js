const generateBtn = document.getElementById("generateBtn");
const generatedPassword = document.getElementById("generatedPassword");

generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
  const passwordLength = document.getElementById("passwordLength").value;
  const passwordComplexity = document.getElementById("passwordComplexity").value;
  let password = "";

  const easyChars = "abcdefghijklmnopqrstuvwxyz";
  const mediumChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const hardChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";

  let chars = "";

  switch (passwordComplexity) {
    case "1":
      chars = easyChars;
      break;
    case "2":
      chars = mediumChars;
      break;
    case "3":
      chars = hardChars;
      break;
    default:
      chars = easyChars;
  }

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  generatedPassword.value = password;
}
