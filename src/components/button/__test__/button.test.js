import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../button";

test("button cases", () => {
    render(<Button />);
    const buttonElement = screen.getByRole("button", { name: "Change to blue" });
    expect(buttonElement).toHaveStyle({ backgroundColor: "red" });
    // check change of button state after click
    fireEvent.click(buttonElement);
    expect(buttonElement.textContent).toBe("Change to red");
    expect(buttonElement).toHaveStyle({
        backgroundColor: "blue",
    });
});

test("Button status", () => {
    render(<Button />);
    // check that the button starts with enabled state
    const buttonElement = screen.getByRole('button', { name: 'Change to blue' });
    expect(buttonElement).toBeEnabled();

    // check that the checkBox starts with unChecked box
    const checkBoxElement = screen.getByRole('checkbox');
    expect(checkBoxElement).not.toBeChecked();

    fireEvent.click(checkBoxElement);
    expect(buttonElement).not.toBeEnabled();
})