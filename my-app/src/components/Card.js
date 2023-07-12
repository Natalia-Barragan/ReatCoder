import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Card({producto, onClick}) {
    const [contador, setContador] = useState(0);

    function handleChange() {
        setContador(contador+1)
        onClick();
    }

    return <div style={{display: "flex", gap: 40}}>
        <div>{producto}</div>
        <div>agregados {contador} </div>
        <button onClick={handleChange} variant="outline-success">Agregar al carrito</button>
    </div>
}

export default Card;

