import { render, screen } from "@testing-library/react";
import { TextInput } from "../src/TextInput.tsx";

test("has a \"my-text-input\" className", async () => {
    render(<TextInput />);

    const element = await screen.findByRole("textbox");

    expect(element).toBeDefined();
    expect(element.className).toBe("my-text-input");
});
