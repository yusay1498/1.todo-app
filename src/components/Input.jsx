import React from "react";

function Input({onAdd}) {
    const [text, setText] = React.useState('');

    const handleChange = event => setText(event.target.value);

    const handleKeyDown = event => {
        if (event.key === 'Enter') {
            onAdd(text);
            setText('');
        }
    };

    return (
        <div className="panel-block">
            <input
                className="input"
                type="text"
                placeholder="Enter to add"
                value={text}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
}

export default Input;