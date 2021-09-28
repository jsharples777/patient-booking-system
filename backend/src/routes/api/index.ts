import express from 'express';
import userRoutes from './user-routes';
import clinicConfig from './clinic-config-routes';

const router = express.Router();

router.use('/users',userRoutes);
router.use('/clinic-config',clinicConfig);

export = router;
