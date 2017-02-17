var mongoose = require('mongoose');
var schema = mongoose.Schema;
var StudyAdmission = new schema({
    patient_initials: String,
    study: String,
    form_no: Number,
    center_no: Number,
    patient_no: Number,
    vst_date: String,
    q1: Number,
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
    q13: Number,
    q14: Number,
    q15: Number,
    q16: Number,
    q16_spec: String,
    q17:{
		choice: Number,
		date_randomized: String,
		date_frstdose: String
    },
    completed_by: String,
    date_of_inv: String
});
module.exports = mongoose.model('StudyAdmission', StudyAdmission)
