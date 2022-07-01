import * as dotenv from 'dotenv';
dotenv.config();

export const sqlConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE
};

export default {
    stripe: {
        secret: process.env.STRIPE_API_KEY
    }
};