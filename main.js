import Product from "./product.js";
import Inventory from "./inventory.js";

let inventory= new Inventory();
let div = document.querySelector("#detail");

const btnAdd = document.querySelector("#btnAdd");
btnAdd.addEventListener("click", () => {
    let product= Product.readForm();
    if(!product){
        div.innerHTML += `<div>
        El producto ${product.getName()} no se agregó
        </div>`;
        return;
    }
    let added=inventory.addProduct(product);
    if(!added){
        div.innerHTML += `<div>
        El producto ${product.getName()} no se agregó
        </div>`;
        return;
    }
    div.innerHTML += `<div>
    El producto ${product.getName()} a sido agregado
    </div>`;
});

const btnSearch = document.querySelector("#btnSearch");
btnSearch.addEventListener("click", () => {
    let code = document.getElementById("numberCode");
    if (inventory.searchProduct(code.value)) {
        div.innerHTML += inventory.searchProduct(code.value).getInfo();
        code.value = "";
        return;
    }else {
        div.innerHTML += `<div>
        No se encontró el producto.
        </div>`;
        code.value = "";
        return;
    }
});

const btnList = document.querySelector("#btnList");
btnList.addEventListener("click", () => {
    div.innerHTML += inventory.listProducts();
});

const bntListInv = document.querySelector("#btnListInv");
bntListInv.addEventListener("click", () => {
    div.innerHTML += inventory.listProductsInv();
});

const btnDelete = document.querySelector("#btnDelete");
btnDelete.addEventListener("click", () => {
    
});