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

  if (etaUtente == "minorenne") {
      accuracyMinor;
      console.log(accuracyMinor);
    } else if (etaUtente == "over65") {
        accuracyOver;
        console.log(accuracyOver);
    } else {
        accuracyNormal;
        console.log(accuracyNormal);
    }

    var ticket = document.getElementById("biglietto");
    ticket.style.opacity = 1;

  }
)
