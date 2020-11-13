// var nome = document.getElementById('nome_cognome').value;
// console.log(nome);

// var km = document.getElementById('kilometri');
// console.log(nome);
//
// var eta = document.getElementById('kilometri');
// console.log(eta);
var pulsanteGenera = document.getElementById("genera");
pulsanteGenera.addEventListener("click",
function() {
  var nome = document.getElementById('nome_cognome').value;
  console.log(nome);

  var kmUtente = document.getElementById("kilometri").value;
  console.log(kmUtente);

 var etaUtente = document.getElementById("eta").value;
 console.log(etaUtente);

  var basePrice = 0.21;
  // console.log(basePrice);
  var ticketPrice = kmUtente * basePrice;
  // console.log(ticketPrice);
  // va applicato uno sconto del 20% per i minorenni;

  var minorsDiscount = (ticketPrice * 20) / 100;
  // console.log(minorsDiscount);
  // va applicato uno sconto del 40% per gli over 65.
  var overDiscount = (ticketPrice * 40) /100;

  var minorFinalPrice = ticketPrice - minorsDiscount;

  var overFinalPrice = ticketPrice - overDiscount;

  var accuracyMinor = minorFinalPrice.toFixed(2);
  var accuracyOver = overFinalPrice.toFixed(2);
  var accuracyNormal = ticketPrice.toFixed(2);

  var message = "";
  if (etaUtente == "minorenne") {
      message = "Sconto minorenne"
      accuracyMinor;
      console.log(accuracyMinor);
    } else if (etaUtente == "over65") {
        message = "Sconto Silver"
        accuracyOver;
        console.log(accuracyOver);
    } else {
      message = "Biglietto Standard"
        accuracyNormal;
        console.log(accuracyNormal);
    }

    var ticket = document.getElementById("biglietto");
    ticket.style.opacity = 1;

    var nomePasseggero = document.getElementById("nomePasseggero");
    nomePasseggero.innerHTML = nome;

    var offerta = document.getElementById("offerta");
    offerta.innerHTML = message;

    var carrozza =  document.getElementById("carrozza");
    carrozza.innerHTML = Math.floor(Math.random() * 11)

    var codiceCp = document.getElementById("codice");
    codiceCp.innerHTML = Math.floor(Math.random() * 10000) + 9000;

    var costoBiglietto = document.getElementById("costo");
    costoBiglietto.innerHTML = etaUtente;

  }
)
