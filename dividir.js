function dividir(numero6, numero7){
    if(numero6 == 0 || numero7 == 0){
        return "No se puede dividir";
    }
    else{
        return numero6 / numero7;
    }
}

//console.log(dividir(0,5))

module.exports = dividir;