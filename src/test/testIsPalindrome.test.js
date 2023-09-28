import { isPalindrome } from "../utils/isPalindrome";

test("isPalindrome", () => {
  const str = "racecar";
  expect(isPalindrome(str)).toBe(true);
});
