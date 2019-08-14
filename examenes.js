// Área de un tríangulo
const areaTriangulo = (b, h) => area = (b * h) / 2;

console.log(areaTriangulo(10, 2));


// función que imprima la tabla de un número n en la pantalla.

const tablaDeMultiplicar = (n) => 
{
  let max = 11;
  console.log(`n = ${n}`);
  for (let i = 1; i < max; i++) {
    console.log(`${n} x ${i} = `, n * i);
  }
};

tablaDeMultiplicar(2);

// función recursiva para calcular el factorial de un número n

const factorialN = (n) =>
{
  if (n === 1)
  {
    return 1;
  }

  return n * factorialN (n - 1); 

};

console.log(factorialN(5));







