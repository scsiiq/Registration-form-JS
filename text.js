let name = document.getElementById("name"),
    surname = document.getElementById("surname"),
    age = document.querySelector("#age"),
    nameInput = document.getElementsByTagName("input")[0],
    surnameInput = document.querySelectorAll("input")[1],
    ageInput = document.querySelectorAll("input")[2];

nameInput.addEventListener('input', function() {
    name.innerHTML = `My name: ${nameInput.value}`;
});

surnameInput.addEventListener('input', function() {
    surname.innerHTML = `My surname: ${surnameInput.value}`;
});

ageInput.addEventListener("input", () => {
    if (ageInput.value.length > 2) {
      age.innerHTML = 'Doesn't look like a real age';
    } else {
      age.innerHTML = `To me: ${ageInput.value} years`
    }
});
