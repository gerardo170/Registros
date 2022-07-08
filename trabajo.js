let dollar = document.getElementById("dollar");
let bolivars = document.getElementById("bolivars");
let currency;

function getCurrency(option){
    switch(option){
        case 1:
            if(dollar.checked){
                currency = 'Dolar';
            }
            break;
        case 2:
            if(bolivars.checked){
                currency = 'Bolivar';
            }
            break;
        default:
            currency = 'No seleccionado';
    }
}

dollar.addEventListener('click', ()=>{
    getCurrency(1);
});

bolivars.addEventListener('click', ()=>{
    getCurrency(2);
});

let generarId;
let MakeID = document.getElementById("genID");

function generarId(longitud, opcion) {
    switch (opcion) {
        case 1:
            if(MakeID.click){
                if (typeof longitud != 'number') {
                    throw TypeError('El argumento longitud debe ser numero');
                }
            
            
            
            let id = '';
            const CARACTERES = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ 0123456789';
            
            for (let i = 0; i < longitud; i++) {
                id += CARACTERES.charAt(Math.floor(Math.random() * CARACTERES.length))
                
            }
            return id;
            }
            
            try {
                console.log(generarId(5));
            } catch (e) {
                console.log('Error: ${e.message}');
            }
            break;
            }
           
    }

    MakeID.addEventListener('click', ()=>{
        generarId(1);
    });


   


let CalLoteria = 0;
var UserNames = [];
drawUsers();



function addUserToSystem(Pname, Pdate ,Presult,Pzloteria,Pfenix,Pgg,Plotex,Pmatrix,Pporley,Patens) {
    var newUser ={
     Name : Pname,
     Date : Pdate,
     Moneda : currency,
     Zloteria : +Pzloteria,
     Fenix : +Pfenix,
     GG : +Pgg,
     Lotex : +Plotex,
     Matrix : +Pmatrix,
     Porley : +Pporley,
     Atens : +Patens,
     iD : generarId,
     Result : +Presult
    };
    console.log(newUser);
    UserNames.push(newUser);
}

function getDatosList() {
return UserNames;
}
// 
document.querySelector('#BtnSavename').addEventListener('click', saveName);

function saveName(){
    var sName = document.querySelector('#Name').value,
          sDate = document.querySelector('#Date').value,
          smoneda = document.querySelector('#moneda').value,
          sID = document.querySelector('#genID').value,
          sResult = document.querySelector('#Results').value;

          addUserToSystem(sName,sDate,smoneda,sResult,sID);
          drawUsers();


}

function drawUsers(){
var list = getDatosList();
tbody = document.querySelector('#usersTable tbody');

tbody.innerHTML='';
let selectCell = document.getElementById('form');
for(var i = 0; i < list.length; i++) {
var row = tbody.insertRow(i);
var nameCell = row.insertCell(0);
var DateCell = row.insertCell(1);
var dollarCell = row.insertCell(2);
var SaldoCell = row.insertCell(3);
var idCell = row.insertCell(4);
nameCell.innerHTML = list[i].Name;
DateCell.innerHTML = list[i].Date;
dollarCell.innerHTML = list[i].Moneda;
SaldoCell.innerHTML = list[i].Result;
idCell.innerHTML = list[i].iD;
var inputSelect = document.createElement('input');
inputSelect.type = 'radio';
inputSelect.value = list[i].Name;
selectCell.appendChild(inputSelect);

tbody.appendChild(row);
}

}

function calcularLoteria(loteria1,loteria2,loteria3,loteria4,loteria5,loteria6,loteria7) {
return loteria1 + loteria2 + loteria3 + loteria4 + loteria5 + loteria6 + loteria7 ;
}

function ButtonResults(){
    const InputZloteria = document.getElementById("InputZloteria");
    const ZloteriaValue = InputZloteria.value;

    const InputFenix = document.getElementById("InputFenix");
    const FenixValue = InputFenix.value;

    const InputFelino= document.getElementById("InputFelino");
    const FelinoValue = InputFelino.value;

    const InputLotex = document.getElementById("InputLotex");
    const LotexValue = InputLotex.value;

    const InputMatrix = document.getElementById("InputMatrix");
    const MatrixValue = InputMatrix.value;

    const InputPorley = document.getElementById("InputPorley");
    const PorleyValue =  InputPorley.value;

    const InputAtens = document.getElementById("InputAtens");
    const AtensValue = InputAtens.value;

     CalLoteria = calcularLoteria(+ZloteriaValue, +FenixValue, +FelinoValue, +LotexValue, +MatrixValue, +PorleyValue, +AtensValue);

    const Results = document.getElementById("Results");
    Results.value = +CalLoteria;
}