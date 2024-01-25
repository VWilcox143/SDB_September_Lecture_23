import React from 'react'

function Counter({count, setCount}) {
    //const [count, setCount] = useState(0);

    const countUp = () => {
        setCount(count + 1);
};

    const countDown = () => {
    setCount(count - 1);
};

    return (
    <div>
    <h1>Counter</h1>
    <button onClick={countDown}>-</button>

    <span>{count}</span>
    <button onClick={countUp}>+</button>
    </div>
);
}

export default Counter;