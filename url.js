var http=require("http"),
	url=require("url");

http.createServer(function(req,res){
	
	req.on("end",function(){

		res.writeHead(200,{
			"content-type":"text/plain"
		});
		var queryObj=url.parse(req.url,true).query;

		res.end("query name is "+queryObj.name+" and "+queryObj.age);


	});

}).listen(8090);