var mongoose = require('mongoose');
var schema = mongoose.Schema;
var AdverseEvents = new schema({
    patient_initials: String,
    study: String,
    form_no: Number,
    center: Number,
    patient: Number,
    vst_date: String,
    std_week_no: Number,
    from_date: String,
    to_date: String,
    q1: String,
    q2: {
		choice: Number,
		adverse_events: [{
			event_nature: String,
			event_code: Number,
			date_onset: String,
			date_resolution: String,
			report_type: Number,
			relatedness: Number,
			severity: Number,
			action: Number,
			outcome: Number
		}]
	},
    q3: Number,
	q4: Number,
	comments: String,
	completed_by: String,
	date_of_inv: String
});
module.exports = mongoose.model('AdverseEvents', AdverseEvents)
