import Article from '../models/article.js';

// GET /api/articles
export const getArticles = async (req, res) => {
  try {
    const articles = await Article.find().sort({ createdAt: -1 });
    res.json(articles);
  } catch (error) {
    console.error('Error fetching articles:', error);
    res.status(500).json({ message: 'Server error fetching articles' });
  }
};

// GET /api/articles/:name
export const getArticleByName = async (req, res) => {
  try {
    const { name } = req.params;
    const article = await Article.findOne({ name });

    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }

    res.json(article);
  } catch (error) {
    console.error('Error fetching article:', error);
    res.status(500).json({ message: 'Server error fetching article' });
  }
};

// POST /api/articles
export const createArticle = async (req, res) => {
  try {
    const { name, title, content, isActive } = req.body;

    if (!name || !title || !content) {
      return res.status(400).json({ message: 'name, title and content are required' });
    }

    const existing = await Article.findOne({ name });
    if (existing) {
      return res.status(400).json({ message: 'Article with this name already exists' });
    }

    const article = await Article.create({
      name,
      title,
      content,
      isActive: isActive !== undefined ? isActive : true,
    });

    res.status(201).json(article);
  } catch (error) {
    console.error('Error creating article:', error);
    res.status(500).json({ message: 'Server error creating article' });
  }
};

// PUT /api/articles/:id
export const updateArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, title, content, isActive } = req.body;

    const article = await Article.findById(id);
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }

    if (name !== undefined) article.name = name;
    if (title !== undefined) article.title = title;
    if (content !== undefined) article.content = content;
    if (isActive !== undefined) article.isActive = isActive;

    await article.save();

    res.json(article);
  } catch (error) {
    console.error('Error updating article:', error);
    res.status(500).json({ message: 'Server error updating article' });
  }
};

// PATCH /api/articles/:id
export const toggleStatus = async (req, res) => {
  try {
    const { id } = req.params;

    const article = await Article.findById(id);
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }

    article.isActive = !article.isActive;
    await article.save();

    res.json(article);
  } catch (error) {
    console.error('Error toggling article status:', error);
    res.status(500).json({ message: 'Server error toggling article status' });
  }
};

