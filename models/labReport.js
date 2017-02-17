var mongoose = require('mongoose');
var schema = mongoose.Schema;
var LabReport = new schema({
    patient_initials: String,
    study: String,
    form_no: Number,
    center_no: Number,
    patient_no: Number,
    vst_date: String,
	rat_per: Number,
	date_of_sample: String,
	time_of_sample: String,
	hematology:[
	{
		total_wbc: Number,
		total_rbc: Number,
		platelet_count: Number,
		hemoglobin: Number,
		hematocrit: Number,
		neutrophils: Number,
		lymphocytes: Number,
		monocytes: Number,
		eosinophils: Number,
		basophils: Number
	}
	],
	blood_chemistry: [
	{
		glucose: Number,
		total_protein: Number,
		albumin: Number,
		bun: Number,
		creatinine: Number,
		sgot: Number,
		sgpt: Number,
		cgt: Number,
		alk_phosphatase: Number, 
		total_bilirubin: Number,
	}		
	],
	IRB_notified: Number,
	urinalysis: [
	{
		Specific_gravity: Number,
		reaction: Number,
		albumin: Number,
		glucose: Number,
		acetone:Number,
		wbcs_hpf:Number,
		rbcs_hpf: Number,
		epithelial_cells: Number
	}],
	q30:[
		{
			choice: Number,
			specification: String
		}],
	q31: Number,
	q32: Number,
	q33: String,
	comments: String,
	completed_by: String,
	date_of_inv: String
});
module.exports = mongoose.model('LabReport', LabReport)
