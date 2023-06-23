import { Router } from 'express';

import { getPresignedUrl } from '../controllers';

export const router = Router();

router.get('/upload', getPresignedUrl);
