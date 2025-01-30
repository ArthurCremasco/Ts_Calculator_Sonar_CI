import { expect, test } from "vitest";
import calculator from "./index";

test("addition", () => {
  expect(calculator.add(5, 3)).toBe(8);
  expect(calculator.add(-5, 3)).toBe(-2);
});

test("subtraction", () => {
  expect(calculator.subtract(10, 4)).toBe(6);
  expect(calculator.subtract(5, 10)).toBe(-5);
});

test("multiplication", () => {
  expect(calculator.multiply(3, 7)).toBe(21);
  expect(calculator.multiply(0, 10)).toBe(0);
});

test("division", () => {
  expect(calculator.divide(20, 4)).toBe(5);
  expect(() => calculator.divide(10, 0)).toThrow("Division by zero is not allowed.");
});

test("power", () => {
  expect(calculator.power(2, 3)).toBe(8);
  expect(calculator.power(5, 0)).toBe(1); // Any number to the power of 0 is 1
});

test("square root", () => {
  expect(calculator.sqrt(16)).toBe(4);
  expect(() => calculator.sqrt(-1)).toThrow("Cannot calculate the square root of a negative number.");
});

test("modulus", () => {
  expect(calculator.modulus(10, 3)).toBe(1);
  expect(calculator.modulus(10, 5)).toBe(0);
});
