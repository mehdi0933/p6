const express = require('express');
const router = express.Router();
const useCtrl = require('../controllers/user');
// app.use(cors({origin: true, credentials: true}));


router.post('/api/auth/signup', useCtrl.signup);
router.post('/api/auth/login',  useCtrl.login);


module.exports = router;
