var express = require('express');
var router = express.Router();
var BackgroundInf = require("../../models/backgroundInf")
/* GET home page. */
router.post('/save', function(req, res, next) {
    function getData(dataName){
        return (req.body[dataName] || "");
    }
    backgroundInf = new BackgroundInf();
    data={
		patient_initials:getData("patient_initials"),
		study: getData("study"),
		form_no: getData("form_no"),
		center_no: getData("center_no"),
		patient_no: getData("patient_no"),
		vst_date: getData("vst_date"),
		current_address: getData("current_address"),
		zip_code: getData("zip_code"),
		work_phone: getData("work_phone"),
		home_phone: getData("home_phone"),
        dob: getData("dob"),
        q2: getData("q2"),
        q3: getData("q3"),
        q4: getData("q4"),
        q5: getData("q5"),
        q6: getData("q6"),
        q7: getData("q7"),
        q8: getData("q8"),
        q9: getData("q9"),
        q10: getData("q10"),
        q11: getData("q11"),
        q12: getData("q12"),
        comments: getData("comments"),
        completed_by: getData("completed_by"),
		date_of_inv: getData("date_of_inv")
    };
    for(var key in data){
        backgroundInf[key]=data[key];
    }
    backgroundInf.save(function(err){
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
