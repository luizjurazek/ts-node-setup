import Person from ".";

it("deve somar", () => {
  const person = new Person();
  expect(person.sayMyName()).toBe("Luuiz");
});
