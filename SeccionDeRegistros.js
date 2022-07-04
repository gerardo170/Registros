let CalLoteria = 0;
var UserNames = [];
drawUsers();



function addUserToSystem(Pname, Pdate, Pmoneda,Pzloteria,Pfenix,Pgg,Plotex,Pmatrix,Pporley,Patens,Presult) {
    var newUser ={
     Name : Pname,
     Date : Pdate,
     Moneda : Pmoneda,
     Zloteria : +Pzloteria,
     Fenix : +Pfenix,
     GG : +Pgg,
     Lotex : +Plotex,
     Matrix : +Pmatrix,
     Porley : +Pporley,
     Atens : +Patens,
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
          sResult = document.querySelector('#Results').value;

          addUserToSystem(sName,sDate,smoneda,sResult);
          drawUsers();


}

function drawUsers(){
var list = getDatosList();
tbody = document.querySelector('#usersTable tbody');

tbody.innerHTML='';

for(var i = 0; i < list.length; i++) {
var row = tbody.insertRow(i);
var nameCell = row.insertCell(0);
var DateCell = row.insertCell(1);
var dollarCell = row.insertCell(2);
var SaldoCell = row.insertCell(3);
nameCell.innerHTML = list[i].Name;
DateCell.innerHTML = list[i].Date;
dollarCell.innerHTML = list[i].Dollar;
SaldoCell.innerHTML = list[i].SaldoCell;
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
    Results.innerText = "Total: " + CalLoteria;
}