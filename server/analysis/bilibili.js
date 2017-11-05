// domain: bilibili.com 解析b站网页数据
const fs = require('fs');
var cheerio = require('cheerio');
class BilibiliAnalysis {
    constructor() {}
    parseIndex(str) {
        let main_menu_data = {};
        let $ = cheerio.load(str);
        //获取b站首页 主菜单
        let $primary_menu = $('#primary_menu');
        let list_li = [];
        let teststring = '';
        $primary_menu.find('>ul>li').each((index, element) => {
            let link_href = $(element).find('>.nav-link').attr('href');
            let link_name = $(element).find('>.nav-link .nav-name').text();
            teststring += link_href + link_name;
            console.log(link_href, link_name);
            list_li.push({
                index,
                element
            });
        });
        this.saveData(teststring, 'datafile.txt');
    }
    saveData(data, url) {
        fs.writeFile(url, data, (err) => {
            if (err) throw err;
            console.log(`scuess append data to file ${url}`);
        });
    }
}
module.exports = new BilibiliAnalysis();