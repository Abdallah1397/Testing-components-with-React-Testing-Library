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
