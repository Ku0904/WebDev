const { default: TestRunner } = require("jest-runner");
const AddFive = require("./script");

test("returns the number plus 5", () => {
  expect(AddFive(1).toBe(6));
});
