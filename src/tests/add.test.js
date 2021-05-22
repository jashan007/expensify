const add = (a, b) => a + b;
const generateGreeting = (name = "Anonymous") => `Hello ${name}`;

test("should add two numbers", () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test("Name should be Mike", () => {
  const result = generateGreeting("Mike");
  expect(result).toBe("Hello Mike");
});

test("function should be work for no name", () => {
  const result = generateGreeting();
  expect(result).toBe("Hello Anonymous");
});
