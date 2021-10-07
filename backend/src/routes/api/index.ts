import express from 'express';
import userRoutes from './user-routes';
import clinicConfig from './clinic-config-routes';
import patientConfig from './patients-routes';
import demographicsConfig from './demographics-routes';

const router = express.Router();

router.use('/users',userRoutes);
router.use('/clinic-config',clinicConfig);
router.use('/patients',patientConfig);
router.use('/demographics',demographicsConfig);

export = router;
