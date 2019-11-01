import React, {useState, useEffect} from 'react';

function TimeDisplay() {
    const date = new Date();
    const [time, setTime] = useState(0);

    useEffect(function() {
        const clear = setInterval(() => { setTime(date.toLocaleTimeString()); }, 1000);

        return () => {
            clearInterval(clear);
        }
    }, [time]);

    return <h2>Time is: {time}</h2>;
}


export default function App4(props) {

    const {startVal, toIncrement} = props; // ???
    const [count, setCount] = useState(startVal);

    return (
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>

            <button onClick={() => setCount(count - toIncrement)}>-</button>
            <button onClick={() => setCount(count + toIncrement)}>+</button>

            <TimeDisplay/>
        </div>
    );
}
