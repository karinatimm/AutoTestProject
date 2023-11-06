import capitalize from "../src/capitalize.js";
import assert from "assert"; // Import the assert library
// if (capitalize("hello") !== "Hello") {
//   throw new Error("Функция работает неверно!");
// }

// if (capitalize("") !== "") {
//   throw new Error("Функция работает неверно!");
// }

// console.log("Все тесты пройдены!");
assert.strictEqual(capitalize(""), "");
// Первый параметр actual – то, что пришло
// Второй параметр expected – то, что ожидает тест
// Правильный порядок аргументов имеет большое значение при анализе ошибки
assert.strictEqual(capitalize("hello"), "Hello");

console.log("All tests passed!");
