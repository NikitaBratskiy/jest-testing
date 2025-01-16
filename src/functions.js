// src/functions.js

/**
 * Функция countDown печатает в консоль обратный отсчет от n до 1.
 * @param {number} n - Число, с которого начинается отсчет.
 * @returns {number[]} - Массив чисел от n до 1.
 */
function countDown(n) {
    if (n <= 0) throw new Error("Число должно быть больше 0");
    
    let result = [];
    for (let i = n; i > 0; i--) {
        console.log(i);
        result.push(i);
    }
    return result;
}

module.exports = { countDown };