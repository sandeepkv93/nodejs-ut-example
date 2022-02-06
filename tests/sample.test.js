test("Addition", () => {
    const a = 10;
    const b = 5;
    const c = a + b;
    expect(c).toBe(15);
});

test("Subtraction", () => {
    const a = 10;
    const b = 5;
    const c = a - b;
    expect(c).toBe(5);
});

test("Multiplication", () => {
    const a = 10;
    const b = 5;
    const c = a * b;
    expect(c).toBe(50);
});

test("Division", () => {
    const a = 10;
    const b = 5;
    const c = a / b;
    expect(c).toBe(2);
});
