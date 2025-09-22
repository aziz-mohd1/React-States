import { useState } from "react";

export default function Counter(){
    let [count, setCount] = useState(0);
    function inc(){
        setCount(count+1);
        console.log(count);      
    }
    return(
        <>
            <p >Count = {count}</p>
            <button onClick={inc}>Increase Count</button>
        </>
    );
};