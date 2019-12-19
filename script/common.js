/**
 * Created by PhpStorm.
 * User: 835173372@qq.com
 * NickName: 半城村落
 * Date: 2016/12/31 22:34
 */
function closewin() {
    api.closeWin();
}

function open_content() {
    api.openWin({
        name: 'content_win',
        url: '../html/content_win.html',
        pageParam: {
            name: 'pageparamname'
        }
    });
}


var Base_url = 'http://shop.heimicms.com/index.php/app/';

var index_url = Base_url + 'cms/index';
var cate_list_url = Base_url + 'cms/cate_list';
var cate_list_two_url = Base_url + 'cms/cate_list_two';
var article_list_url = Base_url + 'cms/article_list';
var article_content_url = Base_url + 'cms/article_content';


//会员中心

var login_url = Base_url + 'base/login';
var loginout_url = Base_url + 'base/login_out';
