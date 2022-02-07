import { render, screen, fireEvent } from "@testing-library/react";
import TextField from "../textField";

describe("Text Feild Cases", () => {
    test("if it exist", () => {
        render(<TextField />);
        const textFieldElement = screen.getByPlaceholderText(
            "Enter your informations"
        );
        expect(textFieldElement).toBeInTheDocument();
    });
    test("if it empty", () => {
        render(<TextField />);
        const textFieldElement = screen.getByPlaceholderText(
            "Enter your informations"
        );
        fireEvent.change(textFieldElement, { target: { value: "" } });
        expect(textFieldElement.value).toBe("");
    });
    test("if it works well", () => {
        render(<TextField />);
        const textFieldElement = screen.getByPlaceholderText(
            "Enter your informations"
        );
        fireEvent.change(textFieldElement, { target: { value: "Item1" } });
        expect(textFieldElement.value).toBe("Item1");
    });
});
