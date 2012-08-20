var http=require("http");

http.createServer(function(req,res){
	
	req.on("end",function(){

		res.writeHead(200,{
			"content-type":"text/plain"
		});

		res.end("Hello http end");


	});

}).listen(8090);