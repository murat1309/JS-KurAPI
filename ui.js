class UI{

    constructor(firsSelect,secondSelect){
        this.firsSelect = firsSelect;
        this.secondSelect = secondSelect;

        this.outputFirst = document.getElementById("outputFirst");
        this.outputSecond = document.getElementById("outputSecond");
        this.outputResult = document.getElementById("outputResult");


    }

    changeFirst(){

        this.outputFirst.textContent = this.firsSelect.options[this.firsSelect.selectedIndex].textContent;
    }

    changeSecond(){

        this.outputSecond.textContent = this.secondSelect.options[this.secondSelect.selectedIndex].textContent;
    }

    displayResult(result){

        this.outputResult.value = result;
    }
}