import express from 'express';
import jwt from 'jsonwebtoken';
import Resume from '../models/Resume.js';

const router = express.Router();

// Simple auth middleware
const auth = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ message: 'Unauthorized' });
  const token = header.split(' ')[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    req.userId = payload.id;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

// Create resume
router.post('/', auth, async (req, res, next) => {
  try {
    const { title, data, template } = req.body;
    const resume = await Resume.create({ user: req.userId, title, data, template });
    res.json(resume);
  } catch (err) {
    next(err);
  }
});

// Get all resumes for user
router.get('/', auth, async (req, res, next) => {
  try {
    const resumes = await Resume.find({ user: req.userId }).sort({ updatedAt: -1 });
    res.json(resumes);
  } catch (err) {
    next(err);
  }
});

// Get single resume
router.get('/:id', auth, async (req, res, next) => {
  try {
    const resume = await Resume.findOne({ _id: req.params.id, user: req.userId });
    if (!resume) return res.status(404).json({ message: 'Not found' });
    res.json(resume);
  } catch (err) {
    next(err);
  }
});

// Update resume
router.put('/:id', auth, async (req, res, next) => {
  try {
    const updated = await Resume.findOneAndUpdate(
      { _id: req.params.id, user: req.userId },
      { $set: req.body },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: 'Not found' });
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

// Delete resume
router.delete('/:id', auth, async (req, res, next) => {
  try {
    const removed = await Resume.findOneAndDelete({ _id: req.params.id, user: req.userId });
    if (!removed) return res.status(404).json({ message: 'Not found' });
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
});

export default router;
