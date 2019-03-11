$(document).ready(function() {
  var url = new URL(window.location.href);
  var jugadors = url.searchParams.get("jugadors");
  var nom = url.searchParams.get("nom");
  var cognoms = url.searchParams.get("cognoms");
  var email = url.searchParams.get("email");
  var dni = url.searchParams.get("dni");
  var edat = url.searchParams.get("edat");
  if (nom && cognoms && email && dni && edat) {
    debugger;
    document.getElementById("form1").action = './3enratlla.html';
    document.getElementById("nom2").value = nom; document.getElementById("cognoms2").value = cognoms;
    document.getElementById("email2").value = email;
    document.getElementById("dni2").value = dni;
    document.getElementById("edat2").value = edat;
  } else {
    if (jugadors && jugadors == 1) document.getElementById("form1").action = './3enratlla.html';
    else if (jugadors && jugadors == 2) document.getElementById("form1").action = './formulari.html';
  }
});

function isValidForm() {
  var dni = document.getElementById("dni").value;
  var nom = document.getElementById("nom").value;
  var cognoms = document.getElementById("cognoms").value;
  var email = document.getElementById("email").value;
  var edat = document.getElementById("edat").value;
  var patt = /^[0-9]{8,8}-[A-Za-z]$/g;
  var patt2 = /\S+@\S+\.\S+/;
  var b = !patt.test(dni);
  var b2 = !patt2.test(email);
  var b3 = true;
  if (b || b2) {
    if (b) $("#dniHelp")[0].innerHTML = "DNI incorrecte, ha de ser d'aquest tipus xxxxxxxx-x.";
    else $("#dniHelp")[0].innerHTML = "";
    if (b2) $("#emailHelp")[0].innerHTML = "Email incorrecte.";
    else $("#emailHelp")[0].innerHTML = "";
    b3 = false;//return false;
  } else if (nom && nom !== "" && cognoms && cognoms !== "" && email && email !== "" && edat && edat !== "") {
    b3 = true;
  }

  if (nom || nom === "") $("#nomHelp")[0].innerHTML = "El camp nom no pot estar buit.";
  else $("#nomHelp")[0].innerHTML = "";

  if (cognoms || cognoms === "") $("#cognomsHelp")[0].innerHTML = "El camp cognoms no pot estar buit.";
  else $("#cognomsHelp")[0].innerHTML = "";

  if (edat || edat === "") $("#edatHelp")[0].innerHTML = "El camp edat no pot estar buit.";
  else $("#edatHelp")[0].innerHTML = "";

  return b3;
}

 function upperCase(inp) {
   inp.value = inp.value.toUpperCase();
 }
