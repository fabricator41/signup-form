const password = document.getElementById('password');
const confirm = document.getElementById('confirm');
const form = document.querySelector('.deneme');
const error = document.querySelectorAll('.error');
let temp;

confirm.addEventListener('change', check);
password.addEventListener('change', memory);
const deneme = document.createElement('p');

console.log(form);
form.appendChild(deneme);

function memory() {
  temp = password.value;
}

function check() {
  if (temp !== confirm.value) {
    console.log(deneme.textContent);
    deneme.style.color = '#f00';
    deneme.textContent = '*Passwords do not match';
  }
}
