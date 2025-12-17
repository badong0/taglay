import express from 'express';
import {
  getArticles,
  getArticleByName,
  createArticle,
  updateArticle,
  toggleStatus,
} from '../controllers/articleController.js';
import { requireAuth, requireRole } from '../controllers/userController.js';

const router = express.Router();

// GET /api/articles
router.get('/', getArticles);

// GET /api/articles/:name
router.get('/:name', getArticleByName);

// POST /api/articles
router.post('/', requireAuth, requireRole(['admin', 'editor']), createArticle);

// PUT /api/articles/:id
router.put('/:id', requireAuth, requireRole(['admin', 'editor']), updateArticle);

// PATCH /api/articles/:id
router.patch('/:id', requireAuth, requireRole(['admin', 'editor']), toggleStatus);

export default router;


