
/*******↓*获取 url 参数*↓*******/
function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null;
}

function WriteMd(elm, text) {
    var converter = new showdown.Converter();
    converter.setOption('tables', true);
    converter.setOption('ghCodeBlocks', true);
    converter.setOption('literalMidWordAsterisks', true);   // _ 不解释为斜体和粗体
    converter.setOption('literalMidWordUnderscores', true); // * 不解释为斜体和粗体
    //var text = '# hello, markdown!';
    var html = converter.makeHtml(text);
    elm.innerHTML = html;
    var codes = document.querySelectorAll("pre code");
    for (var i = 0; i < codes.length; i++) {
        hljs.highlightBlock(codes[i]);
    }
    /*
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });
    */
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) return c.substring(name.length,c.length);
    }
    return "";
}

function InsertAtCursor(myField, myValue) {
    //IE 浏览器
    if (document.selection) {
        myField.focus();
        sel = document.selection.createRange();
        sel.text = myValue;
        sel.select();
    }
    //FireFox、Chrome等
    else if (myField.selectionStart || myField.selectionStart == '0') {
        var startPos = myField.selectionStart;
        var endPos = myField.selectionEnd;
        // 保存滚动条
        var restoreTop = myField.scrollTop;
        myField.value = myField.value.substring(0, startPos)
            + myValue + myField.value.substring(endPos, myField.value.length);

        if (restoreTop > 0) {
            myField.scrollTop = restoreTop;
        }
        myField.focus();
        myField.selectionStart = startPos + myValue.length;
        myField.selectionEnd = startPos + myValue.length;
    } else {
        myField.value += myValue;
        myField.focus();
    }
}
