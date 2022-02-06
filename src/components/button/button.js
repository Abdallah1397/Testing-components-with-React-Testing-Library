import { useState } from 'react';

// Button Component 
const Button = () => {
    // Button State
    const [buttonState, setButtonState] = useState({
        color: 'red',
        text: 'Change to blue',
    })
    // destructuring state object
    const { color, text } = buttonState;
    // onClick function to toggle button
    const onClick = () => {
        if (color === 'red' && text === 'Change to blue') {
            setButtonState({
                color: 'blue',
                text: 'Change to red',
            })
        }
    }
    return (
        <div>
            <button style={{ backgroundColor: color }} onClick={onClick}>
                {text}
            </button>
        </div>
    )
}
export default Button;