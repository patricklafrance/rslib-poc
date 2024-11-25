import { render, screen } from "@testing-library/react";
import { Button } from "../src/Button.tsx";

test("has a \"my-button\" className", async () => {
    render(<Button>Hello!</Button>);

    const element = await screen.findByRole("button");

    expect(element).toBeDefined();
    expect(element.className).toBe("my-button");
});
