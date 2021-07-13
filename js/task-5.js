// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

let nameInput = document.querySelector("#name-input");
console.log(nameInput);

let nameOutput = document.querySelector("#name-output");
console.log(nameOutput);

nameInput.addEventListener("keydown", (event) => {
  nameInput.textContent = event.key;
  nameOutput.textContent = event.target.value;
  if (nameOutput.textContent === "") {
    nameOutput.textContent = "незнакомец";
  }
});
