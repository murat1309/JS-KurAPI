//Elementleri seçme


const amountElement = document.querySelector("#amount");
const firstSelect = document.querySelector("#firstCurrency");
const secondSelect = document.querySelector("#secondCurrency");

eventListeners();


const currency = new Currency("USD","TRY")
const ui = new UI(firstSelect,secondSelect);

function eventListeners(){

     amountElement.addEventListener("input",exchangeCurrency);

     firstSelect.onchange = function(){

        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent); //listede seçili olan ilgili değerleri güncel olarak alabilmem için objeme gönderiyorum.
        ui.changeFirst();                                                                         //sonrada arayüzümde gösteriyorum.
     };

     secondSelect.onchange = function(){

        currency.changesecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent);
        ui.changeSecond();
     };
}

function exchangeCurrency(){

    currency.changeAmount(amountElement.value); //miktar inputundaki değerleri anlık olarak alabilmem için value değerini güncelliyorum sürekli.


    currency.exchange()
    .then(result => {

        ui.displayResult(result);
    })
    .catch(err => console.log(err));
}