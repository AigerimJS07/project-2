import {useState} from "react";

function App() {
  const [number , setNamber ] = useState(0);

  function increment (){
    setNamber((prev)  => prev +10) ;
  }

  function decrement (){
    setNamber((prev)  => prev -10 ) ;
  }

  function reset  () {
    setNamber(0);
  }

  return(
    <div>
    <h1>{number}</h1>
    <button onClick={increment}>+10</button>
    <button onClick={decrement}>-10</button>
    <button onClick={reset}>reset</button>
    </div>
  );
  
}

export default App;
