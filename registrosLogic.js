/*IngresarNombre */

document.querySelector('#registrarNombre').addEventListener('click', saveNames);

function saveNames(){
    var UserName = document.querySelector('#Name').value;

    registrosNames(UserName);
}

// /*Ingresar datos*/

document.querySelector('#guardar').addEventListener('click', savedatos);

function savedatos(){
    var FechaUser = document.querySelector('#Date').value,
        DolarUser = document.querySelector('#dollar').value,
        BolivarUser = document.querySelector('#bolivars').value;


    registrosDatos(FechaUser,DolarUser,BolivarUser);
}
