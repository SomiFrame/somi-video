var Crawler = require('crawler');
var domain = "http://www.amazon.com";
var c = new Crawler({
    maxConnections: 10,
    callback: (error, res, done) => {
        if (error) {
            console.log(error);
            throw error;
        } else {
            var $ = res.$;
            $('a').each((index, a) => {
                if (a.attribs.href) {
                    console.log(index, a.attribs.href);
                    console.log(typeof a.attribs.href);
                    if (a.attribs.href.toString().match(/\/\//)) {
                        c.queue(a.attribs.href);
                    } else {
                        c.queue(domain + a.attribs.href);
                    }
                }
            });
        }
        done();
    }
});
//queue just one url , with default callback
c.queue(domain);

