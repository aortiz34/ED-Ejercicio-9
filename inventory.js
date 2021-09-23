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
    }

    _findProduct(code){
        for (let i = 0; i < this._inventory.length; i++) {
            if (code == this._inventory[i].getCode()) {
                return i;
            }else if (code < this._inventory[i].getCode()) {
                return i;
            }
        }
    }

    addProduct(product){
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
        let list = "";
        for (let i = 0; i < this._inventory.length; i++) {
            let product = this._inventory[i];
            list += `<div>
            ${i+1}-${product.getName()} ${product.getCode()}
            </div>`;
        }
        return list;
    }

    listProductsInv(){
        let list = "";
        let j = 1;
        for (let i = this._inventory.length - 1; i >= 0;j++, i--) {
            let product = this._inventory[i];
            list += `<div>
            ${j}-${product.getName()} ${product.getCode()}
            </div>`;
        }
        return list;
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

