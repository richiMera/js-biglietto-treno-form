
var pulsanteAcquista = document.getElementById("acquista");

var acquistoAvvenuto =  document.getElementById("thanks_container");

// var leftBox = document.getElementById("left_box_js");

var rightBox = document.getElementById("right_box_js");

var ticket = document.getElementById("biglietto");

var infoPannel = document.getElementById("info_pannel");

var thanksText = document.getElementById("thanks_text");

var pulsanteShow = document.getElementById("click_to_show");
pulsanteShow.addEventListener("click",
function() {
  infoPannel = document.getElementById("info_pannel");
  infoPannel.classList.remove("hidden");

  pulsanteShow.classList.add("hidden");


  ticket.classList.add("hidden");
}
);

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

    var infoPannel = document.getElementById("info_pannel");
    infoPannel.classList.add("transition")
    infoPannel.classList.add("hidden")

    var ticket = document.getElementById("biglietto");
    ticket.classList.add("transition_delay");
    ticket.style.opacity = 1;

    // document.getElementById("annulla").classList.remove("hidden");
    document.getElementById("annulla").classList.add("transition_delay");
    document.getElementById("annulla").classList.add("visible");

    pulsanteAcquista.classList.remove("hidden")
    pulsanteAcquista.classList.add("transition_delay");

    pulsanteAnnulla.style.opacity = 1;

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

   pulsanteAnnulla.className = "transition";

   pulsanteAnnulla.style.opacity = 0;

   pulsanteAcquista.className = "transition";
   pulsanteAcquista.classList.add("hidden");


   var ticket = document.getElementById("biglietto");
   ticket.className = "transition";
   ticket.style.opacity = 0;

   infoPannel = document.getElementById("info_pannel");
   infoPannel.classList.add("transition_delay");
   infoPannel.classList.remove("hidden");

   document.getElementById("nome_cognome").value = "";
   document.getElementById("kilometri").value = "";
   document.getElementById("eta").value = "";

   document.getElementById("nomePasseggero").value = "";
   document.getElementById("offerta").value = "";
   document.getElementById("carrozza").value = "";
   document.getElementById("codice").value = "";
   document.getElementById("costo").value = "";
 }
);

var pulsanteAcquista = document.getElementById("acquista");
pulsanteAcquista.addEventListener("click",
  function() {

    ticket.classList.remove("transition_delay");

    pulsanteAcquista.classList.remove("transition_delay");

    pulsanteAnnulla.classList.remove("transition_delay");

    var acquistoAvvenuto =  document.getElementById("thanks_container");
    acquistoAvvenuto.classList.remove("hidden");
    acquistoAvvenuto.classList.add("semi_transition");
    acquistoAvvenuto.style.zIndex = 2;

    thanksText.classList.remove("hidden");
    thanksText.classList.add("transition_delay");
  }
);

var tornaIndietro = document.getElementById("turn_back");
turn_back.addEventListener("click",
  function() {

    acquistoAvvenuto.classList.add("hidden");
    acquistoAvvenuto.style.zIndex = 0;

    pulsanteShow.classList.remove("hidden");

    infoPannel.classList.add("hidden");

    // ticket.classList.remove("transition_delay");
    ticket.style.opacity = 0;

    pulsanteAcquista.classList.add("hidden");
    // pulsanteAcquista.classList.remove("transition_delay");

    pulsanteAnnulla.style.opacity = 0;
    // pulsanteAnnulla.classList.remove("transition_delay");

  }
);
