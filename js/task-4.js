// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

let counterValue = 0;
let decremBtn = document.querySelector('button[data-action="decrement"]');
// console.logdecremBtn(decremBtn);
let incremBtn = document.querySelector('button[data-action="increment"]');
// console.log(incremBtn);
let valueSpan = document.querySelector("#value");
// console.log(spanValue);

incremBtn.addEventListener("click", (incremBtn) => {
  incremBtn = counterValue += 1;
  valueSpan.textContent = counterValue;
});

decremBtn.addEventListener("click", (decremBtn) => {
  counterValue -= 1;
  valueSpan.textContent = counterValue;
});
