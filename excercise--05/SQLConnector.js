import { Sequelize, DataTypes } from "sequelize";
import _ from 'lodash';
import casual from 'casual';

const sequelize = new Sequelize('sqlite::memory:');

const Categories = sequelize.define('categories', {
    category: DataTypes.STRING,
    description: DataTypes.STRING,
});

async function syncAndSeedCategories() {
    try {
        await sequelize.sync( { force: true });
        console.log('SQLite connectection established and Categories model synced');
        
        // Seed random categories
        await Promise.all(_.times(5, () => {
            return Categories.create({
                category: casual.word,
                description: casual.sentence,
            });
        }));

        console.log('Categories seeded');
    } catch (error) {
        console.log('Error with SQLite DB:', error);
    }
}

syncAndSeedCategories();

export { Categories };
