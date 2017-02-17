var mongoose = require('mongoose');
var schema = mongoose.Schema;
var BackgroundInf = new schema({
	
    patient_initials: String,
    study: String,
    form_no: Number,
    center_no: Number,
    patient_no: Number,
    vst_date: String,
	current_address: String,
	zip_code: Number,
	work_phone: Number,
	home_phone: Number,
	dob:String,
    q2: Number,
    q3: Number,
    q4: Number,
    q5: Number,
    q6: Number,
    q7: Number,
    q8: Number,
    q9: Number,
    q10: Number,
    q11: Number,
    q12: Number,
    comments: String,
    completed_by: String,
	date_of_inv: String
});
module.exports = mongoose.model('BackgroundInf', BackgroundInf)
