mes = prompt("ingresa tu mes de nacimiento") // string
nacimiento =  parseInt(prompt("ingresa tu dia de nacimiento") )  // int

if ( nacimiento <= 31) {

 switch (mes) {
    case "enero":
        
        if (nacimiento <= 19) {
            alert("CAPRICORNIO")
        } else {
            alert("ACUARIO")
        }
        break;

    case "febrero":
       
        if (nacimiento <= 18) {
            alert("ACUARIO")
        } else {
            alert("PISCIS")
        }

        break;  

    case "marzo":
       

        if (nacimiento <= 20  ) {
            alert("PISCIS")
        } else {
            alert("ARIES")
        }

        break; 

    case "abril":
        

        if (nacimiento <= 19 ) {
            alert("ARIES")
        } else {
            alert("TAURO")
        }


        break; 

    case "mayo":
        

        if (nacimiento >= 21) {
            alert("TAURO")
        } else {
            alert("GEMINIS")
        }


        break; 

    case "junio":
        

        if (nacimiento <= 20) {
            alert("GEMINIS")
        } else {
            alert("CANCER")
        }
        break; 
    
        case "julio":
            
        if (nacimiento <= 22) {
            alert("CANCER")
        } else {
            alert("LEO")
        }
            
            break;
    
        case "agosto":
            

        if (nacimiento <= 22) {
            alert("LEO")
        } else {
            alert("VIRGO")
        }

            break;  
    
        case "septiembre":

        if (nacimiento <= 22) {
            alert("VIRGO")
        } else {
            alert("LIBRA")
        }
            
            break; 
    
        case "octubre":

        if (nacimiento <= 22) {
            alert("LIBRA")
        } else {
            alert("ESCORPION")
        }
            
            break; 
    
        case "noviembre":
         
        if (nacimiento <= 21) {
            alert("ESCORPION")
        } else {
            alert("SAGITARIO")
        }
            
            break; 
    
        case "diciembre":
            
        if (nacimiento <= 21) {
            alert("SAGITARIO")
        } else {
            alert("CAPRICORNIO")
        }    
            break; 


    default:
        alert("error 24")
        break;
 }
}
else {
    alert("SU DIA DE NACIMIENTO NO PUEDE SER MAYOR A 31")
}


console.log(mes, nacimiento)



