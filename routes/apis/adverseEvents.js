var express = require('express');
var router = express.Router();
var AdverseEvents = require("../../models/adverseEvents")
/* GET home page. */
router.post('/save', function(req, res, next) {
    function getData(dataName){
        return (req.body[dataName] || "");
    }
    adverseEvents = new AdverseEvents();
    data={
        	patient_initials: getData("patient_initials"),
		study: getData("study"),
		form_no: getData("form_no"),
		center_no: getData("center_no"),
		patient_no: getData("patient_no"),
		vst_date: getData("vst_date"),
		std_week_no: getData("std_week_no"),
		from_date: getData("from_date"),
		to_date: getData("to_date"),
		q1: getData("q1"),
		q2: getData("q2"),
		q3: getData("q3"),
		q4: getData("q4"),
		comments: getData("comments"),
		completed_by: getData("completed_by"),
		inv_date: getData("inv_date")
    };
    for(var key in data){
        adverseEvents[key]=data[key];
    }
    adverseEvents.save(function(err){
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
