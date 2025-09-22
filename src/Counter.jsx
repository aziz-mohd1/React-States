export default function Counter(){
    let count = 0;
    function inc(){
        count++;
    }
    return(
        <>
            <button onClick={inc}>Count = {count}</button>
        </>
    );
};