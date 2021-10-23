import express from 'express';
import clinicConfig from './clinic-config-routes';
import patientConfig from './patients-routes';

const router = express.Router();

router.use('/clinic-config', clinicConfig);
router.use('/patients', patientConfig);

export = router;
