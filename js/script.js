
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

  var ticketPrice = kmUtente * basePrice;


  var minorsDiscount = (ticketPrice * 20) / 100;

  var overDiscount = (ticketPrice * 40) /100;

  var minorFinalPrice = ticketPrice - minorsDiscount;

  var overFinalPrice = ticketPrice - overDiscount;

  var accuracyMinor = minorFinalPrice.toFixed(2);
  var accuracyOver = overFinalPrice.toFixed(2);
  var accuracyNormal = ticketPrice.toFixed(2);

  var finalPrice = accuracyNormal;
  var message = "";
  if (etaUtente == "minorenne") {
      message = "Sconto minorenne"
      finalPrice = accuracyMinor;

      console.log(accuracyMinor);
    } else if (etaUtente == "over65") {
        message = "Sconto Silver";
        finalPrice = accuracyOver;

        console.log(accuracyOver);
    } else {
      message = "Biglietto Standard";
      finalPrice = accuracyNormal;
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
    costoBiglietto.innerHTML = finalPrice + " €";

  }
);

var pulsanteAnnulla = document.getElementById("annulla");
pulsanteAnnulla.addEventListener("click",
 function() {
   document.getElementById("biglietto").style.opacity = 0;

   document.getElementById("nome_cognome").value = "";
   document.getElementById("kilometri").value = "";
   document.getElementById("eta").value = "";

   document.getElementById("nomePasseggero").value = "";
   document.getElementById("offerta").value = "";
   document.getElementById("carrozza").value = "";
   document.getElementById("codice").value = "";
   document.getElementById("costo").value = "";
 }
)

var pulsanteShow = document.getElementById("click_to_show");
pulsanteShow.addEventListener("click",
  function() {
    var pannelloInfo = document.getElementById("info_pannel");
    pannelloInfo.classList.remove("hidden");
    pannelloInfo.classList.add("visible");
  }
)
