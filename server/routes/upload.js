import express from 'express';
import {uploadController,searchController} from '../controllers/embedding.controller.js';

const router = express.Router();
router.post('/upload', uploadController);
router.post('/search', searchController);



export default router;