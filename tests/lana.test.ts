import { describe, expect, test } from "vitest";
import { Lana } from "../src/lana";

describe("Lana", () => {
    test("crear una lana", () => {
        const lana = new Lana("Lana Merino");

        expect(lana).toBeInstanceOf(Lana);
    });
}); 