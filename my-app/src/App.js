import './App.css';
import Button from 'react-bootstrap/Button';
import Card from "./components/Card";
import "./yhabiaunavez.jpg";
import { useState } from 'react';



function App() {

  const [totalCarrito, setTotalCarrito] = useState(0);
  const handleChange = () => {
    setTotalCarrito (totalCarrito + 1);
  }

  return (
    <div style={{alignItems:"center"}}>
      <div style={{ display:"flex", justifyContent:"space-between" }}>

      <h3>Tienes {totalCarrito} productos en el carrito </h3>
      </div>

      <div style={{ display:""}}>
       <Card producto="Conjunto Algodon" onClick={handleChange}/>
      </div>
      <div>
       <Card producto="Cubo sensorial" onClick={handleChange}/>
      </div>

    </div>
  )
}

export default App;


