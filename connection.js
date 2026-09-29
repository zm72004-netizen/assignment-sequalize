import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('assignment5_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

export const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};