export function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

//todo: Проверить является ли слово палиндромом

//? Палиндром - слово или текст, одинаково читающееся в обоих направлениях.

//? Пример: racecar 
