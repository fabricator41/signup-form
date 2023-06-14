const password = document.getElementById('password');
const confirm = document.getElementById('confirm');
const form = document.getElementsByClassName('.shadow');
const error = document.querySelectorAll('.error');

confirm.addEventListener('input', check);
let deneme = document.createElement('label');

deneme.textContent = '*Passwords do not match';

function check() {
  return password.value === confirm.value
    ? error.classList.remove('error')
    : form.appendChild(deneme);
}
