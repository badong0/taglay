import express from 'express';
import {
  getUsers,
  createUser,
  loginUser,
  deleteUser,
  requireAuth,
  requireRole,
} from '../controllers/userController.js';

const router = express.Router();

// GET /api/users           → getUsers()   (admin only)
router.get('/', requireAuth, requireRole(['admin']), getUsers);

// POST /api/users          → createUser() (admin only)
router.post('/', requireAuth, requireRole(['admin']), createUser);

// POST /api/users/login    → loginUser()
router.post('/login', loginUser);

// DELETE /api/users/:id    → deleteUser() (admin only)
router.delete('/:id', requireAuth, requireRole(['admin']), deleteUser);

export default router;


