var http=require("http"),
	fs=require("fs");

http.createServer(function(req,res){
	
	req.on("end",function(){

		if (req.url == '/') {
		fs.readFile("test.txt","utf-8",function(err,data){
			res.writeHead(200,{
				"content-type":"text/plain"
			});

			var data=parseInt(data)+1;
			fs.writeFile("test.txt",data);
			console.log(err);
			console.log(data+1);

			res.end("page is refreshed "+data+" times!");
		
		});
	}else{
			res.writeHead(404);
			res.end();
		}
	});

}).listen(8090);