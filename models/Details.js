var mongoose = require("mongoose");
var patientSchema = new mongoose.Schema({
    name : String,
    address : String,
    age : String,
    bloodPressure : String,
    wbcCount : String,
    haemoglobin : String,
    rbcCount : String,
    mvc : String,
    mchc : String,
    pcount : Number,
    mpv : String,
    weight : String,
    height : String,
    bmi : String,
    ctrRatio : String,
    sbp : String,
    dbp : String,
    pulsePressure : String,
    pulseRate : String,
    thyroxin : String,
    bloodSugar : String,
    urineSugar : String,
    bloodUrineNitrogen : String,
    sUricAcid : String,
    sCalcium : String,
    sPhosphorus : String
});
module.exports = mongoose.model("Patient", patientSchema);