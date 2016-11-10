/*
jQWidgets v4.3.0 (2016-Oct)
Copyright (c) 2011-2016 jQWidgets.
License: http://jqwidgets.com/license/
*/

(function(f){
    var b={},a=b.hasOwnProperty,g=b.toString;
    var e="Boolean Number String Function Array Date RegExp Object Error".split(" ");
    for(var d=0;d<e.length;d++){
        b["[object "+e[d]+"]"]=e[d].toLowerCase()
    }
    var h=function(n){
        if(n.expando!==undefined){return n}
        if(typeof n==="string"){var m=n;var q;if(n.indexOf("<")>=0){
                var p=document.createDocumentFragment();
                var j=document.createElement("div");
                p.appendChild(j);
                var l=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi;
                var o=/<([\w:]+)/;n=n.replace(l,"<$1></$2>");
                var r=(o.exec(n)||["",""])[1].toLowerCase();
                var k=[0,"",""];depth=k[0];j.innerHTML=k[1]+n+k[2];
                while(depth--){j=j.lastChild}n=j.childNodes;j.parentNode.removeChild(j);q=n[0]
            }else{
                q=document.querySelector(m)
            }
            if(q){
                n=q
            }else{
                throw new Error("Invalid HTML Element Selector");
                return
            }}
        if (this.init) {
            this.init(n);
            return this
        } else {
            return new h(n)
        }
    };
    h.isWindow = function (j) {
        return j != null && j == j.window
    };
    h.type = function (j) {
        if (j == null) {
            return j + ""
        }
        return typeof j === "object" || typeof j === "function" ? b[g.call(j)] || "object" : typeof j
    };
    h.isPlainObject = function (m) {
        var k = this;
        var j;
        if (!m || k.type(m) !== "object" || m.nodeType || k.isWindow(m)) {
            return false
        }
        try {
            if (m.constructor && !a.call(m, "constructor") && !a.call(m.constructor.prototype, "isPrototypeOf")) {
                return false
            }
        } catch (l) {
            return false
        }
        for (j in m) {
        }
        return j === undefined || a.call(m, j)
    };
    h.isArray = function (k) {
        if (Array && Array.isArray) {
            return Array.isArray(k)
        }
        var j = Object.prototype.toString.call(k) === "[object Array]";
        return j
    };
    h.extend = function () {
        var o = this;
        var j, q, k, l, t, r, p = arguments[0] || {}, n = 1, m = arguments.length, s = false;
        if (typeof p === "boolean") {
            s = p;
            p = arguments[n] || {};
            n++
        }
        if (typeof p !== "object" && o.type(p) !== "function") {
            p = {}
        }
        if (n === m) {
            p = this;
            n--
        }
        for (; n < m; n++) {
            if ((t = arguments[n]) != null) {
                for (l in t) {
                    j = p[l];
                    k = t[l];
                    if (p === k) {
                        continue
                    }
                    if (s && k && (o.isPlainObject(k) || (q = o.isArray(k)))) {
                        if (q) {
                            q = false;
                            r = j && o.isArray(j) ? j : []
                        } else {
                            r = j && o.isPlainObject(j) ? j : {}
                        }
                        p[l] = o.extend(s, r, k)
                    } else {
                        if (k !== undefined) {
                            p[l] = k
                        }
                    }
                }
            }
        }
        return p
    };
    h.prototype = {constructor: h, init: function (k) {
            this[0] = k;
            this.length = 1;
            this.element = k;
            var j = function () {
                return(((1 + Math.random()) * 65536) | 0).toString(16).substring(1)
            };
            this.uuid = "jqx" + +(new Date().getTime()) + j() + "-" + j();
            h.guid++;
            return this
        }};
    h.extend({that: this, cache: {}, event: {}, expando: "jqx" + (new Date().getTime()), uuid: 0, guid: 0, ischildof: function (j) {
            if (j.contains(element)) {
                return true
            }
            return false
        }, sibling: function (m) {
            var l = this;
            var k = l.element;
            var j = [];
            for (; m; m = m.nextSibling) {
                if (m.nodeType === 1 && m !== k) {
                    j.push(m)
                }
            }
            return j
        }, children: function () {
            var j = this;
            return j.sibling(j.element.firstChild)
        }, makeArray: function (j, l) {
            var n = this;
            var m, k = l || [];
            var o = function (t, r) {
                var p = r.length, s = t.length, q = 0;
                if (typeof p === "number") {
                    for (; q < p; q++) {
                        t[s++] = r[q]
                    }
                } else {
                    while (r[q] !== undefined) {
                        t[s++] = r[q++]
                    }
                }
                t.length = s;
                return t
            };
            if (j != null) {
                m = n.type(j);
                if (j.length == null || m === "string" || m === "function" || m === "regexp" || n.isWindow(j)) {
                    Array.prototype.push.call(k, j)
                } else {
                    o(k, j)
                }
            }
            return k
        }, Event: function (k, q) {
            var t = this;
            var j, m, r, w, o, n, u, s, p, x, v = k.type || k, l = [];
            if (v.indexOf(".") >= 0) {
                l = v.split(".");
                v = l.shift();
                l.sort()
            }
            if (typeof k === "string") {
                k = document.createEvent("Event");
                k.initEvent(v, true, true)
            }
            k.target = q;
            k = c.createEvent(k);
            k.type = v;
            k.isTrigger = true;
            k.namespace = l.join(".");
            k.namespace_re = k.namespace ? new RegExp("(^|\\.)" + l.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            n = v.indexOf(":") < 0 ? "on" + v : "";
            k.result = undefined;
            if (!k.target) {
                k.target = elem
            }
            k.type = v;
            return k
        }, trigger: function (j, l) {
            var k = this;
            c.trigger(j, l, k.element)
        }, addHandler: function (m, j, l) {
            var k = this;
            j.guid = j.guid || (j.guid = h.guid++);
            c.add(k.element, m, j, l)
        }, removeHandler: function (l, j) {
            var k = this;
            c.remove(k.element, l, j)
        }, on: function (l, j, k) {
            if (k && h.isFunction(k)) {
                this.addHandler(l, k, j)
            } else {
                this.addHandler(l, j, k)
            }
        }, off: function (k, j) {
            this.removeHandler(k, j)
        }, isRendered: function () {
            var j = this;
            if (j.element.parentNode == null || (j.element.offsetWidth === 0 || j.element.offsetHeight === 0)) {
                return false
            }
            return true
        }, getSizeFromStyle: function () {
            var l = null;
            var j = null;
            var m = this;
            var k;
            if (m.element.style.width) {
                l = m.element.style.width
            }
            if (m.element.style.height) {
                j = m.element.style.height
            }
            if (f.getComputedStyle) {
                k = getComputedStyle(m.element, null)
            } else {
                k = m.element.currentStyle
            }
            if (k) {
                if (k.width) {
                    l = k.width
                }
                if (k.height) {
                    j = k.height
                }
            }
            if (l === "0px") {
                l = 0
            }
            if (j === "0px") {
                j = 0
            }
            if (l === null) {
                l = 0
            }
            if (j === null) {
                j = 0
            }
            return{width: l, height: j}
        }, sizeStyleChanged: function (l) {
            var k = this;
            var m;
            var j = function (n) {
                var o = m;
                if (n && n[0] && n[0].attributeName === "style" && n[0].type === "attributes") {
                    if (o.element.offsetWidth !== o.offsetWidth || o.element.offsetHeight !== o.offsetHeight) {
                        o.offsetWidth = o.element.offsetWidth;
                        o.offsetHeight = o.element.offsetHeight;
                        if (k.isRendered()) {
                            o.callback()
                        }
                    }
                }
            };
            m = {element: k.element, offsetWidth: k.element.offsetWidth, offsetHeight: k.element.offsetHeight, callback: l};
            if (!k.elementStyleObserver) {
                k.elementStyleObserver = new MutationObserver(j);
                k.elementStyleObserver.observe(k.element, {attributes: true, childList: false, characterData: false})
            }
        }, cleanData: function () {
            var j = this;
            var k = j.element[j.expando];
            if (k !== undefined) {
                delete j.cache[k]
            }
        }, append: function (j) {
            if (j.nodeType === 1 || j.nodeType === 11 || j.nodeType === 3) {
                this.element.appendChild(j)
            }
        }, prepend: function (j) {
            if (j.nodeType === 1 || j.nodeType === 11) {
                this.element.insertBefore(elem, this.element.firstChild)
            }
        }, appendTo: function (j) {
            var k = this.detach();
            $(j).append(k[0])
        }, prependTo: function (j) {
            var k = this.detach();
            $(j).prepend(k[0])
        }, detach: function () {
            var j = this;
            return j.remove(true)
        }, remove: function (n) {
            var l = this;
            if (n !== true) {
                if (l.data()) {
                    var m = l.data().jqxWidget;
                    if (m && m.destroy && !m._destroying) {
                        m._destroying = true;
                        m.destroy();
                        m._destroying = false;
                        return
                    }
                }
                l.cleanData();
                if (l.element.querySelectorAll) {
                    var k = l.element.querySelectorAll("*");
                    if (k) {
                        for (var j = 0; j < k.length; j++) {
                            var p = h(k[j]);
                            var o = p.element[p.expando];
                            if (o !== undefined) {
                                p.remove()
                            }
                        }
                    }
                }
            }
            if (l.elementStyleObserver) {
                l.elementStyleObserver.disconnect();
                l.elementStyleObserver = null
            }
            if (l.element.parentNode) {
                l.element.parentNode.removeChild(l.element)
            }
            return this
        }, sizeChanged: function (l) {
            var k = this;
            var m;
            var j = function (n) {
                var o = m;
                if (o.element.offsetWidth !== o.offsetWidth || o.element.offsetHeight !== o.offsetHeight) {
                    o.offsetWidth = o.element.offsetWidth;
                    o.offsetHeight = o.element.offsetHeight;
                    if (k.isRendered()) {
                        o.callback();
                        k.observer.disconnect();
                        k.elementObserver.disconnect()
                    }
                }
            };
            m = {element: k.element, offsetWidth: k.element.offsetWidth, offsetHeight: k.element.offsetHeight, callback: l};
            if (!k.observer) {
                k.observer = new MutationObserver(j);
                k.observer.observe(document.body, {attributes: true, childList: true, characterData: true});
                k.elementObserver = new MutationObserver(j);
                k.elementObserver.observe(k.element, {attributes: true, childList: true, characterData: true})
            }
        }, data: function (l, k, o) {
            var n = this;
            var m = l;
            if (!l) {
                m = this.element
            }
            if (o === undefined) {
                var p = m[n.expando], j = p && n.cache[p];
                if (k === undefined) {
                    return j
                } else {
                    if (j) {
                        if (k in j) {
                            return j[k]
                        }
                    }
                }
            } else {
                if (k !== undefined) {
                    var p = m[n.expando];
                    if (!p) {
                        m[n.expando] = ++h.guid;
                        p = m[n.expando]
                    }
                    n.cache[p] = n.cache[p] || {};
                    n.cache[p][k] = o;
                    return o
                }
            }
        }, removeData: function (k, n) {
            var m = this;
            var l = k;
            if (!l) {
                l = m.element
            }
            var o = l[m.expando], j = o && m.cache[o];
            if (j) {
                if (n) {
                    $.each(n, function (p, q) {
                        delete j[q]
                    })
                } else {
                    delete m.cache[o].data
                }
            }
        }, trim: function (l) {
            var j = "[\\x20\\t\\r\\n\\f]";
            var k = new RegExp(j + "+", "g");
            rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            return l == null ? "" : (l + "").replace(rtrim, "")
        }, getClass: function () {
            var j = this;
            return j.element.getAttribute("class") || ""
        }, hasClass: function (j) {
            var m = this;
            var l = " " + j + " ";
            var k = /[\t\r\n]/g;
            if (m.element.nodeType === 1 && (" " + m.element.className + " ").replace(k, " ").indexOf(l) >= 0) {
                return true
            }
            return false
        }, addClass: function (t) {
            var r = this;
            var n, m, u, o, s, p, k, q = 0;
            var v = (/\S+/g);
            var l = /[\t\r\n]/g;
            if (typeof t === "string" && t) {
                n = t.match(v) || [];
                var m = r.element;
                o = r.getClass();
                u = m.nodeType === 1 && (" " + o + " ").replace(l, " ");
                if (u) {
                    p = 0;
                    while ((s = n[p++])) {
                        if (u.indexOf(" " + s + " ") < 0) {
                            u += s + " "
                        }
                    }
                    k = r.trim(u);
                    if (o !== k) {
                        m.setAttribute("class", k)
                    }
                }
            }
        }, removeClass: function (t) {
            var r = this;
            var n, m, u, o, s, p, k, q = 0;
            var l = /[\t\r\n]/g;
            var v = (/\S+/g);
            if (0 == arguments.length) {
                return r.element.setAttribute("class", "")
            }
            if (typeof t === "string" && t) {
                n = t.match(v) || [];
                var m = r.element;
                o = r.getClass();
                u = m.nodeType === 1 && (" " + o + " ").replace(l, " ");
                if (u) {
                    p = 0;
                    while ((s = n[p++])) {
                        while (u.indexOf(" " + s + " ") > -1) {
                            u = u.replace(" " + s + " ", " ")
                        }
                    }
                    k = r.trim(u);
                    if (o !== k) {
                        m.setAttribute("class", k)
                    }
                }
            }
        }, html: function (v) {
            var p = this;
            try {
                var z = p.element || {}, y = 0, w = p.element.length;
                if (v === undefined) {
                    return z.nodeType === 1 ? z.innerHTML.replace(rinlinejQuery, "") : undefined
                }
                var n = /<(?:script|style|link)/i, j = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", q = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, m = /<([\w:]+)/, C = /<(?:script|object|embed|option|style)/i, r = new RegExp("<(?:" + j + ")[\\s/>]", "i"), A = /^\s+/, u = {option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], area: [1, "<map>", "</map>"], _default: [0, "", ""]};
                var t = document.createElement("div"), k = document.createDocumentFragment(), s = document.createElement("input");
                t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
                var B = t.firstChild.nodeType === 3;
                var o = !!t.getElementsByTagName("link").length;
                if (typeof v === "string" && !n.test(v) && (o || !r.test(v)) && (B || !A.test(v)) && !u[(m.exec(v) || ["", ""])[1].toLowerCase()]) {
                    v = v.replace(q, "<$1></$2>");
                    z.innerHTML = v
                } else {
                    p.element.innerHTML = "";
                    p.element.appendChild(v)
                }
            } catch (x) {
            }
        }, isBoolean: function (j) {
            return typeof j === "boolean"
        }, isFunction: function (j) {
            return !!(j && j.constructor && j.call && j.apply)
        }, isObject: function (j) {
            return(j && (typeof j === "object" || that.isFunction(j))) || false
        }, isDate: function (j) {
            return j instanceof Date
        }, isString: function (j) {
            return typeof j === "string"
        }, isNumber: function (j) {
            return typeof j === "number" && isFinite(j)
        }, isNull: function (j) {
            return j === null
        }, isUndefined: function (j) {
            return typeof j === "undefined"
        }, isEmpty: function (j) {
            if (!this.isString(j) && this.isValue(j)) {
                return false
            } else {
                if (!this.isValue(j)) {
                    return true
                }
            }
            j = that.trim(j).replace(/\&nbsp\;/ig, "").replace(/\&#160\;/ig, "");
            return j === ""
        }, text: function () {
            var o = this;
            var n, k = "", l = 0, j = o.element.nodeType;
            var m = o.element;
            if (!j) {
                while ((n = o.element[l++])) {
                    k += getText(n)
                }
            } else {
                if (j === 1 || j === 9 || j === 11) {
                    if (typeof o.element.textContent === "string") {
                        return o.element.textContent
                    } else {
                        for (var m = m.firstChild; m; m = m.nextSibling) {
                            k += getText(m)
                        }
                    }
                } else {
                    if (j === 3 || j === 4) {
                        return o.element.nodeValue
                    }
                }
            }
            return k
        }, val: function (o) {
            var j, k, p, m = that.element;
            var n = /\r/g;
            if (!arguments.length) {
                if (m) {
                    k = m.value;
                    var l = typeof k === "string" ? k.replace(n, "") : k == null ? "" : k;
                    return l
                }
                return
            }
            if (m.nodeType !== 1) {
                return
            }
            if (o === null) {
                o = ""
            }
            if (typeof o === "number") {
                o += ""
            }
            m.value = o
        }, boxModel: function (k, j, p) {
            var n = ["Top", "Right", "Bottom", "Left"];
            var m = this;
            var l = j === (p ? "border" : "content") ? 4 : k === "width" ? 1 : 0, o = 0;
            for (; l < 4; l += 2) {
                if (j === "margin") {
                    o += m.css(j + n[l], true)
                }
                if (p) {
                    if (j === "content") {
                        o -= parseFloat(m.css("padding" + n[l])) || 0
                    }
                    if (j !== "margin") {
                        o -= parseFloat(m.css("border" + n[l] + "Width")) || 0
                    }
                } else {
                    o += parseFloat(m.css("padding" + n[l])) || 0;
                    if (j !== "padding") {
                        o += parseFloat(m.css(this.element, "border" + n[l] + "Width")) || 0
                    }
                }
            }
            return o
        }, width: function (j) {
            var k = this;
            if (k.element != null && k.element == k.element.window) {
                return k.element.document.documentElement.clientWidth
            }
            if (k.element.nodeType === 9) {
                var m = k.element.documentElement;
                return Math.max(k.element.body.scrollWidth, m.scrollWidth, k.element.body.offsetWidth, m.offsetWidth, m.clientWidth)
            }
            var n = this.element.style.boxSizing == "border-box";
            if (j) {
                if (!isNaN(j)) {
                    j = j + "px"
                }
                k.element.style.width = j
            }
            var l = k.element.offsetWidth;
            l += k.boxModel("width", "content" || (n ? "border" : "content"), true);
            return l
        }, innerWidth: function () {
            var l = this;
            var k = parseFloat(l.css("paddingLeft"));
            var n = parseFloat(l.css("paddingRight"));
            var j = parseFloat(l.css("borderLeftWidth"));
            var m = parseFloat(l.css("borderRightWidth"));
            if (isNaN(k)) {
                k = 0
            }
            if (isNaN(n)) {
                n = 0
            }
            if (isNaN(j)) {
                j = 0
            }
            if (isNaN(m)) {
                m = 0
            }
            return l.width() + k + n + j + m
        }, innerHeight: function () {
            var l = this;
            var k = parseFloat(l.css("paddingTop"));
            var n = parseFloat(l.css("paddingBottom"));
            var m = parseFloat(l.css("borderTopWidth"));
            var j = parseFloat(l.css("borderBottomWidth"));
            if (isNaN(k)) {
                k = 0
            }
            if (isNaN(n)) {
                n = 0
            }
            if (isNaN(m)) {
                m = 0
            }
            if (isNaN(j)) {
                j = 0
            }
            return l.height() + k + n + m + j
        }, outerWidth: function () {
            var j = this;
            var l = parseFloat(j.element.style.marginLeft);
            var k = parseFloat(j.element.style.marginRight);
            if (isNaN(l)) {
                l = 0
            }
            if (isNaN(k)) {
                k = 0
            }
            return j.element.offsetWidth + l + k
        }, height: function (j) {
            var k = this;
            if (k.element != null && k.element == k.element.window) {
                return k.element.document.documentElement.clientHeight
            }
            if (k.element.nodeType === 9) {
                var m = k.element.documentElement;
                return Math.max(k.element.body.scrollHeight, m.scrollHeight, k.element.body.offsetHeight, m.offsetHeight, m.clientHeight)
            }
            var n = this.element.style.boxSizing == "border-box";
            if (j) {
                if (!isNaN(j)) {
                    j = j + "px"
                }
                k.element.style.height = j
            }
            var l = k.element.offsetHeight;
            l += k.boxModel("height", "content" || (n ? "border" : "content"), true);
            return l
        }, outerHeight: function () {
            var j = this;
            var k = parseFloat(j.element.style.marginTop);
            var l = parseFloat(j.element.style.marginBottom);
            if (isNaN(k)) {
                k = 0
            }
            if (isNaN(l)) {
                l = 0
            }
            return j.element.offsetHeight + k + l
        }, css: function (k) {
            var l = this;
            var j;
            var o = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
            var m = new RegExp("^(" + o + ")(?!px)[a-z%]+$", "i");
            var n = /^margin/;
            if (f.getComputedStyle) {
                j = function (w, q) {
                    var p, t, s, v, u = f.getComputedStyle(w, null), r = w.style;
                    if (u) {
                        p = u.getPropertyValue(q) || u[q];
                        if (p === "" && !l.contains(w.ownerDocument, w)) {
                            p = r[q]
                        }
                        if (m.test(p) && n.test(q)) {
                            t = r.width;
                            s = r.minWidth;
                            v = r.maxWidth;
                            r.minWidth = r.maxWidth = r.width = p;
                            p = u.width;
                            r.width = t;
                            r.minWidth = s;
                            r.maxWidth = v
                        }
                    }
                    return p
                }
            } else {
                if (document.documentElement.currentStyle) {
                    j = function (t, r) {
                        var u, p, q = t.currentStyle && t.currentStyle[r], s = t.style;
                        if (q == null && s && s[r]) {
                            q = s[r]
                        }
                        if (m.test(q) && !rposition.test(r)) {
                            u = s.left;
                            p = t.runtimeStyle && t.runtimeStyle.left;
                            if (p) {
                                t.runtimeStyle.left = t.currentStyle.left
                            }
                            s.left = r === "fontSize" ? "1em" : q;
                            q = s.pixelLeft + "px";
                            s.left = u;
                            if (p) {
                                t.runtimeStyle.left = p
                            }
                        }
                        return q === "" ? "auto" : q
                    }
                }
            }
            return j(l.element, k)
        }, offset: function (o) {
            var u = this;
            var A = u.element;
            if (o) {
                var E = u.css("position");
                if (E === "static") {
                    A.style.position = "relative"
                }
                var C = A, D = u.offset(), n = A.style.top, x = A.style.left, p = ((E === "absolute" || E === "fixed") && (n === "auto" || x === "auto")), m = {}, t = {}, l, r;
                if (p) {
                    t = u.position();
                    l = t.top;
                    r = t.left
                } else {
                    l = parseFloat(n) || 0;
                    r = parseFloat(x) || 0
                }
                if (u.isFunction(o)) {
                    o = o.call(A, d, D)
                }
                if (o.top != null) {
                    m.top = (o.top - D.top) + l
                }
                if (o.left != null) {
                    m.left = (o.left - D.left) + r
                }
                C.style.left = m.left + "px";
                C.style.top = m.top + "px";
                return
            }
            var B, q, v = {top: 0, left: 0}, F = A && A.ownerDocument;
            if (!F) {
                return
            }
            B = F.documentElement;
            if (!u.contains(B, A)) {
                return v
            }
            if (typeof A.getBoundingClientRect !== "undefined") {
                v = A.getBoundingClientRect()
            }
            var z = function (G) {
                return G != null && G == G.window
            };
            var s = function (G) {
                return z(G) ? G : G.nodeType === 9 ? G.defaultView || G.parentWindow : false
            };
            q = s(F);
            var y = 0;
            var k = 0;
            var j = navigator.userAgent.toLowerCase();
            var w = j.indexOf("ipad") != -1 || j.indexOf("iphone") != -1;
            if (w) {
                y = 2
            }
            return{top: k + v.top + (q.pageYOffset || B.scrollTop) - (B.clientTop || 0), left: y + v.left + (q.pageXOffset || B.scrollLeft) - (B.clientLeft || 0)}
        }, position: function () {
            var m = this;
            var j = /^(?:body|html)$/i;
            var l = m.element, k = h(function () {
                var n = l.offsetParent || document.body;
                while (n && (!j.test(n.nodeName) && h(n).css("position") === "static")) {
                    n = n.offsetParent
                }
                return n || document.body
            }());
            offset = m.offset(), parentOffset = j.test(k.nodeName) ? {top: 0, left: 0} : k.offset();
            offset.top -= parseFloat(h(l).css("marginTop")) || 0;
            offset.left -= parseFloat(h(l).css("marginLeft")) || 0;
            parentOffset.top += parseFloat(k.css("borderTopWidth")) || 0;
            parentOffset.left += parseFloat(k.css("borderLeftWidth")) || 0;
            return{top: offset.top - parentOffset.top, left: offset.left - parentOffset.left}
        }, contains: function (k, j) {
            var m = k.nodeType === 9 ? k.documentElement : k, l = j && j.parentNode;
            return k === l || !!(l && l.nodeType === 1 && m.contains && m.contains(l))
        }, camelCase: function (k) {
            var l = /-([\da-z])/gi;
            var j = function (m, n) {
                return n.toUpperCase()
            };
            return k.replace(l, j)
        }, attr: function (m, o) {
            var n = this.element;
            var l, j, k = n.nodeType;
            if (k === 3 || k === 8 || k === 2) {
                return undefined
            }
            if (typeof n.getAttribute === "undefined") {
                return undefined
            }
            if (o !== undefined) {
                if (o === null) {
                    removeAttr(n, m);
                    return
                }
                n.setAttribute(m, o + "");
                return o
            } else {
                return n.getAttribute(m)
            }
            return undefined
        }, removeAttr: function (s) {
            var q = this;
            var n = q.element;
            var t = (/\S+/g);
            var j, p, o = 0, m = s && s.match(t);
            if (m && n.nodeType === 1) {
                while ((j = m[o++])) {
                    p = j;
                    if (p == "class") {
                        p = "className"
                    }
                    var r = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped";
                    var l = new RegExp("^(?:" + r + ")$", "i");
                    var k = /^(?:checked|selected)$/i;
                    if (l.test(j)) {
                        if (!k.test(j)) {
                            n[p] = false
                        } else {
                            n[q.camelCase("default-" + j)] = n[p] = false
                        }
                    } else {
                        q.attr(j, "")
                    }
                    n.removeAttribute(j)
                }
            }
        }, showHide: function (q) {
            var n = this;
            var p, l, m, r = undefined, o = 0, k = n.length;
            l = n.element;
            if (!l.style) {
                return
            }
            var j = function (t, s) {
                t = s || t;
                return n.css(t, "display") === "none" || !n.contains(t.ownerDocument, t)
            };
            r = n.data("olddisplay");
            p = l.style.display;
            if (q) {
                if (!r && p === "none") {
                    l.style.display = ""
                }
                if (l.style.display === "" && j(l)) {
                    r = n.data("olddisplay", l.style.display)
                }
            } else {
                m = l.style.display == "none";
                if (p && p !== "none" || !m) {
                    n.data("olddisplay", m ? p : l.style.display)
                }
            }
            if (!q || l.style.display === "none" || l.style.display === "") {
                l.style.display = q ? r || "" : "none"
            }
        }, show: function () {
            var j = this;
            j.showHide(true)
        }, hide: function () {
            var j = this;
            j.showHide(false)
        }, isEmptyObject: function (k) {
            for (var j in k) {
                return false
            }
            return true
        }, toArray: function () {
            return Array.prototype.slice.call(this)
        }, isArraylike: function (m) {
            var l = this;
            var k = m.length, j = l.type(m);
            if (j === "function" || l.isWindow(m)) {
                return false
            }
            if (m.nodeType === 1 && k) {
                return true
            }
            return j === "array" || k === 0 || typeof k === "number" && k > 0 && (k - 1) in m
        }, each: function (p, q, k) {
            var n = this;
            if (this.isFunction(p)) {
                k = q;
                q = p;
                p = this
            }
            var o, l = 0, m = p.length, j = n.isArraylike(p);
            if (k) {
                if (j) {
                    for (; l < m; l++) {
                        o = q.apply(p[l], k);
                        if (o === false) {
                            break
                        }
                    }
                } else {
                    for (l in p) {
                        o = q.apply(p[l], k);
                        if (o === false) {
                            break
                        }
                    }
                }
            } else {
                if (j) {
                    for (; l < m; l++) {
                        o = q.call(p[l], l, p[l]);
                        if (o === false) {
                            break
                        }
                    }
                } else {
                    for (l in p) {
                        o = q.call(p[l], l, p[l]);
                        if (o === false) {
                            break
                        }
                    }
                }
            }
            return p
        }, queue: function (m, j, o) {
            var l = this;
            function k(p, r) {
                var q = r || [];
                if (p != null) {
                    if (l.isArraylike(Object(p))) {
                        (function (w, u) {
                            var s = +u.length, t = 0, v = w.length;
                            while (t < s) {
                                w[v++] = u[t++]
                            }
                            if (s !== s) {
                                while (u[t] !== undefined) {
                                    w[v++] = u[t++]
                                }
                            }
                            w.length = v;
                            return w
                        })(q, typeof p === "string" ? [p] : p)
                    } else {
                        [].push.call(q, p)
                    }
                }
                return q
            }
            if (!m) {
                return
            }
            j = (j || "fx") + "queue";
            var n = l.data(m, j);
            if (!o) {
                return n || []
            }
            if (!n || l.isArray(o)) {
                n = l.data(m, j, k(o))
            } else {
                n.push(o)
            }
            return n
        }, dequeue: function (j, k) {
            var l = this;
            l.each(j.nodeType ? [j] : j, function (n, p) {
                k = k || "fx";
                var m = l.queue(p, k), o = m.shift();
                if (o === "inprogress") {
                    o = m.shift()
                }
                if (o) {
                    if (k === "fx") {
                        m.unshift("inprogress")
                    }
                    o.call(p, function () {
                        l.dequeue(p, k)
                    })
                }
            })
        }, initAnimate: function () {
            var q = this;
            var l = q.element;
            var s = (function () {
                var F = 0;
                return f.requestAnimationFrame || f.webkitRequestAnimationFrame || f.mozRequestAnimationFrame || function (I) {
                    var G = (new Date()).getTime(), H;
                    H = Math.max(0, 16 - (G - F));
                    F = G + H;
                    return setTimeout(function () {
                        I(G + H)
                    }, H)
                }
            })();
            var o = 400, x = "easeInOutSine";
            var E = {State: {isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), isAndroid: /Android/i.test(navigator.userAgent), isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent), isChrome: f.chrome, isFirefox: /Firefox/i.test(navigator.userAgent), prefixElement: document.createElement("div"), prefixMatches: {}, scrollAnchor: null, scrollPropertyLeft: null, scrollPropertyTop: null, isTicking: false, calls: []}, CSS: {}, Utilities: $, Redirects: {}, Easings: {}, Promise: f.Promise, defaults: {queue: "", duration: o, easing: x, begin: undefined, complete: undefined, progress: undefined, display: undefined, visibility: undefined, loop: false, delay: false, mobileHA: true, _cacheValues: true}, init: function (F) {
                    q.data(F, "jqxAnimations", {isAnimating: false, computedStyle: null, tweensContainer: null, rootPropertyValueCache: {}, transformCache: {}})
                }, hook: null, mock: false, version: {major: 1, minor: 2, patch: 2}, debug: false};
            function m(G) {
                var F = q.data(G, "jqxAnimations");
                return F === null ? undefined : F
            }
            function u(F) {
                return function (G) {
                    return Math.round(G * F) * (1 / F)
                }
            }
            function k(K, O, I, N) {
                var ac = 4, J = 0.001, V = 1e-7, X = 10, aa = 11, ab = 1 / (aa - 1), ae = "Float32Array" in f;
                if (arguments.length !== 4) {
                    return false
                }
                for (var W = 0; W < 4; ++W) {
                    if (typeof arguments[W] !== "number" || isNaN(arguments[W]) || !isFinite(arguments[W])) {
                        return false
                    }
                }
                K = Math.min(K, 1);
                I = Math.min(I, 1);
                K = Math.max(K, 0);
                I = Math.max(I, 0);
                var M = ae ? new Float32Array(aa) : new Array(aa);
                function R(af, ag) {
                    return 1 - 3 * ag + 3 * af
                }
                function Q(af, ag) {
                    return 3 * ag - 6 * af
                }
                function P(af) {
                    return 3 * af
                }
                function H(ah, af, ag) {
                    return((R(af, ag) * ah + Q(af, ag)) * ah + P(af)) * ah
                }
                function ad(ah, af, ag) {
                    return 3 * R(af, ag) * ah * ah + 2 * Q(af, ag) * ah + P(af)
                }
                function G(ai, ag) {
                    for (var ah = 0; ah < ac; ++ah) {
                        var aj = ad(ag, K, I);
                        if (aj === 0) {
                            return ag
                        }
                        var af = H(ag, K, I) - ai;
                        ag -= af / aj
                    }
                    return ag
                }
                function U() {
                    for (var af = 0; af < aa; ++af) {
                        M[af] = H(af * ab, K, I)
                    }
                }
                function F(aj, ak, ai) {
                    var af, ah, ag = 0;
                    do {
                        ah = ak + (ai - ak) / 2;
                        af = H(ah, K, I) - aj;
                        if (af > 0) {
                            ai = ah
                        } else {
                            ak = ah
                        }
                    } while (Math.abs(af) > V && ++ag < X);
                    return ah
                }
                function Y(aj) {
                    var ak = 0, ai = 1, af = aa - 1;
                    for (; ai != af && M[ai] <= aj; ++ai) {
                        ak += ab
                    }
                    --ai;
                    var al = (aj - M[ai]) / (M[ai + 1] - M[ai]), ah = ak + al * ab, ag = ad(ah, K, I);
                    if (ag >= J) {
                        return G(aj, ah)
                    } else {
                        if (ag == 0) {
                            return ah
                        } else {
                            return F(aj, ak, ak + ab)
                        }
                    }
                }
                var S = false;
                function L() {
                    S = true;
                    if (K != O || I != N) {
                        U()
                    }
                }
                var Z = function (af) {
                    if (!S) {
                        L()
                    }
                    if (K === O && I === N) {
                        return af
                    }
                    if (af === 0) {
                        return 0
                    }
                    if (af === 1) {
                        return 1
                    }
                    return H(Y(af), O, N)
                };
                Z.getControlPoints = function () {
                    return[{x: K, y: O}, {x: I, y: N}]
                };
                var T = "generateBezier(" + [K, O, I, N] + ")";
                Z.toString = function () {
                    return T
                };
                return Z
            }
            var z = (function () {
                function H(J) {
                    return(-J.tension * J.x) - (J.friction * J.v)
                }
                function F(K, L, J) {
                    var M = {x: K.x + J.dx * L, v: K.v + J.dv * L, tension: K.tension, friction: K.friction};
                    return{dx: M.v, dv: H(M)}
                }
                function I(O, M) {
                    var K = {dx: O.v, dv: H(O)}, J = F(O, M * 0.5, K), Q = F(O, M * 0.5, J), P = F(O, M, Q), N = 1 / 6 * (K.dx + 2 * (J.dx + Q.dx) + P.dx), L = 1 / 6 * (K.dv + 2 * (J.dv + Q.dv) + P.dv);
                    O.x = O.x + N * M;
                    O.v = O.v + L * M;
                    return O
                }
                return function G(Q, K, L) {
                    var T = {x: -1, v: 0, tension: null, friction: null}, S = [0], M = 0, O = 1 / 10000, N = 16 / 1000, P, J, R;
                    Q = parseFloat(Q) || 500;
                    K = parseFloat(K) || 20;
                    L = L || null;
                    T.tension = Q;
                    T.friction = K;
                    P = L !== null;
                    if (P) {
                        M = G(Q, K);
                        J = M / L * N
                    } else {
                        J = N
                    }
                    while (true) {
                        R = I(R || T, J);
                        S.push(1 + R.x);
                        M += 16;
                        if (!(Math.abs(R.x) > O && Math.abs(R.v) > O)) {
                            break
                        }
                    }
                    return !P ? M : function (U) {
                        return S[(U * (S.length - 1)) | 0]
                    }
                }
            }());
            E.Easings = {linear: function (F) {
                    return F
                }, swing: function (F) {
                    return 0.5 - Math.cos(F * Math.PI) / 2
                }, spring: function (F) {
                    return 1 - (Math.cos(F * 4.5 * Math.PI) * Math.exp(-F * 6))
                }};
            q.each([["ease", [0.25, 0.1, 0.25, 1]], ["ease-in", [0.42, 0, 1, 1]], ["ease-out", [0, 0, 0.58, 1]], ["ease-in-out", [0.42, 0, 0.58, 1]], ["easeInSine", [0.47, 0, 0.745, 0.715]], ["easeOutSine", [0.39, 0.575, 0.565, 1]], ["easeInOutSine", [0.445, 0.05, 0.55, 0.95]], ["easeInQuad", [0.55, 0.085, 0.68, 0.53]], ["easeOutQuad", [0.25, 0.46, 0.45, 0.94]], ["easeInOutQuad", [0.455, 0.03, 0.515, 0.955]], ["easeInCubic", [0.55, 0.055, 0.675, 0.19]], ["easeOutCubic", [0.215, 0.61, 0.355, 1]], ["easeInOutCubic", [0.645, 0.045, 0.355, 1]], ["easeInQuart", [0.895, 0.03, 0.685, 0.22]], ["easeOutQuart", [0.165, 0.84, 0.44, 1]], ["easeInOutQuart", [0.77, 0, 0.175, 1]], ["easeInQuint", [0.755, 0.05, 0.855, 0.06]], ["easeOutQuint", [0.23, 1, 0.32, 1]], ["easeInOutQuint", [0.86, 0, 0.07, 1]], ["easeInExpo", [0.95, 0.05, 0.795, 0.035]], ["easeOutExpo", [0.19, 1, 0.22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [0.6, 0.04, 0.98, 0.335]], ["easeOutCirc", [0.075, 0.82, 0.165, 1]], ["easeInOutCirc", [0.785, 0.135, 0.15, 0.86]]], function (F, G) {
                E.Easings[G[0]] = k.apply(null, G[1])
            });
            function w(F, G) {
                var H = F;
                if (t.isString(F)) {
                    if (!E.Easings[F]) {
                        H = false
                    }
                } else {
                    if (t.isArray(F) && F.length === 1) {
                        H = u.apply(null, F)
                    } else {
                        if (t.isArray(F) && F.length === 2) {
                            H = z.apply(null, F.concat([G]))
                        } else {
                            if (t.isArray(F) && F.length === 4) {
                                H = k.apply(null, F)
                            } else {
                                H = false
                            }
                        }
                    }
                }
                if (H === false) {
                    if (E.Easings[E.defaults.easing]) {
                        H = E.defaults.easing
                    } else {
                        H = x
                    }
                }
                return H
            }
            var v = E.CSS = {RegEx: {isHex: /^#([A-f\d]{3}){1,2}$/i, valueUnwrap: /^[A-z]+\((.*)\)$/i, wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/, valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/ig}, Hooks: {getRoot: function (F) {
                        return F
                    }, cleanRootPropertyValue: function (F, G) {
                        if (v.RegEx.valueUnwrap.test(G)) {
                            G = G.match(v.RegEx.valueUnwrap)[1]
                        }
                        if (v.Values.isCSSNullValue(G)) {
                            G = v.Hooks.templates[F][1]
                        }
                        return G
                    }, extractValue: function (I, H) {
                        var J = v.Hooks.registered[I];
                        if (J) {
                            var G = J[0], F = J[1];
                            H = v.Hooks.cleanRootPropertyValue(G, H);
                            return H.toString().match(v.RegEx.valueSplit)[F]
                        } else {
                            return H
                        }
                    }, injectValue: function (J, M, H) {
                        var L = v.Hooks.registered[J];
                        if (L) {
                            var G = L[0], F = L[1], K, I;
                            H = v.Hooks.cleanRootPropertyValue(G, H);
                            K = H.toString().match(v.RegEx.valueSplit);
                            K[F] = M;
                            I = K.join(" ");
                            return I
                        } else {
                            return H
                        }
                    }}, Normalizations: {registered: {clip: function (I, H, G) {
                            switch (I) {
                                case"name":
                                    return"clip";
                                case"extract":
                                    var F;
                                    if (v.RegEx.wrappedValueAlreadyExtracted.test(G)) {
                                        F = G
                                    } else {
                                        F = G.toString().match(v.RegEx.valueUnwrap);
                                        F = F ? F[1].replace(/,(\s+)?/g, " ") : G
                                    }
                                    return F;
                                case"inject":
                                    return"rect(" + G + ")"
                                }
                        }, blur: function (I, H, G) {
                            switch (I) {
                                case"name":
                                    return E.State.isFirefox ? "filter" : "-webkit-filter";
                                case"extract":
                                    var F = parseFloat(G);
                                    if (!(F || F === 0)) {
                                        var J = G.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                        if (J) {
                                            F = J[1]
                                        } else {
                                            F = 0
                                        }
                                    }
                                    return F;
                                case"inject":
                                    if (!parseFloat(G)) {
                                        return"none"
                                    } else {
                                        return"blur(" + G + ")"
                                    }
                                }
                        }, opacity: function (H, G, F) {
                            switch (H) {
                                case"name":
                                    return"opacity";
                                case"extract":
                                    return F;
                                case"inject":
                                    return F
                                }
                        }}, register: function () {}}, Names: {prefixCheck: function (G) {
                        var J = ["", "Webkit", "Moz", "ms", "O"];
                        for (var F = 0, H = J.length; F < H; F++) {
                            var I;
                            if (F === 0) {
                                I = G
                            } else {
                                I = J[F] + G.replace(/^\w/, function (K) {
                                    return K.toUpperCase()
                                })
                            }
                            if (t.isString(E.State.prefixElement.style[I])) {
                                E.State.prefixMatches[G] = I;
                                return[I, true]
                            }
                        }
                        return[G, false]
                    }}, Values: {isCSSNullValue: function (F) {
                        return(F == 0 || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(F))
                    }, getUnitType: function (F) {
                        if (/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(F)) {
                            return""
                        } else {
                            return"px"
                        }
                    }, getDisplayType: function (G) {
                        var F = G && G.tagName.toString().toLowerCase();
                        if (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(F)) {
                            return"inline"
                        } else {
                            if (/^(li)$/i.test(F)) {
                                return"list-item"
                            } else {
                                if (/^(tr)$/i.test(F)) {
                                    return"table-row"
                                } else {
                                    if (/^(table)$/i.test(F)) {
                                        return"table"
                                    } else {
                                        if (/^(tbody)$/i.test(F)) {
                                            return"table-row-group"
                                        } else {
                                            return"block"
                                        }
                                    }
                                }
                            }
                        }
                    }}, getPropertyValue: function (I, K, H, J) {
                    function G(P, U) {
                        var Q = 0;
                        var T = false;
                        if (/^(width|height)$/.test(U) && v.getPropertyValue(P, "display") === 0) {
                            T = true;
                            v.setPropertyValue(P, "display", v.Values.getDisplayType(P))
                        }
                        function O() {
                            if (T) {
                                v.setPropertyValue(P, "display", "none")
                            }
                        }
                        if (!J) {
                            if (U === "height" && v.getPropertyValue(P, "boxSizing").toString().toLowerCase() !== "border-box") {
                                var N = P.offsetHeight - (parseFloat(v.getPropertyValue(P, "borderTopWidth")) || 0) - (parseFloat(v.getPropertyValue(P, "borderBottomWidth")) || 0) - (parseFloat(v.getPropertyValue(P, "paddingTop")) || 0) - (parseFloat(v.getPropertyValue(P, "paddingBottom")) || 0);
                                O();
                                return N
                            } else {
                                if (U === "width" && v.getPropertyValue(P, "boxSizing").toString().toLowerCase() !== "border-box") {
                                    var V = P.offsetWidth - (parseFloat(v.getPropertyValue(P, "borderLeftWidth")) || 0) - (parseFloat(v.getPropertyValue(P, "borderRightWidth")) || 0) - (parseFloat(v.getPropertyValue(P, "paddingLeft")) || 0) - (parseFloat(v.getPropertyValue(P, "paddingRight")) || 0);
                                    O();
                                    return V
                                }
                            }
                        }
                        var S;
                        if (m(P) === undefined) {
                            S = f.getComputedStyle(P, null)
                        } else {
                            if (!m(P).computedStyle) {
                                S = m(P).computedStyle = f.getComputedStyle(P, null)
                            } else {
                                S = m(P).computedStyle
                            }
                        }
                        Q = S[U];
                        if (Q === "" || Q === null) {
                            Q = P.style[U]
                        }
                        O();
                        if (Q === "auto" && /^(top|right|bottom|left)$/i.test(U)) {
                            var R = G(P, "position");
                            if (R === "fixed" || (R === "absolute" && /top|left/i.test(U))) {
                                Q = $(P).position()[U] + "px"
                            }
                        }
                        return Q
                    }
                    var F;
                    if (v.Normalizations.registered[K]) {
                        var L, M;
                        L = v.Normalizations.registered[K]("name", I);
                        M = G(I, v.Names.prefixCheck(L)[0]);
                        F = v.Normalizations.registered[K]("extract", I, M)
                    }
                    if (!/^[\d-]/.test(F)) {
                        F = G(I, v.Names.prefixCheck(K)[0])
                    }
                    if (v.Values.isCSSNullValue(F)) {
                        F = 0
                    }
                    return F
                }, setPropertyValue: function (I, J, F, H, K) {
                    var G = J;
                    if (v.Normalizations.registered[J]) {
                        F = v.Normalizations.registered[J]("inject", I, F);
                        J = v.Normalizations.registered[J]("name", I)
                    }
                    G = v.Names.prefixCheck(J)[0];
                    I.style[G] = F;
                    return[G, F]
                }};
            v.Normalizations.register();
            E.hook = function (I, G, F) {
                var H = undefined;
                I = p(I);
                q.each(I, function (K, J) {
                    if (m(J) === undefined) {
                        E.init(J)
                    }
                    if (F === undefined) {
                        if (H === undefined) {
                            H = E.CSS.getPropertyValue(J, G)
                        }
                    } else {
                        var L = E.CSS.setPropertyValue(J, G, F);
                        H = L
                    }
                });
                return H
            };
            function p(F) {
                if (t.isWrapped(F)) {
                    F = [].slice.call(F)
                } else {
                    if (t.isNode(F)) {
                        F = [F]
                    }
                }
                return F
            }
            var t = {isString: function (F) {
                    return(typeof F === "string")
                }, isArray: Array.isArray || function (F) {
                    return Object.prototype.toString.call(F) === "[object Array]"
                }, isFunction: function (F) {
                    return Object.prototype.toString.call(F) === "[object Function]"
                }, isNode: function (F) {
                    return F && F.nodeType
                }, isNodeList: function (F) {
                    return typeof F === "object" && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(F)) && F.length !== undefined && (F.length === 0 || (typeof F[0] === "object" && F[0].nodeType > 0))
                }, isWrapped: function (F) {
                    return false
                }, isSVG: function (F) {
                    return f.SVGElement && (F instanceof f.SVGElement)
                }, isEmptyObject: function (G) {
                    for (var F in G) {
                        return false
                    }
                    return true
                }};
            var n = function () {
                function H() {
                    return null
                }
                var M = (arguments[0] && (arguments[0].p || ((q.isPlainObject(arguments[0].properties) && !arguments[0].properties.names) || t.isString(arguments[0].properties)))), P, F, G;
                var N, Q, J;
                P = true;
                G = 1;
                N = M ? (arguments[0].elements || arguments[0].e) : arguments[0];
                N = p(N);
                if (!N) {
                    return
                }
                if (M) {
                    Q = arguments[0].properties || arguments[0].p;
                    J = arguments[0].options || arguments[0].o
                } else {
                    Q = arguments[G];
                    J = arguments[G + 1]
                }
                var Z = N.length, U = 0;
                if (!/^(stop|finish|finishAll)$/i.test(Q) && !q.isPlainObject(J)) {
                    var I = G + 1;
                    J = {};
                    for (var T = I; T < arguments.length; T++) {
                        if (!t.isArray(arguments[T]) && (/^(fast|normal|slow)$/i.test(arguments[T]) || /^\d/.test(arguments[T]))) {
                            J.duration = arguments[T]
                        } else {
                            if (t.isString(arguments[T]) || t.isArray(arguments[T])) {
                                J.easing = arguments[T]
                            } else {
                                if (t.isFunction(arguments[T])) {
                                    J.complete = arguments[T]
                                }
                            }
                        }
                    }
                }
                var S;
                switch (Q) {
                    case"finish":
                    case"finishAll":
                    case"stop":
                        q.each(N, function (ab, aa) {
                            if (m(aa) && m(aa).delayTimer) {
                                clearTimeout(m(aa).delayTimer.setTimeout);
                                if (m(aa).delayTimer.next) {
                                    m(aa).delayTimer.next()
                                }
                                delete m(aa).delayTimer
                            }
                            if (Q === "finishAll" && (J === true || t.isString(J))) {
                                q.each(q.queue(aa, t.isString(J) ? J : ""), function (ac, ad) {
                                    if (t.isFunction(ad)) {
                                        ad()
                                    }
                                });
                                q.queue(aa, t.isString(J) ? J : "", [])
                            }
                        });
                        var K = [];
                        q.each(E.State.calls, function (aa, ab) {
                            if (ab) {
                                q.each(ab[1], function (ac, ad) {
                                    var ae = (J === undefined) ? "" : J;
                                    if (ae !== true && (ab[2].queue !== ae) && !(J === undefined && ab[2].queue === false)) {
                                        return true
                                    }
                                    q.each(N, function (af, ag) {
                                        if (ag === ad) {
                                            if (J === true || t.isString(J)) {
                                                q.each(q.queue(ag, t.isString(J) ? J : ""), function (ah, ai) {
                                                    if (t.isFunction(ai)) {
                                                        ai(null, true)
                                                    }
                                                });
                                                q.queue(ag, t.isString(J) ? J : "", [])
                                            }
                                            if (Q === "stop") {
                                                if (m(ag) && m(ag).tweensContainer && ae !== false) {
                                                    q.each(m(ag).tweensContainer, function (ah, ai) {
                                                        ai.endValue = ai.currentValue
                                                    })
                                                }
                                                K.push(aa)
                                            } else {
                                                if (Q === "finish" || Q === "finishAll") {
                                                    ab[2].duration = 1
                                                }
                                            }
                                        }
                                    })
                                })
                            }
                        });
                        if (Q === "stop") {
                            q.each(K, function (ab, aa) {
                                B(aa, true)
                            })
                        }
                        return H();
                    default:
                        if (q.isPlainObject(Q) && !t.isEmptyObject(Q)) {
                            S = "start"
                        } else {
                            if (t.isString(Q) && E.Redirects[Q]) {
                                var O = q.extend({}, J), L = O.duration, Y = O.delay || 0;
                                if (O.backwards === true) {
                                    N = q.extend(true, [], N).reverse()
                                }
                                q.each(N, function (ab, aa) {
                                    if (parseFloat(O.stagger)) {
                                        O.delay = Y + (parseFloat(O.stagger) * ab)
                                    } else {
                                        if (t.isFunction(O.stagger)) {
                                            O.delay = Y + O.stagger.call(aa, ab, Z)
                                        }
                                    }
                                    if (O.drag) {
                                        O.duration = parseFloat(L) || (/^(callout|transition)/.test(Q) ? 1000 : o);
                                        O.duration = Math.max(O.duration * (O.backwards ? 1 - ab / Z : (ab + 1) / Z), O.duration * 0.75, 200)
                                    }
                                    E.Redirects[Q].call(aa, aa, O || {}, ab, Z, N, promiseData.promise ? promiseData : undefined)
                                });
                                return H()
                            } else {
                                var R = "jqxAnimations: First argument (" + Q + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                console.log(R);
                                return H()
                            }
                        }
                }
                var X = {lastParent: null, lastPosition: null, lastFontSize: null, lastPercentToPxWidth: null, lastPercentToPxHeight: null, lastEmToPx: null, remToPx: null, vwToPx: null, vhToPx: null};
                var W = [];
                function V() {
                    var aa = this, ad = q.extend({}, E.defaults, J), ac = {}, ab;
                    if (m(aa) === undefined) {
                        E.init(aa)
                    }
                    ad.duration = parseFloat(ad.duration) || 1;
                    ad.easing = w(ad.easing, ad.duration);
                    if (ad.begin && !t.isFunction(ad.begin)) {
                        ad.begin = null
                    }
                    if (ad.progress && !t.isFunction(ad.progress)) {
                        ad.progress = null
                    }
                    if (ad.complete && !t.isFunction(ad.complete)) {
                        ad.complete = null
                    }
                    if (ad.display !== undefined && ad.display !== null) {
                        ad.display = ad.display.toString().toLowerCase();
                        if (ad.display === "auto") {
                            ad.display = E.CSS.Values.getDisplayType(aa)
                        }
                    }
                    if (ad.visibility !== undefined && ad.visibility !== null) {
                        ad.visibility = ad.visibility.toString().toLowerCase()
                    }
                    ad.mobileHA = (ad.mobileHA && E.State.isMobile && !E.State.isGingerbread);
                    function ae(ao) {
                        if (ad.begin && U === 0) {
                            try {
                                ad.begin.call(N, N)
                            } catch (aq) {
                                setTimeout(function () {
                                    throw aq
                                }, 1)
                            }
                        }
                        if (S === "start") {
                            var au;
                            if (m(aa).tweensContainer && m(aa).isAnimating === true) {
                                au = m(aa).tweensContainer
                            }
                            function an(ay, ax) {
                                var aw = undefined, aA = undefined, az = undefined;
                                if (t.isArray(ay)) {
                                    aw = ay[0];
                                    if ((!t.isArray(ay[1]) && /^[\d-]/.test(ay[1])) || t.isFunction(ay[1]) || v.RegEx.isHex.test(ay[1])) {
                                        az = ay[1]
                                    } else {
                                        if ((t.isString(ay[1]) && !v.RegEx.isHex.test(ay[1])) || t.isArray(ay[1])) {
                                            aA = ax ? ay[1] : w(ay[1], ad.duration);
                                            if (ay[2] !== undefined) {
                                                az = ay[2]
                                            }
                                        }
                                    }
                                } else {
                                    aw = ay
                                }
                                if (!ax) {
                                    aA = aA || ad.easing
                                }
                                if (t.isFunction(aw)) {
                                    aw = aw.call(aa, U, Z)
                                }
                                if (t.isFunction(az)) {
                                    az = az.call(aa, U, Z)
                                }
                                return[aw || 0, aA, az]
                            }
                            for (var av in Q) {
                                var af = an(Q[av]), at = af[0], ap = af[1], ag = af[2];
                                av = h.camelCase(av);
                                var ak = v.Hooks.getRoot(av), ar = false;
                                if (!m(aa).isSVG && ak !== "tween" && v.Names.prefixCheck(ak)[1] === false && v.Normalizations.registered[ak] === undefined) {
                                    if (E.debug) {
                                        console.log("Skipping [" + ak + "] due to a lack of browser support.")
                                    }
                                    continue
                                }
                                if (((ad.display !== undefined && ad.display !== null && ad.display !== "none") || (ad.visibility !== undefined && ad.visibility !== "hidden")) && /opacity|filter/.test(av) && !ag && at !== 0) {
                                    ag = 0
                                }
                                if (ad._cacheValues && au && au[av]) {
                                    if (ag === undefined) {
                                        ag = au[av].endValue + au[av].unitType
                                    }
                                    ar = m(aa).rootPropertyValueCache[ak]
                                } else {
                                    if (ag === undefined) {
                                        ag = v.getPropertyValue(aa, av)
                                    }
                                }
                                var am, al, aj, ai = false;
                                function ah(ay, ax) {
                                    var aw, az;
                                    az = (ax || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (aA) {
                                        aw = aA;
                                        return""
                                    });
                                    if (!aw) {
                                        aw = v.Values.getUnitType(ay)
                                    }
                                    return[az, aw]
                                }
                                am = ah(av, ag);
                                ag = am[0];
                                aj = am[1];
                                am = ah(av, at);
                                at = am[0].replace(/^([+-\/*])=/, function (ax, aw) {
                                    ai = aw;
                                    return""
                                });
                                al = am[1];
                                ag = parseFloat(ag) || 0;
                                at = parseFloat(at) || 0;
                                if (/[\/*]/.test(ai)) {
                                    al = aj
                                }
                                switch (ai) {
                                    case"+":
                                        at = ag + at;
                                        break;
                                    case"-":
                                        at = ag - at;
                                        break;
                                    case"*":
                                        at = ag * at;
                                        break;
                                    case"/":
                                        at = ag / at;
                                        break
                                }
                                ac[av] = {rootPropertyValue: ar, startValue: ag, currentValue: ag, endValue: at, unitType: al, easing: ap};
                                if (E.debug) {
                                    console.log("tweensContainer (" + av + "): " + JSON.stringify(ac[av]), aa)
                                }
                            }
                            ac.element = aa
                        }
                        if (ac.element) {
                            h(aa).addClass("jqxAnimations-animating");
                            W.push(ac);
                            if (ad.queue === "") {
                                m(aa).tweensContainer = ac;
                                m(aa).opts = ad
                            }
                            m(aa).isAnimating = true;
                            if (U === Z - 1) {
                                E.State.calls.push([W, N, ad, null]);
                                if (E.State.isTicking === false) {
                                    E.State.isTicking = true;
                                    A()
                                }
                            } else {
                                U++
                            }
                        }
                    }
                    q.queue(aa, ad.queue, function (ag, af) {
                        if (af === true) {
                            return true
                        }
                        E.jqxAnimationsQueueEntryFlag = true;
                        ae(ag)
                    });
                    if ((ad.queue === "" || ad.queue === "fx") && q.queue(aa)[0] !== "inprogress") {
                        q.dequeue(aa)
                    }
                }
                q.each(N, function (ab, aa) {
                    if (t.isNode(aa)) {
                        V.call(aa)
                    }
                });
                var O = q.extend({}, E.defaults, J);
                return H()
            };
            E = q.extend(n, E);
            E.animate = n;
            var D = f.requestAnimationFrame || s;
            if (!E.State.isMobile && document.hidden !== undefined) {
                document.addEventListener("visibilitychange", function () {
                    if (document.hidden) {
                        D = function (F) {
                            return setTimeout(function () {
                                F(true)
                            }, 16)
                        };
                        A()
                    } else {
                        D = f.requestAnimationFrame || s
                    }
                })
            }
            function A(G) {
                if (G) {
                    var U = (new Date).getTime();
                    var Z = E.State.calls.length;
                    for (var V = 0; V < Z; V++) {
                        if (!E.State.calls[V]) {
                            continue
                        }
                        var L = E.State.calls[V], Y = L[0], O = L[2], ab = L[3], X = !!ab, H = null;
                        if (!ab) {
                            ab = E.State.calls[V][3] = U - 16
                        }
                        var W = Math.min((U - ab) / O.duration, 1);
                        for (var S = 0, J = Y.length; S < J; S++) {
                            var Q = Y[S], F = Q.element;
                            if (!m(F)) {
                                continue
                            }
                            var P = false;
                            if (O.display !== undefined && O.display !== null && O.display !== "none") {
                                if (O.display === "flex") {
                                    var M = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                    q.each(M, function (ac, ad) {
                                        v.setPropertyValue(F, "display", ad)
                                    })
                                }
                                v.setPropertyValue(F, "display", O.display)
                            }
                            if (O.visibility !== undefined && O.visibility !== "hidden") {
                                v.setPropertyValue(F, "visibility", O.visibility)
                            }
                            for (var K in Q) {
                                if (K !== "element") {
                                    var I = Q[K], N, R = t.isString(I.easing) ? E.Easings[I.easing] : I.easing;
                                    if (W === 1) {
                                        N = I.endValue
                                    } else {
                                        var T = I.endValue - I.startValue;
                                        N = I.startValue + (T * R(W, O, T));
                                        if (!X && (N === I.currentValue)) {
                                            continue
                                        }
                                    }
                                    I.currentValue = N;
                                    if (K === "tween") {
                                        H = N
                                    } else {
                                        var aa = v.setPropertyValue(F, K, I.currentValue + (parseFloat(N) === 0 ? "" : I.unitType), I.rootPropertyValue, I.scrollData)
                                    }
                                }
                            }
                        }
                        if (O.display !== undefined && O.display !== "none") {
                            E.State.calls[V][2].display = false
                        }
                        if (O.visibility !== undefined && O.visibility !== "hidden") {
                            E.State.calls[V][2].visibility = false
                        }
                        if (O.progress) {
                            O.progress.call(L[1], L[1], W, Math.max(0, (ab + O.duration) - U), ab, H)
                        }
                        if (W === 1) {
                            B(V)
                        }
                    }
                }
                if (E.State.isTicking) {
                    D(A)
                }
            }
            function B(N, J) {
                if (!E.State.calls[N]) {
                    return false
                }
                var R = E.State.calls[N][0], F = E.State.calls[N][1], G = E.State.calls[N][2], I = E.State.calls[N][4];
                var O = false;
                for (var M = 0, H = R.length; M < H; M++) {
                    var L = R[M].element;
                    if (!J && !G.loop) {
                        if (G.display === "none") {
                            v.setPropertyValue(L, "display", G.display)
                        }
                        if (G.visibility === "hidden") {
                            v.setPropertyValue(L, "visibility", G.visibility)
                        }
                    }
                    if (G.loop !== true && (q.queue(L)[1] === undefined || !/\.jqxAnimationsQueueEntryFlag/i.test(q.queue(L)[1]))) {
                        if (m(L)) {
                            m(L).isAnimating = false;
                            m(L).rootPropertyValueCache = {};
                            h(L).removeClass("jqxAnimations-animating")
                        }
                    }
                    if (!J && G.complete && (M === H - 1)) {
                        try {
                            G.complete.call(F, F)
                        } catch (P) {
                            setTimeout(function () {
                                throw P
                            }, 1)
                        }
                    }
                    if (I && G.loop !== true) {
                        I(F)
                    }
                    if (G.queue !== false) {
                        q.dequeue(L, G.queue)
                    }
                }
                E.State.calls[N] = false;
                for (var K = 0, Q = E.State.calls.length; K < Q; K++) {
                    if (E.State.calls[K] !== false) {
                        O = true;
                        break
                    }
                }
                if (O === false) {
                    E.State.isTicking = false;
                    delete E.State.calls;
                    E.State.calls = []
                }
            }
            q.animate = function () {
                var F = Array.prototype.slice.call(arguments);
                F.splice(0, 0, q.element);
                return E.apply(q, F)
            };
            for (var y = 0; y < 2; y++) {
                var C = "Down";
                if (y === 1) {
                    C = "Up"
                }
                var r = function (F) {
                    q["slide" + F] = function (P, I, N, G, L) {
                        if (P === "fast") {
                            P = {duration: "200"}
                        }
                        if (P === "slow") {
                            P = {duration: "600"}
                        }
                        var H = q.extend({}, P), O = H.begin, M = H.complete, K = {height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: ""}, J = {};
                        if (H.display === undefined) {
                            H.display = (F === "Down" ? (E.CSS.Values.getDisplayType(l) === "inline" ? "inline-block" : "block") : "none")
                        }
                        H.begin = function () {
                            O && O.call(G, G);
                            for (var R in K) {
                                J[R] = l.style[R];
                                var Q = E.CSS.getPropertyValue(l, R);
                                K[R] = (F === "Down") ? [Q, 0] : [0, Q]
                            }
                            J.overflow = l.style.overflow;
                            l.style.overflow = "hidden"
                        };
                        H.complete = function () {
                            for (var Q in J) {
                                l.style[Q] = J[Q]
                            }
                            M && M.call(G, G);
                            L && L.resolver(G)
                        };
                        E(l, K, H)
                    }
                };
                r(C)
            }
            for (var y = 0; y < 2; y++) {
                var C = "In";
                if (y === 1) {
                    C = "Out"
                }
                var j = function (F) {
                    q["fade" + F] = function (Q, I, N, G, K) {
                        if (Q === "fast") {
                            Q = {duration: "200"}
                        }
                        if (Q === "slow") {
                            Q = {duration: "600"}
                        }
                        var H = q.extend({}, Q), O = H.begin, L = {opacity: ""}, M = {opacity: (F === "In") ? 1 : 0}, J = {}, P = H.complete;
                        if (I !== N - 1) {
                            H.complete = H.begin = null;
                            H.begin = function () {
                                O && O.call(G, G);
                                for (var S in L) {
                                    J[S] = l.style[S];
                                    var R = E.CSS.getPropertyValue(l, S);
                                    L[S] = (F === "In") ? [R, 1] : [0, R]
                                }
                            };
                            H.complete = function () {
                                for (var R in J) {
                                    l.style[R] = J[R]
                                }
                                if (P) {
                                    P.call(G, G)
                                }
                                K && K.resolver(G)
                            }
                        } else {
                            H.complete = function () {
                                if (P) {
                                    P.call(G, G)
                                }
                                K && K.resolver(G)
                            }
                        }
                        if (H.display === undefined) {
                            H.display = (F === "In" ? "auto" : "none")
                        }
                        E(q.element, M, H)
                    }
                };
                j(C)
            }
        }});
    h.fn = h.prototype;
    h.extend(h.fn, h);
    h.prototype.init.prototype = h;
    f.jqxHelper = h;
    var c = {};
    h.extend(c, {createEvent: function (j, l) {
            if (j.originalEvent) {
                return j
            }
            var k = h.extend({}, j);
            k.originalEvent = j;
            if (!k.target) {
                k.target = k.srcElement || document;
                if (l) {
                    k.target = targett
                }
            }
            if (k.target.nodeType === 3) {
                k.target = k.target.parentNode
            }
            k._isPropagationStopped = false;
            k._isDefaultPrevented = false;
            if (k.stopPropagation) {
                k.originalStopPropagation = k.stopPropagation;
                k.stopPropagation = function () {
                    this._isPropagationStopped = true;
                    k.originalEvent.stopPropagation();
                    k.cancelBubble = true
                }
            }
            if (k.preventDefault) {
                k.preventDefault = function () {
                    this._isDefaultPrevented = true;
                    return k.originalEvent.preventDefault()
                }
            }
            k.isDefaultPrevented = function () {
                return k._isDefaultPrevented
            };
            k.isPropagationStopped = function () {
                return k._isPropagationStopped
            };
            k.metaKey = !!k.metaKey;
            return k
        }, add: function (n, r, z, o) {
            var q = h;
            var s, p, A, y, x, v, j, w, k, m, u;
            if (n.nodeType === 3 || n.nodeType === 8 || !r || !z) {
                return
            }
            s = h(n).data(n[0]);
            if (!s) {
                h(n).data(n, "events", {});
                s = h(n).data(n)
            }
            A = s.events;
            if (!A) {
                s.events = A = {}
            }
            p = s.handle;
            if (!p) {
                s.handle = p = function (t) {
                    return c.dispatch.apply(p.elem, new Array(t, q))
                };
                p.elem = n
            }
            var l = /^([^\.]*|)(?:\.(.+)|)$/;
            r = q.trim(r).split(" ");
            for (y = 0; y < r.length; y++) {
                x = l.exec(r[y]) || [];
                v = x[1];
                j = (x[2] || "").split(".").sort();
                w = q.extend({type: v, origType: x[1], data: o, handler: z, guid: z.guid, namespace: j.join(".")}, k);
                m = A[v];
                if (!m) {
                    m = A[v] = [];
                    m.delegateCount = 0;
                    if (n.addEventListener) {
                        n.addEventListener(v, p, false)
                    } else {
                        if (n.attachEvent) {
                            n.attachEvent("on" + v, p)
                        }
                    }
                }
                m.push(w)
            }
            n = null
        }, global: {}, remove: function (C, x, l, A, u) {
            var s = h;
            var y, n, p, D, v, q, z, m, o, w, k;
            var B = s.data(C);
            var r = /^([^\.]*|)(?:\.(.+)|)$/;
            if (!B || !(m = B.events)) {
                return
            }
            x = s.trim(x).split(" ");
            for (y = 0; y < x.length; y++) {
                n = r.exec(x[y]) || [];
                p = D = n[1];
                v = n[2];
                if (!p) {
                    for (p in m) {
                        this.remove(C, p + x[y], l, A, true)
                    }
                    continue
                }
                w = m[p] || [];
                q = w.length;
                v = v ? new RegExp("(^|\\.)" + v.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                for (z = 0; z < w.length; z++) {
                    k = w[z];
                    if ((D === k.origType) && (!l || l.guid === k.guid) && (!v || v.test(k.namespace))) {
                        w.splice(z--, 1);
                        if (k.selector) {
                            w.delegateCount--
                        }
                    }
                }
                if (w.length === 0 && q !== w.length) {
                    this.removeEvent(C, p, B.handle);
                    delete m[p]
                }
            }
        }, trigger: function (k, r, p, z) {
            var u = h;
            if (p && (p.nodeType === 3 || p.nodeType === 8)) {
                return
            }
            var j, m, s, x, o, n, v, t, q, y, w = k.type || k, l = [];
            if (w.indexOf(".") >= 0) {
                l = w.split(".");
                w = l.shift();
                l.sort()
            }
            if (typeof k === "string") {
                k = document.createEvent("Event");
                k.initEvent(w, true, true)
            }
            k = c.createEvent(k);
            r = r != null ? u.makeArray(r) : [];
            r.unshift(k);
            k.type = w;
            k.isTrigger = true;
            k.namespace = l.join(".");
            k.namespace_re = k.namespace ? new RegExp("(^|\\.)" + l.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            n = w.indexOf(":") < 0 ? "on" + w : "";
            k.result = undefined;
            if (!k.target) {
                k.target = p
            }
            q = [[p, w]];
            if (!z && !u.isWindow(p)) {
                y = w;
                x = p.parentNode;
                for (o = p; x; x = x.parentNode) {
                    q.push([x, y]);
                    o = x
                }
                if (o === (p.ownerDocument || document)) {
                    q.push([o.defaultView || o.parentWindow || f, y])
                }
            }
            for (s = 0; s < q.length && !k.isPropagationStopped(); s++) {
                x = q[s][0];
                k.type = q[s][1];
                t = (u.data(x, "events") || {})[k.type] && u.data(x, "handle");
                if (t) {
                    t.apply(x, r)
                }
                t = n && x[n];
                if (t && jQuery.acceptData(x) && t.apply && t.apply(x, r) === false) {
                    k.preventDefault()
                }
            }
            k.type = w;
            if (!z && !k.isDefaultPrevented()) {
                if (n && p[w] || k.target.offsetWidth !== 0) {
                    o = p[n];
                    if (o) {
                        p[n] = null
                    }
                    if (p[w]) {
                        p[w]()
                    }
                    if (o) {
                        p[n] = o
                    }
                }
            }
            return k.result
        }, dispatch: function (y, k) {
            var r = k;
            var o = this;
            y = c.createEvent(y);
            var A, x, q, B, z, s, n, l, w, C, u = ((r.data(o, "events") || {})[y.type] || []), t = u.delegateCount, p = Array.prototype.slice.call(arguments), v = !y.namespace, m = [];
            m.push({elem: this, matches: u.slice(t)});
            for (A = 0; A < m.length; A++) {
                s = m[A];
                y.currentTarget = s.elem;
                for (x = 0; x < s.matches.length; x++) {
                    l = s.matches[x];
                    if (y.isPropagationStopped()) {
                        continue
                    }
                    if (v || (!y.namespace && !l.namespace) || y.namespace_re && y.namespace_re.test(l.namespace)) {
                        y.data = l.data;
                        y.handleObj = l;
                        B = l.handler.apply(s.elem, p);
                        if (B !== undefined) {
                            y.result = B;
                            if (B === false) {
                                y.preventDefault();
                                y.stopPropagation()
                            }
                        }
                    }
                }
            }
            return y.result
        }, removeEvent: document.removeEventListener ? function (k, j, l) {
            if (k.removeEventListener) {
                k.removeEventListener(j, l, false)
            }
        } : function (l, k, m) {
            var j = "on" + k;
            if (l.detachEvent) {
                if (typeof l[j] === "undefined") {
                    l[j] = null
                }
                l.detachEvent(j, m)
            }
        }});
    (function (o, j) {
        o = o;
        j = j || f;
        var p = [];
        var k = false;
        var n = false;
        function m() {
            if (!k) {
                k = true;
                for (var q = 0; q < p.length; q++) {
                    p[q].fn.call(f, p[q].ctx)
                }
                p = []
            }
        }
        function l() {
            if (document.readyState === "complete") {
                m()
            }
        }
        j[o] = function (r, q) {
            if (k) {
                setTimeout(function () {
                    r(q)
                }, 1);
                return
            } else {
                p.push({fn: r, ctx: q})
            }
            if (document.readyState === "complete") {
                setTimeout(m, 1)
            } else {
                if (!n) {
                    if (document.addEventListener) {
                        document.addEventListener("DOMContentLoaded", m, false);
                        f.addEventListener("load", m, false)
                    } else {
                        document.attachEvent("onreadystatechange", l);
                        f.attachEvent("onload", m)
                    }
                    n = true
                }
            }
        }
    })("initializeWidgets", f);
    h.prototype.ready = f.initializeWidgets;
    if (f.jQuery) {
        return
    }
    if (!f.$) {
        f.$ = f.minQuery = f.jqxHelper
    }
})(window);
var jqxBaseFramework = window.minQuery || window.jQuery;
(function (a) {
    a.jqx = a.jqx || {};
    jqwidgets = {createInstance: function (b, d, f) {
            if (d == "jqxDataAdapter") {
                var e = f[0];
                var c = f[1] || {};
                return new a.jqx.dataAdapter(e, c)
            }
            a(b)[d](f || {});
            return a(b)[d]("getInstance")
        }};
    a.jqx.define = function (b, c, d) {
        b[c] = function () {
            if (this.baseType) {
                this.base = new b[this.baseType]();
                this.base.defineInstance()
            }
            this.defineInstance();
            this.metaInfo()
        };
        b[c].prototype.defineInstance = function () {};
        b[c].prototype.metaInfo = function () {};
        b[c].prototype.base = null;
        b[c].prototype.baseType = undefined;
        if (d && b[d]) {
            b[c].prototype.baseType = d
        }
    };
    a.jqx.invoke = function (e, d) {
        if (d.length == 0) {
            return
        }
        var f = typeof (d) == Array || d.length > 0 ? d[0] : d;
        var c = typeof (d) == Array || d.length > 1 ? Array.prototype.slice.call(d, 1) : a({}).toArray();
        while (e[f] == undefined && e.base != null) {
            if (e[f] != undefined && a.isFunction(e[f])) {
                return e[f].apply(e, c)
            }
            if (typeof f == "string") {
                var b = f.toLowerCase();
                if (e[b] != undefined && a.isFunction(e[b])) {
                    return e[b].apply(e, c)
                }
            }
            e = e.base
        }
        if (e[f] != undefined && a.isFunction(e[f])) {
            return e[f].apply(e, c)
        }
        if (typeof f == "string") {
            var b = f.toLowerCase();
            if (e[b] != undefined && a.isFunction(e[b])) {
                return e[b].apply(e, c)
            }
        }
        return
    };
    a.jqx.hasProperty = function (c, b) {
        if (typeof (b) == "object") {
            for (var e in b) {
                var d = c;
                while (d) {
                    if (d.hasOwnProperty(e)) {
                        return true
                    }
                    if (d.hasOwnProperty(e.toLowerCase())) {
                        return true
                    }
                    d = d.base
                }
                return false
            }
        } else {
            while (c) {
                if (c.hasOwnProperty(b)) {
                    return true
                }
                if (c.hasOwnProperty(b.toLowerCase())) {
                    return true
                }
                c = c.base
            }
        }
        return false
    };
    a.jqx.hasFunction = function (e, d) {
        if (d.length == 0) {
            return false
        }
        if (e == undefined) {
            return false
        }
        var f = typeof (d) == Array || d.length > 0 ? d[0] : d;
        var c = typeof (d) == Array || d.length > 1 ? Array.prototype.slice.call(d, 1) : {};
        while (e[f] == undefined && e.base != null) {
            if (e[f] && a.isFunction(e[f])) {
                return true
            }
            if (typeof f == "string") {
                var b = f.toLowerCase();
                if (e[b] && a.isFunction(e[b])) {
                    return true
                }
            }
            e = e.base
        }
        if (e[f] && a.isFunction(e[f])) {
            return true
        }
        if (typeof f == "string") {
            var b = f.toLowerCase();
            if (e[b] && a.isFunction(e[b])) {
                return true
            }
        }
        return false
    };
    a.jqx.isPropertySetter = function (c, b) {
        if (b.length == 1 && typeof (b[0]) == "object") {
            return true
        }
        if (b.length == 2 && typeof (b[0]) == "string" && !a.jqx.hasFunction(c, b)) {
            return true
        }
        return false
    };
    a.jqx.validatePropertySetter = function (f, d, b) {
        if (!a.jqx.propertySetterValidation) {
            return true
        }
        if (d.length == 1 && typeof (d[0]) == "object") {
            for (var e in d[0]) {
                var g = f;
                while (!g.hasOwnProperty(e) && g.base) {
                    g = g.base
                }
                if (!g || !g.hasOwnProperty(e)) {
                    if (!b) {
                        var c = g.hasOwnProperty(e.toString().toLowerCase());
                        if (!c) {
                            throw"Invalid property: " + e
                        } else {
                            return true
                        }
                    }
                    return false
                }
            }
            return true
        }
        if (d.length != 2) {
            if (!b) {
                throw"Invalid property: " + d.length >= 0 ? d[0] : ""
            }
            return false
        }
        while (!f.hasOwnProperty(d[0]) && f.base) {
            f = f.base
        }
        if (!f || !f.hasOwnProperty(d[0])) {
            if (!b) {
                throw"Invalid property: " + d[0]
            }
            return false
        }
        return true
    };
    if (!Object.keys) {
        Object.keys = (function () {
            var d = Object.prototype.hasOwnProperty, e = !({toString: null}).propertyIsEnumerable("toString"), c = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], b = c.length;
            return function (h) {
                if (typeof h !== "object" && (typeof h !== "function" || h === null)) {
                    throw new TypeError("Object.keys called on non-object")
                }
                var f = [], j, g;
                for (j in h) {
                    if (d.call(h, j)) {
                        f.push(j)
                    }
                }
                if (e) {
                    for (g = 0; g < b; g++) {
                        if (d.call(h, c[g])) {
                            f.push(c[g])
                        }
                    }
                }
                return f
            }
        }())
    }
    a.jqx.set = function (e, h) {
        var c = 0;
        if (h.length == 1 && typeof (h[0]) == "object") {
            if (e.isInitialized && Object.keys && Object.keys(h[0]).length > 1) {
                var f = !e.base ? e.element : e.base.element;
                var b = a.data(f, e.widgetName).initArgs;
                if (b && JSON && JSON.stringify && h[0] && b[0]) {
                    try {
                        if (JSON.stringify(h[0]) == JSON.stringify(b[0])) {
                            var g = true;
                            a.each(h[0], function (l, m) {
                                if (e[l] != m) {
                                    g = false;
                                    return false
                                }
                            });
                            if (g) {
                                return
                            }
                        }
                    } catch (d) {
                    }
                }
                e.batchUpdate = h[0];
                var j = {};
                var k = {};
                a.each(h[0], function (l, m) {
                    var n = e;
                    while (!n.hasOwnProperty(l) && n.base != null) {
                        n = n.base
                    }
                    if (n.hasOwnProperty(l)) {
                        if (e[l] != m) {
                            j[l] = e[l];
                            k[l] = m;
                            c++
                        }
                    } else {
                        if (n.hasOwnProperty(l.toLowerCase())) {
                            if (e[l.toLowerCase()] != m) {
                                j[l.toLowerCase()] = e[l.toLowerCase()];
                                k[l.toLowerCase()] = m;
                                c++
                            }
                        }
                    }
                });
                if (c < 2) {
                    e.batchUpdate = null
                }
            }
            a.each(h[0], function (l, m) {
                var n = e;
                while (!n.hasOwnProperty(l) && n.base != null) {
                    n = n.base
                }
                if (n.hasOwnProperty(l)) {
                    a.jqx.setvalueraiseevent(n, l, m)
                } else {
                    if (n.hasOwnProperty(l.toLowerCase())) {
                        a.jqx.setvalueraiseevent(n, l.toLowerCase(), m)
                    } else {
                        if (a.jqx.propertySetterValidation) {
                            throw"jqxCore: invalid property '" + l + "'"
                        }
                    }
                }
            });
            if (e.batchUpdate != null) {
                e.batchUpdate = null;
                if (e.propertiesChangedHandler && c > 1) {
                    e.propertiesChangedHandler(e, j, k)
                }
            }
        } else {
            if (h.length == 2) {
                while (!e.hasOwnProperty(h[0]) && e.base) {
                    e = e.base
                }
                if (e.hasOwnProperty(h[0])) {
                    a.jqx.setvalueraiseevent(e, h[0], h[1])
                } else {
                    if (e.hasOwnProperty(h[0].toLowerCase())) {
                        a.jqx.setvalueraiseevent(e, h[0].toLowerCase(), h[1])
                    } else {
                        if (a.jqx.propertySetterValidation) {
                            throw"jqxCore: invalid property '" + h[0] + "'"
                        }
                    }
                }
            }
        }
    };
    a.jqx.setvalueraiseevent = function (c, d, e) {
        var b = c[d];
        c[d] = e;
        if (!c.isInitialized) {
            return
        }
        if (c.propertyChangedHandler != undefined) {
            c.propertyChangedHandler(c, d, b, e)
        }
        if (c.propertyChangeMap != undefined && c.propertyChangeMap[d] != undefined) {
            c.propertyChangeMap[d](c, d, b, e)
        }
    };
    a.jqx.get = function (e, d) {
        if (d == undefined || d == null) {
            return undefined
        }
        if (e.propertyMap) {
            var c = e.propertyMap(d);
            if (c != null) {
                return c
            }
        }
        if (e.hasOwnProperty(d)) {
            return e[d]
        }
        if (e.hasOwnProperty(d.toLowerCase())) {
            return e[d.toLowerCase()]
        }
        var b = undefined;
        if (typeof (d) == Array) {
            if (d.length != 1) {
                return undefined
            }
            b = d[0]
        } else {
            if (typeof (d) == "string") {
                b = d
            }
        }
        while (!e.hasOwnProperty(b) && e.base) {
            e = e.base
        }
        if (e) {
            return e[b]
        }
        return undefined
    };
    a.jqx.serialize = function (e) {
        var b = "";
        if (a.isArray(e)) {
            b = "[";
            for (var d = 0; d < e.length; d++) {
                if (d > 0) {
                    b += ", "
                }
                b += a.jqx.serialize(e[d])
            }
            b += "]"
        } else {
            if (typeof (e) == "object") {
                b = "{";
                var c = 0;
                for (var d in e) {
                    if (c++ > 0) {
                        b += ", "
                    }
                    b += d + ": " + a.jqx.serialize(e[d])
                }
                b += "}"
            } else {
                b = e.toString()
            }
        }
        return b
    };
    a.jqx.propertySetterValidation = true;
    a.jqx.jqxWidgetProxy = function (g, c, b) {
        var d = a(c);
        var f = a.data(c, g);
        if (f == undefined) {
            return undefined
        }
        var e = f.instance;
        if (a.jqx.hasFunction(e, b)) {
            return a.jqx.invoke(e, b)
        }
        if (a.jqx.isPropertySetter(e, b)) {
            if (a.jqx.validatePropertySetter(e, b)) {
                a.jqx.set(e, b);
                return undefined
            }
        } else {
            if (typeof (b) == "object" && b.length == 0) {
                return
            } else {
                if (typeof (b) == "object" && b.length == 1 && a.jqx.hasProperty(e, b[0])) {
                    return a.jqx.get(e, b[0])
                } else {
                    if (typeof (b) == "string" && a.jqx.hasProperty(e, b[0])) {
                        return a.jqx.get(e, b)
                    }
                }
            }
        }
        throw"jqxCore: Invalid parameter '" + a.jqx.serialize(b) + "' does not exist.";
        return undefined
    };
    a.jqx.applyWidget = function (c, d, k, l) {
        var g = false;
        try {
            g = window.MSApp != undefined
        } catch (f) {
        }
        var m = a(c);
        if (!l) {
            l = new a.jqx["_" + d]()
        } else {
            l.host = m;
            l.element = c
        }
        if (c.id == "") {
            c.id = a.jqx.utilities.createId()
        }
        var j = {host: m, element: c, instance: l, initArgs: k};
        l.widgetName = d;
        a.data(c, d, j);
        a.data(c, "jqxWidget", j.instance);
        var h = new Array();
        var l = j.instance;
        while (l) {
            l.isInitialized = false;
            h.push(l);
            l = l.base
        }
        h.reverse();
        h[0].theme = a.jqx.theme || "";
        a.jqx.jqxWidgetProxy(d, c, k);
        for (var b in h) {
            l = h[b];
            if (b == 0) {
                l.host = m;
                l.element = c;
                l.WinJS = g
            }
            if (l != undefined) {
                if (l.definedInstance) {
                    l.definedInstance()
                }
                if (l.createInstance != null) {
                    if (g) {
                        MSApp.execUnsafeLocalFunction(function () {
                            l.createInstance(k)
                        })
                    } else {
                        l.createInstance(k)
                    }
                }
            }
        }
        for (var b in h) {
            if (h[b] != undefined) {
                h[b].isInitialized = true
            }
        }
        if (g) {
            MSApp.execUnsafeLocalFunction(function () {
                j.instance.refresh(true)
            })
        } else {
            j.instance.refresh(true)
        }
    };
    a.jqx.jqxWidget = function (b, c, f) {
        var j = false;
        try {
            jqxArgs = Array.prototype.slice.call(f, 0)
        } catch (h) {
            jqxArgs = ""
        }
        try {
            j = window.MSApp != undefined
        } catch (h) {
        }
        var g = b;
        var l = "";
        if (c) {
            l = "_" + c
        }
        a.jqx.define(a.jqx, "_" + g, l);
        var k = new Array();
        if (!window[g]) {
            var d = function (m) {
                if (m == null) {
                    return""
                }
                var e = a.type(m);
                switch (e) {
                    case"string":
                    case"number":
                    case"date":
                    case"boolean":
                    case"bool":
                        if (m === null) {
                            return""
                        }
                        return m.toString()
                }
                var n = "";
                a.each(m, function (p, q) {
                    var s = q;
                    if (p > 0) {
                        n += ", "
                    }
                    n += "[";
                    var o = 0;
                    if (a.type(s) == "object") {
                        for (var r in s) {
                            if (o > 0) {
                                n += ", "
                            }
                            n += "{" + r + ":" + s[r] + "}";
                            o++
                        }
                    } else {
                        if (o > 0) {
                            n += ", "
                        }
                        n += "{" + p + ":" + s + "}";
                        o++
                    }
                    n += "]"
                });
                return n
            };
            jqwidgets[g] = window[g] = function (e, r) {
                var m = [];
                if (!r) {
                    r = {}
                }
                m.push(r);
                var n = e;
                if (a.type(n) === "object" && e[0]) {
                    n = e[0].id;
                    if (n === "") {
                        n = e[0].id = a.jqx.utilities.createId()
                    }
                } else {
                    if (a.type(e) === "object" && e && e.nodeName) {
                        n = e.id;
                        if (n === "") {
                            n = e.id = a.jqx.utilities.createId()
                        }
                    }
                }
                if (window.jqxWidgets && window.jqxWidgets[n]) {
                    if (r) {
                        a.each(window.jqxWidgets[n], function (s) {
                            var t = a(this.element).data();
                            if (t && t.jqxWidget) {
                                a(this.element)[g](r)
                            }
                        })
                    }
                    if (window.jqxWidgets[n].length == 1) {
                        var p = a(window.jqxWidgets[n][0].widgetInstance.element).data();
                        if (p && p.jqxWidget) {
                            return window.jqxWidgets[n][0]
                        }
                    }
                    var p = a(window.jqxWidgets[n][0].widgetInstance.element).data();
                    if (p && p.jqxWidget) {
                        return window.jqxWidgets[n]
                    }
                }
                var o = a(e);
                if (o.length === 0) {
                    o = a("<div></div>");
                    if (g === "jqxInput" || g === "jqxPasswordInput" || g === "jqxMaskedInput") {
                        o = a("<input/>")
                    }
                    if (g === "jqxTextArea") {
                        o = a("<textarea></textarea>")
                    }
                    if (g === "jqxButton" || g === "jqxRepeatButton" || g === "jqxToggleButton") {
                        o = a("<button/>")
                    }
                    if (g === "jqxSplitter") {
                        o = a("<div><div>Panel 1</div><div>Panel 2</div></div>")
                    }
                    if (g === "jqxTabs") {
                        o = a("<div><ul><li>Tab 1</li><li>Tab 2</li></ul><div>Content 1</div><div>Content 2</div></div>")
                    }
                    if (g === "jqxRibbon") {
                        o = a("<div><ul><li>Tab 1</li><li>Tab 2</li></ul><div><div>Content 1</div><div>Content 2</div></div></div>")
                    }
                    if (g === "jqxDocking") {
                        o = a("<div><div><div><div>Title 1</div><div>Content 1</div></div></div></div>")
                    }
                    if (g === "jqxWindow") {
                        o = a("<div><div>Title 1</div><div>Content 1</div></div>")
                    }
                }
                var q = [];
                a.each(o, function (v) {
                    var x = o[v];
                    a.jqx.applyWidget(x, g, m, undefined);
                    if (!k[g]) {
                        var t = a.data(x, "jqxWidget");
                        var w = a.jqx["_" + g].prototype.defineInstance();
                        var u = {};
                        if (a.jqx["_" + g].prototype.metaInfo) {
                            u = a.jqx["_" + g].prototype.metaInfo()
                        }
                        if (g == "jqxDockingLayout") {
                            w = a.extend(w, a.jqx._jqxLayout.prototype.defineInstance())
                        }
                        if (g == "jqxToggleButton" || g == "jqxRepeatButton") {
                            w = a.extend(w, a.jqx._jqxButton.prototype.defineInstance())
                        }
                        if (g == "jqxTreeGrid") {
                            w = a.extend(w, a.jqx._jqxDataTable.prototype.defineInstance())
                        }
                        var s = function (z) {
                            var y = a.data(z, "jqxWidget");
                            this.widgetInstance = y;
                            var A = a.extend(this, y);
                            A.on = function (C, D) {
                                A.addHandler(A.host, C, D)
                            };
                            A.off = function (C) {
                                A.removeHandler(A.host, C)
                            };
                            for (var B in y) {
                                if (a.type(y[B]) == "function") {
                                    A[B] = a.proxy(y[B], y)
                                }
                            }
                            return A
                        };
                        k[g] = s;
                        a.each(w, function (z, y) {
                            Object.defineProperty(s.prototype, z, {get: function () {
                                    if (this.widgetInstance) {
                                        return this.widgetInstance[z]
                                    }
                                    return y
                                }, set: function (G) {
                                    if (this.widgetInstance && this.widgetInstance[z] != G) {
                                        var E = this.widgetInstance[z];
                                        var D = G;
                                        var C = a.type(E);
                                        var A = a.type(D);
                                        var F = false;
                                        if (C != A || z === "source") {
                                            F = true
                                        }
                                        if (F || (d(E) != d(D))) {
                                            var B = {};
                                            B[z] = G;
                                            this.widgetInstance.host[g](B);
                                            this.widgetInstance[z] = G;
                                            if (this.widgetInstance.propertyUpdated) {
                                                this.widgetInstance.propertyUpdated(z, E, G)
                                            }
                                        }
                                    }
                                }})
                        })
                    }
                    var t = new k[g](x);
                    q.push(t);
                    if (!window.jqxWidgets) {
                        window.jqxWidgets = new Array()
                    }
                    if (!window.jqxWidgets[n]) {
                        window.jqxWidgets[n] = new Array()
                    }
                    window.jqxWidgets[n].push(t)
                });
                if (q.length === 1) {
                    return q[0]
                }
                return q
            }
        }
        a.fn[g] = function () {
            var e = Array.prototype.slice.call(arguments, 0);
            if (e.length == 0 || (e.length == 1 && typeof (e[0]) == "object")) {
                if (this.length == 0) {
                    if (this.selector) {
                        throw new Error("Invalid Selector - " + this.selector + "! Please, check whether the used ID or CSS Class name is correct.")
                    } else {
                        throw new Error("Invalid Selector! Please, check whether the used ID or CSS Class name is correct.")
                    }
                }
                return this.each(function () {
                    var p = a(this);
                    var o = this;
                    var q = a.data(o, g);
                    if (q == null) {
                        a.jqx.applyWidget(o, g, e, undefined)
                    } else {
                        a.jqx.jqxWidgetProxy(g, this, e)
                    }
                })
            } else {
                if (this.length == 0) {
                    if (this.selector) {
                        throw new Error("Invalid Selector - " + this.selector + "! Please, check whether the used ID or CSS Class name is correct.")
                    } else {
                        throw new Error("Invalid Selector! Please, check whether the used ID or CSS Class name is correct.")
                    }
                }
                var n = null;
                var m = 0;
                this.each(function () {
                    var o = a.jqx.jqxWidgetProxy(g, this, e);
                    if (m == 0) {
                        n = o;
                        m++
                    } else {
                        if (m == 1) {
                            var p = [];
                            p.push(n);
                            n = p
                        }
                        n.push(o)
                    }
                })
            }
            return n
        };
        try {
            a.extend(a.jqx["_" + g].prototype, Array.prototype.slice.call(f, 0)[0])
        } catch (h) {
        }
        a.extend(a.jqx["_" + g].prototype, {toThemeProperty: function (e, m) {
                return a.jqx.toThemeProperty(this, e, m)
            }});
        a.jqx["_" + g].prototype.refresh = function () {
            if (this.base) {
                this.base.refresh(true)
            }
        };
        a.jqx["_" + g].prototype.createInstance = function () {};
        a.jqx["_" + g].prototype.addEventHandler = function (m, e) {
            this.host.bind(m, e)
        };
        a.jqx["_" + g].prototype.removeEventHandler = function (m, e) {
            this.host.unbind(m)
        };
        a.jqx["_" + g].prototype.applyTo = function (n, m) {
            if (!(m instanceof Array)) {
                var e = [];
                e.push(m);
                m = e
            }
            a.jqx.applyWidget(n, g, m, this)
        };
        a.jqx["_" + g].prototype.getInstance = function () {
            return this
        };
        a.jqx["_" + g].prototype.propertyChangeMap = {};
        a.jqx["_" + g].prototype.addHandler = function (o, e, m, n) {
            a.jqx.addHandler(a(o), e, m, n)
        };
        a.jqx["_" + g].prototype.removeHandler = function (n, e, m) {
            a.jqx.removeHandler(a(n), e, m)
        };
        a.jqx["_" + g].prototype.setOptions = function () {
            if (!this.host || !this.host.length || this.host.length != 1) {
                return
            }
            return a.jqx.jqxWidgetProxy(g, this.host[0], arguments)
        }
    };
    a.jqx.toThemeProperty = function (c, d, h) {
        if (c.theme == "") {
            return d
        }
        var g = d.split(" ");
        var b = "";
        for (var f = 0; f < g.length; f++) {
            if (f > 0) {
                b += " "
            }
            var e = g[f];
            if (h != null && h) {
                b += e + "-" + c.theme
            } else {
                b += e + " " + e + "-" + c.theme
            }
        }
        return b
    };
    a.jqx.addHandler = function (g, h, e, f) {
        var c = h.split(" ");
        for (var b = 0; b < c.length; b++) {
            var d = c[b];
            if (window.addEventListener) {
                switch (d) {
                    case"mousewheel":
                        if (a.jqx.browser.mozilla) {
                            g[0].addEventListener("DOMMouseScroll", e, false)
                        } else {
                            g[0].addEventListener("mousewheel", e, false)
                        }
                        continue;
                    case"mousemove":
                        if (!f) {
                            g[0].addEventListener("mousemove", e, false);
                            continue
                        }
                        break
                    }
            }
            if (f == undefined || f == null) {
                if (g.on) {
                    g.on(d, e)
                } else {
                    g.bind(d, e)
                }
            } else {
                if (g.on) {
                    g.on(d, f, e)
                } else {
                    g.bind(d, f, e)
                }
            }
        }
    };
    a.jqx.removeHandler = function (f, g, e) {
        if (!g) {
            if (f.off) {
                f.off()
            } else {
                f.unbind()
            }
            return
        }
        var c = g.split(" ");
        for (var b = 0; b < c.length; b++) {
            var d = c[b];
            if (window.removeEventListener) {
                switch (d) {
                    case"mousewheel":
                        if (a.jqx.browser.mozilla) {
                            f[0].removeEventListener("DOMMouseScroll", e, false)
                        } else {
                            f[0].removeEventListener("mousewheel", e, false)
                        }
                        continue;
                    case"mousemove":
                        if (e) {
                            f[0].removeEventListener("mousemove", e, false);
                            continue
                        }
                        break
                    }
            }
            if (d == undefined) {
                if (f.off) {
                    f.off()
                } else {
                    f.unbind()
                }
                continue
            }
            if (e == undefined) {
                if (f.off) {
                    f.off(d)
                } else {
                    f.unbind(d)
                }
            } else {
                if (f.off) {
                    f.off(d, e)
                } else {
                    f.unbind(d, e)
                }
            }
        }
    };
    a.jqx.theme = a.jqx.theme || "";
    a.jqx.scrollAnimation = a.jqx.scrollAnimation || false;
    a.jqx.resizeDelay = a.jqx.resizeDelay || 10;
    a.jqx.ready = function () {
        a(window).trigger("jqxReady")
    };
    a.jqx.init = function () {
        a.each(arguments[0], function (b, c) {
            if (b == "theme") {
                a.jqx.theme = c
            }
            if (b == "scrollBarSize") {
                a.jqx.utilities.scrollBarSize = c
            }
            if (b == "touchScrollBarSize") {
                a.jqx.utilities.touchScrollBarSize = c
            }
            if (b == "scrollBarButtonsVisibility") {
                a.jqx.utilities.scrollBarButtonsVisibility = c
            }
        })
    };
    a.jqx.utilities = a.jqx.utilities || {};
    a.extend(a.jqx.utilities, {scrollBarSize: 15, touchScrollBarSize: 0, scrollBarButtonsVisibility: "visible", createId: function () {
            var b = function () {
                return(((1 + Math.random()) * 65536) | 0).toString(16).substring(1)
            };
            return"jqxWidget" + b() + b()
        }, setTheme: function (f, g, e) {
            if (typeof e === "undefined") {
                return
            }
            var h = e[0].className.split(" "), b = [], j = [], d = e.children();
            for (var c = 0; c < h.length; c += 1) {
                if (h[c].indexOf(f) >= 0) {
                    if (f.length > 0) {
                        b.push(h[c]);
                        j.push(h[c].replace(f, g))
                    } else {
                        j.push(h[c].replace("-" + g, "") + "-" + g)
                    }
                }
            }
            this._removeOldClasses(b, e);
            this._addNewClasses(j, e);
            for (var c = 0; c < d.length; c += 1) {
                this.setTheme(f, g, a(d[c]))
            }
        }, _removeOldClasses: function (d, c) {
            for (var b = 0; b < d.length; b += 1) {
                c.removeClass(d[b])
            }
        }, _addNewClasses: function (d, c) {
            for (var b = 0; b < d.length; b += 1) {
                c.addClass(d[b])
            }
        }, getOffset: function (b) {
            var d = a.jqx.mobile.getLeftPos(b[0]);
            var c = a.jqx.mobile.getTopPos(b[0]);
            return{top: c, left: d}
        }, resize: function (g, s, p, o) {
            if (o === undefined) {
                o = true
            }
            var l = -1;
            var k = this;
            var d = function (u) {
                if (!k.hiddenWidgets) {
                    return -1
                }
                var v = -1;
                for (var t = 0; t < k.hiddenWidgets.length; t++) {
                    if (u.id) {
                        if (k.hiddenWidgets[t].id == u.id) {
                            v = t;
                            break
                        }
                    } else {
                        if (k.hiddenWidgets[t].id == u[0].id) {
                            v = t;
                            break
                        }
                    }
                }
                return v
            };
            if (this.resizeHandlers) {
                for (var h = 0; h < this.resizeHandlers.length; h++) {
                    if (g.id) {
                        if (this.resizeHandlers[h].id == g.id) {
                            l = h;
                            break
                        }
                    } else {
                        if (this.resizeHandlers[h].id == g[0].id) {
                            l = h;
                            break
                        }
                    }
                }
                if (p === true) {
                    if (l != -1) {
                        this.resizeHandlers.splice(l, 1)
                    }
                    if (this.resizeHandlers.length == 0) {
                        var n = a(window);
                        if (n.off) {
                            n.off("resize.jqx");
                            n.off("orientationchange.jqx");
                            n.off("orientationchanged.jqx")
                        } else {
                            n.unbind("resize.jqx");
                            n.unbind("orientationchange.jqx");
                            n.unbind("orientationchanged.jqx")
                        }
                        this.resizeHandlers = null
                    }
                    var b = d(g);
                    if (b != -1 && this.hiddenWidgets) {
                        this.hiddenWidgets.splice(b, 1)
                    }
                    return
                }
            } else {
                if (p === true) {
                    var b = d(g);
                    if (b != -1 && this.hiddenWidgets) {
                        this.hiddenWidgets.splice(b, 1)
                    }
                    return
                }
            }
            var k = this;
            var m = function (v, E) {
                if (!k.resizeHandlers) {
                    return
                }
                var F = function (J) {
                    var I = -1;
                    var K = J.parentNode;
                    while (K) {
                        I++;
                        K = K.parentNode
                    }
                    return I
                };
                var u = function (L, J) {
                    if (!L.widget || !J.widget) {
                        return 0
                    }
                    var K = F(L.widget[0]);
                    var I = F(J.widget[0]);
                    try {
                        if (K < I) {
                            return -1
                        }
                        if (K > I) {
                            return 1
                        }
                    } catch (M) {
                        var N = M
                    }
                    return 0
                };
                var w = function (J) {
                    if (k.hiddenWidgets.length > 0) {
                        k.hiddenWidgets.sort(u);
                        var I = function () {
                            var L = false;
                            var N = new Array();
                            for (var M = 0; M < k.hiddenWidgets.length; M++) {
                                var K = k.hiddenWidgets[M];
                                if (a.jqx.isHidden(K.widget)) {
                                    L = true;
                                    N.push(K)
                                } else {
                                    if (K.callback) {
                                        K.callback(E)
                                    }
                                }
                            }
                            k.hiddenWidgets = N;
                            if (!L) {
                                clearInterval(k.__resizeInterval)
                            }
                        };
                        if (J == false) {
                            I();
                            if (k.__resizeInterval) {
                                clearInterval(k.__resizeInterval)
                            }
                            return
                        }
                        if (k.__resizeInterval) {
                            clearInterval(k.__resizeInterval)
                        }
                        k.__resizeInterval = setInterval(function () {
                            I()
                        }, 100)
                    }
                };
                if (k.hiddenWidgets && k.hiddenWidgets.length > 0) {
                    w(false)
                }
                k.hiddenWidgets = new Array();
                k.resizeHandlers.sort(u);
                for (var B = 0; B < k.resizeHandlers.length; B++) {
                    var H = k.resizeHandlers[B];
                    var D = H.widget;
                    var A = H.data;
                    if (!A) {
                        continue
                    }
                    if (!A.jqxWidget) {
                        continue
                    }
                    var t = A.jqxWidget.width;
                    var G = A.jqxWidget.height;
                    if (A.jqxWidget.base) {
                        if (t == undefined) {
                            t = A.jqxWidget.base.width
                        }
                        if (G == undefined) {
                            G = A.jqxWidget.base.height
                        }
                    }
                    if (t === undefined && G === undefined) {
                        t = A.jqxWidget.element.style.width;
                        G = A.jqxWidget.element.style.height
                    }
                    var C = false;
                    if (t != null && t.toString().indexOf("%") != -1) {
                        C = true
                    }
                    if (G != null && G.toString().indexOf("%") != -1) {
                        C = true
                    }
                    if (a.jqx.isHidden(D)) {
                        if (d(D) === -1) {
                            if (C || v === true) {
                                if (H.data.nestedWidget !== true) {
                                    k.hiddenWidgets.push(H)
                                }
                            }
                        }
                    } else {
                        if (v === undefined || v !== true) {
                            if (C) {
                                H.callback(E);
                                if (k.watchedElementData) {
                                    for (var y = 0; y < k.watchedElementData.length; y++) {
                                        if (k.watchedElementData[y].element == A.jqxWidget.element) {
                                            k.watchedElementData[y].offsetWidth = A.jqxWidget.element.offsetWidth;
                                            k.watchedElementData[y].offsetHeight = A.jqxWidget.element.offsetHeight;
                                            break
                                        }
                                    }
                                }
                                if (k.hiddenWidgets.indexOf(H) >= 0) {
                                    k.hiddenWidgets.splice(k.hiddenWidgets.indexOf(H), 1)
                                }
                            }
                            if (A.jqxWidget.element) {
                                var x = A.jqxWidget.element.className;
                                if (x.indexOf("dropdownlist") >= 0 || x.indexOf("datetimeinput") >= 0 || x.indexOf("combobox") >= 0 || x.indexOf("menu") >= 0) {
                                    if (A.jqxWidget.isOpened) {
                                        var z = A.jqxWidget.isOpened();
                                        if (z) {
                                            if (E && E == "resize" && a.jqx.mobile.isTouchDevice()) {
                                                continue
                                            }
                                            A.jqxWidget.close()
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                w()
            };
            if (!this.resizeHandlers) {
                this.resizeHandlers = new Array();
                var n = a(window);
                if (n.on) {
                    this._resizeTimer = null;
                    this._initResize = null;
                    n.on("resize.jqx", function (t) {
                        if (k._resizeTimer != undefined) {
                            clearTimeout(k._resizeTimer)
                        }
                        if (!k._initResize) {
                            k._initResize = true;
                            m(null, "resize")
                        } else {
                            k._resizeTimer = setTimeout(function () {
                                m(null, "resize")
                            }, a.jqx.resizeDelay)
                        }
                    });
                    n.on("orientationchange.jqx", function (t) {
                        m(null, "orientationchange")
                    });
                    n.on("orientationchanged.jqx", function (t) {
                        m(null, "orientationchange")
                    })
                } else {
                    n.bind("resize.jqx", function (t) {
                        m(null, "orientationchange")
                    });
                    n.bind("orientationchange.jqx", function (t) {
                        m(null, "orientationchange")
                    });
                    n.bind("orientationchanged.jqx", function (t) {
                        m(null, "orientationchange")
                    })
                }
            }
            var e = g.data();
            if (o) {
                if (l === -1) {
                    this.resizeHandlers.push({id: g[0].id, widget: g, callback: s, data: e})
                }
            }
            try {
                var c = e.jqxWidget.width;
                var r = e.jqxWidget.height;
                if (e.jqxWidget.base) {
                    if (c == undefined) {
                        c = e.jqxWidget.base.width
                    }
                    if (r == undefined) {
                        r = e.jqxWidget.base.height
                    }
                }
                if (c === undefined && r === undefined) {
                    c = e.jqxWidget.element.style.width;
                    r = e.jqxWidget.element.style.height
                }
                var j = false;
                if (c != null && c.toString().indexOf("%") != -1) {
                    j = true
                }
                if (r != null && r.toString().indexOf("%") != -1) {
                    j = true
                }
                if (j) {
                    if (!this.watchedElementData) {
                        this.watchedElementData = []
                    }
                    var k = this;
                    var f = function (t) {
                        if (k.watchedElementData.forEach) {
                            k.watchedElementData.forEach(function (u) {
                                if (u.element.offsetWidth !== u.offsetWidth || u.element.offsetHeight !== u.offsetHeight) {
                                    u.offsetWidth = u.element.offsetWidth;
                                    u.offsetHeight = u.element.offsetHeight;
                                    if (u.timer) {
                                        clearTimeout(u.timer)
                                    }
                                    u.timer = setTimeout(function () {
                                        if (!a.jqx.isHidden(a(u.element))) {
                                            u.callback()
                                        } else {
                                            u.timer = setInterval(function () {
                                                if (!a.jqx.isHidden(a(u.element))) {
                                                    clearInterval(u.timer);
                                                    u.callback()
                                                }
                                            }, 100)
                                        }
                                    })
                                }
                            })
                        }
                    };
                    k.watchedElementData.push({element: g[0], offsetWidth: g[0].offsetWidth, offsetHeight: g[0].offsetHeight, callback: s});
                    if (!k.observer) {
                        k.observer = new MutationObserver(f);
                        k.observer.observe(document.body, {attributes: true, childList: true, characterData: true})
                    }
                }
            } catch (q) {
            }
            if (a.jqx.isHidden(g) && o === true) {
                m(true)
            }
            a.jqx.resize = function () {
                m(null, "resize")
            }
        }, parseJSON: function (d) {
            if (!d || typeof d !== "string") {
                return null
            }
            var b = /^[\],:{}\s]*$/, f = /(?:^|:|,)(?:\s*\[)+/g, c = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, e = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g;
            d = a.trim(d);
            if (window.JSON && window.JSON.parse) {
                return window.JSON.parse(d)
            }
            if (b.test(d.replace(c, "@").replace(e, "]").replace(f, ""))) {
                return(new Function("return " + d))()
            }
            throw new Error("Invalid JSON: " + d)
        }, html: function (c, d) {
            if (!a(c).on) {
                return a(c).html(d)
            }
            try {
                return a.access(c, function (s) {
                    var f = c[0] || {}, m = 0, j = c.length;
                    if (s === undefined) {
                        return f.nodeType === 1 ? f.innerHTML.replace(rinlinejQuery, "") : undefined
                    }
                    var r = /<(?:script|style|link)/i, n = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", h = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, p = /<([\w:]+)/, g = /<(?:script|object|embed|option|style)/i, k = new RegExp("<(?:" + n + ")[\\s/>]", "i"), q = /^\s+/, t = {option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], area: [1, "<map>", "</map>"], _default: [0, "", ""]};
                    if (typeof s === "string" && !r.test(s) && (a.support.htmlSerialize || !k.test(s)) && (a.support.leadingWhitespace || !q.test(s)) && !t[(p.exec(s) || ["", ""])[1].toLowerCase()]) {
                        s = s.replace(h, "<$1></$2>");
                        try {
                            for (; m < j; m++) {
                                f = this[m] || {};
                                if (f.nodeType === 1) {
                                    a.cleanData(f.getElementsByTagName("*"));
                                    f.innerHTML = s
                                }
                            }
                            f = 0
                        } catch (o) {
                        }
                    }
                    if (f) {
                        c.empty().append(s)
                    }
                }, null, d, arguments.length)
            } catch (b) {
                return a(c).html(d)
            }
        }, hasTransform: function (d) {
            var c = "";
            c = d.css("transform");
            if (c == "" || c == "none") {
                c = d.parents().css("transform");
                if (c == "" || c == "none") {
                    var b = a.jqx.utilities.getBrowser();
                    if (b.browser == "msie") {
                        c = d.css("-ms-transform");
                        if (c == "" || c == "none") {
                            c = d.parents().css("-ms-transform")
                        }
                    } else {
                        if (b.browser == "chrome") {
                            c = d.css("-webkit-transform");
                            if (c == "" || c == "none") {
                                c = d.parents().css("-webkit-transform")
                            }
                        } else {
                            if (b.browser == "opera") {
                                c = d.css("-o-transform");
                                if (c == "" || c == "none") {
                                    c = d.parents().css("-o-transform")
                                }
                            } else {
                                if (b.browser == "mozilla") {
                                    c = d.css("-moz-transform");
                                    if (c == "" || c == "none") {
                                        c = d.parents().css("-moz-transform")
                                    }
                                }
                            }
                        }
                    }
                } else {
                    return c != "" && c != "none"
                }
            }
            if (c == "" || c == "none") {
                c = a(document.body).css("transform")
            }
            return c != "" && c != "none" && c != null
        }, getBrowser: function () {
            var c = navigator.userAgent.toLowerCase();
            var b = /(chrome)[ \/]([\w.]+)/.exec(c) || /(webkit)[ \/]([\w.]+)/.exec(c) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(c) || /(msie) ([\w.]+)/.exec(c) || c.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(c) || [];
            var d = {browser: b[1] || "", version: b[2] || "0"};
            if (c.indexOf("rv:11.0") >= 0 && c.indexOf(".net4.0c") >= 0) {
                d.browser = "msie";
                d.version = "11";
                b[1] = "msie"
            }
            if (c.indexOf("edge") >= 0) {
                d.browser = "msie";
                d.version = "12";
                b[1] = "msie"
            }
            d[b[1]] = b[1];
            return d
        }});
    a.jqx.browser = a.jqx.utilities.getBrowser();
    a.jqx.isHidden = function (c) {
        if (!c || !c[0]) {
            return false
        }
        var b = c[0].offsetWidth, d = c[0].offsetHeight;
        if (b === 0 || d === 0) {
            return true
        } else {
            return false
        }
    };
    a.jqx.ariaEnabled = true;
    a.jqx.aria = function (c, e, d) {
        if (!a.jqx.ariaEnabled) {
            return
        }
        if (e == undefined) {
            a.each(c.aria, function (g, h) {
                var k = !c.base ? c.host.attr(g) : c.base.host.attr(g);
                if (k != undefined && !a.isFunction(k)) {
                    var j = k;
                    switch (h.type) {
                        case"number":
                            j = new Number(k);
                            if (isNaN(j)) {
                                j = k
                            }
                            break;
                        case"boolean":
                            j = k == "true" ? true : false;
                            break;
                        case"date":
                            j = new Date(k);
                            if (j == "Invalid Date" || isNaN(j)) {
                                j = k
                            }
                            break
                    }
                    c[h.name] = j
                } else {
                    var k = c[h.name];
                    if (a.isFunction(k)) {
                        k = c[h.name]()
                    }
                    if (k == undefined) {
                        k = ""
                    }
                    try {
                        !c.base ? c.host.attr(g, k.toString()) : c.base.host.attr(g, k.toString())
                    } catch (f) {
                    }
                }
            })
        } else {
            try {
                if (c.host) {
                    if (!c.base) {
                        if (c.host) {
                            if (c.element.setAttribute) {
                                c.element.setAttribute(e, d.toString())
                            } else {
                                c.host.attr(e, d.toString())
                            }
                        } else {
                            c.attr(e, d.toString())
                        }
                    } else {
                        if (c.base.host) {
                            c.base.host.attr(e, d.toString())
                        } else {
                            c.attr(e, d.toString())
                        }
                    }
                } else {
                    if (c.setAttribute) {
                        c.setAttribute(e, d.toString())
                    }
                }
            } catch (b) {
            }
        }
    };
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (c) {
            var b = this.length;
            var d = Number(arguments[1]) || 0;
            d = (d < 0) ? Math.ceil(d) : Math.floor(d);
            if (d < 0) {
                d += b
            }
            for (; d < b; d++) {
                if (d in this && this[d] === c) {
                    return d
                }
            }
            return -1
        }
    }
    a.jqx.mobile = a.jqx.mobile || {};
    a.jqx.position = function (b) {
        var e = parseInt(b.pageX);
        var d = parseInt(b.pageY);
        if (a.jqx.mobile.isTouchDevice()) {
            var c = a.jqx.mobile.getTouches(b);
            var f = c[0];
            e = parseInt(f.pageX);
            d = parseInt(f.pageY)
        }
        return{left: e, top: d}
    };
    a.extend(a.jqx.mobile, {_touchListener: function (h, f) {
            var b = function (j, l) {
                var k = document.createEvent("MouseEvents");
                k.initMouseEvent(j, l.bubbles, l.cancelable, l.view, l.detail, l.screenX, l.screenY, l.clientX, l.clientY, l.ctrlKey, l.altKey, l.shiftKey, l.metaKey, l.button, l.relatedTarget);
                k._pageX = l.pageX;
                k._pageY = l.pageY;
                return k
            };
            var g = {mousedown: "touchstart", mouseup: "touchend", mousemove: "touchmove"};
            var d = b(g[h.type], h);
            h.target.dispatchEvent(d);
            var c = h.target["on" + g[h.type]];
            if (typeof c === "function") {
                c(h)
            }
        }, setMobileSimulator: function (c, e) {
            if (this.isTouchDevice()) {
                return
            }
            this.simulatetouches = true;
            if (e == false) {
                this.simulatetouches = false
            }
            var d = {mousedown: "touchstart", mouseup: "touchend", mousemove: "touchmove"};
            var b = this;
            if (window.addEventListener) {
                var f = function () {
                    for (var g in d) {
                        if (c.addEventListener) {
                            c.removeEventListener(g, b._touchListener);
                            c.addEventListener(g, b._touchListener, false)
                        }
                    }
                };
                if (a.jqx.browser.msie) {
                    f()
                } else {
                    f()
                }
            }
        }, isTouchDevice: function () {
            if (this.touchDevice != undefined) {
                return this.touchDevice
            }
            var c = "Browser CodeName: " + navigator.appCodeName + "";
            c += "Browser Name: " + navigator.appName + "";
            c += "Browser Version: " + navigator.appVersion + "";
            c += "Platform: " + navigator.platform + "";
            c += "User-agent header: " + navigator.userAgent + "";
            if (c.indexOf("Android") != -1) {
                return true
            }
            if (c.indexOf("IEMobile") != -1) {
                return true
            }
            if (c.indexOf("Windows Phone") != -1) {
                return true
            }
            if (c.indexOf("WPDesktop") != -1) {
                return true
            }
            if (c.indexOf("ZuneWP7") != -1) {
                return true
            }
            if (c.indexOf("BlackBerry") != -1 && c.indexOf("Mobile Safari") != -1) {
                return true
            }
            if (c.indexOf("ipod") != -1) {
                return true
            }
            if (c.indexOf("nokia") != -1 || c.indexOf("Nokia") != -1) {
                return true
            }
            if (c.indexOf("Chrome/17") != -1) {
                return false
            }
            if (c.indexOf("CrOS") != -1) {
                return false
            }
            if (c.indexOf("Opera") != -1 && c.indexOf("Mobi") == -1 && c.indexOf("Mini") == -1 && c.indexOf("Platform: Win") != -1) {
                return false
            }
            if (c.indexOf("Opera") != -1 && c.indexOf("Mobi") != -1 && c.indexOf("Opera Mobi") != -1) {
                return true
            }
            var d = {ios: "i(?:Pad|Phone|Pod)(?:.*)CPU(?: iPhone)? OS ", android: "(Android |HTC_|Silk/)", blackberry: "BlackBerry(?:.*)Version/", rimTablet: "RIM Tablet OS ", webos: "(?:webOS|hpwOS)/", bada: "Bada/"};
            try {
                if (this.touchDevice != undefined) {
                    return this.touchDevice
                }
                this.touchDevice = false;
                for (i in d) {
                    if (d.hasOwnProperty(i)) {
                        prefix = d[i];
                        match = c.match(new RegExp("(?:" + prefix + ")([^\\s;]+)"));
                        if (match) {
                            if (i.toString() == "blackberry") {
                                this.touchDevice = false;
                                return false
                            }
                            this.touchDevice = true;
                            return true
                        }
                    }
                }
                var f = navigator.userAgent;
                if (navigator.platform.toLowerCase().indexOf("win") != -1) {
                    if (f.indexOf("Windows Phone") >= 0 || f.indexOf("WPDesktop") >= 0 || f.indexOf("IEMobile") >= 0 || f.indexOf("ZuneWP7") >= 0) {
                        this.touchDevice = true;
                        return true
                    } else {
                        if (f.indexOf("Touch") >= 0) {
                            var b = ("MSPointerDown" in window) || ("pointerdown" in window);
                            if (b) {
                                this.touchDevice = true;
                                return true
                            }
                            if (f.indexOf("ARM") >= 0) {
                                this.touchDevice = true;
                                return true
                            }
                            this.touchDevice = false;
                            return false
                        }
                    }
                }
                if (navigator.platform.toLowerCase().indexOf("win") != -1) {
                    this.touchDevice = false;
                    return false
                }
                if (("ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch) {
                    this.touchDevice = true
                }
                return this.touchDevice
            } catch (g) {
                this.touchDevice = false;
                return false
            }
        }, getLeftPos: function (b) {
            var c = b.offsetLeft;
            while ((b = b.offsetParent) != null) {
                if (b.tagName != "HTML") {
                    c += b.offsetLeft;
                    if (document.all) {
                        c += b.clientLeft
                    }
                }
            }
            return c
        }, getTopPos: function (c) {
            var e = c.offsetTop;
            var b = a(c).coord();
            while ((c = c.offsetParent) != null) {
                if (c.tagName != "HTML") {
                    e += (c.offsetTop - c.scrollTop);
                    if (document.all) {
                        e += c.clientTop
                    }
                }
            }
            var d = navigator.userAgent.toLowerCase();
            var f = (d.indexOf("windows phone") != -1 || d.indexOf("WPDesktop") != -1 || d.indexOf("ZuneWP7") != -1 || d.indexOf("msie 9") != -1 || d.indexOf("msie 11") != -1 || d.indexOf("msie 10") != -1) && d.indexOf("touch") != -1;
            if (f) {
                return b.top
            }
            if (this.isSafariMobileBrowser()) {
                if (this.isSafari4MobileBrowser() && this.isIPadSafariMobileBrowser()) {
                    return e
                }
                if (d.indexOf("version/7") != -1) {
                    return b.top
                }
                if (d.indexOf("version/6") != -1 || d.indexOf("version/5") != -1) {
                    e = e + a(window).scrollTop()
                }
                if (/(Android.*Chrome\/[.0-9]* (!?Mobile))/.exec(navigator.userAgent)) {
                    return e + a(window).scrollTop()
                }
                if (/(Android.*Chrome\/[.0-9]* Mobile)/.exec(navigator.userAgent)) {
                    return e + a(window).scrollTop()
                }
                return b.top
            }
            return e
        }, isChromeMobileBrowser: function () {
            var c = navigator.userAgent.toLowerCase();
            var b = c.indexOf("android") != -1;
            return b
        }, isOperaMiniMobileBrowser: function () {
            var c = navigator.userAgent.toLowerCase();
            var b = c.indexOf("opera mini") != -1 || c.indexOf("opera mobi") != -1;
            return b
        }, isOperaMiniBrowser: function () {
            var c = navigator.userAgent.toLowerCase();
            var b = c.indexOf("opera mini") != -1;
            return b
        }, isNewSafariMobileBrowser: function () {
            var c = navigator.userAgent.toLowerCase();
            var b = c.indexOf("ipad") != -1 || c.indexOf("iphone") != -1 || c.indexOf("ipod") != -1;
            b = b && (c.indexOf("version/5") != -1);
            return b
        }, isSafari4MobileBrowser: function () {
            var c = navigator.userAgent.toLowerCase();
            var b = c.indexOf("ipad") != -1 || c.indexOf("iphone") != -1 || c.indexOf("ipod") != -1;
            b = b && (c.indexOf("version/4") != -1);
            return b
        }, isWindowsPhone: function () {
            var c = navigator.userAgent.toLowerCase();
            var b = (c.indexOf("windows phone") != -1 || c.indexOf("WPDesktop") != -1 || c.indexOf("ZuneWP7") != -1 || c.indexOf("msie 9") != -1 || c.indexOf("msie 11") != -1 || c.indexOf("msie 10") != -1 && c.indexOf("touch") != -1);
            return b
        }, isSafariMobileBrowser: function () {
            var c = navigator.userAgent.toLowerCase();
            if (/(Android.*Chrome\/[.0-9]* (!?Mobile))/.exec(navigator.userAgent)) {
                return true
            }
            if (/(Android.*Chrome\/[.0-9]* Mobile)/.exec(navigator.userAgent)) {
                return true
            }
            var b = c.indexOf("ipad") != -1 || c.indexOf("iphone") != -1 || c.indexOf("ipod") != -1 || c.indexOf("mobile safari") != -1;
            return b
        }, isIPadSafariMobileBrowser: function () {
            var c = navigator.userAgent.toLowerCase();
            var b = c.indexOf("ipad") != -1;
            return b
        }, isMobileBrowser: function () {
            var c = navigator.userAgent.toLowerCase();
            var b = c.indexOf("ipad") != -1 || c.indexOf("iphone") != -1 || c.indexOf("android") != -1;
            return b
        }, getTouches: function (b) {
            if (b.originalEvent) {
                if (b.originalEvent.touches && b.originalEvent.touches.length) {
                    return b.originalEvent.touches
                } else {
                    if (b.originalEvent.changedTouches && b.originalEvent.changedTouches.length) {
                        return b.originalEvent.changedTouches
                    }
                }
            }
            if (!b.touches) {
                b.touches = new Array();
                b.touches[0] = b.originalEvent != undefined ? b.originalEvent : b;
                if (b.originalEvent != undefined && b.pageX) {
                    b.touches[0] = b
                }
                if (b.type == "mousemove") {
                    b.touches[0] = b
                }
            }
            return b.touches
        }, getTouchEventName: function (b) {
            if (this.isWindowsPhone()) {
                var c = navigator.userAgent.toLowerCase();
                if (c.indexOf("windows phone 7") != -1) {
                    if (b.toLowerCase().indexOf("start") != -1) {
                        return"MSPointerDown"
                    }
                    if (b.toLowerCase().indexOf("move") != -1) {
                        return"MSPointerMove"
                    }
                    if (b.toLowerCase().indexOf("end") != -1) {
                        return"MSPointerUp"
                    }
                }
                if (b.toLowerCase().indexOf("start") != -1) {
                    return"pointerdown"
                }
                if (b.toLowerCase().indexOf("move") != -1) {
                    return"pointermove"
                }
                if (b.toLowerCase().indexOf("end") != -1) {
                    return"pointerup"
                }
            } else {
                return b
            }
        }, dispatchMouseEvent: function (b, f, d) {
            if (this.simulatetouches) {
                return
            }
            var c = document.createEvent("MouseEvent");
            c.initMouseEvent(b, true, true, f.view, 1, f.screenX, f.screenY, f.clientX, f.clientY, false, false, false, false, 0, null);
            if (d != null) {
                d.dispatchEvent(c)
            }
        }, getRootNode: function (b) {
            while (b.nodeType !== 1) {
                b = b.parentNode
            }
            return b
        }, setTouchScroll: function (b, c) {
            if (!this.enableScrolling) {
                this.enableScrolling = []
            }
            this.enableScrolling[c] = b
        }, touchScroll: function (A, L, V, G, w, m) {
            if (A == null) {
                return
            }
            var F = this;
            var e = 0;
            var q = 0;
            var f = 0;
            var g = 0;
            var s = 0;
            var h = 0;
            if (!this.scrolling) {
                this.scrolling = []
            }
            this.scrolling[G] = false;
            var j = false;
            var o = a(A);
            var P = ["select", "input", "textarea"];
            var T = 0;
            var I = 0;
            if (!this.enableScrolling) {
                this.enableScrolling = []
            }
            this.enableScrolling[G] = true;
            var G = G;
            var t = this.getTouchEventName("touchstart") + ".touchScroll";
            var C = this.getTouchEventName("touchend") + ".touchScroll";
            var X = this.getTouchEventName("touchmove") + ".touchScroll";
            var k, S, y, U, ad, O, W, c, E, Z, ab, d, v, u, Q, b, D, ac, n;
            O = L;
            ad = 0;
            W = 0;
            xoffset = 0;
            initialOffset = 0;
            initialXOffset = 0;
            U = w.jqxScrollBar("max");
            n = 325;
            function z(ag) {
                if (ag.targetTouches && (ag.targetTouches.length >= 1)) {
                    return ag.targetTouches[0].clientY
                } else {
                    if (ag.originalEvent && ag.originalEvent.clientY !== undefined) {
                        return ag.originalEvent.clientY
                    } else {
                        var af = F.getTouches(ag);
                        return af[0].clientY
                    }
                }
                return ag.clientY
            }
            function aa(ag) {
                if (ag.targetTouches && (ag.targetTouches.length >= 1)) {
                    return ag.targetTouches[0].clientX
                } else {
                    if (ag.originalEvent && ag.originalEvent.clientX !== undefined) {
                        return ag.originalEvent.clientX
                    } else {
                        var af = F.getTouches(ag);
                        return af[0].clientX
                    }
                }
                return ag.clientX
            }
            var H = function () {
                var ah, af, ai, ag;
                ah = Date.now();
                af = ah - v;
                v = ah;
                ai = W - d;
                xdelta = xoffset - xframe;
                d = W;
                xframe = xoffset;
                E = true;
                ag = 1000 * ai / (1 + af);
                xv = 1000 * xdelta / (1 + af);
                ab = 0.8 * ag + 0.2 * ab;
                xjqxAnimations = 0.8 * xv + 0.2 * xjqxAnimations
            };
            var B = false;
            var T = function (ag) {
                if (!F.enableScrolling[G]) {
                    return true
                }
                if (a.inArray(ag.target.tagName.toLowerCase(), P) !== -1) {
                    return
                }
                W = m.jqxScrollBar("value");
                xoffset = w.jqxScrollBar("value");
                var ah = F.getTouches(ag);
                var ai = ah[0];
                if (ah.length == 1) {
                    F.dispatchMouseEvent("mousedown", ai, F.getRootNode(ai.target))
                }
                U = w.jqxScrollBar("max");
                O = m.jqxScrollBar("max");
                function af(aj) {
                    B = false;
                    E = true;
                    c = z(aj);
                    ac = aa(aj);
                    ab = Q = xjqxAnimations = 0;
                    d = W;
                    xframe = xoffset;
                    v = Date.now();
                    clearInterval(u);
                    u = setInterval(H, 100);
                    initialOffset = W;
                    initialXOffset = xoffset;
                    if (W > 0 && W < O && m[0].style.visibility != "hidden") {
                    }
                }
                af(ag);
                j = false;
                q = ai.pageY;
                s = ai.pageX;
                if (F.simulatetouches) {
                    if (ai._pageY != undefined) {
                        q = ai._pageY;
                        s = ai._pageX
                    }
                }
                F.scrolling[G] = true;
                e = 0;
                g = 0;
                return true
            };
            if (o.on) {
                o.on(t, T)
            } else {
                o.bind(t, T)
            }
            var Y = function (ag, af) {
                W = (ag > O) ? O : (ag < ad) ? ad : ag;
                V(null, ag, 0, 0, af);
                return(ag > O) ? "max" : (ag < ad) ? "min" : "value"
            };
            var l = function (ag, af) {
                xoffset = (ag > U) ? U : (ag < ad) ? ad : ag;
                V(ag, null, 0, 0, af);
                return(ag > U) ? "max" : (ag < ad) ? "min" : "value"
            };
            function R() {
                var af, ag;
                if (Q) {
                    af = Date.now() - v;
                    ag = -Q * Math.exp(-af / n);
                    if (ag > 0.5 || ag < -0.5) {
                        Y(b + ag, event);
                        requestAnimationFrame(R)
                    } else {
                        Y(b);
                        m.fadeOut("fast")
                    }
                }
            }
            function M() {
                var af, ag;
                if (Q) {
                    af = Date.now() - v;
                    ag = -Q * Math.exp(-af / n);
                    if (ag > 0.5 || ag < -0.5) {
                        l(D + ag);
                        requestAnimationFrame(M)
                    } else {
                        l(D);
                        w.fadeOut("fast")
                    }
                }
            }
            var x = function (af) {
                if (!F.enableScrolling[G]) {
                    return true
                }
                if (!F.scrolling[G]) {
                    return true
                }
                if (B) {
                    af.preventDefault();
                    af.stopPropagation()
                }
                var ak = F.getTouches(af);
                if (ak.length > 1) {
                    return true
                }
                var ag = ak[0].pageY;
                var ai = ak[0].pageX;
                if (F.simulatetouches) {
                    if (ak[0]._pageY != undefined) {
                        ag = ak[0]._pageY;
                        ai = ak[0]._pageX
                    }
                }
                var am = ag - q;
                var an = ai - s;
                I = ag;
                touchHorizontalEnd = ai;
                f = am - e;
                h = an - g;
                j = true;
                e = am;
                g = an;
                var ah = w != null ? w[0].style.visibility != "hidden" : true;
                var al = m != null ? m[0].style.visibility != "hidden" : true;
                function aj(aq) {
                    var at, ar, ap;
                    if (E) {
                        at = z(aq);
                        ap = aa(aq);
                        ar = c - at;
                        xdelta = ac - ap;
                        var ao = "value";
                        if (ar > 2 || ar < -2) {
                            c = at;
                            ao = Y(W + ar, aq);
                            H();
                            if (ao == "min" && initialOffset === 0) {
                                return true
                            }
                            if (ao == "max" && initialOffset === O) {
                                return true
                            }
                            if (!al) {
                                return true
                            }
                            aq.preventDefault();
                            aq.stopPropagation();
                            B = true;
                            return false
                        } else {
                            if (xdelta > 2 || xdelta < -2) {
                                ac = ap;
                                ao = l(xoffset + xdelta, aq);
                                H();
                                if (ao == "min" && initialXOffset === 0) {
                                    return true
                                }
                                if (ao == "max" && initialXOffset === U) {
                                    return true
                                }
                                if (!ah) {
                                    return true
                                }
                                B = true;
                                aq.preventDefault();
                                aq.stopPropagation();
                                return false
                            }
                        }
                        aq.preventDefault()
                    }
                }
                if (ah || al) {
                    if ((ah) || (al)) {
                        aj(af)
                    }
                }
            };
            if (o.on) {
                o.on(X, x)
            } else {
                o.bind(X, x)
            }
            var r = function (ag) {
                if (!F.enableScrolling[G]) {
                    return true
                }
                var ah = F.getTouches(ag)[0];
                if (!F.scrolling[G]) {
                    return true
                }
                E = false;
                clearInterval(u);
                if (ab > 10 || ab < -10) {
                    Q = 0.8 * ab;
                    b = Math.round(W + Q);
                    v = Date.now();
                    requestAnimationFrame(R);
                    m.fadeIn(100)
                } else {
                    if (xjqxAnimations > 10 || xjqxAnimations < -10) {
                        Q = 0.8 * xjqxAnimations;
                        D = Math.round(xoffset + Q);
                        v = Date.now();
                        requestAnimationFrame(M);
                        w.fadeIn(100)
                    } else {
                        w.fadeOut(100);
                        m.fadeOut(100)
                    }
                }
                F.scrolling[G] = false;
                if (j) {
                    F.dispatchMouseEvent("mouseup", ah, ag.target)
                } else {
                    var ah = F.getTouches(ag)[0], af = F.getRootNode(ah.target);
                    F.dispatchMouseEvent("mouseup", ah, af);
                    F.dispatchMouseEvent("click", ah, af);
                    return true
                }
            };
            if (this.simulatetouches) {
                var p = a(window).on != undefined || a(window).bind;
                var N = function (af) {
                    try {
                        r(af)
                    } catch (ag) {
                    }
                    F.scrolling[G] = false
                };
                a(window).on != undefined ? a(document).on("mouseup.touchScroll", N) : a(document).bind("mouseup.touchScroll", N);
                if (window.frameElement) {
                    if (window.top != null) {
                        var K = function (af) {
                            try {
                                r(af)
                            } catch (ag) {
                            }
                            F.scrolling[G] = false
                        };
                        if (window.top.document) {
                            a(window.top.document).on ? a(window.top.document).on("mouseup", K) : a(window.top.document).bind("mouseup", K)
                        }
                    }
                }
                var ae = a(document).on != undefined || a(document).bind;
                var J = function (af) {
                    if (!F.scrolling[G]) {
                        return true
                    }
                    F.scrolling[G] = false;
                    var ah = F.getTouches(af)[0], ag = F.getRootNode(ah.target);
                    F.dispatchMouseEvent("mouseup", ah, ag);
                    F.dispatchMouseEvent("click", ah, ag)
                };
                a(document).on != undefined ? a(document).on("touchend", J) : a(document).bind("touchend", J)
            }
            if (o.on) {
                o.on("dragstart", function (af) {
                    af.preventDefault()
                });
                o.on("selectstart", function (af) {
                    af.preventDefault()
                })
            }
            o.on ? o.on(C + " touchcancel.touchScroll", r) : o.bind(C + " touchcancel.touchScroll", r)
        }});
    a.jqx.cookie = a.jqx.cookie || {};
    a.extend(a.jqx.cookie, {cookie: function (e, f, c) {
            if (arguments.length > 1 && String(f) !== "[object Object]") {
                c = a.extend({}, c);
                if (f === null || f === undefined) {
                    c.expires = -1
                }
                if (typeof c.expires === "number") {
                    var h = c.expires, d = c.expires = new Date();
                    d.setDate(d.getDate() + h)
                }
                f = String(f);
                return(document.cookie = [encodeURIComponent(e), "=", c.raw ? f : encodeURIComponent(f), c.expires ? "; expires=" + c.expires.toUTCString() : "", c.path ? "; path=" + c.path : "", c.domain ? "; domain=" + c.domain : "", c.secure ? "; secure" : ""].join(""))
            }
            c = f || {};
            var b, g = c.raw ? function (j) {
                return j
            } : decodeURIComponent;
            return(b = new RegExp("(?:^|; )" + encodeURIComponent(e) + "=([^;]*)").exec(document.cookie)) ? g(b[1]) : null
        }});
    a.jqx.string = a.jqx.string || {};
    a.extend(a.jqx.string, {replace: function (f, d, e) {
            if (d === e) {
                return this
            }
            var b = f;
            var c = b.indexOf(d);
            while (c != -1) {
                b = b.replace(d, e);
                c = b.indexOf(d)
            }
            return b
        }, contains: function (b, c) {
            if (b == null || c == null) {
                return false
            }
            return b.indexOf(c) != -1
        }, containsIgnoreCase: function (b, c) {
            if (b == null || c == null) {
                return false
            }
            return b.toString().toUpperCase().indexOf(c.toString().toUpperCase()) != -1
        }, equals: function (b, c) {
            if (b == null || c == null) {
                return false
            }
            b = this.normalize(b);
            if (c.length == b.length) {
                return b.slice(0, c.length) == c
            }
            return false
        }, equalsIgnoreCase: function (b, c) {
            if (b == null || c == null) {
                return false
            }
            b = this.normalize(b);
            if (c.length == b.length) {
                return b.toUpperCase().slice(0, c.length) == c.toUpperCase()
            }
            return false
        }, startsWith: function (b, c) {
            if (b == null || c == null) {
                return false
            }
            return b.slice(0, c.length) == c
        }, startsWithIgnoreCase: function (b, c) {
            if (b == null || c == null) {
                return false
            }
            return b.toUpperCase().slice(0, c.length) == c.toUpperCase()
        }, normalize: function (b) {
            if (b.charCodeAt(b.length - 1) == 65279) {
                b = b.substring(0, b.length - 1)
            }
            return b
        }, endsWith: function (b, c) {
            if (b == null || c == null) {
                return false
            }
            b = this.normalize(b);
            return b.slice(-c.length) == c
        }, endsWithIgnoreCase: function (b, c) {
            if (b == null || c == null) {
                return false
            }
            b = this.normalize(b);
            return b.toUpperCase().slice(-c.length) == c.toUpperCase()
        }});
    a.extend(a.easing, {easeOutBack: function (f, g, e, k, j, h) {
            if (h == undefined) {
                h = 1.70158
            }
            return k * ((g = g / j - 1) * g * ((h + 1) * g + h) + 1) + e
        }, easeInQuad: function (f, g, e, j, h) {
            return j * (g /= h) * g + e
        }, easeInOutCirc: function (f, g, e, j, h) {
            if ((g /= h / 2) < 1) {
                return -j / 2 * (Math.sqrt(1 - g * g) - 1) + e
            }
            return j / 2 * (Math.sqrt(1 - (g -= 2) * g) + 1) + e
        }, easeInOutSine: function (f, g, e, j, h) {
            return -j / 2 * (Math.cos(Math.PI * g / h) - 1) + e
        }, easeInCubic: function (f, g, e, j, h) {
            return j * (g /= h) * g * g + e
        }, easeOutCubic: function (f, g, e, j, h) {
            return j * ((g = g / h - 1) * g * g + 1) + e
        }, easeInOutCubic: function (f, g, e, j, h) {
            if ((g /= h / 2) < 1) {
                return j / 2 * g * g * g + e
            }
            return j / 2 * ((g -= 2) * g * g + 2) + e
        }, easeInSine: function (f, g, e, j, h) {
            return -j * Math.cos(g / h * (Math.PI / 2)) + j + e
        }, easeOutSine: function (f, g, e, j, h) {
            return j * Math.sin(g / h * (Math.PI / 2)) + e
        }, easeInOutSine:function (f, g, e, j, h) {
            return -j / 2 * (Math.cos(Math.PI * g / h) - 1) + e
        }})
})(jqxBaseFramework);
(function (b) {
    if (b.event && b.event.special) {
        b.extend(b.event.special, {close: {noBubble: true}, open: {noBubble: true}, cellclick: {noBubble: true}, rowclick: {noBubble: true}, tabclick: {noBubble: true}, selected: {noBubble: true}, expanded: {noBubble: true}, collapsed: {noBubble: true}, valuechanged: {noBubble: true}, expandedItem: {noBubble: true}, collapsedItem: {noBubble: true}, expandingItem: {noBubble: true}, collapsingItem: {noBubble: true}})
    }
    if (b.fn.extend) {
        b.fn.extend({ischildof: function (g) {
                if (!b(this).parents) {
                    var c = g.element.contains(this.element);
                    return c
                }
                var e = b(this).parents().get();
                for (var d = 0; d < e.length; d++) {
                    if (typeof g != "string") {
                        var f = e[d];
                        if (g !== undefined) {
                            if (f == g[0]) {
                                return true
                            }
                        }
                    } else {
                        if (g !== undefined) {
                            if (b(e[d]).is(g)) {
                                return true
                            }
                        }
                    }
                }
                return false
            }})
    }
    b.fn.jqxProxy = function () {
        var e = b(this).data().jqxWidget;
        var c = Array.prototype.slice.call(arguments, 0);
        var d = e.element;
        if (!d) {
            d = e.base.element
        }
        return b.jqx.jqxWidgetProxy(e.widgetName, d, c)
    };
    var a = this.originalVal = b.fn.val;
    b.fn.val = function (d) {
        if (typeof d == "undefined") {
            if (b(this).hasClass("jqx-widget")) {
                var c = b(this).data().jqxWidget;
                if (c && c.val) {
                    return c.val()
                }
            }
            return a.call(this)
        } else {
            if (b(this).hasClass("jqx-widget")) {
                var c = b(this).data().jqxWidget;
                if (c && c.val) {
                    if (arguments.length != 2) {
                        return c.val(d)
                    } else {
                        return c.val(d, arguments[1])
                    }
                }
            }
            return a.call(this, d)
        }
    };
    if (b.fn.modal && b.fn.modal.Constructor) {
        b.fn.modal.Constructor.prototype.enforceFocus = function () {
            b(document).off("focusin.bs.modal").on("focusin.bs.modal", b.proxy(function (c) {
                if (this.$element[0] !== c.target && !this.$element.has(c.target).length) {
                    if (b(c.target).parents().hasClass("jqx-popup")) {
                        return true
                    }
                    this.$element.trigger("focus")
                }
            }, this))
        }
    }
    b.fn.coord = function (o) {
        var e, k, j = {top: 0, left: 0}, f = this[0], m = f && f.ownerDocument;
        if (!m) {
            return
        }
        e = m.documentElement;
        if (!b.contains(e, f)) {
            return j
        }
        if (typeof f.getBoundingClientRect !== undefined) {
            j = f.getBoundingClientRect()
        }
        var d = function (p) {
            return b.isWindow(p) ? p : p.nodeType === 9 ? p.defaultView || p.parentWindow : false
        };
        k = d(m);
        var h = 0;
        var c = 0;
        var g = navigator.userAgent.toLowerCase();
        var n = g.indexOf("ipad") != -1 || g.indexOf("iphone") != -1;
        if (n) {
            h = 2
        }
        if (true == o) {
            if (document.body.style.position != "static" && document.body.style.position != "") {
                var l = b(document.body).coord();
                h = -l.left;
                c = -l.top
            }
        }
        return{top: c + j.top + (k.pageYOffset || e.scrollTop) - (e.clientTop || 0), left: h + j.left + (k.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)}
    }
})(jqxBaseFramework);