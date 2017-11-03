// domain: bilibili.com 解析b站网页数据
var cheerio = require('cheerio');
class BilibiliAnalysis {
    constructor(){

    }
    parseIndex(str){
        console.log('-------------------------');
        var $ = cheerio.load(str);
        console.log($('#primary_menu').html());
    }
}
module.exports = new BilibiliAnalysis();
