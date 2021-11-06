export default class Inventory {
    constructor() {
        this._inicio = null;
    }

    searchProduct(code){
        let aux = this._inicio;
        while (aux != null) {
            if (code == aux.getCode()) {
                return aux;
            }else if (code < aux.getCode()) {
                return null;
            }else {
                aux = aux.getNext();
            }
        }
        return null;
    }

    findPosition(code){
        let aux = this._inicio;
        while (aux != null) {
            if (code < aux.getCode()) {
                return aux;
            }else if(aux.getNext() != null){
                aux = aux.getNext();
            }else{
                return aux;
            }
        }
    }

    _counter(){
        let aux = this._inicio;
        let cont = 0;
        while (aux != null) {
            cont++;
            aux= aux.getNext();
        }
        return cont;
    }

    addProduct(product){
        if (this._inicio == null){
            this._inicio = product;
            return `${this._inicio.getInfo()}`;
        }else if(this.searchProduct(product.getCode()) == null && this._counter() < 20){
            if (product.getCode() < this._inicio.getCode()){
                product.setNext(this._inicio);
                this._inicio.setPrevious(product);
                this._inicio = product;
                return `${product.getInfo()}`;
            }else if(this.findPosition(product.getCode()).getCode() < product.getCode()){
                product.setPrevious(this.findPosition(product.getCode()));
                this.findPosition(product.getCode()).setNext(product);
                return `${product.getInfo()}`;
            }else{
                product.setNext(this.findPosition(product.getCode()));
                product.setPrevious(this.findPosition(product.getCode()).getPrevious());
                this.findPosition(product.getCode()).setPrevious(product);
                product.getPrevious().setNext(product);
                return `${product.getInfo()}`;
            }
        }else{
            return `No se pudo agregar`;
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
        if (this._inicio == null) {
            return null;
        }else{
            let elim = null;
            if (code == this._inicio.getCode()){
                if (this._inicio.getNext() != null){
                elim = this._inicio;
                this._inicio = this._inicio.getNext();
                this._inicio.setPrevious(null);
                elim.setNext(null);
                elim.setPrevious(null);
                return elim;
                }else{
                elim = this._inicio;
                this._inicio = null;
                return elim;
                }
            }else{
                let aux = this._inicio;
                while (aux != null) {
                    if (aux.getCode() == code){
                        elim = aux;
                        aux.getPrevious().setNext(aux.getNext())
                        aux.getNext().setPrevious(aux.getPrevious());
                        elim.setNext(null);
                        elim.setPrevious(null);
                        return elim;
                    }else{
                        aux = aux.getNext();
                        }
                }
                return elim;
            }
        }
    }
}

