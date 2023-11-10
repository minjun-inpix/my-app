import React, { useState } from "react";
 
function Counter() {
    const [count, setCount] = useState;
    const onIncrease = () => setCount(count +1);
    const onDecrease = () => setCount(count -1);

    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta quos dicta neque incidunt eum repellendus! Aperiam sed laboriosam tenetur corrupti maxime! Eum placeat quos animi, dolores nihil nobis iusto ab.
            </div>
        </div>
    )
}

export default Counter;