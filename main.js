import Product from "./product.js";
import Inventory from "./inventory.js";

class App{
    constructor(){
        this._inventory= new Inventory();
        this._div = document.querySelector("#detail");
        let btnAdd=document.querySelector("#btnAdd");
        btnAdd.addEventListener("click",this._addProduct);
        let btnSearch = document.querySelector("#btnSearch");
        btnSearch.addEventListener("click",this._searchProduct);
        let btnList=document.querySelector("#btnList");
        btnList.addEventListener("click",this._list);
        let btnListInv=document.querySelector("#btnListInv");
        btnListInv.addEventListener("click",this._listInv);
        let btnInsert=document.querySelector("#btnInsert");
        btnInsert.addEventListener("click",this._insert);
   }

   _addProduct= () =>{
    let product= Product.readForm();
    if(!product){
        this._div.innerHTML += `<div>
        El producto ${product.getName()} no se agregó
        </div>`;
        return;
    }
    let added=this._inventory.addProduct(product);
    if(!added){
        this._div.innerHTML += `<div>
        El producto ${product.getName()} no se agregó
        </div>`;
        return;
    }
    this._div.innerHTML += `<div>
    El producto ${product.getName()} a sido agregado
    </div>`;
   }

   _searchProduct= () =>{
    let code = document.getElementById("numberCode");
    if (this._inventory.searchProduct(code.value)) {
        this._div.innerHTML += this._inventory.searchProduct(code.value).getInfo();
        code.value = "";
        return;
    }else {
        this._div.innerHTML += `<div>
        No se encontró el producto.
        </div>`;
        code.value = "";
        return;
    }
   }

   _list= () =>{
    this._div.innerHTML += this._inventory.listProducts();
   }

   _listInv= () =>{
    this._div.innerHTML += this._inventory.listProductsInv();
   }

   _insert= () => {
    let product= Product.readForm();
    this._inventory.insertProduct(product);
   }
}

new App();