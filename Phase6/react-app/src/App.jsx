import { useEffect, useState } from "react";

function App() {
  const [count,setCount]=useState(0);
  //first -> side efect function
  //second ->clean up function
  //third -> comma separated dep list

  //variation: 1
  //run on every render




  useEffect(() => {
    alert("i will run on each render");
  });

  function handleClick(){
    setCount(count + 1);
  }


  //variation: 2
  //run on first ender
  useEffect(() =>{
    alert("i will run on first render")

  },[])


  // variation: 3
  //run when count value is updated
  useEffect(() => {
    alert("mukesh kala hai");
  
    
  }, [count])
  

  return <div>
    <h1>hello</h1>
    <button onClick={handleClick} >Click me</button>
    <br />
    <p>vale of count is {count}</p>
  </div>;
}

export default App;
