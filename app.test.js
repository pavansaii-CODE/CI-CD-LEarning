const test = require("node:test");
const assert = require("node:assert/strict");
const app = require("./app");

test("Employee API returns the employee list", async () => {
  const server = app.listen(0, "127.0.0.1");

  try {
    await new Promise(resolve => server.once("listening", resolve));

    const address = server.address();
    const response = await fetch(
      `http://127.0.0.1:${address.port}/employees`
    );

    assert.equal(response.status, 200);

    const employees = await response.json();

    assert.equal(employees.length, 2);
    assert.equal(employees[0].name, "Rahul");
    assert.equal(employees[1].name, "Priya");
  } finally {
    await new Promise((resolve, reject) => {
      server.close(error => error ? reject(error) : resolve());
    });
  }
});
