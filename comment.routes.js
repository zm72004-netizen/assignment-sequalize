import { Router } from 'express';
import * as cc from '../module/comment.controller.js';

const router = Router();

router.post('/', cc.bulkCreateComments);
router.patch('/:commentId', cc.updateComment);
router.post('/find-or-create', cc.findOrCreateComment);
router.get('/search', cc.searchComments);
router.get('/newest/:postId', cc.getNewestComments);
router.get('/details/:id', cc.getCommentDetails);

export default router;