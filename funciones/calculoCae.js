function calcRm(CTC, cae, p, n){

	let res = 0;

	let exp = -n * p;

	let cae2 = cae / 100;

	res = CTC / ( (1 - Math.pow(1 + cae2 / p, exp)) / (cae2 / p));

	return res;

}

export default function calcCae(CTC, p, n, Rm){

	let cae = 1;

	let res = calcRm(CTC, cae, p, n);

	let profundidad = 0;

	let cotaInf = 0;

	let cotaSup = 100;

	while(res != Rm && profundidad < 100){

		if(res > Rm) cotaSup = cae;

		else if(res < Rm) cotaInf = cae;

		cae = (cotaSup + cotaInf) / 2;

		res = calcRm(CTC, cae, p, n);

		profundidad++;

	}

	return cae;

}