import { Router } from 'express';
import * as pc from '../module/post.controller.js';

const router = Router();

router.post('/', pc.createPost);
router.delete('/:postId', pc.deletePost);
router.get('/details', pc.getPostsDetails);
router.get('/comment-count', pc.getPostsCommentCount);

export default router;