import { add, subtract } from "../utils/calculator";

test("сложение", () => {
  expect(add(5, 100)).toBe(105);
});

test("вычитание", () => {
  expect(subtract(101, 100)).toBe(1);
});
