//Транслитерация названия файла
function transLit(w, v) {
    var tr = 'a b v g d e ["zh","j"] z i y k l m n o p r s t u f h c ch sh ["shh","shch"] ~ y ~ e yu ya ~ ["jo","e"]'.split(' ');
    var ww= '', ch = '';
    w = w.toLowerCase().replace(/ /g, '-');
    for (var i = 0; i < w.length; ++i) {
        var cc = w.charCodeAt(i);
        if (cc >= 1072) {ch= tr[cc - 1072];} else {ch = w[i];}
        ww += ch;
    }
    return (ww.replace(/[^a-zA-Z0-9\-]/g, '-').replace(/[-]{2,}/gim, '-').replace(/^\-+/g, '').replace(/\-+$/g, ''));
}
