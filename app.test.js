const test = require("node:test");
const assert = require("node:assert/strict");

test("Employee API returns the employee list", async () => {
  const response = await fetch("http://localhost:3000/employees");

  assert.equal(response.status, 200);

  const employees = await response.json();

  assert.equal(employees.length, 2);
  assert.equal(employees[0].name, "Rahul");
  assert.equal(employees[1].name, "Priya");
});
