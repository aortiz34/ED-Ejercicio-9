export default class Inventory {
    constructor() {
        this._inventory = [];
    }

    searchProduct(code){
        for (let i = 0; i < this._inventory.length; i++) {
            if (code == this._inventory[i].getCode()) {
                return this._inventory[i];
            }
        }
        return null;
    }

    _findProduct(code){
        for (let i = 0; i < this._inventory.length; i++) {
            if (code == this._inventory[i].getCode()) {
                return i;
            }
        }
        return false;
    }

    addProduct(product){
        let div =document.querySelector("#detail");
        if (this.searchProduct(product.getCode()) || this._inventory.length == 20) {
            div.innerHTML = `<div>
            El producto ${product.getName()} no se agregó
            </div>`;
            return false;
        }else{
            div.innerHTML = `<div>
            El producto ${product.getName()} a sido agregado
            </div>`;
            this._inventory.push(product);
            return product;
        }
    }

    insertProduct(product){
        let div =document.querySelector("#detail");
        let pos = document.getElementById("numberPosition");
        if(pos.value){
            if (pos.value <= this._inventory.length + 1) {
                this._inventory.push(product);
                for (let i = this._inventory.length - 1; i >= pos.value; i--) {
                    let aux  = this._inventory[i];
                    this._inventory[i] = this._inventory[i - 1];
                    this._inventory[i - 1] = aux;
                }
                div.innerHTML = `<div>
                El producto ${product.getName()} a sido agregado
                </div>`;
                pos.value = ""; 
                return product;
            }else{
                div.innerHTML = `<div>
                El producto ${product.getName()} no se agregó
                </div>`;
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
        let div =document.querySelector("#detail");
        let product = this._inventory[this._findProduct(code)];
        console.log(this._findProduct(code));
        if (this._findProduct(code) || this._findProduct(code) === 0) {
            for (let i = this._findProduct(code); i < this._inventory.length - 1; i++) {
                let aux = this._inventory[i];
                this._inventory[i] = this._inventory[i + 1];
                this._inventory[i + 1] = aux;
            }
            this._inventory.pop();
            div.innerHTML = `<div>
            El producto ${product.getName()} a sido eliminado
            </div>`;
            return this._inventory[this.searchProduct(code)];
        }else{
            div.innerHTML = `<div>
            El producto no existe
            </div>`;
            return null;
        }
    }
}

