// /*Ingresar nombre*/
var nombresUsers = [];

function registrosNames(Nombre){
    var NewName = {
    Usuario: Nombre
    };
    console.log(NewName);
    nombresUsers.push(NewName);
}


// /*Ingresar datos*/

var DatosUser = [];

function registrosDatos(Date,Dollars,BolivS){
    var NewDatos = {
    fecha: Date,
    Dolar: Dollars,
    Bolivar: BolivS
    };
    console.log(NewDatos);
    DatosUser.push(NewDatos);
}