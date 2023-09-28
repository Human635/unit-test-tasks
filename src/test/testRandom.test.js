import { generateRandomNumber } from "../utils/randomNumberGenerator";

test('generaterandomnum', () => {
    const min = 1;
    const max = 100;
    const randomNumber = generateRandomNumber(min, max);
    
    expect(randomNumber).toBeGreaterThanOrEqual(min);
    expect(randomNumber).toBeLessThanOrEqual(max);
})