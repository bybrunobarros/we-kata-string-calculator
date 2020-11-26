import test from "ava"
import {add} from "./index.js"

test("should return an empty when input is 0", t => {
  const result = add("");

  t.is(0, result);
})