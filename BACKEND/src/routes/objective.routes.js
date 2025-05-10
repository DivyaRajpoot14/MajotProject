import {createObjective,getAllObjective,deleteObjective,updateObjective,getObjectBySubject} from '../contollers/objective.controller.js';
import { Router } from 'express';

const router = Router();

router.route('/createObjective').post(createObjective);
router.route('/getAllObjective').get(getAllObjective);
router.route('/updateObjective/:id').patch(updateObjective);
router.route('/deleteObjective/:id').delete(deleteObjective);
router.route('/getObjectBySubject/:subjectId').get(getObjectBySubject);

export default router;