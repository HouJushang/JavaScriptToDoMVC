define(['tpl'],function (tpl) {
    return function (){
        var data = {
            title : '1',
        }
        var tplHtml = document.getElementById('indexTpl').innerHTML;
        var template = tpl.compile(tplHtml);
        var context = {title: "My New Post", body: "This is my first post!"};
        var html    = template(context);
        console.log(html);
    }
});