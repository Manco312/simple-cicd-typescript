/**
 * Unit tests for divide()
 * Loads the compiled divide.js so window.divide is available (same as in the browser).
 */
declare global {
  interface Window {
    divide: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // Load the built script that attaches divide to window (non-module)
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./divide.js");
});

describe("divide", () => {
  it("divides two positive numbers", () => {
    expect(window.divide(10, 2)).toBe(5);
  });

  it("divides with zero as numerator", () => {
    expect(window.divide(0, 5)).toBe(0);
  });

  it("divides negative and positive numbers", () => {
    expect(window.divide(-10, 2)).toBe(-5);
  });

  it("divides two negative numbers", () => {
    expect(window.divide(-10, -2)).toBe(5);
  });

  it("throws an error when dividing by zero", () => {
    expect(() => window.divide(10, 0)).toThrow("Division by zero");
  });
});

export {};