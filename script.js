var express = require('express');
var app = express();
var fs = require('fs');
//var popup = require('popups');


var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';
var str = '';

app.use(express.static(__dirname));
app.get('/register',function(req,res) {
    fs.readFile('signup.html', function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not found");
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
});
        var bodyParser=require('body-parser');
        var urlencodedParser = bodyParser.urlencoded({ extended: false });
        app.post('/register',urlencodedParser, function(req,res){
        
        var bodyParser=require('body-parser');
        var urlencodedParser = bodyParser.urlencoded({ extended: false });
        //var myText = req.body.Name;
        var q={ 
            name : req.body.Name,
            shopname : req.body.sn,
            shoptype : req.body.st,
            email: req.body.email,
             password : req.body.psw,
            rppass: req.body.pswr};
            if(req.body.psw==req.body.pswr)
            {
        MongoClient.connect(url, function (err, db)
        {    
        var dbo = db.db("mydb");
        dbo.collection('biller').insertOne(q,function (err,result) {
            if (err) throw err;
            console.log("data inserted");
            db.close();
            res.send("login successful");
            res.end();
        });
    
    });
}
else
{
    console.log('password not matched');
} 
    });
    app.listen(8000);