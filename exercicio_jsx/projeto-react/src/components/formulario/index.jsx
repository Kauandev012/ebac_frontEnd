import {useState} from "react"

const Formulario = () => {
    Const[altura, setAltura] = useState(0);
    Const[peso, setPeso] = useState(0);


    return(
        <form>
            <input type="number" placeholder="insira sua altura" onChange={ evento => setAltura(evento.target.value)} />
            <input type="number" placeholder="insira seu peso" onChange={evento => setPeso(evento.target.value)} />
            
        </form>
    )
}

export default Formulario;
