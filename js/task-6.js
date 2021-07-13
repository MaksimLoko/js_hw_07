// Задание 6
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.
// #validation-input {
//   border: 3px solid #BDBDBD;
// }
// #validation-input.valid {
//   border-color: #4CAF50;
// }
// #validation-input.invalid {
//   border-color: #F44336;
// }

let inputLength = document.querySelector("#validation-input");
// console.log(inputLength);
let dataLength = inputLength.getAttribute("data-length");

inputLength.addEventListener("change", (event) => {
  //   console.log(event.target.value);
  if (event.target.value.length != dataLength) {
    inputLength.classList.add("invalid");
  } else {
    inputLength.classList.add("valid");
  }
});
