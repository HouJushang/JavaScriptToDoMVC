requirejs.config({
    baseUrl: 'www/js',
    paths: {
        c: 'controller',
        lib: 'lib',
        tpl:'lib/handlebars'
    }
});

requirejs(['lib/director','c/index','c/list'], function (Router,index,list) {
    //模板引擎配置
    var author = function () {
        console.log("author");
    };
    var books = function () {
        console.log("books");
    };
    var viewBook = function (bookId) {
        console.log("viewBook: bookId is populated: " + bookId);
    };
    var routes = {
        '/index': index,
        '/list': list,
        '/books/view/:bookId': viewBook
    };
    var router = Router(routes);
    router.init();
});