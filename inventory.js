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
        let div =document.querySelector("#detail");
        if (this._inventory.length < 20 && this.searchProduct(product.getCode()) == null) {
            this._inventory.push(product);
            for (let i = this._inventory.length - 1; i > this._findProduct(product.getCode()); i--) {
                let aux  = this._inventory[i];
                this._inventory[i] = this._inventory[i - 1];
                this._inventory[i - 1] = aux;
            }
            div.innerHTML = `<div>
            El producto ${product.getName()} a sido agregado
            </div>`;
            return product;
        }else{
            div.innerHTML = `<div>
            El producto ${product.getName()} no se agregó
            </div>`;
            return false;
        }
    }

    listProducts(){
        let div =document.querySelector("#detail");
        let list = "";
        for (let i = 0; i < this._inventory.length; i++) {
            let product = this._inventory[i];
            list += `<div>
            ${i+1}-${product.getName()} ${product.getCode()}
            </div>`;
        }
        div.innerHTML = list;
        return list;
    }

    listProductsInv(){
        let div =document.querySelector("#detail");
        let list = "";
        let j = 1;
        for (let i = this._inventory.length - 1; i >= 0;j++, i--) {
            let product = this._inventory[i];
            list += `<div>
            ${j}-${product.getName()} ${product.getCode()}
            </div>`;
        }
        div.innerHTML = list;
        return list;
    }

    deleteProduct(){
        let code = document.getElementById("numberCode");
        let div =document.querySelector("#detail");
        let product = this._inventory[this._findProduct(code.value)];
        if (this.searchProduct(code.value) || this._findProduct(code.value) === 0) {
            for (let i = this._findProduct(code.value); i < this._inventory.length - 1; i++) {
                let aux = this._inventory[i];
                this._inventory[i] = this._inventory[i + 1];
                this._inventory[i + 1] = aux;
            }
            this._inventory.pop();
            div.innerHTML = `<div>
            El producto ${product.getName()} a sido eliminado
            </div>`;
            code.value = "";
            return this._inventory[this.searchProduct(code.value)];
        }else{
            div.innerHTML = `<div>
            El producto no existe
            </div>`;
            code.value = "";
            return null;
        }
    }
}

