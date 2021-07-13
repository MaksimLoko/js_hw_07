// Задание 2
// В HTML есть пустой список ul#ingredients.
// <ul id="ingredients"></ul>
// В JS есть массив строк.
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

// console.log(document);

let html = "";

ingredients.forEach((arr) => {
  html += `<li>${arr}</li>`;
});
// console.log(html);

let ul = document.querySelectorAll("ul")[4];
console.log(ul);

ul.innerHTML = html;
