import test from "ava";
import { add } from "./index.js";

test("should return 0 when numbers is an empty string", (t) => {
  const result = add("");

  t.is(0, result);
});

test("should return a number when numbers contains only one number", (t) => {
  const result = add("1");

  t.is(1, result);
});

test("should return the sum of two numbers when numbers contains two numbers", (t) => {
  const result = add("1,2");

  t.is(3, result);
});

test("should return sum when numbers are separated by new line character", (t) => {
  const result = add(`1
2,3`);

  t.is(6, result);
});
