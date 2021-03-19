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
function VAN(Value, Io, n, C, k, min, max, rec){
    
    let ecuacion = ecu(Io, n, C, k);

    if(Value > ecuacion.toFixed(2)){

        let interes = (min + k) / 2;

        return VAN(Value, Io, n, C, interes, min, k, rec+1);

    } else if(Value < ecuacion.toFixed(2)){

        let interes = (k + max) / 2;

        return VAN(Value, Io, n, C, interes, k, max, rec+1);
    }
    if (rec == 25) {
        return Value;
    }
    return k * 1200;
}

console.log(VAN(3000000, 0, 24, 154301, 50, 0, 100, 0));
console.log(VAN(3000000, 0, 24, 154371, 50, 0, 100, 0));
console.log(VAN(3000000, 0, 24, 157593, 50, 0, 100, 0));
console.log(VAN(3000000, 0, 24, 162242, 50, 0, 100, 0));
console.log(VAN(3000000, 0, 24, 163369, 50, 0, 100, 0));
console.log(VAN(3000000, 0, 24, 164613, 50, 0, 100, 0));
console.log(VAN(3000000, 0, 24, 165951, 50, 0, 100, 0));
console.log(VAN(3000000, 0, 24, 167594, 50, 0, 100, 0));
console.log(VAN(3000000, 0, 24, 170819, 50, 0, 100, 0));
console.log(VAN(3000000, 0, 24, 172830, 50, 0, 100, 0));