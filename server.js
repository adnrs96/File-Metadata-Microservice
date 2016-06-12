var express = require('express');
var app = express();
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });
app.set('port',process.env.PORT||5000);
app.use(express.static(__dirname +'/js'));
app.post('/filesize',upload.single('file'),function(req,res){
	console.log(req.file);
	if(req.file==undefined)
	res.json({error:"An Error Occured"});
	else
	res.json({filesize:req.file.size});
});

app.use('/',function(req,res){
	res.sendFile(__dirname+'/index.html');
});

app.listen(app.get('port'),function(){
console.log("Node Server running at port "+app.get('port'));
});