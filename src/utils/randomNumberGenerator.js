export function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//todo: Проверить является ли сгенерированное число больше 1 и меньше 100
