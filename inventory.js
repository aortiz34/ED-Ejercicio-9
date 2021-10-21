export default class Inventory {
    constructor() {
        this._inventory = [];
    }

    searchProduct(code){
        for (let i = 0; i < this._inventory.length; i++) {
            if (code == this._inventory[i].getCode()) {
                return this._inventory[i];
            }else if (code < this._inventory[i].getCode()) {
                return null;
            }
        }
        return null;
    }

    _findProduct(code){
        for (let i = 0; i < this._inventory.length; i++) {
            if (code == this._inventory[i].getCode()) {
                return i;
            }else if (code < this._inventory[i].getCode()) {
                return i;
            }
        }
        return -1;
    }

    addProduct(product){
        console.log(this.searchProduct(product.getCode()));
        console.log(this._findProduct(product.getCode()));
        if (this._inventory.length < 20 && this.searchProduct(product.getCode()) == null) {
            this._inventory.push(product);
            for (let i = this._inventory.length - 1; i > this._findProduct(product.getCode()); i--) {
                let aux  = this._inventory[i];
                this._inventory[i] = this._inventory[i - 1];
                this._inventory[i - 1] = aux;
            }
            return `${product.getInfo()}`;
        }else{
            return `El producto ${product.getName()} no se agregó`;
        }
    }

    listProducts(){
        let txt = "";
        if (this._inicio===null){
            return "Esta vacio";
        }else {
            return this._addToList(this._inicio);
        }
    }

    _addToList(aux){
        if (aux.getNext() == null) {
            return aux.getInfoList();
        }else{
            return aux.getInfoList() + this._addToList(aux.getNext());
        }
    }

    listProductsInv(){
        let txt = "";
        if (this._inicio===null){
            return "Esta vacio";
        }else {
            return this._addToListInv(this._inicio);
        }
    }

    _addToListInv(aux){
        if (aux.getNext() == null) {
            return aux.getInfoList();
        }else{
            return this._addToListInv(aux.getNext()) + aux.getInfoList();
        }
    }

    deleteProduct(code){
        let product = this._inventory[this._findProduct(code.value)];
        if (this.searchProduct(code.value) || this._findProduct(code.value) === 0) {
            for (let i = this._findProduct(code.value); i < this._inventory.length - 1; i++) {
                this._inventory[i] = this._inventory[i + 1];
            }
            this._inventory.pop();
            return product;
        }else{
            return null;
        }
    }
}

