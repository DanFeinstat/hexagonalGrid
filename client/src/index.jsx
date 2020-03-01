import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function Hex() {
    const [style, setStyle] = useState({
        backgroundColor: 'blue',
        border: '1px solid black',
        height: '100px',
        width: '100px',
        transform: 'skew(0deg, 0deg)'
        // clipPath: 'polygon(25% 0%, 0% 50%, 25% 100%, 75% 100%, 100% 50%, 75% 0%)'
    })

    return (
        <div style={style}>
            Hello World
        </div>
    )
}

ReactDOM.render(<Hex />, document.getElementById('app'));

