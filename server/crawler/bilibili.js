var Crawler = require('crawler');
var c = new Crawler({
    maxConnections: 10,
    callback: (error,res,done)=>{
        if(error){
            console.log(error);
            throw error;
        }else {
            var $ = res.$;
            console.log($("title").text());
        }
        done();
    }
});
//queue just one url , with default callback
c.queue('https://www.amazon.com');
c.queue(['https://www.google.com','https://www.yahoo.com']);

