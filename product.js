export default class Product {
    constructor(name,code,quantity,cost) {
        this._name = name;
        this._code = Number(code);
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
        valor de mercancia: ${this._getCommodityCost()}$<br>
        </div>`;
    }
}