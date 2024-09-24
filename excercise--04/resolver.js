import { Product } from "./product"
import { randomBytes } from "crypto";

const product_db = {}

export default {
    /**
     * Get product based on id
     * @param {string} id 
     * @returns 
     */
    getProduct: function ({ id }) {
        const product = product_db[id];
        if (!product) {
            console.log(`No Product Found For ${id}`);
            console.log("******************************************************");
            console.log(`Stored products: ${JSON.stringify(product_db, null, 2)}`);
            console.log("******************************************************");
        }
        console.log(`${JSON.stringify(product, null, 4)}`);
        
        const { name, description, price, inventory, cashOnDelivery, stores, soldout } = product;
        return new Product(id, name, description, price, inventory, cashOnDelivery, stores, soldout);
    },

    /**
     * Create product
     * @param {Product} product 
     */
    createProduct({ product }) {
        const id = randomBytes(10).toString('hex');
        const { name, description, price, inventory, cashOnDelivery, soldout, stores} = product;
        const newProd = new Product(id, name, description, price, cashOnDelivery, inventory, soldout, stores );

        console.log(`Storing product: ${JSON.stringify(newProd, null, 2)}`);
        product_db[id] = newProd;

        console.log("******************************************************");
        console.log(`Stored products: ${JSON.stringify(product_db, null, 2)}`);
        console.log("******************************************************");
        return newProd;
    },

    /**
     * Get all products
     * @param {Array<Product>} products
     */
    getAllProducts() {
        let products = [];
        for (const id of Object.keys(product_db)) {
            products.push(product_db[id]);
        }
        return products;
    }
}