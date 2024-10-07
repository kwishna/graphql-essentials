import mongoose from "mongoose";

const MONGO_DB_URL = 'mongodb://localhost/products';

async function connectMongo() {
    try {
        await mongoose.connect(MONGO_DB_URL);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Error connecting to MongoDB:', error);
    }
}

connectMongo();

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    cashOnDelivery: Boolean,
    soldout: String,
    inventory: String,
    stores: Array,
});

const Products = mongoose.model('products', productSchema);

export { Products };
