
import dbConfig from '../config/dbConfig';
import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorAliases: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle,
        }
    }
);

sequelize.authenticate()
.then(() => {
    console.log('Connected');
}).catch((err) => {
    console.log(err);
});
// ---- the below "db" is can be considered as instance -----
const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.products = require('./productModel.js');
// db.reviews = require('./reviewModel.js')(sequelize, DataTypes);


db.sequelize.sync({force: false})
.then(() => {
    console.log('Drop and re-sync db.');
});

module.exports = db;
