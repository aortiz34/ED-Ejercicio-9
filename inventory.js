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

    addProduct(product){
        if (this.searchProduct(product.getCode()) || this._inventory.length == 20) {
            return false;
        }else{
            this._inventory.push(product);
            console.log(this._inventory);
            return product;
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

    deleteProduct(product){
        if (this.searchProduct(product.getCode())) {

            return this._inventory.pop();
        }else{
            return false;
        }
    }
}