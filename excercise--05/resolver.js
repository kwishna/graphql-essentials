import { Products } from "./mongoDbConnectors";
import { Product } from "./product"
import { randomBytes } from "crypto";

// const product_db = {}

export default {
    /**
     * Get product based on id
     * @param {string} id 
     * @returns 
     */
    getProduct: async function ({ id }) {
        try {
            const product = await Products.findById(id);
            console.log(`${JSON.stringify(product, null, 4)}`);
            return product;
        } catch (error) {
            throw new Error(error);
        }
    },

    /**
     * Create product
     * @param {Product} product 
     */
    createProduct: async function ({ product }) {

        const _id = randomBytes(10).toString('hex');

        const { name, description, price, inventory, cashOnDelivery, soldout, stores } = product;
        const newProd = new Products({
            name,
            description,
            price,
            inventory,
            cashOnDelivery,
            soldout,
            stores
        });

        newProd.id = _id
        try {
            console.log(`Storing product: ${JSON.stringify(newProd, null, 2)}`);
            await newProd.save();
            return newProd;
        } catch (error) {
            throw new Error(error);
        }
    },

    /**
     * Update product
     * @param {Product} product 
     */
    updateProduct: async function ({ product }) {
        // ------- old code -------
        // const _id = product.id;
        // try {
        //     const newProd = await Products.findOneAndUpdate({ id: _id })
        //     console.log(`Updating product: ${JSON.stringify(newProd, null, 2)}`);
        //     return newProd;
        // } catch (error) {
        //     throw new Error(error);
        // }

        const _id = product.id;

        const updateData = {
            name: product.name,
            price: product.price,
            price: product.price,
            inventory: product.inventory,
            cashOnDelivery: product.cashOnDelivery,
            soldout: product.soldout,
            stores: product.stores
        };

        try {
            const updatedProduct = await Products.findOneAndUpdate(
                { id: _id }, // Query to find the product
                { $set: updateData }, // Update operation
                { new: true, omitUndefined: false } // Return the updated document
            );

            console.log(`Updating product: ${JSON.stringify(updatedProduct, null, 2)}`);
            return updatedProduct;
        } catch (error) {
            throw new Error(error);
        }
    },

    /**
     * Get all products
     * @returns {Array<Product>} products
     */
    async getAllProducts() {
        try {
            const allProducts = await Products.find({});
            console.log(`Stored products: ${JSON.stringify(allProducts, null, 2)}`);
            return allProducts;
        } catch (error) {
            throw new Error(error);
        }
    },

    /**
     * Delete product from DB.
     */
    async deleteProduct({ id }) {
        try {
            await Products.deleteOne({ id })
            return `Succesfully Deleted From DB.`;
        } catch (error) {
            throw new Error(error);
        }
    }
}

/*
-> Learn  Query by Alias
-> Learn Fragmant Query

query {
    widgetone: getProductCid: "627a6e03ce16f9f485942ffd") {
        ...productFragment
    }

    widgettwo: getProduct(id: "65b3d5d447fa19e231e77aab") {
        ...productFragment
    }

    widgetAll: getAllProducts {
        ...productFragment
    }
}

fragment productFragment on Product {
    name
    description
    price
}
*/