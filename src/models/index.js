import { Sequelize } from 'sequelize';
import dbConfig from '../db/config.js';
import defineProduct from './products.js'; // your factory from the question

const env = process.env.NODE_ENV ?? 'development';
const cfg = dbConfig[env];

export const sequelize = new Sequelize(
  cfg.database,
  cfg.username,
  cfg.password,
  cfg
);

// Register models (explicit & simple)
export const Product = defineProduct(sequelize);

// If any model defines `associate(models)`, wire them here:
const models = { Product };
Object.values(models).forEach((m) => m.associate?.(models));

export default { sequelize, ...models };
