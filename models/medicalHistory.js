var mongoose = require('mongoose');
var schema = mongoose.Schema;
var MedicalHistory = new schema({
    patient_initials: String,
    study: String,
    form_no: Number,
    center_no: Number,
    patient_no: Number,
    vst_date: String,
	q1:[
		{
		disease: String,
		discription: String
		}
	],
	q2: {
		choice: Number,
		medical_problems: [{
			problem_nature: String,
			medical_event_code: Number,
			date_onset: String,
			date_resolution: String,
			severity: Number,
			action_taken: String
		}]
	},
	q3: String,
	q4: {
		choice: Number,
		problems: [{
			problem_nature: String,
			medical_event_code: Number,
			date_onset: String,
			date_resolution: String,
			severity: Number,
			action: Number,
			action_taken: Number,
			outcome: Number
		}]
	},
	q5:{
		choice: Number,
		drug_usage: [{
			drug_name: String,
			drug_code: String,
			strength: Number,
			doses_per_day: Number,
			code_indication : Number,
			start_date: String,
			stop_date: String,
			check: Number
		}]
	},
	completed_by: String,
	inv_date: String	
});
module.exports = mongoose.model('MedicalHistory', MedicalHistory)
