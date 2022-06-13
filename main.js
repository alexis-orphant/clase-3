let product = prompt("Seleccione un producto ingresando un numero del 1 al 5");

while(product !== "ESC"){
    switch(product){
        case "1":
            alert("Tomate");
            console.log("Tomate");
            break;
        case "2":
            alert("Zanahoria");
            console.log("Zanahoria");
            break;
        case "3":
            alert("Huevo");
            console.log("Huevo");
            break;
        case "4":
            alert("Atún");
            console.log("Atún");
            break;
        case "5":
            alert("Lechuga");
            console.log("Lechuga");
            break;
        
        default:
            alert("No ingreso un numero correspondiente a un producto");
            break;
    }
    product = prompt("Seleccione un producto ingresando un numero del 1 al 5");
}
