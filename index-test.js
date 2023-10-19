function add(a, b) {
  return a + b;
}

function testAdd() {
  let result = add(1, 2);
  console.assert(result === 3, `Expected 3, but got ${result}`);
}

testAdd();
