import Product from "./product.js";
export default class Inventory {
    constructor() {
        this._inventory = [];
    }

    searchProduct(code){
        this._inventory.forEach( p => {
            if (code == p.getCode()) {
                return p;
            }
        });
        return false;
    }

    addProduct(product){
        if (this.searchProduct(product.getCode()) || this._inventory.length == 20) {
            return false;
        }else{
            this._inventory.push(product);
            return true;
        }
    }

    deleteProduct(product){
        if (this.searchProduct(product.getCode())) {

            return this._inventory.pop();
        }else{
            return false;
        }
    }
}