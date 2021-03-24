var Datastore = require('react-native-local-mongodb');
export var db = new Datastore();
function sumatoria(n, C, k){
    
    let res = 0;

    for(let j = 1; j <= n; j++){
        res += C /(Math.pow(1+k, j));
    }
    return res;
}
function ecu(Io, n, C, k){
    
    let sum = sumatoria(n, C, k);
    let res = -Io + sum;
    
    return res;
}
export const VAN = (Value, Io, n, C, k, min, max, rec) => {

    k = k ?? 20;
    min = min ?? 0;
    max = max ?? 0;
    rec = rec ?? 0;

    if (rec === 25) {
        return Math.pow(1 + k, 12) - 1;
    }
    
    try{

        let ecuacion = ecu(Io, n, C, k);        
        
        if(0 < parseFloat(ecuacion).toFixed(2)){

            let interes = (min + k) / 2;

            return VAN(Value, Io, n, C, interes, min, k, rec+1);

        } else if(0 > parseFloat(ecuacion).toFixed(2)){

            let interes = (k + max) / 2;

            return VAN(Value, Io, n, C, interes, k, max, rec+1);
        }
        cambiarHistorial(Value, C, n, k);
        return Math.pow(1 + k, 12) - 1;

    }catch(err){

        throw err;

    }
}

const cambiarHistorial = (Credito, cuota, ncuota, cae) => {

    let nuevaEntrada = {

        "Credito": Credito.toString(),
        "Cuota": cuota.toString(),
        "nCuotas": ncuota.toString(),
        "CAE": cae.toString(),

    }

    db.insert(nuevaEntrada);

}