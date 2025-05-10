import { Router } from 'express';
import { createSubject, getAllSubject, deleteSubject, updateSubject} from '../contollers/subject.controller.js';

const router = Router();

router.route('/createSubjet').post(createSubject);
router.route('/getAllSubject').get(getAllSubject);
router.route('/updateSubject/:id').patch(updateSubject);
router.route('/deleteSubject/:id').delete(deleteSubject);

export default router;