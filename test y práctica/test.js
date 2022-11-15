var firstName = "Marco";
var lastName = "Pretelín";
var platziUserName = rarosagar;
var age = 31;
var email = "marcoapretelin@gmail.com";
var fullAge = true;
var savedMoney = 12000;
var debts = 8500;


console.log(`Me llamo ${firstName} ${lastName}`);

console.log(savedMoney - debts);


////////////////////////////////////////////////////
const nombre = "Juan David";
const lastname = "Castro Gallego";
const completeName = nombre + lastname;
const nickname = "juandc";
console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

function fullName(name, lastName, nickName) {

    console.log(`Me nombre completo es ${name} ${lastName}, pero prefiero que me digas ${nickName}`);
}

fullName("Marco Ariel", "Pretelin vergara", "Ariel");


/////////////////////////////////////////////////

const suscripcion = "Basic";

switch (suscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

////solucion con If, else if  ////////

var tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion == "Free") {

    console.log("Solo puedes tomar los cursos gratis");
    
} else if (tipoDeSuscripcion == "Basic") {

    ("Puedes tomar casi todos los cursos de Platzi durante un mes");
    
} else if (tipoDeSuscripcion == "Expert") {

    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");

} else if (tipoDeSuscripcion == "ExpertPlus") {

    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");

} else {

    console.log("No tienes ninguna suscrpción");
} 



/////// Bonus //////////////////
 
var suscriptions = ["Free", "Basic", "Expert", "ExpertPlus"];

var descriptions = ["Solo puedes tomar los cursos gratis", "Puedes tomar casi todos los cursos de Platzi durante un mes", "Puedes tomar casi todos los cursos de Platzi durante un año", "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año" ];

var userSuscription = "Basic"

for(var i=0; i < suscriptions.length; i++) {

    if (userSuscription === suscriptions[i]) {

        console.log(`Actualmente estás suscrito al plan ${suscriptions[i]} en el cual ${descriptions[i]}`);
        
    }
} 



//////////////////////////////////////////////


for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}


/////////////////////USANDO WHILE /////////////////////

var i = 0;

while(i < 5) {
     i++;

     console.log(`El valor de i es ${i}`);
}


var i = 10;

while(i >= 2) {
    i--;

    console.log(`El valor de i es ${i}`);
}




//////////Reto ciclos ////

function pregunta () {


 var respuesta = 4;

 while (true) {

    if(prompt('Cuánto es la suma de 2+2?') == respuesta) {

        alert('Bien contestado');
        break;

    } 

 } 

}

pregunta ();



////////////// Arrays y objetos ///////////////////////////


var arrayEquipos = ["Osasuna", "Barcelona", "Liverpool F. C.", "Pumas UNAM"];

function elementArray (elemento) {

    console.log(arrayEquipos[2]);
    

}
elementArray(arrayEquipos);



//////// otra solución ejercicio de arriba /////////////

function elementArray(equipo){

    console.log(equipo[2]);
} 

elementArray(["Osasuna", "Barcelona", "Liverpool F. C.", "Pumas UNAM"]);

////////////////////////////////////////////////////////

var arrayTeams = ["C. A. Osasuna", "F. C. Barcelona", "Liverpool F. C.", "Pumas UNAM"];

function displayTeams(team) {

    console.log(`Support to ${team}`);
}

for (let i = 0; i < arrayTeams.length; i++) {
    displayTeams(arrayTeams[i]);
    
}

///////// otra solucion ejercicio de arriba /////////////

function displayTeamOneByOne(team) {

    for (let i = 0; i < team.length; i++) {
        console.log(team[i]);
        
    }
}

displayTeamOneByOne(["Osasuna", "Barcelona", "Liverpool F. C.", "Pumas UNAM"]);



///////////////////////////////////////////////////////////////////

var articulos = [

    {nombre: "Bicicleta", costo: 3000},
    {nombre: "Televisión", costo: 2000},
    {nombre: "Libro", costo: 320},
    {nombre: "Telefono celular", costo: 4000},
    {nombre: "Laptop", costo: 30000},
    {nombre: "Cámara", costo: 12000},
    {nombre: "Ventilador", costo: 1000},
    {nombre: "Teclado", costo: 500}
];


articulos.forEach(function(articulo) {

console.log(articulo.nombre)
    
});

////////////////////// Otra solución ejercicio de arriba ///////////////////

const equipo = 

     {nombre: "Liverpool F. C.", 
      pais: "Inglaterra",
      liga: "Liga Premier"
      };    


function displayTeamOneByOneObject(equipo) {
 const arrayTeams = Object.values(equipo);
 for (let i = 0; i < arrayTeams.length; i++) {
     console.log(arrayTeams[i]);
            
    }
}

displayTeamOneByOneObject(equipo);