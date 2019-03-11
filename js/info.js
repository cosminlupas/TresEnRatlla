$(document).ready(function() {
  var url = new URL(window.location.href);
  $("#url")[0].innerHTML = url;
  var browser = getBrowser();
  $("#navegador")[0].innerHTML = browser.nom;
  $("#versioNavegador")[0].innerHTML = browser.versio;
  $("#so")[0].innerHTML = browser.platform;
  $("#idioma")[0].innerHTML = navigator.language || navigator.userLanguage;
  $("#data")[0].innerHTML = document.lastModified;
})

function getBrowser() {
  var browser = {};
  browser.nom = jQBrowser.name;
  browser.versio = jQBrowser.version;
  browser.platform = jQBrowser.platform;
  return browser;
}
