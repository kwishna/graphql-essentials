export class Product {
    /**
     * 
     * @param {string} name 
     * @param {string} description 
     * @param {number} price 
     * @param {boolean} cashOnDelivery 
     * @param {number} inventory 
     * @param {string} soldout 
     * @param {Store[]} stores 
     */
    constructor(id, name, description, price, inventory, cashOnDelivery, soldout, stores) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.inventory = inventory;
        this.cashOnDelivery = cashOnDelivery;
        this.soldout = soldout;
        this.stores = stores;
    }
}

class Store {
    /**
     * 
     * @param {string} store 
     */
    constructor(store) {
        this.store = store;
    }
}
