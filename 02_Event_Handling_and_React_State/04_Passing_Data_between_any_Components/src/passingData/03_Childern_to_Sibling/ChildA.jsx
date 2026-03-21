import React from 'react'

const ChildA = (props) => {
    const handleChildButtonClick = () => {
        props.handleDataFromChild();
    };

    return (
        <div>
        <p>Child Count : {props.count}</p>
        <button onClick={handleChildButtonClick}>Child A Button</button>
        </div>
    );
}

export default ChildA