/**
 * FingerprintJS v3.3.3 - Copyright (c) FingerprintJS, Inc, 2022 (https://fingerprintjs.com)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 *
 * This software contains code from open-source projects:
 * MurmurHash3 by Karan Lyons (https://github.com/karanlyons/murmurHash3.js)
 */
var e = function() { return e = Object.assign || function(e) { for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]); return e }, e.apply(this, arguments) };

function t(e, t, n, r) { return new(n || (n = Promise))((function(a, o) {
        function i(e) { try { u(r.next(e)) } catch (t) { o(t) } }

        function c(e) { try { u(r.throw(e)) } catch (t) { o(t) } }

        function u(e) { var t;
            e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) { e(t) }))).then(i, c) }
        u((r = r.apply(e, t || [])).next()) })) }

function n(e, t) { var n, r, a, o, i = { label: 0, sent: function() { if (1 & a[0]) throw a[1]; return a[1] }, trys: [], ops: [] }; return o = { next: c(0), throw: c(1), return: c(2) }, "function" == typeof Symbol && (o[Symbol.iterator] = function() { return this }), o;

    function c(o) { return function(c) { return function(o) { if (n) throw new TypeError("Generator is already executing."); for (; i;) try { if (n = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a; switch (r = 0, a && (o = [2 & o[0], a.value]), o[0]) {
                        case 0:
                        case 1:
                            a = o; break;
                        case 4:
                            return i.label++, { value: o[1], done: !1 };
                        case 5:
                            i.label++, r = o[1], o = [0]; continue;
                        case 7:
                            o = i.ops.pop(), i.trys.pop(); continue;
                        default:
                            if (!(a = i.trys, (a = a.length > 0 && a[a.length - 1]) || 6 !== o[0] && 2 !== o[0])) { i = 0; continue } if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) { i.label = o[1]; break } if (6 === o[0] && i.label < a[1]) { i.label = a[1], a = o; break } if (a && i.label < a[2]) { i.label = a[2], i.ops.push(o); break }
                            a[2] && i.ops.pop(), i.trys.pop(); continue }
                    o = t.call(e, i) } catch (c) { o = [6, c], r = 0 } finally { n = a = 0 }
                if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 } }([o, c]) } } }

function r() { for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length; var r = Array(e),
        a = 0; for (t = 0; t < n; t++)
        for (var o = arguments[t], i = 0, c = o.length; i < c; i++, a++) r[a] = o[i]; return r }

function a(e, t) { return new Promise((function(n) { return setTimeout(n, e, t) })) }

function o(e, t) { try { var n = e();
        (r = n) && "function" == typeof r.then ? n.then((function(e) { return t(!0, e) }), (function(e) { return t(!1, e) })) : t(!0, n) } catch (a) { t(!1, a) } var r }

function i(e, r, o) { return void 0 === o && (o = 16), t(this, void 0, void 0, (function() { var t, i, c; return n(this, (function(n) { switch (n.label) {
                case 0:
                    t = Date.now(), i = 0, n.label = 1;
                case 1:
                    return i < e.length ? (r(e[i], i), (c = Date.now()) >= t + o ? (t = c, [4, a(0)]) : [3, 3]) : [3, 4];
                case 2:
                    n.sent(), n.label = 3;
                case 3:
                    return ++i, [3, 1];
                case 4:
                    return [2] } })) })) }

function c(e, t) { e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]]; var n = [0, 0, 0, 0]; return n[3] += e[3] + t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] + t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] + t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] + t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]] }

function u(e, t) { e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]]; var n = [0, 0, 0, 0]; return n[3] += e[3] * t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] * t[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += e[3] * t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] * t[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[2] * t[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[3] * t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]] }

function s(e, t) { return 32 === (t %= 64) ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t]) }

function l(e, t) { return 0 === (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0] }

function d(e, t) { return [e[0] ^ t[0], e[1] ^ t[1]] }

function f(e) { return e = d(e, [0, e[0] >>> 1]), e = d(e = u(e, [4283543511, 3981806797]), [0, e[0] >>> 1]), e = d(e = u(e, [3301882366, 444984403]), [0, e[0] >>> 1]) }

function h(e, t) { t = t || 0; var n, r = (e = e || "").length % 16,
        a = e.length - r,
        o = [0, t],
        i = [0, t],
        h = [0, 0],
        v = [0, 0],
        p = [2277735313, 289559509],
        m = [1291169091, 658871167]; for (n = 0; n < a; n += 16) h = [255 & e.charCodeAt(n + 4) | (255 & e.charCodeAt(n + 5)) << 8 | (255 & e.charCodeAt(n + 6)) << 16 | (255 & e.charCodeAt(n + 7)) << 24, 255 & e.charCodeAt(n) | (255 & e.charCodeAt(n + 1)) << 8 | (255 & e.charCodeAt(n + 2)) << 16 | (255 & e.charCodeAt(n + 3)) << 24], v = [255 & e.charCodeAt(n + 12) | (255 & e.charCodeAt(n + 13)) << 8 | (255 & e.charCodeAt(n + 14)) << 16 | (255 & e.charCodeAt(n + 15)) << 24, 255 & e.charCodeAt(n + 8) | (255 & e.charCodeAt(n + 9)) << 8 | (255 & e.charCodeAt(n + 10)) << 16 | (255 & e.charCodeAt(n + 11)) << 24], h = s(h = u(h, p), 31), o = c(o = s(o = d(o, h = u(h, m)), 27), i), o = c(u(o, [0, 5]), [0, 1390208809]), v = s(v = u(v, m), 33), i = c(i = s(i = d(i, v = u(v, p)), 31), o), i = c(u(i, [0, 5]), [0, 944331445]); switch (h = [0, 0], v = [0, 0], r) {
        case 15:
            v = d(v, l([0, e.charCodeAt(n + 14)], 48));
        case 14:
            v = d(v, l([0, e.charCodeAt(n + 13)], 40));
        case 13:
            v = d(v, l([0, e.charCodeAt(n + 12)], 32));
        case 12:
            v = d(v, l([0, e.charCodeAt(n + 11)], 24));
        case 11:
            v = d(v, l([0, e.charCodeAt(n + 10)], 16));
        case 10:
            v = d(v, l([0, e.charCodeAt(n + 9)], 8));
        case 9:
            v = u(v = d(v, [0, e.charCodeAt(n + 8)]), m), i = d(i, v = u(v = s(v, 33), p));
        case 8:
            h = d(h, l([0, e.charCodeAt(n + 7)], 56));
        case 7:
            h = d(h, l([0, e.charCodeAt(n + 6)], 48));
        case 6:
            h = d(h, l([0, e.charCodeAt(n + 5)], 40));
        case 5:
            h = d(h, l([0, e.charCodeAt(n + 4)], 32));
        case 4:
            h = d(h, l([0, e.charCodeAt(n + 3)], 24));
        case 3:
            h = d(h, l([0, e.charCodeAt(n + 2)], 16));
        case 2:
            h = d(h, l([0, e.charCodeAt(n + 1)], 8));
        case 1:
            h = u(h = d(h, [0, e.charCodeAt(n)]), p), o = d(o, h = u(h = s(h, 31), m)) } return o = c(o = d(o, [0, e.length]), i = d(i, [0, e.length])), i = c(i, o), o = c(o = f(o), i = f(i)), i = c(i, o), ("00000000" + (o[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[1] >>> 0).toString(16)).slice(-8) }

function v(e) { return parseInt(e) }

function p(e) { return parseFloat(e) }

function m(e, t) { return "number" == typeof e && isNaN(e) ? t : e }

function g(e) { return e.reduce((function(e, t) { return e + (t ? 1 : 0) }), 0) }

function b(e, t) { if (void 0 === t && (t = 1), Math.abs(t) >= 1) return Math.round(e / t) * t; var n = 1 / t; return Math.round(e * n) / n }

function w(e) { return e && "object" == typeof e && "message" in e ? e : { message: e } }

function y(e, r, c) { var u = Object.keys(e).filter((function(e) { return ! function(e, t) { for (var n = 0, r = e.length; n < r; ++n)
                    if (e[n] === t) return !0;
                return !1 }(c, e) })),
        s = Array(u.length); return i(u, (function(t, n) { s[n] = function(e, t) { var n = function(e) { return "function" != typeof e },
                    r = new Promise((function(r) { var a = Date.now();
                        o(e.bind(null, t), (function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; var i = Date.now() - a; if (!e[0]) return r((function() { return { error: w(e[1]), duration: i } })); var c = e[1]; if (n(c)) return r((function() { return { value: c, duration: i } }));
                            r((function() { return new Promise((function(e) { var t = Date.now();
                                    o(c, (function() { for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r]; var a = i + Date.now() - t; if (!n[0]) return e({ error: w(n[1]), duration: a });
                                        e({ value: n[1], duration: a }) })) })) })) })) })); return function() { return r.then((function(e) { return e() })) } }(e[t], r) })),
        function() { return t(this, void 0, void 0, (function() { var e, t, r, o, c, l; return n(this, (function(d) { switch (d.label) {
                        case 0:
                            for (e = {}, t = 0, r = u; t < r.length; t++) o = r[t], e[o] = void 0;
                            c = Array(u.length), l = function() { var t; return n(this, (function(n) { switch (n.label) {
                                        case 0:
                                            return t = !0, [4, i(u, (function(n, r) { c[r] || (s[r] ? c[r] = s[r]().then((function(t) { return e[n] = t })) : t = !1) }))];
                                        case 1:
                                            return n.sent(), t ? [2, "break"] : [4, a(1)];
                                        case 2:
                                            return n.sent(), [2] } })) }, d.label = 1;
                        case 1:
                            return [5, l()];
                        case 2:
                            if ("break" === d.sent()) return [3, 4];
                            d.label = 3;
                        case 3:
                            return [3, 1];
                        case 4:
                            return [4, Promise.all(c)];
                        case 5:
                            return d.sent(), [2, e] } })) })) } }

function k() { var e = window,
        t = navigator; return g(["MSCSSMatrix" in e, "msSetImmediate" in e, "msIndexedDB" in e, "msMaxTouchPoints" in t, "msPointerEnabled" in t]) >= 4 }

function C() { var e = window,
        t = navigator; return g(["msWriteProfilerMark" in e, "MSStream" in e, "msLaunchUri" in t, "msSaveBlob" in t]) >= 3 && !k() }

function A() { var e = window,
        t = navigator; return g(["webkitPersistentStorage" in t, "webkitTemporaryStorage" in t, 0 === t.vendor.indexOf("Google"), "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e]) >= 5 }

function x() { var e = window,
        t = navigator; return g(["ApplePayError" in e, "CSSPrimitiveValue" in e, "Counter" in e, 0 === t.vendor.indexOf("Apple"), "getStorageUpdates" in t, "WebKitMediaKeys" in e]) >= 4 }

function S() { var e = window; return g(["safari" in e, !("DeviceMotionEvent" in e), !("ongestureend" in e), !("standalone" in navigator)]) >= 3 }

function M() { var e, t, n = window; return g(["buildID" in navigator, "MozAppearance" in (null !== (t = null === (e = document.documentElement) || void 0 === e ? void 0 : e.style) && void 0 !== t ? t : {}), "onmozfullscreenchange" in n, "mozInnerScreenX" in n, "CSSMozDocumentRule" in n, "CanvasCaptureMediaStream" in n]) >= 4 }

function P() { var e = document; return e.fullscreenElement || e.msFullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || null }

function _() { var e = A(),
        t = M(); if (!e && !t) return !1; var n = window; return g(["onorientationchange" in n, "orientation" in n, e && !("SharedWorker" in n), t && /android/i.test(navigator.appVersion)]) >= 2 }

function T(e) { var t = new Error(e); return t.name = e, t }

function E(e, r, o) { var i, c, u; return void 0 === o && (o = 50), t(this, void 0, void 0, (function() { var t, s; return n(this, (function(n) { switch (n.label) {
                case 0:
                    t = document, n.label = 1;
                case 1:
                    return t.body ? [3, 3] : [4, a(o)];
                case 2:
                    return n.sent(), [3, 1];
                case 3:
                    s = t.createElement("iframe"), n.label = 4;
                case 4:
                    return n.trys.push([4, , 10, 11]), [4, new Promise((function(e, n) { var a = !1,
                            o = function() { a = !0, e() };
                        s.onload = o, s.onerror = function(e) { a = !0, n(e) }; var i = s.style;
                        i.setProperty("display", "block", "important"), i.position = "absolute", i.top = "0", i.left = "0", i.visibility = "hidden", r && "srcdoc" in s ? s.srcdoc = r : s.src = "about:blank", t.body.appendChild(s); var c = function() { var e, t;
                            a || ("complete" === (null === (t = null === (e = s.contentWindow) || void 0 === e ? void 0 : e.document) || void 0 === t ? void 0 : t.readyState) ? o() : setTimeout(c, 10)) };
                        c() }))];
                case 5:
                    n.sent(), n.label = 6;
                case 6:
                    return (null === (c = null === (i = s.contentWindow) || void 0 === i ? void 0 : i.document) || void 0 === c ? void 0 : c.body) ? [3, 8] : [4, a(o)];
                case 7:
                    return n.sent(), [3, 6];
                case 8:
                    return [4, e(s, s.contentWindow)];
                case 9:
                    return [2, n.sent()];
                case 10:
                    return null === (u = s.parentNode) || void 0 === u || u.removeChild(s), [7];
                case 11:
                    return [2] } })) })) }

function z(e) { for (var t = function(e) { for (var t, n, r = "Unexpected syntax '" + e + "'", a = /^\s*([a-z-]*)(.*)$/i.exec(e), o = a[1] || void 0, i = {}, c = /([.:#][\w-]+|\[.+?\])/gi, u = function(e, t) { i[e] = i[e] || [], i[e].push(t) };;) { var s = c.exec(a[2]); if (!s) break; var l = s[0]; switch (l[0]) {
                    case ".":
                        u("class", l.slice(1)); break;
                    case "#":
                        u("id", l.slice(1)); break;
                    case "[":
                        var d = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(l); if (!d) throw new Error(r);
                        u(d[1], null !== (n = null !== (t = d[4]) && void 0 !== t ? t : d[5]) && void 0 !== n ? n : ""); break;
                    default:
                        throw new Error(r) } } return [o, i] }(e), n = t[0], r = t[1], a = document.createElement(null != n ? n : "div"), o = 0, i = Object.keys(r); o < i.length; o++) { var c = i[o],
            u = r[c].join(" "); "style" === c ? D(a.style, u) : a.setAttribute(c, u) } return a }

function D(e, t) { for (var n = 0, r = t.split(";"); n < r.length; n++) { var a = r[n],
            o = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(a); if (o) { var i = o[1],
                c = o[2],
                u = o[4];
            e.setProperty(i, c, u || "") } } }
var L = ["monospace", "sans-serif", "serif"],
    I = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"];

function B(e) { return e.rect(0, 0, 10, 10), e.rect(2, 2, 6, 6), !e.isPointInPath(5, 5, "evenodd") }

function O(e, t) { e.width = 240, e.height = 60, t.textBaseline = "alphabetic", t.fillStyle = "#f60", t.fillRect(100, 1, 62, 20), t.fillStyle = "#069", t.font = '11pt "Times New Roman"'; var n = "Cwm fjordbank gly " + String.fromCharCode(55357, 56835); return t.fillText(n, 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.2)", t.font = "18pt Arial", t.fillText(n, 4, 45), R(e) }

function F(e, t) { e.width = 122, e.height = 110, t.globalCompositeOperation = "multiply"; for (var n = 0, r = [
            ["#f2f", 40, 40],
            ["#2ff", 80, 40],
            ["#ff2", 60, 80]
        ]; n < r.length; n++) { var a = r[n],
            o = a[0],
            i = a[1],
            c = a[2];
        t.fillStyle = o, t.beginPath(), t.arc(i, c, 40, 0, 2 * Math.PI, !0), t.closePath(), t.fill() } return t.fillStyle = "#f9c", t.arc(60, 60, 60, 0, 2 * Math.PI, !0), t.arc(60, 60, 20, 0, 2 * Math.PI, !0), t.fill("evenodd"), R(e) }

function R(e) { return e.toDataURL() }
var G, j;

function U() { var e = this; return function() { if (void 0 === j) { var e = function() { var t = N();
                    W(t) ? j = setTimeout(e, 2500) : (G = t, j = void 0) };
                e() } }(),
        function() { return t(e, void 0, void 0, (function() { var e; return n(this, (function(t) { switch (t.label) {
                        case 0:
                            return W(e = N()) ? G ? [2, r(G)] : P() ? [4, (n = document, (n.exitFullscreen || n.msExitFullscreen || n.mozCancelFullScreen || n.webkitExitFullscreen).call(n))] : [3, 2] : [3, 2];
                        case 1:
                            t.sent(), e = N(), t.label = 2;
                        case 2:
                            return W(e) || (G = e), [2, e] } var n })) })) } }

function N() { var e = screen; return [m(p(e.availTop), null), m(p(e.width) - p(e.availWidth) - m(p(e.availLeft), 0), null), m(p(e.height) - p(e.availHeight) - m(p(e.availTop), 0), null), m(p(e.availLeft), null)] }

function W(e) { for (var t = 0; t < 4; ++t)
        if (e[t]) return !1;
    return !0 }
var q = { abpIndo: ["#Iklan-Melayang", "#Kolom-Iklan-728", "#SidebarIklan-wrapper", 'a[title="7naga poker" i]', '[title="ALIENBOLA" i]'], abpvn: ["#quangcaomb", ".iosAdsiosAds-layout", ".quangcao", '[href^="https://r88.vn/"]', '[href^="https://zbet.vn/"]'], adBlockFinland: [".mainostila", ".sponsorit", ".ylamainos", 'a[href*="/clickthrgh.asp?"]', 'a[href^="https://app.readpeak.com/ads"]'], adBlockPersian: ["#navbar_notice_50", 'a[href^="http://g1.v.fwmrm.net/ad/"]', ".kadr", 'TABLE[width="140px"]', "#divAgahi"], adBlockWarningRemoval: ["#adblock-honeypot", ".adblocker-root", ".wp_adblock_detect"], adGuardAnnoyances: ['amp-embed[type="zen"]', ".hs-sosyal", "#cookieconsentdiv", 'div[class^="app_gdpr"]', ".as-oil"], adGuardBase: ["#ad-after", "#ad-p3", ".BetterJsPopOverlay", "#ad_300X250", "#bannerfloat22"], adGuardChinese: ['a[href*=".ttz5.cn"]', 'a[href*=".yabovip2027.com/"]', ".tm3all2h4b", ".cc5278_banner_ad"], adGuardFrench: [".zonepub", '[class*="_adLeaderboard"]', '[id^="block-xiti_oas-"]', 'a[href^="http://ptapjmp.com/"]', 'a[href^="https://go.alvexo.com/"]'], adGuardGerman: [".banneritemwerbung_head_1", ".boxstartwerbung", ".werbung3", 'a[href^="http://www.eis.de/index.phtml?refid="]', 'a[href^="https://www.tipico.com/?affiliateId="]'], adGuardJapanese: ["#kauli_yad_1", "#ad-giftext", "#adsSPRBlock", 'a[href^="http://ad2.trafficgate.net/"]', 'a[href^="http://www.rssad.jp/"]'], adGuardMobile: ["amp-auto-ads", "#mgid_iframe", ".amp_ad", 'amp-embed[type="24smi"]', "#mgid_iframe1"], adGuardRussian: ['a[href^="https://ya-distrib.ru/r/"]', 'a[href^="https://ad.letmeads.com/"]', ".reclama", 'div[id^="smi2adblock"]', 'div[id^="AdFox_banner_"]'], adGuardSocial: ['a[href^="//www.stumbleupon.com/submit?url="]', 'a[href^="//telegram.me/share/url?"]', ".etsy-tweet", "#inlineShare", ".popup-social"], adGuardSpanishPortuguese: ["#barraPublicidade", "#Publicidade", "#publiEspecial", "#queTooltip", '[href^="http://ads.glispa.com/"]'], adGuardTrackingProtection: ['amp-embed[type="taboola"]', "#qoo-counter", 'a[href^="http://click.hotlog.ru/"]', 'a[href^="http://hitcounter.ru/top/stat.php"]', 'a[href^="http://top.mail.ru/jump"]'], adGuardTurkish: ["#backkapat", "#reklami", 'a[href^="http://adserv.ontek.com.tr/"]', 'a[href^="http://izlenzi.com/campaign/"]', 'a[href^="http://www.installads.net/"]'], bulgarian: ["td#freenet_table_ads", "#adbody", "#ea_intext_div", ".lapni-pop-over", "#xenium_hot_offers"], easyList: ["#AD_banner_bottom", "#Ads_google_02", "#N-ad-article-rightRail-1", "#ad-fullbanner2", "#ad-zone-2"], easyListChina: ['a[href*=".wensixuetang.com/"]', 'A[href*="/hth107.com/"]', '.appguide-wrap[onclick*="bcebos.com"]', ".frontpageAdvM", "#taotaole"], easyListCookie: ["#adtoniq-msg-bar", "#CoockiesPage", "#CookieModal_cookiemodal", "#DO_CC_PANEL", "#ShowCookie"], easyListCzechSlovak: ["#onlajny-stickers", "#reklamni-box", ".reklama-megaboard", ".sklik", '[id^="sklikReklama"]'], easyListDutch: ["#advertentie", "#vipAdmarktBannerBlock", ".adstekst", 'a[href^="https://xltube.nl/click/"]', "#semilo-lrectangle"], easyListGermany: ['a[href^="http://www.hw-area.com/?dp="]', 'a[href^="https://ads.sunmaker.com/tracking.php?"]', ".werbung-skyscraper2", ".bannergroup_werbung", ".ads_rechts"], easyListItaly: [".box_adv_annunci", ".sb-box-pubbliredazionale", 'a[href^="http://affiliazioniads.snai.it/"]', 'a[href^="https://adserver.html.it/"]', 'a[href^="https://affiliazioniads.snai.it/"]'], easyListLithuania: [".reklamos_tarpas", ".reklamos_nuorodos", 'img[alt="Reklaminis skydelis"]', 'img[alt="Dedikuoti.lt serveriai"]', 'img[alt="Hostingas Serveriai.lt"]'], estonian: ['A[href*="http://pay4results24.eu"]'], fanboyAnnoyances: ["#feedback-tab", "#taboola-below-article", ".feedburnerFeedBlock", ".widget-feedburner-counter", '[title="Subscribe to our blog"]'], fanboyAntiFacebook: [".util-bar-module-firefly-visible"], fanboyEnhancedTrackers: [".open.pushModal", "#issuem-leaky-paywall-articles-zero-remaining-nag", "#sovrn_container", 'div[class$="-hide"][zoompage-fontsize][style="display: block;"]', ".BlockNag__Card"], fanboySocial: [".td-tags-and-social-wrapper-box", ".twitterContainer", ".youtube-social", 'a[title^="Like us on Facebook"]', 'img[alt^="Share on Digg"]'], frellwitSwedish: ['a[href*="casinopro.se"][target="_blank"]', 'a[href*="doktor-se.onelink.me"]', "article.category-samarbete", "div.holidAds", "ul.adsmodern"], greekAdBlock: ['A[href*="adman.otenet.gr/click?"]', 'A[href*="http://axiabanners.exodus.gr/"]', 'A[href*="http://interactive.forthnet.gr/click?"]', "DIV.agores300", "TABLE.advright"], hungarian: ['A[href*="ad.eval.hu"]', 'A[href*="ad.netmedia.hu"]', 'A[href*="daserver.ultraweb.hu"]', "#cemp_doboz", ".optimonk-iframe-container"], iDontCareAboutCookies: ['.alert-info[data-block-track*="CookieNotice"]', ".ModuleTemplateCookieIndicator", ".o--cookies--container", ".cookie-msg-info-container", "#cookies-policy-sticky"], icelandicAbp: ['A[href^="/framework/resources/forms/ads.aspx"]'], latvian: ['a[href="http://www.salidzini.lv/"][style="display: block; width: 120px; height: 40px; overflow: hidden; position: relative;"]', 'a[href="http://www.salidzini.lv/"][style="display: block; width: 88px; height: 31px; overflow: hidden; position: relative;"]'], listKr: ['a[href*="//kingtoon.slnk.kr"]', 'a[href*="//playdsb.com/kr"]', "div.logly-lift-adz", 'div[data-widget_id="ml6EJ074"]', "ins.daum_ddn_area"], listeAr: [".geminiLB1Ad", ".right-and-left-sponsers", 'a[href*=".aflam.info"]', 'a[href*="booraq.org"]', 'a[href*="dubizzle.com/ar/?utm_source="]'], listeFr: ['a[href^="http://promo.vador.com/"]', "#adcontainer_recherche", 'a[href*="weborama.fr/fcgi-bin/"]', ".site-pub-interstitiel", 'div[id^="crt-"][data-criteo-id]'], officialPolish: ["#ceneo-placeholder-ceneo-12", '[href^="https://aff.sendhub.pl/"]', 'a[href^="http://advmanager.techfun.pl/redirect/"]', 'a[href^="http://www.trizer.pl/?utm_source"]', "div#skapiec_ad"], ro: ['a[href^="//afftrk.altex.ro/Counter/Click"]', 'a[href^="/magazin/"]', 'a[href^="https://blackfridaysales.ro/trk/shop/"]', 'a[href^="https://event.2performant.com/events/click"]', 'a[href^="https://l.profitshare.ro/"]'], ruAd: ['a[href*="//febrare.ru/"]', 'a[href*="//utimg.ru/"]', 'a[href*="://chikidiki.ru"]', "#pgeldiz", ".yandex-rtb-block"], thaiAds: ["a[href*=macau-uta-popup]", "#ads-google-middle_rectangle-group", ".ads300s", ".bumq", ".img-kosana"], webAnnoyancesUltralist: ["#mod-social-share-2", "#social-tools", ".ctpl-fullbanner", ".zergnet-recommend", ".yt.btn-link.btn-md.btn"] };

function H(e) { var r; return t(this, void 0, void 0, (function() { var t, o, i, c, u, s, l; return n(this, (function(n) { switch (n.label) {
                case 0:
                    for (t = document, o = t.createElement("div"), i = new Array(e.length), c = {}, J(o), l = 0; l < e.length; ++l) u = z(e[l]), J(s = t.createElement("div")), s.appendChild(u), o.appendChild(s), i[l] = u;
                    n.label = 1;
                case 1:
                    return t.body ? [3, 3] : [4, a(50)];
                case 2:
                    return n.sent(), [3, 1];
                case 3:
                    t.body.appendChild(o); try { for (l = 0; l < e.length; ++l) i[l].offsetParent || (c[e[l]] = !0) } finally { null === (r = o.parentNode) || void 0 === r || r.removeChild(o) } return [2, c] } })) })) }

function J(e) { e.style.setProperty("display", "block", "important") }

function $(e) { return matchMedia("(inverted-colors: " + e + ")").matches }

function V(e) { return matchMedia("(forced-colors: " + e + ")").matches }

function K(e) { return matchMedia("(prefers-contrast: " + e + ")").matches }

function X(e) { return matchMedia("(prefers-reduced-motion: " + e + ")").matches }

function Y(e) { return matchMedia("(dynamic-range: " + e + ")").matches }
var Z = Math,
    Q = function() { return 0 };
var ee = { default: [], apple: [{ font: "-apple-system-body" }], serif: [{ fontFamily: "serif" }], sans: [{ fontFamily: "sans-serif" }], mono: [{ fontFamily: "monospace" }], min: [{ fontSize: "1px" }], system: [{ fontFamily: "system-ui" }] };
var te = { fonts: function() { return E((function(e, t) { var n = t.document,
                r = n.body;
            r.style.fontSize = "48px"; var a = n.createElement("div"),
                o = {},
                i = {},
                c = function(e) { var t = n.createElement("span"),
                        r = t.style; return r.position = "absolute", r.top = "0", r.left = "0", r.fontFamily = e, t.textContent = "mmMwWLliI0O&1", a.appendChild(t), t },
                u = L.map(c),
                s = function() { for (var e = {}, t = function(t) { e[t] = L.map((function(e) { return function(e, t) { return c("'" + e + "'," + t) }(t, e) })) }, n = 0, r = I; n < r.length; n++) { t(r[n]) } return e }();
            r.appendChild(a); for (var l = 0; l < L.length; l++) o[L[l]] = u[l].offsetWidth, i[L[l]] = u[l].offsetHeight; return I.filter((function(e) { return t = s[e], L.some((function(e, n) { return t[n].offsetWidth !== o[e] || t[n].offsetHeight !== i[e] })); var t })) })) }, domBlockers: function(e) { var r = (void 0 === e ? {} : e).debug; return t(this, void 0, void 0, (function() { var e, t, a, o; return n(this, (function(n) { switch (n.label) {
                    case 0:
                        return x() || _() ? (e = Object.keys(q), [4, H((o = []).concat.apply(o, e.map((function(e) { return q[e] }))))]) : [2, void 0];
                    case 1:
                        return t = n.sent(), r && function(e) { for (var t = "DOM blockers debug:\n```", n = 0, r = Object.keys(q); n < r.length; n++) { var a = r[n];
                                t += "\n" + a + ":"; for (var o = 0, i = q[a]; o < i.length; o++) { var c = i[o];
                                    t += "\n  " + c + " " + (e[c] ? "🚫" : "➡️") } }
                            console.log(t + "\n```") }(t), (a = e.filter((function(e) { var n = q[e]; return g(n.map((function(e) { return t[e] }))) > .6 * n.length }))).sort(), [2, a] } })) })) }, fontPreferences: function() { return function(e, t) { void 0 === t && (t = 4e3); return E((function(n, a) { var o = a.document,
                    i = o.body,
                    c = i.style;
                c.width = t + "px", c.webkitTextSizeAdjust = c.textSizeAdjust = "none", A() ? i.style.zoom = "" + 1 / a.devicePixelRatio : x() && (i.style.zoom = "reset"); var u = o.createElement("div"); return u.textContent = r(Array(t / 20 << 0)).map((function() { return "word" })).join(" "), i.appendChild(u), e(o, i) }), '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">') }((function(e, t) { for (var n = {}, r = {}, a = 0, o = Object.keys(ee); a < o.length; a++) { var i = o[a],
                    c = ee[i],
                    u = c[0],
                    s = void 0 === u ? {} : u,
                    l = c[1],
                    d = void 0 === l ? "mmMwWLliI0fiflO&1" : l,
                    f = e.createElement("span");
                f.textContent = d, f.style.whiteSpace = "nowrap"; for (var h = 0, v = Object.keys(s); h < v.length; h++) { var p = v[h],
                        m = s[p];
                    void 0 !== m && (f.style[p] = m) }
                n[i] = f, t.appendChild(e.createElement("br")), t.appendChild(f) } for (var g = 0, b = Object.keys(ee); g < b.length; g++) { r[i = b[g]] = n[i].getBoundingClientRect().width } return r })) }, audio: function() { var e = window,
            t = e.OfflineAudioContext || e.webkitOfflineAudioContext; if (!t) return -2; if (x() && !S() && ! function() { var e = window; return g(["DOMRectList" in e, "RTCPeerConnectionIceEvent" in e, "SVGGeometryElement" in e, "ontransitioncancel" in e]) >= 3 }()) return -1; var n = new t(1, 5e3, 44100),
            r = n.createOscillator();
        r.type = "triangle", r.frequency.value = 1e4; var a = n.createDynamicsCompressor();
        a.threshold.value = -50, a.knee.value = 40, a.ratio.value = 12, a.attack.value = 0, a.release.value = .25, r.connect(a), a.connect(n.destination), r.start(0); var o = function(e) { var t = 3,
                    n = 500,
                    r = 500,
                    a = 5e3,
                    o = function() {}; return [new Promise((function(i, c) { var u = !1,
                        s = 0,
                        l = 0;
                    e.oncomplete = function(e) { return i(e.renderedBuffer) }; var d = function() { setTimeout((function() { return c(T("timeout")) }), Math.min(r, l + a - Date.now())) },
                        f = function() { try { switch (e.startRendering(), e.state) {
                                    case "running":
                                        l = Date.now(), u && d(); break;
                                    case "suspended":
                                        document.hidden || s++, u && s >= t ? c(T("suspended")) : setTimeout(f, n) } } catch (r) { c(r) } };
                    f(), o = function() { u || (u = !0, l > 0 && d()) } })), o] }(n),
            i = o[0],
            c = o[1],
            u = i.then((function(e) { return function(e) { for (var t = 0, n = 0; n < e.length; ++n) t += Math.abs(e[n]); return t }(e.getChannelData(0).subarray(4500)) }), (function(e) { if ("timeout" === e.name || "suspended" === e.name) return -3; throw e })); return u.catch((function() {})),
            function() { return c(), u } }, screenFrame: function() { var e = this,
            r = U(); return function() { return t(e, void 0, void 0, (function() { var e, t; return n(this, (function(n) { switch (n.label) {
                        case 0:
                            return [4, r()];
                        case 1:
                            return e = n.sent(), [2, [(t = function(e) { return null === e ? null : b(e, 10) })(e[0]), t(e[1]), t(e[2]), t(e[3])]] } })) })) } }, osCpu: function() { return navigator.oscpu }, languages: function() { var e, t = navigator,
            n = [],
            r = t.language || t.userLanguage || t.browserLanguage || t.systemLanguage; if (void 0 !== r && n.push([r]), Array.isArray(t.languages)) A() && g([!("MediaSettingsRange" in (e = window)), "RTCEncodedAudioFrame" in e, "" + e.Intl == "[object Intl]", "" + e.Reflect == "[object Reflect]"]) >= 3 || n.push(t.languages);
        else if ("string" == typeof t.languages) { var a = t.languages;
            a && n.push(a.split(",")) } return n }, colorDepth: function() { return window.screen.colorDepth }, deviceMemory: function() { return m(p(navigator.deviceMemory), void 0) }, screenResolution: function() { var e = screen,
            t = function(e) { return m(v(e), null) },
            n = [t(e.width), t(e.height)]; return n.sort().reverse(), n }, hardwareConcurrency: function() { return m(v(navigator.hardwareConcurrency), void 0) }, timezone: function() { var e, t = null === (e = window.Intl) || void 0 === e ? void 0 : e.DateTimeFormat; if (t) { var n = (new t).resolvedOptions().timeZone; if (n) return n } var r, a = (r = (new Date).getFullYear(), -Math.max(p(new Date(r, 0, 1).getTimezoneOffset()), p(new Date(r, 6, 1).getTimezoneOffset()))); return "UTC" + (a >= 0 ? "+" : "") + Math.abs(a) }, sessionStorage: function() { try { return !!window.sessionStorage } catch (e) { return !0 } }, localStorage: function() { try { return !!window.localStorage } catch (e) { return !0 } }, indexedDB: function() { if (!k() && !C()) try { return !!window.indexedDB } catch (e) { return !0 } }, openDatabase: function() { return !!window.openDatabase }, cpuClass: function() { return navigator.cpuClass }, platform: function() { var e = navigator.platform; return "MacIntel" === e && x() && !S() ? function() { if ("iPad" === navigator.platform) return !0; var e = screen,
                t = e.width / e.height; return g(["MediaSource" in window, !!Element.prototype.webkitRequestFullscreen, t > .65 && t < 1.53]) >= 2 }() ? "iPad" : "iPhone" : e }, plugins: function() { var e = navigator.plugins; if (e) { for (var t = [], n = 0; n < e.length; ++n) { var r = e[n]; if (r) { for (var a = [], o = 0; o < r.length; ++o) { var i = r[o];
                        a.push({ type: i.type, suffixes: i.suffixes }) }
                    t.push({ name: r.name, description: r.description, mimeTypes: a }) } } return t } }, canvas: function() { var e = function() { var e = document.createElement("canvas"); return e.width = 1, e.height = 1, [e, e.getContext("2d")] }(),
            t = e[0],
            n = e[1]; return function(e, t) { return !(!t || !e.toDataURL) }(t, n) ? { winding: B(n), geometry: F(t, n), text: O(t, n) } : { winding: !1, geometry: "", text: "" } }, touchSupport: function() { var e, t = navigator,
            n = 0;
        void 0 !== t.maxTouchPoints ? n = v(t.maxTouchPoints) : void 0 !== t.msMaxTouchPoints && (n = t.msMaxTouchPoints); try { document.createEvent("TouchEvent"), e = !0 } catch (r) { e = !1 } return { maxTouchPoints: n, touchEvent: e, touchStart: "ontouchstart" in window } }, vendor: function() { return navigator.vendor || "" }, vendorFlavors: function() { for (var e = [], t = 0, n = ["chrome", "safari", "__crWeb", "__gCrWeb", "yandex", "__yb", "__ybro", "__firefox__", "__edgeTrackingPreventionStatistics", "webkit", "oprt", "samsungAr", "ucweb", "UCShellJava", "puffinDevice"]; t < n.length; t++) { var r = n[t],
                a = window[r];
            a && "object" == typeof a && e.push(r) } return e.sort() }, cookiesEnabled: function() { var e = document; try { e.cookie = "cookietest=1; SameSite=Strict;"; var t = -1 !== e.cookie.indexOf("cookietest="); return e.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", t } catch (n) { return !1 } }, colorGamut: function() { for (var e = 0, t = ["rec2020", "p3", "srgb"]; e < t.length; e++) { var n = t[e]; if (matchMedia("(color-gamut: " + n + ")").matches) return n } }, invertedColors: function() { return !!$("inverted") || !$("none") && void 0 }, forcedColors: function() { return !!V("active") || !V("none") && void 0 }, monochrome: function() { if (matchMedia("(min-monochrome: 0)").matches) { for (var e = 0; e <= 100; ++e)
                if (matchMedia("(max-monochrome: " + e + ")").matches) return e;
            throw new Error("Too high value") } }, contrast: function() { return K("no-preference") ? 0 : K("high") || K("more") ? 1 : K("low") || K("less") ? -1 : K("forced") ? 10 : void 0 }, reducedMotion: function() { return !!X("reduce") || !X("no-preference") && void 0 }, hdr: function() { return !!Y("high") || !Y("standard") && void 0 }, math: function() { var e, t = Z.acos || Q,
            n = Z.acosh || Q,
            r = Z.asin || Q,
            a = Z.asinh || Q,
            o = Z.atanh || Q,
            i = Z.atan || Q,
            c = Z.sin || Q,
            u = Z.sinh || Q,
            s = Z.cos || Q,
            l = Z.cosh || Q,
            d = Z.tan || Q,
            f = Z.tanh || Q,
            h = Z.exp || Q,
            v = Z.expm1 || Q,
            p = Z.log1p || Q; return { acos: t(.12312423423423424), acosh: n(1e308), acoshPf: (e = 1e154, Z.log(e + Z.sqrt(e * e - 1))), asin: r(.12312423423423424), asinh: a(1), asinhPf: function(e) { return Z.log(e + Z.sqrt(e * e + 1)) }(1), atanh: o(.5), atanhPf: function(e) { return Z.log((1 + e) / (1 - e)) / 2 }(.5), atan: i(.5), sin: c(-1e300), sinh: u(1), sinhPf: function(e) { return Z.exp(e) - 1 / Z.exp(e) / 2 }(1), cos: s(10.000000000123), cosh: l(1), coshPf: function(e) { return (Z.exp(e) + 1 / Z.exp(e)) / 2 }(1), tan: d(-1e300), tanh: f(1), tanhPf: function(e) { return (Z.exp(2 * e) - 1) / (Z.exp(2 * e) + 1) }(1), exp: h(1), expm1: v(1), expm1Pf: function(e) { return Z.exp(e) - 1 }(1), log1p: p(10), log1pPf: function(e) { return Z.log(1 + e) }(10), powPI: function(e) { return Z.pow(Z.PI, e) }(-100) } } };

function ne(e) { var t = function(e) { if (_()) return .4; if (x()) return S() ? .5 : .3; var t = e.platform.value || ""; if (/^Win/.test(t)) return .6; if (/^Mac/.test(t)) return .5; return .7 }(e),
        n = function(e) { return b(.99 + .01 * e, 1e-4) }(t); return { score: t, comment: "$ if upgrade to Pro: https://fpjs.dev/pro".replace(/\$/g, "" + n) } }

function re(t) { return JSON.stringify(t, (function(t, n) { return n instanceof Error ? e({ name: (r = n).name, message: r.message, stack: null === (a = r.stack) || void 0 === a ? void 0 : a.split("\n") }, r) : n; var r, a }), 2) }

function ae(e) { return h(function(e) { for (var t = "", n = 0, r = Object.keys(e).sort(); n < r.length; n++) { var a = r[n],
                o = e[a],
                i = o.error ? "error" : JSON.stringify(o.value);
            t += (t ? "|" : "") + a.replace(/([:|\\])/g, "\\$1") + ":" + i } return t }(e)) }

function oe(e) { return void 0 === e && (e = 50),
        function(e, t) { void 0 === t && (t = 1 / 0); var n = window.requestIdleCallback; return n ? new Promise((function(e) { return n.call(window, (function() { return e() }), { timeout: t }) })) : a(Math.min(e, t)) }(e, 2 * e) }

function ie(e, r) { var a = Date.now(); return { get: function(o) { return t(this, void 0, void 0, (function() { var t, i, c; return n(this, (function(n) { switch (n.label) {
                        case 0:
                            return t = Date.now(), [4, e()];
                        case 1:
                            return i = n.sent(), c = function(e) { var t; return {get visitorId() { return void 0 === t && (t = ae(this.components)), t }, set visitorId(e) { t = e }, confidence: ne(e), components: e, version: "3.3.3" } }(i), (r || (null == o ? void 0 : o.debug)) && console.log("Copy the text below to get the debug data:\n\n```\nversion: " + c.version + "\nuserAgent: " + navigator.userAgent + "\ntimeBetweenLoadAndGet: " + (t - a) + "\nvisitorId: " + c.visitorId + "\ncomponents: " + re(i) + "\n```"), [2, c] } })) })) } } }

function ce(e) { var r = void 0 === e ? {} : e,
        a = r.delayFallback,
        o = r.debug; return r.monitoring, t(this, void 0, void 0, (function() { return n(this, (function(e) { switch (e.label) {
                case 0:
                    return [4, oe(a)];
                case 1:
                    return e.sent(), [2, ie(y(te, { debug: o }, []), o)] } })) })) }
var ue = { load: ce, hashComponents: ae, componentsToDebugString: re },
    se = h;
export { re as componentsToDebugString, ue as default, P as getFullscreenElement, U as getScreenFrame, ae as hashComponents, _ as isAndroid, A as isChromium, S as isDesktopSafari, C as isEdgeHTML, M as isGecko, k as isTrident, x as isWebKit, ce as load, y as loadSources, se as murmurX64Hash128, oe as prepareForSources, te as sources };