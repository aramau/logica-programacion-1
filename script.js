// 1. Para solicitar los números
let num1 = Number(prompt("Ingresa el primer número:"));
let num2 = Number(prompt("Ingresa el segundo número:"));
let num3 = Number(prompt("Ingresa el tercer número:"));

// Para validar si los datos ingresados son válidos
if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    console.error("Por favor, ingresa solo valores numéricos.");
    alert("Error: Uno de los datos ingresados no es un número.");
} else {
    // Verifica si todos son iguales
    if (num1 === num2 && num2 === num3) {
        console.log("Los números son iguales: " + num1 + ", " + num2 + ", " + num3);
    } else {
        // Se guardan en un array
        let numeros = [num1, num2, num3];

        // Ordena de mayor a menor
        // Usamos una función de comparación para que el orden sea numérico y no lexicográfico
        let mayorAMenor = [...numeros].sort((a, b) => b - a);

        // Ordena de menor a mayor
        let menorAMayor = [...numeros].sort((a, b) => a - b);

        let mayor = mayorAMenor[0];
        let centro = mayorAMenor[1];
        let menor = mayorAMenor[2];

        // 3. Imprime resultados en la consola
        console.log("Ordenados de mayor a menor:", mayorAMenor.join(", "));
        console.log("Ordenados de menor a mayor:", menorAMayor.join(", "));
        
        // Mostrar quién es quién
        console.log(`Análisis: Mayor: ${mayor}, Centro: ${centro}, Menor: ${menor}`);
    }
}