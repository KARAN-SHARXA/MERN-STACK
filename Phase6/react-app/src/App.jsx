import React, { useState } from 'react'
import ChildA from './Component/ChildA';
import { createContext } from 'react';

const UserContext = createContext();

function App() {
  const [user,setUser] = useState({name:"Mukesh"});
  return (
    <div>
      <UserContext.Provider value = {user}>
        <ChildA></ChildA>
      </UserContext.Provider>
      
    </div>
  )
}

export default App
export {UserContext}