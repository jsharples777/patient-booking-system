import express from 'express';
import clinicConfig from './clinic-config-routes';
import patientConfig from './patients-routes';
import patientSearchConfig from './patient-search-routes';

const router = express.Router();

router.use('/clinic-config', clinicConfig);
router.use('/patients', patientConfig);
router.use('/patient-search',patientSearchConfig);

export = router;
