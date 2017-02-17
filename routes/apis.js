var express = require('express');
var router = express.Router();
var backgroundInf = require("./apis/backgroundInf");
var studyAdmission = require("./apis/studyAdmission");
var adverseEvents = require("./apis/adverseEvents");
var labReport = require("./apis/labReport");
var medicalHistory = require("./apis/medicalHistory");
/* GET home page. */

router.use('/background_inf', backgroundInf);
router.use('/study_admission', studyAdmission);
router.use('/adverse_events', adverseEvents);
router.use('/lab_report', labReport);
router.use('/medical_history', medicalHistory);
module.exports = router;
