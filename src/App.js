import React, { useState } from "react"
import './App.css';

function App() {
  const [cities, setCities] = useState([])
  const [cities1, setCities1] = useState("")
  function show() {
    setCities([...cities, cities1])
    setCities1("")
  }
  return (
    <>
    <div className="box">
    <h1>TO-DO LIST</h1>
    <div className="container">
        <input type="text" value={cities1} onChange={(e) => setCities1(e.target.value)} placeholder="add city" />
        <button onClick={show}>Add</button>
        </div>
        <div className="list">
          {cities.map((city, index) =>
        (<ul><li key="index">{city}</li></ul>
        ))}
        </div>
       
      
    </div>
  </>
  )
}
export default App;
