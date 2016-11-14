/*
jQWidgets v4.3.0 (2016-Oct)
Copyright (c) 2011-2016 jQWidgets.
License: http://jqwidgets.com/license/
*/

(function (a) {
    a.jqx.jqxWidget("jqxKanban", "", {});
    a.extend(a.jqx._jqxKanban.prototype,
            {defineInstance: function () {
                    var b = {
                        animationDelay: 100,
                        columnRenderer: null,
                        columns: null,
                        connectWith: null,
                        headerWidth: 30,
                        headerHeight: 30,
                        height: 650,  //Altura del tablero
                        handle: null,
                        itemRenderer: null,
                        ready: null,
                        resources: null,
                        rtl: false,
                        source: null,
                        template: "<div class='jqx-kanban-item' id=''><div class='jqx-kanban-item-color-status'></div><div class='jqx-kanban-item-avatar'></div><div class='jqx-kanban-item-text'></div><div class='jqx-kanban-item-footer'></div></div>",
                        templateContent: {
                            id: 0,
                            status: "work",
                            text: "New text",
                            content: "New content",
                            tags: "New, tags",
                            color: "green",
                            resourceId: 0,
                            className: ""
                        },
                        width: 750, //Ancho del tablero
                        verticalTextOrientation: "topToBottom",
                        _kanbanId: null,
                        _dropKanbanId: null,
                        _connectWith: null,
                        _kanbanColumns: null,
                        _selectedItemId: null,
                        _selectedItemValues: null,
                        _draggedItemId: null,
                        _draggedItemValues: null,
                        _selectedColumn: null,
                        _source: null,
                        _resourcesLength: null,
                        _items: [],
                        _ie8: (a.jqx.browser.msie && a.jqx.browser.version == 8),
                        _ie7: (a.jqx.browser.msie && a.jqx.browser.version < 8),
                        _parentsTag: null, 
                        _columns: [],
                        _collapsedColumns: 0,
                        _expandedColumns: null,
                        _columnBorders: [1, 1, 1, 1],
                        _css_color_names: ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"], _clearing: "<div class='jqx-kanban-clearing'></div>", _commonItem: {id: null, name: "no name", image: "data:image/png;base64,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"}, _events: ["initialized", "itemSelected", "itemCreated", "itemMoved", "itemReceived", "columnSelected", "columnUnselected", "columnCollapsed", "columnExpanded", "itemAttrClicked", "columnAttrClicked"]};
                    a.extend(true, this, b);
                    return b
                }, createInstance: function () {
                    var b = this;
                    a("#" + b.element.id).empty();
                    b._createKanban()
                }, _createKanban: function () {
                    var c = this;
                    c._ie8Plugin();
                    c._kanbanId = c.element.id;
                    var b = function () {
                        c._getParent();
                        c._createKanbanField();
                        c._createKanbanLayout();
                        c._addCSS();
                        var d = function () {
                            c._setKanbanConnections();
                            c._transformToSortable();
                            c._addEventHandlers();
                            c._rtlCheck();
                            c._refreshEventHandlers();
                            c._recalculateContainersHeight();
                            c._handlerExpandCollapse();
                            c._raiseEvent("0");
                            c._ready()
                        };
                        c._populateKanban(d)
                    };
                    c._serializeSource(b)
                }, propertyChangedHandler: function (b, c, e, d) {
                    a("#" + b.element.id).empty();
                    b._createKanban()
                }, _getParent: function () {
                    var b = this;
                    b._parentsTag = b.host.parent().get(0).tagName.toLowerCase()
                }, _createKanbanField: function () {
                    var c = this;
                    var b = c.columns.length;
                    if (c.width == null && c.height == null) {
                        if (c._parentsTag == "body") {
                            c.width = a(window).innerWidth();
                            c.height = a(window).innerHeight();
                            if (c._ie7 || c._ie8) {
                                c.host.height(c.height)
                            }
                            c.host.addClass(this.toThemeProperty("jqx-kanban-full-frame"))
                        } else {
                            c.width = c.host.parent().width();
                            c.height = c.host.parent().height();
                            c.host.addClass(this.toThemeProperty("jqx-kanban-in-frame"))
                        }
                    } else {
                        if (c.width != null && c.height == null) {
                            if (c.width <= c.headerWidth * b) {
                                throw new Error("jqxKanban: Insert valid Kanban dimensions. Width must be greather than sum of the collapsed header's width")
                            }
                            c.host.width(c.width)
                        } else {
                            if (c.heigth != null && c.width == null) {
                                if (c.height <= c.headerHeight) {
                                    throw new Error("jqxKanban: Insert valid Kanban dimensions. Height must be greather than headerHeight")
                                }
                                c.host.heigth(c.heigth)
                            } else {
                                if (c.width <= c.headerWidth * b) {
                                    throw new Error("jqxKanban: Insert valid Kanban dimensions. Width must be greather than sum of the collapsed header's width")
                                }
                                if (c.height <= c.headerHeight) {
                                    throw new Error("jqxKanban: Insert valid Kanban dimensions. Height must be greather than headerHeight")
                                }
                                c.host.width(c.width);
                                c.host.height(c.height)
                            }
                        }
                    }
                    c.host.addClass(this.toThemeProperty("jqx-widget"))
                }, _createKanbanLayout: function () {
                    var k = this;
                    var q = k.columns.length;
                    k._expandedColumns = q;
                    var l = k._calculateColumnDimensions(q);
                    var n = k._calculateContainerDimensions(q);
                    for (var h = 0; h < q; h++) {
                        var g = a("<div id='" + k._kanbanId + "-column-" + h + "' class='jqx-kanban-column' data-column-data-field='" + k.columns[h].dataField + "' style='width:" + l[0] + "; height:" + l[1] + ";'></div>");
                        if (k.columns[h].maxItems === undefined) {
                            k.columns[h].maxItems = 9999
                        }
                        k._columns.push(g);
                        k.host.append(g);
                        var j = "jqx-kanban-column-vertical-container";
                        var f = k.columns[h].collapseDirection;
                        if (!f) {
                            f = "left"
                        }
                        if (f == "right") {
                            j = "jqx-kanban-column-vertical-container-inverse"
                        }
                        var c = k.columns[h].iconClassName ? k.toThemeProperty(k.columns[h].iconClassName) : "";
                        var d = c ? "<div class='" + k.toThemeProperty("jqx-window-collapse-button-background jqx-kanban-column-header-custom-button") + "'><div style='width: 100%; height: 100%;' class='" + c + "'></div></div>" : "";
                        var b = c ? "<div class='" + k.toThemeProperty("jqx-window-collapse-button-background jqx-kanban-column-header-custom-button") + "'><div style='width: 100%; height: 100%;' class='" + c + "'></div></div>" : "";
                        var e = a("<div id='" + k._kanbanId + "-column-header-collapsed-" + h + "' data-kanban-column-header-collapsed='" + h + "' class='" + k.toThemeProperty("jqx-kanban-column-header-collapsed") + "'><div class='" + j + "'><span class='" + k.toThemeProperty("jqx-kanban-column-header-title") + "'>" + k.columns[h].text + "</span><span class='" + k.toThemeProperty("jqx-kanban-column-header-status") + "'></span></div>" + d + "<div class='" + k.toThemeProperty("jqx-window-collapse-button-background jqx-kanban-column-header-button") + "'><div style='width: 100%; height: 100%;' class='" + k.toThemeProperty("jqx-window-collapse-button " + (f == "right" ? "jqx-icon-arrow-left" : "jqx-icon-arrow-right")) + "'></div></div></div>");
                        g.append(e);
                        var m = a("<div id='" + k._kanbanId + "-column-header-" + h + "' data-kanban-column-header='" + h + "' class='" + k.toThemeProperty("jqx-kanban-column-header") + "'><span class='" + k.toThemeProperty("jqx-kanban-column-header-title") + "'>" + k.columns[h].text + "</span><span class='" + k.toThemeProperty("jqx-kanban-column-header-status") + "'></span>" + b + "<div class='" + k.toThemeProperty("jqx-window-collapse-button-background jqx-kanban-column-header-button") + "'><div style='width: 100%; height: 100%;' class='" + k.toThemeProperty("jqx-window-collapse-button " + (f == "right" ? "jqx-icon-arrow-right" : "jqx-icon-arrow-left")) + "'></div></div></div>");
                        if (k.rtl) {
                            m.find(".jqx-kanban-column-header-button").addClass("jqx-kanban-column-header-button-rtl");
                            m.find(".jqx-kanban-column-header-custom-button").addClass("jqx-kanban-column-header-custom-button-rtl")
                        }
                        m.outerHeight(k.headerHeight);
                        m.css("line-height", k.headerHeight + "px");
                        g.append(m);
                        var p = a("<div id='" + k._kanbanId + "-column-container-" + h + "' data-kanban-column-container='" + k.columns[h].dataField + "' class='jqx-kanban-column-container' style='height:" + n[1] + "; overflow-y: auto;'></div>");
                        g.append(p);
                        g.data("kanban-column-collapsed", false);
                        k.columns[h].headerElement = m;
                        k.columns[h].collapsedHeaderElement = e;
                        if (k.columnRenderer) {
                            k.columnRenderer(m, e, k.columns[h])
                        }
                        if (f == "left") {
                            var o = m.find(".jqx-kanban-column-header-title").width();
                            o += m.find(".jqx-kanban-column-header-status").width();
                            o -= 10;
                            g.find(".jqx-kanban-column-header-title").css("left", -o + "px");
                            g.find(".jqx-kanban-column-header-status").css("left", -o + "px")
                        }
                        if (k.columns[h].collapsible === false) {
                            g.find(".jqx-kanban-column-header-button").hide()
                        }
                    }
                    if (q == 1) {
                        k.host.find(".jqx-kanban-column-header-button").hide()
                    }
                }, _calculateColumnDimensions: function (c) {
                    var g = this;
                    var f = [];
                    var d = 100 / c;
                    var b = 100;
                    var e = 100;
                    if (this.host.height() == 0) {
                        this.host.height(400)
                    }
                    if (this.host.width() == 0) {
                        this.host.width(600)
                    }
                    if (g._ie7) {
                        d = this.host.width() / c - (this._columnBorders[1] + this._columnBorders[3]);
                        b = this.host.height() - (this._columnBorders[0] + this._columnBorders[2]);
                        e = b - this.headerHeight;
                        d = d + "px";
                        b = b + "px";
                        e = e + "px"
                    } else {
                        e = this.host.height() - a("#" + g._kanbanId + " div.jqx-kanban-column-header").outerHeight();
                        d = d + "%";
                        b = b + "%";
                        e = e + "px"
                    }
                    f.push(d);
                    f.push(b);
                    f.push(e);
                    return f
                }, _calculateContainerDimensions: function (c) {
                    var f = this;
                    var e = [];
                    var d = 100;
                    var b = 100;
                    if (f._ie7) {
                        d = this.host.width() / c - 20;
                        b = this.host.height() - this.headerHeight;
                        d = d + "px";
                        b = b + "px"
                    } else {
                        b = this.host.height() - this.headerHeight;
                        d = d + "%";
                        b = b + "px"
                    }
                    e.push(d);
                    e.push(b);
                    return e
                }, _recalculateContainersHeight: function () {
                    var h = this;
                    var f = document.getElementById(h._kanbanId + "-column-header-0");
                    var g = 0;
                    for (var e = 0; e < h.columns.length; e++) {
                        if (!h.columns[e].collapsed) {
                            g = e;
                            f = h.columns[e].headerElement[0];
                            break
                        }
                    }
                    var j = parseInt(getComputedStyle(f).getPropertyValue("margin-top"));
                    var d = parseInt(getComputedStyle(f).getPropertyValue("margin-Bottom"));
                    var n = document.getElementById(h._kanbanId + "-column-container-" + g);
                    var k = parseInt(getComputedStyle(n).getPropertyValue("margin-top"));
                    var b = parseInt(getComputedStyle(n).getPropertyValue("margin-Bottom"));
                    var m = f.offsetHeight + j + d;
                    var l = k + b;
                    var c = this.host.height() - m - l;
                    a("#" + h._kanbanId + " div.jqx-kanban-column-container").outerHeight(c)
                }, _addCSS: function () {
                    var c = this;
                    a(c.host).addClass(c.toThemeProperty("jqx-kanban"));
                    a("#" + c._kanbanId + " div.jqx-kanban-column").addClass(c.toThemeProperty("jqx-widget-content"));
                    a("#" + c._kanbanId + " div.jqx-kanban-column-header").addClass(c.toThemeProperty("jqx-widget-header"));
                    a("#" + c._kanbanId + " div.jqx-kanban-column-header-collapsed").addClass(c.toThemeProperty("jqx-widget-header"));
                    a("#" + c._kanbanId + " div.jqx-kanban-column-container").addClass(c.toThemeProperty("jqx-widget-content"));
                    if (c._ie8 || c._ie7) {
                        a("#" + c._kanbanId + "-column-0").addClass(c.toThemeProperty("jqx-kanban-column-first"))
                    } else {
                        c._columnBorders[0] = a("#" + c._kanbanId + " div.jqx-kanban-column:first-of-type").css("border-top-width").slice(0, -2);
                        c._columnBorders[1] = a("#" + c._kanbanId + " div.jqx-kanban-column:first-of-type").css("border-right-width").slice(0, -2);
                        c._columnBorders[2] = a("#" + c._kanbanId + " div.jqx-kanban-column:first-of-type").css("border-bottom-width").slice(0, -2);
                        c._columnBorders[3] = a("#" + c._kanbanId + " div.jqx-kanban-column:first-of-type").css("border-top-width").slice(0, -2)
                    }
                    if (c.verticalTextOrientation == "bottomToTop") {
                        var b = a("#" + c._kanbanId).find(".jqx-kanban-column-vertical-container");
                        b.removeClass("jqx-kanban-column-vertical-container");
                        b.addClass("jqx-kanban-column-vertical-container-inverse")
                    }
                }, _rtlCheck: function () {
                    var b = this;
                    if (b.rtl == true) {
                        a(b.host).addClass(b.toThemeProperty("jqx-kanban-rtl"));
                        a("#" + b._kanbanId + " div.jqx-kanban-column-container").addClass(b.toThemeProperty("jqx-kanban-rtl"));
                        a("#" + b._kanbanId + " div.jqx-kanban-item-keyword").addClass(b.toThemeProperty("jqx-kanban-item-keyword-rtl"))
                    }
                }, _serializeSource: function (f) {
                    var g = this;
                    g._source = [];
                    g._sourceKeys = [];
                    var b = function (k) {
                        if (!k) {
                            return
                        }
                        for (var h = 0; h < k.length; h++) {
                            var j = {};
                            j.id = k[h].id != undefined ? k[h].id : g.element.id + "_" + h;
                            j.status = k[h].status || g.templateContent.status;
                            j.text = k[h].text || g.templateContent.text;
                            j.content = k[h].content || g.templateContent.content;
                            j.tags = k[h].tags || g.templateContent.tags;
                            j.color = k[h].color || g.templateContent.color;
                            j.resourceId = k[h].resourceId || g.templateContent.resourceId;
                            j.className = k[h].className || g.templateContent.className;
                            g._source.push(j);
                            g._sourceKeys[j.id] = j
                        }
                        f()
                    };
                    var e = g.source && g.source.dataBind;
                    if (e) {
                        var d = g.element.id;
                        g.source.unbindBindingUpdate(d);
                        g.source.dataBind();
                        if (g.source.records.length == 0) {
                            var c = function () {
                                b(g.source.records)
                            };
                            g.source.unbindDownloadComplete(d);
                            g.source.bindDownloadComplete(d, c)
                        } else {
                            b(g.source.records)
                        }
                        g.source.unbindBindingUpdate(d);
                        g.source.bindBindingUpdate(d, function () {
                            b(g.source.records)
                        });
                        return
                    }
                    b(g.source)
                }, _populateKanban: function (g) {
                    var h = this;
                    var e = 0;
                    if (h._source !== null) {
                        e = h._source.length || 0
                    }
                    h._resources = new Array();
                    var d = function (k) {
                        h._resources = k;
                        if (k !== null && k !== undefined) {
                            h._resourcesLength = k.length;
                            for (var n = 0; n < h._resourcesLength; n++) {
                                if (k[n].common == true) {
                                    h._commonItem = k[n]
                                }
                            }
                        }
                        for (var n = 0; n < e; n++) {
                            var q = a(h.template);
                            q.data("kanban-item-id", h._source[n].id);
                            var o = h._commonItem;
                            for (var m = 0; m < h._resourcesLength; m++) {
                                if (k[m].id == h._source[n].resourceId) {
                                    o = k[m]
                                }
                            }
                            var s = "<img class='jqx-kanban-item-avatar-image' alt='" + o.name + "' title='" + o.name + "' src='" + o.image + "' />";
                            q.addClass(h.toThemeProperty("jqx-rc-all"));
                            q.find(".jqx-kanban-item-avatar").append(s);
                            if (h.theme != "") {
                                q.addClass(h.toThemeProperty("jqx-kanban-item"))
                            }
                            var p = h.host.find("[data-kanban-column-container='" + h._source[n].status + "']");
                            q.find(".jqx-kanban-item-color-status").css({"background-color": h._source[n].color});
                            if (h.rtl) {
                                q.find(".jqx-kanban-item-color-status").addClass("jqx-kanban-item-color-status-rtl");
                                q.find(".jqx-kanban-item-avatar").addClass("jqx-kanban-item-avatar-rtl")
                            }
                            q.find(".jqx-kanban-item-text").append(h._source[n].text);
                            q.find(".jqx-kanban-item-content").append(h._source[n].content);
                            var l = "";
                            var r = [];
                            if ((h._source[n].tags !== null) && (h._source[n].tags !== undefined)) {
                                r = h._source[n].tags.replace(/\,\s/g, ",").split(",")
                            }
                            r.forEach(function (i) {
                                l = l + "<div class='" + h.toThemeProperty("jqx-kanban-item-keyword jqx-fill-state-normal jqx-rc-all") + "'>" + i + "</div>"
                            });
                            l = l + h._clearing;
                            q.find(".jqx-kanban-item-footer").append(l);
                            q.append(h._clearing);
                            q.attr("id", h._kanbanId + "_" + h._source[n].id);
                            if ((h._source[n].className !== null) && (h._source[n].className !== undefined)) {
                                q.addClass(h.toThemeProperty(h._source[n].className))
                            }
                            if (h.itemRenderer) {
                                h.itemRenderer(q, h._source[n], o)
                            }
                            p.append(q);
                            h._items[h._source[n].id] = q
                        }
                        g()
                    };
                    var f = h.resources && h.resources.dataBind;
                    if (f) {
                        var c = h.element.id;
                        h.resources.dataBind();
                        if (h.resources.records.length == 0) {
                            var b = function () {
                                d(h.resources.records)
                            };
                            h.resources.unbindDownloadComplete(c);
                            h.resources.bindDownloadComplete(c, b)
                        } else {
                            d(h.resources.records)
                        }
                        h.resources.unbindBindingUpdate(c);
                        h.resources.bindBindingUpdate(c, function () {
                            d(h.resources.records)
                        });
                        return
                    } else {
                        h._resources = h.resources;
                        d(h.resources)
                    }
                    a("#" + h._kanbanId + " div.jqx-kanban-item").addClass(this.toThemeProperty("jqx-widget-content"))
                }, _ready: function () {
                    var b = this;
                    if ((b.ready != null) && (typeof b.ready === "function")) {
                        b.ready()
                    }
                }, collapseColumn: function (c) {
                    for (var b = 0; b < this.columns.length; b++) {
                        if (this.columns[b].dataField == c) {
                            this._collapseColumn(b);
                            return true
                        }
                    }
                    return false
                }, expandColumn: function (c) {
                    for (var b = 0; b < this.columns.length; b++) {
                        if (this.columns[b].dataField == c) {
                            this._expand(b);
                            return true
                        }
                    }
                    return false
                }, _collapseColumn: function (b) {
                    var d = this;
                    var c = b || 0;
                    a("#" + d._kanbanId + "-column-header-collapsed-" + c).addClass(d.toThemeProperty("jqx-kanban-column-header-collapsed-show"));
                    a("#" + d._kanbanId + "-column-header-" + c).addClass(d.toThemeProperty("jqx-kanban-column-hide"));
                    a("#" + d._kanbanId + "-column-container-" + c).addClass(d.toThemeProperty("jqx-kanban-column-hide"));
                    if (d._ie8 || d._ie7) {
                        a("#" + d._kanbanId + " .jqx-kanban-column-vertical-container").addClass(d.toThemeProperty("jqx-kanban-column-vertical-container-ie8-fix"));
                        a("#" + d._kanbanId + " .jqx-kanban-column-vertical-container-inverse").addClass(d.toThemeProperty("jqx-kanban-column-vertical-container-inverse-ie8-fix"))
                    }
                    d._columns[c].data("kanban-column-collapsed", true);
                    d.columns[c].collapsed = true;
                    d._calculateExpandedColumnsWidth();
                    d._raiseEvent("7", {column: d.columns[c]})
                }, _expandColumn: function (b) {
                    var d = this;
                    var c = b || 0;
                    a("#" + d._kanbanId + "-column-header-collapsed-" + c).removeClass(d.toThemeProperty("jqx-kanban-column-header-collapsed-show"));
                    a("#" + d._kanbanId + "-column-header-" + c).removeClass(d.toThemeProperty("jqx-kanban-column-hide"));
                    a("#" + d._kanbanId + "-column-container-" + c).removeClass(d.toThemeProperty("jqx-kanban-column-hide"));
                    d.columns[c].collapsed = false;
                    d._columns[c].data("kanban-column-collapsed", false);
                    d._calculateExpandedColumnsWidth();
                    d._raiseEvent("8", {column: d.columns[c]})
                }, _calculateExpandedColumnsWidth: function () {
                    var g = this;
                    var h = g._columns.length;
                    g._collapsedColumns = 0;
                    g._expandedColumns = 0;
                    var d = 0;
                    var k = g.headerWidth;
                    for (var e = 0; e < h; e++) {
                        if (g._columns[e].data("kanban-column-collapsed") == true) {
                            g._collapsedColumns++
                        } else {
                            g._expandedColumns++
                        }
                    }
                    d = (g.host.width() - g.headerWidth * g._collapsedColumns) / g._expandedColumns;
                    var b = d - (this._columnBorders[1] + this._columnBorders[3]);
                    if (g._ie7) {
                        d = b;
                        k = g.headerWidth - 2
                    }
                    if (g.width && g.width.toString().indexOf("%") >= 0) {
                        var c = (g.host.width() + 2) / 100;
                        var f = 1 / c;
                        var j = k * f;
                        for (var e = 0; e < h; e++) {
                            if (g._columns[e].data("kanban-column-collapsed") == true) {
                                g._columns[e][0].style.width = j + "%"
                            } else {
                                g._columns[e][0].style.width = (d * f + "%")
                            }
                        }
                        return
                    }
                    for (var e = 0; e < h; e++) {
                        if (g._columns[e].data("kanban-column-collapsed") == true) {
                            g._columns[e].outerWidth(k)
                        } else {
                            g._columns[e].outerWidth(d)
                        }
                    }
                }, _handlerExpandCollapse: function () {
                    var c = this;
                    var b = 0;
                    c.addHandler(a("#" + c._kanbanId + " .jqx-kanban-column-header"), "click", function (g) {
                        var e = a(this).parent().index();
                        var f = c.columns[e];
                        var d = {attribute: "title", column: f, cancelToggle: false};
                        if (a(g.target).parent()[0].className.indexOf("jqx-kanban-column-header-custom-button") >= 0) {
                            var d = {attribute: "button", column: f, cancelToggle: false}
                        }
                        c._raiseEvent("10", d);
                        if (!d.cancelToggle) {
                            if (c._expandedColumns > 1) {
                                if (f.collapsible === false) {
                                    return
                                }
                                c._collapseColumn(e)
                            }
                        }
                    });
                    c.addHandler(a("#" + c._kanbanId + " .jqx-kanban-column-header-collapsed"), "click", function (g) {
                        var e = a(this).parent().index();
                        var e = a(this).parent().index();
                        var f = c.columns[e];
                        var d = {attribute: "title", cancelToggle: false, column: f};
                        if (a(g.target).parent()[0].className.indexOf("jqx-kanban-column-header-custom-button") >= 0) {
                            var d = {attribute: "button", cancelToggle: false, column: f}
                        }
                        c._raiseEvent("10", d);
                        if (!d.cancelToggle) {
                            c._expandColumn(e)
                        }
                    })
                }, _setKanbanConnections: function () {
                    var b = this;
                    b._kanbanColumns = "#" + b._kanbanId + " div.jqx-kanban-column-container";
                    b._connectWith = b._kanbanColumns;
                    if (b.connectWith != null) {
                        var c = b.connectWith.replace(/\,\s/g, ",").split(",");
                        c.forEach(function (d) {
                            b._connectWith = b._connectWith + ", " + d + " div.jqx-kanban-column-container"
                        })
                    }
                    
                    //Permite que las tareas sean movibles
                }, _transformToSortable: function () {
                    var c = this;
                    for (var b = 0; b < a(c._kanbanColumns).length; b++) {
                        a(a(c._kanbanColumns)[b]).jqxSortable({connectWith: c._connectWith, maxItems: c.columns[b].maxItems || 9999, cancel: ".jqx-kanban-column-container-cancel", placeholderShow: "jqx-kanban-item-placeholder", revert: c.animationDelay, cursor: "move", tolerance: "pointer", containment: "window"})
                    }
                    a.jqx.utilities.resize(c.host, null, true);
                    a.jqx.utilities.resize(c.host, function () {
                        for (var d = 0; d < a(c._kanbanColumns).length; d++) {
                            a(a(c._kanbanColumns)[d]).jqxSortable({containment: "window"})
                        }
                    });
                    if (c.handle !== null) {
                        a(c._kanbanColumns).jqxSortable({handle: "." + c.handle});
                        a("#" + c._kanbanId + " ." + c.handle).addClass("jqx-kanban-handle")
                    }
                }, _calculateItemsPerColumn: function (b) {
                    var c = this
                }, _calculateRestrictions: function () {
                    var b = this
                }, _redrawColumnHeader: function (b, d) {
                    var c = this
                }, addItem: function (l) {
                    var n = this;
                    var b = l.id;
                    var e = (n._source != null) ? n._source.length : 0;
                    if (b == undefined) {
                        b = e
                    }
                    var p = n._kanbanId + "_" + b;
                    n._source = (n._source != null) ? n._source : [];
                    var f = null;
                    if (n._css_color_names.indexOf(l.color) > -1) {
                        f = l.color
                    } else {
                        if (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(l.color)) {
                            f = l.color
                        } else {
                            if (/(^[0-9A-F]{6}$)|(^[0-9A-F]{3}$)/i.test(l.color)) {
                                f = "#" + l.color
                            }
                        }
                    }
                    var c = {id: b, status: l.status || n.templateContent.status, text: l.text || n.templateContent.text, content: l.content || n.templateContent.content, tags: l.tags || n.templateContent.tags, color: f || n.templateContent.color, resourceId: l.resourceId || n.templateContent.resourceId, className: l.className || n.templateContent.className};
                    var d = this.getColumn(c.status);
                    if (!d.maxItems) {
                        d.maxItems = 9999
                    }
                    if (d.maxItems < this.getColumnItems(d.dataField).length + 1) {
                        return
                    }
                    var i = n._commonItem;
                    for (var h = 0; h < n._resources.length; h++) {
                        if (n._resources[h].id == c.resourceId) {
                            i = n._resources[h]
                        }
                    }
                    var k = n.host.find("[data-kanban-column-container='" + c.status + "']");
                    var l = a(n.template);
                    if (n.theme != "") {
                        l.addClass(n.toThemeProperty("jqx-kanban-item"))
                    }
                    l.find(".jqx-kanban-item-color-status").css({"background-color": c.color});
                    var o = "<img class='jqx-kanban-item-avatar-image' alt='" + i.name + "' title='" + i.name + "' src='" + i.image + "' />";
                    l.find(".jqx-kanban-item-avatar").append(o);
                    l.find(".jqx-kanban-item-text").append(c.text);
                    l.find(".jqx-kanban-item-content").append(c.content);
                    var m = c.tags.replace(/\,\s/g, ",").split(",");
                    var g = "";
                    m.forEach(function (j) {
                        g = g + "<div class='" + n.toThemeProperty("jqx-kanban-item-keyword jqx-fill-state-normal jqx-rc-all") + "'>" + j + "</div>"
                    });
                    g = g + "<div style='clear:both'></div>";
                    l.find(".jqx-kanban-item-footer").append(g);
                    k.append(l);
                    a("#" + n._kanbanId + " .jqx-kanban-item").removeClass(this.toThemeProperty("jqx-widget-content jqx-rc-all"));
                    a("#" + n._kanbanId + " .jqx-kanban-item").addClass(this.toThemeProperty("jqx-widget-content jqx-rc-all"));
                    l.attr("id", p);
                    n._source[e] = c;
                    n._sourceKeys[b] = c;
                    l.data("kanban-item-id", e);
                    if ((c.className !== null) && (c.className !== undefined)) {
                        l.addClass(this.toThemeProperty(c.className))
                    }
                    if (n.itemRenderer) {
                        n.itemRenderer(l, c, i)
                    }
                    var d = this.getColumn(c.status);
                    if (d) {
                        if (n.columnRenderer) {
                            n.columnRenderer(d.headerElement, d.collapsedHeaderElement, d);
                            n._updateColumnTitle(d)
                        }
                    }
                    n._raiseEvent("2", {itemId: p});
                    n._refreshEventHandlers()
                }, _updateColumnTitle: function (c) {
                    if (c.collapseDirection == "left") {
                        var b = c.headerElement.find(".jqx-kanban-column-header-title").width();
                        b += c.headerElement.find(".jqx-kanban-column-header-status").width();
                        b -= 10;
                        c.headerElement.find(".jqx-kanban-column-header-title").css("left", -b + "px");
                        c.headerElement.find(".jqx-kanban-column-header-status").css("left", -b + "px")
                    }
                    
                    
                    //Se ejecuta cuando se coge una tarea
                }, _selectItem: function (d) {
                    
                    var c = this;
                    var b = d.data.self;
                    b._selectedItemId = a(c).attr("id");
                    a("#" + b._kanbanId + " .jqx-kanban-item").removeClass(b.toThemeProperty("jqx-kanban-item-selected"));
                    a(c).addClass(b.toThemeProperty("jqx-kanban-item-selected"));
                    var e = a(this).data().kanbanItemId;
                    b._selectedId = e;
                    b._raiseEvent("1", {item: b._sourceKeys[e]});
                    b._refreshEventHandlers()
                }, selectItem: function (d) {
                    var b = this;
                    var c = a("#" + b._kanbanId + "_" + d);
                    if (c.length == 0) {
                        return
                    }
                    a("#" + self._kanbanId + " .jqx-kanban-item").removeClass(self.toThemeProperty("jqx-kanban-item-selected"));
                    a(c).addClass(b.toThemeProperty("jqx-kanban-item-selected"));
                    b._selectedId = d
                }, _selectColumn: function (e) {
                    var d = this;
                    var b = e.data.self;
                    var h = a(d).attr("data-column-data-field");
                    var g, f;
                    var j = b.columns.length;
                    for (var c = 0; c < j; c++) {
                        if (b.columns[c].dataField == h) {
                            f = c
                        }
                        if (b.columns[c].dataField == b._selectedColumn) {
                            g = c
                        }
                    }
                    a("#" + b._kanbanId + " .jqx-kanban-column").removeClass(b.toThemeProperty("jqx-kanban-column-selected"));
                    a(d).addClass(b.toThemeProperty("jqx-kanban-column-selected"));
                    if ((b._selectedColumn != null) && (b._selectedColumn != h)) {
                        b._raiseEvent("6", {column: b._selectedColumn, dataField: g})
                    }
                    b._selectedColumn = h;
                    b._raiseEvent("5", {column: b._selectedColumn, dataField: f})
                }, getSelectedColumn: function () {
                    var b = this;
                    return b._selectedColumn
                }, _removeSourceIndexById: function (d) {
                    var c = this;
                    var b = -1;
                    a.each(c._source, function (e, f) {
                        if (this && this.id == d) {
                            b = e;
                            return false
                        }
                    });
                    if (b != -1) {
                        c._source.splice(b, 1)
                    }
                    c._sourceKeys[d] = null;
                    delete c._sourceKeys[d]
                }, removeItem: function (f) {
                    var c = this;
                    var e = "#" + c._kanbanId + "_" + f;
                    var d = f.toString().replace(c._kanbanId + "_", "");
                    a(e).remove();
                    var b = this.getColumn(c._sourceKeys[f].status);
                    c._items[d] = null;
                    c._removeSourceIndexById(f);
                    c._sourceKeys[f] = null;
                    if (b) {
                        if (c.columnRenderer) {
                            c.columnRenderer(b.headerElement, b.collapsedHeaderElement, b);
                            c._updateColumnTitle(b)
                        }
                    }
                    c._selectedItemId = null
                }, updateItem: function (p, o) {
                    var n = this;
                    var g = a("#" + n._kanbanId + "_" + p);
                    if (g.length == 0) {
                        return
                    }
                    var b = g.data("kanban-item-id");
                    var c = n._sourceKeys[b];
                    var d = c.className || "";
                    var h = null;
                    if (n._css_color_names.indexOf(o.color) > -1) {
                        h = o.color
                    } else {
                        if (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(o.color)) {
                            h = o.color
                        } else {
                            if (/(^[0-9A-F]{6}$)|(^[0-9A-F]{3}$)/i.test(o.color)) {
                                h = "#" + o.color
                            } else {
                                if (o.color) {
                                    h = o.color
                                }
                            }
                        }
                    }
                    var f = {id: c.id, status: c.status, text: o.text || c.text, content: o.content || c.content, tags: o.tags || c.tags, color: h || c.color, resourceId: o.resourceId || c.resourceId, className: o.className || c.className};
                    n._source[b] = f;
                    n._sourceKeys[b] = f;
                    var l = n._commonItem;
                    for (var k = 0; k < n._resources.length; k++) {
                        if (n._resources[k].id == f.resourceId) {
                            l = n._resources[k]
                        }
                    }
                    var q = "<img class='jqx-kanban-item-avatar-image' alt='" + l.name + "' title='" + l.name + "' src='" + l.image + "' />";
                    g.find(".jqx-kanban-item-avatar").html(q);
                    g.find(".jqx-kanban-item-color-status").css({"background-color": f.color});
                    g.find(".jqx-kanban-item-text").html(f.text);
                    g.find(".jqx-kanban-item-content").html(f.content);
                    var m = f.tags.replace(/\,\s/g, ",").split(",");
                    var i = "";
                    m.forEach(function (j) {
                        i = i + "<div class='" + n.toThemeProperty("jqx-kanban-item-keyword jqx-fill-state-normal jqx-rc-all") + "'>" + j + "</div>"
                    });
                    i = i + "<div style='clear:both'></div>";
                    g.find(".jqx-kanban-item-footer").html(i);
                    if ((f.className !== null) && (f.className !== undefined)) {
                        g.removeClass(this.toThemeProperty(d));
                        g.addClass(this.toThemeProperty(f.className))
                    }
                    if (n.itemRenderer) {
                        n.itemRenderer(g, f, l)
                    }
                    var e = this.getColumn(f.status);
                    if (e) {
                        if (n.columnRenderer) {
                            n.columnRenderer(e.headerElement, e.collapsedHeaderElement, e);
                            n._updateColumnTitle(e)
                        }
                    }
                }, getSelectedItem: function () {
                    var b = this;
                    var c = b._sourceKeys[b._selectedId];
                    return c
                }, getColumn: function (c) {
                    for (var b = 0; b < this.columns.length; b++) {
                        if (this.columns[b].dataField == c) {
                            return this.columns[b]
                        }
                    }
                    return null
                }, getColumnItems: function (f) {
                    var e = this;
                    var d = [];
                    var b = e._source.length;
                    for (var c = 0; c < b; c++) {
                        if (e._source[c] != null && e._source[c].status == f) {
                            d.push(e._source[c])
                        }
                    }
                    return d
                }, getItems: function () {
                    var b = this;
                    if (b._source !== null) {
                        return b._source.filter(function (c) {
                            return(c != null)
                        })
                    } else {
                        return null
                    }
                }, _ie8Plugin: function () {
                    if (typeof Array.prototype.forEach != "function") {
                        Array.prototype.forEach = function (c) {
                            for (var b = 0; b < this.length; b++) {
                                c.apply(this, [this[b], b, this])
                            }
                        }
                    }
                    if (!window.getComputedStyle) {
                        window.getComputedStyle = function (b, c) {
                            this.el = b;
                            this.getPropertyValue = function (e) {
                                var d = /(\-([a-z]){1})/g;
                                if (e == "float") {
                                    e = "styleFloat"
                                }
                                if (d.test(e)) {
                                    e = e.replace(d, function () {
                                        return arguments[2].toUpperCase()
                                    })
                                }
                                return b.currentStyle[e] ? b.currentStyle[e] : null
                            };
                            return this
                        }
                   }
                },
                _addEventHandlers: function () {
                    var b = this;
                    b.addHandler(a(window), "resize.kanban" + b.element.id, function (c) {
                        b._recalculateContainersHeight();
                        b._calculateExpandedColumnsWidth()
                    });
                    b.addHandler(a(b._kanbanColumns), "start", function (d) {
                        b._selectedItemId = d.args.item[0].id;
                        b._draggedItemId = b._selectedItemId;
                        b._draggedItemDataId = a("#" + b._draggedItemId).data().kanbanItemId;
                        b._draggedItemValues = b._sourceKeys[b._draggedItemDataId];
                        b._selectedItemValues = b._draggedItemValues;
                        var c = a("#" + b._draggedItemId).height();
                        a(".jqx-kanban-item-placeholder").height(c)
                    });
                    b.addHandler(a(b._kanbanColumns), "stop", function (c) {
                        var j = a("#" + b._draggedItemId).parent().attr("data-kanban-column-container");
                        var h = j;
                        var d = null;
                        for (var g = 0; g < b.columns.length; g++) {
                            if (b.columns[g].dataField == h) {
                                d = b.columns[g];
                                break
                            }
                        }
                        if (b._sourceKeys[b._draggedItemDataId]) {
                            var e = null;
                            var l = a("#" + b._kanbanId).jqxKanban("columns");
                            var f = b._sourceKeys[b._draggedItemDataId].status;
                            for (var g = 0; g < l.length; g++) {
                                if (l[g].dataField == f) {
                                    e = l[g];
                                    break
                                }
                            }
                            if (b._kanbanId !== b._dropKanbanId) {
                                b._raiseEvent("3", {oldParentId: b._kanbanId, newParentId: b._dropKanbanId, itemId: b._selectedId, newColumn: d, oldColumn: e, itemData: b._draggedItemValues});
                                var k = b._source.length;
                                b._draggedItemValues.status = j;
                                a("#" + b._dropKanbanId).trigger("_itemReceived", [b._selectedItemId, b._kanbanId, b._dropKanbanId, b._draggedItemValues, b._selectedId, d, e]);
                                b._sourceKeys[b._draggedItemDataId] = null
                            } else {
                                b._raiseEvent("3", {newColumn: d, oldColumn: e, oldParentId: b._kanbanId, newParentId: b._dropKanbanId, itemId: b._selectedId, itemData: b._draggedItemValues});
                                b._raiseEvent("4", {newColumn: d, oldColumn: e, oldParentId: b._kanbanId, newParentId: b._dropKanbanId, itemId: b._selectedId, itemData: b._draggedItemValues});
                                b._sourceKeys[b._draggedItemDataId].status = j
                            }
                            if (b.columnRenderer) {
                                for (var g = 0; g < b.columns.length; g++) {
                                    if (b.columns[g].dataField == h) {
                                        b.columnRenderer(b.columns[g].headerElement, b.columns[g].collapsedHeaderElement, b.columns[g]);
                                        b._updateColumnTitle(b.columns[g])
                                    }
                                    if (b.columns[g].dataField == f) {
                                        b.columnRenderer(b.columns[g].headerElement, b.columns[g].collapsedHeaderElement, b.columns[g]);
                                        b._updateColumnTitle(b.columns[g])
                                    }
                                }
                            }
                        }
                        b._draggedItemDataId = null;
                        b._draggedItemId = null;
                        b._draggedItemValues = null
                    });
                    b.addHandler(a(b._kanbanColumns), "sort", function (c) {
                        b._dropKanbanId = a(".jqx-kanban-item-placeholder").parent().parent().parent().attr("id")
                    });
                    b.addHandler(a(b.host), "_itemReceived", function (c, p, q, m, f) {
                        b._raiseEvent("4", {itemId: p, oldParentId: q, newParentId: m, itemData: f});
                        var s = a("#" + p);
                        var n = a(b.template);
                        if (b.theme != "") {
                            n.addClass(b.toThemeProperty("jqx-kanban-item"))
                        }
                        n.data("kanban-item-id", f.id);
                        var l = b._commonItem;
                        for (var h = 0; h < b._resources.length; h++) {
                            if (b._resources[h].id == f.resourceId) {
                                l = b._resources[h]
                            }
                        }
                        var r = "<img class='jqx-kanban-item-avatar-image' alt='" + l.name + "' title='" + l.name + "' src='" + l.image + "' />";
                        n.find(".jqx-kanban-item-avatar").append(r);
                        n.find(".jqx-kanban-item-text").append(f.text);
                        n.find(".jqx-kanban-item-color-status").css({"background-color": f.color});
                        n.find(".jqx-kanban-item-content").append(f.content);
                        var o = f.tags.replace(/\,\s/g, ",").split(",");
                        var g = "";
                        o.forEach(function (i) {
                            g = g + "<div class='" + b.toThemeProperty("jqx-kanban-item-keyword jqx-fill-state-normal jqx-rc-all") + "'>" + i + "</div>"
                        });
                        g = g + "<div style='clear:both'></div>";
                        n.find(".jqx-kanban-item-footer").append(g);
                        n.attr("id", b._kanbanId + "_" + f.id);
                        s.replaceWith(n);
                        a("#" + m + " div.jqx-kanban-item").addClass(b.toThemeProperty("jqx-widget-content"));
                        if ((f.className !== null) && (f.className !== undefined)) {
                            n.addClass(b.toThemeProperty(f.className))
                        }
                        a("#" + m + " div.jqx-kanban-item").removeClass(b.toThemeProperty("jqx-kanban-item-selected"));
                        a("#" + p).addClass(b.toThemeProperty("jqx-kanban-item-selected"));
                        a("#" + m).jqxKanban("_refreshEventHandlers");
                        b._source.push(f);
                        var e = a("#" + m).jqxKanban("getInstance");
                        var d = a("#" + q).jqxKanban("getInstance");
                        e._sourceKeys[f.id] = f;
                        d._removeSourceIndexById(f.id);
                        if (e.columnRenderer) {
                            for (var k = 0; k < e.columns.length; k++) {
                                e.columnRenderer(e.columns[k].headerElement, e.columns[k].collapsedHeaderElement, e.columns[k])
                            }
                        }
                        if (d.columnRenderer) {
                            for (var k = 0; k < d.columns.length; k++) {
                                d.columnRenderer(d.columns[k].headerElement, d.columns[k].collapsedHeaderElement, d.columns[k])
                            }
                        }
                    });
                    b.addHandler(a("#" + b._kanbanId + " .jqx-kanban-item"), "click", b._selectItem, {self: this});
                    b.addHandler(a("#" + b._kanbanId + " .jqx-kanban-column"), "click", b._selectColumn, {self: this});
                    b.addHandler(a(".jqx-kanban-item-color-status, .jqx-kanban-item-avatar, .jqx-kanban-item-text, .jqx-kanban-item-content, .jqx-kanban-item-keyword, .jqx-kanban-item-template-content"), "click", function () {
                        var f = "jqx-kanban-item-color-status jqx-kanban-item-avatar jqx-kanban-item-text jqx-kanban-item-content jqx-kanban-item-keyword jqx-kanban-item-template-content".split(" ");
                        var g = a(this).attr("class").split(" ");
                        var e = g.length;
                        var j = null;
                        var h = a(this).parents(".jqx-kanban-item").data().kanbanItemId;
                        var c = {attribute: null, item: b._sourceKeys[h], itemId: h};
                        for (var d = 0; d < e; d++) {
                            if (f.indexOf(g[d]) > -1) {
                                j = g[d]
                            }
                        }
                        switch (j) {
                            case"jqx-kanban-item-color-status":
                                c.attribute = "colorStatus";
                                break;
                            case"jqx-kanban-item-avatar":
                                c.attribute = "avatar";
                                break;
                            case"jqx-kanban-item-text":
                                c.attribute = "text";
                                break;
                            case"jqx-kanban-item-content":
                                c.attribute = "content";
                                break;
                            case"jqx-kanban-item-keyword":
                                c.attribute = "keyword";
                                break;
                            case"jqx-kanban-item-template-content":
                                c.attribute = "template";
                                break;
                            default:
                                break
                        }
                        b._raiseEvent("9", c)
                    })
                }, destroy: function () {
                    var b = this;
                    a.jqx.utilities.resize(b.host, null, true);
                    b._removeEventHandlers();
                    b.host.remove()
                }, _removeEventHandlers: function () {
                    var b = this;
                    b.removeHandler(a(window), "resize.kanban" + b.element.id);
                    b.removeHandler(a(b._kanbanColumns), "start");
                    b.removeHandler(a(b._kanbanColumns), "stop");
                    b.removeHandler(a(b._kanbanColumns), "sort");
                    b.removeHandler(a(b.host), "_itemReceived");
                    b.removeHandler(a("#" + b._kanbanId + " .jqx-kanban-item"), "click");
                    b.removeHandler(a("#" + b._kanbanId + " .jqx-kanban-column"), "click");
                    b.removeHandler(a(".jqx-kanban-item-color-status, .jqx-kanban-item-avatar, .jqx-kanban-item-text, .jqx-kanban-item-content, .jqx-kanban-item-keyword, .jqx-kanban-item-template-content"), "click")
                }, _refreshEventHandlers: function () {
                    var b = this;
                    b._removeEventHandlers();
                    b._addEventHandlers()
                }, _raiseEvent: function (b, d) {
                    that = this;
                    var c = a.Event(that._events[b]);
                    c.args = d;
                    return that.host.trigger(c)
                }, _getEvent: function (b) {
                    that = this;
                    if (that._isTouchDevice) {
                        return that._touchEvents[b]
                    } else {
                        return b
                    }
                }})
})(jqxBaseFramework);