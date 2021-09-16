export default class Inventory {
    constructor() {
        this._inventory = [];
    }

    searchProduct(code){
        for (let i = 0; i < this._inventory.length; i++) {
            if (code == this._inventory[i].getCode()) {
                return i;
            }
        }
        return null;
    }

    addProduct(product){
        if (this.searchProduct(product.getCode()) || this._inventory.length == 20) {
            return false;
        }else{
            this._inventory.push(product);
            return product;
        }
    }

    insertProduct(product){
        let pos = document.getElementById("numberPosition");
        if(pos.value){
            if (pos.value <= this._inventory.length + 1) {
                this._inventory.push(product);
                for (let i = this._inventory.length - 1; i >= pos.value; i--) {
                    let aux  = this._inventory[i];
                    this._inventory[i] = this._inventory[i - 1];
                    this._inventory[i - 1] = aux;
                }
                pos.value = ""; 
                return product;
            }else{
                pos.value = "";
                return false;
            }
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
        if (this.searchProduct(code) || this.searchProduct(code) == 0) {
            for (let i = this.searchProduct(code); i < this._inventory.length - 1; i++) {
                let aux = this._inventory[i];
                this._inventory[i] = this._inventory[i + 1];
                this._inventory[i + 1] = aux;
            }
            this._inventory.pop();
            return this._inventory[this.searchProduct(code)];
        }else{
            return null;
        }
    }
}

