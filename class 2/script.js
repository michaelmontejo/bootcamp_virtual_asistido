//nombre = prompt("ingresa tu nombre") // string

//dato1 =  parseInt(prompt("ingresa numero 1") )  // int
//dato2 =  parseInt(prompt("ingresa numero 2") )  // int

//if (dato1 >= dato2 ) {
//    alert("el dato numero 1 es mayor:" + dato1)
//} else {
//    alert("el dato numero 2 es mayor:" + dato2)
//}

/*
divisa =  parseInt(prompt("valor a convertir 1. Dolar, 2.Euro, 3.Yenes") )  // int
valor =  parseInt(prompt("ingresa el valor en pesos a convertir") )  // int

if ((divisa < 1 ) || (divisa > 3 )) {
    alert("el numero de divisa no se encuentra disponible:" )
}

if (divisa == 1) {
    conversion = valor * 0.00023
    alert("paso a dolar es:" + conversion  )
}

if (divisa == 2) {
    conversion = valor * 0.00023
    alert("paso a euro es:" + conversion  )
}

if (divisa == 3) {
    conversion = valor * 6.65
    alert("paso a yen es:" + conversion  )
} 
*/


nota =  parseInt(prompt("nota 1") )  // int
nota2 =  parseInt(prompt("nota 2") )  // int
nota3 =  parseInt(prompt("nota 3") )  // int
cond= 1

if ((nota < 1 ) || (nota > 5 )) {
    alert("la nota debe ser entre 1 y 5:" )
    cond= 2
}

if ((nota2 < 1 ) || (nota2 > 5 )) {
    alert("la nota debe ser entre 1 y 5:" )
    cond= 2
}

if ((nota3 < 1 ) || (nota3 > 5 )) {
    alert("la nota debe ser entre 1 y 5:" )
    cond= 2
}

while (cond = 1) {

    total = ((nota+nota2+nota3)/3)

    if (total <= 2.9) {
        alert("Es estudiante va perdiendo con:" + total )
    } else {
        alert("Es estudiante va aprobando con con:" + total )
    }

    cond=2
}







