/*
Write the filterDivisible(numbers, divisor) function, that will get an array of numbers and a number.
Your task is to find the numbers in the array that are divisible with the provided number and return them in an array.

Tip
If none of the numbers are divisible by the given number, then return an empty array.
Be mindful of division by 0. If the given number is 0 then return null.
If the array is empty then it should return an empty array.
 */

//first one will be filterDivisible([3, 6, 9, 12], 3)
function filterDivisible(numbers, divisor) {
    let numbersThatAreDivisible = [];

    for (let i = 0; i < numbers.length; i++)

        if (divisor == 0) {
            return null
        } //Be mindful of division by 0. If the given number is 0 then return null.

        else if (numbers[i] % divisor === 0) {
            numbersThatAreDivisible.push(numbers[i])
        } //find the numbers in the array that are divisible with the provided number and return them in an array.

        else if (numbersThatAreDivisible.length > 0) {
            //return numbersThatAreDivisible     -not needed?
        } //If none of the numbers are divisible by the given number, then return an empty array.

        else { }; //ignore other scenarios
        
    return numbersThatAreDivisible
}

module.exports = filterDivisible;


/*
test('number is 3 and all numbers are divisible by 3', () => {
  expect(filterDivisible([3, 6, 9, 12], 3))
    .toStrictEqual([3, 6, 9, 12]);
});
*/