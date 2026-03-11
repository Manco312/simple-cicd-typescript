/**
 * Unit tests for multiply()
 * Loads the compiled mult.js so window.multiply is available (same as in the browser).
 */
declare global {
  interface Window {
    multiply: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // Load the built script that attaches multiply to window (non-module)
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./mult.js");
});

describe("multiply", () => {
  it("multiplies two positive numbers", () => {
    expect(window.multiply(3, 4)).toBe(12);
  });

  it("multiplies with zero", () => {
    expect(window.multiply(5, 0)).toBe(0);
  });

  it("multiplies negative and positive numbers", () => {
    expect(window.multiply(-3, 4)).toBe(-12);
  });

  it("multiplies two negative numbers", () => {
    expect(window.multiply(-2, -3)).toBe(6);
  });

  it("returns 0 when both numbers are 0", () => {
    expect(window.multiply(0, 0)).toBe(0);
  });
});

export {};