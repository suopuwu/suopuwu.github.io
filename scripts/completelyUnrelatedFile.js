!function(t) {
    var e = {};
    function n(i) {
        if (e[i])
            return e[i].exports;
        var o = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(o.exports, o, o.exports, n),
        o.l = !0,
        o.exports
    }
    n.m = t,
    n.c = e,
    n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }
    ,
    n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(t, e) {
        if (1 & e && (t = n(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var i = Object.create(null);
        if (n.r(i),
        Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var o in t)
                n.d(i, o, function(e) {
                    return t[e]
                }
                .bind(null, o));
        return i
    }
    ,
    n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return n.d(e, "a", e),
        e
    }
    ,
    n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    n.p = "",
    n(n.s = 10)
}([function(t, e, n) {
    "use strict";
    n.d(e, "b", (function() {
        return o
    }
    )),
    n.d(e, "a", (function() {
        return r
    }
    )),
    n.d(e, "d", (function() {
        return a
    }
    )),
    n.d(e, "c", (function() {
        return c
    }
    ));
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
    var i = function(t, e) {
        return (i = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(t, e) {
            t.__proto__ = e
        }
        || function(t, e) {
            for (var n in e)
                e.hasOwnProperty(n) && (t[n] = e[n])
        }
        )(t, e)
    };
    function o(t, e) {
        function n() {
            this.constructor = t
        }
        i(t, e),
        t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
        new n)
    }
    var r = function() {
        return (r = Object.assign || function(t) {
            for (var e, n = 1, i = arguments.length; n < i; n++)
                for (var o in e = arguments[n])
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
        }
        ).apply(this, arguments)
    };
    function a(t) {
        var e = "function" == typeof Symbol && t[Symbol.iterator]
          , n = 0;
        return e ? e.call(t) : {
            next: function() {
                return t && n >= t.length && (t = void 0),
                {
                    value: t && t[n++],
                    done: !t
                }
            }
        }
    }
    function s(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n)
            return t;
        var i, o, r = n.call(t), a = [];
        try {
            for (; (void 0 === e || e-- > 0) && !(i = r.next()).done; )
                a.push(i.value)
        } catch (t) {
            o = {
                error: t
            }
        } finally {
            try {
                i && !i.done && (n = r.return) && n.call(r)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return a
    }
    function c() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(s(arguments[e]));
        return t
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return i
    }
    ));
    /**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
    var i = function() {
        function t(t) {
            void 0 === t && (t = {}),
            this.adapter_ = t
        }
        return Object.defineProperty(t, "cssClasses", {
            get: function() {
                return {}
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t, "strings", {
            get: function() {
                return {}
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t, "numbers", {
            get: function() {
                return {}
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(t, "defaultAdapter", {
            get: function() {
                return {}
            },
            enumerable: !0,
            configurable: !0
        }),
        t.prototype.init = function() {}
        ,
        t.prototype.destroy = function() {}
        ,
        t
    }()
}
, function(t, e, n) {
    "use strict";
    /**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
    function i(t, e) {
        if (t.closest)
            return t.closest(e);
        for (var n = t; n; ) {
            if (o(n, e))
                return n;
            n = n.parentElement
        }
        return null
    }
    function o(t, e) {
        return (t.matches || t.webkitMatchesSelector || t.msMatchesSelector).call(t, e)
    }
    n.d(e, "a", (function() {
        return i
    }
    )),
    n.d(e, "b", (function() {
        return o
    }
    ))
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return r
    }
    ));
    var i = n(0)
      , o = n(1)
      , r = function() {
        function t(t, e) {
            for (var n = [], o = 2; o < arguments.length; o++)
                n[o - 2] = arguments[o];
            this.root_ = t,
            this.initialize.apply(this, i.c(n)),
            this.foundation_ = void 0 === e ? this.getDefaultFoundation() : e,
            this.foundation_.init(),
            this.initialSyncWithDOM()
        }
        return t.attachTo = function(e) {
            return new t(e,new o.a({}))
        }
        ,
        t.prototype.initialize = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e]
        }
        ,
        t.prototype.getDefaultFoundation = function() {
            throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")
        }
        ,
        t.prototype.initialSyncWithDOM = function() {}
        ,
        t.prototype.destroy = function() {
            this.foundation_.destroy()
        }
        ,
        t.prototype.listen = function(t, e, n) {
            this.root_.addEventListener(t, e, n)
        }
        ,
        t.prototype.unlisten = function(t, e, n) {
            this.root_.removeEventListener(t, e, n)
        }
        ,
        t.prototype.emit = function(t, e, n) {
            var i;
            void 0 === n && (n = !1),
            "function" == typeof CustomEvent ? i = new CustomEvent(t,{
                bubbles: n,
                detail: e
            }) : (i = document.createEvent("CustomEvent")).initCustomEvent(t, n, !1, e),
            this.root_.dispatchEvent(i)
        }
        ,
        t
    }()
}
, function(t, e, n) {
    "use strict";
    /**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
    var i;
    function o(t, e) {
        if (void 0 === t && (t = window),
        void 0 === e && (e = !1),
        void 0 === i || e) {
            var n = !1;
            try {
                t.document.addEventListener("test", (function() {}
                ), {
                    get passive() {
                        return n = !0
                    }
                })
            } catch (t) {}
            i = n
        }
        return !!i && {
            passive: !0
        }
    }
    n.d(e, "a", (function() {
        return o
    }
    ))
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return u
    }
    ));
    var i = n(0)
      , o = n(3)
      , r = n(4)
      , a = n(2)
      , s = n(7)
      , c = n(6)
      , u = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.disabled = !1,
            e
        }
        return i.b(e, t),
        e.attachTo = function(t, n) {
            void 0 === n && (n = {
                isUnbounded: void 0
            });
            var i = new e(t);
            return void 0 !== n.isUnbounded && (i.unbounded = n.isUnbounded),
            i
        }
        ,
        e.createAdapter = function(t) {
            return {
                addClass: function(e) {
                    return t.root_.classList.add(e)
                },
                browserSupportsCssVars: function() {
                    return c.b(window)
                },
                computeBoundingRect: function() {
                    return t.root_.getBoundingClientRect()
                },
                containsEventTarget: function(e) {
                    return t.root_.contains(e)
                },
                deregisterDocumentInteractionHandler: function(t, e) {
                    return document.documentElement.removeEventListener(t, e, Object(r.a)())
                },
                deregisterInteractionHandler: function(e, n) {
                    return t.root_.removeEventListener(e, n, Object(r.a)())
                },
                deregisterResizeHandler: function(t) {
                    return window.removeEventListener("resize", t)
                },
                getWindowPageOffset: function() {
                    return {
                        x: window.pageXOffset,
                        y: window.pageYOffset
                    }
                },
                isSurfaceActive: function() {
                    return Object(a.b)(t.root_, ":active")
                },
                isSurfaceDisabled: function() {
                    return Boolean(t.disabled)
                },
                isUnbounded: function() {
                    return Boolean(t.unbounded)
                },
                registerDocumentInteractionHandler: function(t, e) {
                    return document.documentElement.addEventListener(t, e, Object(r.a)())
                },
                registerInteractionHandler: function(e, n) {
                    return t.root_.addEventListener(e, n, Object(r.a)())
                },
                registerResizeHandler: function(t) {
                    return window.addEventListener("resize", t)
                },
                removeClass: function(e) {
                    return t.root_.classList.remove(e)
                },
                updateCssVariable: function(e, n) {
                    return t.root_.style.setProperty(e, n)
                }
            }
        }
        ,
        Object.defineProperty(e.prototype, "unbounded", {
            get: function() {
                return Boolean(this.unbounded_)
            },
            set: function(t) {
                this.unbounded_ = Boolean(t),
                this.setUnbounded_()
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.activate = function() {
            this.foundation_.activate()
        }
        ,
        e.prototype.deactivate = function() {
            this.foundation_.deactivate()
        }
        ,
        e.prototype.layout = function() {
            this.foundation_.layout()
        }
        ,
        e.prototype.getDefaultFoundation = function() {
            return new s.a(e.createAdapter(this))
        }
        ,
        e.prototype.initialSyncWithDOM = function() {
            var t = this.root_;
            this.unbounded = "mdcRippleIsUnbounded"in t.dataset
        }
        ,
        e.prototype.setUnbounded_ = function() {
            this.foundation_.setUnbounded(Boolean(this.unbounded_))
        }
        ,
        e
    }(o.a)
}
, function(t, e, n) {
    "use strict";
    var i;
    function o(t, e) {
        void 0 === e && (e = !1);
        var n = t.CSS
          , o = i;
        if ("boolean" == typeof i && !e)
            return i;
        if (!(n && "function" == typeof n.supports))
            return !1;
        var r = n.supports("--css-vars", "yes")
          , a = n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
        return o = !(!r && !a) && !function(t) {
            var e = t.document
              , n = e.createElement("div");
            n.className = "mdc-ripple-surface--test-edge-var-bug",
            e.head.appendChild(n);
            var i = t.getComputedStyle(n)
              , o = null !== i && "solid" === i.borderTopStyle;
            return n.parentNode && n.parentNode.removeChild(n),
            o
        }(t),
        e || (i = o),
        o
    }
    function r(t, e, n) {
        if (!t)
            return {
                x: 0,
                y: 0
            };
        var i, o, r = e.x, a = e.y, s = r + n.left, c = a + n.top;
        if ("touchstart" === t.type) {
            var u = t;
            i = u.changedTouches[0].pageX - s,
            o = u.changedTouches[0].pageY - c
        } else {
            var d = t;
            i = d.pageX - s,
            o = d.pageY - c
        }
        return {
            x: i,
            y: o
        }
    }
    n.d(e, "b", (function() {
        return o
    }
    )),
    n.d(e, "a", (function() {
        return r
    }
    ))
}
, function(t, e, n) {
    "use strict";
    var i = n(0)
      , o = n(1)
      , r = {
        BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
        FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
        FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
        ROOT: "mdc-ripple-upgraded",
        UNBOUNDED: "mdc-ripple-upgraded--unbounded"
    }
      , a = {
        VAR_FG_SCALE: "--mdc-ripple-fg-scale",
        VAR_FG_SIZE: "--mdc-ripple-fg-size",
        VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
        VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
        VAR_LEFT: "--mdc-ripple-left",
        VAR_TOP: "--mdc-ripple-top"
    }
      , s = {
        DEACTIVATION_TIMEOUT_MS: 225,
        FG_DEACTIVATION_MS: 150,
        INITIAL_ORIGIN_SCALE: .6,
        PADDING: 10,
        TAP_DELAY_MS: 300
    }
      , c = n(6);
    n.d(e, "a", (function() {
        return f
    }
    ));
    /**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
    var u = ["touchstart", "pointerdown", "mousedown", "keydown"]
      , d = ["touchend", "pointerup", "mouseup", "contextmenu"]
      , l = []
      , f = function(t) {
        function e(n) {
            var o = t.call(this, i.a({}, e.defaultAdapter, n)) || this;
            return o.activationAnimationHasEnded_ = !1,
            o.activationTimer_ = 0,
            o.fgDeactivationRemovalTimer_ = 0,
            o.fgScale_ = "0",
            o.frame_ = {
                width: 0,
                height: 0
            },
            o.initialSize_ = 0,
            o.layoutFrame_ = 0,
            o.maxRadius_ = 0,
            o.unboundedCoords_ = {
                left: 0,
                top: 0
            },
            o.activationState_ = o.defaultActivationState_(),
            o.activationTimerCallback_ = function() {
                o.activationAnimationHasEnded_ = !0,
                o.runDeactivationUXLogicIfReady_()
            }
            ,
            o.activateHandler_ = function(t) {
                return o.activate_(t)
            }
            ,
            o.deactivateHandler_ = function() {
                return o.deactivate_()
            }
            ,
            o.focusHandler_ = function() {
                return o.handleFocus()
            }
            ,
            o.blurHandler_ = function() {
                return o.handleBlur()
            }
            ,
            o.resizeHandler_ = function() {
                return o.layout()
            }
            ,
            o
        }
        return i.b(e, t),
        Object.defineProperty(e, "cssClasses", {
            get: function() {
                return r
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e, "strings", {
            get: function() {
                return a
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e, "numbers", {
            get: function() {
                return s
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e, "defaultAdapter", {
            get: function() {
                return {
                    addClass: function() {},
                    browserSupportsCssVars: function() {
                        return !0
                    },
                    computeBoundingRect: function() {
                        return {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            width: 0,
                            height: 0
                        }
                    },
                    containsEventTarget: function() {
                        return !0
                    },
                    deregisterDocumentInteractionHandler: function() {},
                    deregisterInteractionHandler: function() {},
                    deregisterResizeHandler: function() {},
                    getWindowPageOffset: function() {
                        return {
                            x: 0,
                            y: 0
                        }
                    },
                    isSurfaceActive: function() {
                        return !0
                    },
                    isSurfaceDisabled: function() {
                        return !0
                    },
                    isUnbounded: function() {
                        return !0
                    },
                    registerDocumentInteractionHandler: function() {},
                    registerInteractionHandler: function() {},
                    registerResizeHandler: function() {},
                    removeClass: function() {},
                    updateCssVariable: function() {}
                }
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.init = function() {
            var t = this
              , n = this.supportsPressRipple_();
            if (this.registerRootHandlers_(n),
            n) {
                var i = e.cssClasses
                  , o = i.ROOT
                  , r = i.UNBOUNDED;
                requestAnimationFrame((function() {
                    t.adapter_.addClass(o),
                    t.adapter_.isUnbounded() && (t.adapter_.addClass(r),
                    t.layoutInternal_())
                }
                ))
            }
        }
        ,
        e.prototype.destroy = function() {
            var t = this;
            if (this.supportsPressRipple_()) {
                this.activationTimer_ && (clearTimeout(this.activationTimer_),
                this.activationTimer_ = 0,
                this.adapter_.removeClass(e.cssClasses.FG_ACTIVATION)),
                this.fgDeactivationRemovalTimer_ && (clearTimeout(this.fgDeactivationRemovalTimer_),
                this.fgDeactivationRemovalTimer_ = 0,
                this.adapter_.removeClass(e.cssClasses.FG_DEACTIVATION));
                var n = e.cssClasses
                  , i = n.ROOT
                  , o = n.UNBOUNDED;
                requestAnimationFrame((function() {
                    t.adapter_.removeClass(i),
                    t.adapter_.removeClass(o),
                    t.removeCssVars_()
                }
                ))
            }
            this.deregisterRootHandlers_(),
            this.deregisterDeactivationHandlers_()
        }
        ,
        e.prototype.activate = function(t) {
            this.activate_(t)
        }
        ,
        e.prototype.deactivate = function() {
            this.deactivate_()
        }
        ,
        e.prototype.layout = function() {
            var t = this;
            this.layoutFrame_ && cancelAnimationFrame(this.layoutFrame_),
            this.layoutFrame_ = requestAnimationFrame((function() {
                t.layoutInternal_(),
                t.layoutFrame_ = 0
            }
            ))
        }
        ,
        e.prototype.setUnbounded = function(t) {
            var n = e.cssClasses.UNBOUNDED;
            t ? this.adapter_.addClass(n) : this.adapter_.removeClass(n)
        }
        ,
        e.prototype.handleFocus = function() {
            var t = this;
            requestAnimationFrame((function() {
                return t.adapter_.addClass(e.cssClasses.BG_FOCUSED)
            }
            ))
        }
        ,
        e.prototype.handleBlur = function() {
            var t = this;
            requestAnimationFrame((function() {
                return t.adapter_.removeClass(e.cssClasses.BG_FOCUSED)
            }
            ))
        }
        ,
        e.prototype.supportsPressRipple_ = function() {
            return this.adapter_.browserSupportsCssVars()
        }
        ,
        e.prototype.defaultActivationState_ = function() {
            return {
                activationEvent: void 0,
                hasDeactivationUXRun: !1,
                isActivated: !1,
                isProgrammatic: !1,
                wasActivatedByPointer: !1,
                wasElementMadeActive: !1
            }
        }
        ,
        e.prototype.registerRootHandlers_ = function(t) {
            var e = this;
            t && (u.forEach((function(t) {
                e.adapter_.registerInteractionHandler(t, e.activateHandler_)
            }
            )),
            this.adapter_.isUnbounded() && this.adapter_.registerResizeHandler(this.resizeHandler_)),
            this.adapter_.registerInteractionHandler("focus", this.focusHandler_),
            this.adapter_.registerInteractionHandler("blur", this.blurHandler_)
        }
        ,
        e.prototype.registerDeactivationHandlers_ = function(t) {
            var e = this;
            "keydown" === t.type ? this.adapter_.registerInteractionHandler("keyup", this.deactivateHandler_) : d.forEach((function(t) {
                e.adapter_.registerDocumentInteractionHandler(t, e.deactivateHandler_)
            }
            ))
        }
        ,
        e.prototype.deregisterRootHandlers_ = function() {
            var t = this;
            u.forEach((function(e) {
                t.adapter_.deregisterInteractionHandler(e, t.activateHandler_)
            }
            )),
            this.adapter_.deregisterInteractionHandler("focus", this.focusHandler_),
            this.adapter_.deregisterInteractionHandler("blur", this.blurHandler_),
            this.adapter_.isUnbounded() && this.adapter_.deregisterResizeHandler(this.resizeHandler_)
        }
        ,
        e.prototype.deregisterDeactivationHandlers_ = function() {
            var t = this;
            this.adapter_.deregisterInteractionHandler("keyup", this.deactivateHandler_),
            d.forEach((function(e) {
                t.adapter_.deregisterDocumentInteractionHandler(e, t.deactivateHandler_)
            }
            ))
        }
        ,
        e.prototype.removeCssVars_ = function() {
            var t = this
              , n = e.strings;
            Object.keys(n).forEach((function(e) {
                0 === e.indexOf("VAR_") && t.adapter_.updateCssVariable(n[e], null)
            }
            ))
        }
        ,
        e.prototype.activate_ = function(t) {
            var e = this;
            if (!this.adapter_.isSurfaceDisabled()) {
                var n = this.activationState_;
                if (!n.isActivated) {
                    var i = this.previousActivationEvent_;
                    if (!(i && void 0 !== t && i.type !== t.type))
                        n.isActivated = !0,
                        n.isProgrammatic = void 0 === t,
                        n.activationEvent = t,
                        n.wasActivatedByPointer = !n.isProgrammatic && (void 0 !== t && ("mousedown" === t.type || "touchstart" === t.type || "pointerdown" === t.type)),
                        void 0 !== t && l.length > 0 && l.some((function(t) {
                            return e.adapter_.containsEventTarget(t)
                        }
                        )) ? this.resetActivationState_() : (void 0 !== t && (l.push(t.target),
                        this.registerDeactivationHandlers_(t)),
                        n.wasElementMadeActive = this.checkElementMadeActive_(t),
                        n.wasElementMadeActive && this.animateActivation_(),
                        requestAnimationFrame((function() {
                            l = [],
                            n.wasElementMadeActive || void 0 === t || " " !== t.key && 32 !== t.keyCode || (n.wasElementMadeActive = e.checkElementMadeActive_(t),
                            n.wasElementMadeActive && e.animateActivation_()),
                            n.wasElementMadeActive || (e.activationState_ = e.defaultActivationState_())
                        }
                        )))
                }
            }
        }
        ,
        e.prototype.checkElementMadeActive_ = function(t) {
            return void 0 === t || "keydown" !== t.type || this.adapter_.isSurfaceActive()
        }
        ,
        e.prototype.animateActivation_ = function() {
            var t = this
              , n = e.strings
              , i = n.VAR_FG_TRANSLATE_START
              , o = n.VAR_FG_TRANSLATE_END
              , r = e.cssClasses
              , a = r.FG_DEACTIVATION
              , s = r.FG_ACTIVATION
              , c = e.numbers.DEACTIVATION_TIMEOUT_MS;
            this.layoutInternal_();
            var u = ""
              , d = "";
            if (!this.adapter_.isUnbounded()) {
                var l = this.getFgTranslationCoordinates_()
                  , f = l.startPoint
                  , h = l.endPoint;
                u = f.x + "px, " + f.y + "px",
                d = h.x + "px, " + h.y + "px"
            }
            this.adapter_.updateCssVariable(i, u),
            this.adapter_.updateCssVariable(o, d),
            clearTimeout(this.activationTimer_),
            clearTimeout(this.fgDeactivationRemovalTimer_),
            this.rmBoundedActivationClasses_(),
            this.adapter_.removeClass(a),
            this.adapter_.computeBoundingRect(),
            this.adapter_.addClass(s),
            this.activationTimer_ = setTimeout((function() {
                return t.activationTimerCallback_()
            }
            ), c)
        }
        ,
        e.prototype.getFgTranslationCoordinates_ = function() {
            var t, e = this.activationState_, n = e.activationEvent;
            return {
                startPoint: t = {
                    x: (t = e.wasActivatedByPointer ? Object(c.a)(n, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect()) : {
                        x: this.frame_.width / 2,
                        y: this.frame_.height / 2
                    }).x - this.initialSize_ / 2,
                    y: t.y - this.initialSize_ / 2
                },
                endPoint: {
                    x: this.frame_.width / 2 - this.initialSize_ / 2,
                    y: this.frame_.height / 2 - this.initialSize_ / 2
                }
            }
        }
        ,
        e.prototype.runDeactivationUXLogicIfReady_ = function() {
            var t = this
              , n = e.cssClasses.FG_DEACTIVATION
              , i = this.activationState_
              , o = i.hasDeactivationUXRun
              , r = i.isActivated;
            (o || !r) && this.activationAnimationHasEnded_ && (this.rmBoundedActivationClasses_(),
            this.adapter_.addClass(n),
            this.fgDeactivationRemovalTimer_ = setTimeout((function() {
                t.adapter_.removeClass(n)
            }
            ), s.FG_DEACTIVATION_MS))
        }
        ,
        e.prototype.rmBoundedActivationClasses_ = function() {
            var t = e.cssClasses.FG_ACTIVATION;
            this.adapter_.removeClass(t),
            this.activationAnimationHasEnded_ = !1,
            this.adapter_.computeBoundingRect()
        }
        ,
        e.prototype.resetActivationState_ = function() {
            var t = this;
            this.previousActivationEvent_ = this.activationState_.activationEvent,
            this.activationState_ = this.defaultActivationState_(),
            setTimeout((function() {
                return t.previousActivationEvent_ = void 0
            }
            ), e.numbers.TAP_DELAY_MS)
        }
        ,
        e.prototype.deactivate_ = function() {
            var t = this
              , e = this.activationState_;
            if (e.isActivated) {
                var n = i.a({}, e);
                e.isProgrammatic ? (requestAnimationFrame((function() {
                    return t.animateDeactivation_(n)
                }
                )),
                this.resetActivationState_()) : (this.deregisterDeactivationHandlers_(),
                requestAnimationFrame((function() {
                    t.activationState_.hasDeactivationUXRun = !0,
                    t.animateDeactivation_(n),
                    t.resetActivationState_()
                }
                )))
            }
        }
        ,
        e.prototype.animateDeactivation_ = function(t) {
            var e = t.wasActivatedByPointer
              , n = t.wasElementMadeActive;
            (e || n) && this.runDeactivationUXLogicIfReady_()
        }
        ,
        e.prototype.layoutInternal_ = function() {
            var t = this;
            this.frame_ = this.adapter_.computeBoundingRect();
            var n = Math.max(this.frame_.height, this.frame_.width);
            this.maxRadius_ = this.adapter_.isUnbounded() ? n : Math.sqrt(Math.pow(t.frame_.width, 2) + Math.pow(t.frame_.height, 2)) + e.numbers.PADDING,
            this.initialSize_ = Math.floor(n * e.numbers.INITIAL_ORIGIN_SCALE),
            this.fgScale_ = "" + this.maxRadius_ / this.initialSize_,
            this.updateLayoutCssVars_()
        }
        ,
        e.prototype.updateLayoutCssVars_ = function() {
            var t = e.strings
              , n = t.VAR_FG_SIZE
              , i = t.VAR_LEFT
              , o = t.VAR_TOP
              , r = t.VAR_FG_SCALE;
            this.adapter_.updateCssVariable(n, this.initialSize_ + "px"),
            this.adapter_.updateCssVariable(r, this.fgScale_),
            this.adapter_.isUnbounded() && (this.unboundedCoords_ = {
                left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
                top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
            },
            this.adapter_.updateCssVariable(i, this.unboundedCoords_.left + "px"),
            this.adapter_.updateCssVariable(o, this.unboundedCoords_.top + "px"))
        }
        ,
        e
    }(o.a)
}
, function(t, e, n) {
    var i, o, r = n(12), a = n(13), s = (o = [],
    {
        activateTrap: function(t) {
            if (o.length > 0) {
                var e = o[o.length - 1];
                e !== t && e.pause()
            }
            var n = o.indexOf(t);
            -1 === n ? o.push(t) : (o.splice(n, 1),
            o.push(t))
        },
        deactivateTrap: function(t) {
            var e = o.indexOf(t);
            -1 !== e && o.splice(e, 1),
            o.length > 0 && o[o.length - 1].unpause()
        }
    });
    function c(t) {
        return setTimeout(t, 0)
    }
    t.exports = function(t, e) {
        var n = document
          , o = "string" == typeof t ? n.querySelector(t) : t
          , u = a({
            returnFocusOnDeactivate: !0,
            escapeDeactivates: !0
        }, e)
          , d = {
            firstTabbableNode: null,
            lastTabbableNode: null,
            nodeFocusedBeforeActivation: null,
            mostRecentlyFocusedNode: null,
            active: !1,
            paused: !1
        }
          , l = {
            activate: function(t) {
                if (d.active)
                    return;
                I(),
                d.active = !0,
                d.paused = !1,
                d.nodeFocusedBeforeActivation = n.activeElement;
                var e = t && t.onActivate ? t.onActivate : u.onActivate;
                e && e();
                return h(),
                l
            },
            deactivate: f,
            pause: function() {
                if (d.paused || !d.active)
                    return;
                d.paused = !0,
                _()
            },
            unpause: function() {
                if (!d.paused || !d.active)
                    return;
                d.paused = !1,
                I(),
                h()
            }
        };
        return l;
        function f(t) {
            if (d.active) {
                clearTimeout(i),
                _(),
                d.active = !1,
                d.paused = !1,
                s.deactivateTrap(l);
                var e = t && void 0 !== t.onDeactivate ? t.onDeactivate : u.onDeactivate;
                return e && e(),
                (t && void 0 !== t.returnFocus ? t.returnFocus : u.returnFocusOnDeactivate) && c((function() {
                    T(d.nodeFocusedBeforeActivation)
                }
                )),
                l
            }
        }
        function h() {
            if (d.active)
                return s.activateTrap(l),
                i = c((function() {
                    T(m())
                }
                )),
                n.addEventListener("focusin", y, !0),
                n.addEventListener("mousedown", E, {
                    capture: !0,
                    passive: !1
                }),
                n.addEventListener("touchstart", E, {
                    capture: !0,
                    passive: !1
                }),
                n.addEventListener("click", g, {
                    capture: !0,
                    passive: !1
                }),
                n.addEventListener("keydown", v, {
                    capture: !0,
                    passive: !1
                }),
                l
        }
        function _() {
            if (d.active)
                return n.removeEventListener("focusin", y, !0),
                n.removeEventListener("mousedown", E, !0),
                n.removeEventListener("touchstart", E, !0),
                n.removeEventListener("click", g, !0),
                n.removeEventListener("keydown", v, !0),
                l
        }
        function p(t) {
            var e = u[t]
              , i = e;
            if (!e)
                return null;
            if ("string" == typeof e && !(i = n.querySelector(e)))
                throw new Error("`" + t + "` refers to no known node");
            if ("function" == typeof e && !(i = e()))
                throw new Error("`" + t + "` did not return a node");
            return i
        }
        function m() {
            var t;
            if (!(t = null !== p("initialFocus") ? p("initialFocus") : o.contains(n.activeElement) ? n.activeElement : d.firstTabbableNode || p("fallbackFocus")))
                throw new Error("You can't have a focus-trap without at least one focusable element");
            return t
        }
        function E(t) {
            o.contains(t.target) || (u.clickOutsideDeactivates ? f({
                returnFocus: !r.isFocusable(t.target)
            }) : u.allowOutsideClick && u.allowOutsideClick(t) || t.preventDefault())
        }
        function y(t) {
            o.contains(t.target) || t.target instanceof Document || (t.stopImmediatePropagation(),
            T(d.mostRecentlyFocusedNode || m()))
        }
        function v(t) {
            if (!1 !== u.escapeDeactivates && function(t) {
                return "Escape" === t.key || "Esc" === t.key || 27 === t.keyCode
            }(t))
                return t.preventDefault(),
                void f();
            (function(t) {
                return "Tab" === t.key || 9 === t.keyCode
            }
            )(t) && function(t) {
                if (I(),
                t.shiftKey && t.target === d.firstTabbableNode)
                    return t.preventDefault(),
                    void T(d.lastTabbableNode);
                if (!t.shiftKey && t.target === d.lastTabbableNode)
                    t.preventDefault(),
                    T(d.firstTabbableNode)
            }(t)
        }
        function g(t) {
            u.clickOutsideDeactivates || o.contains(t.target) || u.allowOutsideClick && u.allowOutsideClick(t) || (t.preventDefault(),
            t.stopImmediatePropagation())
        }
        function I() {
            var t = r(o);
            d.firstTabbableNode = t[0] || m(),
            d.lastTabbableNode = t[t.length - 1] || m()
        }
        function T(t) {
            t !== n.activeElement && (t && t.focus ? (t.focus(),
            d.mostRecentlyFocusedNode = t,
            function(t) {
                return t.tagName && "input" === t.tagName.toLowerCase() && "function" == typeof t.select
            }(t) && t.select()) : T(m()))
        }
    }
}
, , function(t, e, n) {
    t.exports = n(14)
}
, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(5)
      , o = !1;
    document.cookie && /returning=1/.test(document.cookie) && (o = !0);
    var r = new Date;
    r.setTime(r.getTime() + 7776e3),
    document.cookie = "foo=bar;path=/;expires=" + r.toGMTString() + ";",
    document.cookie = "returning=1;samesite=strict,expires=".concat(r.toGMTString(), ";"),
    window.installPrompt.then((function(t) {
        var e = document.querySelector("#uidiv .mdc-menu ul")
          , n = document.createElement("li");
        n.textContent = "Install",
        n.classList.add("mdc-list-item"),
        n.setAttribute("role", "menuitem"),
        new i.a(n),
        n.addEventListener("click", (function() {
            t.userChoice.then((function(t) {
                "accepted" === t.outcome ? console.log("Installed to homescreen") : console.log("Install prompt rejected"),
                window.dispatchEvent(new CustomEvent("delete-a2hs-buttons"))
            }
            ), {
                once: !0,
                passive: !0
            }),
            t.prompt()
        }
        )),
        window.addEventListener("delete-a2hs-buttons", (function() {
            n.remove()
        }
        ), {
            once: !0
        }),
        e.appendChild(n);
        var r = document.createElement("button");
        r.textContent = "Install",
        r.classList.add("mdc-button", "mdc-button--outlined"),
        r.style.position = "fixed",
        r.style.bottom = "120px",
        r.style.left = "50%",
        r.style.transform = "translateX(-50%)",
        r.style.display = "none",
        r.style.zIndex = 1,
        new i.a(r),
        window.addEventListener("cyclechange", (function(t) {
            var e = t.detail;
            r.style.display = "break" === e ? "block" : "none"
        }
        )),
        r.addEventListener("click", (function() {
            t.userChoice.then((function(t) {
                "accepted" === t.outcome ? console.log("Installed to homescreen") : console.log("Install prompt rejected"),
                window.dispatchEvent(new CustomEvent("delete-a2hs-buttons"))
            }
            ), {
                once: !0,
                passive: !0
            }),
            t.prompt()
        }
        )),
        window.addEventListener("delete-a2hs-buttons", (function() {
            r.remove()
        }
        ), {
            once: !0
        }),
        document.body.insertAdjacentElement("afterbegin", r),
        o && "work" !== window.currentCycle && (r.style.color = "white",
        r.style.borderColor = "white",
        r.style.display = "block",
        window.addEventListener("cyclechange", (function() {
            r.style.color = "unset",
            r.style.borderColor = "unset"
        }
        )))
    }
    ))
}
, function(t, e) {
    var n = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])']
      , i = n.join(",")
      , o = "undefined" == typeof Element ? function() {}
    : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    function r(t, e) {
        e = e || {};
        var n, r, s, c = [], l = [], f = t.querySelectorAll(i);
        for (e.includeContainer && o.call(t, i) && (f = Array.prototype.slice.apply(f)).unshift(t),
        n = 0; n < f.length; n++)
            a(r = f[n]) && (0 === (s = u(r)) ? c.push(r) : l.push({
                documentOrder: n,
                tabIndex: s,
                node: r
            }));
        return l.sort(d).map((function(t) {
            return t.node
        }
        )).concat(c)
    }
    function a(t) {
        return !(!s(t) || function(t) {
            return function(t) {
                return l(t) && "radio" === t.type
            }(t) && !function(t) {
                if (!t.name)
                    return !0;
                var e = function(t) {
                    for (var e = 0; e < t.length; e++)
                        if (t[e].checked)
                            return t[e]
                }(t.ownerDocument.querySelectorAll('input[type="radio"][name="' + t.name + '"]'));
                return !e || e === t
            }(t)
        }(t) || u(t) < 0)
    }
    function s(t) {
        return !(t.disabled || function(t) {
            return l(t) && "hidden" === t.type
        }(t) || function(t) {
            return null === t.offsetParent || "hidden" === getComputedStyle(t).visibility
        }(t))
    }
    r.isTabbable = function(t) {
        if (!t)
            throw new Error("No node provided");
        return !1 !== o.call(t, i) && a(t)
    }
    ,
    r.isFocusable = function(t) {
        if (!t)
            throw new Error("No node provided");
        return !1 !== o.call(t, c) && s(t)
    }
    ;
    var c = n.concat("iframe").join(",");
    function u(t) {
        var e = parseInt(t.getAttribute("tabindex"), 10);
        return isNaN(e) ? function(t) {
            return "true" === t.contentEditable
        }(t) ? 0 : t.tabIndex : e
    }
    function d(t, e) {
        return t.tabIndex === e.tabIndex ? t.documentOrder - e.documentOrder : t.tabIndex - e.tabIndex
    }
    function l(t) {
        return "INPUT" === t.tagName
    }
    t.exports = r
}
, function(t, e) {
    t.exports = function() {
        for (var t = {}, e = 0; e < arguments.length; e++) {
            var i = arguments[e];
            for (var o in i)
                n.call(i, o) && (t[o] = i[o])
        }
        return t
    }
    ;
    var n = Object.prototype.hasOwnProperty
}
, function(t, e, n) {
    "use strict";
    n.r(e);
    var i = n(5)
      , o = n(0)
      , r = n(3)
      , a = n(2)
      , s = {
        LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
        LIST_ITEM_CLASS: "mdc-list-item",
        LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
        LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
        ROOT: "mdc-list"
    }
      , c = {
        ACTION_EVENT: "MDCList:action",
        ARIA_CHECKED: "aria-checked",
        ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
        ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
        ARIA_CURRENT: "aria-current",
        ARIA_DISABLED: "aria-disabled",
        ARIA_ORIENTATION: "aria-orientation",
        ARIA_ORIENTATION_HORIZONTAL: "horizontal",
        ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
        ARIA_SELECTED: "aria-selected",
        CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"]:not(:disabled), input[type="radio"]:not(:disabled)',
        CHECKBOX_SELECTOR: 'input[type="checkbox"]:not(:disabled)',
        CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + s.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + s.LIST_ITEM_CLASS + " a\n  ",
        FOCUSABLE_CHILD_ELEMENTS: "\n    ." + s.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + s.LIST_ITEM_CLASS + " a,\n    ." + s.LIST_ITEM_CLASS + ' input[type="radio"]:not(:disabled),\n    .' + s.LIST_ITEM_CLASS + ' input[type="checkbox"]:not(:disabled)\n  ',
        RADIO_SELECTOR: 'input[type="radio"]:not(:disabled)'
    }
      , u = {
        UNSET_INDEX: -1
    }
      , d = n(1)
      , l = ["input", "button", "textarea", "select"];
    var f, h, _ = function(t) {
        function e(n) {
            var i = t.call(this, o.a({}, e.defaultAdapter, n)) || this;
            return i.wrapFocus_ = !1,
            i.isVertical_ = !0,
            i.isSingleSelectionList_ = !1,
            i.selectedIndex_ = u.UNSET_INDEX,
            i.focusedItemIndex_ = u.UNSET_INDEX,
            i.useActivatedClass_ = !1,
            i.ariaCurrentAttrValue_ = null,
            i.isCheckboxList_ = !1,
            i.isRadioList_ = !1,
            i
        }
        return o.b(e, t),
        Object.defineProperty(e, "strings", {
            get: function() {
                return c
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e, "cssClasses", {
            get: function() {
                return s
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e, "numbers", {
            get: function() {
                return u
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e, "defaultAdapter", {
            get: function() {
                return {
                    addClassForElementIndex: function() {},
                    focusItemAtIndex: function() {},
                    getAttributeForElementIndex: function() {
                        return null
                    },
                    getFocusedElementIndex: function() {
                        return 0
                    },
                    getListItemCount: function() {
                        return 0
                    },
                    hasCheckboxAtIndex: function() {
                        return !1
                    },
                    hasRadioAtIndex: function() {
                        return !1
                    },
                    isCheckboxCheckedAtIndex: function() {
                        return !1
                    },
                    isFocusInsideList: function() {
                        return !1
                    },
                    isRootFocused: function() {
                        return !1
                    },
                    notifyAction: function() {},
                    removeClassForElementIndex: function() {},
                    setAttributeForElementIndex: function() {},
                    setCheckedCheckboxOrRadioAtIndex: function() {},
                    setTabIndexForListItemChildren: function() {}
                }
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.layout = function() {
            0 !== this.adapter_.getListItemCount() && (this.adapter_.hasCheckboxAtIndex(0) ? this.isCheckboxList_ = !0 : this.adapter_.hasRadioAtIndex(0) && (this.isRadioList_ = !0))
        }
        ,
        e.prototype.setWrapFocus = function(t) {
            this.wrapFocus_ = t
        }
        ,
        e.prototype.setVerticalOrientation = function(t) {
            this.isVertical_ = t
        }
        ,
        e.prototype.setSingleSelection = function(t) {
            this.isSingleSelectionList_ = t
        }
        ,
        e.prototype.setUseActivatedClass = function(t) {
            this.useActivatedClass_ = t
        }
        ,
        e.prototype.getSelectedIndex = function() {
            return this.selectedIndex_
        }
        ,
        e.prototype.setSelectedIndex = function(t) {
            this.isIndexValid_(t) && (this.isCheckboxList_ ? this.setCheckboxAtIndex_(t) : this.isRadioList_ ? this.setRadioAtIndex_(t) : this.setSingleSelectionAtIndex_(t))
        }
        ,
        e.prototype.handleFocusIn = function(t, e) {
            e >= 0 && this.adapter_.setTabIndexForListItemChildren(e, "0")
        }
        ,
        e.prototype.handleFocusOut = function(t, e) {
            var n = this;
            e >= 0 && this.adapter_.setTabIndexForListItemChildren(e, "-1"),
            setTimeout((function() {
                n.adapter_.isFocusInsideList() || n.setTabindexToFirstSelectedItem_()
            }
            ), 0)
        }
        ,
        e.prototype.handleKeydown = function(t, e, n) {
            var i = "ArrowLeft" === t.key || 37 === t.keyCode
              , o = "ArrowUp" === t.key || 38 === t.keyCode
              , r = "ArrowRight" === t.key || 39 === t.keyCode
              , a = "ArrowDown" === t.key || 40 === t.keyCode
              , s = "Home" === t.key || 36 === t.keyCode
              , c = "End" === t.key || 35 === t.keyCode
              , u = "Enter" === t.key || 13 === t.keyCode
              , d = "Space" === t.key || 32 === t.keyCode;
            if (this.adapter_.isRootFocused())
                o || c ? (t.preventDefault(),
                this.focusLastElement()) : (a || s) && (t.preventDefault(),
                this.focusFirstElement());
            else {
                var l = this.adapter_.getFocusedElementIndex();
                if (!(-1 === l && (l = n) < 0)) {
                    var f;
                    if (this.isVertical_ && a || !this.isVertical_ && r)
                        this.preventDefaultEvent_(t),
                        f = this.focusNextElement(l);
                    else if (this.isVertical_ && o || !this.isVertical_ && i)
                        this.preventDefaultEvent_(t),
                        f = this.focusPrevElement(l);
                    else if (s)
                        this.preventDefaultEvent_(t),
                        f = this.focusFirstElement();
                    else if (c)
                        this.preventDefaultEvent_(t),
                        f = this.focusLastElement();
                    else if ((u || d) && e) {
                        var h = t.target;
                        if (h && "A" === h.tagName && u)
                            return;
                        this.preventDefaultEvent_(t),
                        this.isSelectableList_() && this.setSelectedIndexOnAction_(l),
                        this.adapter_.notifyAction(l)
                    }
                    this.focusedItemIndex_ = l,
                    void 0 !== f && (this.setTabindexAtIndex_(f),
                    this.focusedItemIndex_ = f)
                }
            }
        }
        ,
        e.prototype.handleClick = function(t, e) {
            t !== u.UNSET_INDEX && (this.isSelectableList_() && this.setSelectedIndexOnAction_(t, e),
            this.adapter_.notifyAction(t),
            this.setTabindexAtIndex_(t),
            this.focusedItemIndex_ = t)
        }
        ,
        e.prototype.focusNextElement = function(t) {
            var e = t + 1;
            if (e >= this.adapter_.getListItemCount()) {
                if (!this.wrapFocus_)
                    return t;
                e = 0
            }
            return this.adapter_.focusItemAtIndex(e),
            e
        }
        ,
        e.prototype.focusPrevElement = function(t) {
            var e = t - 1;
            if (e < 0) {
                if (!this.wrapFocus_)
                    return t;
                e = this.adapter_.getListItemCount() - 1
            }
            return this.adapter_.focusItemAtIndex(e),
            e
        }
        ,
        e.prototype.focusFirstElement = function() {
            return this.adapter_.focusItemAtIndex(0),
            0
        }
        ,
        e.prototype.focusLastElement = function() {
            var t = this.adapter_.getListItemCount() - 1;
            return this.adapter_.focusItemAtIndex(t),
            t
        }
        ,
        e.prototype.setEnabled = function(t, e) {
            this.isIndexValid_(t) && (e ? (this.adapter_.removeClassForElementIndex(t, s.LIST_ITEM_DISABLED_CLASS),
            this.adapter_.setAttributeForElementIndex(t, c.ARIA_DISABLED, "false")) : (this.adapter_.addClassForElementIndex(t, s.LIST_ITEM_DISABLED_CLASS),
            this.adapter_.setAttributeForElementIndex(t, c.ARIA_DISABLED, "true")))
        }
        ,
        e.prototype.preventDefaultEvent_ = function(t) {
            var e = ("" + t.target.tagName).toLowerCase();
            -1 === l.indexOf(e) && t.preventDefault()
        }
        ,
        e.prototype.setSingleSelectionAtIndex_ = function(t) {
            if (this.selectedIndex_ !== t) {
                var e = s.LIST_ITEM_SELECTED_CLASS;
                this.useActivatedClass_ && (e = s.LIST_ITEM_ACTIVATED_CLASS),
                this.selectedIndex_ !== u.UNSET_INDEX && this.adapter_.removeClassForElementIndex(this.selectedIndex_, e),
                this.adapter_.addClassForElementIndex(t, e),
                this.setAriaForSingleSelectionAtIndex_(t),
                this.selectedIndex_ = t
            }
        }
        ,
        e.prototype.setAriaForSingleSelectionAtIndex_ = function(t) {
            this.selectedIndex_ === u.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter_.getAttributeForElementIndex(t, c.ARIA_CURRENT));
            var e = null !== this.ariaCurrentAttrValue_
              , n = e ? c.ARIA_CURRENT : c.ARIA_SELECTED;
            this.selectedIndex_ !== u.UNSET_INDEX && this.adapter_.setAttributeForElementIndex(this.selectedIndex_, n, "false");
            var i = e ? this.ariaCurrentAttrValue_ : "true";
            this.adapter_.setAttributeForElementIndex(t, n, i)
        }
        ,
        e.prototype.setRadioAtIndex_ = function(t) {
            this.adapter_.setCheckedCheckboxOrRadioAtIndex(t, !0),
            this.selectedIndex_ !== u.UNSET_INDEX && this.adapter_.setAttributeForElementIndex(this.selectedIndex_, c.ARIA_CHECKED, "false"),
            this.adapter_.setAttributeForElementIndex(t, c.ARIA_CHECKED, "true"),
            this.selectedIndex_ = t
        }
        ,
        e.prototype.setCheckboxAtIndex_ = function(t) {
            for (var e = 0; e < this.adapter_.getListItemCount(); e++) {
                var n = !1;
                t.indexOf(e) >= 0 && (n = !0),
                this.adapter_.setCheckedCheckboxOrRadioAtIndex(e, n),
                this.adapter_.setAttributeForElementIndex(e, c.ARIA_CHECKED, n ? "true" : "false")
            }
            this.selectedIndex_ = t
        }
        ,
        e.prototype.setTabindexAtIndex_ = function(t) {
            this.focusedItemIndex_ === u.UNSET_INDEX && 0 !== t ? this.adapter_.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== t && this.adapter_.setAttributeForElementIndex(this.focusedItemIndex_, "tabindex", "-1"),
            this.adapter_.setAttributeForElementIndex(t, "tabindex", "0")
        }
        ,
        e.prototype.isSelectableList_ = function() {
            return this.isSingleSelectionList_ || this.isCheckboxList_ || this.isRadioList_
        }
        ,
        e.prototype.setTabindexToFirstSelectedItem_ = function() {
            var t = 0;
            this.isSelectableList_() && ("number" == typeof this.selectedIndex_ && this.selectedIndex_ !== u.UNSET_INDEX ? t = this.selectedIndex_ : this.selectedIndex_ instanceof Array && this.selectedIndex_.length > 0 && (t = this.selectedIndex_.reduce((function(t, e) {
                return Math.min(t, e)
            }
            )))),
            this.setTabindexAtIndex_(t)
        }
        ,
        e.prototype.isIndexValid_ = function(t) {
            var e = this;
            if (t instanceof Array) {
                if (!this.isCheckboxList_)
                    throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
                return 0 === t.length || t.some((function(t) {
                    return e.isIndexInRange_(t)
                }
                ))
            }
            if ("number" == typeof t) {
                if (this.isCheckboxList_)
                    throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + t);
                return this.isIndexInRange_(t)
            }
            return !1
        }
        ,
        e.prototype.isIndexInRange_ = function(t) {
            var e = this.adapter_.getListItemCount();
            return t >= 0 && t < e
        }
        ,
        e.prototype.setSelectedIndexOnAction_ = function(t, e) {
            void 0 === e && (e = !0),
            this.isCheckboxList_ ? this.toggleCheckboxAtIndex_(t, e) : this.setSelectedIndex(t)
        }
        ,
        e.prototype.toggleCheckboxAtIndex_ = function(t, e) {
            var n = this.adapter_.isCheckboxCheckedAtIndex(t);
            e && (n = !n,
            this.adapter_.setCheckedCheckboxOrRadioAtIndex(t, n)),
            this.adapter_.setAttributeForElementIndex(t, c.ARIA_CHECKED, n ? "true" : "false");
            var i = this.selectedIndex_ === u.UNSET_INDEX ? [] : this.selectedIndex_.slice();
            n ? i.push(t) : i = i.filter((function(e) {
                return e !== t
            }
            )),
            this.selectedIndex_ = i
        }
        ,
        e
    }(d.a), p = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return o.b(e, t),
        Object.defineProperty(e.prototype, "vertical", {
            set: function(t) {
                this.foundation_.setVerticalOrientation(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "listElements", {
            get: function() {
                return [].slice.call(this.root_.querySelectorAll("." + s.LIST_ITEM_CLASS))
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "wrapFocus", {
            set: function(t) {
                this.foundation_.setWrapFocus(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "singleSelection", {
            set: function(t) {
                this.foundation_.setSingleSelection(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "selectedIndex", {
            get: function() {
                return this.foundation_.getSelectedIndex()
            },
            set: function(t) {
                this.foundation_.setSelectedIndex(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        e.attachTo = function(t) {
            return new e(t)
        }
        ,
        e.prototype.initialSyncWithDOM = function() {
            this.handleClick_ = this.handleClickEvent_.bind(this),
            this.handleKeydown_ = this.handleKeydownEvent_.bind(this),
            this.focusInEventListener_ = this.handleFocusInEvent_.bind(this),
            this.focusOutEventListener_ = this.handleFocusOutEvent_.bind(this),
            this.listen("keydown", this.handleKeydown_),
            this.listen("click", this.handleClick_),
            this.listen("focusin", this.focusInEventListener_),
            this.listen("focusout", this.focusOutEventListener_),
            this.layout(),
            this.initializeListType()
        }
        ,
        e.prototype.destroy = function() {
            this.unlisten("keydown", this.handleKeydown_),
            this.unlisten("click", this.handleClick_),
            this.unlisten("focusin", this.focusInEventListener_),
            this.unlisten("focusout", this.focusOutEventListener_)
        }
        ,
        e.prototype.layout = function() {
            var t = this.root_.getAttribute(c.ARIA_ORIENTATION);
            this.vertical = t !== c.ARIA_ORIENTATION_HORIZONTAL,
            [].slice.call(this.root_.querySelectorAll(".mdc-list-item:not([tabindex])")).forEach((function(t) {
                t.setAttribute("tabindex", "-1")
            }
            )),
            [].slice.call(this.root_.querySelectorAll(c.FOCUSABLE_CHILD_ELEMENTS)).forEach((function(t) {
                return t.setAttribute("tabindex", "-1")
            }
            )),
            this.foundation_.layout()
        }
        ,
        e.prototype.initializeListType = function() {
            var t = this
              , e = this.root_.querySelectorAll(c.ARIA_ROLE_CHECKBOX_SELECTOR)
              , n = this.root_.querySelector("\n      ." + s.LIST_ITEM_ACTIVATED_CLASS + ",\n      ." + s.LIST_ITEM_SELECTED_CLASS + "\n    ")
              , i = this.root_.querySelector(c.ARIA_CHECKED_RADIO_SELECTOR);
            if (e.length) {
                var o = this.root_.querySelectorAll(c.ARIA_CHECKED_CHECKBOX_SELECTOR);
                this.selectedIndex = [].map.call(o, (function(e) {
                    return t.listElements.indexOf(e)
                }
                ))
            } else
                n ? (n.classList.contains(s.LIST_ITEM_ACTIVATED_CLASS) && this.foundation_.setUseActivatedClass(!0),
                this.singleSelection = !0,
                this.selectedIndex = this.listElements.indexOf(n)) : i && (this.selectedIndex = this.listElements.indexOf(i))
        }
        ,
        e.prototype.setEnabled = function(t, e) {
            this.foundation_.setEnabled(t, e)
        }
        ,
        e.prototype.getDefaultFoundation = function() {
            var t = this;
            return new _({
                addClassForElementIndex: function(e, n) {
                    var i = t.listElements[e];
                    i && i.classList.add(n)
                },
                focusItemAtIndex: function(e) {
                    var n = t.listElements[e];
                    n && n.focus()
                },
                getAttributeForElementIndex: function(e, n) {
                    return t.listElements[e].getAttribute(n)
                },
                getFocusedElementIndex: function() {
                    return t.listElements.indexOf(document.activeElement)
                },
                getListItemCount: function() {
                    return t.listElements.length
                },
                hasCheckboxAtIndex: function(e) {
                    return !!t.listElements[e].querySelector(c.CHECKBOX_SELECTOR)
                },
                hasRadioAtIndex: function(e) {
                    return !!t.listElements[e].querySelector(c.RADIO_SELECTOR)
                },
                isCheckboxCheckedAtIndex: function(e) {
                    return t.listElements[e].querySelector(c.CHECKBOX_SELECTOR).checked
                },
                isFocusInsideList: function() {
                    return t.root_.contains(document.activeElement)
                },
                isRootFocused: function() {
                    return document.activeElement === t.root_
                },
                notifyAction: function(e) {
                    t.emit(c.ACTION_EVENT, {
                        index: e
                    }, !0)
                },
                removeClassForElementIndex: function(e, n) {
                    var i = t.listElements[e];
                    i && i.classList.remove(n)
                },
                setAttributeForElementIndex: function(e, n, i) {
                    var o = t.listElements[e];
                    o && o.setAttribute(n, i)
                },
                setCheckedCheckboxOrRadioAtIndex: function(e, n) {
                    var i = t.listElements[e].querySelector(c.CHECKBOX_RADIO_SELECTOR);
                    i.checked = n;
                    var o = document.createEvent("Event");
                    o.initEvent("change", !0, !0),
                    i.dispatchEvent(o)
                },
                setTabIndexForListItemChildren: function(e, n) {
                    var i = t.listElements[e];
                    [].slice.call(i.querySelectorAll(c.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX)).forEach((function(t) {
                        return t.setAttribute("tabindex", n)
                    }
                    ))
                }
            })
        }
        ,
        e.prototype.getListItemIndex_ = function(t) {
            var e = t.target
              , n = Object(a.a)(e, "." + s.LIST_ITEM_CLASS + ", ." + s.ROOT);
            return n && Object(a.b)(n, "." + s.LIST_ITEM_CLASS) ? this.listElements.indexOf(n) : -1
        }
        ,
        e.prototype.handleFocusInEvent_ = function(t) {
            var e = this.getListItemIndex_(t);
            this.foundation_.handleFocusIn(t, e)
        }
        ,
        e.prototype.handleFocusOutEvent_ = function(t) {
            var e = this.getListItemIndex_(t);
            this.foundation_.handleFocusOut(t, e)
        }
        ,
        e.prototype.handleKeydownEvent_ = function(t) {
            var e = this.getListItemIndex_(t)
              , n = t.target;
            this.foundation_.handleKeydown(t, n.classList.contains(s.LIST_ITEM_CLASS), e)
        }
        ,
        e.prototype.handleClickEvent_ = function(t) {
            var e = this.getListItemIndex_(t)
              , n = t.target
              , i = !Object(a.b)(n, c.CHECKBOX_RADIO_SELECTOR);
            this.foundation_.handleClick(e, i)
        }
        ,
        e
    }(r.a), m = {
        ANCHOR: "mdc-menu-surface--anchor",
        ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
        ANIMATING_OPEN: "mdc-menu-surface--animating-open",
        FIXED: "mdc-menu-surface--fixed",
        OPEN: "mdc-menu-surface--open",
        ROOT: "mdc-menu-surface"
    }, E = {
        CLOSED_EVENT: "MDCMenuSurface:closed",
        OPENED_EVENT: "MDCMenuSurface:opened",
        FOCUSABLE_ELEMENTS: ["button:not(:disabled)", '[href]:not([aria-disabled="true"])', "input:not(:disabled)", "select:not(:disabled)", "textarea:not(:disabled)", '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")
    }, y = {
        TRANSITION_OPEN_DURATION: 120,
        TRANSITION_CLOSE_DURATION: 75,
        MARGIN_TO_EDGE: 32,
        ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: .67
    };
    !function(t) {
        t[t.BOTTOM = 1] = "BOTTOM",
        t[t.CENTER = 2] = "CENTER",
        t[t.RIGHT = 4] = "RIGHT",
        t[t.FLIP_RTL = 8] = "FLIP_RTL"
    }(f || (f = {})),
    function(t) {
        t[t.TOP_LEFT = 0] = "TOP_LEFT",
        t[t.TOP_RIGHT = 4] = "TOP_RIGHT",
        t[t.BOTTOM_LEFT = 1] = "BOTTOM_LEFT",
        t[t.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT",
        t[t.TOP_START = 8] = "TOP_START",
        t[t.TOP_END = 12] = "TOP_END",
        t[t.BOTTOM_START = 9] = "BOTTOM_START",
        t[t.BOTTOM_END = 13] = "BOTTOM_END"
    }(h || (h = {}));
    /**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
    var v, g = function(t) {
        function e(n) {
            var i = t.call(this, o.a({}, e.defaultAdapter, n)) || this;
            return i.isOpen_ = !1,
            i.isQuickOpen_ = !1,
            i.isHoistedElement_ = !1,
            i.isFixedPosition_ = !1,
            i.openAnimationEndTimerId_ = 0,
            i.closeAnimationEndTimerId_ = 0,
            i.animationRequestId_ = 0,
            i.anchorCorner_ = h.TOP_START,
            i.anchorMargin_ = {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            i.position_ = {
                x: 0,
                y: 0
            },
            i
        }
        return o.b(e, t),
        Object.defineProperty(e, "cssClasses", {
            get: function() {
                return m
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e, "strings", {
            get: function() {
                return E
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e, "numbers", {
            get: function() {
                return y
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e, "Corner", {
            get: function() {
                return h
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e, "defaultAdapter", {
            get: function() {
                return {
                    addClass: function() {},
                    removeClass: function() {},
                    hasClass: function() {
                        return !1
                    },
                    hasAnchor: function() {
                        return !1
                    },
                    isElementInContainer: function() {
                        return !1
                    },
                    isFocused: function() {
                        return !1
                    },
                    isRtl: function() {
                        return !1
                    },
                    getInnerDimensions: function() {
                        return {
                            height: 0,
                            width: 0
                        }
                    },
                    getAnchorDimensions: function() {
                        return null
                    },
                    getWindowDimensions: function() {
                        return {
                            height: 0,
                            width: 0
                        }
                    },
                    getBodyDimensions: function() {
                        return {
                            height: 0,
                            width: 0
                        }
                    },
                    getWindowScroll: function() {
                        return {
                            x: 0,
                            y: 0
                        }
                    },
                    setPosition: function() {},
                    setMaxHeight: function() {},
                    setTransformOrigin: function() {},
                    saveFocus: function() {},
                    restoreFocus: function() {},
                    notifyClose: function() {},
                    notifyOpen: function() {}
                }
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.init = function() {
            var t = e.cssClasses
              , n = t.ROOT
              , i = t.OPEN;
            if (!this.adapter_.hasClass(n))
                throw new Error(n + " class required in root element.");
            this.adapter_.hasClass(i) && (this.isOpen_ = !0)
        }
        ,
        e.prototype.destroy = function() {
            clearTimeout(this.openAnimationEndTimerId_),
            clearTimeout(this.closeAnimationEndTimerId_),
            cancelAnimationFrame(this.animationRequestId_)
        }
        ,
        e.prototype.setAnchorCorner = function(t) {
            this.anchorCorner_ = t
        }
        ,
        e.prototype.setAnchorMargin = function(t) {
            this.anchorMargin_.top = t.top || 0,
            this.anchorMargin_.right = t.right || 0,
            this.anchorMargin_.bottom = t.bottom || 0,
            this.anchorMargin_.left = t.left || 0
        }
        ,
        e.prototype.setIsHoisted = function(t) {
            this.isHoistedElement_ = t
        }
        ,
        e.prototype.setFixedPosition = function(t) {
            this.isFixedPosition_ = t
        }
        ,
        e.prototype.setAbsolutePosition = function(t, e) {
            this.position_.x = this.isFinite_(t) ? t : 0,
            this.position_.y = this.isFinite_(e) ? e : 0
        }
        ,
        e.prototype.setQuickOpen = function(t) {
            this.isQuickOpen_ = t
        }
        ,
        e.prototype.isOpen = function() {
            return this.isOpen_
        }
        ,
        e.prototype.open = function() {
            var t = this;
            this.adapter_.saveFocus(),
            this.isQuickOpen_ || this.adapter_.addClass(e.cssClasses.ANIMATING_OPEN),
            this.animationRequestId_ = requestAnimationFrame((function() {
                t.adapter_.addClass(e.cssClasses.OPEN),
                t.dimensions_ = t.adapter_.getInnerDimensions(),
                t.autoPosition_(),
                t.isQuickOpen_ ? t.adapter_.notifyOpen() : t.openAnimationEndTimerId_ = setTimeout((function() {
                    t.openAnimationEndTimerId_ = 0,
                    t.adapter_.removeClass(e.cssClasses.ANIMATING_OPEN),
                    t.adapter_.notifyOpen()
                }
                ), y.TRANSITION_OPEN_DURATION)
            }
            )),
            this.isOpen_ = !0
        }
        ,
        e.prototype.close = function(t) {
            var n = this;
            void 0 === t && (t = !1),
            this.isQuickOpen_ || this.adapter_.addClass(e.cssClasses.ANIMATING_CLOSED),
            requestAnimationFrame((function() {
                n.adapter_.removeClass(e.cssClasses.OPEN),
                n.isQuickOpen_ ? n.adapter_.notifyClose() : n.closeAnimationEndTimerId_ = setTimeout((function() {
                    n.closeAnimationEndTimerId_ = 0,
                    n.adapter_.removeClass(e.cssClasses.ANIMATING_CLOSED),
                    n.adapter_.notifyClose()
                }
                ), y.TRANSITION_CLOSE_DURATION)
            }
            )),
            this.isOpen_ = !1,
            t || this.maybeRestoreFocus_()
        }
        ,
        e.prototype.handleBodyClick = function(t) {
            var e = t.target;
            this.adapter_.isElementInContainer(e) || this.close()
        }
        ,
        e.prototype.handleKeydown = function(t) {
            var e = t.keyCode;
            ("Escape" === t.key || 27 === e) && this.close()
        }
        ,
        e.prototype.autoPosition_ = function() {
            var t;
            this.measurements_ = this.getAutoLayoutMeasurements_();
            var e = this.getOriginCorner_()
              , n = this.getMenuSurfaceMaxHeight_(e)
              , i = this.hasBit_(e, f.BOTTOM) ? "bottom" : "top"
              , o = this.hasBit_(e, f.RIGHT) ? "right" : "left"
              , r = this.getHorizontalOriginOffset_(e)
              , a = this.getVerticalOriginOffset_(e)
              , s = this.measurements_
              , c = s.anchorSize
              , u = s.surfaceSize
              , d = ((t = {})[o] = r,
            t[i] = a,
            t);
            c.width / u.width > y.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (o = "center"),
            (this.isHoistedElement_ || this.isFixedPosition_) && this.adjustPositionForHoistedElement_(d),
            this.adapter_.setTransformOrigin(o + " " + i),
            this.adapter_.setPosition(d),
            this.adapter_.setMaxHeight(n ? n + "px" : "")
        }
        ,
        e.prototype.getAutoLayoutMeasurements_ = function() {
            var t = this.adapter_.getAnchorDimensions()
              , e = this.adapter_.getBodyDimensions()
              , n = this.adapter_.getWindowDimensions()
              , i = this.adapter_.getWindowScroll();
            return t || (t = {
                top: this.position_.y,
                right: this.position_.x,
                bottom: this.position_.y,
                left: this.position_.x,
                width: 0,
                height: 0
            }),
            {
                anchorSize: t,
                bodySize: e,
                surfaceSize: this.dimensions_,
                viewportDistance: {
                    top: t.top,
                    right: n.width - t.right,
                    bottom: n.height - t.bottom,
                    left: t.left
                },
                viewportSize: n,
                windowScroll: i
            }
        }
        ,
        e.prototype.getOriginCorner_ = function() {
            var t = h.TOP_LEFT
              , e = this.measurements_
              , n = e.viewportDistance
              , i = e.anchorSize
              , o = e.surfaceSize
              , r = this.hasBit_(this.anchorCorner_, f.BOTTOM)
              , a = r ? n.top + i.height + this.anchorMargin_.bottom : n.top + this.anchorMargin_.top
              , s = r ? n.bottom - this.anchorMargin_.bottom : n.bottom + i.height - this.anchorMargin_.top
              , c = o.height - a
              , u = o.height - s;
            u > 0 && c < u && (t = this.setBit_(t, f.BOTTOM));
            var d = this.adapter_.isRtl()
              , l = this.hasBit_(this.anchorCorner_, f.FLIP_RTL)
              , _ = this.hasBit_(this.anchorCorner_, f.RIGHT)
              , p = _ && !d || !_ && l && d
              , m = p ? n.left + i.width + this.anchorMargin_.right : n.left + this.anchorMargin_.left
              , E = p ? n.right - this.anchorMargin_.right : n.right + i.width - this.anchorMargin_.left
              , y = o.width - m
              , v = o.width - E;
            return (y < 0 && p && d || _ && !p && y < 0 || v > 0 && y < v) && (t = this.setBit_(t, f.RIGHT)),
            t
        }
        ,
        e.prototype.getMenuSurfaceMaxHeight_ = function(t) {
            var n = this.measurements_.viewportDistance
              , i = 0
              , o = this.hasBit_(t, f.BOTTOM)
              , r = this.hasBit_(this.anchorCorner_, f.BOTTOM)
              , a = e.numbers.MARGIN_TO_EDGE;
            return o ? (i = n.top + this.anchorMargin_.top - a,
            r || (i += this.measurements_.anchorSize.height)) : (i = n.bottom - this.anchorMargin_.bottom + this.measurements_.anchorSize.height - a,
            r && (i -= this.measurements_.anchorSize.height)),
            i
        }
        ,
        e.prototype.getHorizontalOriginOffset_ = function(t) {
            var e = this.measurements_.anchorSize
              , n = this.hasBit_(t, f.RIGHT)
              , i = this.hasBit_(this.anchorCorner_, f.RIGHT);
            if (n) {
                var o = i ? e.width - this.anchorMargin_.left : this.anchorMargin_.right;
                return this.isHoistedElement_ || this.isFixedPosition_ ? o - (this.measurements_.viewportSize.width - this.measurements_.bodySize.width) : o
            }
            return i ? e.width - this.anchorMargin_.right : this.anchorMargin_.left
        }
        ,
        e.prototype.getVerticalOriginOffset_ = function(t) {
            var e = this.measurements_.anchorSize
              , n = this.hasBit_(t, f.BOTTOM)
              , i = this.hasBit_(this.anchorCorner_, f.BOTTOM);
            return n ? i ? e.height - this.anchorMargin_.top : -this.anchorMargin_.bottom : i ? e.height + this.anchorMargin_.bottom : this.anchorMargin_.top
        }
        ,
        e.prototype.adjustPositionForHoistedElement_ = function(t) {
            var e, n, i = this.measurements_, r = i.windowScroll, a = i.viewportDistance, s = Object.keys(t);
            try {
                for (var c = o.d(s), u = c.next(); !u.done; u = c.next()) {
                    var d = u.value
                      , l = t[d] || 0;
                    l += a[d],
                    this.isFixedPosition_ || ("top" === d ? l += r.y : "bottom" === d ? l -= r.y : "left" === d ? l += r.x : l -= r.x),
                    t[d] = l
                }
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    u && !u.done && (n = c.return) && n.call(c)
                } finally {
                    if (e)
                        throw e.error
                }
            }
        }
        ,
        e.prototype.maybeRestoreFocus_ = function() {
            var t = this.adapter_.isFocused()
              , e = document.activeElement && this.adapter_.isElementInContainer(document.activeElement);
            (t || e) && this.adapter_.restoreFocus()
        }
        ,
        e.prototype.hasBit_ = function(t, e) {
            return Boolean(t & e)
        }
        ,
        e.prototype.setBit_ = function(t, e) {
            return t | e
        }
        ,
        e.prototype.isFinite_ = function(t) {
            return "number" == typeof t && isFinite(t)
        }
        ,
        e
    }(d.a);
    /**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
    var I, T = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return o.b(e, t),
        e.attachTo = function(t) {
            return new e(t)
        }
        ,
        e.prototype.initialSyncWithDOM = function() {
            var t = this
              , e = this.root_.parentElement;
            this.anchorElement = e && e.classList.contains(m.ANCHOR) ? e : null,
            this.root_.classList.contains(m.FIXED) && this.setFixedPosition(!0),
            this.handleKeydown_ = function(e) {
                return t.foundation_.handleKeydown(e)
            }
            ,
            this.handleBodyClick_ = function(e) {
                return t.foundation_.handleBodyClick(e)
            }
            ,
            this.registerBodyClickListener_ = function() {
                return document.body.addEventListener("click", t.handleBodyClick_)
            }
            ,
            this.deregisterBodyClickListener_ = function() {
                return document.body.removeEventListener("click", t.handleBodyClick_)
            }
            ,
            this.listen("keydown", this.handleKeydown_),
            this.listen(E.OPENED_EVENT, this.registerBodyClickListener_),
            this.listen(E.CLOSED_EVENT, this.deregisterBodyClickListener_)
        }
        ,
        e.prototype.destroy = function() {
            this.unlisten("keydown", this.handleKeydown_),
            this.unlisten(E.OPENED_EVENT, this.registerBodyClickListener_),
            this.unlisten(E.CLOSED_EVENT, this.deregisterBodyClickListener_),
            t.prototype.destroy.call(this)
        }
        ,
        e.prototype.isOpen = function() {
            return this.foundation_.isOpen()
        }
        ,
        e.prototype.open = function() {
            this.foundation_.open()
        }
        ,
        e.prototype.close = function(t) {
            void 0 === t && (t = !1),
            this.foundation_.close(t)
        }
        ,
        Object.defineProperty(e.prototype, "quickOpen", {
            set: function(t) {
                this.foundation_.setQuickOpen(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.hoistMenuToBody = function() {
            document.body.appendChild(this.root_),
            this.setIsHoisted(!0)
        }
        ,
        e.prototype.setIsHoisted = function(t) {
            this.foundation_.setIsHoisted(t)
        }
        ,
        e.prototype.setMenuSurfaceAnchorElement = function(t) {
            this.anchorElement = t
        }
        ,
        e.prototype.setFixedPosition = function(t) {
            t ? this.root_.classList.add(m.FIXED) : this.root_.classList.remove(m.FIXED),
            this.foundation_.setFixedPosition(t)
        }
        ,
        e.prototype.setAbsolutePosition = function(t, e) {
            this.foundation_.setAbsolutePosition(t, e),
            this.setIsHoisted(!0)
        }
        ,
        e.prototype.setAnchorCorner = function(t) {
            this.foundation_.setAnchorCorner(t)
        }
        ,
        e.prototype.setAnchorMargin = function(t) {
            this.foundation_.setAnchorMargin(t)
        }
        ,
        e.prototype.getDefaultFoundation = function() {
            var t = this;
            return new g({
                addClass: function(e) {
                    return t.root_.classList.add(e)
                },
                removeClass: function(e) {
                    return t.root_.classList.remove(e)
                },
                hasClass: function(e) {
                    return t.root_.classList.contains(e)
                },
                hasAnchor: function() {
                    return !!t.anchorElement
                },
                notifyClose: function() {
                    return t.emit(g.strings.CLOSED_EVENT, {})
                },
                notifyOpen: function() {
                    return t.emit(g.strings.OPENED_EVENT, {})
                },
                isElementInContainer: function(e) {
                    return t.root_.contains(e)
                },
                isRtl: function() {
                    return "rtl" === getComputedStyle(t.root_).getPropertyValue("direction")
                },
                setTransformOrigin: function(e) {
                    var n = function(t, e) {
                        if (void 0 === e && (e = !1),
                        void 0 === v || e) {
                            var n = t.document.createElement("div");
                            v = "transform"in n.style ? "transform" : "webkitTransform"
                        }
                        return v
                    }(window) + "-origin";
                    t.root_.style.setProperty(n, e)
                },
                isFocused: function() {
                    return document.activeElement === t.root_
                },
                saveFocus: function() {
                    t.previousFocus_ = document.activeElement
                },
                restoreFocus: function() {
                    t.root_.contains(document.activeElement) && t.previousFocus_ && t.previousFocus_.focus && t.previousFocus_.focus()
                },
                getInnerDimensions: function() {
                    return {
                        width: t.root_.offsetWidth,
                        height: t.root_.offsetHeight
                    }
                },
                getAnchorDimensions: function() {
                    return t.anchorElement ? t.anchorElement.getBoundingClientRect() : null
                },
                getWindowDimensions: function() {
                    return {
                        width: window.innerWidth,
                        height: window.innerHeight
                    }
                },
                getBodyDimensions: function() {
                    return {
                        width: document.body.clientWidth,
                        height: document.body.clientHeight
                    }
                },
                getWindowScroll: function() {
                    return {
                        x: window.pageXOffset,
                        y: window.pageYOffset
                    }
                },
                setPosition: function(e) {
                    t.root_.style.left = "left"in e ? e.left + "px" : "",
                    t.root_.style.right = "right"in e ? e.right + "px" : "",
                    t.root_.style.top = "top"in e ? e.top + "px" : "",
                    t.root_.style.bottom = "bottom"in e ? e.bottom + "px" : ""
                },
                setMaxHeight: function(e) {
                    t.root_.style.maxHeight = e
                }
            })
        }
        ,
        e
    }(r.a), b = {
        MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
        MENU_SELECTION_GROUP: "mdc-menu__selection-group",
        ROOT: "mdc-menu"
    }, C = {
        ARIA_CHECKED_ATTR: "aria-checked",
        ARIA_DISABLED_ATTR: "aria-disabled",
        CHECKBOX_SELECTOR: 'input[type="checkbox"]',
        LIST_SELECTOR: ".mdc-list",
        SELECTED_EVENT: "MDCMenu:selected"
    }, A = {
        FOCUS_ROOT_INDEX: -1
    };
    /**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
    !function(t) {
        t[t.NONE = 0] = "NONE",
        t[t.LIST_ROOT = 1] = "LIST_ROOT",
        t[t.FIRST_ITEM = 2] = "FIRST_ITEM",
        t[t.LAST_ITEM = 3] = "LAST_ITEM"
    }(I || (I = {}));
    /**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
    var S = function(t) {
        function e(n) {
            var i = t.call(this, o.a({}, e.defaultAdapter, n)) || this;
            return i.closeAnimationEndTimerId_ = 0,
            i.defaultFocusState_ = I.LIST_ROOT,
            i
        }
        return o.b(e, t),
        Object.defineProperty(e, "cssClasses", {
            get: function() {
                return b
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e, "strings", {
            get: function() {
                return C
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e, "numbers", {
            get: function() {
                return A
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e, "defaultAdapter", {
            get: function() {
                return {
                    addClassToElementAtIndex: function() {},
                    removeClassFromElementAtIndex: function() {},
                    addAttributeToElementAtIndex: function() {},
                    removeAttributeFromElementAtIndex: function() {},
                    elementContainsClass: function() {
                        return !1
                    },
                    closeSurface: function() {},
                    getElementIndex: function() {
                        return -1
                    },
                    notifySelected: function() {},
                    getMenuItemCount: function() {
                        return 0
                    },
                    focusItemAtIndex: function() {},
                    focusListRoot: function() {},
                    getSelectedSiblingOfItemAtIndex: function() {
                        return -1
                    },
                    isSelectableItemAtIndex: function() {
                        return !1
                    }
                }
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.destroy = function() {
            this.closeAnimationEndTimerId_ && clearTimeout(this.closeAnimationEndTimerId_),
            this.adapter_.closeSurface()
        }
        ,
        e.prototype.handleKeydown = function(t) {
            var e = t.key
              , n = t.keyCode;
            ("Tab" === e || 9 === n) && this.adapter_.closeSurface(!0)
        }
        ,
        e.prototype.handleItemAction = function(t) {
            var e = this
              , n = this.adapter_.getElementIndex(t);
            n < 0 || (this.adapter_.notifySelected({
                index: n
            }),
            this.adapter_.closeSurface(),
            this.closeAnimationEndTimerId_ = setTimeout((function() {
                var n = e.adapter_.getElementIndex(t);
                e.adapter_.isSelectableItemAtIndex(n) && e.setSelectedIndex(n)
            }
            ), g.numbers.TRANSITION_CLOSE_DURATION))
        }
        ,
        e.prototype.handleMenuSurfaceOpened = function() {
            switch (this.defaultFocusState_) {
            case I.FIRST_ITEM:
                this.adapter_.focusItemAtIndex(0);
                break;
            case I.LAST_ITEM:
                this.adapter_.focusItemAtIndex(this.adapter_.getMenuItemCount() - 1);
                break;
            case I.NONE:
                break;
            default:
                this.adapter_.focusListRoot()
            }
        }
        ,
        e.prototype.setDefaultFocusState = function(t) {
            this.defaultFocusState_ = t
        }
        ,
        e.prototype.setSelectedIndex = function(t) {
            if (this.validatedIndex_(t),
            !this.adapter_.isSelectableItemAtIndex(t))
                throw new Error("MDCMenuFoundation: No selection group at specified index.");
            var e = this.adapter_.getSelectedSiblingOfItemAtIndex(t);
            e >= 0 && (this.adapter_.removeAttributeFromElementAtIndex(e, C.ARIA_CHECKED_ATTR),
            this.adapter_.removeClassFromElementAtIndex(e, b.MENU_SELECTED_LIST_ITEM)),
            this.adapter_.addClassToElementAtIndex(t, b.MENU_SELECTED_LIST_ITEM),
            this.adapter_.addAttributeToElementAtIndex(t, C.ARIA_CHECKED_ATTR, "true")
        }
        ,
        e.prototype.setEnabled = function(t, e) {
            this.validatedIndex_(t),
            e ? (this.adapter_.removeClassFromElementAtIndex(t, s.LIST_ITEM_DISABLED_CLASS),
            this.adapter_.addAttributeToElementAtIndex(t, C.ARIA_DISABLED_ATTR, "false")) : (this.adapter_.addClassToElementAtIndex(t, s.LIST_ITEM_DISABLED_CLASS),
            this.adapter_.addAttributeToElementAtIndex(t, C.ARIA_DISABLED_ATTR, "true"))
        }
        ,
        e.prototype.validatedIndex_ = function(t) {
            var e = this.adapter_.getMenuItemCount();
            if (!(t >= 0 && t < e))
                throw new Error("MDCMenuFoundation: No list item at specified index.")
        }
        ,
        e
    }(d.a)
      , O = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return o.b(e, t),
        e.attachTo = function(t) {
            return new e(t)
        }
        ,
        e.prototype.initialize = function(t, e) {
            void 0 === t && (t = function(t) {
                return new T(t)
            }
            ),
            void 0 === e && (e = function(t) {
                return new p(t)
            }
            ),
            this.menuSurfaceFactory_ = t,
            this.listFactory_ = e
        }
        ,
        e.prototype.initialSyncWithDOM = function() {
            var t = this;
            this.menuSurface_ = this.menuSurfaceFactory_(this.root_);
            var e = this.root_.querySelector(C.LIST_SELECTOR);
            e ? (this.list_ = this.listFactory_(e),
            this.list_.wrapFocus = !0) : this.list_ = null,
            this.handleKeydown_ = function(e) {
                return t.foundation_.handleKeydown(e)
            }
            ,
            this.handleItemAction_ = function(e) {
                return t.foundation_.handleItemAction(t.items[e.detail.index])
            }
            ,
            this.handleMenuSurfaceOpened_ = function() {
                return t.foundation_.handleMenuSurfaceOpened()
            }
            ,
            this.menuSurface_.listen(g.strings.OPENED_EVENT, this.handleMenuSurfaceOpened_),
            this.listen("keydown", this.handleKeydown_),
            this.listen(_.strings.ACTION_EVENT, this.handleItemAction_)
        }
        ,
        e.prototype.destroy = function() {
            this.list_ && this.list_.destroy(),
            this.menuSurface_.destroy(),
            this.menuSurface_.unlisten(g.strings.OPENED_EVENT, this.handleMenuSurfaceOpened_),
            this.unlisten("keydown", this.handleKeydown_),
            this.unlisten(_.strings.ACTION_EVENT, this.handleItemAction_),
            t.prototype.destroy.call(this)
        }
        ,
        Object.defineProperty(e.prototype, "open", {
            get: function() {
                return this.menuSurface_.isOpen()
            },
            set: function(t) {
                t ? this.menuSurface_.open() : this.menuSurface_.close()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "wrapFocus", {
            get: function() {
                return !!this.list_ && this.list_.wrapFocus
            },
            set: function(t) {
                this.list_ && (this.list_.wrapFocus = t)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "items", {
            get: function() {
                return this.list_ ? this.list_.listElements : []
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "quickOpen", {
            set: function(t) {
                this.menuSurface_.quickOpen = t
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.setDefaultFocusState = function(t) {
            this.foundation_.setDefaultFocusState(t)
        }
        ,
        e.prototype.setAnchorCorner = function(t) {
            this.menuSurface_.setAnchorCorner(t)
        }
        ,
        e.prototype.setAnchorMargin = function(t) {
            this.menuSurface_.setAnchorMargin(t)
        }
        ,
        e.prototype.setSelectedIndex = function(t) {
            this.foundation_.setSelectedIndex(t)
        }
        ,
        e.prototype.setEnabled = function(t, e) {
            this.foundation_.setEnabled(t, e)
        }
        ,
        e.prototype.getOptionByIndex = function(t) {
            return t < this.items.length ? this.items[t] : null
        }
        ,
        e.prototype.setFixedPosition = function(t) {
            this.menuSurface_.setFixedPosition(t)
        }
        ,
        e.prototype.hoistMenuToBody = function() {
            this.menuSurface_.hoistMenuToBody()
        }
        ,
        e.prototype.setIsHoisted = function(t) {
            this.menuSurface_.setIsHoisted(t)
        }
        ,
        e.prototype.setAbsolutePosition = function(t, e) {
            this.menuSurface_.setAbsolutePosition(t, e)
        }
        ,
        e.prototype.setAnchorElement = function(t) {
            this.menuSurface_.anchorElement = t
        }
        ,
        e.prototype.getDefaultFoundation = function() {
            var t = this;
            return new S({
                addClassToElementAtIndex: function(e, n) {
                    t.items[e].classList.add(n)
                },
                removeClassFromElementAtIndex: function(e, n) {
                    t.items[e].classList.remove(n)
                },
                addAttributeToElementAtIndex: function(e, n, i) {
                    t.items[e].setAttribute(n, i)
                },
                removeAttributeFromElementAtIndex: function(e, n) {
                    t.items[e].removeAttribute(n)
                },
                elementContainsClass: function(t, e) {
                    return t.classList.contains(e)
                },
                closeSurface: function(e) {
                    return t.menuSurface_.close(e)
                },
                getElementIndex: function(e) {
                    return t.items.indexOf(e)
                },
                notifySelected: function(e) {
                    return t.emit(C.SELECTED_EVENT, {
                        index: e.index,
                        item: t.items[e.index]
                    })
                },
                getMenuItemCount: function() {
                    return t.items.length
                },
                focusItemAtIndex: function(e) {
                    return t.items[e].focus()
                },
                focusListRoot: function() {
                    return t.root_.querySelector(C.LIST_SELECTOR).focus()
                },
                isSelectableItemAtIndex: function(e) {
                    return !!Object(a.a)(t.items[e], "." + b.MENU_SELECTION_GROUP)
                },
                getSelectedSiblingOfItemAtIndex: function(e) {
                    var n = Object(a.a)(t.items[e], "." + b.MENU_SELECTION_GROUP).querySelector("." + b.MENU_SELECTED_LIST_ITEM);
                    return n ? t.items.indexOf(n) : -1
                }
            })
        }
        ,
        e
    }(r.a)
      , L = {
        CLOSING: "mdc-dialog--closing",
        OPEN: "mdc-dialog--open",
        OPENING: "mdc-dialog--opening",
        SCROLLABLE: "mdc-dialog--scrollable",
        SCROLL_LOCK: "mdc-dialog-scroll-lock",
        STACKED: "mdc-dialog--stacked"
    }
      , w = {
        ACTION_ATTRIBUTE: "data-mdc-dialog-action",
        BUTTON_DEFAULT_ATTRIBUTE: "data-mdc-dialog-button-default",
        BUTTON_SELECTOR: ".mdc-dialog__button",
        CLOSED_EVENT: "MDCDialog:closed",
        CLOSE_ACTION: "close",
        CLOSING_EVENT: "MDCDialog:closing",
        CONTAINER_SELECTOR: ".mdc-dialog__container",
        CONTENT_SELECTOR: ".mdc-dialog__content",
        DESTROY_ACTION: "destroy",
        INITIAL_FOCUS_ATTRIBUTE: "data-mdc-dialog-initial-focus",
        OPENED_EVENT: "MDCDialog:opened",
        OPENING_EVENT: "MDCDialog:opening",
        SCRIM_SELECTOR: ".mdc-dialog__scrim",
        SUPPRESS_DEFAULT_PRESS_SELECTOR: ["textarea", ".mdc-menu .mdc-list-item"].join(", "),
        SURFACE_SELECTOR: ".mdc-dialog__surface"
    }
      , x = {
        DIALOG_ANIMATION_CLOSE_TIME_MS: 75,
        DIALOG_ANIMATION_OPEN_TIME_MS: 150
    }
      , N = function(t) {
        function e(n) {
            var i = t.call(this, o.a({}, e.defaultAdapter, n)) || this;
            return i.isOpen_ = !1,
            i.animationFrame_ = 0,
            i.animationTimer_ = 0,
            i.layoutFrame_ = 0,
            i.escapeKeyAction_ = w.CLOSE_ACTION,
            i.scrimClickAction_ = w.CLOSE_ACTION,
            i.autoStackButtons_ = !0,
            i.areButtonsStacked_ = !1,
            i
        }
        return o.b(e, t),
        Object.defineProperty(e, "cssClasses", {
            get: function() {
                return L
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e, "strings", {
            get: function() {
                return w
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e, "numbers", {
            get: function() {
                return x
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e, "defaultAdapter", {
            get: function() {
                return {
                    addBodyClass: function() {},
                    addClass: function() {},
                    areButtonsStacked: function() {
                        return !1
                    },
                    clickDefaultButton: function() {},
                    eventTargetMatches: function() {
                        return !1
                    },
                    getActionFromEvent: function() {
                        return ""
                    },
                    getInitialFocusEl: function() {
                        return null
                    },
                    hasClass: function() {
                        return !1
                    },
                    isContentScrollable: function() {
                        return !1
                    },
                    notifyClosed: function() {},
                    notifyClosing: function() {},
                    notifyOpened: function() {},
                    notifyOpening: function() {},
                    releaseFocus: function() {},
                    removeBodyClass: function() {},
                    removeClass: function() {},
                    reverseButtons: function() {},
                    trapFocus: function() {}
                }
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.init = function() {
            this.adapter_.hasClass(L.STACKED) && this.setAutoStackButtons(!1)
        }
        ,
        e.prototype.destroy = function() {
            this.isOpen_ && this.close(w.DESTROY_ACTION),
            this.animationTimer_ && (clearTimeout(this.animationTimer_),
            this.handleAnimationTimerEnd_()),
            this.layoutFrame_ && (cancelAnimationFrame(this.layoutFrame_),
            this.layoutFrame_ = 0)
        }
        ,
        e.prototype.open = function() {
            var t = this;
            this.isOpen_ = !0,
            this.adapter_.notifyOpening(),
            this.adapter_.addClass(L.OPENING),
            this.runNextAnimationFrame_((function() {
                t.adapter_.addClass(L.OPEN),
                t.adapter_.addBodyClass(L.SCROLL_LOCK),
                t.layout(),
                t.animationTimer_ = setTimeout((function() {
                    t.handleAnimationTimerEnd_(),
                    t.adapter_.trapFocus(t.adapter_.getInitialFocusEl()),
                    t.adapter_.notifyOpened()
                }
                ), x.DIALOG_ANIMATION_OPEN_TIME_MS)
            }
            ))
        }
        ,
        e.prototype.close = function(t) {
            var e = this;
            void 0 === t && (t = ""),
            this.isOpen_ && (this.isOpen_ = !1,
            this.adapter_.notifyClosing(t),
            this.adapter_.addClass(L.CLOSING),
            this.adapter_.removeClass(L.OPEN),
            this.adapter_.removeBodyClass(L.SCROLL_LOCK),
            cancelAnimationFrame(this.animationFrame_),
            this.animationFrame_ = 0,
            clearTimeout(this.animationTimer_),
            this.animationTimer_ = setTimeout((function() {
                e.adapter_.releaseFocus(),
                e.handleAnimationTimerEnd_(),
                e.adapter_.notifyClosed(t)
            }
            ), x.DIALOG_ANIMATION_CLOSE_TIME_MS))
        }
        ,
        e.prototype.isOpen = function() {
            return this.isOpen_
        }
        ,
        e.prototype.getEscapeKeyAction = function() {
            return this.escapeKeyAction_
        }
        ,
        e.prototype.setEscapeKeyAction = function(t) {
            this.escapeKeyAction_ = t
        }
        ,
        e.prototype.getScrimClickAction = function() {
            return this.scrimClickAction_
        }
        ,
        e.prototype.setScrimClickAction = function(t) {
            this.scrimClickAction_ = t
        }
        ,
        e.prototype.getAutoStackButtons = function() {
            return this.autoStackButtons_
        }
        ,
        e.prototype.setAutoStackButtons = function(t) {
            this.autoStackButtons_ = t
        }
        ,
        e.prototype.layout = function() {
            var t = this;
            this.layoutFrame_ && cancelAnimationFrame(this.layoutFrame_),
            this.layoutFrame_ = requestAnimationFrame((function() {
                t.layoutInternal_(),
                t.layoutFrame_ = 0
            }
            ))
        }
        ,
        e.prototype.handleClick = function(t) {
            if (this.adapter_.eventTargetMatches(t.target, w.SCRIM_SELECTOR) && "" !== this.scrimClickAction_)
                this.close(this.scrimClickAction_);
            else {
                var e = this.adapter_.getActionFromEvent(t);
                e && this.close(e)
            }
        }
        ,
        e.prototype.handleKeydown = function(t) {
            var e = "Enter" === t.key || 13 === t.keyCode;
            if (e && !this.adapter_.getActionFromEvent(t)) {
                var n = !this.adapter_.eventTargetMatches(t.target, w.SUPPRESS_DEFAULT_PRESS_SELECTOR);
                e && n && this.adapter_.clickDefaultButton()
            }
        }
        ,
        e.prototype.handleDocumentKeydown = function(t) {
            ("Escape" === t.key || 27 === t.keyCode) && "" !== this.escapeKeyAction_ && this.close(this.escapeKeyAction_)
        }
        ,
        e.prototype.layoutInternal_ = function() {
            this.autoStackButtons_ && this.detectStackedButtons_(),
            this.detectScrollableContent_()
        }
        ,
        e.prototype.handleAnimationTimerEnd_ = function() {
            this.animationTimer_ = 0,
            this.adapter_.removeClass(L.OPENING),
            this.adapter_.removeClass(L.CLOSING)
        }
        ,
        e.prototype.runNextAnimationFrame_ = function(t) {
            var e = this;
            cancelAnimationFrame(this.animationFrame_),
            this.animationFrame_ = requestAnimationFrame((function() {
                e.animationFrame_ = 0,
                clearTimeout(e.animationTimer_),
                e.animationTimer_ = setTimeout(t, 0)
            }
            ))
        }
        ,
        e.prototype.detectStackedButtons_ = function() {
            this.adapter_.removeClass(L.STACKED);
            var t = this.adapter_.areButtonsStacked();
            t && this.adapter_.addClass(L.STACKED),
            t !== this.areButtonsStacked_ && (this.adapter_.reverseButtons(),
            this.areButtonsStacked_ = t)
        }
        ,
        e.prototype.detectScrollableContent_ = function() {
            this.adapter_.removeClass(L.SCROLLABLE),
            this.adapter_.isContentScrollable() && this.adapter_.addClass(L.SCROLLABLE)
        }
        ,
        e
    }(d.a)
      , D = n(8)
      , k = n.n(D);
    /**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
    var R = N.strings
      , F = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return o.b(e, t),
        Object.defineProperty(e.prototype, "isOpen", {
            get: function() {
                return this.foundation_.isOpen()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "escapeKeyAction", {
            get: function() {
                return this.foundation_.getEscapeKeyAction()
            },
            set: function(t) {
                this.foundation_.setEscapeKeyAction(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "scrimClickAction", {
            get: function() {
                return this.foundation_.getScrimClickAction()
            },
            set: function(t) {
                this.foundation_.setScrimClickAction(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "autoStackButtons", {
            get: function() {
                return this.foundation_.getAutoStackButtons()
            },
            set: function(t) {
                this.foundation_.setAutoStackButtons(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        e.attachTo = function(t) {
            return new e(t)
        }
        ,
        e.prototype.initialize = function(t) {
            var e, n, r = this.root_.querySelector(R.CONTAINER_SELECTOR);
            if (!r)
                throw new Error("Dialog component requires a " + R.CONTAINER_SELECTOR + " container element");
            this.container_ = r,
            this.content_ = this.root_.querySelector(R.CONTENT_SELECTOR),
            this.buttons_ = [].slice.call(this.root_.querySelectorAll(R.BUTTON_SELECTOR)),
            this.defaultButton_ = this.root_.querySelector("[" + R.BUTTON_DEFAULT_ATTRIBUTE + "]"),
            this.focusTrapFactory_ = t,
            this.buttonRipples_ = [];
            try {
                for (var a = o.d(this.buttons_), s = a.next(); !s.done; s = a.next()) {
                    var c = s.value;
                    this.buttonRipples_.push(new i.a(c))
                }
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    s && !s.done && (n = a.return) && n.call(a)
                } finally {
                    if (e)
                        throw e.error
                }
            }
        }
        ,
        e.prototype.initialSyncWithDOM = function() {
            var t, e, n, i = this;
            this.focusTrap_ = (t = this.container_,
            e = this.focusTrapFactory_,
            n = this.getInitialFocusEl_() || void 0,
            void 0 === e && (e = k.a),
            e(t, {
                clickOutsideDeactivates: !0,
                escapeDeactivates: !1,
                initialFocus: n
            })),
            this.handleClick_ = this.foundation_.handleClick.bind(this.foundation_),
            this.handleKeydown_ = this.foundation_.handleKeydown.bind(this.foundation_),
            this.handleDocumentKeydown_ = this.foundation_.handleDocumentKeydown.bind(this.foundation_),
            this.handleLayout_ = this.layout.bind(this);
            var o = ["resize", "orientationchange"];
            this.handleOpening_ = function() {
                o.forEach((function(t) {
                    return window.addEventListener(t, i.handleLayout_)
                }
                )),
                document.addEventListener("keydown", i.handleDocumentKeydown_)
            }
            ,
            this.handleClosing_ = function() {
                o.forEach((function(t) {
                    return window.removeEventListener(t, i.handleLayout_)
                }
                )),
                document.removeEventListener("keydown", i.handleDocumentKeydown_)
            }
            ,
            this.listen("click", this.handleClick_),
            this.listen("keydown", this.handleKeydown_),
            this.listen(R.OPENING_EVENT, this.handleOpening_),
            this.listen(R.CLOSING_EVENT, this.handleClosing_)
        }
        ,
        e.prototype.destroy = function() {
            this.unlisten("click", this.handleClick_),
            this.unlisten("keydown", this.handleKeydown_),
            this.unlisten(R.OPENING_EVENT, this.handleOpening_),
            this.unlisten(R.CLOSING_EVENT, this.handleClosing_),
            this.handleClosing_(),
            this.buttonRipples_.forEach((function(t) {
                return t.destroy()
            }
            )),
            t.prototype.destroy.call(this)
        }
        ,
        e.prototype.layout = function() {
            this.foundation_.layout()
        }
        ,
        e.prototype.open = function() {
            this.foundation_.open()
        }
        ,
        e.prototype.close = function(t) {
            void 0 === t && (t = ""),
            this.foundation_.close(t)
        }
        ,
        e.prototype.getDefaultFoundation = function() {
            var t = this;
            return new N({
                addBodyClass: function(t) {
                    return document.body.classList.add(t)
                },
                addClass: function(e) {
                    return t.root_.classList.add(e)
                },
                areButtonsStacked: function() {
                    return e = t.buttons_,
                    n = new Set,
                    [].forEach.call(e, (function(t) {
                        return n.add(t.offsetTop)
                    }
                    )),
                    n.size > 1;
                    var e, n
                },
                clickDefaultButton: function() {
                    return t.defaultButton_ && t.defaultButton_.click()
                },
                eventTargetMatches: function(t, e) {
                    return !!t && Object(a.b)(t, e)
                },
                getActionFromEvent: function(t) {
                    if (!t.target)
                        return "";
                    var e = Object(a.a)(t.target, "[" + R.ACTION_ATTRIBUTE + "]");
                    return e && e.getAttribute(R.ACTION_ATTRIBUTE)
                },
                getInitialFocusEl: function() {
                    return t.getInitialFocusEl_()
                },
                hasClass: function(e) {
                    return t.root_.classList.contains(e)
                },
                isContentScrollable: function() {
                    return !!(e = t.content_) && e.scrollHeight > e.offsetHeight;
                    var e
                },
                notifyClosed: function(e) {
                    return t.emit(R.CLOSED_EVENT, e ? {
                        action: e
                    } : {})
                },
                notifyClosing: function(e) {
                    return t.emit(R.CLOSING_EVENT, e ? {
                        action: e
                    } : {})
                },
                notifyOpened: function() {
                    return t.emit(R.OPENED_EVENT, {})
                },
                notifyOpening: function() {
                    return t.emit(R.OPENING_EVENT, {})
                },
                releaseFocus: function() {
                    return t.focusTrap_.deactivate()
                },
                removeBodyClass: function(t) {
                    return document.body.classList.remove(t)
                },
                removeClass: function(e) {
                    return t.root_.classList.remove(e)
                },
                reverseButtons: function() {
                    t.buttons_.reverse(),
                    t.buttons_.forEach((function(t) {
                        t.parentElement.appendChild(t)
                    }
                    ))
                },
                trapFocus: function() {
                    return t.focusTrap_.activate()
                }
            })
        }
        ,
        e.prototype.getInitialFocusEl_ = function() {
            return document.querySelector("[" + R.INITIAL_FOCUS_ATTRIBUTE + "]")
        }
        ,
        e
    }(r.a)
      , M = n(4)
      , B = n(7)
      , P = {
        CHECKED: "mdc-switch--checked",
        DISABLED: "mdc-switch--disabled"
    }
      , H = {
        NATIVE_CONTROL_SELECTOR: ".mdc-switch__native-control",
        RIPPLE_SURFACE_SELECTOR: ".mdc-switch__thumb-underlay"
    }
      , U = function(t) {
        function e(n) {
            return t.call(this, o.a({}, e.defaultAdapter, n)) || this
        }
        return o.b(e, t),
        Object.defineProperty(e, "strings", {
            get: function() {
                return H
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e, "cssClasses", {
            get: function() {
                return P
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e, "defaultAdapter", {
            get: function() {
                return {
                    addClass: function() {},
                    removeClass: function() {},
                    setNativeControlChecked: function() {},
                    setNativeControlDisabled: function() {}
                }
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.setChecked = function(t) {
            this.adapter_.setNativeControlChecked(t),
            this.updateCheckedStyling_(t)
        }
        ,
        e.prototype.setDisabled = function(t) {
            this.adapter_.setNativeControlDisabled(t),
            t ? this.adapter_.addClass(P.DISABLED) : this.adapter_.removeClass(P.DISABLED)
        }
        ,
        e.prototype.handleChange = function(t) {
            var e = t.target;
            this.updateCheckedStyling_(e.checked)
        }
        ,
        e.prototype.updateCheckedStyling_ = function(t) {
            t ? this.adapter_.addClass(P.CHECKED) : this.adapter_.removeClass(P.CHECKED)
        }
        ,
        e
    }(d.a)
      , G = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.ripple_ = e.createRipple_(),
            e
        }
        return o.b(e, t),
        e.attachTo = function(t) {
            return new e(t)
        }
        ,
        e.prototype.destroy = function() {
            t.prototype.destroy.call(this),
            this.ripple_.destroy(),
            this.nativeControl_.removeEventListener("change", this.changeHandler_)
        }
        ,
        e.prototype.initialSyncWithDOM = function() {
            var t = this;
            this.changeHandler_ = function() {
                for (var e, n = [], i = 0; i < arguments.length; i++)
                    n[i] = arguments[i];
                return (e = t.foundation_).handleChange.apply(e, o.c(n))
            }
            ,
            this.nativeControl_.addEventListener("change", this.changeHandler_),
            this.checked = this.checked
        }
        ,
        e.prototype.getDefaultFoundation = function() {
            var t = this;
            return new U({
                addClass: function(e) {
                    return t.root_.classList.add(e)
                },
                removeClass: function(e) {
                    return t.root_.classList.remove(e)
                },
                setNativeControlChecked: function(e) {
                    return t.nativeControl_.checked = e
                },
                setNativeControlDisabled: function(e) {
                    return t.nativeControl_.disabled = e
                }
            })
        }
        ,
        Object.defineProperty(e.prototype, "ripple", {
            get: function() {
                return this.ripple_
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "checked", {
            get: function() {
                return this.nativeControl_.checked
            },
            set: function(t) {
                this.foundation_.setChecked(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "disabled", {
            get: function() {
                return this.nativeControl_.disabled
            },
            set: function(t) {
                this.foundation_.setDisabled(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.createRipple_ = function() {
            var t = this
              , e = U.strings.RIPPLE_SURFACE_SELECTOR
              , n = this.root_.querySelector(e)
              , r = o.a({}, i.a.createAdapter(this), {
                addClass: function(t) {
                    return n.classList.add(t)
                },
                computeBoundingRect: function() {
                    return n.getBoundingClientRect()
                },
                deregisterInteractionHandler: function(e, n) {
                    t.nativeControl_.removeEventListener(e, n, Object(M.a)())
                },
                isSurfaceActive: function() {
                    return Object(a.b)(t.nativeControl_, ":active")
                },
                isUnbounded: function() {
                    return !0
                },
                registerInteractionHandler: function(e, n) {
                    t.nativeControl_.addEventListener(e, n, Object(M.a)())
                },
                removeClass: function(t) {
                    return n.classList.remove(t)
                },
                updateCssVariable: function(t, e) {
                    n.style.setProperty(t, e)
                }
            });
            return new i.a(this.root_,new B.a(r))
        }
        ,
        Object.defineProperty(e.prototype, "nativeControl_", {
            get: function() {
                var t = U.strings.NATIVE_CONTROL_SELECTOR;
                return this.root_.querySelector(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        e
    }(r.a);
    function V(t) {
        return (V = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        )(t)
    }
    window.SETTINGS = {
        notification: !0,
        sound: !1,
        theme: "auto",
        getComputedTheme: function() {
            return "auto" == this.theme ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : this.theme
        }
    },
    window.installPrompt = new Promise((function(t) {
        window.addEventListener("beforeinstallprompt", (function(e) {
            e.preventDefault(),
            t(e)
        }
        ))
    }
    )),
    "BeforeInstallPromptEvent"in window && Promise.resolve(n(11)),
    document.querySelectorAll('[data-mdc-auto-init="ripple"]').forEach((function(t) {
        return new i.a(t)
    }
    )),
    document.querySelectorAll('[data-mdc-auto-init="ripple-unbounded"]').forEach((function(t) {
        new i.a(t).unbounded = !0
    }
    ));
    var j = new O(document.querySelector("#themeMenu"));
    j.hoistMenuToBody(),
    j.setAnchorCorner(4);
    var K = document.querySelector("#themeSelectContainer")
      , q = document.querySelector("#themeSelectContainer select");
    K.addEventListener("click", (function() {
        var t = K.getBoundingClientRect();
        j.setAbsolutePosition(t.right - 24, t.y - 48 * q.selectedIndex),
        j.list_.selectedIndex = q.selectedIndex,
        j.open = !j.open
    }
    )),
    j.items.forEach((function(t) {
        t.addEventListener("click", (function(t) {
            var e = Number(t.target.getAttribute("data-option-index"));
            q.selectedIndex = e,
            K.querySelector(".settings-select-value").textContent = q.item(e).textContent;
            var n = SETTINGS.getComputedTheme();
            SETTINGS.theme = q.value;
            var i = SETTINGS.getComputedTheme();
            i !== n && window.dispatchEvent(new CustomEvent("themechange",{
                detail: i
            }))
        }
        ))
    }
    ));
    var z = new G(document.getElementById("notificationSwitch"))
      , X = new G(document.getElementById("soundSwitch"));
    z.listen("change", (function() {
        if (z.checked)
            X.disabled = !1;
        else {
            X.checked = !1,
            X.disabled = !0;
            var t = document.querySelectorAll(".settingslist:nth-child(2) .settings-hint");
            t[0].classList.add("hide"),
            t[1].classList.remove("hide")
        }
    }
    ));
    var W = function(t) {
        var e = t.target.checked
          , n = t.target.closest("li").querySelectorAll(".settings-hint");
        n[0].classList.toggle("hide", !e),
        n[1].classList.toggle("hide", e)
    };
    z.listen("change", W),
    X.listen("change", W);
    var Y = new p(document.querySelector("#settingsList"))
      , Q = new F(document.querySelector("#about-dialog"))
      , Z = new F(document.querySelector("#settings-dialog"));
    document.querySelector("#about-dialog-trigger").addEventListener("click", (function() {
        return Q.open()
    }
    )),
    document.querySelector("#settings-dialog-close-button").addEventListener("click", (function() {
        return Z.close("close")
    }
    )),
    Z.listen("MDCDialog:opened", (function() {
        Y.layout()
    }
    )),
    Z.listen("MDCDialog:closed", (function(t) {
        return function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if ("object" != V(t))
                throw new Error("saveSettings called with invalid input, expected { notification, sound, theme }, got ",t);
            var e = t.notification || !1
              , n = t.sound || !1
              , i = t.theme || "auto";
            localStorage.notifpref = e,
            localStorage.soundpref = n,
            localStorage.themepref = i,
            SETTINGS.notification = e,
            SETTINGS.sound = n,
            SETTINGS.theme = i
        }({
            notification: z.checked,
            sound: X.checked,
            theme: q.value
        })
    }
    )),
    document.querySelector("#settings-dialog-trigger").addEventListener("click", (function() {
        return Z.open()
    }
    ));
    var J = new O(document.querySelector("#uidiv .mdc-menu"));
    J.setAnchorCorner(1),
    J.setAnchorMargin({
        top: 20,
        bottom: 20,
        left: 20,
        right: 20
    }),
    document.querySelector("#morebutton").addEventListener("click", (function() {
        return J.open = !J.open
    }
    ));
    var $, tt, et, nt, it, ot, rt = window.DEBUG && window.DEBUG.MINUTE ? window.DEBUG.MINUTE : 6e4, at = window.DEBUG && window.DEBUG.WORKTIME ? window.DEBUG.WORKTIME : 52, st = window.DEBUG && window.DEBUG.BREAKTIME ? window.DEBUG.BREAKTIME : 17, ct = document.title, ut = St(at, "#237aff", "#ffffff"), dt = ["have a cup of tea!", "put your feet up!", "take a deep breath!", "ponder infinity…", "enjoy the moment!", "order a pizza?", "say hi to a stranger!", "take a walk around!", "stand up and stretch!", "grab some coffee!", "strike a pose!", "catch up on reading!", "have a brainstorm!", "clean your junk drawer!", "have a daydream!", "share your progress!", "clear your mind!", "meditate!", "just relax!", "find a good playlist!", "rest your eyes!", "stretch your legs!", "think of a joke!", "make a quick call!", "read a listicle!", "have a snack!", "play a quick game!", "consider the universe!", "watch a funny video!", "treat yo self!", "… have a KitKat!", "tweet the world!", "tell someone you love 'em"], lt = {
        break: "Time for a break",
        work: "Keep working!"
    }, ft = {
        break: " minutes left - ",
        work: " minutes left in this cycle"
    }, ht = at, _t = 2, pt = 1, mt = !1, Et = document.getElementById("timerfab1"), yt = document.getElementById("resetButton"), vt = document.getElementById("pulsingDot1"), gt = document.getElementById("pulsing-dot-container"), It = document.getElementById("heroNumber1"), Tt = document.getElementById("heroNumber2"), bt = document.getElementById("sharefab1"), Ct = (document.getElementById("morebutton"),
    document.getElementById("layer1div")), At = document.getElementById("layer2div");
    function St(t, e, n) {
        if ("string" != typeof e && 7 != e.length)
            throw new Error("Original parameter passed to renderColorsList isn't valid hex color value",e);
        if ("string" != typeof n && 7 != n.length)
            throw new Error("Target parameter passed to renderColorsList isn't valid hex color value",n);
        e = e.slice(1, 7),
        n = n.slice(1, 7);
        var i = new Uint8ClampedArray(3);
        i[0] = parseInt(e.slice(0, 2), 16),
        i[1] = parseInt(e.slice(2, 4), 16),
        i[2] = parseInt(e.slice(4, 6), 16);
        var o = new Uint8ClampedArray(3);
        o[0] = parseInt(n.slice(0, 2), 16),
        o[1] = parseInt(n.slice(2, 4), 16),
        o[2] = parseInt(n.slice(4, 6), 16);
        for (var r = [i], a = [(i[0] - o[0]) / (t - 1), (i[1] - o[1]) / (t - 1), (i[2] - o[2]) / (t - 1)], s = 1; s < t; s++)
            r[s] = new Uint8ClampedArray(3),
            r[s][0] = i[0] - a[0] * s,
            r[s][1] = i[1] - a[1] * s,
            r[s][2] = i[2] - a[2] * s;
        return r.map((function(t) {
            return "#".concat(t[0].toString(16).padStart(2, "0")).concat(t[1].toString(16).padStart(2, "0")).concat(t[2].toString(16).padStart(2, "0"))
        }
        ))
    }
    function Ot() {
        Lt(ot),
        $ = (new Date).getTime(),
        function(t) {
            "work" === t ? (tt = new Date($ + at * rt).getTime(),
            it = at) : "break" === t && (tt = new Date($ + st * rt).getTime(),
            it = st)
        }(ot),
        wt(),
        xt(nt, tt),
        Rt(ot),
        Mt(ot, ht)
    }
    function Lt(t) {
        "work" === t && (Ft(at),
        document.body.classList.remove("invert"),
        At.style.backgroundColor = ut[0],
        Ct.style.backgroundColor = ut[0],
        bt.classList.contains("show-fab") && (bt.classList.add("hide-fab"),
        bt.classList.add("hide"),
        bt.classList.remove("show-fab"))),
        "break" === t && (Ft(st),
        document.body.classList.add("invert"),
        At.style.backgroundColor = ut[at - 1],
        Ct.style.backgroundColor = ut[at - 1],
        bt.classList.contains("show-fab") || (bt.classList.add("show-fab"),
        bt.classList.remove("hide-fab"),
        bt.classList.remove("hide")),
        kt())
    }
    function wt() {
        return nt = (new Date).getTime()
    }
    function xt(t, e) {
        return et = (e - t) / rt,
        ht = Math.ceil(et)
    }
    function Nt() {
        var t = Ct
          , e = window.getComputedStyle(t, null).getPropertyValue("z-index")
          , n = At
          , i = window.getComputedStyle(n, null).getPropertyValue("z-index");
        i > e ? (_t = 2,
        pt = 1) : e > i && (_t = 1,
        pt = 2)
    }
    function Dt() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ot;
        Nt(),
        "break" === t ? (Ct.style.backgroundColor = ut[at - 1],
        At.style.backgroundColor = ut[at - 1],
        document.body.classList.add("invert")) : ((1 === _t ? Ct : At).style.backgroundColor = ut[Math.abs(at - ht)],
        (1 === pt ? Ct : At).style.backgroundColor = ut[Math.abs(at - ht) + 1],
        ht / at < .58 ? document.body.classList.add("invert") : document.body.classList.remove("invert"))
    }
    function kt() {
        Nt(),
        2 === _t ? (At.classList.add("swipe-background"),
        setTimeout((function() {
            At.classList.add("unswipe-background")
        }
        ), 520),
        setTimeout((function() {
            At.style.zIndex = "-2",
            setTimeout((function() {
                Ct.style.zIndex = "0"
            }
            ), 1),
            setTimeout((function() {
                At.style.zIndex = "-1"
            }
            ), 2)
        }
        ), 512),
        setTimeout((function() {
            At.classList.remove("unswipe-background", "swipe-background")
        }
        ), 1e3)) : 1 === _t && (Ct.classList.add("swipe-background"),
        setTimeout((function() {
            Ct.classList.add("unswipe-background")
        }
        ), 520),
        setTimeout((function() {
            Ct.style.zIndex = "-2",
            setTimeout((function() {
                At.style.zIndex = "0"
            }
            ), 1),
            setTimeout((function() {
                Ct.style.zIndex = "-1"
            }
            ), 2)
        }
        ), 512),
        setTimeout((function() {
            Ct.classList.remove("unswipe-background", "swipe-background")
        }
        ), 1e3))
    }
    function Rt(t) {
        document.title = null == t ? ct : "".concat(ht, "m ").concat(t, " remaining - ").concat(ct)
    }
    function Ft(t) {
        var e = setInterval((function() {
            It.innerHTML = ht,
            Tt.innerHTML = ht,
            ht !== t ? ht++ : clearInterval(e)
        }
        ), 30)
    }
    function Mt(t, e) {
        SETTINGS.notification && function(t, e, n) {
            if ("granted" !== Notification.permission)
                Notification.requestPermission();
            else {
                var i = new Notification(e,{
                    icon: "images/icon.png",
                    body: n
                });
                !function(t) {
                    if (SETTINGS.sound && (52 === ht || 17 === ht && "break" === cycleType)) {
                        if ("work" === t)
                            new Audio("sound/end_break.wav").play();
                        else if ("break" === t) {
                            new Audio("sound/end_work.wav").play()
                        }
                    }
                }(t),
                i.onclick = function() {
                    window.focus(),
                    i.close()
                }
            }
        }(t, lt[t], function(t, e) {
            if ("break" === t)
                return e + ft[t] + dt[Math.floor(Math.random() * dt.length)];
            if ("work" === t)
                return e + ft[t];
            if ("unpaused" === t)
                return e + ft[t]
        }(t, e))
    }
    Et.addEventListener("click", (function() {
        ot = "work",
        mt = !0,
        Ot(),
        setTimeout((function() {
            Et.classList.add("hide")
        }
        ), 200),
        yt.disabled = !1,
        Et.classList.add("hide-fab"),
        Et.classList.remove("show-fab"),
        vt.classList.remove("hide"),
        vt.classList.add("show-dot"),
        gt.classList.add("pulseStart");
        var t = setInterval((function() {
            if (!mt)
                return It.innerHTML = at,
                Tt.innerHTML = at,
                void clearInterval(t);
            wt(),
            xt(nt, tt),
            function(t) {
                Nt(),
                2 === _t ? (It.innerHTML = ht,
                setTimeout((function() {
                    Tt.innerHTML = ht
                }
                ), 520)) : 1 === _t && (Tt.innerHTML = ht,
                setTimeout((function() {
                    It.innerHTML = ht
                }
                ), 520));
                if (it === ht)
                    return;
                switch (Rt(t),
                ht) {
                case 35:
                case 14:
                case 5:
                    console.log('no');
                }
                it = ht,
                "work" === t && (Dt(ot),
                ht < at && kt())
            }(ot),
            mt && ht <= 0 && (!function() {
                ot = "work" === ot ? "break" : "work";
                var t = new CustomEvent("cyclechange",{
                    detail: ot
                });
                window.dispatchEvent(t)
            }(),
            Ot())
        }
        ), 1e3)
          , e = new CustomEvent("cyclechange",{
            detail: "work"
        });
        window.dispatchEvent(e)
    }
    )),
    yt.addEventListener("click", (function() {
        if (!0 !== mt)
            return;
        yt.classList.add("spinit"),
        setTimeout((function() {
            yt.classList.remove("spinit"),
            yt.disabled = !0
        }
        ), 610),
        mt = !1,
        Rt(null),
        bt.classList.add("hide-fab"),
        Et.classList.remove("hide-fab", "hide"),
        Et.classList.contains("show-fab") || Et.classList.add("show-fab");
        vt.classList.contains("hide") || vt.classList.add("hide");
        Lt("work"),
        ot = null
    }
    )),
    window.addEventListener("themechange", (function(t) {
        var e = "light" == t.detail
          , n = document.querySelector("#dark-theme-preload");
        e ? "stylesheet" == n.rel && (n.sheet.disabled = !0) : "stylesheet" == n.rel ? n.sheet.disabled = !1 : n.rel = "stylesheet",
        ut = e ? St(at, "#237aff", "#ffffff") : St(at, "#183767", "#121212"),
        Dt(),
        document.querySelector('meta[name="theme-color"]').setAttribute("content", e ? "#237aff" : "#183767")
    }
    )),
    document.addEventListener("DOMContentLoaded", (function() {
        "granted" !== Notification.permission && Notification.requestPermission()
    }
    )),
    window.onbeforeunload = function(t) {
        if (!0 === mt)
            return (t = t || window.event) && (t.returnValue = "5217 is still running! Are you sure you want to quit?"),
            "5217 is still running! Are you sure you want to quit?"
    }
    ,
    "undefined" != typeof Storage && (void 0 === localStorage.notifpref && (localStorage.notifpref = "true"),
    void 0 === localStorage.soundpref && (localStorage.soundpref = "false"),
    void 0 === localStorage.themepref && (localStorage.themepref = "auto"),
    SETTINGS.notification = "true" == localStorage.notifpref,
    SETTINGS.sound = SETTINGS.notification && "true" == localStorage.soundpref,
    SETTINGS.theme = localStorage.themepref,
    function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if ("object" != V(t))
            throw new Error("changeSettingsState called with invalid input, expected { notification, sound, theme }, got ",t);
        t.notification ? (z.checked = !0,
        X.disabled = !1) : (z.checked = !1,
        X.checked = !1,
        X.disabled = !0),
        t.sound ? X.checked = !0 : X.checked = !1;
        var e = 0;
        switch (t.theme) {
        case "light":
            e = 1;
            break;
        case "dark":
            e = 2;
            break;
        default:
            e = 0
        }
        q.selectedIndex = e;
        var n = document.querySelectorAll(".settingslist")
          , i = Array.from(n).map((function(t) {
            return t.querySelectorAll(".settings-hint")
        }
        ));
        i[0][0].classList.toggle("hide", !t.notification),
        i[0][1].classList.toggle("hide", t.notification),
        i[1][0].classList.toggle("hide", !t.sound),
        i[1][1].classList.toggle("hide", t.sound),
        K.querySelector(".settings-select-value").textContent = q.item(e).textContent
    }(SETTINGS),
    "light" != SETTINGS.getComputedTheme() && window.dispatchEvent(new CustomEvent("themechange",{
        detail: "dark"
    }))),
    "not all" !== window.matchMedia("(prefers-color-scheme)").media && window.matchMedia("(prefers-color-scheme: dark)").addListener((function(t) {
        "auto" === SETTINGS.theme && window.dispatchEvent(new CustomEvent("themechange",{
            detail: t.matches ? "dark" : "light"
        }))
    }
    ))
}
]);
