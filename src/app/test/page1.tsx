import { useState } from 'react';

export default function MyApp() {

  const [count, setCount] = useState(0); 

  function handleClick() {
    setCount(count + 1 );
  }

    return(
    <div>
      <MyButton count={count} onClick={onclick}/>
      <MyButton count={count} onClick={onclick}/>
    </div>
  );
}
 
function MyButton({count, onClick}) {
  return(
    <button onClick={onClick}>{count}</button>
  );
}