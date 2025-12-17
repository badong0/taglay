import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import articleRoutes from './routes/articleRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();

// Body parser
app.use(express.json());

// CORS – use VITE_API_URL as the allowed origin (React client URL)
app.use(
  cors({
    origin: process.env.VITE_API_URL,
  })
);

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'Article Management API is running' });
});

// Routes
app.use('/api/articles', articleRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 8000;

// Start server after DB connection (MongoDB Atlas)
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});


