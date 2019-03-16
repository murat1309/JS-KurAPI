class Currency {

    constructor(firsCurrency,secondCurrency){

        this.firsCurrency = firsCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "https://api.exchangeratesapi.io/latest?base=";
        this.amount = null;

    }

    exchange(){

        return new Promise((resolve,reject) => {

            fetch(this.url + this.firsCurrency)
            .then(response => response.json())
            .then(data => {
    
                const parity = data.rates[this.secondCurrency];
                const amount2 = Number(this.amount);
    
                let total = parity*amount2;
                resolve(total);
            })
            .catch(err => reject(err)); 

        });
       
    }

    changeAmount(amount){
        this.amount = amount;
    }
    changeFirstCurrency(newFirstCurrency){
        this.firsCurrency = newFirstCurrency;
    }
    changesecondCurrency(newSecondCuurency){
        this.secondCurrency = newSecondCuurency;
    }
}