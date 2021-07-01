// Código del cuadrado
console.group("Cuadrados");
/* const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm"); */

function perimetroCuadrado(lado) {
    return lado * 4;
}
/* console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm"); */


function areaCuadrado(lado) {
    return lado * lado;
}
/* console.log("El area del cuadrado es: " + areaCuadrado + " cm^2"); */
console.groupEnd();

//Código del triangulo

/* console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(
    "Los lados del triangulo miden: " 
    + ladoTriangulo1 
    + " cm, " 
    + ladoTriangulo2 
    + " cm, " 
    + baseTriangulo 
    + " cm"
); */

/* const alturaTriangulo = 5.5;
console.log("La altura del triangulo es: " + alturaTriangulo + " cm"); */

function perimetroTriangulo(valueLado1, valueLado2, valueBase) {
    
    return (valueLado1)*1 + (valueLado2)*1 + (valueBase)*1
}
/* console.log("El perimetro del triangulo es: " + perimetroTriangulo + " cm"); */

function areaTriangulo(base, altura) {
    return (base * altura) / 2
}
/* console.log("El area del triangulo es: " + areaTriangulo + " cm^2"); */

console.groupEnd();

//Código del circulo
console.group("Circulos");

// Radio
/* const radioCirculo = 4; */
/* console.log("El radio del circulo es: " + radioCirculo + " cm"); */

// Diametro
function diametroCirculo(radio) {
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI );

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Area
function areaCirculo(radio) {
    return (radio * radio) * PI
}

console.groupEnd();


// Aquí interactuamos con el HTML

// Para el cuadrado:

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    console.log(typeof(value))   /* Verificacion del tipo de dato obtenido del usuario */
    
    const area = areaCuadrado(value);
    alert(area);
}

// Para el triangulo isosceles:

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById('InputTrianguloLado1');
    const valueLado1 = input1.value;

    console.log(typeof(valueLado1))   /* Verificacion del tipo de dato obtenido del usuario */

    const input2 = document.getElementById('InputTrianguloLado2');
    const valueLado2 = input2.value;

    const input3 = document.getElementById('InputTrianguloBase');
    const valueBase = input3.value;

    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const input = document.getElementById("InputTriangulo");
    const value = input.value;
    const area = areaTriangulo(value);
    alert(area);
}