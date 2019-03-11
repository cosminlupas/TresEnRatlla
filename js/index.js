var casos = ["1player", "2player", "help", "info", "cred"];

function tractar_btn(btn) {
  var id = btn.id;
  var url = "";
  switch (id) {
    case casos[0]:
      url = "./formulari.html?jugadors=1";
      break;
    case casos[1]:
      url = "./formulari.html?jugadors=2";
      break;
    case casos[2]:
      url = "./help.html";
      break;
    case casos[3]:
      url = "./info.html";
      break;
    case casos[4]:
      url = "./credits.html";
      break;
  }
  window.location.replace(url);
}
