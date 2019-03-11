var usr, usr1, usr2;
var fila1 = [1,2,3];
var fila2 = [4,5,6];
var fila3 = [7,8,9];
var files = [fila1,fila2,fila3];

function plenarBtn(btn) {
  if (document.getElementById("resultats").innerHTML !== "Torn de: " + usr + "<br />" && document.getElementById("resultats").innerHTML !== "Torn de: " + usr + "<br>") document.getElementById("resultats").innerHTML += "Torn de: " + usr + "<br />";
  var inner_html = btn.innerHTML;
  if (inner_html != null && inner_html != undefined && inner_html === "") {
    debugger;
    btn.innerHTML = (usr && usr == usr1) ? 'O' : 'X';
    comprovar_resultat();
    usr = (usr && usr == usr1) ? usr2 : usr1;
  }
}

$(document).ready(function() {
  var url = new URL(window.location.href);
  usr1 = url.searchParams.get("nom");
  usr2 = url.searchParams.get("nom2");
  usr = usr1;
  debugger;
  if (!usr2 || usr2 === "") {
    window.location.replace("error.html")
  } else updateResultat("Torn de: " + usr + "<br />");
})

function comprovar_resultat() {
  var values_general = [];
  files.forEach(function(f){
    values_general.push(comprovar_fila(f));
  })
  if (winCheck(values_general)) {
	  updateResultat("Guanyador: " + usr + "<br />");
    //document.getElementById("resultats").innerHTML +=
      disableAllButtons();
  } else if (drawCheck(values_general)) {
      updateResultat("Empat<br />");
      //document.getElementById("resultats").innerHTML +=
      disableAllButtons();
  }
}

function drawCheck(arr) {
    var BreakException = {};
    try {
        arr.forEach(function(a){
            a.forEach(function(e){
                if (e === "") {
                    throw BreakException;
                }
            })
        })
    } catch (e) {
        if (e === BreakException) return false;
    }
    return true;
}

function disableAllButtons() {
    files.forEach(function(f){
        f.forEach(function(f_){
            $('#'+f_).prop("disabled", true);
        })
    })
}

function reset() {
    files.forEach(function(f){
        f.forEach(function(f_){
            document.getElementById(''+f_).innerHTML = "";
        })
    })
    enableAllButtons();
    document.getElementById("resultats").innerHTML = "";
    var x = (usr && usr == usr1) ? usr2 : usr1;
    updateResultat("Torn de: " + x + "<br />");
    //document.getElementById("resultats").innerHTML +=
}

function enableAllButtons() {
    files.forEach(function(f){
        f.forEach(function(f_){
            $('#'+f_).prop("disabled", false);
        })
    })
}

function comprovar_fila(fila) {
  var values = getValuesFila(fila);
  return values;
}

function getValuesFila(fila) {
  var values = [document.getElementById(fila[0]).innerHTML, document.getElementById(fila[1]).innerHTML, document.getElementById(fila[2]).innerHTML];
  return values;
}

function winCheck(gridArray) {
    if (
      (gridArray[0][0] == gridArray[0][1] && gridArray[0][1] == gridArray[0][2] && gridArray[0][0] !== "") ||
      (gridArray[1][0] == gridArray[1][1] && gridArray[1][1] == gridArray[1][2] && gridArray[1][0] !== "") ||
      (gridArray[2][0] == gridArray[2][1] && gridArray[2][2] == gridArray[2][1] && gridArray[2][0] !== "") ||
      (gridArray[0][0] == gridArray[1][1] && gridArray[0][0] == gridArray[2][2] && gridArray[0][0] !== "") ||
      (gridArray[0][2] == gridArray[1][1] && gridArray[2][0] == gridArray[0][2] && gridArray[0][2] !== "") ||
      (gridArray[0][0] == gridArray[1][0] && gridArray[0][0] == gridArray[2][0] && gridArray[0][0] !== "") ||
      (gridArray[1][1] == gridArray[2][1] && gridArray[0][1] == gridArray[1][1] && gridArray[1][1] !== "") ||
      (gridArray[2][2] == gridArray[1][2] && gridArray[0][2] == gridArray[2][2] && gridArray[2][2] !== "")
    ) {
      return true;
    } else {
      return false;
    }
  }

  function updateResultat(str){
    var element = document.getElementById("resultats");
    element.innerHTML += str;
    element.scrollTop = element.scrollHeight;
}
