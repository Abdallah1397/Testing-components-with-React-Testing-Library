import { useState } from "react";

// Button Component
const Button = () => {
    // Button State
    const [buttonState, setButtonState] = useState({
        color: "red",
        text: "Change to blue",
        disabled: false,
    });
    // destructuring state object
    const { color, text, disabled } = buttonState;
    // onClick function to toggle button
    const onClick = () => {
        if (color === "red" && text === "Change to blue") {
            setButtonState({
                ...buttonState,
                color: "blue",
                text: "Change to red",
            });
        } else {
            setButtonState({
                ...buttonState,
                color: "red",
                text: "Change to blue",
            });
        }
    };
    // onCheckbox Cliced
    const handleCheckBox = () => {
        if (disabled === false) {
            setButtonState({
                ...buttonState,
                disabled: true,
            });
        } else {
            setButtonState({
                ...buttonState,
                disabled: false,
            });
        }
    };
    return (
        <div>
            <button
                style={{ backgroundColor: color }}
                onClick={onClick}
                disabled={disabled}
            >
                {text}
            </button>
            <input
                type="checkbox"
                name="check"
                onClick={handleCheckBox}
                id="disable-button-checkbox"
            />
            <label htmlFor="disable-button-checkbox"> Disable Button </label>
        </div>
    );
};
export default Button;
