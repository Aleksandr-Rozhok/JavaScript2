class ProductsList {
    constructor(container = ".products") {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts();
        this.sumCount();
    }
    _fetchProducts() {
        this.goods = [{
            id: 1,
            title: 'Notebook',
            price: 2000
        }, {
            id: 2,
            title: 'Mouse',
            price: 20
        }, {
            id: 3,
            title: 'Keyboard',
            price: 200
        }, {
            id: 4,
            title: 'Gamepad',
            price: 50
        } ]
    }
    sumCount(){
        let i = 0;
        for(this.price of this.goods) {
            i += this.price
        }
        return console.log(i); 
    }
    
    render() {
        const block = document.querySelector(this.container)
        for (let product of this.goods) {
            const ProductsObject = new ProductsItem(product);
            this.allProducts.push(ProductsObject);
            block.innerHTML += ProductsObject.render();
        }
    }
}

class ProductsItem {
    constructor(product, img='https://placehold.it/200x150') {
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.img = img;
    }
    render() {
        return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

class Cart {
    constructor(basket = ".btn-cart"){
        this.basket = basket;
        this.goodsBasket = [];
        this._removeGoods();
        this.buyGoods();
    }
}

class CartList {
    constructor(ProductsItem){
    this.removeItem();
    this.checkItem();
    this.plusGoods();
    this.minusGoods();
    }
}

                   
let list = new ProductsList();
list.render();

