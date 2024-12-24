import {useState} from "react"

const formulario = () => {
    let [altura, setAltura] = useState(0);
    let [peso, setPeso] = useState(0);


    return(
        <form>
            <input type="number" placeholder="insira sua altura" onChange={ evento => setAltura(evento.target.value)} />
            <input type="number" placeholder="insira seu peso" onChange={evento => setPeso(evento.target.value)} />
            
        </form>
    )
}

export default formulario 