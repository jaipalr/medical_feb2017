var mongoose=require('mongoose')
mongoose.connect("mongodb://localhost/medical", {user: "user", pass: "password"}, function(err, db){
    if(err)
        console.log(err);
});
module.export=mongoose;