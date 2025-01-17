/*!
 * Leap Bootstrap Theme
 * Copyright 2018-2019 Medium Rare (undefined)
 */
!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
        ? e(
              exports,
              require("aos"),
              require("jquery"),
              require("jquery-countdown"),
              require("scrollmonitor"),
              require("flatpickr"),
              require("flickity"),
              require("ion-rangeslider"),
              require("isotope-layout"),
              require("jarallax"),
              require("plyr"),
              require("prismjs"),
              require("smooth-scroll"),
              require("@tanem/svg-injector"),
              require("twitter-fetcher"),
              require("typed.js"),
              require("smartwizard")
          )
        : "function" == typeof define && define.amd
        ? define([
              "exports",
              "aos",
              "jquery",
              "jquery-countdown",
              "scrollmonitor",
              "flatpickr",
              "flickity",
              "ion-rangeslider",
              "isotope-layout",
              "jarallax",
              "plyr",
              "prismjs",
              "smooth-scroll",
              "@tanem/svg-injector",
              "twitter-fetcher",
              "typed.js",
              "smartwizard",
          ], e)
        : e(((t = t || self).theme = {}), t.AOS, t.jQuery, null, t.scrollMonitor, t.flatpickr, t.Flickity, null, t.Isotope, t.jarallax, t.Plyr, t.Prism, t.SmoothScroll, t.SVGInjector, t.twitterFetcher, t.Typed);
})(this, function (t, e, O, n, b, s, E, i, j, r, o, a, l, u, A, c) {
    "use strict";
    var h;
    function f(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
        }
    }
    function U(t, e, n) {
        return e && f(t.prototype, e), n && f(t, n), t;
    }
    (e = e && e.hasOwnProperty("default") ? e.default : e),
        (O = O && O.hasOwnProperty("default") ? O.default : O),
        (b = b && b.hasOwnProperty("default") ? b.default : b),
        (s = s && s.hasOwnProperty("default") ? s.default : s),
        (E = E && E.hasOwnProperty("default") ? E.default : E),
        (j = j && j.hasOwnProperty("default") ? j.default : j),
        (r = r && r.hasOwnProperty("default") ? r.default : r),
        (o = o && o.hasOwnProperty("default") ? o.default : o),
        (a = a && a.hasOwnProperty("default") ? a.default : a),
        (l = l && l.hasOwnProperty("default") ? l.default : l),
        (A = A && A.hasOwnProperty("default") ? A.default : A),
        (c = c && c.hasOwnProperty("default") ? c.default : c),
        e.init({ once: !0 }),
        (h = O),
        "objectFit" in document.documentElement.style == 0 &&
            h(".bg-image").each(function () {
                var t = h(this),
                    e = t.attr("src"),
                    n = t.get(0).classList;
                t.before(h('<div class="' + n + '" style="background: url(' + e + '); background-size: cover; background-position: 50% 50%;"></div>')), t.remove();
            });
    var d,
        m,
        p,
        g,
        y,
        v,
        w,
        S,
        T,
        I,
        k,
        C,
        P,
        D,
        F,
        V,
        x,
        L,
        _,
        R,
        M,
        N = (function (i) {
            if ("function" != typeof i.fn.countdown) throw new Error("mrCountdown requires jquery.countdown.js (https://github.com/hilios/jQuery.countdown/)");
            var t = "mrCountdown",
                r = "mr.countdown",
                e = i.fn[t],
                n = { LOAD_DATA_API: "load.mr.countdown.data-api" },
                o = "days",
                a = "Timer Done",
                s = "%Y",
                l = "%m",
                u = "%w",
                c = "%D",
                h = "%H",
                f = "%M",
                d = "%S",
                m = "%!Y:Year,Years;",
                p = "%!m:Month,Months;",
                g = "%!w:Week,Weeks;",
                y = "%!d:Day,Days;",
                v = "%!H:Hour,Hours;",
                w = "%!M:Minute,Minutes;",
                b = "%!S:Second,Seconds;",
                E = "d-none",
                A = "[data-countdown-date]",
                S = "[data-active-state]",
                T = "[data-elapsed-state]",
                I = "data-countdown-date",
                k = "data-days-text",
                O = "data-date-format",
                j = "data-date-fallback",
                C = "[data-years]",
                P = "[data-months]",
                D = "[data-weeks]",
                F = "[data-days]",
                V = "[data-hours]",
                x = "[data-minutes]",
                L = "[data-seconds]",
                _ = "[data-years-label]",
                R = "[data-months-label]",
                M = "[data-weeks-label]",
                N = "[data-days-label]",
                q = "[data-hours-label]",
                Q = "[data-minutes-label]",
                H = "[data-seconds-label]",
                z = "format",
                B = "detailed",
                W = (function () {
                    function n(t) {
                        this.element = t;
                        var e = i(t);
                        (this.date = e.attr(I)),
                            (this.daysText = e.attr(k) || o),
                            (this.countdownText = "%D " + this.daysText + " %H:%M:%S"),
                            (this.dateFormat = e.attr(O) || this.countdownText),
                            (this.fallback = e.attr(j) || a),
                            (this.detailed = null !== this.element.getAttribute("data-" + B)),
                            this.detailed &&
                                ((this.years = { show: e.find(C).length, element: e.find(C), format: e.find(C).data(z) || s, label: { show: e.find(_).length, element: e.find(_), format: e.find(_).data(z) || m } }),
                                (this.months = { show: e.find(P).length, element: e.find(P), format: e.find(P).data(z) || l, label: { show: e.find(R).length, element: e.find(R), format: e.find(R).data(z) || p } }),
                                (this.weeks = { show: e.find(D).length, element: e.find(D), format: e.find(D).data(z) || u, label: { show: e.find(M).length, element: e.find(M), format: e.find(M).data(z) || g } }),
                                (this.days = { show: e.find(F).length, element: e.find(F), format: e.find(F).data(z) || c, label: { show: e.find(N).length, element: e.find(N), format: e.find(N).data(z) || y } }),
                                (this.hours = { show: e.find(V).length, element: e.find(V), format: e.find(V).data(z) || h, label: { show: e.find(q).length, element: e.find(q), format: e.find(q).data(z) || v } }),
                                (this.minutes = { show: e.find(x).length, element: e.find(x), format: e.find(x).data(z) || f, label: { show: e.find(Q).length, element: e.find(Q), format: e.find(Q).data(z) || w } }),
                                (this.seconds = { show: e.find(L).length, element: e.find(L), format: e.find(L).data(z) || d, label: { show: e.find(H).length, element: e.find(H), format: e.find(H).data(z) || b } })),
                            this.initCountdown();
                    }
                    return (
                        (n.prototype.initCountdown = function () {
                            var e = this,
                                n = i(this.element);
                            this.detailed
                                ? n.countdown(this.date, function (t) {
                                      t.elapsed
                                          ? (n.find(T).removeClass(E), n.find(S).addClass(E))
                                          : (e.years.show && e.years.element.text(t.strftime(e.years.format)),
                                            e.years.label.show && e.years.label.element.text(t.strftime(e.years.label.format)),
                                            e.months.show && e.months.element.text(t.strftime(e.months.format)),
                                            e.months.label.show && e.months.label.element.text(t.strftime(e.months.label.format)),
                                            e.weeks.show && e.weeks.element.text(t.strftime(e.weeks.format)),
                                            e.weeks.label.show && e.weeks.label.element.text(t.strftime(e.weeks.label.format)),
                                            e.days.show && e.days.element.text(t.strftime(e.days.format)),
                                            e.days.label.show && e.days.label.element.text(t.strftime(e.days.label.format)),
                                            e.hours.show && e.hours.element.text(t.strftime(e.hours.format)),
                                            e.hours.label.show && e.hours.label.element.text(t.strftime(e.hours.label.format)),
                                            e.minutes.show && e.minutes.element.text(t.strftime(e.minutes.format)),
                                            e.minutes.label.show && e.minutes.label.element.text(t.strftime(e.minutes.label.format)),
                                            e.seconds.show && e.seconds.element.text(t.strftime(e.seconds.format)),
                                            e.seconds.label.show && e.seconds.label.element.text(t.strftime(e.seconds.label.format)));
                                  })
                                : i(this.element).countdown(this.date, function (t) {
                                      t.elapsed ? n.text(e.fallback) : n.text(t.strftime(e.dateFormat));
                                  });
                        }),
                        (n.jQueryInterface = function () {
                            return this.each(function () {
                                var t = i(this),
                                    e = t.data(r);
                                e || ((e = new n(this)), t.data(r, e));
                            });
                        }),
                        U(n, null, [
                            {
                                key: "VERSION",
                                get: function () {
                                    return "1.1.0";
                                },
                            },
                        ]),
                        n
                    );
                })();
            return (
                i(window).on(n.LOAD_DATA_API, function () {
                    for (var t = i.makeArray(i(A)), e = t.length; e--; ) {
                        var n = i(t[e]);
                        W.jQueryInterface.call(n, n.data());
                    }
                }),
                (i.fn[t] = W.jQueryInterface),
                (i.fn[t].Constructor = W),
                (i.fn[t].noConflict = function () {
                    return (i.fn[t] = e), W.jQueryInterface;
                }),
                W
            );
        })(O),
        q = function () {
            return (q =
                Object.assign ||
                function (t) {
                    for (var e, n = 1, i = arguments.length; n < i; n++) for (var r in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t;
                }).apply(this, arguments);
        },
        Q = (function () {
            function t(t, e, n) {
                var u = this;
                (this.target = t),
                    (this.endVal = e),
                    (this.options = n),
                    (this.version = "2.0.4"),
                    (this.defaults = { startVal: 0, decimalPlaces: 0, duration: 2, useEasing: !0, useGrouping: !0, smartEasingThreshold: 999, smartEasingAmount: 333, separator: ",", decimal: ".", prefix: "", suffix: "" }),
                    (this.finalEndVal = null),
                    (this.useEasing = !0),
                    (this.countDown = !1),
                    (this.error = ""),
                    (this.startVal = 0),
                    (this.paused = !0),
                    (this.count = function (t) {
                        u.startTime || (u.startTime = t);
                        var e = t - u.startTime;
                        (u.remaining = u.duration - e),
                            u.useEasing
                                ? u.countDown
                                    ? (u.frameVal = u.startVal - u.easingFn(e, 0, u.startVal - u.endVal, u.duration))
                                    : (u.frameVal = u.easingFn(e, u.startVal, u.endVal - u.startVal, u.duration))
                                : u.countDown
                                ? (u.frameVal = u.startVal - (u.startVal - u.endVal) * (e / u.duration))
                                : (u.frameVal = u.startVal + (u.endVal - u.startVal) * (e / u.duration)),
                            u.countDown ? (u.frameVal = u.frameVal < u.endVal ? u.endVal : u.frameVal) : (u.frameVal = u.frameVal > u.endVal ? u.endVal : u.frameVal),
                            (u.frameVal = Math.round(u.frameVal * u.decimalMult) / u.decimalMult),
                            u.printValue(u.frameVal),
                            e < u.duration ? (u.rAF = requestAnimationFrame(u.count)) : null !== u.finalEndVal ? u.update(u.finalEndVal) : u.callback && u.callback();
                    }),
                    (this.formatNumber = function (t) {
                        var e,
                            n,
                            i,
                            r,
                            o,
                            a = t < 0 ? "-" : "";
                        if (((e = Math.abs(t).toFixed(u.options.decimalPlaces)), (i = (n = (e += "").split("."))[0]), (r = 1 < n.length ? u.options.decimal + n[1] : ""), u.options.useGrouping)) {
                            o = "";
                            for (var s = 0, l = i.length; s < l; ++s) 0 !== s && s % 3 == 0 && (o = u.options.separator + o), (o = i[l - s - 1] + o);
                            i = o;
                        }
                        return (
                            u.options.numerals &&
                                u.options.numerals.length &&
                                ((i = i.replace(/[0-9]/g, function (t) {
                                    return u.options.numerals[+t];
                                })),
                                (r = r.replace(/[0-9]/g, function (t) {
                                    return u.options.numerals[+t];
                                }))),
                            a + u.options.prefix + i + r + u.options.suffix
                        );
                    }),
                    (this.easeOutExpo = function (t, e, n, i) {
                        return (n * (1 - Math.pow(2, (-10 * t) / i)) * 1024) / 1023 + e;
                    }),
                    (this.options = q({}, this.defaults, n)),
                    (this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber),
                    (this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo),
                    (this.startVal = this.validateValue(this.options.startVal)),
                    (this.frameVal = this.startVal),
                    (this.endVal = this.validateValue(e)),
                    (this.options.decimalPlaces = Math.max(this.options.decimalPlaces)),
                    (this.decimalMult = Math.pow(10, this.options.decimalPlaces)),
                    this.resetDuration(),
                    (this.options.separator = String(this.options.separator)),
                    (this.useEasing = this.options.useEasing),
                    "" === this.options.separator && (this.options.useGrouping = !1),
                    (this.el = "string" == typeof t ? document.getElementById(t) : t),
                    this.el ? this.printValue(this.startVal) : (this.error = "[CountUp] target is null or undefined");
            }
            return (
                (t.prototype.determineDirectionAndSmartEasing = function () {
                    var t = this.finalEndVal ? this.finalEndVal : this.endVal;
                    this.countDown = this.startVal > t;
                    var e = t - this.startVal;
                    if (Math.abs(e) > this.options.smartEasingThreshold) {
                        this.finalEndVal = t;
                        var n = this.countDown ? 1 : -1;
                        (this.endVal = t + n * this.options.smartEasingAmount), (this.duration = this.duration / 2);
                    } else (this.endVal = t), (this.finalEndVal = null);
                    this.finalEndVal ? (this.useEasing = !1) : (this.useEasing = this.options.useEasing);
                }),
                (t.prototype.start = function (t) {
                    this.error || ((this.callback = t), 0 < this.duration ? (this.determineDirectionAndSmartEasing(), (this.paused = !1), (this.rAF = requestAnimationFrame(this.count))) : this.printValue(this.endVal));
                }),
                (t.prototype.pauseResume = function () {
                    this.paused
                        ? ((this.startTime = null), (this.duration = this.remaining), (this.startVal = this.frameVal), this.determineDirectionAndSmartEasing(), (this.rAF = requestAnimationFrame(this.count)))
                        : cancelAnimationFrame(this.rAF),
                        (this.paused = !this.paused);
                }),
                (t.prototype.reset = function () {
                    cancelAnimationFrame(this.rAF), (this.paused = !0), this.resetDuration(), (this.startVal = this.validateValue(this.options.startVal)), (this.frameVal = this.startVal), this.printValue(this.startVal);
                }),
                (t.prototype.update = function (t) {
                    cancelAnimationFrame(this.rAF),
                        (this.startTime = null),
                        (this.endVal = this.validateValue(t)),
                        this.endVal !== this.frameVal && ((this.startVal = this.frameVal), this.finalEndVal || this.resetDuration(), this.determineDirectionAndSmartEasing(), (this.rAF = requestAnimationFrame(this.count)));
                }),
                (t.prototype.printValue = function (t) {
                    var e = this.formattingFn(t);
                    "INPUT" === this.el.tagName ? (this.el.value = e) : "text" === this.el.tagName || "tspan" === this.el.tagName ? (this.el.textContent = e) : (this.el.innerHTML = e);
                }),
                (t.prototype.ensureNumber = function (t) {
                    return "number" == typeof t && !isNaN(t);
                }),
                (t.prototype.validateValue = function (t) {
                    var e = Number(t);
                    return this.ensureNumber(e) ? e : ((this.error = "[CountUp] invalid start or end value: " + t), null);
                }),
                (t.prototype.resetDuration = function () {
                    (this.startTime = null), (this.duration = 1e3 * Number(this.options.duration)), (this.remaining = this.duration);
                }),
                t
            );
        })(),
        H = (function (i) {
            if (void 0 === b) throw new Error("mrCountup requires scrollMonitor.js (https://github.com/stutrek/scrollMonitor)");
            var t = "mrCountup",
                r = "mr.countup",
                e = "." + r,
                n = i.fn[t],
                o = "start",
                a = "end",
                s = "duration",
                l = "grouping",
                u = "separator",
                c = "decimal-character",
                h = "decimal-places",
                f = "prefix",
                d = "suffix",
                m = "easing",
                p = { LOAD_DATA_API: "load" + e + ".data-api", RESIZE: "resize" + e },
                g = "[data-countup]",
                y = (function () {
                    function n(t) {
                        var e = i(t);
                        (this.start = parseFloat(e.data(o), 10) || 0),
                            (this.end = parseFloat(e.data(a), 10) || parseFloat(e.text(), 10)),
                            (this.duration = parseFloat(e.data(s), 10) || 2.5),
                            (this.grouping = !0 === e.data(l) || !1),
                            (this.separator = e.data(u) || ","),
                            (this.decimalCharacter = e.data(c) || "."),
                            (this.decimalPlaces = parseInt(e.data(h), 10) || 0),
                            (this.prefix = e.data(f) || ""),
                            (this.suffix = e.data(d) || "");
                        var n = e.data(m);
                        (this.easing = !1 !== n || n), (this.element = t), this.initWatcher(t), this.startCounting();
                    }
                    var t = n.prototype;
                    return (
                        (t.initWatcher = function (t) {
                            var e = this;
                            this.CountUp = new Q(t, this.end, {
                                startVal: this.start,
                                decimalPlaces: this.decimalPlaces,
                                duration: this.duration,
                                useEasing: this.easing,
                                useGrouping: this.grouping,
                                separator: this.separator,
                                decimal: this.decimalCharacter,
                                prefix: this.prefix,
                                suffix: this.suffix,
                            });
                            var n = b.create(t);
                            (this.watcher = n).stateChange(function () {
                                e.startCounting();
                            });
                        }),
                        (t.startCounting = function () {
                            if (this.watcher.isFullyInViewport) {
                                if (this.CountUp.error) throw new Error(this.CountUp.error);
                                this.CountUp.start();
                            }
                        }),
                        (n.jQueryInterface = function () {
                            return this.each(function () {
                                var t = i(this),
                                    e = t.data(r);
                                e || ((e = new n(this)), t.data(r, e));
                            });
                        }),
                        U(n, null, [
                            {
                                key: "VERSION",
                                get: function () {
                                    return "1.1.0";
                                },
                            },
                        ]),
                        n
                    );
                })();
            return (
                i(window).on(p.LOAD_DATA_API, function () {
                    for (var t = i.makeArray(i(g)), e = t.length; e--; ) {
                        var n = i(t[e]);
                        y.jQueryInterface.call(n, n.data());
                    }
                }),
                (i.fn[t] = y.jQueryInterface),
                (i.fn[t].Constructor = y),
                (i.fn[t].noConflict = function () {
                    return (i.fn[t] = n), y.jQueryInterface;
                }),
                y
            );
        })(O),
        z =
            ((m = "script"),
            (d = O)("body").tooltip({ selector: '[data-toggle="tooltip"]', container: "body" }),
            d("body").popover({ selector: '[data-toggle="popover"]', container: "body" }),
            d(".toast").toast(),
            {
                version: "1.2.0",
                selector: { RECAPTCHA: "[data-recaptcha]" },
                activateIframeSrc: function (t) {
                    var e = d(t);
                    e.attr("data-src") && e.attr("src", e.attr("data-src"));
                },
                idleIframeSrc: function (t) {
                    var e = d(t);
                    e.attr("data-src", e.attr("src")).attr("src", "");
                },
                forEach: function (t, e, n) {
                    if (t)
                        if (t.length) for (var i = 0; i < t.length; i += 1) e.call(n, i, t[i]);
                        else (t[0] || z.isElement(t)) && e.call(n, 0, t);
                },
                dedupArray: function (t) {
                    return t.reduce(
                        function (t, e) {
                            var n = JSON.stringify(e);
                            return -1 === t.temp.indexOf(n) && (t.out.push(e), t.temp.push(n)), t;
                        },
                        { temp: [], out: [] }
                    ).out;
                },
                isElement: function (t) {
                    return !(!t || 1 !== t.nodeType);
                },
                getFuncFromString: function (t, e) {
                    var n = t || null;
                    if ("function" == typeof n) return t;
                    if ("string" == typeof n) {
                        if (!n.length) return null;
                        for (var i = e || window, r = n.split("."); r.length; ) {
                            var o = r.shift();
                            if (void 0 === i[o]) return null;
                            i = i[o];
                        }
                        if ("function" == typeof i) return i;
                    }
                    return null;
                },
                getScript: function (t, n) {
                    var i = document.createElement(m),
                        e = document.getElementsByTagName(m)[0];
                    (i.async = 1),
                        (i.defer = 1),
                        (i.onreadystatechange = function (t, e) {
                            (e || !i.readyState || /loaded|complete/.test(i.readyState)) && ((i.onload = null), (i.onreadystatechange = null), (i = void 0), !e && n && "function" == typeof n && n());
                        }),
                        (i.onload = i.onreadystatechange),
                        (i.src = t),
                        e.parentNode.insertBefore(i, e);
                },
                isIE: function () {
                    var t = window.navigator.userAgent,
                        e = /MSIE|Trident/.test(t);
                    return e;
                },
            }),
        B =
            ((g = "mrDropdownGrid"),
            (v = "." + (y = "mr.dropdownGrid")),
            (w = ".data-api"),
            (S = (p = O).fn[g]),
            (T = new RegExp("38|40|27")),
            (I = { SHOW: "show" }),
            (k = {
                LOAD_DATA_API: "load" + v + w,
                RESIZE: "resize" + v,
                HIDE: "hide" + v,
                HIDDEN: "hidden" + v,
                SHOW: "show" + v,
                SHOWN: "shown" + v,
                CLICK: "click" + v,
                MOUSE_ENTER: "mouseenter" + v,
                MOUSE_LEAVE: "mouseleave" + v,
                CLICK_DATA_API: "click" + v + w,
                KEYDOWN_DATA_API: "keydown" + v + w,
                KEYUP_DATA_API: "keyup" + v + w,
            }),
            (C = '[data-toggle="dropdown-grid"]'),
            (P = ".dropdown form"),
            (F = D = ".dropdown-menu"),
            (V = "[data-dropdown-content]"),
            (x = ".navbar-nav"),
            (L = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"),
            (_ = "data-hover"),
            (R = "data-dropdown-grid-hover"),
            (M = (function () {
                function l(t) {
                    (this.ticking = !1),
                        (this.isActive = !1),
                        (this.element = t),
                        this.getOptions(),
                        (this.parent = l.getParentFromElement(this.element)),
                        (this.menu = this.getMenuElement()),
                        (this.container = this.getContainerElement()),
                        (this.content = this.getContentElement()),
                        (this.isSubmenu = this.hasParentMenu()),
                        this.isSubmenu && (this.siblingMenus = this.getSiblingMenus()),
                        (this.submenus = this.getSubmenus()),
                        (this.hover = this.options.hover),
                        this.addEventListeners(),
                        this.setResizeEvent();
                }
                var t = l.prototype;
                return (
                    (t.getOptions = function () {
                        this.options || ((this.options = {}), (this.options.hover = ("true" === this.element.getAttribute(_) || "true" === document.body.getAttribute(R)) && "false" !== this.element.getAttribute(_)));
                    }),
                    (t.toggle = function (t) {
                        if ((this.getParentMenu(), !this.element.disabled && !p(this.element).hasClass(I.DISABLED))) {
                            this.isActive = p(this.menu).hasClass(I.SHOW);
                            var e = this.isActive,
                                n = !this.isActive;
                            if ((this.isSubmenu || l.clearMenus(), (this.isSubmenu || !e) && (this.isSubmenu || !n || !t || t.type !== k.MOUSE_LEAVE))) {
                                if (this.isSubmenu && this.isActive) return l.clearMenus(null, this.element), void l.clearMenus(null, this.submenus);
                                this.isSubmenu && !this.isActive && l.clearMenus(null, this.siblingMenus);
                                var i = { relatedTarget: this.element },
                                    r = p.Event(k.SHOW, i);
                                p(this.parent).trigger(r),
                                    r.isDefaultPrevented() ||
                                        ("ontouchstart" in document.documentElement && 0 === p(this.parent).closest(x).length && p(document.body).children().on("mouseover", null, p.noop),
                                        this.element.focus(),
                                        this.element.setAttribute("aria-expanded", !0),
                                        p(this.menu).toggleClass(I.SHOW),
                                        this.updatePosition(),
                                        (this.isActive = !0),
                                        p(this.parent).toggleClass(I.SHOW).trigger(p.Event(k.SHOWN, i)));
                            }
                        }
                    }),
                    (t.updatePosition = function (t) {
                        var e = t || window.innerWidth,
                            n = B.getDimensionsFromElement(this.element);
                        this.positionContainer(n.offsetLeft), this.positionContent(e, n.offsetLeft);
                    }),
                    (t.positionContainer = function (t) {
                        if (!this.container) throw new TypeError("No element matching .dropdown-menu.container found.");
                        this.container.style.left = "-" + t + "px";
                    }),
                    (t.positionContent = function (t, e) {
                        if (!this.content) throw new TypeError("No [data-dropdown-content] element was found.");
                        var n,
                            i = B.getDimensionsFromElement(this.content).width;
                        if (this.isSubmenu) {
                            this.getParentMenu();
                            var r = B.getDimensionsFromElement(this.parentMenu.content);
                            n = r.offsetLeft + r.width + i <= t ? r.offsetLeft + r.width : r.offsetLeft >= i ? r.offsetLeft - i : 0;
                        } else n = t <= i + e ? t - i : e;
                        var o = Math.round(n) + "px";
                        this.content.style.left = o;
                    }),
                    (t.setResizeEvent = function () {
                        var t = this;
                        p(window).on(k.RESIZE, function () {
                            t.ticking ||
                                (window.requestAnimationFrame(function () {
                                    t.updatePosition(), (t.ticking = !1);
                                }),
                                (t.ticking = !0));
                        });
                    }),
                    (t.getMenuElement = function () {
                        return this.menu || (this.parent && (this.menu = this.parent.querySelector(D))), this.menu;
                    }),
                    (t.getContainerElement = function () {
                        return this.container || (this.parent && (this.container = this.parent.querySelector("" + D + F))), this.container;
                    }),
                    (t.getContentElement = function () {
                        return this.content || (this.parent && (this.content = this.container.querySelector(V))), this.content;
                    }),
                    (t.hasParentMenu = function () {
                        return 0 < p(this.element).closest(V).length;
                    }),
                    (t.getParentMenu = function () {
                        this.isSubmenu && !this.parentMenu && (this.parentMenu = p(this.parent).closest(D).siblings(C).data(y));
                    }),
                    (t.getSiblingMenus = function () {
                        return p(this.element).closest(V).get(0).querySelectorAll(C);
                    }),
                    (t.getSubmenus = function () {
                        var t = this.content.querySelectorAll(C);
                        return (this.isParent = 0 !== t.length), t;
                    }),
                    (t.addEventListeners = function () {
                        var e = this;
                        p(this.element).on(k.CLICK, function (t) {
                            t.preventDefault(), t.stopPropagation(), e.toggle();
                        }),
                            this.hover &&
                                p(this.parent).on(k.MOUSE_ENTER + " " + k.MOUSE_LEAVE, function (t) {
                                    t.preventDefault(), t.stopPropagation(), (t.type + v === k.MOUSE_ENTER && e.isActive) || (t.type + v === k.MOUSE_LEAVE && !e.isActive) || e.toggle(t);
                                });
                    }),
                    (l.getDimensionsFromElement = function (t) {
                        if (t && z.isElement(t)) {
                            var e = t.getBoundingClientRect();
                            return (e.offsetLeft = Math.round(e.left + window.pageXOffset - document.documentElement.clientLeft)), e;
                        }
                        throw new TypeError("Can't get a measurement from a non-element");
                    }),
                    (l.getParentFromElement = function (t) {
                        return t.parentNode;
                    }),
                    (l.clearMenus = function (s, t) {
                        var e;
                        (!s || (3 !== s.which && "keyup" !== s.type) || 9 === s.which) &&
                            ((e = t && "object" == typeof t ? t : document.querySelectorAll(C)),
                            z.forEach(e, function (t, e) {
                                var n = l.getParentFromElement(e),
                                    i = p(e).data(y),
                                    r = { relatedTarget: e };
                                if ((s && "click" === s.type && (r.clickEvent = s), i)) {
                                    var o = i.menu;
                                    if (
                                        p(n).hasClass(I.SHOW) &&
                                        !(
                                            (s && (("click" === s.type && /input|textarea/i.test(s.target.tagName)) || ("keyup" === s.type && 9 === s.which)) && p.contains(n, s.target)) ||
                                            (s && "click" === s.type && (p.contains(i.content, s.target) || i.content.isSameNode(s.target)))
                                        )
                                    ) {
                                        var a = p.Event(k.HIDE, r);
                                        p(n).trigger(a),
                                            a.isDefaultPrevented() ||
                                                ("ontouchstart" in document.documentElement && p(document.body).children().off("mouseover", null, p.noop),
                                                e.setAttribute("aria-expanded", "false"),
                                                (i.isActive = !1),
                                                p(o).removeClass(I.SHOW),
                                                p(n).removeClass(I.SHOW).trigger(p.Event(k.HIDDEN, r)));
                                    }
                                }
                            }));
                    }),
                    (l.jQueryInterface = function (n) {
                        return this.each(function () {
                            var t = p(this),
                                e = t.data(y);
                            if ((e || ((e = new l(this)), t.data(y, e)), "string" == typeof n)) {
                                if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                                e[n]();
                            }
                        });
                    }),
                    (l.dataApiKeydownHandler = function (t) {
                        if (
                            (/input|textarea/i.test(t.target.tagName) ? (32 !== t.which && 27 === t.which) || !((40 !== t.which && 38 !== t.which) || p(t.target).closest(D).length) : T.test(t.which)) &&
                            (t.preventDefault(), t.stopPropagation(), !this.disabled && !p(this).hasClass(I.DISABLED))
                        ) {
                            var e = l.getParentFromElement(this),
                                n = p(e).hasClass(I.SHOW);
                            if ((n || (27 === t.which && 32 === t.which)) && (!n || (27 !== t.which && 32 !== t.which))) {
                                var i = [].slice.call(e.querySelectorAll(L));
                                if (0 !== i.length) {
                                    var r = i.indexOf(t.target);
                                    38 === t.which && 0 < r && (r -= 1), 40 === t.which && r < i.length - 1 && (r += 1), r < 0 && (r = 0), i[r].focus();
                                }
                            } else {
                                if (27 === t.which) {
                                    var o = e.querySelector(C);
                                    p(o).trigger("focus");
                                }
                                p(this).trigger("click");
                            }
                        }
                    }),
                    U(l, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "1.0.0";
                            },
                        },
                    ]),
                    l
                );
            })()),
            p(document)
                .on(k.KEYDOWN_DATA_API, C, M.dataApiKeydownHandler)
                .on(k.KEYDOWN_DATA_API, D, M.dataApiKeydownHandler)
                .on(k.CLICK_DATA_API + " " + k.KEYUP_DATA_API, M.clearMenus)
                .on(k.CLICK_DATA_API, P, function (t) {
                    t.stopPropagation();
                }),
            p(document).ready(function () {
                for (var t = p.makeArray(p(C)), e = t.length; e--; ) {
                    var n = p(t[e]);
                    M.jQueryInterface.call(n, n.data());
                }
            }),
            (p.fn[g] = M.jQueryInterface),
            (p.fn[g].Constructor = M),
            (p.fn[g].noConflict = function () {
                return (p.fn[g] = S), M.jQueryInterface;
            }),
            M);
    !(function () {
        var n = "href",
            i = "fade-page",
            r = 500,
            t = document.getElementsByClassName(i);
        function e(t) {
            if (!(t.ctrlKey || t.shiftKey || t.metaKey || (t.button && 1 === t.button))) {
                t.preventDefault(), t.stopPropagation(), document.body.classList.add(i);
                var e = this.getAttribute(n);
                setTimeout(function () {
                    "" !== e && "#" !== e && (window.location.href = e);
                }, r);
            }
        }
        for (var o = 0; o < t.length; o += 1) t[o].addEventListener("click", e, !1);
    })();
    var W = (function (i) {
        if (void 0 === s) throw new Error("mrFlatpickr requires flatpickr.js (https://github.com/flatpickr/flatpickr)");
        var t = "mrFlatpickr",
            r = "mr.flatpickr",
            e = i.fn[t],
            n = { LOAD_DATA_API: "load.mr.flatpickr.data-api" },
            o = "[data-flatpickr]",
            a = (function () {
                function n(t) {
                    (this.element = t), this.initflatpickr();
                }
                return (
                    (n.prototype.initflatpickr = function () {
                        var t = i(this.element).data();
                        this.instance = s(this.element, t);
                    }),
                    (n.jQueryInterface = function () {
                        return this.each(function () {
                            var t = i(this),
                                e = t.data(r);
                            e || ((e = new n(this)), t.data(r, e));
                        });
                    }),
                    U(n, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "1.0.0";
                            },
                        },
                    ]),
                    n
                );
            })();
        return (
            i(window).on(n.LOAD_DATA_API, function () {
                for (var t = i.makeArray(i(o)), e = t.length; e--; ) {
                    var n = i(t[e]);
                    a.jQueryInterface.call(n, n.data());
                }
            }),
            (i.fn[t] = a.jQueryInterface),
            (i.fn[t].Constructor = a),
            (i.fn[t].noConflict = function () {
                return (i.fn[t] = e), a.jQueryInterface;
            }),
            a
        );
    })(O);
    $(document).on("shown.bs.modal layoutComplete", function (t) {
        $(t.target)
            .find("[data-flickity]")
            .each(function (t, e) {
                var n = $(e);
                n.data().flickity.isInitActivated && n.flickity("resize");
            });
    });
    var G,
        K = (function (i) {
            if (!(z && "1.2.0" <= z.version)) throw new Error("mrUtil >= version 1.2.0 is required.");
            var t = "mrRecaptchav2",
                r = "mr.recaptchav2",
                e = i.fn[t],
                o = { RECAPTCHAV2: "https://www.google.com/recaptcha/api.js?onload=mrRecaptchav2Init&render=explicit" },
                a = "[data-recaptcha]",
                s = "form",
                l = "invisible",
                u = [],
                c = !1,
                h = (function () {
                    function n(t) {
                        (this.element = t), (this.form = this.getForm()), (this.isReady = !1), (this.isValid = !1), (this.options = i(this.element).data()), (this.invisible = this.options.size === l), (this.id = null), u.push(this);
                    }
                    var t = n.prototype;
                    return (
                        (t.init = function () {
                            var t = this;
                            "" === this.element.innerHTML.replace(/[\s\xA0]+/g, "") &&
                                ((this.id = grecaptcha.render(this.element, {
                                    sitekey: this.options.sitekey,
                                    theme: this.options.theme,
                                    size: this.options.size,
                                    badge: this.options.badge,
                                    tabindex: this.options.tabindex,
                                    callback: function () {
                                        t.validate();
                                    },
                                    "expired-callback": function () {
                                        t.invalidate();
                                    },
                                })),
                                (this.isReady = !0));
                        }),
                        (t.validate = function () {
                            (this.isValid = !0), this.invisible && this.form && i(this.form).trigger("submit");
                        }),
                        (t.invalidate = function () {
                            this.isValid = !1;
                        }),
                        (t.checkValidity = function () {
                            return !(!this.isReady || !this.isValid);
                        }),
                        (t.execute = function () {
                            this.isReady && this.invisible && grecaptcha.execute(this.id);
                        }),
                        (t.reset = function () {
                            this.isReady && (grecaptcha.reset(this.id), (this.isValid = !1));
                        }),
                        (t.getForm = function () {
                            var t = i(this.element).closest(s);
                            return t.length ? t.get(0) : null;
                        }),
                        (n.getRecaptchaFromForm = function (t) {
                            if (z.isElement(t)) {
                                var e = t.querySelector(a);
                                return (e && i(e).data(r)) || null;
                            }
                            throw new TypeError("Form argument passed to getRecaptchaFromForm is not an element.");
                        }),
                        (n.jQueryInterface = function () {
                            return this.each(function () {
                                var t = i(this),
                                    e = t.data(r);
                                e || ((e = new n(this)), t.data(r, e));
                            });
                        }),
                        U(n, null, [
                            {
                                key: "VERSION",
                                get: function () {
                                    return "1.0.0";
                                },
                            },
                            {
                                key: "ready",
                                get: function () {
                                    return c;
                                },
                            },
                            {
                                key: "instances",
                                get: function () {
                                    return u;
                                },
                            },
                            {
                                key: "apiReady",
                                set: function (t) {
                                    !0 === t &&
                                        !1 === c &&
                                        z.forEach(n.instances, function (t, e) {
                                            e.init();
                                        }),
                                        (c = !0);
                                },
                            },
                        ]),
                        n
                    );
                })();
            return (
                (window.mrRecaptchav2Init = function () {
                    K.apiReady = !0;
                }),
                i(document).ready(function () {
                    var t = i.makeArray(i(a));
                    if (0 < t.length) {
                        z.getScript(o.RECAPTCHAV2);
                        for (var e = t.length; e--; ) {
                            var n = i(t[e]);
                            h.jQueryInterface.call(n, n.data());
                        }
                    }
                }),
                (i.fn[t] = h.jQueryInterface),
                (i.fn[t].Constructor = h),
                (i.fn[t].noConflict = function () {
                    return (i.fn[t] = e), h.jQueryInterface;
                }),
                h
            );
        })(jQuery),
        Y = (function (r) {
            if (!(z && "1.2.0" <= z.version)) throw new Error("mrUtil >= version 1.2.0 is required.");
            var t = "mrFormEmail",
                i = "mr.formEmail",
                e = "." + i,
                n = r.fn[t],
                o = "btn-loading-animate",
                a = "was-validated",
                s = "d-none",
                l = "action",
                u = "disabled",
                c = "data-feedback-delay",
                h = "data-success-redirect",
                f = "[data-form-email]",
                d = "[data-success-message]",
                m = "[data-error-message]",
                p = 'button[type="submit"]',
                g = "span",
                y = "input,textarea,select",
                v = { SENT: "sent" + e, LOAD_DATA_API: "load" + e + ".data-api", SUBMIT: "submit" },
                w = "data-loading-text",
                b = "Sending",
                E = "forms/mail.php",
                A = 5e3,
                S = "Form submission error",
                T = "success",
                I = "error",
                k = (function () {
                    function n(t) {
                        (this.form = t), (this.action = this.form.getAttribute(l) || E), (this.feedback = this.getFeedbackElements()), this.getRecaptcha(), this.initSubmitButton(), this.setSubmitEvent();
                    }
                    var t = n.prototype;
                    return (
                        (t.submitForm = function () {
                            this.hideAllFeedback(), this.validateForm() && this.ajaxSubmit();
                        }),
                        (t.validateForm = function () {
                            var t = this.form.checkValidity();
                            if (this.recaptcha)
                                if (this.recaptcha.invisible) {
                                    if (t && !this.recaptcha.checkValidity()) return this.recaptcha.execute(), !1;
                                } else !1 === this.recaptcha.checkValidity() && (t = !1);
                            return t ? (this.form.classList.remove(a), !0) : (clearTimeout(this.feedbackTimeout), this.form.classList.add(a), this.showFeedback(I, this.validationErrorMessage), !1);
                        }),
                        (t.ajaxSubmit = function () {
                            var t = r(this.form).serializeArray();
                            t.push({ name: "url", value: window.location.href }),
                                O.ajax({ context: this, data: t, dataType: "json", error: this.showFeedback, success: this.processResponse, type: "POST", url: this.action }),
                                this.toggleFormLoading(!0);
                        }),
                        (t.initSubmitButton = function () {
                            return (
                                this.submitButton || (this.submitButton = this.form.querySelector(p)),
                                (this.submitButtonSpan = this.submitButton.querySelector(g)),
                                (this.loadingText = this.submitButton.getAttribute(w) || b),
                                (this.originalSubmitText = this.submitButtonSpan.textContent),
                                this.submitButton
                            );
                        }),
                        (t.processResponse = function (t) {
                            var e = this,
                                n = t.status === T;
                            this.toggleFormLoading(!1), this.recaptcha && this.recaptcha.reset(), r(this.form).trigger(r.Event(v.SENT));
                            var i = this.form.getAttribute(h);
                            n && i && "" !== i
                                ? (window.location = i)
                                : n &&
                                  (this.form.reset(),
                                  (this.feedbackTimeout = setTimeout(function () {
                                      return e.hideAllFeedback();
                                  }, this.feedbackDelay))),
                                i || this.showFeedback(t.status, t.message),
                                t.errorDetail && console.error(t.errorName || S, 0 === t.errorDetail.indexOf("{") ? JSON.parse(t.errorDetail) : t.errorDetail);
                        }),
                        (t.showFeedback = function (t, e, n) {
                            this.toggleFormLoading(!1),
                                "object" == typeof t && t.statusText
                                    ? (clearTimeout(this.feedbackTimeout), (this.feedback.error.innerHTML = (n || e) + ': <em>"' + this.action + '"</em> (' + t.status + " " + e + ")"), this.feedback.error.classList.remove(s))
                                    : ((this.feedback[t].innerHTML = e), this.feedback[t].classList.remove(s));
                        }),
                        (t.hideAllFeedback = function () {
                            this.feedback.success.classList.add(s), this.feedback.error.classList.add(s);
                        }),
                        (t.getFeedbackElements = function () {
                            if (!this.feedback) {
                                (this.feedback = { success: this.form.querySelector(d), error: this.form.querySelector(m) }), (this.validationErrorMessage = this.feedback.error.innerHTML);
                                var t = this.form.getAttribute(c) || A;
                                (this.feedbackDelay = parseInt(t, 10)), (this.feedbackTimeout = null);
                            }
                            return this.feedback;
                        }),
                        (t.getRecaptcha = function () {
                            if (this.form.querySelector(z.selector.RECAPTCHA)) {
                                if (!K) throw new Error("mrRecaptcha.js is required to handle the reCAPTCHA element in this form.");
                                this.recaptcha = K.getRecaptchaFromForm(this.form);
                            }
                        }),
                        (t.toggleFormLoading = function (t) {
                            this.toggleSubmitButtonLoading(t), n.toggleDisabled(this.form.querySelectorAll(y), t);
                        }),
                        (t.toggleSubmitButtonLoading = function (t) {
                            this.toggleSubmitButtonText(t), this.toggleSubmitButtonAnimation(t), n.toggleDisabled(this.submitButton, t);
                        }),
                        (t.toggleSubmitButtonAnimation = function (t) {
                            this.submitButton.classList[t ? "add" : "remove"](o);
                        }),
                        (t.toggleSubmitButtonText = function (t) {
                            this.submitButtonSpan.textContent = t ? this.loadingText : this.originalSubmitText;
                        }),
                        (n.toggleDisabled = function (t, n) {
                            z.forEach(t, function (t, e) {
                                return e[n ? "setAttribute" : "removeAttribute"](u, "");
                            });
                        }),
                        (n.getInstanceFromForm = function (t) {
                            if (z.isElement(t)) return r(t).data(i) || null;
                            throw new TypeError("Form argument passed to getInstanceFromForm is not an element.");
                        }),
                        (t.setSubmitEvent = function () {
                            var e = this;
                            r(this.form).on(v.SUBMIT, function (t) {
                                t.preventDefault(), e.submitForm();
                            });
                        }),
                        (n.jQueryInterface = function () {
                            return this.each(function () {
                                var t = r(this),
                                    e = t.data(i);
                                e || ((e = new n(this)), t.data(i, e));
                            });
                        }),
                        U(n, null, [
                            {
                                key: "VERSION",
                                get: function () {
                                    return "1.0.0";
                                },
                            },
                        ]),
                        n
                    );
                })();
            return (
                r(window).on(v.LOAD_DATA_API, function () {
                    for (var t = r.makeArray(r(f)), e = t.length; e--; ) {
                        var n = r(t[e]);
                        k.jQueryInterface.call(n, n.data());
                    }
                }),
                (r.fn[t] = k.jQueryInterface),
                (r.fn[t].Constructor = k),
                (r.fn[t].noConflict = function () {
                    return (r.fn[t] = n), k.jQueryInterface;
                }),
                k
            );
        })(O),
        Z = (function (i) {
            if ("function" != typeof i.fn.ionRangeSlider) throw new Error("mrIonRangeSlider requires ion.rangeSlider.js (https://github.com/IonDen/ion.rangeSlider)");
            if (!(z && "1.2.0" <= z.version)) throw new Error("mrUtil >= version 1.2.0 is required.");
            var t = "mrIonRangeSlider",
                r = "mr.ionRangeSlider",
                e = i.fn[t],
                o = { LOAD_DATA_API: "load.mr.ionRangeSlider.data-api", CHANGE: "input" },
                a = "[data-ion-rangeslider]",
                s = "INPUT",
                l = "text",
                u = "theme",
                c = (function () {
                    function n(t) {
                        var e = i(t);
                        (this.options = e.data()), (this.element = t), (this.fromElement = null), (this.toElement = null), (this.unitElement = null), this.initRangeSlider();
                    }
                    var t = n.prototype;
                    return (
                        (t.initRangeSlider = function () {
                            var t = this.options;
                            t.fromSelector && ((this.fromElement = document.querySelectorAll(t.fromSelector)), this.setFromUpdateEvent(this.fromElement)),
                                t.toSelector && ((this.toElement = document.querySelectorAll(t.toSelector)), this.setToUpdateEvent(this.toElement)),
                                t.unitSelector && t.unitSingle && t.unitPlural && (this.unitElement = document.querySelectorAll(t.unitSelector)),
                                i(this.element).ionRangeSlider({
                                    skin: u,
                                    onStart: z.getFuncFromString(t.onStart),
                                    onFinish: z.getFuncFromString(t.onFinish),
                                    onChange: this.handleChange,
                                    scope: this,
                                    onUpdate: z.getFuncFromString(t.onUpdate),
                                }),
                                (this.rangeSlider = i(this.element).data("ionRangeSlider"));
                        }),
                        (t.handleChange = function (t) {
                            if (
                                (this.fromElement && 0 < this.fromElement.length && Z.updateValue(this.fromElement, t.from_value || t.from),
                                this.toElement && 0 < this.toElement.length && Z.updateValue(this.toElement, t.to_value || t.to),
                                this.unitElement && 0 < this.unitElement.length)
                            ) {
                                var e = parseInt(t.from_value, 10) || t.value;
                                Z.updateValue(this.unitElement, 1 < e ? this.options.unitPlural : this.options.unitSingle);
                            }
                            var n = z.getFuncFromString(this.options.onChange);
                            n && n(t);
                        }),
                        (t.setToUpdateEvent = function (t) {
                            var n = this;
                            z.forEach(t, function (t, e) {
                                e.tagName.toUpperCase() === s &&
                                    e.type === l &&
                                    e.addEventListener(o.CHANGE, function () {
                                        n.rangeSlider.update({ to: e.value });
                                    });
                            });
                        }),
                        (t.setFromUpdateEvent = function (t) {
                            var n = this;
                            z.forEach(t, function (t, e) {
                                e.tagName.toUpperCase() === s &&
                                    e.type === l &&
                                    e.addEventListener(o.CHANGE, function () {
                                        n.rangeSlider.update({ from: e.value });
                                    });
                            });
                        }),
                        (n.updateValue = function (t, n) {
                            z.forEach(t, function (t, e) {
                                e[e.tagName.toUpperCase() === s ? "value" : "textContent"] = n;
                            });
                        }),
                        (n.jQueryInterface = function () {
                            return this.each(function () {
                                var t = i(this),
                                    e = t.data(r);
                                e || ((e = new n(this)), t.data(r, e));
                            });
                        }),
                        U(n, null, [
                            {
                                key: "VERSION",
                                get: function () {
                                    return "1.0.0";
                                },
                            },
                        ]),
                        n
                    );
                })();
            return (
                i(window).on(o.LOAD_DATA_API, function () {
                    for (var t = i.makeArray(i(a)), e = t.length; e--; ) {
                        var n = i(t[e]);
                        c.jQueryInterface.call(n, n.data());
                    }
                }),
                (i.fn[t] = c.jQueryInterface),
                (i.fn[t].Constructor = c),
                (i.fn[t].noConflict = function () {
                    return (i.fn[t] = e), c.jQueryInterface;
                }),
                c
            );
        })(O),
        J = (function (d) {
            if (void 0 === j) throw new Error("mrIsotope requires isotope.pkgd.js (https://github.com/metafizzy/isotope)");
            var t = "mrIsotope",
                i = "mr.isotope",
                e = d.fn[t],
                r = "active",
                m = { LOAD_DATA_API: "load.mr.isotope.data-api", FILTER_CLICK: "click touchstart", SORTER_CLICK: "click touchstart" },
                o = "masonry",
                p = "original-order",
                a = ".js-filter-inited",
                s = "data-isotope-id",
                l = "[data-isotope-collection]",
                u = "[data-isotope-item]",
                c = "[data-isotope-filters]",
                h = "[data-isotope-sorters]",
                n = "data-category",
                f = "data-filter",
                g = "data-sort",
                y = "data-primary-sort",
                v = "data-secondary-sort",
                w = "data-sort-selector",
                b = "data-sort-ascending",
                E = "*";
            function A(t) {
                return t && t !== E ? "[" + n + '*="' + t + '"]' : E;
            }
            function S(t, e) {
                return document.querySelectorAll(h + "[" + s + '="' + t + '"] [' + g + '="' + e + '"]');
            }
            function T(t, e) {
                return document.querySelectorAll(c + "[" + s + '="' + t + '"] [' + f + '="' + e + '"]');
            }
            function I(t, n) {
                t &&
                    z.forEach(t, function (t, e) {
                        e && void 0 !== e.classList && (n ? e.classList.add(r) : e.classList.remove(r));
                    });
            }
            var k = (function () {
                function n(t) {
                    var e = d(t).data();
                    (this.element = t),
                        (this.attributes = e),
                        (this.filters = {}),
                        (this.sorters = {}),
                        (this.activeFilter = null),
                        (this.activeSorter = null),
                        (this.isotope = null),
                        (this.options = {}),
                        (this.options.getSortData = {}),
                        (this.options.sortAscending = {}),
                        this.initIsotope(),
                        this.initSorters(),
                        this.initFilters();
                }
                var t = n.prototype;
                return (
                    (t.initFilters = function () {
                        var i = this,
                            r = (function (t, e) {
                                var n = e ? ":not(" + e + ")" : "";
                                return document.querySelectorAll(c + "[" + s + '="' + t + '"] [' + f + "]" + n);
                            })(this.attributes.isotopeId, a);
                        z.forEach(r, function (t, e) {
                            var n = e.attributes[f] && e.attributes[f].value;
                            (i.filters[n] = T(i.attributes.isotopeId, n)),
                                d(e).on(m.FILTER_CLICK, function (t) {
                                    t.preventDefault && t.preventDefault(), I(i.activeFilter, !1), I(i.filters[n], !0), (i.activeFilter = r), (i.options.filter = "*" === n ? n : A(n)), i.isotope.arrange(i.options);
                                }),
                                e.classList.add(a);
                        });
                    }),
                    (t.initSorters = function () {
                        var f = this,
                            t = (function (t) {
                                return document.querySelectorAll(h + "[" + s + '="' + t + '"] [' + g + "][" + w + "],\n      " + h + "[" + s + '="' + t + '"] [' + g + "][" + y + "][" + v + "]");
                            })(this.attributes.isotopeId),
                            e = this.attributes.defaultSort || p;
                        z.forEach(t, function (t, e) {
                            var n = e.attributes,
                                i = n[g],
                                r = n[w],
                                o = n[b],
                                a = n[y],
                                s = n[v],
                                l = i && i.value,
                                u = r && r.value,
                                c = a && a.value && s && s.value ? [a.value, s.value] : null,
                                h = !(o && o.value && "false" === o.value);
                            (f.sorters[l] = S(f.attributes.isotopeId, l)),
                                d(e).on(m.SORTER_CLICK, function (t) {
                                    t.preventDefault && t.preventDefault(), I(f.activeSorter, !1), I(f.sorters[l], !0), (f.activeSorter = f.sorters[l]), (f.options.sortBy = c || l), f.isotope.arrange(f.options);
                                }),
                                (f.options.sortAscending[l] = h),
                                l === p || c || (f.options.getSortData[l] = u);
                        }),
                            (this.options.sortBy = e),
                            (this.activeSorter = S(this.attributes.isotopeId, e)),
                            I(this.activeSorter, !0),
                            this.isotope.updateSortData(),
                            this.isotope.arrange(this.options);
                    }),
                    (t.initIsotope = function () {
                        var t = window.location.hash.replace("#", ""),
                            e = (t = "" === t || this.attributes.ignoreHash ? null : t) || this.attributes.defaultFilter || E,
                            n = A(e),
                            i = !1 == !this.attributes.sortAscending;
                        (this.options.itemSelector = u),
                            (this.options.layoutMode = this.attributes.layoutMode || o),
                            (this.options.filter = n),
                            (this.options.sortAscending[p] = i),
                            (this.isotope = new j(this.element, this.options)),
                            (this.activeFilter = T(this.attributes.isotopeId, e)),
                            I(this.activeFilter, !0);
                    }),
                    (n.jQueryInterface = function () {
                        return this.each(function () {
                            var t = d(this),
                                e = t.data(i);
                            e || ((e = new n(this)), t.data(i, e));
                        });
                    }),
                    U(n, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "1.0.0";
                            },
                        },
                    ]),
                    n
                );
            })();
            return (
                d(window).on(m.LOAD_DATA_API, function () {
                    for (var t = d.makeArray(d(l)), e = t.length; e--; ) {
                        var n = d(t[e]);
                        k.jQueryInterface.call(n, n.data());
                    }
                }),
                (d.fn[t] = k.jQueryInterface),
                (d.fn[t].Constructor = k),
                (d.fn[t].noConflict = function () {
                    return (d.fn[t] = e), k.jQueryInterface;
                }),
                k
            );
        })(O);
    (G = O),
        "function" == typeof r &&
            (G(".alert-dismissible").on("closed.bs.alert", function () {
                r(document.querySelectorAll("[data-jarallax]"), "onScroll");
            }),
            G(document).on("resized.mr.overlayNav", function () {
                r(document.querySelectorAll("[data-jarallax]"), "onResize");
            }),
            r(document.querySelectorAll("[data-jarallax]"), { disableParallax: /iPad|iPhone|iPod|Android/, disableVideo: /iPad|iPhone|iPod|Android/ }));
    var X,
        tt,
        et,
        nt,
        it,
        rt,
        ot,
        at,
        st,
        lt,
        ut,
        ct,
        ht,
        ft,
        dt,
        mt,
        pt,
        gt,
        yt,
        vt,
        wt,
        bt = [
            { featureType: "administrative.country", elementType: "labels.text", stylers: [{ lightness: "29" }] },
            { featureType: "administrative.province", elementType: "labels.text.fill", stylers: [{ lightness: "-12" }, { color: "#796340" }] },
            { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ lightness: "15" }, { saturation: "15" }] },
            { featureType: "landscape.man_made", elementType: "geometry", stylers: [{ visibility: "on" }, { color: "#fbf5ed" }] },
            { featureType: "landscape.natural", elementType: "geometry", stylers: [{ visibility: "on" }, { color: "#fbf5ed" }] },
            { featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] },
            { featureType: "poi.attraction", elementType: "all", stylers: [{ visibility: "on" }, { lightness: "30" }, { saturation: "-41" }, { gamma: "0.84" }] },
            { featureType: "poi.attraction", elementType: "labels", stylers: [{ visibility: "on" }] },
            { featureType: "poi.business", elementType: "all", stylers: [{ visibility: "off" }] },
            { featureType: "poi.business", elementType: "labels", stylers: [{ visibility: "off" }] },
            { featureType: "poi.medical", elementType: "geometry", stylers: [{ color: "#fbd3da" }] },
            { featureType: "poi.medical", elementType: "labels", stylers: [{ visibility: "on" }] },
            { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#b0e9ac" }, { visibility: "on" }] },
            { featureType: "poi.park", elementType: "labels", stylers: [{ visibility: "on" }] },
            { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ hue: "#68ff00" }, { lightness: "-24" }, { gamma: "1.59" }] },
            { featureType: "poi.sports_complex", elementType: "all", stylers: [{ visibility: "on" }] },
            { featureType: "poi.sports_complex", elementType: "geometry", stylers: [{ saturation: "10" }, { color: "#c3eb9a" }] },
            { featureType: "road", elementType: "geometry.stroke", stylers: [{ visibility: "on" }, { lightness: "30" }, { color: "#e7ded6" }] },
            { featureType: "road", elementType: "labels", stylers: [{ visibility: "on" }, { saturation: "-39" }, { lightness: "28" }, { gamma: "0.86" }] },
            { featureType: "road.highway", elementType: "geometry.fill", stylers: [{ color: "#ffe523" }, { visibility: "on" }] },
            { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ visibility: "on" }, { saturation: "0" }, { gamma: "1.44" }, { color: "#fbc28b" }] },
            { featureType: "road.highway", elementType: "labels", stylers: [{ visibility: "on" }, { saturation: "-40" }] },
            { featureType: "road.arterial", elementType: "geometry", stylers: [{ color: "#fed7a5" }] },
            { featureType: "road.arterial", elementType: "geometry.fill", stylers: [{ visibility: "on" }, { gamma: "1.54" }, { color: "#fbe38b" }] },
            { featureType: "road.local", elementType: "geometry.fill", stylers: [{ color: "#ffffff" }, { visibility: "on" }, { gamma: "2.62" }, { lightness: "10" }] },
            { featureType: "road.local", elementType: "geometry.stroke", stylers: [{ visibility: "on" }, { weight: "0.50" }, { gamma: "1.04" }] },
            { featureType: "transit.station.airport", elementType: "geometry.fill", stylers: [{ color: "#dee3fb" }] },
            { featureType: "water", elementType: "geometry", stylers: [{ saturation: "46" }, { color: "#a4e1ff" }] },
        ],
        Et = (function (f) {
            var t = "mrMaps",
                n = "mr.maps",
                e = f.fn[t],
                i = "[data-maps-api-key]",
                r = "div.map-marker",
                o = "div.map-style",
                d = "data-address",
                m = "data-latlong",
                p = "data-marker-image",
                g = "data-marker-title",
                y = "div.info-window",
                a = "",
                v = { MAP_LOADED: "loaded.mr.maps" },
                w = { MARKER_IMAGE_URL: "assets/img/map-marker.png", MAP: { disableDefaultUI: !0, draggable: !0, scrollwheel: !1, zoom: 17, zoomControl: !1 } };
            w.MAP.styles = void 0 !== bt ? bt : void 0;
            var s = (function () {
                function h(t) {
                    (this.element = t),
                        (this.$element = f(t)),
                        (this.markers = []),
                        (this.geocoder = new google.maps.Geocoder()),
                        (this.markerElements = this.$element.find(r)),
                        (this.styleElement = this.$element.find(o).first()),
                        this.initMap(),
                        this.createMarkers();
                }
                h.init = function () {
                    for (var t = f.makeArray(f(i)), e = t.length; e--; ) {
                        var n = f(t[e]);
                        h.jQueryInterface.call(n, n.data());
                    }
                };
                var t = h.prototype;
                return (
                    (t.initMap = function () {
                        var t,
                            e = this,
                            n = this.element,
                            i = this.$element,
                            r = void 0 !== i.attr("data-zoom-controls"),
                            o = void 0 !== i.attr("data-zoom-controls") && i.attr("data-zoom-controls"),
                            a = void 0 !== i.attr("data-latlong") && i.attr("data-latlong"),
                            s = !!a && parseFloat(a.substr(0, a.indexOf(","))),
                            l = !!a && parseFloat(a.substr(a.indexOf(",") + 1)),
                            u = i.attr("data-address") || "",
                            c = {};
                        try {
                            c.styles = this.styleElement.length ? JSON.parse(this.styleElement.html().trim()) : void 0;
                        } catch (t) {
                            throw new Error(t);
                        }
                        if (
                            ((c.zoom = i.attr("data-map-zoom") ? parseInt(i.attr("data-map-zoom"), 10) : void 0),
                            (c.zoomControl = r),
                            (c.zoomControlOptions = !1 !== o ? { position: google.maps.ControlPosition[o] } : void 0),
                            (t = jQuery.extend({}, w.MAP, c)),
                            (this.map = new google.maps.Map(n, t)),
                            google.maps.event.addListenerOnce(this.map, "center_changed", function () {
                                var t = f.Event(v.MAP_LOADED, { map: e.map });
                                i.trigger(t);
                            }),
                            void 0 !== s && "" !== s && !1 !== s && void 0 !== l && "" !== l && !1 !== l)
                        )
                            this.map.setCenter(new google.maps.LatLng(s, l));
                        else {
                            if ("" === u) throw new Error("No valid address or latitude/longitude pair provided for map.");
                            this.geocodeAddress(u, h.centerMap, this, this.map);
                        }
                    }),
                    (t.geocodeAddress = function (n, i, r, o) {
                        this.geocoder.geocode({ address: n }, function (t, e) {
                            if (e !== google.maps.GeocoderStatus.OK) throw new Error('There was a problem geocoding the address "' + n + '".');
                            i(t, r, o);
                        });
                    }),
                    (h.centerMap = function (t, e) {
                        e.map.setCenter(t[0].geometry.location);
                    }),
                    (h.moveMarker = function (t, e, n) {
                        n.setPosition(t[0].geometry.location);
                    }),
                    (t.createMarkers = function () {
                        var c = this;
                        (w.MARKER = { icon: { url: this.$element.attr(p) || w.MARKER_IMAGE_URL, scaledSize: new google.maps.Size(50, 50) }, title: a, optimised: !1 }),
                            this.markerElements.each(function (t, e) {
                                var n,
                                    i = f(e),
                                    r = i.attr(d),
                                    o = i.attr(m),
                                    a = i.find(y),
                                    s = { title: i.attr(g) };
                                s.icon = void 0 !== i.attr(p) ? { url: i.attr(p), scaledSize: new google.maps.Size(50, 50) } : void 0;
                                var l = jQuery.extend({}, w.MARKER, s);
                                if (((n = new google.maps.Marker(jQuery.extend({}, l, { map: c.map }))), a.length)) {
                                    var u = new google.maps.InfoWindow({ content: a.first().html(), maxWidth: parseInt(a.attr("data-max-width") || "250", 10) });
                                    n.addListener("click", function () {
                                        u.open(c.map, n);
                                    });
                                }
                                if (o) /(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)/.test(o) && (n.setPosition(new google.maps.LatLng(parseFloat(o.substr(0, o.indexOf(","))), parseFloat(o.substr(o.indexOf(",") + 1)))), (c.markers[t] = n));
                                else {
                                    if (!r) throw ((n = null), new Error("Invalid data-address or data-latlong provided for marker " + (t + 1)));
                                    c.geocodeAddress(r, h.moveMarker, c, n), (c.markers[t] = n);
                                }
                            });
                    }),
                    (h.jQueryInterface = function () {
                        return this.each(function () {
                            var t = f(this),
                                e = t.data(n);
                            e || ((e = new h(this)), t.data(n, e));
                        });
                    }),
                    U(h, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "1.1.0";
                            },
                        },
                    ]),
                    h
                );
            })();
            if (document.querySelector("[data-maps-api-key]") && !document.querySelector(".gMapsAPI") && f("[data-maps-api-key]").length) {
                var l = f("[data-maps-api-key]:first").attr("data-maps-api-key") || "";
                if ("" !== l) {
                    var u = document.createElement("script");
                    (u.type = "text/javascript"), (u.src = "https://maps.googleapis.com/maps/api/js?key=" + l + "&callback=theme.mrMaps.init"), (u.className = "gMapsAPI"), document.body.appendChild(u);
                }
            }
            return (
                (f.fn[t] = s.jQueryInterface),
                (f.fn[t].Constructor = s),
                (f.fn[t].noConflict = function () {
                    return (f.fn[t] = e), s.jQueryInterface;
                }),
                s
            );
        })(jQuery),
        At =
            ((tt = "mrOverlayNav"),
            (nt = "." + (et = "mr.overlayNav")),
            (it = (X = O).fn[tt]),
            (rt = { RESIZE: "resize" + nt, RESIZED: "resized" + nt, IMAGE_LOAD: "load", TOGGLE_SHOW: "show.bs.collapse", TOGGLE_HIDDEN: "hidden.bs.collapse", NOTIFICATION_CLOSE: "", ALERT_CLOSE: "close.bs.alert" }),
            (ot = "body > div.navbar-container"),
            (at = "body > div.navbar-container > nav[data-overlay]"),
            (st = "nav"),
            (lt = "[data-overlay]"),
            (ut = "img"),
            (ct = (function () {
                function n(t) {
                    (this.ticking = !1),
                        (this.element = t),
                        (this.navHeight = this.getNavHeight()),
                        (this.navToggled = !1),
                        (this.container = n.getContainerElement()),
                        (this.overlayElement = n.getFirstOverlayElement()),
                        this.setImageLoadEvent(),
                        this.updateValues(),
                        this.setResizeEvent(),
                        this.setNavToggleEvents();
                }
                var t = n.prototype;
                return (
                    (t.getNavHeight = function () {
                        this.navHeight = this.element.getBoundingClientRect().height;
                    }),
                    (t.updateValues = function () {
                        this.getNavHeight(), this.updateContainer(), this.updateOverlayElement(), X(this.element).trigger(X.Event(rt.RESIZED));
                    }),
                    (t.updateContainer = function () {
                        this.container && !this.navToggled && ((this.container.style.minHeight = this.navHeight + "px"), (this.container.style.marginBottom = "-" + this.navHeight + "px"));
                    }),
                    (t.updateOverlayElement = function () {
                        this.overlayElement && !this.navToggled && this.overlayElement.style.setProperty("padding-top", this.navHeight + "px", "important");
                    }),
                    (t.setResizeEvent = function () {
                        var t = this;
                        X(window).on(rt.RESIZE + " " + rt.ALERT_CLOSE, function () {
                            t.ticking ||
                                (window.requestAnimationFrame(function () {
                                    t.updateValues(), (t.ticking = !1);
                                }),
                                (t.ticking = !0));
                        });
                    }),
                    (t.setNavToggleEvents = function () {
                        var t = this;
                        X(this.element).on("" + rt.TOGGLE_SHOW, function () {
                            t.navToggled = !0;
                        }),
                            X(this.element).on("" + rt.TOGGLE_HIDDEN, function () {
                                t.navToggled = !1;
                            });
                    }),
                    (t.setImageLoadEvent = function () {
                        var n = this,
                            t = this.container.querySelectorAll(ut);
                        z.forEach(t, function (t, e) {
                            e.addEventListener(rt.IMAGE_LOAD, function () {
                                return n.updateValues();
                            });
                        });
                    }),
                    (n.getContainerElement = function () {
                        return this.container || (this.container = document.querySelector(ot)), this.container;
                    }),
                    (n.getFirstOverlayElement = function () {
                        return document.querySelector(lt + ":not(" + st + ")");
                    }),
                    (n.jQueryInterface = function () {
                        return this.each(function () {
                            var t = X(this),
                                e = t.data(et);
                            e || ((e = new n(this)), t.data(et, e));
                        });
                    }),
                    U(n, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "1.1.0";
                            },
                        },
                    ]),
                    n
                );
            })()),
            X(document).ready(function () {
                for (var t = X.makeArray(X(at)), e = t.length; e--; ) {
                    var n = X(t[e]);
                    ct.jQueryInterface.call(n, n.data());
                }
            }),
            (X.fn[tt] = ct.jQueryInterface),
            (X.fn[tt].Constructor = ct),
            (X.fn[tt].noConflict = function () {
                return (X.fn[tt] = it), ct.jQueryInterface;
            }),
            ct);
    (ht = O),
        (ft = "show.bs.collapse"),
        (dt = "hide.bs.collapse"),
        (mt = "body > div.navbar-container"),
        (pt = ".navbar-container > .navbar"),
        (gt = "navbar-toggled-show"),
        (yt = document.querySelector(mt)),
        (vt = document.querySelector(pt)),
        ht(yt).on(ft + " " + dt, function (t) {
            var e = t.type + "." + t.namespace === ft ? "add" : "remove";
            vt.classList[e](gt);
        }),
        o.setup("[data-provider],.plyr"),
        (wt = O)(document).on("hide.bs.tab", function (t) {
            wt(wt(t.target).attr("href")).find('[data-toggle="popover"]').popover("hide");
        }),
        wt(document).on("hide.bs.collapse", function (t) {
            wt(t.target).find('[data-toggle="popover"]').popover("hide");
        }),
        a.highlightAll();
    var St = (function (i) {
            if (void 0 === b) throw new Error("mrReadingPosition requires scrollMonitor.js (https://github.com/stutrek/scrollMonitor)");
            var t = "mrReadingPosition",
                r = "mr.readingPosition",
                e = i.fn[t],
                o = "reading-position-hidden",
                a = { LOAD_DATA_API: "load.mr.readingPosition.data-api", RESIZE: "resize", SCROLL: "scroll" },
                n = "progress.reading-position",
                s = "[data-reading-position]",
                l = "value",
                u = "max",
                c = 100,
                h = document.querySelectorAll(n),
                f = function () {
                    return (0 === document.documentElement.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop) || 0;
                },
                d = (function () {
                    function n(t) {
                        (this.progressBars = h),
                            (this.element = t),
                            (this.top = 0),
                            (this.bottom = 0),
                            (this.height = 0),
                            (this.scrollLength = 0),
                            (this.articlePositionPercent = 0),
                            (this.ticking = !1),
                            (this.inView = !1),
                            (this.reading = !1),
                            this.initWatcher(t),
                            this.initBarValues(),
                            this.setValue(f()),
                            this.setScrollEvent(),
                            this.setResizeEvent();
                    }
                    var t = n.prototype;
                    return (
                        (t.initWatcher = function (t) {
                            var e = this,
                                n = b.create(t);
                            (this.watcher = n),
                                this.recalculateAll(),
                                n.stateChange(function () {
                                    (e.inView = n.isInViewport), (e.reading = n.isAboveViewport && n.isFullyInViewport), e.toggleBars(e.reading);
                                });
                        }),
                        (t.initBarValues = function () {
                            z.forEach(this.progressBars, function (t, e) {
                                e.setAttribute(u, c);
                            });
                        }),
                        (t.setValue = function (t) {
                            var n = this;
                            this.recalculatePercentage(t),
                                z.forEach(this.progressBars, function (t, e) {
                                    e.setAttribute(l, n.articlePositionPercent);
                                });
                        }),
                        (t.toggleBars = function (n) {
                            z.forEach(this.progressBars, function (t, e) {
                                n ? e.classList.remove(o) : e.classList.add(o);
                            });
                        }),
                        (t.setScrollEvent = function () {
                            var e = this;
                            window.addEventListener(a.SCROLL, function () {
                                var t = f();
                                !e.ticking &&
                                    e.inView &&
                                    e.reading &&
                                    (window.requestAnimationFrame(function () {
                                        e.setValue(t), (e.ticking = !1);
                                    }),
                                    (e.ticking = !0));
                            });
                        }),
                        (t.setResizeEvent = function () {
                            var t = this;
                            window.addEventListener(a.RESIZE, function () {
                                return t.recalculateAll();
                            });
                        }),
                        (t.recalculateAll = function () {
                            this.watcher.recalculateLocation(),
                                (this.top = this.watcher.top),
                                (this.bottom = this.watcher.bottom),
                                (this.height = this.watcher.height),
                                (this.scrollLength = this.height - Math.max(document.documentElement.clientHeight, window.innerHeight || 0)),
                                this.recalculatePercentage(f());
                        }),
                        (t.recalculatePercentage = function (t) {
                            this.articlePositionPercent = t ? ((t - this.top) / this.scrollLength) * 100 : 0;
                        }),
                        (n.jQueryInterface = function () {
                            return this.each(function () {
                                var t = i(this),
                                    e = t.data(r);
                                e || ((e = new n(this)), t.data(r, e));
                            });
                        }),
                        U(n, null, [
                            {
                                key: "VERSION",
                                get: function () {
                                    return "1.0.0";
                                },
                            },
                        ]),
                        n
                    );
                })();
            return (
                i(window).on(a.LOAD_DATA_API, function () {
                    if (0 !== h.length)
                        for (var t = i.makeArray(i(s)), e = t.length; e--; ) {
                            var n = i(t[e]);
                            d.jQueryInterface.call(n, n.data());
                        }
                }),
                (i.fn[t] = d.jQueryInterface),
                (i.fn[t].Constructor = d),
                (i.fn[t].noConflict = function () {
                    return (i.fn[t] = e), d.jQueryInterface;
                }),
                d
            );
        })(jQuery),
        Tt = new l("a[data-smooth-scroll]", { offset: O("body").attr("data-smooth-scroll-offset") || 0 }),
        It = (function (s) {
            if (void 0 === b) throw new Error("mrSticky requires scrollMonitor.js (https://github.com/stutrek/scrollMonitor)");
            var t = "mrSticky",
                i = "mr.sticky",
                e = s.fn[t],
                l = "position-fixed",
                u = "sticky-bottom",
                r = "sticky-viewport-bottom",
                o = "scrolled",
                a = "min-height",
                c = "max-width",
                h = "top",
                f = { LOAD_DATA_API: "load.mr.sticky.data-api", WINDOW_RESIZE: "resize", ALERT_CLOSED: "closed.bs.alert", TOGGLE_SHOW: "show.bs.collapse", TOGGLE_HIDDEN: "hidden.bs.collapse" },
                d = "below-nav",
                m = "bottom",
                p = "sticky",
                g = "[data-sticky]",
                y = 'body > div.navbar-container [data-sticky="top"]',
                v = ".alert-dismissible",
                w = (function () {
                    function n(t) {
                        var e = s(t),
                            n = e.data(p),
                            i = e.closest("section") || null;
                        (this.element = t),
                            (this.stickBelowNav = n === d),
                            (this.stickBottom = n === m),
                            (this.stickyUntil = i),
                            (this.navToggled = !1),
                            this.updateNavProperties(),
                            (this.isNavElement = e.is(this.navElement)),
                            this.initWatcher(e),
                            this.updateCss(),
                            this.setResizeEvent(),
                            this.onWatcherChange(e),
                            (this.ticking = !1),
                            this.isNavElement && this.setNavToggleEvents();
                    }
                    var t = n.prototype;
                    return (
                        (t.initWatcher = function (t) {
                            var e = this,
                                n = s(t),
                                i = !this.isNavElement,
                                r = this.stickBelowNav && this.navIsSticky && i ? { top: this.navHeight } : 0;
                            r = this.stickBottom && i ? { bottom: -n.outerHeight } : r;
                            var o = b.create(t, r);
                            o.lock();
                            var a = null !== this.stickyUntil ? b.create(this.stickyUntil, { bottom: -(o.height + r.top) }) : null;
                            (this.watcher = o),
                                (this.untilWatcher = a),
                                (this.navHeight = this.navHeight),
                                this.isNavElement && 0 === o.top && !this.navIsAbsolute && n.addClass(l),
                                o.stateChange(function () {
                                    e.onWatcherChange(n);
                                }),
                                null !== a &&
                                    (a.exitViewport(function () {
                                        n.addClass(u);
                                    }),
                                    a.enterViewport(function () {
                                        n.removeClass(u);
                                    }));
                        }),
                        (t.onWatcherChange = function (t) {
                            t.toggleClass(l, this.watcher.isAboveViewport || (!this.navIsAbsolute && !this.stickBottom && this.isNavElement && 0 === this.watcher.top)),
                                t.toggleClass(o, this.watcher.isAboveViewport && this.isNavElement && !this.stickBottom),
                                t.toggleClass(r, (this.watcher.isFullyInViewport || this.watcher.isAboveViewport) && this.stickBottom),
                                this.stickBottom || t.css(h, this.watcher.isAboveViewport && this.navIsSticky && this.stickBelowNav ? this.navHeight : 0);
                        }),
                        (t.setResizeEvent = function () {
                            var t = this;
                            s(v).on(f.ALERT_CLOSED, function () {
                                t.watcher.isInViewport && (t.watcher.unlock(), t.watcher.recalculateLocation(), t.watcher.lock()), t.onResize();
                            }),
                                s(window).on(f.WINDOW_RESIZE, function () {
                                    t.onResize();
                                });
                        }),
                        (t.onResize = function () {
                            var t = this;
                            this.ticking ||
                                (window.requestAnimationFrame(function () {
                                    t.updateCss(), (t.ticking = !1);
                                }),
                                (this.ticking = !0));
                        }),
                        (t.setNavToggleEvents = function () {
                            var t = this;
                            s(this.element).on("" + f.TOGGLE_SHOW, function () {
                                t.navToggled = !0;
                            }),
                                s(this.element).on("" + f.TOGGLE_HIDDEN, function () {
                                    t.navToggled = !1;
                                });
                        }),
                        (t.updateCss = function () {
                            var t = s(this.element);
                            t.css(c, t.parent().width()), this.updateNavProperties();
                            var e = t.outerHeight(),
                                n = !this.isNavElement;
                            ((!this.navIsAbsolute && this.isNavElement) || n) && (this.navToggled || t.parent().css(a, e)), this.navIsSticky && n && t.css(a, e);
                        }),
                        (t.updateNavProperties = function () {
                            var t = this.navElement || s(y).first();
                            (this.navElement = t), (this.navHeight = t.outerHeight()), (this.navIsAbsolute = "absolute" === t.css("position")), (this.navIsSticky = 0 < t.length);
                        }),
                        (n.jQueryInterface = function () {
                            return this.each(function () {
                                var t = s(this),
                                    e = t.data(i);
                                e || ((e = new n(this)), t.data(i, e));
                            });
                        }),
                        U(n, null, [
                            {
                                key: "VERSION",
                                get: function () {
                                    return "1.4.0";
                                },
                            },
                        ]),
                        n
                    );
                })();
            return (
                s(window).on(f.LOAD_DATA_API, function () {
                    for (var t = s.makeArray(s(g)), e = t.length; e--; ) {
                        var n = s(t[e]);
                        w.jQueryInterface.call(n, n.data());
                    }
                }),
                (s.fn[t] = w.jQueryInterface),
                (s.fn[t].Constructor = w),
                (s.fn[t].noConflict = function () {
                    return (s.fn[t] = e), w.jQueryInterface;
                }),
                w
            );
        })(O),
        kt = Math.ceil,
        Ot = Math.floor,
        jt = function (t) {
            return isNaN((t = +t)) ? 0 : (0 < t ? Ot : kt)(t);
        },
        Ct = function (t) {
            if (null == t) throw TypeError("Can't call method on " + t);
            return t;
        },
        Pt = function (s) {
            return function (t, e) {
                var n,
                    i,
                    r = String(Ct(t)),
                    o = jt(e),
                    a = r.length;
                return o < 0 || a <= o
                    ? s
                        ? ""
                        : void 0
                    : (n = r.charCodeAt(o)) < 55296 || 56319 < n || o + 1 === a || (i = r.charCodeAt(o + 1)) < 56320 || 57343 < i
                    ? s
                        ? r.charAt(o)
                        : n
                    : s
                    ? r.slice(o, o + 2)
                    : i - 56320 + ((n - 55296) << 10) + 65536;
            };
        },
        Dt = { codeAt: Pt(!1), charAt: Pt(!0) },
        Ft = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function Vt(t, e) {
        return t((e = { exports: {} }), e.exports), e.exports;
    }
    var xt,
        Lt,
        _t,
        Rt = "object",
        Mt = function (t) {
            return t && t.Math == Math && t;
        },
        Nt = Mt(typeof globalThis == Rt && globalThis) || Mt(typeof window == Rt && window) || Mt(typeof self == Rt && self) || Mt(typeof Ft == Rt && Ft) || Function("return this")(),
        qt = function (t) {
            try {
                return !!t();
            } catch (t) {
                return !0;
            }
        },
        Qt = !qt(function () {
            return (
                7 !=
                Object.defineProperty({}, "a", {
                    get: function () {
                        return 7;
                    },
                }).a
            );
        }),
        Ht = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t;
        },
        zt = Nt.document,
        Bt = Ht(zt) && Ht(zt.createElement),
        Wt = function (t) {
            return Bt ? zt.createElement(t) : {};
        },
        Ut =
            !Qt &&
            !qt(function () {
                return (
                    7 !=
                    Object.defineProperty(Wt("div"), "a", {
                        get: function () {
                            return 7;
                        },
                    }).a
                );
            }),
        Gt = function (t) {
            if (!Ht(t)) throw TypeError(String(t) + " is not an object");
            return t;
        },
        Kt = function (t, e) {
            if (!Ht(t)) return t;
            var n, i;
            if (e && "function" == typeof (n = t.toString) && !Ht((i = n.call(t)))) return i;
            if ("function" == typeof (n = t.valueOf) && !Ht((i = n.call(t)))) return i;
            if (!e && "function" == typeof (n = t.toString) && !Ht((i = n.call(t)))) return i;
            throw TypeError("Can't convert object to primitive value");
        },
        Yt = Object.defineProperty,
        Zt = {
            f: Qt
                ? Yt
                : function (t, e, n) {
                      if ((Gt(t), (e = Kt(e, !0)), Gt(n), Ut))
                          try {
                              return Yt(t, e, n);
                          } catch (t) {}
                      if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                      return "value" in n && (t[e] = n.value), t;
                  },
        },
        $t = function (t, e) {
            return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e };
        },
        Jt = Qt
            ? function (t, e, n) {
                  return Zt.f(t, e, $t(1, n));
              }
            : function (t, e, n) {
                  return (t[e] = n), t;
              },
        Xt = function (e, n) {
            try {
                Jt(Nt, e, n);
            } catch (t) {
                Nt[e] = n;
            }
            return n;
        },
        te = Vt(function (t) {
            var e = "__core-js_shared__",
                n = Nt[e] || Xt(e, {});
            (t.exports = function (t, e) {
                return n[t] || (n[t] = void 0 !== e ? e : {});
            })("versions", []).push({ version: "3.2.1", mode: "global", copyright: "© 2019 Denis Pushkarev (zloirock.ru)" });
        }),
        ee = te("native-function-to-string", Function.toString),
        ne = Nt.WeakMap,
        ie = "function" == typeof ne && /native code/.test(ee.call(ne)),
        re = {}.hasOwnProperty,
        oe = function (t, e) {
            return re.call(t, e);
        },
        ae = 0,
        se = Math.random(),
        le = function (t) {
            return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++ae + se).toString(36);
        },
        ue = te("keys"),
        ce = function (t) {
            return ue[t] || (ue[t] = le(t));
        },
        he = {},
        fe = Nt.WeakMap;
    if (ie) {
        var de = new fe(),
            me = de.get,
            pe = de.has,
            ge = de.set;
        (xt = function (t, e) {
            return ge.call(de, t, e), e;
        }),
            (Lt = function (t) {
                return me.call(de, t) || {};
            }),
            (_t = function (t) {
                return pe.call(de, t);
            });
    } else {
        var ye = ce("state");
        (he[ye] = !0),
            (xt = function (t, e) {
                return Jt(t, ye, e), e;
            }),
            (Lt = function (t) {
                return oe(t, ye) ? t[ye] : {};
            }),
            (_t = function (t) {
                return oe(t, ye);
            });
    }
    var ve,
        we,
        be,
        Ee = {
            set: xt,
            get: Lt,
            has: _t,
            enforce: function (t) {
                return _t(t) ? Lt(t) : xt(t, {});
            },
            getterFor: function (n) {
                return function (t) {
                    var e;
                    if (!Ht(t) || (e = Lt(t)).type !== n) throw TypeError("Incompatible receiver, " + n + " required");
                    return e;
                };
            },
        },
        Ae = {}.propertyIsEnumerable,
        Se = Object.getOwnPropertyDescriptor,
        Te = {
            f:
                Se && !Ae.call({ 1: 2 }, 1)
                    ? function (t) {
                          var e = Se(this, t);
                          return !!e && e.enumerable;
                      }
                    : Ae,
        },
        Ie = {}.toString,
        ke = function (t) {
            return Ie.call(t).slice(8, -1);
        },
        Oe = "".split,
        je = qt(function () {
            return !Object("z").propertyIsEnumerable(0);
        })
            ? function (t) {
                  return "String" == ke(t) ? Oe.call(t, "") : Object(t);
              }
            : Object,
        Ce = function (t) {
            return je(Ct(t));
        },
        Pe = Object.getOwnPropertyDescriptor,
        De = {
            f: Qt
                ? Pe
                : function (t, e) {
                      if (((t = Ce(t)), (e = Kt(e, !0)), Ut))
                          try {
                              return Pe(t, e);
                          } catch (t) {}
                      if (oe(t, e)) return $t(!Te.f.call(t, e), t[e]);
                  },
        },
        Fe = Vt(function (t) {
            var e = Ee.get,
                s = Ee.enforce,
                l = String(ee).split("toString");
            te("inspectSource", function (t) {
                return ee.call(t);
            }),
                (t.exports = function (t, e, n, i) {
                    var r = !!i && !!i.unsafe,
                        o = !!i && !!i.enumerable,
                        a = !!i && !!i.noTargetGet;
                    "function" == typeof n && ("string" != typeof e || oe(n, "name") || Jt(n, "name", e), (s(n).source = l.join("string" == typeof e ? e : ""))),
                        t !== Nt ? (r ? !a && t[e] && (o = !0) : delete t[e], o ? (t[e] = n) : Jt(t, e, n)) : o ? (t[e] = n) : Xt(e, n);
                })(Function.prototype, "toString", function () {
                    return ("function" == typeof this && e(this).source) || ee.call(this);
                });
        }),
        Ve = Nt,
        xe = function (t) {
            return "function" == typeof t ? t : void 0;
        },
        Le = function (t, e) {
            return arguments.length < 2 ? xe(Ve[t]) || xe(Nt[t]) : (Ve[t] && Ve[t][e]) || (Nt[t] && Nt[t][e]);
        },
        _e = Math.min,
        Re = function (t) {
            return 0 < t ? _e(jt(t), 9007199254740991) : 0;
        },
        Me = Math.max,
        Ne = Math.min,
        qe = function (s) {
            return function (t, e, n) {
                var i,
                    r = Ce(t),
                    o = Re(r.length),
                    a = (function (t, e) {
                        var n = jt(t);
                        return n < 0 ? Me(n + e, 0) : Ne(n, e);
                    })(n, o);
                if (s && e != e) {
                    for (; a < o; ) if ((i = r[a++]) != i) return !0;
                } else for (; a < o; a++) if ((s || a in r) && r[a] === e) return s || a || 0;
                return !s && -1;
            };
        },
        Qe = { includes: qe(!0), indexOf: qe(!1) }.indexOf,
        He = function (t, e) {
            var n,
                i = Ce(t),
                r = 0,
                o = [];
            for (n in i) !oe(he, n) && oe(i, n) && o.push(n);
            for (; e.length > r; ) oe(i, (n = e[r++])) && (~Qe(o, n) || o.push(n));
            return o;
        },
        ze = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        Be = ze.concat("length", "prototype"),
        We = {
            f:
                Object.getOwnPropertyNames ||
                function (t) {
                    return He(t, Be);
                },
        },
        Ue = { f: Object.getOwnPropertySymbols },
        Ge =
            Le("Reflect", "ownKeys") ||
            function (t) {
                var e = We.f(Gt(t)),
                    n = Ue.f;
                return n ? e.concat(n(t)) : e;
            },
        Ke = function (t, e) {
            for (var n = Ge(e), i = Zt.f, r = De.f, o = 0; o < n.length; o++) {
                var a = n[o];
                oe(t, a) || i(t, a, r(e, a));
            }
        },
        Ye = /#|\.prototype\./,
        Ze = function (t, e) {
            var n = Je[$e(t)];
            return n == tn || (n != Xe && ("function" == typeof e ? qt(e) : !!e));
        },
        $e = (Ze.normalize = function (t) {
            return String(t).replace(Ye, ".").toLowerCase();
        }),
        Je = (Ze.data = {}),
        Xe = (Ze.NATIVE = "N"),
        tn = (Ze.POLYFILL = "P"),
        en = Ze,
        nn = De.f,
        rn = function (t, e) {
            var n,
                i,
                r,
                o,
                a,
                s = t.target,
                l = t.global,
                u = t.stat;
            if ((n = l ? Nt : u ? Nt[s] || Xt(s, {}) : (Nt[s] || {}).prototype))
                for (i in e) {
                    if (((o = e[i]), (r = t.noTargetGet ? (a = nn(n, i)) && a.value : n[i]), !en(l ? i : s + (u ? "." : "#") + i, t.forced) && void 0 !== r)) {
                        if (typeof o == typeof r) continue;
                        Ke(o, r);
                    }
                    (t.sham || (r && r.sham)) && Jt(o, "sham", !0), Fe(n, i, o, t);
                }
        },
        on = function (t) {
            return Object(Ct(t));
        },
        an = !qt(function () {
            function t() {}
            return (t.prototype.constructor = null), Object.getPrototypeOf(new t()) !== t.prototype;
        }),
        sn = ce("IE_PROTO"),
        ln = Object.prototype,
        un = an
            ? Object.getPrototypeOf
            : function (t) {
                  return (t = on(t)), oe(t, sn) ? t[sn] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? ln : null;
              },
        cn =
            !!Object.getOwnPropertySymbols &&
            !qt(function () {
                return !String(Symbol());
            }),
        hn = Nt.Symbol,
        fn = te("wks"),
        dn = function (t) {
            return fn[t] || (fn[t] = (cn && hn[t]) || (cn ? hn : le)("Symbol." + t));
        },
        mn = dn("iterator"),
        pn = !1;
    [].keys && ("next" in (be = [].keys()) ? (we = un(un(be))) !== Object.prototype && (ve = we) : (pn = !0)),
        null == ve && (ve = {}),
        oe(ve, mn) ||
            Jt(ve, mn, function () {
                return this;
            });
    var gn = { IteratorPrototype: ve, BUGGY_SAFARI_ITERATORS: pn },
        yn =
            Object.keys ||
            function (t) {
                return He(t, ze);
            },
        vn = Qt
            ? Object.defineProperties
            : function (t, e) {
                  Gt(t);
                  for (var n, i = yn(e), r = i.length, o = 0; o < r; ) Zt.f(t, (n = i[o++]), e[n]);
                  return t;
              },
        wn = Le("document", "documentElement"),
        bn = ce("IE_PROTO"),
        En = "prototype",
        An = function () {},
        Sn = function () {
            var t,
                e = Wt("iframe"),
                n = ze.length,
                i = "script";
            for (e.style.display = "none", wn.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write("<script>document.F=Object</" + i + ">"), t.close(), Sn = t.F; n--; ) delete Sn[En][ze[n]];
            return Sn();
        },
        Tn =
            Object.create ||
            function (t, e) {
                var n;
                return null !== t ? ((An[En] = Gt(t)), (n = new An()), (An[En] = null), (n[bn] = t)) : (n = Sn()), void 0 === e ? n : vn(n, e);
            };
    he[bn] = !0;
    var In = Zt.f,
        kn = dn("toStringTag"),
        On = function (t, e, n) {
            t && !oe((t = n ? t : t.prototype), kn) && In(t, kn, { configurable: !0, value: e });
        },
        jn = {},
        Cn = gn.IteratorPrototype,
        Pn = function () {
            return this;
        },
        Dn =
            Object.setPrototypeOf ||
            ("__proto__" in {}
                ? (function () {
                      var n,
                          i = !1,
                          t = {};
                      try {
                          (n = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(t, []), (i = t instanceof Array);
                      } catch (t) {}
                      return function (t, e) {
                          return (
                              Gt(t),
                              (function (t) {
                                  if (!Ht(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
                              })(e),
                              i ? n.call(t, e) : (t.__proto__ = e),
                              t
                          );
                      };
                  })()
                : void 0),
        Fn = gn.IteratorPrototype,
        Vn = gn.BUGGY_SAFARI_ITERATORS,
        xn = dn("iterator"),
        Ln = "values",
        _n = "entries",
        Rn = function () {
            return this;
        },
        Mn = Dt.charAt,
        Nn = "String Iterator",
        qn = Ee.set,
        Qn = Ee.getterFor(Nn);
    !(function (t, e, n, i, r, o, a) {
        !(function (t, e, n) {
            var i = e + " Iterator";
            (t.prototype = Tn(Cn, { next: $t(1, n) })), On(t, i, !1), (jn[i] = Pn);
        })(n, e, i);
        var s,
            l,
            u,
            c = function (t) {
                if (t === r && p) return p;
                if (!Vn && t in d) return d[t];
                switch (t) {
                    case "keys":
                    case Ln:
                    case _n:
                        return function () {
                            return new n(this, t);
                        };
                }
                return function () {
                    return new n(this);
                };
            },
            h = e + " Iterator",
            f = !1,
            d = t.prototype,
            m = d[xn] || d["@@iterator"] || (r && d[r]),
            p = (!Vn && m) || c(r),
            g = ("Array" == e && d.entries) || m;
        if (
            (g && ((s = un(g.call(new t()))), Fn !== Object.prototype && s.next && (un(s) !== Fn && (Dn ? Dn(s, Fn) : "function" != typeof s[xn] && Jt(s, xn, Rn)), On(s, h, !0))),
            r == Ln &&
                m &&
                m.name !== Ln &&
                ((f = !0),
                (p = function () {
                    return m.call(this);
                })),
            d[xn] !== p && Jt(d, xn, p),
            (jn[e] = p),
            r)
        )
            if (((l = { values: c(Ln), keys: o ? p : c("keys"), entries: c(_n) }), a)) for (u in l) (!Vn && !f && u in d) || Fe(d, u, l[u]);
            else rn({ target: e, proto: !0, forced: Vn || f }, l);
    })(
        String,
        "String",
        function (t) {
            qn(this, { type: Nn, string: String(t), index: 0 });
        },
        function () {
            var t,
                e = Qn(this),
                n = e.string,
                i = e.index;
            return i >= n.length ? { value: void 0, done: !0 } : ((t = Mn(n, i)), (e.index += t.length), { value: t, done: !1 });
        }
    );
    var Hn = function (i, r, t) {
            if (
                ((function (t) {
                    if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
                })(i),
                void 0 === r)
            )
                return i;
            switch (t) {
                case 0:
                    return function () {
                        return i.call(r);
                    };
                case 1:
                    return function (t) {
                        return i.call(r, t);
                    };
                case 2:
                    return function (t, e) {
                        return i.call(r, t, e);
                    };
                case 3:
                    return function (t, e, n) {
                        return i.call(r, t, e, n);
                    };
            }
            return function () {
                return i.apply(r, arguments);
            };
        },
        zn = function (e, t, n, i) {
            try {
                return i ? t(Gt(n)[0], n[1]) : t(n);
            } catch (t) {
                var r = e.return;
                throw (void 0 !== r && Gt(r.call(e)), t);
            }
        },
        Bn = dn("iterator"),
        Wn = Array.prototype,
        Un = function (t, e, n) {
            var i = Kt(e);
            i in t ? Zt.f(t, i, $t(0, n)) : (t[i] = n);
        },
        Gn = dn("toStringTag"),
        Kn =
            "Arguments" ==
            ke(
                (function () {
                    return arguments;
                })()
            ),
        Yn = dn("iterator"),
        Zn = function (t) {
            if (null != t)
                return (
                    t[Yn] ||
                    t["@@iterator"] ||
                    jn[
                        (function (t) {
                            var e, n, i;
                            return void 0 === t
                                ? "Undefined"
                                : null === t
                                ? "Null"
                                : "string" ==
                                  typeof (n = (function (t, e) {
                                      try {
                                          return t[e];
                                      } catch (t) {}
                                  })((e = Object(t)), Gn))
                                ? n
                                : Kn
                                ? ke(e)
                                : "Object" == (i = ke(e)) && "function" == typeof e.callee
                                ? "Arguments"
                                : i;
                        })(t)
                    ]
                );
        },
        $n = dn("iterator"),
        Jn = !1;
    try {
        var Xn = 0,
            ti = {
                next: function () {
                    return { done: !!Xn++ };
                },
                return: function () {
                    Jn = !0;
                },
            };
        (ti[$n] = function () {
            return this;
        }),
            Array.from(ti, function () {
                throw 2;
            });
    } catch (t) {}
    var ei = !(function (t, e) {
        if (!e && !Jn) return !1;
        var n = !1;
        try {
            var i = {};
            (i[$n] = function () {
                return {
                    next: function () {
                        return { done: (n = !0) };
                    },
                };
            }),
                t(i);
        } catch (t) {}
        return n;
    })(function (t) {
        Array.from(t);
    });
    rn(
        { target: "Array", stat: !0, forced: ei },
        {
            from: function (t) {
                var e,
                    n,
                    i,
                    r,
                    o = on(t),
                    a = "function" == typeof this ? this : Array,
                    s = arguments.length,
                    l = 1 < s ? arguments[1] : void 0,
                    u = void 0 !== l,
                    c = 0,
                    h = Zn(o);
                if (
                    (u && (l = Hn(l, 2 < s ? arguments[2] : void 0, 2)),
                    null == h ||
                        (a == Array &&
                            (function (t) {
                                return void 0 !== t && (jn.Array === t || Wn[Bn] === t);
                            })(h)))
                )
                    for (n = new a((e = Re(o.length))); c < e; c++) Un(n, c, u ? l(o[c], c) : o[c]);
                else for (r = h.call(o), n = new a(); !(i = r.next()).done; c++) Un(n, c, u ? zn(r, l, [i.value, c], !0) : i.value);
                return (n.length = c), n;
            },
        }
    );
    Ve.Array.from;
    z.isIE() &&
        window.addEventListener("load", function () {
            u.SVGInjector(document.querySelectorAll("[class][data-inject-svg]"));
        }),
        u.SVGInjector(document.querySelectorAll("[data-inject-svg]"));
    var ni = (function (c) {
            if (void 0 === A) throw new Error("mrTwitterFetcher requires twitterFetcher.js (https://github.com/jasonmayes/Twitter-Post-Fetcher)");
            var t = "mrTwitterFetcher",
                i = "mr.twitterFetcher",
                e = "." + i,
                n = c.fn[t],
                h = { LOAD_DATA_API: "load" + e + ".data-api", RESIZE: "resize" + e, READY: "ready" + e, APPEND: "tweetAppended" + e },
                r = "[data-twitter-fetcher]",
                o = "data-twitter",
                f = ".user",
                d = ".tweet",
                m = ".timePosted",
                p = ".interact",
                a = "twitter",
                s = 6,
                l = "username",
                u = "max-tweets",
                g = "flickity",
                y = "twitterFlickity",
                v = "isotope",
                w = (function () {
                    function n(t) {
                        var e = c(t);
                        (this.element = t),
                            (this.element.id = "tweets-" + new Date().getTime()),
                            (this.username = e.data(l).replace("@", "") || a),
                            (this.maxTweets = parseInt(e.data(u), 10) || s),
                            (this.slider = null !== this.element.getAttribute(o + "-" + g)),
                            (this.slider = this.slider && "object" == typeof e.data(y) ? e.data(y) : this.slider),
                            (this.isotope = null !== this.element.getAttribute(o + "-" + v)),
                            this.initTwitterFeed();
                    }
                    return (
                        (n.prototype.initTwitterFeed = function () {
                            var u = this;
                            (this.config = {
                                profile: { screenName: this.username },
                                domId: this.element.id,
                                maxTweets: this.maxTweets,
                                enableLinks: !0,
                                showUser: !0,
                                showTime: !0,
                                dateFunction: "",
                                showRetweet: !1,
                                customCallback: function (t) {
                                    for (var e = c(u.element), n = e.children().first().detach(), i = t.length, r = 0; r < i; ) {
                                        var o = c("<div>").append(c(t[r])),
                                            a = n.clone();
                                        a.find(d).html(o.find(d).html()), a.find(f).html(o.find(f).html()), a.find(m).html(o.find(m).html()), a.find(p).html(o.find(p).html()), e.append(a), (r += 1);
                                        var s = c.Event(h.APPEND);
                                        (s.appendedElement = a), (s.mrTwitterFetcher = u), c(u.element).trigger(s);
                                    }
                                    if (!0 === u.slider || "object" == typeof u.slider) {
                                        if (void 0 === E) throw new Error("mrTwitterFetcher requires flickity.js (https://github.com/metafizzy/flickity)");
                                        e.data("flickity", new E(u.element, u.slider));
                                    } else if (!0 === u.isotope) {
                                        if ("undefined" == typeof Isotope) throw new Error("mrTwitterFetcher requires isotope.js (https://github.com/metafizzy/isotope)");
                                        c(u.element).mrIsotope();
                                    }
                                    var l = c.Event(h.READY);
                                    (l.mrTwitterFetcher = u), c(u.element).trigger(l);
                                },
                            }),
                                A.fetch(this.config);
                        }),
                        (n.jQueryInterface = function () {
                            return this.each(function () {
                                var t = c(this),
                                    e = t.data(i);
                                e || ((e = new n(this)), t.data(i, e));
                            });
                        }),
                        U(n, null, [
                            {
                                key: "VERSION",
                                get: function () {
                                    return "1.0.0";
                                },
                            },
                        ]),
                        n
                    );
                })();
            return (
                c(window).on(h.LOAD_DATA_API, function () {
                    for (var t = c.makeArray(c(r)), e = t.length; e--; ) {
                        var n = c(t[e]);
                        w.jQueryInterface.call(n, n.data());
                    }
                }),
                (c.fn[t] = w.jQueryInterface),
                (c.fn[t].Constructor = w),
                (c.fn[t].noConflict = function () {
                    return (c.fn[t] = n), w.jQueryInterface;
                }),
                w
            );
        })(O),
        ii = (function (i) {
            if ("function" != typeof c) throw new Error("mrTypedText requires typed.js (https://github.com/mattboldt/typed.js/)");
            if (void 0 === b) throw new Error("mrTypedText requires scrollMonitor.js (https://github.com/stutrek/scrollMonitor)");
            var t = "mrTypedText",
                r = "mr.typedText",
                e = i.fn[t],
                n = { LOAD_DATA_API: "load.mr.typedText.data-api" },
                o = "[data-typed-text]",
                a = (function () {
                    function n(t) {
                        this.element = t;
                        var e = i(t);
                        (this.Typed = new c(this.element, e.data())), this.initWatcher(t);
                    }
                    return (
                        (n.jQueryInterface = function () {
                            return this.each(function () {
                                var t = i(this),
                                    e = t.data(r);
                                e || ((e = new n(this)), t.data(r, e));
                            });
                        }),
                        (n.prototype.initWatcher = function (t) {
                            var e = this,
                                n = b.create(t);
                            n.stateChange(function () {
                                n.isInViewport ? e.Typed.start() : e.Typed.stop();
                            });
                        }),
                        U(n, null, [
                            {
                                key: "VERSION",
                                get: function () {
                                    return "1.0.0";
                                },
                            },
                        ]),
                        n
                    );
                })();
            return (
                i(window).on(n.LOAD_DATA_API, function () {
                    for (var t = i.makeArray(i(o)), e = t.length; e--; ) {
                        var n = i(t[e]);
                        a.jQueryInterface.call(n, n.data());
                    }
                }),
                (i.fn[t] = a.jQueryInterface),
                (i.fn[t].Constructor = a),
                (i.fn[t].noConflict = function () {
                    return (i.fn[t] = e), a.jQueryInterface;
                }),
                a
            );
        })(O);
    O(document).ready(function () {
        O(".wizard").smartWizard({ transitionEffect: "fade", showStepURLhash: !1, toolbarSettings: { toolbarPosition: "none" } });
    }),
        (function () {
            if ("undefined" == typeof $) throw new TypeError("Medium Rare JavaScript requires jQuery. jQuery must be included before theme.js.");
        })(),
        (t.mrCountdown = N),
        (t.mrCountup = H),
        (t.mrDropdownGrid = B),
        (t.mrFlatpickr = W),
        (t.mrFormEmail = Y),
        (t.mrIonRangeSlider = Z),
        (t.mrIsotope = J),
        (t.mrMaps = Et),
        (t.mrMapsStyle = bt),
        (t.mrOverlayNav = At),
        (t.mrReadingPosition = St),
        (t.mrSmoothScroll = Tt),
        (t.mrSticky = It),
        (t.mrTwitterFetcher = ni),
        (t.mrTypedText = ii),
        (t.mrUtil = z),
        Object.defineProperty(t, "__esModule", { value: !0 });
});
//# sourceMappingURL=theme.js.map


$( ".closenav" ).each(function(index) {
    $(this).on("click", function(){
        $(".navbar-container > .navbar").removeClass("navbar-toggled-show");
        $("ul").removeClass("show");
        $(".navbar-toggler").addClass('collapsed').attr({
            'aria-expanded': 'false'
        });        
    });
});

var menuToggle = $('.navbar-toggler');
var menu = $('.navbar-collapse');

// Add all the existing BS4 attributes & IDs to build menu
menu.find('ul').each(function(i) {
    var levelIndex = $(this).parents('ul').length;
    $(this).attr({
	    'class':	'collapse level' + (levelIndex + 1) + '-styles',
        'id':		'id' + i
    });
    if (i == 0) {
        menuToggle.addClass('collapsed').attr({
            'data-toggle': 'collapse',
            'data-target': '#id' + i
        });
    } else {
        $(this).prev('a').attr({
            'class': 'collapsed',
            'data-toggle': 'collapse',
            'data-target': '#id' + i
        });
    }
});
/*
menu.find('a#AddChampion').each(function(){
	on(click
	
    $(".navbar-container > .navbar").removeClass("navbar-toggled-show");
  });

$('a#AddChampion').on('click',function(event){
    event.preventDefault(); // prevent the default handling
    alert('test');
});

*/


