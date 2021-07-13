// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

console.log(document);

let liClass = document.querySelectorAll("li.item");
// console.log(liClass);
liClass.forEach((newArr) => {
  //   console.log(newArr);
  console.log(`Категория: ${newArr.children[0].textContent}`);
  console.log(`Количество элементов: ${newArr.children[1].children.length}`);
});
