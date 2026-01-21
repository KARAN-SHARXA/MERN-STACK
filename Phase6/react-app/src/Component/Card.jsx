import "./Card.css";
import { useState } from "react";
function Card({ name, role , img }) {
  const [count , setCount] = useState(0); // 0 initial value
  return (
    <>
      <div className="card">
        <h1>count:{count}</h1>
        <img src={img} alt="" />
        <h1>Name:{name}</h1>
        <p>Detail:{role}</p>
        <button onClick={()=>{setCount(count+1)}}>click me</button>

        

      </div>
    </>
  );
}

export default Card;
