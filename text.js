let name = document.getElementById("name"),
    surname = document.getElementById("surname"),
    age = document.querySelector("#age"),
    nameInput = document.getElementsByTagName("input")[0],
    surnameInput = document.querySelectorAll("input")[1],
    ageInput = document.querySelectorAll("input")[2];

nameInput.addEventListener('input', function() {
    name.innerHTML = `Моё имя: ${nameInput.value}`;
});

surnameInput.addEventListener('input', function() {
    surname.innerHTML = `Моя фамилия: ${surnameInput.value}`;
});

ageInput.addEventListener("input", () => {
    if (ageInput.value.length > 2) {
      age.innerHTML = 'Непохоже на реальный возраст';
    } else {
      age.innerHTML = `Мне: ${ageInput.value} лет`
    }
});