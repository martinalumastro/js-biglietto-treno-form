const formElement = document.getElementById('form-train');

const inputKmElement = document.getElementById('km')
const inputAgeElement = document.getElementById('age')

const calOutputPrezzoInteroElement = document.getElementById('cal-output-prezzo-intero')
const calOutputScontoElement = document.getElementById('cal-output-sconto')
const calOutputPrezzoScontatoElement = document.getElementById('cal-output-prezzo-scontato')
 //console.log(calOutputPrezzoInteroElement, calOutputScontoElement, calOutputPrezzoScontatoElement)
 

//console.log(formElement, inputKmElement ,inputAgeElement)

formElement.addEventListener('submit', function(event){
    //impediamo invio form
    event.preventDefault()
     //console.log('submit')

    //recuperiomo i km dall'input
    const km = parseFloat(inputKmElement.value); //number

    //recuperiamo l'età dall'input
    const age = parseFloat(inputAgeElement.value); //number

     //console.log(km, age)
    
    let intero = 0.21 * km
    intero = parseFloat(intero.toFixed(2))
     //console.log(intero)

    let prezzo = 0.21 * km
    prezzo = parseFloat(prezzo.toFixed(2)) //number
     //console.log(prezzo)

    //Formula sconto per età
    if(age < 18) {
        prezzo = prezzo - prezzo * 0.2
         //console.log(prezzo)
    } else if(age > 65) {
        prezzo = prezzo - prezzo * 0.4
         //console.log(prezzo)
    }

    let percentuale = 0

    //Formula percentuale
    if(age < 18) {
        percentuale = 20
    } else if(age > 65) {
        percentuale = 40
    }

    calOutputPrezzoInteroElement.innerHTML = intero.toFixed(2) + ' €'
    calOutputScontoElement.innerHTML = percentuale + ' %'
    calOutputPrezzoScontatoElement.innerHTML = prezzo.toFixed(2) + ' €'
})