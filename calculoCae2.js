var Datastore = require('react-native-local-mongodb');
export var db = new Datastore();
function sumatoria(n, C, k){
    
    let result = 0;

    for(let j = 1; j <= n; j++){
        result += C /(Math.pow(1+k, j));
    }
    return result;
}

function ecu(tTentativa, vContado, nCuotas, vCuota){

    let result = -vContado + sumatoria(nCuotas, vCuota, tTentativa);

    return result;
}

function conversion(tTentativa){
    
    //let result = Math.pow((1 + tTentativa), 12) - 1;

    //return result * 100;
    return (tTentativa * 1200).toFixed(2);
}
export const VAN = (vContado, nCuotas, vCuota) => {

    try{

        let delta = 5;
        let tMenor = 0;
        let tTentativa = 0.1;
        let tMayor = 0.2;
        
        for(let i = 0; i < 25; i++){
            let incTasa = (tMayor - tMenor) / 2;
            tTentativa = tMenor + incTasa;
            let ecuacion = ecu(tTentativa, vContado, nCuotas, vCuota);
            
            if(ecuacion < delta && ecuacion > 0){
    
                return conversion(tTentativa);
    
            }else if(ecuacion > 0){
                
                tMenor = tTentativa;
    
            }else if(ecuacion < 0){
                
                tMayor = tTentativa;
    
            }
        }
        cambiarHistorial(Value, C, n, (Math.pow(1 + k, 12) - 1).toFixed(2));
        return conversion(tTentativa);

    }catch(err){

        throw err;

    }
}

const cambiarHistorial = (Credito, cuota, ncuota, cae) => {

    db.count({}, function(err, docs){



        let nuevaEntrada = {

            id: docs.toString(),
            Credito: Credito,
            Cuota: cuota,
            nCuotas: ncuota,
            CAE: cae,
    
        }
    
        db.insert(nuevaEntrada);


    })

}