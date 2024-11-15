function smartfone (fabricante,modelo,valorCompra){
    this.fabricante = fabricante;
    this.modelo = modelo;
    this.valorCompra = valorCompra;
}

function smartfoneIos(fabricante,modelo,valorCompra){
    this.soIos = function(){
        consol.log("o Sistema operacional é Ios");
    }

    smartfone.call(this,fabricante,modelo,valorCompra);
}

function smartfoneAndroid(fabricante,modelo,valorCompra){
    this.soAndroid = function(){
        console.log('o Sistema operacional é android');
    }

    smartfone.call(this,fabricante,modelo,valorCompra);
}



const cellCarlos = new smartfoneAndroid("samsung","galaxy s23",3739);
const cellIzak = new smartfoneIos("apple","iphone 13 pro max",10499);
const cellLivia = new smartfoneAndroid("xiaomi","poco x6 pro", 2239);


console.log(cellCarlos);
console.log(cellIzak);
console.log(cellLivia);