import { describe, expect, it } from "vitest";
import { calculateAmount } from ".";
import { CryptoData } from "../types/CryptoTypes";

describe("calculateAmount", () => {
  it("should return the exact value", () => {
    const result = calculateAmount(CryptoData.Bitcoin, 500);
    expect(result).toBe(300);
  });
});
