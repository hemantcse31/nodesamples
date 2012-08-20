var http=require("http"),
	mysql=require("mysql");

var con=mysql.createConnection({
	user:"root",
	pasword:"",
	database:"test"
});


http.createServer(function(req,res){
	
	req.on("end",function(){

		res.writeHead(200,{
			"content-type":"text/plain"
		});

		var len,
			fragment="";

		 con.query('SELECT * FROM student;', function (error, rows, fields) { 

         var len=rows.length;	

         	 for(var i=0; i < len; i++){
         	 	fragment+="Name is "+rows[i].name+" age is "+rows[i].age +" ";
         	 }	

         	 res.end(JSON.stringify(fragment));

     });


	});

}).listen(8090);