import Person from "../person";

it("shoul return hello", () => {
  const pessoa = new Person();
  expect(pessoa.sayHello()).toBe("Hello");
});
