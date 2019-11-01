import React, {useState, useEffect} from 'react';

export default function App5() {

    const [chuck, setChuck] = useState("");
    const [dad, setDad] = useState("");

    function getChuckJoke() {
        fetch("https://api.chucknorris.io/jokes/random")
        .then(res => res.json())
        .then(data => {
            setChuck(data.value);
        });
    }

    useEffect(() => {
        getChuckJoke();
    }, [])

    useEffect(() => {
        const clear = setInterval(() => {
            fetch("https://icanhazdadjoke.com/", {headers: { Accept: 'application/json'}})
            .then(res => res.json())
            .then(data => {
                setDad(data.joke);
            });
        }, 10000)

        return () => {
            clearInterval(clear);
        }
    }, [])

    return (
        <div>
            <h1>Hey kids! Want some jokes?</h1>
            <h2>{chuck}</h2>
            <h2>{dad}</h2>
            <button onClick={() => getChuckJoke()}>
                Get a new chuck joke :)))
            </button>
        </div>
    );
}