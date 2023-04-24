import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js';
// Config env

dotenv.config();
//Database config
connectDB();
// rest object
const app = express();
// middlewaress
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/product', productRoutes);
// rest api
app.get('/', (req, res) => {
  res.send({
    message: 'Welcome to ecommerce-app',
  });
});
// PORT
const PORT = process.env.PORT;
// run listion
app.listen(PORT, () => {
  console.log(
    `Server is running on ${process.env.DEV_MODE} mode on port ${PORT}`
  );
});
