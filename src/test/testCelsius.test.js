import { celsiusToFahrenheit } from "../utils/celsiusToFahrenheitConverter";

test("Fahrenheit", () => {
  expect(celsiusToFahrenheit(10)).toBe(50);
});
