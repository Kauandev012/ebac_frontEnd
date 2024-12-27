const TabelaIMC=() => {
    return(
        <table>
            <thead>
                <tr>
                    <th>
                        Classificação
                    </th>
                    <th>
                        IMC
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>abaixo do peso</td>
                    <td>abaixo de 18,5</td>
                </tr>
                <tr>
                    <td>Peso normal</td>
                    <td>Entre 18,5 e 24,9</td>
                </tr>
                <tr>
                    <td>Sobrepeso</td>
                    <td>Entre 25 e 29,9</td>
                </tr>
                <tr>
                    <td>Obesidade grau l</td>
                    <td>Entre 30 e 34,9</td>
                </tr>
                <tr>
                    <td>Obesidade grau ll</td>
                    <td>Entre 35 e 39,9</td>
                </tr>
                <tr>
                    <td>Obesidade grau lll</td>
                    <td>Acima de 40</td>
                </tr>
            </tbody>
        </table>
    )
}

export default TabelaIMC;