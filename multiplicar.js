function multiplicar(numero4, numero5){
    if(numero4 == 0 || numero5 == 0){
        return "No se puede multiplicar";
    }else{
        return numero4 * numero5;
    }
}

//console.log(multiplicar(4,0));

module.exports = multiplicar;
