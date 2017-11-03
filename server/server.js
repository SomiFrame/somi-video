var express = require('express');
var request = require('superagent');
var cheerio = require('cheerio');
var app = express();
var crossdomain = require('./middleware/crossdomain.js');
var BilibiliAnalysis = require('./analysis/bilibili.js');

app.use(crossdomain());
app.get('/', (req, res) => {
    res.send('hell world');
});

function crawlSource(url,method) {
    var result = "";
    request[method](url)
        .end((err, sres) => {
            result = sres.text;
            BilibiliAnalysis.parseIndex(result);
        });
}
var port = 3001;
app.listen(port, () => {
    console.log(`example app listening on port ${port}`);
})
crawlSource('bilibili.com','get');
