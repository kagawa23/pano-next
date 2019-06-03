/* eslint-disable */
/*
	krpano Embedding Script
	krpano 1.19-pr12 (build 2017-08-04)
*/
function createPanoViewer(e) {
    function ft(e) {
        return ("" + e).toLowerCase()
    }

    function lt(e, t) {
        return e[d](t) >= 0
    }

    function ct() {
        var t, r, i, s, o, u, a, f, l = n.location;
        l = l.search || l.hash;
        if (l) {
            t = ".html5.flash.wmode.mobilescale.fakedevice.", r = l[R](1)[F]("&");
            for (i = 0; i < r[D]; i++) s = r[i], o = s[d]("="), o == -1 && (o = s[D]), u = s[R](0, o), a = ft(u), f = s[R](o + 1), t[d]("." + a + ".") >= 0 ? e[a] = f : a[C](0, 9) == "initvars." ? (e[_] || (e[_] = {}), e[_][u[C](9)] = f) : e.addVariable(u, f)
        }
    }

    function ht(e) {
        return e[B] = ct, e
    }

    function pt() {
        function N() {
            var e, n, i, s, o, u, a;
            if (t.plugins) {
                e = t.plugins["Shockwave Flash"];
                if (typeof e == "object") {
                    n = e.description;
                    if (n) {
                        i = v, t[z] && (s = t[z]["application/x-shockwave-flash"], s && (s.enabledPlugin || (i = p)));
                        if (i) {
                            o = n[F](" ");
                            for (u = 0; u < o[D]; ++u) {
                                a = parseFloat(o[u]);
                                if (isNaN(a)) continue;
                                return a
                            }
                        }
                    }
                }
            }
            if (r[nt]) try {
                e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                if (e) {
                    n = e.GetVariable("$version");
                    if (n) return parseFloat(n[F](" ")[1][F](",").join("."))
                }
            } catch (f) {}
            return 0
        }

        function k() {
            var e, t, i = p,
                s = n[Y]("div");
            for (e = 0; e < 5; e++)
                if (typeof s.style[["p", "msP", "MozP", "WebkitP", "OP"][e] + "erspective"] != W) {
                    i = v, e == 3 && r.matchMedia && (t = r.matchMedia("(-webkit-transform-3d)"), t && (i = t.matches == v));
                    break
                } return i
        }

        function L(e) {
            var t, i, s = {};
            s[y] = e;
            if (r._krpWGL == v) return v;
            try {
                t = n[Y]("canvas");
                for (i = 0; i < 4; i++)
                    if (t.getContext([q, "experimental-webgl", "moz-webgl", "webkit-3d"][i], s)) return r._krpWGL = v, v
            } catch (o) {}
            return p
        }
        var l, c, h, m, g, b, w, E, S, x, T;
        if (s > 0) return;
        l = p, c = p, h = p, m = e[O] && e[O][y] !== undefined ? e[O][y] : p, c = L(m);
        if (e.isDevice("iphone|ipad|ipod") && i[d]("opera mini") < 0) a = f = v, l = v;
        else {
            o = N(), o >= 10.1 && (u = v), l = k(), g = ft(t.platform), b = 0, w = 0, E = 0, S = i[d]("firefox/"), S < 0 && (S = i[d]("gecko/")), S >= 0 && (b = parseInt(i[C](1 + i[d]("/", S)), 10)), h = !!r[tt], S = i[d](tt), S > 0 && (E = parseInt(i[C](S + 7), 10), h = v), S = i[d]("edge/"), S > 0 && (h = p), S = i[d](Z), S > 0 && (w = parseInt(i[C](S + 8), 10), b >= 18 && (w = 4)), l && (w > 0 && w < 4 && (l = p), b > 3 && b < 18 && w > 1 && (c = l = p), c || (g[d](et) < 0 && b > 3 && w < 1 && (l = p), h && (l = p))), m && !c && u && (l = p);
            if (l || c) {
                a = v, x = i[d]("blackberry") >= 0 || i[d]("rim tablet") >= 0 || i[d]("bb10") >= 0, T = (t.msMaxTouchPoints | 0) > 1;
                if (w >= 4 || x || T) f = v
            }
        }
        s = 1 | l << 1 | c << 2 | h << 3
    }

    function dt(e) {
        function C(e) {
            function a() {
                r[m] ? (r[m]("DOMMouseScroll", c, p), r[m]("mousewheel", c, p), n[m]("mousedown", f, p), n[m]("mouseup", l, p)) : (r.opera ? r.attachEvent(P, c) : r[P] = n[P] = c, n.onmousedown = f, n.onmouseup = l)
            }

            function f(e) {
                e || (e = r.event, e[S] = e[X]), u = e ? e[S] : T
            }

            function l(e) {
                var t, i, s, a, f, l, c, h;
                e || (e = r.event, e[S] = e[X]), t = 0, i = o[D];
                for (t = 0; t < i; t++) {
                    s = o[t];
                    if (s) {
                        a = n[s.id];
                        if (a && s.needfix) {
                            f = a[x](), l = a == e[S], c = a == u, h = e.clientX >= f.left && e.clientX < f.right && e.clientY >= f.top && e.clientY < f.bottom;
                            if ((l || c) && h == p) try {
                                a[U] && a[U](0, "mouseUp")
                            } catch (d) {}
                        }
                    }
                }
                return v
            }

            function c(t) {
                var i, u, a, f, l, c;
                t || (t = r.event, t[S] = t[X]), i = 0, u = p, t.wheelDelta ? (i = t.wheelDelta / 120, r.opera && s && (i /= 4 / 3)) : t.detail && (i = -t.detail, s == p && (i /= 3));
                if (i) {
                    a = 0, f = o[D];
                    for (a = 0; a < f; a++) {
                        l = o[a];
                        if (l) {
                            c = n[l.id];
                            if (c && c == t[S]) {
                                try {
                                    c.jswheel ? c.jswheel(i) : c[w] ? c[w](i) : c[A] && (c[A](), c[w] && c[w](i))
                                } catch (h) {}
                                u = v;
                                break
                            }
                        }
                    }
                }
                e[V] == p && (u = p);
                if (u) return t[st] && t[st](), t[ut] && t[ut](), t.cancelBubble = v, t.cancel = v, n[m] || (t.returnValue = p), p
            }
            var i, s = ft(t.appVersion)[d](et) >= 0,
                o = r._krpMW,
                u = T;
            o || (o = r._krpMW = new Array, a()), i = e[b], o.push({
                id: e.id,
                needfix: s || !!r[tt] || i == "opaque" || i == "transparent"
            })
        }
        var i, s, o, u, a, f, l = encodeURIComponent,
            c = "",
            h = e.vars,
            y = e[j],
            N = e.id;
        for (;;) {
            s = n[E](N);
            if (!s) break;
            N += String.fromCharCode(48 + Math.floor(9 * Math.random())), e.id = N
        }
        e[b] && (y[b] = e[b]), e[k] && (y[k] = e[k]), e[Q] !== undefined && (h[Q] = e[Q]), e[b] = ft(y[b]), y.allowfullscreen = "true", y.allowscriptaccess = it, i = "browser.", c = i + "useragent=" + l(t.userAgent) + "&" + i + "location=" + l(r.location.href);
        for (i in h) c += "&" + l(i) + "=" + l(h[i]);
        i = _, h = e[i];
        if (h) {
            c += "&" + i + "=";
            for (i in h) c += "%26" + l(escape(i)) + "=" + l(escape(h[i]))
        }
        y.flashvars = c, e[L] && (y.base = e[L]), o = "", u = ' id="' + N + '" width="' + e.width + '" height="' + e.height + '" style="outline:none;" ', a = "_krpcb_" + N, !e[I] || (r[a] = function() {
            try {
                delete r[a]
            } catch (t) {
                r[a] = T
            }
            e[I](n[E](N))
        });
        if (t.plugins && t[z] && !r[nt]) {
            o = '<embed name="' + N + '"' + u + 'type="application/x-shockwave-flash" src="' + e.swf + '" ';
            for (i in y) o += i + '="' + y[i] + '" ';
            o += " />"
        } else {
            o = "<object" + u + 'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"><param name="movie" value="' + e.swf + '" />';
            for (i in y) o += '<param name="' + i + '" value="' + y[i] + '" />';
            o += "</object>"
        }
        e[g].innerHTML = o, e[at] === v && (f = n[E](N), f && f[at]()), C(e)
    }

    function vt(e) {
        typeof embedpanoJS !== W ? embedpanoJS(e) : e[N]("krpano HTML5 Viewer not available!")
    }

    function mt(n, r) {
        var u, a, f, l;
        n == 1 ? (o >= 11.4 && (u = v, ft(t.platform)[d](et) >= 0 && ft(t.vendor)[d]("apple") >= 0 && (a = i[d]("webkit/"), a > 0 && (a = parseFloat(i[C](a + 7)), !isNaN(a) && a > 0 && a < 534 && (u = p))), u && (e[b] == T && !e[j][b] ? e[b] = s & 8 ? "window" : "direct" : (f = ("" + e[b])[d]("-flash"), f > 0 && (e[b] = e[b][C](0, f))))), dt(e)) : n == 2 ? vt(e) : (l = "", r < 2 && (l += "Adobe Flashplayer"), r == 0 && (l += " or<br/>"), r != 1 && (l += "HTML5 Browser with WebGL ", lt(ft(e[K]), q) || (l += "or CSS3D "), l += "support"), l += " required!", e[N](l))
    }

    function gt() {
        var t = 'Local usage with <span style="border:1px solid gray;padding:0px 3px;">file://</span> urls is limited due browser security restrictions!<br><br>Use a localhost server (like the <a href="http://krpano.com/tools/ktestingserver/#top" style="color:#FFF;">krpano Testing Server</a>) for local testing!<br>E.g. just start the krpano Testing Server and refresh this page.<br><br><a href="http://krpano.com/docu/localusage/#top" style="color:#AAA;font-style:italic;text-decoration:none;">More information...</a>';
        e[N](t)
    }

    function yt(e, t, n) {
        var r;
        try {
            r = new XMLHttpRequest, r.responseType = "text", r.open("GET", e, v), r.onreadystatechange = function() {
                var e;
                r.readyState === 4 && (e = r.status, e == 0 && r.responseText || e == 200 ? t() : n())
            }, r.send(T)
        } catch (i) {
            n()
        }
    }
    var t, n, r, i, s, o, u, a, f, l, c, h, p = !1,
        d = "indexOf",
        v = !0,
        m = "addEventListener",
        g = "targetelement",
        y = "failIfMajorPerformanceCaveat",
        b = "wmode",
        w = "externalMouseEvent",
        E = "getElementById",
        S = "target",
        x = "getBoundingClientRect",
        T = null,
        N = "onerror",
        C = "slice",
        k = "bgcolor",
        L = "flashbasepath",
        A = "enable_mousewheel_js_bugfix",
        O = "webglsettings",
        M = "localfallback",
        _ = "initvars",
        D = "length",
        P = "onmousewheel",
        H = "fallback",
        B = "passQueryParameters",
        j = "params",
        F = "split",
        I = "onready",
        q = "webgl",
        R = "substring",
        U = "externalMouseEvent2",
        z = "mimeTypes",
        W = "undefined",
        X = "srcElement",
        V = "mwheel",
        $ = "basepath",
        J = "consolelog",
        K = "html5",
        Q = "xml",
        G = "flash",
        Y = "createElement",
        Z = "android",
        et = "mac",
        tt = "chrome",
        nt = "ActiveXObject",
        rt = "never",
        it = "always",
        st = "stopPropagation",
        ot = "only",
        ut = "preventDefault",
        at = "focus";
    return t = navigator, n = document, r = window, i = ft(t.userAgent), s = 0, o = 0, u = p, a = p, f = v, e || (e = {}), l = e[B] === v, e.swf || (e.swf = "krpano.swf"), e[Q] === undefined && (e[Q] = e.swf[F](".swf").join(".xml")), e.id || (e.id = "krpanoSWFObject"), e.width || (e.width = "100%"), e.height || (e.height = "100%"), e[k] || (e[k] = "#000000"), e[b] || (e[b] = T), e[S] || (e[S] = T), e[K] || (e[K] = "auto"), e[G] || (e[G] = T), e[V] === undefined && (e[V] = v), e.vars || (e.vars = {}), e[j] || (e[j] = {}), e[I] || (e[I] = T), e.mobilescale || (e.mobilescale = .5), e.fakedevice || (e.fakedevice = T), e[M] || (e[M] = "http://localhost:8090"), e[$] ? e[L] = e[$] : (c = "./", h = e.swf.lastIndexOf("/"), h >= 0 && (c = e.swf[C](0, h + 1)), e[$] = c), e.isDevice = function(e) {
        var t, n, r, s = "all",
            o = ["ipad", "iphone", "ipod", Z];
        for (t = 0; t < 4; t++) i[d](o[t]) >= 0 && (s += "|" + o[t]);
        e = ft(e)[F]("|");
        if (e == T) return v;
        n = e[D];
        for (t = 0; t < n; t++) {
            r = e[t];
            if (s[d](r) >= 0) return v
        }
        return p
    }, e.addVariable = function(t, n) {
        t = ft(t), t == "pano" || t == Q ? e[Q] = n : e.vars[t] = n
    }, e.addParam = function(t, n) {
        e[j][ft(t)] = n
    }, e.useHTML5 = function(t) {
        e[K] = t
    }, e.isHTML5possible = function() {
        return pt(), a
    }, e.isFlashpossible = function() {
        return pt(), u
    }, e[N] || (e[N] = function(t) {
        var n = e[g];
        n ? n.innerHTML = '<table style="width:100%;height:100%;color:#FFF;background:#000;"><tr style="vertical-align:middle;text-align:center;"><td>ERROR:<br><br>' + t + "<br><br></td></tr></table>" : alert("ERROR: " + t)
    }), e.embed = function(t) {
        var i, o, f, c, h, m;
        t && (e[S] = t), e[g] = n[E](e[S]);
        if (!e[g]) e[N]("No Embedding Target");
        else {
            l && ct();
            if (e[at] === undefined && e[g][x]) {
                i = e[g][x](), e[at] = i.top == 0 && i.left == 0 && i.right >= r.innerWidth && i.bottom >= r.innerHeight;
                if (e[at]) try {
                    top !== window && (e[at] = p)
                } catch (y) {}
            }
            e[V] == p && (e.vars["control.disablewheel"] = v), e[J] && (e.vars[J] = e[J]), s == 0 && pt(), o = ft(e[K]), f = e[G], f && (f = ft(f), f == "prefer" ? o = H : f == H ? o = "prefer" : f == ot ? o = rt : f == rt && (o = ot)), c = 0, h = 0, m = a, m && lt(o, q) && (m = s & 4), o == rt ? (c = u ? 1 : 0, h = 1) : lt(o, ot) ? (c = m ? 2 : 0, h = 2) : lt(o, it) ? c = h = 2 : o == H ? c = u ? 1 : a ? 2 : 0 : c = m ? 2 : u ? 1 : 0, c == 2 && ft(location.href[C](0, 7)) == "file://" ? yt(location.href, function() {
                mt(c, h)
            }, function() {
                var t, n = ft(e[M]);
                n == G ? u ? mt(1, 0) : gt() : n == "none" ? mt(c, h) : n[d]("://") > 0 ? (t = new Image, t[N] = gt, t.onload = function() {
                    location.href = n + "/krpanotestingserverredirect.html?" + location.href
                }, t.src = n + "/krpanotestingserver.png") : gt()
            }) : mt(c, h)
        }
    }, ht(e)
}

function removepano(e) {
    var t, n, r, i, s = document.getElementById(e);
    if (s) {
        t = window._krpMW;
        if (t)
            for (n = 0; n < t.length; n++) {
                r = t[n];
                if (r && r.id === e) {
                    t.splice(n, 1);
                    break
                }
            }
        s.unload && s.unload(), i = s.parentNode, i && i.removeChild(s)
    }
}

function embedpano(e) {
    createPanoViewer(e).embed()
};
/*
	krpano HTML5 Viewer
	krpano 1.19-pr12 (build 2017-08-04)
*/
var krpanoJS = {
    version: "1.19-pr12",
    build: "2017-08-04"
};

function embedpanoJS(p) {
    function embedhtml5(wd, kc) {
        function xd() {
            function G(a) {
                return ("" + a).toLowerCase()
            }
    
            function Ga(a, b) {
                if (!a) return a;
                var w = 0,
                    d = 0,
                    e, m = a.length,
                    n;
                for (e = 0; e < m; e++)
                    if (n = a.charCodeAt(e), 32 >= n) w++;
                    else break;
                for (e = m - 1; 0 < e; e--)
                    if (n = a.charCodeAt(e), 32 >= n) d++;
                    else break;
                void 0 === b && (e = a.charAt(w), n = a.charAt(m - d - 1), ("'" == e && "'" == n || '"' == e && '"' == n) && 3 == a.split(e).length && (w++, d++));
                return a = a.slice(w, m - d)
            }
    
            function la(a) {
                return _[53] === typeof a ? a : 0 <= _[419].indexOf(String(a).toLowerCase())
            }
    
            function Aa(a) {
                a--;
                a |= a >> 1;
                a |= a >> 2;
                a |= a >> 4;
                a |= a >> 8;
                a |= a >> 16;
                a++;
                return a
            }
    
            function Ab(a, b) {
                if (typeof a != b) {
                    if (_[594] == b) return Number(a);
                    if (_[53] == b) return la(a);
                    if (_[1] == b) return null == a ? null : String(a)
                }
                return a
            }
    
            function Ea(a) {
                return Number(a).toFixed(6)
            }
    
            function Wa(a, b, w, d) {
                a.__defineGetter__(b, w);
                void 0 !== d && a.__defineSetter__(b, d)
            }
    
            function yb(a, b, w) {
                a.__defineGetter__(b, function() {
                    return a[w]
                });
                a.__defineSetter__(b, function(b) {
                    a[w] = b
                })
            }
    
            function Oa(a, b, w) {
                var d = "_" + b;
                a[d] = w;
                a.__defineGetter__(b, function() {
                    return a[d]
                });
                a.__defineSetter__(b, function(b) {
                    b = Ab(b, typeof w);
                    b != a[d] && (a[d] = b, a.haschanged = !0)
                })
            }
    
            function na(a) {
                a && a.preventDefault()
            }
    
            function ca(a, b, w, d) {
                a && a.addEventListener(b, w, d)
            }
    
            function ha(a, b, w, d) {
                a && a.removeEventListener(b, w, d)
            }
    
            function zb(a, b, w, d, e) {
                b[a + _[331]](w, d, e)
            }
    
            function Ha(a) {
                var b = ea.createElement(1 == a ? "img" : 2 == a ? _[617] : "div");
                b && 1 == a && "off" != Lb && (b.crossOrigin = Lb);
                return b
            }
    
            function Vc(a) {
                return function() {
                    return a.apply(a, arguments)
                }
            }
    
            function yd(a) {
                return a.split("<").join("&lt;").split(">").join("&gt;")
            }
    
            function zd(a) {
                return "0x" + (16777216 + (a | 0)).toString(16).slice(1).toUpperCase()
            }
    
            function pa(a, b) {
                var w = "(" + (a >> 16 & 255) + "," + (a >> 8 & 255) + "," + (a & 255);
                void 0 === b && (b = 1 - (a >> 24 & 255) / 255);
                return (1 > b ? "rgba" + w + "," + b : "rgb" + w) + ")"
            }
    
            function be(a) {
                a = a.split("[").join("<").split("<<").join("[").split("]").join(">").split(">>").join("]");
                a = a.split("<sq>").join("'");
                a = a.split("<SQ>").join("'");
                a = a.split("<dq>").join('"');
                a = a.split("<DQ>").join('"');
                a = a.split("<lt>").join("<");
                return a = a.split("<gt>").join(">")
            }
    
            function qd(a, b) {
                a = Number(a);
                b = Number(b);
                return a - 360 * Math.round((a - b) / 360)
            }
    
            function tc(a) {
                if (a) {
                    var b = a.indexOf("?");
                    0 <= b && (a = a.slice(0, b));
                    b = a.indexOf("#");
                    0 <= b && (a = a.slice(0, b))
                }
                return a
            }
    
            function wd(a) {
                a = tc(a);
                var b = a.lastIndexOf("/"),
                    w = a.lastIndexOf("\\");
                w > b && (b = w);
                return a.slice(b + 1)
            }
    
            function Od(a, b) {
                var w = String(a).charCodeAt(0);
                return 48 <= w && 57 >= w ? (b && va(3, b + _[174]), !1) : !0
            }
    
            function xd(a, b) {
                for (var w = "", d = 0, e = 1, m = 0, n = 0; 1 == e && 0 == d;) {
                    var h, x = a.indexOf("*", m),
                        w = "";
                    0 > x ? (x = a.length, d = 1) : (w = a.indexOf("*", x + 1), 0 > w && (w = a.length), h = w - (x + 1), w = a.substr(x + 1, h));
                    h = x - m;
                    0 < h && b.substr(n, d ? void 0 : h) != a.substr(m, h) && (e = 0);
                    m = x + 1;
                    "" != w && (n = b.indexOf(w, n), 0 > n && (e = 0))
                }
                return !!e
            }
    
            function Xa(a) {
                var b = Mb ? Mb.interruptionevents : "";
                if (a)
                    if (0 <= a.indexOf(_[66])) {
                        if (0 > b.indexOf(_[576])) return
                    } else if (0 <= a.indexOf("key")) {
                    if (0 > b.indexOf(_[515])) return
                } else if (0 <= a.indexOf("pano.") && 0 > b.indexOf(_[309])) return;
                Wc = Pa()
            }
    
            function Xc(a, b, w, d) {
                for (; 32 >= a.charCodeAt(b);) b++;
                for (; 32 >= a.charCodeAt(w - 1);) w--;
                var e = a.charCodeAt(b);
                if (37 == e) a = N(a.slice(b + 1, w), d);
                else if (103 == e && "get(" == a.slice(b, b + 4)) {
                    for (b += 4; 32 >= a.charCodeAt(b);) b++;
                    for (w = a.lastIndexOf(")"); 32 >= a.charCodeAt(w - 1);) w--;
                    a = N(a.slice(b, w), d)
                } else 99 == e && "calc(" == a.slice(b, b + 5) ? a = N(a.slice(b, w), d) : (d = a.charCodeAt(b), 39 != d && 34 != d || d != a.charCodeAt(w - 1) || (b++, w--), a = a.slice(b, w));
                return a
            }
    
            function Pd(a) {
                var b = [];
                if (null == a || void 0 == a) return b;
                var w, d = 0,
                    e, m, n = 0;
                a = G(a);
                e = a.length;
                for (w = 0; w < e; w++) m = a.charCodeAt(w), 40 == m ? n++ : 41 == m ? n-- : 46 == m && 0 == n && (b.push(a.slice(d, w)), d = w + 1);
                b.push(a.slice(d));
                return b
            }
    
            function ua(a, b) {
                var d = !1;
                a = G(a);
                var g, e, m, n;
                m = Yc[a];
                null != m && void 0 !== m && "" != m && (Zc(m, null, b), d = !0);
                n = Yc.getArray();
                e = n.length;
                for (g = 0; g < e; g++)
                    if (m = n[g]) m = m[a], null != m && void 0 !== m && "" != m && (Zc(m, null, b), d = !0);
                return d
            }
    
            function X(a, b, d, g, e) {
                if (b && _[1] == typeof b) {
                    var m = b.slice(0, 4);
                    "get:" == m ? b = N(b.slice(4)) : "calc" == m && 58 == b.charCodeAt(4) && (b = V.calc(null, b.slice(5)))
                }
                var m = null,
                    n, h = Pd(a);
                a = h.length;
                if (1 == a) {
                    m = h[0];
                    n = m.charCodeAt(0);
                    if (48 <= n && 57 >= n) {
                        V.lastActionError = _[215] + m;
                        return
                    }
                    if (g && void 0 !== g[m]) {
                        g[m] = _[53] == typeof g[m] ? la(b) : b;
                        return
                    }
                }
                var x = p,
                    m = null;
                1 < a && (m = h[a - 1]);
                for (n = 0; n < a; n++) {
                    var ub = n == a - 1,
                        D = h[n],
                        B = null,
                        q = D.indexOf("[");
                    0 < q && (B = Xc(D, q + 1, D.length - 1, g), D = D.slice(0, q));
                    q = !1;
                    if (void 0 === x[D]) {
                        if (d) break;
                        ub || (null == B ? x[D] = new Fc : (x[D] = new Vb(Fc), q = !0))
                    } else q = !0;
                    if (q && 0 == ub && x[D] && 1 == x[D].isArray && null != B)
                        if (ub = null, x = x[D], ub = d ? x.getItem(B) : x.createItem(B)) {
                            if (n == a - 2 && "name" == m) {
                                b = G(b);
                                B != b && (null == b || "null" == b || "" == b ? x.removeItem(B) : x.renameItem(B, b));
                                break
                            }
                            x = ub;
                            continue
                        } else break;
                    if (ub) x[D] = 1 == e ? b : Ab(b, typeof x[D]);
                    else if (x = x[D], null == x) break
                }
            }
    
            function ce(a) {
                if (a && "null" != a) {
                    if (_[1] == typeof a) {
                        var b = a.split("&"),
                            d = b.length,
                            g;
                        a = {};
                        for (g = 0; g < d; g++) {
                            var e = b[g].split("=");
                            a[e[0]] = e[1]
                        }
                    }
                    for (var m in a) "xml" != m && X(m, a[m])
                }
            }
    
            function N(a, b, d) {
                if (a && "calc(" == ("" + a).slice(0, 5)) return V.calc(null, a.slice(5, a.lastIndexOf(")")));
                var g, e, m = Pd(a);
                g = m.length;
                if (1 == g && _[367] == m[0]) return b ? b._type + "[" + b.name + "]" : "";
                if (1 == g && b && (e = m[0], b.hasOwnProperty(e))) return b[e];
                var n = p;
                for (a = 0; a < g; a++) {
                    e = m[a];
                    var h = a == g - 1,
                        x = null,
                        ub = e.indexOf("[");
                    0 < ub && (x = Xc(e, ub + 1, e.length - 1, b), e = e.slice(0, ub));
                    if (n && void 0 !== n[e]) {
                        if (null != x && (ub = n[e]) && ub.isArray)
                            if (e = ub.getItem(x)) {
                                if (h) return e;
                                n = e;
                                continue
                            } else break;
                        if (h) return n[e];
                        n = n[e]
                    } else break
                }
                return !0 === d ? void 0 : null
            }
    
            function Zc(a, b, d) {
                V.callaction(a, b, d)
            }
    
            function Ue(a, b, d) {
                Zc(a, b ? N(b) : null, d ? la(d) : null)
            }
    
            function va(a, b) {
                !Qd && (0 < a || p.debugmode) && (b = ["DEBUG", "INFO", _[528], "ERROR", _[411]][a] + ": " + b, W.log(b), 2 < a && p.showerrors && setTimeout(function() {
                    try {
                        W.showlog(!0)
                    } catch (a) {}
                }, 500))
            }
    
            function Ya(a, b) {
                if (!Qd) {
                    a = "" + a;
                    var w = 0 < G(a).indexOf("load");
                    a = yd(a).split("[br]").join("<br/>");
                    var g = Ca.createItem(_[498]),
                        e = Ca.createItem(_[499]);
                    g.sprite || (g.create(), W.controllayer.appendChild(g.sprite));
                    e.sprite || (e.create(), W.controllayer.appendChild(e.sprite));
                    g.imagewidth = 1;
                    g.imageheight = 1;
                    g.loaded = !0;
                    g.handcursor = !1;
                    g.align = _[86];
                    g.width = "100%";
                    g.height = "100%";
                    g.alpha = .5;
                    g.keep = !0;
                    g = g.sprite.style;
                    g.backgroundColor = _[26];
                    g.zIndex = 99999998;
                    w && (e.visible = !1);
                    e.imagewidth = 1;
                    e.imageheight = 1;
                    e.loaded = !0;
                    e.handcursor = !1;
                    e.align = _[91];
                    e.y = 0;
                    e.width = "105%";
                    var m = d.ie || d.android ? -2 : 2;
                    e.height = m + 46 / da;
                    e.keep = !0;
                    g = e.sprite.style;
                    g.backgroundColor = _[26];
                    g.color = _[54];
                    g.fontFamily = d.realDesktop && !d.ie ? _[33] : _[21];
                    g.fontSize = "12px";
                    g.margin = "-2px";
                    g.border = _[286];
                    b || (b = _[333]);
                    e.sprite.innerHTML = _[185] + b + "<br/>" + a + _[364];
                    g.zIndex = 99999999;
                    g[cc] = _[237];
                    e.jsplugin = {
                        onresize: function(a, b) {
                            var d = e.sprite.childNodes[0].clientHeight;
                            e.height = m + Math.max(46, d) / da;
                            0 >= d && (e.imageheight = 1)
                        }
                    };
                    ga.disablewheel = !0;
                    ga.touchzoom = !1;
                    ga.usercontrol = !1;
                    setTimeout(function() {
                        try {
                            e.visible = !0
                        } catch (a) {}
                    }, w ? 500 : 10)
                }
            }
    
            function Ve() {
                Va.removeelements(!0);
                de.stop();
                ab.unregister();
                Za.unload();
                W.remove()
            }
    
            function We() {
                this.caller = this.args = this.cmd = null
            }
    
            function Wb(a, b, d) {
                var g = null;
                if (null == a || "" == a) return null;
                for (var e = 0, m = 0, n = 0, h = 0, x = 0, p = 0, D = 0, B = 0, q = "", q = 0, q = a.charCodeAt(x); 0 < q && 32 >= q || 59 == q;) x++, q = a.charCodeAt(x);
                for (var t = Xe, v = 0, m = a.length, e = x; e < m; e++)
                    if (q = a.charCodeAt(e), 0 == B && 0 == D && 40 == q) n++;
                    else if (0 == B && 0 == D && 41 == q) {
                    if (h++, n == h) {
                        p = e + 1;
                        q = a.slice(x, p);
                        t[v++] = q;
                        x = p;
                        for (q = a.charCodeAt(x); 0 < q && 32 >= q;) x++, q = a.charCodeAt(x);
                        q = a.charCodeAt(x);
                        if (59 != q) {
                            p = m;
                            break
                        }
                        x++;
                        for (q = a.charCodeAt(x); 59 == q || 0 < q && 32 >= q;) x++, q = a.charCodeAt(x);
                        e = x
                    }
                } else 34 == q ? 0 == D ? D = 1 : 1 == D && (D = 0) : 39 == q ? 0 == D ? D = 2 : 2 == D && (D = 0) : 91 == q && 0 == D ? B++ : 93 == q && 0 == D && B--;
                p != m && (q = a.slice(x, m), 0 < q.length && (t[v++] = q));
                m = v;
                for (e = 0; e < m; e++)
                    if (q = t[e], D = q.indexOf("["), a = q.indexOf("]"), n = q.indexOf("("), 0 < D && 0 < a && n > D && n < a && (n = q.indexOf("(", a)), h = a = null, 0 < n ? (a = q.slice(0, n), h = Ga(q.slice(n + 1, q.lastIndexOf(")")), !1), 0 >= h.length && (h = null)) : (a = q, h = null), a = Ga(a), "//" != a.slice(0, 2)) {
                        x = [];
                        if (null != h) {
                            for (var p = h.length, n = 0, f = v = -1, u = D = 0, q = null, B = 0; B < p; B++) q = h.charCodeAt(B), 0 == D && 40 == q ? n++ : 0 == D && 41 == q ? n-- : 34 == q ? 1 == D && 0 <= v ? (v = -1, D = 0) : 0 == D && (v = B, D = 1) : 39 == q && (2 == D && 0 <= f ? (f = -1, D = 0) : 0 == D && (f = B, D = 2)), 44 == q && 0 == n && 0 == D && (q = Ga(h.slice(u, B)), x.push(q), u = B + 1);
                            0 == n && (q = Ga(h.slice(u, B)), x.push(q))
                        }
                        null == g && (g = []);
                        n = new We;
                        n.cmd = d ? a : G(a);
                        n.args = x;
                        n.caller = b;
                        g.push(n)
                    } return g
            }
    
            function Gc() {
                this.z = this.y = this.x = 0
            }
    
            function Ja() {
                var a = _[135] !== typeof Float32Array ? new Float32Array(16) : Array(16);
                a[0] = a[5] = a[10] = a[15] = 1;
                a[1] = a[2] = a[3] = a[4] = a[6] = a[7] = a[8] = a[9] = a[11] = a[12] = a[13] = a[14] = 0;
                return a
            }
    
            function ze(a, b, d, g, e, m, n, h, x, p, D, B, q, t, v, f, u) {
                a[0] = b;
                a[1] = d;
                a[2] = g;
                a[3] = e;
                a[4] = m;
                a[5] = n;
                a[6] = h;
                a[7] = x;
                a[8] = p;
                a[9] = D;
                a[10] = B;
                a[11] = q;
                a[12] = t;
                a[13] = v;
                a[14] = f;
                a[15] = u
            }
    
            function Fb(a, b, d, g, e, m, n, h, x, p) {
                a[0] = b;
                a[1] = d;
                a[2] = g;
                a[3] = 0;
                a[4] = e;
                a[5] = m;
                a[6] = n;
                a[7] = 0;
                a[8] = h;
                a[9] = x;
                a[10] = p;
                a[11] = 0;
                a[12] = 0;
                a[13] = 0;
                a[14] = 0;
                a[15] = 1
            }
    
            function Rd(a, b) {
                a[0] = b[0];
                a[1] = b[1];
                a[2] = b[2];
                a[3] = b[3];
                a[4] = b[4];
                a[5] = b[5];
                a[6] = b[6];
                a[7] = b[7];
                a[8] = b[8];
                a[9] = b[9];
                a[10] = b[10];
                a[11] = b[11];
                a[12] = b[12];
                a[13] = b[13];
                a[14] = b[14];
                a[15] = b[15]
            }
    
            function uc(a, b) {
                var d = b[0],
                    g = b[1],
                    e = b[2],
                    m = b[3],
                    n = b[4],
                    h = b[5],
                    x = b[6],
                    p = b[7],
                    D = b[8],
                    B = b[9],
                    q = b[10],
                    t = b[11],
                    v = b[12],
                    f = b[13],
                    u = b[14],
                    z = b[15],
                    C = a[0],
                    y = a[1],
                    A = a[2],
                    l = a[3];
                a[0] = C * d + y * n + A * D + l * v;
                a[1] = C * g + y * h + A * B + l * f;
                a[2] = C * e + y * x + A * q + l * u;
                a[3] = C * m + y * p + A * t + l * z;
                C = a[4];
                y = a[5];
                A = a[6];
                l = a[7];
                a[4] = C * d + y * n + A * D + l * v;
                a[5] = C * g + y * h + A * B + l * f;
                a[6] = C * e + y * x + A * q + l * u;
                a[7] = C * m + y * p + A * t + l * z;
                C = a[8];
                y = a[9];
                A = a[10];
                l = a[11];
                a[8] = C * d + y * n + A * D + l * v;
                a[9] = C * g + y * h + A * B + l * f;
                a[10] = C * e + y * x + A * q + l * u;
                a[11] = C * m + y * p + A * t + l * z;
                C = a[12];
                y = a[13];
                A = a[14];
                l = a[15];
                a[12] = C * d + y * n + A * D + l * v;
                a[13] = C * g + y * h + A * B + l * f;
                a[14] = C * e + y * x + A * q + l * u;
                a[15] = C * m + y * p + A * t + l * z
            }
    
            function Ye(a, b) {
                var d = a[0],
                    g = a[1],
                    e = a[2],
                    m = a[3],
                    n = a[4],
                    h = a[5],
                    x = a[6],
                    p = a[7],
                    D = a[8],
                    B = a[9],
                    q = a[10],
                    t = a[11],
                    v = a[12],
                    f = a[13],
                    u = a[14],
                    z = a[15],
                    C = b[0],
                    y = b[1],
                    A = b[2],
                    l = b[3],
                    c = b[4],
                    H = b[5],
                    E = b[6],
                    J = b[7],
                    r = b[8],
                    wa = b[9],
                    ya = b[10],
                    I = b[11],
                    ba = b[12],
                    aa = b[13],
                    R = b[14],
                    Y = b[15];
                a[0] = C * d + y * n + A * D + l * v;
                a[1] = C * g + y * h + A * B + l * f;
                a[2] = C * e + y * x + A * q + l * u;
                a[3] = C * m + y * p + A * t + l * z;
                a[4] = c * d + H * n + E * D + J * v;
                a[5] = c * g + H * h + E * B + J * f;
                a[6] = c * e + H * x + E * q + J * u;
                a[7] = c * m + H * p + E * t + J * z;
                a[8] = r * d + wa * n + ya * D + I * v;
                a[9] = r * g + wa * h + ya * B + I * f;
                a[10] = r * e + wa * x + ya * q + I * u;
                a[11] = r * m + wa * p + ya * t + I * z;
                a[12] = ba * d + aa * n + R * D + Y * v;
                a[13] = ba * g + aa * h + R * B + Y * f;
                a[14] = ba * e + aa * x + R * q + Y * u;
                a[15] = ba * m + aa * p + R * t + Y * z
            }
    
            function Ze(a, b, d, g) {
                ze(a, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, b, d, g, 1)
            }
    
            function $c(a, b, d, g) {
                var e = a[3],
                    m = a[7],
                    n = a[11],
                    h = a[15];
                a[0] += e * b;
                a[1] += e * d;
                a[2] += e * g;
                a[4] += m * b;
                a[5] += m * d;
                a[6] += m * g;
                a[8] += n * b;
                a[9] += n * d;
                a[10] += n * g;
                a[12] += h * b;
                a[13] += h * d;
                a[14] += h * g
            }
    
            function ee(a, b) {
                var d = b[0],
                    g = b[1],
                    e = b[2],
                    m = b[4],
                    n = b[5],
                    h = b[6],
                    x = b[8],
                    p = b[9],
                    D = b[10],
                    B = a[0],
                    q = a[1],
                    t = a[2];
                a[0] = B * d + q * m + t * x;
                a[1] = B * g + q * n + t * p;
                a[2] = B * e + q * h + t * D;
                B = a[4];
                q = a[5];
                t = a[6];
                a[4] = B * d + q * m + t * x;
                a[5] = B * g + q * n + t * p;
                a[6] = B * e + q * h + t * D;
                B = a[8];
                q = a[9];
                t = a[10];
                a[8] = B * d + q * m + t * x;
                a[9] = B * g + q * n + t * p;
                a[10] = B * e + q * h + t * D;
                B = a[12];
                q = a[13];
                t = a[14];
                a[12] = B * d + q * m + t * x;
                a[13] = B * g + q * n + t * p;
                a[14] = B * e + q * h + t * D
            }
    
            function Ae(a, b, d, g) {
                var e, m, n;
                e = d * S;
                d = Math.cos(e);
                m = Math.sin(e);
                e = -(b - 90) * S;
                b = Math.cos(e);
                n = Math.sin(e);
                e = -g * S;
                g = Math.cos(e);
                e = Math.sin(e);
                Fb(a, b * g - n * m * e, b * e + n * m * g, -n * d, -d * e, d * g, m, n * g + b * m * e, n * e - b * m * g, b * d)
            }
    
            function $e(a, b, d) {
                d = -d * S;
                var g = Math.cos(d);
                d = Math.sin(d);
                0 == b ? Fb(a, 1, 0, 0, 0, g, d, 0, -d, g) : 1 == b ? Fb(a, g, 0, -d, 0, 1, 0, d, 0, g) : Fb(a, g, d, 0, -d, g, 0, 0, 0, 1)
            }
    
            function fe(a, b, d, g, e) {
                var m, n, h;
                e && (g = -g, d = -d, b = -b);
                m = -g * S;
                g = Math.cos(m);
                n = Math.sin(m);
                m = -d * S;
                d = Math.cos(m);
                h = Math.sin(m);
                m = -b * S;
                b = Math.cos(m);
                m = Math.sin(m);
                e ? Fb(a, d * b - h * n * m, d * m + h * n * b, -h * g, -g * m, g * b, n, h * b + d * n * m, h * m - d * n * b, d * g) : Fb(a, b * d + m * n * h, m * g, -b * h + m * n * d, -m * d + b * n * h, b * g, m * h + b * n * d, g * h, -n, g * d)
            }
    
            function Be(a, b) {
                var d = b[0],
                    g = b[1],
                    e = b[2],
                    m = b[4],
                    n = b[5],
                    h = b[6],
                    x = b[8],
                    p = b[9],
                    D = b[10],
                    B = 1 / (d * n * D + g * h * x + m * p * e - x * n * e - m * g * D - p * h * d);
                Fb(a, (n * D - p * h) * B, (-g * D + p * e) * B, (g * h - n * e) * B, (-m * D + x * h) * B, (d * D - x * e) * B, (-d * h + m * e) * B, (m * p - x * n) * B, (-d * p + x * g) * B, (d * n - m * g) * B)
            }
    
            function Sd(a, b) {
                var d = b.x,
                    g = b.y,
                    e = b.z;
                b.x = d * a[0] + g * a[4] + e * a[8];
                b.y = d * a[1] + g * a[5] + e * a[9];
                b.z = d * a[2] + g * a[6] + e * a[10]
            }
    
            function ge(a, b) {
                var d = b[0],
                    g = b[1],
                    e = b[2];
                b[0] = d * a[0] + g * a[4] + e * a[8];
                b[1] = d * a[1] + g * a[5] + e * a[9];
                b[2] = d * a[2] + g * a[6] + e * a[10]
            }
    
            function Nb(a) {
                return d.fractionalscaling ? Math.round(a * (d.pixelratio + 1E-7)) / d.pixelratio : Math.round(a)
            }
    
            function Ob(a, b, d, g) {
                a = ("" + a).split(d);
                g = g ? g : [0, 0, 0, 0];
                d = a.length;
                4 == d ? (g[0] = a[0] * b + .5 | 0, g[1] = a[1] * b + .5 | 0, g[2] = a[2] * b + .5 | 0, g[3] = a[3] * b + .5 | 0) : 3 == d ? (g[0] = a[0] * b + .5 | 0, g[1] = g[3] = a[1] * b + .5 | 0, g[2] = a[2] * b + .5 | 0) : 2 == d ? (g[0] = g[2] = a[0] * b + .5 | 0, g[1] = g[3] = a[1] * b + .5 | 0) : g[0] = g[1] = g[2] = g[3] = a[0] * b + .5 | 0;
                return g
            }
    
            function he(a) {
                var b = a && a._poly;
                b && (b.setAttribute("fill", !0 === a.polyline ? "none" : pa(a.fillcolor, a.fillalpha)), b.setAttribute(_[591], pa(a.bordercolor, a.borderalpha)), b.setAttribute(_[358], a.borderwidth * da))
            }
    
            function Af(a) {
                var b = r.r_rmatrix,
                    d = r.r_zoom,
                    g = r.r_zoff,
                    e = .5 * Sa,
                    m = .5 * Fa + r.r_yoff,
                    n = r._stereographic ? 10 - g : 1 - g * (1 - Math.min(r.fisheye * r.fisheye, 1)),
                    h = a._poly;
                if (!h) {
                    var x = W.svglayer;
                    x || (x = document.createElementNS(_[101], "svg"), x.setAttribute(_[62], "100%"), x.setAttribute(_[18], "100%"), x.style.position = _[0], x.style.left = 0, x.style.top = 0, x.style.display = ka.stereo ? "none" : "", W.svglayer = x, W.hotspotlayer.appendChild(x));
                    h = document.createElementNS(_[101], la(a.polyline) ? _[148] : _[544]);
                    x.appendChild(h);
                    h.kobject = a;
                    a._poly = h;
                    he(a);
                    h.style.opacity = Number(a.DATA.alpha) * (a.keep ? 1 : vc);
                    a._assignEvents(h);
                    setTimeout(function() {
                        a.loading = !1;
                        a.loaded = !0;
                        V.callaction(a.onloaded, a)
                    }, 7)
                }
                var x = a.point.getArray(),
                    p = x.length,
                    D = [];
                if (1 < p && a.DATA.visible && 0 == ka.stereo) {
                    var B, q, t, v = new Gc,
                        f = new Gc,
                        u;
                    q = x[p - 1];
                    t = (180 - Number(q.ath)) * S;
                    q = Number(q.atv) * S;
                    v.x = 1E3 * Math.cos(q) * Math.cos(t);
                    v.z = 1E3 * Math.cos(q) * Math.sin(t);
                    v.y = 1E3 * Math.sin(q);
                    Sd(b, v);
                    for (B = 0; B < p; B++) q = x[B], t = (180 - Number(q.ath)) * S, q = Number(q.atv) * S, f.x = 1E3 * Math.cos(q) * Math.cos(t), f.z = 1E3 * Math.cos(q) * Math.sin(t), f.y = 1E3 * Math.sin(q), Sd(b, f), f.z >= n ? (v.z >= n || (u = (n - v.z) / (f.z - v.z), q = d / (n + g), t = (v.x + (f.x - v.x) * u) * q + e, q = (v.y + (f.y - v.y) * u) * q + m, D.push(t.toFixed(2) + "," + q.toFixed(2))), q = d / (f.z + g), t = f.x * q + e, q = f.y * q + m, D.push(t.toFixed(2) + "," + q.toFixed(2))) : v.z >= n && (u = (n - f.z) / (v.z - f.z), q = d / (n + g), t = (f.x + (v.x - f.x) * u) * q + e, q = (f.y + (v.y - f.y) * u) * q + m, D.push(t.toFixed(2) + "," + q.toFixed(2))), v.x = f.x, v.y = f.y, v.z = f.z;
                    0 == a.polyline && 2 < D.length && D.push(D[0]);
                    h.style.pointerEvents = a.DATA.enabled ? _[312] : "none";
                    h.style.cursor = a.DATA.handcursor ? _[10] : _[5];
                    h.style.visibility = a.DATA.visible ? _[16] : _[6]
                }
                h.setAttribute(_[607], D.join(" "))
            }
    
            function Bf(a, b) {
                var d = 0,
                    g, e, m;
                if (a && b) {
                    d = a.DATA.zorder;
                    g = b.DATA.zorder;
                    e = null == d || isNaN(d);
                    m = null == g || isNaN(g);
                    if (d == g || e && m)
                        if (d = a.DATA.depth, g = b.DATA.depth, e = null == d || isNaN(d), m = null == g || isNaN(g), d == g || e && m) d = a.index, g = b.index, e = m = !1;
                    d = e ? -1 : m ? 1 : d - g
                }
                return d
            }
    
            function ie(a, b) {
                if (void 0 === b && ad) {
                    var w = Bb.getArray();
                    w.sort(Bf);
                    var g = w.length,
                        e;
                    for (e = 0; e < g; e++) {
                        var m = w[e];
                        m && (m.index = e)
                    }
                    ad = !1
                }
                var w = Bb.getArray(),
                    g = w.length,
                    n;
                e = r.r_rmatrix;
                var m = Sa,
                    h = Fa,
                    x = da,
                    p = .5 * m,
                    D = .5 * h,
                    B = r.r_zoom,
                    q = r.r_hlookat + Number(K.viewoffset),
                    t = r.r_vlookat,
                    v = r.r_vlookatA,
                    f = r.r_yoff,
                    u = r.r_zoff,
                    z = r._camroll;
                n = r._stereographic;
                var C;
                C = 1 * (1 + u / 1E3);
                var y = 50;
                0 < u && (n ? y -= u : (y = 20 - u, -125 > y && (y = -125)));
                var A = 0,
                    l = 0;
                n = 0;
                void 0 !== b && (n = b, g = n + 1);
                var c = wc,
                    H = d.realDesktop && 250 > B ? 1.5 : 0,
                    E = Cf,
                    J = Df;
                E[1] = p;
                E[5] = Ce;
                E[9] = Ea(q);
                E[15] = c + "," + c + "," + c;
                var oa = fb,
                    wa = new Gc,
                    ya = null;
                if (!ka.stereo)
                    for (; n < g; n++) {
                        var I = w[n];
                        if (I && I._ready) {
                            var ba = null == I.DATA.url && 0 < I.point.count,
                                ya = null;
                            if (!ba) {
                                if (I.DATA.webGL) continue;
                                ya = I.sprite;
                                if (!ya) continue
                            } else if (!0 !== I._ispoly) {
                                I._ispoly = !0;
                                var aa = I;
                                aa.createVars([_[148], aa.polyline ? la(aa.polyline) : !1, Pb, _[453], aa.fillcolor ? Number(aa.fillcolor) : 11184810, Pb, _[461], aa.fillalpha ? Number(aa.fillalpha) : .5, Pb, _[129], aa.borderwidth ? Number(aa.borderwidth) : 3, Pb, _[128], aa.bordercolor ? Number(aa.bordercolor) : 11184810, Pb, _[126], aa.borderalpha ? Number(aa.borderalpha) : 1, Pb])
                            }
                            0 != I.haschanged_flags && I.processUpdates();
                            var R = I.getparsed(),
                                ya = ya ? ya.style : null,
                                aa = Number(I.DATA.alpha) * (I.keep ? 1 : vc);
                            ya && (ya.opacity = aa);
                            I._poly && (I._poly.style.opacity = aa);
                            aa = a || I.poschanged || I.forceupdate;
                            if (ba) aa && (Af(I), I.poschanged = !1);
                            else if (I.DATA.visible && I.loaded && aa) {
                                I.poschanged = !1;
                                ba = Number(I.DATA.flying);
                                A = (1 - ba) * Number(I.DATA.ath);
                                l = (1 - ba) * Number(I.DATA.atv);
                                0 < ba && (A += ba * qd(q, I.DATA.ath), l += ba * qd(t, I.DATA.atv));
                                var aa = !1,
                                    Y = (180 - A) * S,
                                    P = l * S;
                                wa.x = 1E3 * Math.cos(P) * Math.cos(Y);
                                wa.z = 1E3 * Math.cos(P) * Math.sin(Y);
                                wa.y = 1E3 * Math.sin(P);
                                Sd(e, wa);
                                var Z = !1,
                                    G = wa.x,
                                    k = wa.y,
                                    Y = wa.z;
                                if (Y >= y - u) var L = B / (Y + u),
                                    G = G * L,
                                    k = k * L + f,
                                    Z = 8E3 > Math.abs(G) && 8E3 > Math.abs(k),
                                    G = G + p,
                                    k = k + D;
                                if (I.DATA.distorted) {
                                    ya.pointerEvents = 50 <= Y + u && I.DATA.enabled ? "auto" : "none";
                                    aa = !0;
                                    P = I.DATA.scale;
                                    Y = Number(I.DATA.scale);
                                    isNaN(Y) && (Y = 1);
                                    I._hszscale = Y;
                                    1 == I.scaleflying && (Y = Y * (1 - ba) + Y / (B / (h / 2)) * C * ba);
                                    I.DATA.scale = 1;
                                    I.updatepluginpos(_[212]);
                                    I.DATA.scale = P;
                                    var T = I.pixelwidth,
                                        Q = I.pixelheight,
                                        O = P = 1;
                                    I._use_css_scale && (P = T / I.imagewidth, O = Q / I.imageheight);
                                    var sa = .5 * -Q,
                                        G = k = 0,
                                        ta = I._oxpix,
                                        Da = I._oypix,
                                        k = k + .5 * -T / P,
                                        G = G + sa / O,
                                        k = k - (R.ex - .5) * T / P,
                                        G = G - (R.ey - .5) * Q / O,
                                        R = -500,
                                        T = I._deepscale,
                                        Q = I.DATA.depth;
                                    isNaN(Q) && (Q = 1E3);
                                    sa = 1;
                                    0 == (Q | 0) ? (R = 0, T = 1) : sa = 1E3 / Q;
                                    2 == rd && (T *= 15);
                                    T /= 1 + ba + H;
                                    if (d.firefox || 6 < d.iosversion && .1 > I.scale) T = 10 / (1 + ba);
                                    0 < u && (T = 1);
                                    Y = Y * T * sa;
                                    R *= T;
                                    ta = ta * T * sa;
                                    Da = Da * T * sa;
                                    if (0 < u || d.firefox) aa = Z;
                                    Z = T * sa * c / 2;
                                    Z = _[349] + Z * I.tx + "px," + Z * I.ty + "px," + -Z * I.tz + "px) ";
                                    E[3] = Ea(D + f * (1 - ba));
                                    E[7] = Ea(-(v * (1 - ba) + t * ba));
                                    E[11] = Z + _[147] + Ea(-A);
                                    E[13] = Ea(l);
                                    E[17] = R;
                                    E[19] = Ea(1 * I.DATA.rotate + ba * z);
                                    E[21] = ta;
                                    E[23] = Da;
                                    I.inverserotation ? (E[25] = "Y(" + Ea(I.ry), E[27] = "X(" + Ea(I.rx), E[29] = "Z(" + Ea(-I.rz)) : (E[25] = "Z(" + Ea(I.rz), E[27] = "X(" + Ea(-I.rx), E[29] = "Y(" + Ea(-I.ry));
                                    E[31] = Y * P;
                                    E[33] = Y * O;
                                    I._istextfield && I.border && 0 < I.borderwidth && (ba = I.borderwidth * (da - 1), k += ba, G += ba);
                                    E[35] = k;
                                    E[37] = G;
                                    ya[oa + _[89]] = "0 0";
                                    ya[oa] = E.join("")
                                } else if (Y >= y && (Y = 1, Z)) {
                                    if (I.zoom || I.distorted) Y *= Number(2 * (1 - ba) * L + ba * da) / da;
                                    P = I.DATA.scale;
                                    I.updatepluginpos(_[222]);
                                    I.DATA.scale = P;
                                    T = I.pixelwidth;
                                    Q = I.pixelheight;
                                    O = P = 1;
                                    I._use_css_scale && (P = T / I.imagewidth, O = Q / I.imageheight);
                                    A = G;
                                    l = k;
                                    0 == I.accuracy && (A = Math.round(A), l = Math.round(l));
                                    G = k = 0;
                                    ta = I._oxpix * Y;
                                    Da = I._oypix * Y;
                                    sa = 0 != P ? T / P : 0;
                                    Z = 0 != O ? Q / O : 0;
                                    k -= (R.ex - .5) * sa;
                                    G -= (R.ey - .5) * Z;
                                    R = 2 * Y * (Math.max(T, Q) * I.DATA.scale + Math.max(ta, Da));
                                    if (0 < A + R || 0 < l + R || A - R < m || l - R < h) I._use_css_scale ? Y *= x : (k *= x, G *= x), aa = -sa / 2, R = -Z / 2, I._use_css_scale || (aa *= x, R *= x), I._istextfield && 0 == I.accuracy && (A |= 0, l |= 0, aa |= 0, R |= 0, ta |= 0, Da |= 0, k |= 0, G |= 0), J[1] = Ea(A), J[3] = Ea(l), J[5] = Ea(aa), J[7] = Ea(R), J[9] = Ea(1 * I.DATA.rotate - z * (1 - ba)), J[11] = ta, J[13] = Da, J[15] = Y * P, J[17] = Y * O, J[19] = Ea(k), J[21] = Ea(G), ba = J.join(""), ba = xc && 2 > rd && .5 < Number(I.zorder2) ? _[396] + (999999999E3 + I._zdeep) + "px) " + ba : _[311] + ba, ya[oa + _[89]] = _[568], ya[oa] = ba, aa = !0
                                }
                                0 == I.forceupdate && (ba = aa ? "" : "none", ba != ya.display && (ya.display = ba));
                                I.forceupdate = !1
                            }
                        }
                    }
            }
    
            function Ef(a, b, w, g) {
                function e() {
                    var a = Ha(),
                        c = a.style;
                    c.marginTop = c.marginBottom = t[17] * C + "px";
                    c.height = "1px";
                    c.backgroundColor = pa(t[18]);
                    "none" != t[19] && (c.borderBottom = _[435] + pa(t[19]));
                    y.appendChild(a)
                }
    
                function m(a) {
                    var c = a.changedTouches;
                    return (c && 0 < c.length ? c[0] : a).pageY
                }
    
                function n(a, c, b) {
                    var e = Ha(),
                        l = e.style;
                    l.padding = t[20] * C + "px";
                    l.border = t[21] + _[34] + pa(t[22]);
                    l.borderRadius = t[23] * C + "px";
                    l.marginTop = t[24] * C + "px";
                    l.marginBottom = t[24] * C + "px";
                    d.androidstock && (l[_[42]] = _[13]);
                    ab.touch && ca(e, d.browser.events.touchstart, function(a) {
                        function T(T) {
                            T = m(T) - O;
                            if (u > Fa) {
                                var a = k + T | 0;
                                a < Fa - u - 10 ? a = Fa - u - 10 : 10 < a && (a = 10);
                                z.style.top = a + "px"
                            }
                            15 < Math.abs(T) && (e.onmouseout(), ta = !0)
                        }
    
                        function Q() {
                            ha(U, l, T, !0);
                            ha(U, f, Q, !0);
                            if (0 == ta) e.onclick()
                        }
                        na(a);
                        a.stopPropagation();
                        if (b && c) {
                            e.onmouseover();
                            var O = m(a),
                                k = parseInt(z.style.top) | 0,
                                ta = !1,
                                l = d.browser.events.touchmove,
                                f = d.browser.events.touchend;
                            ca(U, l, T, !0);
                            ca(U, f, Q, !0)
                        }
                    }, !0);
                    b && c ? (l.cursor = _[10], e.onmousedown = function(a) {
                        a.stopPropagation()
                    }, e.onmouseover = function() {
                        l = this.style;
                        l.background = pa(t[25]);
                        l.border = t[21] + _[34] + pa(t[26]);
                        l.color = pa(t[27])
                    }, e.onmouseout = function() {
                        l = this.style;
                        l.background = "none";
                        l.border = t[21] + _[34] + pa(t[22]);
                        l.color = pa(t[4])
                    }, e.oncontextmenu = function(a) {
                        na(a);
                        a.stopPropagation();
                        e.onclick()
                    }, e.onclick = function(a) {
                        g ? (l = z.style, l.opacity = 1, l.transition = _[120], l.opacity = 0, setTimeout(w, 300)) : w();
                        V.callaction(b)
                    }) : (0 == c && (l.color = pa(t[5])), l.cursor = _[5]);
                    var k = Ha();
                    k.style.marginLeft = t[28] * C + "px";
                    k.style.marginRight = t[29] * C + "px";
                    k.innerHTML = a;
                    e.appendChild(k);
                    y.appendChild(e);
                    return k
                }
    
                function h() {
                    function a() {
                        return .4 > Math.random() ? " " : _[160]
                    }
                    var c = n("About" + a() + "the" + a() + _[56] + a() + _[492] + a() + _[482], !0, function() {
                        V.openurl(_[244])
                    });
                    try {
                        (new MutationObserver(function(a) {
                            a = U.getComputedStyle(c);
                            9 > Math.min(parseInt(a.width) | 0, parseInt(a.height) | 0) && (p = {}, Ya(_[121]))
                        })).observe(c, {
                            attributes: !1,
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        })
                    } catch (b) {}
                }
    
                function x() {
                    n(W.fullscreen ? q.exitfs : q.enterfs, !0, function() {
                        p.fullscreen = !p.fullscreen
                    })
                }
    
                function r() {
                    var a = d.android,
                        c = d.infoString,
                        c = c.split(_[525]).join("");
                    n((oa ? "" : _[153] + p.version + _[285] + p.build + _[319]) + (a ? _[540] : "") + c + Za.infoString + (a ? _[505] : ""), !0, null)
                }
    
                function D() {
                    Ta && Ta[2] && n(Ta[2], !0, function() {
                        V.openurl(Ta[3])
                    })
                }
    
                function B() {
                    var c = z.getBoundingClientRect(),
                        d = c.width,
                        c = c.height,
                        l = b;
                    if (0 < d && 0 < c) {
                        u = c;
                        g && (a -= d >> 1, a + d > Sa && (a = Sa - d - 10), 10 > a && (a = 10));
                        for (; a + d > Sa;) a -= d / 2;
                        0 > a && (a = 0);
                        b + c > Fa && (b = g ? Fa - c - 10 : b - c);
                        0 > b && (g ? b = Fa - c >> 1 : l > Fa / 2 ? (b = l - c, 0 > b && (b = 4)) : (b = l, b + c > Fa && (b = Fa - 4 - c)));
                        f = z.style;
                        f.left = (a | 0) + "px";
                        f.top = (b | 0) + "px";
                        g && (f.transition = _[120], f.opacity = 1)
                    } else 10 > ++aa && setTimeout(B, 32)
                }
                var q = p.contextmenu;
                if (g && 0 == q.touch) return null;
                ua(_[336], !0);
                var t = null,
                    v = d.browser.domain;
                q.customstyle && (null == v || _[133] == v || 0 == d.realDesktop || d.realDesktop && 0 != (Ua & 16)) && (t = G(q.customstyle).split("|"), 30 != t.length && (t = null));
                null == t && (t = (d.mac ? "default|14|default|0xFFFFFF|0x000000|0xBBBBBB|0|0|5|2|2|8|0x66000000|0|0|1|4|5|0xEEEEEE|none|1|0|0|0|3|0xEEEEEE|0|0|20|12" : "default|default|150%|0xFFFFFF|0x000000|0xBBBBBB|1|0xBBBBBB|0|2|2|8|0x66000000|0|0|2|2|5|0xE0E0E0|none|4|0|0|0|3|0xEEEEEE|0|0|18|12").split("|"));
                var f = null,
                    u = 0,
                    z = Ha();
                z.onselectstart = _[335];
                d.desktop && d.chrome && (z.style.opacity = .999);
                if (d.linux || d.android) t[1] = 12;
                f = z.style;
                f.position = _[0];
                f.zIndex = 99999999999;
                var C = 1;
                d.androidstock ? C = d.pixelratio : d.chrome && 40 > d.chromeversion && (f[fb] = _[29]);
                _[5] != t[0] ? f.fontFamily = t[0] : d.ios ? (f.fontFamily = _[21], f.fontWeight = _[558], _[5] == t[1] && (t[1] = 14)) : (f.font = "menu", d.firefox || 1 == d.pixelratio || (f.fontSize = "12px"));
                _[5] != t[1] && (f.fontSize = t[1] * C * (d.android ? 1.2 : 1) + "px");
                _[5] != t[2] && (f.lineHeight = t[2]);
                f.background = pa(t[3]);
                f.color = pa(t[4]);
                f.border = t[6] + _[34] + pa(t[7]);
                f.borderRadius = t[8] * C + "px";
                f.minWidth = "150px";
                f.textAlign = "left";
                f[cc] = t[9] + "px " + t[10] + "px " + t[11] + "px " + pa(t[12]);
                var y = Ha(),
                    f = y.style;
                f.border = t[13] + _[34] + pa(t[14]);
                f.paddingTop = t[15] * C + "px";
                f.paddingBottom = t[16] * C + "px";
                ab.touch && ca(y, d.browser.events.touchstart, function(a) {
                    na(a);
                    a.stopPropagation()
                }, !1);
                z.appendChild(y);
                var v = q.item.getArray(),
                    A, l, c = 0,
                    H, E = v.length,
                    J, oa = 0 != (Ua & 16),
                    wa = oa,
                    ya = oa,
                    I = !1,
                    ba = !1;
                for (J = 0; J < E; J++)
                    if (A = v[J])
                        if (l = A.caption) l = be(unescape(l)), A.separator && 0 < c && e(), H = G(l), _[56] == H ? 0 == wa && (wa = !0, h(), c++) : Ta && _[521] == H ? 0 == ya && (ya = !0, D(), c++) : _[131] == H ? (I = !0, d.fullscreensupport && (x(), c++)) : _[379] == H ? (ba = !0, r(), c++) : (H = A.visible && (!A.showif || V.calc(null, A.showif))) ? (n(l, A.enabled, A.onclick), c++) : 0 == H && A.separator && 0 < c && y.removeChild(y.lastChild);
                Ta && 0 == ya && (0 < c && (e(), c = 0), D());
                0 == wa && (0 < c && e(), h(), c++);
                0 == I && 1 == q.fullscreen && d.fullscreensupport && (x(), c++);
                0 == ba && 1 == q.versioninfo && (0 < c && e(), r(), c++);
                if (0 == c) return null;
                f = z.style;
                f.left = _[141];
                f.top = "10px";
                var aa = 0;
                g && (f.opacity = 0);
                setTimeout(B, 16);
                return z
            }
    
            function Ff() {
                function a(a, b, d) {
                    a.__defineGetter__(b, d)
                }
                p = new Fc;
                p.set = X;
                p.get = N;
                p.call = Zc;
                p.trace = va;
                Object.defineProperty(p, _[543], {
                    value: V
                });
                p.Kloader = ma;
                p["true"] = !0;
                p[_[27]] = !1;
                p.strict = !1;
                p.version = _[471];
                p.build = _[433];
                p.buildversion = p.version;
                p.debugmode = !1;
                p.tweentypes = yc;
                p.basedir = _[425];
                p.lasterror = "";
                p.showtext = function() {};
                p.bgcolor = 0;
                p[zc[0]] = p[zc[1]] = !0;
                p.haveexternalinterface = !0;
                p.havenetworkaccess = !0;
                p.device = d;
                p.browser = d.browser;
                p._have_top_access = d.topAccess;
                p._isrealdesktop = d.realDesktop;
                p.iosversion = d.iosversion;
                p.isphone = d.iphone;
                p.ispad = d.ipad;
                p.isandroid = d.android;
                p.ishtml5 = !0;
                p.isflash = !1;
                p.ismobile = d.mobile;
                p.istablet = d.tablet;
                p.isdesktop = d.desktop;
                p.istouchdevice = d.touchdevice;
                p.isgesturedevice = d.gesturedevice;
                a(p, _[421], function() {
                    return bb / da
                });
                a(p, _[401], function() {
                    return Xb / da
                });
                Wa(p, _[417], function() {
                    return da
                }, function(a) {
                    a = Number(a);
                    isNaN(a) && (a = 1);
                    1E-4 < Math.abs(a - da) && (da = a, W.onResize(null, !0))
                });
                dc = p.area = new Gf;
                p.wheeldelta = 0;
                p.wheeldelta_raw = Number.NaN;
                p.wheeldelta_touchscale = 0;
                p.keycode = 0;
                p.idletime = .5;
                p.__defineGetter__(_[455], Pa);
                p.__defineGetter__(_[603], Math.random);
                Wa(p, _[131], function() {
                    return W.fullscreen
                }, function(a) {
                    W.setFullscreen(la(a))
                });
                Wa(p, _[462], function() {
                    return ma.swfpath
                }, function(a) {
                    ma.swfpath = a
                });
                p.hlookat_moveforce = 0;
                p.vlookat_moveforce = 0;
                p.fov_moveforce = 0;
                p.multireslevel = 0;
                p.lockmultireslevel = "-1";
                p.downloadlockedlevel = !1;
                F = p.mouse = {
                    downLayer: !1,
                    down: !1,
                    up: !1,
                    moved: !1,
                    dragging: !1,
                    vinvert: !1,
                    downx: 0,
                    downy: 0,
                    x: 0,
                    y: 0,
                    clickx: 0,
                    clicky: 0
                };
                a(F, _[587], function() {
                    return F.x + dc.pixelx
                });
                a(F, _[585], function() {
                    return F.y + dc.pixely
                });
                a(F, "dd", function() {
                    var a = F.x - F.downx,
                        b = F.y - F.downy;
                    return Math.sqrt(a * a + b * b)
                });
                r = p.view = new Hf;
                p.screentosphere = r.screentosphere;
                p.spheretoscreen = r.spheretoscreen;
                p.loadFile = ma.loadfile;
                p.decodeLicense = ma.decodeLicense;
                p.haveLicense = Vc(function(a) {
                    var b = !1,
                        d = Ua;
                    switch (a.toLowerCase().charCodeAt(0)) {
                        case 107:
                            b = 0 != (d & 1);
                            break;
                        case 109:
                            b = 0 != (d & 128);
                            break;
                        case 98:
                            b = 0 != (d & 16)
                    }
                    return b
                });
                p.parsepath = p.parsePath = ma.parsePath;
                p.contextmenu = new If;
                ga = p.control = new Jf;
                je = p.cursors = new Kf;
                K = p.image = {};
                Ca = p.plugin = new Vb(Ic);
                p.layer = Ca;
                Bb = p.hotspot = new Vb(Lf);
                Yc = p.events = new Vb(null, !0);
                Yc.dispatch = ua;
                ka = p.display = {
                    currentfps: 60,
                    r_ft: 16,
                    FRM: 0,
                    _framebufferscale: 1,
                    mipmapping: "auto",
                    loadwhilemoving: d.realDesktop ? "true" : "auto",
                    _stereo: !1,
                    stereooverlap: 0,
                    hardwarelimit: d.realDesktop && d.safari && "6" > d.safariversion ? 2E3 : d.realDesktop && !d.webgl ? 2560 : d.iphone && d.retina && !d.iphone5 ? 800 : d.iphone && !d.retina ? 600 : d.ipod && d.retina ? 640 : d.mobile || d.tablet ? 1024 : 4096
                };
                Wa(ka, _[162], function() {
                    return ka._stereo
                }, function(a) {
                    a = la(a);
                    ka._stereo != a && (a = a && d.webgl, ka._stereo = a, W.svglayer && (W.svglayer.style.display = a ? "none" : ""), r.haschanged = !0)
                });
                Wa(ka, _[468], function() {
                    var a = ka.FRM | 0;
                    return 0 == a ? "auto" : "" + a
                }, function(a) {
                    a |= 0;
                    0 > a && (a = 0);
                    ka.FRM = a
                });
                Wa(ka, _[260], function() {
                    return ka._framebufferscale
                }, function(a) {
                    a = Number(a);
                    if (isNaN(a) || 0 == a) a = 1;
                    ka._framebufferscale = a;
                    W.onResize(null, !0)
                });
                p.memory = {
                    maxmem: d.realDesktop ? Math.min(Math.max(150, 48 * screen.availWidth * screen.availHeight >> 20), 400) : d.ios && 7.1 > d.iosversion || d.iphone && !d.iphone5 ? 40 : 50
                };
                p.network = {
                    retrycount: 2
                };
                cd = p.progress = {};
                cd.progress = 0;
                vb = new Ic;
                vb.name = "STAGE";
                Cb = new Ic;
                Cb.name = _[552];
                Ca.alpha = 1;
                Bb.alpha = 1;
                Bb.visible = !0;
                Wa(Ca, _[16], function() {
                    return "none" != W.pluginlayer.style.display
                }, function(a) {
                    W.pluginlayer.style.display = la(a) ? "" : "none"
                });
                p.xml = {
                    url: "",
                    content: null,
                    scene: null,
                    sceneNEW: null
                };
                var b = p.security = {};
                Wa(b, "cors", function() {
                    return Lb
                }, function(a) {
                    Lb = a
                });
                Mb = p.autorotate = new Mf;
                p.math = function() {
                    function a(b) {
                        var d = N(b, V.actioncaller);
                        return Number(null !== d ? d : b)
                    }
    
                    function b(d) {
                        return function(b, e) {
                            X(b, Math[d](a(void 0 === e ? b : e)), !1, V.actioncaller)
                        }
                    }
                    var d = {},
                        m = _[175].split(" "),
                        n;
                    for (n in m) {
                        var h = m[n];
                        d[h] = b(h)
                    }
                    d.pi = Ka;
                    d.atan2 = function(b, d, e) {
                        X(b, Math.atan2(a(d), a(e)), !1, V.actioncaller)
                    };
                    d.min = function() {
                        var b = arguments,
                            d = b.length,
                            e = 3 > d ? 0 : 1,
                            g = a(b[e]);
                        for (e++; e < d; e++) g = Math.min(g, a(b[e]));
                        X(b[0], g, !1, V.actioncaller)
                    };
                    d.max = function() {
                        var b = arguments,
                            d = b.length,
                            e = 3 > d ? 0 : 1,
                            g = a(b[e]);
                        for (e++; e < d; e++) g = Math.max(g, a(b[e]));
                        X(b[0], g, !1, V.actioncaller)
                    };
                    d.pow = V.pow;
                    return d
                }();
                p.action = new Vb;
                p.scene = new Vb;
                p.data = new Vb;
                p.addlayer = p.addplugin = function(a) {
                    if (!Od(a, _[232] + a + ")")) return null;
                    a = Ca.createItem(a);
                    if (!a) return null;
                    null == a.sprite && (a._dyn = !0, a.create(), null == a._parent && W.pluginlayer.appendChild(a.sprite));
                    return a
                };
                p.removelayer = p.removeplugin = function(a, b) {
                    var d = Ca.getItem(a);
                    if (d) {
                        if (la(b)) {
                            var m = d._childs;
                            if (m)
                                for (; 0 < m.length;) p.removeplugin(m[0].name, !0)
                        }
                        d.visible = !1;
                        d.parent = null;
                        d.sprite && W.pluginlayer.removeChild(d.sprite);
                        d.destroy();
                        Ca.removeItem(a)
                    }
                };
                p.addhotspot = function(a) {
                    if (!Od(a, _[398] + a + ")")) return null;
                    a = Bb.createItem(a);
                    if (!a) return null;
                    0 == a._ready && (a._dyn = !0, a.create(), a.sprite && W.hotspotlayer.appendChild(a.sprite));
                    Td = !0;
                    return a
                };
                p.removehotspot = function(a) {
                    var b = Bb.getItem(a);
                    if (b) {
                        b.visible = !1;
                        b.parent = null;
                        if (b.sprite) try {
                            W.hotspotlayer.removeChild(b.sprite)
                        } catch (d) {}
                        if (b._poly) {
                            try {
                                W.svglayer.removeChild(b._poly)
                            } catch (m) {}
                            b._poly.kobject = null;
                            b._poly = null
                        }
                        b.destroy();
                        Bb.removeItem(a)
                    }
                }
            }
    
            function Nf() {
                var a = p.webVR;
                V.processTicks();
                var b = r.haschanged;
                cb++;
                ka.frame = cb;
                Za.fps();
                var w = W.resizeCheck(),
                    g = V.processAnimations(),
                    b = b | r.haschanged;
                if (d.webgl || !d.ios || d.ios && 5 <= d.iosversion) g = !1;
                g |= Td;
                Td = !1;
                g && (r._hlookat += ((cb & 1) - .5) / (1 + r.r_zoom), b = !0);
                b |= Va.handleloading();
                b |= ab.handleFrictions();
                b |= Va.idlecheck();
                b |= r.continuousupdates;
                V.processTicks();
                nb && (b = !0, nb = !1);
                a && a.enabled && (b = !0);
                b || w ? (Za.startFrame(), Va.updateview(0, !0), Za.finishFrame()) : (r.haschanged && r.updateView(), ie(!1), d.webgl && Za.hittesthotspots(null));
                Va.updateplugins(w);
                d.desktop && Va.checkHovering();
                a && a.enabled && a.submitframe && a.submitframe()
            }
            var lc = this;
            try {
                !Object.prototype.__defineGetter__ && Object.defineProperty({}, "x", {
                    get: function() {
                        return !0
                    }
                }).x && (Object.defineProperty(Object.prototype, _[265], {
                    enumerable: !1,
                    configurable: !0,
                    value: function(a, b) {
                        Object.defineProperty(this, a, {
                            get: b,
                            enumerable: !0,
                            configurable: !0
                        })
                    }
                }), Object.defineProperty(Object.prototype, _[266], {
                    enumerable: !1,
                    configurable: !0,
                    value: function(a, b) {
                        Object.defineProperty(this, a, {
                            set: b,
                            enumerable: !0,
                            configurable: !0
                        })
                    }
                }))
            } catch (Tf) {}
            var db = navigator,
                ea = document,
                U = window,
                Ka = Math.PI,
                S = Ka / 180,
                Jc = Number.NaN,
                Ud = 0,
                Pa = U.performance && U.performance.now ? function() {
                    return U.performance.now() - Ud
                } : function() {
                    return (new Date).getTime() - Ud
                },
                Ud = Pa(),
                dd = String.fromCharCode,
                p = null,
                bb = 0,
                Xb = 0,
                Sa = 0,
                Fa = 0,
                da = 1,
                Vd = 1,
                Ac = 0,
                dc = null,
                Mb = null,
                ga = null,
                je = null,
                ka = null,
                Yc = null,
                cd = null,
                Bb = null,
                K = null,
                F = null,
                Ca = null,
                r = null,
                vb = null,
                Cb = null,
                ke = !1,
                mc = !1,
                le = !1,
                De = 0,
                cb = 0,
                me = 60,
                Ua = 14,
                ne = null,
                zc = [_[432], _[584]],
                Ta = null,
                Lb = "",
                Wd = null,
                Jb = null,
                Qb = null,
                ib = null,
                Td = !1,
                Rb = 0,
                Wc = 0,
                nb = !1,
                xc = !0,
                d = {
                    runDetection: function(a) {
                        function b() {
                            var a = screen.width,
                                c = screen.height,
                                b = d.topAccess ? top : U,
                                k = b.innerWidth,
                                l = b.innerHeight,
                                b = b.orientation | 0,
                                T = a / (c + 1),
                                Q = k / (l + 1);
                            if (1 < T && 1 > Q || 1 > T && 1 < Q) T = a, a = c, c = T;
                            D.width = a;
                            D.height = c;
                            D.orientation = b;
                            d.window = {
                                width: k,
                                height: l
                            };
                            a /= k;
                            return d.pagescale = a
                        }
    
                        function w(a, c) {
                            for (var b = ["ms", "Moz", _[595], "O"], d = 0; 5 > d; d++) {
                                var l = 0 < d ? b[d - 1] + a.slice(0, 1).toUpperCase() + a.slice(1) : a;
                                if (void 0 !== F.style[l]) return l
                            }
                            return null
                        }
                        var g = "flash html5 mobile tablet desktop ie edge webkit firefox ios iosversion iphone ipod ipad retina hidpi android androidstock blackberry touchdevice gesturedevice fullscreensupport windows mac linux air standalone silk".split(" "),
                            e, m, n, h, p = ea.documentElement,
                            r = a.mobilescale;
                        isNaN(r) && (r = .5);
                        m = g.length;
                        for (e = 0; e < m; e++) n = g[e], d[n] = !1;
                        d.html5 = d.html = !0;
                        d.iosversion = 0;
                        d.css3d = !1;
                        d.webgl = !1;
                        d.topAccess = !1;
                        d.simulator = !1;
                        d.multiressupport = !1;
                        d.panovideosupport = !1;
                        var D = d.screen = {};
                        try {
                            top && top.document && (d.topAccess = !0)
                        } catch (B) {}
                        var q = db.platform,
                            g = G(q),
                            t = db.userAgent,
                            v = G(t),
                            f = m = "";
                        0 <= g.indexOf("win") ? d.windows = !0 : 0 <= g.indexOf("mac") ? d.mac = !0 : 0 <= g.indexOf("linux") && (d.linux = !0);
                        var u = U.devicePixelRatio,
                            z = 2 <= u;
                        e = 1;
                        var C = 0 <= g.indexOf("ipod"),
                            y = 0 <= g.indexOf(_[58]),
                            A = 0 <= g.indexOf("ipad"),
                            l = y || C || A,
                            c = v.indexOf("silk/"),
                            H = 0 <= v.indexOf(_[572]) || 0 <= v.indexOf(_[164]),
                            E = 0 > c && !H && 0 <= v.indexOf(_[529]),
                            J = n = !1,
                            oa = !1,
                            wa = t.indexOf(_[166]),
                            ya = U.chrome && !H,
                            I = t.indexOf(_[531]),
                            ba = !1,
                            aa = (l || E || 0 <= c) && (d.windows || d.mac);
                        H && (wa = I = -1);
                        var g = !1,
                            R = 0;
                        Vd = b();
                        if (l) {
                            if (d.ios = !0, m = q, h = t.indexOf("OS "), 0 < h && (h += 3, R = t.slice(h, t.indexOf(" ", h)).split("_").join("."), m += _[546] + R, d.iosversion = parseFloat(R), "6.0" <= R && (y && !z || C && z) && (d._iOS6_canvas_bug = !0)), n = y || C, J = A, h = Math.max(screen.width, screen.height), d.iphone = y || C, d.iphone5 = y && 500 < h, d.ip6p = y && 735 < h, d.ipod = C, d.ipad = A, d.retina = z, y || C) e *= r
                        } else if (E)
                            if (h = t.indexOf(_[571]), R = parseFloat(t.slice(h + 8)), d.android = !0, d.linux = !1, d.androidversion = R, m = t.slice(h, t.indexOf(";", h)), n = 0 < v.indexOf(_[57]), ya && 0 < v.indexOf(_[350]) && (n = 480 > Math.min(screen.width, screen.height)), J = !n, h = t.indexOf(")"), 5 < h && (R = t.slice(0, h).lastIndexOf(";"), 5 < R && (z = t.indexOf(_[605], R), 0 < z && (h = z), m += " (" + t.slice(R + 2, h) + ")")), 0 < I && isNaN(u) && (u = Vd), J && 1 < u) {
                                if (d.hidpi = !0, e = u, 0 <= wa || 0 < I) d.hidpi = !1, e = 1
                            } else n && (d.hidpi = 1 < u, e = u * r, .5 > e && (e = .5), 0 <= wa || 0 < I || aa) && (d.hidpi = !1, e = r);
                        else {
                            if (0 <= v.indexOf(_[436]) || 0 <= v.indexOf(_[440]) || 0 <= v.indexOf("bb10")) ba = !0, d.blackberry = !0, m = _[389], g = !0;
                            0 <= c ? (ba = !0, d.silk = !0, m = _[370] + parseFloat(v.slice(c + 5)).toFixed(2), oa = !1, n = 0 <= v.indexOf(_[57]), J = !n, g = !0) : 0 <= v.indexOf("ipad") || 0 <= v.indexOf(_[58]) ? oa = ba = !0 : 0 <= v.indexOf(_[165]) ? (J = !0, m += _[610]) : 0 <= v.indexOf(_[57]) ? (n = !0, m += _[608], e = r) : oa = !0
                        }
                        C = db.vendor && 0 <= db.vendor.indexOf("Apple");
                        y = U.opera;
                        z = !1;
                        oa && (m = _[344]);
                        h = t.indexOf(_[557]);
                        0 < h && (C || y || E) && (h += 8, R = t.slice(h, t.indexOf(" ", h)), C ? (d.safari = !0, d.safariversion = R, f = _[579]) : (E && (f = _[284], g = !0), y && (d.opera = !0, d.operaversion = R, f = "Opera")), f += " " + R);
                        l && (h = t.indexOf(_[600]), 0 < h && (d.safari = !0, h += 6, R = parseFloat(t.slice(h, t.indexOf(" ", h))), d.crios = R, f = _[548] + R.toFixed(1)));
                        h = wa;
                        if (0 <= h || ya) R = parseFloat(t.slice(h + 7)), d.chrome = !0, d.chromeversion = R, d.chromemobile = E || 0 <= c, f = _[166] + (isNaN(R) ? "" : " " + R.toFixed(1)), h = v.indexOf("opr/"), 0 < h && (f = _[586] + parseFloat(t.slice(h + 4)).toFixed(1) + _[483]), E && 28 > R && (g = !0), E && 1 < u && 20 > R && !aa && (d.hidpi = !0, e = u, n && (e *= r));
                        else if (h = I, 0 > h && (h = t.indexOf(_[601])), 0 <= h && (R = parseFloat(t.slice(1 + t.indexOf("/", h))), d.firefox = !0, d.firefoxversion = R, f = _[513] + (isNaN(R) ? "" : R.toFixed(1)), E && 35 > R && (g = !0)), h = t.indexOf("MSIE "), z = 0 <= h || H) oa = d.ie = !0, J = !1, f = _[249], 0 < v.indexOf(_[511]) || 0 < v.indexOf(_[347]) ? (n = !0, oa = !1, f = _[565] + f, e = r) : 0 < v.indexOf("arm;") && 1 < db.msMaxTouchPoints && (J = !0, oa = !1, f = _[555] + f, g = !0, e = 1), 0 <= h ? (R = t.slice(h + 4, t.indexOf(";", h)), d.ieversion = parseFloat(R), f += R) : (h = t.indexOf("rv:"), 0 <= h ? (R = parseFloat(t.slice(h + 3)), !isNaN(R) && 10 <= R && 100 > R && (d.ieversion = R, f += " " + R.toFixed(1))) : (h = v.indexOf(_[164]), 0 <= h && (f = _[316], d.edge = !0, xc = !1, R = parseFloat(t.slice(h + 6)), isNaN(R) || (d.ieversion = R, f += " " + R.toFixed(5))))), m = f, f = "";
                        d.android && (d.androidstock = !(d.chrome || d.firefox || d.opera));
                        0 == d.ie && 0 < (h = v.indexOf(_[545])) && (R = parseFloat(v.slice(h + 7)), !isNaN(R) && 0 < R && (d.webkit = !0, d.webkitversion = R));
                        d.pixelratio = isNaN(u) ? 1 : u;
                        d.fractionalscaling = 0 != d.pixelratio % 1;
                        var u = {},
                            F = Ha();
                        u.find = w;
                        u.prefix = z ? "ms" : d.firefox ? "moz" : d.safari || d.chrome || d.androidstock ? _[96] : "";
                        u.perspective = w(_[381]);
                        u.transform = w(_[466]);
                        u.backgroundsize = w(_[321]);
                        u.boxshadow = w(_[452]);
                        u.boxshadow_style = _[276] == u.boxshadow ? _[241] : _[376] == u.boxshadow ? _[303] : _[441];
                        E && "4.0" > d.androidversion && (u.perspective = null);
                        u.perspective && (d.css3d = !0, _[256] == u.perspective && U.matchMedia && (v = U.matchMedia(_[218]))) && (d.css3d = 1 == v.matches);
                        F = null;
                        d.webgl = function() {
                            var a = null;
                            try {
                                for (var c = Ha(2), b = 0; 4 > b && !(a = c.getContext([_[64], _[105], _[136], _[140]][b])); b++);
                            } catch (d) {}
                            return null != a
                        }();
                        v = {};
                        v.useragent = t;
                        v.platform = q;
                        v.domain = null;
                        v.location = U.location.href;
                        v.protocol = ("" + v.location).split("://")[0].toLowerCase();
                        q = v.events = {};
                        v.css = u;
                        if (l || E || void 0 !== p.ontouchstart || ba) d.touchdevice = !0, d.gesturedevice = !0;
                        l = 0;
                        d.ie && (db.msPointerEnabled || db.pointerEnabled) && (E = db.msMaxTouchPoints || db.maxTouchPoints, db.msPointerEnabled && (l = 2), db.pointerEnabled && (l = 1), d.touchdevice = 0 < E, d.gesturedevice = 1 < E);
                        q.touchstart = [_[47], _[380], _[334]][l];
                        q.touchmove = [_[49], _[384], _[343]][l];
                        q.touchend = [_[52], _[450], _[397]][l];
                        q.touchcancel = [_[394], _[330], _[305]][l];
                        q.gesturestart = [_[365], _[116], _[116]][l];
                        q.gesturechange = [_[340], _[112], _[112]][l];
                        q.gestureend = [_[428], _[124], _[124]][l];
                        q.pointerover = [_[12], _[12], _[44]][l];
                        q.pointerout = [_[14], _[14], _[45]][l];
                        d.pointerEvents = d.opera || d.ie && 11 > d.ieversion ? !1 : !0;
                        f && (m += " - " + f);
                        d.realDesktop = oa;
                        f = a.vars ? G(a.vars.simulatedevice) : null;
                        _[458] == f && (0 <= t.indexOf(_[158]) || 0 <= t.indexOf("iPod") ? f = _[58] : 0 <= t.indexOf("iPad") && (f = "ipad"));
                        d.touchdeviceNS = d.touchdevice;
                        t = _[58] == f ? 1 : "ipad" == f ? 2 : 0;
                        0 < t && (d.simulator = !0, d.crios = 0, m += " - " + (1 == t ? _[158] : "iPad") + _[422], e = t * r, n = 1 == t, J = 2 == t, oa = !1, d.ios = !0, d.iphone = n, d.ipad = J, d.touchdevice = !0, d.gesturedevice = !0);
                        d.browser = v;
                        d.infoString = m;
                        a = G(a.fakedevice);
                        _[57] == a ? (n = !0, J = oa = !1) : _[165] == a ? (J = !0, n = oa = !1) : _[532] == a && (oa = !0, n = J = !1);
                        d.mobile = n;
                        d.tablet = J;
                        d.desktop = oa;
                        d.normal = J || oa;
                        d.handheld = n || J;
                        d.touch = d.gesturedevice;
                        d.mouse = oa;
                        d.getViewportScale = b;
                        da = e;
                        0 == d.simulator && (ea.fullscreenEnabled || ea.mozFullScreenEnabled || ea.webkitFullScreenEnabled || ea.webkitFullscreenEnabled || ea.msFullscreenEnabled || oa && d.safari && 6 > parseInt(d.safariversion)) && (a = [_[257], _[223], _[214], _[216], _[239]], r = -1, e = null, m = _[269], p[a[0]] ? (e = "", r = 0) : p[a[1]] ? (e = "moz", r = 1) : p[a[2]] ? (e = _[96], r = 2) : p[a[3]] ? (e = _[96], r = 3) : p[a[4]] && (e = "MS", m = _[274], r = 4), 0 <= r && 0 == g && (d.fullscreensupport = !0, q.fullscreenchange = e + m, q.requestfullscreen = a[r]));
                        d.buildList();
                        delete d.runDetection
                    },
                    buildList: function() {
                        var a, b = "|all";
                        for (a in d) a == G(a) && d[a] && (b += "|" + a);
                        d.haveList = b + "|"
                    },
                    checkSupport: function(a) {
                        a = G(a).split("no-").join("!").split(".or.").join("|").split(".and.").join("+").split("|");
                        var b, p, g = a.length;
                        for (b = 0; b < g; b++) {
                            var e = a[b].split("+"),
                                m = !1;
                            for (p = 0; p < e.length; p++) {
                                var m = e[p],
                                    n = !1;
                                33 == m.charCodeAt(0) && (m = m.slice(1), n = !0);
                                if (0 == m.indexOf("ios") && d.ios)
                                    if (3 == m.length || d.iosversion >= parseFloat(m.slice(3)))
                                        if (n) {
                                            m = !1;
                                            break
                                        } else m = !0;
                                else if (n) m = !0;
                                else {
                                    m = !1;
                                    break
                                } else if (0 <= d.haveList.indexOf("|" + m + "|"))
                                    if (n) {
                                        m = !1;
                                        break
                                    } else m = !0;
                                else if (n) m = !0;
                                else {
                                    m = !1;
                                    break
                                }
                            }
                            if (m) return !0
                        }
                        return !1
                    }
                },
                rd = 1,
                Qd = !1,
                fb = null,
                Ee = null,
                oe = null,
                ed = null,
                cc = null,
                Fe = !1,
                Kc = 0,
                Fc = function() {
                    var a = this;
                    a._type = "base";
                    a.registerattribute = function(b, d, g, e) {
                        b = G(b);
                        g && e ? (a.hasOwnProperty(b) && (d = Ab(a[b], typeof d)), a.__defineGetter__(b, e), a.__defineSetter__(b, g), g(d)) : a.hasOwnProperty(b) ? a[b] = Ab(a[b], typeof d) : a[b] = d
                    };
                    a.registerSetterGetter = function(b, d, g) {
                        var e = void 0;
                        a.hasOwnProperty(b) && (e = a[b]);
                        a.__defineGetter__(b, g);
                        a.__defineSetter__(b, d);
                        void 0 !== e && (e = Ab(e, typeof g()), d(e))
                    };
                    a.createobject = function(b) {
                        b = G(b);
                        try {
                            return a.hasOwnProperty(b) ? a[b] : a[b] = new Fc
                        } catch (d) {}
                        return null
                    };
                    a.removeobject = a.removeattribute = function(b) {
                        b = G(b);
                        try {
                            a[b] = null, delete a[b]
                        } catch (d) {}
                    };
                    a.createarray = function(b) {
                        b = G(b);
                        return a[b] && a[b].isArray ? a[b] : a[b] = new Vb(Fc)
                    };
                    a.removearray = function(b) {
                        b = G(b);
                        a[b] && a[b].isArray && (a[b] = null, delete a[b])
                    };
                    a.getattributes = function() {
                        var b = [],
                            d = ["index", _[504], "DATA"],
                            g;
                        for (g in a) _[15] != typeof a[g] && -1 == d.indexOf(g) && "_" != g.charAt(0) && b.push(g);
                        return b
                    }
                },
                Vb = function(a, b) {
                    var d = [],
                        g = {};
                    this.isArray = !0;
                    this.isDynArray = 1 == b;
                    this.__defineGetter__("count", function() {
                        return d.length
                    });
                    this.__defineSetter__("count", function(a) {
                        0 == a ? (d = [], g = {}) : d.length = a
                    });
                    this.createItem = function(b, m) {
                        var n = -1,
                            h = null,
                            n = String(b).charCodeAt(0);
                        if (48 <= n && 57 >= n) {
                            if (m) return null;
                            n = parseInt(b, 10);
                            h = d[n];
                            if (null == h || void 0 == h) h = null != a ? new a : {}, h.name = "n" + n, h.index = n, d[n] = h, g[h.name] = h
                        } else if (b = G(b), h = g[b], null == h || void 0 == h) h = m ? m : null != a ? new a : {}, n = d.push(h) - 1, h.index = n, h.name = b, d[n] = h, g[b] = h;
                        return h
                    };
                    this.getItem = function(a) {
                        var b = -1,
                            b = String(a).charCodeAt(0);
                        48 <= b && 57 >= b ? (b = parseInt(a, 10), a = d[b]) : a = g[G(a)];
                        return a
                    };
                    this.getArray = function() {
                        return d
                    };
                    this.renameItem = function(a, b) {
                        var n = -1,
                            n = String(a).charCodeAt(0);
                        48 <= n && 57 >= n ? (n = parseInt(a, 10), n = d[n]) : n = g[G(a)];
                        n && (delete g[n.name], b = G(b), n.name = b, g[b] = n)
                    };
                    this.removearrayitem = this.removeItem = function(a) {
                        var b = -1,
                            b = null;
                        a = String(a);
                        b = String(a).charCodeAt(0);
                        48 <= b && 57 >= b ? (b = parseInt(a, 10), b = d[b]) : b = g[G(a)];
                        if (b) {
                            g[b.name] = null;
                            delete g[b.name];
                            d.splice(b.index, 1);
                            var n;
                            n = d.length;
                            for (a = b.index; a < n; a++) d[a].index--
                        }
                        return b
                    };
                    this.sortby = function(a, b) {
                        var g, h;
                        h = d.length;
                        if (1 < h) {
                            var p = 1,
                                r = !1,
                                D = !1;
                            _[1] === typeof b && (b = b.toLowerCase(), 0 <= b.indexOf(_[412]) && (p = -1), 0 <= b.indexOf(_[549]) && (r = !0), 0 <= b.indexOf(_[290]) && (D = !0));
                            d.sort(function(b, d) {
                                var g = b[a],
                                    h = d[a];
                                r ? (g = Number(g), isNaN(g) && (g = void 0), h = Number(h), isNaN(h) && (h = void 0), void 0 === g && void 0 === h && (g = b[a], h = d[a])) : D && (null != g && (g = ("" + g).toLowerCase()), null != h && (h = ("" + h).toLowerCase()));
                                return void 0 === g && void 0 !== h ? +p : void 0 !== g && void 0 === h || g < h ? -p : g > h ? +p : 0
                            });
                            for (g = 0; g < h; g++) d[g].index = g
                        }
                    }
                },
                Xe = Array(256),
                ma = {};
            (function() {
                function a(a) {
                    var b, d, f, e, l = a.length;
                    b = 3 * (l >> 2) - ("=" == a.charAt(l - 1)) - ("=" == a.charAt(l - 2));
                    for (var c = new D(b), g = b / 3 | 0, h = 0, m = 0; 0 < g--;) b = q[a.charCodeAt(h) & 127], d = q[a.charCodeAt(h + 1) & 127], f = q[a.charCodeAt(h + 2) & 127], e = q[a.charCodeAt(h + 3) & 127], c[m] = b << 2 | d >> 4, c[m + 1] = (d & 15) << 4 | f >> 2, c[m + 2] = (f & 3) << 6 | e, h += 4, m += 3;
                    h < l && (b = q[a.charCodeAt(h) & 127], d = q[a.charCodeAt(h + 1) & 127], f = q[a.charCodeAt(h + 2) & 127], e = q[a.charCodeAt(h + 3) & 127], c[m++] = b << 2 | d >> 4, 64 != f && (c[m++] = (d & 15) << 4 | f >> 2), 64 != e && (c[m++] = (f & 3) << 6 | e));
                    return c
                }
    
                function b(a, b) {
                    var d, f, e = 15,
                        l = _[263],
                        c = new D(256);
                    if (82 == b)
                        if (ne) e = 127, l = ne;
                        else return null;
                    d = a[65] & 7;
                    for (f = 0; 128 > f; f++) c[2 * f] = a[f], c[2 * f + 1] = String(l).charCodeAt(f & e);
                    t.srand(c, 256);
                    return t.flip(a, d + 128, a.length - 128 - d)
                }
    
                function w(a, b, d) {
                    if (null == a) return null;
                    a = "" + a;
                    1 == b && p.basedir && 0 > a.indexOf("://") && 0 != a.indexOf("/") && "data:" != a.slice(0, 5) && (a = p.basedir + a);
                    a = a.split("\\").join("/");
                    null == h.firstxmlpath && (h.firstxmlpath = "");
                    null == h.currentxmlpath && (h.currentxmlpath = "");
                    null == h.swfpath && (h.swfpath = "");
                    null == h.htmlpath && (h.htmlpath = "");
                    for (b = a.indexOf("%"); 0 <= b;) {
                        var f = a.indexOf("%", b + 1);
                        if (f > b) {
                            var e = a.slice(b + 1, f),
                                l = null;
                            if (36 == e.charCodeAt(0)) {
                                if (e = N(e.slice(1)), null != e) {
                                    e = "" + e;
                                    a = 47 == e.charCodeAt(0) || 0 < e.indexOf("://") ? e + a.slice(f + 1) : a.slice(0, b) + e + a.slice(f + 1);
                                    b = a.indexOf("%");
                                    continue
                                }
                            } else switch (e) {
                                case _[500]:
                                    l = 1 == d ? "" : h.firstxmlpath;
                                    break;
                                case _[408]:
                                    l = h.currentxmlpath;
                                    break;
                                case _[409]:
                                case _[564]:
                                    l = 1 == d ? "" : h.swfpath;
                                    break;
                                case _[507]:
                                    l = 1 == d ? "" : h.htmlpath;
                                    break;
                                case _[560]:
                                    l = 1 == d ? "" : p.basedir
                            }
                            null != l ? (f++, "/" == a.charAt(f) && f++, a = l + a.slice(f), b = a.indexOf("%")) : b = a.indexOf("%", b + 1)
                        } else b = -1
                    }
                    return a
                }
    
                function g(d, f, g) {
                    var h, m;
                    0 <= (h = f.indexOf(_[404])) ? (m = f.indexOf(_[356])) > h && (f = f.slice(h + 11, m), h = f.indexOf(_[465]), 0 <= h && (f = f.slice(h + 9, -3), 0 <= f.indexOf(_[106]) && (f = f.split(_[106]).join(_[581])))) : g && 0 <= (h = f.indexOf('"[[KENC')) && (m = f.lastIndexOf(']]"')) > h && (f = f.slice(h + 3, m));
                    var l = null;
                    h = f.slice(0, 8);
                    m = f.slice(8);
                    g = !0 === g && Ua & 64 || !g && Ua & 32;
                    if ("KENC" != h.slice(0, 4)) return f;
                    f = !1;
                    var c = 0,
                        q = 0,
                        q = 0,
                        n = !1,
                        c = String(h).charCodeAt(4);
                    if (80 == c || 82 == c)
                        if (q = String(h).charCodeAt(5), 85 == q && (q = String(h).charCodeAt(6), n = 90 == q, 66 == q || n)) f = !0;
                    if (f && (!g || 80 != c))
                        if (n) {
                            h = c;
                            l = m.length;
                            f = g = null;
                            var p = q = n = c = 0,
                                t = 0,
                                x = 0,
                                w = 0;
                            for (g = new D(4 * l / 5 | 0); c < l;) q = m.charCodeAt(c++) - 35, p = m.charCodeAt(c++) - 35, t = m.charCodeAt(c++) - 35, x = m.charCodeAt(c++) - 35, w = m.charCodeAt(c++) - 35, 56 < q && q--, 56 < p && p--, 56 < t && t--, 56 < x && x--, 56 < w && w--, w += 85 * (85 * (85 * (85 * q + p) + t) + x), g[n++] = w >> 24 & 255, g[n++] = w >> 16 & 255, g[n++] = w >> 8 & 255, g[n++] = w & 255;
                            g = b(g, h);
                            if (null == g) l = null;
                            else {
                                l = g[2] << 16 | g[1] << 8 | g[0];
                                f = new D(l);
                                l = 8 + (g[6] << 16 | g[5] << 8 | g[4]);
                                c = 8;
                                for (n = 0; c < l;) {
                                    q = g[c++];
                                    p = q >> 4;
                                    for (t = p + 240; 255 === t; p += t = g[c++]);
                                    for (x = c + p; c < x;) f[n++] = g[c++];
                                    if (c === l) break;
                                    w = n - (g[c++] | g[c++] << 8);
                                    p = q & 15;
                                    for (t = p + 240; 255 === t; p += t = g[c++]);
                                    for (x = n + p + 4; n < x;) f[n++] = f[w++]
                                }
                                g.length = 0;
                                l = m = e(f)
                            }
                        } else l = a(m), (l = b(l, c)) && (l = e(l));
                    null == l && d && Ya(d + _[217]);
                    return l
                }
    
                function e(a) {
                    if (B) return B.decode(a);
                    for (var b = "", d = 0, f = 0, g = 0, l = 0, c = a.length; d < c;) f = a[d], 128 > f ? (0 < f && (b += dd(f)), d++) : 191 < f && 224 > f ? (g = a[d + 1], b += dd((f & 31) << 6 | g & 63), d += 2) : (g = a[d + 1], l = a[d + 2], f = (f & 15) << 12 | (g & 63) << 6 | l & 63, 65279 != f && (b += dd(f)), d += 3);
                    return b
                }
    
                function m(a, b, d) {
                    void 0 !== b ? b(a, d) : Ya(a + _[103] + d + ")")
                }
    
                function n(a, b, f, g, e) {
                    if (0 == h.DMcheck(a)) m(a, e, _[273]);
                    else {
                        var l = null,
                            c = !1;
                        if (d.ie && "" == ea.domain) try {
                            l = new ActiveXObject(_[252]), c = !0
                        } catch (q) {
                            l = null
                        }
                        null == l && (l = new XMLHttpRequest);
                        void 0 !== l.overrideMimeType && b && l.overrideMimeType(b);
                        l.onreadystatechange = function() {
                            if (4 == l.readyState) {
                                var b = l.status,
                                    d = l.responseText;
                                if (0 == b && d || 200 == b || 304 == b)
                                    if (f) {
                                        var h = null,
                                            h = c ? (new DOMParser).parseFromString(d, _[36]) : l.responseXML;
                                        g(a, h, b)
                                    } else g(a, d);
                                else m(a, e, l.status)
                            }
                        };
                        try {
                            l.open("GET", a, !0), l.send(null)
                        } catch (n) {
                            m(a, e, n)
                        }
                    }
                }
                var h = ma,
                    x = 1;
                try {
                    String.fromCharCode.apply(null, (new Uint8Array(4)).subarray(2))
                } catch (r) {
                    x = 0
                }
                var D = x ? Uint8Array : Array,
                    B = x && window.TextDecoder ? new TextDecoder : null,
                    q = null;
                (function() {
                    var a;
                    q = new D(128);
                    for (a = 0; 128 > a; a++) q[a] = 0;
                    q[43] = 62;
                    q[47] = 63;
                    q[61] = 64;
                    for (a = 48; 58 > a; a++) q[a] = a + 4;
                    for (a = 65; 91 > a; a++) q[a] = a - 65;
                    for (a = 97; 123 > a; a++) q[a] = a - 71
                })();
                h.firstxmlpath = null;
                h.currentxmlpath = null;
                h.swfpath = null;
                h.htmlpath = null;
                h.parsePath = w;
                h.DMcheck = function(a) {
                    var b;
                    if (Ua & 256 && (b = ea.domain) && Wd) {
                        a = a.toLowerCase();
                        var d = a.indexOf("://");
                        if (0 < d) {
                            var d = d + 3,
                                f = a.indexOf("/", d);
                            if (0 < f) return a = a.slice(d, f), d = a.indexOf(":"), 1 < d && (a = a.slice(0, d)), a == b
                        } else return b == Wd
                    }
                    return !0
                };
                var t = new function() {
                        var a, b, d;
                        this.srand = function(f, g) {
                            var l, c, e, h, m = new D(256);
                            for (l = 0; 256 > l; l++) m[l] = l;
                            for (c = l = 0; 256 > l; l++) c = c + m[l] + f[l % g] & 255, h = m[l], m[l] = m[c], m[c] = h;
                            for (e = c = l = 0; 256 > e; e++) l = l + 1 & 255, c = c + m[l] & 255, h = m[l], m[l] = m[c], m[c] = h;
                            a = m;
                            b = l;
                            d = c
                        };
                        this.flip = function(f, g, l) {
                            var c = new D(l),
                                e, h;
                            c.length = l;
                            var m = a,
                                q = b,
                                n = d;
                            for (e = 0; e < l; e++, g++) q = q + 1 & 255, n = n + m[q] & 255, c[e] = f[g] ^ a[m[q] + m[n] & 255], h = m[q], m[q] = m[n], m[n] = h;
                            b = q;
                            d = n;
                            return c
                        }
                    },
                    v = {},
                    f = function() {
                        this.img = this.url = null;
                        this.retries = 0;
                        this.refs = 1;
                        this.state = 0;
                        this.cb_done = [];
                        this.cb_err = []
                    };
                f.prototype.handleEvent = function(a) {
                    a = a.type;
                    var b = 1;
                    if ("load" == a) b = 2;
                    else if (_[97] == a) b = 4;
                    else if (_[41] == a && (b = 3, ++this.retries < p.network.retrycount)) {
                        this.reload();
                        return
                    }
                    this.state = b;
                    this.finish()
                };
                f.prototype.removeImage = function() {
                    var a = this.img;
                    a.removeEventListener("load", this);
                    a.removeEventListener(_[41], this);
                    a.removeEventListener(_[97], this);
                    this.img = null
                };
                f.prototype.clear = function() {
                    this.img = this.url = null;
                    this.retries = 0;
                    this.refs = 1;
                    this.state = 0;
                    this.cb_done.length = 0;
                    this.cb_err.length = 0
                };
                f.prototype.load = function() {
                    var a = this.img,
                        b = this.state;
                    null == a && (a = Ha(1), a.addEventListener("load", this), a.addEventListener(_[41], this), a.addEventListener(_[97], this), this.img = a);
                    0 == b && (this.state = 1, a.src = this.url)
                };
                f.prototype.reload = function() {
                    this.removeImage();
                    this.state = 0;
                    this.load()
                };
                f.prototype.finish = function() {
                    var a, b = this.img,
                        d = this.refs,
                        f = 4 == this.state,
                        g = 2 == this.state ? this.cb_done : this.cb_err;
                    delete v[this.url];
                    this.removeImage();
                    for (a = 0; a < d; a++) {
                        var l = g[a];
                        l && l(b, f)
                    }
                    this.clear()
                };
                h.reportLoadingError = function(a, b, d) {
                    a = _[359] + a + _[474];
                    b && (a = b + " " + a);
                    d && (a = a + " " + d);
                    p.lasterror = a;
                    0 == ua(_[383]) && va(3, a)
                };
                h.loadimage = function(a, b, d, g) {
                    var e = v[a];
                    e ? e.refs++ : (e = new f, e.url = a, v[a] = e);
                    e.cb_done.push(b);
                    e.cb_err.push(d);
                    a = e;
                    !0 === g && (a.retries = p.network.retrycount);
                    a.load();
                    return a.img
                };
                h.iOSWakelockCheck = function() {
                    for (var a in v) v[a].reload()
                };
                h.loadfile = function(a, b, d) {
                    h.loadfile2(a, null, b, d)
                };
                h.loadxml = function(a, b, d) {
                    h.loadfile2(a, _[36], b, d, !0)
                };
                h.loadfile2 = function(a, b, d, f, e) {
                    e = !0 === e;
                    var l = {
                        errmsg: !0
                    };
                    l.rqurl = a;
                    a = w(a);
                    l.url = a;
                    n(a, b, e, function(a, h, m) {
                        !0 === e ? d(h, m) : (h = g(a, h, _[114] == b), l.data = h, null != h ? d && d(l) : f && f(l))
                    }, e ? f : function(b, d) {
                        f && f(l);
                        l.errmsg && va(3, a + _[103] + d + ")")
                    })
                };
                h.resolvecontentencryption = g;
                h.b64u8 = function(b) {
                    return e(a(b))
                };
                h.decodeLicense = function(a) {
                    return null
                }
            })();
            var ja = {};
            (function() {
                function a(b) {
                    var d, e, g = b.childNodes,
                        h;
                    e = g.length;
                    for (d = 0; d < e; d++)
                        if (h = g.item(d)) switch (h.nodeType) {
                            case 1:
                                a(h);
                                break;
                            case 8:
                                b.removeChild(h), d--, e--
                        }
                }
    
                function b(a, b) {
                    var d, e, g = a.childNodes,
                        h = -1;
                    e = g.length;
                    if (1 <= e)
                        for (d = 0; d < e; d++)
                            if (G(g[d].nodeName) == b) {
                                h = d;
                                break
                            } return 0 <= h ? g[h] : null
                }
    
                function w(b, e, g, h, m) {
                    var n, v, f, u, r = null;
                    v = null;
                    var C, y;
                    y = 0;
                    var A, l = b.length,
                        c = new XMLSerializer,
                        H = !1;
                    h || (H = !0, h = [], m = [], p.xml.parsetime = Pa());
                    for (var E = 0; E < l; E++)
                        if ((n = b[E]) && n.nodeName && "#text" != n.nodeName && (v = n.nodeName, v = G(v), _[154] != v)) {
                            f = null == e && _[56] == v ? null : e ? e + "." + v : v;
                            if (u = n.attributes) {
                                if (u.devices && 0 == d.checkSupport(u.devices.value)) continue;
                                else if (u["if"] && !V.calc(null, u["if"].value)) continue;
                                if ("set" == v && u["var"] && u.val) {
                                    V.calc(u["var"].value, u.val.value);
                                    continue
                                } else if ("debug" == v && u.trace) {
                                    va(0, V.calc(null, u.trace.value));
                                    continue
                                }
                            }
                            A = (v = u && u.name ? u.name.value : null) ? !0 : !1;
                            if (g) {
                                if (_[567] == f && g & 16) continue;
                                if ((_[60] == f || _[66] == f) && g & 4) continue;
                                if (_[7] == f && g & 128) continue;
                                if (_[99] == f && g & 65536) continue;
                                if (g & 64 && v)
                                    if (_[60] == f || _[66] == f) {
                                        if ((r = Ca.getItem(v)) && r._pCD && r.keep) continue
                                    } else if (_[7] == f && (r = Bb.getItem(v)) && r._pCD && r.keep) continue
                            }
                            if (f)
                                if (A) {
                                    if (_[11] == f || "data" == f || "scene" == f) {
                                        a(n);
                                        A = null;
                                        if ((_[11] == f || "data" == f) && n.childNodes && 1 <= n.childNodes.length)
                                            for (r = 0; r < n.childNodes.length; r++)
                                                if (4 == n.childNodes[r].nodeType) {
                                                    A = n.childNodes[r].nodeValue;
                                                    break
                                                } null == A && (A = c.serializeToString(n), A = A.slice(A.indexOf(">") + 1, A.lastIndexOf("</")), _[11] == f && (A = A.split(_[616]).join('"').split(_[612]).join("'").split(_[160]).join(String.fromCharCode(160)).split("&amp;").join("&")));
                                        _[11] == f && la(n.getAttribute(_[533])) ? V.addPAction(G(v), A) : X(f + "[" + v + _[83], A);
                                        if (u) {
                                            var J;
                                            A = u.length;
                                            for (J = 0; J < A; J++)
                                                if (C = u[J], r = G(C.nodeName), C = C.value, "name" != r) {
                                                    y = r.indexOf(".");
                                                    if (0 < y)
                                                        if (d.checkSupport(r.slice(y + 1))) r = r.slice(0, y);
                                                        else continue;
                                                    y = f + "[" + v + "]." + G(r);
                                                    X(y, C)
                                                }
                                        }
                                        continue
                                    }
                                    f = f + "[" + v + "]";
                                    if (!Od(v, f)) continue;
                                    X(f + ".name", v)
                                } else(v = N(f)) && v.isArray && !v.isDynArray && (v = "n" + String(v.count), f = f + "[" + v + "]", X(f + ".name", v));
                            if (u) {
                                var oa = "view" == f,
                                    r = f ? N(f) : null;
                                v = null;
                                A = u.length;
                                r && (r._lateBinding && (v = r._lateBinding), (C = u.style) && (C = C.value) && null == v && (r.style = C, m.push(f), v = r._lateBinding = {}));
                                for (J = 0; J < A; J++) {
                                    C = u[J];
                                    r = G(C.nodeName);
                                    C = C.value;
                                    var wa = f ? f + "." : "";
                                    if ("name" != r && "style" != r) {
                                        y = r.indexOf(".");
                                        if (0 < y)
                                            if (d.checkSupport(r.slice(y + 1))) r = r.slice(0, y).toLowerCase();
                                            else continue;
                                        y = wa + r;
                                        v ? v[r] = C : !C || _[1] != typeof C || "get:" != C.slice(0, 4) && "calc:" != C.slice(0, 5) ? (X(y, C), oa && X("xml." + y, C)) : (h.push(y), h.push(C))
                                    }
                                }
                            }
                            n.childNodes && 0 < n.childNodes.length && w(n.childNodes, f, g, h, m)
                        } if (H) {
                        l = h.length;
                        for (E = 0; E < l; E += 2) X(h[E], h[E + 1]);
                        l = m.length;
                        for (E = 0; E < l; E++)
                            if (f = m[E], V.assignstyle(f, null), r = N(f))
                                if (v = r._lateBinding) V.copyattributes(r, v), r._lateBinding = null;
                        p.xml.parsetime = Pa() - p.xml.parsetime
                    }
                }
    
                function g(a, b) {
                    var d = null,
                        e, h;
                    h = a.length;
                    for (e = 0; e < h; e++)
                        if (d = a[e], !d || !d.nodeName || _[11] != G(d.nodeName)) {
                            var m = d.attributes;
                            if (m) {
                                var n, f = m.length,
                                    p;
                                for (n = 0; n < f; n++) {
                                    var w = m[n];
                                    p = G(w.nodeName);
                                    var r = p.indexOf(".");
                                    0 < r && (p = p.slice(0, r));
                                    if (_[523] == p) {
                                        p = w.value;
                                        var r = p.split("|"),
                                            y, A;
                                        A = r.length;
                                        for (y = 0; y < A; y++) p = r[y], "" != p && 0 > p.indexOf("://") && 47 != p.charCodeAt(0) && (r[y] = b + p);
                                        w.value = r.join("|")
                                    } else if (r = p.indexOf("url"), 0 == r || 0 < r && r == p.length - 3)
                                        if (p = w.value) r = p.indexOf(":"), y = p.charCodeAt(0), 47 == y || 37 == y && 36 != p.charCodeAt(1) || 0 < r && ("//" == p.substr(r + 1, 2) || 0 <= _[115].indexOf(p.substr(0, r + 1))) || (p = b + p), w.value = p
                                }
                            }
                            d.childNodes && 0 < d.childNodes.length && g(d.childNodes, b)
                        }
                }
    
                function e(a, b) {
                    var d = tc(b),
                        e = d.lastIndexOf("/"),
                        h = d.lastIndexOf("\\");
                    h > e && (e = h);
                    0 < e && (d = d.slice(0, e + 1), g(a, d))
                }
    
                function m(a, d) {
                    var e = b(a, _[454]);
                    if (e) {
                        var g = "",
                            h, m;
                        m = e.childNodes.length;
                        for (h = 0; h < m; h++) g += e.childNodes[h].nodeValue;
                        return (e = ma.resolvecontentencryption(d, g)) ? (e = (new DOMParser).parseFromString(e, _[36])) && e.documentElement && _[20] == e.documentElement.nodeName ? (va(3, d + _[30]), null) : e : null
                    }
                    return Ua & 32 ? (Ya(d + _[230]), null) : a
                }
    
                function n(a, b) {
                    var d, e;
                    switch (a.nodeType) {
                        case 1:
                            var g = ja.xmlDoc.createElement(a.nodeName);
                            if (a.attributes && 0 < a.attributes.length)
                                for (d = 0, e = a.attributes.length; d < e;) g.setAttribute(a.attributes[d].nodeName, a.getAttribute(a.attributes[d++].nodeName));
                            if (b && a.childNodes && 0 < a.childNodes.length)
                                for (d = 0, e = a.childNodes.length; d < e;) g.appendChild(n(a.childNodes[d++], b));
                            return g;
                        case 3:
                        case 4:
                        case 8:
                            return ja.xmlDoc.createTextNode(a.nodeValue)
                    }
                }
    
                function h(a, b) {
                    var g, p, q;
                    if (null != ja.xmlIncludeNode) {
                        q = tc(a.url);
                        if ((p = a.responseXML) && p.documentElement && _[20] == p.documentElement.nodeName) {
                            Ya(q + _[30]);
                            return
                        }
                        p = m(p, a.url);
                        if (null == p) return;
                        e(p.childNodes, q);
                        g = p.childNodes;
                        var r = ja.xmlIncludeNode.parentNode;
                        if (null != r.parentNode) {
                            var w = 0;
                            q = g.length;
                            if (1 < q)
                                for (p = 0; p < q; p++)
                                    if (_[56] == G(g[p].nodeName)) {
                                        w = p;
                                        break
                                    } p = null;
                            p = void 0 === ja.xmlDoc.importNode ? n(g[w], !0) : ja.xmlDoc.importNode(g[w], !0);
                            r.insertBefore(p, ja.xmlIncludeNode);
                            r.removeChild(ja.xmlIncludeNode)
                        } else ja.xmlDoc = p;
                        ja.xmlAllNodes = [];
                        ja.addNodes(ja.xmlDoc.childNodes);
                        ja.xmlIncludeNode = null
                    }
                    r = !1;
                    q = ja.xmlAllNodes.length;
                    for (p = 0; p < q; p++)
                        if (g = ja.xmlAllNodes[p], w = null, null != g.nodeName) {
                            w = G(g.nodeName);
                            if (_[154] == w) {
                                var w = g.attributes,
                                    f, u = w.length,
                                    z = !1;
                                for (f = 0; f < u; f++) {
                                    var C = w[f];
                                    _[561] == C.nodeName ? 0 == d.checkSupport(C.value) && (z = !0) : "if" == C.nodeName && (V.calc(null, C.value) || (z = !0))
                                }
                                if (0 == z)
                                    for (f = 0; f < u; f++)
                                        if (C = w[f], "url" == G(C.nodeName)) {
                                            r = !0;
                                            z = C.value;
                                            C = z.indexOf(":");
                                            0 < C && 0 <= _[115].indexOf(z.substr(0, C + 1)) && (z = V.calc(null, z.substr(C + 1)));
                                            ja.xmlIncludeNode = g;
                                            var y = ma.parsePath(z);
                                            y ? ma.loadxml(y, function(a, d) {
                                                a ? h({
                                                    url: y,
                                                    responseXML: a
                                                }, b) : Ya(y + " - " + (200 == d ? _[231] : _[207]))
                                            }) : b()
                                        }
                            }
                            if (r) break
                        } 0 == r && b()
                }
                ja.resolvexmlencryption = m;
                ja.resolvexmlincludes = function(a, b) {
                    var d = a.childNodes;
                    ja.xmlDoc = a;
                    ja.xmlAllNodes = [];
                    ja.addNodes(d);
                    e(d, p.xml.url);
                    ja.xmlIncludeNode = null;
                    h(null, b)
                };
                ja.parsexml = w;
                ja.xmlDoc = null;
                ja.xmlAllNodes = null;
                ja.xmlIncludeNode = null;
                ja.addNodes = function(a) {
                    var b, d, e;
                    e = a.length;
                    for (d = 0; d < e; d++)(b = a[d]) && b.nodeName && _[11] != G(b.nodeName) && (ja.xmlAllNodes.push(b), b.childNodes && 0 < b.childNodes.length && ja.addNodes(b.childNodes))
                };
                ja.findxmlnode = b
            })();
            var yc = {};
            (function() {
                var a = yc;
                a.linear = function(a, d, g) {
                    return g * a + d
                };
                a.easeinquad = function(a, d, g) {
                    return g * a * a + d
                };
                a.easeoutquad = function(a, d, g) {
                    return -g * a * (a - 2) + d
                };
                a[_[5]] = a.easeoutquad;
                a.easeinoutquad = function(a, d, g) {
                    return (1 > (a /= .5) ? g / 2 * a * a : -g / 2 * (--a * (a - 2) - 1)) + d
                };
                a.easeinback = function(a, d, g) {
                    return g * a * a * (2.70158 * a - 1.70158) + d
                };
                a.easeoutback = function(a, d, g) {
                    return g * (--a * a * (2.70158 * a + 1.70158) + 1) + d
                };
                a.easeinoutback = function(a, d, g) {
                    var e = 1.70158;
                    return 1 > (a *= 2) ? g / 2 * a * a * (((e *= 1.525) + 1) * a - e) + d : g / 2 * ((a -= 2) * a * (((e *= 1.525) + 1) * a + e) + 2) + d
                };
                a.easeincubic = function(a, d, g) {
                    return g * a * a * a + d
                };
                a.easeoutcubic = function(a, d, g) {
                    return g * (--a * a * a + 1) + d
                };
                a.easeinquart = function(a, d, g) {
                    return g * a * a * a * a + d
                };
                a.easeoutquart = function(a, d, g) {
                    return -g * ((a = a / 1 - 1) * a * a * a - 1) + d
                };
                a.easeinquint = function(a, d, g) {
                    return g * a * a * a * a * a + d
                };
                a.easeoutquint = function(a, d, g) {
                    return g * ((a = a / 1 - 1) * a * a * a * a + 1) + d
                };
                a.easeinsine = function(a, d, g) {
                    return -g * Math.cos(Ka / 2 * a) + g + d
                };
                a.easeoutsine = function(a, d, g) {
                    return g * Math.sin(Ka / 2 * a) + d
                };
                a.easeinexpo = function(a, d, g) {
                    return 0 == a ? d : g * Math.pow(2, 10 * (a - 1)) + d - .001 * g
                };
                a.easeoutexpo = function(a, d, g) {
                    return 1 == a ? d + g : 1.001 * g * (-Math.pow(2, -10 * a) + 1) + d
                };
                a.easeincirc = function(a, d, g) {
                    return -g * (Math.sqrt(1 - a * a) - 1) + d
                };
                a.easeoutcirc = function(a, d, g) {
                    return g * Math.sqrt(1 - (a = a / 1 - 1) * a) + d
                };
                a.easeoutbounce = function(a, d, g) {
                    return a < 1 / 2.75 ? 7.5625 * g * a * a + d : a < 2 / 2.75 ? g * (7.5625 * (a -= 1.5 / 2.75) * a + .75) + d : a < 2.5 / 2.75 ? g * (7.5625 * (a -= 2.25 / 2.75) * a + .9375) + d : g * (7.5625 * (a -= 2.625 / 2.75) * a + .984375) + d
                };
                a.easeinbounce = function(b, d, g) {
                    return g - a.easeoutbounce(1 - b, 0, g) + d
                };
                a.getTweenfu = function(b) {
                    b = G(b);
                    "" == b || "null" == b ? b = _[75] : void 0 === a[b] && (b = _[75]);
                    return a[b]
                }
            })();
            var V = {};
            (function() {
                function a(a, b, d) {
                    var c, k = a.length;
                    d = 1 != d;
                    for (c = 0; c < k; c++) {
                        var f = "" + a[c],
                            e = f.toLowerCase();
                        d && "null" == e ? a[c] = null : 41 == f.charCodeAt(f.length - 1) && (e = e.slice(0, 4), "get(" == e ? a[c] = N(Ga(f.slice(4, f.length - 1)), b) : "calc" == e && 40 == f.charCodeAt(4) && (a[c] = N(f, b)))
                    }
                }
    
                function b(a, b) {
                    var d, c, k, f = 0,
                        e = 0,
                        g = 0;
                    k = "";
                    d = 0;
                    for (c = a.length; d < c;) {
                        k = a.charCodeAt(d);
                        if (!(32 >= k))
                            if (34 == k) 0 == g ? g = 1 : 1 == g && (g = 0);
                            else if (39 == k) 0 == g ? g = 2 : 2 == g && (g = 0);
                        else if (0 == g)
                            if (91 == k) 0 == e && (e = d + 1), f++;
                            else if (93 == k && 0 < f && (f--, 0 == f)) {
                            if (k = Xc(a, e, d, b)) a = a.slice(0, e) + k + a.slice(d), d = e + k.length + 1, c = a.length;
                            e = 0
                        }
                        d++
                    }
                    return a
                }
    
                function d(a, b) {
                    var c = "",
                        k, f, e, g, l;
                    e = a.length;
                    l = b.length;
                    for (f = 0; f < e; f++) k = a.charAt(f), "%" == k ? (f++, k = a.charCodeAt(f) - 48, 0 <= k && 9 >= k ? (f + 1 < e && (g = a.charCodeAt(f + 1) - 48, 0 <= g && 9 >= g && (f++, k = 10 * k + g)), c = k < l ? c + ("" + b[k]) : c + "null") : c = -11 == k ? c + "%" : c + ("%" + a.charAt(f))) : c += k;
                    return c
                }
    
                function g(a, b, c, k) {
                    c = Array.prototype.slice.call(c);
                    c.splice(0, 0, a);
                    b = d(b, c);
                    l.callaction(b, k, !0)
                }
    
                function e(a) {
                    a.position = R ? 0 : 1
                }
    
                function m(a, b, d) {
                    var krpano = p;
                    var caller = d;
                    var args = b;
                    var resolve = C;
                    var actions = l;
                    try {
                        eval(a, d)
                    } catch (c) {
                        va(3, b[0] + " - " + c)
                    }
                }
    
                function n(a) {
                    var b = E,
                        d = b.length,
                        c;
                    for (c = 0; c < d; c++)
                        if (b[c].id == a) {
                            a = b.splice(c, 1);
                            aa === a && (aa = null);
                            a && a[0].blockedactions && (I.splice(I.indexOf(a), 1), l.executeActions(a[0].blockedactions));
                            break
                        }
                }
    
                function h(a) {
                    va(2, _[205] + a)
                }
    
                function x(a) {
                    var b = a.length;
                    if (2 == b || 3 == b) {
                        var d = N(a[b - 2], l.actioncaller),
                            c = N(a[b - 1], l.actioncaller);
                        null == d && (d = a[b - 2]);
                        null == c && (c = a[b - 1]);
                        return [a[0], parseFloat(d), parseFloat(c)]
                    }
                    return null
                }
    
                function F(a, b, d) {
                    var c = 1 == b.length ? N(b[0], d) : b[1],
                        c = 0 == a ? escape(c) : unescape(c);
                    X(b[0], c, !1, d, !0)
                }
    
                function D(a) {
                    var b, d = a.length,
                        c = 0,
                        k = 0,
                        f = !1,
                        e = !1,
                        g = 0,
                        l = 0,
                        h = 0,
                        m = !1,
                        n = [],
                        L = 0,
                        q = 0;
                    for (b = 0; b < d; b++)
                        if (q = a.charCodeAt(b), 0 == m && 32 >= q) 0 < k && (n[L++] = a.substr(c, k), k = 0), f = !1;
                        else if (0 == m && (61 == q || 33 == q && 61 == a.charCodeAt(b + 1) || 62 == q || 60 == q)) 0 == f && (0 < k ? (n[L++] = a.substr(c, k), k = 0) : 0 == L && 0 == p.strict && (n[L++] = ""), f = !0, e = !1, c = b), k++;
                    else if (0 != m || 43 != q && 45 != q && 42 != q && 47 != q && 94 != q && 63 != q && 58 != q) {
                        if (0 == h)
                            if (91 == q) g++, m = !0;
                            else if (93 == q) g--, 0 == g && 0 == l && (m = !1);
                        else if (40 == q) l++, m = !0;
                        else if (41 == q) l--, 0 == l && 0 == g && (m = !1);
                        else {
                            if (39 == q || 34 == q) h = q, m = !0
                        } else q == h && (h = 0, 0 == g && 0 == l && (m = !1));
                        if (f || e) 0 < k && (n[L++] = a.substr(c, k), k = 0), e = f = !1, c = b;
                        0 == k && (c = b);
                        k++
                    } else 0 < k && (n[L++] = a.substr(c, k)), f = !1, e = !0, c = b, k = 1;
                    0 < k && (n[L++] = a.substr(c, k));
                    2 == L && f && 0 == p.strict && (n[L++] = "");
                    return n
                }
    
                function B(a) {
                    var b = a.length;
                    if (!(3 > b)) {
                        var d, c;
                        for (d = 1; d < b - 1; d++)
                            if (c = a[d], "==" == c || "!=" == c) {
                                a[d - 1] = "@" + a[d - 1];
                                c = a[d + 1];
                                if ("+" == c || "-" == c)
                                    for (d++, c = a[d + 1];
                                        "+" == c || "-" == c;) d++, c = a[d + 1];
                                a[d + 1] = "@" + c
                            }
                    }
                }
    
                function q(a) {
                    var b = L,
                        d = a.length,
                        c, k;
                    if (1 == d) a[0] = f(a[0]);
                    else
                        for (c = 0; c < d; c++)
                            if (k = a[c], !(0 <= b.indexOf("." + k + "."))) {
                                switch (k) {
                                    case "AND":
                                        k = "&&";
                                        break;
                                    case "OR":
                                        k = "||";
                                        break;
                                    case "GT":
                                        k = ">";
                                        break;
                                    case "GE":
                                        k = ">=";
                                        break;
                                    case "LT":
                                        k = "<";
                                        break;
                                    case "LE":
                                        k = "<=";
                                        break;
                                    case "EQ":
                                        k = "==";
                                        break;
                                    case "LSHT":
                                        k = "<<";
                                        break;
                                    case "RSHT":
                                        k = ">>";
                                        break;
                                    case "BAND":
                                        k = "~&";
                                        break;
                                    case "BOR":
                                        k = "~|";
                                        break;
                                    default:
                                        k = f(k)
                                }
                                a[c] = k
                            }
                }
    
                function t(a) {
                    var b = a.length;
                    if (!(2 > b)) {
                        var d = L,
                            c, k, e = null;
                        for (c = 0; c < a.length; c++)
                            if (e = a[c], "+" == e || "-" == e)
                                if (0 == c || 0 <= d.indexOf("." + a[c - 1] + ".")) {
                                    k = 45 == e.charCodeAt(0) ? -1 : 1;
                                    b = 1;
                                    for (e = "" + a[c + b];
                                        "+" == e || "-" == e;) k *= 45 == e.charCodeAt(0) ? -1 : 1, b++, e = "" + a[c + b];
                                    e && 40 == e.charCodeAt(0) && (e = f(e));
                                    e = e && 37 == e.charCodeAt(e.length - 1) ? parseFloat(e) * k + "%" : Number(e) * k;
                                    a.splice(c, 1 + b, e);
                                    --c
                                } for (c = 1; c < a.length - 1; c++) e = a[c], "*" == e ? (a.splice(c - 1, 3, Number(a[c - 1]) * Number(a[c + 1])), c -= 3) : "/" == e ? (a.splice(c - 1, 3, Number(a[c - 1]) / Number(a[c + 1])), c -= 3) : "^" == e ? (a.splice(c - 1, 3, Math.pow(Number(a[c - 1]), Number(a[c + 1]))), c -= 3) : "<<" == e ? (a.splice(c - 1, 3, Number(a[c - 1]) << Number(a[c + 1])), c -= 3) : ">>" == e ? (a.splice(c - 1, 3, Number(a[c - 1]) >> Number(a[c + 1])), c -= 3) : "~&" == e ? (a.splice(c - 1, 3, Number(a[c - 1]) & Number(a[c + 1])), c -= 3) : "~|" == e && (a.splice(c - 1, 3, Number(a[c - 1]) | Number(a[c + 1])), c -= 3);
                        for (c = 1; c < a.length - 1; c++) e = a[c], "+" == e ? (a.splice(c - 1, 3, a[c - 1] + a[c + 1]), c -= 3) : "-" == e && (a.splice(c - 1, 3, Number(a[c - 1]) - Number(a[c + 1])), c -= 3)
                    }
                }
    
                function v(a) {
                    if (1 == a.length) return a[0];
                    var c, b = null,
                        d = null,
                        k = null,
                        b = !1;
                    for (c = 0; c < a.length; c++)
                        if (b = "" + a[c], 0 < b.length && 0 <= _[488].indexOf(b)) {
                            if (0 == c || c >= a.length - 1) throw _[43];
                            d = a[c - 1];
                            k = a[c + 1];
                            switch (b) {
                                case "===":
                                case "==":
                                    b = d == k;
                                    break;
                                case "!==":
                                case "!=":
                                    b = d != k;
                                    break;
                                case "<":
                                    b = d < k;
                                    break;
                                case "<=":
                                    b = d <= k;
                                    break;
                                case ">":
                                    b = d > k;
                                    break;
                                case ">=":
                                    b = d >= k;
                                    break;
                                default:
                                    throw _[43];
                            }
                            a.splice(c - 1, 3, b);
                            c -= 2
                        } if (1 == a.length) return a[0];
                    for (c = 0; c < a.length; c++)
                        if (b = a[c], "&&" == b || "||" == b) {
                            if (0 == c || c >= a.length - 1) throw _[43];
                            d = a[c - 1];
                            k = a[c + 1];
                            b = "&&" == b ? d && k : d || k;
                            a.splice(c - 1, 3, b);
                            c -= 2
                        } if (5 == a.length && "?" == a[1] && ":" == a[3]) return a[0] ? a[2] : a[4];
                    if (1 < a.length) throw _[43];
                    return a[0]
                }
    
                function f(a) {
                    var c = void 0,
                        c = G(a),
                        b = c.charCodeAt(0),
                        d, e = 0,
                        f = !1;
                    64 == b && (f = !0, a = a.slice(1), c = c.slice(1), b = c.charCodeAt(0));
                    if (39 == b || 34 == b) {
                        a = Ga(a);
                        if (f && 5 >= a.length) {
                            c = G(a);
                            if ("true" == c) return !0;
                            if (_[27] == c) return !1;
                            if ("null" == c) return null
                        }
                        2 >= a.length && 0 <= L.indexOf("." + a + ".") && (a = k + a + k);
                        return a
                    }
                    if (33 == b || 43 == b || 45 == b) e = b, a = a.slice(1), c = c.slice(1), b = c.charCodeAt(0);
                    d = c.charCodeAt(c.length - 1);
                    40 == b && 41 == d ? c = u(a.slice(1, -1)) : 37 == d ? c = a : (c = "null" != c ? N(a, l.actioncaller, !0) : null, void 0 === c ? (b = Number(a), isNaN(b) || !isFinite(b) || isNaN(parseFloat(a)) ? f && (c = a) : c = b) : _[1] == typeof c && (a = G(c), "true" == a ? c = !0 : _[27] == a ? c = !1 : "null" == a ? c = null : (a = Number(c), !isNaN(a) && isFinite(a) && (c = a))));
                    33 == e ? c = !c : 45 == e && (c = -c);
                    return c
                }
    
                function u(a) {
                    var c;
                    if ("" == a || null === a) return a;
                    try {
                        var b = D(a);
                        0 == p.strict && B(b);
                        q(b);
                        t(b);
                        c = v(b);
                        _[1] == typeof c && (c = c.split(k).join(""))
                    } catch (d) {
                        va(3, d + ": " + a)
                    }
                    return c
                }
    
                function z(a) {
                    var c = a.position;
                    1 == a.motionmode ? (c *= a.Tmax, c <= a.T1 ? c *= a.accelspeed / 2 * c : c > a.T1 && c <= a.T1 + a.T2 ? c = a.S1 + (c - a.T1) * a.Vmax : (c -= a.T1 + a.T2, c = a.Vmax * c + a.breakspeed / 2 * c * c + a.S1 + a.S2), c = 0 != a.Smax ? c / a.Smax : 1) : 2 == a.motionmode && (c = a.tweenfu(c, 0, 1));
                    r.hlookat = a.startH + c * (a.destH - a.startH);
                    r.vlookat = a.startV + c * (a.destV - a.startV);
                    r.fov = a.startF + c * (a.destF - a.startF);
                    Xa(_[592])
                }
    
                function C(a, c) {
                    var b = N(a, c);
                    null == b && (b = a);
                    return b
                }
    
                function y(a) {
                    var c = a.waitfor;
                    "load" == c ? Va.isLoading() && (a.position = 0) : "blend" == c && Va.isBlending() && (a.position = 0);
                    Xa("wait")
                }
    
                function A(a) {
                    var c = a.varname,
                        b = parseFloat(a.startval),
                        d = parseFloat(a.endval),
                        k = null != a.startval ? 0 < String(a.startval).indexOf("%") : !1,
                        e = null != a.endval ? 0 < String(a.endval).indexOf("%") : !1;
                    e ? k || (b = 0) : k && 0 == d && (e = !0);
                    var k = 0,
                        k = a.position,
                        f = a.tweenmap;
                    if (0 <= c.indexOf(_[28], c.lastIndexOf(".") + 1))
                        if (d = parseInt(a.startval), b = parseInt(a.endval), 1 <= k) k = b;
                        else var k = f(k, 0, 1),
                            f = d >>> 24,
                            g = d >>> 16 & 255,
                            h = d >>> 8 & 255,
                            d = d & 255,
                            f = f + k * ((b >>> 24) - f),
                            g = g + k * ((b >>> 16 & 255) - g),
                            h = h + k * ((b >>> 8 & 255) - h),
                            d = d + k * ((b & 255) - d),
                            k = ((0 > f ? 0 : 255 < f ? 255 : f) << 24 | (0 > g ? 0 : 255 < g ? 255 : g) << 16 | (0 > h ? 0 : 255 < h ? 255 : h) << 8 | (0 > d ? 0 : 255 < d ? 255 : d)) >>> 0;
                    else k = 1 <= k ? d : f(k, b, d - b);
                    X(c, e ? k + "%" : k, !0, a.actioncaller);
                    null != a.updatefu && l.callaction(a.updatefu, a.actioncaller)
                }
                var l = V,
                    c = !1;
                l.blocked = !1;
                l.lastActionError = "";
                l.actioncaller = null;
                var H = {};
                l.addPAction = function(a, c) {
                    H[a] = c
                };
                var E = [],
                    J = [],
                    oa = [],
                    wa = null,
                    ya = 0,
                    I = [],
                    ba = null,
                    aa = null,
                    R = null,
                    Y = function() {
                        this.blockedactions = this.id = null;
                        this.position = this.maxruntime = this.starttime = 0;
                        this.updatefu = this.actioncaller = this.donecall = this.process = null
                    };
                l.copyattributes = function(a, c) {
                    for (var b in c) {
                        var d = G(b);
                        if ("name" != d && "index" != d && "_type" != d) {
                            var k = c[b];
                            if (_[15] !== typeof k) {
                                if (k && _[1] == typeof k) {
                                    var e = k.slice(0, 4);
                                    "get:" == e ? k = N(k.slice(4)) : "calc" == e && 58 == k.charCodeAt(4) && (k = u(k.slice(5)))
                                }
                                a[d] = _[53] == typeof a[d] ? la(k) : k
                            }
                        }
                    }
                };
                l.assignstyle = function(a, c) {
                    var b = N(a);
                    if (b && (null == c && (c = b.style), c)) {
                        b.style = c;
                        var d = c.split("|"),
                            k, e;
                        e = d.length;
                        for (k = 0; k < e; k++) {
                            var f = N(_[593] + d[k] + "]");
                            f ? l.copyattributes(b, f) : va(3, a + _[226] + d[k])
                        }
                    }
                };
                l.checkInterrupt = function() {
                    if (0 < I.length) {
                        var a = wa;
                        if (a) {
                            wa = null;
                            var c = E,
                                b = c.length,
                                d;
                            for (d = 0; d < b; d++) {
                                var k = c[d];
                                k && k.blockedactions && (c.splice(d, 1), b--, d--)
                            }
                            ba = aa = null;
                            I = [];
                            "break" != G(a) && l.callaction(a)
                        }
                    }
                };
                l.isblocked = function() {
                    return 0 < I.length || c
                };
                l.isBusy = function() {
                    return c
                };
                l.actions_autorun = function(a, c) {
                    var b = p.action.getArray(),
                        d = [],
                        k, e, f = null;
                    e = b.length;
                    for (k = 0; k < e; k++)(f = b[k]) && f.autorun == a && !f._arDone && (f._arDone = !0, d.push(f));
                    e = d.length;
                    if (0 < e) {
                        b = "";
                        for (k = 0; k < e; k++) f = d[k], b += _[542] + f.name + ");";
                        l.callaction(b, null, c)
                    }
                };
                l.callwith = function(a, c) {
                    var b = N(a, l.actioncaller);
                    if (b) {
                        var d = b._type;
                        _[60] != d && _[7] != d || l.callaction(c, b)
                    }
                };
                l.callaction = function(a, c, b) {
                    a && "null" != a && "" != a && (b = typeof a, _[15] === b ? a() : _[95] !== b && l.executeActions(Wb(a, c, !1)))
                };
                l.haltActions = function() {
                    c = !0;
                    var a = new Y;
                    a.id = "HALT" + ++ya;
                    a.maxruntime = 1;
                    a.process = e;
                    a.starttime = Pa();
                    a.actioncaller = l.actioncaller;
                    a.blockedactions = [];
                    ba = a;
                    I.push(a);
                    E.push(a);
                    R = a
                };
                l.resumeActions = function() {
                    c = !1;
                    R && (ba === R && (ba = null), R = null)
                };
                l.processactions = function() {};
                var P = 0,
                    Z = 0,
                    S = 0;
                l.executeActions = function(c) {
                    if (null != c) {
                        P++;
                        if (1 == P) S = 0;
                        else if (0 < S) return;
                        for (var b = null, k = null, e = null, f = null, g = l.actioncaller, h = 0, h = 0; h < c.length; h++) {
                            if (R && 0 == Z) {
                                R.blockedactions = R.blockedactions.concat(c.slice(h));
                                break
                            }
                            if (ba && 0 == Z) {
                                ba.blockedactions = ba.blockedactions.concat(c.slice(h));
                                break
                            }
                            var b = c[h],
                                k = String(b.cmd),
                                e = b.args.slice(0),
                                n = b.caller;
                            n && !0 === n._destroyed && (b.caller = n = null);
                            l.actioncaller = n;
                            if ("//" != k.slice(0, 2)) {
                                if ("call" == k) k = G(e.shift());
                                else if ("break" == k) {
                                    S = P;
                                    break
                                }
                                a(e, n, "set" == k);
                                if (_[302] == k && 0 == la(e[1]))
                                    for (k = e[0], k = G(k), f = null, f = p.events[k], null != f && void 0 !== f && "" != f && l.nexttick(f), e = p.events.getArray(), b = e.length, n = void 0, n = 0; n < b; n++) {
                                        if (f = e[n]) f = f[k], null != f && void 0 !== f && "" != f && l.nexttick(f)
                                    } else {
                                        if (void 0 !== l[k]) l[k].apply(l[k], e);
                                        else if (n && void 0 !== n[k]) f = n[k], _[15] === typeof f ? f.apply(f, e) : l.executeActions(Wb(n[k], n, !1));
                                        else {
                                            if (_[11] == k || "call" == k) k = G(e.shift());
                                            f = null;
                                            if (null != (f = N(k))) {
                                                var L = typeof f;
                                                _[15] === L ? f.apply(f, e) : _[95] === L ? va(2, _[109] + yd(k)) : _[1] === typeof f && (e.splice(0, 0, k), f = d(f, e), l.executeActions(Wb(f, n, !1)))
                                            } else(L = N(_[539] + k + "]")) ? ((f = L.content) || (f = H[k]), f && (e.splice(0, 0, k), _[445] === G(L.type) ? m(f, e, n) : (f = d(f, e), l.executeActions(Wb(f, n, !1))))) : va(2, _[109] + yd(k))
                                        }
                                        "" != l.lastActionError && (b = b.args.join(","), e = e.join(","), va(3, k + "(" + b + (b == e ? "" : ") => " + k + "(" + e) + ") - " + l.lastActionError), l.lastActionError = "")
                                    }
                            }
                        }
                        l.actioncaller = g;
                        P--;
                        0 == P && (S = 0, ba = null)
                    }
                };
                l.processAnimations = function(a) {
                    var c = !1,
                        b = E,
                        d = b.length,
                        k, f = Pa();
                    a = 1 == a;
                    for (k = 0; k < d; k++) {
                        var e = b[k];
                        if (e) {
                            var g = 0 < e.maxruntime ? (f - e.starttime) / 1E3 / e.maxruntime : 1;
                            isNaN(g) && (g = 1);
                            1 < g && (g = 1);
                            e.position = g;
                            null != e.process && (c = !0, e.process(e), g = e.position);
                            if (1 <= g || a) b.splice(k, 1), d--, k--, e.blockedactions ? (aa === e && (aa = null), I.splice(I.indexOf(e), 1), 0 < e.blockedactions.length && 0 == a && (g = e.blockedactions, e.blockedactions = null, l.executeActions(g))) : e.donecall && 0 == a && l.callaction(e.donecall, e.actioncaller)
                        }
                    }
                    return c
                };
                l.processTicks = function() {
                    var a = J,
                        c = a.length,
                        b;
                    if (0 < c)
                        for (J = [], b = 0; b < c; b++) {
                            var d = a[b],
                                k = d.actioncaller;
                            k && !0 === k._destroyed && (d.actioncaller = k = null);
                            l.callaction(d.call, k)
                        }
                };
                l.fromcharcode = function() {
                    var a = arguments;
                    2 == a.length && X(a[0], String.fromCharCode(C(a[1], l.actioncaller)), !1, l.actioncaller)
                };
                l.stopmovements = function() {
                    ab.stopFrictions(4)
                };
                l.stopall = function() {
                    h(_[553]);
                    E = [];
                    I = [];
                    R = aa = ba = null
                };
                l.breakall = function() {
                    h(_[509]);
                    l.processAnimations(!0)
                };
                l.oninterrupt = function(a) {
                    wa = a
                };
                l.delayedcall = function() {
                    var a = arguments,
                        c = a.length,
                        b = 0;
                    3 == c && (b++, c--);
                    2 == c && (c = new Y, c.maxruntime = Number(a[b]), c.donecall = a[b + 1], c.starttime = Pa(), c.actioncaller = l.actioncaller, c.id = 0 < b ? "ID" + G(a[0]) : "DC" + ++ya, n(c.id), E.push(c))
                };
                l.stopdelayedcall = function(a) {
                    n("ID" + G(a))
                };
                l.nexttick = function(a) {
                    var c = {};
                    c.call = a;
                    c.actioncaller = l.actioncaller;
                    J.push(c)
                };
                l.def = function() {
                    var a = arguments,
                        c = a.length;
                    if (2 <= c) {
                        var b = l.actioncaller,
                            d = "" + a[0],
                            k = G(a[1]),
                            a = 3 == c ? a[2] : N(d, b, !1);
                        _[95] == k ? a = {} : _[559] == k ? (a = parseInt(a), isNaN(a) && (a = 0)) : a = Ab(a, k);
                        X(d, a, !1, b, !0)
                    }
                };
                l.set = function() {
                    var a = arguments;
                    2 == a.length && X(a[0], a[1], !1, l.actioncaller)
                };
                l.copy = function() {
                    var a = arguments;
                    if (2 == a.length) {
                        var c = N(a[1], l.actioncaller);
                        X(a[0], void 0 === c ? null : c, !1, l.actioncaller)
                    }
                };
                l.push = function() {
                    var a = arguments;
                    1 == a.length && oa.push(N(a[0], l.actioncaller))
                };
                l.pop = function() {
                    var a = arguments;
                    1 == a.length && X(a[0], oa.pop(), !1, l.actioncaller)
                };
                l[_[580]] = function() {
                    var a = arguments,
                        c = a.length,
                        b = a[0],
                        d = G(N(b, l.actioncaller));
                    if (1 == c) X(b, !la(d), !0, l.actioncaller);
                    else if (3 <= c) {
                        var k;
                        c--;
                        for (k = 1; k <= c; k++) {
                            var e = G(a[k]),
                                f = !1;
                            isNaN(Number(d)) || isNaN(Number(e)) ? d == e && (f = !0) : Number(d) == Number(e) && (f = !0);
                            if (f) {
                                k++;
                                k > c && (k = 1);
                                X(b, a[k], !0, l.actioncaller);
                                break
                            }
                        }
                    }
                };
                l.toggle = function(a) {
                    var c = N(a, l.actioncaller, !0);
                    void 0 !== c && X(a, !la(c), !0, l.actioncaller)
                };
                l.roundval = function() {
                    var a = arguments;
                    if (1 <= a.length) {
                        var c = Number(N(a[0], l.actioncaller)),
                            b = 2 == a.length ? parseInt(a[1]) : 0,
                            c = 0 == b ? Math.round(c).toString() : c.toFixed(b);
                        X(a[0], c, !1, l.actioncaller, !0)
                    }
                };
                l.tohex = function() {
                    var a = arguments,
                        c = a.length;
                    if (0 < c) {
                        var b = parseInt(N(a[0], l.actioncaller)).toString(16).toUpperCase();
                        2 < c && (b = (_[503] + b).slice(-parseInt(a[2])));
                        1 < c && (b = a[1] + b);
                        X(a[0], b, !1, l.actioncaller, !0)
                    }
                };
                l.tolower = function() {
                    var a = arguments;
                    1 == a.length && X(a[0], G(N(a[0], l.actioncaller)), !1, l.actioncaller, !0)
                };
                l.toupper = function() {
                    var a = arguments;
                    1 == a.length && X(a[0], ("" + N(a[0], l.actioncaller)).toUpperCase(), !1, l.actioncaller, !0)
                };
                l.inc = function() {
                    var a = arguments,
                        c = a.length;
                    if (1 <= c) {
                        var b = Number(N(a[0], l.actioncaller)) + (1 < c ? Number(a[1]) : 1);
                        3 < c && b > Number(a[2]) && (b = Number(a[3]));
                        X(a[0], b, !0, l.actioncaller)
                    }
                };
                l.dec = function() {
                    var a = arguments,
                        c = a.length;
                    if (1 <= c) {
                        var b = Number(N(a[0], l.actioncaller)) - (1 < c ? Number(a[1]) : 1);
                        3 < c && b < Number(a[2]) && (b = Number(a[3]));
                        X(a[0], b, !0, l.actioncaller)
                    }
                };
                l.add = function() {
                    var a = x(arguments);
                    a && X(a[0], a[1] + a[2], !1, l.actioncaller)
                };
                l.sub = function() {
                    var a = x(arguments);
                    a && X(a[0], a[1] - a[2], !1, l.actioncaller)
                };
                l.mul = function() {
                    var a = x(arguments);
                    a && X(a[0], a[1] * a[2], !1, l.actioncaller)
                };
                l.div = function() {
                    var a = x(arguments);
                    a && X(a[0], a[1] / a[2], !1, l.actioncaller)
                };
                l.mod = function() {
                    var a = x(arguments);
                    if (a) {
                        var c = a[1],
                            b = c | 0,
                            c = c + (-b + b % (a[2] | 0));
                        X(a[0], c, !1, l.actioncaller)
                    }
                };
                l.pow = function() {
                    var a = x(arguments);
                    a && X(a[0], Math.pow(a[1], a[2]), !1, l.actioncaller)
                };
                l.clamp = function() {
                    var a = arguments;
                    if (3 == a.length) {
                        var c = l.actioncaller,
                            b = Number(N(a[0], c)),
                            d = Number(a[1]),
                            k = Number(a[2]);
                        b < d && (b = d);
                        b > k && (b = k);
                        X(a[0], b, !1, c)
                    }
                };
                l.remapfovtype = function() {
                    var a = arguments,
                        c = a.length;
                    if (3 == c || 5 == c) {
                        var b = l.actioncaller,
                            d = Number(N(a[0], b)),
                            k = 3 == c ? p.area.pixelwidth : Number(N(a[3], b)),
                            c = 3 == c ? p.area.pixelheight : Number(N(a[4], b)),
                            d = r.fovRemap(d, a[1], a[2], k, c);
                        X(a[0], d, !1, b)
                    }
                };
                l.screentosphere = function() {
                    var a = arguments;
                    if (4 == a.length) {
                        var c = l.actioncaller,
                            b = r.screentosphere(Number(N(a[0], c)), Number(N(a[1], c)));
                        X(a[2], b.x, !1, c);
                        X(a[3], b.y, !1, c)
                    }
                };
                l.spheretoscreen = function() {
                    var a = arguments;
                    if (4 <= a.length) {
                        var c = l.actioncaller,
                            b = r.spheretoscreen(Number(N(a[0], c)), Number(N(a[1], c)), a[4]);
                        X(a[2], b.x, !1, c);
                        X(a[3], b.y, !1, c)
                    }
                };
                l.screentolayer = function() {
                    var a = arguments;
                    if (5 == a.length) {
                        var c = l.actioncaller,
                            b = Ca.getItem(a[0]);
                        if (b) {
                            var d = Number(N(a[1], c)),
                                k = Number(N(a[2], c)),
                                e = Jc,
                                f = Jc,
                                g = b.sprite;
                            if (g) {
                                var h = da,
                                    f = W.viewerlayer.getBoundingClientRect(),
                                    n = g.getBoundingClientRect(),
                                    e = d * h - (n.left - f.left + g.clientLeft + g.scrollLeft),
                                    f = k * h - (n.top - f.top + g.clientTop + g.scrollTop);
                                b.scalechildren && (h = 1);
                                e /= b._finalxscale * h;
                                f /= b._finalyscale * h
                            }
                            X(a[3], e, !1, c);
                            X(a[4], f, !1, c)
                        }
                    }
                };
                l.layertoscreen = function() {
                    var a = arguments;
                    if (5 == a.length) {
                        var c = l.actioncaller,
                            b = Ca.getItem(a[0]);
                        if (b) {
                            var d = Number(N(a[1], c)),
                                k = Number(N(a[2], c)),
                                e = Jc,
                                f = Jc,
                                g = b.sprite;
                            if (g) var f = da,
                                h = b.scalechildren ? f : 1,
                                n = W.viewerlayer.getBoundingClientRect(),
                                m = g.getBoundingClientRect(),
                                e = d * b._finalxscale / h + (m.left - n.left + g.clientLeft + g.scrollLeft) / f,
                                f = k * b._finalyscale / h + (m.top - n.top + g.clientTop + g.scrollTop) / f;
                            X(a[3], e, !1, c);
                            X(a[4], f, !1, c)
                        }
                    }
                };
                l.escape = function() {
                    F(0, arguments, l.actioncaller)
                };
                l.unescape = function() {
                    F(1, arguments, l.actioncaller)
                };
                l.txtadd = function() {
                    var a = arguments,
                        c, b = a.length,
                        d = 2 == b ? String(N(a[0], l.actioncaller)) : "";
                    "null" == d && (d = "");
                    for (c = 1; c < b; c++) d += a[c];
                    X(a[0], d, !1, l.actioncaller, !0)
                };
                l.subtxt = function() {
                    var a = arguments,
                        c = a.length;
                    if (2 <= c) {
                        var b = N(a[1], l.actioncaller),
                            b = null == b ? String(a[1]) : String(b),
                            b = b.substr(2 < c ? Number(a[2]) : 0, 3 < c ? Number(a[3]) : void 0);
                        X(a[0], b, !1, l.actioncaller, !0)
                    }
                };
                l.indexoftxt = function() {
                    var a = arguments,
                        c = a.length;
                    3 <= c && (c = String(a[1]).indexOf(String(a[2]), 3 < c ? Number(a[3]) : 0), X(a[0], c, !1, l.actioncaller, !0))
                };
                l.txtreplace = function() {
                    var a = arguments,
                        c = a.length;
                    if (3 == c || 4 == c) {
                        var c = 3 == c ? 0 : 1,
                            b = N(a[c], l.actioncaller);
                        if (b) var d = a[c + 2],
                            b = b.split(a[c + 1]).join(d);
                        X(a[0], b, !1, l.actioncaller, !0)
                    }
                };
                l.txtsplit = function() {
                    var a = arguments,
                        c = a.length;
                    if (3 <= c) {
                        var b = ("" + C(a[0], l.actioncaller)).split("" + a[1]),
                            d;
                        if (3 == c)
                            for (d = 0; d < b.length; d++) X(a[2] + "[" + d + _[570], b[d], !1, l.actioncaller, !0);
                        else
                            for (d = 2; d < c; d++) X(a[d], b[d - 2], !1, l.actioncaller, !0)
                    }
                };
                l.showlog = function() {
                    var a = arguments,
                        a = !(1 == a.length && 0 == la(a[0]));
                    W.showlog(a)
                };
                l[_[602]] = function() {
                    var a = arguments,
                        c, b = a.length,
                        d = l.actioncaller;
                    for (c = 0; c < b; c++) a: {
                        var k = d,
                            e = void 0,
                            f = void 0,
                            g = void 0,
                            h = Pd(a[c]),
                            f = h.length;
                        if (1 == f && k && (g = h[0], k.hasOwnProperty(g))) {
                            k[g] = null;
                            delete k[g];
                            break a
                        }
                        for (var n = p, e = 0; e < f; e++) {
                            var g = h[e],
                                m = e == f - 1,
                                L = null,
                                q = g.indexOf("[");
                            0 < q && (L = Xc(g, q + 1, g.length - 1, k), g = g.slice(0, q));
                            if (void 0 !== n[g]) {
                                if (null != L && (q = n[g], q.isArray))
                                    if (g = q.getItem(L))
                                        if (m) break a;
                                        else {
                                            n = g;
                                            continue
                                        }
                                else break;
                                if (m) {
                                    n[g] = null;
                                    delete n[g];
                                    break a
                                } else n = n[g]
                            } else break
                        }
                    }
                };
                l.Ltrace = function(a, c) {
                    var b, d = c.length,
                        k = "",
                        e = l.actioncaller;
                    for (b = 0; b < d; b++) var f = c[b],
                        g = N(f, e),
                        k = null != g ? k + g : k + f;
                    va(a, k)
                };
                l.debug = function() {
                    l.Ltrace(0, arguments)
                };
                l.trace = function() {
                    l.Ltrace(1, arguments)
                };
                l.warning = function() {
                    l.Ltrace(2, arguments)
                };
                l.error = function() {
                    l.Ltrace(3, arguments)
                };
                l.fatalerror = function(a) {
                    Ya(a)
                };
                l.openurl = function() {
                    var a = arguments;
                    U.open(a[0], 0 < a.length ? a[1] : _[611])
                };
                l.loadscene = function() {
                    var a = arguments;
                    if (0 < a.length) {
                        var c = a[0],
                            b = N(_[93] + c + _[83]),
                            d = N(_[93] + c + _[481]);
                        d && (d += ";");
                        null == b ? va(3, 'loadscene() - scene "' + c + '" not found') : (p.xml.sceneNEW = c, p.xml.view = {}, Va.loadxml(_[142] + b + _[138], a[1], a[2], a[3], d))
                    }
                };
                l.jsget = function() {
                    var a = arguments;
                    if (2 == a.length) {
                        var c = a[0],
                            b = a[1],
                            d = null;
                        try {
                            (function() {
                                var krpano = W.viewerlayer;
                                d = eval(b)
                            })()
                        } catch (k) {
                            va(3, "js" + (c ? "get" : "call") + '() - calling Javascript "' + b + '" failed: ' + k)
                        }
                        c && X(c, d, !1, l.actioncaller)
                    }
                };
                l.jscall = function() {
                    var a = arguments;
                    1 == a.length && l.jsget(null, a[0])
                };
                l.parseFunction = function(c) {
                    var b = null;
                    if (c = Wb(c, null, !0)) c = c[0], a(c.args, l.actioncaller), b = [c.cmd].concat(c.args);
                    return b
                };
                l.js = function(c) {
                    c = "" + c;
                    var b = Wb(c, null, !0);
                    if (b) {
                        b = b[0];
                        a(b.args, l.actioncaller);
                        var d = !1;
                        if (_[15] == typeof U[b.cmd]) {
                            d = !0;
                            try {
                                U[b.cmd].apply(U[b.cmd], b.args)
                            } catch (k) {
                                d = !1
                            }
                        }
                        if (0 == d) {
                            b = b.cmd + (0 < b.args.length ? "('" + b.args.join("','") + "');" : "();");
                            try {
                                eval(b)
                            } catch (e) {
                                va(2, 'js() - calling Javascript "' + c + '" failed: ' + e)
                            }
                        }
                    }
                };
                l.setfov = function() {
                    var a = arguments;
                    1 == a.length && (r.fov = Number(a[0]))
                };
                l.lookat = function() {
                    var a = arguments;
                    if (1 <= a.length) {
                        var c, b = p.webVR;
                        b && b.enabled && b.setoffset ? (c = parseFloat(a[0]), isNaN(c) || (Va.setLastPanoOffset(c - r.hlookat), b.setoffset(c), r.hlookat = c)) : (c = parseFloat(a[0]), isNaN(c) || (r.hlookat = c), c = parseFloat(a[1]), isNaN(c) || (r.vlookat = c), c = parseFloat(a[2]), isNaN(c) || (r.fov = c), c = parseFloat(a[3]), isNaN(c) || (r.distortion = c), c = parseFloat(a[4]), isNaN(c) || (r.architectural = c), c = parseFloat(a[5]), isNaN(c) || (r.pannini = "" + c))
                    }
                };
                l.adjusthlookat = function() {
                    var a = arguments;
                    1 == a.length && (a = Number(C(a[0], l.actioncaller)), isNaN(a) || (r.hlookat = qd(r.hlookat, a)))
                };
                l["for"] = function() {
                    var a = arguments;
                    if (4 == a.length) {
                        Z++;
                        var c = l.actioncaller,
                            b = "" + a[1],
                            d = "" + a[3] + ";" + a[2],
                            a = Wb("" + a[0], c, !1),
                            c = Wb(d, c, !1);
                        l.executeActions(a);
                        d = null;
                        try {
                            d = D(b), 0 == p.strict && B(d)
                        } catch (k) {
                            d = null, va(3, k + ": " + b)
                        }
                        if (d)
                            for (;;)
                                if (b = d.slice(), q(b), t(b), v(b)) {
                                    if (l.executeActions(c), 0 < S) {
                                        S = 0;
                                        break
                                    }
                                } else break;
                        Z--
                    }
                };
                l.loop = function() {
                    g("loop", _[327], arguments, l.actioncaller)
                };
                l.asyncloop = function() {
                    g(_[477], _[183], arguments, l.actioncaller)
                };
                l.callwhen = function() {
                    g(_[527], _[189], arguments, l.actioncaller)
                };
                l.asyncfor = function() {
                    g(_[493], "if('%5'!='NEXTLOOP',%1);if(%2,%4;%3;delayedcall(0,asyncfor(%1,%2,%3,%4,NEXTLOOP)););", arguments, l.actioncaller)
                };
                l.setinterval = function() {
                    g(_[400], _[180], arguments, l.actioncaller)
                };
                l.clearinterval = function(a) {
                    l.stopdelayedcall(_[480] + a)
                };
                var k = String.fromCharCode(2),
                    L = ".<.<<.<=.==.===.>=.>.>>.!=.!==.+.-.*./.^.&&.||.?.:.~|.~&.";
                l.calc = function() {
                    var a, c = arguments;
                    2 == c.length && (a = u(c[1]), c[0] && X(c[0], a, !1, l.actioncaller));
                    return a
                };
                l.resolvecondition = function() {
                    var a = l.actioncaller,
                        c = arguments,
                        b = c.length,
                        d = null,
                        k = null,
                        k = !1;
                    if (2 == b || 3 == b) {
                        d = G(c[0]);
                        k = 2 == b ? c[1] : c[2];
                        if ("null" == d || "" == d) d = null;
                        k = null == k || "" == k ? !1 : u(k);
                        null != d && (3 == b && (c = G(c[1]), b = la(N(d, a)), "and" == c ? k = b && k : "or" == c ? k = b || k : "xor" == c && (k = !(b && k) && (b || k))), X(d, k, !1, a))
                    }
                    return k
                };
                l["if"] = function() {
                    var a = arguments,
                        c = l.actioncaller;
                    2 <= a.length && (u(a[0]) ? l.callaction(a[1], c, !0) : 3 == a.length && l.callaction(a[2], c, !0))
                };
                l.ifnot = function() {
                    var a = arguments;
                    l["if"](a[0], a[2], a[1])
                };
                l.stoplookto = function() {
                    n(_[94])
                };
                l.lookto = function() {
                    var c = arguments,
                        b = c.length;
                    if (2 <= b)
                        if (aa) va(2, _[170]);
                        else {
                            var d = 0 == la(c[5]);
                            d && 0 < Z && va(2, _[178]);
                            var k = l.actioncaller,
                                e = new Y;
                            l.stopmovements();
                            n(_[94]);
                            e.id = _[94];
                            e.actioncaller = k;
                            0 == d ? e.donecall = c[6] : (aa = e, e.blockedactions = [], ba = e, I.push(e));
                            4 < b && void 0 === c[4] && b--;
                            3 < b && void 0 === c[3] && b--;
                            2 < b && void 0 === c[2] && b--;
                            var f = Number(c[0]),
                                g = Number(c[1]),
                                h = 2 < b ? Number(c[2]) : r.fov,
                                m = 3 < b ? c[3] : null,
                                L = 4 < b ? la(c[4]) : !0;
                            if (!(isNaN(f) || isNaN(g) || isNaN(h))) {
                                var f = f - Number(p.image.viewoffset),
                                    q = 1,
                                    c = 720,
                                    b = -720,
                                    d = 720,
                                    u = r.hlookat,
                                    t = u,
                                    x = r.vlookat,
                                    v = r.fov;
                                if (L) {
                                    for (; - 90 > g || 90 < g;) - 90 > g ? (g = -180 - g, f += 180) : 90 < g && (g = 180 - g, f -= 180);
                                    for (; 0 > u;) u += 360;
                                    for (; 360 < u;) u -= 360;
                                    for (; 0 > f;) f += 360;
                                    for (; 360 < f;) f -= 360;
                                    for (; - 180 > x;) x += 360;
                                    for (; 180 < x;) x -= 360;
                                    u = qd(u, f);
                                    x = qd(x, g);
                                    L = u - t;
                                    u -= L;
                                    f -= L
                                }
                                e.startH = u;
                                e.startV = x;
                                e.startF = v;
                                e.destH = f;
                                e.destV = g;
                                e.destF = h;
                                f = Math.sqrt((f - u) * (f - u) + (g - x) * (g - x) + (h - v) * (h - v));
                                m && ((m = Wb(m, null, !1)) && (m = m[0]), m && (g = m.cmd, h = m.args, a(h, k), _[61] == g ? (q = 0, d = 360, 1 == m.args.length && (d = parseFloat(h[0]))) : _[588] == g ? (q = 1, 0 < m.args.length && (c = parseFloat(h[0])), 1 < m.args.length && (b = parseFloat(h[1])), 2 < m.args.length && (d = parseFloat(h[2])), c = +Math.abs(c), b = -Math.abs(b), d = +Math.abs(d)) : "tween" == g && (q = 2, e.tweenfu = yc.getTweenfu(h[0]), e.maxruntime = parseFloat(h[1]), isNaN(e.maxruntime) && (e.maxruntime = .5))));
                                e.motionmode = q;
                                0 == q ? e.maxruntime = f / d : 1 == q && (k = f, q = d * d / (2 * c), m = d / c, f = -(d * d) / (2 * b), g = -d / b, h = k - (q + f), u = h / d, 0 > u && (d = Math.sqrt(2 * k * c * b / (b - c)), q = d * d / (2 * c), m = d / c, f = -(d * d) / (2 * b), g = -d / b, u = h = 0), x = m + u + g, e.accelspeed = c, e.breakspeed = b, e.Vmax = d, e.Tmax = x, e.Smax = k, e.T1 = m, e.T2 = u, e.T3 = g, e.S1 = q, e.S2 = h, e.S3 = f, e.maxruntime = x);
                                e.starttime = Pa();
                                e.process = z;
                                E.push(e)
                            }
                        }
                };
                l.looktohotspot = function() {
                    var a = arguments,
                        c = l.actioncaller,
                        b = Bb.getItem(1 > a.length ? c ? c.name : "" : a[0]);
                    if (b) {
                        var c = b.ath,
                            d = b.atv,
                            k = 30,
                            k = b.getcenter(),
                            c = k.x,
                            d = k.y,
                            k = k.z,
                            b = Number(a[1]);
                        isNaN(b) || (k = b);
                        b = r.fovmin;
                        k < b && (k = b);
                        l.lookto(c, d, k, a[2], a[3])
                    }
                };
                l.moveto = function() {
                    var a = arguments;
                    2 <= a.length && l.lookto(a[0], a[1], r.fov, a[2])
                };
                l.zoomto = function() {
                    var a = arguments;
                    1 <= a.length && l.lookto(r.hlookat, r.vlookat, a[0], a[1])
                };
                l.getlooktodistance = function() {
                    var a = arguments,
                        c = a.length;
                    if (3 <= c) {
                        var b = l.actioncaller,
                            d = Number(C(a[1], b)),
                            k = Number(C(a[2], b)),
                            e = r.hlookat,
                            f = r.vlookat;
                        5 == c && (e = Number(C(a[3], b)), f = Number(C(a[4], b)));
                        if (!(isNaN(d) || isNaN(k) || isNaN(e) || isNaN(f))) {
                            var c = Math.PI,
                                g = c / 180,
                                d = c - d * g,
                                e = c - e * g,
                                f = f * g,
                                k = k * g,
                                d = Math.acos(Math.cos(f) * Math.cos(e) * Math.cos(k) * Math.cos(d) + Math.sin(f) * Math.sin(k) + Math.cos(f) * Math.sin(e) * Math.cos(k) * Math.sin(d)) / g;
                            X(a[0], d, !1, b)
                        }
                    }
                };
                l.wait = function() {
                    var a = arguments;
                    if (1 == a.length) {
                        var a = a[0],
                            c = G(a);
                        if ("load" == c || "blend" == c) a = 0;
                        else {
                            c = "time";
                            a = Number(a);
                            if (isNaN(a)) return;
                            0 >= a && (a = 0)
                        }
                        var b = new Y;
                        b.waitfor = c;
                        b.maxruntime = a;
                        b.process = y;
                        b.starttime = Pa();
                        b.actioncaller = l.actioncaller;
                        b.id = "WAIT" + ++ya;
                        b.blockedactions = [];
                        ba = b;
                        I.push(b);
                        E.push(b)
                    }
                };
                l.tween = function() {
                    var a = arguments,
                        c = a.length;
                    if (2 <= c) {
                        var d = l.actioncaller,
                            k = new Y,
                            e = G(a[0]);
                        if (0 < e.indexOf("|")) {
                            var c = ("" + a[0]).split("|"),
                                d = ("" + a[1]).split("|"),
                                k = a[3] ? ("" + a[3]).split("|") : [a[3]],
                                f = c.length,
                                g = d.length,
                                h = k.length,
                                m = parseFloat(a[2]);
                            if (0 > m || isNaN(m)) m = .5;
                            for (e = 0; e < g; e++) d[e] = Ga(d[e]);
                            for (e = 0; e < h; e++) k[e] = Ga(k[e]);
                            for (e = 0; e < f; e++) l.tween(Ga(c[e]), d[e % g], m, k[e % h], e == f - 1 ? a[4] : null, e == f - 1 ? a[5] : null)
                        } else {
                            f = e;
                            h = a[1];
                            g = !1;
                            d && 0 > e.indexOf(".") && d.hasOwnProperty(e) && (f = d._type + "[" + d.name + "]." + e, g = !0);
                            0 == g && 0 < e.indexOf("[") && (f = e = b(e, d), f = f.split(_[163]).join(_[151]));
                            k.id = f;
                            k.varname = e;
                            k.actioncaller = d;
                            k.startval = g ? d[e] : N(e, d);
                            if (null == k.startval || "" == k.startval) k.startval = 0;
                            k.endval = h;
                            e = 2 < c ? String(a[2]) : "0.5";
                            if (0 < e.indexOf("(") && (m = Wb(e, null, !1))) {
                                var L = m[0];
                                _[497] == L.cmd && (m = Number(L.args[0]), e = Number(L.args[1]), h = Math.abs(parseFloat(h) - parseFloat(k.startval)), e = e * h / m)
                            }
                            e = parseFloat(e);
                            isNaN(e) && (e = .5);
                            k.maxruntime = e;
                            k.tweenmap = yc.getTweenfu(3 < c ? a[3] : _[75]);
                            if (4 < c)
                                if ("wait" == G(a[4])) k.blockedactions = [], ba = k, I.push(k);
                                else if (h = a[4]) 0 == g && 0 < h.indexOf("[") && (h = b(h, d)), k.donecall = h;
                            5 < c && (k.updatefu = a[5]);
                            k.starttime = Pa();
                            k.process = A;
                            n(f);
                            E.push(k)
                        }
                    }
                };
                l.stoptween = function() {
                    var a = l.actioncaller,
                        c = arguments,
                        d = c.length,
                        k;
                    for (k = 0; k < d; k++) {
                        var e = G(c[k]);
                        if (0 < e.indexOf("|")) l.stoptween.apply(l.stoptween, e.split("|"));
                        else {
                            if (a && 0 > e.indexOf(".")) {
                                if (n(a._type + "[" + a.name + "]." + e)) continue
                            } else 0 < e.indexOf("[") && (e = b(e, a)), e = e.split(_[163]).join(_[151]);
                            n(e)
                        }
                    }
                };
                l.invalidatescreen = function() {
                    r.haschanged = !0
                };
                l.updatescreen = function() {
                    r.haschanged = !0
                };
                l.updateobject = function() {
                    M && M.updateFOV && M.updateFOV(M, [Number(K.hfov), Number(K.vfov), Number(K.voffset)]);
                    r.haschanged = !0
                };
                l.loadpano = function(a, c, b, d, k) {
                    p.xml.scene = null;
                    p.xml.view = {};
                    Va.loadpano(a, c, b, d, k)
                };
                l.loadpanoscene = function(a, c, b, d, k, e) {
                    p.xml.sceneNEW = c;
                    p.xml.view = {};
                    p._loadpanoscene_name = c;
                    Va.loadpano(a, b, d, k, e)
                };
                l.loadxml = function(a, c, b, d, k) {
                    p.xml.scene = null;
                    p.xml.view = {};
                    Va.loadxml(a, c, b, d, k)
                };
                l.fscommand = function() {};
                l.freezeview = function() {};
                l.reloadpano = function() {};
                l.addlensflare = function() {};
                l.removelensflare = function() {};
                l.SAcall = function(a) {
                    var c = N(_[11]);
                    if ((a = Wb(a, null, !1)) && c) {
                        var b, k;
                        k = a.length;
                        for (b = 0; b < k; b++) {
                            var e = a[b];
                            if (e) {
                                var f = e.cmd,
                                    g = c.getItem(f);
                                g && 1 == la(g.secure) ? (e = e.args, e.splice(0, 0, f), l.callaction(d(g.content, e))) : va(2, _[496] + f + _[345])
                            }
                        }
                    }
                }
            })();
            var W = {};
            (function() {
                function a(a) {
                    a = _[209] + a;
                    U.console ? U.console.log(a) : alert(a)
                }
    
                function b(a, c, b, d, e, f) {
                    var g = Ha(),
                        h = g.style;
                    h.position = _[0];
                    "LT" == a ? (h.left = c, h.top = b) : (h.left = c, h.bottom = b);
                    h.width = d;
                    h.height = e;
                    h.overflow = _[6];
                    !1 === f && (h.webkitUserSelect = h.MozUserSelect = h.msUserSelect = h.oUserSelect = h.userSelect = "none");
                    return g
                }
    
                function w(a) {
                    if (q.fullscreen = a) U.activekrpanowindow = v.id;
                    v.style.background = a ? pa(p.bgcolor, 1) : _[13];
                    ua(1 == a ? _[251] : _[267])
                }
    
                function g(a, c) {
                    for (var b = a.style, d = c.length, e = 0, e = 0; e < d; e += 2) b[c[e]] = c[e + 1]
                }
    
                function e() {
                    D(!mc, le);
                    y.style.textDecoration = mc ? _[82] : "none"
                }
    
                function m() {
                    D(mc, !le);
                    A.style.textDecoration = le ? _[82] : "none"
                }
    
                function n(a) {
                    Xa(_[31])
                }
    
                function h(a) {
                    w(!!(ea.fullscreenElement || ea.mozFullScreenElement || ea.webkitIsFullScreen || ea.webkitFullscreenElement || ea.msFullscreenElement))
                }
    
                function x(a) {
                    q.__scrollpage_yet = U.innerHeight + 1 < Xb;
                    f.style.touchAction = q.__scrollpage_yet ? "pan-y" : "none"
                }
    
                function F(a, c) {
                    na(a);
                    var b = "none" != u.style.display ? "none" : "";
                    void 0 !== c && (b = 1 == c ? "" : "none");
                    u.style.display = b;
                    y.style.display = A.style.display = p.debugmode ? "" : "none";
                    z.scrollTop = z.scrollHeight
                }
    
                function D(a, c) {
                    var b = a ? _[100] : "none";
                    mc = a;
                    le = c;
                    var d, e, f, g;
                    f = Ca.getArray();
                    e = f.length;
                    for (d = 0; d < e; d++)(g = f[d]) && g.sprite && (g.sprite.style.outline = b);
                    b = c ? _[201] : "none";
                    f = Bb.getArray();
                    e = f.length;
                    for (d = 0; d < e; d++)(g = f[d]) && g.sprite && (g.sprite.style.outline = b);
                    nb = !0
                }
    
                function B() {
                    wa && (f.removeChild(wa), wa = null);
                    var a, c = Ha();
                    a = 25;
                    d.androidstock && (a *= d.pixelratio);
                    g(c, [_[37], _[0], "left", "50%", "top", "50%", _[28], _[54], _[51], a + "px", _[67], "none", _[39], _[5], _[338], "none"]);
                    a = c.style;
                    a.zIndex = 999999;
                    a.opacity = .67;
                    a = Ha();
                    g(a, "position;relative;left;-50%;top;-25px;fontFamily;sans-serif;textShadow;#000000 1px 1px 2px;lineHeight;110%".split(";"));
                    a.innerHTML = _[502] + (Ta && Ta[1] && 6 < Ga(Ta[1], !1).length ? Ta[1] : _[188]) + _[467];
                    c.appendChild(a);
                    f.appendChild(c);
                    wa = c
                }
                var q = W;
                q.fullscreen = !1;
                q.__scrollpage_yet = !1;
                var t = null,
                    v = null,
                    f = null;
                q.htmltarget = null;
                q.viewerlayer = null;
                q.controllayer = null;
                q.panolayer = null;
                q.pluginlayer = null;
                q.hotspotlayer = null;
                var u = q.svglayer = null,
                    z = null,
                    C = null,
                    y = null,
                    A = null,
                    l = 0,
                    c = 0,
                    H = !1,
                    E = !1;
                q.build = function(c) {
                    function l(a) {
                        a && _[8] == a.type && 0 != (a.button | 0) || F(null, !1)
                    }
                    var r = c.target,
                        E = c.id,
                        t = ea.getElementById(r);
                    if (!t) return a(_[190] + r), !1;
                    for (var r = null, w = E, D = 1;;)
                        if (r = ea.getElementById(E))
                            if (_[293] == w) D++, E = w + D;
                            else return a(_[184] + E), !1;
                    else break;
                    r = Ha();
                    r.id = E;
                    r.style.position = _[146];
                    r.style.overflow = _[6];
                    r.style.lineHeight = _[59];
                    r.style.fontWeight = _[59];
                    r.style.fontStyle = _[59];
                    r.tabIndex = -1;
                    r.style.outline = 0;
                    E = _[26];
                    c.bgcolor && (E = c.bgcolor, p.bgcolor = parseInt(E.slice(1), 16));
                    w = G(c.wmode);
                    if (_[13] == w || _[167] == w) E = null;
                    null != E && (r.style.background = E);
                    t.appendChild(r);
                    v = r;
                    !0 === c.focus && (U.activekrpanowindow = v.id, v.focus());
                    q.htmltarget = t;
                    q.viewerlayer = r;
                    f = b("LT", 0, 0, "100%", "100%", !1);
                    g(f, "msTouchAction none touchAction none msContentZooming none contentZooming none -webkit-tap-highlight-color transparent".split(" "));
                    q.controllayer = f;
                    t = b("LT", 0, 0, "100%", "100%");
                    q.panolayer = t;
                    g(t, [_[318], "none"]);
                    c = b("LT", 0, 0, "100%", "100%", !1);
                    0 == d.ie && 0 == d.firefox && g(c, [Ee, _[130]]);
                    d.android && d.firefox && xc && (E = b("LT", 0, 0, "1px", "1px"), E.style.background = _[272], E.style.pointerEvents = "none", E.style.zIndex = 999999999, E.style[fb] = _[29], c.appendChild(E));
                    var E = d.androidstock ? d.pixelratio : 1,
                        w = 156 * E,
                        D = (d.mobile ? 8 : 13) * E,
                        H = d.androidstock || d.android && d.chrome ? 6 : 8;
                    u = b("LB", 0, 0, "100%", w + "px", !0);
                    u.style.display = "none";
                    !0 !== d.opera && xc && (2 > rd && (u.style[fb] = _[29]), d.ios && 0 == d.simulator || d.android && d.chrome) && (u.style[fb] = _[29]);
                    u.style.zIndex = 999999999;
                    var J = b("LT", 0, 0, "100%", "100%", !0);
                    J.style.opacity = .67;
                    d.android && d.opera && (J.style.borderTop = _[198]);
                    g(J, [_[291], _[26], cc, _[518] + H + _[424], _[139], H + "px", _[566], .67]);
                    z = ea.createElement("pre");
                    H = null;
                    d.mac && (H = _[329] + (U.chrome ? "1px" : "0"));
                    d.realDesktop ? (z.style.fontFamily = _[33], z.style.fontSize = "11px", H && (z.style.fontSize = "13px", z.style.textShadow = H)) : (z.style.fontFamily = _[21], z.style.fontSize = D + "px");
                    g(z, [_[37], _[0], "left", "5px", "top", "0px", _[63], "left", _[387], 0, _[369], d.realDesktop ? "16px" : 0, _[437], 0, _[328], 0, _[134], "none", _[90], 0, _[139], (d.realDesktop ? 10 : 8) + "px", _[62], "100%", _[18], w - 10 + "px", _[516], "auto", _[243], "none", _[88], "block", _[449], "left", _[446], _[510], _[67], "none", _[28], _[54], _[39], "text"]);
                    C = Ha();
                    H && (C.style.textShadow = H);
                    g(C, [_[37], _[0], _[4], 0, "top", "10px", _[55], "0 4px", _[18], "30px", _[69], "none", _[70], "none", _[81], "none", _[39], _[10], _[42], _[13], _[79], d.realDesktop ? _[33] : _[21], _[51], (d.realDesktop ? 10 : 9 * E | 0) + "px", _[28], _[54]]);
                    C.innerHTML = "CLOSE";
                    ca(C, _[47], na, !0);
                    ca(C, _[49], na, !0);
                    ca(C, _[52], l, !0);
                    ca(C, _[2], l, !0);
                    u.appendChild(J);
                    u.appendChild(z);
                    u.appendChild(C);
                    y = Ha();
                    H && (y.style.textShadow = H);
                    g(y, [_[37], _[0], _[4], "0px", _[3], "0px", _[55], _[289], _[18], "12px", _[69], "none", _[70], "none", _[81], "none", _[39], _[10], _[42], _[13], _[79], d.realDesktop ? _[33] : _[21], _[51], (d.realDesktop ? 10 : 9 * E | 0) + "px", _[28], _[152], _[88], "none"]);
                    y.innerHTML = _[573];
                    ca(y, _[47], na, !0);
                    ca(y, _[49], na, !0);
                    ca(y, _[52], e, !0);
                    ca(y, _[2], e, !0);
                    u.appendChild(y);
                    A = Ha();
                    H && (A.style.textShadow = H);
                    g(A, [_[37], _[0], _[4], "0px", _[3], "18px", _[55], _[288], _[18], "12px", _[69], "none", _[70], "none", _[81], "none", _[39], _[10], _[42], _[13], _[79], d.realDesktop ? _[33] : _[21], _[51], (d.realDesktop ? 10 : 9 * E | 0) + "px", _[28], _[152], _[88], "none"]);
                    A.innerHTML = _[514];
                    ca(A, _[47], na, !0);
                    ca(A, _[49], na, !0);
                    ca(A, _[52], m, !0);
                    ca(A, _[2], m, !0);
                    u.appendChild(A);
                    r.appendChild(f);
                    f.appendChild(t);
                    f.appendChild(c);
                    d.ios && (t = Ha(), t.style.position = _[0], t.style.webkitTransformStyle = _[130], c.appendChild(t));
                    r.appendChild(u);
                    q.pluginlayer = c;
                    q.hotspotlayer = c;
                    d.fullscreensupport && ca(ea, d.browser.events.fullscreenchange, h);
                    ca(U, _[50], n, !1);
                    ca(U, _[506], n, !1);
                    ca(ea, _[31], n, !1);
                    q.onResize(null);
                    ca(U, _[159], q.onResize, !1);
                    d.iphone && d.safari && ca(U, _[157], x, !1);
                    return !0
                };
                q.focus = function(a) {
                    U.activekrpanowindow = v.id;
                    d.desktop && ea.activeElement !== v && v.focus()
                };
                q.setFullscreen = function(a) {
                    if (d.fullscreensupport)
                        if (a) v[d.browser.events.requestfullscreen]();
                        else try {
                            ea.exitFullscreen ? ea.exitFullscreen() : ea.mozCancelFullScreen ? ea.mozCancelFullScreen() : ea.webkitCancelFullScreen ? ea.webkitCancelFullScreen() : ea.webkitExitFullscreen ? ea.webkitExitFullscreen() : ea.msExitFullscreen && ea.msExitFullscreen()
                        } catch (c) {} else {
                            var b = ea.body,
                                e = b.style,
                                f = v.style;
                            if (a) q.fsbkup = [e.padding, e.margin, e.overflow, b.scrollTop, b.scrollLeft, U.pageYOffset], e.padding = "0 0", e.margin = "0 0", e.overflow = _[6], b.scrollTop = "0", b.scrollLeft = "0", b.appendChild(v), f.position = _[0], f.left = 0, f.top = 0, f.width = "100%", f.height = "100%", ab.domUpdate(), U.scrollTo(0, 0), w(!0);
                            else if (a = q.fsbkup) q.htmltarget.appendChild(v), e.padding = a[0], e.margin = a[1], e.overflow = a[2], b.scrollTop = a[3], b.scrollLeft = a[4], f.position = _[146], ab.domUpdate(), U.scrollTo(0, a[5]), q.fsbkup = null, w(!1)
                        }
                };
                q.onResize = function(a, c) {
                    H = c;
                    E = !0
                };
                q.resizeCheck = function() {
                    var a = !1,
                        b = v,
                        e = b.clientWidth,
                        b = b.clientHeight;
                    !(e != l || b != c || dc && dc.haschanged) || 0 == e && 0 == l || (l = e, c = b, a = !0);
                    E && (a = !0, E = !1);
                    255 == (cb & 511) && 0 == (Ua & 1) && B();
                    if (a) {
                        var g = v,
                            h = 0,
                            e = g;
                        do
                            if (h = e.offsetHeight, d.ie && q.fullscreen && 20 > h && (h = 0), 1 >= h) {
                                if (e = e.parentNode, null == e) {
                                    h = U.innerHeight;
                                    break
                                }
                            } else break; while (1);
                        b = 0;
                        for (e = g; e && "body" != G(e.nodeName);) b++, e = e.parentNode;
                        var m = g.clientWidth,
                            e = !1;
                        if (0 == g.clientHeight) {
                            for (var n = !1; g;)
                                if (g && g.style && "none" == g.style.display) {
                                    n = !0;
                                    break
                                } else g = g.parentNode;
                            0 == n && 0 < m && (e = !0)
                        }
                        g = "100%";
                        1 > h && (h = 100);
                        var n = U.innerWidth,
                            p = U.innerHeight,
                            r = top !== window;
                        d.iphone && 2 >= b && 0 == r && n > p && (g = _[264]);
                        d.getViewportScale();
                        b = g;
                        ab && ab.focusLoss();
                        g = !1;
                        if (bb != m || Xb != h || H) g = !0, H = !1, bb = m, Xb = h;
                        v.style.width = "100%";
                        v.style.height = b;
                        l = bb;
                        c = Xb;
                        vb && (vb._pxw = vb.pixelwidth = vb.imagewidth = bb / da, vb._pxh = vb.pixelheight = vb.imageheight = Xb / da);
                        Cb && (Cb._pxw = Cb.pixelwidth = Cb.imagewidth = bb / da, Cb._pxh = Cb.pixelheight = Cb.imageheight = Xb / da);
                        g && (dc && dc.calc(bb, Xb), ua(_[84]), g = !1);
                        dc ? (g |= dc.calc(bb, Xb), f.style.left = dc.pixelx * da + "px", f.style.top = dc.pixely * da + "px", f.style.width = Sa + "px", f.style.height = Fa + "px", m = Sa, h = Fa) : (Sa = bb, Fa = Xb);
                        Ac = Math.max(4 * h / 3, m);
                        d.desktop && (b = U.devicePixelRatio, isNaN(b) || (d.pixelratio = b, d.fractionalscaling = 0 != b % 1));
                        Za.size(m, h);
                        g && ua(_[84]);
                        "" == u.style.display && (z.scrollTop = z.scrollHeight);
                        Va.updateview(!1, !0);
                        E = e
                    }
                    return a
                };
                var J = "";
                q.log = function(a) {
                    if ("cls" == a) z.innerHTML = "";
                    else if ("d" == a) B();
                    else {
                        var c = 4 > d.firefoxversion ? 4096 : 1E4,
                            b = a.slice(0, 6).charCodeAt(0);
                        73 != b ? (c = _[224] + (68 == b ? _[613] : 87 == b ? _[614] : _[615]) + ";'>" + a + _[494], J += c + "\n", z.innerHTML += "\n" + c) : (J += a + "\n", J.length > c ? (J = J.slice(-c / 2, -1), z.innerHTML = J) : z.lastChild ? z.lastChild.nodeValue += "\n" + a : z.innerHTML += a);
                        z.scrollTop = z.scrollHeight;
                        lc.so.vars && la(lc.so.vars.consolelog) && (c = U.console) && c.log && (d.firefox || d.chrome ? c.log("%c" + a, 68 == b ? _[317] : 69 == b ? _[199] : 87 == b ? _[315] : _[308]) : c.log(a))
                    }
                };
                q.showlog = function(a) {
                    F(null, a)
                };
                var oa = 0;
                q.handleKeydown = function(a) {
                    p[zc[1]] ? 79 == a ? F() : "none" != u.style.display && (68 == a ? (p.debugmode = !p.debugmode, F(null, !0), 0 == p.debugmode && (y.style.textDecoration = A.style.textDecoration = "none", ke = !1, D(!1, !1))) : p.debugmode && (72 == a ? m() : 76 == a ? e() : 80 == a ? (ke = !ke, nb = !0) : 83 == a ? (ka.stereo = !ka.stereo, nb = !0) : 65 == a ? (Mb.enabled = !Mb.enabled, va(0, (Mb.enabled ? "en" : "dis") + _[283]), nb = !0) : 67 == a ? ga.mousetype = _[17] == ga.mousetype ? _[604] : _[17] : 85 == a && (va(0, _[229]), r.maxpixelzoom = Number.NaN, r.fovmin = 0, r.fovmax = 179, r.limitview = "off", nb = !0))) : 0 != oa || 220 != a && 160 != a ? 1 == oa && 73 == a ? oa++ : 2 == oa && 68 == a ? oa++ : 3 == oa && 75 == a ? oa++ : 4 == oa && 70 == a ? oa++ : 5 == oa && 65 == a ? p[zc[1]] = !0 : oa = 0 : oa++
                };
                q.getMousePos = function(a, c) {
                    var b = {},
                        d = c ? c : f,
                        e = d.getBoundingClientRect();
                    b.x = Math.round(a.clientX - e.left - d.clientLeft + d.scrollLeft);
                    b.y = Math.round(a.clientY - e.top - d.clientTop + d.scrollTop);
                    return b
                };
                q.remove = function() {
                    null != t && (clearInterval(t), t = null);
                    try {
                        ha(U, _[159], q.onResize, !1), ha(U, _[157], x, !1), d.fullscreensupport && ha(ea, d.browser.events.fullscreenchange, h), q.htmltarget.removeChild(v), q.htmltarget = null, q.viewerlayer = null, q.controllayer = null, q.panolayer = null, q.pluginlayer = null, f = v = C = z = u = q.hotspotlayer = null
                    } catch (a) {}
                };
                var wa = null
            })();
            var ab = {};
            (function() {
                function a(a) {
                    var c = a.pointerType;
                    if (4 != c && _[19] != c) {
                        a = a.changedTouches ? a.changedTouches : [a];
                        var c = a.length,
                            b, d, k;
                        for (b = 0; b < c; b++)
                            if (d = a[b], k = d.pointerId ? d.pointerId : d.identifier, void 0 !== k) {
                                d = T(d);
                                d = {
                                    id: k,
                                    lx: d.x / da,
                                    ly: d.y / da
                                };
                                var e, f;
                                f = Ia.length;
                                for (e = 0; e < f; e++)
                                    if (Ia[e].id == k) {
                                        Ia[e] = d;
                                        return
                                    } Ia.push(d)
                            }
                    }
                }
    
                function b(a) {
                    var c = a.pointerType;
                    if (4 != c && _[19] != c) {
                        a = a.changedTouches ? a.changedTouches : [a];
                        var c = a.length,
                            b, d;
                        for (b = 0; b < c; b++)
                            if (d = a[b], d = d.pointerId ? d.pointerId : d.identifier, void 0 !== d) {
                                var k, e;
                                e = Ia.length;
                                for (k = 0; k < e; k++)
                                    if (Ia[k].id == d) {
                                        Ia.splice(k, 1);
                                        break
                                    }
                            }
                    }
                }
    
                function w() {
                    var a = G(ga.usercontrol);
                    return (_[19] == a || "all" == a) && !V.isblocked()
                }
    
                function g(a) {
                    return a && (a = a.pointerType, 4 == a || _[19] == a) ? !0 : !1
                }
    
                function e(a, c, b, d) {
                    for (var k = cb; 0 < jb.length && !(b - jb[0].t <= va) && !(1 >= k - jb[0].f);) jb.shift();
                    k = jb.length - 1;
                    0 <= k && a == jb[k].x && c == jb[k].y ? jb[k].t = b : jb.push({
                        x: a,
                        y: c,
                        t: b,
                        f: d
                    })
                }
    
                function m(a, c, b, d, k) {
                    k && (b = .5 * (b - a), d = .5 * (d - c), c = .5 * Sa, k = .5 * Fa + r.r_yoff, a = c - b, b = c + b, c = k - d, d = k + d);
                    c = r.inverseProject(a, c);
                    k = r.inverseProject(b, d);
                    d = (Math.atan2(k.z, k.x) - Math.atan2(c.z, c.x)) / S;
                    c = -(Math.atan2(c.y, Math.sqrt(c.x * c.x + c.z * c.z)) - Math.atan2(k.y, Math.sqrt(k.x * k.x + k.z * k.z))) / S; - 180 > d ? d += 360 : 180 < d && (d -= 360);
                    if (b < a && 0 > d || b > a && 0 < d) d = -d;
                    return {
                        h: d,
                        v: c
                    }
                }
    
                function n(a, c, b, d) {
                    w() ? (a = m(a, c, b, d, ga.dragrelative), Sb = !1, ra = a.h, fa = a.v, F.vinvert && (ra *= -1), a = r.hlookat + ra, b = r.vlookat + fa, gb += ra, la += fa, c = r._limits, ga.bouncinglimits && c && (360 > c[0] && (a < c[1] ? (Pa = !0, a = .5 * gb + .5 * c[1]) : a > c[2] && (Pa = !0, a = .5 * gb + .5 * c[2])), b < c[4] ? (Pa = !0, b = -(la - c[4]), d = Math.min(b / 720, 1), d = -Math.min(b - 120 * d + 200 * d * d - 3E3 * d * d * d + 3E3 * d * d * d * d, 163), b = .5 * (c[4] + d) + .5 * c[4]) : b > c[5] && (Pa = !0, b = la - c[5], d = Math.min(b / 720, 1), d = Math.min(b - 120 * d + 200 * d * d - 3E3 * d * d * d + 3E3 * d * d * d * d, 163), b = .5 * (c[5] + d) + .5 * c[5])), r.hlookat = a, r.vlookat = b, Va.updateview(), r.haschanged = !0) : fa = ra = 0
                }
    
                function h(a) {
                    (ea.hidden || ea.webkitHidden || ea.mozHidden || ea.msHidden) && x(a)
                }
    
                function x(a) {
                    a ? (_[32] == a.type ? W.controllayer.contains(a.target) && a.preventDefault() : z(), _[50] == a.type && !1 === a.persisted && (Qd = !0), F.down && H(a)) : z();
                    for (var c in sa) 1 == sa[c] && (p.keycode = c, ua(_[156]), sa[c] = !1);
                    p.keycode = 0;
                    K()
                }
    
                function K() {
                    p.hlookat_moveforce = p.vlookat_moveforce = p.fov_moveforce = 0;
                    ec = pa = Sb = !1;
                    $a = Ea = Eb = Aa = ra = fa = xa = Ka = ob = Ca = 0
                }
    
                function D(a) {
                    var c = 0;
                    if (1 != ga.disablewheel && (na(a), Xa(_[306]), w())) {
                        a.wheelDelta ? c = a.wheelDelta / -120 : a.detail && (c = a.detail, 0 == d.mac && (c /= 3));
                        var b = c * ga.mousefovchange;
                        ga.zoomtocursor ? (Ba = !0, v(a), kb = F.x, La = F.y, 0 < b && 0 == ga.zoomoutcursor && (Ba = !1)) : Ba = !1;
                        ec = !0;
                        Ja = 0;
                        $a += .001 * b;
                        p.wheeldelta_raw = -c;
                        p.wheeldelta = 3 * -c;
                        A(_[72])
                    }
                }
    
                function B(a) {
                    var c = W.viewerlayer;
                    ea.activeElement == c != 0 && U.activekrpanowindow == c.id && (Xa(_[85]), c = a.keyCode, 0 == (a.altKey || a.ctrlKey || a.shiftKey || a.metaKey || 32 > c || 111 < c && 124 > c) && na(a), p.keycode = c, V.checkInterrupt(), 0 != V.isblocked() || !0 === sa[c] && !ga.keydownrepeat || (sa[c] = !0, ua(_[478])), W.handleKeydown(c), t(c, 1), 27 == c && (z(), W.fullscreen && (W.fsbkup || d.opera) && W.setFullscreen(!1)))
                }
    
                function q(a) {
                    var c = W.viewerlayer;
                    ea.activeElement == c != 0 && U.activekrpanowindow == c.id && (Xa("keyup"), a = a.keyCode, p.keycode = a, 1 == sa[a] && (sa[a] = !1, ua(_[156])), t(a, 0))
                }
    
                function t(a, c) {
                    if (0 == c || !V.isblocked()) {
                        var b = G(ga.usercontrol);
                        if ("all" == b || "keyb" == b) a = "," + a + ",", 0 <= ("," + ga.keycodesin + ",").indexOf(a) ? p.fov_moveforce = -c : 0 <= ("," + ga.keycodesout + ",").indexOf(a) ? p.fov_moveforce = +c : 0 <= ("," + ga.keycodesleft + ",").indexOf(a) ? p.hlookat_moveforce = -c : 0 <= ("," + ga.keycodesright + ",").indexOf(a) ? p.hlookat_moveforce = +c : 0 <= ("," + ga.keycodesup + ",").indexOf(a) ? p.vlookat_moveforce = ga.keybinvert ? +c : -c : 0 <= ("," + ga.keycodesdown + ",").indexOf(a) && (p.vlookat_moveforce = ga.keybinvert ? -c : +c)
                    }
                }
    
                function v(a) {
                    a = T(a);
                    F.x = a.x / da;
                    F.y = a.y / da;
                    F.moved = !0
                }
    
                function f(a) {
                    var c, b, k = a.changedTouches ? a.changedTouches : [a];
                    b = k.length;
                    var e = G(a.type),
                        f = 0 <= e.indexOf("start") || 0 <= e.indexOf("down"); - 99 != nc && f && (Lc = !0);
                    for (c = 0; c < b; c++) {
                        var e = k[c],
                            h = e.pointerId ? e.pointerId : e.identifier; - 99 == nc && f && (nc = h);
                        if (nc == h) {
                            b = T(e);
                            F.x = b.x / da;
                            F.y = b.y / da;
                            F.moved = !0;
                            0 == (Ua & 16) && (0 == d.realDesktop || 10 <= d.ieversion && !g(a)) && F.x > bb / da - 22 && F.y > Xb / da - 32 && a.type == Q.touchstart && (M = e.pageY, ca(O, Q.touchend, u, !0));
                            break
                        }
                    }
                }
    
                function u(a) {
                    a = a.changedTouches ? a.changedTouches : [a];
                    ha(O, Q.touchend, u, !0); - 120 > a[0].pageY - M && W.showlog(!0)
                }
    
                function z() {
                    if (Qa) {
                        try {
                            O.removeChild(Qa), O.removeChild(Oa)
                        } catch (a) {}
                        Oa = Qa = null
                    }
                }
    
                function C(a) {
                    if (Qa) z();
                    else {
                        na(a);
                        a.stopPropagation();
                        var c = T(a.changedTouches ? a.changedTouches[0] : a);
                        F.downx = F.x = c.x / da;
                        F.downy = F.y = c.y / da;
                        Qa = Ef(c.x, c.y, z, 0 <= G(a.type).indexOf("touch"));
                        null != Qa && (Oa = Ha(), a = Oa.style, a.position = _[0], d.androidstock || (a.zIndex = 99999999998, a[fb] = _[29]), a.width = "100%", a.height = "100%", O.appendChild(Oa), O.appendChild(Qa))
                    }
                }
    
                function y(a, b) {
                    var k = a.timeStamp;
                    500 < k && 500 > k - Rb ? Rb = 0 : (W.focus(1), na(a), (k = 0 == (a.button | 0)) && z(), V.checkInterrupt(), !V.isblocked() && k && (1 != b ? (ca(U, _[9], l, !0), ca(U, _[2], c, !0), d.topAccess && ca(top, _[2], H, !0)) : ca(d.topAccess ? top : U, Q.touchend, ba, !0), k = T(a), Db = k.x, Yb = k.y, wb = a.timeStamp, gb = r.hlookat, la = r.vlookat, lb = 0, F.down = !0, F.up = !1, F.moved = !1, F.downx = F.x = k.x / da, F.downy = F.y = k.y / da, 1 == A(_[46]) ? (ha(U, _[9], l, !0), F.down = !1) : setTimeout(E, 100)))
                }
    
                function A(a) {
                    var c = _[38] == a,
                        b = !1;
                    if (_[46] == a || _[35] == a || c || _[72] == a) b = Za.hittesthotspots(a);
                    0 == b && (c ? (ua(_[35]), ua(_[38]), nb()) : ua(a));
                    return b
                }
    
                function l(a) {
                    na(a);
                    var b = T(a);
                    F.x = b.x / da;
                    F.y = b.y / da;
                    F.moved = !0;
                    if (_[17] == G(ga.mousetype)) {
                        pa = !0;
                        var d = m(Db, Yb, b.x, b.y, ga.movetorelative).h;
                        F.vinvert && (d *= -1);
                        lb += d
                    } else n(Db, Yb, b.x, b.y);
                    Db = b.x;
                    Yb = b.y;
                    wb = a.timeStamp;
                    e(Db, Yb, wb, cb);
                    (0 === a.buttons || void 0 === a.buttons && 0 === a.which) && c(a, !0)
                }
    
                function c(a, b) {
                    0 == F.downLayer && Xa(_[353]);
                    na(a);
                    ha(U, _[9], l, !0);
                    ha(U, _[2], c, !0);
                    d.topAccess && ha(top, _[2], H, !0);
                    var k = T(a);
                    Db = k.x;
                    Yb = k.y;
                    wb = a.timeStamp;
                    e(Db, Yb, wb, cb);
                    if (ga.drag_oldmode) Sb = !0, 1 >= jb.length && (Sb = !1, fa = ra = 0);
                    else if (_[17] != G(ga.mousetype))
                        if (w() && 1 < jb.length && 0 == ja) {
                            var f = jb[0],
                                g = jb[jb.length - 1],
                                k = (g.t - f.t) * ga.draginertia;
                            0 < k && (f = m(f.x, f.y, g.x, g.y, ga.dragrelative), Sb = !0, ra = f.h / k, fa = f.v / k)
                        } else Sb = !1, fa = ra = 0;
                    F.down = !1;
                    F.dragging = !1;
                    E();
                    0 == F.up && (F.up = !0, k = _[35], !0 !== b && (0 == F.moved || 5 > Math.abs(F.x - F.downx) && 5 > Math.abs(F.y - F.downy)) && (k = _[38]), A(k))
                }
    
                function H(a) {
                    c(a, !0)
                }
    
                function E() {
                    je.update()
                }
    
                function J(a) {
                    1 == p.control.preventTouchEvents && na(a)
                }
    
                function oa(a) {
                    qa && (pb++, 2 == pb && (Ma = 1), ma.addPointer(a.pointerId), O.setPointerCapture ? O.setPointerCapture(a.pointerId) : O.msSetPointerCapture && O.msSetPointerCapture(a.pointerId))
                }
    
                function wa(a) {
                    pb--;
                    0 > pb && (pb = 0);
                    return 2 > pb && ta ? (P(a), !0) : !1
                }
    
                function ya(c) {
                    Rb = c.timeStamp;
                    va = d.ios ? 100 : 49 > me ? 200 : 100;
                    a(c);
                    if (qb) {
                        if (0 == p.control.preventTouchEvents) return;
                        if (g(c)) {
                            c.currentPoint && c.currentPoint.properties && 0 == c.currentPoint.properties.isLeftButtonPressed && (c.button = 0);
                            Rb = 0;
                            y(c, !0);
                            return
                        }
                        oa(c)
                    }
                    U.activekrpanowindow = W.viewerlayer.id;
                    Xa(_[275]);
                    0 == W.__scrollpage_yet && J(c);
                    z();
                    if (!(ta || 0 == bd && 1 < Ia.length || (V.checkInterrupt(), V.isblocked()))) {
                        var b = c.changedTouches ? c.changedTouches[0] : c,
                            k = T(b);
                        Bd = b.pointerId ? b.pointerId : b.identifier;
                        Db = k.x;
                        Yb = k.y;
                        wb = c.timeStamp;
                        jb = [];
                        gb = r.hlookat;
                        la = r.vlookat;
                        lb = 0;
                        F.down = !0;
                        F.dragging = !0;
                        F.up = !1;
                        F.moved = !1;
                        F.downx = F.x = k.x / da;
                        F.downy = F.y = k.y / da;
                        L = {
                            t: Rb
                        };
                        ja = 1 == A(_[46]) ? !0 : !1
                    }
                }
    
                function I(a) {
                    var c = a.pointerType;
                    if (4 != c && _[19] != c) {
                        var c = a.changedTouches ? a.changedTouches : [a],
                            b = c.length,
                            d, k, f;
                        for (d = 0; d < b; d++)
                            if (k = c[d], f = k.pointerId ? k.pointerId : k.identifier, void 0 !== f) {
                                var h, q;
                                q = Ia.length;
                                for (h = 0; h < q; h++)
                                    if (Ia[h].id == f) {
                                        k = T(k);
                                        f = k.y / da;
                                        h = Ia[h];
                                        h.lx = k.x / da;
                                        h.ly = f;
                                        break
                                    }
                            }
                    }
                    if (qb) {
                        if (g(a)) {
                            F.down && l(a);
                            return
                        }
                        if (1 < pb) return
                    }
                    if ((c = w()) && 0 == bd && 1 < Ia.length) {
                        var p;
                        q = k = Ia[0].lx;
                        p = f = Ia[0].ly;
                        h = Ia.length;
                        for (d = 1; d < h; d++) c = Ia[d].lx, b = Ia[d].ly, c < k && (k = c), c > q && (q = c), b < f && (f = b), b > p && (p = b);
                        c = q - k;
                        b = p - f;
                        c = Math.sqrt(c * c + b * b);
                        1 > c && (c = 1);
                        0 == Hc ? (Hc = !0, X = c, R(a)) : Y(a, c / X)
                    } else Xa(_[310]), 0 == W.__scrollpage_yet && J(a), ta || 0 == c || (c = a.changedTouches ? a.changedTouches[0] : a, Bd == (c.pointerId ? c.pointerId : c.identifier) && (c = T(c), 0 == ja && (_[17] == G(ga.touchtype) ? (pa = !0, b = m(Db, Yb, c.x, c.y, ga.movetorelative).h, -180 > b ? b = 360 + b : 180 < b && (b = -360 + b), lb += b) : n(Db, Yb, c.x, c.y)), Db = c.x, Yb = c.y, wb = a.timeStamp, e(Db, Yb, wb, cb), -99 == nc && (F.x = c.x / da, F.y = c.y / da), L && 16 < F.dd && (L = null), 0 == W.__scrollpage_yet && na(a)))
                }
    
                function ba(a) {
                    b(a);
                    nc = -99;
                    Lc = !1;
                    if (qb) {
                        ha(d.topAccess ? top : U, Q.touchend, ba, !0);
                        if (wa(a)) return;
                        if (g(a)) {
                            c(a);
                            return
                        }
                    }
                    Hc && (P(a), Hc = !1);
                    0 == W.__scrollpage_yet && J(a);
                    if (ta) Bd = -99;
                    else {
                        var k = a.changedTouches ? a.changedTouches[0] : a;
                        if (Bd == (k.pointerId ? k.pointerId : k.identifier)) {
                            Bd = -99;
                            k = T(k);
                            F.x = k.x / da;
                            F.y = k.y / da;
                            Db = k.x;
                            Yb = k.y;
                            wb = a.timeStamp;
                            e(Db, Yb, wb, cb);
                            if (_[17] != G(ga.touchtype))
                                if (w() && 1 < jb.length && 0 == ja) {
                                    var f = jb[0],
                                        h = jb[jb.length - 1],
                                        k = (h.t - f.t) * ga.draginertia;
                                    0 < k && (f = m(f.x, f.y, h.x, h.y, ga.dragrelative), Sb = !0, ra = f.h / k, fa = f.v / k)
                                } else Sb = !1, fa = ra = 0;
                            F.down = !1;
                            F.dragging = !1;
                            if (0 == F.up) {
                                F.up = !0;
                                L && 0 == ja && (k = 52800 / (Math.min(Math.max(ka.currentfps, 10), 60) + 35), 32 > F.dd && a.timeStamp - L.t > k && C(a));
                                a = _[35];
                                if (0 == F.moved || 5 > Math.abs(F.x - F.downx) && 5 > Math.abs(F.y - F.downy)) a = _[38];
                                A(a)
                            }
                            L = null;
                            ja = !1
                        }
                    }
                }
    
                function aa(a) {
                    b(a);
                    Hc = !1;
                    nc = Bd = -99;
                    ta = !1;
                    pb = 0;
                    ja = !1;
                    L = null
                }
    
                function R(a) {
                    0 == p.control.preventTouchEvents || qa && 2 > pb || (na(a), ta = !0, L = null, pe = r.fov, Bd = -99, F.down = !1, F.dragging = !1)
                }
    
                function Y(a, c) {
                    if (0 != p.control.preventTouchEvents) {
                        var b = void 0 !== c ? c : a.scale;
                        if (qa) {
                            if (2 > pb) return;
                            0 == ta && R(a);
                            b = Ma *= b
                        }
                        na(a);
                        Xa(_[278]);
                        if (w()) {
                            fa = ra = 0;
                            var d = 2 / S,
                                k = 1 / Math.tan(pe / d),
                                d = Math.atan(1 / (k * b)) * d,
                                k = d > r.fov ? -3 : 3;
                            p.wheeldelta = k;
                            p.wheeldelta_raw = k / 3;
                            p.wheeldelta_touchscale = b;
                            0 == ga.touchzoom && (d = r.fov);
                            ga.bouncinglimits && (d < r.fovmin ? (d = Z(d), b = Z(r.fovmin), $a = .5 * -(d - b), ec = !0, Ja = 1, d += $a, $a = 1E-9, d = N(d)) : d > r.fovmax && (d = Z(d), b = Z(r.fovmax), $a = .75 * -(d - b), ec = !0, Ja = 1, d += $a, $a = 1E-9, d = N(d)));
                            if (ga.zoomtocursor && (0 < k || 1 == ga.zoomoutcursor)) {
                                if (k = Ia.length, 0 < k) {
                                    Ba = !0;
                                    for (b = La = kb = 0; b < k; b++) {
                                        var e = Ia[b];
                                        kb += e.lx;
                                        La += e.ly
                                    }
                                    kb /= k;
                                    La /= k;
                                    r.updateView();
                                    k = r.screentosphere(kb, La);
                                    r.fov = d;
                                    r.updateView();
                                    b = r.screentosphere(kb, La);
                                    d = r.hlookat + (k.x - b.x);
                                    k = r.vlookat + (k.y - b.y);
                                    if (b = r._limits) 360 > b[0] && (d < b[1] ? d = b[1] : d > b[2] && (d = b[2])), k < b[4] ? k = b[4] : k > b[5] && (k = b[5]);
                                    r.hlookat = d;
                                    r.vlookat = k
                                }
                            } else r.fov = d, r.updateView();
                            A(_[72]);
                            r.haschanged = !0
                        }
                    }
                }
    
                function P(a) {
                    0 != p.control.preventTouchEvents && (ta && (ta = !1), Lc = !1, Ia = [], na(a))
                }
    
                function Z(a) {
                    return Ga * Math.log(1 / Math.tan(.5 * a * S))
                }
    
                function N(a) {
                    return 2 * Math.atan(1 / Math.exp(a / Ga)) / S
                }
                var k = ab;
                k.mouse = !1;
                k.touch = !1;
                var L = null,
                    T = null,
                    Q = null,
                    O = null,
                    sa = [],
                    ta = !1,
                    M = 0,
                    bd = !1,
                    Hc = !1,
                    X = 1,
                    pe = 90,
                    Bd = -99,
                    gb = 0,
                    la = 0,
                    Db = 0,
                    Yb = 0,
                    wb = 0,
                    jb = [],
                    nc = -99,
                    Lc = !1,
                    va = 100,
                    ja = !1,
                    Ia = [],
                    qb = !1,
                    qa = !1,
                    ma = null,
                    pb = 0,
                    Ma = 1,
                    Sb = !1,
                    ra = 0,
                    fa = 0,
                    pa = !1,
                    Eb = 0,
                    Aa = 0,
                    Ea = 0,
                    lb = 0,
                    ec = !1,
                    $a = 0,
                    Ja = 0,
                    Ba = !1,
                    kb = 0,
                    La = 0,
                    xa = 0,
                    Ka = 0,
                    Pa = !1,
                    ob = 0,
                    Ca = 0,
                    Qa = null,
                    Oa = null;
                k.registerControls = function(a) {
                    O = a;
                    Q = d.browser.events;
                    T = W.getMousePos;
                    d.ie && (qa = (qb = db.msPointerEnabled || db.pointerEnabled) && (1 < db.msMaxTouchPoints || 1 < db.maxTouchPoints));
                    bd = qa || 0 == d.simulator && d.ios || void 0 !== ea.documentElement.ongesturestart;
                    if (d.chrome || d.android) bd = !1;
                    a = !(0 == d.simulator && d.ios || d.android || 10 <= d.ieversion && d.touchdeviceNS);
                    var c = d.touchdeviceNS;
                    c && (d.mobile || d.tablet) && 0 == d.simulator && 0 == d.realDesktop && (a = !1);
                    k.mouse = a;
                    k.touch = c;
                    Q.mouse = a;
                    Q.touch = c;
                    ca(ea, _[85], B, !1);
                    ca(ea, "keyup", q, !1);
                    ca(d.topAccess ? top : U, _[32], x, !0);
                    ca(d.topAccess ? top : U, _[50], x, !0);
                    ca(ea, _[31], h);
                    ca(ea, _[102], h);
                    ca(ea, _[104], h);
                    ca(ea, _[107], h);
                    if (a || qb) ca(O, _[119], D, !1), ca(O, _[132], D, !1);
                    (a || qb) && ca(U, _[9], v, !0);
                    a && ca(O, _[8], y, !1);
                    (a && d.realDesktop || d.ie) && ca(O, _[32], C, !1);
                    c && (ca(O, Q.touchstart, f, !0), ca(O, Q.touchmove, f, !0), ca(O, Q.touchstart, ya, !1), ca(O, Q.touchmove, I, !0), ca(O, Q.touchend, ba, !0), ca(O, Q.touchcancel, aa, !0), bd && (ca(O, Q.gesturestart, R, !1), ca(O, Q.gesturechange, Y, !1), ca(O, Q.gestureend, P, !0), qa && (ca(O, _[117], P, !0), ma = new MSGesture, ma.target = O)))
                };
                k.domUpdate = function() {
                    if (ma) {
                        var a = O;
                        pb = 0;
                        k.unregister();
                        k.registerControls(a)
                    }
                };
                k.unregister = function() {
                    ma && (ma = ma.target = null);
                    ha(ea, _[85], B, !1);
                    ha(ea, "keyup", q, !1);
                    ha(d.topAccess ? top : U, _[32], x, !0);
                    ha(d.topAccess ? top : U, _[50], x, !0);
                    d.topAccess && ha(top, _[2], H, !0);
                    ha(ea, _[31], h);
                    ha(ea, _[102], h);
                    ha(ea, _[104], h);
                    ha(ea, _[107], h);
                    ha(U, _[9], v, !0);
                    ha(U, _[9], l, !0);
                    ha(U, _[2], c, !0);
                    ha(O, _[119], D, !1);
                    ha(O, _[132], D, !1);
                    ha(O, _[8], y, !1);
                    ha(O, _[32], C, !0);
                    ha(O, Q.touchstart, f, !0);
                    ha(O, Q.touchmove, f, !0);
                    ha(O, Q.touchstart, ya, !1);
                    ha(O, Q.touchmove, I, !0);
                    ha(O, Q.touchend, ba, !0);
                    ha(O, Q.touchcancel, aa, !0);
                    ha(O, Q.gesturestart, R, !1);
                    ha(O, Q.gesturechange, Y, !1);
                    ha(O, Q.gestureend, P, !0);
                    ha(O, _[117], P, !0);
                    T = Q = O = null
                };
                k.handleFrictions = function() {
                    var a, c = a = !1,
                        b = p.hlookat_moveforce,
                        d = p.vlookat_moveforce,
                        k = p.fov_moveforce;
                    if (0 != k) {
                        var e = ga.keybfovchange;
                        Ba = !1;
                        ec = !0;
                        Ja = 0;
                        $a += e * k * .001
                    }
                    if (0 != b || 0 != d || 0 != xa || 0 != Ka) {
                        var f = ga.keybfriction,
                            c = ga.keybspeed,
                            k = r.hlookat,
                            e = r.vlookat,
                            g = ga.keybaccelerate * Math.tan(Math.min(.5 * Number(r.fov), 45) * S);
                        xa += b * g;
                        b = Ka += d * g;
                        d = xa;
                        xa *= f;
                        Ka *= f;
                        f = Math.sqrt(b * b + d * d);
                        0 < f ? (b /= f, d /= f) : d = b = 0;
                        f > c && (f = c);
                        d *= f;
                        k = 180 >= (Math.floor(e) % 360 + 450) % 360 ? k + d : k - d;
                        e += b * f;
                        r.hlookat = k;
                        r.vlookat = e;
                        f < .05 * g && (Ka = xa = 0);
                        c = !0
                    }
                    a |= c;
                    if (Sb) b = Math.pow(ga.dragfriction, .92), ra *= b, fa *= b, b = Math.sqrt(fa * fa + ra * ra), d = Math.min(.04 * Ac / r.r_zoom, .5), 0 != b && (r.hlookat += ra, r.vlookat += fa), b < d && (Sb = !1, fa = ra = 0), a |= 1;
                    else if (pa) {
                        var b = F,
                            d = Ea,
                            c = Eb,
                            k = Aa,
                            f = .025 * ga.movetoaccelerate,
                            h = ga.movetospeed,
                            g = ga.movetofriction,
                            e = !1;
                        if (w()) {
                            if (b.down && (b.x != b.downx || b.y != b.downy)) {
                                var l = m(b.downx, b.downy, b.x, b.y, ga.movetorelative);
                                l.h = lb;
                                c = d * c - l.h * f;
                                k = d * k - l.v * f;
                                d = Math.sqrt(c * c + k * k);
                                0 < d && (c /= d, k /= d, d > h && (d = h))
                            }
                            f = r.hlookat;
                            h = r.vlookat;
                            h += d * k * ga.movetoyfriction;
                            r.hlookat = f + d * c;
                            r.vlookat = h;
                            d *= g;
                            g = Math.min(.04 * Ac / r.r_zoom, .5);
                            0 == b.down && d < g && (e = !0)
                        } else e = !0;
                        e && (pa = !1, lb = k = c = d = 0);
                        Ea = d;
                        Eb = c;
                        Aa = k;
                        a |= 1
                    }
                    if (ec) {
                        a: {
                            d = b = r.fov;c = $a;k = !1;
                            if (0 < Math.abs(c)) {
                                g = c;
                                f = ga.fovspeed;
                                k = r.fovmin;
                                e = r.fovmax;
                                c *= ga.fovfriction;
                                Math.abs(g) > f && (g = f * (g / Math.abs(g)));
                                b = Z(b);
                                b = N(b + g);
                                if (ga.bouncinglimits && 0 < Ja)
                                    if (0 == ta) g = Z(b), b < k ? (c = Z(k), c = .25 * -(g - c)) : b > e && (c = Z(e), c = .25 * -(g - c));
                                    else {
                                        b = void 0;
                                        break a
                                    }
                                else b < k && (b = k, c = 0), b > e && (b = e, c = 0);
                                r.fov = b;
                                $a = c;
                                k = !0;
                                Ba && (r.fov = d, r.updateView(), d = r.screentosphere(kb, La), r.fov = b, r.updateView(), b = r.screentosphere(kb, La), c = r.vlookat + (d.y - b.y), r.hlookat += d.x - b.x, r.vlookat = c)
                            }
                            1E-5 > Math.abs($a) && (Ja = $a = 0, ec = !1);b = k
                        }
                        a |= b
                    }
                    Pa && (b = !1, F.down ? b = !1 : (d = r.hlookat, c = r.vlookat, d += ob, c += Ca, r.hlookat = d, r.vlookat = c, b = !0, ob *= .95, Ca *= .95, k = r._limits, ga.bouncinglimits && k && (360 > k[0] && (d < k[1] ? ob = .15 * -(d - k[1]) : d > k[2] && (ob = .15 * -(d - k[2]))), c < k[4] ? Ca = .15 * -(c - k[4]) : c > k[5] && (Ca = .15 * -(c - k[5]))), d = .15 * Math.min(.04 * Ac / r.r_zoom, .5), Math.sqrt(ob * ob + Ca * Ca) < d && (ob = Ca = 0, Pa = !1)), a |= b);
                    return a
                };
                k.stopFrictions = function(a) {
                    0 == (0 | a) && (a = 3);
                    a & 1 && (Eb = ra = 0);
                    a & 2 && (Aa = fa = 0);
                    a & 4 && (K(), F.down = !1)
                };
                k.isMultiTouch = function() {
                    return ta || Hc || 1 < pb || Lc
                };
                k.isBouncing = function() {
                    return 0 < Ja || Pa
                };
                k.focusLoss = x;
                var nb = function() {
                    function a() {
                        try {
                            c = 0, F.clickx = b, F.clicky = d, ua(_[71], !0)
                        } catch (k) {}
                    }
                    var c = 0,
                        b = 0,
                        d = 0,
                        k = null;
                    return function() {
                        var e = F.x,
                            f = F.y;
                        c++;
                        if (2 == c) {
                            c = 0;
                            null != k && (clearTimeout(k), k = null);
                            var g = e - b,
                                h = f - d;
                            g * g + h * h <= (0 != Rb ? 100 : 1) ? (F.clickx = e, F.clicky = f, ua(_[348], !0)) : (F.clickx = b, F.clicky = d, ua(_[71], !0), F.clickx = e, F.clicky = f, ua(_[71], !0))
                        } else b = e, d = f, k = setTimeout(a, 300)
                    }
                }();
                k.trackTouch = function(c) {
                    if (0 == bd || qa) {
                        var d = c.type;
                        d == Q.touchstart ? qb ? oa(c) : a(c) : d == Q.touchend && (qb ? wa(c) : b(c))
                    }
                };
                var Ga = -.1
            })();
            var qa = null,
                M = null,
                oc = !1,
                Xd = !1,
                rb = 0,
                Zb = !1,
                fd = !1,
                Tb = -1,
                Va = {};
            (function() {
                function a(a, b) {
                    if (!0 !== b) r.haschanged = !0;
                    else {
                        var d = p.webVR;
                        d && d.enabled && d.updateview();
                        d = V.isBusy();
                        0 == d && ua(_[351]);
                        r.updateView();
                        qa && Za.renderpano(qa, 2);
                        M && Za.renderpano(M, 1);
                        A && (A = Za.rendersnapshot(A, M));
                        ie(!0);
                        0 == d && ua(_[346])
                    }
                }
    
                function b(a, b, d, f, g) {
                    u.count++;
                    u.id = u.count;
                    if (e()) {
                        p.xml.sceneNEW && (p.xml.scene = p.xml.sceneNEW, p.xml.sceneNEW = null);
                        "%3c" == a.slice(0, 3).toLowerCase() && (a = unescape(a));
                        V.haltActions();
                        p.xml.url = "";
                        p.xml.content = a;
                        p.loadxmlbasedir && (p.xml.url = p.loadxmlbasedir, p.loadxmlbasedir = null);
                        var h = (new DOMParser).parseFromString(a, _[36]);
                        (a = h.getElementsByTagName(_[20])[0]) ? (va(3, a.innerText), Ya(_[197])) : ja.resolvexmlincludes(h, function() {
                            h = ja.xmlDoc;
                            n(h, b, d, f, g)
                        })
                    }
                }
    
                function w(a, b) {
                    setTimeout(function() {
                        try {
                            a.removeChild(b)
                        } catch (d) {}
                    }, 20)
                }
    
                function g(a) {
                    var b = 0 != (z & 64) && 0 == (z & 256),
                        e;
                    !0 === a && (z = b = 0);
                    if (0 == (z & 4)) {
                        var f = Ca.getArray();
                        a = f.length;
                        for (e = 0; e < a; e++) {
                            var g = f[e];
                            !g || 0 != b && 0 != g.keep || (g.sprite && (g.visible = !1, g.parent = null, g.sprite.parentNode && g.sprite.parentNode.removeChild(g.sprite)), g.destroy(), Ca.removeItem(e), e--, a--)
                        }
                    }
                    if (0 == (z & 128))
                        for (f = Bb.getArray(), a = f.length, e = 0; e < a; e++)
                            if ((g = f[e]) && (0 == b || 0 == g.keep)) {
                                if (g.sprite) {
                                    g.visible = !1;
                                    g.parent = null;
                                    try {
                                        W.hotspotlayer.removeChild(g.sprite)
                                    } catch (h) {}
                                }
                                var l = g._poly;
                                l && (l.kobject = null, 8.4 == d.iosversion ? w(W.svglayer, l) : W.svglayer.removeChild(l), g._poly = null);
                                g.destroy();
                                Bb.removeItem(e);
                                e--;
                                a--
                            } b = Yc.getArray();
                    a = b.length;
                    for (e = 0; e < a; e++)(f = b[e]) && 0 == la(f.keep) && (Yc.removeItem(e), e--, a--)
                }
    
                function e() {
                    return 1 < u.count && u.removeid != u.id && (u.removeid = u.id, ua(_[352], !0), u.removeid != u.id) ? !1 : !0
                }
    
                function m(a) {
                    var b, d, e = "";
                    a = tc(a);
                    b = a.lastIndexOf("/");
                    d = a.lastIndexOf("\\");
                    d > b && (b = d);
                    0 <= b && (e = a.slice(0, b + 1));
                    return e
                }
    
                function n(a, b, e, l, m) {
                    C = !1;
                    z = M ? 64 : 0;
                    e && (e = G(e), 0 <= e.indexOf(_[399]) && (z |= 4), 0 <= e.indexOf(_[354]) && (z |= 128), 0 <= e.indexOf(_[486]) && (z |= 16), 0 <= e.indexOf(_[526]) && (z |= 32), 0 <= e.indexOf("merge") && (z |= 16448), 0 <= e.indexOf(_[418]) && (z |= 256), 0 <= e.indexOf(_[524]) && (z |= 4), 0 <= e.indexOf(_[530]) && (z |= 36), 0 <= e.indexOf(_[451]) && (C = !0, z |= 65536), 0 <= e.indexOf(_[377]) && X(_[125], 0), 0 <= e.indexOf(_[416]) && (z |= 1056));
                    0 == (z & 1024) && (Mb.currentmovingspeed = 0);
                    0 == C && (rb = 0, l && (l = G(l), e = l.indexOf(_[606]), 0 <= e && (rb = parseFloat(l.slice(e + 6)), isNaN(rb) || 0 > rb)) && (rb = 2), M && (e = 0 != (z & 1024), d.webgl ? (e && (qa || A) && (qa && (A = Za.snapshot(A, qa)), e = !1), qa && (qa.destroy(), qa = null), 0 == e ? (M.stop(), A = Za.snapshot(A, M), M.destroy(), M = null) : (M.suspended = !0, qa = M, M = null, Za.renderpano(qa, 2)), Za.setblendmode(l), Tb = -1, Zb = !1) : (0 == Zb ? (qa && (qa.destroy(), qa = null), qa = M, 0 == e ? qa.stop() : qa.suspended = !0, M = null) : (l = (Pa() - Tb) / 1E3 / rb, l = t(l), .5 < l ? M && (M.destroy(), M = null) : (qa && (qa.destroy(), qa = null), qa = M, 0 == e ? qa.stop() : qa.suspended = !0, M = null), Zb = !1), qa && qa.stopped && Za.renderpano(qa, 2))), z & 32 && (f[0] = r.hlookat, f[1] = r.vlookat, f[2] = r.camroll, f[3] = r.fov, f[4] = r.fovtype, f[5] = r.fovmin, f[6] = r.fovmax, f[7] = r.maxpixelzoom, f[8] = r.fisheye, f[9] = r.fisheyefovlink, f[10] = r.stereographic, f[12] = r.pannini, f[13] = r.architectural, f[14] = r.architecturalonlymiddle), 0 == (z & 16384) && r.defaults(), r.limitview = "auto", r.hlookatmin = Number.NaN, r.hlookatmax = Number.NaN, r.vlookatmin = Number.NaN, r.vlookatmax = Number.NaN, p.preview && delete p.preview, p.image && delete p.image, p.onstart = null, K = p.image = {}, K.type = null, K.multires = !1, K.multiresthreshold = .025, K.cubelabels = "l|f|r|b|u|d", K.stereo = !1, K.stereoformat = "TB", K.stereolabels = "1|2", K.tiled = !1, K.tilesize = 0, K.tiledimagewidth = 0, K.tiledimageheight = 0, K.baseindex = 1, K.level = new Vb, K.hfov = 0, K.vfov = 0, K.voffset = 0, K.hres = 0, K.vres = 0, K.viewoffset = 0, K.haschanged = !1, Oa(K, "frame", 1), K.frames = 1);
                    g();
                    if (a && a.documentElement && _[20] == a.documentElement.nodeName) Ya(a.baseURI + _[30]);
                    else {
                        ja.parsexml(a.childNodes, null, z);
                        if (null != p._loadpanoscene_name) {
                            var n = N(_[93] + p._loadpanoscene_name + "]");
                            n && (l = _[142] + n.content + _[138], p.xml.url = "", p.xml.scene = p._loadpanoscene_name, p.xml.content = l, p.onstart = null, l = (new DOMParser).parseFromString(l, _[36]), ja.resolvexmlincludes(l, function() {
                                (a = ja.xmlDoc) && a.documentElement && _[20] == a.documentElement.nodeName ? Ya(a.baseURI + _[30]) : (ja.parsexml(a.childNodes, null, z), m = n.onstart)
                            }));
                            p._loadpanoscene_name = null
                        }
                        p.xmlversion = p.version;
                        p.version = p.buildversion;
                        y = m;
                        ce(b);
                        h()
                    }
                }
    
                function h() {
                    var a, b, d = p.plugin.getArray(),
                        e;
                    b = d.length;
                    for (a = 0; a < b; a++) {
                        var g = d[a];
                        if (g && g.layer && g.layer.isArray) {
                            var h = g.layer.getArray();
                            e = h.length;
                            for (b = 0; b < e; b++) {
                                var l = h[b];
                                l && (Ca.createItem(l.name, l), l.parent = g.name, l.keep = g.keep)
                            }
                            g.plugin = null;
                            g.layer = null;
                            a--;
                            b = d.length
                        }
                    }
                    if (0 != x(!0)) {
                        if (0 == C) {
                            z & 32 && (r.hlookat = f[0], r.vlookat = f[1], r.camroll = f[2], r.fov = f[3], r.fovtype = f[4], r.fovmin = f[5], r.fovmax = f[6], r.maxpixelzoom = f[7], r.fisheye = f[8], r.fisheyefovlink = f[9], r.stereographic = f[10], r.pannini = f[12], r.architectural = f[13], r.architecturalonlymiddle = f[14]);
                            Va.updateview();
                            qa && qa.removemainpano();
                            for (a = 0; 4100 > a; a++);
                            void 0 !== ka.hardwarelimit && (Kc = parseFloat(ka.hardwarelimit), isNaN(Kc) && (Kc = 0));
                            void 0 !== ka.usedesktopimages && (Fe = la(ka.usedesktopimages));
                            oc = !0;
                            cd.progress = 0;
                            M = Za.createPano(K);
                            M.addToLayer(W.panolayer);
                            0 < rb ? (fd = !0, M.setblend(0), vc = 0) : (fd = !1, M.setblend(1), vc = 1)
                        }
                        V.resumeActions();
                        V.actions_autorun(_[537], !0);
                        a = p.onstart;
                        y && (a = y, y = null);
                        d = u.id;
                        V.callaction(a, null, !0);
                        if (d == u.id && (V.actions_autorun(_[538], !1), ua(_[342]), p.xml && p.xml.scene && ua(_[415]), d == u.id)) {
                            0 == C && D();
                            a = Bb.getArray();
                            d = a.length;
                            for (g = 0; g < d; g++)(b = a[g]) && 0 == b._ready && (b.create(), b.sprite && W.hotspotlayer.appendChild(b.sprite));
                            x();
                            0 < Xb && ua(_[84]);
                            Va.updateview();
                            V.processactions()
                        }
                    }
                }
    
                function x(a) {
                    var b = Ca.getArray(),
                        d = b.length,
                        e, f = !0;
                    for (e = 0; e < d; e++) {
                        var g = b[e];
                        if (g) {
                            var l = !1;
                            1 == a ? 1 == g.preload && _[22] != g.type && 0 == g.loaded && (g.onloaded = h, g.altonloaded = null, l = !0, f = !1) : (1 == g.preload && (g.preload = !1, g.onloaded = null), l = !0);
                            l && 0 == g._ready && (g.create(), g.sprite && null == g._parent && W.pluginlayer.appendChild(g.sprite))
                        }
                    }
                    return f
                }
    
                function S() {
                    ua(_[258])
                }
    
                function D() {
                    var c = d.desktop || Fe,
                        b = !1,
                        e = K.type,
                        f = parseFloat(K.hfov),
                        g = parseFloat(K.vfov),
                        h = parseFloat(K.voffset);
                    isNaN(f) && (f = 0);
                    isNaN(g) && (g = 0);
                    isNaN(h) && (h = 0);
                    var l = !!(K.multires && K.level && 0 < K.level.count),
                        m = !!K.mobile,
                        n = !!K.tablet;
                    c || 0 != l || !m && !n || (e = "cube", b = !0);
                    if (null == e)
                        if (K.left || K.cube) e = "cube";
                        else if (K.cubestrip) e = _[48];
                    else if (K.sphere) e = _[40];
                    else if (K.cylinder) e = _[25];
                    else if (K.flat) e = "flat";
                    else if (K.fisheye) e = _[87];
                    else {
                        if (m || n) e = "cube", b = !0
                    } else e = G(e);
                    var c = _[40] == e || _[25] == e || _[87] == e,
                        p = 0 < f && 1 >= f && 45 >= g && c || "flat" == e,
                        r = "cube" == e || _[48] == e || null == e && 0 == c && 0 == p,
                        u = !1,
                        t = null;
                    if (r) f = 360, g = 180;
                    else if (c || p)
                        if (t = ma.parsePath(N(_[590] + e + ".url"))) {
                            var x = 0;
                            0 <= (x = G(t).indexOf(_[551])) && (c = u = !0, l = p = !1, d.panovideosupport && (t = t.slice(x + 7)))
                        } K.type = e;
                    K.hfov = f;
                    K.vfov = g;
                    K.voffset = h;
                    h = ("" + K.cubelabels).split("|");
                    6 == h.length && (M.cubelabels = h);
                    M.stereo = d.webgl ? K.stereo : !1;
                    M.stereoformat = "sbs" == G(K.stereoformat) ? 0 : 1;
                    h = ("" + K.stereolabels).split("|");
                    2 == h.length && (M.stereolabels = h);
                    var w = G(N(_[361]));
                    if (h = N(_[378])) {
                        h = ma.parsePath(h);
                        if (_[48] == w || "null" == w && r) {
                            x = N(_[246]);
                            if (null != x) {
                                var x = G(x),
                                    k = [0, 1, 2, 3, 4, 5];
                                k[x.indexOf("l")] = 0;
                                k[x.indexOf("f")] = 1;
                                k[x.indexOf("r")] = 2;
                                k[x.indexOf("b")] = 3;
                                k[x.indexOf("u")] = 4;
                                k[x.indexOf("d")] = 5;
                                x = k
                            }
                            M.addCubestripPreview(h, x)
                        } else if ("flat" == w || ("null" == w || _[40] == w || _[25] == w) && p) M.addFlatLevel(h, f, g, 0, 0, 0, K.baseindex, !0);
                        else if (_[40] == w || _[25] == w || "null" == w && c) x = [Number(K.hfov), Number(K.vfov), Number(K.voffset)], k = K[e], M.addRoundPano(w, h, x, null, k, !0);
                        a(!1, !0)
                    } else if (0 == w.indexOf("grid")) {
                        if (h = Wb(w, null, !1))
                            if (h = h[0], "grid" == h.cmd) {
                                var L = h.args,
                                    h = void 0 == L[1] ? 64 : parseInt(L[1]),
                                    x = void 0 == L[2] ? 64 : parseInt(L[2]),
                                    k = void 0 == L[3] ? 512 : parseInt(L[3]),
                                    w = void 0 == L[4] ? 6710886 : parseInt(L[4]),
                                    T = void 0 == L[5] ? 2236962 : parseInt(L[5]),
                                    L = void 0 == L[6] ? void 0 == L[4] ? 16777215 : w : parseInt(L[6]),
                                    w = pa(w),
                                    T = pa(T),
                                    L = pa(L);
                                M.addGridPreview(k, h, x, T, w, L);
                                a(!1, !0);
                                S()
                            }
                    } else S();
                    h = !1;
                    x = d.androidstock && !d.webgl;
                    if (p || r) {
                        if (b || r && x) n ? h = q(_[362]) : m && (h = q(_[357]));
                        if (0 == h)
                            if ("cube" == e) {
                                if (l)
                                    if (m = K.level.getArray(), b = m.length, m.sort(function(a, c) {
                                            return +parseInt(a.tiledimagewidth, 10) - parseInt(c.tiledimagewidth, 10)
                                        }), 0 == d.multiressupport || x) {
                                        g = d.iphone && d.retina || d.tablet || d.android ? 1100 : d.iphone ? 512 : 2560;
                                        0 < Kc && (g = Kc + 256);
                                        for (l = b - 1; 0 <= l && !(f = m[l].tiledimagewidth, f <= g); l--);
                                        0 <= l && (h = q(_[74] + l + "]", !0))
                                    } else
                                        for (m.sort(function(a, c) {
                                                return +parseInt(a.tiledimagewidth, 10) - parseInt(c.tiledimagewidth, 10)
                                            }), l = 0; l < b; l++)
                                            if (m = _[74] + l + "]", n = N(m), g = B(m)) m = n.tilesize ? n.tilesize : K.tilesize, f = parseInt(n.tiledimagewidth, 10), 0 < m && 0 < f && (M.addCubeLevel(g, f, m, K.baseindex), h = !0);
                                0 == h && (h = q(_[99]))
                            } else if (_[48] == e && K.cubestrip) M.addCubestripPano(ma.parsePath("" + K.cubestrip.url)), h = !0;
                        else if ((_[40] == e || _[25] == e) && 1 >= f && 45 >= g || "flat" == e) {
                            if (d.multiressupport && l)
                                for (m = K.level.getArray(), b = m.length, m.sort(function(a, c) {
                                        return +parseInt(a.tiledimagewidth, 10) - parseInt(c.tiledimagewidth, 10)
                                    }), l = 0; l < b; l++)
                                    if (m = _[74] + l + "]", n = N(m), c = N(m + "." + e + ".url"), c = ma.parsePath(c)) m = n.tilesize ? n.tilesize : K.tilesize, p = parseInt(n.tiledimagewidth, 10), n = parseInt(n.tiledimageheight, 10), 0 < m && 0 < p && 0 < n && (M.addFlatLevel(c, f, g, p, n, m, K.baseindex, !1), h = !0);
                            0 == h && (b = K[e]) && b.url && (M.addFlatLevel(ma.parsePath("" + b.url), f, g, 0, 0, 0, K.baseindex, !1), h = !0)
                        }
                    } else c && 0 == l && d.webgl && t && ((x = [Number(K.hfov), Number(K.vfov), Number(K.voffset)], k = K[e], u) ? d.panovideosupport && (f = Ca.getItem(t)) && (f.renderToBitmap = !0, f.visible = !1, M.addRoundPano(e, null, x, f, k), h = !0) : (M.addRoundPano(e, t, x, null, k), h = !0));
                    h && (oc = Xd = !0);
                    M.finalize();
                    0 == h && null != e && (va(2, _[206]), ua(_[118]));
                    a(!1, !0)
                }
    
                function B(a) {
                    var b = _[192].split(" "),
                        d = Array(6),
                        e, f;
                    if (e = N(a + "." + b[6] + ".url")) {
                        if (e = ma.parsePath(e))
                            for (f = 0; 6 > f; f++) d[f] = e.split("%s").join(M.cubelabels[f])
                    } else
                        for (f = 0; 6 > f; f++)
                            if (e = ma.parsePath(N(a + "." + b[f] + ".url"))) d[f] = e;
                            else return null;
                    return d
                }
    
                function q(a, b) {
                    var d = B(a);
                    if (!d) return !1;
                    if (b) {
                        var e = N(a),
                            f = e.tilesize ? e.tilesize : K.tilesize,
                            e = parseInt(e.tiledimagewidth, 10);
                        M.addCubeLevel(d, e, f, K.baseindex)
                    } else M.addCubeLevel(d, 0, 0, 1);
                    return !0
                }
    
                function t(a) {
                    1 < a && (a = 1);
                    0 == d.webgl && (a *= a * a);
                    a = 1 - a;
                    0 > a && (a = 0);
                    return a
                }
                var v = Va;
                v.loadpano = function(a, d, f, g, h) {
                    u.count++;
                    u.id = u.count;
                    if (e())
                        if (0 > G(f).indexOf(_[410]) && X(_[125], 0), "null" == G(a) && (a = null), p.xml.content = null, p.xml.scene = null, a) {
                            V.haltActions();
                            null == ma.firstxmlpath ? ma.firstxmlpath = m(a) : a = ma.parsePath(a, !0);
                            ma.currentxmlpath = m(a);
                            p.xml.url = a;
                            var l = u.id;
                            ma.loadxml(a, function(b, e) {
                                if (l == u.id) {
                                    if (b && b.childNodes) {
                                        var m = b.childNodes,
                                            q = m.length;
                                        0 == q ? b = null : 2 == q && m[1] && _[20] == m[1].nodeName && (b = null)
                                    }
                                    b ? (b = ja.resolvexmlencryption(b, a), null != b && ja.resolvexmlincludes(b, function() {
                                        b = ja.xmlDoc;
                                        n(b, d, f, g, h)
                                    })) : 200 == e ? Ya(a + _[30]) : Ya(a + _[203])
                                }
                            })
                        } else p.xml.url = "", b(_[253], d, f, g, h)
                };
                v.loadxml = b;
                v.loadxmldoc = n;
                v.updateview = a;
                v.updateplugins = function(a) {
                    var b = Ca.getArray(),
                        d = b.length,
                        e;
                    Pa();
                    var f = 0,
                        g = 0;
                    for (e = 0; e < d; e++) {
                        var h = b[e];
                        h && h._ready && (0 != h.haschanged_flags && (h.processUpdates(), f++), (a || h.poschanged) && h.loaded && (h.updatepos(_[469]), g++))
                    }
                };
                v.idlecheck = function() {
                    var a = Pa();
                    F.moved && (F.down || F.downLayer) && Xa((F.downLayer ? _[66] : "pano") + _[204]);
                    (a - Wc) / 1E3 > p.idletime && l != Wc && (l = Wc, ua(_[577]));
                    return Mb.checkIdletime(a, Wc)
                };
                v.previewdone = S;
                v.havepanosize = function(a) {
                    M && M.id == a.id && (K.hfov = a.hfov, K.vfov = a.vfov, K.hres = a.hres, K.vres = a.vres, ua(_[470]), r.haschanged = !0)
                };
                v.removeelements = g;
                v.isLoading = function() {
                    return oc
                };
                v.isBlending = function() {
                    return fd || Zb
                };
                var f = [],
                    u = {
                        count: 0,
                        id: 0
                    },
                    z = 0,
                    C = !1,
                    y = null,
                    A = null,
                    l = 0;
                v.checkHovering = function() {
                    if (1 != (cb & 1) && !V.isblocked()) {
                        var a = [Ca.getArray(), Bb.getArray()],
                            b, d, e, f, g;
                        for (g = 0; 2 > g; g++)
                            for (b = a[g], e = b.length, f = 0; f < e; f++)(d = b[f]) && d.DATA.visible && d.hovering && d.onhover && V.callaction(d.onhover, d)
                    }
                };
                v.handleloading = function() {
                    var a = !1;
                    0 == Zb && (qa && (a |= qa.doloading()), M && (a |= M.doloading()));
                    oc = M && M.isloading();
                    var b = Za.handleloading();
                    Xd && 1 != oc && (Xd = !1, ua(_[118]));
                    b & 1 && (oc = !0);
                    b & 2 && (a = !0);
                    if (M && (qa || A))
                        if (0 == Zb) M.previewcheck() && (Zb = !0, Tb = -1);
                        else {
                            a = 0;
                            0 <= rb && (-1 == Tb ? Tb = Pa() : (a = (Pa() - Tb) / 1E3, a = 0 < rb ? a / rb : 1), a = t(a), fd = !0, 0 < rb && M.setblend(1 - a), vc = 1 - a);
                            if (0 == a || 0 >= rb) rb = 0, vc = 1, qa && (qa.destroy(), qa = null), fd = Zb = !1;
                            a = !0
                        } return a
                };
                v.setLastPanoOffset = function(a) {
                    qa && qa.image && (qa.image.viewoffset += -a)
                }
            })();
            var Za = {};
            (function() {
                var a, b;
    
                function w(a) {
                    if (fa) {
                        var b = p.bgcolor;
                        fa.clearColor((b >> 16 & 255) / 255, (b >> 8 & 255) / 255, (b & 255) / 255, a)
                    }
                }
    
                function g(a) {
                    if (!1 === document.hidden && ra) {
                        var b = parseInt(ra.style.height);
                        0 < b && (ra.style.height = b + 1 + "px", setTimeout(function() {
                            ra && parseInt(ra.style.height) == b + 1 && (ra.style.height = b + "px")
                        }, 100))
                    }
                }
    
                function e() {
                    return "attribute vec3 vx;attribute vec2 tx;uniform float sh;uniform float ch;uniform mat4 mx;uniform mat4 ot;uniform mat3 tm;varying vec2 tt;void main(){vec3 vr=vec3(ot*vec4(vx,1));vec3 vs=1000.0*normalize(vr);vec2 c2=vec2(vr.x,vr.z);c2=c2/max(1.0,length(c2));vec3 vc=1000.0*vec3(c2.x,clamp(vr.y*inversesqrt(1.0+vr.x*vr.x+vr.z*vr.z),-30.0,+30.0),c2.y);vec3 vv=vr*(1.0-sh)+sh*(vs*(1.0-ch)+vc*ch);gl_Position=mx*vec4(vv,1.0);tt=(vec3(tx,1)*tm).xy;}"
                }
    
                function m(a, b) {
                    return "#ifdef GL_ES\n#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\n#endif\nuniform float aa;uniform sampler2D sm;varying vec2 tt;void main(){vec4 c=texture2D(sm,vec2(tt.s,tt.t)" + (a ? ",-1.0" : "") + ");" + (b ? _[196] : "") + "gl_FragColor=vec4(c.rgb,c.a*aa);}"
                }
    
                function n(a) {
                    var b = fa;
                    b && a && (b.deleteProgram(a.prg), b.deleteShader(a.vs), b.deleteShader(a.fs), a.prg = null, a.vs = null, a.fs = null)
                }
    
                function h(a, b, c, d) {
                    var k = fa;
                    null == a && (a = "attribute vec2 vx;varying vec2 tx;void main(){gl_Position=vec4(vx.x*2.0-1.0,-1.0+vx.y*2.0,0.0,1.0);tx=vx;}");
                    var e = null;
                    if (void 0 === Nb[a]) {
                        e = k.createShader(k.VERTEX_SHADER);
                        k.shaderSource(e, a);
                        k.compileShader(e);
                        if (!k.getShaderParameter(e, k.COMPILE_STATUS)) return va(0, _[122] + k.getShaderInfoLog(e)), null;
                        Nb[a] = e
                    } else e = Nb[a];
                    a = k.createShader(k.FRAGMENT_SHADER);
                    k.shaderSource(a, b);
                    k.compileShader(a);
                    if (!k.getShaderParameter(a, k.COMPILE_STATUS)) return va(0, _[122] + k.getShaderInfoLog(a)), null;
                    b = k.createProgram();
                    k.attachShader(b, e);
                    k.attachShader(b, a);
                    k.linkProgram(b);
                    if (!k.getProgramParameter(b, k.LINK_STATUS)) return null;
                    k.useProgram(b);
                    k.uniform1i(k.getUniformLocation(b, "sm"), 0);
                    var e = {
                            vs: e,
                            fs: a,
                            prg: b
                        },
                        f = c.split(","),
                        g;
                    a = f.length;
                    for (c = 0; c < a; c++)(g = f[c]) && k.enableVertexAttribArray(e[g] = k.getAttribLocation(b, g));
                    d = d.split(",");
                    a = d.length;
                    for (c = 0; c < a; c++)(f = d[c]) && (e[f] = k.getUniformLocation(b, f));
                    return e
                }
    
                function x(a, b) {
                    return h(null, a, "vx", b)
                }
    
                function ub() {
                    Bc = null
                }
    
                function D(a) {
                    a = a && a.prg ? a.prg : a;
                    var b = fa;
                    a ? a != Bc && (Ob = Bc, Bc = a, b.useProgram(Bc)) : Ob && (Bc = Ob, Ob = null, b.useProgram(Bc))
                }
    
                function B() {
                    var c = fa;
                    try {
                        var k = c.createBuffer();
                        c.bindBuffer(hb, k);
                        c.bufferData(hb, new Float32Array([0, 0, 0, 1, 1, 1, 1, 0]), hd);
                        var f = c.createBuffer();
                        c.bindBuffer($b, f);
                        c.bufferData($b, new Uint16Array([0, 1, 2, 0, 2, 3]), hd);
                        a = k;
                        b = f;
                        var g;
                        for (g = 0; 6 > g; g++) {
                            var c = _[179],
                                l = f = k = "";
                            0 == g ? f = _[187] : 1 == g ? (l = "cc", k = _[108], f = _[176]) : 2 == g ? (l = "cc", k = _[108], f = _[173]) : 3 == g ? (l = "ct,zf", k = _[195], f = _[171]) : 4 == g ? (l = "fp,bl", k = _[194], f = "float t=(tx.x*fp.x+tx.y*fp.y+fp.z)*(1.0-2.0*bl)+bl;gl_FragColor=vec4(texture2D(sm,tx).rgb,smoothstep(t-bl,t+bl,aa));") : 5 == g && (l = _[495], k = _[182], f = "float t=(1.0-sqrt(2.0)*sqrt((ap.x*(tx.x-0.5)*(tx.x-0.5)+ap.y*(tx.y-0.5)*(tx.y-0.5))/(0.5*(ap.x+ap.y))))*(1.0-2.0*bl)+bl;gl_FragColor=vec4(texture2D(sm,(tx-vec2(0.5,0.5))*mix(1.0,aa,zf)+vec2(0.5,0.5)).rgb,smoothstep(t-bl,t+bl,aa));");
                            c = _[211] + c + k + "void main(){" + f + "}";
                            La[g] = h(null, c, "vx", "aa," + l);
                            if (null == La[g]) return !1
                        }
                        var n = h(e(), m(!0, !1), _[98], _[68]);
                        null == n && d.ie && (n = h(e(), m(!1, !1), _[98], _[68]));
                        if (null == n) return !1;
                        Ga = n;
                        lb = h(e(), m(!1, !0), _[98], _[68]);
                        cb = n.vx;
                        db = n.tx;
                        vb = n.sh;
                        Cb = n.ch;
                        rb = n.aa;
                        Ab = n.mx;
                        yb = n.ot;
                        zb = n.tm
                    } catch (L) {
                        return !1
                    }
                    return !0
                }
    
                function q(a) {
                    if (a) {
                        var b = fa;
                        b.deleteBuffer(a.vx);
                        b.deleteBuffer(a.tx);
                        b.deleteBuffer(a.ix);
                        a.vx = null;
                        a.tx = null;
                        a.ix = null;
                        a.vxd = null;
                        a.txd = null;
                        a.ixd = null;
                        a.tcnt = 0
                    }
                }
    
                function t(a, b, c, d) {
                    this.tcnt = a;
                    this.vxd = b;
                    this.txd = c;
                    this.ixd = d;
                    this.ix = this.tx = this.vx = null
                }
    
                function v(a) {
                    var b = fa;
                    b.bindBuffer(hb, a.vx = b.createBuffer());
                    b.bufferData(hb, a.vxd, hd);
                    b.bindBuffer(hb, a.tx = b.createBuffer());
                    b.bufferData(hb, a.txd, hd);
                    b.bindBuffer($b, a.ix = b.createBuffer());
                    b.bufferData($b, a.ixd, hd)
                }
    
                function f(a, b) {
                    var c, d = 2 * (b + 1) * (b + 1);
                    c = 6 * b * b;
                    var k = new Float32Array(3 * (b + 1) * (b + 1)),
                        e = new Float32Array(d),
                        f = new Uint16Array(c),
                        g, h, l, m, n;
                    a *= 2;
                    for (h = c = d = 0; h <= b; h++)
                        for (g = 0; g <= b; g++) l = g / b, m = h / b, e[d] = l, e[d + 1] = m, d += 2, k[c] = a * (l - .5), k[c + 1] = a * (m - .5), k[c + 2] = 0, c += 3;
                    for (h = c = 0; h < b; h++)
                        for (g = 0; g < b; g++) d = g + h * (b + 1), l = d + 1, m = d + (b + 1), n = m + 1, f[c] = d, f[c + 1] = l, f[c + 2] = m, f[c + 3] = l, f[c + 4] = n, f[c + 5] = m, c += 6;
                    return new t(6 * b * b, k, e, f)
                }
    
                function u(a) {
                    var b = fa;
                    null == a && (a = {
                        have: !1,
                        fb: null,
                        tex: null,
                        w: 0,
                        h: 0,
                        alpha: 1,
                        havepano: -1,
                        drawcalls: 0
                    }, a.fb = b.createFramebuffer(), a.tex = b.createTexture(), b.bindTexture(ia, a.tex), b.texParameteri(ia, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE), b.texParameteri(ia, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE), b.texParameteri(ia, b.TEXTURE_MAG_FILTER, xb), b.texParameteri(ia, b.TEXTURE_MIN_FILTER, xb), b.bindFramebuffer(mb, null), Qa = !1);
                    var c = d.gl.width * $a + .5 | 0,
                        k = d.gl.height * $a + .5 | 0;
                    if (a.w != c || a.h != k) a.w = c, a.h = k, b.bindTexture(ia, a.tex), b.texImage2D(ia, 0, Rb, c, k, 0, Rb, id, null), b.bindFramebuffer(mb, a.fb), b.framebufferTexture2D(mb, b.COLOR_ATTACHMENT0, ia, a.tex, 0), b.bindTexture(ia, null), b.bindFramebuffer(mb, null), Qa = !1;
                    return a
                }
    
                function z(c, k, e) {
                    var f = fa;
                    if (0 >= c.drawcalls || null == k) return !1;
                    var g = d.gl.width * $a + .5 | 0,
                        h = d.gl.height * $a + .5 | 0;
                    if (0 < g && 0 < h) return D(k.prg), f.viewport(0, 0, g, h), k.aa && (Xa && (e = 1 - Xa(1 - e, 0, 1), 0 > e ? e = 0 : 1 < e && (e = 1)), f.uniform1f(k.aa, e)), k.sz && f.uniform2f(k.sz, g, h), f.bindBuffer(hb, a), f.vertexAttribPointer(k.vx, 2, pc, !1, 0, 0), f.bindBuffer($b, b), f.activeTexture(Mc), f.bindTexture(ia, c.tex), f.drawElements(Zb, 6, Pb, 0), ha++, !0
                }
    
                function C(a, b, c, d, k, e) {
                    var f = !1;
                    0 == d && (b = c = d = 1024, gb = f = !0);
                    this.type = 0;
                    this.stereo = e;
                    this.preview = !1;
                    this.needsize = f;
                    this.w = b;
                    this.h = c;
                    this.mp = b * c * a >> 20;
                    this.tilesize = d;
                    this.htiles = (b + d - 1) / d | 0;
                    this.vtiles = (c + d - 1) / d | 0;
                    this.loadedtiles = [0, 0];
                    this.addedtiles = [0, 0];
                    this.totaltiles = a * this.htiles * this.vtiles;
                    this.i = k;
                    this.planeurls = Array(a);
                    this.planemapping = 6 == a ? [0, 1, 2, 3, 4, 5] : [1];
                    this.invplanemapping = 6 == a ? [0, 1, 2, 3, 4, 5] : [0, 0, 0, 0, 0, 0];
                    this.completelyadded = this.complete = !1;
                    this.vfov = this.hfov = 90;
                    this.voffset = this.hoffset = 0;
                    this.vscale = 1
                }
    
                function y(a, b) {
                    return a.preview ? -1 : b.preview ? 1 : a.w - b.w
                }
    
                function A(a, b, c, d, k, e, f) {
                    e = 0 < e ? d * f / e : 1;
                    0 >= d && (d = 1);
                    0 >= k && (k = e);
                    var g = k / e;
                    b.hfov = d;
                    b.vfov = k / g;
                    b.hoffset = 0;
                    b.voffset = d / 2 - k / g / 2;
                    b.vscale = 1;
                    e = a.levels;
                    c && e.push(b);
                    e.sort(y);
                    c = e.length - 1;
                    var h = g = 0;
                    for (f = 0; f <= c; f++) e[f].w > g && (g = e[f].w, h = e[f].h);
                    g = k / (0 < g ? d * h / g : 1);
                    b.vfov = k / g;
                    b.voffset = d / 2 - k / g / 2;
                    for (f = k = 0; f <= c; f++) e[f].needsize || (k = e[f].vfov);
                    if (0 < k) {
                        for (f = 0; f <= c; f++) e[f].needsize || (e[f].vscale = k / e[f].vfov * g);
                        a.fovlimits = [-d / 2, +d / 2, -k / 2, +k / 2]
                    }
                    l(a)
                }
    
                function l(a) {
                    var b = null,
                        c = 0 == a.type,
                        d = c || null != a.fovlimits,
                        k = a.levels;
                    if (k) {
                        var e = k.length;
                        0 < e && (k = k[e - 1], 0 == k.preview && 0 == k.needsize && d && (b = k))
                    }
                    b && a.done && 0 == a.ready && (a.ready = !0, a.hfov = c ? 360 : b.hfov, a.vfov = c ? 180 : b.vfov, a.hres = b.w, a.vres = b.h, Va.havepanosize(a))
                }
    
                function c() {
                    this.h = this.w = 0;
                    this.imgfov = null;
                    this.loading = !0;
                    this.texture = this.obj = null;
                    this.texvalid = !1;
                    this.mx = Ja()
                }
    
                function H() {
                    this.layer = null;
                    this.tiles = [];
                    this.mx = this.texture = this.csobj = this.csobj0 = null
                }
    
                function E(a) {
                    function b(a, c, d, k) {
                        f(a);
                        if (1 != a.type) {
                            var e = fa;
                            d || (d = [0, 1, 2, 3, 4, 5]);
                            var g, h, l, m;
                            if (c) {
                                g = c.naturalWidth;
                                h = c.naturalHeight;
                                m = 1;
                                if (3 * g == 2 * h) l = g / 2;
                                else if (2 * g == 3 * h) l = g / 3;
                                else if (1 * g == 6 * h) l = g / 6;
                                else if (6 * g == 1 * h) l = g / 1;
                                else {
                                    0 == a.type && va(2, _[292] + c.src + _[210]);
                                    return
                                }
                                g /= l;
                                h /= l
                            } else k && (l = k.width, m = 0, g = 1, h = 6, c = k);
                            k = Ma ? 0 : sa;
                            var n = l,
                                L = new H,
                                q = new C(6, n, n, n, 1, !1),
                                p, Q, gd, r = [2, 0, 3, 1, 4, 5];
                            0 == Ma && (p = Ha(), p.style.position = _[0], p.style.pointerEvents = "none", L.layer = p);
                            L.tiles = Array(6);
                            for (Q = 0; Q < h; Q++)
                                for (p = 0; p < g; p++) {
                                    var u = d[Q * g + p],
                                        t = new J("prev" + a.id + "s" + kc[u], 0, u, 0, 0, q, "", a);
                                    gd = r[u];
                                    var O = 1 == u || 3 == u ? k : 0,
                                        T = 3 >= u ? k : 0,
                                        x = Ha(2);
                                    x.width = n + 2 * O;
                                    x.height = n + 2 * T;
                                    x.style.position = _[0];
                                    x.style[ed] = "0 0";
                                    var w = x.getContext("2d");
                                    w && (0 < T && (w.drawImage(c, m * p * l, m * Q * l, l, 1, O, 0, l, T), w.drawImage(c, m * p * l, m * Q * l + l - 1, l, 1, O, n + T, l, T)), 0 < O && (w.drawImage(c, m * p * l + 0, m * Q * l + 0, 1, l, 0, O, O, l), w.drawImage(c, m * p * l + l - 1, m * Q * l + 0, 1, l, n + O, O, O, l)), w.drawImage(c, m * p * l, m * Q * l, l, l, O, T, n, n), ta && w.getImageData(n >> 1, n >> 1, 1, 1));
                                    t.canvas = x;
                                    0 == Ma ? (t.elmt = x, x = -n / 2, t.transform = Lb[u] + _[73] + (x - O) + "px," + (x - T) + "px," + x + "px) ") : (N(t, n, n), u = e.createTexture(), e.activeTexture(Mc), e.bindTexture(ia, u), e.texParameteri(ia, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(ia, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(ia, e.TEXTURE_MAG_FILTER, xb), e.texParameteri(ia, e.TEXTURE_MIN_FILTER, xb), e.texImage2D(ia, 0, fc, fc, id, x), e.bindTexture(ia, null), t.texture = u, t.mem = 0);
                                    t.state = 2;
                                    L.tiles[gd] = t
                                }
                            gb = !0;
                            a.cspreview = L
                        }
                    }
    
                    function k(a, b) {
                        h.imagefov = b;
                        var c = a.rppano,
                            d = c.w,
                            e = c.h;
                        a.stereo && (0 == a.stereoformat ? d >>= 1 : e >>= 1);
                        var f = b[0],
                            g = b[1],
                            l = b[2];
                        0 >= f && (f = 360);
                        if (0 >= g) {
                            var g = f,
                                m = d,
                                n = e,
                                L = 180,
                                L = 4 == a.type ? 2 * Math.atan(g / 2 * (n / m) * S) / S : _[150] == a.mapping ? n / m * (g / 2) * Ka : g * n / m;
                            180 < L && (L = 180);
                            g = L
                        }
                        a.hfov = f;
                        a.vfov = g;
                        a.hres = d;
                        a.vres = e;
                        c.imgfov = [f, g, l];
                        c = -g / 2 + l;
                        d = +g / 2 + l;
                        4 == a.type && (d = Math.tan(.5 * g * S), l = Math.sin(l * S), c = Math.atan(-d + l) / S, d = Math.atan(+d + l) / S);
                        a.fovlimits = [-f / 2, +f / 2, c, d]
                    }
    
                    function e(a, b, c, k) {
                        b = fa;
                        var f = a.rppano,
                            g = b.createTexture();
                        b.activeTexture(Mc);
                        b.bindTexture(ia, g);
                        b.texParameteri(ia, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE);
                        b.texParameteri(ia, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE);
                        b.texParameteri(ia, b.TEXTURE_MAG_FILTER, xb);
                        b.texParameteri(ia, b.TEXTURE_MIN_FILTER, xb);
                        if (c) {
                            var h;
                            k = c.naturalWidth;
                            h = c.naturalHeight;
                            f.w = k;
                            f.h = h;
                            var l = !1,
                                m = !1,
                                n = M(k) << 1 | M(h),
                                m = d.opera ? "" : G(ka.mipmapping);
                            if (m = "force" == m || "auto" == m && 3 == n) 0 == (n & 2) && (l = !0, k = Aa(k)), 0 == (n & 1) && (l = !0, h = Aa(h)), b.texParameteri(ia, b.TEXTURE_MIN_FILTER, b.LINEAR_MIPMAP_LINEAR);
                            k > Eb && (l = !0, k = Eb);
                            h > Eb && (l = !0, h = Eb);
                            if (l) {
                                l = Ha(2);
                                l.width = k;
                                l.height = h;
                                n = l.getContext("2d");
                                n.drawImage(c, 0, 0, k, h);
                                if (d.ios) {
                                    var L;
                                    L = h;
                                    for (var p = n.getImageData(0, 0, 1, L).data, q = 0, Q = L, gd = L; gd > q;) 0 == p[4 * (gd - 1) + 3] ? Q = gd : q = gd, gd = Q + q >> 1;
                                    L = gd / L;
                                    0 < L && 1 > L && n.drawImage(c, 0, 0, k, h / L)
                                }
                                b.texImage2D(ia, 0, fc, fc, id, l)
                            } else b.texImage2D(ia, 0, fc, fc, id, c);
                            m && b.generateMipmap(ia);
                            f.texvalid = !0
                        } else k && (f.videoplugin = k, f.videoready = !1);
                        b.bindTexture(ia, null);
                        f.texture = g;
                        a.rppano = f;
                        gb = !0
                    }
    
                    function f(a) {
                        var b = fa,
                            c = a.cspreview;
                        if (c)
                            if (a.cspreview = null, b)
                                for (a = 0; 6 > a; a++) {
                                    var d = c.tiles[a],
                                        k = d.texture;
                                    k && (b.deleteTexture(k), d.texture = null)
                                } else a.previewadded && (a.layer.removeChild(c.layer), a.previewadded = !1)
                    }
                    var g = ++qa,
                        h = this;
                    h.id = g;
                    h.image = a;
                    h.panoview = null;
                    h.type = 0;
                    h.typeinfos = null;
                    h.mapping = null;
                    h.cubelabels = _[596].split("");
                    h.stereo = !1;
                    h.stereoformat = 0;
                    h.stereolabels = ["1", "2"];
                    h.done = !1;
                    h.ready = !1;
                    h.fovlimits = null;
                    h.hfov = 0;
                    h.vfov = 0;
                    h.hres = 0;
                    h.vres = 0;
                    h.levels = [];
                    h.frame = 0;
                    h.currentlevel = -1;
                    h.viewloaded = !1;
                    h.stopped = !1;
                    h.suspended = !1;
                    h.alpha = 1;
                    h.cspreview = null;
                    h.rppano = null;
                    h.previewadded = !1;
                    h.previewloading = !1;
                    h.mjpegimage = null;
                    h.mjpegdata = null;
                    h.addToLayer = function(a) {
                        if (0 == Ma) {
                            var b = Ha(),
                                c = b.style;
                            c.position = _[0];
                            c.left = 0;
                            c.top = 0;
                            h.layer = b;
                            a.appendChild(b)
                        }
                    };
                    h.addGridPreview = function(a, c, k, e, f, g) {
                        var l;
                        a += 1;
                        var m = d.desktop ? 1023 : d.tablet || d.webgl ? 511 : 255;
                        l = a < m ? a : m;
                        var n = Ha(2);
                        n.width = l;
                        n.height = l;
                        m = l / a;
                        k *= m;
                        c *= m;
                        m = n.getContext("2d");
                        m.fillStyle = e;
                        m.fillRect(0, 0, l, l);
                        m.fillStyle = f;
                        for (e = 0; e < a; e += k) m.fillRect(0, e, a, 1);
                        for (e = 0; e < a; e += c) m.fillRect(e, 0, 1, a);
                        if (g != f)
                            for (m.fillStyle = g, f = 0; f < a; f += k)
                                for (e = 0; e < a; e += c) m.fillRect(e, f, 1, 1);
                        setTimeout(function() {
                            b(h, null, null, n)
                        }, 10)
                    };
                    h.addCubestripPreview = function(a, c) {
                        h.previewloading = !0;
                        ma.loadimage(a, function(a) {
                            b(h, a, c);
                            h.previewloading = !1;
                            Va.previewdone()
                        }, function(b) {
                            ma.reportLoadingError(a);
                            h.previewloading = !1
                        })
                    };
                    h.addCubestripPano = function(a) {
                        ma.loadimage(a, function(a) {
                            b(h, a, null)
                        }, function() {
                            ma.reportLoadingError(a)
                        })
                    };
                    h.addCubeLevel = function(a, b, c, d) {
                        b = new C(6, b, b, c, d, h.stereo);
                        b.planeurls[0] = a[0];
                        b.planeurls[1] = a[1];
                        b.planeurls[2] = a[2];
                        b.planeurls[3] = a[3];
                        b.planeurls[4] = a[4];
                        b.planeurls[5] = a[5];
                        a = h.levels;
                        a.push(b);
                        a.sort(y);
                        l(h)
                    };
                    h.addFlatLevel = function(a, b, c, d, k, e, f, g) {
                        h.type = 1;
                        e = new C(1, d, k, e, f, h.stereo);
                        e.planeurls[0] = a;
                        e.type = 1;
                        e.preview = g;
                        A(h, e, !0, b, c, d, k)
                    };
                    h.addRoundPano = function(a, b, d, f, g, l) {
                        g || (g = {});
                        var m = !1,
                            n = G(g.mjpegstream);
                        "true" == n || "auto" == n ? (m = !0, h.mjpegdata = null) : (n = Number(n), !isNaN(n) && 0 < n && (m = !0, h.mjpegdata = {
                            delay: 1E3 / n,
                            lastupdate: 0
                        }));
                        h.mapping = g.mapping ? G(g.mapping) : "equi";
                        a = G(a);
                        _[25] == a ? h.type = 4 : _[87] == a ? (h.type = 5, h.stereo = !1, h.typeinfos = {
                            fov: g.fov,
                            align: g.align,
                            crop: g.crop,
                            lenscp: g.lenscp
                        }) : h.type = 3;
                        null == h.rppano && (h.rppano = new c);
                        if (f) {
                            if (h.updateFOV = k, e(h, a, null, f), g = void 0 !== f._panoid, f._panoid = h.id, h.imagefov = d, f.onvideoreadyCB = function() {
                                    var a = h.rppano;
                                    a.w = f.videowidth;
                                    a.h = f.videoheight;
                                    k(h, h.imagefov);
                                    r.updateView();
                                    Va.havepanosize(h);
                                    h.ready = !0;
                                    h.rppano.loading = !1;
                                    a.videoready = !0
                                }, !g && f.havevideosize) f.onvideoreadyCB()
                        } else b && ma.loadimage(b, function(b) {
                            m && (h.mjpegimage = b);
                            if (l) {
                                if (h.rppano.texture) return
                            } else h.rppano.texture && (fa.deleteTexture(h.rppano.texture), h.rppano.texture = null);
                            e(h, a, b);
                            k(h, d);
                            r.updateView();
                            Va.havepanosize(h);
                            h.rppano.loading = !1
                        }, function() {
                            ma.reportLoadingError(b)
                        })
                    };
                    h.finalize = function() {
                        h.done = !0;
                        l(h)
                    };
                    h.setblend = function(a) {
                        Ma ? h.alpha = a : h.layer && (h.layer.style.opacity = a)
                    };
                    h.removemainpano = function() {};
                    h.stop = function() {
                        h.stopped = !0
                    };
                    h.destroy = function() {
                        var a = fa;
                        f(h);
                        if (a) {
                            var b = h.rppano;
                            if (b) {
                                b.videoplugin && (b.videoplugin._panoid = void 0);
                                var c = b.texture;
                                c && a.deleteTexture(c);
                                b.texture = null
                            }
                        }
                        for (var d in ua)(b = ua[d]) && b.pano === h && aa(b);
                        a || (h.layer.parentNode.removeChild(h.layer), h.layer = null)
                    };
                    h.previewcheck = function() {
                        var a = h.rppano;
                        return a && a.videoplugin ? a.texvalid : h.previewloading || 0 == h.type && null == h.cspreview && 0 < h.levels.length && !h.viewloaded ? !1 : !0
                    };
                    h.doloading = function() {
                        return !1
                    };
                    h.isloading = function() {
                        if (h.previewloading) return !0;
                        var a = h.levels,
                            b = a.length;
                        if (0 < b) {
                            if (0 == h.type && (b = a[0].preview && 1 < b ? 1 : 0, 9 > a[b].mp && !a[b].complete) || !h.viewloaded) return !0
                        } else if (a = h.rppano) return a.videoplugin ? !a.texvalid : a.loading;
                        return !1
                    }
                }
    
                function J(a, b, c, d, k, e, f, g) {
                    this.id = a;
                    this.pano = g;
                    this.cubeside = c;
                    this.stereo = f;
                    this.levelindex = b;
                    this.level = e;
                    this.h = d;
                    this.v = k;
                    this.draworder = e ? kc[c] * e.htiles * e.vtiles + k * e.htiles + d : kc[c];
                    this.url = null;
                    this.sh = this.ch = this.sv = 0;
                    this.mx = this.texture = this.canvas = this.image = this.elmt = null;
                    this.lastusage_on_frame = this.mem = this.retries = this.state = 0;
                    this.overlap = this.transform = null;
                    e && (a = 2 * ((d + .5) / e.htiles - .5), k = 2 * ((k + .5) / e.vtiles - .5), a += .5 / e.htiles, k += .5 / e.vtiles, 1 == g.type && (a *= Math.tan(.5 * e.hfov * S), k *= Math.tan(.5 * e.vfov * S)), 0 == c ? (c = 1, e = k, g = -a) : 1 == c ? (c = -a, e = k, g = -1) : 2 == c ? (c = -1, e = k, g = a) : 3 == c ? (c = a, e = k, g = 1) : 4 == c ? (c = -a, g = -k, e = -1) : (c = -a, g = k, e = 1), a = -Math.atan2(c, g), k = -Math.atan2(-e, Math.sqrt(c * c + g * g)), this.sv = Math.sin(k), k = Math.cos(k), this.ch = Math.cos(a) * k, this.sh = Math.sin(a) * k)
                }
    
                function N(a, b, c) {
                    var d = Kc[a.cubeside],
                        k = a.level,
                        e = k.w / 2,
                        f = k.tilesize,
                        g = 1E3 / e,
                        h = 1,
                        l = k.vscale;
                    1 == k.type && (h = Math.tan(.5 * k.hfov * S));
                    var m = (-e + a.h * f + b / 2 + 2 * k.hoffset * e / 90) * g * h,
                        k = (-e + a.v * f + c / 2 + 2 * k.voffset * e / k.hfov) * g * h * l,
                        e = e * g;
                    Fb(jd, b / 1E3 * h, 0, 0, 0, c / 1E3 * h * l, 0, 0, 0, 1);
                    Ze(mc, m, k, e);
                    uc(jd, mc);
                    b = mc;
                    h = d[1];
                    l = -d[0] * S;
                    d = Math.cos(l);
                    c = Math.sin(l);
                    l = -h * S;
                    h = Math.cos(l);
                    l = Math.sin(l);
                    Fb(b, h, 0, -l, c * l, d, c * h, d * l, -c, d * h);
                    uc(jd, mc);
                    d = Ja();
                    Fb(d, g, 0, 0, 0, g, 0, 0, 0, g);
                    uc(d, jd);
                    a.mx = d
                }
    
                function wa(a, b, c, d, k, e) {
                    var f = [],
                        g = a.length,
                        h, l = !1,
                        m = 0,
                        n;
                    for (h = 0; h < g; h++) {
                        var L = a.charAt(h),
                            p = L.charCodeAt(0);
                        if (37 == p) l = !0, m = 0;
                        else if (48 == p) l ? m++ : f.push(L);
                        else if (l) {
                            l = !1;
                            n = null;
                            65 <= p && 84 >= p && (p += 32);
                            if (108 == p) n = c;
                            else if (115 == p) n = b;
                            else if (116 == p) n = e;
                            else if (117 == p || 120 == p || 99 == p || 104 == p) n = d;
                            else if (118 == p || 121 == p || 114 == p) n = k;
                            if (null != n) {
                                for (; n.length <= m;) n = "0" + n;
                                f.push(n)
                            } else f.push("%" + L)
                        } else l = !1, f.push(L)
                    }
                    return f.join("")
                }
    
                function M(a) {
                    return 0 == (a & a - 1)
                }
    
                function I(a, b, c, d, k, e) {
                    if (0 < e) setTimeout(function() {
                        try {
                            I(null, b, c, d, k, 0)
                        } catch (a) {}
                    }, e);
                    else {
                        null == a && (a = b.getContext("2d"));
                        e = k[0];
                        var f = k[1],
                            g = k[2],
                            h = k[3];
                        0 < e && a.drawImage(c, 0, 0, 1, d[1], 0, f, e, d[3]);
                        0 < f && a.drawImage(c, 0, 0, d[0], 1, e, 0, d[2], f);
                        0 < g && a.drawImage(c, d[0] - 1, 0, 1, d[1], e + d[2], f, g, d[3]);
                        0 < h && a.drawImage(c, 0, d[1] - 1, d[0], 1, e, f + d[3], d[2], h)
                    }
                }
    
                function ba(a) {
                    function b(c) {
                        c ? a.image = c : c = a.image;
                        if (0 < wb) gb = !0, setTimeout(b, 0);
                        else if (nc--, null != c && null != c.naturalWidth) {
                            var k = c.naturalWidth,
                                e = c.naturalHeight,
                                f = k * e * 4,
                                g = !1;
                            0 == f && (g = !0);
                            if (g) a.state = 0, gb = !0;
                            else {
                                var h = a.level;
                                if (h) {
                                    h.needsize && (h.w = k, h.h = e, h.tilesize = k > e ? k : e, h.needsize = !1, 1 == h.type ? A(a.pano, h, !1, K.hfov, K.vfov, k, e) : l(a.pano), h.preview && Va.previewdone());
                                    h.loadedtiles[a.stereo - 1]++;
                                    h.complete = h.stereo && ka.stereo ? h.loadedtiles[0] == h.totaltiles && h.loadedtiles[1] == h.totaltiles : h.loadedtiles[0] == h.totaltiles;
                                    g = 1 == h.htiles * h.vtiles;
                                    a.state = 2;
                                    a.lastusage_on_frame = ja;
                                    if (Ma) {
                                        N(a, k, e);
                                        var m = fa,
                                            n = d.opera ? "" : G(ka.mipmapping),
                                            L = "force" == n;
                                        if (n = L || "auto" == n) {
                                            if (!M(k) || !M(e)) {
                                                n = 1024;
                                                g ? (n = 0, L && (n = Eb)) : L || M(h.tilesize) || (n = 0);
                                                var g = Aa(k),
                                                    p = Aa(e);
                                                g < n && p < n && (h = Ha(2), h.width = g, h.height = p, n = h.getContext("2d"), n.drawImage(c, 0, 0, g, p), c = h, k = g, e = p)
                                            }
                                            n = M(k) && M(e)
                                        }
                                        n && 0 == L && !d.realDesktop && a.level && 2500 < a.level.h && (n = !1);
                                        k = m.createTexture();
                                        m.activeTexture(Mc);
                                        m.bindTexture(ia, k);
                                        m.texParameteri(ia, m.TEXTURE_WRAP_T, m.CLAMP_TO_EDGE);
                                        m.texParameteri(ia, m.TEXTURE_WRAP_S, m.CLAMP_TO_EDGE);
                                        m.texParameteri(ia, m.TEXTURE_MAG_FILTER, xb);
                                        m.texParameteri(ia, m.TEXTURE_MIN_FILTER, n ? m.LINEAR_MIPMAP_LINEAR : xb);
                                        m.texImage2D(ia, 0, fc, fc, id, c);
                                        n && m.generateMipmap(ia);
                                        m.bindTexture(ia, null);
                                        a.texture = k;
                                        a.image = null
                                    } else {
                                        m = [k, e, k, e];
                                        L = !1;
                                        k == e && 1 == h.htiles && (n = ka.hardwarelimit, k + 2 * sa > n && (h.w = h.h = m[2] = m[3] = k = e = n - 2 * sa, L = !0));
                                        var q = [0, 0, 0, 0],
                                            Q = sa,
                                            r = a.h,
                                            u = a.v,
                                            h = a.cubeside,
                                            t = a.level,
                                            O = t.tilesize,
                                            n = t.vscale,
                                            x = -t.w / 2,
                                            T = p = 1;
                                        1 == t.type && (p = Math.tan(.5 * t.hfov * S), h = 6, 2 < Q && (Q = 2), d.ie || d.desktop && d.safari) && (T = 252);
                                        1E3 < -x && 4 < Q && (Q = 4);
                                        var w = x,
                                            v = w;
                                        q[2] = Q;
                                        q[3] = Q;
                                        0 == h || 2 == h ? 0 == r && (q[0] = Q) : 1 != h && 3 != h || r != t.vtiles - 1 || (q[2] = 0);
                                        0 <= h && 3 >= h ? 0 == u && (q[1] = Q) : (r == t.htiles - 1 && (q[2] = 0), u == t.vtiles - 1 && (q[3] = 0));
                                        a.overlap = q;
                                        w -= q[0];
                                        v -= q[1];
                                        q = (w + r * O) * p;
                                        u = (v + u * O - 2 * t.voffset * x / t.hfov) * p * n;
                                        t = p;
                                        O = p * n;
                                        1 < T && (q *= T, u *= T, x *= T, t *= T, O *= T);
                                        T = "" + q;
                                        q = 0 < T.indexOf("e-") ? q = q.toFixed(18) : T;
                                        T = "" + u;
                                        u = 0 < T.indexOf("e-") ? u = u.toFixed(18) : T;
                                        T = "" + x;
                                        x = 0 < T.indexOf("e-") ? x = x.toFixed(18) : T;
                                        a.transform = Lb[h] + _[73] + q + "px," + u + "px," + x + "px) ";
                                        if (1 != p || 1 != n) a.transform += _[490] + t + "," + O + ",1) ";
                                        (p = a.overlap) ? (h = Ha(2), h.width = k + p[0] + p[2], h.height = e + p[1] + p[3], h.style.overflow = _[6], f = h.width * h.height * 4, x = T = 0, n = h.getContext("2d"), p && (T = p[0], x = p[1], I(n, h, c, m, p, g ? 0 : 250)), L ? n.drawImage(c, 0, 0, m[0], m[1], T, x, k, e) : n.drawImage(c, T, x), ta && n.getImageData(m[0] >> 1, m[1] >> 1, 1, 1), a.canvas = h, a.elmt = h, a.image = null) : a.elmt = c;
                                        a.elmt.style.position = _[0];
                                        a.elmt.style[ed] = "0 0"
                                    }
                                    a.mem = f;
                                    qb += f;
                                    if (qb > Ca) {
                                        gb = !0;
                                        wb++;
                                        for (var D, f = null, k = 0;;) {
                                            for (D in ua) k++, c = ua[D], 0 < c.levelindex && 2 <= c.state && c.lastusage_on_frame < ja - 1 && (!f || c.lastusage_on_frame < f.lastusage_on_frame) && (f = c);
                                            if (f) {
                                                if (aa(f), f = null, qb < Ca - 2097152) break
                                            } else break
                                        }
                                        if (k > Math.max(2 * Ia.length, 100)) {
                                            f = {};
                                            for (D in ua)
                                                if (c = ua[D])(0 < c.levelindex || 8 < c.level.mp) && 0 == c.state && c.lastusage_on_frame < ja - 2 ? (c.pano = null, c.level = null) : f[D] = c;
                                            ua = f
                                        }
                                        qb > Ca && (Ea = !0)
                                    }
                                    gb = !0;
                                    wb++
                                }
                            }
                        }
                    }
    
                    function c(b, d) {
                        nc--;
                        d ? a.state = 4 : a.retries < p.network.retrycount ? (a.retries++, a.state = 0, gb = !0) : (a.state = 4, ma.reportLoadingError(a.url))
                    }
                    null != a.pano && (null == a.url && (a.url = wa(a.level.planeurls[a.level.invplanemapping[a.cubeside]], a.pano.cubelabels[a.cubeside], a.levelindex, String(a.h + a.level.i), String(a.v + a.level.i), a.pano.stereolabels[a.stereo - 1])), a.state = 1, ma.loadimage(a.url, b, c, !0), nc++)
                }
    
                function aa(a) {
                    var b = fa,
                        c = a.texture;
                    b && c && b.deleteTexture(c);
                    (b = a.elmt) && (c = b.parentNode) && c.removeChild(b);
                    c = Ia.length;
                    for (b = 0; b < c; b++)
                        if (Ia[b] == a) {
                            Ia.splice(b, 1);
                            break
                        } b = a.id;
                    ua[b] = null;
                    delete ua[b];
                    if (b = a.level) b.addedtiles[a.stereo - 1]--, b.completelyadded = b.stereo && ka.stereo ? b.addedtiles[0] == b.totaltiles && b.addedtiles[1] == b.totaltiles : b.addedtiles[0] == b.totaltiles;
                    qb -= a.mem;
                    a.state = 0;
                    a.image = null;
                    a.canvas = null;
                    a.texture = null;
                    a.elmt = null;
                    a.pano = null;
                    a.level = null
                }
    
                function R(a) {
                    if (Ma) {
                        var b = fa,
                            c = Oa,
                            d = a.texture;
                        c && d && (b.uniformMatrix4fv(yb, !1, a.mx), b.bindBuffer(hb, c.vx), b.vertexAttribPointer(cb, 3, pc, !1, 0, 0), b.bindBuffer(hb, c.tx), b.vertexAttribPointer(db, 2, pc, !1, 0, 0), b.bindBuffer($b, c.ix), b.activeTexture(Mc), b.bindTexture(ia, d), b.drawElements(Zb, c.tcnt, Pb, 0), ha++, ke && fd(c, .6))
                    } else a.elmt.style[fb] = Yc + a.transform
                }
    
                function Y(a, b) {
                    var c = new Gc;
                    c.x = a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
                    c.y = a[0] * b[3] + a[1] * b[4] + a[2] * b[5];
                    c.z = -2 * (a[0] * b[6] + a[1] * b[7] + a[2] * b[8]);
                    return c
                }
    
                function P(a, b) {
                    var c = a.panoview,
                        e = a.id,
                        g, h, l, m, n, u, x, w, E, y, C, z, B, A, sa, H, ta, G, I, F, P, K, M = !1,
                        N, U, wa, ub, W, V, Y, aa, X, ea, Da, oa, wb, qb, ya = !1,
                        ra = !1,
                        qa = !0,
                        xa = Pa();
                    if (Ma) {
                        var Ba = fa,
                            La = Sa,
                            Lc = Fa,
                            pa = a.panoview,
                            ma = d.gl.width * $a + .5 | 0,
                            jb = d.gl.height * $a + .5 | 0;
                        if (0 < b) {
                            var kb = ma,
                                ma = ma >> 1,
                                La = La >> 1;
                            Ba.viewport(2 == b ? ma : 0, 0, 1 == b ? ma : kb - ma, jb)
                        } else Ba.viewport(0, 0, ma, jb);
                        var Sb = 1 / (.5 * La),
                            Ca = -1 / (.5 * Lc),
                            Aa = pa.zf,
                            Ea = 0 < b ? Number(ka.stereooverlap) * La * .5 * (1 == b ? 1 : -1) : 0,
                            Eb = pa.yf,
                            Qa = Math.min(Aa / 200, 1),
                            ob = 0 < Aa ? pa.ch : 0;
                        ze(rd, Sb, 0, 0, 0, 0, Ca, 0, 0, 0, 0, 65535 / 65536, 1, 0, 0, 65535 / 65536 - 1, 0);
                        var Ua = pa.z;
                        ze(xc, Ua, 0, 0, 0, 0, Ua, 0, 0, Ea, Eb, 1, 0, Aa * Ea, Aa * Eb, Aa, 1);
                        uc(xc, rd);
                        if (0 < b) {
                            var Va = p.webVR;
                            Va && Va.enabled && Va.prjmatrix(b, xc)
                        }
                        5 == a.type && lb ? (D(lb), cb = lb.vx, db = lb.tx, vb = lb.sh, Cb = lb.ch, rb = lb.aa, Ab = lb.mx, yb = lb.ot, zb = lb.tm) : (D(Ga), cb = Ga.vx, db = Ga.tx, vb = Ga.sh, Cb = Ga.ch, rb = Ga.aa, Ab = Ga.mx, yb = Ga.ot, zb = Ga.tm);
                        Ba.uniform1f(rb, 1);
                        Ba.uniform1f(vb, Qa);
                        Ba.uniform1f(Cb, ob);
                        Rd(Ic, Vc);
                        if (2 == b) {
                            var Wa = Number(ka.stereo_rightview_rx),
                                Xa = Number(ka.stereo_rightview_ry),
                                Za = Number(ka.stereo_rightview_rz);
                            isNaN(Wa) && (Wa = 0);
                            isNaN(Xa) && (Xa = 0);
                            isNaN(Za) && (Za = 0);
                            fe(jd, Wa, Xa, Za, !1);
                            Ye(Ic, jd)
                        }
                        uc(Ic, xc);
                        Ba.uniformMatrix4fv(Ab, !1, Ic);
                        Ba.uniformMatrix3fv(zb, !1, Mb);
                        var Ta = na.obj0,
                            Ya = na.obj;
                        null == Ta && (Ta = f(500, 1), Ya = f(500, 19), v(Ta), v(Ya), na.obj0 = Ta, na.obj = Ya);
                        Oa = 10 < Aa ? Ya : Ta
                    }
                    var Cd = b;
                    0 == Cd && (Cd = 1);
                    a.stereo && (e += "t" + Cd);
                    g = +c.h + Number(a.image.viewoffset);
                    h = -c.v;
                    l = c.z;
                    m = Ka - g * S;
                    n = -h * S;
                    u = Math.sin(n);
                    x = Math.cos(n);
                    w = Math.cos(m) * x;
                    E = Math.sin(m) * x;
                    if (cc) {
                        var bb = [w, u, E];
                        Be(jd, cc);
                        ge(jd, bb);
                        w = bb[0];
                        u = bb[1];
                        E = bb[2]
                    }
                    y = a.levels;
                    z = y.length;
                    B = a.currentlevel;
                    a.viewloaded = !1;
                    if (5E3 > l) {
                        var mb = 1 / Math.max(100, l),
                            ib = Math.abs(Math.cos(g * S)),
                            nf = Math.cos(.25 * Ka);
                        if (1E-14 > ib || ib > nf - 1E-14 && ib < nf + 1E-14 || ib > 1 - 1E-14 || 1E-14 > x || x > 1 - 1E-14) g += (.5 + .5 * Math.random()) * mb * (.5 > Math.random() ? -1 : 1), h += (.5 + .5 * Math.random()) * mb * (.5 > Math.random() ? -1 : 1);
                        d.firefox && (u < -(1 - 1E-14) && (h += .5), u > +(1 - 1E-14) && (h -= .5))
                    }
                    Yc = _[73] + Sa / 2 + "px," + Fa / 2 + _[238] + c.yf.toFixed(16) + _[261] + l.toFixed(16) + _[123] + (-c.r).toFixed(16) + _[110] + l.toFixed(16) + _[368] + h.toFixed(16) + _[325] + g.toFixed(16) + "deg) " + Fc;
                    if (0 < z) {
                        var fb = 1 == la(ka.loadwhilemoving) ? !0 : 0 == a.hasmoved || Hc,
                            Ad = B;
                        7 <= nc && (fb = !1);
                        if (a.stopped) fb = !1;
                        else {
                            9 > y[0].mp && (0 == y[0].complete && (Ad = 0, M = !0), 0 == fb && 0 == y[0].completelyadded && (Ad = 0, fb = M = !0));
                            var bf = p.lockmultireslevel | 0;
                            p.downloadlockedlevel && 0 <= bf && bf < z && (M = !0, 0 == y[bf].complete && (fb = !0))
                        }
                        ca && 5 < Ad && (Ad -= 3, ca = !1, gb = !0);
                        if (fb) {
                            bd = xa;
                            Hc = !1;
                            oa = null;
                            qb = 1E6;
                            for (A = Ad; 0 <= A; A--) {
                                C = y[A];
                                ta = C.w;
                                G = C.h;
                                I = C.tilesize;
                                F = C.htiles;
                                P = C.vtiles;
                                var ya = !0,
                                    Jb = C.planeurls.length;
                                for (H = 0; H < Jb; H++)
                                    if (sa = C.planemapping[H], K = M ? [0, 0, 1, 1] : c.vr[sa]) {
                                        ea = "p" + e + "l" + A + "s" + kc[sa] + "h";
                                        var Ib = 1,
                                            Ob = 1;
                                        1 == a.type && (Ib = 1 / Math.tan(.5 * C.hfov * S), Ob = 1 / Math.tan(.5 * C.vfov * S));
                                        N = Math.floor((Ib * (K[0] - .5) + .5) * ta / I);
                                        U = Math.ceil((Ib * (K[2] - .5) + .5) * ta / I);
                                        0 > N && (N = 0);
                                        U > F && (U = F);
                                        wa = Math.floor((Ob * (K[1] - .5) + .5) * G / I);
                                        ub = Math.ceil((Ob * (K[3] - .5) + .5) * G / I);
                                        0 > wa && (wa = 0);
                                        ub > P && (ub = P);
                                        for (aa = wa; aa < ub; aa++)
                                            for (Y = N; Y < U; Y++) {
                                                X = ea + Y + "v" + aa;
                                                Da = ua[X];
                                                Da || (Da = new J(X, A, sa, Y, aa, C, Cd, a), ua[X] = Da, ya = !1);
                                                if (0 == Da.state) wb = Math.acos(w * Da.ch + E * Da.sh + u * Da.sv), wb < qb && (oa = Da, qb = wb), ya = !1;
                                                else if (1 == Da.state) ya = !1;
                                                else if (2 == Da.state) {
                                                    0 == Ma && R(Da);
                                                    var xb = Da,
                                                        Fb = null,
                                                        Nb = null;
                                                    0 == Ma && (Fb = xb.elmt, Nb = a.layer);
                                                    if (0 != Ma || Fb.parentNode != Nb) {
                                                        for (var mc = Ia.length, Qb = -1, Tb = void 0, Lb = void 0, tc = xb.pano, zc = xb.levelindex, Of = xb.draworder, oc = 0, vc = 0, Lb = 0; Lb < mc; Lb++)
                                                            if (Tb = Ia[Lb], Tb.pano === tc && (oc = Tb.levelindex, vc = Tb.draworder, oc >= zc && vc >= Of)) {
                                                                Qb = Lb;
                                                                break
                                                            } 0 > Qb ? (Fb && Nb.appendChild(Fb), Ia.push(xb)) : (Fb && Nb.insertBefore(Fb, Ia[Qb].elmt), Ia.splice(Qb, 0, xb));
                                                        var kd = xb.level;
                                                        kd.addedtiles[xb.stereo - 1]++;
                                                        kd.completelyadded = kd.stereo && ka.stereo ? kd.addedtiles[0] == kd.totaltiles && kd.addedtiles[1] == kd.totaltiles : kd.addedtiles[0] == kd.totaltiles
                                                    }
                                                    Da.state = 3
                                                }
                                                Da.lastusage_on_frame = ja
                                            }
                                    } 0 == ca && 0 == ya && A == Ad && 1E3 < xa - pe && (ca = !0, pe = xa);
                                if (ya) {
                                    a.viewloaded = !0;
                                    break
                                }
                            }
                            oa && ba(oa)
                        }
                    }
                    1 != a.viewloaded ? (ra = !0, ga = xa) : 0 < ga && 200 > xa - ga && (ra = !0);
                    Ma && 10 < c.zf && (ra = !0);
                    if (ra) {
                        var bc = a.cspreview;
                        if (bc) {
                            var wc = bc.layer;
                            for (W = 0; 6 > W; W++) {
                                var lc = bc.tiles[W];
                                R(lc);
                                0 == Ma && 2 == lc.state && (wc.appendChild(lc.elmt), lc.state = 3)
                            }
                            0 != Ma || a.previewadded || (0 == a.layer.childNodes.length ? a.layer.appendChild(wc) : a.layer.insertBefore(wc, a.layer.childNodes[0]), a.previewadded = !0)
                        }
                    } else 0 == Ma && a.previewadded && ((bc = a.cspreview) && a.layer.removeChild(bc.layer), a.previewadded = !1);
                    a.previewloading && (qa = !1);
                    if (qa)
                        for (V = Ia.length, W = 0; W < V; W++)
                            if (Da = Ia[W], !(Da.pano !== a || a.stereo && Da.stereo != Cd))
                                if (Da.levelindex > B) {
                                    0 == Ma && Da.pano.layer.removeChild(Da.elmt);
                                    Da.state = 2;
                                    Ia.splice(W, 1);
                                    W--;
                                    V--;
                                    var ld = Da.level;
                                    ld.addedtiles[Da.stereo - 1]--;
                                    ld.completelyadded = ld.stereo && ka.stereo ? ld.addedtiles[0] == ld.totaltiles && ld.addedtiles[1] == ld.totaltiles : ld.addedtiles[0] == ld.totaltiles
                                } else R(Da);
                    if (0 == z && Ma) {
                        var Kb = a.rppano;
                        if (2 < a.type && Kb) {
                            var Kc = Kb.texture,
                                Ge = Kb.imgfov,
                                Nc = Kb.videoplugin,
                                md = null,
                                Bc = !1;
                            Nc && (Nc._panoid != a.id ? Nc = Kb.videoplugin = null : gb = r.haschanged = !0);
                            if (Kc && Ge) {
                                var Uc = Ge[0],
                                    Wc = Ge[1],
                                    Xc = Ge[2];
                                Bc = Nc ? (md = Nc.videoDOM) ? Kb.videoready : Kb.texvalid : !0;
                                if (Bc) {
                                    var nd = na.objS,
                                        Ac = a.type + "/" + Uc + "x" + Wc + "/" + Xc + "/" + a.mapping;
                                    5 == a.type && (Ac += "/" + a.hres + "x" + a.vres);
                                    if (Ac != na.objS_i) {
                                        var yc = Uc,
                                            sd = Wc,
                                            Oc = Xc,
                                            od = nd,
                                            af = a.type,
                                            qc = 15453,
                                            Pc = 10302,
                                            Cc = 3E4;
                                        od && od.tcnt != Cc && (od = null);
                                        var Dd = od ? od.vxd : new Float32Array(qc),
                                            Ec = od ? od.txd : new Float32Array(Pc),
                                            Ed = od ? od.ixd : new Uint16Array(Cc),
                                            gc, hc, Fd, td, Gd, Zc, Hd, rc, Id, $c, ad, cd, qe, dd, yc = yc * S,
                                            sd = sd * S,
                                            Oc = Oc * S;
                                        4 == af ? (sd = 1E3 * Math.tan(.5 * sd), Oc = 500 * Math.sin(1 * Oc)) : Oc = -Oc + .5 * Ka;
                                        var qc = Pc = 0,
                                            Wd = _[150] === a.mapping;
                                        if (5 == af) {
                                            var ed = Ja(),
                                                Gb = new Gc,
                                                He = a.typeinfos,
                                                re = Number(He.fov),
                                                wd = ("" + He.align).split("|"),
                                                xd = Number(wd[0]),
                                                yd = Number(wd[1]),
                                                zd = Number(wd[2]),
                                                eb = ("" + He.lenscp).split("|");
                                            isNaN(re) && (re = 180);
                                            isNaN(yd) && (yd = 0);
                                            isNaN(xd) && (xd = 0);
                                            isNaN(zd) && (zd = 0);
                                            isNaN(eb[0]) && (eb[0] = 0);
                                            isNaN(eb[1]) && (eb[1] = 0);
                                            isNaN(eb[2]) && (eb[2] = 0);
                                            isNaN(eb[3]) && (eb[3] = 0);
                                            isNaN(eb[4]) && (eb[4] = 0);
                                            eb[5] = 1 - eb[0] - eb[1] - eb[2];
                                            eb[3] /= a.hres;
                                            eb[4] /= a.vres;
                                            var pd = 1,
                                                Ie = 0,
                                                Je = 0,
                                                Od = a.vres / a.hres,
                                                Jd = ("" + He.crop).split("|");
                                            if (1 == Jd.length) pd = Number(Jd[0]), isNaN(pd) && (pd = 1);
                                            else if (4 == Jd.length) {
                                                var Pd = Number(Jd[0]),
                                                    Qd = Number(Jd[1]),
                                                    ee = Number(Jd[2]),
                                                    ie = Number(Jd[3]),
                                                    pd = (Qd - Pd) / 2;
                                                if (isNaN(pd)) pd = 1;
                                                else var je = (ee + ie) / 2,
                                                    Ie = a.hres / 2 - (Pd + Qd) / 2,
                                                    Je = a.vres / 2 - je,
                                                    pd = pd / (a.vres / 2),
                                                    Ie = Ie / a.vres,
                                                    Je = Je / a.vres
                                            }
                                            var Td = Ja(),
                                                Ud = Ja(),
                                                Vd = Ja();
                                            $e(Td, 1, -xd);
                                            $e(Ud, 0, zd);
                                            $e(Vd, 2, -yd);
                                            uc(ed, Ud);
                                            uc(ed, Vd);
                                            uc(ed, Td);
                                            yc = 360 * S;
                                            sd = .5 * re * S;
                                            Oc = (180 - .25 * re) * S;
                                            for (hc = 0; 50 >= hc; hc++)
                                                for (rc = (hc / 50 - .5) * sd + Oc, Id = Math.sin(rc), $c = Math.cos(rc), gc = 0; 100 >= gc; gc++) {
                                                    rc = (gc / 100 - .5) * yc + Ka;
                                                    ad = Math.sin(rc);
                                                    cd = Math.cos(rc);
                                                    td = -500 * cd * Id;
                                                    Fd = 500 * $c;
                                                    Gd = 500 * ad * Id;
                                                    var me = Fd,
                                                        ne = td,
                                                        oe = Gd;
                                                    Gb.x = Fd;
                                                    Gb.y = td;
                                                    Gb.z = Gd;
                                                    Sd(ed, Gb);
                                                    Fd = Gb.x;
                                                    td = Gb.y;
                                                    Gd = Gb.z;
                                                    Gb.x = oe;
                                                    Gb.y = -me;
                                                    Gb.z = ne;
                                                    var Xd = Math.atan2(Gb.z, Gb.x),
                                                        Ub = Math.atan2(Math.sqrt(Gb.x * Gb.x + Gb.z * Gb.z), Gb.y),
                                                        Ub = 2 / (re * Math.PI / 180) * Ub,
                                                        Ub = pd * (eb[0] * Ub * Ub * Ub * Ub + eb[1] * Ub * Ub * Ub + eb[2] * Ub * Ub + eb[5] * Ub);
                                                    Zc = .5 - Ie * Od + .5 * Od * Ub * Math.cos(Xd) + eb[3];
                                                    Hd = .5 - Je + .5 * Ub * Math.sin(Xd) + eb[4];
                                                    Dd[qc] = Fd;
                                                    Dd[qc + 1] = td;
                                                    Dd[qc + 2] = Gd;
                                                    qc += 3;
                                                    Ec[Pc] = Zc;
                                                    Ec[Pc + 1] = Hd;
                                                    Pc += 2
                                                }
                                        } else
                                            for (hc = 0; 50 >= hc; hc++)
                                                for (Hd = 1 - hc / 50, 4 == af ? (Id = 1, td = sd * (Hd - .5) + Oc) : (rc = (hc / 50 - .5) * sd + Oc, Id = Math.sin(rc), $c = Math.cos(rc), td = 500 * $c, Wd && (Hd = .5 * Math.sin((Hd - .5) * Ka) + .5)), gc = 0; 100 >= gc; gc++) rc = (gc / 100 - .5) * yc + Ka, ad = Math.sin(rc), cd = Math.cos(rc), Fd = 500 * cd * Id, Gd = 500 * ad * Id, Zc = 1 - gc / 100, Dd[qc] = Fd, Dd[qc + 1] = td, Dd[qc + 2] = Gd, qc += 3, Ec[Pc] = Zc, Ec[Pc + 1] = Hd, Pc += 2;
                                        for (hc = Cc = 0; 50 > hc; hc++)
                                            for (gc = 0; 100 > gc; gc++) qe = 101 * hc + gc, dd = qe + 101, Ed[Cc] = qe, Ed[Cc + 1] = qe + 1, Ed[Cc + 2] = dd, Ed[Cc + 3] = dd, Ed[Cc + 4] = qe + 1, Ed[Cc + 5] = dd + 1, Cc += 6;
                                        var nd = new t(3E4, Dd, Ec, Ed),
                                            Kd = na.objS,
                                            Dc = nd;
                                        if (Kd && Kd.tcnt == Dc.tcnt) {
                                            Dc.vx = Kd.vx;
                                            Dc.tx = Kd.tx;
                                            Dc.ix = Kd.ix;
                                            var Yd = fa;
                                            Yd.bindBuffer(hb, Dc.vx);
                                            Yd.bufferData(hb, Dc.vxd, hd);
                                            Yd.bindBuffer(hb, Dc.tx);
                                            Yd.bufferData(hb, Dc.txd, hd);
                                            Yd.bindBuffer($b, Dc.ix);
                                            Yd.bufferData($b, Dc.ixd, hd)
                                        } else Kd && q(Kd), v(Dc);
                                        na.objS = nd;
                                        na.objS_i = Ac
                                    }
                                    var Qc = fa;
                                    Qc.uniformMatrix4fv(yb, !1, Kb.mx);
                                    a.stereo && Qc.uniformMatrix3fv(zb, !1, 0 == a.stereoformat ? 1 >= Cd ? Xb : dc : 1 >= Cd ? Vb : Wb);
                                    Qc.bindBuffer(hb, nd.vx);
                                    Qc.vertexAttribPointer(cb, 3, pc, !1, 0, 0);
                                    Qc.bindBuffer(hb, nd.tx);
                                    Qc.vertexAttribPointer(db, 2, pc, !1, 0, 0);
                                    Qc.bindBuffer($b, nd.ix);
                                    var Ld = null;
                                    if (md && 0 == Db) {
                                        Db++;
                                        var cf = Nc.posterDOM,
                                            be = cf && cf.complete,
                                            ce = (4 <= md.readyState || !0 === Nc.iPhoneMode) && 0 < md.videoWidth;
                                        be && (d.chromemobile || d.ios) && 0 == md.currentTime && (ce = !1);
                                        if (ce) {
                                            var de = md.currentTime;
                                            if (Nc.lastCurrentTime != de && (Nc.lastCurrentTime = 4 > md.readyState ? -1 : de, Ld = md, d.ie && !d.edge && d.desktop)) {
                                                null == pb && (pb = Ha(2));
                                                if (pb.width != Kb.w || pb.height != Kb.h) pb.width = Kb.w, pb.height = Kb.h;
                                                pb.getContext("2d").drawImage(md, 0, 0, Kb.w, Kb.h);
                                                Ld = pb
                                            }
                                        } else be && (Ld = cf)
                                    } else a.mjpegimage && (nb = !0, null == a.mjpegdata ? 0 == a.hasmoved && (Ld = a.mjpegimage) : xa - a.mjpegdata.lastupdate > a.mjpegdata.delay && (a.mjpegdata.lastupdate = xa, Ld = a.mjpegimage));
                                    Qc.activeTexture(Mc);
                                    Qc.bindTexture(ia, Kc);
                                    if (Ld) {
                                        var Ae = Ld,
                                            df = Nc,
                                            he = !0;
                                        d.ios && 10 <= d.iosversion && fa.pixelStorei(fa.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
                                        try {
                                            fa.texImage2D(ia, 0, fc, fc, id, Ae)
                                        } catch (se) {
                                            he = !1, se = "" + se, df && df.error != se && (df.error = se, va(3, se))
                                        }
                                        he && (Kb.texvalid = !0)
                                    }
                                    Kb.texvalid && (Qc.drawElements(Zb, nd.tcnt, Pb, 0), ha++, ke && fd(nd, .25))
                                }
                            }
                        }
                    }
                    if (Ma) {
                        var Ra = fa,
                            te = Oa,
                            Ke = p.webVR,
                            ef = Ke && Ke.enabled,
                            ff = ef ? Ke.getcursor() : null,
                            ac = a.panoview,
                            Ce = ac.h + Number(a.image.viewoffset),
                            De = ac.v,
                            Ee = ac.r,
                            Fe = ac.z / (ef ? 2E3 : Fa) * 2,
                            gf = ac.zf,
                            Pf = Math.min(ac.zf / 200, 1),
                            Ue = 1 + gf / 1E3,
                            hf = jd;
                        fe(hf, 0, -ac.h + 90 - Number(a.image.viewoffset), ac.v, !1);
                        var of = Bb.getArray(), Ve = of .length, Le, za, Na, Zd, ue = 2 > b, jf = null;
                        if (0 < b) {
                            var We = ef ? Ke.eyetranslt(b) : 0;
                            Ze(ve, -We, 0, 0);
                            Rd(Jc, ud);
                            uc(Jc, ve);
                            Ze(ve, -r.tz, r.ty, -r.tx);
                            Ye(Jc, ve);
                            jf = Jc
                        }
                        Ra.uniformMatrix4fv(Ab, !1, xc);
                        var Md = !1;
                        Ra.bindBuffer(hb, te.vx);
                        Ra.vertexAttribPointer(cb, 3, pc, !1, 0, 0);
                        Ra.bindBuffer(hb, te.tx);
                        Ra.vertexAttribPointer(db, 2, pc, !1, 0, 0);
                        Ra.bindBuffer($b, te.ix);
                        for (Le = 0; Le < Ve; Le++)
                            if ((za = of [Le]) && za._ready && (ue && 0 != za.haschanged_flags && za.processUpdates(), za.loaded && (za.keep || !a.suspended) && (Na = za.DATA, Na.visible)))
                                if (Na.webGL) {
                                    var Rc = za.GL;
                                    Rc || (Rc = za.GL = new Z);
                                    var pf = !0,
                                        $d = Na.depth,
                                        Hb = 1;
                                    isNaN($d) && ($d = 1E3, pf = !1);
                                    za === ff && ($d = ff.hit_depth, Hb *= $d / 1E3);
                                    var ic = za.getparsed(),
                                        Nd = ic.flags;
                                    if (ue) {
                                        var qf = Na.scale,
                                            Hb = Hb * qf;
                                        Na.scale = 1;
                                        za.renderer_flags & rf && za.API_calcsize();
                                        Na.scale = qf;
                                        Rc.state = 1;
                                        za.renderer_flags = 0;
                                        var Sc = Na.flying,
                                            Me = (1 - Sc) * Na.ath,
                                            Ne = (1 - Sc) * Na.atv,
                                            Oe = (1 - Sc) * Na.rotate,
                                            kf = 0;
                                        0 < Sc && (Me += Sc * qd(Ce, Na.ath), Ne += Sc * qd(De, Na.atv), Oe += Sc * qd(Ee, Na.rotate), kf = -Sc * ac.yf / (ac.z / 1E3));
                                        var Pe = 0 == Na.distorted && 0 == Na.zoom;
                                        1 != za.scaleflying || Pe || (Hb = Hb * (1 - Sc) + Hb / Fe * Sc * Ue);
                                        var sf = za.getrenderer(),
                                            we = sf.w,
                                            xe = sf.h,
                                            jc = [0, 0, 0, 0];
                                        za._istextfield && (jc = za._tf_extends);
                                        var Qe = 2 * (we + jc[0] + jc[1]) / 1E3,
                                            Re = 2 * (xe + jc[2] + jc[3]) / 1E3;
                                        Pe && (Qe *= da, Re *= da);
                                        Q(Na.distorted ? null : hf, Nd, sb, Qe * Hb, Re * Hb, Na.mx_RR, 2 * (Nd & 64 ? ic.ox * we : ic.ox), 2 * (Nd & 128 ? ic.oy * xe : ic.oy) + kf, $d, -Oe, -Me + 90, Ne, -za.tz, za.ty, za.tx, (-(ic.ex - .5) * we * 2 + jc[1] - jc[0]) * Hb, (-(ic.ey - .5) * xe * 2 + jc[3] - jc[2]) * Hb);
                                        var ye = 0;
                                        if (Pe || 0 == Na.distorted)
                                            if (ye = (sb[8] + sb[12]) * ud[2] + (sb[9] + sb[13]) * ud[6] + (sb[10] + sb[14]) * ud[10] + (sb[11] + sb[15]) * ud[14], ye += ac.zf, ye < ac.zf && 1E3 < ac.zf) {
                                                Rc.state = 0;
                                                continue
                                            } if (Pe) {
                                            var sc = ye,
                                                sc = .5 / ac.z * sc,
                                                Hb = Hb * sc;
                                            Q(hf, Nd, sb, Qe * Hb, Re * Hb, Na.mx_RR, 2 * sc * (Nd & 64 ? ic.ox * we : ic.ox), 2 * sc * (Nd & 128 ? ic.oy * xe : ic.oy) + kf, $d, -Oe, -Me + 90, Ne, -za.tz, za.ty, za.tx, (-(ic.ex - .5) * we * 2 + jc[1] - jc[0]) * Hb, (-(ic.ey - .5) * xe * 2 + jc[3] - jc[2]) * Hb)
                                        }
                                        Rd(za.MX, sb)
                                    } else Rd(sb, za.MX);
                                    if (!(.01 > Na.alpha)) {
                                        jf && pf ? uc(sb, jf) : uc(sb, ud);
                                        if (ue) {
                                            if (Nd & 3072) {
                                                if (Md = !0, 0 < gf) {
                                                    var tf = sb[8] + sb[12],
                                                        uf = sb[9] + sb[13],
                                                        sc = sb[10] + sb[14],
                                                        sc = sc * (1E3 / Math.sqrt(tf * tf + uf * uf + sc * sc)); - 800 > sc && (Md = !1);
                                                    if (sc < (1E3 < gf ? -100 : -950)) {
                                                        Rc.state = 0;
                                                        continue
                                                    }
                                                }
                                            } else Md = !1;
                                            Rc.state = Md ? 2 : 1
                                        } else {
                                            if (0 == Rc.state) continue;
                                            Md = 2 == Rc.state
                                        }
                                        if (Zd = Rc.tex) {
                                            if (Ra.activeTexture(Mc), Ra.bindTexture(ia, Zd), 1 != Rc.tex_type) a: {
                                                var tb = za,
                                                    vf = !1;
                                                if (2 == tb.GL.tex_type) {
                                                    gb = !0;
                                                    var lf = tb.posterDOM,
                                                        vd = tb.videoDOM,
                                                        Xe = lf && lf.complete,
                                                        mf = vd && (4 <= vd.readyState || !0 === tb.iPhoneMode) && 0 < vd.videoWidth;
                                                    vd && d.chromemobile && 0 == vd.currentTime && (mf = !1);
                                                    var Se = mf ? vd : Xe ? lf : null;
                                                    if (Se !== tb.GL.tex_src) {
                                                        if (null == vd) {
                                                            T(tb);
                                                            tb.lastCurrentTime = -1;
                                                            Zd = null;
                                                            break a
                                                        }
                                                        Se && (tb.GL.tex_src = Se, tb.lastCurrentTime = -1)
                                                    }
                                                    if (mf) {
                                                        var wf = vd.currentTime;
                                                        wf !== tb.lastCurrentTime && (vf = !0, tb.lastCurrentTime = wf)
                                                    }
                                                    vf && L(tb, fc, Se)
                                                } else 3 == tb.GL.tex_type && tb.renderToCanvasUpdateCheck() && (tb.GL.tex_src = tb.renderToCanvas(), null != tb.GL.tex_src && (L(tb, Rb, tb.GL.tex_src), tb.DATA.mipmapping && fa.generateMipmap(ia)));Zd = tb.GL.tex
                                            }
                                        } else Zd = k(za);
                                        if (null != Zd) {
                                            Ra.uniformMatrix4fv(yb, !1, sb);
                                            var Tc = Mb,
                                                ae = Na.crop;
                                            za.pressed && Na.ondowncrop ? ae = Na.ondowncrop : za.hovering && Na.onovercrop && (ae = Na.onovercrop);
                                            if (ae && za.loader)
                                                if (ae != za.C_crop) {
                                                    za.C_crop = ae;
                                                    var Te = ("" + ae).split("|"),
                                                        xf = za.loader.naturalWidth,
                                                        yf = za.loader.naturalHeight,
                                                        Tc = [1, 0, 0, 0, 1, 0, 0, 0, 0];
                                                    Tc[0] = (1 * Te[2] - 1) / xf;
                                                    Tc[2] = (1 * Te[0] + .5) / xf;
                                                    Tc[4] = (1 * Te[3] - 1) / yf;
                                                    Tc[5] = (1 * Te[1] + .5) / yf;
                                                    za.C_crop_matrix = Tc
                                                } else Tc = za.C_crop_matrix;
                                            else switch (Na.stereo) {
                                                case "SBS":
                                                    Tc = [.5, 0, 2 > b ? 0 : .5, 0, 1, 0, 0, 0, 0];
                                                    break;
                                                case "TB":
                                                    Tc = [1, 0, 0, 0, .5, 2 > b ? 0 : .5, 0, 0, 0]
                                            }
                                            Ra.uniformMatrix3fv(zb, !1, Tc);
                                            Ra.uniform1f(rb, Na.alpha);
                                            0 == Na.distorted && Ra.uniform1f(vb, 0);
                                            Md && Ra.disable(Ra.CULL_FACE);
                                            var zf = !1;
                                            "add" == za.blendmode && (zf = !0, Ra.blendFunc(Ra.SRC_ALPHA, Ra.ONE));
                                            Ra.drawElements(Zb, te.tcnt, Pb, 0);
                                            ha++;
                                            zf && (ec ? Ra.blendFuncSeparate(Ra.SRC_ALPHA, Ra.ONE_MINUS_SRC_ALPHA, Ra.ONE, Ra.ONE) : Ra.blendFunc(Ra.SRC_ALPHA, Ra.ONE_MINUS_SRC_ALPHA));
                                            Md && Ra.enable(Ra.CULL_FACE);
                                            le && fd(te, 1);
                                            0 == Na.distorted && Ra.uniform1f(vb, Pf)
                                        }
                                    }
                                } else ue && 0 < b && za.sprite && "none" != za.sprite.style.display && (za.sprite.style.display = "none");
                        ue && (ff || 1 == ab.mouse || d.ie) && O.hittesthotspots(null)
                    }
                }
    
                function Z() {
                    this.state = 0;
                    this.tex_uid = null;
                    this.tex_type = 0;
                    this.destroy = this.tex = this.tex_src = null
                }
    
                function X(a, b) {
                    this.uid = a;
                    this.cnt = 1;
                    this.tex = b
                }
    
                function k(a) {
                    var b = 0,
                        c = null,
                        k = a.loader,
                        e = Rb,
                        f = 0,
                        h = 0;
                    if (a.jsplugin) {
                        var c = a.getfullpath(),
                            g = a.posterDOM,
                            l = a.videoDOM;
                        g || l ? (gb = !0, b = 2, e = fc, g && l && d.chromemobile && 0 == l.currentTime && (l = null), l && (2 <= l.readyState || !0 === a.iPhoneMode) && 0 < l.videoWidth ? (k = l, f = l.videoWidth, h = l.videoHeight) : g && g.complete ? (k = g, f = g.naturalWidth, h = g.naturalHeight) : (k = null, a.requestUpdate())) : a._istextfield && (k = null, b = 3, g = a.renderToCanvas()) && (k = g, c = a._tf_id, f = g.width, h = g.height)
                    } else k && (c = k.src, f = k.naturalWidth, h = k.naturalHeight, !c || 1 > f || 1 > h ? k = null : b = 1);
                    if (!k) return null;
                    g = fa;
                    l = null;
                    if (l = Ec[c]) l.cnt++, l = l.tex, g.activeTexture(Mc), g.bindTexture(ia, l);
                    else {
                        g.activeTexture(Mc);
                        l = g.createTexture();
                        g.bindTexture(ia, l);
                        g.texParameteri(ia, g.TEXTURE_WRAP_T, g.CLAMP_TO_EDGE);
                        g.texParameteri(ia, g.TEXTURE_WRAP_S, g.CLAMP_TO_EDGE);
                        g.texParameteri(ia, g.TEXTURE_MAG_FILTER, xb);
                        var m = !1;
                        (1 == b || 3 == b) && a.DATA.mipmapping && 3 == (M(f) << 1 | M(h)) && (m = !0);
                        a.DATA.premultiplyalpha && fa.pixelStorei(fa.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
                        g.texParameteri(ia, g.TEXTURE_MIN_FILTER, m ? g.LINEAR_MIPMAP_LINEAR : xb);
                        2 == b && d.ios && 10 <= d.iosversion && fa.pixelStorei(fa.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
                        try {
                            L(a, e, k), m && g.generateMipmap(ia), Ec[c] = new X(c, l)
                        } catch (n) {
                            va(3, n)
                        }
                    }
                    a.GL.tex = l;
                    a.GL.tex_uid = c;
                    a.GL.tex_type = b;
                    a.GL.tex_src = k;
                    a.GL.destroy || (a.GL.destroy = function() {
                        T(a)
                    });
                    return l
                }
    
                function L(a, b, c) {
                    if (d.ie && !d.edge && "video" == c.localName) {
                        var k = c.videoWidth,
                            e = c.videoHeight,
                            f = a.DATA.tmpIECanvas;
                        null == f && (f = a.DATA.tmpIECanvas = Ha(2));
                        if (f.width != k || f.height != e) f.width = k, f.height = e;
                        f.getContext("2d").drawImage(c, 0, 0);
                        c = f
                    }
                    fa.texImage2D(ia, 0, b, b, id, c)
                }
    
                function T(a) {
                    if (a.GL) {
                        a.DATA.tmpIECanvas && (a.DATA.tmpIECanvas.width = a.DATA.tmpIECanvas.height = 1, a.DATA.tmpIECanvas = null);
                        var b = a.GL.tex_uid,
                            c = Ec[b];
                        c && 0 == --c.cnt && (fa.deleteTexture(c.tex), c.tex = null, Ec[b] = null, delete Ec[b]);
                        a.GL.tex = null;
                        a.GL.tex_uid = null;
                        a.GL.tex_type = 0;
                        a.GL.tex_src = null;
                        a.GL.destroy = null;
                        a.GL = null
                    }
                }
    
                function Q(a, b, c, d, k, e, f, g, h, l, m, n, p, L, q, Q, r) {
                    var u = ve;
                    ze(c, d, 0, 0, 0, 0, k, 0, 0, 0, 0, 1, 0, Q, r, 0, 1);
                    a ? ($c(c, f, g, 0), d = -l * S, b = Math.cos(d), d = Math.sin(d), k = c[0], e = c[1], c[0] = k * b - e * d, c[1] = k * d + e * b, k = c[4], e = c[5], c[4] = k * b - e * d, c[5] = k * d + e * b, k = c[8], e = c[9], c[8] = k * b - e * d, c[9] = k * d + e * b, k = c[12], e = c[13], c[12] = k * b - e * d, c[13] = k * d + e * b, ee(c, a), m = (m + 90) * S, n *= S, p += h * Math.cos(n) * Math.cos(m), q += h * Math.cos(n) * Math.sin(m), L += h * Math.sin(n), $c(c, p, L, q)) : (b & 1024 && ee(c, e), $c(c, f, g, h), fe(u, l, m, n, !1), ee(c, u), b & 2048 && $c(c, p, L, q))
                }
                var O = Za,
                    sa = 0,
                    ta = !1,
                    Da = 0,
                    bd = 0,
                    Hc = !1,
                    ca = !1,
                    pe = 0,
                    ga = 0,
                    gb = !1,
                    ja = 0,
                    Db = 0,
                    ha = 0,
                    wb = 0,
                    qa = 0,
                    nc = 0,
                    Lc = 0,
                    pa = 16.666,
                    ua = {},
                    Ia = [],
                    qb = 0,
                    Ca = 52428800,
                    Ea = !1,
                    pb = null,
                    Ma = !1,
                    Sb = !1,
                    ra = null,
                    fa = null,
                    na = null,
                    Eb = 0,
                    Oa = null,
                    Ga = null,
                    lb = null,
                    ec = !1,
                    $a = 1,
                    Ua = !1,
                    Ba = null,
                    kb = null;
                b = a = null;
                var La = [],
                    xa = null,
                    Xa = null,
                    Wa = !1,
                    ob = null,
                    Ya = null,
                    Qa = !1,
                    Ta = [],
                    cb, db, vb, Cb, rb, Ab, yb, zb, Mb = [1, 0, 0, 0, 1, 0, 0, 0, 0],
                    Vb = [1, 0, 0, 0, .5, 0, 0, 0, 0],
                    Wb = [1, 0, 0, 0, .5, .5, 0, 0, 0],
                    Xb = [.5, 0, 0, 0, 1, 0, 0, 0, 0],
                    dc = [.5, 0, .5, 0, 1, 0, 0, 0, 0],
                    ia, bb, mb, Mc, hb, $b, Rb, fc, id, Pb, pc, Zb, hd, xb, kc = [1, 3, 0, 2, 4, 5, 6],
                    Lb = "rotateY(90deg) ;;rotateY(-90deg) ;rotateY(180deg) ;rotateX(-90deg) ;rotateX(90deg) ;".split(";"),
                    Yc = "",
                    Fc = "",
                    cc = null;
                O.requiereredraw = !1;
                O.isloading = !1;
                O.setup = function(a) {
                    var b, c = null;
                    if (2 == a) {
                        var k = {};
                        if (0 <= G(lc.so.html5).indexOf(_[219]) || d.mac && d.firefox) k.preserveDrawingBuffer = !0;
                        if (d.mobile || d.ios) k.antialias = !1;
                        k.depth = !1;
                        k.stencil = !1;
                        var e = lc.so.webglsettings;
                        e && (!0 === e.preserveDrawingBuffer && (k.preserveDrawingBuffer = !0), !0 === e.depth && (k.depth = !0), !0 === e.stencil && (k.stencil = !0));
                        e = G(lc.so.wmode);
                        _[13] == e || _[167] == e ? (ec = !0, k.alpha = !0, k.premultipliedAlpha = !0) : k.alpha = !1;
                        try {
                            for (ra = Ha(2), ra.style.position = _[0], ra.style.left = 0, b = ra.style.top = 0; 4 > b && !(c = ra.getContext([_[64], _[105], _[136], _[140]][b], k)); b++);
                        } catch (f) {}
                        ra && c && (fa = c, na = {}, ia = c.TEXTURE_2D, bb = c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT | c.STENCIL_BUFFER_BIT, mb = c.FRAMEBUFFER, Mc = c.TEXTURE0, hb = c.ARRAY_BUFFER, $b = c.ELEMENT_ARRAY_BUFFER, Rb = c.RGBA, fc = c.RGB, id = c.UNSIGNED_BYTE, Pb = c.UNSIGNED_SHORT, pc = c.FLOAT, Zb = c.TRIANGLES, hd = c.STATIC_DRAW, xb = c.LINEAR, B() && (ec ? c.clearColor(0, 0, 0, 0) : w(1), c.disable(c.DEPTH_TEST), c.depthFunc(c.NEVER), c.enable(c.BLEND), c.blendFunc(c.SRC_ALPHA, c.ONE_MINUS_SRC_ALPHA), c.enable(c.CULL_FACE), c.cullFace(c.FRONT), Eb = c.getParameter(c.MAX_TEXTURE_SIZE), !d.desktop && 4096 < Eb && (Eb = 4096), 2048 >= Eb && d.firefox && !d.mac && !d.android && (d.css3d = !1), W.panolayer.appendChild(ra), O.infoString = _[489], p.webGL = {
                            canvas: ra,
                            context: c,
                            ppShaderArray: Ta,
                            createShader: h,
                            createPostProcessingShader: x,
                            deleteShader: n,
                            useShader: D,
                            restoreProgram: ub,
                            ppshaders: Ta,
                            createppshader: x,
                            useProgram: D
                        }, Ma = !0));
                        0 == Ma && (na = fa = ra = null, a = 1)
                    }
                    1 == a && (O.infoString = _[491], d.webgl = !1);
                    sa = d.browser.css.tileoverlap | 0;
                    if (6 < d.iosversion || d.mac && "7" <= d.safariversion) ta = !0;
                    d.multiressupport = d.androidstock && 0 == d.webgl ? !1 : !0;
                    (a = d.webgl) && d.android && d.androidstock && (a = !1);
                    9 <= d.iosversion && document.addEventListener(_[31], g, !1);
                    d.panovideosupport = a;
                    d.buildList()
                };
                O.getMaxTexSize = function() {
                    return Eb
                };
                O.reset = function() {
                    ja = 0
                };
                var Nb = {},
                    Ob = null,
                    Bc = null;
                O.unload = function() {
                    var c;
                    p.webGL && (p.webGL.canvas = null, p.webGL.context = null, p.webGL = null);
                    var d = fa;
                    if (d && na) {
                        d.bindTexture(ia, null);
                        d.bindBuffer(hb, null);
                        d.bindBuffer($b, null);
                        d.bindFramebuffer(mb, null);
                        Qa = !1;
                        n(Ga);
                        n(lb);
                        lb = Ga = null;
                        na.obj0 && (q(na.obj0), q(na.obj));
                        na.objS && q(na.objS);
                        na = null;
                        for (c = 0; 6 > c; c++) La[c] && La[c].prg && (d.deleteProgram(La[c].prg), La[c].prg = null, La[c] = null);
                        d.deleteBuffer(a);
                        d.deleteBuffer(b);
                        var k = [Ba, kb, ob, Ya];
                        for (c = 0; c < k.length; c++) k[c] && (k[c].fb && d.deleteFramebuffer(k[c].fb), k[c].tex && d.deleteTexture(k[c].tex), k[c] = null)
                    }
                    Ma = !1;
                    fa = ra = null
                };
                O.size = function(a, b) {
                    if (Ma) {
                        var c = (d.android && 0 == d.androidstock || d.blackberry || d.silk || d.mac) && 0 == d.hidpi ? d.pixelratio : 1;
                        if (d.desktop || d.ios || d.ie) c = U.devicePixelRatio;
                        isNaN(c) && (c = 1);
                        if (!d.desktop && 1 != c) a: {
                            var k = c,
                                c = [320, 360, 400, 480, 640, 720, 768, 800, 1024, 1080, 1280, 1366, 1440, 1920, 2560],
                                e, f, g = a * k;f = c.length;
                            for (e = 0; e < f; e++)
                                if (2 > Math.abs(c[e] - g)) {
                                    c = c[e] / a;
                                    break a
                                } c = k
                        }
                        c *= 1;
                        k = a * c + .25 | 0;
                        c = b * c + .25 | 0;
                        if (e = p.webVR)
                            if (e = e.getsize(k, c)) k = e.w, c = e.h;
                        k *= ka.framebufferscale;
                        c *= ka.framebufferscale;
                        ra.style.width = a + "px";
                        ra.style.height = b + "px";
                        if (ra.width != k || ra.height != c || 0 == Sb) {
                            Sb = !0;
                            ra.width = k;
                            ra.height = c;
                            fa.bindFramebuffer(mb, null);
                            Qa = !1;
                            e = fa.drawingBufferWidth | 0;
                            f = fa.drawingBufferHeight | 0;
                            d.desktop && d.chrome && 300 == e && 150 == f && (e = f = 0);
                            if (0 >= e || 0 >= f) e = k, f = c;
                            fa.viewport(0, 0, e, f);
                            d.gl = {
                                width: e,
                                height: f
                            }
                        }
                    } else d.gl = {
                        width: 0,
                        height: 0
                    }
                };
                O.fps = function() {
                    var a = Pa();
                    if (0 < Lc) {
                        var c = a - Lc;
                        if (5 < c && 500 > c) {
                            var b = Math.min(c / 160, .75);
                            pa = pa * (1 - b) + c * b;
                            0 < pa && (me = 1E3 / pa, ka.currentfps = me)
                        }
                        0 == wb && (ka.r_ft = .9 * ka.r_ft + .1 * c)
                    }
                    Lc = a
                };
                var Uc = !1;
                O.startFrame = function() {
                    gb = !1;
                    ha = Db = 0;
                    Uc = !0;
                    Ca = p.memory.maxmem << 20;
                    if (Ma) {
                        var a = fa;
                        (Wa = 0 < Ta.length) ? (a.clear(bb), ob = u(ob), 0 == Qa && (Qa = !0, a.bindFramebuffer(mb, ob.fb)), a.clear(bb), ha = 0) : (Qa && (Qa = !1, a.bindFramebuffer(mb, null)), a.clear(bb))
                    }
                };
                O.finishFrame = function() {
                    ja++;
                    wb = 0;
                    if (Ma) {
                        var a = fa;
                        if (Wa) {
                            var c, b = Ta.length,
                                k = ob,
                                e = null;
                            1 < b && (e = Ya = u(Ya));
                            a.disable(a.BLEND);
                            for (c = 0; c < b; c++) k.drawcalls = ha, ha = 0, e ? (a.bindFramebuffer(mb, e.fb), Qa = !0) : (a.bindFramebuffer(mb, null), Qa = !1), a.clear(bb), z(k, Ta[c], 1), k = e, e = c + 1 == b - 1 ? null : c & 1 ? Ya : ob;
                            a.enable(a.BLEND);
                            a.bindFramebuffer(mb, ob.fb);
                            Qa = !0
                        } else Qa && (Qa = !1, a.bindFramebuffer(mb, null));
                        d.androidstock && a.finish()
                    }
                    p.memory.usage = qb >> 20;
                    Uc = !1
                };
                O.createPano = function(a) {
                    return new E(a)
                };
                var zc = 0,
                    oc = 0,
                    Tb = 0,
                    ud = Ja(),
                    Ib = Ja(),
                    bc = Ja(),
                    Vc = Ja(),
                    wc = Ja(),
                    rd = Ja(),
                    xc = Ja(),
                    Ic = Ja(),
                    Jc = Ja(),
                    jd = Ja(),
                    mc = Ja();
                O.setblendmode = function(a) {
                    if (Ma) {
                        var c = fa;
                        xa = null;
                        var b = !0,
                            k = null,
                            e = null,
                            f = 1,
                            g = V.parseFunction(a);
                        if (g) switch (g[0].toUpperCase()) {
                            case "BLEND":
                                (k = g[2]) || (k = _[395]);
                                xa = La[0];
                                break;
                            case _[427]:
                                e = Number(g[2]);
                                f = Number(g[3]);
                                (k = g[4]) || (k = _[393]);
                                isNaN(e) && (e = 16777215);
                                isNaN(f) && (f = 2);
                                xa = La[1];
                                D(xa.prg);
                                break;
                            case _[430]:
                                e = Number(g[2]);
                                (k = g[3]) || (k = _[391]);
                                isNaN(e) && (e = 0);
                                xa = La[2];
                                D(xa.prg);
                                break;
                            case _[431]:
                                var b = !1,
                                    h = Number(g[2]);
                                a = Number(g[3]);
                                k = g[4];
                                isNaN(h) && (h = 0);
                                isNaN(a) && (a = .2);
                                a = 0 > a ? 0 : 1 < a ? 1 : a;
                                k || (k = _[61]);
                                var l = g = 0,
                                    m = Math.cos(h * S),
                                    n = Math.sin(h * S);
                                0 > n && (l = 1, h += 90);
                                0 > m && (g = 1, h += 0 > n ? 90 : -90);
                                h = Math.sqrt(2) * Math.cos((45 - h) * S);
                                m *= h;
                                n *= h;
                                h = 1 / (m * m + n * n);
                                xa = La[4];
                                D(xa.prg);
                                c.uniform3f(xa.fp, m * h, n * h, (-g * m - l * n) * h);
                                c.uniform1f(xa.bl, .5 * a);
                                break;
                            case _[476]:
                                b = !1;
                                a = Number(g[2]);
                                (k = g[3]) || (k = _[324]);
                                isNaN(a) && (a = 2);
                                xa = La[3];
                                D(xa.prg);
                                c.uniform2f(xa.ct, .5, .5);
                                c.uniform1f(xa.zf, a);
                                break;
                            case _[472]:
                                b = !1, a = Number(g[2]), h = Number(g[3]), l = Number(g[4]), (k = g[5]) || (k = _[61]), isNaN(a) && (a = .2), isNaN(h) && (h = .2), isNaN(l) && (l = 0), a = -1 > a ? -1 : 1 < a ? 1 : a, h = 0 > h ? 0 : 1 < h ? 1 : h, l = 0 > l ? 0 : 1 < l ? 1 : l, g = d.gl.width / d.gl.height, m = 1, isNaN(g) && (g = 1), g *= g, 0 > a ? g *= 1 + a : m *= 1 - a, xa = La[5], D(xa.prg), c.uniform2f(xa.ap, g, m), c.uniform1f(xa.bl, .5 * h), c.uniform1f(xa.zf, l)
                        }
                        if (null == xa || 0 == b && ka.stereo) xa = La[0], e = null;
                        null !== e && c.uniform3f(xa.cc, f * (e >> 16 & 255) / 255, f * (e >> 8 & 255) / 255, f * (e & 255) / 255);
                        null == k && (k = _[61]);
                        Xa = yc.getTweenfu(k);
                        Ua = 0 == d.realDesktop && 1 < d.pixelratio || 33 < ka.r_ft
                    }
                };
                O.snapshot = function(a, c) {
                    if (Ma) {
                        var b = fa;
                        if (!d.gl) return null;
                        if (a) {
                            var k = Ba;
                            Ba = kb;
                            kb = k
                        }
                        Ua && ($a = .707);
                        kb = u(kb);
                        b.bindFramebuffer(mb, kb.fb);
                        Qa = !0;
                        ha = 0;
                        ec && w(1);
                        b.clear(bb);
                        k = 0;
                        c && (k = Uc, Uc = !0, O.renderpano(c, 1), Uc = k, k = 1 - c.alpha);
                        a && z(Ba, xa, c ? 1 - c.alpha : a.alpha) && ha++;
                        kb.drawcalls = ha;
                        Wa ? (b.bindFramebuffer(mb, ob.fb), Qa = !0) : (b.bindFramebuffer(mb, null), Qa = !1);
                        $a = 1;
                        null == a && (a = {});
                        a.alpha = k;
                        return a
                    }
                    return null
                };
                O.rendersnapshot = function(a, c) {
                    if (0 == Uc) return a;
                    if (null == fa || null == kb || c && 1 <= c.alpha) return null;
                    var b = a.alpha = c ? 1 - c.alpha : a.alpha;
                    z(kb, xa, b);
                    return a
                };
                O.renderpano = function(a, c) {
                    if (0 != Uc) {
                        a.frame = ja;
                        var b = !1,
                            k = fa;
                        if (2 == c && k) {
                            if (a.stopped && Ba && Ba.done && Ba.pano == a.id) {
                                Ba.have = !0;
                                return
                            }
                            Ua && ($a = .707);
                            if (Ba = u(Ba)) b = !0, Ba.have = !0, Ba.pano = a.id, Ba.done = !1, Ba.alpha = a.alpha, Ba.drawcalls = 0, k.bindFramebuffer(mb, Ba.fb), Qa = !0, w(1), k.clear(bb)
                        }
                        var e = a.panoview = a.stopped && a.panoview ? a.panoview : r.getState(a.panoview),
                            f = Number(e.h) + Number(a.image.viewoffset),
                            g = e.v,
                            h = e.r,
                            l = e.z,
                            m = a.hasmoved = f != zc || g != oc || l != Tb;
                        l != Tb && (Ea = !1);
                        var n = Pa();
                        if (m) {
                            if ("auto" == G(ka.loadwhilemoving)) {
                                var L = n - Wc;
                                200 < n - bd && 0 == F.down && 200 < L && (Hc = !0)
                            }
                            Da = n
                        } else 10 > n - Da && (a.hasmoved = m = !0);
                        gb = m;
                        zc = f;
                        oc = g;
                        Tb = l;
                        m = ud;
                        l = Ib;
                        Ae(m, f, g, h);
                        Rd(Vc, m);
                        Fc = "";
                        cc = null;
                        a.image && a.image.prealign && (h = ("" + a.image.prealign).split("|"), 3 == h.length && (f = Number(h[0]), g = -Number(h[1]), h = -Number(h[2]), isNaN(f) || isNaN(g) || isNaN(h) || (Fc = _[147] + g.toFixed(4) + _[323] + h.toFixed(4) + _[322] + f.toFixed(4) + "deg) ", cc = bc, Be(l, m), m = Vc, l = wc, Rd(m, ud), fe(cc, f, g, h, !1), Ye(m, cc))));
                        Be(l, m);
                        f = (d.android && 0 == d.androidstock || d.blackberry || d.ios) && 0 == d.hidpi ? d.pixelratio : 1;
                        d.ios && d.retina && (f = 1.5);
                        1.4 < f && (f = 1.4);
                        h = 1 / (e.z / (.5 * Fa));
                        g = e.zf;
                        200 < g && (h = Math.atan(h), g = Math.min(h + Math.asin(g / 1E3 * Math.sin(h)), 1), isNaN(g) && (g = 1), h = Math.tan(g));
                        .5 > h && (f = 1);
                        d.desktop && (f = d.pixelratio);
                        f = .25 * Ka * (Sa * f / Math.sin(Math.atan(Sa / Fa * h)) + Fa * f / h);
                        0 == a.type ? f *= 2 / Ka : 1 == a.type && (g = a.levels, f *= 2 / Ka, f *= Math.tan(.5 * g[g.length - 1].vfov * S));
                        h = f;
                        f = 0;
                        m = a.levels;
                        g = m.length;
                        n = 1 + (K ? parseFloat(K.multiresthreshold) : 0);
                        isNaN(n) && (n = 1);
                        .1 > n && (n = .1);
                        h = Math.ceil(h * n);
                        if (0 < g) {
                            for (; !(0 == m[f].preview && m[f].h >= h);)
                                if (f++, f >= g) {
                                    f = g - 1;
                                    break
                                } Ea && 0 < f && --f;
                            h = p.lockmultireslevel;
                            _[535] == G(h) && (p.lockmultireslevel = h = "" + f);
                            h |= 0;
                            0 <= h && h < g && (f = h);
                            a.currentlevel != f && (a.currentlevel = f)
                        }
                        1 == c && (f = a.currentlevel, p.multireslevel = 0 < f && a.levels[0].preview ? f - 1 : f);
                        a: {
                            m = l;l = e.zf;h = 1 / (e.z / (.5 * Ac));
                            if (0 < l && (f = Math.atan(h), h = Math.tan(f + Math.asin(l / 1E3 * Math.sin(f))), isNaN(h) || 0 >= h)) {
                                e.vr = Xc;
                                break a
                            }
                            n = h * Fa / Sa;L = e.yf / Fa * 2 * n;l = [h, n + L, -1];f = [-h, n + L, -1];g = [-h, -n + L, -1];h = [h, -n + L, -1];ge(m, l);ge(m, f);ge(m, g);ge(m, h);
                            for (var q, n = 1, Q = null, L = Array(40), x = [null, null, null, null, null, null], m = 0; 6 > m; m++) {
                                var t = [],
                                    T = [];
                                t.push(Y(l, tc[m]));
                                t.push(Y(f, tc[m]));
                                t.push(Y(g, tc[m]));
                                t.push(Y(h, tc[m]));
                                var O = 0,
                                    v = 0,
                                    D = 0,
                                    E = 0;
                                for (q = v = 0; 4 > q; q++) Q = t[q], v = Q.x, D = Q.y, E = Q.z / 2, v = 1 * (v > -E) + 8 * (v < E) + 64 * (D < E) + 512 * (D > -E) + 4096 * (-.1 > -E), L[q] = v, O += v;
                                q = 0 != (O & 18724);
                                if (0 == O)
                                    for (q = 0; 4 > q; q++) Q = t[q], T.push(Q.x / Q.z), T.push(Q.y / Q.z);
                                else if (q) continue;
                                else {
                                    for (var O = 4, Q = L, y = 0, C = [], A = [], B, sa = 0, sa = 0; 5 > sa; sa++) {
                                        var H = 1 << 3 * sa;
                                        for (q = 0; q < O; q++) {
                                            var D = (q + O - 1) % O,
                                                v = t[D],
                                                ta = t[q],
                                                D = Q[D],
                                                I = Q[q],
                                                J = 0;
                                            0 == (I & H) ? (J |= 2, D & H && (J |= 1)) : 0 == (D & H) && (J |= 1);
                                            J & 1 && (4 == sa ? n = (.1 - v.z / 2) / (ta.z - v.z) / 2 : 3 == sa ? n = (-v.y - v.z / 2) / (ta.y - v.y + (ta.z - v.z) / 2) : 2 == sa ? n = (v.z / 2 - v.y) / (ta.y - v.y - (ta.z - v.z) / 2) : 1 == sa ? n = (v.z / 2 - v.x) / (ta.x - v.x - (ta.z - v.z) / 2) : 0 == sa && (n = (-v.z / 2 - v.x) / (ta.x - v.x + (ta.z - v.z) / 2)), B = new Gc, B.x = v.x + (ta.x - v.x) * n, B.y = v.y + (ta.y - v.y) * n, B.z = v.z + (ta.z - v.z) * n, v = B.x, D = B.y, E = B.z / 2, v = 1 * (v > -E) + 8 * (v < E) + 64 * (D < E) + 512 * (D > -E) + 4096 * (-.1 > -E), C.push(B), A.push(v), y++);
                                            J & 2 && (C.push(ta), A.push(I), y++)
                                        }
                                        O = y;
                                        t = C;
                                        Q = A;
                                        y = 0;
                                        C = [];
                                        A = []
                                    }
                                    for (q = 0; q < O; q++) Q = t[q], T.push(Q.x / Q.z), T.push(Q.y / Q.z)
                                }
                                t = O = 9;
                                y = Q = -9;
                                C = T.length;
                                if (4 < C) {
                                    for (q = 0; q < C; q++) T[q] += .5;
                                    for (q = 0; q < C; q += 2) T[q + 0] < O && (O = T[q + 0]), T[q + 1] < t && (t = T[q + 1]), T[q + 0] > Q && (Q = T[q + 0]), T[q + 1] > y && (y = T[q + 1]);
                                    O > Q || 0 > O && 0 > Q || 1 < O && 1 < Q || t > y || 0 > t && 0 > y || 1 < t && 1 < y || (0 > O && (O = 0), 0 > t && (t = 0), 1 < Q && (Q = 1), 1 < y && (y = 1), x[m] = [O, t, Q, y])
                                }
                            }
                            e.vr = x
                        }
                        na && (ec ? (k.clearColor(0, 0, 0, 0), k.blendEquationSeparate(k.FUNC_ADD, k.FUNC_ADD), k.blendFuncSeparate(k.SRC_ALPHA, k.ONE_MINUS_SRC_ALPHA, k.ONE, k.ONE)) : k.blendFunc(k.SRC_ALPHA, k.ONE_MINUS_SRC_ALPHA));
                        ka.stereo ? (P(a, 1), P(a, 2)) : P(a, 0);
                        e = 0;
                        l = a.levels;
                        f = l.length;
                        p.downloadlockedlevel && 0 < (p.lockmultireslevel | 0) && (e = p.lockmultireslevel | 0, e >= f && (e = f - 1));
                        0 < f && (e = l[e], cd.progress = e.stereo && ka.stereo ? (e.loadedtiles[0] + e.loadedtiles[1]) / (2 * e.totaltiles) : e.loadedtiles[0] / e.totaltiles);
                        b && (Wa ? (k.bindFramebuffer(mb, ob.fb), Qa = !0) : (k.bindFramebuffer(mb, null), Qa = !1), k.clear(bb), Ba.drawcalls = ha, Ba.done = !0, $a = 1);
                        1 == c && k && Ba && 0 < Ba.drawcalls && Ba.done && Ba.have && (Ba.have = !1, z(Ba, xa, 1 - vc))
                    }
                };
                O.handleloading = function() {
                    return gb ? 2 : 0
                };
                var Kc = [
                        [0, 180],
                        [0, 90],
                        [0, 0],
                        [0, 270],
                        [-90, 90],
                        [90, 90]
                    ],
                    fd = function() {
                        function a(c, b) {
                            var d, k = 8 * (b + 1);
                            d = 4 * (b + 1);
                            var e = new Float32Array(12 * (b + 1)),
                                f = new Float32Array(k),
                                g = new Uint16Array(d),
                                h, l, m, n;
                            c *= 2;
                            for (h = d = k = 0; 4 > h; h++)
                                for (l = 0; l <= b; l++) 0 == h ? (m = l, n = 0) : 1 == h ? (m = b, n = l) : 2 == h ? (m = b - l, n = b) : (m = 0, n = b - l), m /= b, n /= b, f[k] = m, f[k + 1] = n, k += 2, e[d] = c * (m - .5), e[d + 1] = c * (n - .5), e[d + 2] = 0, d += 3;
                            for (l = d = 0; l < 4 * (b + 1); l++) g[d] = l, d += 1;
                            return new t(d, e, f, g)
                        }
                        var c = null,
                            b = null,
                            d = null;
                        return function(k, e) {
                            var f = fa;
                            null == c && (c = f.createTexture(), f.bindTexture(ia, c), f.texParameteri(ia, f.TEXTURE_WRAP_T, f.CLAMP_TO_EDGE), f.texParameteri(ia, f.TEXTURE_WRAP_S, f.CLAMP_TO_EDGE), f.texParameteri(ia, f.TEXTURE_MAG_FILTER, f.NEAREST), f.texParameteri(ia, f.TEXTURE_MIN_FILTER, f.NEAREST), f.texImage2D(ia, 0, f.RGB, 1, 1, 0, f.RGB, id, new Uint8Array([0, 255, 0])), b = a(500, 1), d = a(500, 19), v(b), v(d), gb = !0);
                            var g = null;
                            if (g = k === na.obj0 ? b : k === na.obj ? d : k) f.bindBuffer(hb, g.vx), f.vertexAttribPointer(cb, 3, pc, !1, 0, 0), f.bindBuffer(hb, g.tx), f.vertexAttribPointer(db, 2, pc, !1, 0, 0), f.bindBuffer($b, g.ix), f.uniform1f(rb, e), f.bindTexture(ia, c), f.drawElements(f.LINE_LOOP, g.tcnt, Pb, 0), f.bindBuffer(hb, k.vx), f.vertexAttribPointer(cb, 3, pc, !1, 0, 0), f.bindBuffer(hb, k.tx), f.vertexAttribPointer(db, 2, pc, !1, 0, 0), f.bindBuffer($b, k.ix), f.uniform1f(rb, 1)
                        }
                    }(),
                    tc = [
                        [-1, 0, 0, 0, 1, 0, 0, 0, 1],
                        [0, 0, 1, 0, 1, 0, 1, 0, 0],
                        [1, 0, 0, 0, 1, 0, 0, 0, -1],
                        [0, 0, -1, 0, 1, 0, -1, 0, 0],
                        [0, 0, 1, -1, 0, 0, 0, 1, 0],
                        [0, 0, 1, 1, 0, 0, 0, -1, 0]
                    ],
                    Xc = [
                        [0, 0, 1, 1],
                        [0, 0, 1, 1],
                        [0, 0, 1, 1],
                        [0, 0, 1, 1],
                        [0, 0, 1, 1],
                        [0, 0, 1, 1]
                    ],
                    Ec = {},
                    sb = Ja(),
                    ve = Ja();
                O.hittesthotspots = function(a) {
                    if (_[35] == a) {
                        if (Qb) return Qb.process_onup(Qb, !0), Qb = null, !0
                    } else if (_[38] == a && Qb) return Qb.process_onup(Qb, !1), Qb = null, !0;
                    var c = p.webVR,
                        b = c && c.enabled,
                        c = b ? c.getcursor() : null,
                        d = Bb.getArray(),
                        k = d.length,
                        e, f = [0, 0, 1],
                        g = !1,
                        h = !1,
                        l = c ? c.depth : 2E3,
                        m = c && c.enabled;
                    if (!b) {
                        m = !0;
                        b = F.x * da;
                        e = F.y * da;
                        if (ka.stereo) {
                            var f = Sa >> 1,
                                n = f * Number(ka.stereooverlap);
                            b < f ? b = b + (f >> 1) - (n >> 1) : (b -= f >> 1, b += n >> 1)
                        }
                        f = r.inverseProject(b, e);
                        f = [-f.x, -f.y, -f.z];
                        if (Jb) {
                            if (n = Jb.hovering) a: {
                                n = Jb;
                                if (ea.elementsFromPoint && (b = ea.elementsFromPoint(b, e))) {
                                    var q = b.length;
                                    for (e = 0; e < q; e++)
                                        if (b[e].kobject === n) {
                                            n = !0;
                                            break a
                                        } n = !1;
                                    break a
                                }
                                n = !0
                            }
                            0 == n && (Jb = null)
                        }
                    }
                    b = f;
                    e = b[0];
                    n = b[1];
                    q = b[2];
                    b[0] = e * Ib[0] + n * Ib[4] + q * Ib[8] + Ib[12];
                    b[1] = e * Ib[1] + n * Ib[5] + q * Ib[9] + Ib[13];
                    b[2] = e * Ib[2] + n * Ib[6] + q * Ib[10] + Ib[14];
                    if (null == Jb)
                        for (--k; 0 <= k; k--)
                            if ((b = d[k]) && b._ready && (0 != b.haschanged_flags && b.processUpdates(), e = b.DATA, e.visible && b !== c && (0 != e.reloading || b.loaded && b.GL && 0 != b.GL.state) && m && e.enabled)) {
                                var L = b.MX,
                                    n = 0,
                                    q = 1E3,
                                    Q = f[0],
                                    t = f[1],
                                    T = f[2],
                                    u = q * L[0],
                                    O = q * L[1],
                                    x = q * L[2],
                                    v = q * L[4],
                                    w = q * L[5],
                                    D = q * L[6],
                                    E = L[12] - (u + v) / 2,
                                    y = L[13] - (O + w) / 2,
                                    L = L[14] - (x + D) / 2,
                                    C = t * D - T * w,
                                    B = T * v - Q * D,
                                    A = Q * w - t * v,
                                    sa = u * C + O * B + x * A;
                                if (-1E-6 > sa || 1E-6 < sa) sa = 1 / sa, q = (E * C + y * B + L * A) * -sa, 0 <= q && 1 >= q && (C = L * O - y * x, B = E * x - L * u, A = y * u - E * O, q = (Q * C + t * B + T * A) * sa, 0 <= q && 1 >= q && (n = (v * C + w * B + D * A) * sa));
                                if (1 < n) {
                                    null == a && b != ib && (null != ib && (ib.hovering = !1, V.callaction(ib.onout, ib), c && V.callaction(c.onout, ib), ib.DATA.onovercrop && (nb = !0), ib = null), ib = b, b.hovering = !0, e.onovercrop && (nb = !0), V.isblocked() || (V.callaction(b.onover, b), c && V.callaction(c.onover, b)));
                                    g = !0;
                                    l = n;
                                    _[46] == a && (Qb = b, b.process_ondown(b), b.capture && (h = !0));
                                    break
                                }
                            } null == a && (c && (l = Math.max(l, 200) - 100, c.hit_depth = l), 0 == g && null != ib && (ib.DATA.onovercrop && (nb = !0), ib.hovering = !1, V.callaction(ib.onout, ib), c && V.callaction(c.onout, ib), ib = null), je.update());
                    return g && h
                }
            })();
            var Hf = function() {
                    function a(a, d, g) {
                        a = G(a).charCodeAt(0);
                        return 118 == a ? g : 104 == a ? d : 100 == a ? Math.sqrt(d * d + g * g) : Math.max(d, g * b.mfovratio)
                    }
                    var b = this;
                    b.haschanged = !1;
                    b.r_rmatrix = Ja();
                    (function() {
                        var a = "hlookat vlookat camroll fov maxpixelzoom fisheye fisheyefovlink architectural tx ty tz".split(" "),
                            d = [_[326], _[213]],
                            g;
                        for (g in a) Oa(b, a[g], 0);
                        for (g in d) Oa(b, d[g], !1);
                        Oa(b, _[547], "VFOV");
                        b.continuousupdates = !1;
                        Wa(b, _[554], function() {
                            return "" + b._pannini
                        }, function(a) {
                            var d = Number(a),
                                d = isNaN(d) ? la(a) ? 1 : 0 : 0 > d ? 0 : 1 < d ? 1 : d;
                            b._pannini = d;
                            b.haschanged = !0
                        });
                        Wa(b, _[434], function() {
                            return b._fisheye
                        }, function(a) {
                            b.fisheye = a
                        });
                        Wa(b, _[255], function() {
                            return b._fisheyefovlink
                        }, function(a) {
                            b.fisheyefovlink = a
                        });
                        Wa(b, _[371], function() {
                            if ("off" == G(b.limitview)) return 360;
                            var a = b.hlookatmax,
                                d = b.hlookatmin,
                                e = M && M.fovlimits;
                            isNaN(d) && (d = e ? e[0] : -180);
                            isNaN(a) && (a = e ? e[1] : 180);
                            return a - d
                        }, function(a) {});
                        Wa(b, _[372], function() {
                            if ("off" == G(b.limitview)) return 180;
                            var a = b.vlookatmax,
                                d = b.vlookatmin,
                                e = M && M.fovlimits;
                            isNaN(d) && (d = e ? e[2] : -90);
                            isNaN(a) && (a = e ? e[3] : 90);
                            return a - d
                        }, function(a) {})
                    })();
                    b.defaults = function() {
                        b._hlookat = 0;
                        b._vlookat = 0;
                        b._architectural = 0;
                        b._architecturalonlymiddle = !0;
                        b._fov = 90;
                        b._fovtype = d.desktop ? "VFOV" : "MFOV";
                        b._camroll = 0;
                        b.mfovratio = 4 / 3;
                        b._maxpixelzoom = Number.NaN;
                        b._stereographic = !0;
                        b._pannini = 0;
                        b._fisheye = 0;
                        b._fisheyefovlink = .5;
                        b.fovmin = 1;
                        b.fovmax = 179;
                        b.r_zoom = 1;
                        b.r_yoff = 0;
                        b.r_zoff = 0;
                        b.haschanged = !1;
                        b.limitview = "auto";
                        b.hlookatmin = Number.NaN;
                        b.hlookatmax = Number.NaN;
                        b.vlookatmin = Number.NaN;
                        b.vlookatmax = Number.NaN;
                        b._limits = null
                    };
                    b.inverseProject = function(a, d) {
                        var g, h, p, r, w, B, q, t;
                        p = -1E3;
                        w = p / b.r_zoom;
                        g = (a - Sa / 2) * w;
                        h = (d - Fa / 2 - b.r_yoff) * w;
                        w = 1 / Math.sqrt(g * g + h * h + p * p);
                        g *= w;
                        h *= w;
                        p *= w;
                        r = b.r_zoff;
                        0 < r && (B = b._pannini, 0 < B && (w = g * g + p * p, 0 != w && (w = 1 + B * (1 / Math.sqrt(w) - 1), g *= w, h *= w, p *= w)), 0 == b._stereographic && (t = Math.atan(1E3 / r) / S - 1, (1 > -p ? Math.acos(-p) / S : 0) > t && (B = -h, q = g, w = B * B + q * q, 0 < w && (w = 1 / Math.sqrt(w), B *= w, q *= w), t *= S, w = Math.sin(t), g = w * q, h = -w * B, p = -Math.cos(t))), B = r * p, q = B * B - (r * r - 1E6), 0 < q && (w = -B + Math.sqrt(q), g *= w, h *= w, p = p * w - -r, w = 1 / Math.sqrt(g * g + h * h + p * p), g *= w, h *= w, p *= w));
                        r = new Gc;
                        r.x = g;
                        r.y = h;
                        r.z = p;
                        return r
                    };
                    var p = b.fovRemap = function(b, d, g, h, p) {
                            h || (h = Sa);
                            p || (p = Fa);
                            b = Math.tan(b / 360 * Ka);
                            d = a(d, h, p);
                            g = a(g, h, p);
                            return b = 360 * Math.atan(b * g / d) / Ka
                        },
                        g = Ja();
                    b.screentosphere = function(a, d) {
                        var n = new Gc;
                        if (ka.stereo) {
                            var h = Sa / 2,
                                p = h / 2 * (1 - Number(ka.stereooverlap));
                            a = a < h ? a + p : a - p
                        }
                        h = b.inverseProject(a * da, d * da);
                        Be(g, b.r_rmatrix);
                        Sd(g, h);
                        h = [Math.atan2(h.x, h.z) / S + 270, Math.atan2(-h.y, Math.sqrt(h.x * h.x + h.z * h.z)) / S];
                        180 < h[0] && (h[0] -= 360);
                        n.x = h[0];
                        n.y = h[1];
                        n.z = 0;
                        return n
                    };
                    b.spheretoscreen = function(a, d, g) {
                        var h = new Gc;
                        a = (180 - a) * S;
                        d *= S;
                        h.x = 1E3 * Math.cos(d) * Math.cos(a);
                        h.z = 1E3 * Math.cos(d) * Math.sin(a);
                        h.y = 1E3 * Math.sin(d);
                        Sd(b.r_rmatrix, h);
                        d = h.z + b.r_zoff;
                        var p = a = Jc;
                        10 <= d && (d = b.r_zoom / d, a = (h.x * d + .5 * Sa) / da, p = (h.y * d + .5 * Fa) / da + b.r_yoff, ka.stereo && g && ("l" == g ? a -= Sa / 4 * (1 - Number(ka.stereooverlap)) : "r" == g && (a += Sa / 4 * (1 - Number(ka.stereooverlap)))));
                        h.x = a;
                        h.y = p;
                        return h
                    };
                    b.updateView = function() {
                        var a = b._maxpixelzoom;
                        if (!isNaN(a) && 0 != a) {
                            var g = 1E-6;
                            if (M && M.ready) {
                                var n = M.vres,
                                    h = M.vfov;
                                0 == M.type && (n = n * Math.PI * .5);
                                if (50 < n && 0 < h) {
                                    var g = Sa,
                                        x = Fa,
                                        a = 360 / Math.PI * Math.atan(Math.tan(2 * Math.atan(1 / (2 / Math.PI * n * a / (h / 180) / (.5 * g)))) / (g / x));
                                    if (isNaN(a) || 1E-4 > a) a = b.fovmax;
                                    90 < a && (a = 90);
                                    g = p(a, "VFOV", b._fovtype)
                                }
                            }
                            b.fovmin = g
                        }
                        var a = b._fov,
                            n = b._hlookat,
                            h = b._vlookat,
                            g = b._camroll,
                            F = d.webgl ? b._fisheye : 0,
                            D = b._fisheyefovlink,
                            B = b._stereographic,
                            x = 0,
                            q = 0 == ga.bouncinglimits || 0 == ab.isBouncing();
                        q && (a < b.fovmin && (a = b.fovmin), a > b.fovmax && (a = b.fovmax));
                        179 < a && (a = 179);
                        if (0 < F) {
                            var t = p(a, b._fovtype, "VFOV");
                            B ? (170 < a && (a = 170), x = 1E3 * F * Math.sin(Math.pow(Math.min(t / 130, 1), 2 * D) * Ka * .5)) : (F += Math.pow(Math.min(F, 1), 10) / 10, x = F * Math.sin(Math.pow(t / 180, D) * Ka * .5), x *= 3E3 * x)
                        }
                        var v = G(b.limitview),
                            f = M && M.fovlimits,
                            u = 0,
                            z = 0,
                            C = 0,
                            D = Number(b.hlookatmin),
                            t = Number(b.hlookatmax),
                            y = Number(b.vlookatmin),
                            A = Number(b.vlookatmax);
                        "auto" == v && (D = t = y = A = Number.NaN);
                        isNaN(D) && (D = f ? f[0] : -180);
                        isNaN(t) && (t = f ? f[1] : 180);
                        isNaN(y) && (y = f ? f[2] : -90);
                        isNaN(A) && (A = f ? f[3] : 90);
                        "auto" == v && (r.hlookatmin = D, r.hlookatmax = t, r.vlookatmin = y, r.vlookatmax = A, v = "range");
                        A < y && (f = y, y = A, A = f);
                        t < D && (f = D, D = t, t = f);
                        var l = !1,
                            c = !1,
                            H = _[143] != v,
                            E = !0,
                            E = 180,
                            f = t - D,
                            J = A - y;
                        switch (v) {
                            case "off":
                            case _[27]:
                                f = 360;
                                D = -180;
                                t = 180;
                                y = -1E5;
                                A = 1E5;
                                H = !1;
                                break;
                            case _[460]:
                                H = !0;
                            case _[143]:
                                c = !0;
                            case "range":
                                if ((l = 360 > f) || 180 > J) C = p(a, b._fovtype, "HFOV"), C > f && (E = !0, c && p(f, "HFOV", "VFOV") < J && (E = l = !1), C = f, H && E && (a = p(C, "HFOV", b._fovtype))), u = p(a, b._fovtype, "VFOV"), u > J && (E = !0, c && p(J, "VFOV", "HFOV") < f && (E = l = !1), u = J, H && E && (a = p(u, "VFOV", b._fovtype))), p(a, b._fovtype, "HFOV"), E = u, z = u *= .5, C *= .5, -89.9 >= y && (u = 0), 89.9 <= A && (z = 0)
                        }
                        v = [360, -180, 180, u + z, y + u, A - z];
                        q && (h - u < y ? (h = y + u, ab.stopFrictions(2)) : h + z > A && (h = A - z, ab.stopFrictions(2)));
                        l && (C = -h * S, z = .5 * Sa, u = .5 * Fa, y = u / Math.tan(E * S * .5), 0 < C && (u = -u), z = 1 / Math.sqrt(1 + (z * z + u * u) / (y * y)), u = u / y * z, y = Math.acos(-z * Math.sin(C) + u * Math.cos(C)) - Ka / 2, isNaN(y) && (y = -Ka / 2), z = Math.acos((z * Math.cos(C) + u * Math.sin(C)) / Math.sin(y + Ka / 2)), isNaN(z) && (z = 0), C = 180 * z / Ka, 2 * C >= f && (H && (C = p(f, "HFOV", b._fovtype), C < a && (a = C)), C = f / 2));
                        360 > f && (H = !1, v[0] = f, v[1] = D + C, v[2] = t - C, q && (n - C < D ? (n = D + C, H = !0) : n + C > t && (n = t - C, H = !0)), H && (ab.stopFrictions(1), 0 != Mb.currentmovingspeed && (Mb.currentmovingspeed = 0, Mb.speed *= -1)));
                        b._limits = v;
                        b._fov = a;
                        b._hlookat = n;
                        b._vlookat = h;
                        a = p(a, b._fovtype, "MFOV");
                        0 < F && 0 == B ? (t = p(a, "MFOV", "VFOV"), F = Math.asin(1E3 * Math.sin(t * S * .5) / (1E3 + .72 * x)), F = .5 * Fa / Math.tan(F)) : F = .5 * Ac / Math.tan(a / 114.591559);
                        b.hfov = p(a, "MFOV", "HFOV");
                        b.vfov = p(a, "MFOV", "VFOV");
                        b.r_fov = a;
                        b.r_zoom = F;
                        b.r_zoff = x;
                        b.r_vlookat = h;
                        B = Number(b._architectural);
                        q = 0;
                        0 < B && (1 == b._architecturalonlymiddle && (q = Math.abs(h / 90), 1 < q && (q = 1), q = Math.tan(q * Ka * .25), B *= 1 - q), q = B * (-h * (Fa / Math.tan(p(a, "MFOV", "VFOV") / 114.591559)) / 90), h *= 1 - B);
                        b.r_yoff = q;
                        Ae(b.r_rmatrix, n + Number(K.viewoffset), h, g);
                        b.r_hlookat = n;
                        b.r_vlookatA = h;
                        b.r_roll = g;
                        wc = 0 == d.simulator && (d.iphone || d.ipad) ? .25 : 1;
                        d.ie && (wc = r.r_zoom / 1E3 * 10);
                        if (d.androidstock || d.android && d.chrome || d.blackberry) wc = r.r_zoom / 1E3 / 4;
                        Ce = _[373] + F + _[123] + -g + _[110] + (F - x / 2 * wc) + "px) ";
                        b.haschanged = !1
                    };
                    b.getState = function(a) {
                        null == a && (a = {
                            h: 0,
                            v: 0,
                            z: 0,
                            r: 0,
                            zf: 0,
                            yf: 0,
                            ch: 0,
                            vr: null
                        });
                        a.h = b._hlookat;
                        a.v = b.r_vlookatA;
                        a.z = b.r_zoom;
                        a.r = b._camroll;
                        a.zf = b.r_zoff;
                        a.yf = b.r_yoff;
                        a.ch = b._pannini;
                        return a
                    };
                    b.defaults()
                },
                Jf = function() {
                    var a = this;
                    a.defaults = function() {
                        a.usercontrol = "all";
                        a.mouse = "drag";
                        a.touch = "drag";
                        a.drag_oldmode = !1;
                        a.dragrelative = !0;
                        a.draginertia = .1;
                        a.dragfriction = .9;
                        a.movetorelative = !0;
                        a.movetoaccelerate = 1;
                        a.movetospeed = 10;
                        a.movetofriction = .8;
                        a.movetoyfriction = 1;
                        a.keybaccelerate = .5;
                        a.keybspeed = 10;
                        a.keybfriction = .9;
                        a.keybinvert = !1;
                        a.keybfovchange = .75;
                        a.mousefovchange = 1;
                        a.fovspeed = 3;
                        a.fovfriction = .9;
                        a.camrollreset = !0;
                        a.keycodesleft = "37";
                        a.keycodesright = "39";
                        a.keycodesup = "38";
                        a.keycodesdown = "40";
                        a.keycodesin = "";
                        a.keycodesout = "";
                        a.touchzoom = !0;
                        a.zoomtocursor = !1;
                        a.zoomoutcursor = !0;
                        a.disablewheel = !1;
                        a.keydownrepeat = !0;
                        a.bouncinglimits = !1;
                        a.preventTouchEvents = !0
                    };
                    a.defaults();
                    yb(a, _[457], _[19]);
                    yb(a, _[456], "touch");
                    yb(a, _[299], _[271]);
                    yb(a, _[439], _[382]);
                    yb(a, _[339], _[314]);
                    yb(a, _[313], _[300]);
                    yb(a, _[341], _[374])
                },
                Kf = function() {
                    var a = this;
                    a.standard = _[5];
                    a.dragging = "move";
                    a.moving = "move";
                    a.hit = _[10];
                    a.update = function() {
                        var b = F.down,
                            d = !1,
                            g = ib,
                            e = Qb;
                        e ? g ? (d = g.DATA.handcursor, g == e ? (b = !1, g.capture || (b = F.down && F.moved)) : b = e.capture ? !1 : F.down && F.moved) : b = !e.capture : g && 0 == b && (d = g.DATA.handcursor);
                        g = G(ga.mousetype);
                        W.controllayer.style.cursor = b ? _[17] == g ? a.moving : a.dragging : d ? a.hit : a.standard
                    }
                },
                Gf = function() {
                    var a = this;
                    a.haschanged = !1;
                    a.mode = _[63];
                    a.pixelx = 0;
                    a.pixely = 0;
                    a.pixelwidth = 0;
                    a.pixelheight = 0;
                    Oa(a, _[63], _[86]);
                    Oa(a, "x", "0");
                    Oa(a, "y", "0");
                    Oa(a, _[62], "100%");
                    Oa(a, _[18], "100%");
                    Oa(a, "left", "0");
                    Oa(a, "top", "0");
                    Oa(a, _[4], "0");
                    Oa(a, _[3], "0");
                    a.calc = function(b, d) {
                        var g = 1 / da,
                            e = _[90] == G(a.mode),
                            m = e ? a._left : a._x,
                            n = e ? a._top : a._y,
                            h = e ? a._right : a._width,
                            p = e ? a._bottom : a._height,
                            m = 0 < m.indexOf("%") ? parseFloat(m) / 100 * b * g : Number(m),
                            h = 0 < h.indexOf("%") ? parseFloat(h) / 100 * b * g : Number(h),
                            n = 0 < n.indexOf("%") ? parseFloat(n) / 100 * d * g : Number(n),
                            p = 0 < p.indexOf("%") ? parseFloat(p) / 100 * d * g : Number(p),
                            m = m / g,
                            n = n / g,
                            h = h / g,
                            p = p / g;
                        e ? (h = b - m - h, p = d - n - p) : (e = G(a._align), 0 <= e.indexOf("left") || (m = 0 <= e.indexOf(_[4]) ? b - h - m : (b - h) / 2 + m), 0 <= e.indexOf("top") || (n = 0 <= e.indexOf(_[3]) ? d - p - n : (d - p) / 2 + n));
                        a.pixelx = Math.round(m * g);
                        a.pixely = Math.round(n * g);
                        e = !1;
                        m = Math.round(h);
                        h = Math.round(p);
                        if (Sa != m || Fa != h) e = !0, Sa = m, Fa = h;
                        a.pixelwidth = m * g;
                        a.pixelheight = h * g;
                        a.haschanged = !1;
                        return e
                    }
                },
                Pb = 2097152,
                rf = 1,
                bc = rf | 2,
                ad = !1,
                Qf = function() {
                    this.ay = this.ax = this.oy = this.ox = this.y = this.x = this.h = this.w = this.flags = 0;
                    this.asy = this.asx = 1;
                    this.ey = this.ex = 0
                },
                Rf = function() {
                    this.h = this.w = 0
                },
                Ic = function() {
                    function a(a, b, d) {
                        H[a] = b;
                        c.__defineGetter__(a, function() {
                            return H[a]
                        });
                        c.__defineSetter__(a, function(b) {
                            if (b != H[a] || d & 96) H[a] = b, c.haschanged_flags |= d, c.GL && (nb = !0)
                        })
                    }
    
                    function b() {
                        var a = H.alpha;
                        c.ishotspot && (a *= vc);
                        var b = 255 * a | 0;
                        b == c._aa || c.GL || (c.sprite && (c.sprite.style.opacity = a, c._aa = b), c._poly && (c._poly.style.opacity = a, c._aa = b));
                        H.autoalpha && (a = 0 < a, a != H.visible && (c.visible = a))
                    }
    
                    function r() {
                        if (c.sprite && null != H.zorder) {
                            var a = parseInt(H.zorder);
                            !isNaN(a) && 0 <= a ? (c.sprite.style.zIndex = S + a, c._zdeep = a, c._deepscale = 100 / (200 + a)) : (c._zdeep = 0, c._deepscale = .5)
                        }
                        c.ishotspot && (ad = !0)
                    }
    
                    function g() {
                        c.sprite && (c.sprite.style.overflow = H.maskchildren ? _[6] : _[16], ba && d.safari && u())
                    }
    
                    function e(a, b) {
                        var c = b;
                        b && (c = b = a.DATA.enabled) && _[22] == a.type && (c = 0 != a.DATA.bgcapture);
                        if (a.sprite) {
                            var d = a.sprite.style;
                            d.cursor = c && a.DATA.handcursor ? _[10] : _[5];
                            d.pointerEvents = c ? "auto" : "none";
                            0 == c && a.hovering && (a.hovering = !1, Jb === a && (Jb = null))
                        }
                        if (c = a._childs) {
                            var f, g;
                            f = c.length;
                            for (d = 0; d < f; d++)(g = c[d]) && g.sprite && e(g, b)
                        }
                    }
    
                    function m() {
                        if (c.sprite) {
                            var a = H.enabled;
                            if (a && c._parent) a: {
                                for (a = n(c._parent); a;) {
                                    if (0 == a.DATA.enabled || 0 == a.children) {
                                        a = !1;
                                        break a
                                    }
                                    if (a._parent) a = n(a._parent);
                                    else break
                                }
                                a = !0
                            }
                            e(c, a, !0)
                        }
                    }
    
                    function n(a) {
                        var b = null;
                        if (a) {
                            var b = a = G(a),
                                c = Ca,
                                d = a.indexOf("[");
                            0 < d && (b = a.slice(0, d), _[7] == b && (c = Bb), a = a.slice(d + 1, a.indexOf("]")));
                            if ("stage" == b) return null == vb.sprite && (vb.sprite = W.viewerlayer, vb.loaded = !0), vb;
                            if (_[536] == b) return null == Cb.sprite && (a = Ha(), b = a.style, b.position = _[0], b.width = "100%", b.height = "100%", b.overflow = _[6], b.zIndex = "0", b.pointerEvents = "none", W.controllayer.parentNode.insertBefore(a, W.controllayer), Cb.sprite = a, Cb.loaded = !0), Cb;
                            b = c.getItem(a)
                        }
                        return b
                    }
    
                    function h(a) {
                        if (c._parent != a && !c._destroyed) {
                            if (c._parent) {
                                var b = n(c._parent);
                                if (b) {
                                    var d = b._childs;
                                    if (d) {
                                        var e, f;
                                        f = d.length;
                                        for (e = 0; e < f; e++)
                                            if (d[e] === c) {
                                                d.splice(e, 1);
                                                f--;
                                                break
                                            } 0 == f && (d = null);
                                        b._childs = d;
                                        b.requestUpdate()
                                    }
                                }
                            }
                            if (a)
                                if (b = n(a))
                                    if (b.sprite) null == b._childs && (b._childs = []), b._use_css_scale = !1, c._use_css_scale = !1, b._childs.push(c), b.sprite.appendChild(c.sprite), b.requestUpdate(), b.haschanged_flags |= 4096;
                                    else {
                                        if (b.GL || b.ishotspot && _[64] == b.renderer) {
                                            b.renderer = _[65];
                                            b.processUpdatesHS();
                                            b.requestUpdate();
                                            h(a);
                                            return
                                        }
                                        setTimeout(function() {
                                            c._parent = null;
                                            h(a)
                                        }, 16)
                                    }
                            else a = null;
                            null == a && W.pluginlayer.appendChild(c.sprite);
                            c._parent = a;
                            c.requestUpdate();
                            c.haschanged_flags |= 4096
                        }
                    }
    
                    function x(a) {
                        (a = this.kobject) && 0 == I && (a.DATA.reloading = !1, (a = a.loadingurl) && "data:" == a.slice(0, 5) && 50 < a.length && (a = a.slice(0, 50) + "..."), ma.reportLoadingError(a, c.getfullpath() + " -"))
                    }
    
                    function K() {
                        var a = c.jsplugin,
                            b = c.GL;
                        a && a.unloadplugin && a.unloadplugin();
                        b && b.destroy && b.destroy();
                        c.jsplugin = null;
                        c.GL = null
                    }
    
                    function D(a) {
                        P && (F.down = !1, ab.trackTouch(a), ha(U, a.type, D, !0), _[2] == a.type ? (ea.body.style.webkitUserSelect = ea.body.style.backupUserSelect, ha(U, _[9], B, !0), ha(U, _[2], D, !0)) : (ha(U, d.browser.events.touchmove, B, !0), ha(U, d.browser.events.touchend, D, !0)), c.process_onup(P, N))
                    }
    
                    function B(a, b) {
                        Xa(_[423]);
                        var c = a.changedTouches && 0 < a.changedTouches.length ? a.changedTouches[0] : a,
                            e = c.pageX,
                            c = c.pageY;
                        !0 === b ? Y = [e, c] : Y ? 0 == N && (e -= Y[0], c -= Y[1], Math.sqrt(e * e + c * c) >= (d.touchdevice ? 11 : 4) && (N = !0)) : (Y = null, ha(U, a.type, B, !0))
                    }
    
                    function q(a, b) {
                        var e = a.timeStamp,
                            f = !0;
                        switch (a.type) {
                            case _[44]:
                            case _[12]:
                            case _[23]:
                                1 == b && (e = _[22] == P.type, v(P) && (!e || e && P.DATA.bgcapture) && P.DATA.handcursor && (c.sprite.style.cursor = _[10]));
                                e = P.sprite || P._poly;
                                for (f = 0; e;) {
                                    var g = e.kobject;
                                    if (g) {
                                        var h = g.DATA.enabled;
                                        0 == d.pointerEvents && (h = v(g));
                                        if (0 == h || 0 < f && 0 == g.children) return;
                                        f++;
                                        e = e.parentNode
                                    } else break
                                }
                                for (f = P.sprite || P._poly; f;) {
                                    if (g = f.kobject) g.enabled && 0 == g.hovering && (g.hovering = !0, Jb = g, 0 == g.pressed && g.DATA.onovercrop && y(g, g.DATA.onovercrop), V.isblocked() || V.callaction(g.onover, g));
                                    else break;
                                    f = f.parentNode
                                }
                                break;
                            case _[45]:
                            case _[14]:
                            case _[24]:
                                for (e = (f = a.relatedTarget) ? f.kobject : null; f && null == e;)
                                    if (f = f.parentNode) e = f.kobject;
                                    else break;
                                for (f = P.sprite || P._poly; f;) {
                                    if (g = f.kobject) {
                                        for (var h = !1, l = e; l;) {
                                            if (g == l) {
                                                h = !0;
                                                break
                                            }
                                            if (l.sprite && l.sprite.parentNode) l = l.sprite.parentNode.kobject;
                                            else break
                                        }
                                        if (0 == h) 1 == g.hovering && (g.hovering = !1, Jb === g && (Jb = null), 0 == g.pressed && g.DATA.onovercrop && y(g, g.DATA.crop), V.callaction(g.onout, g));
                                        else break
                                    } else break;
                                    f = f.parentNode
                                }
                                break;
                            case _[8]:
                                W.focus(2);
                                Xa(_[301]);
                                if (500 < e && 500 > e - Rb) {
                                    Rb = 0;
                                    break
                                }
                                if (f = 0 == (a.button | 0)) ea.body.style.backupUserSelect = ea.body.style.webkitUserSelect, ea.body.style.webkitUserSelect = "none", F.down = !0, B(a, !0), ca(U, _[2], D, !0), ca(U, _[9], B, !0), c.process_ondown(P);
                                break;
                            case d.browser.events.touchstart:
                                W.focus(2);
                                Xa(_[259]);
                                Rb = e;
                                ab.trackTouch(a);
                                if (ab.isMultiTouch()) break;
                                N = !1;
                                if (f = 0 == (a.button | 0)) B(a, !0), ca(U, d.browser.events.touchend, D, !0), ca(U, d.browser.events.touchmove, B, !0), P.pressed = !0, P.DATA.ondowncrop && y(P, P.DATA.ondowncrop), V.isblocked() || V.callaction(P.ondown, P)
                        }
                    }
    
                    function t(a, b) {
                        if (a === b) return !1;
                        for (; b && b !== a;) b = b.parentNode;
                        return b === a
                    }
    
                    function v(a) {
                        if (a.DATA.enabled) {
                            for (a = a.sprite; a;)
                                if ((a = a.parentNode) && a.kobject && 0 == a.kobject.DATA.enabled) return !1;
                            return !0
                        }
                        return !1
                    }
    
                    function f(a) {
                        var b = a.type;
                        if (_[8] != b && b != d.browser.events.touchstart || !V.isblocked()) {
                            var e = a.target.kobject;
                            _[44] == b ? b = _[12] : _[45] == b && (b = _[14]);
                            null == e && (e = c);
                            if ((_[12] != b && _[14] != b || 4 == a.pointerType || _[19] == a.pointerType) && e) {
                                var e = a.timeStamp,
                                    f = c._eP;
                                e != c._eT && (f = 0);
                                if (_[23] == b || _[12] == b) {
                                    var g = a.relatedTarget;
                                    if (this === g || t(this, g)) return
                                } else if (_[24] == b || _[14] == b)
                                    if (g = a.relatedTarget, this === g || t(this, g)) return;
                                _[23] == b && 0 == c.hovering ? f = 0 : _[24] == b && 1 == c.hovering && (f = 0);
                                b = H.enabled;
                                0 == d.pointerEvents && (b = v(c));
                                if (b && (!ba || ba && H.bgcapture)) 0 == c.children && a.stopPropagation(), 0 == f && (0 == c.children && 1 == a.eventPhase || 2 <= a.eventPhase) && (f = 1, c.jsplugin && c.jsplugin.hittest && (b = W.getMousePos(a.changedTouches ? a.changedTouches[0] : a, c.sprite), c.jsplugin.hittest(b.x * c.imagewidth / c.pixelwidth, b.y * c.imageheight / c.pixelheight) || (f = 2)), 1 == f && (P = c, q(a), c.capture && (null != c.jsplugin && t(W.controllayer, c.sprite) || 0 == (a.target && "A" == a.target.nodeName) && na(a), a.stopPropagation())));
                                else if (0 == d.pointerEvents && ea.msElementsFromPoint && 0 == f && 2 == a.eventPhase && (g = a.type, b = _[2] == g || _[24] == g || _[45] == g || _[14] == g || g == d.browser.events.touchend, _[8] == g || _[23] == g || _[44] == g || _[12] == g || g == d.browser.events.touchstart || b) && (g = ea.msElementsFromPoint(a.clientX, a.clientY))) {
                                    var h = [],
                                        l, n, p = null,
                                        p = null;
                                    for (l = 0; l < g.length; l++)
                                        if (p = g[l], p = p.kobject) h.push(p);
                                        else break;
                                    b && m();
                                    if (b && Z)
                                        for (l = 0; l < Z.length; l++) {
                                            var p = Z[l],
                                                r = !1;
                                            for (n = 0; n < h.length; n++) h[n] === p && (r = !0);
                                            0 == r && (f = 1, P = p, q(a, !0), p.capture && (null == c.jsplugin && na(a), a.stopPropagation()))
                                        }
                                    for (l = 0; l < g.length; l++)
                                        if (p = g[l], p = p.kobject) {
                                            if (n = _[22] == p.type, 1 == (v(p) && (!n || n && p.DATA.bgcapture)) || b)
                                                if (f = 1, P = p, q(a, !0), p.capture) {
                                                    null == c.jsplugin && na(a);
                                                    a.stopPropagation();
                                                    break
                                                }
                                        } else break;
                                    Z = h
                                }
                                c._eT = e;
                                c._eP = f
                            }
                        }
                    }
    
                    function u() {
                        var a = c.sprite;
                        if (a) {
                            var a = a.style,
                                b = Number(H.bgcolor),
                                e = Number(H.bgalpha),
                                f = da;
                            isNaN(b) && (b = 0);
                            isNaN(e) && (e = 0);
                            var g = ("" + H.bgborder).split(" "),
                                h = Ob(g[0], f, ","),
                                l = g[1] | 0,
                                g = Number(g[2]);
                            isNaN(g) && (g = 1);
                            if (h[0] != aa[0] || h[3] != aa[3]) aa = h, c.requestUpdate();
                            0 == e ? a.background = "none" : a.backgroundColor = pa(b, e);
                            var b = Ob(c.bgroundedge, f * H.scale, " "),
                                e = "",
                                n = c.bgshadow;
                            if (n) {
                                var m = ("" + n).split(","),
                                    p, q;
                                q = m.length;
                                for (p = 0; p < q; p++) {
                                    var r = Ga(m[p]).split(" "),
                                        t = r.length;
                                    if (4 < t) {
                                        var u = 5 < t ? 1 : 0;
                                        "" != e && (e += ", ");
                                        e += r[0] * f + "px " + r[1] * f + "px " + r[2] * f + "px " + (u ? r[3] * f : 0) + "px " + pa(r[3 + u] | 0, r[4 + u]) + (6 < t ? " " + r[6] : "")
                                    }
                                }
                            }
                            if (d.safari || d.ios) a.webkitMaskImage = H.maskchildren && !n && 0 < b[0] + b[1] + b[2] + b[3] ? _[186] : "";
                            a[cc] = e;
                            a.borderStyle = "solid";
                            a.borderColor = pa(l, g);
                            a.borderWidth = h.join("px ") + "px";
                            a.borderRadius = b.join("px ") + "px"
                        }
                    }
    
                    function z(a) {
                        this.ss = da;
                        this.onresize = function(b, c) {
                            a.imagewidth = a.pixelwidth / a.DATA.scale;
                            a.imageheight = a.pixelheight / a.DATA.scale;
                            var d = 65536;
                            this.ss != da && (this.ss = da, d |= 16384);
                            a.haschanged_flags |= d;
                            return !1
                        }
                    }
    
                    function C() {
                        c.loadedurl && (H.reloading = !0);
                        if (c._ready) {
                            var a = ma.parsePath(H.url),
                                b = a,
                                e = "";
                            if (!(c.loading && c.loadingurl == a || c.loadedurl == a)) {
                                var f = b.indexOf("?");
                                0 < f && (b = b.slice(0, f));
                                f = b.indexOf("#");
                                0 < f && (b = b.slice(0, f));
                                f = b.lastIndexOf(".");
                                0 < f && (e = G(b.slice(f + 1)));
                                K();
                                I = !1;
                                c.loading = !0;
                                c.loaded = !1;
                                c.loadedurl = null;
                                c.createLoader();
                                d.ios && (_[438] == a.substr(0, 10) ? c.loader.removeAttribute(_[385]) : "off" != Lb && (c.loader.crossOrigin = Lb));
                                if (_[78] == b) ba = I = !0, c.loading = !1, c.loaded = !0, c.loadedurl = a, c.createVars([_[155], c.bgcolor ? Number(c.bgcolor) : 0, 16384, _[149], c.bgalpha ? Number(c.bgalpha) : 0, 16384, _[127], c.bgroundedge ? c.bgroundedge : "0", 16384, _[144], c.bgborder ? c.bgborder : "0", 16384, _[145], c.bgshadow ? c.bgshadow : "", 16384, _[464], la(c.bgcapture), 4096]), c.haschanged_flags |= 4096, c.haschanged_flags |= 16384, c.jsplugin = new z(c), A();
                                else if (_[76] == b || 0 <= a.indexOf(_[337])) {
                                    I = !0;
                                    c.loader = null;
                                    c.loading = !1;
                                    c.loaded = !0;
                                    c.loadedurl = a;
                                    var g = new Sf;
                                    g.registerplugin(p, c.getfullpath(), c);
                                    c.jsplugin = g;
                                    0 == c._dyn ? A() : setTimeout(function() {
                                        g.updatehtml();
                                        A()
                                    }, 7)
                                } else "js" == e ? (I = !0, c.loadingurl = a, ma.loadfile2(a, _[114], function(b) {
                                    c.loading = !1;
                                    c.loaded = !0;
                                    c.loadedurl = a;
                                    b = b.data;
                                    if (null != b) {
                                        var d = _[426] + a + _[208];
                                        try {
                                            eval(b + ";")
                                        } catch (e) {
                                            d = _[484] + a + _[420] + e
                                        }
                                        _[15] == typeof krpanoplugin ? (b = new krpanoplugin, b.registerplugin(p, c.getfullpath(), c), c.jsplugin = b, A()) : va(3, d)
                                    }
                                })) : "swf" == e ? (c.loading = !1, c.loaded = !1, va(2, c.getfullpath() + _[220] + wd(a))) : (c.loaded && c.preload && (c._ispreload = !0, c.preload = !1, c.onloaded = null), ma.DMcheck(a) ? (c.loading = !0, c.loaded = !1, c.loadingurl = a, c.loader.src = a) : (c.loading = !1, va(3, c.getfullpath() + _[270] + a)))
                            }
                        }
                    }
    
                    function y(a, b) {
                        var d = 0,
                            e = 0,
                            f = a.loader;
                        if (f && (d = f.naturalWidth, e = f.naturalHeight, a.ishotspot)) switch (a.stereo) {
                            case "SBS":
                                d >>= 1;
                                break;
                            case "TB":
                                e >>= 1
                        }
                        b && (b = String(b).split("|"), 4 == b.length && (d = b[2], e = b[3]));
                        if (null == a.jsplugin && 0 == a._isNE()) {
                            a.imagewidth = d;
                            a.imageheight = e;
                            var f = a._gOSF(),
                                g = a.haschanged_flags;
                            f & 1 && 0 == (g & 32) && (a.DATA.width = String(d));
                            f & 2 && 0 == (g & 64) && (a.DATA.height = String(e))
                        }
                        c.GL && (nb = !0);
                        c.requestUpdate(bc)
                    }
    
                    function A() {
                        1 != c._destroyed && (H.reloading = !1, c.loading = !1, c.loaded = !0, 0 == I && (c.loadedurl = c.loadingurl), c.jsplugin ? l() : c.haschanged_flags |= 2, nb = !0)
                    }
    
                    function l() {
                        c.sprite && (0 == I ? c.sprite.style.backgroundImage = 'url("' + c.loader.src + '")' : c.sprite.style.background = "none");
                        y(c, H.crop);
                        c.requestUpdate(bc);
                        R = !0;
                        0 == I && null == c.parent && null == c._childs && (c._use_css_scale = !0);
                        c.ishotspot || c.updatepluginpos();
                        V.callaction(null != c.altonloaded ? c.altonloaded : c.onloaded, c, !0)
                    }
                    var c = this;
                    c.prototype = Fc;
                    this.prototype.call(this);
                    var H = c.DATA = {};
                    c._type = _[60];
                    c.layer = c.plugin = new Vb(Ic);
                    c.haschanged_flags = 0;
                    c.renderer_flags = 0;
                    var E = new Qf,
                        J = new Rf;
                    c.createVars = function(b) {
                        var c, d = b.length;
                        for (c = 0; c < d; c += 3) a(b[c], b[c + 1], b[c + 2])
                    };
                    var S = 0,
                        M = 3,
                        N = !1,
                        I = !1,
                        ba = !1,
                        aa = [0, 0, 0, 0],
                        R = !1,
                        Y = null,
                        P = null,
                        Z = null,
                        X = null;
                    c._isNE = function() {
                        return I
                    };
                    c._gOSF = function() {
                        return M
                    };
                    c.haveUserWidth = function() {
                        return 0 == (M & 1) || 0 != (c.haschanged_flags & 32)
                    };
                    c.haveUserHeight = function() {
                        return 0 == (M & 2) || 0 != (c.haschanged_flags & 64)
                    };
                    c.__defineGetter__("type", function() {
                        var a = c.url;
                        return _[78] == a ? _[22] : _[76] == a ? "text" : _[99]
                    });
                    c.__defineSetter__("type", function(a) {
                        a = G(a);
                        if (_[22] == a) c.url = _[78];
                        else if ("text" == a || _[137] == a) c.url = _[76]
                    });
                    c.sprite = null;
                    c.loader = null;
                    c.jsplugin = null;
                    c.ishotspot = !1;
                    c._ready = !1;
                    c._dyn = !1;
                    c._use_css_scale = !1;
                    c._hszscale = 1;
                    c._eT = 0;
                    c._eP = 0;
                    c._pCD = !1;
                    c._deepscale = .5;
                    c._zdeep = 0;
                    c._childs = null;
                    c._parent = null;
                    c.__defineGetter__(_[168], function() {
                        return c._parent
                    });
                    c.__defineSetter__(_[168], function(a) {
                        if (null == a || "" == a || "null" == G(a)) a = null;
                        c.sprite ? h(a) : c._parent = a
                    });
                    c.MX = Ja();
                    c.GL = null;
                    c.imagewidth = 0;
                    c.imageheight = 0;
                    c.forceresize = !1;
                    c.pixelwidth = 0;
                    c.pixelheight = 0;
                    c.pixelx = 0;
                    c.pixely = 0;
                    c._pxw = 0;
                    c._pxh = 0;
                    c._finalxscale = 1;
                    c._finalyscale = 1;
                    c._ispreload = !1;
                    H.reloading = !1;
                    c.loading = !1;
                    c.loaded = !1;
                    c.loadingurl = null;
                    c.loadedurl = null;
                    c.pressed = !1;
                    c.hovering = !1;
                    c.preload = !1;
                    c.keep = !1;
                    c.style = null;
                    c.capture = !0;
                    c.children = !0;
                    c.accuracy = 0;
                    c.onloaded = null;
                    c.altonloaded = null;
                    c.maxwidth = 0;
                    c.minwidth = 0;
                    c.maxheight = 0;
                    c.minheight = 0;
                    c.onover = null;
                    c.onhover = null;
                    c.onout = null;
                    c.onclick = null;
                    c.ondown = null;
                    c.onup = null;
                    c.onloaded = null;
                    c.createVars(["url", null, 1, _[16], !0, 4, _[62], null, 32, _[18], null, 64, "scale", 1, 16, _[599], 0, 8, "x", null, 512, "y", null, 512, "ox", null, 256, "oy", null, 256, _[63], null, 1024, "edge", null, 1024, _[597], null, 2048, _[366], !1, 32768, _[332], !1, 65536, "alpha", 1, 8192, _[479], !1, 8192, _[405], null, 0, _[406], null, 0, _[569], !0, 4096, _[407], !0, 4096]);
                    H.crop = null;
                    c.__defineGetter__("crop", function() {
                        return H.crop
                    });
                    c.__defineSetter__("crop", function(a) {
                        a != H.crop && (H.crop = a, c.pressed && H.ondowncrop ? a = H.ondowncrop : c.hovering && H.onovercrop && (a = H.onovercrop), y(c, a))
                    });
                    c.getrenderer = function() {
                        return J
                    };
                    c.getparsed = function() {
                        return E
                    };
                    c.API_calcsize = function(a) {
                        a = c.ishotspot;
                        var b = da,
                            d = Sa,
                            e = Fa;
                        a && (b = 1, d = e = 1E3);
                        var f = c.imagewidth,
                            g = c.imageheight,
                            h = E.flags,
                            l = H.scale,
                            n = E.w,
                            m = E.h;
                        0 == (h & 3) ? n = f : 2 == (h & 3) && (n *= d / b / 1);
                        0 == (h & 12) ? m = g : 8 == (h & 12) && (m *= e / b / 1);
                        n *= b;
                        m *= b;
                        0 > n && (n = d / 1 + n, 0 > n && (n = 0));
                        0 > m && (m = e / 1 + m, 0 > m && (m = 0));
                        3 == (h & 3) ? n = 0 != g ? m * f / g : 0 : 12 == (h & 12) && (m = 0 != f ? n * g / f : 0);
                        0 < c.maxwidth && n > b * c.maxwidth && (n = b * c.maxwidth);
                        0 < c.minwidth && n < b * c.minwidth && (n = b * c.minwidth);
                        0 < c.maxheight && m > b * c.maxheight && (m = b * c.maxheight);
                        0 < c.minheight && m < b * c.minheight && (m = b * c.minheight);
                        n = n * l * 1;
                        m = m * l * 1;
                        a || 0 != c.accuracy || (n = Nb(n), m = Nb(m));
                        J.w = n;
                        J.h = m;
                        return J
                    };
                    c.loadstyle = function(a) {
                        V.assignstyle(c.getfullpath(), a)
                    };
                    c.getmouse = function(a) {
                        var b = 0,
                            d = 0;
                        if (d = c.sprite) {
                            var e = W.controllayer,
                                f = e.getBoundingClientRect(),
                                g = d.getBoundingClientRect(),
                                b = F.x - g.left - d.clientLeft + f.left + e.clientLeft,
                                d = F.y - g.top - d.clientTop + f.top + e.clientTop;
                            a && (b = b * c.imagewidth / c.pixelwidth, d = d * c.imageheight / c.pixelheight);
                            return {
                                x: b,
                                y: d
                            }
                        }
                        return null
                    };
                    c._assignEvents = function(a, b) {
                        b || (b = "add");
                        ab.touch && (zb(b, a, d.browser.events.touchstart, f, !0), zb(b, a, d.browser.events.touchstart, f, !1));
                        ab.mouse && (zb(b, a, _[8], f, !0), zb(b, a, _[8], f, !1));
                        d.desktop && (ab.mouse || d.ie) && (0 == ab.mouse && d.ie ? (zb(b, a, d.browser.events.pointerover, f, !0), zb(b, a, d.browser.events.pointerover, f, !1), zb(b, a, d.browser.events.pointerout, f, !0), zb(b, a, d.browser.events.pointerout, f, !1)) : (zb(b, a, _[23], f, !0), zb(b, a, _[23], f, !1), zb(b, a, _[24], f, !0), zb(b, a, _[24], f, !1)))
                    };
                    c.createLoader = function() {
                        var a = c.loader;
                        a && "" != a.src && (c.destroyLoader(), a = null);
                        a || (a = Ha(1), a.kobject = c, ca(a, _[41], x, !0), ca(a, "load", A, !1), c.loader = a)
                    };
                    c.destroyLoader = function() {
                        var a = c.loader;
                        a && (a.kobject = null, ha(a, _[41], x, !0), ha(a, "load", A, !1), c.loader = null)
                    };
                    c.createSprite = function() {
                        if (!c.sprite) {
                            var a = Ha(),
                                d = a.style;
                            a.kobject = c;
                            d.display = "none";
                            d.position = _[0];
                            mc && (d.outline = _[100]);
                            d.zIndex = S;
                            c.sprite = a;
                            c._assignEvents(a);
                            g();
                            b();
                            r();
                            c.haschanged_flags |= 4096;
                            De++
                        }
                    };
                    c.destroySprite = function() {
                        var a = c.sprite;
                        a && (a.parentNode && a.parentNode.removeChild(a), a.style.background = "none", c._assignEvents(a, _[575]), a.kobject = null, c.sprite = null, De--)
                    };
                    c.create = function() {
                        c._pCD = !0;
                        S = c.ishotspot ? 2001 : 3001;
                        c.alturl && (c.url = c.alturl, delete c.alturl);
                        c.altscale && (c.scale = c.altscale, delete c.altscale);
                        c.createLoader();
                        c.ishotspot || c.createSprite();
                        var a = c._parent;
                        a && (c._parent = null, h(a));
                        c._ready = !0
                    };
                    c.destroy = function() {
                        c.hovering && (V.callaction(c.onout, c), c.hovering = !1);
                        Jb === c && (Jb = null);
                        K();
                        c.destroyLoader();
                        c.jsplugin = null;
                        c.loaded = !1;
                        c._destroyed = !0;
                        c.parent = null;
                        var a = c._childs;
                        if (a) {
                            var b, d, a = a.slice();
                            d = a.length;
                            for (b = 0; b < d; b++) a[b].parent = null;
                            c._childs = null
                        }
                        c.destroySprite()
                    };
                    c.getfullpath = function() {
                        return c._type + "[" + c.name + "]"
                    };
                    c.changeorigin = function() {
                        var a = arguments,
                            b = null,
                            d = null;
                        if (0 < a.length) {
                            var e = null,
                                f = 0,
                                g = 0,
                                h = 0,
                                l = 0,
                                m = da,
                                p = Sa / m,
                                q = Fa / m,
                                r = c._parent;
                            r && (r = n(r)) && (0 == c._use_css_scale ? (p = r._pxw * m, q = r._pxh * m) : (p = r.imagewidth * m, q = r.imageheight * m));
                            m = c.imagewidth;
                            r = c.imageheight;
                            b = 0;
                            e = String(H.width);
                            "" != e && null != e && (0 < e.indexOf("%") ? m = parseFloat(e) / 100 * p : "prop" == e.toLowerCase() ? b = 1 : m = e);
                            e = String(H.height);
                            "" != e && null != e && (0 < e.indexOf("%") ? r = parseFloat(e) / 100 * q : "prop" == e.toLowerCase() ? b = 2 : r = e);
                            1 == b ? m = r * c.imagewidth / c.imageheight : 2 == b && (r = m * c.imageheight / c.imagewidth);
                            b = d = G(a[0]);
                            1 < a.length && (d = G(a[1]));
                            var a = String(H.align),
                                t = H.edge ? G(H.edge) : "null";
                            if ("null" == t || _[578] == t) t = a;
                            (e = String(H.x)) && (f = 0 < e.indexOf("%") ? parseFloat(e) / 100 * p : parseFloat(e));
                            isNaN(f) && (f = 0);
                            (e = String(H.y)) && (g = 0 < e.indexOf("%") ? parseFloat(e) / 100 * q : parseFloat(e));
                            isNaN(g) && (g = 0);
                            if (e = a) h = 0 <= e.indexOf("left") ? 0 + f : 0 <= e.indexOf(_[4]) ? p - f : p / 2 + f, l = 0 <= e.indexOf("top") ? 0 + g : 0 <= e.indexOf(_[3]) ? q - g : q / 2 + g;
                            1 != H.scale && (m *= H.scale, r *= H.scale);
                            h = 0 <= t.indexOf("left") ? h + 0 : 0 <= t.indexOf(_[4]) ? h + -m : h + -m / 2;
                            l = 0 <= t.indexOf("top") ? l + 0 : 0 <= t.indexOf(_[3]) ? l + -r : l + -r / 2;
                            e = a = 0;
                            a = 0 <= b.indexOf("left") ? 0 + f : 0 <= b.indexOf(_[4]) ? p - f : p / 2 + f;
                            e = 0 <= b.indexOf("top") ? 0 + g : 0 <= b.indexOf(_[3]) ? q - g : q / 2 + g;
                            a = 0 <= d.indexOf("left") ? a + 0 : 0 <= d.indexOf(_[4]) ? a + -m : a + -m / 2;
                            e = 0 <= d.indexOf("top") ? e + 0 : 0 <= d.indexOf(_[3]) ? e + -r : e + -r / 2;
                            c.align = b;
                            c.edge = d;
                            0 <= b.indexOf(_[4]) ? c.x = String(f + a - h) : c.x = String(f - a + h);
                            0 <= b.indexOf(_[3]) ? c.y = String(g + e - l) : c.y = String(g - e + l)
                        }
                    };
                    c.requestUpdate = function(a) {
                        c.poschanged = !0;
                        a && (c.renderer_flags |= a);
                        c.GL && (nb = !0)
                    };
                    c.resetsize = function() {
                        if (c.loaded) {
                            var a = c.imagewidth,
                                b = c.imageheight;
                            H.width = String(a);
                            H.height = String(b);
                            M = 3;
                            var d = H.crop;
                            c.pressed && H.ondowncrop ? d = H.ondowncrop : c.hovering && H.onovercrop && (d = H.onovercrop);
                            d && (y(c, d), a = c.imagewidth, b = c.imageheight);
                            E.w = a;
                            E.h = b;
                            E.flags = E.flags & -16 | 5;
                            c.requestUpdate(bc)
                        }
                    };
                    c.registersize = function(a, b) {
                        null != a && (H.width = String(a), E.w = Number(a), E.flags = E.flags & -4 | 1);
                        null != b && (H.height = String(b), E.h = Number(b), E.flags = E.flags & -13 | 4);
                        c.requestUpdate(bc)
                    };
                    c.registercontentsize = function(a, b) {
                        null != a && (c.ishotspot && "SBS" == c.stereo && (a *= .5), c.imagewidth = Number(a), M & 1 && 0 == (c.haschanged_flags & 32) && (H.width = String(a), E.w = Number(a), E.flags = E.flags & -4 | 1));
                        null != b && (c.ishotspot && "TB" == c.stereo && (b *= .5), c.imageheight = Number(b), M & 2 && 0 == (c.haschanged_flags & 64) && (H.height = String(b), E.h = Number(b), E.flags = E.flags & -13 | 4));
                        c.requestUpdate(bc)
                    };
                    c.process_ondown = function(a) {
                        F.down = !0;
                        F.downLayer = !0;
                        Xa(_[363]);
                        a || (a = c);
                        N = !1;
                        a.pressed = !0;
                        a.DATA.ondowncrop && y(a, a.DATA.ondowncrop);
                        V.isblocked() || V.callaction(a.ondown, a)
                    };
                    c.process_onup = function(a, b) {
                        F.downLayer = !1;
                        Xa(_[508]);
                        a || (a = c);
                        if (a.pressed) {
                            a.pressed = !1;
                            if (a.DATA.ondowncrop || a.DATA.onovercrop) a.hovering && a.DATA.onovercrop ? y(a, a.DATA.onovercrop) : y(a, a.DATA.crop);
                            V.callaction(a.onup, a);
                            b || V.isblocked() || V.callaction(a.onclick, a)
                        }
                    };
                    c.updateCrop = y;
                    c.processUpdates = function() {
                        if (c.haschanged_flags & 96) {
                            var a = c.haschanged_flags;
                            if (a & 32) {
                                var d = H.width,
                                    e = 0,
                                    f = _[1] === typeof d,
                                    h = parseFloat(d);
                                0 == 0 * h ? (M &= -2, f && 0 < d.indexOf("%") ? (h /= 100, e = 2) : e = 1) : f && "prop" == d.toLowerCase() ? (h = 0, e = 3, M &= -2) : (H.width = null, M |= 1, h = 0);
                                E.w = h;
                                E.flags = E.flags & -4 | e
                            }
                            a & 64 && (a = H.height, d = 0, e = _[1] === typeof a, f = parseFloat(a), 0 == 0 * f ? (M &= -3, e && 0 < a.indexOf("%") ? (f /= 100, d = 8) : d = 4) : e && "prop" == a.toLowerCase() ? (f = 0, d = 12, M &= -3) : (H.height = null, M |= 2, f = 0), E.h = f, E.flags = E.flags & -13 | d);
                            c.requestUpdate(bc);
                            ba && u();
                            c.haschanged_flags &= -97
                        }
                        if (c.haschanged_flags & 1) {
                            c.haschanged_flags &= -2;
                            a = H.url;
                            if ("" == a || "null" == a) H.url = a = null;
                            null != a ? C() : (K(), c.jsplugin = null, c.loadedurl = null, c.loadingurl = null, c.loading = !1, c.loaded = !1)
                        }
                        c.haschanged_flags & 2 && (c.haschanged_flags &= -3, l());
                        c.haschanged_flags & 4 && (c.haschanged_flags &= -5, (a = H.visible) && c.ishotspot && (nb = !0), 0 == a && Jb === c && (Jb = null), c._poly && (c._poly.style.visibility = a ? _[16] : _[6]), c.sprite && (d = !0, c.jsplugin && c.jsplugin.onvisibilitychanged && (d = !0 !== c.jsplugin.onvisibilitychanged(a)), d && (0 == a ? c.sprite.style.display = "none" : c.requestUpdate())));
                        c.haschanged_flags & 16 && (c.haschanged_flags &= -17, c.requestUpdate());
                        c.haschanged_flags & 8 && (c.haschanged_flags &= -9, c.requestUpdate());
                        if (c.haschanged_flags & 256) {
                            c.haschanged_flags &= -257;
                            var a = H.ox,
                                d = H.oy,
                                e = _[1] === typeof a,
                                f = _[1] === typeof d,
                                h = 0,
                                n = parseFloat(a),
                                p = parseFloat(d);
                            0 == 0 * n ? e && 0 < a.indexOf("%") && (n /= 100, h |= 64) : (n = 0, H.ox = null);
                            0 == 0 * p ? f && 0 < d.indexOf("%") && (p /= 100, h |= 128) : (p = 0, H.oy = null);
                            E.ox = n;
                            E.oy = p;
                            E.flags = E.flags & -193 | h;
                            c.requestUpdate(2)
                        }
                        c.haschanged_flags & 512 && (c.haschanged_flags &= -513, a = H.x, d = H.y, e = _[1] === typeof a, f = _[1] === typeof d, h = 0, n = parseFloat(a), p = parseFloat(d), 0 == 0 * n ? e && 0 < a.indexOf("%") && (n /= 100, h |= 16) : (n = 0, H.x = null), 0 == 0 * p ? f && 0 < d.indexOf("%") && (p /= 100, h |= 32) : (p = 0, H.y = null), E.x = n, E.y = p, E.flags = E.flags & -49 | h, c.requestUpdate(2));
                        if (c.haschanged_flags & 1024) {
                            c.haschanged_flags &= -1025;
                            a = H.align;
                            d = H.edge;
                            a && "" != a || (a = _[86]);
                            d && "" != d || (d = a);
                            var a = G(a),
                                d = G(d),
                                f = e = .5,
                                n = h = 1,
                                q = p = .5;
                            0 <= a.indexOf("left") ? e = 0 : 0 <= a.indexOf(_[4]) && (e = 1, h = -1);
                            0 <= a.indexOf("top") ? f = 0 : 0 <= a.indexOf(_[3]) && (f = 1, n = -1);
                            0 <= d.indexOf("left") ? p = 0 : 0 <= d.indexOf(_[4]) && (p = 1);
                            0 <= d.indexOf("top") ? q = 0 : 0 <= d.indexOf(_[3]) && (q = 1);
                            E.ax = e;
                            E.ay = f;
                            E.asx = h;
                            E.asy = n;
                            E.ex = p;
                            E.ey = q;
                            c.requestUpdate(2)
                        }
                        c.haschanged_flags & 2048 && (c.haschanged_flags &= -2049, r());
                        c.haschanged_flags & 4096 && (c.haschanged_flags &= -4097, m());
                        c.haschanged_flags & 8192 && (c.haschanged_flags &= -8193, b());
                        c.haschanged_flags & 32768 && (c.haschanged_flags &= -32769, g());
                        c.haschanged_flags & 16384 && (c.haschanged_flags &= -16385, u());
                        c.haschanged_flags & 65536 && (c.haschanged_flags &= -65537, R = !0, c.requestUpdate());
                        c.ishotspot && c.processUpdatesHS()
                    };
                    c.updatepluginpos = c.updatepos = function(a) {
                        if (!(1 > cb) && (a = c.sprite)) {
                            var b = da,
                                e = Sa,
                                f = Fa;
                            0 != c.haschanged_flags && c.processUpdates();
                            var g = c.loader;
                            if (g && 0 == c.loaded) a.style.display = "none";
                            else if (c.poschanged = !1, a && (g || 0 != I)) {
                                I && (g = null);
                                var h = c.ishotspot,
                                    l = H.scale,
                                    m = c._use_css_scale,
                                    p = c.imagewidth,
                                    q = c.imageheight;
                                if (g && (0 >= p || 0 >= q)) a.style.display = "none";
                                else {
                                    var r = !1,
                                        t = H.crop;
                                    c.pressed && H.ondowncrop ? t = H.ondowncrop : c.hovering && H.onovercrop && (t = H.onovercrop);
                                    t && (t = String(t).split("|"), 4 == t.length ? (t[0] |= 0, t[1] |= 0, t[2] |= 0, t[3] |= 0) : t = null);
                                    var u = c.scale9grid;
                                    u && (u = String(u).split("|"), 4 <= u.length ? (u[0] |= 0, u[1] |= 0, u[2] |= 0, u[3] |= 0, m = c._use_css_scale = !1, H.scalechildren = !1) : u = null);
                                    h && c.distorted && (b = 1, e = f = 1E3);
                                    var v = 1,
                                        w = 1,
                                        x = c._parent,
                                        D = !0;
                                    if (x) {
                                        var y = n(x);
                                        y ? (y.poschanged && y.updatepos(c.getfullpath() + _[556]), 0 == m ? (e = y._pxw * b, f = y._pxh * b) : (e = y.imagewidth * b, f = y.imageheight * b), y.DATA.scalechildren ? (v = 0 != y.imagewidth ? e / b / y.imagewidth : 1, w = 0 != y.imageheight ? f / b / y.imageheight : 1) : (v *= y._finalxscale, w *= y._finalyscale), 0 == y.loaded && (D = !1, a.style.display = "none")) : va(3, 'no parent "' + x + '" found')
                                    }
                                    var C = E.flags,
                                        B = E.w,
                                        A = E.h,
                                        z = E.x,
                                        G = E.y,
                                        x = E.ox,
                                        F = E.oy;
                                    0 == (C & 3) ? B = p : 2 == (C & 3) && (B *= e / b / v);
                                    0 == (C & 12) ? A = q : 8 == (C & 12) && (A *= f / b / w);
                                    B *= b;
                                    A *= b;
                                    0 > B && (B = e / v + B, 0 > B && (B = 0));
                                    0 > A && (A = f / w + A, 0 > A && (A = 0));
                                    3 == (C & 3) ? B = 0 != q ? A * p / q : 0 : 12 == (C & 12) && (A = 0 != p ? B * q / p : 0);
                                    0 < c.maxwidth && B > b * c.maxwidth && (B = b * c.maxwidth);
                                    0 < c.minwidth && B < b * c.minwidth && (B = b * c.minwidth);
                                    0 < c.maxheight && A > b * c.maxheight && (A = b * c.maxheight);
                                    0 < c.minheight && A < b * c.minheight && (A = b * c.minheight);
                                    B = B * v * l;
                                    A = A * w * l;
                                    h || 0 != c.accuracy || (B = Nb(B), A = Nb(A));
                                    z *= C & 16 ? e : b * v;
                                    G *= C & 32 ? f : b * w;
                                    l = c._hszscale;
                                    x *= C & 64 ? B * l : v * b;
                                    F *= C & 128 ? A * l : w * b;
                                    c._oxpix = x;
                                    c._oypix = F;
                                    var J = 0 != p ? B / p : 0,
                                        M = 0 != q ? A / q : 0,
                                        l = J,
                                        C = M,
                                        K = B / b,
                                        P = A / b;
                                    if (K != c._pxw || P != c._pxh) c._pxw = K, c._pxh = P, c.pixelwidth = K / v, c.pixelheight = P / w, r = !0;
                                    H.scalechildren ? (c._finalxscale = J, c._finalyscale = M) : (c._finalxscale = v, c._finalyscale = w);
                                    m ? (a.style.width = p + "px", a.style.height = q + "px", J = M = 1) : (a.style.width = B + "px", a.style.height = A + "px");
                                    if (g)
                                        if (u) {
                                            var J = u,
                                                M = B,
                                                K = A,
                                                N = t,
                                                t = c.sprite,
                                                p = c.loader,
                                                S, P = da;
                                            5 == J.length && (P *= Number(J[4]));
                                            S = p.naturalWidth;
                                            g = p.naturalHeight;
                                            null == N && (N = [0, 0, S, g]);
                                            p = 'url("' + p.src + '")';
                                            if (null == X)
                                                for (X = Array(9), u = 0; 9 > u; u++) q = Ha(), q.kobject = c, q.imgurl = null, q.style.position = _[0], q.style.overflow = _[6], X[u] = q, t.appendChild(q);
                                            for (var u = [N[0] + 0, N[0] + J[0], N[0] + J[0] + J[2], N[0] + N[2]], v = [N[1] + 0, N[1] + J[1], N[1] + J[1] + J[3], N[1] + N[3]], w = [J[0], J[2], N[2] - J[0] - J[2]], J = [J[1], J[3], N[3] - J[1] - J[3]], M = [w[0] * P | 0, M - ((w[0] + w[2]) * P | 0), w[2] * P | 0], W = [J[0] * P | 0, K - ((J[0] + J[2]) * P | 0), J[2] * P | 0], V = [0, M[0], M[0] + M[1]], ba = [0, W[0], W[0] + W[1]], Y, Z, N = 0; 3 > N; N++)
                                                for (P = 0; 3 > P; P++) q = X[3 * N + P], K = q.style, Y = 0 != w[P] ? M[P] / w[P] : 0, Z = 0 != J[N] ? W[N] / J[N] : 0, q.imgurl != p && (q.imgurl = p, K.backgroundImage = p), q = d.mac && d.firefox ? U.devicePixelRatio : 1, K[oe] = (S * Y * q | 0) / q + "px " + (g * Z * q | 0) / q + "px", K.backgroundPosition = (-u[P] * Y * q | 0) / q + "px " + (-v[N] * Z * q | 0) / q + "px", K.left = V[P] + "px", K.top = ba[N] + "px", K.width = M[P] + "px", K.height = W[N] + "px";
                                            t.style.background = "none"
                                        } else {
                                            if (X && (p = c.sprite)) {
                                                try {
                                                    for (S = 0; 9 > S; S++) X[S].kobject = null, p.removeChild(X[S])
                                                } catch (ea) {}
                                                X = null;
                                                c.loader && (p.style.backgroundImage = 'url("' + c.loader.src + '")')
                                            }
                                            a.style.backgroundPosition = t ? -t[0] * J + "px " + -t[1] * M + "px" : "0 0";
                                            a.style[oe] = g.naturalWidth * J + "px " + g.naturalHeight * M + "px"
                                        } c.jsplugin && c.jsplugin.onresize && (c._pxw != c.imagewidth || c._pxh != c.imageheight || c.forceresize) && (t = [c.imagewidth, c.imageheight], c.imagewidth = 0 < c._pxw ? c._pxw : 1, c.imageheight = 0 < c._pxh ? c._pxh : 1, c.forceresize = !1, !0 === c.jsplugin.onresize(c._pxw, c._pxh) && (c.imagewidth = t[0], c.imageheight = t[1]));
                                    p = "";
                                    S = t = 0;
                                    0 == h && (h = E.ex * -B, g = E.ey * -A, t = E.ax * e + E.asx * z + h, S = E.ay * f + E.asy * G + g, c.pixelx = (t + x) / b, c.pixely = (S + F) / b, t -= aa[3], S -= aa[0], 0 == c.accuracy && (t = Nb(t), S = Nb(S)), b = B / 2 + h, e = A / 2 + g, m && (f = m = 1, A = c.imagewidth / 2, B = c.imageheight / 2, G = z = 0, y && 0 == y.DATA.scalechildren && (m /= y.pixelwidth / y.imagewidth, f /= y.pixelheight / y.imageheight, z = -h * (1 - m), G = -g * (1 - f)), p = _[80] + (z - A) + "px," + (G - B) + _[413] + l * m + "," + C * f + _[360] + A + "px," + B + "px) ", 0 != l && (b /= l, x /= l), 0 != C && (e /= C, F /= C)), p = _[80] + t + "px," + S + "px) " + p + _[80] + -b + "px," + -e + _[402] + H.rotate + _[296] + (b + x) + "px," + (e + F) + "px)", xc && 2 > rd && !0 !== d.opera ? p = _[202] + p : d.androidstock && (p = _[227] + p), fb ? a.style[fb] = p : (a.style.left = t + "px", a.style.top = S + "px"), y = H.visible && D ? "" : "none", y != a.style.display && (a.style.display = y));
                                    if (r || R) {
                                        if (a = c._childs)
                                            for (y = a.length, c.poschanged = !1, r = 0; r < y; r++) a[r].updatepos(c.getfullpath() + _[534] + r + "]");
                                        R = !1
                                    }
                                }
                            }
                        }
                    }
                },
                Sf = function() {
                    function a(a, c, d, e) {
                        f.registerattribute(c, d, function(d) {
                            u[c] != d && (u[c] = d, null != e ? e(c, d) : b(a))
                        }, function() {
                            return u[c]
                        })
                    }
    
                    function b(a) {
                        C |= a;
                        f && null == z && (z = setTimeout(p, 0))
                    }
    
                    function p() {
                        z = null;
                        if (f) {
                            var a = !1;
                            2 == C && (a = r());
                            0 == a && F();
                            g();
                            C = 0
                        }
                    }
    
                    function g() {
                        f && (f._tf_id = f.name + "_" + ++y + Pa())
                    }
    
                    function e(a) {
                        a && 0 == ("" + a).indexOf("data:") && ((a = N("data[" + a.slice(5) + _[83])) || (a = ""));
                        return a
                    }
    
                    function m(a) {
                        if (a && a.parentNode) try {
                            a.parentNode.removeChild(a)
                        } catch (b) {}
                    }
    
                    function n(a) {
                        a && (a.style.left = _[141], a.style.visibility = _[6], W.viewerlayer.appendChild(a), a.childNodes[0].getBoundingClientRect())
                    }
    
                    function h(a) {
                        a.ontouchend = function() {
                            a.click()
                        }
                    }
    
                    function r() {
                        var a = !1;
                        if (P) {
                            var b = P.childNodes[0];
                            if (b) {
                                var a = b.style,
                                    b = la(u.background),
                                    c = la(u.border),
                                    e = parseInt(u.backgroundcolor),
                                    g = parseFloat(u.backgroundalpha);
                                isNaN(g) && (g = 1);
                                var h = c ? parseFloat(u.borderwidth) : 0;
                                isNaN(h) && (h = 1);
                                var l = u.bordercolor,
                                    l = l ? parseInt(l) : 0,
                                    m = la(u.mergedalpha),
                                    n = parseFloat(u.borderalpha);
                                isNaN(n) && (n = 1);
                                var p = Number(u.textshadow);
                                isNaN(p) && (p = 0);
                                var q = u.textshadowangle * S,
                                    t = Number(u.shadow);
                                isNaN(t) && (t = 0);
                                var w = d.firefox ? .78 : .8,
                                    v = u.shadowangle * S,
                                    x = Math.round(t * Math.cos(v)),
                                    v = Math.round(t * Math.sin(v)),
                                    y = parseFloat(u.shadowrange);
                                if (isNaN(y) || 0 > y) y = 0;
                                a.backgroundColor = b ? pa(e, g) : "";
                                a.borderColor = c && 0 < h ? pa(l, (m ? g : 1) * n) : "";
                                a.borderRadius = 0 < J[0] + J[1] + J[2] + J[3] ? J.join("px ") + "px" : "";
                                a[cc] = b && 0 < t ? x + "px " + v + "px " + w * y + "px " + pa(u.shadowcolor, (m ? g : 1) * u.shadowalpha) : "";
                                a.textShadow = 0 < p ? Math.round(p * Math.cos(q)) + "px " + Math.round(p * Math.sin(q)) + "px " + w * u.textshadowrange + "px " + pa(u.textshadowcolor, (m ? g : 1) * u.textshadowalpha) : "";
                                K[0] = h;
                                K[1] = h;
                                K[2] = h;
                                K[3] = h;
                                b && 0 < t && (K[0] -= Math.min(x - y, 0), K[1] += Math.max(x + y, 0), K[2] -= Math.min(v - y, 0), K[3] += Math.max(v + y, 0));
                                a = !0;
                                f.GL && (nb = !0)
                            }
                        }
                        return a
                    }
    
                    function F() {
                        if (f) {
                            z && (clearTimeout(z), z = null);
                            0 != f.haschanged_flags && f.processUpdates();
                            var a = 2 == A || 1 == A && 0 == f.haveUserWidth(),
                                b = 2 == l || 1 == l && 0 == f.haveUserHeight(),
                                g = u.html,
                                m = u.css,
                                g = g ? e(g) : "",
                                m = m ? e(m) : "";
                            la(u.background);
                            var p = la(u.border),
                                q = parseFloat(u.borderwidth);
                            isNaN(q) && (q = 1);
                            var g = unescape(g),
                                g = be(g),
                                m = m.split("0x").join("#"),
                                t = m.split("}").join("{").split("{");
                            if (1 < t.length) {
                                for (var v = [], m = 1; m < t.length; m += 2) {
                                    var w = Ga(t[m - 1]),
                                        y = t[m],
                                        B = "p" == G(w) ? "div" : w,
                                        g = g.split("<" + w).join("<" + B + _[512] + y + "' "),
                                        g = g.split("</" + w + ">").join("</" + B + ">");
                                    v.push(t[m])
                                }
                                m = ""
                            }
                            g = _[234] + E[0] + "px " + E[1] + "px " + E[2] + "px " + E[3] + "px;" + m + "'>" + g + _[92];
                            1 == u.vcenter && (g = _[320] + (0 == a ? _[233] : "") + "width:100%;height:100%;border-collapse:collapse;border-spacing:0;text-decoration:inherit;margin:0;padding:0;'><tr style='vertical-align:middle;'><td style='width:100%;padding:0;margin:0;'>" + g + _[242]);
                            g = g.split("<p").join(_[181]);
                            g = g.split("</p>").join(_[92]);
                            m = _[245];
                            if (1 == a || 0 == la(u.wordwrap)) m += _[240];
                            0 == b && (m += _[355]);
                            M = 1;
                            p && 0 < q ? (M = q * da, m += _[562] + Math.ceil(q) + _[221]) : M = 0;
                            0 == a && (m += _[598] + f.imagewidth + _[236]);
                            g = '<div style="' + m + '">' + g + _[92];
                            P && P.parentNode == f.sprite && (Y = P, P = null);
                            null == P && (P = Ha(), Z = P.style, la(u.selectable) && (Z.webkitUserSelect = Z.MozUserSelect = Z.msUserSelect = Z.oUserSelect = Z.userSelect = "text", Z.cursor = "text"), Z.position = _[0], Z.left = Z.top = -M + "px", _[7] == f._type && 1 == f.DATA.distorted ? (Z.width = "100%", Z.height = "100%", Z[fb] = "") : (Z[ed] = "0 0", Z[fb] = _[161] + da + ")", Z.width = 100 / da + "%", Z.height = 100 / da + "%"), Z.fontSize = "12px", Z.fontFamily = "Arial", Z.lineHeight = _[59], Z.color = _[26]);
                            P.innerHTML = g;
                            r();
                            a = f.interactivecontent;
                            if (b = P.getElementsByTagName("a"))
                                if (g = b.length, 0 < g)
                                    for (a = !0, m = 0; m < g; m++)
                                        if (p = b[m]) q = "" + p.href, _[618] == q.toLowerCase().slice(0, 6) && (p.href = _[191] + W.viewerlayer.id + _[473] + q.slice(6).split("'").join('"') + "','" + f.getfullpath() + "');"), d.touch && h(p);
                            0 < P.getElementsByTagName(_[609]).length && (a = !0);
                            P.style.pointerEvents = a ? "auto" : "none";
                            _[7] == f._type && (f.forceupdate = !0);
                            n(P);
                            H = c = !1;
                            f.loaded = !0;
                            m = f.DATA.scalechildren;
                            f.DATA.scalechildren = !m;
                            f.scalechildren = m;
                            X = 0;
                            aa = cb;
                            null == U && (U = setTimeout(D, 10));
                            C = 0
                        }
                    }
    
                    function D() {
                        U = null;
                        H = c = !1;
                        if (f && P) {
                            var a = 2 == A || 1 == A && 0 == f.haveUserWidth(),
                                b = 2 == l || 1 == l && 0 == f.haveUserHeight();
                            I = !0;
                            var d = P && (P.parentNode == f.sprite || null == f.sprite && !!f.GL),
                                e = 0,
                                g = 0;
                            if (0 == a && 0 == b) g = f.imageheight, 1 > g && (g = 1);
                            else {
                                try {
                                    if (e = P.childNodes[0].clientWidth, g = P.childNodes[0].clientHeight, 0 == e || 3 > g) g = 0
                                } catch (h) {}
                                if (1 > g && d && P.parentNode && 1 > P.parentNode.clientHeight) {
                                    n(P);
                                    X = 0;
                                    aa = cb;
                                    null == U && (U = setTimeout(D, 10));
                                    I = !1;
                                    return
                                }
                            }
                            if (0 < g) {
                                if (d = f.DATA.enabled, f.DATA.enabled = !d, f.enabled = d, Z.top = Z.left = -M + "px", c = !0, Y && Y.parentNode == f.sprite ? (Z.visibility = _[16], f.sprite.replaceChild(P, Y), Y = null) : (m(Y), Y = null, f.sprite && (Z.visibility = _[16], f.sprite.appendChild(P))), 0 != a || 0 != b)
                                    if (e = a ? Math.round(e) : f.imagewidth, g = b ? Math.round(g) : f.imageheight, e != f.DATA.width || g != f.DATA.height) a && b ? f.registersize(e, g) : a ? f.registersize(e, null) : b && f.registersize(null, g), f.updatepluginpos(_[137]), _[7] == f._type && ie(!0, f.index), f.onautosized && V.callaction(f.onautosized, f, !0)
                            } else X++, 3 > X || cb < aa + 1 ? null == U && (U = setTimeout(D, 20)) : (Y && Y.parentNode == f.sprite && (f.sprite.replaceChild(P, Y), Y = null), f.DATA.height = 0);
                            I = !1
                        }
                    }
    
                    function B() {
                        if (f._tf_id != f._tf_canvas_id || 0 == c) return !0;
                        var a = f.getparsed(),
                            b = a.w,
                            a = a.h;
                        return b != f.imagewidth || a != f.imageheight || f.forceresize ? (f.imagewidth = b, f.imageheight = a, f.forceresize = !1, v.onresize(b, a), !0) : !1
                    }
    
                    function q() {
                        function a(b, c) {
                            var d, e = b.length;
                            for (d = 0; d < e; d++) {
                                var f = b[d];
                                if (0 == f.childNodes.length) {
                                    if ("BR" != f.nodeName) {
                                        var g = f.nodeValue;
                                        if (g && "" != g.trim()) {
                                            var h = _[82] == V.textDecorationLine || c & 4;
                                            z.font = V.fontStyle + " " + V.fontWeight + " " + V.fontSize + " " + V.fontFamily;
                                            z.fillStyle = V.color;
                                            Z.selectNodeContents(f);
                                            var f = Z.getClientRects(),
                                                l = f.length,
                                                m, n;
                                            if (1 == l) {
                                                if (m = f[0].left - aa, n = f[0].bottom - ba, z.fillText(g, A + m, C + n), h) {
                                                    var p = .075 * parseFloat(V.fontSize);
                                                    z.fillStyle = V.textDecorationColor;
                                                    z.fillRect(A + m, C + n - 1.5 * p, f[0].width, p)
                                                }
                                            } else if (1 < l) {
                                                m = g;
                                                n = [];
                                                for (var g = "", q = 0, t = 0, r = m.length, u = 0, t = p = 0; t < r; t++)
                                                    if (u = m.charCodeAt(t), 32 >= u) {
                                                        if (0 == q) {
                                                            for (; 1 < p;) p--, n.push("-");
                                                            0 < p && (n.push("- "), p = 0)
                                                        } else
                                                            for (; 0 < p;) p--, n.push("-");
                                                        0 < q && (n.push(g + " "), q = 0, g = "")
                                                    } else 45 == u ? 0 < q ? (n.push(g + "-"), q = 0, g = "") : 0 == q && p++ : (g += m.charAt(t), q++);
                                                if (0 == q) {
                                                    for (; 1 < p;) p--, n.push("-");
                                                    0 < p && n.push("- ")
                                                } else
                                                    for (; 0 < p;) p--, n.push("-");
                                                0 < q && n.push(g);
                                                g = n;
                                                q = g.length;
                                                for (r = t = 0; r < l; r++) {
                                                    m = f[r].left - aa;
                                                    n = f[r].bottom - ba;
                                                    for (var p = Math.ceil(f[r].width), u = 0, w = ""; t < q;) {
                                                        var v = g[t],
                                                            x = z.measureText(Ga(w + v)).width | 0;
                                                        if (x > p) break;
                                                        u = x;
                                                        w += v;
                                                        t++
                                                    }
                                                    z.fillText(w, A + m, C + n);
                                                    h && (p = .075 * parseFloat(V.fontSize), z.fillStyle = V.textDecorationColor, z.fillRect(A + m, C + n - 1.5 * p, u, p))
                                                }
                                            }
                                        }
                                    }
                                } else h = c, l = V, V = getComputedStyle(f), m = ("" + f.nodeName).toLowerCase(), "b" == m ? c |= 1 : "i" == m ? c |= 2 : "u" == m && (c |= 4), a(f.childNodes, c), V = l, c = h
                            }
                        }
                        var b = f.getparsed(),
                            e = b.w,
                            g = b.h;
                        if (e != f.imagewidth || void 0 === f.imagewidth || g != f.imageheight || void 0 === f.imageheight || f.forceresize) f.imagewidth = e, f.imageheight = g, f.forceresize = !1, v.onresize(e, g);
                        else if (0 == c || 0 == H) v.onresize(e, g);
                        if (0 >= e || 0 >= g || !P) return null;
                        var h = la(u.background),
                            l = parseInt(u.backgroundcolor),
                            b = parseFloat(u.backgroundalpha);
                        isNaN(b) && (b = 1);
                        var m = M / da,
                            n = u.bordercolor,
                            n = n ? parseInt(n) : 0,
                            p = parseFloat(u.borderalpha);
                        isNaN(p) && (p = 1);
                        var q = la(u.mergedalpha),
                            r = Number(u.shadow);
                        isNaN(r) && (r = 0);
                        var w = u.shadowangle * S,
                            x = Number(u.textshadow);
                        isNaN(x) && (x = 0);
                        var y = u.textshadowangle * S,
                            D = e,
                            B = g,
                            A = 0,
                            C = 0,
                            A = K[0],
                            C = K[2],
                            e = e + (K[0] + K[1]),
                            g = g + (K[2] + K[3]);
                        null == ca && (ca = {}, ca.canvas = Ha(2), ca.ctx = ca.canvas.getContext("2d"));
                        var E = ca.canvas,
                            z = ca.ctx,
                            G = d.pixelratio * f.oversampling,
                            F = Za.getMaxTexSize();
                        0 >= F ? F = 2048 : 4096 < F && (F = 4096);
                        var I = G,
                            N = G,
                            R = e * I + .5 | 0,
                            U = g * N + .5 | 0;
                        if (f.DATA.mipmapping) var X = Aa(R),
                            Y = Aa(U),
                            I = X / R * I,
                            R = X,
                            N = Y / U * N,
                            U = Y;
                        R > F && (I *= F / R, R = F);
                        U > F && (N *= F / U, U = F);
                        E.width = R;
                        E.height = U;
                        z.scale(I, N);
                        r *= G;
                        x *= G;
                        z.clearRect(0, 0, e, g);
                        if (h || 0 < m) g = e = null, 0 < J[0] + J[1] + J[2] + J[3] && (e = [], e[0] = J[0], e[1] = J[1], e[2] = J[2], e[3] = J[3], g = e), 0 < m && e && (g = [], g[0] = Math.max(e[0] - m, 0), g[1] = Math.max(e[1] - m, 0), g[2] = Math.max(e[2] - m, 0), g[3] = Math.max(e[3] - m, 0)), p *= q ? b : 1, 0 < r && (z.shadowBlur = u.shadowrange * G, z.shadowColor = pa(u.shadowcolor, (q ? b : 1) * u.shadowalpha), z.shadowOffsetX = Math.round(r * Math.cos(w)), z.shadowOffsetY = Math.round(r * Math.sin(w)), z.fillStyle = pa(0 < m ? n : l, 1), z.globalCompositeOperation = _[77], t(z, A - m, C - m, D + 2 * m, B + 2 * m, e), z.shadowBlur = z.shadowOffsetX = z.shadowOffsetY = 0, z.shadowColor = "#000", z.globalCompositeOperation = _[113], t(z, A - m, C - m, D + 2 * m, B + 2 * m, e), z.globalCompositeOperation = _[77]), 0 < m && (h && (z.fillStyle = pa(l, b), t(z, A - m, C - m, D + 2 * m, B + 2 * m, e)), z.fillStyle = pa(n, p), t(z, A - m, C - m, D + 2 * m, B + 2 * m, e), z.globalCompositeOperation = _[113], z.fillStyle = pa(l, 1), t(z, A, C, D, B, g), z.globalCompositeOperation = _[77]), h && (z.fillStyle = pa(l, b), t(z, A, C, D, B, g));
                        z.textBaseline = _[3];
                        var h = P.childNodes[0].childNodes[0],
                            l = h.childNodes[0],
                            V = getComputedStyle(h),
                            Z = null,
                            m = null,
                            m = W.viewerlayer.getBoundingClientRect(),
                            aa = m.left,
                            ba = m.top;
                        if (l && (Z = ea.createRange(), Z.selectNodeContents(l), m = Z.getBoundingClientRect(), -1E3 > m.left - aa)) return null;
                        z.beginPath();
                        z.rect(A, C, D, B);
                        z.clip();
                        0 < x ? (z.shadowBlur = u.textshadowrange * G, z.shadowColor = pa(u.textshadowcolor, (q ? b : 1) * u.textshadowalpha), z.shadowOffsetX = Math.round(x * Math.cos(y)), z.shadowOffsetY = Math.round(x * Math.sin(y))) : (z.shadowBlur = z.shadowOffsetX = z.shadowOffsetY = 0, z.shadowColor = "#000");
                        l && a(h.childNodes, 0);
                        f._tf_canvas_id = f._tf_id;
                        return E
                    }
    
                    function t(a, b, c, d, e, f) {
                        f ? (a.beginPath(), a.moveTo(b, c + f[3]), a.lineTo(b, c + e - f[3]), a.arcTo(b, c + e, b + f[3], c + e, f[3]), a.lineTo(b + d - f[2], c + e), a.arcTo(b + d, c + e, b + d, c + e - f[2], f[2]), a.lineTo(b + d, c + f[1]), a.arcTo(b + d, c, b + d - f[1], c, f[1]), a.lineTo(b + f[0], c), a.arcTo(b, c, b, c + f[0], f[0]), a.closePath(), a.fill()) : a.fillRect(b, c, d, e)
                    }
                    var v = this,
                        f = null,
                        u = {},
                        z = null,
                        C = 0,
                        y = 0,
                        A = 1,
                        l = 1,
                        c = !1,
                        H = !1,
                        E = [0, 0, 0, 0],
                        J = [0, 0, 0, 0],
                        M = 1,
                        K = [0, 0, 0, 0],
                        U = null,
                        I = !1,
                        X = 0,
                        aa = 0,
                        R = da,
                        Y = null,
                        P = null,
                        Z = null;
                    v.registerplugin = function(c, d, e) {
                        f = e;
                        c = f.html;
                        d = f.css;
                        delete f.html;
                        delete f.css;
                        f._istextfield = !0;
                        f._tf_extends = K;
                        g();
                        f.accuracy = 0;
                        f.registerattribute(_[463], "auto", function(a) {
                            A = "auto" == G(a) ? 1 : 2 * la(a);
                            b(1)
                        }, function() {
                            return 1 == A ? "auto" : 2 == A ? "true" : _[27]
                        });
                        f.registerattribute(_[442], "auto", function(a) {
                            l = "auto" == G(a) ? 1 : 2 * la(a);
                            b(1)
                        }, function() {
                            return 1 == l ? "auto" : 2 == l ? "true" : _[27]
                        });
                        f.registerattribute(_[248], !1);
                        a(1, _[550], !1);
                        a(1, _[55], "2", function(a, c) {
                            Ob(c, 1, " ", E);
                            b(1)
                        });
                        a(2, _[134], !0);
                        a(2, _[307], 1);
                        a(2, _[281], 16777215);
                        a(1, _[90], !1);
                        a(1, _[129], 1);
                        a(2, _[126], 1);
                        a(2, _[403], !0);
                        a(2, _[128], 0);
                        a(2, _[448], "0", function(a, c) {
                            Ob(c, 1, " ", J);
                            b(2)
                        });
                        a(2, _[583], 0);
                        a(2, _[386], 4);
                        a(2, _[388], 45);
                        a(2, _[390], 0);
                        a(2, _[392], 1);
                        a(2, _[429], 0);
                        a(2, _[279], 4);
                        a(2, _[280], 45);
                        a(2, _[298], 0);
                        a(2, _[297], 1);
                        a(1, _[414], !1);
                        a(1, _[487], !0);
                        a(2, _[375], 1);
                        a(1, _[589], "");
                        f.registerSetterGetter("bg", function(a) {
                            f.background = a
                        }, function() {
                            return u.background
                        });
                        f.registerSetterGetter(_[155], function(a) {
                            f.backgroundcolor = a
                        }, function() {
                            return u.backgroundcolor
                        });
                        f.registerSetterGetter(_[149], function(a) {
                            f.backgroundalpha = a
                        }, function() {
                            return u.backgroundalpha
                        });
                        f.registerSetterGetter(_[144], function(a) {
                            a = a.split(" ");
                            var b = parseFloat(a[0]);
                            isNaN(b) && (b = 0);
                            f.border = 0 < b;
                            f.borderwidth = b;
                            f.bordercolor = parseInt(a[1]);
                            a = parseFloat(a[2]);
                            f.borderalpha = isNaN(a) ? 1 : a;
                            f.mergedalpha = !1
                        }, function() {
                            return u.borderwidth + " " + zd(u.bordercolor) + " " + u.borderalpha
                        });
                        f.registerSetterGetter(_[127], function(a) {
                            f.roundedge = a
                        }, function() {
                            return u.roundedge
                        });
                        f.registerSetterGetter(_[145], function(a) {
                            a = a.split(" ");
                            if (5 == a.length) {
                                var b = parseFloat(a[0]),
                                    c = parseFloat(a[1]),
                                    d = Math.sqrt(b * b + c * c);
                                f.shadow = 0 == d ? .001 : d;
                                f.shadowangle = Math.atan2(c, b) / S;
                                f.shadowrange = a[2];
                                f.shadowcolor = a[3];
                                f.shadowalpha = a[4]
                            } else f.shadow = 0
                        }, function() {
                            var a = u.shadow;
                            if (0 == a) return "";
                            var b = u.shadowangle * S,
                                c = Math.round(a * Math.cos(b)),
                                a = Math.round(a * Math.sin(b));
                            return c + " " + a + " " + u.shadowrange + " " + zd(u.shadowcolor) + " " + u.shadowalpha
                        });
                        f.registerSetterGetter(_[459], function(a) {
                            a = a.split(" ");
                            if (5 == a.length) {
                                var b = parseFloat(a[0]),
                                    c = parseFloat(a[1]),
                                    d = Math.sqrt(b * b + c * c);
                                f.textshadow = 0 == d ? .001 : d;
                                f.textshadowangle = Math.atan2(c, b) / S;
                                f.textshadowrange = a[2];
                                f.textshadowcolor = a[3];
                                f.textshadowalpha = a[4]
                            } else f.textshadow = 0
                        }, function() {
                            var a = u.textshadow;
                            if (0 == a) return "";
                            var b = u.textshadowangle * S,
                                c = Math.round(a * Math.cos(b)),
                                a = Math.round(a * Math.sin(b));
                            return c + " " + a + " " + u.textshadowrange + " " + zd(u.textshadowcolor) + " " + u.textshadowalpha
                        });
                        f.registerattribute("blur", 0);
                        f.registerattribute(_[517], 0);
                        f.registerattribute(_[520], null, function(a) {
                            null != a && "" != a && "none" != ("" + a).toLowerCase() && (l = 2, b(1))
                        }, function() {
                            return 2 == l ? _[91] : "none"
                        });
                        0 != A && 0 != l || f.registercontentsize(400, 300);
                        f.sprite && (f.sprite.style.color = _[26], f.sprite.style[_[67]] = "none", f.sprite.style.pointerEvents = "none");
                        a(1, "html", c ? c : "");
                        a(1, "css", d ? d : "");
                        f.renderToCanvasUpdateCheck = B;
                        f.renderToCanvas = q
                    };
                    v.unloadplugin = function() {
                        f && (f.loaded = !1, U && clearTimeout(U), z && clearTimeout(z), m(Y), m(P));
                        f = z = U = Z = P = Y = null
                    };
                    v.onvisibilitychanged = function(a) {
                        a && _[7] == f._type && (f.forceupdate = !0);
                        return !1
                    };
                    v.onresize = function(a, b) {
                        if (R != da) return R = da, Ob(u.padding, 1, " ", E), Ob(u.roundedge, 1, " ", J), F(), !1;
                        if (I) return !1;
                        if (f) {
                            var d = 2 == A || 1 == A && 0 == f.haveUserWidth(),
                                e = 2 == l || 1 == l && 0 == f.haveUserHeight();
                            f.registercontentsize(a, b);
                            P && (0 == f.ishotspot ? (Z[fb] = _[161] + da + ")", Z.width = 100 / da + "%", Z.height = 100 / da + "%") : (Z[fb] = "", Z.width = "100%", Z.height = "100%"), c && (Z.left = Z.top = -M + "px"), 0 == d && (P.childNodes[0].style.width = a + "px"), 0 == e && (P.childNodes[0].style.height = b + "px"), H = !0, d || e ? (c = !1, f.sprite && (d && (f.sprite.style.width = 0), e && (f.sprite.style.height = 0)), X = 0, aa = cb, null == U && (U = setTimeout(D, 10))) : (0 == d && (Z.width = a + 2 * M + "px"), 0 == e && (Z.height = b + "px")))
                        }
                        return !1
                    };
                    v.updatehtml = F;
                    var ca = null
                },
                vc = 1,
                Lf = function() {
                    function a() {
                        var a = G(p.renderer),
                            g = p.webGL,
                            g = _[65] == a ? !1 : d.webgl;
                        if (p.webGL = g) {
                            if (b.sprite) {
                                try {
                                    W.hotspotlayer.removeChild(b.sprite)
                                } catch (n) {}
                                b.destroySprite();
                                nb = b.renderToBitmap = !0
                            }
                        } else b.sprite || (b.renderToBitmap = !1, b.createSprite(), W.hotspotlayer.appendChild(b.sprite), b.videoDOM && b.sprite.appendChild(b.videoDOM), b.posterDOM && b.sprite.appendChild(b.posterDOM), 0 == b._isNE() && b.loaded && (b.sprite.style.backgroundImage = 'url("' + b.loader.src + '")'), nb = !0)
                    }
                    var b = this;
                    b.prototype = Ic;
                    this.prototype.call(this);
                    b._type = _[7];
                    b.ishotspot = !0;
                    var p = b.DATA;
                    p.webGL = d.webgl;
                    p.mx_RR = Ja();
                    b.createVars([_[522], p.webGL ? _[64] : _[65], 131072, _[444], !1, 8, _[262], !1, 8, "ath", 0, 8, "atv", 0, 8, "zoom", !1, 1048576, _[447], !1, 1048576, _[162], "", 8, "depth", 1E3, 2048, _[574], 0, 8, "rx", 0, 262144, "ry", 0, 262144, "rz", 0, 262144, _[294], !1, 262144, "tx", 0, 524288, "ty", 0, 524288, "tz", 0, 524288]);
                    b.edge = _[91];
                    b.accuracy = 1;
                    b.scaleflying = !0;
                    b.zorder2 = 0;
                    b.forceupdate = !1;
                    b.renderToBitmap = d.webgl;
                    ad = !0;
                    b.point = new Vb(null);
                    var g = b.create;
                    b.create = function() {
                        g();
                        a()
                    };
                    b.processUpdatesHS = function() {
                        b.haschanged_flags & 131072 && (b.haschanged_flags &= -131073, a());
                        if (b.haschanged_flags & 262144) {
                            b.haschanged_flags &= -262145;
                            var d = p.rx,
                                g = p.ry,
                                n = p.rz,
                                h = b.getparsed();
                            0 != d || 0 != g || 0 != n ? (h.flags |= 1024, fe(p.mx_RR, n, g, d, !p.inverserotation)) : h.flags &= -1025;
                            b.requestUpdate()
                        }
                        b.haschanged_flags & 524288 && (b.haschanged_flags &= -524289, d = p.tx, g = p.ty, n = p.tz, h = b.getparsed(), h.flags = 0 != d || 0 != g || 0 != n ? h.flags | 2048 : h.flags & -2049, b.requestUpdate());
                        b.haschanged_flags & 1048576 && (b.haschanged_flags &= -1048577, b.requestUpdate());
                        b.haschanged_flags & Pb && (b.haschanged_flags &= ~Pb, he(b), b.requestUpdate())
                    };
                    b.updatepos = function() {
                        b.requestUpdate()
                    };
                    b.getcenter = function() {
                        var a = 0,
                            d = 0,
                            g = 25;
                        if (b.DATA.url) a = b.DATA.ath, d = b.DATA.atv, g = 25 * Number(b.DATA.scale);
                        else {
                            for (var h = b.point.getArray(), p = 0, r = h.length, w, B, q, t = 5E4, v = -5E4, f = 5E4, u = -5E4, z = 5E4, C = -5E4, y = 0, A = 0, l = 0, p = 0; p < r; p++) B = h[p], w = Number(B.ath), q = Number(B.atv), B = 0 > w ? w + 360 : w, w < t && (t = w), w > v && (v = w), B < f && (f = B), B > u && (u = B), q < z && (z = q), q > C && (C = q), w = (180 - w) * S, q *= S, y += Math.cos(q) * Math.cos(w), l += Math.cos(q) * Math.sin(w), A += Math.sin(q);
                            0 < r && (y /= r, A /= r, l /= r, a = 90 + Math.atan2(y, l) / S, d = -Math.atan2(-A, Math.sqrt(y * y + l * l)) / S, 180 < a && (a -= 360), w = v - t, q = C - z, 170 < w && (w = u - f), g = w > q ? w : q)
                        }
                        1 > g ? g = 1 : 90 < g && (g = 90);
                        h = new Gc;
                        h.x = a;
                        h.y = d;
                        h.z = g;
                        g = arguments;
                        2 == g.length && (X(g[0], a, !1, this), X(g[1], d, !1, this));
                        return h
                    }
                },
                Ce = "",
                wc = 1,
                Cf = "translate3D(;;px,;;px,0px) ;;rotateX(;;deg) rotateY(;;deg) ;;deg) rotateX(;;deg) scale3D(;;) translateZ(;;px) rotate(;;deg) translate(;;px,;;px) rotate;;deg) rotate;;deg) rotate;;deg) scale(;;,;;) translate(;;px,;;px)".split(";"),
                Df = "translate(;;px,;;px) translate(;;px,;;px) rotate(;;deg) translate(;;px,;;px) scale(;;,;;) translate(;;px,;;px)".split(";"),
                If = function() {
                    this.fullscreen = d.fullscreensupport;
                    this.touch = this.versioninfo = !0;
                    this.customstyle = null;
                    this.enterfs = _[443];
                    this.exitfs = _[287];
                    this.item = new Vb(function() {
                        this.visible = this.enabled = !0;
                        this.caption = null;
                        this.separator = !1;
                        this.onclick = null
                    })
                },
                Mf = function() {
                    function a() {
                        g = r.hlookat;
                        m = d.speed;
                        n = 0;
                        d.isrotating = !0;
                        d.ispaused = !1;
                        ua(_[254])
                    }
    
                    function b() {
                        d.currentmovingspeed = 0;
                        d.isrotating = !1;
                        d.ispaused = !1;
                        ua(_[268])
                    }
                    var d = this;
                    d.enabled = !1;
                    d.waittime = 1.5;
                    d.accel = 1;
                    d.speed = 10;
                    d.horizon = 0;
                    d.tofov = Number.NaN;
                    d.zoomslowdown = !0;
                    d.interruptionevents = "userviewchange|layers|keyboard";
                    d.isrotating = !1;
                    d.ispaused = !1;
                    var g = d.currentmovingspeed = 0,
                        e = 0,
                        m = 1,
                        n = 0,
                        h = !1;
                    d.start = function() {
                        d.enabled = !0;
                        e = Pa();
                        a()
                    };
                    d.stop = function() {
                        d.enabled = !1
                    };
                    d.pause = function() {
                        d.ispaused = !0
                    };
                    d.resume = function() {
                        d.ispaused = !1
                    };
                    d.interrupt = function() {
                        Xa(_[228])
                    };
                    d.checkIdletime = function(p, G) {
                        var D = d.enabled;
                        h != D && (h = D, d.ispaused = !1, ua(_[247]));
                        if (D) {
                            if (!d.isrotating) {
                                if (d.ispaused) return Xa(_[235]), !1;
                                (p - G) / 1E3 > d.waittime && (e = p, a())
                            }
                            if (d.isrotating)
                                if (G > e) b();
                                else {
                                    if (d.ispaused) return !1;
                                    var B = r._hlookat,
                                        q = r._vlookat,
                                        D = r._fov,
                                        t = d.zoomslowdown ? Math.tan(Math.min(.5 * D, 45) * S) : 1,
                                        v = d.accel,
                                        f = d.speed,
                                        u = d.currentmovingspeed,
                                        v = v / 60,
                                        f = f / 60;
                                    0 < f ? (u += v * v, u > f && (u = f)) : (u -= v * v, u < f && (u = f));
                                    d.currentmovingspeed = u;
                                    B += t * u;
                                    if (0 < u && 0 > m || 0 > u && 0 < m) m = u, n++;
                                    if (360 <= Math.abs(B - g) || 2 == n && (0 < u ? 0 < B : 0 > B)) g = B, n = 0, ua(_[225]);
                                    t = Math.abs(t * u);
                                    r._hlookat = B;
                                    B = parseFloat(d.horizon);
                                    isNaN(B) || (B = (B - q) / 60, v = Math.abs(B), 0 < v && (v > t && (B = t * B / v), q += B, r._vlookat = q));
                                    q = parseFloat(d.tofov);
                                    isNaN(q) || (q < r.fovmin && (q = r.fovmin), q > r.fovmax && (q = r.fovmax), q = (q - D) / 60, B = Math.abs(q), 0 < B && (B > t && (q = t * q / B), r._fov = D + q));
                                    return !0
                                }
                        } else d.isrotating && b();
                        return !1
                    }
                },
                de = function() {
                    function a(a) {
                        var b = ka.FRM,
                            d = p.webVR;
                        d && d.enabled && d.requestframe && d.requestframe(a) || (0 == b && m ? m(a) : (0 == b && (b = 60), d = 1E3 / b, b = (new Date).getTime(), d = Math.max(0, d - (b - e)), U.setTimeout(a, d), e = b + d))
                    }
    
                    function b() {
                        r && (g(), a(b))
                    }
                    var r = !0,
                        g = null,
                        e = 0,
                        m = U.requestAnimationFrame || U.webkitRequestAnimationFrame || U.mozRequestAnimationFrame || U.oRequestAnimationFrame || U.msRequestAnimationFrame;
                    return {
                        start: function(e) {
                            if (d.ios && 9 > d.iosversion || d.linux && d.chrome || d.desktop && d.safari) m = null;
                            r = !0;
                            g = e;
                            a(b)
                        },
                        stop: function() {
                            r = !1;
                            g = null
                        }
                    }
                }();
            lc.init = function(a) {
                lc.so = a;
                d.runDetection(a);
                if (d.css3d || d.webgl) fb = d.browser.css.transform, Ee = fb + "Style", ed = fb + _[89];
                oe = d.browser.css.backgroundsize;
                cc = d.browser.css.boxshadow;
                var b = 0;
                d.ios && 0 == d.simulator ? 5 <= d.iosversion && 1 != Vd && (b = 4) : d.android ? (rd = 2, b = 4, d.firefox && (b = 0)) : (b = 2, d.desktop && d.safari && (b = 8), d.ie && (b = 8));
                d.browser.css.tileoverlap = b;
                Ff();
                if (!W.build(a)) return !1;
                ga.layer = W.controllayer;
                ga.panoControl = ab;
                ga.getMousePos = W.getMousePos;
                ka.htmltarget = W.htmltarget;
                ka.viewerlayer = W.viewerlayer;
                va(1, _[153] + p.version + _[519] + p.build + (p.debugmode ? _[541] : ")"));
                b = !0;
                a.html5 && 0 <= G(a.html5).indexOf(_[65]) && (b = !1);
                Za.setup(d.webgl && b ? 2 : 1);
                va(1, d.infoString + Za.infoString);
                a && a.basepath && "" != a.basepath && (ma.swfpath = a.basepath);
                W.onResize(null);
                ab.registerControls(W.controllayer);
                de.start(Nf);
                if (!d.css3d && !d.webgl && 0 > G(a.html5).indexOf(_[582])) Ya(_[172]);
                else {
                    var w = b = null,
                        g = [],
                        e = !0,
                        m = 0,
                        n = [],
                        h = "360etours.net clickcwb.com.br afu360.com webvr.net webvr.cn aero-scan.ru shambalaland.com littlstar.com d3uo9a4kiyu5sk.cloudfront.net vrvideo.com lapentor.com".split(" "),
                        x = _[169].split(" "),
                        F = null,
                        D = null,
                        B = dd(100),
                        q = G(_[177]).split(";"),
                        t, v;
                    if (null != kc && "" != kc) {
                        var f = ma.b64u8(kc),
                            u = f.split(";");
                        if (t = u[0] == q[0])
                            if (f = G(f), 0 <= f.indexOf(q[6]) || 0 <= f.indexOf(q[7]) || 0 <= f.indexOf(q[8])) t = !1;
                        var f = kc = null,
                            f = u.length,
                            f = f - 2,
                            z = u[f],
                            C = 0;
                        0 == z.indexOf("ck=") ? z = z.slice(3) : t = !1;
                        if (t)
                            for (t = 0; t < f; t++) {
                                var y = u[t],
                                    A = y.length;
                                for (v = 0; v < A; v++) C += y.charCodeAt(v) & 255;
                                if (!(4 > A) && (v = y.slice(3), "" != v)) switch (_[193].indexOf(y.slice(0, 3)) / 3 | 0) {
                                    case 1:
                                        Ua = parseInt(v);
                                        e = 0 == (Ua & 1);
                                        break;
                                    case 2:
                                        b = v;
                                        g.push(q[1] + "=" + v);
                                        break;
                                    case 3:
                                        w = v;
                                        g.push(q[2] + v);
                                        break;
                                    case 4:
                                        n.push(v);
                                        g.push(q[3] + "=" + v);
                                        break;
                                    case 5:
                                        y = parseInt(v);
                                        F = new Date;
                                        F.setFullYear(y >> 16, (y >> 8 & 15) - 1, y & 63);
                                        break;
                                    case 6:
                                        D = v;
                                        break;
                                    case 7:
                                        A = y = v.length;
                                        if (128 > y)
                                            for (; 128 > A;) v += v.charAt(A % y), A++;
                                        ne = v;
                                        break;
                                    case 8:
                                        break;
                                    case 9:
                                        Ta = v.split("|");
                                        4 != Ta.length && (Ta = null);
                                        break;
                                    case 10:
                                        break;
                                    default:
                                        g.push(y)
                                }
                            }
                        C != parseInt(z) && (m = 1);
                        t = ea.location;
                        t = G(t.search || t.hash);
                        if (0 < t.indexOf(_[111])) {
                            Ya(g.join(", "), G(_[111]).toUpperCase());
                            return
                        }
                        0 < t.indexOf(_[277]) && (null == a.vars && (a.vars = {}), a.vars.consolelog = !0, Ua = Ua & 1 | 14);
                        u = null
                    }
                    g = G(ea[q[3]]);
                    Ua & 512 && (t = !1, d.topAccess ? G(top.document[q[3]]) != g && (t = !0) : t = !0, t && (m = 2));
                    Wd = g;
                    try {
                        throw Error("path");
                    } catch (l) {
                        t = "" + l.stack, u = t.indexOf("://"), 0 < u && (u += 3, f = t.indexOf("/", u), t = t.slice(u, f), f = t.indexOf(":"), 0 < f && (t = t.slice(0, f)), Wd = t)
                    }
                    0 == g.indexOf(_[619]) && (g = g.slice(4));
                    q = "" == g || _[485] == g || _[475] == g || _[501] == g.slice(0, 8) || 0 == g.indexOf(q[4]);
                    d.browser.domain = q ? null : g;
                    if (0 == (Ua & 2) && q) m = 3;
                    else if (!q) {
                        t = g.indexOf(".") + 1;
                        0 > g.indexOf(".", t) && (t = 0);
                        q = g;
                        g = g.slice(t);
                        0 == g.indexOf(_[563]) && _[133] != g && (m = 2);
                        for (t = 0; t < h.length; t++)
                            if (h[t] == g) {
                                m = 2;
                                break
                            } if (0 == m && 0 < n.length)
                            for (m = 2, t = 0; t < n.length; t++)
                                if (g == n[t] || xd(n[t], q)) {
                                    m = 0;
                                    break
                                }
                    }
                    if (b || w)
                        for (n = ("." + b + "." + w).toLowerCase(), t = 0; t < x.length; t++) 0 <= n.indexOf(x[t]) && (m = 1);
                    if (null != F && new Date > F) Ya(_[282]), null != D && setTimeout(function() {
                        U.location = D
                    }, 500);
                    else if (0 < m) Ya(_[121] + ["", _[295], _[250]][m - 1]);
                    else {
                        Ta && (Ua &= -129, va(1, Ta[0]));
                        0 == e && (b ? va(1, _[304] + b) : e = !0);
                        (e || 0 == (Ua & 1)) && W.log(B);
                        e = null;
                        a.xml && (e = a.xml);
                        a.vars && (a.vars.xml && (e = a.vars.xml), e || (e = a.vars.pano));
                        0 == (Ua & 4) && (a.vars = null);
                        Ua & 16 && (p[zc[0]] = p[zc[1]] = !1);
                        m = W.viewerlayer;
                        Ua & 8 ? (m.get = Vc(N), m.set = Vc(X), m.call = Ue) : (m.set = function() {
                            va(2, _[200])
                        }, m.get = Ta ? Vc(N) : m.set, m.call = Vc(V.SAcall));
                        m.screentosphere = r.screentosphere;
                        m.spheretoscreen = r.spheretoscreen;
                        m.unload = Ve;
                        !0 === a.exposeAPI && (m.krpanoAPI = p);
                        p.krpanolicense = {
                            regname: b,
                            regmail: w
                        };
                        a.initvars && ce(a.initvars);
                        V.loadpano(e, a.vars);
                        if (a.onready) a.onready(m);
                        return !0
                    }
                }
            }
        }
        var _ = function() {
            var G = kc;
            kc = null;
            var Ga = G.length - 3,
                la, Aa, Ab, Ea = "",
                Wa = "",
                yb = 1,
                Oa = 0,
                na = [],
                ca = [1, 48, 55, 53, 38, 51, 52, 3];
            Ab = G.charCodeAt(4);
            for (la = 5; la < Ga; la++) Aa = G.charCodeAt(la), 92 <= Aa && Aa--, 34 <= Aa && Aa--, Aa -= 32, Aa = (Aa + 3 * la + 59 + ca[la & 7] + Ab) % 93, Ab = (23 * Ab + Aa) % 32749, Aa += 32, 124 == Aa ? 0 == yb ? Oa ^= 1 : 1 == Oa ? Oa = 0 : (na.push(Ea), Ea = "", yb = 0) : (Aa = String.fromCharCode(Aa), 0 == Oa ? Ea += Aa : Wa += Aa, yb++);
            0 < yb && na.push(Ea);
            Aa = 0;
            for (Ga += 3; la < Ga;) Aa = Aa << 5 | G.charCodeAt(la++) - 53;
            Aa != Ab && (na = null);
            kc = Wa;
            return na
        }();
        _ && _[135] != typeof krpanoJS && (new xd).init(wd)
    };
    embedhtml5(p, "krp:v)J/K)bR!98_|:|.89(L-l3LL?O19fehsQ<z,ONNu{./p,TF*2xjf[TC7@.iQos<k^zuSi~>awWY+np`=()/S5!6$ITsHs`22o!K)KmP4_U<s'GfWA-v)X9h%M{U*s(AobfH|'SJyDP}oN-Y2J9.Jrfw~^U4<57Wx|[[w^mdT5a%K8o+,:]]3YOeM56vKHi458K*-7[,=uU<s79npiB5BhaN*?DHBu2(@vw7/2ISBwrEAo=MT$t`WZ!NgDs]Q?<$RR-!g0}HC}`B?$>{&1zVN*T=oC8!.cH._>X8w6tM!gl=c/?er>)WYimHC&sJo*BPK^@.%<%E/CL2Saak;TbSZC|Ox 8-34Bmu8 KM(Q X]W(R#_@:m?DI%eqxW'@uD)R{%NZg:b RmuDW:)K;J%WEe?Je7^o~H>`Md@Go+QXPr-JR!]zeyV*~3ApVW.f 3>2l@_^)>)dIW~^+qR#w*63D<z:URmzS5o]Ws?~3-,HZ]K'gzsh^6]iSj<jbF}UM}tCVaFFqm KX):1j]CSz3E3iiIvp>d?GYE&p/&{w7As<?}k6`e01jXU+BJB}c|UbnXP<NguouMn.eu4(L6oP4i-,%f}L@w-w;[0.71y9A-Pp6rnhL]+C ><Ge0D2R+)=`|*W3?wOF`#?%[)4M.dhp:wza$;Q`8uawD-fDQy}lOtwr~lT:+;+9c$?%C=X9SX1k9dQVU[ZCVs*n%'4t'uC~p7iUI`H~wu8w7X`ZjIJEL!`3!quzIgbW=NLo`glJe+QQPpkI=&tbjdUaLGjnBDb@~zT}HG[tbO>gSmrW`g$A!*W#A`'?O)-H5GzrjFZjtL>YpIR?j:h<=b hzP[iX1NSY<Np#Ct??9p;LH@YNU(7sK6V=N,ic}-nQipgvw`3+58!uSAeyc|AkM^/'#(W4I m=t.k2B{DkJ]3Y{5eqW+$N3%k?_%WzFGk{g~,Y)V:oQW%[R!?*]axHLCzms6X[BpqoQ_Ggo*K:xKTt~sBr?JNf#`7s(%y{RZb74+IqdoHsd-y?2@/e>pv^s#lx(CF)O-pHfiR!KVczLi=QC^K&gZ`rZL3K2M#<yhRDW{04>uopnc(<(I`%jI]{QvkQG/)1y'mj> OdN^_'&C-2T3YTqN^ C.3va/QBixZFb%n,kcK.bnZyXDC*hHZpOlthK!z9tmTd6Q{VNOI_F-.+23GF<t,J[vgGGSimx6y)ZNoR4_A#{*Sax+-SSg|*T0r.}2 k*,bJX<)G3Bjm$Irc&Ts<*0Se}VHbd?8W`kBL67(vV,~O>vC(h(RaKIzO}?<K=|;f.PlO5C-T@G/ S<K$K,3B!=!~x7A9}ZA(Y|gYa|xK}))H|*lq@XooH7FaWK?{G w`!,:gO7~^N+%Lq#3IvbZ9Ofe?d%U.}Wc`W+][P_J_<Ly0IC3qs],.ovTW@.D@8~3kZik>lGm,1k3NmuVeR7N5<6K(`>G;bzzp:xTm}6'/Y1%*D_k98^vTa3Ze@2gvRIegbEh5t_pG+A:-V4>0wv}:IE({|@s1zH0LuZvP/]):dnCdMz9BT{vS+/Hmd*LZZ@9+@M`q}LvHx3KFi5dpI$HUQ=bH}gkj-ChN$;:WDrGvb&evYTK`$9JIr yMQbQaS!p7%@cRCAb*ns}GU6-pK0j&6>}/;DSy wi3=2/lDa2K~0}![*'f~6XHlx2Mw,~s+_s/cVkS5iUag1:2;a+.v(IYyPpc%FJ3d[TS~1^fhYq.O+uH]N&}osiIr`d#Ht`jx#WsZ&DB|XZ!hn?>gIE$BoveT|1^IdCWa.pFLj5.aW+Xq.RL**2SC)vVa#Z#6>,8+/vvXs92XqtP3 hZHmcyMooK_%1/h@0(&Zz}CyddCgluV>&IsRZJ=)_<:?;:k7(M+ nwCpkR{*CR<P1)rUE@f!b!+h&v:8sJ;JU3_4KhaV[2R^/EZ2 EgkWfp3i7hZ-rLEqy3 m02H^9l[eX6XNI&ZXyaI[=<uYw Zwu@_WELwIUb|]t[7:/n<|%~uccrY8qIMK@o3K)s1fo&#lO%)<w8)h[L01K`8-h!n,hx|m~c.~BE3oG!yARjl'$)}<%aXkr;!^H<[cjQ/K[2smJ'=y%NGI_~yyM/ZWWZE)l9=;lu/KWh{C,zrH/W6/i?kVz!TvXE$h:h*],[<7]/4'sa:.@ cq)$:xizhmh3 .)Bz,Vxl3a-gw{WpqW. fRBXmE=cJM %.>;q^'Y ys(#>r>'>EfU5%PoW{Z#!O_co)$igQhBK]S0}djPjEJ3+HsH9`Nd+E`}c $0&plt)ZCcZwHRJ6%3H ,'g_H)GNXQ~jh8I( Ud=7p^uHmQNk]xAxGR*VnBNz0;e~ne^CKnWHoN_EVIYEQy}p/FYDVXmxUD^r]Ncz9L/FCHAI2>'v+Eu(l8He>3]@L'L?0vlErJRLc-w?<z+5J,Q<v8zx]y&ber+&o8?i&hgy*dKvn(>hq2Eq|9M1Q@YB`QB/flI0FeM]1SOFp]YBISbF1$n1Bf|dN U1;=H((hY3y4-u6kthnK%E1=-sZ7>sv9)b~&t1f{27X}.B]qcB s'b<X`PwNVh|K|iM]]N+QalGfg)^7LIo(FY~8_c&?]Y'~QJ0Sl./6Wp!IM^[i+g=kh%&,yI6]q~*YL8')?):@C0QXfO;{FlI-U$8g GU+sNGD[t=3-cWoq(W<m00zT wbM{``vTeP~'h7yn`qKd&:E7x6hYnq9#M #E=e[q@.w&n[lYg<W=sYIUb1`L6lhA83&/*wBT6ZJ@/< 72FJWk*%~;u$ H{'3'g0rs'-wSX8lDcT*xJ73C<OeU|+?I&o[O}@V*@2J>M(M[>%v7e`oozY'fpl.7Iq:`8>a[UO9(|1`}_&sN$7m5x?~zX`+@Wr.[BtDI[Yniq2WV:vq;uh/61bze{4=xH$bv/4(X5rpN9.lQH)ic6 #58VlPOBt)22n-._{J[yED-KGE{J?1&EV:NLcH^u 6Pv2e@Vr U=q36 -L5LT iIqJck/T<U<W-6<L0=Ev/CJFEM-H[MJS65[$uV3UH+qX!WI=3^Jq'T4g#7^3g&o(::D5S`{64,>pttyd@A'ca9r^=d=j%M7v;rh;|)6t0'.dEZ)FPZuU>4mcPUO/Ibd>To,I>mK'WE/bP5M&SzdsDv&=zyg$t>PTWhPw$%%Z>7d(r_nt^uu1r63yK9~t{EXr[Z2sGP5BLei/Z Urae]v%pco^CGzBp`-^qLB~:Ef<B}HXj07`~vC{7Y-}g;W;E[Ja~_x1%xyGOcTZE[@TMmd`h=zX_+^o=XA_j0Rd-U.m1j-2;@F=HUbV,J8[DH?PCS}- :|A+`vCO`E(Z{s@J]E8waB+tuB78Cic J|8wJH.z-X,.{3$Y6gh]*9(u)}!;u'P|IT()@fTVI;F?H_,SpPZt/8u&h'b+S]y|Bd6RzR/UM`S{n2A$<.8Q2Y~PhI3Sb)?UCW32^Xo+hl8V[[5Q=$tdm$*Fpzvb(EslIUe.+h7LO^nK]9 V`Hf&tAJG)EegeSO-PIxpq=Wt4'@+e~56hDO>99P+dW6y5yE=Yu`v>9wL&bnB5Jk3&K_XK.fq(mG<;~aiyxF0x^t DhERi1H,vf5>[!3d#3}a7W_-^1-G#3CV,1yexH,t:FApG~'t!&8vCaP!1zoF1,Q|SNhrWNB1cL=F|bHX_o-KD.Rr4(c|.lxZM^Qa_8k[lo0,i=#}5?a3R|K/u~L)-57K3O.<W.Log-/pjt z,IDE1R=p%y-;.|WRQq4%HC-TIQrwscL85fjK9!idacihk9&%j`V~1Qv^@Bi7M1J,!(a!yAv{7{g#|yd!fDe!Z5RH9M=S$,eAfU@w+9;m+6nYdz_nD/23/<.`IF6N$!w(}8r-?Q8 V*WngRKqZgV?C%bl-Z=JJG2/o{xUXSn,;bqH@EVjLbY2pe>P-K-@gx)yq1ca&e<!zBg(OJJ}{o4Igj&,NyU#,S)A}9a(*4}NN&7xV;s[x~Z%5d(Vy >~8:MRndN8)%iZy`h0;FX:ps;|94i{0WjUkX>)y;*fbzO[:XQQg6Q=8}UHI<h$?x?In{9sok(B]N_d)n?WPoa2RT8,.@kgS.Kpk9t!Bh1^8<6{>x{FI+mb9#G1/H<A^I%dDwVHDQ@Po#++~/.tt;Z$9z1L~-}^I?>3r1(ZyguXaL];H4:{m>;<5hWRL6sf+j{$Y./6o:Tc[CYaW1JN{Qjn-^j=,N^0d9peXBg xIaz$:WpFlCZ@lsd{q7WE=^vBFXqPJSf/ yR+bg /WwgGVc-2-fc+:P.Hb3E';DtZ-Y8w>=iM|Q?~jq1BMzMCC&FnkMQwfa{+YjK32tg{a-)e'Xzxl7hCRGP`=f2J58BL&-(=9c|?8soKzMz^}gl7ivyQd]mHc$`uA+:6oL$.>bU>;.x~^pVu<En>L_tib0p@O^WA4c`#,zvu'@Bb(,4r&T=vbu'@QA853pZXWo8_OX@Q^je=!S*4&A}<.5M!MP6I]%YpX!3ySET#lHl~t_'KQtD)ERHC$~;jTYP0U:||c^ju6l#Es^Iuui:ql7w|ugOS~B:z3z$ swLS)O++(#$q$c//]hAatSHIJrQ?-L`^[9y$IzxZ^GHR4-P0ZtNGtziL2RrLLRi'Z'IT*oy8QemW=td/m2GVB>n4!_B+&gLpk{t$-f$8%eY$B0?e'2'Q6baD*Ojjv#y{B^#cDI*>&L-ae?>!s`%N[HObSE'Pve5Ax;%PO?(1Q*W'_~V/%p$b0HyI&8cC+pO:#/J:?:a]#2n5'l#bqRS!`d5`1._N/[7CR25TF8?iO0xk$08g4/6M/y,_K)lbp2)z4k>+w|rh?-rqveG=3Y&FJyF.kk7v?`|8FP@x=bcE!]1}oi(:9z^@VVj?xNjAm<~J7ib(8TB<~4jXHv#AA8f9HG)F[Dq noqWy]}o%44'>T=/Qmn7/W8H:$F`?2/!I>>>}Ct_M{(*f}f2ZdN~,r4:h:5JD:j<Ron*d9dSK1RNm}E#e<KLc^+)u%_jD9K1>?}#/?[idDsp71Yl!lrxc<('y[# L[$W6e0,)P(:t75&00W/xb!Nz;.<<'y/.w2UyjWIz,y*~Tb2?&.#$ZYVH1ge[k:-OJ67c),i|CsM8l&&q/dQi.Ln?Gl^wc9$6PHbuqC:}3MO<98z!q%zLZAC-HY9FsAez*Pfx=U}E1q2i{;4RFNfUZ/+nB-l[.kSKn2CXqy7c)UU5Dx'$N|o-nB:9b1p6)7qxzy5$Pn]$WU$|x6FdR0dLLC [1l;X];mZ+!zHR,pe).]%|xsAlh;mY0ZQQGA5M8!A.bc6'd5*+LDp0<9ES8!d&MJH~(=|F'NwYvP/~55K<Q=*qtGPsM>6UOBlfPZZ5 J1L|IFPZNCrjFzd&0:C|Z5O^G5{1s]I}lS9tS<)S_^|^O5b~a~7?F5@Bf*6%;~R$aT0;CSq_;$eK78Z!+>y=xhPwTR]HNMVER*XkLdah%BTLWGTx#aKjSe{N`:vyxedSm&B&4VN'L`CW(,X$#lyVbMK*05:oj*V7]#@cQF'`2`+1uYgu,8 >behgTF09L^c=A0?'s!~g|sT~{.U0R;5:oldDK7xaM$cT93BDTDlg^;{GLiSwQr@1kvGL,0YmtO&lmn5Qd9+N~TZ=T^ W@$4@fdV>9{?1UWVesMEwcmV6_%FFfs*jE3'5<+(1Ih``:ZOEd#ep6|m'?Z_sKH-D OQLZX:Dc! P[.;s$,q]J-WS=:df8#M3IgIjPoU4#<KEWDUXBXi:ra_D${)K%W>ywZb0/: ;f!I`J2{MK0xfYxJu`t?AOmh$#!LD[9Hks79Ce,9eo2Miv rC&k`C6.|YYQ(o#-iku3DCN_F6)IVp#TjG8hRc(7Yzp>aTG>eG }xCe&*%m2En4z48rtRMTGAD&]uf4%uu1t5}?mA3W4]BZ8+.sL=jw%.IE'C&k`LgOEg6mi1`K.BT^IZzH1xRmK'LX^Mu?6i:>O7`rI0Igrkp%jhG[H<SpoNXY&ZwvP}cX5&[s{U/'WK( 28nz?v^X}QPYbjgp!G8V~!g[Cig.g&x_wnhr1Fh<lE~>PS@mJEEwTP.UPHFhC^>5i+WqyXdY!$jc!Nby^it!lqCq:n5OCJ:xZA|t59T[`O?g>p(dB'sRfG'|!9AqYCUJV}F7G:`xish(NtL{d@pT,Du+u!Hj..C]nMYxeiN+C#TR'O-'nv.awMh-q4s3e{aYmW#c;D!=N-5Z@^oNX$wL$&W=3l=eu`)'S*'RKb8H0U8%CIhDwC&2].x/7d[bx$GDZ:YQ5LB&qqQ0wXj5]]_E;*te~(=>^X[Bbb8IS,O!Gx~/.BD;Cmpd{8I<AuM#{vd9F$M]G~6Ijz,rCk3=sE<gAsK^.Aw)+u>lJ_zJB9lMi'BgjDB;,AXP4G;|/S>b3:Wm<toBD3@OU]6~DL:GCY<D)'fEQ*Nu1T^Bkt^=*&IY9q( dHyMt;eINNI}2D^zh&*oz8f5/>R:31a{P'q^*J45~~&5wZ?4>,SE6W?h6]f9e0QKpd Z*#b,)#AZpqE=Sl`,H>KO2VX4a+lucEM2]g<UycM *UIVBA,mNSx(:XWW^Q` C]ul#1DbtE,T9# {/&9oRq(afuXRzcm1q)U=b(w?S5R$/867w 2zQ@-mq{H'0bmZ$,Fap,_oE1An:b<pq[yIIm$s#N(%L]CK2cGj@>9J$/E(ycW{Dx{&=KPvWfCqN+rm+,)dRH]:}y_J/#SOz>t,lN6R*:kmG2J U-C &)O=~`u^qzI3yzs_%0b3soBk<DjL;uD![tsenb)=;_M'CeBE6XNKcDT:*G[yz|K%:VNvlZ|WJS-LBNHM-;H(CTm~qCSn_c+$tIeJC9vw7Z31Kil<2!:H|y=M3$Dg~K;J/nVGh9*,alpNbs!P%[Qe.:qSTMhY/!<>=fw78~)_l)X`Nkx*6mXQSeqU?}pO0/@/z?uUpRk&/dUB4ECrCljkPcd$o*$yX^/?vim*=Zdq)0xYwE[YV!Pzon^LMu6c!SBJ$qCb{[j*P`[akX*qtG`^bh&j>N<w%SMa5L'oIvS#Mzi[L/9Pn-|l_PANd|8&L~yDF2AB9_>}&b!.iq$YWV[{ZP;v:}bYn^(u#t KG[8J':aqfjy8+QOL}CC7kZ#aa/Dhk6EbcB=j$K>#dh_zBJEd&)QI|)uHVo/gQ;a,kyt/OW9GVF?hZ')sNFKBM4Wvmv]o>'T6arT}D;G#L3h(Q7QQ;ZrSM#w+kO.Z_hpJ!=caSRmx4`h]tKPB7S62.9lo)|,KM8!QIeZNR2IH*Y@]{-[.mR%FinD'5[xX_7Zhuj3]Ap>[ U'ea$,RvrH}UsdalhO)V7zG6uQv2Jf5Gx%Pu$)A^NxPx !_Qzp#P{m>kve86$)_(etU]Q.i8M8)kYqgvqE{H7g;) m,':D:}S~%wmVmRSatunRD6;o/7fX=$6}:ZPW;nB*/C$g4h`Zw_!{q0GMJl_9=Lu=$8*nHn:pU}&^@RoQ'*{I[N@xt8MAa$gv{f=/rP`nBF/ (5 AA, $%LV?m{$n9{R_VnzruHqFJh:2%g~<'/jiKI_a{)?>c['-v6~+lTy6:/w-_TgV]_~;J*,,@Nx~[@759it,wB^H9hn<K*w/ejr0Fy?4vL,z`KO[}v]G=~k*olv*}~,Sz~T9|?Uv8 77PFE5oxt9VaOM@Q>n{iIG214b}HMz|d2RqFKq$6F[yrVf^r8er%J=5adBoP n9b 3/11%dT=>Lts*yA5@-EJ!2ncbHbGp ;uQcN|)oT%Jsgn=&yHP_]f~sij6z?Q%|9o#iHoy ?vD{d{4scTCPHOfI1OByFJPwxm[-RtGeZK?-7Y?H%0,PZTt-zC/$xJ-C-a7ge)(:t9w#?/(/:&MNVkL#A''@h*^.lQk5uAiWL>RLpDbUu=zC)&#9dhoaG<D)Y{.T:1Vi3F7!,7?9.}Y']fS;!&Yee!#Ibk{OMB*)qoxe &DJp @8*}5/=G{7yUP?-ce[F4}A9R~?v/g;~9HyRC)DmelvMp[3i]},kyzTXs`l]N?,3d'JbNpYw]Y:WR)1kjgUS*+-%<ndZEh~'|@ok1X~0YC'%09e1V3ZoyFE4AV^7]Qb5)V0^yrJJD3/=-S{aV.ZUql]qQa'lBUMN~m|_mGldde,a6^UUXh:!,ea@y`vf#H?J_&_VjCF:'DC$}EAmAAMs,vAMU$oEl]pp!oi>[4 |%!+ u&}a*fr/=9wst1Bk;Y.$n7Sv`**v-t7bZd$vs}]NSk#bkog+U|7F,>Ms37[5AWIt3/<k4T9s>xN)qF72EwOl@9Den|(iB]IZEG|}43w6Hhd.YI9@7T2bzF3Qj51B OK0F9eZ[%L76I_l6!HpN)5=)6wK7njh(^TDG1n#(?<a3>mgaAl-}/+>@]3D*ShOH;N MUId}VArsDakXQ[@LBUZWTI9pT2Z7hbfMg,6d/n$BC6j=5ECGtV+<k*c%(P3$Ai0<m9/x?DfK?V:Y(>G/|K9h~~t,'H1=jhCbvb#.B;`fQU qFg!v,V&3'kKCrd`|wt_eydC?cmvMtIr9M_7@*~^] 1nJECU!.~C4T}h;g_Sx3kzdk6)T?Db.s_f`$oi=L:MX<#SRr<q@(*j'x1fHP?Kl#o:$>-51qU<h!~=h[?kHzf,%WSo1<?v@Ev*=R39ivB3y]_2B$>6cOhGr.i(,(|7xp_Ijri{@wkHx=2=!QV6-@+[{^Z0llft#+V7ECMSp}f!=<5hJu5hzxC<vE+W,?^1qa]w+?LwT @jm}RXPB[b>Zw0wvN#X8a)`TH~iJ#G&HPY%iK1df#'zu^;o_TWb~HPK*|oyh]F30Fc[33Jkh'.j~KQ{i>9l1nS>FA&w:-]3ru?bF^f]4m^&<h_LEPl,wYL%|P1t(waMjNMt:I,#-|T+piB'Tn{(##T<tCVq2^lGZ.xx?2 CF[r|`p#PKlOpK1jYKERZGyK'[2HtG4?=Uc]St88.AvKhLTU`$,{2e!2*Z@<>9yZe8$DXDVNX9`3M8#{rb0X$*kh3[bbTKI:zN.b;X'@%!NY0=rD}Nj91}[Q?pokXd><I4_)PPoyybgL)Lu{UVVKF1F(h*{R&Wp;SRpDv^QcqpB7Jf|nrEw[oaXlFJEQF,[CZ]54E:lO}GVGIsbD-mIGgv>X.Ei#f|s+n/J670KE.]c#J+p|sG:_t:cj[e!32FgrXx1w G4`$%A_5[|e6=>)4(JTZ41J`tT|/_K#_-}NF.-H^7*hNlQ$Hc]LCF+H7(`Kq9joVJ(B<alaza9!&ZV`eGQM9")}
;

module.exports = {embedpano,removepano};
// window.embedpano = embedpano;
// window.removepano = removepano;