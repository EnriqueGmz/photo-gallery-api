import { Router } from 'express';
import {
  createPhoto,
  deletePhoto,
  getPhoto,
  getPhotos,
  updatePhoto,
} from '../controllers/photo.controller';

const router = Router();

import multer from '../libs/multer';

router
  .route('/photos')
  .get(getPhotos)
  .post(multer.single('image'), createPhoto);

router.route('/photos/:id').get(getPhoto).delete(deletePhoto).put(updatePhoto);

export default router;
