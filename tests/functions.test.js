// tests/functions.test.js

const { countDown } = require("../src/functions");

describe("Функция countDown()", () => {

    test("Обратный отсчет от 3 должен вернуть [3, 2, 1]", () => {
        expect(countDown(3)).toEqual([3, 2, 1]);
    });

    test("Обратный отсчет от 5 должен вернуть [5, 4, 3, 2, 1]", () => {
        expect(countDown(5)).toEqual([5, 4, 3, 2, 1]);
    });

    test("Передача 1 должна вернуть [1]", () => {
        expect(countDown(1)).toEqual([1]);
    });

    test("Передача 0 должна выбрасывать ошибку", () => {
        expect(() => countDown(0)).toThrow("Число должно быть больше 0");
    });

    test("Передача отрицательного числа (-3) должна выбрасывать ошибку", () => {
        expect(() => countDown(-3)).toThrow("Число должно быть больше 0");
    });

    test("Передача строки ('3') должна выбрасывать ошибку", () => {
        expect(() => countDown("3")).toThrow();
    });

    test("Тест на большое число (1000), должен вернуть массив из 1000 чисел", () => {
        expect(countDown(1000).length).toBe(1000);
    });

});