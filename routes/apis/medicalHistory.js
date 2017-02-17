var express = require('express');
var router = express.Router();
var MedicalHistory = require("../../models/medicalHistory")
/* GET home page. */
router.post('/save', function(req, res, next) {
    function getData(dataName){
        return (req.body[dataName] || "");
    }
    medicalHistory = new MedicalHistory();
    data={
		patient_initials: getData("patient_initials"),
		study: getData("study"),
		form_no: getData("form_no"),
		center_no: getData("center_no"),
		patient_no: getData("patient_no"),
		vst_date: getData("vst_date"),
		q1: getData("q1"),
		q2: getData("q2"),
		q3: getData("q3"),
		q4: getData("q4"),
		q5: getData("q5"),
		completed_by: getData("completed_by"),
		date_of_inv: getData("date_of_inv")
    };
    for(var key in data){
        medicalHistory[key]=data[key];
    }
    medicalHistory.save(function(err){
        if(err){
            res.json({
                status: "error",
                statusMessage: err
            })
        }else{
            res.json({
                status: "ok",
                statusMessage: "Data Saved Successfully"
            })
        }
    })
});

module.exports = router;
