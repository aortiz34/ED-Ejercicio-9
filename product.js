export default class Product {
    constructor(name,code,quantity,cost) {
        this._name = name;
        this._code = code;
        this._quantity = quantity;
        this._cost = cost;
    }

    getName(){
        return this._name;
    }

    getCode(){
        return this._code;
    }

    getQuantity(){
        return this._quantity;
    }

    getCost(){
        return this._cost;
    }

    _getCommodityCost(){
        return this._cost * this._quantity;
    }

    getInfo(){
        return `<div>
        ${this._name}<br>
        Código: ${this._code}<br>
        Cantidad: ${this._quantity}<br>
        Costo: ${this._cost}<br>
        valor de mercancia: ${this._getCommodityCost()}<br>
        </div>`;
    }

    static readForm(){
        let inpName = document.querySelector('#textName');
        let inpCode = document.querySelector('#numberCode');
        let inpQuantity = document.querySelector('#numberQuantity');
        let inpCost = document.querySelector('#numberCost');

        let name = inpName.value;
        let code = Number(inpCode.value);
        let quantity = Number(inpQuantity.value);
        let cost = Number(inpCost.value);
        if(code&&name&&quantity&&cost){
            inpCode.value="";
            inpName.value="";
            inpQuantity.value="";
            inpCost.value="";
            return new Product(name,code,quantity,cost);
        }
        let div = document.querySelector("#detail");
        div.innerHTML = `<div>
        El producto no se agregó
        </div>`;
        return false; 
    }
}