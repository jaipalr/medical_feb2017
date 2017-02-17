var express = require('express');
var router = express.Router();
var LabReport = require("../../models/labReport")
/* GET home page. */
router.post('/save', function(req, res, next) {
    function getData(dataName){
        return (req.body[dataName] || "");
    }
    labReport = new LabReport();
    data={
		patient_initials: getData("patient_initials"),
		study: getData("study"),
		form_no: getData("form_no"),
		center_no: getData("center_no"),
		patient_no: getData("patient_no"),
		vst_date: getData("vst_date"),
		rat_per: getData("rat_per"),
		date_of_sample: getData("date_of_sample"),
		time_of_sample: getData("time_of_sample"),
		hematology: getData("hematology"),
		blood_chemistry: getData("blood_chemistry"),
		irb_notified: getData("irb_notified"), 
		urinalysis: getData("urinalysis"),
		q30: getData("q30"),
		q31: getData("q31"),
		q32: getData("q32"),
		q33: getData("q33"),
		comments: getData("comments"),
		completed_by: getData("completed_by"),
		date_of_inv: getData("date_of_inv")
    };
    for(var key in data){
        labReport[key]=data[key];
    }
    labReport.save(function(err){
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
