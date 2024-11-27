let numero1 = 15;
let numero2 = 87;
let nome = "Luisa";

function multiplicaNumeros (numero1 : number , numero2 :number ): number {
    return numero1 * numero2;
}

function saudação (nome:string) {
    return "olá " + nome;
}


console.log(multiplicaNumeros(numero1,numero2));
console.log(saudação(nome));