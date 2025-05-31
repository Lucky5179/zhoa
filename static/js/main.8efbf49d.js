/*! For license information please see main.8efbf49d.js.LICENSE.txt */
(() => {
  "use strict";
  var e = {
      4: (e, t, n) => {
        var r = n(853),
          i = n(43),
          o = n(950);
        function a(e) {
          var t = "https://react.dev/errors/" + e;
          if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
              t += "&args[]=" + encodeURIComponent(arguments[n]);
          }
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        function s(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        var l = Symbol.for("react.element"),
          u = Symbol.for("react.transitional.element"),
          c = Symbol.for("react.portal"),
          d = Symbol.for("react.fragment"),
          f = Symbol.for("react.strict_mode"),
          h = Symbol.for("react.profiler"),
          p = Symbol.for("react.provider"),
          m = Symbol.for("react.consumer"),
          g = Symbol.for("react.context"),
          v = Symbol.for("react.forward_ref"),
          y = Symbol.for("react.suspense"),
          b = Symbol.for("react.suspense_list"),
          w = Symbol.for("react.memo"),
          x = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var S = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"), Symbol.for("react.tracing_marker");
        var k = Symbol.for("react.memo_cache_sentinel"),
          E = Symbol.iterator;
        function C(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (E && e[E]) || e["@@iterator"])
            ? e
            : null;
        }
        var P = Symbol.for("react.client.reference");
        function T(e) {
          if (null == e) return null;
          if ("function" === typeof e)
            return e.$$typeof === P ? null : e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case d:
              return "Fragment";
            case c:
              return "Portal";
            case h:
              return "Profiler";
            case f:
              return "StrictMode";
            case y:
              return "Suspense";
            case b:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case g:
                return (e.displayName || "Context") + ".Provider";
              case m:
                return (e._context.displayName || "Context") + ".Consumer";
              case v:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case w:
                return null !== (t = e.displayName || null)
                  ? t
                  : T(e.type) || "Memo";
              case x:
                (t = e._payload), (e = e._init);
                try {
                  return T(e(t));
                } catch (n) {}
            }
          return null;
        }
        var A,
          R,
          L = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          j = Object.assign;
        function z(e) {
          if (void 0 === A)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              (A = (t && t[1]) || ""),
                (R =
                  -1 < n.stack.indexOf("\n    at")
                    ? " (<anonymous>)"
                    : -1 < n.stack.indexOf("@")
                    ? "@unknown:0:0"
                    : "");
            }
          return "\n" + A + e + R;
        }
        var D = !1;
        function M(e, t) {
          if (!e || D) return "";
          D = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            var r = {
              DetermineComponentFrameRoot: function () {
                try {
                  if (t) {
                    var n = function () {
                      throw Error();
                    };
                    if (
                      (Object.defineProperty(n.prototype, "props", {
                        set: function () {
                          throw Error();
                        },
                      }),
                      "object" === typeof Reflect && Reflect.construct)
                    ) {
                      try {
                        Reflect.construct(n, []);
                      } catch (i) {
                        var r = i;
                      }
                      Reflect.construct(e, [], n);
                    } else {
                      try {
                        n.call();
                      } catch (o) {
                        r = o;
                      }
                      e.call(n.prototype);
                    }
                  } else {
                    try {
                      throw Error();
                    } catch (a) {
                      r = a;
                    }
                    (n = e()) &&
                      "function" === typeof n.catch &&
                      n.catch(function () {});
                  }
                } catch (s) {
                  if (s && r && "string" === typeof s.stack)
                    return [s.stack, r.stack];
                }
                return [null, null];
              },
            };
            r.DetermineComponentFrameRoot.displayName =
              "DetermineComponentFrameRoot";
            var i = Object.getOwnPropertyDescriptor(
              r.DetermineComponentFrameRoot,
              "name"
            );
            i &&
              i.configurable &&
              Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot",
              });
            var o = r.DetermineComponentFrameRoot(),
              a = o[0],
              s = o[1];
            if (a && s) {
              var l = a.split("\n"),
                u = s.split("\n");
              for (
                i = r = 0;
                r < l.length && !l[r].includes("DetermineComponentFrameRoot");

              )
                r++;
              for (
                ;
                i < u.length && !u[i].includes("DetermineComponentFrameRoot");

              )
                i++;
              if (r === l.length || i === u.length)
                for (
                  r = l.length - 1, i = u.length - 1;
                  1 <= r && 0 <= i && l[r] !== u[i];

                )
                  i--;
              for (; 1 <= r && 0 <= i; r--, i--)
                if (l[r] !== u[i]) {
                  if (1 !== r || 1 !== i)
                    do {
                      if ((r--, 0 > --i || l[r] !== u[i])) {
                        var c = "\n" + l[r].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            c.includes("<anonymous>") &&
                            (c = c.replace("<anonymous>", e.displayName)),
                          c
                        );
                      }
                    } while (1 <= r && 0 <= i);
                  break;
                }
            }
          } finally {
            (D = !1), (Error.prepareStackTrace = n);
          }
          return (n = e ? e.displayName || e.name : "") ? z(n) : "";
        }
        function O(e) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              return z(e.type);
            case 16:
              return z("Lazy");
            case 13:
              return z("Suspense");
            case 19:
              return z("SuspenseList");
            case 0:
            case 15:
              return (e = M(e.type, !1));
            case 11:
              return (e = M(e.type.render, !1));
            case 1:
              return (e = M(e.type, !0));
            default:
              return "";
          }
        }
        function N(e) {
          try {
            var t = "";
            do {
              (t += O(e)), (e = e.return);
            } while (e);
            return t;
          } catch (n) {
            return "\nError generating stack: " + n.message + "\n" + n.stack;
          }
        }
        function _(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function F(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function I(e) {
          if (_(e) !== e) throw Error(a(188));
        }
        function V(e) {
          var t = e.tag;
          if (5 === t || 26 === t || 27 === t || 6 === t) return e;
          for (e = e.child; null !== e; ) {
            if (null !== (t = V(e))) return t;
            e = e.sibling;
          }
          return null;
        }
        var B = Array.isArray,
          $ = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          U = { pending: !1, data: null, method: null, action: null },
          W = [],
          H = -1;
        function Y(e) {
          return { current: e };
        }
        function q(e) {
          0 > H || ((e.current = W[H]), (W[H] = null), H--);
        }
        function K(e, t) {
          H++, (W[H] = e.current), (e.current = t);
        }
        var X = Y(null),
          Q = Y(null),
          G = Y(null),
          Z = Y(null);
        function J(e, t) {
          switch ((K(G, t), K(Q, e), K(X, null), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) && (t = t.namespaceURI) ? Qc(t) : 0;
              break;
            default:
              if (
                ((t = (e = 8 === e ? t.parentNode : t).tagName),
                (e = e.namespaceURI))
              )
                t = Gc((e = Qc(e)), t);
              else
                switch (t) {
                  case "svg":
                    t = 1;
                    break;
                  case "math":
                    t = 2;
                    break;
                  default:
                    t = 0;
                }
          }
          q(X), K(X, t);
        }
        function ee() {
          q(X), q(Q), q(G);
        }
        function te(e) {
          null !== e.memoizedState && K(Z, e);
          var t = X.current,
            n = Gc(t, e.type);
          t !== n && (K(Q, e), K(X, n));
        }
        function ne(e) {
          Q.current === e && (q(X), q(Q)),
            Z.current === e && (q(Z), (Nd._currentValue = U));
        }
        var re = Object.prototype.hasOwnProperty,
          ie = r.unstable_scheduleCallback,
          oe = r.unstable_cancelCallback,
          ae = r.unstable_shouldYield,
          se = r.unstable_requestPaint,
          le = r.unstable_now,
          ue = r.unstable_getCurrentPriorityLevel,
          ce = r.unstable_ImmediatePriority,
          de = r.unstable_UserBlockingPriority,
          fe = r.unstable_NormalPriority,
          he = r.unstable_LowPriority,
          pe = r.unstable_IdlePriority,
          me = r.log,
          ge = r.unstable_setDisableYieldValue,
          ve = null,
          ye = null;
        function be(e) {
          if (
            ("function" === typeof me && ge(e),
            ye && "function" === typeof ye.setStrictMode)
          )
            try {
              ye.setStrictMode(ve, e);
            } catch (t) {}
        }
        var we = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((xe(e) / Se) | 0)) | 0;
              },
          xe = Math.log,
          Se = Math.LN2;
        var ke = 128,
          Ee = 4194304;
        function Ce(e) {
          var t = 42 & e;
          if (0 !== t) return t;
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
              return 64;
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194176 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
              return 62914560 & e;
            case 67108864:
              return 67108864;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 0;
            default:
              return e;
          }
        }
        function Pe(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            i = e.suspendedLanes,
            o = e.pingedLanes,
            a = e.warmLanes;
          e = 0 !== e.finishedLanes;
          var s = 134217727 & n;
          return (
            0 !== s
              ? 0 !== (n = s & ~i)
                ? (r = Ce(n))
                : 0 !== (o &= s)
                ? (r = Ce(o))
                : e || (0 !== (a = s & ~a) && (r = Ce(a)))
              : 0 !== (s = n & ~i)
              ? (r = Ce(s))
              : 0 !== o
              ? (r = Ce(o))
              : e || (0 !== (a = n & ~a) && (r = Ce(a))),
            0 === r
              ? 0
              : 0 !== t &&
                t !== r &&
                0 === (t & i) &&
                ((i = r & -r) >= (a = t & -t) ||
                  (32 === i && 0 !== (4194176 & a)))
              ? t
              : r
          );
        }
        function Te(e, t) {
          return (
            0 === (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t)
          );
        }
        function Ae(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
            case 8:
              return t + 250;
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function Re() {
          var e = ke;
          return 0 === (4194176 & (ke <<= 1)) && (ke = 128), e;
        }
        function Le() {
          var e = Ee;
          return 0 === (62914560 & (Ee <<= 1)) && (Ee = 4194304), e;
        }
        function je(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function ze(e, t) {
          (e.pendingLanes |= t),
            268435456 !== t &&
              ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
        }
        function De(e, t, n) {
          (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
          var r = 31 - we(t);
          (e.entangledLanes |= t),
            (e.entanglements[r] =
              1073741824 | e.entanglements[r] | (4194218 & n));
        }
        function Me(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - we(n),
              i = 1 << r;
            (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
          }
        }
        function Oe(e) {
          return 2 < (e &= -e)
            ? 8 < e
              ? 0 !== (134217727 & e)
                ? 32
                : 268435456
              : 8
            : 2;
        }
        function Ne() {
          var e = $.p;
          return 0 !== e ? e : void 0 === (e = window.event) ? 32 : Gd(e.type);
        }
        var _e = Math.random().toString(36).slice(2),
          Fe = "__reactFiber$" + _e,
          Ie = "__reactProps$" + _e,
          Ve = "__reactContainer$" + _e,
          Be = "__reactEvents$" + _e,
          $e = "__reactListeners$" + _e,
          Ue = "__reactHandles$" + _e,
          We = "__reactResources$" + _e,
          He = "__reactMarker$" + _e;
        function Ye(e) {
          delete e[Fe], delete e[Ie], delete e[Be], delete e[$e], delete e[Ue];
        }
        function qe(e) {
          var t = e[Fe];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[Ve] || n[Fe])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ld(e); null !== e; ) {
                  if ((n = e[Fe])) return n;
                  e = ld(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function Ke(e) {
          if ((e = e[Fe] || e[Ve])) {
            var t = e.tag;
            if (
              5 === t ||
              6 === t ||
              13 === t ||
              26 === t ||
              27 === t ||
              3 === t
            )
              return e;
          }
          return null;
        }
        function Xe(e) {
          var t = e.tag;
          if (5 === t || 26 === t || 27 === t || 6 === t) return e.stateNode;
          throw Error(a(33));
        }
        function Qe(e) {
          var t = e[We];
          return (
            t ||
              (t = e[We] =
                { hoistableStyles: new Map(), hoistableScripts: new Map() }),
            t
          );
        }
        function Ge(e) {
          e[He] = !0;
        }
        var Ze = new Set(),
          Je = {};
        function et(e, t) {
          tt(e, t), tt(e + "Capture", t);
        }
        function tt(e, t) {
          for (Je[e] = t, e = 0; e < t.length; e++) Ze.add(t[e]);
        }
        var nt = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          rt = RegExp(
            "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
          ),
          it = {},
          ot = {};
        function at(e, t, n) {
          if (
            ((i = t),
            re.call(ot, i) ||
              (!re.call(it, i) &&
                (rt.test(i) ? (ot[i] = !0) : ((it[i] = !0), 0))))
          )
            if (null === n) e.removeAttribute(t);
            else {
              switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                  return void e.removeAttribute(t);
                case "boolean":
                  var r = t.toLowerCase().slice(0, 5);
                  if ("data-" !== r && "aria-" !== r)
                    return void e.removeAttribute(t);
              }
              e.setAttribute(t, "" + n);
            }
          var i;
        }
        function st(e, t, n) {
          if (null === n) e.removeAttribute(t);
          else {
            switch (typeof n) {
              case "undefined":
              case "function":
              case "symbol":
              case "boolean":
                return void e.removeAttribute(t);
            }
            e.setAttribute(t, "" + n);
          }
        }
        function lt(e, t, n, r) {
          if (null === r) e.removeAttribute(n);
          else {
            switch (typeof r) {
              case "undefined":
              case "function":
              case "symbol":
              case "boolean":
                return void e.removeAttribute(n);
            }
            e.setAttributeNS(t, n, "" + r);
          }
        }
        function ut(e) {
          switch (typeof e) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function ct(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function dt(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = ct(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var i = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return i.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), o.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function ft(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = ct(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function ht(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        var pt = /[\n"\\]/g;
        function mt(e) {
          return e.replace(pt, function (e) {
            return "\\" + e.charCodeAt(0).toString(16) + " ";
          });
        }
        function gt(e, t, n, r, i, o, a, s) {
          (e.name = ""),
            null != a &&
            "function" !== typeof a &&
            "symbol" !== typeof a &&
            "boolean" !== typeof a
              ? (e.type = a)
              : e.removeAttribute("type"),
            null != t
              ? "number" === a
                ? ((0 === t && "" === e.value) || e.value != t) &&
                  (e.value = "" + ut(t))
                : e.value !== "" + ut(t) && (e.value = "" + ut(t))
              : ("submit" !== a && "reset" !== a) || e.removeAttribute("value"),
            null != t
              ? yt(e, a, ut(t))
              : null != n
              ? yt(e, a, ut(n))
              : null != r && e.removeAttribute("value"),
            null == i && null != o && (e.defaultChecked = !!o),
            null != i &&
              (e.checked =
                i && "function" !== typeof i && "symbol" !== typeof i),
            null != s &&
            "function" !== typeof s &&
            "symbol" !== typeof s &&
            "boolean" !== typeof s
              ? (e.name = "" + ut(s))
              : e.removeAttribute("name");
        }
        function vt(e, t, n, r, i, o, a, s) {
          if (
            (null != o &&
              "function" !== typeof o &&
              "symbol" !== typeof o &&
              "boolean" !== typeof o &&
              (e.type = o),
            null != t || null != n)
          ) {
            if (
              !(
                ("submit" !== o && "reset" !== o) ||
                (void 0 !== t && null !== t)
              )
            )
              return;
            (n = null != n ? "" + ut(n) : ""),
              (t = null != t ? "" + ut(t) : n),
              s || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          (r =
            "function" !== typeof (r = null != r ? r : i) &&
            "symbol" !== typeof r &&
            !!r),
            (e.checked = s ? e.checked : !!r),
            (e.defaultChecked = !!r),
            null != a &&
              "function" !== typeof a &&
              "symbol" !== typeof a &&
              "boolean" !== typeof a &&
              (e.name = a);
        }
        function yt(e, t, n) {
          ("number" === t && ht(e.ownerDocument) === e) ||
            e.defaultValue === "" + n ||
            (e.defaultValue = "" + n);
        }
        function bt(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
            for (n = 0; n < e.length; n++)
              (i = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + ut(n), t = null, i = 0; i < e.length; i++) {
              if (e[i].value === n)
                return (
                  (e[i].selected = !0), void (r && (e[i].defaultSelected = !0))
                );
              null !== t || e[i].disabled || (t = e[i]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function wt(e, t, n) {
          null == t ||
          ((t = "" + ut(t)) !== e.value && (e.value = t), null != n)
            ? (e.defaultValue = null != n ? "" + ut(n) : "")
            : e.defaultValue !== t && (e.defaultValue = t);
        }
        function xt(e, t, n, r) {
          if (null == t) {
            if (null != r) {
              if (null != n) throw Error(a(92));
              if (B(r)) {
                if (1 < r.length) throw Error(a(93));
                r = r[0];
              }
              n = r;
            }
            null == n && (n = ""), (t = n);
          }
          (n = ut(t)),
            (e.defaultValue = n),
            (r = e.textContent) === n &&
              "" !== r &&
              null !== r &&
              (e.value = r);
        }
        function St(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var kt = new Set(
          "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
            " "
          )
        );
        function Et(e, t, n) {
          var r = 0 === t.indexOf("--");
          null == n || "boolean" === typeof n || "" === n
            ? r
              ? e.setProperty(t, "")
              : "float" === t
              ? (e.cssFloat = "")
              : (e[t] = "")
            : r
            ? e.setProperty(t, n)
            : "number" !== typeof n || 0 === n || kt.has(t)
            ? "float" === t
              ? (e.cssFloat = n)
              : (e[t] = ("" + n).trim())
            : (e[t] = n + "px");
        }
        function Ct(e, t, n) {
          if (null != t && "object" !== typeof t) throw Error(a(62));
          if (((e = e.style), null != n)) {
            for (var r in n)
              !n.hasOwnProperty(r) ||
                (null != t && t.hasOwnProperty(r)) ||
                (0 === r.indexOf("--")
                  ? e.setProperty(r, "")
                  : "float" === r
                  ? (e.cssFloat = "")
                  : (e[r] = ""));
            for (var i in t)
              (r = t[i]), t.hasOwnProperty(i) && n[i] !== r && Et(e, i, r);
          } else for (var o in t) t.hasOwnProperty(o) && Et(e, o, t[o]);
        }
        function Pt(e) {
          if (-1 === e.indexOf("-")) return !1;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var Tt = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"],
          ]),
          At =
            /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function Rt(e) {
          return At.test("" + e)
            ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
            : e;
        }
        var Lt = null;
        function jt(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var zt = null,
          Dt = null;
        function Mt(e) {
          var t = Ke(e);
          if (t && (e = t.stateNode)) {
            var n = e[Ie] || null;
            e: switch (((e = t.stateNode), t.type)) {
              case "input":
                if (
                  (gt(
                    e,
                    n.value,
                    n.defaultValue,
                    n.defaultValue,
                    n.checked,
                    n.defaultChecked,
                    n.type,
                    n.name
                  ),
                  (t = n.name),
                  "radio" === n.type && null != t)
                ) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      'input[name="' + mt("" + t) + '"][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var i = r[Ie] || null;
                      if (!i) throw Error(a(90));
                      gt(
                        r,
                        i.value,
                        i.defaultValue,
                        i.defaultValue,
                        i.checked,
                        i.defaultChecked,
                        i.type,
                        i.name
                      );
                    }
                  }
                  for (t = 0; t < n.length; t++)
                    (r = n[t]).form === e.form && ft(r);
                }
                break e;
              case "textarea":
                wt(e, n.value, n.defaultValue);
                break e;
              case "select":
                null != (t = n.value) && bt(e, !!n.multiple, t, !1);
            }
          }
        }
        var Ot = !1;
        function Nt(e, t, n) {
          if (Ot) return e(t, n);
          Ot = !0;
          try {
            return e(t);
          } finally {
            if (
              ((Ot = !1),
              (null !== zt || null !== Dt) &&
                (Fu(), zt && ((t = zt), (e = Dt), (Dt = zt = null), Mt(t), e)))
            )
              for (t = 0; t < e.length; t++) Mt(e[t]);
          }
        }
        function _t(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = n[Ie] || null;
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(a(231, t, typeof n));
          return n;
        }
        var Ft = !1;
        if (nt)
          try {
            var It = {};
            Object.defineProperty(It, "passive", {
              get: function () {
                Ft = !0;
              },
            }),
              window.addEventListener("test", It, It),
              window.removeEventListener("test", It, It);
          } catch (Sf) {
            Ft = !1;
          }
        var Vt = null,
          Bt = null,
          $t = null;
        function Ut() {
          if ($t) return $t;
          var e,
            t,
            n = Bt,
            r = n.length,
            i = "value" in Vt ? Vt.value : Vt.textContent,
            o = i.length;
          for (e = 0; e < r && n[e] === i[e]; e++);
          var a = r - e;
          for (t = 1; t <= a && n[r - t] === i[o - t]; t++);
          return ($t = i.slice(e, 1 < t ? 1 - t : void 0));
        }
        function Wt(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function Ht() {
          return !0;
        }
        function Yt() {
          return !1;
        }
        function qt(e) {
          function t(t, n, r, i, o) {
            for (var a in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = i),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(a) && ((t = e[a]), (this[a] = t ? t(i) : i[a]));
            return (
              (this.isDefaultPrevented = (
                null != i.defaultPrevented
                  ? i.defaultPrevented
                  : !1 === i.returnValue
              )
                ? Ht
                : Yt),
              (this.isPropagationStopped = Yt),
              this
            );
          }
          return (
            j(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = Ht));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = Ht));
              },
              persist: function () {},
              isPersistent: Ht,
            }),
            t
          );
        }
        var Kt,
          Xt,
          Qt,
          Gt = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          Zt = qt(Gt),
          Jt = j({}, Gt, { view: 0, detail: 0 }),
          en = qt(Jt),
          tn = j({}, Jt, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: hn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== Qt &&
                    (Qt && "mousemove" === e.type
                      ? ((Kt = e.screenX - Qt.screenX),
                        (Xt = e.screenY - Qt.screenY))
                      : (Xt = Kt = 0),
                    (Qt = e)),
                  Kt);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : Xt;
            },
          }),
          nn = qt(tn),
          rn = qt(j({}, tn, { dataTransfer: 0 })),
          on = qt(j({}, Jt, { relatedTarget: 0 })),
          an = qt(
            j({}, Gt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          sn = qt(
            j({}, Gt, {
              clipboardData: function (e) {
                return "clipboardData" in e
                  ? e.clipboardData
                  : window.clipboardData;
              },
            })
          ),
          ln = qt(j({}, Gt, { data: 0 })),
          un = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          cn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          dn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function fn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = dn[e]) && !!t[e];
        }
        function hn() {
          return fn;
        }
        var pn = qt(
            j({}, Jt, {
              key: function (e) {
                if (e.key) {
                  var t = un[e.key] || e.key;
                  if ("Unidentified" !== t) return t;
                }
                return "keypress" === e.type
                  ? 13 === (e = Wt(e))
                    ? "Enter"
                    : String.fromCharCode(e)
                  : "keydown" === e.type || "keyup" === e.type
                  ? cn[e.keyCode] || "Unidentified"
                  : "";
              },
              code: 0,
              location: 0,
              ctrlKey: 0,
              shiftKey: 0,
              altKey: 0,
              metaKey: 0,
              repeat: 0,
              locale: 0,
              getModifierState: hn,
              charCode: function (e) {
                return "keypress" === e.type ? Wt(e) : 0;
              },
              keyCode: function (e) {
                return "keydown" === e.type || "keyup" === e.type
                  ? e.keyCode
                  : 0;
              },
              which: function (e) {
                return "keypress" === e.type
                  ? Wt(e)
                  : "keydown" === e.type || "keyup" === e.type
                  ? e.keyCode
                  : 0;
              },
            })
          ),
          mn = qt(
            j({}, tn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          gn = qt(
            j({}, Jt, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: hn,
            })
          ),
          vn = qt(
            j({}, Gt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = qt(
            j({}, tn, {
              deltaX: function (e) {
                return "deltaX" in e
                  ? e.deltaX
                  : "wheelDeltaX" in e
                  ? -e.wheelDeltaX
                  : 0;
              },
              deltaY: function (e) {
                return "deltaY" in e
                  ? e.deltaY
                  : "wheelDeltaY" in e
                  ? -e.wheelDeltaY
                  : "wheelDelta" in e
                  ? -e.wheelDelta
                  : 0;
              },
              deltaZ: 0,
              deltaMode: 0,
            })
          ),
          bn = qt(j({}, Gt, { newState: 0, oldState: 0 })),
          wn = [9, 13, 27, 32],
          xn = nt && "CompositionEvent" in window,
          Sn = null;
        nt && "documentMode" in document && (Sn = document.documentMode);
        var kn = nt && "TextEvent" in window && !Sn,
          En = nt && (!xn || (Sn && 8 < Sn && 11 >= Sn)),
          Cn = String.fromCharCode(32),
          Pn = !1;
        function Tn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== wn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function An(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Rn = !1;
        var Ln = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function jn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Ln[e.type] : "textarea" === t;
        }
        function zn(e, t, n, r) {
          zt ? (Dt ? Dt.push(r) : (Dt = [r])) : (zt = r),
            0 < (t = Nc(t, "onChange")).length &&
              ((n = new Zt("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Dn = null,
          Mn = null;
        function On(e) {
          Ac(e, 0);
        }
        function Nn(e) {
          if (ft(Xe(e))) return e;
        }
        function _n(e, t) {
          if ("change" === e) return t;
        }
        var Fn = !1;
        if (nt) {
          var In;
          if (nt) {
            var Vn = "oninput" in document;
            if (!Vn) {
              var Bn = document.createElement("div");
              Bn.setAttribute("oninput", "return;"),
                (Vn = "function" === typeof Bn.oninput);
            }
            In = Vn;
          } else In = !1;
          Fn = In && (!document.documentMode || 9 < document.documentMode);
        }
        function $n() {
          Dn && (Dn.detachEvent("onpropertychange", Un), (Mn = Dn = null));
        }
        function Un(e) {
          if ("value" === e.propertyName && Nn(Mn)) {
            var t = [];
            zn(t, Mn, e, jt(e)), Nt(On, t);
          }
        }
        function Wn(e, t, n) {
          "focusin" === e
            ? ($n(), (Mn = n), (Dn = t).attachEvent("onpropertychange", Un))
            : "focusout" === e && $n();
        }
        function Hn(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Nn(Mn);
        }
        function Yn(e, t) {
          if ("click" === e) return Nn(t);
        }
        function qn(e, t) {
          if ("input" === e || "change" === e) return Nn(t);
        }
        var Kn =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function Xn(e, t) {
          if (Kn(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var i = n[r];
            if (!re.call(t, i) || !Kn(e[i], t[i])) return !1;
          }
          return !0;
        }
        function Qn(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function Gn(e, t) {
          var n,
            r = Qn(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = Qn(r);
          }
        }
        function Zn(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? Zn(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function Jn(e) {
          for (
            var t = ht(
              (e =
                null != e &&
                null != e.ownerDocument &&
                null != e.ownerDocument.defaultView
                  ? e.ownerDocument.defaultView
                  : window).document
            );
            t instanceof e.HTMLIFrameElement;

          ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = ht((e = t.contentWindow).document);
          }
          return t;
        }
        function er(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function tr(e, t) {
          var n = Jn(t);
          t = e.focusedElem;
          var r = e.selectionRange;
          if (
            n !== t &&
            t &&
            t.ownerDocument &&
            Zn(t.ownerDocument.documentElement, t)
          ) {
            if (null !== r && er(t))
              if (
                ((e = r.start),
                void 0 === (n = r.end) && (n = e),
                "selectionStart" in t)
              )
                (t.selectionStart = e),
                  (t.selectionEnd = Math.min(n, t.value.length));
              else if (
                (n =
                  ((e = t.ownerDocument || document) && e.defaultView) ||
                  window).getSelection
              ) {
                n = n.getSelection();
                var i = t.textContent.length,
                  o = Math.min(r.start, i);
                (r = void 0 === r.end ? o : Math.min(r.end, i)),
                  !n.extend && o > r && ((i = r), (r = o), (o = i)),
                  (i = Gn(t, o));
                var a = Gn(t, r);
                i &&
                  a &&
                  (1 !== n.rangeCount ||
                    n.anchorNode !== i.node ||
                    n.anchorOffset !== i.offset ||
                    n.focusNode !== a.node ||
                    n.focusOffset !== a.offset) &&
                  ((e = e.createRange()).setStart(i.node, i.offset),
                  n.removeAllRanges(),
                  o > r
                    ? (n.addRange(e), n.extend(a.node, a.offset))
                    : (e.setEnd(a.node, a.offset), n.addRange(e)));
              }
            for (e = [], n = t; (n = n.parentNode); )
              1 === n.nodeType &&
                e.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
            for (
              "function" === typeof t.focus && t.focus(), t = 0;
              t < e.length;
              t++
            )
              ((n = e[t]).element.scrollLeft = n.left),
                (n.element.scrollTop = n.top);
          }
        }
        var nr =
            nt && "documentMode" in document && 11 >= document.documentMode,
          rr = null,
          ir = null,
          or = null,
          ar = !1;
        function sr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          ar ||
            null == rr ||
            rr !== ht(r) ||
            ("selectionStart" in (r = rr) && er(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (or && Xn(or, r)) ||
              ((or = r),
              0 < (r = Nc(ir, "onSelect")).length &&
                ((t = new Zt("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = rr))));
        }
        function lr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var ur = {
            animationend: lr("Animation", "AnimationEnd"),
            animationiteration: lr("Animation", "AnimationIteration"),
            animationstart: lr("Animation", "AnimationStart"),
            transitionrun: lr("Transition", "TransitionRun"),
            transitionstart: lr("Transition", "TransitionStart"),
            transitioncancel: lr("Transition", "TransitionCancel"),
            transitionend: lr("Transition", "TransitionEnd"),
          },
          cr = {},
          dr = {};
        function fr(e) {
          if (cr[e]) return cr[e];
          if (!ur[e]) return e;
          var t,
            n = ur[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in dr) return (cr[e] = n[t]);
          return e;
        }
        nt &&
          ((dr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete ur.animationend.animation,
            delete ur.animationiteration.animation,
            delete ur.animationstart.animation),
          "TransitionEvent" in window || delete ur.transitionend.transition);
        var hr = fr("animationend"),
          pr = fr("animationiteration"),
          mr = fr("animationstart"),
          gr = fr("transitionrun"),
          vr = fr("transitionstart"),
          yr = fr("transitioncancel"),
          br = fr("transitionend"),
          wr = new Map(),
          xr =
            "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
              " "
            );
        function Sr(e, t) {
          wr.set(e, t), et(t, [e]);
        }
        var kr = [],
          Er = 0,
          Cr = 0;
        function Pr() {
          for (var e = Er, t = (Cr = Er = 0); t < e; ) {
            var n = kr[t];
            kr[t++] = null;
            var r = kr[t];
            kr[t++] = null;
            var i = kr[t];
            kr[t++] = null;
            var o = kr[t];
            if (((kr[t++] = null), null !== r && null !== i)) {
              var a = r.pending;
              null === a ? (i.next = i) : ((i.next = a.next), (a.next = i)),
                (r.pending = i);
            }
            0 !== o && Lr(n, i, o);
          }
        }
        function Tr(e, t, n, r) {
          (kr[Er++] = e),
            (kr[Er++] = t),
            (kr[Er++] = n),
            (kr[Er++] = r),
            (Cr |= r),
            (e.lanes |= r),
            null !== (e = e.alternate) && (e.lanes |= r);
        }
        function Ar(e, t, n, r) {
          return Tr(e, t, n, r), jr(e);
        }
        function Rr(e, t) {
          return Tr(e, null, null, t), jr(e);
        }
        function Lr(e, t, n) {
          e.lanes |= n;
          var r = e.alternate;
          null !== r && (r.lanes |= n);
          for (var i = !1, o = e.return; null !== o; )
            (o.childLanes |= n),
              null !== (r = o.alternate) && (r.childLanes |= n),
              22 === o.tag &&
                (null === (e = o.stateNode) || 1 & e._visibility || (i = !0)),
              (e = o),
              (o = o.return);
          i &&
            null !== t &&
            3 === e.tag &&
            ((o = e.stateNode),
            (i = 31 - we(n)),
            null === (e = (o = o.hiddenUpdates)[i]) ? (o[i] = [t]) : e.push(t),
            (t.lane = 536870912 | n));
        }
        function jr(e) {
          if (50 < Au) throw ((Au = 0), (Ru = null), Error(a(185)));
          for (var t = e.return; null !== t; ) t = (e = t).return;
          return 3 === e.tag ? e.stateNode : null;
        }
        var zr = {},
          Dr = new WeakMap();
        function Mr(e, t) {
          if ("object" === typeof e && null !== e) {
            var n = Dr.get(e);
            return void 0 !== n
              ? n
              : ((t = { value: e, source: t, stack: N(t) }), Dr.set(e, t), t);
          }
          return { value: e, source: t, stack: N(t) };
        }
        var Or = [],
          Nr = 0,
          _r = null,
          Fr = 0,
          Ir = [],
          Vr = 0,
          Br = null,
          $r = 1,
          Ur = "";
        function Wr(e, t) {
          (Or[Nr++] = Fr), (Or[Nr++] = _r), (_r = e), (Fr = t);
        }
        function Hr(e, t, n) {
          (Ir[Vr++] = $r), (Ir[Vr++] = Ur), (Ir[Vr++] = Br), (Br = e);
          var r = $r;
          e = Ur;
          var i = 32 - we(r) - 1;
          (r &= ~(1 << i)), (n += 1);
          var o = 32 - we(t) + i;
          if (30 < o) {
            var a = i - (i % 5);
            (o = (r & ((1 << a) - 1)).toString(32)),
              (r >>= a),
              (i -= a),
              ($r = (1 << (32 - we(t) + i)) | (n << i) | r),
              (Ur = o + e);
          } else ($r = (1 << o) | (n << i) | r), (Ur = e);
        }
        function Yr(e) {
          null !== e.return && (Wr(e, 1), Hr(e, 1, 0));
        }
        function qr(e) {
          for (; e === _r; )
            (_r = Or[--Nr]), (Or[Nr] = null), (Fr = Or[--Nr]), (Or[Nr] = null);
          for (; e === Br; )
            (Br = Ir[--Vr]),
              (Ir[Vr] = null),
              (Ur = Ir[--Vr]),
              (Ir[Vr] = null),
              ($r = Ir[--Vr]),
              (Ir[Vr] = null);
        }
        var Kr = null,
          Xr = null,
          Qr = !1,
          Gr = null,
          Zr = !1,
          Jr = Error(a(519));
        function ei(e) {
          throw (oi(Mr(Error(a(418, "")), e)), Jr);
        }
        function ti(e) {
          var t = e.stateNode,
            n = e.type,
            r = e.memoizedProps;
          switch (((t[Fe] = e), (t[Ie] = r), n)) {
            case "dialog":
              Rc("cancel", t), Rc("close", t);
              break;
            case "iframe":
            case "object":
            case "embed":
              Rc("load", t);
              break;
            case "video":
            case "audio":
              for (n = 0; n < Pc.length; n++) Rc(Pc[n], t);
              break;
            case "source":
              Rc("error", t);
              break;
            case "img":
            case "image":
            case "link":
              Rc("error", t), Rc("load", t);
              break;
            case "details":
              Rc("toggle", t);
              break;
            case "input":
              Rc("invalid", t),
                vt(
                  t,
                  r.value,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name,
                  !0
                ),
                dt(t);
              break;
            case "select":
              Rc("invalid", t);
              break;
            case "textarea":
              Rc("invalid", t),
                xt(t, r.value, r.defaultValue, r.children),
                dt(t);
          }
          ("string" !== typeof (n = r.children) &&
            "number" !== typeof n &&
            "bigint" !== typeof n) ||
          t.textContent === "" + n ||
          !0 === r.suppressHydrationWarning ||
          $c(t.textContent, n)
            ? (null != r.popover && (Rc("beforetoggle", t), Rc("toggle", t)),
              null != r.onScroll && Rc("scroll", t),
              null != r.onScrollEnd && Rc("scrollend", t),
              null != r.onClick && (t.onclick = Uc),
              (t = !0))
            : (t = !1),
            t || ei(e);
        }
        function ni(e) {
          for (Kr = e.return; Kr; )
            switch (Kr.tag) {
              case 3:
              case 27:
                return void (Zr = !0);
              case 5:
              case 13:
                return void (Zr = !1);
              default:
                Kr = Kr.return;
            }
        }
        function ri(e) {
          if (e !== Kr) return !1;
          if (!Qr) return ni(e), (Qr = !0), !1;
          var t,
            n = !1;
          if (
            ((t = 3 !== e.tag && 27 !== e.tag) &&
              ((t = 5 === e.tag) &&
                (t =
                  !("form" !== (t = e.type) && "button" !== t) ||
                  Zc(e.type, e.memoizedProps)),
              (t = !t)),
            t && (n = !0),
            n && Xr && ei(e),
            ni(e),
            13 === e.tag)
          ) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(a(317));
            e: {
              for (e = e.nextSibling, n = 0; e; ) {
                if (8 === e.nodeType)
                  if ("/$" === (t = e.data)) {
                    if (0 === n) {
                      Xr = sd(e.nextSibling);
                      break e;
                    }
                    n--;
                  } else ("$" !== t && "$!" !== t && "$?" !== t) || n++;
                e = e.nextSibling;
              }
              Xr = null;
            }
          } else Xr = Kr ? sd(e.stateNode.nextSibling) : null;
          return !0;
        }
        function ii() {
          (Xr = Kr = null), (Qr = !1);
        }
        function oi(e) {
          null === Gr ? (Gr = [e]) : Gr.push(e);
        }
        var ai = Error(a(460)),
          si = Error(a(474)),
          li = { then: function () {} };
        function ui(e) {
          return "fulfilled" === (e = e.status) || "rejected" === e;
        }
        function ci() {}
        function di(e, t, n) {
          switch (
            (void 0 === (n = e[n])
              ? e.push(t)
              : n !== t && (t.then(ci, ci), (t = n)),
            t.status)
          ) {
            case "fulfilled":
              return t.value;
            case "rejected":
              if ((e = t.reason) === ai) throw Error(a(483));
              throw e;
            default:
              if ("string" === typeof t.status) t.then(ci, ci);
              else {
                if (null !== (e = tu) && 100 < e.shellSuspendCounter)
                  throw Error(a(482));
                ((e = t).status = "pending"),
                  e.then(
                    function (e) {
                      if ("pending" === t.status) {
                        var n = t;
                        (n.status = "fulfilled"), (n.value = e);
                      }
                    },
                    function (e) {
                      if ("pending" === t.status) {
                        var n = t;
                        (n.status = "rejected"), (n.reason = e);
                      }
                    }
                  );
              }
              switch (t.status) {
                case "fulfilled":
                  return t.value;
                case "rejected":
                  if ((e = t.reason) === ai) throw Error(a(483));
                  throw e;
              }
              throw ((fi = t), ai);
          }
        }
        var fi = null;
        function hi() {
          if (null === fi) throw Error(a(459));
          var e = fi;
          return (fi = null), e;
        }
        var pi = null,
          mi = 0;
        function gi(e) {
          var t = mi;
          return (mi += 1), null === pi && (pi = []), di(pi, e, t);
        }
        function vi(e, t) {
          (t = t.props.ref), (e.ref = void 0 !== t ? t : null);
        }
        function yi(e, t) {
          if (t.$$typeof === l) throw Error(a(525));
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              a(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function bi(e) {
          return (0, e._init)(e._payload);
        }
        function wi(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e) {
            for (var t = new Map(); null !== e; )
              null !== e.key ? t.set(e.key, e) : t.set(e.index, e),
                (e = e.sibling);
            return t;
          }
          function i(e, t) {
            return ((e = _l(e, t)).index = 0), (e.sibling = null), e;
          }
          function o(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 33554434), n)
                    : r
                  : ((t.flags |= 33554434), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function s(t) {
            return e && null === t.alternate && (t.flags |= 33554434), t;
          }
          function l(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = $l(n, e.mode, r)).return = e), t)
              : (((t = i(t, n)).return = e), t);
          }
          function f(e, t, n, r) {
            var o = n.type;
            return o === d
              ? p(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === o ||
                  ("object" === typeof o &&
                    null !== o &&
                    o.$$typeof === x &&
                    bi(o) === t.type))
              ? (vi((t = i(t, n.props)), n), (t.return = e), t)
              : (vi((t = Il(n.type, n.key, n.props, null, e.mode, r)), n),
                (t.return = e),
                t);
          }
          function h(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Ul(n, e.mode, r)).return = e), t)
              : (((t = i(t, n.children || [])).return = e), t);
          }
          function p(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = Vl(n, e.mode, r, o)).return = e), t)
              : (((t = i(t, n)).return = e), t);
          }
          function m(e, t, n) {
            if (
              ("string" === typeof t && "" !== t) ||
              "number" === typeof t ||
              "bigint" === typeof t
            )
              return ((t = $l("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case u:
                  return (
                    vi((n = Il(t.type, t.key, t.props, null, e.mode, n)), t),
                    (n.return = e),
                    n
                  );
                case c:
                  return ((t = Ul(t, e.mode, n)).return = e), t;
                case x:
                  return m(e, (t = (0, t._init)(t._payload)), n);
              }
              if (B(t) || C(t))
                return ((t = Vl(t, e.mode, n, null)).return = e), t;
              if ("function" === typeof t.then) return m(e, gi(t), n);
              if (t.$$typeof === g) return m(e, Ps(e, t), n);
              yi(e, t);
            }
            return null;
          }
          function v(e, t, n, r) {
            var i = null !== t ? t.key : null;
            if (
              ("string" === typeof n && "" !== n) ||
              "number" === typeof n ||
              "bigint" === typeof n
            )
              return null !== i ? null : l(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case u:
                  return n.key === i ? f(e, t, n, r) : null;
                case c:
                  return n.key === i ? h(e, t, n, r) : null;
                case x:
                  return v(e, t, (n = (i = n._init)(n._payload)), r);
              }
              if (B(n) || C(n)) return null !== i ? null : p(e, t, n, r, null);
              if ("function" === typeof n.then) return v(e, t, gi(n), r);
              if (n.$$typeof === g) return v(e, t, Ps(e, n), r);
              yi(e, n);
            }
            return null;
          }
          function y(e, t, n, r, i) {
            if (
              ("string" === typeof r && "" !== r) ||
              "number" === typeof r ||
              "bigint" === typeof r
            )
              return l(t, (e = e.get(n) || null), "" + r, i);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case u:
                  return f(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    i
                  );
                case c:
                  return h(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    i
                  );
                case x:
                  return y(e, t, n, (r = (0, r._init)(r._payload)), i);
              }
              if (B(r) || C(r)) return p(t, (e = e.get(n) || null), r, i, null);
              if ("function" === typeof r.then) return y(e, t, n, gi(r), i);
              if (r.$$typeof === g) return y(e, t, n, Ps(t, r), i);
              yi(t, r);
            }
            return null;
          }
          function b(l, f, h, p) {
            if (
              ("object" === typeof h &&
                null !== h &&
                h.type === d &&
                null === h.key &&
                (h = h.props.children),
              "object" === typeof h && null !== h)
            ) {
              switch (h.$$typeof) {
                case u:
                  e: {
                    for (var w = h.key; null !== f; ) {
                      if (f.key === w) {
                        if ((w = h.type) === d) {
                          if (7 === f.tag) {
                            n(l, f.sibling),
                              ((p = i(f, h.props.children)).return = l),
                              (l = p);
                            break e;
                          }
                        } else if (
                          f.elementType === w ||
                          ("object" === typeof w &&
                            null !== w &&
                            w.$$typeof === x &&
                            bi(w) === f.type)
                        ) {
                          n(l, f.sibling),
                            vi((p = i(f, h.props)), h),
                            (p.return = l),
                            (l = p);
                          break e;
                        }
                        n(l, f);
                        break;
                      }
                      t(l, f), (f = f.sibling);
                    }
                    h.type === d
                      ? (((p = Vl(h.props.children, l.mode, p, h.key)).return =
                          l),
                        (l = p))
                      : (vi(
                          (p = Il(h.type, h.key, h.props, null, l.mode, p)),
                          h
                        ),
                        (p.return = l),
                        (l = p));
                  }
                  return s(l);
                case c:
                  e: {
                    for (w = h.key; null !== f; ) {
                      if (f.key === w) {
                        if (
                          4 === f.tag &&
                          f.stateNode.containerInfo === h.containerInfo &&
                          f.stateNode.implementation === h.implementation
                        ) {
                          n(l, f.sibling),
                            ((p = i(f, h.children || [])).return = l),
                            (l = p);
                          break e;
                        }
                        n(l, f);
                        break;
                      }
                      t(l, f), (f = f.sibling);
                    }
                    ((p = Ul(h, l.mode, p)).return = l), (l = p);
                  }
                  return s(l);
                case x:
                  return b(l, f, (h = (w = h._init)(h._payload)), p);
              }
              if (B(h))
                return (function (i, a, s, l) {
                  for (
                    var u = null, c = null, d = a, f = (a = 0), h = null;
                    null !== d && f < s.length;
                    f++
                  ) {
                    d.index > f ? ((h = d), (d = null)) : (h = d.sibling);
                    var p = v(i, d, s[f], l);
                    if (null === p) {
                      null === d && (d = h);
                      break;
                    }
                    e && d && null === p.alternate && t(i, d),
                      (a = o(p, a, f)),
                      null === c ? (u = p) : (c.sibling = p),
                      (c = p),
                      (d = h);
                  }
                  if (f === s.length) return n(i, d), Qr && Wr(i, f), u;
                  if (null === d) {
                    for (; f < s.length; f++)
                      null !== (d = m(i, s[f], l)) &&
                        ((a = o(d, a, f)),
                        null === c ? (u = d) : (c.sibling = d),
                        (c = d));
                    return Qr && Wr(i, f), u;
                  }
                  for (d = r(d); f < s.length; f++)
                    null !== (h = y(d, i, f, s[f], l)) &&
                      (e &&
                        null !== h.alternate &&
                        d.delete(null === h.key ? f : h.key),
                      (a = o(h, a, f)),
                      null === c ? (u = h) : (c.sibling = h),
                      (c = h));
                  return (
                    e &&
                      d.forEach(function (e) {
                        return t(i, e);
                      }),
                    Qr && Wr(i, f),
                    u
                  );
                })(l, f, h, p);
              if (C(h)) {
                if ("function" !== typeof (w = C(h))) throw Error(a(150));
                return (function (i, s, l, u) {
                  if (null == l) throw Error(a(151));
                  for (
                    var c = null,
                      d = null,
                      f = s,
                      h = (s = 0),
                      p = null,
                      g = l.next();
                    null !== f && !g.done;
                    h++, g = l.next()
                  ) {
                    f.index > h ? ((p = f), (f = null)) : (p = f.sibling);
                    var b = v(i, f, g.value, u);
                    if (null === b) {
                      null === f && (f = p);
                      break;
                    }
                    e && f && null === b.alternate && t(i, f),
                      (s = o(b, s, h)),
                      null === d ? (c = b) : (d.sibling = b),
                      (d = b),
                      (f = p);
                  }
                  if (g.done) return n(i, f), Qr && Wr(i, h), c;
                  if (null === f) {
                    for (; !g.done; h++, g = l.next())
                      null !== (g = m(i, g.value, u)) &&
                        ((s = o(g, s, h)),
                        null === d ? (c = g) : (d.sibling = g),
                        (d = g));
                    return Qr && Wr(i, h), c;
                  }
                  for (f = r(f); !g.done; h++, g = l.next())
                    null !== (g = y(f, i, h, g.value, u)) &&
                      (e &&
                        null !== g.alternate &&
                        f.delete(null === g.key ? h : g.key),
                      (s = o(g, s, h)),
                      null === d ? (c = g) : (d.sibling = g),
                      (d = g));
                  return (
                    e &&
                      f.forEach(function (e) {
                        return t(i, e);
                      }),
                    Qr && Wr(i, h),
                    c
                  );
                })(l, f, (h = w.call(h)), p);
              }
              if ("function" === typeof h.then) return b(l, f, gi(h), p);
              if (h.$$typeof === g) return b(l, f, Ps(l, h), p);
              yi(l, h);
            }
            return ("string" === typeof h && "" !== h) ||
              "number" === typeof h ||
              "bigint" === typeof h
              ? ((h = "" + h),
                null !== f && 6 === f.tag
                  ? (n(l, f.sibling), ((p = i(f, h)).return = l), (l = p))
                  : (n(l, f), ((p = $l(h, l.mode, p)).return = l), (l = p)),
                s(l))
              : n(l, f);
          }
          return function (e, t, n, r) {
            try {
              mi = 0;
              var i = b(e, t, n, r);
              return (pi = null), i;
            } catch (a) {
              if (a === ai) throw a;
              var o = Ol(29, a, null, e.mode);
              return (o.lanes = r), (o.return = e), o;
            }
          };
        }
        var xi = wi(!0),
          Si = wi(!1),
          ki = Y(null),
          Ei = Y(0);
        function Ci(e, t) {
          K(Ei, (e = uu)), K(ki, t), (uu = e | t.baseLanes);
        }
        function Pi() {
          K(Ei, uu), K(ki, ki.current);
        }
        function Ti() {
          (uu = Ei.current), q(ki), q(Ei);
        }
        var Ai = Y(null),
          Ri = null;
        function Li(e) {
          var t = e.alternate;
          K(Mi, 1 & Mi.current),
            K(Ai, e),
            null === Ri &&
              (null === t || null !== ki.current || null !== t.memoizedState) &&
              (Ri = e);
        }
        function ji(e) {
          if (22 === e.tag) {
            if ((K(Mi, Mi.current), K(Ai, e), null === Ri)) {
              var t = e.alternate;
              null !== t && null !== t.memoizedState && (Ri = e);
            }
          } else zi();
        }
        function zi() {
          K(Mi, Mi.current), K(Ai, Ai.current);
        }
        function Di(e) {
          q(Ai), Ri === e && (Ri = null), q(Mi);
        }
        var Mi = Y(0);
        function Oi(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var Ni =
            "undefined" !== typeof AbortController
              ? AbortController
              : function () {
                  var e = [],
                    t = (this.signal = {
                      aborted: !1,
                      addEventListener: function (t, n) {
                        e.push(n);
                      },
                    });
                  this.abort = function () {
                    (t.aborted = !0),
                      e.forEach(function (e) {
                        return e();
                      });
                  };
                },
          _i = r.unstable_scheduleCallback,
          Fi = r.unstable_NormalPriority,
          Ii = {
            $$typeof: g,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0,
          };
        function Vi() {
          return { controller: new Ni(), data: new Map(), refCount: 0 };
        }
        function Bi(e) {
          e.refCount--,
            0 === e.refCount &&
              _i(Fi, function () {
                e.controller.abort();
              });
        }
        var $i = null,
          Ui = 0,
          Wi = 0,
          Hi = null;
        function Yi() {
          if (0 === --Ui && null !== $i) {
            null !== Hi && (Hi.status = "fulfilled");
            var e = $i;
            ($i = null), (Wi = 0), (Hi = null);
            for (var t = 0; t < e.length; t++) (0, e[t])();
          }
        }
        var qi = L.S;
        L.S = function (e, t) {
          "object" === typeof t &&
            null !== t &&
            "function" === typeof t.then &&
            (function (e, t) {
              if (null === $i) {
                var n = ($i = []);
                (Ui = 0),
                  (Wi = xc()),
                  (Hi = {
                    status: "pending",
                    value: void 0,
                    then: function (e) {
                      n.push(e);
                    },
                  });
              }
              Ui++, t.then(Yi, Yi);
            })(0, t),
            null !== qi && qi(e, t);
        };
        var Ki = Y(null);
        function Xi() {
          var e = Ki.current;
          return null !== e ? e : tu.pooledCache;
        }
        function Qi(e, t) {
          K(Ki, null === t ? Ki.current : t.pool);
        }
        function Gi() {
          var e = Xi();
          return null === e ? null : { parent: Ii._currentValue, pool: e };
        }
        var Zi = 0,
          Ji = null,
          eo = null,
          to = null,
          no = !1,
          ro = !1,
          io = !1,
          oo = 0,
          ao = 0,
          so = null,
          lo = 0;
        function uo() {
          throw Error(a(321));
        }
        function co(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!Kn(e[n], t[n])) return !1;
          return !0;
        }
        function fo(e, t, n, r, i, o) {
          return (
            (Zi = o),
            (Ji = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (L.H = null === e || null === e.memoizedState ? Pa : Ta),
            (io = !1),
            (o = n(r, i)),
            (io = !1),
            ro && (o = po(t, n, r, i)),
            ho(e),
            o
          );
        }
        function ho(e) {
          L.H = Ca;
          var t = null !== eo && null !== eo.next;
          if (
            ((Zi = 0),
            (to = eo = Ji = null),
            (no = !1),
            (ao = 0),
            (so = null),
            t)
          )
            throw Error(a(300));
          null === e ||
            Wa ||
            (null !== (e = e.dependencies) && ks(e) && (Wa = !0));
        }
        function po(e, t, n, r) {
          Ji = e;
          var i = 0;
          do {
            if ((ro && (so = null), (ao = 0), (ro = !1), 25 <= i))
              throw Error(a(301));
            if (((i += 1), (to = eo = null), null != e.updateQueue)) {
              var o = e.updateQueue;
              (o.lastEffect = null),
                (o.events = null),
                (o.stores = null),
                null != o.memoCache && (o.memoCache.index = 0);
            }
            (L.H = Aa), (o = t(n, r));
          } while (ro);
          return o;
        }
        function mo() {
          var e = L.H,
            t = e.useState()[0];
          return (
            (t = "function" === typeof t.then ? xo(t) : t),
            (e = e.useState()[0]),
            (null !== eo ? eo.memoizedState : null) !== e && (Ji.flags |= 1024),
            t
          );
        }
        function go() {
          var e = 0 !== oo;
          return (oo = 0), e;
        }
        function vo(e, t, n) {
          (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
        }
        function yo(e) {
          if (no) {
            for (e = e.memoizedState; null !== e; ) {
              var t = e.queue;
              null !== t && (t.pending = null), (e = e.next);
            }
            no = !1;
          }
          (Zi = 0),
            (to = eo = Ji = null),
            (ro = !1),
            (ao = oo = 0),
            (so = null);
        }
        function bo() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === to ? (Ji.memoizedState = to = e) : (to = to.next = e), to
          );
        }
        function wo() {
          if (null === eo) {
            var e = Ji.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = eo.next;
          var t = null === to ? Ji.memoizedState : to.next;
          if (null !== t) (to = t), (eo = e);
          else {
            if (null === e) {
              if (null === Ji.alternate) throw Error(a(467));
              throw Error(a(310));
            }
            (e = {
              memoizedState: (eo = e).memoizedState,
              baseState: eo.baseState,
              baseQueue: eo.baseQueue,
              queue: eo.queue,
              next: null,
            }),
              null === to ? (Ji.memoizedState = to = e) : (to = to.next = e);
          }
          return to;
        }
        function xo(e) {
          var t = ao;
          return (
            (ao += 1),
            null === so && (so = []),
            (e = di(so, e, t)),
            (t = Ji),
            null === (null === to ? t.memoizedState : to.next) &&
              ((t = t.alternate),
              (L.H = null === t || null === t.memoizedState ? Pa : Ta)),
            e
          );
        }
        function So(e) {
          if (null !== e && "object" === typeof e) {
            if ("function" === typeof e.then) return xo(e);
            if (e.$$typeof === g) return Cs(e);
          }
          throw Error(a(438, String(e)));
        }
        function ko(e) {
          var t = null,
            n = Ji.updateQueue;
          if ((null !== n && (t = n.memoCache), null == t)) {
            var r = Ji.alternate;
            null !== r &&
              null !== (r = r.updateQueue) &&
              null != (r = r.memoCache) &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice();
                }),
                index: 0,
              });
          }
          if (
            (null == t && (t = { data: [], index: 0 }),
            null === n &&
              ((n = {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null,
              }),
              (Ji.updateQueue = n)),
            (n.memoCache = t),
            void 0 === (n = t.data[t.index]))
          )
            for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = k;
          return t.index++, n;
        }
        function Eo(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Co(e) {
          return Po(wo(), eo, e);
        }
        function Po(e, t, n) {
          var r = e.queue;
          if (null === r) throw Error(a(311));
          r.lastRenderedReducer = n;
          var i = e.baseQueue,
            o = r.pending;
          if (null !== o) {
            if (null !== i) {
              var s = i.next;
              (i.next = o.next), (o.next = s);
            }
            (t.baseQueue = i = o), (r.pending = null);
          }
          if (((o = e.baseState), null === i)) e.memoizedState = o;
          else {
            var l = (s = null),
              u = null,
              c = (t = i.next),
              d = !1;
            do {
              var f = -536870913 & c.lane;
              if (f !== c.lane ? (ru & f) === f : (Zi & f) === f) {
                var h = c.revertLane;
                if (0 === h)
                  null !== u &&
                    (u = u.next =
                      {
                        lane: 0,
                        revertLane: 0,
                        action: c.action,
                        hasEagerState: c.hasEagerState,
                        eagerState: c.eagerState,
                        next: null,
                      }),
                    f === Wi && (d = !0);
                else {
                  if ((Zi & h) === h) {
                    (c = c.next), h === Wi && (d = !0);
                    continue;
                  }
                  (f = {
                    lane: 0,
                    revertLane: c.revertLane,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null,
                  }),
                    null === u ? ((l = u = f), (s = o)) : (u = u.next = f),
                    (Ji.lanes |= h),
                    (du |= h);
                }
                (f = c.action),
                  io && n(o, f),
                  (o = c.hasEagerState ? c.eagerState : n(o, f));
              } else
                (h = {
                  lane: f,
                  revertLane: c.revertLane,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                }),
                  null === u ? ((l = u = h), (s = o)) : (u = u.next = h),
                  (Ji.lanes |= f),
                  (du |= f);
              c = c.next;
            } while (null !== c && c !== t);
            if (
              (null === u ? (s = o) : (u.next = l),
              !Kn(o, e.memoizedState) && ((Wa = !0), d && null !== (n = Hi)))
            )
              throw n;
            (e.memoizedState = o),
              (e.baseState = s),
              (e.baseQueue = u),
              (r.lastRenderedState = o);
          }
          return null === i && (r.lanes = 0), [e.memoizedState, r.dispatch];
        }
        function To(e) {
          var t = wo(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            i = n.pending,
            o = t.memoizedState;
          if (null !== i) {
            n.pending = null;
            var s = (i = i.next);
            do {
              (o = e(o, s.action)), (s = s.next);
            } while (s !== i);
            Kn(o, t.memoizedState) || (Wa = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o);
          }
          return [o, r];
        }
        function Ao(e, t, n) {
          var r = Ji,
            i = wo(),
            o = Qr;
          if (o) {
            if (void 0 === n) throw Error(a(407));
            n = n();
          } else n = t();
          var s = !Kn((eo || i).memoizedState, n);
          if (
            (s && ((i.memoizedState = n), (Wa = !0)),
            (i = i.queue),
            Jo(jo.bind(null, r, i, e), [e]),
            i.getSnapshot !== t ||
              s ||
              (null !== to && 1 & to.memoizedState.tag))
          ) {
            if (
              ((r.flags |= 2048),
              Ko(9, Lo.bind(null, r, i, n, t), { destroy: void 0 }, null),
              null === tu)
            )
              throw Error(a(349));
            o || 0 !== (60 & Zi) || Ro(r, t, n);
          }
          return n;
        }
        function Ro(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = Ji.updateQueue)
              ? ((t = {
                  lastEffect: null,
                  events: null,
                  stores: null,
                  memoCache: null,
                }),
                (Ji.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Lo(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), zo(t) && Do(e);
        }
        function jo(e, t, n) {
          return n(function () {
            zo(t) && Do(e);
          });
        }
        function zo(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !Kn(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Do(e) {
          var t = Rr(e, 2);
          null !== t && zu(t, e, 2);
        }
        function Mo(e) {
          var t = bo();
          if ("function" === typeof e) {
            var n = e;
            if (((e = n()), io)) {
              be(!0);
              try {
                n();
              } finally {
                be(!1);
              }
            }
          }
          return (
            (t.memoizedState = t.baseState = e),
            (t.queue = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Eo,
              lastRenderedState: e,
            }),
            t
          );
        }
        function Oo(e, t, n, r) {
          return (e.baseState = n), Po(e, eo, "function" === typeof r ? r : Eo);
        }
        function No(e, t, n, r, i) {
          if (Sa(e)) throw Error(a(485));
          if (null !== (e = t.action)) {
            var o = {
              payload: i,
              action: e,
              next: null,
              isTransition: !0,
              status: "pending",
              value: null,
              reason: null,
              listeners: [],
              then: function (e) {
                o.listeners.push(e);
              },
            };
            null !== L.T ? n(!0) : (o.isTransition = !1),
              r(o),
              null === (n = t.pending)
                ? ((o.next = t.pending = o), _o(t, o))
                : ((o.next = n.next), (t.pending = n.next = o));
          }
        }
        function _o(e, t) {
          var n = t.action,
            r = t.payload,
            i = e.state;
          if (t.isTransition) {
            var o = L.T,
              a = {};
            L.T = a;
            try {
              var s = n(i, r),
                l = L.S;
              null !== l && l(a, s), Fo(e, t, s);
            } catch (u) {
              Vo(e, t, u);
            } finally {
              L.T = o;
            }
          } else
            try {
              Fo(e, t, (o = n(i, r)));
            } catch (c) {
              Vo(e, t, c);
            }
        }
        function Fo(e, t, n) {
          null !== n && "object" === typeof n && "function" === typeof n.then
            ? n.then(
                function (n) {
                  Io(e, t, n);
                },
                function (n) {
                  return Vo(e, t, n);
                }
              )
            : Io(e, t, n);
        }
        function Io(e, t, n) {
          (t.status = "fulfilled"),
            (t.value = n),
            Bo(t),
            (e.state = n),
            null !== (t = e.pending) &&
              ((n = t.next) === t
                ? (e.pending = null)
                : ((n = n.next), (t.next = n), _o(e, n)));
        }
        function Vo(e, t, n) {
          var r = e.pending;
          if (((e.pending = null), null !== r)) {
            r = r.next;
            do {
              (t.status = "rejected"), (t.reason = n), Bo(t), (t = t.next);
            } while (t !== r);
          }
          e.action = null;
        }
        function Bo(e) {
          e = e.listeners;
          for (var t = 0; t < e.length; t++) (0, e[t])();
        }
        function $o(e, t) {
          return t;
        }
        function Uo(e, t) {
          if (Qr) {
            var n = tu.formState;
            if (null !== n) {
              e: {
                var r = Ji;
                if (Qr) {
                  if (Xr) {
                    t: {
                      for (var i = Xr, o = Zr; 8 !== i.nodeType; ) {
                        if (!o) {
                          i = null;
                          break t;
                        }
                        if (null === (i = sd(i.nextSibling))) {
                          i = null;
                          break t;
                        }
                      }
                      i = "F!" === (o = i.data) || "F" === o ? i : null;
                    }
                    if (i) {
                      (Xr = sd(i.nextSibling)), (r = "F!" === i.data);
                      break e;
                    }
                  }
                  ei(r);
                }
                r = !1;
              }
              r && (t = n[0]);
            }
          }
          return (
            ((n = bo()).memoizedState = n.baseState = t),
            (r = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: $o,
              lastRenderedState: t,
            }),
            (n.queue = r),
            (n = ba.bind(null, Ji, r)),
            (r.dispatch = n),
            (r = Mo(!1)),
            (o = xa.bind(null, Ji, !1, r.queue)),
            (i = { state: t, dispatch: null, action: e, pending: null }),
            ((r = bo()).queue = i),
            (n = No.bind(null, Ji, i, o, n)),
            (i.dispatch = n),
            (r.memoizedState = e),
            [t, n, !1]
          );
        }
        function Wo(e) {
          return Ho(wo(), eo, e);
        }
        function Ho(e, t, n) {
          (t = Po(e, t, $o)[0]),
            (e = Co(Eo)[0]),
            (t =
              "object" === typeof t &&
              null !== t &&
              "function" === typeof t.then
                ? xo(t)
                : t);
          var r = wo(),
            i = r.queue,
            o = i.dispatch;
          return (
            n !== r.memoizedState &&
              ((Ji.flags |= 2048),
              Ko(9, Yo.bind(null, i, n), { destroy: void 0 }, null)),
            [t, o, e]
          );
        }
        function Yo(e, t) {
          e.action = t;
        }
        function qo(e) {
          var t = wo(),
            n = eo;
          if (null !== n) return Ho(t, n, e);
          wo(), (t = t.memoizedState);
          var r = (n = wo()).queue.dispatch;
          return (n.memoizedState = e), [t, r, !1];
        }
        function Ko(e, t, n, r) {
          return (
            (e = { tag: e, create: t, inst: n, deps: r, next: null }),
            null === (t = Ji.updateQueue) &&
              ((t = {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null,
              }),
              (Ji.updateQueue = t)),
            null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Xo() {
          return wo().memoizedState;
        }
        function Qo(e, t, n, r) {
          var i = bo();
          (Ji.flags |= e),
            (i.memoizedState = Ko(
              1 | t,
              n,
              { destroy: void 0 },
              void 0 === r ? null : r
            ));
        }
        function Go(e, t, n, r) {
          var i = wo();
          r = void 0 === r ? null : r;
          var o = i.memoizedState.inst;
          null !== eo && null !== r && co(r, eo.memoizedState.deps)
            ? (i.memoizedState = Ko(t, n, o, r))
            : ((Ji.flags |= e), (i.memoizedState = Ko(1 | t, n, o, r)));
        }
        function Zo(e, t) {
          Qo(8390656, 8, e, t);
        }
        function Jo(e, t) {
          Go(2048, 8, e, t);
        }
        function ea(e, t) {
          return Go(4, 2, e, t);
        }
        function ta(e, t) {
          return Go(4, 4, e, t);
        }
        function na(e, t) {
          if ("function" === typeof t) {
            e = e();
            var n = t(e);
            return function () {
              "function" === typeof n ? n() : t(null);
            };
          }
          if (null !== t && void 0 !== t)
            return (
              (e = e()),
              (t.current = e),
              function () {
                t.current = null;
              }
            );
        }
        function ra(e, t, n) {
          (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Go(4, 4, na.bind(null, t, e), n);
        }
        function ia() {}
        function oa(e, t) {
          var n = wo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== t && co(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function aa(e, t) {
          var n = wo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          if (null !== t && co(t, r[1])) return r[0];
          if (((r = e()), io)) {
            be(!0);
            try {
              e();
            } finally {
              be(!1);
            }
          }
          return (n.memoizedState = [r, t]), r;
        }
        function sa(e, t, n) {
          return void 0 === n || 0 !== (1073741824 & Zi)
            ? (e.memoizedState = t)
            : ((e.memoizedState = n),
              (e = ju()),
              (Ji.lanes |= e),
              (du |= e),
              n);
        }
        function la(e, t, n, r) {
          return Kn(n, t)
            ? n
            : null !== ki.current
            ? ((e = sa(e, n, r)), Kn(e, t) || (Wa = !0), e)
            : 0 === (42 & Zi)
            ? ((Wa = !0), (e.memoizedState = n))
            : ((e = ju()), (Ji.lanes |= e), (du |= e), t);
        }
        function ua(e, t, n, r, i) {
          var o = $.p;
          $.p = 0 !== o && 8 > o ? o : 8;
          var a = L.T,
            s = {};
          (L.T = s), xa(e, !1, t, n);
          try {
            var l = i(),
              u = L.S;
            if (
              (null !== u && u(s, l),
              null !== l &&
                "object" === typeof l &&
                "function" === typeof l.then)
            )
              wa(
                e,
                t,
                (function (e, t) {
                  var n = [],
                    r = {
                      status: "pending",
                      value: null,
                      reason: null,
                      then: function (e) {
                        n.push(e);
                      },
                    };
                  return (
                    e.then(
                      function () {
                        (r.status = "fulfilled"), (r.value = t);
                        for (var e = 0; e < n.length; e++) (0, n[e])(t);
                      },
                      function (e) {
                        for (
                          r.status = "rejected", r.reason = e, e = 0;
                          e < n.length;
                          e++
                        )
                          (0, n[e])(void 0);
                      }
                    ),
                    r
                  );
                })(l, r),
                Lu()
              );
            else wa(e, t, r, Lu());
          } catch (c) {
            wa(
              e,
              t,
              { then: function () {}, status: "rejected", reason: c },
              Lu()
            );
          } finally {
            ($.p = o), (L.T = a);
          }
        }
        function ca() {}
        function da(e, t, n, r) {
          if (5 !== e.tag) throw Error(a(476));
          var i = fa(e).queue;
          ua(
            e,
            i,
            t,
            U,
            null === n
              ? ca
              : function () {
                  return ha(e), n(r);
                }
          );
        }
        function fa(e) {
          var t = e.memoizedState;
          if (null !== t) return t;
          var n = {};
          return (
            ((t = {
              memoizedState: U,
              baseState: U,
              baseQueue: null,
              queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Eo,
                lastRenderedState: U,
              },
              next: null,
            }).next = {
              memoizedState: n,
              baseState: n,
              baseQueue: null,
              queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Eo,
                lastRenderedState: n,
              },
              next: null,
            }),
            (e.memoizedState = t),
            null !== (e = e.alternate) && (e.memoizedState = t),
            t
          );
        }
        function ha(e) {
          wa(e, fa(e).next.queue, {}, Lu());
        }
        function pa() {
          return Cs(Nd);
        }
        function ma() {
          return wo().memoizedState;
        }
        function ga() {
          return wo().memoizedState;
        }
        function va(e) {
          for (var t = e.return; null !== t; ) {
            switch (t.tag) {
              case 24:
              case 3:
                var n = Lu(),
                  r = zs(t, (e = js(n)), n);
                return (
                  null !== r && (zu(r, t, n), Ds(r, t, n)),
                  (t = { cache: Vi() }),
                  void (e.payload = t)
                );
            }
            t = t.return;
          }
        }
        function ya(e, t, n) {
          var r = Lu();
          (n = {
            lane: r,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          }),
            Sa(e)
              ? ka(t, n)
              : null !== (n = Ar(e, t, n, r)) && (zu(n, e, r), Ea(n, t, r));
        }
        function ba(e, t, n) {
          wa(e, t, n, Lu());
        }
        function wa(e, t, n, r) {
          var i = {
            lane: r,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          };
          if (Sa(e)) ka(t, i);
          else {
            var o = e.alternate;
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var a = t.lastRenderedState,
                  s = o(a, n);
                if (((i.hasEagerState = !0), (i.eagerState = s), Kn(s, a)))
                  return Tr(e, t, i, 0), null === tu && Pr(), !1;
              } catch (l) {}
            if (null !== (n = Ar(e, t, i, r)))
              return zu(n, e, r), Ea(n, t, r), !0;
          }
          return !1;
        }
        function xa(e, t, n, r) {
          if (
            ((r = {
              lane: 2,
              revertLane: xc(),
              action: r,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            Sa(e))
          ) {
            if (t) throw Error(a(479));
          } else null !== (t = Ar(e, n, r, 2)) && zu(t, e, 2);
        }
        function Sa(e) {
          var t = e.alternate;
          return e === Ji || (null !== t && t === Ji);
        }
        function ka(e, t) {
          ro = no = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function Ea(e, t, n) {
          if (0 !== (4194176 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), Me(e, n);
          }
        }
        var Ca = {
          readContext: Cs,
          use: So,
          useCallback: uo,
          useContext: uo,
          useEffect: uo,
          useImperativeHandle: uo,
          useLayoutEffect: uo,
          useInsertionEffect: uo,
          useMemo: uo,
          useReducer: uo,
          useRef: uo,
          useState: uo,
          useDebugValue: uo,
          useDeferredValue: uo,
          useTransition: uo,
          useSyncExternalStore: uo,
          useId: uo,
        };
        (Ca.useCacheRefresh = uo),
          (Ca.useMemoCache = uo),
          (Ca.useHostTransitionStatus = uo),
          (Ca.useFormState = uo),
          (Ca.useActionState = uo),
          (Ca.useOptimistic = uo);
        var Pa = {
          readContext: Cs,
          use: So,
          useCallback: function (e, t) {
            return (bo().memoizedState = [e, void 0 === t ? null : t]), e;
          },
          useContext: Cs,
          useEffect: Zo,
          useImperativeHandle: function (e, t, n) {
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
              Qo(4194308, 4, na.bind(null, t, e), n);
          },
          useLayoutEffect: function (e, t) {
            return Qo(4194308, 4, e, t);
          },
          useInsertionEffect: function (e, t) {
            Qo(4, 2, e, t);
          },
          useMemo: function (e, t) {
            var n = bo();
            t = void 0 === t ? null : t;
            var r = e();
            if (io) {
              be(!0);
              try {
                e();
              } finally {
                be(!1);
              }
            }
            return (n.memoizedState = [r, t]), r;
          },
          useReducer: function (e, t, n) {
            var r = bo();
            if (void 0 !== n) {
              var i = n(t);
              if (io) {
                be(!0);
                try {
                  n(t);
                } finally {
                  be(!1);
                }
              }
            } else i = t;
            return (
              (r.memoizedState = r.baseState = i),
              (e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: i,
              }),
              (r.queue = e),
              (e = e.dispatch = ya.bind(null, Ji, e)),
              [r.memoizedState, e]
            );
          },
          useRef: function (e) {
            return (e = { current: e }), (bo().memoizedState = e);
          },
          useState: function (e) {
            var t = (e = Mo(e)).queue,
              n = ba.bind(null, Ji, t);
            return (t.dispatch = n), [e.memoizedState, n];
          },
          useDebugValue: ia,
          useDeferredValue: function (e, t) {
            return sa(bo(), e, t);
          },
          useTransition: function () {
            var e = Mo(!1);
            return (
              (e = ua.bind(null, Ji, e.queue, !0, !1)),
              (bo().memoizedState = e),
              [!1, e]
            );
          },
          useSyncExternalStore: function (e, t, n) {
            var r = Ji,
              i = bo();
            if (Qr) {
              if (void 0 === n) throw Error(a(407));
              n = n();
            } else {
              if (((n = t()), null === tu)) throw Error(a(349));
              0 !== (60 & ru) || Ro(r, t, n);
            }
            i.memoizedState = n;
            var o = { value: n, getSnapshot: t };
            return (
              (i.queue = o),
              Zo(jo.bind(null, r, o, e), [e]),
              (r.flags |= 2048),
              Ko(9, Lo.bind(null, r, o, n, t), { destroy: void 0 }, null),
              n
            );
          },
          useId: function () {
            var e = bo(),
              t = tu.identifierPrefix;
            if (Qr) {
              var n = Ur;
              (t =
                ":" +
                t +
                "R" +
                (n = ($r & ~(1 << (32 - we($r) - 1))).toString(32) + n)),
                0 < (n = oo++) && (t += "H" + n.toString(32)),
                (t += ":");
            } else t = ":" + t + "r" + (n = lo++).toString(32) + ":";
            return (e.memoizedState = t);
          },
          useCacheRefresh: function () {
            return (bo().memoizedState = va.bind(null, Ji));
          },
        };
        (Pa.useMemoCache = ko),
          (Pa.useHostTransitionStatus = pa),
          (Pa.useFormState = Uo),
          (Pa.useActionState = Uo),
          (Pa.useOptimistic = function (e) {
            var t = bo();
            t.memoizedState = t.baseState = e;
            var n = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: null,
              lastRenderedState: null,
            };
            return (
              (t.queue = n),
              (t = xa.bind(null, Ji, !0, n)),
              (n.dispatch = t),
              [e, t]
            );
          });
        var Ta = {
          readContext: Cs,
          use: So,
          useCallback: oa,
          useContext: Cs,
          useEffect: Jo,
          useImperativeHandle: ra,
          useInsertionEffect: ea,
          useLayoutEffect: ta,
          useMemo: aa,
          useReducer: Co,
          useRef: Xo,
          useState: function () {
            return Co(Eo);
          },
          useDebugValue: ia,
          useDeferredValue: function (e, t) {
            return la(wo(), eo.memoizedState, e, t);
          },
          useTransition: function () {
            var e = Co(Eo)[0],
              t = wo().memoizedState;
            return ["boolean" === typeof e ? e : xo(e), t];
          },
          useSyncExternalStore: Ao,
          useId: ma,
        };
        (Ta.useCacheRefresh = ga),
          (Ta.useMemoCache = ko),
          (Ta.useHostTransitionStatus = pa),
          (Ta.useFormState = Wo),
          (Ta.useActionState = Wo),
          (Ta.useOptimistic = function (e, t) {
            return Oo(wo(), 0, e, t);
          });
        var Aa = {
          readContext: Cs,
          use: So,
          useCallback: oa,
          useContext: Cs,
          useEffect: Jo,
          useImperativeHandle: ra,
          useInsertionEffect: ea,
          useLayoutEffect: ta,
          useMemo: aa,
          useReducer: To,
          useRef: Xo,
          useState: function () {
            return To(Eo);
          },
          useDebugValue: ia,
          useDeferredValue: function (e, t) {
            var n = wo();
            return null === eo ? sa(n, e, t) : la(n, eo.memoizedState, e, t);
          },
          useTransition: function () {
            var e = To(Eo)[0],
              t = wo().memoizedState;
            return ["boolean" === typeof e ? e : xo(e), t];
          },
          useSyncExternalStore: Ao,
          useId: ma,
        };
        function Ra(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : j({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        (Aa.useCacheRefresh = ga),
          (Aa.useMemoCache = ko),
          (Aa.useHostTransitionStatus = pa),
          (Aa.useFormState = qo),
          (Aa.useActionState = qo),
          (Aa.useOptimistic = function (e, t) {
            var n = wo();
            return null !== eo
              ? Oo(n, 0, e, t)
              : ((n.baseState = e), [e, n.queue.dispatch]);
          });
        var La = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && _(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = Lu(),
              i = js(r);
            (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              null !== (t = zs(e, i, r)) && (zu(t, e, r), Ds(t, e, r));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = Lu(),
              i = js(r);
            (i.tag = 1),
              (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              null !== (t = zs(e, i, r)) && (zu(t, e, r), Ds(t, e, r));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = Lu(),
              r = js(n);
            (r.tag = 2),
              void 0 !== t && null !== t && (r.callback = t),
              null !== (t = zs(e, r, n)) && (zu(t, e, n), Ds(t, e, n));
          },
        };
        function ja(e, t, n, r, i, o, a) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, a)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !Xn(n, r) ||
                !Xn(i, o);
        }
        function za(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && La.enqueueReplaceState(t, t.state, null);
        }
        function Da(e, t) {
          var n = t;
          if ("ref" in t)
            for (var r in ((n = {}), t)) "ref" !== r && (n[r] = t[r]);
          if ((e = e.defaultProps))
            for (var i in (n === t && (n = j({}, n)), e))
              void 0 === n[i] && (n[i] = e[i]);
          return n;
        }
        var Ma =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                if (
                  "object" === typeof window &&
                  "function" === typeof window.ErrorEvent
                ) {
                  var t = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message:
                      "object" === typeof e &&
                      null !== e &&
                      "string" === typeof e.message
                        ? String(e.message)
                        : String(e),
                    error: e,
                  });
                  if (!window.dispatchEvent(t)) return;
                } else if (
                  "object" === typeof process &&
                  "function" === typeof process.emit
                )
                  return void process.emit("uncaughtException", e);
                console.error(e);
              };
        function Oa(e) {
          Ma(e);
        }
        function Na(e) {
          console.error(e);
        }
        function _a(e) {
          Ma(e);
        }
        function Fa(e, t) {
          try {
            (0, e.onUncaughtError)(t.value, { componentStack: t.stack });
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        function Ia(e, t, n) {
          try {
            (0, e.onCaughtError)(n.value, {
              componentStack: n.stack,
              errorBoundary: 1 === t.tag ? t.stateNode : null,
            });
          } catch (r) {
            setTimeout(function () {
              throw r;
            });
          }
        }
        function Va(e, t, n) {
          return (
            ((n = js(n)).tag = 3),
            (n.payload = { element: null }),
            (n.callback = function () {
              Fa(e, t);
            }),
            n
          );
        }
        function Ba(e) {
          return ((e = js(e)).tag = 3), e;
        }
        function $a(e, t, n, r) {
          var i = n.type.getDerivedStateFromError;
          if ("function" === typeof i) {
            var o = r.value;
            (e.payload = function () {
              return i(o);
            }),
              (e.callback = function () {
                Ia(t, n, r);
              });
          }
          var a = n.stateNode;
          null !== a &&
            "function" === typeof a.componentDidCatch &&
            (e.callback = function () {
              Ia(t, n, r),
                "function" !== typeof i &&
                  (null === Su ? (Su = new Set([this])) : Su.add(this));
              var e = r.stack;
              this.componentDidCatch(r.value, {
                componentStack: null !== e ? e : "",
              });
            });
        }
        var Ua = Error(a(461)),
          Wa = !1;
        function Ha(e, t, n, r) {
          t.child = null === e ? Si(t, null, n, r) : xi(t, e.child, n, r);
        }
        function Ya(e, t, n, r, i) {
          n = n.render;
          var o = t.ref;
          if ("ref" in r) {
            var a = {};
            for (var s in r) "ref" !== s && (a[s] = r[s]);
          } else a = r;
          return (
            Es(t),
            (r = fo(e, t, n, a, o, i)),
            (s = go()),
            null === e || Wa
              ? (Qr && s && Yr(t), (t.flags |= 1), Ha(e, t, r, i), t.child)
              : (vo(e, t, i), fs(e, t, i))
          );
        }
        function qa(e, t, n, r, i) {
          if (null === e) {
            var o = n.type;
            return "function" !== typeof o ||
              Nl(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare
              ? (((e = Il(n.type, null, r, t, t.mode, i)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), Ka(e, t, o, r, i));
          }
          if (((o = e.child), !hs(e, i))) {
            var a = o.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : Xn)(a, r) &&
              e.ref === t.ref
            )
              return fs(e, t, i);
          }
          return (
            (t.flags |= 1),
            ((e = _l(o, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Ka(e, t, n, r, i) {
          if (null !== e) {
            var o = e.memoizedProps;
            if (Xn(o, r) && e.ref === t.ref) {
              if (((Wa = !1), (t.pendingProps = r = o), !hs(e, i)))
                return (t.lanes = e.lanes), fs(e, t, i);
              0 !== (131072 & e.flags) && (Wa = !0);
            }
          }
          return Za(e, t, n, r, i);
        }
        function Xa(e, t, n) {
          var r = t.pendingProps,
            i = r.children,
            o = 0 !== (2 & t.stateNode._pendingVisibility),
            a = null !== e ? e.memoizedState : null;
          if ((Ga(e, t), "hidden" === r.mode || o)) {
            if (0 !== (128 & t.flags)) {
              if (((r = null !== a ? a.baseLanes | n : n), null !== e)) {
                for (i = t.child = e.child, o = 0; null !== i; )
                  (o = o | i.lanes | i.childLanes), (i = i.sibling);
                t.childLanes = o & ~r;
              } else (t.childLanes = 0), (t.child = null);
              return Qa(e, t, r, n);
            }
            if (0 === (536870912 & n))
              return (
                (t.lanes = t.childLanes = 536870912),
                Qa(e, t, null !== a ? a.baseLanes | n : n, n)
              );
            (t.memoizedState = { baseLanes: 0, cachePool: null }),
              null !== e && Qi(0, null !== a ? a.cachePool : null),
              null !== a ? Ci(t, a) : Pi(),
              ji(t);
          } else
            null !== a
              ? (Qi(0, a.cachePool), Ci(t, a), zi(), (t.memoizedState = null))
              : (null !== e && Qi(0, null), Pi(), zi());
          return Ha(e, t, i, n), t.child;
        }
        function Qa(e, t, n, r) {
          var i = Xi();
          return (
            (i = null === i ? null : { parent: Ii._currentValue, pool: i }),
            (t.memoizedState = { baseLanes: n, cachePool: i }),
            null !== e && Qi(0, null),
            Pi(),
            ji(t),
            null !== e && Ss(e, t, r, !0),
            null
          );
        }
        function Ga(e, t) {
          var n = t.ref;
          if (null === n) null !== e && null !== e.ref && (t.flags |= 2097664);
          else {
            if ("function" !== typeof n && "object" !== typeof n)
              throw Error(a(284));
            (null !== e && e.ref === n) || (t.flags |= 2097664);
          }
        }
        function Za(e, t, n, r, i) {
          return (
            Es(t),
            (n = fo(e, t, n, r, void 0, i)),
            (r = go()),
            null === e || Wa
              ? (Qr && r && Yr(t), (t.flags |= 1), Ha(e, t, n, i), t.child)
              : (vo(e, t, i), fs(e, t, i))
          );
        }
        function Ja(e, t, n, r, i, o) {
          return (
            Es(t),
            (t.updateQueue = null),
            (n = po(t, r, n, i)),
            ho(e),
            (r = go()),
            null === e || Wa
              ? (Qr && r && Yr(t), (t.flags |= 1), Ha(e, t, n, o), t.child)
              : (vo(e, t, o), fs(e, t, o))
          );
        }
        function es(e, t, n, r, i) {
          if ((Es(t), null === t.stateNode)) {
            var o = zr,
              a = n.contextType;
            "object" === typeof a && null !== a && (o = Cs(a)),
              (o = new n(r, o)),
              (t.memoizedState =
                null !== o.state && void 0 !== o.state ? o.state : null),
              (o.updater = La),
              (t.stateNode = o),
              (o._reactInternals = t),
              ((o = t.stateNode).props = r),
              (o.state = t.memoizedState),
              (o.refs = {}),
              Rs(t),
              (a = n.contextType),
              (o.context = "object" === typeof a && null !== a ? Cs(a) : zr),
              (o.state = t.memoizedState),
              "function" === typeof (a = n.getDerivedStateFromProps) &&
                (Ra(t, n, a, r), (o.state = t.memoizedState)),
              "function" === typeof n.getDerivedStateFromProps ||
                "function" === typeof o.getSnapshotBeforeUpdate ||
                ("function" !== typeof o.UNSAFE_componentWillMount &&
                  "function" !== typeof o.componentWillMount) ||
                ((a = o.state),
                "function" === typeof o.componentWillMount &&
                  o.componentWillMount(),
                "function" === typeof o.UNSAFE_componentWillMount &&
                  o.UNSAFE_componentWillMount(),
                a !== o.state && La.enqueueReplaceState(o, o.state, null),
                _s(t, r, o, i),
                Ns(),
                (o.state = t.memoizedState)),
              "function" === typeof o.componentDidMount && (t.flags |= 4194308),
              (r = !0);
          } else if (null === e) {
            o = t.stateNode;
            var s = t.memoizedProps,
              l = Da(n, s);
            o.props = l;
            var u = o.context,
              c = n.contextType;
            (a = zr), "object" === typeof c && null !== c && (a = Cs(c));
            var d = n.getDerivedStateFromProps;
            (c =
              "function" === typeof d ||
              "function" === typeof o.getSnapshotBeforeUpdate),
              (s = t.pendingProps !== s),
              c ||
                ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                  "function" !== typeof o.componentWillReceiveProps) ||
                ((s || u !== a) && za(t, o, r, a)),
              (As = !1);
            var f = t.memoizedState;
            (o.state = f),
              _s(t, r, o, i),
              Ns(),
              (u = t.memoizedState),
              s || f !== u || As
                ? ("function" === typeof d &&
                    (Ra(t, n, d, r), (u = t.memoizedState)),
                  (l = As || ja(t, n, l, r, f, u, a))
                    ? (c ||
                        ("function" !== typeof o.UNSAFE_componentWillMount &&
                          "function" !== typeof o.componentWillMount) ||
                        ("function" === typeof o.componentWillMount &&
                          o.componentWillMount(),
                        "function" === typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (o.props = r),
                  (o.state = u),
                  (o.context = a),
                  (r = l))
                : ("function" === typeof o.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (o = t.stateNode),
              Ls(e, t),
              (c = Da(n, (a = t.memoizedProps))),
              (o.props = c),
              (d = t.pendingProps),
              (f = o.context),
              (u = n.contextType),
              (l = zr),
              "object" === typeof u && null !== u && (l = Cs(u)),
              (u =
                "function" === typeof (s = n.getDerivedStateFromProps) ||
                "function" === typeof o.getSnapshotBeforeUpdate) ||
                ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                  "function" !== typeof o.componentWillReceiveProps) ||
                ((a !== d || f !== l) && za(t, o, r, l)),
              (As = !1),
              (f = t.memoizedState),
              (o.state = f),
              _s(t, r, o, i),
              Ns();
            var h = t.memoizedState;
            a !== d ||
            f !== h ||
            As ||
            (null !== e && null !== e.dependencies && ks(e.dependencies))
              ? ("function" === typeof s &&
                  (Ra(t, n, s, r), (h = t.memoizedState)),
                (c =
                  As ||
                  ja(t, n, c, r, f, h, l) ||
                  (null !== e && null !== e.dependencies && ks(e.dependencies)))
                  ? (u ||
                      ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                        "function" !== typeof o.componentWillUpdate) ||
                      ("function" === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, h, l),
                      "function" === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, h, l)),
                    "function" === typeof o.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof o.componentDidUpdate ||
                      (a === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate ||
                      (a === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (o.props = r),
                (o.state = h),
                (o.context = l),
                (r = c))
              : ("function" !== typeof o.componentDidUpdate ||
                  (a === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof o.getSnapshotBeforeUpdate ||
                  (a === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return (
            (o = r),
            Ga(e, t),
            (r = 0 !== (128 & t.flags)),
            o || r
              ? ((o = t.stateNode),
                (n =
                  r && "function" !== typeof n.getDerivedStateFromError
                    ? null
                    : o.render()),
                (t.flags |= 1),
                null !== e && r
                  ? ((t.child = xi(t, e.child, null, i)),
                    (t.child = xi(t, null, n, i)))
                  : Ha(e, t, n, i),
                (t.memoizedState = o.state),
                (e = t.child))
              : (e = fs(e, t, i)),
            e
          );
        }
        function ts(e, t, n, r) {
          return ii(), (t.flags |= 256), Ha(e, t, n, r), t.child;
        }
        var ns = { dehydrated: null, treeContext: null, retryLane: 0 };
        function rs(e) {
          return { baseLanes: e, cachePool: Gi() };
        }
        function is(e, t, n) {
          return (e = null !== e ? e.childLanes & ~n : 0), t && (e |= pu), e;
        }
        function os(e, t, n) {
          var r,
            i = t.pendingProps,
            o = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) ||
              (r =
                (null === e || null !== e.memoizedState) &&
                0 !== (2 & Mi.current)),
            r && ((o = !0), (t.flags &= -129)),
            (r = 0 !== (32 & t.flags)),
            (t.flags &= -33),
            null === e)
          ) {
            if (Qr) {
              if ((o ? Li(t) : zi(), Qr)) {
                var l,
                  u = Xr;
                if ((l = u)) {
                  e: {
                    for (l = u, u = Zr; 8 !== l.nodeType; ) {
                      if (!u) {
                        u = null;
                        break e;
                      }
                      if (null === (l = sd(l.nextSibling))) {
                        u = null;
                        break e;
                      }
                    }
                    u = l;
                  }
                  null !== u
                    ? ((t.memoizedState = {
                        dehydrated: u,
                        treeContext:
                          null !== Br ? { id: $r, overflow: Ur } : null,
                        retryLane: 536870912,
                      }),
                      ((l = Ol(18, null, null, 0)).stateNode = u),
                      (l.return = t),
                      (t.child = l),
                      (Kr = t),
                      (Xr = null),
                      (l = !0))
                    : (l = !1);
                }
                l || ei(t);
              }
              if (null !== (u = t.memoizedState) && null !== (u = u.dehydrated))
                return (
                  "$!" === u.data ? (t.lanes = 16) : (t.lanes = 536870912), null
                );
              Di(t);
            }
            return (
              (u = i.children),
              (i = i.fallback),
              o
                ? (zi(),
                  (u = ss({ mode: "hidden", children: u }, (o = t.mode))),
                  (i = Vl(i, o, n, null)),
                  (u.return = t),
                  (i.return = t),
                  (u.sibling = i),
                  (t.child = u),
                  ((o = t.child).memoizedState = rs(n)),
                  (o.childLanes = is(e, r, n)),
                  (t.memoizedState = ns),
                  i)
                : (Li(t), as(t, u))
            );
          }
          if (null !== (l = e.memoizedState) && null !== (u = l.dehydrated)) {
            if (s)
              256 & t.flags
                ? (Li(t), (t.flags &= -257), (t = ls(e, t, n)))
                : null !== t.memoizedState
                ? (zi(), (t.child = e.child), (t.flags |= 128), (t = null))
                : (zi(),
                  (o = i.fallback),
                  (u = t.mode),
                  (i = ss({ mode: "visible", children: i.children }, u)),
                  ((o = Vl(o, u, n, null)).flags |= 2),
                  (i.return = t),
                  (o.return = t),
                  (i.sibling = o),
                  (t.child = i),
                  xi(t, e.child, null, n),
                  ((i = t.child).memoizedState = rs(n)),
                  (i.childLanes = is(e, r, n)),
                  (t.memoizedState = ns),
                  (t = o));
            else if ((Li(t), "$!" === u.data)) {
              if ((r = u.nextSibling && u.nextSibling.dataset)) var c = r.dgst;
              (r = c),
                ((i = Error(a(419))).stack = ""),
                (i.digest = r),
                oi({ value: i, source: null, stack: null }),
                (t = ls(e, t, n));
            } else if (
              (Wa || Ss(e, t, n, !1), (r = 0 !== (n & e.childLanes)), Wa || r)
            ) {
              if (null !== (r = tu)) {
                if (0 !== (42 & (i = n & -n))) i = 1;
                else
                  switch (i) {
                    case 2:
                      i = 1;
                      break;
                    case 8:
                      i = 4;
                      break;
                    case 32:
                      i = 16;
                      break;
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                      i = 64;
                      break;
                    case 268435456:
                      i = 134217728;
                      break;
                    default:
                      i = 0;
                  }
                if (
                  0 !== (i = 0 !== (i & (r.suspendedLanes | n)) ? 0 : i) &&
                  i !== l.retryLane
                )
                  throw ((l.retryLane = i), Rr(e, i), zu(r, e, i), Ua);
              }
              "$?" === u.data || Wu(), (t = ls(e, t, n));
            } else
              "$?" === u.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = sc.bind(null, e)),
                  (u._reactRetry = t),
                  (t = null))
                : ((e = l.treeContext),
                  (Xr = sd(u.nextSibling)),
                  (Kr = t),
                  (Qr = !0),
                  (Gr = null),
                  (Zr = !1),
                  null !== e &&
                    ((Ir[Vr++] = $r),
                    (Ir[Vr++] = Ur),
                    (Ir[Vr++] = Br),
                    ($r = e.id),
                    (Ur = e.overflow),
                    (Br = t)),
                  ((t = as(t, i.children)).flags |= 4096));
            return t;
          }
          return o
            ? (zi(),
              (o = i.fallback),
              (u = t.mode),
              (c = (l = e.child).sibling),
              ((i = _l(l, {
                mode: "hidden",
                children: i.children,
              })).subtreeFlags = 31457280 & l.subtreeFlags),
              null !== c
                ? (o = _l(c, o))
                : ((o = Vl(o, u, n, null)).flags |= 2),
              (o.return = t),
              (i.return = t),
              (i.sibling = o),
              (t.child = i),
              (i = o),
              (o = t.child),
              null === (u = e.child.memoizedState)
                ? (u = rs(n))
                : (null !== (l = u.cachePool)
                    ? ((c = Ii._currentValue),
                      (l = l.parent !== c ? { parent: c, pool: c } : l))
                    : (l = Gi()),
                  (u = { baseLanes: u.baseLanes | n, cachePool: l })),
              (o.memoizedState = u),
              (o.childLanes = is(e, r, n)),
              (t.memoizedState = ns),
              i)
            : (Li(t),
              (e = (n = e.child).sibling),
              ((n = _l(n, { mode: "visible", children: i.children })).return =
                t),
              (n.sibling = null),
              null !== e &&
                (null === (r = t.deletions)
                  ? ((t.deletions = [e]), (t.flags |= 16))
                  : r.push(e)),
              (t.child = n),
              (t.memoizedState = null),
              n);
        }
        function as(e, t) {
          return (
            ((t = ss({ mode: "visible", children: t }, e.mode)).return = e),
            (e.child = t)
          );
        }
        function ss(e, t) {
          return Bl(e, t, 0, null);
        }
        function ls(e, t, n) {
          return (
            xi(t, e.child, null, n),
            ((e = as(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function us(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), ws(e.return, t, n);
        }
        function cs(e, t, n, r, i) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: i,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = i));
        }
        function ds(e, t, n) {
          var r = t.pendingProps,
            i = r.revealOrder,
            o = r.tail;
          if ((Ha(e, t, r.children, n), 0 !== (2 & (r = Mi.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && us(e, n, t);
                else if (19 === e.tag) us(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          switch ((K(Mi, r), i)) {
            case "forwards":
              for (n = t.child, i = null; null !== n; )
                null !== (e = n.alternate) && null === Oi(e) && (i = n),
                  (n = n.sibling);
              null === (n = i)
                ? ((i = t.child), (t.child = null))
                : ((i = n.sibling), (n.sibling = null)),
                cs(t, !1, i, n, o);
              break;
            case "backwards":
              for (n = null, i = t.child, t.child = null; null !== i; ) {
                if (null !== (e = i.alternate) && null === Oi(e)) {
                  t.child = i;
                  break;
                }
                (e = i.sibling), (i.sibling = n), (n = i), (i = e);
              }
              cs(t, !0, n, null, o);
              break;
            case "together":
              cs(t, !1, null, null, void 0);
              break;
            default:
              t.memoizedState = null;
          }
          return t.child;
        }
        function fs(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (du |= t.lanes),
            0 === (n & t.childLanes))
          ) {
            if (null === e) return null;
            if ((Ss(e, t, n, !1), 0 === (n & t.childLanes))) return null;
          }
          if (null !== e && t.child !== e.child) throw Error(a(153));
          if (null !== t.child) {
            for (
              n = _l((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = _l(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function hs(e, t) {
          return (
            0 !== (e.lanes & t) || !(null === (e = e.dependencies) || !ks(e))
          );
        }
        function ps(e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps) Wa = !0;
            else {
              if (!hs(e, n) && 0 === (128 & t.flags))
                return (
                  (Wa = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        J(t, t.stateNode.containerInfo),
                          ys(t, Ii, e.memoizedState.cache),
                          ii();
                        break;
                      case 27:
                      case 5:
                        te(t);
                        break;
                      case 4:
                        J(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        ys(t, t.type, t.memoizedProps.value);
                        break;
                      case 13:
                        var r = t.memoizedState;
                        if (null !== r)
                          return null !== r.dehydrated
                            ? (Li(t), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? os(e, t, n)
                            : (Li(t),
                              null !== (e = fs(e, t, n)) ? e.sibling : null);
                        Li(t);
                        break;
                      case 19:
                        var i = 0 !== (128 & e.flags);
                        if (
                          ((r = 0 !== (n & t.childLanes)) ||
                            (Ss(e, t, n, !1), (r = 0 !== (n & t.childLanes))),
                          i)
                        ) {
                          if (r) return ds(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (i = t.memoizedState) &&
                            ((i.rendering = null),
                            (i.tail = null),
                            (i.lastEffect = null)),
                          K(Mi, Mi.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Xa(e, t, n);
                      case 24:
                        ys(t, Ii, e.memoizedState.cache);
                    }
                    return fs(e, t, n);
                  })(e, t, n)
                );
              Wa = 0 !== (131072 & e.flags);
            }
          else (Wa = !1), Qr && 0 !== (1048576 & t.flags) && Hr(t, Fr, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 16:
              e: {
                e = t.pendingProps;
                var r = t.elementType,
                  i = r._init;
                if (
                  ((r = i(r._payload)), (t.type = r), "function" !== typeof r)
                ) {
                  if (void 0 !== r && null !== r) {
                    if ((i = r.$$typeof) === v) {
                      (t.tag = 11), (t = Ya(null, t, r, e, n));
                      break e;
                    }
                    if (i === w) {
                      (t.tag = 14), (t = qa(null, t, r, e, n));
                      break e;
                    }
                  }
                  throw ((t = T(r) || r), Error(a(306, t, "")));
                }
                Nl(r)
                  ? ((e = Da(r, e)), (t.tag = 1), (t = es(null, t, r, e, n)))
                  : ((t.tag = 0), (t = Za(null, t, r, e, n)));
              }
              return t;
            case 0:
              return Za(e, t, t.type, t.pendingProps, n);
            case 1:
              return es(e, t, (r = t.type), (i = Da(r, t.pendingProps)), n);
            case 3:
              e: {
                if ((J(t, t.stateNode.containerInfo), null === e))
                  throw Error(a(387));
                var o = t.pendingProps;
                (r = (i = t.memoizedState).element),
                  Ls(e, t),
                  _s(t, o, null, n);
                var s = t.memoizedState;
                if (
                  ((o = s.cache),
                  ys(t, Ii, o),
                  o !== i.cache && xs(t, [Ii], n, !0),
                  Ns(),
                  (o = s.element),
                  i.isDehydrated)
                ) {
                  if (
                    ((i = { element: o, isDehydrated: !1, cache: s.cache }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = ts(e, t, o, n);
                    break e;
                  }
                  if (o !== r) {
                    oi((r = Mr(Error(a(424)), t))), (t = ts(e, t, o, n));
                    break e;
                  }
                  for (
                    Xr = sd(t.stateNode.containerInfo.firstChild),
                      Kr = t,
                      Qr = !0,
                      Gr = null,
                      Zr = !0,
                      n = Si(t, null, o, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ii(), o === r)) {
                    t = fs(e, t, n);
                    break e;
                  }
                  Ha(e, t, o, n);
                }
                t = t.child;
              }
              return t;
            case 26:
              return (
                Ga(e, t),
                null === e
                  ? (n = gd(t.type, null, t.pendingProps, null))
                    ? (t.memoizedState = n)
                    : Qr ||
                      ((n = t.type),
                      (e = t.pendingProps),
                      ((r = Xc(G.current).createElement(n))[Fe] = t),
                      (r[Ie] = e),
                      Yc(r, n, e),
                      Ge(r),
                      (t.stateNode = r))
                  : (t.memoizedState = gd(
                      t.type,
                      e.memoizedProps,
                      t.pendingProps,
                      e.memoizedState
                    )),
                null
              );
            case 27:
              return (
                te(t),
                null === e &&
                  Qr &&
                  ((r = t.stateNode = ud(t.type, t.pendingProps, G.current)),
                  (Kr = t),
                  (Zr = !0),
                  (Xr = sd(r.firstChild))),
                (r = t.pendingProps.children),
                null !== e || Qr
                  ? Ha(e, t, r, n)
                  : (t.child = xi(t, null, r, n)),
                Ga(e, t),
                t.child
              );
            case 5:
              return (
                null === e &&
                  Qr &&
                  ((i = r = Xr) &&
                    (null !==
                    (r = (function (e, t, n, r) {
                      for (; 1 === e.nodeType; ) {
                        var i = n;
                        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                          if (
                            !r &&
                            ("INPUT" !== e.nodeName || "hidden" !== e.type)
                          )
                            break;
                        } else if (r) {
                          if (!e[He])
                            switch (t) {
                              case "meta":
                                if (!e.hasAttribute("itemprop")) break;
                                return e;
                              case "link":
                                if (
                                  "stylesheet" ===
                                    (o = e.getAttribute("rel")) &&
                                  e.hasAttribute("data-precedence")
                                )
                                  break;
                                if (
                                  o !== i.rel ||
                                  e.getAttribute("href") !==
                                    (null == i.href ? null : i.href) ||
                                  e.getAttribute("crossorigin") !==
                                    (null == i.crossOrigin
                                      ? null
                                      : i.crossOrigin) ||
                                  e.getAttribute("title") !==
                                    (null == i.title ? null : i.title)
                                )
                                  break;
                                return e;
                              case "style":
                                if (e.hasAttribute("data-precedence")) break;
                                return e;
                              case "script":
                                if (
                                  ((o = e.getAttribute("src")) !==
                                    (null == i.src ? null : i.src) ||
                                    e.getAttribute("type") !==
                                      (null == i.type ? null : i.type) ||
                                    e.getAttribute("crossorigin") !==
                                      (null == i.crossOrigin
                                        ? null
                                        : i.crossOrigin)) &&
                                  o &&
                                  e.hasAttribute("async") &&
                                  !e.hasAttribute("itemprop")
                                )
                                  break;
                                return e;
                              default:
                                return e;
                            }
                        } else {
                          if ("input" !== t || "hidden" !== e.type) return e;
                          var o = null == i.name ? null : "" + i.name;
                          if (
                            "hidden" === i.type &&
                            e.getAttribute("name") === o
                          )
                            return e;
                        }
                        if (null === (e = sd(e.nextSibling))) break;
                      }
                      return null;
                    })(r, t.type, t.pendingProps, Zr))
                      ? ((t.stateNode = r),
                        (Kr = t),
                        (Xr = sd(r.firstChild)),
                        (Zr = !1),
                        (i = !0))
                      : (i = !1)),
                  i || ei(t)),
                te(t),
                (i = t.type),
                (o = t.pendingProps),
                (s = null !== e ? e.memoizedProps : null),
                (r = o.children),
                Zc(i, o)
                  ? (r = null)
                  : null !== s && Zc(i, s) && (t.flags |= 32),
                null !== t.memoizedState &&
                  ((i = fo(e, t, mo, null, null, n)), (Nd._currentValue = i)),
                Ga(e, t),
                Ha(e, t, r, n),
                t.child
              );
            case 6:
              return (
                null === e &&
                  Qr &&
                  ((e = n = Xr) &&
                    (null !==
                    (n = (function (e, t, n) {
                      if ("" === t) return null;
                      for (; 3 !== e.nodeType; ) {
                        if (
                          (1 !== e.nodeType ||
                            "INPUT" !== e.nodeName ||
                            "hidden" !== e.type) &&
                          !n
                        )
                          return null;
                        if (null === (e = sd(e.nextSibling))) return null;
                      }
                      return e;
                    })(n, t.pendingProps, Zr))
                      ? ((t.stateNode = n), (Kr = t), (Xr = null), (e = !0))
                      : (e = !1)),
                  e || ei(t)),
                null
              );
            case 13:
              return os(e, t, n);
            case 4:
              return (
                J(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = xi(t, null, r, n)) : Ha(e, t, r, n),
                t.child
              );
            case 11:
              return Ya(e, t, t.type, t.pendingProps, n);
            case 7:
              return Ha(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return Ha(e, t, t.pendingProps.children, n), t.child;
            case 10:
              return (
                (r = t.pendingProps),
                ys(t, t.type, r.value),
                Ha(e, t, r.children, n),
                t.child
              );
            case 9:
              return (
                (i = t.type._context),
                (r = t.pendingProps.children),
                Es(t),
                (r = r((i = Cs(i)))),
                (t.flags |= 1),
                Ha(e, t, r, n),
                t.child
              );
            case 14:
              return qa(e, t, t.type, t.pendingProps, n);
            case 15:
              return Ka(e, t, t.type, t.pendingProps, n);
            case 19:
              return ds(e, t, n);
            case 22:
              return Xa(e, t, n);
            case 24:
              return (
                Es(t),
                (r = Cs(Ii)),
                null === e
                  ? (null === (i = Xi()) &&
                      ((i = tu),
                      (o = Vi()),
                      (i.pooledCache = o),
                      o.refCount++,
                      null !== o && (i.pooledCacheLanes |= n),
                      (i = o)),
                    (t.memoizedState = { parent: r, cache: i }),
                    Rs(t),
                    ys(t, Ii, i))
                  : (0 !== (e.lanes & n) &&
                      (Ls(e, t), _s(t, null, null, n), Ns()),
                    (i = e.memoizedState),
                    (o = t.memoizedState),
                    i.parent !== r
                      ? ((i = { parent: r, cache: r }),
                        (t.memoizedState = i),
                        0 === t.lanes &&
                          (t.memoizedState = t.updateQueue.baseState = i),
                        ys(t, Ii, r))
                      : ((r = o.cache),
                        ys(t, Ii, r),
                        r !== i.cache && xs(t, [Ii], n, !0))),
                Ha(e, t, t.pendingProps.children, n),
                t.child
              );
            case 29:
              throw t.pendingProps;
          }
          throw Error(a(156, t.tag));
        }
        var ms = Y(null),
          gs = null,
          vs = null;
        function ys(e, t, n) {
          K(ms, t._currentValue), (t._currentValue = n);
        }
        function bs(e) {
          (e._currentValue = ms.current), q(ms);
        }
        function ws(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function xs(e, t, n, r) {
          var i = e.child;
          for (null !== i && (i.return = e); null !== i; ) {
            var o = i.dependencies;
            if (null !== o) {
              var s = i.child;
              o = o.firstContext;
              e: for (; null !== o; ) {
                var l = o;
                o = i;
                for (var u = 0; u < t.length; u++)
                  if (l.context === t[u]) {
                    (o.lanes |= n),
                      null !== (l = o.alternate) && (l.lanes |= n),
                      ws(o.return, n, e),
                      r || (s = null);
                    break e;
                  }
                o = l.next;
              }
            } else if (18 === i.tag) {
              if (null === (s = i.return)) throw Error(a(341));
              (s.lanes |= n),
                null !== (o = s.alternate) && (o.lanes |= n),
                ws(s, n, e),
                (s = null);
            } else s = i.child;
            if (null !== s) s.return = i;
            else
              for (s = i; null !== s; ) {
                if (s === e) {
                  s = null;
                  break;
                }
                if (null !== (i = s.sibling)) {
                  (i.return = s.return), (s = i);
                  break;
                }
                s = s.return;
              }
            i = s;
          }
        }
        function Ss(e, t, n, r) {
          e = null;
          for (var i = t, o = !1; null !== i; ) {
            if (!o)
              if (0 !== (524288 & i.flags)) o = !0;
              else if (0 !== (262144 & i.flags)) break;
            if (10 === i.tag) {
              var s = i.alternate;
              if (null === s) throw Error(a(387));
              if (null !== (s = s.memoizedProps)) {
                var l = i.type;
                Kn(i.pendingProps.value, s.value) ||
                  (null !== e ? e.push(l) : (e = [l]));
              }
            } else if (i === Z.current) {
              if (null === (s = i.alternate)) throw Error(a(387));
              s.memoizedState.memoizedState !== i.memoizedState.memoizedState &&
                (null !== e ? e.push(Nd) : (e = [Nd]));
            }
            i = i.return;
          }
          null !== e && xs(t, e, n, r), (t.flags |= 262144);
        }
        function ks(e) {
          for (e = e.firstContext; null !== e; ) {
            if (!Kn(e.context._currentValue, e.memoizedValue)) return !0;
            e = e.next;
          }
          return !1;
        }
        function Es(e) {
          (gs = e),
            (vs = null),
            null !== (e = e.dependencies) && (e.firstContext = null);
        }
        function Cs(e) {
          return Ts(gs, e);
        }
        function Ps(e, t) {
          return null === gs && Es(e), Ts(e, t);
        }
        function Ts(e, t) {
          var n = t._currentValue;
          if (
            ((t = { context: t, memoizedValue: n, next: null }), null === vs)
          ) {
            if (null === e) throw Error(a(308));
            (vs = t),
              (e.dependencies = { lanes: 0, firstContext: t }),
              (e.flags |= 524288);
          } else vs = vs.next = t;
          return n;
        }
        var As = !1;
        function Rs(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, lanes: 0, hiddenCallbacks: null },
            callbacks: null,
          };
        }
        function Ls(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                callbacks: null,
              });
        }
        function js(e) {
          return { lane: e, tag: 0, payload: null, callback: null, next: null };
        }
        function zs(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & eu))) {
            var i = r.pending;
            return (
              null === i ? (t.next = t) : ((t.next = i.next), (i.next = t)),
              (r.pending = t),
              (t = jr(e)),
              Lr(e, null, n),
              t
            );
          }
          return Tr(e, r, t, n), jr(e);
        }
        function Ds(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194176 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), Me(e, n);
          }
        }
        function Ms(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var i = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var a = {
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: null,
                  next: null,
                };
                null === o ? (i = o = a) : (o = o.next = a), (n = n.next);
              } while (null !== n);
              null === o ? (i = o = t) : (o = o.next = t);
            } else i = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: i,
                lastBaseUpdate: o,
                shared: r.shared,
                callbacks: r.callbacks,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        var Os = !1;
        function Ns() {
          if (Os) {
            if (null !== Hi) throw Hi;
          }
        }
        function _s(e, t, n, r) {
          Os = !1;
          var i = e.updateQueue;
          As = !1;
          var o = i.firstBaseUpdate,
            a = i.lastBaseUpdate,
            s = i.shared.pending;
          if (null !== s) {
            i.shared.pending = null;
            var l = s,
              u = l.next;
            (l.next = null), null === a ? (o = u) : (a.next = u), (a = l);
            var c = e.alternate;
            null !== c &&
              (s = (c = c.updateQueue).lastBaseUpdate) !== a &&
              (null === s ? (c.firstBaseUpdate = u) : (s.next = u),
              (c.lastBaseUpdate = l));
          }
          if (null !== o) {
            var d = i.baseState;
            for (a = 0, c = u = l = null, s = o; ; ) {
              var f = -536870913 & s.lane,
                h = f !== s.lane;
              if (h ? (ru & f) === f : (r & f) === f) {
                0 !== f && f === Wi && (Os = !0),
                  null !== c &&
                    (c = c.next =
                      {
                        lane: 0,
                        tag: s.tag,
                        payload: s.payload,
                        callback: null,
                        next: null,
                      });
                e: {
                  var p = e,
                    m = s;
                  f = t;
                  var g = n;
                  switch (m.tag) {
                    case 1:
                      if ("function" === typeof (p = m.payload)) {
                        d = p.call(g, d, f);
                        break e;
                      }
                      d = p;
                      break e;
                    case 3:
                      p.flags = (-65537 & p.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            "function" === typeof (p = m.payload)
                              ? p.call(g, d, f)
                              : p) ||
                        void 0 === f
                      )
                        break e;
                      d = j({}, d, f);
                      break e;
                    case 2:
                      As = !0;
                  }
                }
                null !== (f = s.callback) &&
                  ((e.flags |= 64),
                  h && (e.flags |= 8192),
                  null === (h = i.callbacks) ? (i.callbacks = [f]) : h.push(f));
              } else
                (h = {
                  lane: f,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null,
                }),
                  null === c ? ((u = c = h), (l = d)) : (c = c.next = h),
                  (a |= f);
              if (null === (s = s.next)) {
                if (null === (s = i.shared.pending)) break;
                (s = (h = s).next),
                  (h.next = null),
                  (i.lastBaseUpdate = h),
                  (i.shared.pending = null);
              }
            }
            null === c && (l = d),
              (i.baseState = l),
              (i.firstBaseUpdate = u),
              (i.lastBaseUpdate = c),
              null === o && (i.shared.lanes = 0),
              (du |= a),
              (e.lanes = a),
              (e.memoizedState = d);
          }
        }
        function Fs(e, t) {
          if ("function" !== typeof e) throw Error(a(191, e));
          e.call(t);
        }
        function Is(e, t) {
          var n = e.callbacks;
          if (null !== n)
            for (e.callbacks = null, e = 0; e < n.length; e++) Fs(n[e], t);
        }
        function Vs(e, t) {
          try {
            var n = t.updateQueue,
              r = null !== n ? n.lastEffect : null;
            if (null !== r) {
              var i = r.next;
              n = i;
              do {
                if ((n.tag & e) === e) {
                  r = void 0;
                  var o = n.create,
                    a = n.inst;
                  (r = o()), (a.destroy = r);
                }
                n = n.next;
              } while (n !== i);
            }
          } catch (s) {
            rc(t, t.return, s);
          }
        }
        function Bs(e, t, n) {
          try {
            var r = t.updateQueue,
              i = null !== r ? r.lastEffect : null;
            if (null !== i) {
              var o = i.next;
              r = o;
              do {
                if ((r.tag & e) === e) {
                  var a = r.inst,
                    s = a.destroy;
                  if (void 0 !== s) {
                    (a.destroy = void 0), (i = t);
                    var l = n;
                    try {
                      s();
                    } catch (u) {
                      rc(i, l, u);
                    }
                  }
                }
                r = r.next;
              } while (r !== o);
            }
          } catch (u) {
            rc(t, t.return, u);
          }
        }
        function $s(e) {
          var t = e.updateQueue;
          if (null !== t) {
            var n = e.stateNode;
            try {
              Is(t, n);
            } catch (r) {
              rc(e, e.return, r);
            }
          }
        }
        function Us(e, t, n) {
          (n.props = Da(e.type, e.memoizedProps)), (n.state = e.memoizedState);
          try {
            n.componentWillUnmount();
          } catch (r) {
            rc(e, t, r);
          }
        }
        function Ws(e, t) {
          try {
            var n = e.ref;
            if (null !== n) {
              var r = e.stateNode;
              switch (e.tag) {
                case 26:
                case 27:
                case 5:
                  var i = r;
                  break;
                default:
                  i = r;
              }
              "function" === typeof n ? (e.refCleanup = n(i)) : (n.current = i);
            }
          } catch (o) {
            rc(e, t, o);
          }
        }
        function Hs(e, t) {
          var n = e.ref,
            r = e.refCleanup;
          if (null !== n)
            if ("function" === typeof r)
              try {
                r();
              } catch (i) {
                rc(e, t, i);
              } finally {
                (e.refCleanup = null),
                  null != (e = e.alternate) && (e.refCleanup = null);
              }
            else if ("function" === typeof n)
              try {
                n(null);
              } catch (o) {
                rc(e, t, o);
              }
            else n.current = null;
        }
        function Ys(e) {
          var t = e.type,
            n = e.memoizedProps,
            r = e.stateNode;
          try {
            e: switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n.autoFocus && r.focus();
                break e;
              case "img":
                n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
            }
          } catch (i) {
            rc(e, e.return, i);
          }
        }
        function qs(e, t, n) {
          try {
            var r = e.stateNode;
            !(function (e, t, n, r) {
              switch (t) {
                case "div":
                case "span":
                case "svg":
                case "path":
                case "a":
                case "g":
                case "p":
                case "li":
                  break;
                case "input":
                  var i = null,
                    o = null,
                    s = null,
                    l = null,
                    u = null,
                    c = null,
                    d = null;
                  for (p in n) {
                    var f = n[p];
                    if (n.hasOwnProperty(p) && null != f)
                      switch (p) {
                        case "checked":
                        case "value":
                          break;
                        case "defaultValue":
                          u = f;
                        default:
                          r.hasOwnProperty(p) || Wc(e, t, p, null, r, f);
                      }
                  }
                  for (var h in r) {
                    var p = r[h];
                    if (
                      ((f = n[h]),
                      r.hasOwnProperty(h) && (null != p || null != f))
                    )
                      switch (h) {
                        case "type":
                          o = p;
                          break;
                        case "name":
                          i = p;
                          break;
                        case "checked":
                          c = p;
                          break;
                        case "defaultChecked":
                          d = p;
                          break;
                        case "value":
                          s = p;
                          break;
                        case "defaultValue":
                          l = p;
                          break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                          if (null != p) throw Error(a(137, t));
                          break;
                        default:
                          p !== f && Wc(e, t, h, p, r, f);
                      }
                  }
                  return void gt(e, s, l, u, c, d, o, i);
                case "select":
                  for (o in ((p = s = l = h = null), n))
                    if (((u = n[o]), n.hasOwnProperty(o) && null != u))
                      switch (o) {
                        case "value":
                          break;
                        case "multiple":
                          p = u;
                        default:
                          r.hasOwnProperty(o) || Wc(e, t, o, null, r, u);
                      }
                  for (i in r)
                    if (
                      ((o = r[i]),
                      (u = n[i]),
                      r.hasOwnProperty(i) && (null != o || null != u))
                    )
                      switch (i) {
                        case "value":
                          h = o;
                          break;
                        case "defaultValue":
                          l = o;
                          break;
                        case "multiple":
                          s = o;
                        default:
                          o !== u && Wc(e, t, i, o, r, u);
                      }
                  return (
                    (t = l),
                    (n = s),
                    (r = p),
                    void (null != h
                      ? bt(e, !!n, h, !1)
                      : !!r !== !!n &&
                        (null != t
                          ? bt(e, !!n, t, !0)
                          : bt(e, !!n, n ? [] : "", !1)))
                  );
                case "textarea":
                  for (l in ((p = h = null), n))
                    if (
                      ((i = n[l]),
                      n.hasOwnProperty(l) && null != i && !r.hasOwnProperty(l))
                    )
                      switch (l) {
                        case "value":
                        case "children":
                          break;
                        default:
                          Wc(e, t, l, null, r, i);
                      }
                  for (s in r)
                    if (
                      ((i = r[s]),
                      (o = n[s]),
                      r.hasOwnProperty(s) && (null != i || null != o))
                    )
                      switch (s) {
                        case "value":
                          h = i;
                          break;
                        case "defaultValue":
                          p = i;
                          break;
                        case "children":
                          break;
                        case "dangerouslySetInnerHTML":
                          if (null != i) throw Error(a(91));
                          break;
                        default:
                          i !== o && Wc(e, t, s, i, r, o);
                      }
                  return void wt(e, h, p);
                case "option":
                  for (var m in n)
                    if (
                      ((h = n[m]),
                      n.hasOwnProperty(m) && null != h && !r.hasOwnProperty(m))
                    )
                      if ("selected" === m) e.selected = !1;
                      else Wc(e, t, m, null, r, h);
                  for (u in r)
                    if (
                      ((h = r[u]),
                      (p = n[u]),
                      r.hasOwnProperty(u) &&
                        h !== p &&
                        (null != h || null != p))
                    )
                      if ("selected" === u)
                        e.selected =
                          h && "function" !== typeof h && "symbol" !== typeof h;
                      else Wc(e, t, u, h, r, p);
                  return;
                case "img":
                case "link":
                case "area":
                case "base":
                case "br":
                case "col":
                case "embed":
                case "hr":
                case "keygen":
                case "meta":
                case "param":
                case "source":
                case "track":
                case "wbr":
                case "menuitem":
                  for (var g in n)
                    (h = n[g]),
                      n.hasOwnProperty(g) &&
                        null != h &&
                        !r.hasOwnProperty(g) &&
                        Wc(e, t, g, null, r, h);
                  for (c in r)
                    if (
                      ((h = r[c]),
                      (p = n[c]),
                      r.hasOwnProperty(c) &&
                        h !== p &&
                        (null != h || null != p))
                    )
                      switch (c) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                          if (null != h) throw Error(a(137, t));
                          break;
                        default:
                          Wc(e, t, c, h, r, p);
                      }
                  return;
                default:
                  if (Pt(t)) {
                    for (var v in n)
                      (h = n[v]),
                        n.hasOwnProperty(v) &&
                          void 0 !== h &&
                          !r.hasOwnProperty(v) &&
                          Hc(e, t, v, void 0, r, h);
                    for (d in r)
                      (h = r[d]),
                        (p = n[d]),
                        !r.hasOwnProperty(d) ||
                          h === p ||
                          (void 0 === h && void 0 === p) ||
                          Hc(e, t, d, h, r, p);
                    return;
                  }
              }
              for (var y in n)
                (h = n[y]),
                  n.hasOwnProperty(y) &&
                    null != h &&
                    !r.hasOwnProperty(y) &&
                    Wc(e, t, y, null, r, h);
              for (f in r)
                (h = r[f]),
                  (p = n[f]),
                  !r.hasOwnProperty(f) ||
                    h === p ||
                    (null == h && null == p) ||
                    Wc(e, t, f, h, r, p);
            })(r, e.type, n, t),
              (r[Ie] = t);
          } catch (i) {
            rc(e, e.return, i);
          }
        }
        function Ks(e) {
          return (
            5 === e.tag ||
            3 === e.tag ||
            26 === e.tag ||
            27 === e.tag ||
            4 === e.tag
          );
        }
        function Xs(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || Ks(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 27 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function Qs(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Uc));
          else if (4 !== r && 27 !== r && null !== (e = e.child))
            for (Qs(e, t, n), e = e.sibling; null !== e; )
              Qs(e, t, n), (e = e.sibling);
        }
        function Gs(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && 27 !== r && null !== (e = e.child))
            for (Gs(e, t, n), e = e.sibling; null !== e; )
              Gs(e, t, n), (e = e.sibling);
        }
        var Zs = !1,
          Js = !1,
          el = !1,
          tl = "function" === typeof WeakSet ? WeakSet : Set,
          nl = null,
          rl = !1;
        function il(e, t, n) {
          var r = n.flags;
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              vl(e, n), 4 & r && Vs(5, n);
              break;
            case 1:
              if ((vl(e, n), 4 & r))
                if (((e = n.stateNode), null === t))
                  try {
                    e.componentDidMount();
                  } catch (s) {
                    rc(n, n.return, s);
                  }
                else {
                  var i = Da(n.type, t.memoizedProps);
                  t = t.memoizedState;
                  try {
                    e.componentDidUpdate(
                      i,
                      t,
                      e.__reactInternalSnapshotBeforeUpdate
                    );
                  } catch (l) {
                    rc(n, n.return, l);
                  }
                }
              64 & r && $s(n), 512 & r && Ws(n, n.return);
              break;
            case 3:
              if ((vl(e, n), 64 & r && null !== (r = n.updateQueue))) {
                if (((e = null), null !== n.child))
                  switch (n.child.tag) {
                    case 27:
                    case 5:
                    case 1:
                      e = n.child.stateNode;
                  }
                try {
                  Is(r, e);
                } catch (s) {
                  rc(n, n.return, s);
                }
              }
              break;
            case 26:
              vl(e, n), 512 & r && Ws(n, n.return);
              break;
            case 27:
            case 5:
              vl(e, n),
                null === t && 4 & r && Ys(n),
                512 & r && Ws(n, n.return);
              break;
            case 12:
            default:
              vl(e, n);
              break;
            case 13:
              vl(e, n), 4 & r && cl(e, n);
              break;
            case 22:
              if (!(i = null !== n.memoizedState || Zs)) {
                t = (null !== t && null !== t.memoizedState) || Js;
                var o = Zs,
                  a = Js;
                (Zs = i),
                  (Js = t) && !a
                    ? bl(e, n, 0 !== (8772 & n.subtreeFlags))
                    : vl(e, n),
                  (Zs = o),
                  (Js = a);
              }
              512 & r &&
                ("manual" === n.memoizedProps.mode
                  ? Ws(n, n.return)
                  : Hs(n, n.return));
          }
        }
        function ol(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), ol(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag && null !== (t = e.stateNode) && Ye(t),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        var al = null,
          sl = !1;
        function ll(e, t, n) {
          for (n = n.child; null !== n; ) ul(e, t, n), (n = n.sibling);
        }
        function ul(e, t, n) {
          if (ye && "function" === typeof ye.onCommitFiberUnmount)
            try {
              ye.onCommitFiberUnmount(ve, n);
            } catch (a) {}
          switch (n.tag) {
            case 26:
              Js || Hs(n, t),
                ll(e, t, n),
                n.memoizedState
                  ? n.memoizedState.count--
                  : n.stateNode && (n = n.stateNode).parentNode.removeChild(n);
              break;
            case 27:
              Js || Hs(n, t);
              var r = al,
                i = sl;
              for (
                al = n.stateNode, ll(e, t, n), t = (n = n.stateNode).attributes;
                t.length;

              )
                n.removeAttributeNode(t[0]);
              Ye(n), (al = r), (sl = i);
              break;
            case 5:
              Js || Hs(n, t);
            case 6:
              i = al;
              var o = sl;
              if (((al = null), ll(e, t, n), (sl = o), null !== (al = i)))
                if (sl)
                  try {
                    (e = al),
                      (r = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(r)
                        : e.removeChild(r);
                  } catch (s) {
                    rc(n, t, s);
                  }
                else
                  try {
                    al.removeChild(n.stateNode);
                  } catch (s) {
                    rc(n, t, s);
                  }
              break;
            case 18:
              null !== al &&
                (sl
                  ? ((t = al),
                    (n = n.stateNode),
                    8 === t.nodeType
                      ? od(t.parentNode, n)
                      : 1 === t.nodeType && od(t, n),
                    gf(t))
                  : od(al, n.stateNode));
              break;
            case 4:
              (r = al),
                (i = sl),
                (al = n.stateNode.containerInfo),
                (sl = !0),
                ll(e, t, n),
                (al = r),
                (sl = i);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              Js || Bs(2, n, t), Js || Bs(4, n, t), ll(e, t, n);
              break;
            case 1:
              Js ||
                (Hs(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount &&
                  Us(n, t, r)),
                ll(e, t, n);
              break;
            case 21:
              ll(e, t, n);
              break;
            case 22:
              Js || Hs(n, t),
                (Js = (r = Js) || null !== n.memoizedState),
                ll(e, t, n),
                (Js = r);
              break;
            default:
              ll(e, t, n);
          }
        }
        function cl(e, t) {
          if (
            null === t.memoizedState &&
            null !== (e = t.alternate) &&
            null !== (e = e.memoizedState) &&
            null !== (e = e.dehydrated)
          )
            try {
              gf(e);
            } catch (n) {
              rc(t, t.return, n);
            }
        }
        function dl(e, t) {
          var n = (function (e) {
            switch (e.tag) {
              case 13:
              case 19:
                var t = e.stateNode;
                return null === t && (t = e.stateNode = new tl()), t;
              case 22:
                return (
                  null === (t = (e = e.stateNode)._retryCache) &&
                    (t = e._retryCache = new tl()),
                  t
                );
              default:
                throw Error(a(435, e.tag));
            }
          })(e);
          t.forEach(function (t) {
            var r = lc.bind(null, e, t);
            n.has(t) || (n.add(t), t.then(r, r));
          });
        }
        function fl(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var i = n[r],
                o = e,
                s = t,
                l = s;
              e: for (; null !== l; ) {
                switch (l.tag) {
                  case 27:
                  case 5:
                    (al = l.stateNode), (sl = !1);
                    break e;
                  case 3:
                  case 4:
                    (al = l.stateNode.containerInfo), (sl = !0);
                    break e;
                }
                l = l.return;
              }
              if (null === al) throw Error(a(160));
              ul(o, s, i),
                (al = null),
                (sl = !1),
                null !== (o = i.alternate) && (o.return = null),
                (i.return = null);
            }
          if (13878 & t.subtreeFlags)
            for (t = t.child; null !== t; ) pl(t, e), (t = t.sibling);
        }
        var hl = null;
        function pl(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              fl(t, e),
                ml(e),
                4 & r && (Bs(3, e, e.return), Vs(3, e), Bs(5, e, e.return));
              break;
            case 1:
              fl(t, e),
                ml(e),
                512 & r && (Js || null === n || Hs(n, n.return)),
                64 & r &&
                  Zs &&
                  null !== (e = e.updateQueue) &&
                  null !== (r = e.callbacks) &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = null === n ? r : n.concat(r)));
              break;
            case 26:
              var i = hl;
              if (
                (fl(t, e),
                ml(e),
                512 & r && (Js || null === n || Hs(n, n.return)),
                4 & r)
              ) {
                var o = null !== n ? n.memoizedState : null;
                if (((r = e.memoizedState), null === n))
                  if (null === r)
                    if (null === e.stateNode) {
                      e: {
                        (r = e.type),
                          (n = e.memoizedProps),
                          (i = i.ownerDocument || i);
                        t: switch (r) {
                          case "title":
                            (!(o = i.getElementsByTagName("title")[0]) ||
                              o[He] ||
                              o[Fe] ||
                              "http://www.w3.org/2000/svg" === o.namespaceURI ||
                              o.hasAttribute("itemprop")) &&
                              ((o = i.createElement(r)),
                              i.head.insertBefore(
                                o,
                                i.querySelector("head > title")
                              )),
                              Yc(o, r, n),
                              (o[Fe] = e),
                              Ge(o),
                              (r = o);
                            break e;
                          case "link":
                            var s = Td("link", "href", i).get(
                              r + (n.href || "")
                            );
                            if (s)
                              for (var l = 0; l < s.length; l++)
                                if (
                                  (o = s[l]).getAttribute("href") ===
                                    (null == n.href ? null : n.href) &&
                                  o.getAttribute("rel") ===
                                    (null == n.rel ? null : n.rel) &&
                                  o.getAttribute("title") ===
                                    (null == n.title ? null : n.title) &&
                                  o.getAttribute("crossorigin") ===
                                    (null == n.crossOrigin
                                      ? null
                                      : n.crossOrigin)
                                ) {
                                  s.splice(l, 1);
                                  break t;
                                }
                            Yc((o = i.createElement(r)), r, n),
                              i.head.appendChild(o);
                            break;
                          case "meta":
                            if (
                              (s = Td("meta", "content", i).get(
                                r + (n.content || "")
                              ))
                            )
                              for (l = 0; l < s.length; l++)
                                if (
                                  (o = s[l]).getAttribute("content") ===
                                    (null == n.content
                                      ? null
                                      : "" + n.content) &&
                                  o.getAttribute("name") ===
                                    (null == n.name ? null : n.name) &&
                                  o.getAttribute("property") ===
                                    (null == n.property ? null : n.property) &&
                                  o.getAttribute("http-equiv") ===
                                    (null == n.httpEquiv
                                      ? null
                                      : n.httpEquiv) &&
                                  o.getAttribute("charset") ===
                                    (null == n.charSet ? null : n.charSet)
                                ) {
                                  s.splice(l, 1);
                                  break t;
                                }
                            Yc((o = i.createElement(r)), r, n),
                              i.head.appendChild(o);
                            break;
                          default:
                            throw Error(a(468, r));
                        }
                        (o[Fe] = e), Ge(o), (r = o);
                      }
                      e.stateNode = r;
                    } else Ad(i, e.type, e.stateNode);
                  else e.stateNode = Sd(i, r, e.memoizedProps);
                else
                  o !== r
                    ? (null === o
                        ? null !== n.stateNode &&
                          (n = n.stateNode).parentNode.removeChild(n)
                        : o.count--,
                      null === r
                        ? Ad(i, e.type, e.stateNode)
                        : Sd(i, r, e.memoizedProps))
                    : null === r &&
                      null !== e.stateNode &&
                      qs(e, e.memoizedProps, n.memoizedProps);
              }
              break;
            case 27:
              if (4 & r && null === e.alternate) {
                (i = e.stateNode), (o = e.memoizedProps);
                try {
                  for (var u = i.firstChild; u; ) {
                    var c = u.nextSibling,
                      d = u.nodeName;
                    u[He] ||
                      "HEAD" === d ||
                      "BODY" === d ||
                      "SCRIPT" === d ||
                      "STYLE" === d ||
                      ("LINK" === d && "stylesheet" === u.rel.toLowerCase()) ||
                      i.removeChild(u),
                      (u = c);
                  }
                  for (var f = e.type, h = i.attributes; h.length; )
                    i.removeAttributeNode(h[0]);
                  Yc(i, f, o), (i[Fe] = e), (i[Ie] = o);
                } catch (m) {
                  rc(e, e.return, m);
                }
              }
            case 5:
              if (
                (fl(t, e),
                ml(e),
                512 & r && (Js || null === n || Hs(n, n.return)),
                32 & e.flags)
              ) {
                i = e.stateNode;
                try {
                  St(i, "");
                } catch (m) {
                  rc(e, e.return, m);
                }
              }
              4 & r &&
                null != e.stateNode &&
                qs(e, (i = e.memoizedProps), null !== n ? n.memoizedProps : i),
                1024 & r && (el = !0);
              break;
            case 6:
              if ((fl(t, e), ml(e), 4 & r)) {
                if (null === e.stateNode) throw Error(a(162));
                (r = e.memoizedProps), (n = e.stateNode);
                try {
                  n.nodeValue = r;
                } catch (m) {
                  rc(e, e.return, m);
                }
              }
              break;
            case 3:
              if (
                ((Pd = null),
                (i = hl),
                (hl = fd(t.containerInfo)),
                fl(t, e),
                (hl = i),
                ml(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  gf(t.containerInfo);
                } catch (m) {
                  rc(e, e.return, m);
                }
              el && ((el = !1), gl(e));
              break;
            case 4:
              (r = hl),
                (hl = fd(e.stateNode.containerInfo)),
                fl(t, e),
                ml(e),
                (hl = r);
              break;
            case 12:
              fl(t, e), ml(e);
              break;
            case 13:
              fl(t, e),
                ml(e),
                8192 & e.child.flags &&
                  (null !== e.memoizedState) !==
                    (null !== n && null !== n.memoizedState) &&
                  (bu = le()),
                4 & r &&
                  null !== (r = e.updateQueue) &&
                  ((e.updateQueue = null), dl(e, r));
              break;
            case 22:
              if (
                (512 & r && (Js || null === n || Hs(n, n.return)),
                (u = null !== e.memoizedState),
                (c = null !== n && null !== n.memoizedState),
                (Zs = (d = Zs) || u),
                (Js = (f = Js) || c),
                fl(t, e),
                (Js = f),
                (Zs = d),
                ml(e),
                ((t = e.stateNode)._current = e),
                (t._visibility &= -3),
                (t._visibility |= 2 & t._pendingVisibility),
                8192 & r &&
                  ((t._visibility = u ? -2 & t._visibility : 1 | t._visibility),
                  u && ((t = Zs || Js), null === n || c || t || yl(e)),
                  null === e.memoizedProps ||
                    "manual" !== e.memoizedProps.mode))
              )
                e: for (n = null, t = e; ; ) {
                  if (5 === t.tag || 26 === t.tag || 27 === t.tag) {
                    if (null === n) {
                      c = n = t;
                      try {
                        if (((i = c.stateNode), u))
                          "function" === typeof (o = i.style).setProperty
                            ? o.setProperty("display", "none", "important")
                            : (o.display = "none");
                        else {
                          s = c.stateNode;
                          var p =
                            void 0 !== (l = c.memoizedProps.style) &&
                            null !== l &&
                            l.hasOwnProperty("display")
                              ? l.display
                              : null;
                          s.style.display =
                            null == p || "boolean" === typeof p
                              ? ""
                              : ("" + p).trim();
                        }
                      } catch (m) {
                        rc(c, c.return, m);
                      }
                    }
                  } else if (6 === t.tag) {
                    if (null === n) {
                      c = t;
                      try {
                        c.stateNode.nodeValue = u ? "" : c.memoizedProps;
                      } catch (m) {
                        rc(c, c.return, m);
                      }
                    }
                  } else if (
                    ((22 !== t.tag && 23 !== t.tag) ||
                      null === t.memoizedState ||
                      t === e) &&
                    null !== t.child
                  ) {
                    (t.child.return = t), (t = t.child);
                    continue;
                  }
                  if (t === e) break e;
                  for (; null === t.sibling; ) {
                    if (null === t.return || t.return === e) break e;
                    n === t && (n = null), (t = t.return);
                  }
                  n === t && (n = null),
                    (t.sibling.return = t.return),
                    (t = t.sibling);
                }
              4 & r &&
                null !== (r = e.updateQueue) &&
                null !== (n = r.retryQueue) &&
                ((r.retryQueue = null), dl(e, n));
              break;
            case 19:
              fl(t, e),
                ml(e),
                4 & r &&
                  null !== (r = e.updateQueue) &&
                  ((e.updateQueue = null), dl(e, r));
              break;
            case 21:
              break;
            default:
              fl(t, e), ml(e);
          }
        }
        function ml(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              if (27 !== e.tag) {
                e: {
                  for (var n = e.return; null !== n; ) {
                    if (Ks(n)) {
                      var r = n;
                      break e;
                    }
                    n = n.return;
                  }
                  throw Error(a(160));
                }
                switch (r.tag) {
                  case 27:
                    var i = r.stateNode;
                    Gs(e, Xs(e), i);
                    break;
                  case 5:
                    var o = r.stateNode;
                    32 & r.flags && (St(o, ""), (r.flags &= -33)),
                      Gs(e, Xs(e), o);
                    break;
                  case 3:
                  case 4:
                    var s = r.stateNode.containerInfo;
                    Qs(e, Xs(e), s);
                    break;
                  default:
                    throw Error(a(161));
                }
              }
            } catch (l) {
              rc(e, e.return, l);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function gl(e) {
          if (1024 & e.subtreeFlags)
            for (e = e.child; null !== e; ) {
              var t = e;
              gl(t),
                5 === t.tag && 1024 & t.flags && t.stateNode.reset(),
                (e = e.sibling);
            }
        }
        function vl(e, t) {
          if (8772 & t.subtreeFlags)
            for (t = t.child; null !== t; )
              il(e, t.alternate, t), (t = t.sibling);
        }
        function yl(e) {
          for (e = e.child; null !== e; ) {
            var t = e;
            switch (t.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Bs(4, t, t.return), yl(t);
                break;
              case 1:
                Hs(t, t.return);
                var n = t.stateNode;
                "function" === typeof n.componentWillUnmount &&
                  Us(t, t.return, n),
                  yl(t);
                break;
              case 26:
              case 27:
              case 5:
                Hs(t, t.return), yl(t);
                break;
              case 22:
                Hs(t, t.return), null === t.memoizedState && yl(t);
                break;
              default:
                yl(t);
            }
            e = e.sibling;
          }
        }
        function bl(e, t, n) {
          for (
            n = n && 0 !== (8772 & t.subtreeFlags), t = t.child;
            null !== t;

          ) {
            var r = t.alternate,
              i = e,
              o = t,
              a = o.flags;
            switch (o.tag) {
              case 0:
              case 11:
              case 15:
                bl(i, o, n), Vs(4, o);
                break;
              case 1:
                if (
                  (bl(i, o, n),
                  "function" ===
                    typeof (i = (r = o).stateNode).componentDidMount)
                )
                  try {
                    i.componentDidMount();
                  } catch (u) {
                    rc(r, r.return, u);
                  }
                if (null !== (i = (r = o).updateQueue)) {
                  var s = r.stateNode;
                  try {
                    var l = i.shared.hiddenCallbacks;
                    if (null !== l)
                      for (
                        i.shared.hiddenCallbacks = null, i = 0;
                        i < l.length;
                        i++
                      )
                        Fs(l[i], s);
                  } catch (u) {
                    rc(r, r.return, u);
                  }
                }
                n && 64 & a && $s(o), Ws(o, o.return);
                break;
              case 26:
              case 27:
              case 5:
                bl(i, o, n), n && null === r && 4 & a && Ys(o), Ws(o, o.return);
                break;
              case 12:
              default:
                bl(i, o, n);
                break;
              case 13:
                bl(i, o, n), n && 4 & a && cl(i, o);
                break;
              case 22:
                null === o.memoizedState && bl(i, o, n), Ws(o, o.return);
            }
            t = t.sibling;
          }
        }
        function wl(e, t) {
          var n = null;
          null !== e &&
            null !== e.memoizedState &&
            null !== e.memoizedState.cachePool &&
            (n = e.memoizedState.cachePool.pool),
            (e = null),
            null !== t.memoizedState &&
              null !== t.memoizedState.cachePool &&
              (e = t.memoizedState.cachePool.pool),
            e !== n && (null != e && e.refCount++, null != n && Bi(n));
        }
        function xl(e, t) {
          (e = null),
            null !== t.alternate && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache) !== e &&
              (t.refCount++, null != e && Bi(e));
        }
        function Sl(e, t, n, r) {
          if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t; ) kl(e, t, n, r), (t = t.sibling);
        }
        function kl(e, t, n, r) {
          var i = t.flags;
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Sl(e, t, n, r), 2048 & i && Vs(9, t);
              break;
            case 3:
              Sl(e, t, n, r),
                2048 & i &&
                  ((e = null),
                  null !== t.alternate && (e = t.alternate.memoizedState.cache),
                  (t = t.memoizedState.cache) !== e &&
                    (t.refCount++, null != e && Bi(e)));
              break;
            case 12:
              if (2048 & i) {
                Sl(e, t, n, r), (e = t.stateNode);
                try {
                  var o = t.memoizedProps,
                    a = o.id,
                    s = o.onPostCommit;
                  "function" === typeof s &&
                    s(
                      a,
                      null === t.alternate ? "mount" : "update",
                      e.passiveEffectDuration,
                      -0
                    );
                } catch (l) {
                  rc(t, t.return, l);
                }
              } else Sl(e, t, n, r);
              break;
            case 23:
              break;
            case 22:
              (o = t.stateNode),
                null !== t.memoizedState
                  ? 4 & o._visibility
                    ? Sl(e, t, n, r)
                    : Cl(e, t)
                  : 4 & o._visibility
                  ? Sl(e, t, n, r)
                  : ((o._visibility |= 4),
                    El(e, t, n, r, 0 !== (10256 & t.subtreeFlags))),
                2048 & i && wl(t.alternate, t);
              break;
            case 24:
              Sl(e, t, n, r), 2048 & i && xl(t.alternate, t);
              break;
            default:
              Sl(e, t, n, r);
          }
        }
        function El(e, t, n, r, i) {
          for (
            i = i && 0 !== (10256 & t.subtreeFlags), t = t.child;
            null !== t;

          ) {
            var o = e,
              a = t,
              s = n,
              l = r,
              u = a.flags;
            switch (a.tag) {
              case 0:
              case 11:
              case 15:
                El(o, a, s, l, i), Vs(8, a);
                break;
              case 23:
                break;
              case 22:
                var c = a.stateNode;
                null !== a.memoizedState
                  ? 4 & c._visibility
                    ? El(o, a, s, l, i)
                    : Cl(o, a)
                  : ((c._visibility |= 4), El(o, a, s, l, i)),
                  i && 2048 & u && wl(a.alternate, a);
                break;
              case 24:
                El(o, a, s, l, i), i && 2048 & u && xl(a.alternate, a);
                break;
              default:
                El(o, a, s, l, i);
            }
            t = t.sibling;
          }
        }
        function Cl(e, t) {
          if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t; ) {
              var n = e,
                r = t,
                i = r.flags;
              switch (r.tag) {
                case 22:
                  Cl(n, r), 2048 & i && wl(r.alternate, r);
                  break;
                case 24:
                  Cl(n, r), 2048 & i && xl(r.alternate, r);
                  break;
                default:
                  Cl(n, r);
              }
              t = t.sibling;
            }
        }
        var Pl = 8192;
        function Tl(e) {
          if (e.subtreeFlags & Pl)
            for (e = e.child; null !== e; ) Al(e), (e = e.sibling);
        }
        function Al(e) {
          switch (e.tag) {
            case 26:
              Tl(e),
                e.flags & Pl &&
                  null !== e.memoizedState &&
                  (function (e, t, n) {
                    if (null === Ld) throw Error(a(475));
                    var r = Ld;
                    if (
                      "stylesheet" === t.type &&
                      ("string" !== typeof n.media ||
                        !1 !== matchMedia(n.media).matches) &&
                      0 === (4 & t.state.loading)
                    ) {
                      if (null === t.instance) {
                        var i = vd(n.href),
                          o = e.querySelector(yd(i));
                        if (o)
                          return (
                            null !== (e = o._p) &&
                              "object" === typeof e &&
                              "function" === typeof e.then &&
                              (r.count++, (r = zd.bind(r)), e.then(r, r)),
                            (t.state.loading |= 4),
                            (t.instance = o),
                            void Ge(o)
                          );
                        (o = e.ownerDocument || e),
                          (n = bd(n)),
                          (i = cd.get(i)) && Ed(n, i),
                          Ge((o = o.createElement("link")));
                        var s = o;
                        (s._p = new Promise(function (e, t) {
                          (s.onload = e), (s.onerror = t);
                        })),
                          Yc(o, "link", n),
                          (t.instance = o);
                      }
                      null === r.stylesheets && (r.stylesheets = new Map()),
                        r.stylesheets.set(t, e),
                        (e = t.state.preload) &&
                          0 === (3 & t.state.loading) &&
                          (r.count++,
                          (t = zd.bind(r)),
                          e.addEventListener("load", t),
                          e.addEventListener("error", t));
                    }
                  })(hl, e.memoizedState, e.memoizedProps);
              break;
            case 5:
            default:
              Tl(e);
              break;
            case 3:
            case 4:
              var t = hl;
              (hl = fd(e.stateNode.containerInfo)), Tl(e), (hl = t);
              break;
            case 22:
              null === e.memoizedState &&
                (null !== (t = e.alternate) && null !== t.memoizedState
                  ? ((t = Pl), (Pl = 16777216), Tl(e), (Pl = t))
                  : Tl(e));
          }
        }
        function Rl(e) {
          var t = e.alternate;
          if (null !== t && null !== (e = t.child)) {
            t.child = null;
            do {
              (t = e.sibling), (e.sibling = null), (e = t);
            } while (null !== e);
          }
        }
        function Ll(e) {
          var t = e.deletions;
          if (0 !== (16 & e.flags)) {
            if (null !== t)
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (nl = r), Dl(r, e);
              }
            Rl(e);
          }
          if (10256 & e.subtreeFlags)
            for (e = e.child; null !== e; ) jl(e), (e = e.sibling);
        }
        function jl(e) {
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              Ll(e), 2048 & e.flags && Bs(9, e, e.return);
              break;
            case 3:
            case 12:
            default:
              Ll(e);
              break;
            case 22:
              var t = e.stateNode;
              null !== e.memoizedState &&
              4 & t._visibility &&
              (null === e.return || 13 !== e.return.tag)
                ? ((t._visibility &= -5), zl(e))
                : Ll(e);
          }
        }
        function zl(e) {
          var t = e.deletions;
          if (0 !== (16 & e.flags)) {
            if (null !== t)
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (nl = r), Dl(r, e);
              }
            Rl(e);
          }
          for (e = e.child; null !== e; ) {
            switch ((t = e).tag) {
              case 0:
              case 11:
              case 15:
                Bs(8, t, t.return), zl(t);
                break;
              case 22:
                4 & (n = t.stateNode)._visibility &&
                  ((n._visibility &= -5), zl(t));
                break;
              default:
                zl(t);
            }
            e = e.sibling;
          }
        }
        function Dl(e, t) {
          for (; null !== nl; ) {
            var n = nl;
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                Bs(8, n, t);
                break;
              case 23:
              case 22:
                if (
                  null !== n.memoizedState &&
                  null !== n.memoizedState.cachePool
                ) {
                  var r = n.memoizedState.cachePool.pool;
                  null != r && r.refCount++;
                }
                break;
              case 24:
                Bi(n.memoizedState.cache);
            }
            if (null !== (r = n.child)) (r.return = n), (nl = r);
            else
              e: for (n = e; null !== nl; ) {
                var i = (r = nl).sibling,
                  o = r.return;
                if ((ol(r), r === n)) {
                  nl = null;
                  break e;
                }
                if (null !== i) {
                  (i.return = o), (nl = i);
                  break e;
                }
                nl = o;
              }
          }
        }
        function Ml(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.refCleanup = this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Ol(e, t, n, r) {
          return new Ml(e, t, n, r);
        }
        function Nl(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function _l(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Ol(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 31457280 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            (n.refCleanup = e.refCleanup),
            n
          );
        }
        function Fl(e, t) {
          e.flags &= 31457282;
          var n = e.alternate;
          return (
            null === n
              ? ((e.childLanes = 0),
                (e.lanes = t),
                (e.child = null),
                (e.subtreeFlags = 0),
                (e.memoizedProps = null),
                (e.memoizedState = null),
                (e.updateQueue = null),
                (e.dependencies = null),
                (e.stateNode = null))
              : ((e.childLanes = n.childLanes),
                (e.lanes = n.lanes),
                (e.child = n.child),
                (e.subtreeFlags = 0),
                (e.deletions = null),
                (e.memoizedProps = n.memoizedProps),
                (e.memoizedState = n.memoizedState),
                (e.updateQueue = n.updateQueue),
                (e.type = n.type),
                (t = n.dependencies),
                (e.dependencies =
                  null === t
                    ? null
                    : { lanes: t.lanes, firstContext: t.firstContext })),
            e
          );
        }
        function Il(e, t, n, r, i, o) {
          var s = 0;
          if (((r = e), "function" === typeof e)) Nl(e) && (s = 1);
          else if ("string" === typeof e)
            s = (function (e, t, n) {
              if (1 === n || null != t.itemProp) return !1;
              switch (e) {
                case "meta":
                case "title":
                  return !0;
                case "style":
                  if (
                    "string" !== typeof t.precedence ||
                    "string" !== typeof t.href ||
                    "" === t.href
                  )
                    break;
                  return !0;
                case "link":
                  if (
                    "string" !== typeof t.rel ||
                    "string" !== typeof t.href ||
                    "" === t.href ||
                    t.onLoad ||
                    t.onError
                  )
                    break;
                  return (
                    "stylesheet" !== t.rel ||
                    ((e = t.disabled),
                    "string" === typeof t.precedence && null == e)
                  );
                case "script":
                  if (
                    t.async &&
                    "function" !== typeof t.async &&
                    "symbol" !== typeof t.async &&
                    !t.onLoad &&
                    !t.onError &&
                    t.src &&
                    "string" === typeof t.src
                  )
                    return !0;
              }
              return !1;
            })(e, n, X.current)
              ? 26
              : "html" === e || "head" === e || "body" === e
              ? 27
              : 5;
          else
            e: switch (e) {
              case d:
                return Vl(n.children, i, o, t);
              case f:
                (s = 8), (i |= 24);
                break;
              case h:
                return (
                  ((e = Ol(12, n, t, 2 | i)).elementType = h), (e.lanes = o), e
                );
              case y:
                return (
                  ((e = Ol(13, n, t, i)).elementType = y), (e.lanes = o), e
                );
              case b:
                return (
                  ((e = Ol(19, n, t, i)).elementType = b), (e.lanes = o), e
                );
              case S:
                return Bl(n, i, o, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case p:
                    case g:
                      s = 10;
                      break e;
                    case m:
                      s = 9;
                      break e;
                    case v:
                      s = 11;
                      break e;
                    case w:
                      s = 14;
                      break e;
                    case x:
                      (s = 16), (r = null);
                      break e;
                  }
                (s = 29),
                  (n = Error(a(130, null === e ? "null" : typeof e, ""))),
                  (r = null);
            }
          return (
            ((t = Ol(s, n, t, i)).elementType = e),
            (t.type = r),
            (t.lanes = o),
            t
          );
        }
        function Vl(e, t, n, r) {
          return ((e = Ol(7, e, r, t)).lanes = n), e;
        }
        function Bl(e, t, n, r) {
          ((e = Ol(22, e, r, t)).elementType = S), (e.lanes = n);
          var i = {
            _visibility: 1,
            _pendingVisibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
            _current: null,
            detach: function () {
              var e = i._current;
              if (null === e) throw Error(a(456));
              if (0 === (2 & i._pendingVisibility)) {
                var t = Rr(e, 2);
                null !== t && ((i._pendingVisibility |= 2), zu(t, e, 2));
              }
            },
            attach: function () {
              var e = i._current;
              if (null === e) throw Error(a(456));
              if (0 !== (2 & i._pendingVisibility)) {
                var t = Rr(e, 2);
                null !== t && ((i._pendingVisibility &= -3), zu(t, e, 2));
              }
            },
          };
          return (e.stateNode = i), e;
        }
        function $l(e, t, n) {
          return ((e = Ol(6, e, null, t)).lanes = n), e;
        }
        function Ul(e, t, n) {
          return (
            ((t = Ol(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Wl(e) {
          e.flags |= 4;
        }
        function Hl(e, t) {
          if ("stylesheet" !== t.type || 0 !== (4 & t.state.loading))
            e.flags &= -16777217;
          else if (((e.flags |= 16777216), !Rd(t))) {
            if (
              null !== (t = Ai.current) &&
              ((4194176 & ru) === ru
                ? null !== Ri
                : ((62914560 & ru) !== ru && 0 === (536870912 & ru)) ||
                  t !== Ri)
            )
              throw ((fi = li), si);
            e.flags |= 8192;
          }
        }
        function Yl(e, t) {
          null !== t && (e.flags |= 4),
            16384 & e.flags &&
              ((t = 22 !== e.tag ? Le() : 536870912),
              (e.lanes |= t),
              (mu |= t));
        }
        function ql(e, t) {
          if (!Qr)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Kl(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var i = e.child; null !== i; )
              (n |= i.lanes | i.childLanes),
                (r |= 31457280 & i.subtreeFlags),
                (r |= 31457280 & i.flags),
                (i.return = e),
                (i = i.sibling);
          else
            for (i = e.child; null !== i; )
              (n |= i.lanes | i.childLanes),
                (r |= i.subtreeFlags),
                (r |= i.flags),
                (i.return = e),
                (i = i.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Xl(e, t, n) {
          var r = t.pendingProps;
          switch ((qr(t), t.tag)) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
            case 1:
              return Kl(t), null;
            case 3:
              return (
                (n = t.stateNode),
                (r = null),
                null !== e && (r = e.memoizedState.cache),
                t.memoizedState.cache !== r && (t.flags |= 2048),
                bs(Ii),
                ee(),
                n.pendingContext &&
                  ((n.context = n.pendingContext), (n.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (ri(t)
                    ? Wl(t)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== Gr && (Mu(Gr), (Gr = null)))),
                Kl(t),
                null
              );
            case 26:
              return (
                (n = t.memoizedState),
                null === e
                  ? (Wl(t),
                    null !== n
                      ? (Kl(t), Hl(t, n))
                      : (Kl(t), (t.flags &= -16777217)))
                  : n
                  ? n !== e.memoizedState
                    ? (Wl(t), Kl(t), Hl(t, n))
                    : (Kl(t), (t.flags &= -16777217))
                  : (e.memoizedProps !== r && Wl(t),
                    Kl(t),
                    (t.flags &= -16777217)),
                null
              );
            case 27:
              ne(t), (n = G.current);
              var i = t.type;
              if (null !== e && null != t.stateNode)
                e.memoizedProps !== r && Wl(t);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(a(166));
                  return Kl(t), null;
                }
                (e = X.current),
                  ri(t) ? ti(t) : ((e = ud(i, r, n)), (t.stateNode = e), Wl(t));
              }
              return Kl(t), null;
            case 5:
              if ((ne(t), (n = t.type), null !== e && null != t.stateNode))
                e.memoizedProps !== r && Wl(t);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(a(166));
                  return Kl(t), null;
                }
                if (((e = X.current), ri(t))) ti(t);
                else {
                  switch (((i = Xc(G.current)), e)) {
                    case 1:
                      e = i.createElementNS("http://www.w3.org/2000/svg", n);
                      break;
                    case 2:
                      e = i.createElementNS(
                        "http://www.w3.org/1998/Math/MathML",
                        n
                      );
                      break;
                    default:
                      switch (n) {
                        case "svg":
                          e = i.createElementNS(
                            "http://www.w3.org/2000/svg",
                            n
                          );
                          break;
                        case "math":
                          e = i.createElementNS(
                            "http://www.w3.org/1998/Math/MathML",
                            n
                          );
                          break;
                        case "script":
                          ((e = i.createElement("div")).innerHTML =
                            "<script></script>"),
                            (e = e.removeChild(e.firstChild));
                          break;
                        case "select":
                          (e =
                            "string" === typeof r.is
                              ? i.createElement("select", { is: r.is })
                              : i.createElement("select")),
                            r.multiple
                              ? (e.multiple = !0)
                              : r.size && (e.size = r.size);
                          break;
                        default:
                          e =
                            "string" === typeof r.is
                              ? i.createElement(n, { is: r.is })
                              : i.createElement(n);
                      }
                  }
                  (e[Fe] = t), (e[Ie] = r);
                  e: for (i = t.child; null !== i; ) {
                    if (5 === i.tag || 6 === i.tag) e.appendChild(i.stateNode);
                    else if (4 !== i.tag && 27 !== i.tag && null !== i.child) {
                      (i.child.return = i), (i = i.child);
                      continue;
                    }
                    if (i === t) break e;
                    for (; null === i.sibling; ) {
                      if (null === i.return || i.return === t) break e;
                      i = i.return;
                    }
                    (i.sibling.return = i.return), (i = i.sibling);
                  }
                  t.stateNode = e;
                  e: switch ((Yc(e, n, r), n)) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      e = !!r.autoFocus;
                      break e;
                    case "img":
                      e = !0;
                      break e;
                    default:
                      e = !1;
                  }
                  e && Wl(t);
                }
              }
              return Kl(t), (t.flags &= -16777217), null;
            case 6:
              if (e && null != t.stateNode) e.memoizedProps !== r && Wl(t);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(a(166));
                if (((e = G.current), ri(t))) {
                  if (
                    ((e = t.stateNode),
                    (n = t.memoizedProps),
                    (r = null),
                    null !== (i = Kr))
                  )
                    switch (i.tag) {
                      case 27:
                      case 5:
                        r = i.memoizedProps;
                    }
                  (e[Fe] = t),
                    (e = !!(
                      e.nodeValue === n ||
                      (null !== r && !0 === r.suppressHydrationWarning) ||
                      $c(e.nodeValue, n)
                    )) || ei(t);
                } else
                  ((e = Xc(e).createTextNode(r))[Fe] = t), (t.stateNode = e);
              }
              return Kl(t), null;
            case 13:
              if (
                ((r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (((i = ri(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(a(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(a(317));
                    i[Fe] = t;
                  } else
                    ii(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Kl(t), (i = !1);
                } else null !== Gr && (Mu(Gr), (Gr = null)), (i = !0);
                if (!i) return 256 & t.flags ? (Di(t), t) : (Di(t), null);
              }
              if ((Di(t), 0 !== (128 & t.flags))) return (t.lanes = n), t;
              if (
                ((n = null !== r),
                (e = null !== e && null !== e.memoizedState),
                n)
              ) {
                (i = null),
                  null !== (r = t.child).alternate &&
                    null !== r.alternate.memoizedState &&
                    null !== r.alternate.memoizedState.cachePool &&
                    (i = r.alternate.memoizedState.cachePool.pool);
                var o = null;
                null !== r.memoizedState &&
                  null !== r.memoizedState.cachePool &&
                  (o = r.memoizedState.cachePool.pool),
                  o !== i && (r.flags |= 2048);
              }
              return (
                n !== e && n && (t.child.flags |= 8192),
                Yl(t, t.updateQueue),
                Kl(t),
                null
              );
            case 4:
              return (
                ee(), null === e && zc(t.stateNode.containerInfo), Kl(t), null
              );
            case 10:
              return bs(t.type), Kl(t), null;
            case 19:
              if ((q(Mi), null === (i = t.memoizedState))) return Kl(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (o = i.rendering)))
                if (r) ql(i, !1);
                else {
                  if (0 !== cu || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (o = Oi(e))) {
                        for (
                          t.flags |= 128,
                            ql(i, !1),
                            e = o.updateQueue,
                            t.updateQueue = e,
                            Yl(t, e),
                            t.subtreeFlags = 0,
                            e = n,
                            n = t.child;
                          null !== n;

                        )
                          Fl(n, e), (n = n.sibling);
                        return K(Mi, (1 & Mi.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    le() > wu &&
                    ((t.flags |= 128),
                    (r = !0),
                    ql(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = Oi(o))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      (e = e.updateQueue),
                      (t.updateQueue = e),
                      Yl(t, e),
                      ql(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !o.alternate &&
                        !Qr)
                    )
                      return Kl(t), null;
                  } else
                    2 * le() - i.renderingStartTime > wu &&
                      536870912 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      ql(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((o.sibling = t.child), (t.child = o))
                  : (null !== (e = i.last) ? (e.sibling = o) : (t.child = o),
                    (i.last = o));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = le()),
                  (t.sibling = null),
                  (e = Mi.current),
                  K(Mi, r ? (1 & e) | 2 : 1 & e),
                  t)
                : (Kl(t), null);
            case 22:
            case 23:
              return (
                Di(t),
                Ti(),
                (r = null !== t.memoizedState),
                null !== e
                  ? (null !== e.memoizedState) !== r && (t.flags |= 8192)
                  : r && (t.flags |= 8192),
                r
                  ? 0 !== (536870912 & n) &&
                    0 === (128 & t.flags) &&
                    (Kl(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Kl(t),
                null !== (n = t.updateQueue) && Yl(t, n.retryQueue),
                (n = null),
                null !== e &&
                  null !== e.memoizedState &&
                  null !== e.memoizedState.cachePool &&
                  (n = e.memoizedState.cachePool.pool),
                (r = null),
                null !== t.memoizedState &&
                  null !== t.memoizedState.cachePool &&
                  (r = t.memoizedState.cachePool.pool),
                r !== n && (t.flags |= 2048),
                null !== e && q(Ki),
                null
              );
            case 24:
              return (
                (n = null),
                null !== e && (n = e.memoizedState.cache),
                t.memoizedState.cache !== n && (t.flags |= 2048),
                bs(Ii),
                Kl(t),
                null
              );
            case 25:
              return null;
          }
          throw Error(a(156, t.tag));
        }
        function Ql(e, t) {
          switch ((qr(t), t.tag)) {
            case 1:
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 3:
              return (
                bs(Ii),
                ee(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 26:
            case 27:
            case 5:
              return ne(t), null;
            case 13:
              if (
                (Di(t), null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(a(340));
                ii();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return q(Mi), null;
            case 4:
              return ee(), null;
            case 10:
              return bs(t.type), null;
            case 22:
            case 23:
              return (
                Di(t),
                Ti(),
                null !== e && q(Ki),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 24:
              return bs(Ii), null;
            default:
              return null;
          }
        }
        function Gl(e, t) {
          switch ((qr(t), t.tag)) {
            case 3:
              bs(Ii), ee();
              break;
            case 26:
            case 27:
            case 5:
              ne(t);
              break;
            case 4:
              ee();
              break;
            case 13:
              Di(t);
              break;
            case 19:
              q(Mi);
              break;
            case 10:
              bs(t.type);
              break;
            case 22:
            case 23:
              Di(t), Ti(), null !== e && q(Ki);
              break;
            case 24:
              bs(Ii);
          }
        }
        var Zl = {
            getCacheForType: function (e) {
              var t = Cs(Ii),
                n = t.data.get(e);
              return void 0 === n && ((n = e()), t.data.set(e, n)), n;
            },
          },
          Jl = "function" === typeof WeakMap ? WeakMap : Map,
          eu = 0,
          tu = null,
          nu = null,
          ru = 0,
          iu = 0,
          ou = null,
          au = !1,
          su = !1,
          lu = !1,
          uu = 0,
          cu = 0,
          du = 0,
          fu = 0,
          hu = 0,
          pu = 0,
          mu = 0,
          gu = null,
          vu = null,
          yu = !1,
          bu = 0,
          wu = 1 / 0,
          xu = null,
          Su = null,
          ku = !1,
          Eu = null,
          Cu = 0,
          Pu = 0,
          Tu = null,
          Au = 0,
          Ru = null;
        function Lu() {
          if (0 !== (2 & eu) && 0 !== ru) return ru & -ru;
          if (null !== L.T) {
            return 0 !== Wi ? Wi : xc();
          }
          return Ne();
        }
        function ju() {
          0 === pu && (pu = 0 === (536870912 & ru) || Qr ? Re() : 536870912);
          var e = Ai.current;
          return null !== e && (e.flags |= 32), pu;
        }
        function zu(e, t, n) {
          ((e === tu && 2 === iu) || null !== e.cancelPendingCommit) &&
            (Vu(e, 0), _u(e, ru, pu, !1)),
            ze(e, n),
            (0 !== (2 & eu) && e === tu) ||
              (e === tu &&
                (0 === (2 & eu) && (fu |= n), 4 === cu && _u(e, ru, pu, !1)),
              mc(e));
        }
        function Du(e, t, n) {
          if (0 !== (6 & eu)) throw Error(a(327));
          for (
            var r =
                (!n && 0 === (60 & t) && 0 === (t & e.expiredLanes)) ||
                Te(e, t),
              i = r
                ? (function (e, t) {
                    var n = eu;
                    eu |= 2;
                    var r = $u(),
                      i = Uu();
                    tu !== e || ru !== t
                      ? ((xu = null), (wu = le() + 500), Vu(e, t))
                      : (su = Te(e, t));
                    e: for (;;)
                      try {
                        if (0 !== iu && null !== nu) {
                          t = nu;
                          var o = ou;
                          t: switch (iu) {
                            case 1:
                              (iu = 0), (ou = null), Qu(e, t, o, 1);
                              break;
                            case 2:
                              if (ui(o)) {
                                (iu = 0), (ou = null), Xu(t);
                                break;
                              }
                              (t = function () {
                                2 === iu && tu === e && (iu = 7), mc(e);
                              }),
                                o.then(t, t);
                              break e;
                            case 3:
                              iu = 7;
                              break e;
                            case 4:
                              iu = 5;
                              break e;
                            case 7:
                              ui(o)
                                ? ((iu = 0), (ou = null), Xu(t))
                                : ((iu = 0), (ou = null), Qu(e, t, o, 7));
                              break;
                            case 5:
                              var s = null;
                              switch (nu.tag) {
                                case 26:
                                  s = nu.memoizedState;
                                case 5:
                                case 27:
                                  var l = nu;
                                  if (!s || Rd(s)) {
                                    (iu = 0), (ou = null);
                                    var u = l.sibling;
                                    if (null !== u) nu = u;
                                    else {
                                      var c = l.return;
                                      null !== c
                                        ? ((nu = c), Gu(c))
                                        : (nu = null);
                                    }
                                    break t;
                                  }
                              }
                              (iu = 0), (ou = null), Qu(e, t, o, 5);
                              break;
                            case 6:
                              (iu = 0), (ou = null), Qu(e, t, o, 6);
                              break;
                            case 8:
                              Iu(), (cu = 6);
                              break e;
                            default:
                              throw Error(a(462));
                          }
                        }
                        qu();
                        break;
                      } catch (d) {
                        Bu(e, d);
                      }
                    return (
                      (vs = gs = null),
                      (L.H = r),
                      (L.A = i),
                      (eu = n),
                      null !== nu ? 0 : ((tu = null), (ru = 0), Pr(), cu)
                    );
                  })(e, t)
                : Hu(e, t, !0),
              o = r;
            ;

          ) {
            if (0 === i) {
              su && !r && _u(e, t, 0, !1);
              break;
            }
            if (6 === i) _u(e, t, 0, !au);
            else {
              if (((n = e.current.alternate), o && !Nu(n))) {
                (i = Hu(e, t, !1)), (o = !1);
                continue;
              }
              if (2 === i) {
                if (((o = t), e.errorRecoveryDisabledLanes & o)) var s = 0;
                else
                  s =
                    0 !== (s = -536870913 & e.pendingLanes)
                      ? s
                      : 536870912 & s
                      ? 536870912
                      : 0;
                if (0 !== s) {
                  t = s;
                  e: {
                    var l = e;
                    i = gu;
                    var u = l.current.memoizedState.isDehydrated;
                    if (
                      (u && (Vu(l, s).flags |= 256), 2 !== (s = Hu(l, s, !1)))
                    ) {
                      if (lu && !u) {
                        (l.errorRecoveryDisabledLanes |= o), (fu |= o), (i = 4);
                        break e;
                      }
                      (o = vu), (vu = i), null !== o && Mu(o);
                    }
                    i = s;
                  }
                  if (((o = !1), 2 !== i)) continue;
                }
              }
              if (1 === i) {
                Vu(e, 0), _u(e, t, 0, !0);
                break;
              }
              e: {
                switch (((r = e), i)) {
                  case 0:
                  case 1:
                    throw Error(a(345));
                  case 4:
                    if ((4194176 & t) === t) {
                      _u(r, t, pu, !au);
                      break e;
                    }
                    break;
                  case 2:
                    vu = null;
                    break;
                  case 3:
                  case 5:
                    break;
                  default:
                    throw Error(a(329));
                }
                if (
                  ((r.finishedWork = n),
                  (r.finishedLanes = t),
                  (62914560 & t) === t && 10 < (o = bu + 300 - le()))
                ) {
                  if ((_u(r, t, pu, !au), 0 !== Pe(r, 0))) break e;
                  r.timeoutHandle = ed(
                    Ou.bind(
                      null,
                      r,
                      n,
                      vu,
                      xu,
                      yu,
                      t,
                      pu,
                      fu,
                      mu,
                      au,
                      2,
                      -0,
                      0
                    ),
                    o
                  );
                } else Ou(r, n, vu, xu, yu, t, pu, fu, mu, au, 0, -0, 0);
              }
            }
            break;
          }
          mc(e);
        }
        function Mu(e) {
          null === vu ? (vu = e) : vu.push.apply(vu, e);
        }
        function Ou(e, t, n, r, i, o, s, l, u, c, d, f, h) {
          var p = t.subtreeFlags;
          if (
            (8192 & p || 16785408 === (16785408 & p)) &&
            ((Ld = { stylesheets: null, count: 0, unsuspend: jd }),
            Al(t),
            null !==
              (t = (function () {
                if (null === Ld) throw Error(a(475));
                var e = Ld;
                return (
                  e.stylesheets && 0 === e.count && Md(e, e.stylesheets),
                  0 < e.count
                    ? function (t) {
                        var n = setTimeout(function () {
                          if (
                            (e.stylesheets && Md(e, e.stylesheets), e.unsuspend)
                          ) {
                            var t = e.unsuspend;
                            (e.unsuspend = null), t();
                          }
                        }, 6e4);
                        return (
                          (e.unsuspend = t),
                          function () {
                            (e.unsuspend = null), clearTimeout(n);
                          }
                        );
                      }
                    : null
                );
              })()))
          )
            return (
              (e.cancelPendingCommit = t(
                Ju.bind(null, e, n, r, i, s, l, u, 1, f, h)
              )),
              void _u(e, o, s, !c)
            );
          Ju(e, n, r, i, s, l, u, d, f, h);
        }
        function Nu(e) {
          for (var t = e; ; ) {
            var n = t.tag;
            if (
              (0 === n || 11 === n || 15 === n) &&
              16384 & t.flags &&
              null !== (n = t.updateQueue) &&
              null !== (n = n.stores)
            )
              for (var r = 0; r < n.length; r++) {
                var i = n[r],
                  o = i.getSnapshot;
                i = i.value;
                try {
                  if (!Kn(o(), i)) return !1;
                } catch (a) {
                  return !1;
                }
              }
            if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
              (n.return = t), (t = n);
            else {
              if (t === e) break;
              for (; null === t.sibling; ) {
                if (null === t.return || t.return === e) return !0;
                t = t.return;
              }
              (t.sibling.return = t.return), (t = t.sibling);
            }
          }
          return !0;
        }
        function _u(e, t, n, r) {
          (t &= ~hu),
            (t &= ~fu),
            (e.suspendedLanes |= t),
            (e.pingedLanes &= ~t),
            r && (e.warmLanes |= t),
            (r = e.expirationTimes);
          for (var i = t; 0 < i; ) {
            var o = 31 - we(i),
              a = 1 << o;
            (r[o] = -1), (i &= ~a);
          }
          0 !== n && De(e, n, t);
        }
        function Fu() {
          return 0 !== (6 & eu) || (gc(0, !1), !1);
        }
        function Iu() {
          if (null !== nu) {
            if (0 === iu) var e = nu.return;
            else
              (vs = gs = null), yo((e = nu)), (pi = null), (mi = 0), (e = nu);
            for (; null !== e; ) Gl(e.alternate, e), (e = e.return);
            nu = null;
          }
        }
        function Vu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          -1 !== n && ((e.timeoutHandle = -1), td(n)),
            null !== (n = e.cancelPendingCommit) &&
              ((e.cancelPendingCommit = null), n()),
            Iu(),
            (tu = e),
            (nu = n = _l(e.current, null)),
            (ru = t),
            (iu = 0),
            (ou = null),
            (au = !1),
            (su = Te(e, t)),
            (lu = !1),
            (mu = pu = hu = fu = du = cu = 0),
            (vu = gu = null),
            (yu = !1),
            0 !== (8 & t) && (t |= 32 & t);
          var r = e.entangledLanes;
          if (0 !== r)
            for (e = e.entanglements, r &= t; 0 < r; ) {
              var i = 31 - we(r),
                o = 1 << i;
              (t |= e[i]), (r &= ~o);
            }
          return (uu = t), Pr(), n;
        }
        function Bu(e, t) {
          (Ji = null),
            (L.H = Ca),
            t === ai
              ? ((t = hi()), (iu = 3))
              : t === si
              ? ((t = hi()), (iu = 4))
              : (iu =
                  t === Ua
                    ? 8
                    : null !== t &&
                      "object" === typeof t &&
                      "function" === typeof t.then
                    ? 6
                    : 1),
            (ou = t),
            null === nu && ((cu = 1), Fa(e, Mr(t, e.current)));
        }
        function $u() {
          var e = L.H;
          return (L.H = Ca), null === e ? Ca : e;
        }
        function Uu() {
          var e = L.A;
          return (L.A = Zl), e;
        }
        function Wu() {
          (cu = 4),
            au || ((4194176 & ru) !== ru && null !== Ai.current) || (su = !0),
            (0 === (134217727 & du) && 0 === (134217727 & fu)) ||
              null === tu ||
              _u(tu, ru, pu, !1);
        }
        function Hu(e, t, n) {
          var r = eu;
          eu |= 2;
          var i = $u(),
            o = Uu();
          (tu === e && ru === t) || ((xu = null), Vu(e, t)), (t = !1);
          var a = cu;
          e: for (;;)
            try {
              if (0 !== iu && null !== nu) {
                var s = nu,
                  l = ou;
                switch (iu) {
                  case 8:
                    Iu(), (a = 6);
                    break e;
                  case 3:
                  case 2:
                  case 6:
                    null === Ai.current && (t = !0);
                    var u = iu;
                    if (((iu = 0), (ou = null), Qu(e, s, l, u), n && su)) {
                      a = 0;
                      break e;
                    }
                    break;
                  default:
                    (u = iu), (iu = 0), (ou = null), Qu(e, s, l, u);
                }
              }
              Yu(), (a = cu);
              break;
            } catch (c) {
              Bu(e, c);
            }
          return (
            t && e.shellSuspendCounter++,
            (vs = gs = null),
            (eu = r),
            (L.H = i),
            (L.A = o),
            null === nu && ((tu = null), (ru = 0), Pr()),
            a
          );
        }
        function Yu() {
          for (; null !== nu; ) Ku(nu);
        }
        function qu() {
          for (; null !== nu && !ae(); ) Ku(nu);
        }
        function Ku(e) {
          var t = ps(e.alternate, e, uu);
          (e.memoizedProps = e.pendingProps), null === t ? Gu(e) : (nu = t);
        }
        function Xu(e) {
          var t = e,
            n = t.alternate;
          switch (t.tag) {
            case 15:
            case 0:
              t = Ja(n, t, t.pendingProps, t.type, void 0, ru);
              break;
            case 11:
              t = Ja(n, t, t.pendingProps, t.type.render, t.ref, ru);
              break;
            case 5:
              yo(t);
            default:
              Gl(n, t), (t = ps(n, (t = nu = Fl(t, uu)), uu));
          }
          (e.memoizedProps = e.pendingProps), null === t ? Gu(e) : (nu = t);
        }
        function Qu(e, t, n, r) {
          (vs = gs = null), yo(t), (pi = null), (mi = 0);
          var i = t.return;
          try {
            if (
              (function (e, t, n, r, i) {
                if (
                  ((n.flags |= 32768),
                  null !== r &&
                    "object" === typeof r &&
                    "function" === typeof r.then)
                ) {
                  if (
                    (null !== (t = n.alternate) && Ss(t, n, i, !0),
                    null !== (n = Ai.current))
                  ) {
                    switch (n.tag) {
                      case 13:
                        return (
                          null === Ri
                            ? Wu()
                            : null === n.alternate && 0 === cu && (cu = 3),
                          (n.flags &= -257),
                          (n.flags |= 65536),
                          (n.lanes = i),
                          r === li
                            ? (n.flags |= 16384)
                            : (null === (t = n.updateQueue)
                                ? (n.updateQueue = new Set([r]))
                                : t.add(r),
                              ic(e, r, i)),
                          !1
                        );
                      case 22:
                        return (
                          (n.flags |= 65536),
                          r === li
                            ? (n.flags |= 16384)
                            : (null === (t = n.updateQueue)
                                ? ((t = {
                                    transitions: null,
                                    markerInstances: null,
                                    retryQueue: new Set([r]),
                                  }),
                                  (n.updateQueue = t))
                                : null === (n = t.retryQueue)
                                ? (t.retryQueue = new Set([r]))
                                : n.add(r),
                              ic(e, r, i)),
                          !1
                        );
                    }
                    throw Error(a(435, n.tag));
                  }
                  return ic(e, r, i), Wu(), !1;
                }
                if (Qr)
                  return (
                    null !== (t = Ai.current)
                      ? (0 === (65536 & t.flags) && (t.flags |= 256),
                        (t.flags |= 65536),
                        (t.lanes = i),
                        r !== Jr &&
                          oi(Mr((e = Error(a(422), { cause: r })), n)))
                      : (r !== Jr &&
                          oi(Mr((t = Error(a(423), { cause: r })), n)),
                        ((e = e.current.alternate).flags |= 65536),
                        (i &= -i),
                        (e.lanes |= i),
                        (r = Mr(r, n)),
                        Ms(e, (i = Va(e.stateNode, r, i))),
                        4 !== cu && (cu = 2)),
                    !1
                  );
                var o = Error(a(520), { cause: r });
                if (
                  ((o = Mr(o, n)),
                  null === gu ? (gu = [o]) : gu.push(o),
                  4 !== cu && (cu = 2),
                  null === t)
                )
                  return !0;
                (r = Mr(r, n)), (n = t);
                do {
                  switch (n.tag) {
                    case 3:
                      return (
                        (n.flags |= 65536),
                        (e = i & -i),
                        (n.lanes |= e),
                        Ms(n, (e = Va(n.stateNode, r, e))),
                        !1
                      );
                    case 1:
                      if (
                        ((t = n.type),
                        (o = n.stateNode),
                        0 === (128 & n.flags) &&
                          ("function" === typeof t.getDerivedStateFromError ||
                            (null !== o &&
                              "function" === typeof o.componentDidCatch &&
                              (null === Su || !Su.has(o)))))
                      )
                        return (
                          (n.flags |= 65536),
                          (i &= -i),
                          (n.lanes |= i),
                          $a((i = Ba(i)), e, n, r),
                          Ms(n, i),
                          !1
                        );
                  }
                  n = n.return;
                } while (null !== n);
                return !1;
              })(e, i, t, n, ru)
            )
              return (cu = 1), Fa(e, Mr(n, e.current)), void (nu = null);
          } catch (o) {
            if (null !== i) throw ((nu = i), o);
            return (cu = 1), Fa(e, Mr(n, e.current)), void (nu = null);
          }
          32768 & t.flags
            ? (Qr || 1 === r
                ? (e = !0)
                : su || 0 !== (536870912 & ru)
                ? (e = !1)
                : ((au = e = !0),
                  (2 === r || 3 === r || 6 === r) &&
                    null !== (r = Ai.current) &&
                    13 === r.tag &&
                    (r.flags |= 16384)),
              Zu(t, e))
            : Gu(t);
        }
        function Gu(e) {
          var t = e;
          do {
            if (0 !== (32768 & t.flags)) return void Zu(t, au);
            e = t.return;
            var n = Xl(t.alternate, t, uu);
            if (null !== n) return void (nu = n);
            if (null !== (t = t.sibling)) return void (nu = t);
            nu = t = e;
          } while (null !== t);
          0 === cu && (cu = 5);
        }
        function Zu(e, t) {
          do {
            var n = Ql(e.alternate, e);
            if (null !== n) return (n.flags &= 32767), void (nu = n);
            if (
              (null !== (n = e.return) &&
                ((n.flags |= 32768),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
              !t && null !== (e = e.sibling))
            )
              return void (nu = e);
            nu = e = n;
          } while (null !== e);
          (cu = 6), (nu = null);
        }
        function Ju(e, t, n, r, i, o, s, l, u, c) {
          var d = L.T,
            f = $.p;
          try {
            ($.p = 2),
              (L.T = null),
              (function (e, t, n, r, i, o, s, l) {
                do {
                  tc();
                } while (null !== Eu);
                if (0 !== (6 & eu)) throw Error(a(327));
                var u = e.finishedWork;
                if (((r = e.finishedLanes), null === u)) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  u === e.current)
                )
                  throw Error(a(177));
                (e.callbackNode = null),
                  (e.callbackPriority = 0),
                  (e.cancelPendingCommit = null);
                var c = u.lanes | u.childLanes;
                if (
                  ((function (e, t, n, r, i, o) {
                    var a = e.pendingLanes;
                    (e.pendingLanes = n),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.warmLanes = 0),
                      (e.expiredLanes &= n),
                      (e.entangledLanes &= n),
                      (e.errorRecoveryDisabledLanes &= n),
                      (e.shellSuspendCounter = 0);
                    var s = e.entanglements,
                      l = e.expirationTimes,
                      u = e.hiddenUpdates;
                    for (n = a & ~n; 0 < n; ) {
                      var c = 31 - we(n),
                        d = 1 << c;
                      (s[c] = 0), (l[c] = -1);
                      var f = u[c];
                      if (null !== f)
                        for (u[c] = null, c = 0; c < f.length; c++) {
                          var h = f[c];
                          null !== h && (h.lane &= -536870913);
                        }
                      n &= ~d;
                    }
                    0 !== r && De(e, r, 0),
                      0 !== o &&
                        0 === i &&
                        0 !== e.tag &&
                        (e.suspendedLanes |= o & ~(a & ~t));
                  })(e, r, (c |= Cr), o, s, l),
                  e === tu && ((nu = tu = null), (ru = 0)),
                  (0 === (10256 & u.subtreeFlags) && 0 === (10256 & u.flags)) ||
                    ku ||
                    ((ku = !0),
                    (Pu = c),
                    (Tu = n),
                    (function (e, t) {
                      ie(e, t);
                    })(fe, function () {
                      return tc(), null;
                    })),
                  (n = 0 !== (15990 & u.flags)),
                  0 !== (15990 & u.subtreeFlags) || n
                    ? ((n = L.T),
                      (L.T = null),
                      (o = $.p),
                      ($.p = 2),
                      (s = eu),
                      (eu |= 4),
                      (function (e, t) {
                        if (
                          ((e = e.containerInfo), (qc = Wd), er((e = Jn(e))))
                        ) {
                          if ("selectionStart" in e)
                            var n = {
                              start: e.selectionStart,
                              end: e.selectionEnd,
                            };
                          else
                            e: {
                              var r =
                                (n =
                                  ((n = e.ownerDocument) && n.defaultView) ||
                                  window).getSelection && n.getSelection();
                              if (r && 0 !== r.rangeCount) {
                                n = r.anchorNode;
                                var i = r.anchorOffset,
                                  o = r.focusNode;
                                r = r.focusOffset;
                                try {
                                  n.nodeType, o.nodeType;
                                } catch (g) {
                                  n = null;
                                  break e;
                                }
                                var s = 0,
                                  l = -1,
                                  u = -1,
                                  c = 0,
                                  d = 0,
                                  f = e,
                                  h = null;
                                t: for (;;) {
                                  for (
                                    var p;
                                    f !== n ||
                                      (0 !== i && 3 !== f.nodeType) ||
                                      (l = s + i),
                                      f !== o ||
                                        (0 !== r && 3 !== f.nodeType) ||
                                        (u = s + r),
                                      3 === f.nodeType &&
                                        (s += f.nodeValue.length),
                                      null !== (p = f.firstChild);

                                  )
                                    (h = f), (f = p);
                                  for (;;) {
                                    if (f === e) break t;
                                    if (
                                      (h === n && ++c === i && (l = s),
                                      h === o && ++d === r && (u = s),
                                      null !== (p = f.nextSibling))
                                    )
                                      break;
                                    h = (f = h).parentNode;
                                  }
                                  f = p;
                                }
                                n =
                                  -1 === l || -1 === u
                                    ? null
                                    : { start: l, end: u };
                              } else n = null;
                            }
                          n = n || { start: 0, end: 0 };
                        } else n = null;
                        for (
                          Kc = { focusedElem: e, selectionRange: n },
                            Wd = !1,
                            nl = t;
                          null !== nl;

                        )
                          if (
                            ((e = (t = nl).child),
                            0 !== (1028 & t.subtreeFlags) && null !== e)
                          )
                            (e.return = t), (nl = e);
                          else
                            for (; null !== nl; ) {
                              switch (
                                ((o = (t = nl).alternate), (e = t.flags), t.tag)
                              ) {
                                case 0:
                                case 11:
                                case 15:
                                case 5:
                                case 26:
                                case 27:
                                case 6:
                                case 4:
                                case 17:
                                  break;
                                case 1:
                                  if (0 !== (1024 & e) && null !== o) {
                                    (e = void 0),
                                      (n = t),
                                      (i = o.memoizedProps),
                                      (o = o.memoizedState),
                                      (r = n.stateNode);
                                    try {
                                      var m = Da(
                                        n.type,
                                        i,
                                        (n.elementType, n.type)
                                      );
                                      (e = r.getSnapshotBeforeUpdate(m, o)),
                                        (r.__reactInternalSnapshotBeforeUpdate =
                                          e);
                                    } catch (v) {
                                      rc(n, n.return, v);
                                    }
                                  }
                                  break;
                                case 3:
                                  if (0 !== (1024 & e))
                                    if (
                                      9 ===
                                      (n = (e = t.stateNode.containerInfo)
                                        .nodeType)
                                    )
                                      ad(e);
                                    else if (1 === n)
                                      switch (e.nodeName) {
                                        case "HEAD":
                                        case "HTML":
                                        case "BODY":
                                          ad(e);
                                          break;
                                        default:
                                          e.textContent = "";
                                      }
                                  break;
                                default:
                                  if (0 !== (1024 & e)) throw Error(a(163));
                              }
                              if (null !== (e = t.sibling)) {
                                (e.return = t.return), (nl = e);
                                break;
                              }
                              nl = t.return;
                            }
                        (m = rl), (rl = !1);
                      })(e, u),
                      pl(u, e),
                      tr(Kc, e.containerInfo),
                      (Wd = !!qc),
                      (Kc = qc = null),
                      (e.current = u),
                      il(e, u.alternate, u),
                      se(),
                      (eu = s),
                      ($.p = o),
                      (L.T = n))
                    : (e.current = u),
                  ku ? ((ku = !1), (Eu = e), (Cu = r)) : ec(e, c),
                  (c = e.pendingLanes),
                  0 === c && (Su = null),
                  (function (e) {
                    if (ye && "function" === typeof ye.onCommitFiberRoot)
                      try {
                        ye.onCommitFiberRoot(
                          ve,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(u.stateNode),
                  mc(e),
                  null !== t)
                )
                  for (i = e.onRecoverableError, u = 0; u < t.length; u++)
                    (c = t[u]), i(c.value, { componentStack: c.stack });
                0 !== (3 & Cu) && tc(),
                  (c = e.pendingLanes),
                  0 !== (4194218 & r) && 0 !== (42 & c)
                    ? e === Ru
                      ? Au++
                      : ((Au = 0), (Ru = e))
                    : (Au = 0),
                  gc(0, !1);
              })(e, t, n, r, f, i, o, s);
          } finally {
            (L.T = d), ($.p = f);
          }
        }
        function ec(e, t) {
          0 === (e.pooledCacheLanes &= t) &&
            null != (t = e.pooledCache) &&
            ((e.pooledCache = null), Bi(t));
        }
        function tc() {
          if (null !== Eu) {
            var e = Eu,
              t = Pu;
            Pu = 0;
            var n = Oe(Cu),
              r = L.T,
              i = $.p;
            try {
              if ((($.p = 32 > n ? 32 : n), (L.T = null), null === Eu))
                var o = !1;
              else {
                (n = Tu), (Tu = null);
                var s = Eu,
                  l = Cu;
                if (((Eu = null), (Cu = 0), 0 !== (6 & eu)))
                  throw Error(a(331));
                var u = eu;
                if (
                  ((eu |= 4),
                  jl(s.current),
                  kl(s, s.current, l, n),
                  (eu = u),
                  gc(0, !1),
                  ye && "function" === typeof ye.onPostCommitFiberRoot)
                )
                  try {
                    ye.onPostCommitFiberRoot(ve, s);
                  } catch (c) {}
                o = !0;
              }
              return o;
            } finally {
              ($.p = i), (L.T = r), ec(e, t);
            }
          }
          return !1;
        }
        function nc(e, t, n) {
          (t = Mr(n, t)),
            null !== (e = zs(e, (t = Va(e.stateNode, t, 2)), 2)) &&
              (ze(e, 2), mc(e));
        }
        function rc(e, t, n) {
          if (3 === e.tag) nc(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                nc(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Su || !Su.has(r)))
                ) {
                  (e = Mr(n, e)),
                    null !== (r = zs(t, (n = Ba(2)), 2)) &&
                      ($a(n, r, t, e), ze(r, 2), mc(r));
                  break;
                }
              }
              t = t.return;
            }
        }
        function ic(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new Jl();
            var i = new Set();
            r.set(t, i);
          } else void 0 === (i = r.get(t)) && ((i = new Set()), r.set(t, i));
          i.has(n) ||
            ((lu = !0), i.add(n), (e = oc.bind(null, e, t, n)), t.then(e, e));
        }
        function oc(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (e.pingedLanes |= e.suspendedLanes & n),
            (e.warmLanes &= ~n),
            tu === e &&
              (ru & n) === n &&
              (4 === cu ||
              (3 === cu && (62914560 & ru) === ru && 300 > le() - bu)
                ? 0 === (2 & eu) && Vu(e, 0)
                : (hu |= n),
              mu === ru && (mu = 0)),
            mc(e);
        }
        function ac(e, t) {
          0 === t && (t = Le()), null !== (e = Rr(e, t)) && (ze(e, t), mc(e));
        }
        function sc(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), ac(e, n);
        }
        function lc(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                i = e.memoizedState;
              null !== i && (n = i.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            case 22:
              r = e.stateNode._retryCache;
              break;
            default:
              throw Error(a(314));
          }
          null !== r && r.delete(t), ac(e, n);
        }
        var uc = null,
          cc = null,
          dc = !1,
          fc = !1,
          hc = !1,
          pc = 0;
        function mc(e) {
          var t;
          e !== cc &&
            null === e.next &&
            (null === cc ? (uc = cc = e) : (cc = cc.next = e)),
            (fc = !0),
            dc ||
              ((dc = !0),
              (t = vc),
              rd(function () {
                0 !== (6 & eu) ? ie(ce, t) : t();
              }));
        }
        function gc(e, t) {
          if (!hc && fc) {
            hc = !0;
            do {
              for (var n = !1, r = uc; null !== r; ) {
                if (!t)
                  if (0 !== e) {
                    var i = r.pendingLanes;
                    if (0 === i) var o = 0;
                    else {
                      var a = r.suspendedLanes,
                        s = r.pingedLanes;
                      (o = (1 << (31 - we(42 | e) + 1)) - 1),
                        (o =
                          201326677 & (o &= i & ~(a & ~s))
                            ? (201326677 & o) | 1
                            : o
                            ? 2 | o
                            : 0);
                    }
                    0 !== o && ((n = !0), wc(r, o));
                  } else
                    (o = ru),
                      0 === (3 & (o = Pe(r, r === tu ? o : 0))) ||
                        Te(r, o) ||
                        ((n = !0), wc(r, o));
                r = r.next;
              }
            } while (n);
            hc = !1;
          }
        }
        function vc() {
          fc = dc = !1;
          var e = 0;
          0 !== pc &&
            ((function () {
              var e = window.event;
              if (e && "popstate" === e.type) return e !== Jc && ((Jc = e), !0);
              return (Jc = null), !1;
            })() && (e = pc),
            (pc = 0));
          for (var t = le(), n = null, r = uc; null !== r; ) {
            var i = r.next,
              o = yc(r, t);
            0 === o
              ? ((r.next = null),
                null === n ? (uc = i) : (n.next = i),
                null === i && (cc = n))
              : ((n = r), (0 !== e || 0 !== (3 & o)) && (fc = !0)),
              (r = i);
          }
          gc(e, !1);
        }
        function yc(e, t) {
          for (
            var n = e.suspendedLanes,
              r = e.pingedLanes,
              i = e.expirationTimes,
              o = -62914561 & e.pendingLanes;
            0 < o;

          ) {
            var a = 31 - we(o),
              s = 1 << a,
              l = i[a];
            -1 === l
              ? (0 !== (s & n) && 0 === (s & r)) || (i[a] = Ae(s, t))
              : l <= t && (e.expiredLanes |= s),
              (o &= ~s);
          }
          if (
            ((n = ru),
            (n = Pe(e, e === (t = tu) ? n : 0)),
            (r = e.callbackNode),
            0 === n || (e === t && 2 === iu) || null !== e.cancelPendingCommit)
          )
            return (
              null !== r && null !== r && oe(r),
              (e.callbackNode = null),
              (e.callbackPriority = 0)
            );
          if (0 === (3 & n) || Te(e, n)) {
            if ((t = n & -n) === e.callbackPriority) return t;
            switch ((null !== r && oe(r), Oe(n))) {
              case 2:
              case 8:
                n = de;
                break;
              case 32:
              default:
                n = fe;
                break;
              case 268435456:
                n = pe;
            }
            return (
              (r = bc.bind(null, e)),
              (n = ie(n, r)),
              (e.callbackPriority = t),
              (e.callbackNode = n),
              t
            );
          }
          return (
            null !== r && null !== r && oe(r),
            (e.callbackPriority = 2),
            (e.callbackNode = null),
            2
          );
        }
        function bc(e, t) {
          var n = e.callbackNode;
          if (tc() && e.callbackNode !== n) return null;
          var r = ru;
          return 0 === (r = Pe(e, e === tu ? r : 0))
            ? null
            : (Du(e, r, t),
              yc(e, le()),
              null != e.callbackNode && e.callbackNode === n
                ? bc.bind(null, e)
                : null);
        }
        function wc(e, t) {
          if (tc()) return null;
          Du(e, t, !0);
        }
        function xc() {
          return 0 === pc && (pc = Re()), pc;
        }
        function Sc(e) {
          return null == e || "symbol" === typeof e || "boolean" === typeof e
            ? null
            : "function" === typeof e
            ? e
            : Rt("" + e);
        }
        function kc(e, t) {
          var n = t.ownerDocument.createElement("input");
          return (
            (n.name = t.name),
            (n.value = t.value),
            e.id && n.setAttribute("form", e.id),
            t.parentNode.insertBefore(n, t),
            (e = new FormData(e)),
            n.parentNode.removeChild(n),
            e
          );
        }
        for (var Ec = 0; Ec < xr.length; Ec++) {
          var Cc = xr[Ec];
          Sr(Cc.toLowerCase(), "on" + (Cc[0].toUpperCase() + Cc.slice(1)));
        }
        Sr(hr, "onAnimationEnd"),
          Sr(pr, "onAnimationIteration"),
          Sr(mr, "onAnimationStart"),
          Sr("dblclick", "onDoubleClick"),
          Sr("focusin", "onFocus"),
          Sr("focusout", "onBlur"),
          Sr(gr, "onTransitionRun"),
          Sr(vr, "onTransitionStart"),
          Sr(yr, "onTransitionCancel"),
          Sr(br, "onTransitionEnd"),
          tt("onMouseEnter", ["mouseout", "mouseover"]),
          tt("onMouseLeave", ["mouseout", "mouseover"]),
          tt("onPointerEnter", ["pointerout", "pointerover"]),
          tt("onPointerLeave", ["pointerout", "pointerover"]),
          et(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          et(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          et("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          et(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          et(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          et(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Pc =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Tc = new Set(
            "beforetoggle cancel close invalid load scroll scrollend toggle"
              .split(" ")
              .concat(Pc)
          );
        function Ac(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              i = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var a = r.length - 1; 0 <= a; a--) {
                  var s = r[a],
                    l = s.instance,
                    u = s.currentTarget;
                  if (((s = s.listener), l !== o && i.isPropagationStopped()))
                    break e;
                  (o = s), (i.currentTarget = u);
                  try {
                    o(i);
                  } catch (c) {
                    Ma(c);
                  }
                  (i.currentTarget = null), (o = l);
                }
              else
                for (a = 0; a < r.length; a++) {
                  if (
                    ((l = (s = r[a]).instance),
                    (u = s.currentTarget),
                    (s = s.listener),
                    l !== o && i.isPropagationStopped())
                  )
                    break e;
                  (o = s), (i.currentTarget = u);
                  try {
                    o(i);
                  } catch (c) {
                    Ma(c);
                  }
                  (i.currentTarget = null), (o = l);
                }
            }
          }
        }
        function Rc(e, t) {
          var n = t[Be];
          void 0 === n && (n = t[Be] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Dc(t, e, 2, !1), n.add(r));
        }
        function Lc(e, t, n) {
          var r = 0;
          t && (r |= 4), Dc(n, e, r, t);
        }
        var jc = "_reactListening" + Math.random().toString(36).slice(2);
        function zc(e) {
          if (!e[jc]) {
            (e[jc] = !0),
              Ze.forEach(function (t) {
                "selectionchange" !== t &&
                  (Tc.has(t) || Lc(t, !1, e), Lc(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[jc] || ((t[jc] = !0), Lc("selectionchange", !1, t));
          }
        }
        function Dc(e, t, n, r) {
          switch (Gd(t)) {
            case 2:
              var i = Hd;
              break;
            case 8:
              i = Yd;
              break;
            default:
              i = qd;
          }
          (n = i.bind(null, t, n, e)),
            (i = void 0),
            !Ft ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (i = !0),
            r
              ? void 0 !== i
                ? e.addEventListener(t, n, { capture: !0, passive: i })
                : e.addEventListener(t, n, !0)
              : void 0 !== i
              ? e.addEventListener(t, n, { passive: i })
              : e.addEventListener(t, n, !1);
        }
        function Mc(e, t, n, r, i) {
          var o = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var a = r.tag;
              if (3 === a || 4 === a) {
                var s = r.stateNode.containerInfo;
                if (s === i || (8 === s.nodeType && s.parentNode === i)) break;
                if (4 === a)
                  for (a = r.return; null !== a; ) {
                    var l = a.tag;
                    if (
                      (3 === l || 4 === l) &&
                      ((l = a.stateNode.containerInfo) === i ||
                        (8 === l.nodeType && l.parentNode === i))
                    )
                      return;
                    a = a.return;
                  }
                for (; null !== s; ) {
                  if (null === (a = qe(s))) return;
                  if (5 === (l = a.tag) || 6 === l || 26 === l || 27 === l) {
                    r = o = a;
                    continue e;
                  }
                  s = s.parentNode;
                }
              }
              r = r.return;
            }
          Nt(function () {
            var r = o,
              i = jt(n),
              a = [];
            e: {
              var s = wr.get(e);
              if (void 0 !== s) {
                var l = Zt,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === Wt(n)) break e;
                  case "keydown":
                  case "keyup":
                    l = pn;
                    break;
                  case "focusin":
                    (u = "focus"), (l = on);
                    break;
                  case "focusout":
                    (u = "blur"), (l = on);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    l = on;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    l = nn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    l = rn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    l = gn;
                    break;
                  case hr:
                  case pr:
                  case mr:
                    l = an;
                    break;
                  case br:
                    l = vn;
                    break;
                  case "scroll":
                  case "scrollend":
                    l = en;
                    break;
                  case "wheel":
                    l = yn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    l = sn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    l = mn;
                    break;
                  case "toggle":
                  case "beforetoggle":
                    l = bn;
                }
                var c = 0 !== (4 & t),
                  d = !c && ("scroll" === e || "scrollend" === e),
                  f = c ? (null !== s ? s + "Capture" : null) : s;
                c = [];
                for (var h, p = r; null !== p; ) {
                  var m = p;
                  if (
                    ((h = m.stateNode),
                    (5 !== (m = m.tag) && 26 !== m && 27 !== m) ||
                      null === h ||
                      null === f ||
                      (null != (m = _t(p, f)) && c.push(Oc(p, m, h))),
                    d)
                  )
                    break;
                  p = p.return;
                }
                0 < c.length &&
                  ((s = new l(s, u, null, n, i)),
                  a.push({ event: s, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((l = "mouseout" === e || "pointerout" === e),
                (!(s = "mouseover" === e || "pointerover" === e) ||
                  n === Lt ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!qe(u) && !u[Ve])) &&
                  (l || s) &&
                  ((s =
                    i.window === i
                      ? i
                      : (s = i.ownerDocument)
                      ? s.defaultView || s.parentWindow
                      : window),
                  l
                    ? ((l = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? qe(u)
                          : null) &&
                        ((d = _(u)),
                        (c = u.tag),
                        u !== d || (5 !== c && 27 !== c && 6 !== c)) &&
                        (u = null))
                    : ((l = null), (u = r)),
                  l !== u))
              ) {
                if (
                  ((c = nn),
                  (m = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (p = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = mn),
                    (m = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (p = "pointer")),
                  (d = null == l ? s : Xe(l)),
                  (h = null == u ? s : Xe(u)),
                  ((s = new c(m, p + "leave", l, n, i)).target = d),
                  (s.relatedTarget = h),
                  (m = null),
                  qe(i) === r &&
                    (((c = new c(f, p + "enter", u, n, i)).target = h),
                    (c.relatedTarget = d),
                    (m = c)),
                  (d = m),
                  l && u)
                )
                  e: {
                    for (f = u, p = 0, h = c = l; h; h = _c(h)) p++;
                    for (h = 0, m = f; m; m = _c(m)) h++;
                    for (; 0 < p - h; ) (c = _c(c)), p--;
                    for (; 0 < h - p; ) (f = _c(f)), h--;
                    for (; p--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = _c(c)), (f = _c(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== l && Fc(a, s, l, c, !1),
                  null !== u && null !== d && Fc(a, d, u, c, !0);
              }
              if (
                "select" ===
                  (l =
                    (s = r ? Xe(r) : window).nodeName &&
                    s.nodeName.toLowerCase()) ||
                ("input" === l && "file" === s.type)
              )
                var g = _n;
              else if (jn(s))
                if (Fn) g = qn;
                else {
                  g = Hn;
                  var v = Wn;
                }
              else
                !(l = s.nodeName) ||
                "input" !== l.toLowerCase() ||
                ("checkbox" !== s.type && "radio" !== s.type)
                  ? r && Pt(r.elementType) && (g = _n)
                  : (g = Yn);
              switch (
                (g && (g = g(e, r))
                  ? zn(a, g, n, i)
                  : (v && v(e, s, r),
                    "focusout" === e &&
                      r &&
                      "number" === s.type &&
                      null != r.memoizedProps.value &&
                      yt(s, "number", s.value)),
                (v = r ? Xe(r) : window),
                e)
              ) {
                case "focusin":
                  (jn(v) || "true" === v.contentEditable) &&
                    ((rr = v), (ir = r), (or = null));
                  break;
                case "focusout":
                  or = ir = rr = null;
                  break;
                case "mousedown":
                  ar = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (ar = !1), sr(a, n, i);
                  break;
                case "selectionchange":
                  if (nr) break;
                case "keydown":
                case "keyup":
                  sr(a, n, i);
              }
              var y;
              if (xn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Rn
                  ? Tn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (En &&
                  "ko" !== n.locale &&
                  (Rn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Rn && (y = Ut())
                    : ((Bt = "value" in (Vt = i) ? Vt.value : Vt.textContent),
                      (Rn = !0))),
                0 < (v = Nc(r, b)).length &&
                  ((b = new ln(b, e, null, n, i)),
                  a.push({ event: b, listeners: v }),
                  y ? (b.data = y) : null !== (y = An(n)) && (b.data = y))),
                (y = kn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return An(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Pn = !0), Cn);
                        case "textInput":
                          return (e = t.data) === Cn && Pn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Rn)
                        return "compositionend" === e || (!xn && Tn(e, t))
                          ? ((e = Ut()), ($t = Bt = Vt = null), (Rn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return En && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (b = Nc(r, "onBeforeInput")).length &&
                  ((v = new ln("onBeforeInput", "beforeinput", null, n, i)),
                  a.push({ event: v, listeners: b }),
                  (v.data = y)),
                (function (e, t, n, r, i) {
                  if ("submit" === t && n && n.stateNode === i) {
                    var o = Sc((i[Ie] || null).action),
                      a = r.submitter;
                    a &&
                      null !==
                        (t = (t = a[Ie] || null)
                          ? Sc(t.formAction)
                          : a.getAttribute("formAction")) &&
                      ((o = t), (a = null));
                    var s = new Zt("action", "action", null, r, i);
                    e.push({
                      event: s,
                      listeners: [
                        {
                          instance: null,
                          listener: function () {
                            if (r.defaultPrevented) {
                              if (0 !== pc) {
                                var e = a ? kc(i, a) : new FormData(i);
                                da(
                                  n,
                                  {
                                    pending: !0,
                                    data: e,
                                    method: i.method,
                                    action: o,
                                  },
                                  null,
                                  e
                                );
                              }
                            } else
                              "function" === typeof o &&
                                (s.preventDefault(),
                                (e = a ? kc(i, a) : new FormData(i)),
                                da(
                                  n,
                                  {
                                    pending: !0,
                                    data: e,
                                    method: i.method,
                                    action: o,
                                  },
                                  o,
                                  e
                                ));
                          },
                          currentTarget: i,
                        },
                      ],
                    });
                  }
                })(a, e, r, n, i);
            }
            Ac(a, t);
          });
        }
        function Oc(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Nc(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var i = e,
              o = i.stateNode;
            (5 !== (i = i.tag) && 26 !== i && 27 !== i) ||
              null === o ||
              (null != (i = _t(e, n)) && r.unshift(Oc(e, i, o)),
              null != (i = _t(e, t)) && r.push(Oc(e, i, o))),
              (e = e.return);
          }
          return r;
        }
        function _c(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag && 27 !== e.tag);
          return e || null;
        }
        function Fc(e, t, n, r, i) {
          for (var o = t._reactName, a = []; null !== n && n !== r; ) {
            var s = n,
              l = s.alternate,
              u = s.stateNode;
            if (((s = s.tag), null !== l && l === r)) break;
            (5 !== s && 26 !== s && 27 !== s) ||
              null === u ||
              ((l = u),
              i
                ? null != (u = _t(n, o)) && a.unshift(Oc(n, u, l))
                : i || (null != (u = _t(n, o)) && a.push(Oc(n, u, l)))),
              (n = n.return);
          }
          0 !== a.length && e.push({ event: t, listeners: a });
        }
        var Ic = /\r\n?/g,
          Vc = /\u0000|\uFFFD/g;
        function Bc(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Ic, "\n")
            .replace(Vc, "");
        }
        function $c(e, t) {
          return (t = Bc(t)), Bc(e) === t;
        }
        function Uc() {}
        function Wc(e, t, n, r, i, o) {
          switch (n) {
            case "children":
              "string" === typeof r
                ? "body" === t || ("textarea" === t && "" === r) || St(e, r)
                : ("number" === typeof r || "bigint" === typeof r) &&
                  "body" !== t &&
                  St(e, "" + r);
              break;
            case "className":
              st(e, "class", r);
              break;
            case "tabIndex":
              st(e, "tabindex", r);
              break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
              st(e, n, r);
              break;
            case "style":
              Ct(e, r, o);
              break;
            case "data":
              if ("object" !== t) {
                st(e, "data", r);
                break;
              }
            case "src":
            case "href":
              if ("" === r && ("a" !== t || "href" !== n)) {
                e.removeAttribute(n);
                break;
              }
              if (
                null == r ||
                "function" === typeof r ||
                "symbol" === typeof r ||
                "boolean" === typeof r
              ) {
                e.removeAttribute(n);
                break;
              }
              (r = Rt("" + r)), e.setAttribute(n, r);
              break;
            case "action":
            case "formAction":
              if ("function" === typeof r) {
                e.setAttribute(
                  n,
                  "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
                );
                break;
              }
              if (
                ("function" === typeof o &&
                  ("formAction" === n
                    ? ("input" !== t && Wc(e, t, "name", i.name, i, null),
                      Wc(e, t, "formEncType", i.formEncType, i, null),
                      Wc(e, t, "formMethod", i.formMethod, i, null),
                      Wc(e, t, "formTarget", i.formTarget, i, null))
                    : (Wc(e, t, "encType", i.encType, i, null),
                      Wc(e, t, "method", i.method, i, null),
                      Wc(e, t, "target", i.target, i, null))),
                null == r || "symbol" === typeof r || "boolean" === typeof r)
              ) {
                e.removeAttribute(n);
                break;
              }
              (r = Rt("" + r)), e.setAttribute(n, r);
              break;
            case "onClick":
              null != r && (e.onclick = Uc);
              break;
            case "onScroll":
              null != r && Rc("scroll", e);
              break;
            case "onScrollEnd":
              null != r && Rc("scrollend", e);
              break;
            case "dangerouslySetInnerHTML":
              if (null != r) {
                if ("object" !== typeof r || !("__html" in r))
                  throw Error(a(61));
                if (null != (n = r.__html)) {
                  if (null != i.children) throw Error(a(60));
                  e.innerHTML = n;
                }
              }
              break;
            case "multiple":
              e.multiple =
                r && "function" !== typeof r && "symbol" !== typeof r;
              break;
            case "muted":
              e.muted = r && "function" !== typeof r && "symbol" !== typeof r;
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
            case "autoFocus":
              break;
            case "xlinkHref":
              if (
                null == r ||
                "function" === typeof r ||
                "boolean" === typeof r ||
                "symbol" === typeof r
              ) {
                e.removeAttribute("xlink:href");
                break;
              }
              (n = Rt("" + r)),
                e.setAttributeNS(
                  "http://www.w3.org/1999/xlink",
                  "xlink:href",
                  n
                );
              break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
              null != r && "function" !== typeof r && "symbol" !== typeof r
                ? e.setAttribute(n, "" + r)
                : e.removeAttribute(n);
              break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
              r && "function" !== typeof r && "symbol" !== typeof r
                ? e.setAttribute(n, "")
                : e.removeAttribute(n);
              break;
            case "capture":
            case "download":
              !0 === r
                ? e.setAttribute(n, "")
                : !1 !== r &&
                  null != r &&
                  "function" !== typeof r &&
                  "symbol" !== typeof r
                ? e.setAttribute(n, r)
                : e.removeAttribute(n);
              break;
            case "cols":
            case "rows":
            case "size":
            case "span":
              null != r &&
              "function" !== typeof r &&
              "symbol" !== typeof r &&
              !isNaN(r) &&
              1 <= r
                ? e.setAttribute(n, r)
                : e.removeAttribute(n);
              break;
            case "rowSpan":
            case "start":
              null == r ||
              "function" === typeof r ||
              "symbol" === typeof r ||
              isNaN(r)
                ? e.removeAttribute(n)
                : e.setAttribute(n, r);
              break;
            case "popover":
              Rc("beforetoggle", e), Rc("toggle", e), at(e, "popover", r);
              break;
            case "xlinkActuate":
              lt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
              break;
            case "xlinkArcrole":
              lt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
              break;
            case "xlinkRole":
              lt(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
              break;
            case "xlinkShow":
              lt(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
              break;
            case "xlinkTitle":
              lt(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
              break;
            case "xlinkType":
              lt(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
              break;
            case "xmlBase":
              lt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
              break;
            case "xmlLang":
              lt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
              break;
            case "xmlSpace":
              lt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
              break;
            case "is":
              at(e, "is", r);
              break;
            case "innerText":
            case "textContent":
              break;
            default:
              (!(2 < n.length) ||
                ("o" !== n[0] && "O" !== n[0]) ||
                ("n" !== n[1] && "N" !== n[1])) &&
                at(e, (n = Tt.get(n) || n), r);
          }
        }
        function Hc(e, t, n, r, i, o) {
          switch (n) {
            case "style":
              Ct(e, r, o);
              break;
            case "dangerouslySetInnerHTML":
              if (null != r) {
                if ("object" !== typeof r || !("__html" in r))
                  throw Error(a(61));
                if (null != (n = r.__html)) {
                  if (null != i.children) throw Error(a(60));
                  e.innerHTML = n;
                }
              }
              break;
            case "children":
              "string" === typeof r
                ? St(e, r)
                : ("number" === typeof r || "bigint" === typeof r) &&
                  St(e, "" + r);
              break;
            case "onScroll":
              null != r && Rc("scroll", e);
              break;
            case "onScrollEnd":
              null != r && Rc("scrollend", e);
              break;
            case "onClick":
              null != r && (e.onclick = Uc);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
            case "innerText":
            case "textContent":
              break;
            default:
              Je.hasOwnProperty(n) ||
                ("o" !== n[0] ||
                "n" !== n[1] ||
                ((i = n.endsWith("Capture")),
                (t = n.slice(2, i ? n.length - 7 : void 0)),
                "function" ===
                  typeof (o = null != (o = e[Ie] || null) ? o[n] : null) &&
                  e.removeEventListener(t, o, i),
                "function" !== typeof r)
                  ? n in e
                    ? (e[n] = r)
                    : !0 === r
                    ? e.setAttribute(n, "")
                    : at(e, n, r)
                  : ("function" !== typeof o &&
                      null !== o &&
                      (n in e
                        ? (e[n] = null)
                        : e.hasAttribute(n) && e.removeAttribute(n)),
                    e.addEventListener(t, r, i)));
          }
        }
        function Yc(e, t, n) {
          switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
              break;
            case "img":
              Rc("error", e), Rc("load", e);
              var r,
                i = !1,
                o = !1;
              for (r in n)
                if (n.hasOwnProperty(r)) {
                  var s = n[r];
                  if (null != s)
                    switch (r) {
                      case "src":
                        i = !0;
                        break;
                      case "srcSet":
                        o = !0;
                        break;
                      case "children":
                      case "dangerouslySetInnerHTML":
                        throw Error(a(137, t));
                      default:
                        Wc(e, t, r, s, n, null);
                    }
                }
              return (
                o && Wc(e, t, "srcSet", n.srcSet, n, null),
                void (i && Wc(e, t, "src", n.src, n, null))
              );
            case "input":
              Rc("invalid", e);
              var l = (r = s = o = null),
                u = null,
                c = null;
              for (i in n)
                if (n.hasOwnProperty(i)) {
                  var d = n[i];
                  if (null != d)
                    switch (i) {
                      case "name":
                        o = d;
                        break;
                      case "type":
                        s = d;
                        break;
                      case "checked":
                        u = d;
                        break;
                      case "defaultChecked":
                        c = d;
                        break;
                      case "value":
                        r = d;
                        break;
                      case "defaultValue":
                        l = d;
                        break;
                      case "children":
                      case "dangerouslySetInnerHTML":
                        if (null != d) throw Error(a(137, t));
                        break;
                      default:
                        Wc(e, t, i, d, n, null);
                    }
                }
              return vt(e, r, l, u, c, s, o, !1), void dt(e);
            case "select":
              for (o in (Rc("invalid", e), (i = s = r = null), n))
                if (n.hasOwnProperty(o) && null != (l = n[o]))
                  switch (o) {
                    case "value":
                      r = l;
                      break;
                    case "defaultValue":
                      s = l;
                      break;
                    case "multiple":
                      i = l;
                    default:
                      Wc(e, t, o, l, n, null);
                  }
              return (
                (t = r),
                (n = s),
                (e.multiple = !!i),
                void (null != t
                  ? bt(e, !!i, t, !1)
                  : null != n && bt(e, !!i, n, !0))
              );
            case "textarea":
              for (s in (Rc("invalid", e), (r = o = i = null), n))
                if (n.hasOwnProperty(s) && null != (l = n[s]))
                  switch (s) {
                    case "value":
                      i = l;
                      break;
                    case "defaultValue":
                      o = l;
                      break;
                    case "children":
                      r = l;
                      break;
                    case "dangerouslySetInnerHTML":
                      if (null != l) throw Error(a(91));
                      break;
                    default:
                      Wc(e, t, s, l, n, null);
                  }
              return xt(e, i, o, r), void dt(e);
            case "option":
              for (u in n)
                if (n.hasOwnProperty(u) && null != (i = n[u]))
                  if ("selected" === u)
                    e.selected =
                      i && "function" !== typeof i && "symbol" !== typeof i;
                  else Wc(e, t, u, i, n, null);
              return;
            case "dialog":
              Rc("cancel", e), Rc("close", e);
              break;
            case "iframe":
            case "object":
              Rc("load", e);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Pc.length; i++) Rc(Pc[i], e);
              break;
            case "image":
              Rc("error", e), Rc("load", e);
              break;
            case "details":
              Rc("toggle", e);
              break;
            case "embed":
            case "source":
            case "link":
              Rc("error", e), Rc("load", e);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
              for (c in n)
                if (n.hasOwnProperty(c) && null != (i = n[c]))
                  switch (c) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                      throw Error(a(137, t));
                    default:
                      Wc(e, t, c, i, n, null);
                  }
              return;
            default:
              if (Pt(t)) {
                for (d in n)
                  n.hasOwnProperty(d) &&
                    void 0 !== (i = n[d]) &&
                    Hc(e, t, d, i, n, void 0);
                return;
              }
          }
          for (l in n)
            n.hasOwnProperty(l) &&
              null != (i = n[l]) &&
              Wc(e, t, l, i, n, null);
        }
        var qc = null,
          Kc = null;
        function Xc(e) {
          return 9 === e.nodeType ? e : e.ownerDocument;
        }
        function Qc(e) {
          switch (e) {
            case "http://www.w3.org/2000/svg":
              return 1;
            case "http://www.w3.org/1998/Math/MathML":
              return 2;
            default:
              return 0;
          }
        }
        function Gc(e, t) {
          if (0 === e)
            switch (t) {
              case "svg":
                return 1;
              case "math":
                return 2;
              default:
                return 0;
            }
          return 1 === e && "foreignObject" === t ? 0 : e;
        }
        function Zc(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            "bigint" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var Jc = null;
        var ed = "function" === typeof setTimeout ? setTimeout : void 0,
          td = "function" === typeof clearTimeout ? clearTimeout : void 0,
          nd = "function" === typeof Promise ? Promise : void 0,
          rd =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof nd
              ? function (e) {
                  return nd.resolve(null).then(e).catch(id);
                }
              : ed;
        function id(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function od(e, t) {
          var n = t,
            r = 0;
          do {
            var i = n.nextSibling;
            if ((e.removeChild(n), i && 8 === i.nodeType))
              if ("/$" === (n = i.data)) {
                if (0 === r) return e.removeChild(i), void gf(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = i;
          } while (n);
          gf(t);
        }
        function ad(e) {
          var t = e.firstChild;
          for (t && 10 === t.nodeType && (t = t.nextSibling); t; ) {
            var n = t;
            switch (((t = t.nextSibling), n.nodeName)) {
              case "HTML":
              case "HEAD":
              case "BODY":
                ad(n), Ye(n);
                continue;
              case "SCRIPT":
              case "STYLE":
                continue;
              case "LINK":
                if ("stylesheet" === n.rel.toLowerCase()) continue;
            }
            e.removeChild(n);
          }
        }
        function sd(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if (
                "$" === (t = e.data) ||
                "$!" === t ||
                "$?" === t ||
                "F!" === t ||
                "F" === t
              )
                break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ld(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        function ud(e, t, n) {
          switch (((t = Xc(n)), e)) {
            case "html":
              if (!(e = t.documentElement)) throw Error(a(452));
              return e;
            case "head":
              if (!(e = t.head)) throw Error(a(453));
              return e;
            case "body":
              if (!(e = t.body)) throw Error(a(454));
              return e;
            default:
              throw Error(a(451));
          }
        }
        var cd = new Map(),
          dd = new Set();
        function fd(e) {
          return "function" === typeof e.getRootNode
            ? e.getRootNode()
            : e.ownerDocument;
        }
        var hd = $.d;
        $.d = {
          f: function () {
            var e = hd.f(),
              t = Fu();
            return e || t;
          },
          r: function (e) {
            var t = Ke(e);
            null !== t && 5 === t.tag && "form" === t.type ? ha(t) : hd.r(e);
          },
          D: function (e) {
            hd.D(e), md("dns-prefetch", e, null);
          },
          C: function (e, t) {
            hd.C(e, t), md("preconnect", e, t);
          },
          L: function (e, t, n) {
            hd.L(e, t, n);
            var r = pd;
            if (r && e && t) {
              var i = 'link[rel="preload"][as="' + mt(t) + '"]';
              "image" === t && n && n.imageSrcSet
                ? ((i += '[imagesrcset="' + mt(n.imageSrcSet) + '"]'),
                  "string" === typeof n.imageSizes &&
                    (i += '[imagesizes="' + mt(n.imageSizes) + '"]'))
                : (i += '[href="' + mt(e) + '"]');
              var o = i;
              switch (t) {
                case "style":
                  o = vd(e);
                  break;
                case "script":
                  o = wd(e);
              }
              cd.has(o) ||
                ((e = j(
                  {
                    rel: "preload",
                    href: "image" === t && n && n.imageSrcSet ? void 0 : e,
                    as: t,
                  },
                  n
                )),
                cd.set(o, e),
                null !== r.querySelector(i) ||
                  ("style" === t && r.querySelector(yd(o))) ||
                  ("script" === t && r.querySelector(xd(o))) ||
                  (Yc((t = r.createElement("link")), "link", e),
                  Ge(t),
                  r.head.appendChild(t)));
            }
          },
          m: function (e, t) {
            hd.m(e, t);
            var n = pd;
            if (n && e) {
              var r = t && "string" === typeof t.as ? t.as : "script",
                i =
                  'link[rel="modulepreload"][as="' +
                  mt(r) +
                  '"][href="' +
                  mt(e) +
                  '"]',
                o = i;
              switch (r) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                  o = wd(e);
              }
              if (
                !cd.has(o) &&
                ((e = j({ rel: "modulepreload", href: e }, t)),
                cd.set(o, e),
                null === n.querySelector(i))
              ) {
                switch (r) {
                  case "audioworklet":
                  case "paintworklet":
                  case "serviceworker":
                  case "sharedworker":
                  case "worker":
                  case "script":
                    if (n.querySelector(xd(o))) return;
                }
                Yc((r = n.createElement("link")), "link", e),
                  Ge(r),
                  n.head.appendChild(r);
              }
            }
          },
          X: function (e, t) {
            hd.X(e, t);
            var n = pd;
            if (n && e) {
              var r = Qe(n).hoistableScripts,
                i = wd(e),
                o = r.get(i);
              o ||
                ((o = n.querySelector(xd(i))) ||
                  ((e = j({ src: e, async: !0 }, t)),
                  (t = cd.get(i)) && Cd(e, t),
                  Ge((o = n.createElement("script"))),
                  Yc(o, "link", e),
                  n.head.appendChild(o)),
                (o = { type: "script", instance: o, count: 1, state: null }),
                r.set(i, o));
            }
          },
          S: function (e, t, n) {
            hd.S(e, t, n);
            var r = pd;
            if (r && e) {
              var i = Qe(r).hoistableStyles,
                o = vd(e);
              t = t || "default";
              var a = i.get(o);
              if (!a) {
                var s = { loading: 0, preload: null };
                if ((a = r.querySelector(yd(o)))) s.loading = 5;
                else {
                  (e = j(
                    { rel: "stylesheet", href: e, "data-precedence": t },
                    n
                  )),
                    (n = cd.get(o)) && Ed(e, n);
                  var l = (a = r.createElement("link"));
                  Ge(l),
                    Yc(l, "link", e),
                    (l._p = new Promise(function (e, t) {
                      (l.onload = e), (l.onerror = t);
                    })),
                    l.addEventListener("load", function () {
                      s.loading |= 1;
                    }),
                    l.addEventListener("error", function () {
                      s.loading |= 2;
                    }),
                    (s.loading |= 4),
                    kd(a, t, r);
                }
                (a = { type: "stylesheet", instance: a, count: 1, state: s }),
                  i.set(o, a);
              }
            }
          },
          M: function (e, t) {
            hd.M(e, t);
            var n = pd;
            if (n && e) {
              var r = Qe(n).hoistableScripts,
                i = wd(e),
                o = r.get(i);
              o ||
                ((o = n.querySelector(xd(i))) ||
                  ((e = j({ src: e, async: !0, type: "module" }, t)),
                  (t = cd.get(i)) && Cd(e, t),
                  Ge((o = n.createElement("script"))),
                  Yc(o, "link", e),
                  n.head.appendChild(o)),
                (o = { type: "script", instance: o, count: 1, state: null }),
                r.set(i, o));
            }
          },
        };
        var pd = "undefined" === typeof document ? null : document;
        function md(e, t, n) {
          var r = pd;
          if (r && "string" === typeof t && t) {
            var i = mt(t);
            (i = 'link[rel="' + e + '"][href="' + i + '"]'),
              "string" === typeof n && (i += '[crossorigin="' + n + '"]'),
              dd.has(i) ||
                (dd.add(i),
                (e = { rel: e, crossOrigin: n, href: t }),
                null === r.querySelector(i) &&
                  (Yc((t = r.createElement("link")), "link", e),
                  Ge(t),
                  r.head.appendChild(t)));
          }
        }
        function gd(e, t, n, r) {
          var i,
            o,
            s,
            l,
            u = (u = G.current) ? fd(u) : null;
          if (!u) throw Error(a(446));
          switch (e) {
            case "meta":
            case "title":
              return null;
            case "style":
              return "string" === typeof n.precedence &&
                "string" === typeof n.href
                ? ((t = vd(n.href)),
                  (r = (n = Qe(u).hoistableStyles).get(t)) ||
                    ((r = {
                      type: "style",
                      instance: null,
                      count: 0,
                      state: null,
                    }),
                    n.set(t, r)),
                  r)
                : { type: "void", instance: null, count: 0, state: null };
            case "link":
              if (
                "stylesheet" === n.rel &&
                "string" === typeof n.href &&
                "string" === typeof n.precedence
              ) {
                e = vd(n.href);
                var c = Qe(u).hoistableStyles,
                  d = c.get(e);
                if (
                  (d ||
                    ((u = u.ownerDocument || u),
                    (d = {
                      type: "stylesheet",
                      instance: null,
                      count: 0,
                      state: { loading: 0, preload: null },
                    }),
                    c.set(e, d),
                    (c = u.querySelector(yd(e))) &&
                      !c._p &&
                      ((d.instance = c), (d.state.loading = 5)),
                    cd.has(e) ||
                      ((n = {
                        rel: "preload",
                        as: "style",
                        href: n.href,
                        crossOrigin: n.crossOrigin,
                        integrity: n.integrity,
                        media: n.media,
                        hrefLang: n.hrefLang,
                        referrerPolicy: n.referrerPolicy,
                      }),
                      cd.set(e, n),
                      c ||
                        ((i = u),
                        (o = e),
                        (s = n),
                        (l = d.state),
                        i.querySelector(
                          'link[rel="preload"][as="style"][' + o + "]"
                        )
                          ? (l.loading = 1)
                          : ((o = i.createElement("link")),
                            (l.preload = o),
                            o.addEventListener("load", function () {
                              return (l.loading |= 1);
                            }),
                            o.addEventListener("error", function () {
                              return (l.loading |= 2);
                            }),
                            Yc(o, "link", s),
                            Ge(o),
                            i.head.appendChild(o))))),
                  t && null === r)
                )
                  throw Error(a(528, ""));
                return d;
              }
              if (t && null !== r) throw Error(a(529, ""));
              return null;
            case "script":
              return (
                (t = n.async),
                "string" === typeof (n = n.src) &&
                t &&
                "function" !== typeof t &&
                "symbol" !== typeof t
                  ? ((t = wd(n)),
                    (r = (n = Qe(u).hoistableScripts).get(t)) ||
                      ((r = {
                        type: "script",
                        instance: null,
                        count: 0,
                        state: null,
                      }),
                      n.set(t, r)),
                    r)
                  : { type: "void", instance: null, count: 0, state: null }
              );
            default:
              throw Error(a(444, e));
          }
        }
        function vd(e) {
          return 'href="' + mt(e) + '"';
        }
        function yd(e) {
          return 'link[rel="stylesheet"][' + e + "]";
        }
        function bd(e) {
          return j({}, e, {
            "data-precedence": e.precedence,
            precedence: null,
          });
        }
        function wd(e) {
          return '[src="' + mt(e) + '"]';
        }
        function xd(e) {
          return "script[async]" + e;
        }
        function Sd(e, t, n) {
          if ((t.count++, null === t.instance))
            switch (t.type) {
              case "style":
                var r = e.querySelector(
                  'style[data-href~="' + mt(n.href) + '"]'
                );
                if (r) return (t.instance = r), Ge(r), r;
                var i = j({}, n, {
                  "data-href": n.href,
                  "data-precedence": n.precedence,
                  href: null,
                  precedence: null,
                });
                return (
                  Ge((r = (e.ownerDocument || e).createElement("style"))),
                  Yc(r, "style", i),
                  kd(r, n.precedence, e),
                  (t.instance = r)
                );
              case "stylesheet":
                i = vd(n.href);
                var o = e.querySelector(yd(i));
                if (o)
                  return (t.state.loading |= 4), (t.instance = o), Ge(o), o;
                (r = bd(n)),
                  (i = cd.get(i)) && Ed(r, i),
                  Ge((o = (e.ownerDocument || e).createElement("link")));
                var s = o;
                return (
                  (s._p = new Promise(function (e, t) {
                    (s.onload = e), (s.onerror = t);
                  })),
                  Yc(o, "link", r),
                  (t.state.loading |= 4),
                  kd(o, n.precedence, e),
                  (t.instance = o)
                );
              case "script":
                return (
                  (o = wd(n.src)),
                  (i = e.querySelector(xd(o)))
                    ? ((t.instance = i), Ge(i), i)
                    : ((r = n),
                      (i = cd.get(o)) && Cd((r = j({}, n)), i),
                      Ge(
                        (i = (e = e.ownerDocument || e).createElement("script"))
                      ),
                      Yc(i, "link", r),
                      e.head.appendChild(i),
                      (t.instance = i))
                );
              case "void":
                return null;
              default:
                throw Error(a(443, t.type));
            }
          else
            "stylesheet" === t.type &&
              0 === (4 & t.state.loading) &&
              ((r = t.instance),
              (t.state.loading |= 4),
              kd(r, n.precedence, e));
          return t.instance;
        }
        function kd(e, t, n) {
          for (
            var r = n.querySelectorAll(
                'link[rel="stylesheet"][data-precedence],style[data-precedence]'
              ),
              i = r.length ? r[r.length - 1] : null,
              o = i,
              a = 0;
            a < r.length;
            a++
          ) {
            var s = r[a];
            if (s.dataset.precedence === t) o = s;
            else if (o !== i) break;
          }
          o
            ? o.parentNode.insertBefore(e, o.nextSibling)
            : (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild);
        }
        function Ed(e, t) {
          null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
            null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
            null == e.title && (e.title = t.title);
        }
        function Cd(e, t) {
          null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
            null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
            null == e.integrity && (e.integrity = t.integrity);
        }
        var Pd = null;
        function Td(e, t, n) {
          if (null === Pd) {
            var r = new Map(),
              i = (Pd = new Map());
            i.set(n, r);
          } else (r = (i = Pd).get(n)) || ((r = new Map()), i.set(n, r));
          if (r.has(e)) return r;
          for (
            r.set(e, null), n = n.getElementsByTagName(e), i = 0;
            i < n.length;
            i++
          ) {
            var o = n[i];
            if (
              !(
                o[He] ||
                o[Fe] ||
                ("link" === e && "stylesheet" === o.getAttribute("rel"))
              ) &&
              "http://www.w3.org/2000/svg" !== o.namespaceURI
            ) {
              var a = o.getAttribute(t) || "";
              a = e + a;
              var s = r.get(a);
              s ? s.push(o) : r.set(a, [o]);
            }
          }
          return r;
        }
        function Ad(e, t, n) {
          (e = e.ownerDocument || e).head.insertBefore(
            n,
            "title" === t ? e.querySelector("head > title") : null
          );
        }
        function Rd(e) {
          return "stylesheet" !== e.type || 0 !== (3 & e.state.loading);
        }
        var Ld = null;
        function jd() {}
        function zd() {
          if ((this.count--, 0 === this.count))
            if (this.stylesheets) Md(this, this.stylesheets);
            else if (this.unsuspend) {
              var e = this.unsuspend;
              (this.unsuspend = null), e();
            }
        }
        var Dd = null;
        function Md(e, t) {
          (e.stylesheets = null),
            null !== e.unsuspend &&
              (e.count++,
              (Dd = new Map()),
              t.forEach(Od, e),
              (Dd = null),
              zd.call(e));
        }
        function Od(e, t) {
          if (!(4 & t.state.loading)) {
            var n = Dd.get(e);
            if (n) var r = n.get(null);
            else {
              (n = new Map()), Dd.set(e, n);
              for (
                var i = e.querySelectorAll(
                    "link[data-precedence],style[data-precedence]"
                  ),
                  o = 0;
                o < i.length;
                o++
              ) {
                var a = i[o];
                ("LINK" !== a.nodeName &&
                  "not all" === a.getAttribute("media")) ||
                  (n.set(a.dataset.precedence, a), (r = a));
              }
              r && n.set(null, r);
            }
            (a = (i = t.instance).getAttribute("data-precedence")),
              (o = n.get(a) || r) === r && n.set(null, i),
              n.set(a, i),
              this.count++,
              (r = zd.bind(this)),
              i.addEventListener("load", r),
              i.addEventListener("error", r),
              o
                ? o.parentNode.insertBefore(i, o.nextSibling)
                : (e = 9 === e.nodeType ? e.head : e).insertBefore(
                    i,
                    e.firstChild
                  ),
              (t.state.loading |= 4);
          }
        }
        var Nd = {
          $$typeof: g,
          Provider: null,
          Consumer: null,
          _currentValue: U,
          _currentValue2: U,
          _threadCount: 0,
        };
        function _d(e, t, n, r, i, o, a, s) {
          (this.tag = 1),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode =
              this.next =
              this.pendingContext =
              this.context =
              this.cancelPendingCommit =
                null),
            (this.callbackPriority = 0),
            (this.expirationTimes = je(-1)),
            (this.entangledLanes =
              this.shellSuspendCounter =
              this.errorRecoveryDisabledLanes =
              this.finishedLanes =
              this.expiredLanes =
              this.warmLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = je(0)),
            (this.hiddenUpdates = je(null)),
            (this.identifierPrefix = r),
            (this.onUncaughtError = i),
            (this.onCaughtError = o),
            (this.onRecoverableError = a),
            (this.pooledCache = null),
            (this.pooledCacheLanes = 0),
            (this.formState = s),
            (this.incompleteTransitions = new Map());
        }
        function Fd(e, t, n, r, i, o, a, s, l, u, c, d) {
          return (
            (e = new _d(e, t, n, a, s, l, u, d)),
            (t = 1),
            !0 === o && (t |= 24),
            (o = Ol(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (t = Vi()).refCount++,
            (e.pooledCache = t),
            t.refCount++,
            (o.memoizedState = { element: r, isDehydrated: n, cache: t }),
            Rs(o),
            e
          );
        }
        function Id(e) {
          return e ? (e = zr) : zr;
        }
        function Vd(e, t, n, r, i, o) {
          (i = Id(i)),
            null === r.context ? (r.context = i) : (r.pendingContext = i),
            ((r = js(t)).payload = { element: n }),
            null !== (o = void 0 === o ? null : o) && (r.callback = o),
            null !== (n = zs(e, r, t)) && (zu(n, 0, t), Ds(n, e, t));
        }
        function Bd(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function $d(e, t) {
          Bd(e, t), (e = e.alternate) && Bd(e, t);
        }
        function Ud(e) {
          if (13 === e.tag) {
            var t = Rr(e, 67108864);
            null !== t && zu(t, 0, 67108864), $d(e, 67108864);
          }
        }
        var Wd = !0;
        function Hd(e, t, n, r) {
          var i = L.T;
          L.T = null;
          var o = $.p;
          try {
            ($.p = 2), qd(e, t, n, r);
          } finally {
            ($.p = o), (L.T = i);
          }
        }
        function Yd(e, t, n, r) {
          var i = L.T;
          L.T = null;
          var o = $.p;
          try {
            ($.p = 8), qd(e, t, n, r);
          } finally {
            ($.p = o), (L.T = i);
          }
        }
        function qd(e, t, n, r) {
          if (Wd) {
            var i = Kd(r);
            if (null === i) Mc(e, t, r, Xd, n), sf(e, r);
            else if (
              (function (e, t, n, r, i) {
                switch (t) {
                  case "focusin":
                    return (Jd = lf(Jd, e, t, n, r, i)), !0;
                  case "dragenter":
                    return (ef = lf(ef, e, t, n, r, i)), !0;
                  case "mouseover":
                    return (tf = lf(tf, e, t, n, r, i)), !0;
                  case "pointerover":
                    var o = i.pointerId;
                    return nf.set(o, lf(nf.get(o) || null, e, t, n, r, i)), !0;
                  case "gotpointercapture":
                    return (
                      (o = i.pointerId),
                      rf.set(o, lf(rf.get(o) || null, e, t, n, r, i)),
                      !0
                    );
                }
                return !1;
              })(i, e, t, n, r)
            )
              r.stopPropagation();
            else if ((sf(e, r), 4 & t && -1 < af.indexOf(e))) {
              for (; null !== i; ) {
                var o = Ke(i);
                if (null !== o)
                  switch (o.tag) {
                    case 3:
                      if (
                        (o = o.stateNode).current.memoizedState.isDehydrated
                      ) {
                        var a = Ce(o.pendingLanes);
                        if (0 !== a) {
                          var s = o;
                          for (
                            s.pendingLanes |= 2, s.entangledLanes |= 2;
                            a;

                          ) {
                            var l = 1 << (31 - we(a));
                            (s.entanglements[1] |= l), (a &= ~l);
                          }
                          mc(o),
                            0 === (6 & eu) && ((wu = le() + 500), gc(0, !1));
                        }
                      }
                      break;
                    case 13:
                      null !== (s = Rr(o, 2)) && zu(s, 0, 2), Fu(), $d(o, 2);
                  }
                if ((null === (o = Kd(r)) && Mc(e, t, r, Xd, n), o === i))
                  break;
                i = o;
              }
              null !== i && r.stopPropagation();
            } else Mc(e, t, r, null, n);
          }
        }
        function Kd(e) {
          return Qd((e = jt(e)));
        }
        var Xd = null;
        function Qd(e) {
          if (((Xd = null), null !== (e = qe(e)))) {
            var t = _(e);
            if (null === t) e = null;
            else {
              var n = t.tag;
              if (13 === n) {
                if (null !== (e = F(t))) return e;
                e = null;
              } else if (3 === n) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                  return 3 === t.tag ? t.stateNode.containerInfo : null;
                e = null;
              } else t !== e && (e = null);
            }
          }
          return (Xd = e), null;
        }
        function Gd(e) {
          switch (e) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 8;
            case "message":
              switch (ue()) {
                case ce:
                  return 2;
                case de:
                  return 8;
                case fe:
                case he:
                  return 32;
                case pe:
                  return 268435456;
                default:
                  return 32;
              }
            default:
              return 32;
          }
        }
        var Zd = !1,
          Jd = null,
          ef = null,
          tf = null,
          nf = new Map(),
          rf = new Map(),
          of = [],
          af =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
              " "
            );
        function sf(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Jd = null;
              break;
            case "dragenter":
            case "dragleave":
              ef = null;
              break;
            case "mouseover":
            case "mouseout":
              tf = null;
              break;
            case "pointerover":
            case "pointerout":
              nf.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              rf.delete(t.pointerId);
          }
        }
        function lf(e, t, n, r, i, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [i],
              }),
              null !== t && null !== (t = Ke(t)) && Ud(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== i && -1 === t.indexOf(i) && t.push(i),
              e);
        }
        function uf(e) {
          var t = qe(e.target);
          if (null !== t) {
            var n = _(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = F(n)))
                  return (
                    (e.blockedOn = t),
                    void (function (e, t) {
                      var n = $.p;
                      try {
                        return ($.p = e), t();
                      } finally {
                        $.p = n;
                      }
                    })(e.priority, function () {
                      if (13 === n.tag) {
                        var e = Lu(),
                          t = Rr(n, e);
                        null !== t && zu(t, 0, e), $d(n, e);
                      }
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function cf(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Kd(e.nativeEvent);
            if (null !== n)
              return null !== (t = Ke(n)) && Ud(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (Lt = r), n.target.dispatchEvent(r), (Lt = null), t.shift();
          }
          return !0;
        }
        function df(e, t, n) {
          cf(e) && n.delete(t);
        }
        function ff() {
          (Zd = !1),
            null !== Jd && cf(Jd) && (Jd = null),
            null !== ef && cf(ef) && (ef = null),
            null !== tf && cf(tf) && (tf = null),
            nf.forEach(df),
            rf.forEach(df);
        }
        function hf(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Zd ||
              ((Zd = !0),
              r.unstable_scheduleCallback(r.unstable_NormalPriority, ff)));
        }
        var pf = null;
        function mf(e) {
          pf !== e &&
            ((pf = e),
            r.unstable_scheduleCallback(r.unstable_NormalPriority, function () {
              pf === e && (pf = null);
              for (var t = 0; t < e.length; t += 3) {
                var n = e[t],
                  r = e[t + 1],
                  i = e[t + 2];
                if ("function" !== typeof r) {
                  if (null === Qd(r || n)) continue;
                  break;
                }
                var o = Ke(n);
                null !== o &&
                  (e.splice(t, 3),
                  (t -= 3),
                  da(
                    o,
                    { pending: !0, data: i, method: n.method, action: r },
                    r,
                    i
                  ));
              }
            }));
        }
        function gf(e) {
          function t(t) {
            return hf(t, e);
          }
          null !== Jd && hf(Jd, e),
            null !== ef && hf(ef, e),
            null !== tf && hf(tf, e),
            nf.forEach(t),
            rf.forEach(t);
          for (var n = 0; n < of.length; n++) {
            var r = of[n];
            r.blockedOn === e && (r.blockedOn = null);
          }
          for (; 0 < of.length && null === (n = of[0]).blockedOn; )
            uf(n), null === n.blockedOn && of.shift();
          if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
            for (r = 0; r < n.length; r += 3) {
              var i = n[r],
                o = n[r + 1],
                a = i[Ie] || null;
              if ("function" === typeof o) a || mf(n);
              else if (a) {
                var s = null;
                if (o && o.hasAttribute("formAction")) {
                  if (((i = o), (a = o[Ie] || null))) s = a.formAction;
                  else if (null !== Qd(i)) continue;
                } else s = a.action;
                "function" === typeof s
                  ? (n[r + 1] = s)
                  : (n.splice(r, 3), (r -= 3)),
                  mf(n);
              }
            }
        }
        function vf(e) {
          this._internalRoot = e;
        }
        function yf(e) {
          this._internalRoot = e;
        }
        (yf.prototype.render = vf.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(a(409));
            Vd(t.current, Lu(), e, t, null, null);
          }),
          (yf.prototype.unmount = vf.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                0 === e.tag && tc(),
                  Vd(e.current, 2, null, e, null, null),
                  Fu(),
                  (t[Ve] = null);
              }
            }),
          (yf.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Ne();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < of.length && 0 !== t && t < of[n].priority;
                n++
              );
              of.splice(n, 0, e), 0 === n && uf(e);
            }
          });
        var bf = i.version;
        if ("19.0.0" !== bf) throw Error(a(527, bf, "19.0.0"));
        $.findDOMNode = function (e) {
          var t = e._reactInternals;
          if (void 0 === t) {
            if ("function" === typeof e.render) throw Error(a(188));
            throw ((e = Object.keys(e).join(",")), Error(a(268, e)));
          }
          return (
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = _(e))) throw Error(a(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var i = n.return;
                if (null === i) break;
                var o = i.alternate;
                if (null === o) {
                  if (null !== (r = i.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (i.child === o.child) {
                  for (o = i.child; o; ) {
                    if (o === n) return I(i), e;
                    if (o === r) return I(i), t;
                    o = o.sibling;
                  }
                  throw Error(a(188));
                }
                if (n.return !== r.return) (n = i), (r = o);
                else {
                  for (var s = !1, l = i.child; l; ) {
                    if (l === n) {
                      (s = !0), (n = i), (r = o);
                      break;
                    }
                    if (l === r) {
                      (s = !0), (r = i), (n = o);
                      break;
                    }
                    l = l.sibling;
                  }
                  if (!s) {
                    for (l = o.child; l; ) {
                      if (l === n) {
                        (s = !0), (n = o), (r = i);
                        break;
                      }
                      if (l === r) {
                        (s = !0), (r = o), (n = i);
                        break;
                      }
                      l = l.sibling;
                    }
                    if (!s) throw Error(a(189));
                  }
                }
                if (n.alternate !== r) throw Error(a(190));
              }
              if (3 !== n.tag) throw Error(a(188));
              return n.stateNode.current === n ? e : t;
            })(t)),
            (e = null === (e = null !== e ? V(e) : null) ? null : e.stateNode)
          );
        };
        var wf = {
          bundleType: 0,
          version: "19.0.0",
          rendererPackageName: "react-dom",
          currentDispatcherRef: L,
          findFiberByHostInstance: qe,
          reconcilerVersion: "19.0.0",
        };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var xf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!xf.isDisabled && xf.supportsFiber)
            try {
              (ve = xf.inject(wf)), (ye = xf);
            } catch (kf) {}
        }
        (t.createRoot = function (e, t) {
          if (!s(e)) throw Error(a(299));
          var n = !1,
            r = "",
            i = Oa,
            o = Na,
            l = _a;
          return (
            null !== t &&
              void 0 !== t &&
              (!0 === t.unstable_strictMode && (n = !0),
              void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
              void 0 !== t.onUncaughtError && (i = t.onUncaughtError),
              void 0 !== t.onCaughtError && (o = t.onCaughtError),
              void 0 !== t.onRecoverableError && (l = t.onRecoverableError),
              void 0 !== t.unstable_transitionCallbacks &&
                t.unstable_transitionCallbacks),
            (t = Fd(e, 1, !1, null, 0, n, r, i, o, l, 0, null)),
            (e[Ve] = t.current),
            zc(8 === e.nodeType ? e.parentNode : e),
            new vf(t)
          );
        }),
          (t.hydrateRoot = function (e, t, n) {
            if (!s(e)) throw Error(a(299));
            var r = !1,
              i = "",
              o = Oa,
              l = Na,
              u = _a,
              c = null;
            return (
              null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (r = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onUncaughtError && (o = n.onUncaughtError),
                void 0 !== n.onCaughtError && (l = n.onCaughtError),
                void 0 !== n.onRecoverableError && (u = n.onRecoverableError),
                void 0 !== n.unstable_transitionCallbacks &&
                  n.unstable_transitionCallbacks,
                void 0 !== n.formState && (c = n.formState)),
              ((t = Fd(e, 1, !0, t, 0, r, i, o, l, u, 0, c)).context =
                Id(null)),
              (n = t.current),
              ((i = js((r = Lu()))).callback = null),
              zs(n, i, r),
              (t.current.lanes = r),
              ze(t, r),
              mc(t),
              (e[Ve] = t.current),
              zc(e),
              new yf(t)
            );
          }),
          (t.version = "19.0.0");
      },
      672: (e, t, n) => {
        var r = n(43);
        function i(e) {
          var t = "https://react.dev/errors/" + e;
          if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
              t += "&args[]=" + encodeURIComponent(arguments[n]);
          }
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        function o() {}
        var a = {
            d: {
              f: o,
              r: function () {
                throw Error(i(522));
              },
              D: o,
              C: o,
              L: o,
              m: o,
              X: o,
              S: o,
              M: o,
            },
            p: 0,
            findDOMNode: null,
          },
          s = Symbol.for("react.portal");
        var l =
          r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function u(e, t) {
          return "font" === e
            ? ""
            : "string" === typeof t
            ? "use-credentials" === t
              ? t
              : ""
            : void 0;
        }
        (t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (
              !t ||
              (1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType)
            )
              throw Error(i(299));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: s,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.flushSync = function (e) {
            var t = l.T,
              n = a.p;
            try {
              if (((l.T = null), (a.p = 2), e)) return e();
            } finally {
              (l.T = t), (a.p = n), a.d.f();
            }
          }),
          (t.preconnect = function (e, t) {
            "string" === typeof e &&
              (t
                ? (t =
                    "string" === typeof (t = t.crossOrigin)
                      ? "use-credentials" === t
                        ? t
                        : ""
                      : void 0)
                : (t = null),
              a.d.C(e, t));
          }),
          (t.prefetchDNS = function (e) {
            "string" === typeof e && a.d.D(e);
          }),
          (t.preinit = function (e, t) {
            if ("string" === typeof e && t && "string" === typeof t.as) {
              var n = t.as,
                r = u(n, t.crossOrigin),
                i = "string" === typeof t.integrity ? t.integrity : void 0,
                o =
                  "string" === typeof t.fetchPriority
                    ? t.fetchPriority
                    : void 0;
              "style" === n
                ? a.d.S(
                    e,
                    "string" === typeof t.precedence ? t.precedence : void 0,
                    { crossOrigin: r, integrity: i, fetchPriority: o }
                  )
                : "script" === n &&
                  a.d.X(e, {
                    crossOrigin: r,
                    integrity: i,
                    fetchPriority: o,
                    nonce: "string" === typeof t.nonce ? t.nonce : void 0,
                  });
            }
          }),
          (t.preinitModule = function (e, t) {
            if ("string" === typeof e)
              if ("object" === typeof t && null !== t) {
                if (null == t.as || "script" === t.as) {
                  var n = u(t.as, t.crossOrigin);
                  a.d.M(e, {
                    crossOrigin: n,
                    integrity:
                      "string" === typeof t.integrity ? t.integrity : void 0,
                    nonce: "string" === typeof t.nonce ? t.nonce : void 0,
                  });
                }
              } else null == t && a.d.M(e);
          }),
          (t.preload = function (e, t) {
            if (
              "string" === typeof e &&
              "object" === typeof t &&
              null !== t &&
              "string" === typeof t.as
            ) {
              var n = t.as,
                r = u(n, t.crossOrigin);
              a.d.L(e, n, {
                crossOrigin: r,
                integrity:
                  "string" === typeof t.integrity ? t.integrity : void 0,
                nonce: "string" === typeof t.nonce ? t.nonce : void 0,
                type: "string" === typeof t.type ? t.type : void 0,
                fetchPriority:
                  "string" === typeof t.fetchPriority
                    ? t.fetchPriority
                    : void 0,
                referrerPolicy:
                  "string" === typeof t.referrerPolicy
                    ? t.referrerPolicy
                    : void 0,
                imageSrcSet:
                  "string" === typeof t.imageSrcSet ? t.imageSrcSet : void 0,
                imageSizes:
                  "string" === typeof t.imageSizes ? t.imageSizes : void 0,
                media: "string" === typeof t.media ? t.media : void 0,
              });
            }
          }),
          (t.preloadModule = function (e, t) {
            if ("string" === typeof e)
              if (t) {
                var n = u(t.as, t.crossOrigin);
                a.d.m(e, {
                  as:
                    "string" === typeof t.as && "script" !== t.as
                      ? t.as
                      : void 0,
                  crossOrigin: n,
                  integrity:
                    "string" === typeof t.integrity ? t.integrity : void 0,
                });
              } else a.d.m(e);
          }),
          (t.requestFormReset = function (e) {
            a.d.r(e);
          }),
          (t.unstable_batchedUpdates = function (e, t) {
            return e(t);
          }),
          (t.useFormState = function (e, t, n) {
            return l.H.useFormState(e, t, n);
          }),
          (t.useFormStatus = function () {
            return l.H.useHostTransitionStatus();
          }),
          (t.version = "19.0.0");
      },
      391: (e, t, n) => {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(4));
      },
      950: (e, t, n) => {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(672));
      },
      358: (e, t) => {
        const n = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
          r = /^[\u0021-\u003A\u003C-\u007E]*$/,
          i =
            /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
          o = /^[\u0020-\u003A\u003D-\u007E]*$/,
          a = Object.prototype.toString,
          s = (() => {
            const e = function () {};
            return (e.prototype = Object.create(null)), e;
          })();
        function l(e, t, n) {
          do {
            const n = e.charCodeAt(t);
            if (32 !== n && 9 !== n) return t;
          } while (++t < n);
          return n;
        }
        function u(e, t, n) {
          for (; t > n; ) {
            const n = e.charCodeAt(--t);
            if (32 !== n && 9 !== n) return t + 1;
          }
          return n;
        }
        function c(e) {
          if (-1 === e.indexOf("%")) return e;
          try {
            return decodeURIComponent(e);
          } catch (t) {
            return e;
          }
        }
      },
      799: (e, t) => {
        var n = Symbol.for("react.transitional.element"),
          r = Symbol.for("react.fragment");
        function i(e, t, r) {
          var i = null;
          if (
            (void 0 !== r && (i = "" + r),
            void 0 !== t.key && (i = "" + t.key),
            "key" in t)
          )
            for (var o in ((r = {}), t)) "key" !== o && (r[o] = t[o]);
          else r = t;
          return (
            (t = r.ref),
            {
              $$typeof: n,
              type: e,
              key: i,
              ref: void 0 !== t ? t : null,
              props: r,
            }
          );
        }
        (t.Fragment = r), (t.jsx = i), (t.jsxs = i);
      },
      288: (e, t) => {
        var n = Symbol.for("react.transitional.element"),
          r = Symbol.for("react.portal"),
          i = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          a = Symbol.for("react.profiler"),
          s = Symbol.for("react.consumer"),
          l = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          h = Symbol.iterator;
        var p = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {};
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || p);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || p);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = v.prototype);
        var w = (b.prototype = new y());
        (w.constructor = b), m(w, v.prototype), (w.isPureReactComponent = !0);
        var x = Array.isArray,
          S = { H: null, A: null, T: null, S: null },
          k = Object.prototype.hasOwnProperty;
        function E(e, t, r, i, o, a) {
          return (
            (r = a.ref),
            {
              $$typeof: n,
              type: e,
              key: t,
              ref: void 0 !== r ? r : null,
              props: a,
            }
          );
        }
        function C(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var P = /\/+/g;
        function T(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function A() {}
        function R(e, t, i, o, a) {
          var s = typeof e;
          ("undefined" !== s && "boolean" !== s) || (e = null);
          var l,
            u,
            c = !1;
          if (null === e) c = !0;
          else
            switch (s) {
              case "bigint":
              case "string":
              case "number":
                c = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    c = !0;
                    break;
                  case f:
                    return R((c = e._init)(e._payload), t, i, o, a);
                }
            }
          if (c)
            return (
              (a = a(e)),
              (c = "" === o ? "." + T(e, 0) : o),
              x(a)
                ? ((i = ""),
                  null != c && (i = c.replace(P, "$&/") + "/"),
                  R(a, t, i, "", function (e) {
                    return e;
                  }))
                : null != a &&
                  (C(a) &&
                    ((l = a),
                    (u =
                      i +
                      (null == a.key || (e && e.key === a.key)
                        ? ""
                        : ("" + a.key).replace(P, "$&/") + "/") +
                      c),
                    (a = E(l.type, u, void 0, 0, 0, l.props))),
                  t.push(a)),
              1
            );
          c = 0;
          var d,
            p = "" === o ? "." : o + ":";
          if (x(e))
            for (var m = 0; m < e.length; m++)
              c += R((o = e[m]), t, i, (s = p + T(o, m)), a);
          else if (
            "function" ===
            typeof (m =
              null === (d = e) || "object" !== typeof d
                ? null
                : "function" === typeof (d = (h && d[h]) || d["@@iterator"])
                ? d
                : null)
          )
            for (e = m.call(e), m = 0; !(o = e.next()).done; )
              c += R((o = o.value), t, i, (s = p + T(o, m++)), a);
          else if ("object" === s) {
            if ("function" === typeof e.then)
              return R(
                (function (e) {
                  switch (e.status) {
                    case "fulfilled":
                      return e.value;
                    case "rejected":
                      throw e.reason;
                    default:
                      switch (
                        ("string" === typeof e.status
                          ? e.then(A, A)
                          : ((e.status = "pending"),
                            e.then(
                              function (t) {
                                "pending" === e.status &&
                                  ((e.status = "fulfilled"), (e.value = t));
                              },
                              function (t) {
                                "pending" === e.status &&
                                  ((e.status = "rejected"), (e.reason = t));
                              }
                            )),
                        e.status)
                      ) {
                        case "fulfilled":
                          return e.value;
                        case "rejected":
                          throw e.reason;
                      }
                  }
                  throw e;
                })(e),
                t,
                i,
                o,
                a
              );
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          }
          return c;
        }
        function L(e, t, n) {
          if (null == e) return e;
          var r = [],
            i = 0;
          return (
            R(e, r, "", "", function (e) {
              return t.call(n, e, i++);
            }),
            r
          );
        }
        function j(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var z =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                if (
                  "object" === typeof window &&
                  "function" === typeof window.ErrorEvent
                ) {
                  var t = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message:
                      "object" === typeof e &&
                      null !== e &&
                      "string" === typeof e.message
                        ? String(e.message)
                        : String(e),
                    error: e,
                  });
                  if (!window.dispatchEvent(t)) return;
                } else if (
                  "object" === typeof process &&
                  "function" === typeof process.emit
                )
                  return void process.emit("uncaughtException", e);
                console.error(e);
              };
        function D() {}
        (t.Children = {
          map: L,
          forEach: function (e, t, n) {
            L(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              L(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              L(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!C(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = v),
          (t.Fragment = i),
          (t.Profiler = a),
          (t.PureComponent = b),
          (t.StrictMode = o),
          (t.Suspense = c),
          (t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
            S),
          (t.act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.cache = function (e) {
            return function () {
              return e.apply(null, arguments);
            };
          }),
          (t.cloneElement = function (e, t, n) {
            if (null === e || void 0 === e)
              throw Error(
                "The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var r = m({}, e.props),
              i = e.key;
            if (null != t)
              for (o in (void 0 !== t.ref && void 0,
              void 0 !== t.key && (i = "" + t.key),
              t))
                !k.call(t, o) ||
                  "key" === o ||
                  "__self" === o ||
                  "__source" === o ||
                  ("ref" === o && void 0 === t.ref) ||
                  (r[o] = t[o]);
            var o = arguments.length - 2;
            if (1 === o) r.children = n;
            else if (1 < o) {
              for (var a = Array(o), s = 0; s < o; s++) a[s] = arguments[s + 2];
              r.children = a;
            }
            return E(e.type, i, void 0, 0, 0, r);
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: l,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
              }).Provider = e),
              (e.Consumer = { $$typeof: s, _context: e }),
              e
            );
          }),
          (t.createElement = function (e, t, n) {
            var r,
              i = {},
              o = null;
            if (null != t)
              for (r in (void 0 !== t.key && (o = "" + t.key), t))
                k.call(t, r) &&
                  "key" !== r &&
                  "__self" !== r &&
                  "__source" !== r &&
                  (i[r] = t[r]);
            var a = arguments.length - 2;
            if (1 === a) i.children = n;
            else if (1 < a) {
              for (var s = Array(a), l = 0; l < a; l++) s[l] = arguments[l + 2];
              i.children = s;
            }
            if (e && e.defaultProps)
              for (r in (a = e.defaultProps)) void 0 === i[r] && (i[r] = a[r]);
            return E(e, o, void 0, 0, 0, i);
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = C),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: j,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = S.T,
              n = {};
            S.T = n;
            try {
              var r = e(),
                i = S.S;
              null !== i && i(n, r),
                "object" === typeof r &&
                  null !== r &&
                  "function" === typeof r.then &&
                  r.then(D, z);
            } catch (o) {
              z(o);
            } finally {
              S.T = t;
            }
          }),
          (t.unstable_useCacheRefresh = function () {
            return S.H.useCacheRefresh();
          }),
          (t.use = function (e) {
            return S.H.use(e);
          }),
          (t.useActionState = function (e, t, n) {
            return S.H.useActionState(e, t, n);
          }),
          (t.useCallback = function (e, t) {
            return S.H.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return S.H.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e, t) {
            return S.H.useDeferredValue(e, t);
          }),
          (t.useEffect = function (e, t) {
            return S.H.useEffect(e, t);
          }),
          (t.useId = function () {
            return S.H.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return S.H.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return S.H.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return S.H.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return S.H.useMemo(e, t);
          }),
          (t.useOptimistic = function (e, t) {
            return S.H.useOptimistic(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return S.H.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return S.H.useRef(e);
          }),
          (t.useState = function (e) {
            return S.H.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return S.H.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return S.H.useTransition();
          }),
          (t.version = "19.0.0");
      },
      43: (e, t, n) => {
        e.exports = n(288);
      },
      579: (e, t, n) => {
        e.exports = n(799);
      },
      896: (e, t) => {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              i = e[r];
            if (!(0 < o(i, t))) break e;
            (e[r] = t), (e[n] = i), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function i(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, i = e.length, a = i >>> 1; r < a; ) {
              var s = 2 * (r + 1) - 1,
                l = e[s],
                u = s + 1,
                c = e[u];
              if (0 > o(l, n))
                u < i && 0 > o(c, l)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = l), (e[s] = n), (r = s));
              else {
                if (!(u < i && 0 > o(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function o(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          ((t.unstable_now = void 0),
          "object" === typeof performance &&
            "function" === typeof performance.now)
        ) {
          var a = performance;
          t.unstable_now = function () {
            return a.now();
          };
        } else {
          var s = Date,
            l = s.now();
          t.unstable_now = function () {
            return s.now() - l;
          };
        }
        var u = [],
          c = [],
          d = 1,
          f = null,
          h = 3,
          p = !1,
          m = !1,
          g = !1,
          v = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) i(c);
            else {
              if (!(t.startTime <= e)) break;
              i(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function x(e) {
          if (((g = !1), w(e), !m))
            if (null !== r(u)) (m = !0), j();
            else {
              var t = r(c);
              null !== t && z(x, t.startTime - e);
            }
        }
        var S,
          k = !1,
          E = -1,
          C = 5,
          P = -1;
        function T() {
          return !(t.unstable_now() - P < C);
        }
        function A() {
          if (k) {
            var e = t.unstable_now();
            P = e;
            var n = !0;
            try {
              e: {
                (m = !1), g && ((g = !1), y(E), (E = -1)), (p = !0);
                var o = h;
                try {
                  t: {
                    for (
                      w(e), f = r(u);
                      null !== f && !(f.expirationTime > e && T());

                    ) {
                      var a = f.callback;
                      if ("function" === typeof a) {
                        (f.callback = null), (h = f.priorityLevel);
                        var s = a(f.expirationTime <= e);
                        if (((e = t.unstable_now()), "function" === typeof s)) {
                          (f.callback = s), w(e), (n = !0);
                          break t;
                        }
                        f === r(u) && i(u), w(e);
                      } else i(u);
                      f = r(u);
                    }
                    if (null !== f) n = !0;
                    else {
                      var l = r(c);
                      null !== l && z(x, l.startTime - e), (n = !1);
                    }
                  }
                  break e;
                } finally {
                  (f = null), (h = o), (p = !1);
                }
                n = void 0;
              }
            } finally {
              n ? S() : (k = !1);
            }
          }
        }
        if ("function" === typeof b)
          S = function () {
            b(A);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var R = new MessageChannel(),
            L = R.port2;
          (R.port1.onmessage = A),
            (S = function () {
              L.postMessage(null);
            });
        } else
          S = function () {
            v(A, 0);
          };
        function j() {
          k || ((k = !0), S());
        }
        function z(e, n) {
          E = v(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || p || ((m = !0), j());
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (C = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return h;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (h) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = h;
            }
            var n = h;
            h = t;
            try {
              return e();
            } finally {
              h = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = h;
            h = e;
            try {
              return t();
            } finally {
              h = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, i, o) {
            var a = t.unstable_now();
            switch (
              ("object" === typeof o && null !== o
                ? (o = "number" === typeof (o = o.delay) && 0 < o ? a + o : a)
                : (o = a),
              e)
            ) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: i,
                priorityLevel: e,
                startTime: o,
                expirationTime: (s = o + s),
                sortIndex: -1,
              }),
              o > a
                ? ((e.sortIndex = o),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (g ? (y(E), (E = -1)) : (g = !0), z(x, o - a)))
                : ((e.sortIndex = s), n(u, e), m || p || ((m = !0), j())),
              e
            );
          }),
          (t.unstable_shouldYield = T),
          (t.unstable_wrapCallback = function (e) {
            var t = h;
            return function () {
              var n = h;
              h = t;
              try {
                return e.apply(this, arguments);
              } finally {
                h = n;
              }
            };
          });
      },
      853: (e, t, n) => {
        e.exports = n(896);
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (n.m = e),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = (e) =>
      Promise.all(Object.keys(n.f).reduce((t, r) => (n.f[r](e, t), t), []))),
    (n.u = (e) => "static/js/" + e + ".3e560f3c.chunk.js"),
    (n.miniCssF = (e) => {}),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = {},
        t = "zhoa:";
      n.l = (r, i, o, a) => {
        if (e[r]) e[r].push(i);
        else {
          var s, l;
          if (void 0 !== o)
            for (
              var u = document.getElementsByTagName("script"), c = 0;
              c < u.length;
              c++
            ) {
              var d = u[c];
              if (
                d.getAttribute("src") == r ||
                d.getAttribute("data-webpack") == t + o
              ) {
                s = d;
                break;
              }
            }
          s ||
            ((l = !0),
            ((s = document.createElement("script")).charset = "utf-8"),
            (s.timeout = 120),
            n.nc && s.setAttribute("nonce", n.nc),
            s.setAttribute("data-webpack", t + o),
            (s.src = r)),
            (e[r] = [i]);
          var f = (t, n) => {
              (s.onerror = s.onload = null), clearTimeout(h);
              var i = e[r];
              if (
                (delete e[r],
                s.parentNode && s.parentNode.removeChild(s),
                i && i.forEach((e) => e(n)),
                t)
              )
                return t(n);
            },
            h = setTimeout(
              f.bind(null, void 0, { type: "timeout", target: s }),
              12e4
            );
          (s.onerror = f.bind(null, s.onerror)),
            (s.onload = f.bind(null, s.onload)),
            l && document.head.appendChild(s);
        }
      };
    })(),
    (n.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (() => {
      var e = { 792: 0 };
      n.f.j = (t, r) => {
        var i = n.o(e, t) ? e[t] : void 0;
        if (0 !== i)
          if (i) r.push(i[2]);
          else {
            var o = new Promise((n, r) => (i = e[t] = [n, r]));
            r.push((i[2] = o));
            var a = n.p + n.u(t),
              s = new Error();
            n.l(
              a,
              (r) => {
                if (n.o(e, t) && (0 !== (i = e[t]) && (e[t] = void 0), i)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    a = r && r.target && r.target.src;
                  (s.message =
                    "Loading chunk " + t + " failed.\n(" + o + ": " + a + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = o),
                    (s.request = a),
                    i[1](s);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = (t, r) => {
          var i,
            o,
            a = r[0],
            s = r[1],
            l = r[2],
            u = 0;
          if (a.some((t) => 0 !== e[t])) {
            for (i in s) n.o(s, i) && (n.m[i] = s[i]);
            if (l) l(n);
          }
          for (t && t(r); u < a.length; u++)
            (o = a[u]), n.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
        },
        r = (self.webpackChunkzhoa = self.webpackChunkzhoa || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var r = n(43),
    i = n(391),
    o = (n(358), "popstate");
  function a() {
    return h(
      function (e, t) {
        let { pathname: n, search: r, hash: i } = e.location;
        return c(
          "",
          { pathname: n, search: r, hash: i },
          (t.state && t.state.usr) || null,
          (t.state && t.state.key) || "default"
        );
      },
      function (e, t) {
        return "string" === typeof t ? t : d(t);
      },
      null,
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
    );
  }
  function s(e, t) {
    if (!1 === e || null === e || "undefined" === typeof e) throw new Error(t);
  }
  function l(e, t) {
    if (!e) {
      "undefined" !== typeof console && console.warn(t);
      try {
        throw new Error(t);
      } catch (n) {}
    }
  }
  function u(e, t) {
    return { usr: e.state, key: e.key, idx: t };
  }
  function c(e, t) {
    let n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
      r = arguments.length > 3 ? arguments[3] : void 0;
    return {
      pathname: "string" === typeof e ? e : e.pathname,
      search: "",
      hash: "",
      ...("string" === typeof t ? f(t) : t),
      state: n,
      key: (t && t.key) || r || Math.random().toString(36).substring(2, 10),
    };
  }
  function d(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return (
      n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n),
      r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r),
      t
    );
  }
  function f(e) {
    let t = {};
    if (e) {
      let n = e.indexOf("#");
      n >= 0 && ((t.hash = e.substring(n)), (e = e.substring(0, n)));
      let r = e.indexOf("?");
      r >= 0 && ((t.search = e.substring(r)), (e = e.substring(0, r))),
        e && (t.pathname = e);
    }
    return t;
  }
  function h(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
      { window: i = document.defaultView, v5Compat: a = !1 } = r,
      l = i.history,
      f = "POP",
      h = null,
      p = m();
    function m() {
      return (l.state || { idx: null }).idx;
    }
    function g() {
      f = "POP";
      let e = m(),
        t = null == e ? null : e - p;
      (p = e), h && h({ action: f, location: y.location, delta: t });
    }
    function v(e) {
      let t =
          "null" !== i.location.origin ? i.location.origin : i.location.href,
        n = "string" === typeof e ? e : d(e);
      return (
        (n = n.replace(/ $/, "%20")),
        s(
          t,
          `No window.location.(origin|href) available to create URL for href: ${n}`
        ),
        new URL(n, t)
      );
    }
    null == p && ((p = 0), l.replaceState({ ...l.state, idx: p }, ""));
    let y = {
      get action() {
        return f;
      },
      get location() {
        return e(i, l);
      },
      listen(e) {
        if (h) throw new Error("A history only accepts one active listener");
        return (
          i.addEventListener(o, g),
          (h = e),
          () => {
            i.removeEventListener(o, g), (h = null);
          }
        );
      },
      createHref: (e) => t(i, e),
      createURL: v,
      encodeLocation(e) {
        let t = v(e);
        return { pathname: t.pathname, search: t.search, hash: t.hash };
      },
      push: function (e, t) {
        f = "PUSH";
        let r = c(y.location, e, t);
        n && n(r, e), (p = m() + 1);
        let o = u(r, p),
          s = y.createHref(r);
        try {
          l.pushState(o, "", s);
        } catch (d) {
          if (d instanceof DOMException && "DataCloneError" === d.name) throw d;
          i.location.assign(s);
        }
        a && h && h({ action: f, location: y.location, delta: 1 });
      },
      replace: function (e, t) {
        f = "REPLACE";
        let r = c(y.location, e, t);
        n && n(r, e), (p = m());
        let i = u(r, p),
          o = y.createHref(r);
        l.replaceState(i, "", o),
          a && h && h({ action: f, location: y.location, delta: 0 });
      },
      go: (e) => l.go(e),
    };
    return y;
  }
  function p(e, t) {
    return m(
      e,
      t,
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "/",
      !1
    );
  }
  function m(e, t, n, r) {
    let i = R(("string" === typeof t ? f(t) : t).pathname || "/", n);
    if (null == i) return null;
    let o = g(e);
    !(function (e) {
      e.sort((e, t) =>
        e.score !== t.score
          ? t.score - e.score
          : (function (e, t) {
              let n =
                e.length === t.length &&
                e.slice(0, -1).every((e, n) => e === t[n]);
              return n ? e[e.length - 1] - t[t.length - 1] : 0;
            })(
              e.routesMeta.map((e) => e.childrenIndex),
              t.routesMeta.map((e) => e.childrenIndex)
            )
      );
    })(o);
    let a = null;
    for (let s = 0; null == a && s < o.length; ++s) {
      let e = A(i);
      a = P(o[s], e, r);
    }
    return a;
  }
  function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
      r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
      i = (e, i, o) => {
        let a = {
          relativePath: void 0 === o ? e.path || "" : o,
          caseSensitive: !0 === e.caseSensitive,
          childrenIndex: i,
          route: e,
        };
        a.relativePath.startsWith("/") &&
          (s(
            a.relativePath.startsWith(r),
            `Absolute route path "${a.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
          ),
          (a.relativePath = a.relativePath.slice(r.length)));
        let l = M([r, a.relativePath]),
          u = n.concat(a);
        e.children &&
          e.children.length > 0 &&
          (s(
            !0 !== e.index,
            `Index routes must not have child routes. Please remove all child routes from route path "${l}".`
          ),
          g(e.children, t, u, l)),
          (null != e.path || e.index) &&
            t.push({ path: l, score: C(l, e.index), routesMeta: u });
      };
    return (
      e.forEach((e, t) => {
        if ("" !== e.path && e.path?.includes("?"))
          for (let n of v(e.path)) i(e, t, n);
        else i(e, t);
      }),
      t
    );
  }
  function v(e) {
    let t = e.split("/");
    if (0 === t.length) return [];
    let [n, ...r] = t,
      i = n.endsWith("?"),
      o = n.replace(/\?$/, "");
    if (0 === r.length) return i ? [o, ""] : [o];
    let a = v(r.join("/")),
      s = [];
    return (
      s.push(...a.map((e) => ("" === e ? o : [o, e].join("/")))),
      i && s.push(...a),
      s.map((t) => (e.startsWith("/") && "" === t ? "/" : t))
    );
  }
  var y = /^:[\w-]+$/,
    b = 3,
    w = 2,
    x = 1,
    S = 10,
    k = -2,
    E = (e) => "*" === e;
  function C(e, t) {
    let n = e.split("/"),
      r = n.length;
    return (
      n.some(E) && (r += k),
      t && (r += w),
      n
        .filter((e) => !E(e))
        .reduce((e, t) => e + (y.test(t) ? b : "" === t ? x : S), r)
    );
  }
  function P(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      { routesMeta: r } = e,
      i = {},
      o = "/",
      a = [];
    for (let s = 0; s < r.length; ++s) {
      let e = r[s],
        l = s === r.length - 1,
        u = "/" === o ? t : t.slice(o.length) || "/",
        c = T(
          { path: e.relativePath, caseSensitive: e.caseSensitive, end: l },
          u
        ),
        d = e.route;
      if (
        (!c &&
          l &&
          n &&
          !r[r.length - 1].route.index &&
          (c = T(
            { path: e.relativePath, caseSensitive: e.caseSensitive, end: !1 },
            u
          )),
        !c)
      )
        return null;
      Object.assign(i, c.params),
        a.push({
          params: i,
          pathname: M([o, c.pathname]),
          pathnameBase: O(M([o, c.pathnameBase])),
          route: d,
        }),
        "/" !== c.pathnameBase && (o = M([o, c.pathnameBase]));
    }
    return a;
  }
  function T(e, t) {
    "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = (function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        l(
          "*" === e || !e.endsWith("*") || e.endsWith("/*"),
          `Route path "${e}" will be treated as if it were "${e.replace(
            /\*$/,
            "/*"
          )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(
            /\*$/,
            "/*"
          )}".`
        );
        let r = [],
          i =
            "^" +
            e
              .replace(/\/*\*?$/, "")
              .replace(/^\/*/, "/")
              .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
              .replace(
                /\/:([\w-]+)(\?)?/g,
                (e, t, n) => (
                  r.push({ paramName: t, isOptional: null != n }),
                  n ? "/?([^\\/]+)?" : "/([^\\/]+)"
                )
              );
        e.endsWith("*")
          ? (r.push({ paramName: "*" }),
            (i += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
          : n
          ? (i += "\\/*$")
          : "" !== e && "/" !== e && (i += "(?:(?=\\/|$))");
        let o = new RegExp(i, t ? void 0 : "i");
        return [o, r];
      })(e.path, e.caseSensitive, e.end),
      i = t.match(n);
    if (!i) return null;
    let o = i[0],
      a = o.replace(/(.)\/+$/, "$1"),
      s = i.slice(1);
    return {
      params: r.reduce((e, t, n) => {
        let { paramName: r, isOptional: i } = t;
        if ("*" === r) {
          let e = s[n] || "";
          a = o.slice(0, o.length - e.length).replace(/(.)\/+$/, "$1");
        }
        const l = s[n];
        return (e[r] = i && !l ? void 0 : (l || "").replace(/%2F/g, "/")), e;
      }, {}),
      pathname: o,
      pathnameBase: a,
      pattern: e,
    };
  }
  function A(e) {
    try {
      return e
        .split("/")
        .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
        .join("/");
    } catch (t) {
      return (
        l(
          !1,
          `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
        ),
        e
      );
    }
  }
  function R(e, t) {
    if ("/" === t) return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
      r = e.charAt(n);
    return r && "/" !== r ? null : e.slice(n) || "/";
  }
  function L(e, t, n, r) {
    return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(
      r
    )}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
  }
  function j(e) {
    return e.filter(
      (e, t) => 0 === t || (e.route.path && e.route.path.length > 0)
    );
  }
  function z(e) {
    let t = j(e);
    return t.map((e, n) => (n === t.length - 1 ? e.pathname : e.pathnameBase));
  }
  function D(e, t, n) {
    let r,
      i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    "string" === typeof e
      ? (r = f(e))
      : ((r = { ...e }),
        s(
          !r.pathname || !r.pathname.includes("?"),
          L("?", "pathname", "search", r)
        ),
        s(
          !r.pathname || !r.pathname.includes("#"),
          L("#", "pathname", "hash", r)
        ),
        s(!r.search || !r.search.includes("#"), L("#", "search", "hash", r)));
    let o,
      a = "" === e || "" === r.pathname,
      l = a ? "/" : r.pathname;
    if (null == l) o = n;
    else {
      let e = t.length - 1;
      if (!i && l.startsWith("..")) {
        let t = l.split("/");
        for (; ".." === t[0]; ) t.shift(), (e -= 1);
        r.pathname = t.join("/");
      }
      o = e >= 0 ? t[e] : "/";
    }
    let u = (function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "/",
          {
            pathname: n,
            search: r = "",
            hash: i = "",
          } = "string" === typeof e ? f(e) : e,
          o = n
            ? n.startsWith("/")
              ? n
              : (function (e, t) {
                  let n = t.replace(/\/+$/, "").split("/");
                  return (
                    e.split("/").forEach((e) => {
                      ".." === e
                        ? n.length > 1 && n.pop()
                        : "." !== e && n.push(e);
                    }),
                    n.length > 1 ? n.join("/") : "/"
                  );
                })(n, t)
            : t;
        return { pathname: o, search: N(r), hash: _(i) };
      })(r, o),
      c = l && "/" !== l && l.endsWith("/"),
      d = (a || "." === l) && n.endsWith("/");
    return u.pathname.endsWith("/") || (!c && !d) || (u.pathname += "/"), u;
  }
  var M = (e) => e.join("/").replace(/\/\/+/g, "/"),
    O = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    N = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
    _ = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "");
  function F(e) {
    return (
      null != e &&
      "number" === typeof e.status &&
      "string" === typeof e.statusText &&
      "boolean" === typeof e.internal &&
      "data" in e
    );
  }
  var I = ["POST", "PUT", "PATCH", "DELETE"],
    V = (new Set(I), ["GET", ...I]);
  new Set(V), Symbol("ResetLoaderData");
  var B = r.createContext(null);
  B.displayName = "DataRouter";
  var $ = r.createContext(null);
  $.displayName = "DataRouterState";
  var U = r.createContext({ isTransitioning: !1 });
  U.displayName = "ViewTransition";
  var W = r.createContext(new Map());
  W.displayName = "Fetchers";
  var H = r.createContext(null);
  H.displayName = "Await";
  var Y = r.createContext(null);
  Y.displayName = "Navigation";
  var q = r.createContext(null);
  q.displayName = "Location";
  var K = r.createContext({ outlet: null, matches: [], isDataRoute: !1 });
  K.displayName = "Route";
  var X = r.createContext(null);
  X.displayName = "RouteError";
  function Q() {
    return null != r.useContext(q);
  }
  function G() {
    return (
      s(
        Q(),
        "useLocation() may be used only in the context of a <Router> component."
      ),
      r.useContext(q).location
    );
  }
  var Z =
    "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
  function J(e) {
    r.useContext(Y).static || r.useLayoutEffect(e);
  }
  function ee() {
    let { isDataRoute: e } = r.useContext(K);
    return e
      ? (function () {
          let { router: e } = ue("useNavigate"),
            t = de("useNavigate"),
            n = r.useRef(!1);
          J(() => {
            n.current = !0;
          });
          let i = r.useCallback(
            async function (r) {
              let i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              l(n.current, Z),
                n.current &&
                  ("number" === typeof r
                    ? e.navigate(r)
                    : await e.navigate(r, { fromRouteId: t, ...i }));
            },
            [e, t]
          );
          return i;
        })()
      : (function () {
          s(
            Q(),
            "useNavigate() may be used only in the context of a <Router> component."
          );
          let e = r.useContext(B),
            { basename: t, navigator: n } = r.useContext(Y),
            { matches: i } = r.useContext(K),
            { pathname: o } = G(),
            a = JSON.stringify(z(i)),
            u = r.useRef(!1);
          J(() => {
            u.current = !0;
          });
          let c = r.useCallback(
            function (r) {
              let i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              if ((l(u.current, Z), !u.current)) return;
              if ("number" === typeof r) return void n.go(r);
              let s = D(r, JSON.parse(a), o, "path" === i.relative);
              null == e &&
                "/" !== t &&
                (s.pathname = "/" === s.pathname ? t : M([t, s.pathname])),
                (i.replace ? n.replace : n.push)(s, i.state, i);
            },
            [t, n, a, o, e]
          );
          return c;
        })();
  }
  r.createContext(null);
  function te(e) {
    let { relative: t } =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      { matches: n } = r.useContext(K),
      { pathname: i } = G(),
      o = JSON.stringify(z(n));
    return r.useMemo(() => D(e, JSON.parse(o), i, "path" === t), [e, o, i, t]);
  }
  function ne(e, t, n, i) {
    s(
      Q(),
      "useRoutes() may be used only in the context of a <Router> component."
    );
    let { navigator: o, static: a } = r.useContext(Y),
      { matches: u } = r.useContext(K),
      c = u[u.length - 1],
      d = c ? c.params : {},
      h = c ? c.pathname : "/",
      m = c ? c.pathnameBase : "/",
      g = c && c.route;
    {
      let e = (g && g.path) || "";
      pe(
        h,
        !g || e.endsWith("*") || e.endsWith("*?"),
        `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${
          "/" === e ? "*" : `${e}/*`
        }">.`
      );
    }
    let v,
      y = G();
    if (t) {
      let e = "string" === typeof t ? f(t) : t;
      s(
        "/" === m || e.pathname?.startsWith(m),
        `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${e.pathname}" was given in the \`location\` prop.`
      ),
        (v = e);
    } else v = y;
    let b = v.pathname || "/",
      w = b;
    if ("/" !== m) {
      let e = m.replace(/^\//, "").split("/");
      w = "/" + b.replace(/^\//, "").split("/").slice(e.length).join("/");
    }
    let x =
      !a && n && n.matches && n.matches.length > 0
        ? n.matches
        : p(e, { pathname: w });
    l(
      g || null != x,
      `No routes matched location "${v.pathname}${v.search}${v.hash}" `
    ),
      l(
        null == x ||
          void 0 !== x[x.length - 1].route.element ||
          void 0 !== x[x.length - 1].route.Component ||
          void 0 !== x[x.length - 1].route.lazy,
        `Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
      );
    let S = se(
      x &&
        x.map((e) =>
          Object.assign({}, e, {
            params: Object.assign({}, d, e.params),
            pathname: M([
              m,
              o.encodeLocation
                ? o.encodeLocation(e.pathname).pathname
                : e.pathname,
            ]),
            pathnameBase:
              "/" === e.pathnameBase
                ? m
                : M([
                    m,
                    o.encodeLocation
                      ? o.encodeLocation(e.pathnameBase).pathname
                      : e.pathnameBase,
                  ]),
          })
        ),
      u,
      n,
      i
    );
    return t && S
      ? r.createElement(
          q.Provider,
          {
            value: {
              location: {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
                ...v,
              },
              navigationType: "POP",
            },
          },
          S
        )
      : S;
  }
  function re() {
    let e = fe(),
      t = F(e)
        ? `${e.status} ${e.statusText}`
        : e instanceof Error
        ? e.message
        : JSON.stringify(e),
      n = e instanceof Error ? e.stack : null,
      i = "rgba(200,200,200, 0.5)",
      o = { padding: "0.5rem", backgroundColor: i },
      a = { padding: "2px 4px", backgroundColor: i },
      s = null;
    return (
      console.error("Error handled by React Router default ErrorBoundary:", e),
      (s = r.createElement(
        r.Fragment,
        null,
        r.createElement("p", null, "\ud83d\udcbf Hey developer \ud83d\udc4b"),
        r.createElement(
          "p",
          null,
          "You can provide a way better UX than this when your app throws errors by providing your own ",
          r.createElement("code", { style: a }, "ErrorBoundary"),
          " or",
          " ",
          r.createElement("code", { style: a }, "errorElement"),
          " prop on your route."
        )
      )),
      r.createElement(
        r.Fragment,
        null,
        r.createElement("h2", null, "Unexpected Application Error!"),
        r.createElement("h3", { style: { fontStyle: "italic" } }, t),
        n ? r.createElement("pre", { style: o }, n) : null,
        s
      )
    );
  }
  var ie = r.createElement(re, null),
    oe = class extends r.Component {
      constructor(e) {
        super(e),
          (this.state = {
            location: e.location,
            revalidation: e.revalidation,
            error: e.error,
          });
      }
      static getDerivedStateFromError(e) {
        return { error: e };
      }
      static getDerivedStateFromProps(e, t) {
        return t.location !== e.location ||
          ("idle" !== t.revalidation && "idle" === e.revalidation)
          ? {
              error: e.error,
              location: e.location,
              revalidation: e.revalidation,
            }
          : {
              error: void 0 !== e.error ? e.error : t.error,
              location: t.location,
              revalidation: e.revalidation || t.revalidation,
            };
      }
      componentDidCatch(e, t) {
        console.error(
          "React Router caught the following error during render",
          e,
          t
        );
      }
      render() {
        return void 0 !== this.state.error
          ? r.createElement(
              K.Provider,
              { value: this.props.routeContext },
              r.createElement(X.Provider, {
                value: this.state.error,
                children: this.props.component,
              })
            )
          : this.props.children;
      }
    };
  function ae(e) {
    let { routeContext: t, match: n, children: i } = e,
      o = r.useContext(B);
    return (
      o &&
        o.static &&
        o.staticContext &&
        (n.route.errorElement || n.route.ErrorBoundary) &&
        (o.staticContext._deepestRenderedBoundaryId = n.route.id),
      r.createElement(K.Provider, { value: t }, i)
    );
  }
  function se(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (null == e) {
      if (!n) return null;
      if (n.errors) e = n.matches;
      else {
        if (0 !== t.length || n.initialized || !(n.matches.length > 0))
          return null;
        e = n.matches;
      }
    }
    let i = e,
      o = n?.errors;
    if (null != o) {
      let e = i.findIndex((e) => e.route.id && void 0 !== o?.[e.route.id]);
      s(
        e >= 0,
        `Could not find a matching route for errors on route IDs: ${Object.keys(
          o
        ).join(",")}`
      ),
        (i = i.slice(0, Math.min(i.length, e + 1)));
    }
    let a = !1,
      l = -1;
    if (n)
      for (let r = 0; r < i.length; r++) {
        let e = i[r];
        if (
          ((e.route.HydrateFallback || e.route.hydrateFallbackElement) &&
            (l = r),
          e.route.id)
        ) {
          let { loaderData: t, errors: r } = n,
            o =
              e.route.loader &&
              !t.hasOwnProperty(e.route.id) &&
              (!r || void 0 === r[e.route.id]);
          if (e.route.lazy || o) {
            (a = !0), (i = l >= 0 ? i.slice(0, l + 1) : [i[0]]);
            break;
          }
        }
      }
    return i.reduceRight((e, s, u) => {
      let c,
        d = !1,
        f = null,
        h = null;
      n &&
        ((c = o && s.route.id ? o[s.route.id] : void 0),
        (f = s.route.errorElement || ie),
        a &&
          (l < 0 && 0 === u
            ? (pe(
                "route-fallback",
                !1,
                "No `HydrateFallback` element provided to render during initial hydration"
              ),
              (d = !0),
              (h = null))
            : l === u &&
              ((d = !0), (h = s.route.hydrateFallbackElement || null))));
      let p = t.concat(i.slice(0, u + 1)),
        m = () => {
          let t;
          return (
            (t = c
              ? f
              : d
              ? h
              : s.route.Component
              ? r.createElement(s.route.Component, null)
              : s.route.element
              ? s.route.element
              : e),
            r.createElement(ae, {
              match: s,
              routeContext: { outlet: e, matches: p, isDataRoute: null != n },
              children: t,
            })
          );
        };
      return n && (s.route.ErrorBoundary || s.route.errorElement || 0 === u)
        ? r.createElement(oe, {
            location: n.location,
            revalidation: n.revalidation,
            component: f,
            error: c,
            children: m(),
            routeContext: { outlet: null, matches: p, isDataRoute: !0 },
          })
        : m();
    }, null);
  }
  function le(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function ue(e) {
    let t = r.useContext(B);
    return s(t, le(e)), t;
  }
  function ce(e) {
    let t = r.useContext($);
    return s(t, le(e)), t;
  }
  function de(e) {
    let t = (function (e) {
        let t = r.useContext(K);
        return s(t, le(e)), t;
      })(e),
      n = t.matches[t.matches.length - 1];
    return (
      s(
        n.route.id,
        `${e} can only be used on routes that contain a unique "id"`
      ),
      n.route.id
    );
  }
  function fe() {
    let e = r.useContext(X),
      t = ce("useRouteError"),
      n = de("useRouteError");
    return void 0 !== e ? e : t.errors?.[n];
  }
  var he = {};
  function pe(e, t, n) {
    t || he[e] || ((he[e] = !0), l(!1, n));
  }
  r.memo(function (e) {
    let { routes: t, future: n, state: r } = e;
    return ne(t, void 0, r, n);
  });
  function me(e) {
    s(
      !1,
      "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
    );
  }
  function ge(e) {
    let {
      basename: t = "/",
      children: n = null,
      location: i,
      navigationType: o = "POP",
      navigator: a,
      static: u = !1,
    } = e;
    s(
      !Q(),
      "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
    );
    let c = t.replace(/^\/*/, "/"),
      d = r.useMemo(
        () => ({ basename: c, navigator: a, static: u, future: {} }),
        [c, a, u]
      );
    "string" === typeof i && (i = f(i));
    let {
        pathname: h = "/",
        search: p = "",
        hash: m = "",
        state: g = null,
        key: v = "default",
      } = i,
      y = r.useMemo(() => {
        let e = R(h, c);
        return null == e
          ? null
          : {
              location: { pathname: e, search: p, hash: m, state: g, key: v },
              navigationType: o,
            };
      }, [c, h, p, m, g, v, o]);
    return (
      l(
        null != y,
        `<Router basename="${c}"> is not able to match the URL "${h}${p}${m}" because it does not start with the basename, so the <Router> won't render anything.`
      ),
      null == y
        ? null
        : r.createElement(
            Y.Provider,
            { value: d },
            r.createElement(q.Provider, { children: n, value: y })
          )
    );
  }
  function ve(e) {
    let { children: t, location: n } = e;
    return ne(ye(t), n);
  }
  r.Component;
  function ye(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
      n = [];
    return (
      r.Children.forEach(e, (e, i) => {
        if (!r.isValidElement(e)) return;
        let o = [...t, i];
        if (e.type === r.Fragment)
          return void n.push.apply(n, ye(e.props.children, o));
        s(
          e.type === me,
          `[${
            "string" === typeof e.type ? e.type : e.type.name
          }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
        ),
          s(
            !e.props.index || !e.props.children,
            "An index route cannot have child routes."
          );
        let a = {
          id: e.props.id || o.join("-"),
          caseSensitive: e.props.caseSensitive,
          element: e.props.element,
          Component: e.props.Component,
          index: e.props.index,
          path: e.props.path,
          loader: e.props.loader,
          action: e.props.action,
          hydrateFallbackElement: e.props.hydrateFallbackElement,
          HydrateFallback: e.props.HydrateFallback,
          errorElement: e.props.errorElement,
          ErrorBoundary: e.props.ErrorBoundary,
          hasErrorBoundary:
            !0 === e.props.hasErrorBoundary ||
            null != e.props.ErrorBoundary ||
            null != e.props.errorElement,
          shouldRevalidate: e.props.shouldRevalidate,
          handle: e.props.handle,
          lazy: e.props.lazy,
        };
        e.props.children && (a.children = ye(e.props.children, o)), n.push(a);
      }),
      n
    );
  }
  var be = "get",
    we = "application/x-www-form-urlencoded";
  function xe(e) {
    return null != e && "string" === typeof e.tagName;
  }
  var Se = null;
  var ke = new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain",
  ]);
  function Ee(e) {
    return null == e || ke.has(e)
      ? e
      : (l(
          !1,
          `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${we}"`
        ),
        null);
  }
  function Ce(e, t) {
    let n, r, i, o, a;
    if (xe((s = e)) && "form" === s.tagName.toLowerCase()) {
      let a = e.getAttribute("action");
      (r = a ? R(a, t) : null),
        (n = e.getAttribute("method") || be),
        (i = Ee(e.getAttribute("enctype")) || we),
        (o = new FormData(e));
    } else if (
      (function (e) {
        return xe(e) && "button" === e.tagName.toLowerCase();
      })(e) ||
      ((function (e) {
        return xe(e) && "input" === e.tagName.toLowerCase();
      })(e) &&
        ("submit" === e.type || "image" === e.type))
    ) {
      let a = e.form;
      if (null == a)
        throw new Error(
          'Cannot submit a <button> or <input type="submit"> without a <form>'
        );
      let s = e.getAttribute("formaction") || a.getAttribute("action");
      if (
        ((r = s ? R(s, t) : null),
        (n = e.getAttribute("formmethod") || a.getAttribute("method") || be),
        (i =
          Ee(e.getAttribute("formenctype")) ||
          Ee(a.getAttribute("enctype")) ||
          we),
        (o = new FormData(a, e)),
        !(function () {
          if (null === Se)
            try {
              new FormData(document.createElement("form"), 0), (Se = !1);
            } catch (e) {
              Se = !0;
            }
          return Se;
        })())
      ) {
        let { name: t, type: n, value: r } = e;
        if ("image" === n) {
          let e = t ? `${t}.` : "";
          o.append(`${e}x`, "0"), o.append(`${e}y`, "0");
        } else t && o.append(t, r);
      }
    } else {
      if (xe(e))
        throw new Error(
          'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
        );
      (n = be), (r = null), (i = we), (a = e);
    }
    var s;
    return (
      o && "text/plain" === i && ((a = o), (o = void 0)),
      { action: r, method: n.toLowerCase(), encType: i, formData: o, body: a }
    );
  }
  function Pe(e, t) {
    if (!1 === e || null === e || "undefined" === typeof e) throw new Error(t);
  }
  async function Te(e, t) {
    if (e.id in t) return t[e.id];
    try {
      let n = await import(e.module);
      return (t[e.id] = n), n;
    } catch (n) {
      return (
        console.error(
          `Error loading route module \`${e.module}\`, reloading page...`
        ),
        console.error(n),
        window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
        window.location.reload(),
        new Promise(() => {})
      );
    }
  }
  function Ae(e) {
    return null != e && "string" === typeof e.page;
  }
  function Re(e) {
    return (
      null != e &&
      (null == e.href
        ? "preload" === e.rel &&
          "string" === typeof e.imageSrcSet &&
          "string" === typeof e.imageSizes
        : "string" === typeof e.rel && "string" === typeof e.href)
    );
  }
  function Le(e, t, n, r, i, o) {
    let a = (e, t) => !n[t] || e.route.id !== n[t].route.id,
      s = (e, t) =>
        n[t].pathname !== e.pathname ||
        (n[t].route.path?.endsWith("*") && n[t].params["*"] !== e.params["*"]);
    return "assets" === o
      ? t.filter((e, t) => a(e, t) || s(e, t))
      : "data" === o
      ? t.filter((t, o) => {
          let l = r.routes[t.route.id];
          if (!l || !l.hasLoader) return !1;
          if (a(t, o) || s(t, o)) return !0;
          if (t.route.shouldRevalidate) {
            let r = t.route.shouldRevalidate({
              currentUrl: new URL(
                i.pathname + i.search + i.hash,
                window.origin
              ),
              currentParams: n[0]?.params || {},
              nextUrl: new URL(e, window.origin),
              nextParams: t.params,
              defaultShouldRevalidate: !0,
            });
            if ("boolean" === typeof r) return r;
          }
          return !0;
        })
      : [];
  }
  function je(e) {
    return [...new Set(e)];
  }
  function ze(e, t) {
    let n = new Set(),
      r = new Set(t);
    return e.reduce((e, i) => {
      if (t && !Ae(i) && "script" === i.as && i.href && r.has(i.href)) return e;
      let o = JSON.stringify(
        (function (e) {
          let t = {},
            n = Object.keys(e).sort();
          for (let r of n) t[r] = e[r];
          return t;
        })(i)
      );
      return n.has(o) || (n.add(o), e.push({ key: o, link: i })), e;
    }, []);
  }
  function De(e) {
    return { __html: e };
  }
  Symbol("SingleFetchRedirect");
  function Me(e) {
    let t =
      "string" === typeof e
        ? new URL(
            e,
            "undefined" === typeof window
              ? "server://singlefetch/"
              : window.location.origin
          )
        : e;
    return (
      "/" === t.pathname
        ? (t.pathname = "_root.data")
        : (t.pathname = `${t.pathname.replace(/\/$/, "")}.data`),
      t
    );
  }
  r.Component;
  function Oe(e) {
    let { error: t, isOutsideRemixApp: n } = e;
    console.error(t);
    let i,
      o = r.createElement("script", {
        dangerouslySetInnerHTML: {
          __html:
            '\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."\n        );\n      ',
        },
      });
    if (F(t))
      return r.createElement(
        Ne,
        { title: "Unhandled Thrown Response!" },
        r.createElement(
          "h1",
          { style: { fontSize: "24px" } },
          t.status,
          " ",
          t.statusText
        ),
        o
      );
    if (t instanceof Error) i = t;
    else {
      let e =
        null == t
          ? "Unknown Error"
          : "object" === typeof t && "toString" in t
          ? t.toString()
          : JSON.stringify(t);
      i = new Error(e);
    }
    return r.createElement(
      Ne,
      { title: "Application Error!", isOutsideRemixApp: n },
      r.createElement(
        "h1",
        { style: { fontSize: "24px" } },
        "Application Error"
      ),
      r.createElement(
        "pre",
        {
          style: {
            padding: "2rem",
            background: "hsla(10, 50%, 50%, 0.1)",
            color: "red",
            overflow: "auto",
          },
        },
        i.stack
      ),
      o
    );
  }
  function Ne(e) {
    let { title: t, renderScripts: n, isOutsideRemixApp: i, children: o } = e,
      { routeModules: a } = Be();
    return a.root?.Layout && !i
      ? o
      : r.createElement(
          "html",
          { lang: "en" },
          r.createElement(
            "head",
            null,
            r.createElement("meta", { charSet: "utf-8" }),
            r.createElement("meta", {
              name: "viewport",
              content: "width=device-width,initial-scale=1,viewport-fit=cover",
            }),
            r.createElement("title", null, t)
          ),
          r.createElement(
            "body",
            null,
            r.createElement(
              "main",
              {
                style: { fontFamily: "system-ui, sans-serif", padding: "2rem" },
              },
              o,
              n ? r.createElement(Ke, null) : null
            )
          )
        );
  }
  function _e(e) {
    return !e;
  }
  function Fe() {
    let e = r.useContext(B);
    return (
      Pe(
        e,
        "You must render this element inside a <DataRouterContext.Provider> element"
      ),
      e
    );
  }
  function Ie() {
    let e = r.useContext($);
    return (
      Pe(
        e,
        "You must render this element inside a <DataRouterStateContext.Provider> element"
      ),
      e
    );
  }
  var Ve = r.createContext(void 0);
  function Be() {
    let e = r.useContext(Ve);
    return (
      Pe(e, "You must render this element inside a <HydratedRouter> element"), e
    );
  }
  function $e(e, t) {
    return (n) => {
      e && e(n), n.defaultPrevented || t(n);
    };
  }
  function Ue(e, t, n) {
    if (n && !qe) return [e[0]];
    if (t) {
      let n = e.findIndex((e) => void 0 !== t[e.route.id]);
      return e.slice(0, n + 1);
    }
    return e;
  }
  function We(e) {
    let { page: t, ...n } = e,
      { router: i } = Fe(),
      o = r.useMemo(
        () => p(i.routes, t, i.basename),
        [i.routes, t, i.basename]
      );
    return o ? r.createElement(Ye, { page: t, matches: o, ...n }) : null;
  }
  function He(e) {
    let { manifest: t, routeModules: n } = Be(),
      [i, o] = r.useState([]);
    return (
      r.useEffect(() => {
        let r = !1;
        return (
          (async function (e, t, n) {
            return ze(
              (
                await Promise.all(
                  e.map(async (e) => {
                    let r = t.routes[e.route.id];
                    if (r) {
                      let e = await Te(r, n);
                      return e.links ? e.links() : [];
                    }
                    return [];
                  })
                )
              )
                .flat(1)
                .filter(Re)
                .filter((e) => "stylesheet" === e.rel || "preload" === e.rel)
                .map((e) =>
                  "stylesheet" === e.rel
                    ? { ...e, rel: "prefetch", as: "style" }
                    : { ...e, rel: "prefetch" }
                )
            );
          })(e, t, n).then((e) => {
            r || o(e);
          }),
          () => {
            r = !0;
          }
        );
      }, [e, t, n]),
      i
    );
  }
  function Ye(e) {
    let { page: t, matches: n, ...i } = e,
      o = G(),
      { manifest: a, routeModules: s } = Be(),
      { loaderData: l, matches: u } = Ie(),
      c = r.useMemo(() => Le(t, n, u, a, o, "data"), [t, n, u, a, o]),
      d = r.useMemo(() => Le(t, n, u, a, o, "assets"), [t, n, u, a, o]),
      f = r.useMemo(() => {
        if (t === o.pathname + o.search + o.hash) return [];
        let e = new Set(),
          r = !1;
        if (
          (n.forEach((t) => {
            let n = a.routes[t.route.id];
            n &&
              n.hasLoader &&
              ((!c.some((e) => e.route.id === t.route.id) &&
                t.route.id in l &&
                s[t.route.id]?.shouldRevalidate) ||
              n.hasClientLoader
                ? (r = !0)
                : e.add(t.route.id));
          }),
          0 === e.size)
        )
          return [];
        let i = Me(t);
        return (
          r &&
            e.size > 0 &&
            i.searchParams.set(
              "_routes",
              n
                .filter((t) => e.has(t.route.id))
                .map((e) => e.route.id)
                .join(",")
            ),
          [i.pathname + i.search]
        );
      }, [l, o, a, c, n, t, s]),
      h = r.useMemo(
        () =>
          (function (e, t) {
            return je(
              e
                .map((e) => {
                  let n = t.routes[e.route.id];
                  if (!n) return [];
                  let r = [n.module];
                  return n.imports && (r = r.concat(n.imports)), r;
                })
                .flat(1)
            );
          })(d, a),
        [d, a]
      ),
      p = He(d);
    return r.createElement(
      r.Fragment,
      null,
      f.map((e) =>
        r.createElement("link", {
          key: e,
          rel: "prefetch",
          as: "fetch",
          href: e,
          ...i,
        })
      ),
      h.map((e) =>
        r.createElement("link", { key: e, rel: "modulepreload", href: e, ...i })
      ),
      p.map((e) => {
        let { key: t, link: n } = e;
        return r.createElement("link", { key: t, ...n });
      })
    );
  }
  Ve.displayName = "FrameworkContext";
  var qe = !1;
  function Ke(e) {
    let {
        manifest: t,
        serverHandoffString: n,
        isSpaMode: i,
        renderMeta: o,
      } = Be(),
      { router: a, static: s, staticContext: l } = Fe(),
      { matches: u } = Ie(),
      c = _e(i);
    o && (o.didRenderScripts = !0);
    let d = Ue(u, null, i);
    r.useEffect(() => {
      qe = !0;
    }, []);
    let f = r.useMemo(() => {
        let i = l
            ? `window.__reactRouterContext = ${n};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`
            : " ",
          o = s
            ? `${
                t.hmr?.runtime ? `import ${JSON.stringify(t.hmr.runtime)};` : ""
              }${c ? "" : `import ${JSON.stringify(t.url)}`};\n${d
                .map(
                  (e, n) =>
                    `import * as route${n} from ${JSON.stringify(
                      t.routes[e.route.id].module
                    )};`
                )
                .join("\n")}\n  ${
                c
                  ? `window.__reactRouterManifest = ${JSON.stringify(
                      (function (e, t) {
                        let n = new Set(t.state.matches.map((e) => e.route.id)),
                          r = t.state.location.pathname
                            .split("/")
                            .filter(Boolean),
                          i = ["/"];
                        for (r.pop(); r.length > 0; )
                          i.push(`/${r.join("/")}`), r.pop();
                        i.forEach((e) => {
                          let r = p(t.routes, e, t.basename);
                          r && r.forEach((e) => n.add(e.route.id));
                        });
                        let o = [...n].reduce(
                          (t, n) => Object.assign(t, { [n]: e.routes[n] }),
                          {}
                        );
                        return { ...e, routes: o };
                      })(t, a),
                      null,
                      2
                    )};`
                  : ""
              }\n  window.__reactRouterRouteModules = {${d
                .map((e, t) => `${JSON.stringify(e.route.id)}:route${t}`)
                .join(",")}};\n\nimport(${JSON.stringify(t.entry.module)});`
            : " ";
        return r.createElement(
          r.Fragment,
          null,
          r.createElement("script", {
            ...e,
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: De(i),
            type: void 0,
          }),
          r.createElement("script", {
            ...e,
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: De(o),
            type: "module",
            async: !0,
          })
        );
      }, []),
      h = d
        .map((e) => {
          let n = t.routes[e.route.id];
          return n ? (n.imports || []).concat([n.module]) : [];
        })
        .flat(1),
      m = qe ? [] : t.entry.imports.concat(h);
    return qe
      ? null
      : r.createElement(
          r.Fragment,
          null,
          c
            ? null
            : r.createElement("link", {
                rel: "modulepreload",
                href: t.url,
                crossOrigin: e.crossOrigin,
              }),
          r.createElement("link", {
            rel: "modulepreload",
            href: t.entry.module,
            crossOrigin: e.crossOrigin,
          }),
          ((g = m), [...new Set(g)]).map((t) =>
            r.createElement("link", {
              key: t,
              rel: "modulepreload",
              href: t,
              crossOrigin: e.crossOrigin,
            })
          ),
          f
        );
    var g;
  }
  function Xe() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return (e) => {
      t.forEach((t) => {
        "function" === typeof t ? t(e) : null != t && (t.current = e);
      });
    };
  }
  var Qe =
    "undefined" !== typeof window &&
    "undefined" !== typeof window.document &&
    "undefined" !== typeof window.document.createElement;
  try {
    Qe && (window.__reactRouterVersion = "7.1.5");
  } catch (vu) {}
  function Ge(e) {
    let { basename: t, children: n, window: i } = e,
      o = r.useRef();
    null == o.current && (o.current = a({ window: i, v5Compat: !0 }));
    let s = o.current,
      [l, u] = r.useState({ action: s.action, location: s.location }),
      c = r.useCallback(
        (e) => {
          r.startTransition(() => u(e));
        },
        [u]
      );
    return (
      r.useLayoutEffect(() => s.listen(c), [s, c]),
      r.createElement(ge, {
        basename: t,
        children: n,
        location: l.location,
        navigationType: l.action,
        navigator: s,
      })
    );
  }
  var Ze = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    Je = r.forwardRef(function (e, t) {
      let n,
        {
          onClick: i,
          discover: o = "render",
          prefetch: a = "none",
          relative: u,
          reloadDocument: c,
          replace: f,
          state: h,
          target: p,
          to: m,
          preventScrollReset: g,
          viewTransition: v,
          ...y
        } = e,
        { basename: b } = r.useContext(Y),
        w = "string" === typeof m && Ze.test(m),
        x = !1;
      if ("string" === typeof m && w && ((n = m), Qe))
        try {
          let e = new URL(window.location.href),
            t = m.startsWith("//") ? new URL(e.protocol + m) : new URL(m),
            n = R(t.pathname, b);
          t.origin === e.origin && null != n
            ? (m = n + t.search + t.hash)
            : (x = !0);
        } catch (vu) {
          l(
            !1,
            `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
          );
        }
      let S = (function (e) {
          let { relative: t } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          s(
            Q(),
            "useHref() may be used only in the context of a <Router> component."
          );
          let { basename: n, navigator: i } = r.useContext(Y),
            { hash: o, pathname: a, search: l } = te(e, { relative: t }),
            u = a;
          return (
            "/" !== n && (u = "/" === a ? n : M([n, a])),
            i.createHref({ pathname: u, search: l, hash: o })
          );
        })(m, { relative: u }),
        [k, E, C] = (function (e, t) {
          let n = r.useContext(Ve),
            [i, o] = r.useState(!1),
            [a, s] = r.useState(!1),
            {
              onFocus: l,
              onBlur: u,
              onMouseEnter: c,
              onMouseLeave: d,
              onTouchStart: f,
            } = t,
            h = r.useRef(null);
          r.useEffect(() => {
            if (("render" === e && s(!0), "viewport" === e)) {
              let e = new IntersectionObserver(
                (e) => {
                  e.forEach((e) => {
                    s(e.isIntersecting);
                  });
                },
                { threshold: 0.5 }
              );
              return (
                h.current && e.observe(h.current),
                () => {
                  e.disconnect();
                }
              );
            }
          }, [e]),
            r.useEffect(() => {
              if (i) {
                let e = setTimeout(() => {
                  s(!0);
                }, 100);
                return () => {
                  clearTimeout(e);
                };
              }
            }, [i]);
          let p = () => {
              o(!0);
            },
            m = () => {
              o(!1), s(!1);
            };
          return n
            ? "intent" !== e
              ? [a, h, {}]
              : [
                  a,
                  h,
                  {
                    onFocus: $e(l, p),
                    onBlur: $e(u, m),
                    onMouseEnter: $e(c, p),
                    onMouseLeave: $e(d, m),
                    onTouchStart: $e(f, p),
                  },
                ]
            : [!1, h, {}];
        })(a, y),
        P = (function (e) {
          let {
              target: t,
              replace: n,
              state: i,
              preventScrollReset: o,
              relative: a,
              viewTransition: s,
            } = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {},
            l = ee(),
            u = G(),
            c = te(e, { relative: a });
          return r.useCallback(
            (r) => {
              if (
                (function (e, t) {
                  return (
                    0 === e.button &&
                    (!t || "_self" === t) &&
                    !(function (e) {
                      return !!(
                        e.metaKey ||
                        e.altKey ||
                        e.ctrlKey ||
                        e.shiftKey
                      );
                    })(e)
                  );
                })(r, t)
              ) {
                r.preventDefault();
                let t = void 0 !== n ? n : d(u) === d(c);
                l(e, {
                  replace: t,
                  state: i,
                  preventScrollReset: o,
                  relative: a,
                  viewTransition: s,
                });
              }
            },
            [u, l, c, n, i, t, e, o, a, s]
          );
        })(m, {
          replace: f,
          state: h,
          target: p,
          preventScrollReset: g,
          relative: u,
          viewTransition: v,
        });
      let T = r.createElement("a", {
        ...y,
        ...C,
        href: n || S,
        onClick:
          x || c
            ? i
            : function (e) {
                i && i(e), e.defaultPrevented || P(e);
              },
        ref: Xe(t, E),
        target: p,
        "data-discover": w || "render" !== o ? void 0 : "true",
      });
      return k && !w
        ? r.createElement(r.Fragment, null, T, r.createElement(We, { page: S }))
        : T;
    });
  Je.displayName = "Link";
  var et = r.forwardRef(function (e, t) {
    let {
        "aria-current": n = "page",
        caseSensitive: i = !1,
        className: o = "",
        end: a = !1,
        style: l,
        to: u,
        viewTransition: c,
        children: d,
        ...f
      } = e,
      h = te(u, { relative: f.relative }),
      p = G(),
      m = r.useContext($),
      { navigator: g, basename: v } = r.useContext(Y),
      y =
        null != m &&
        (function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = r.useContext(U);
          s(
            null != n,
            "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
          );
          let { basename: i } = rt("useViewTransitionState"),
            o = te(e, { relative: t.relative });
          if (!n.isTransitioning) return !1;
          let a =
              R(n.currentLocation.pathname, i) || n.currentLocation.pathname,
            l = R(n.nextLocation.pathname, i) || n.nextLocation.pathname;
          return null != T(o.pathname, l) || null != T(o.pathname, a);
        })(h) &&
        !0 === c,
      b = g.encodeLocation ? g.encodeLocation(h).pathname : h.pathname,
      w = p.pathname,
      x =
        m && m.navigation && m.navigation.location
          ? m.navigation.location.pathname
          : null;
    i ||
      ((w = w.toLowerCase()),
      (x = x ? x.toLowerCase() : null),
      (b = b.toLowerCase())),
      x && v && (x = R(x, v) || x);
    const S = "/" !== b && b.endsWith("/") ? b.length - 1 : b.length;
    let k,
      E = w === b || (!a && w.startsWith(b) && "/" === w.charAt(S)),
      C =
        null != x &&
        (x === b || (!a && x.startsWith(b) && "/" === x.charAt(b.length))),
      P = { isActive: E, isPending: C, isTransitioning: y },
      A = E ? n : void 0;
    k =
      "function" === typeof o
        ? o(P)
        : [
            o,
            E ? "active" : null,
            C ? "pending" : null,
            y ? "transitioning" : null,
          ]
            .filter(Boolean)
            .join(" ");
    let L = "function" === typeof l ? l(P) : l;
    return r.createElement(
      Je,
      {
        ...f,
        "aria-current": A,
        className: k,
        ref: t,
        style: L,
        to: u,
        viewTransition: c,
      },
      "function" === typeof d ? d(P) : d
    );
  });
  et.displayName = "NavLink";
  var tt = r.forwardRef((e, t) => {
    let {
        discover: n = "render",
        fetcherKey: i,
        navigate: o,
        reloadDocument: a,
        replace: l,
        state: u,
        method: c = be,
        action: f,
        onSubmit: h,
        relative: p,
        preventScrollReset: m,
        viewTransition: g,
        ...v
      } = e,
      y = at(),
      b = (function (e) {
        let { relative: t } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { basename: n } = r.useContext(Y),
          i = r.useContext(K);
        s(i, "useFormAction must be used inside a RouteContext");
        let [o] = i.matches.slice(-1),
          a = { ...te(e || ".", { relative: t }) },
          l = G();
        if (null == e) {
          a.search = l.search;
          let e = new URLSearchParams(a.search),
            t = e.getAll("index");
          if (t.some((e) => "" === e)) {
            e.delete("index"),
              t.filter((e) => e).forEach((t) => e.append("index", t));
            let n = e.toString();
            a.search = n ? `?${n}` : "";
          }
        }
        (e && "." !== e) ||
          !o.route.index ||
          (a.search = a.search ? a.search.replace(/^\?/, "?index&") : "?index");
        "/" !== n && (a.pathname = "/" === a.pathname ? n : M([n, a.pathname]));
        return d(a);
      })(f, { relative: p }),
      w = "get" === c.toLowerCase() ? "get" : "post",
      x = "string" === typeof f && Ze.test(f);
    return r.createElement("form", {
      ref: t,
      method: w,
      action: b,
      onSubmit: a
        ? h
        : (e) => {
            if ((h && h(e), e.defaultPrevented)) return;
            e.preventDefault();
            let t = e.nativeEvent.submitter,
              n = t?.getAttribute("formmethod") || c;
            y(t || e.currentTarget, {
              fetcherKey: i,
              method: n,
              navigate: o,
              replace: l,
              state: u,
              relative: p,
              preventScrollReset: m,
              viewTransition: g,
            });
          },
      ...v,
      "data-discover": x || "render" !== n ? void 0 : "true",
    });
  });
  function nt(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function rt(e) {
    let t = r.useContext(B);
    return s(t, nt(e)), t;
  }
  tt.displayName = "Form";
  var it = 0,
    ot = () => `__${String(++it)}__`;
  function at() {
    let { router: e } = rt("useSubmit"),
      { basename: t } = r.useContext(Y),
      n = de("useRouteId");
    return r.useCallback(
      async function (r) {
        let i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { action: o, method: a, encType: s, formData: l, body: u } = Ce(r, t);
        if (!1 === i.navigate) {
          let t = i.fetcherKey || ot();
          await e.fetch(t, n, i.action || o, {
            preventScrollReset: i.preventScrollReset,
            formData: l,
            body: u,
            formMethod: i.method || a,
            formEncType: i.encType || s,
            flushSync: i.flushSync,
          });
        } else
          await e.navigate(i.action || o, {
            preventScrollReset: i.preventScrollReset,
            formData: l,
            body: u,
            formMethod: i.method || a,
            formEncType: i.encType || s,
            replace: i.replace,
            state: i.state,
            fromRouteId: n,
            flushSync: i.flushSync,
            viewTransition: i.viewTransition,
          });
      },
      [e, t, n]
    );
  }
  new TextEncoder();
  const st = !1,
    lt = !1,
    ut = (e) => e,
    ct = [
      "read",
      "resolveKeyframes",
      "update",
      "preRender",
      "render",
      "postRender",
    ],
    dt = { value: null, addProjectionMetrics: null };
  function ft(e, t) {
    let n = !1,
      r = !0;
    const i = { delta: 0, timestamp: 0, isProcessing: !1 },
      o = () => (n = !0),
      a = ct.reduce(
        (e, n) => (
          (e[n] = (function (e, t) {
            let n = new Set(),
              r = new Set(),
              i = !1,
              o = !1;
            const a = new WeakSet();
            let s = { delta: 0, timestamp: 0, isProcessing: !1 },
              l = 0;
            function u(t) {
              a.has(t) && (c.schedule(t), e()), l++, t(s);
            }
            const c = {
              schedule: function (e) {
                const t =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2] &&
                  i
                    ? n
                    : r;
                return (
                  arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1] &&
                    a.add(e),
                  t.has(e) || t.add(e),
                  e
                );
              },
              cancel: (e) => {
                r.delete(e), a.delete(e);
              },
              process: (e) => {
                (s = e),
                  i
                    ? (o = !0)
                    : ((i = !0),
                      ([n, r] = [r, n]),
                      n.forEach(u),
                      t && dt.value && dt.value.frameloop[t].push(l),
                      (l = 0),
                      n.clear(),
                      (i = !1),
                      o && ((o = !1), c.process(e)));
              },
            };
            return c;
          })(o, t ? n : void 0)),
          e
        ),
        {}
      ),
      {
        read: s,
        resolveKeyframes: l,
        update: u,
        preRender: c,
        render: d,
        postRender: f,
      } = a,
      h = () => {
        const o = lt ? i.timestamp : performance.now();
        (n = !1),
          lt ||
            (i.delta = r
              ? 1e3 / 60
              : Math.max(Math.min(o - i.timestamp, 40), 1)),
          (i.timestamp = o),
          (i.isProcessing = !0),
          s.process(i),
          l.process(i),
          u.process(i),
          c.process(i),
          d.process(i),
          f.process(i),
          (i.isProcessing = !1),
          n && t && ((r = !1), e(h));
      },
      p = ct.reduce((t, o) => {
        const s = a[o];
        return (
          (t[o] = function (t) {
            let o =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              a =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return (
              n || ((n = !0), (r = !0), i.isProcessing || e(h)),
              s.schedule(t, o, a)
            );
          }),
          t
        );
      }, {});
    return {
      schedule: p,
      cancel: (e) => {
        for (let t = 0; t < ct.length; t++) a[ct[t]].cancel(e);
      },
      state: i,
      steps: a,
    };
  }
  const {
    schedule: ht,
    cancel: pt,
    state: mt,
    steps: gt,
  } = ft(
    "undefined" !== typeof requestAnimationFrame ? requestAnimationFrame : ut,
    !0
  );
  let vt;
  function yt() {
    vt = void 0;
  }
  const bt = {
    now: () => (
      void 0 === vt &&
        bt.set(mt.isProcessing || lt ? mt.timestamp : performance.now()),
      vt
    ),
    set: (e) => {
      (vt = e), queueMicrotask(yt);
    },
  };
  function wt(e, t) {
    -1 === e.indexOf(t) && e.push(t);
  }
  function xt(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  }
  class St {
    constructor() {
      this.subscriptions = [];
    }
    add(e) {
      return wt(this.subscriptions, e), () => xt(this.subscriptions, e);
    }
    notify(e, t, n) {
      const r = this.subscriptions.length;
      if (r)
        if (1 === r) this.subscriptions[0](e, t, n);
        else
          for (let i = 0; i < r; i++) {
            const r = this.subscriptions[i];
            r && r(e, t, n);
          }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  }
  function kt(e, t) {
    return t ? e * (1e3 / t) : 0;
  }
  const Et = { current: void 0 };
  class Ct {
    constructor(e) {
      var t = this;
      let n =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      (this.version = "12.4.3"),
        (this.canTrackVelocity = null),
        (this.events = {}),
        (this.updateAndNotify = function (e) {
          let n =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          const r = bt.now();
          t.updatedAt !== r && t.setPrevFrameValue(),
            (t.prev = t.current),
            t.setCurrent(e),
            t.current !== t.prev &&
              t.events.change &&
              t.events.change.notify(t.current),
            n &&
              t.events.renderRequest &&
              t.events.renderRequest.notify(t.current);
        }),
        (this.hasAnimated = !1),
        this.setCurrent(e),
        (this.owner = n.owner);
    }
    setCurrent(e) {
      var t;
      (this.current = e),
        (this.updatedAt = bt.now()),
        null === this.canTrackVelocity &&
          void 0 !== e &&
          (this.canTrackVelocity = ((t = this.current), !isNaN(parseFloat(t))));
    }
    setPrevFrameValue() {
      let e =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : this.current;
      (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt);
    }
    onChange(e) {
      return this.on("change", e);
    }
    on(e, t) {
      this.events[e] || (this.events[e] = new St());
      const n = this.events[e].add(t);
      return "change" === e
        ? () => {
            n(),
              ht.read(() => {
                this.events.change.getSize() || this.stop();
              });
          }
        : n;
    }
    clearListeners() {
      for (const e in this.events) this.events[e].clear();
    }
    attach(e, t) {
      (this.passiveEffect = e), (this.stopPassiveEffect = t);
    }
    set(e) {
      let t =
        !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      t && this.passiveEffect
        ? this.passiveEffect(e, this.updateAndNotify)
        : this.updateAndNotify(e, t);
    }
    setWithVelocity(e, t, n) {
      this.set(t),
        (this.prev = void 0),
        (this.prevFrameValue = e),
        (this.prevUpdatedAt = this.updatedAt - n);
    }
    jump(e) {
      let t =
        !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      this.updateAndNotify(e),
        (this.prev = e),
        (this.prevUpdatedAt = this.prevFrameValue = void 0),
        t && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect();
    }
    get() {
      return Et.current && Et.current.push(this), this.current;
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      const e = bt.now();
      if (
        !this.canTrackVelocity ||
        void 0 === this.prevFrameValue ||
        e - this.updatedAt > 30
      )
        return 0;
      const t = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
      return kt(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
    }
    start(e) {
      return (
        this.stop(),
        new Promise((t) => {
          (this.hasAnimated = !0),
            (this.animation = e(t)),
            this.events.animationStart && this.events.animationStart.notify();
        }).then(() => {
          this.events.animationComplete &&
            this.events.animationComplete.notify(),
            this.clearAnimation();
        })
      );
    }
    stop() {
      this.animation &&
        (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation();
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect();
    }
  }
  function Pt(e, t) {
    return new Ct(e, t);
  }
  const Tt = (0, r.createContext)({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
  function At(e) {
    const t = (0, r.useRef)(null);
    return null === t.current && (t.current = e()), t.current;
  }
  function Rt(e) {
    const t = At(() => Pt(e)),
      { isStatic: n } = (0, r.useContext)(Tt);
    if (n) {
      const [, n] = (0, r.useState)(e);
      (0, r.useEffect)(() => t.on("change", n), []);
    }
    return t;
  }
  function Lt(e) {
    if ("undefined" === typeof Proxy) return e;
    const t = new Map();
    return new Proxy(
      function () {
        return e(...arguments);
      },
      {
        get: (n, r) =>
          "create" === r ? e : (t.has(r) || t.set(r, e(r)), t.get(r)),
      }
    );
  }
  function jt(e) {
    return null !== e && "object" === typeof e && "function" === typeof e.start;
  }
  function zt(e) {
    const t = [{}, {}];
    return (
      null === e ||
        void 0 === e ||
        e.values.forEach((e, n) => {
          (t[0][n] = e.get()), (t[1][n] = e.getVelocity());
        }),
      t
    );
  }
  function Dt(e, t, n, r) {
    if ("function" === typeof t) {
      const [i, o] = zt(r);
      t = t(void 0 !== n ? n : e.custom, i, o);
    }
    if (
      ("string" === typeof t && (t = e.variants && e.variants[t]),
      "function" === typeof t)
    ) {
      const [i, o] = zt(r);
      t = t(void 0 !== n ? n : e.custom, i, o);
    }
    return t;
  }
  function Mt(e, t, n) {
    const r = e.getProps();
    return Dt(r, t, void 0 !== n ? n : r.custom, e);
  }
  function Ot(e) {
    let t;
    return () => (void 0 === t && (t = e()), t);
  }
  const Nt = Ot(() => void 0 !== window.ScrollTimeline);
  class _t {
    constructor(e) {
      (this.stop = () => this.runAll("stop")),
        (this.animations = e.filter(Boolean));
    }
    get finished() {
      return Promise.all(
        this.animations.map((e) => ("finished" in e ? e.finished : e))
      );
    }
    getAll(e) {
      return this.animations[0][e];
    }
    setAll(e, t) {
      for (let n = 0; n < this.animations.length; n++)
        this.animations[n][e] = t;
    }
    attachTimeline(e, t) {
      const n = this.animations.map((n) =>
        Nt() && n.attachTimeline
          ? n.attachTimeline(e)
          : "function" === typeof t
          ? t(n)
          : void 0
      );
      return () => {
        n.forEach((e, t) => {
          e && e(), this.animations[t].stop();
        });
      };
    }
    get time() {
      return this.getAll("time");
    }
    set time(e) {
      this.setAll("time", e);
    }
    get speed() {
      return this.getAll("speed");
    }
    set speed(e) {
      this.setAll("speed", e);
    }
    get startTime() {
      return this.getAll("startTime");
    }
    get duration() {
      let e = 0;
      for (let t = 0; t < this.animations.length; t++)
        e = Math.max(e, this.animations[t].duration);
      return e;
    }
    runAll(e) {
      this.animations.forEach((t) => t[e]());
    }
    flatten() {
      this.runAll("flatten");
    }
    play() {
      this.runAll("play");
    }
    pause() {
      this.runAll("pause");
    }
    cancel() {
      this.runAll("cancel");
    }
    complete() {
      this.runAll("complete");
    }
  }
  class Ft extends _t {
    then(e, t) {
      return Promise.all(this.animations).then(e).catch(t);
    }
  }
  function It(e, t) {
    return e ? e[t] || e.default || e : void 0;
  }
  const Vt = 2e4;
  function Bt(e) {
    let t = 0;
    let n = e.next(t);
    for (; !n.done && t < Vt; ) (t += 50), (n = e.next(t));
    return t >= Vt ? 1 / 0 : t;
  }
  function $t(e) {
    return "function" === typeof e;
  }
  function Ut(e, t) {
    (e.timeline = t), (e.onfinish = null);
  }
  const Wt = (e) => Array.isArray(e) && "number" === typeof e[0],
    Ht = { linearEasing: void 0 };
  function Yt(e, t) {
    const n = Ot(e);
    return () => {
      var e;
      return null !== (e = Ht[t]) && void 0 !== e ? e : n();
    };
  }
  const qt = Yt(() => {
      try {
        document
          .createElement("div")
          .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
      } catch (vu) {
        return !1;
      }
      return !0;
    }, "linearEasing"),
    Kt = (e, t, n) => {
      const r = t - e;
      return 0 === r ? 1 : (n - e) / r;
    },
    Xt = function (e, t) {
      let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
        r = "";
      const i = Math.max(Math.round(t / n), 2);
      for (let o = 0; o < i; o++) r += e(Kt(0, i - 1, o)) + ", ";
      return `linear(${r.substring(0, r.length - 2)})`;
    };
  function Qt(e) {
    return Boolean(
      ("function" === typeof e && qt()) ||
        !e ||
        ("string" === typeof e && (e in Zt || qt())) ||
        Wt(e) ||
        (Array.isArray(e) && e.every(Qt))
    );
  }
  const Gt = (e) => {
      let [t, n, r, i] = e;
      return `cubic-bezier(${t}, ${n}, ${r}, ${i})`;
    },
    Zt = {
      linear: "linear",
      ease: "ease",
      easeIn: "ease-in",
      easeOut: "ease-out",
      easeInOut: "ease-in-out",
      circIn: Gt([0, 0.65, 0.55, 1]),
      circOut: Gt([0.55, 0, 1, 0.45]),
      backIn: Gt([0.31, 0.01, 0.66, -0.59]),
      backOut: Gt([0.33, 1.53, 0.69, 0.99]),
    };
  function Jt(e, t) {
    return e
      ? "function" === typeof e && qt()
        ? Xt(e, t)
        : Wt(e)
        ? Gt(e)
        : Array.isArray(e)
        ? e.map((e) => Jt(e, t) || Zt.easeOut)
        : Zt[e]
      : void 0;
  }
  const en = { x: !1, y: !1 };
  function tn() {
    return en.x || en.y;
  }
  function nn(e, t) {
    const n = (function (e, t, n) {
        var r;
        if (e instanceof Element) return [e];
        if ("string" === typeof e) {
          let i = document;
          t && (i = t.current);
          const o =
            null !== (r = null === n || void 0 === n ? void 0 : n[e]) &&
            void 0 !== r
              ? r
              : i.querySelectorAll(e);
          return o ? Array.from(o) : [];
        }
        return Array.from(e);
      })(e),
      r = new AbortController();
    return [n, { passive: !0, ...t, signal: r.signal }, () => r.abort()];
  }
  function rn(e) {
    return !("touch" === e.pointerType || tn());
  }
  const on = (e, t) => !!t && (e === t || on(e, t.parentElement)),
    an = (e) =>
      "mouse" === e.pointerType
        ? "number" !== typeof e.button || e.button <= 0
        : !1 !== e.isPrimary,
    sn = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
  const ln = new WeakSet();
  function un(e) {
    return (t) => {
      "Enter" === t.key && e(t);
    };
  }
  function cn(e, t) {
    e.dispatchEvent(
      new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 })
    );
  }
  function dn(e) {
    return an(e) && !tn();
  }
  function fn(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    const [r, i, o] = nn(e, n),
      a = (e) => {
        const r = e.currentTarget;
        if (!dn(e) || ln.has(r)) return;
        ln.add(r);
        const o = t(r, e),
          a = (e, t) => {
            window.removeEventListener("pointerup", s),
              window.removeEventListener("pointercancel", l),
              dn(e) &&
                ln.has(r) &&
                (ln.delete(r), "function" === typeof o && o(e, { success: t }));
          },
          s = (e) => {
            a(e, n.useGlobalTarget || on(r, e.target));
          },
          l = (e) => {
            a(e, !1);
          };
        window.addEventListener("pointerup", s, i),
          window.addEventListener("pointercancel", l, i);
      };
    return (
      r.forEach((e) => {
        (function (e) {
          return sn.has(e.tagName) || -1 !== e.tabIndex;
        })(e) ||
          null !== e.getAttribute("tabindex") ||
          (e.tabIndex = 0);
        (n.useGlobalTarget ? window : e).addEventListener("pointerdown", a, i),
          e.addEventListener(
            "focus",
            (e) =>
              ((e, t) => {
                const n = e.currentTarget;
                if (!n) return;
                const r = un(() => {
                  if (ln.has(n)) return;
                  cn(n, "down");
                  const e = un(() => {
                    cn(n, "up");
                  });
                  n.addEventListener("keyup", e, t),
                    n.addEventListener("blur", () => cn(n, "cancel"), t);
                });
                n.addEventListener("keydown", r, t),
                  n.addEventListener(
                    "blur",
                    () => n.removeEventListener("keydown", r),
                    t
                  );
              })(e, i),
            i
          );
      }),
      o
    );
  }
  const hn = (e) => 1e3 * e,
    pn = (e) => e / 1e3;
  const mn = [
      "transformPerspective",
      "x",
      "y",
      "z",
      "translateX",
      "translateY",
      "translateZ",
      "scale",
      "scaleX",
      "scaleY",
      "rotate",
      "rotateX",
      "rotateY",
      "rotateZ",
      "skew",
      "skewX",
      "skewY",
    ],
    gn = new Set(mn),
    vn = new Set(["width", "height", "top", "left", "right", "bottom", ...mn]),
    yn = (e) => Array.isArray(e);
  function bn(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Pt(n));
  }
  const wn = (e) => Boolean(e && e.getVelocity);
  function xn(e, t) {
    const n = e.getValue("willChange");
    if (((r = n), Boolean(wn(r) && r.add))) return n.add(t);
    var r;
  }
  const Sn = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
    kn = "data-" + Sn("framerAppearId");
  function En(e) {
    return e.props[kn];
  }
  const Cn = !1,
    Pn = (e, t, n) =>
      (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;
  function Tn(e, t, n, r) {
    if (e === t && n === r) return ut;
    const i = (t) =>
      (function (e, t, n, r, i) {
        let o,
          a,
          s = 0;
        do {
          (a = t + (n - t) / 2),
            (o = Pn(a, r, i) - e),
            o > 0 ? (n = a) : (t = a);
        } while (Math.abs(o) > 1e-7 && ++s < 12);
        return a;
      })(t, 0, 1, e, n);
    return (e) => (0 === e || 1 === e ? e : Pn(i(e), t, r));
  }
  const An = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
    Rn = (e) => (t) => 1 - e(1 - t),
    Ln = Tn(0.33, 1.53, 0.69, 0.99),
    jn = Rn(Ln),
    zn = An(jn),
    Dn = (e) =>
      (e *= 2) < 1 ? 0.5 * jn(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
    Mn = (e) => 1 - Math.sin(Math.acos(e)),
    On = Rn(Mn),
    Nn = An(Mn),
    _n = (e) => /^0[^.\s]+$/u.test(e);
  const Fn = (e, t, n) => (n > t ? t : n < e ? e : n),
    In = {
      test: (e) => "number" === typeof e,
      parse: parseFloat,
      transform: (e) => e,
    },
    Vn = { ...In, transform: (e) => Fn(0, 1, e) },
    Bn = { ...In, default: 1 },
    $n = (e) => Math.round(1e5 * e) / 1e5,
    Un = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
  const Wn =
      /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    Hn = (e, t) => (n) =>
      Boolean(
        ("string" === typeof n && Wn.test(n) && n.startsWith(e)) ||
          (t &&
            !(function (e) {
              return null == e;
            })(n) &&
            Object.prototype.hasOwnProperty.call(n, t))
      ),
    Yn = (e, t, n) => (r) => {
      if ("string" !== typeof r) return r;
      const [i, o, a, s] = r.match(Un);
      return {
        [e]: parseFloat(i),
        [t]: parseFloat(o),
        [n]: parseFloat(a),
        alpha: void 0 !== s ? parseFloat(s) : 1,
      };
    },
    qn = { ...In, transform: (e) => Math.round(((e) => Fn(0, 255, e))(e)) },
    Kn = {
      test: Hn("rgb", "red"),
      parse: Yn("red", "green", "blue"),
      transform: (e) => {
        let { red: t, green: n, blue: r, alpha: i = 1 } = e;
        return (
          "rgba(" +
          qn.transform(t) +
          ", " +
          qn.transform(n) +
          ", " +
          qn.transform(r) +
          ", " +
          $n(Vn.transform(i)) +
          ")"
        );
      },
    };
  const Xn = {
      test: Hn("#"),
      parse: function (e) {
        let t = "",
          n = "",
          r = "",
          i = "";
        return (
          e.length > 5
            ? ((t = e.substring(1, 3)),
              (n = e.substring(3, 5)),
              (r = e.substring(5, 7)),
              (i = e.substring(7, 9)))
            : ((t = e.substring(1, 2)),
              (n = e.substring(2, 3)),
              (r = e.substring(3, 4)),
              (i = e.substring(4, 5)),
              (t += t),
              (n += n),
              (r += r),
              (i += i)),
          {
            red: parseInt(t, 16),
            green: parseInt(n, 16),
            blue: parseInt(r, 16),
            alpha: i ? parseInt(i, 16) / 255 : 1,
          }
        );
      },
      transform: Kn.transform,
    },
    Qn = (e) => ({
      test: (t) =>
        "string" === typeof t && t.endsWith(e) && 1 === t.split(" ").length,
      parse: parseFloat,
      transform: (t) => `${t}${e}`,
    }),
    Gn = Qn("deg"),
    Zn = Qn("%"),
    Jn = Qn("px"),
    er = Qn("vh"),
    tr = Qn("vw"),
    nr = {
      ...Zn,
      parse: (e) => Zn.parse(e) / 100,
      transform: (e) => Zn.transform(100 * e),
    },
    rr = {
      test: Hn("hsl", "hue"),
      parse: Yn("hue", "saturation", "lightness"),
      transform: (e) => {
        let { hue: t, saturation: n, lightness: r, alpha: i = 1 } = e;
        return (
          "hsla(" +
          Math.round(t) +
          ", " +
          Zn.transform($n(n)) +
          ", " +
          Zn.transform($n(r)) +
          ", " +
          $n(Vn.transform(i)) +
          ")"
        );
      },
    },
    ir = {
      test: (e) => Kn.test(e) || Xn.test(e) || rr.test(e),
      parse: (e) =>
        Kn.test(e) ? Kn.parse(e) : rr.test(e) ? rr.parse(e) : Xn.parse(e),
      transform: (e) =>
        "string" === typeof e
          ? e
          : e.hasOwnProperty("red")
          ? Kn.transform(e)
          : rr.transform(e),
    },
    or =
      /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
  const ar = "number",
    sr = "color",
    lr =
      /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
  function ur(e) {
    const t = e.toString(),
      n = [],
      r = { color: [], number: [], var: [] },
      i = [];
    let o = 0;
    const a = t
      .replace(
        lr,
        (e) => (
          ir.test(e)
            ? (r.color.push(o), i.push(sr), n.push(ir.parse(e)))
            : e.startsWith("var(")
            ? (r.var.push(o), i.push("var"), n.push(e))
            : (r.number.push(o), i.push(ar), n.push(parseFloat(e))),
          ++o,
          "${}"
        )
      )
      .split("${}");
    return { values: n, split: a, indexes: r, types: i };
  }
  function cr(e) {
    return ur(e).values;
  }
  function dr(e) {
    const { split: t, types: n } = ur(e),
      r = t.length;
    return (e) => {
      let i = "";
      for (let o = 0; o < r; o++)
        if (((i += t[o]), void 0 !== e[o])) {
          const t = n[o];
          i += t === ar ? $n(e[o]) : t === sr ? ir.transform(e[o]) : e[o];
        }
      return i;
    };
  }
  const fr = (e) => ("number" === typeof e ? 0 : e);
  const hr = {
      test: function (e) {
        var t, n;
        return (
          isNaN(e) &&
          "string" === typeof e &&
          ((null === (t = e.match(Un)) || void 0 === t ? void 0 : t.length) ||
            0) +
            ((null === (n = e.match(or)) || void 0 === n ? void 0 : n.length) ||
              0) >
            0
        );
      },
      parse: cr,
      createTransformer: dr,
      getAnimatableNone: function (e) {
        const t = cr(e);
        return dr(e)(t.map(fr));
      },
    },
    pr = new Set(["brightness", "contrast", "saturate", "opacity"]);
  function mr(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if ("drop-shadow" === t) return e;
    const [r] = n.match(Un) || [];
    if (!r) return e;
    const i = n.replace(r, "");
    let o = pr.has(t) ? 1 : 0;
    return r !== n && (o *= 100), t + "(" + o + i + ")";
  }
  const gr = /\b([a-z-]*)\(.*?\)/gu,
    vr = {
      ...hr,
      getAnimatableNone: (e) => {
        const t = e.match(gr);
        return t ? t.map(mr).join(" ") : e;
      },
    },
    yr = {
      borderWidth: Jn,
      borderTopWidth: Jn,
      borderRightWidth: Jn,
      borderBottomWidth: Jn,
      borderLeftWidth: Jn,
      borderRadius: Jn,
      radius: Jn,
      borderTopLeftRadius: Jn,
      borderTopRightRadius: Jn,
      borderBottomRightRadius: Jn,
      borderBottomLeftRadius: Jn,
      width: Jn,
      maxWidth: Jn,
      height: Jn,
      maxHeight: Jn,
      top: Jn,
      right: Jn,
      bottom: Jn,
      left: Jn,
      padding: Jn,
      paddingTop: Jn,
      paddingRight: Jn,
      paddingBottom: Jn,
      paddingLeft: Jn,
      margin: Jn,
      marginTop: Jn,
      marginRight: Jn,
      marginBottom: Jn,
      marginLeft: Jn,
      backgroundPositionX: Jn,
      backgroundPositionY: Jn,
    },
    br = {
      rotate: Gn,
      rotateX: Gn,
      rotateY: Gn,
      rotateZ: Gn,
      scale: Bn,
      scaleX: Bn,
      scaleY: Bn,
      scaleZ: Bn,
      skew: Gn,
      skewX: Gn,
      skewY: Gn,
      distance: Jn,
      translateX: Jn,
      translateY: Jn,
      translateZ: Jn,
      x: Jn,
      y: Jn,
      z: Jn,
      perspective: Jn,
      transformPerspective: Jn,
      opacity: Vn,
      originX: nr,
      originY: nr,
      originZ: Jn,
    },
    wr = { ...In, transform: Math.round },
    xr = {
      ...yr,
      ...br,
      zIndex: wr,
      size: Jn,
      fillOpacity: Vn,
      strokeOpacity: Vn,
      numOctaves: wr,
    },
    Sr = {
      ...xr,
      color: ir,
      backgroundColor: ir,
      outlineColor: ir,
      fill: ir,
      stroke: ir,
      borderColor: ir,
      borderTopColor: ir,
      borderRightColor: ir,
      borderBottomColor: ir,
      borderLeftColor: ir,
      filter: vr,
      WebkitFilter: vr,
    },
    kr = (e) => Sr[e];
  function Er(e, t) {
    let n = kr(e);
    return (
      n !== vr && (n = hr),
      n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
    );
  }
  const Cr = new Set(["auto", "none", "0"]);
  const Pr = (e) => e === In || e === Jn,
    Tr = (e, t) => parseFloat(e.split(", ")[t]),
    Ar = (e, t) => (n, r) => {
      let { transform: i } = r;
      if ("none" === i || !i) return 0;
      const o = i.match(/^matrix3d\((.+)\)$/u);
      if (o) return Tr(o[1], t);
      {
        const t = i.match(/^matrix\((.+)\)$/u);
        return t ? Tr(t[1], e) : 0;
      }
    },
    Rr = new Set(["x", "y", "z"]),
    Lr = mn.filter((e) => !Rr.has(e));
  const jr = {
    width: (e, t) => {
      let { x: n } = e,
        { paddingLeft: r = "0", paddingRight: i = "0" } = t;
      return n.max - n.min - parseFloat(r) - parseFloat(i);
    },
    height: (e, t) => {
      let { y: n } = e,
        { paddingTop: r = "0", paddingBottom: i = "0" } = t;
      return n.max - n.min - parseFloat(r) - parseFloat(i);
    },
    top: (e, t) => {
      let { top: n } = t;
      return parseFloat(n);
    },
    left: (e, t) => {
      let { left: n } = t;
      return parseFloat(n);
    },
    bottom: (e, t) => {
      let { y: n } = e,
        { top: r } = t;
      return parseFloat(r) + (n.max - n.min);
    },
    right: (e, t) => {
      let { x: n } = e,
        { left: r } = t;
      return parseFloat(r) + (n.max - n.min);
    },
    x: Ar(4, 13),
    y: Ar(5, 14),
  };
  (jr.translateX = jr.x), (jr.translateY = jr.y);
  const zr = new Set();
  let Dr = !1,
    Mr = !1;
  function Or() {
    if (Mr) {
      const e = Array.from(zr).filter((e) => e.needsMeasurement),
        t = new Set(e.map((e) => e.element)),
        n = new Map();
      t.forEach((e) => {
        const t = (function (e) {
          const t = [];
          return (
            Lr.forEach((n) => {
              const r = e.getValue(n);
              void 0 !== r &&
                (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
            }),
            t
          );
        })(e);
        t.length && (n.set(e, t), e.render());
      }),
        e.forEach((e) => e.measureInitialState()),
        t.forEach((e) => {
          e.render();
          const t = n.get(e);
          t &&
            t.forEach((t) => {
              let [n, r] = t;
              var i;
              null === (i = e.getValue(n)) || void 0 === i || i.set(r);
            });
        }),
        e.forEach((e) => e.measureEndState()),
        e.forEach((e) => {
          void 0 !== e.suspendedScrollY &&
            window.scrollTo(0, e.suspendedScrollY);
        });
    }
    (Mr = !1), (Dr = !1), zr.forEach((e) => e.complete()), zr.clear();
  }
  function Nr() {
    zr.forEach((e) => {
      e.readKeyframes(), e.needsMeasurement && (Mr = !0);
    });
  }
  class _r {
    constructor(e, t, n, r, i) {
      let o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      (this.isComplete = !1),
        (this.isAsync = !1),
        (this.needsMeasurement = !1),
        (this.isScheduled = !1),
        (this.unresolvedKeyframes = [...e]),
        (this.onComplete = t),
        (this.name = n),
        (this.motionValue = r),
        (this.element = i),
        (this.isAsync = o);
    }
    scheduleResolve() {
      (this.isScheduled = !0),
        this.isAsync
          ? (zr.add(this),
            Dr || ((Dr = !0), ht.read(Nr), ht.resolveKeyframes(Or)))
          : (this.readKeyframes(), this.complete());
    }
    readKeyframes() {
      const {
        unresolvedKeyframes: e,
        name: t,
        element: n,
        motionValue: r,
      } = this;
      for (let i = 0; i < e.length; i++)
        if (null === e[i])
          if (0 === i) {
            const i = null === r || void 0 === r ? void 0 : r.get(),
              o = e[e.length - 1];
            if (void 0 !== i) e[0] = i;
            else if (n && t) {
              const r = n.readValue(t, o);
              void 0 !== r && null !== r && (e[0] = r);
            }
            void 0 === e[0] && (e[0] = o), r && void 0 === i && r.set(e[0]);
          } else e[i] = e[i - 1];
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
      (this.isComplete = !0),
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        zr.delete(this);
    }
    cancel() {
      this.isComplete || ((this.isScheduled = !1), zr.delete(this));
    }
    resume() {
      this.isComplete || this.scheduleResolve();
    }
  }
  let Fr = ut,
    Ir = ut;
  const Vr = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
    Br = (e) => (t) => "string" === typeof t && t.startsWith(e),
    $r = Br("--"),
    Ur = Br("var(--"),
    Wr = (e) => !!Ur(e) && Hr.test(e.split("/*")[0].trim()),
    Hr =
      /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
    Yr = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
  function qr(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
    Ir(
      n <= 4,
      `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
    );
    const [r, i] = (function (e) {
      const t = Yr.exec(e);
      if (!t) return [,];
      const [, n, r, i] = t;
      return [`--${null !== n && void 0 !== n ? n : r}`, i];
    })(e);
    if (!r) return;
    const o = window.getComputedStyle(t).getPropertyValue(r);
    if (o) {
      const e = o.trim();
      return Vr(e) ? parseFloat(e) : e;
    }
    return Wr(i) ? qr(i, t, n + 1) : i;
  }
  const Kr = (e) => (t) => t.test(e),
    Xr = [
      In,
      Jn,
      Zn,
      Gn,
      tr,
      er,
      { test: (e) => "auto" === e, parse: (e) => e },
    ],
    Qr = (e) => Xr.find(Kr(e));
  class Gr extends _r {
    constructor(e, t, n, r, i) {
      super(e, t, n, r, i, !0);
    }
    readKeyframes() {
      const { unresolvedKeyframes: e, element: t, name: n } = this;
      if (!t || !t.current) return;
      super.readKeyframes();
      for (let s = 0; s < e.length; s++) {
        let n = e[s];
        if ("string" === typeof n && ((n = n.trim()), Wr(n))) {
          const r = qr(n, t.current);
          void 0 !== r && (e[s] = r),
            s === e.length - 1 && (this.finalKeyframe = n);
        }
      }
      if ((this.resolveNoneKeyframes(), !vn.has(n) || 2 !== e.length)) return;
      const [r, i] = e,
        o = Qr(r),
        a = Qr(i);
      if (o !== a)
        if (Pr(o) && Pr(a))
          for (let s = 0; s < e.length; s++) {
            const t = e[s];
            "string" === typeof t && (e[s] = parseFloat(t));
          }
        else this.needsMeasurement = !0;
    }
    resolveNoneKeyframes() {
      const { unresolvedKeyframes: e, name: t } = this,
        n = [];
      for (let i = 0; i < e.length; i++)
        ("number" === typeof (r = e[i])
          ? 0 === r
          : null === r || "none" === r || "0" === r || _n(r)) && n.push(i);
      var r;
      n.length &&
        (function (e, t, n) {
          let r,
            i = 0;
          for (; i < e.length && !r; ) {
            const t = e[i];
            "string" === typeof t &&
              !Cr.has(t) &&
              ur(t).values.length &&
              (r = e[i]),
              i++;
          }
          if (r && n) for (const o of t) e[o] = Er(n, r);
        })(e, n, t);
    }
    measureInitialState() {
      const { element: e, unresolvedKeyframes: t, name: n } = this;
      if (!e || !e.current) return;
      "height" === n && (this.suspendedScrollY = window.pageYOffset),
        (this.measuredOrigin = jr[n](
          e.measureViewportBox(),
          window.getComputedStyle(e.current)
        )),
        (t[0] = this.measuredOrigin);
      const r = t[t.length - 1];
      void 0 !== r && e.getValue(n, r).jump(r, !1);
    }
    measureEndState() {
      var e;
      const { element: t, name: n, unresolvedKeyframes: r } = this;
      if (!t || !t.current) return;
      const i = t.getValue(n);
      i && i.jump(this.measuredOrigin, !1);
      const o = r.length - 1,
        a = r[o];
      (r[o] = jr[n](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
        null !== a && void 0 === this.finalKeyframe && (this.finalKeyframe = a),
        (null === (e = this.removedTransforms) || void 0 === e
          ? void 0
          : e.length) &&
          this.removedTransforms.forEach((e) => {
            let [n, r] = e;
            t.getValue(n).set(r);
          }),
        this.resolveNoneKeyframes();
    }
  }
  const Zr = (e, t) =>
    "zIndex" !== t &&
    (!("number" !== typeof e && !Array.isArray(e)) ||
      !(
        "string" !== typeof e ||
        (!hr.test(e) && "0" !== e) ||
        e.startsWith("url(")
      ));
  function Jr(e, t, n, r) {
    const i = e[0];
    if (null === i) return !1;
    if ("display" === t || "visibility" === t) return !0;
    const o = e[e.length - 1],
      a = Zr(i, t),
      s = Zr(o, t);
    return (
      Fr(
        a === s,
        `You are trying to animate ${t} from "${i}" to "${o}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${o} via the \`style\` property.`
      ),
      !(!a || !s) &&
        ((function (e) {
          const t = e[0];
          if (1 === e.length) return !0;
          for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
        })(e) ||
          (("spring" === n || $t(n)) && r))
    );
  }
  const ei = (e) => null !== e;
  function ti(e, t, n) {
    let { repeat: r, repeatType: i = "loop" } = t;
    const o = e.filter(ei),
      a = r && "loop" !== i && r % 2 === 1 ? 0 : o.length - 1;
    return a && void 0 !== n ? n : o[a];
  }
  class ni {
    constructor(e) {
      let {
        autoplay: t = !0,
        delay: n = 0,
        type: r = "keyframes",
        repeat: i = 0,
        repeatDelay: o = 0,
        repeatType: a = "loop",
        ...s
      } = e;
      (this.isStopped = !1),
        (this.hasAttemptedResolve = !1),
        (this.createdAt = bt.now()),
        (this.options = {
          autoplay: t,
          delay: n,
          type: r,
          repeat: i,
          repeatDelay: o,
          repeatType: a,
          ...s,
        }),
        this.updateFinishedPromise();
    }
    calcStartTime() {
      return this.resolvedAt && this.resolvedAt - this.createdAt > 40
        ? this.resolvedAt
        : this.createdAt;
    }
    get resolved() {
      return (
        this._resolved || this.hasAttemptedResolve || (Nr(), Or()),
        this._resolved
      );
    }
    onKeyframesResolved(e, t) {
      (this.resolvedAt = bt.now()), (this.hasAttemptedResolve = !0);
      const {
        name: n,
        type: r,
        velocity: i,
        delay: o,
        onComplete: a,
        onUpdate: s,
        isGenerator: l,
      } = this.options;
      if (!l && !Jr(e, n, r, i)) {
        if (Cn || !o)
          return (
            s && s(ti(e, this.options, t)),
            a && a(),
            void this.resolveFinishedPromise()
          );
        this.options.duration = 0;
      }
      const u = this.initPlayback(e, t);
      !1 !== u &&
        ((this._resolved = { keyframes: e, finalKeyframe: t, ...u }),
        this.onPostResolved());
    }
    onPostResolved() {}
    then(e, t) {
      return this.currentFinishedPromise.then(e, t);
    }
    flatten() {
      (this.options.type = "keyframes"), (this.options.ease = "linear");
    }
    updateFinishedPromise() {
      this.currentFinishedPromise = new Promise((e) => {
        this.resolveFinishedPromise = e;
      });
    }
  }
  const ri = { layout: 0, mainThread: 0, waapi: 0 },
    ii = (e, t, n) => e + (t - e) * n;
  function oi(e, t, n) {
    return (
      n < 0 && (n += 1),
      n > 1 && (n -= 1),
      n < 1 / 6
        ? e + 6 * (t - e) * n
        : n < 0.5
        ? t
        : n < 2 / 3
        ? e + (t - e) * (2 / 3 - n) * 6
        : e
    );
  }
  function ai(e, t) {
    return (n) => (n > 0 ? t : e);
  }
  const si = (e, t, n) => {
      const r = e * e,
        i = n * (t * t - r) + r;
      return i < 0 ? 0 : Math.sqrt(i);
    },
    li = [Xn, Kn, rr];
  function ui(e) {
    const t = ((n = e), li.find((e) => e.test(n)));
    var n;
    if (
      (Fr(
        Boolean(t),
        `'${e}' is not an animatable color. Use the equivalent color code instead.`
      ),
      !Boolean(t))
    )
      return !1;
    let r = t.parse(e);
    return (
      t === rr &&
        (r = (function (e) {
          let { hue: t, saturation: n, lightness: r, alpha: i } = e;
          (t /= 360), (n /= 100), (r /= 100);
          let o = 0,
            a = 0,
            s = 0;
          if (n) {
            const e = r < 0.5 ? r * (1 + n) : r + n - r * n,
              i = 2 * r - e;
            (o = oi(i, e, t + 1 / 3)),
              (a = oi(i, e, t)),
              (s = oi(i, e, t - 1 / 3));
          } else o = a = s = r;
          return {
            red: Math.round(255 * o),
            green: Math.round(255 * a),
            blue: Math.round(255 * s),
            alpha: i,
          };
        })(r)),
      r
    );
  }
  const ci = (e, t) => {
      const n = ui(e),
        r = ui(t);
      if (!n || !r) return ai(e, t);
      const i = { ...n };
      return (e) => (
        (i.red = si(n.red, r.red, e)),
        (i.green = si(n.green, r.green, e)),
        (i.blue = si(n.blue, r.blue, e)),
        (i.alpha = ii(n.alpha, r.alpha, e)),
        Kn.transform(i)
      );
    },
    di = (e, t) => (n) => t(e(n)),
    fi = function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return t.reduce(di);
    },
    hi = new Set(["none", "hidden"]);
  function pi(e, t) {
    return (n) => ii(e, t, n);
  }
  function mi(e) {
    return "number" === typeof e
      ? pi
      : "string" === typeof e
      ? Wr(e)
        ? ai
        : ir.test(e)
        ? ci
        : yi
      : Array.isArray(e)
      ? gi
      : "object" === typeof e
      ? ir.test(e)
        ? ci
        : vi
      : ai;
  }
  function gi(e, t) {
    const n = [...e],
      r = n.length,
      i = e.map((e, n) => mi(e)(e, t[n]));
    return (e) => {
      for (let t = 0; t < r; t++) n[t] = i[t](e);
      return n;
    };
  }
  function vi(e, t) {
    const n = { ...e, ...t },
      r = {};
    for (const i in n)
      void 0 !== e[i] && void 0 !== t[i] && (r[i] = mi(e[i])(e[i], t[i]));
    return (e) => {
      for (const t in r) n[t] = r[t](e);
      return n;
    };
  }
  const yi = (e, t) => {
    const n = hr.createTransformer(t),
      r = ur(e),
      i = ur(t);
    return r.indexes.var.length === i.indexes.var.length &&
      r.indexes.color.length === i.indexes.color.length &&
      r.indexes.number.length >= i.indexes.number.length
      ? (hi.has(e) && !i.values.length) || (hi.has(t) && !r.values.length)
        ? (function (e, t) {
            return hi.has(e)
              ? (n) => (n <= 0 ? e : t)
              : (n) => (n >= 1 ? t : e);
          })(e, t)
        : fi(
            gi(
              (function (e, t) {
                var n;
                const r = [],
                  i = { color: 0, var: 0, number: 0 };
                for (let o = 0; o < t.values.length; o++) {
                  const a = t.types[o],
                    s = e.indexes[a][i[a]],
                    l = null !== (n = e.values[s]) && void 0 !== n ? n : 0;
                  (r[o] = l), i[a]++;
                }
                return r;
              })(r, i),
              i.values
            ),
            n
          )
      : (Fr(
          !0,
          `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
        ),
        ai(e, t));
  };
  function bi(e, t, n) {
    if ("number" === typeof e && "number" === typeof t && "number" === typeof n)
      return ii(e, t, n);
    return mi(e)(e, t);
  }
  function wi(e, t, n) {
    const r = Math.max(t - 5, 0);
    return kt(n - e(r), t - r);
  }
  const xi = {
      stiffness: 100,
      damping: 10,
      mass: 1,
      velocity: 0,
      duration: 800,
      bounce: 0.3,
      visualDuration: 0.3,
      restSpeed: { granular: 0.01, default: 2 },
      restDelta: { granular: 0.005, default: 0.5 },
      minDuration: 0.01,
      maxDuration: 10,
      minDamping: 0.05,
      maxDamping: 1,
    },
    Si = 0.001;
  function ki(e) {
    let t,
      n,
      {
        duration: r = xi.duration,
        bounce: i = xi.bounce,
        velocity: o = xi.velocity,
        mass: a = xi.mass,
      } = e;
    Fr(r <= hn(xi.maxDuration), "Spring duration must be 10 seconds or less");
    let s = 1 - i;
    (s = Fn(xi.minDamping, xi.maxDamping, s)),
      (r = Fn(xi.minDuration, xi.maxDuration, pn(r))),
      s < 1
        ? ((t = (e) => {
            const t = e * s,
              n = t * r,
              i = t - o,
              a = Ci(e, s),
              l = Math.exp(-n);
            return Si - (i / a) * l;
          }),
          (n = (e) => {
            const n = e * s * r,
              i = n * o + o,
              a = Math.pow(s, 2) * Math.pow(e, 2) * r,
              l = Math.exp(-n),
              u = Ci(Math.pow(e, 2), s);
            return ((-t(e) + Si > 0 ? -1 : 1) * ((i - a) * l)) / u;
          }))
        : ((t = (e) => Math.exp(-e * r) * ((e - o) * r + 1) - 0.001),
          (n = (e) => Math.exp(-e * r) * (r * r * (o - e))));
    const l = (function (e, t, n) {
      let r = n;
      for (let i = 1; i < Ei; i++) r -= e(r) / t(r);
      return r;
    })(t, n, 5 / r);
    if (((r = hn(r)), isNaN(l)))
      return { stiffness: xi.stiffness, damping: xi.damping, duration: r };
    {
      const e = Math.pow(l, 2) * a;
      return { stiffness: e, damping: 2 * s * Math.sqrt(a * e), duration: r };
    }
  }
  const Ei = 12;
  function Ci(e, t) {
    return e * Math.sqrt(1 - t * t);
  }
  const Pi = ["duration", "bounce"],
    Ti = ["stiffness", "damping", "mass"];
  function Ai(e, t) {
    return t.some((t) => void 0 !== e[t]);
  }
  function Ri() {
    let e =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : xi.visualDuration,
      t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : xi.bounce;
    const n =
      "object" !== typeof e
        ? { visualDuration: e, keyframes: [0, 1], bounce: t }
        : e;
    let { restSpeed: r, restDelta: i } = n;
    const o = n.keyframes[0],
      a = n.keyframes[n.keyframes.length - 1],
      s = { done: !1, value: o },
      {
        stiffness: l,
        damping: u,
        mass: c,
        duration: d,
        velocity: f,
        isResolvedFromDuration: h,
      } = (function (e) {
        let t = {
          velocity: xi.velocity,
          stiffness: xi.stiffness,
          damping: xi.damping,
          mass: xi.mass,
          isResolvedFromDuration: !1,
          ...e,
        };
        if (!Ai(e, Ti) && Ai(e, Pi))
          if (e.visualDuration) {
            const n = e.visualDuration,
              r = (2 * Math.PI) / (1.2 * n),
              i = r * r,
              o = 2 * Fn(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
            t = { ...t, mass: xi.mass, stiffness: i, damping: o };
          } else {
            const n = ki(e);
            (t = { ...t, ...n, mass: xi.mass }),
              (t.isResolvedFromDuration = !0);
          }
        return t;
      })({ ...n, velocity: -pn(n.velocity || 0) }),
      p = f || 0,
      m = u / (2 * Math.sqrt(l * c)),
      g = a - o,
      v = pn(Math.sqrt(l / c)),
      y = Math.abs(g) < 5;
    let b;
    if (
      (r || (r = y ? xi.restSpeed.granular : xi.restSpeed.default),
      i || (i = y ? xi.restDelta.granular : xi.restDelta.default),
      m < 1)
    ) {
      const e = Ci(v, m);
      b = (t) => {
        const n = Math.exp(-m * v * t);
        return (
          a -
          n * (((p + m * v * g) / e) * Math.sin(e * t) + g * Math.cos(e * t))
        );
      };
    } else if (1 === m) b = (e) => a - Math.exp(-v * e) * (g + (p + v * g) * e);
    else {
      const e = v * Math.sqrt(m * m - 1);
      b = (t) => {
        const n = Math.exp(-m * v * t),
          r = Math.min(e * t, 300);
        return (
          a - (n * ((p + m * v * g) * Math.sinh(r) + e * g * Math.cosh(r))) / e
        );
      };
    }
    const w = {
      calculatedDuration: (h && d) || null,
      next: (e) => {
        const t = b(e);
        if (h) s.done = e >= d;
        else {
          let n = 0;
          m < 1 && (n = 0 === e ? hn(p) : wi(b, e, t));
          const o = Math.abs(n) <= r,
            l = Math.abs(a - t) <= i;
          s.done = o && l;
        }
        return (s.value = s.done ? a : t), s;
      },
      toString: () => {
        const e = Math.min(Bt(w), Vt),
          t = Xt((t) => w.next(e * t).value, e, 30);
        return e + "ms " + t;
      },
    };
    return w;
  }
  function Li(e) {
    let {
      keyframes: t,
      velocity: n = 0,
      power: r = 0.8,
      timeConstant: i = 325,
      bounceDamping: o = 10,
      bounceStiffness: a = 500,
      modifyTarget: s,
      min: l,
      max: u,
      restDelta: c = 0.5,
      restSpeed: d,
    } = e;
    const f = t[0],
      h = { done: !1, value: f },
      p = (e) =>
        void 0 === l
          ? u
          : void 0 === u || Math.abs(l - e) < Math.abs(u - e)
          ? l
          : u;
    let m = r * n;
    const g = f + m,
      v = void 0 === s ? g : s(g);
    v !== g && (m = v - f);
    const y = (e) => -m * Math.exp(-e / i),
      b = (e) => v + y(e),
      w = (e) => {
        const t = y(e),
          n = b(e);
        (h.done = Math.abs(t) <= c), (h.value = h.done ? v : n);
      };
    let x, S;
    const k = (e) => {
      var t;
      ((t = h.value), (void 0 !== l && t < l) || (void 0 !== u && t > u)) &&
        ((x = e),
        (S = Ri({
          keyframes: [h.value, p(h.value)],
          velocity: wi(b, e, h.value),
          damping: o,
          stiffness: a,
          restDelta: c,
          restSpeed: d,
        })));
    };
    return (
      k(0),
      {
        calculatedDuration: null,
        next: (e) => {
          let t = !1;
          return (
            S || void 0 !== x || ((t = !0), w(e), k(e)),
            void 0 !== x && e >= x ? S.next(e - x) : (!t && w(e), h)
          );
        },
      }
    );
  }
  const ji = Tn(0.42, 0, 1, 1),
    zi = Tn(0, 0, 0.58, 1),
    Di = Tn(0.42, 0, 0.58, 1),
    Mi = {
      linear: ut,
      easeIn: ji,
      easeInOut: Di,
      easeOut: zi,
      circIn: Mn,
      circInOut: Nn,
      circOut: On,
      backIn: jn,
      backInOut: zn,
      backOut: Ln,
      anticipate: Dn,
    },
    Oi = (e) => {
      if (Wt(e)) {
        Ir(
          4 === e.length,
          "Cubic bezier arrays must contain four numerical values."
        );
        const [t, n, r, i] = e;
        return Tn(t, n, r, i);
      }
      return "string" === typeof e
        ? (Ir(void 0 !== Mi[e], `Invalid easing type '${e}'`), Mi[e])
        : e;
    };
  function Ni(e, t) {
    let {
      clamp: n = !0,
      ease: r,
      mixer: i,
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    const o = e.length;
    if (
      (Ir(
        o === t.length,
        "Both input and output ranges must be the same length"
      ),
      1 === o)
    )
      return () => t[0];
    if (2 === o && t[0] === t[1]) return () => t[1];
    const a = e[0] === e[1];
    e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
    const s = (function (e, t, n) {
        const r = [],
          i = n || bi,
          o = e.length - 1;
        for (let a = 0; a < o; a++) {
          let n = i(e[a], e[a + 1]);
          if (t) {
            const e = Array.isArray(t) ? t[a] || ut : t;
            n = fi(e, n);
          }
          r.push(n);
        }
        return r;
      })(t, r, i),
      l = s.length,
      u = (n) => {
        if (a && n < e[0]) return t[0];
        let r = 0;
        if (l > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
        const i = Kt(e[r], e[r + 1], n);
        return s[r](i);
      };
    return n ? (t) => u(Fn(e[0], e[o - 1], t)) : u;
  }
  function _i(e) {
    const t = [0];
    return (
      (function (e, t) {
        const n = e[e.length - 1];
        for (let r = 1; r <= t; r++) {
          const i = Kt(0, t, r);
          e.push(ii(n, 1, i));
        }
      })(t, e.length - 1),
      t
    );
  }
  function Fi(e) {
    let {
      duration: t = 300,
      keyframes: n,
      times: r,
      ease: i = "easeInOut",
    } = e;
    const o = ((e) => Array.isArray(e) && "number" !== typeof e[0])(i)
        ? i.map(Oi)
        : Oi(i),
      a = { done: !1, value: n[0] },
      s = (function (e, t) {
        return e.map((e) => e * t);
      })(r && r.length === n.length ? r : _i(n), t),
      l = Ni(s, n, {
        ease: Array.isArray(o)
          ? o
          : ((u = n), (c = o), u.map(() => c || Di).splice(0, u.length - 1)),
      });
    var u, c;
    return {
      calculatedDuration: t,
      next: (e) => ((a.value = l(e)), (a.done = e >= t), a),
    };
  }
  const Ii = (e) => {
      const t = (t) => {
        let { timestamp: n } = t;
        return e(n);
      };
      return {
        start: () => ht.update(t, !0),
        stop: () => pt(t),
        now: () => (mt.isProcessing ? mt.timestamp : bt.now()),
      };
    },
    Vi = { decay: Li, inertia: Li, tween: Fi, keyframes: Fi, spring: Ri },
    Bi = (e) => e / 100;
  class $i extends ni {
    constructor(e) {
      super(e),
        (this.holdTime = null),
        (this.cancelTime = null),
        (this.currentTime = 0),
        (this.playbackSpeed = 1),
        (this.pendingPlayState = "running"),
        (this.startTime = null),
        (this.state = "idle"),
        (this.stop = () => {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.teardown();
          const { onStop: e } = this.options;
          e && e();
        });
      const {
          name: t,
          motionValue: n,
          element: r,
          keyframes: i,
        } = this.options,
        o = (null === r || void 0 === r ? void 0 : r.KeyframeResolver) || _r;
      (this.resolver = new o(
        i,
        (e, t) => this.onKeyframesResolved(e, t),
        t,
        n,
        r
      )),
        this.resolver.scheduleResolve();
    }
    flatten() {
      super.flatten(),
        this._resolved &&
          Object.assign(
            this._resolved,
            this.initPlayback(this._resolved.keyframes)
          );
    }
    initPlayback(e) {
      const {
          type: t = "keyframes",
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: i,
          velocity: o = 0,
        } = this.options,
        a = $t(t) ? t : Vi[t] || Fi;
      let s, l;
      a !== Fi &&
        "number" !== typeof e[0] &&
        ((s = fi(Bi, bi(e[0], e[1]))), (e = [0, 100]));
      const u = a({ ...this.options, keyframes: e });
      "mirror" === i &&
        (l = a({ ...this.options, keyframes: [...e].reverse(), velocity: -o })),
        null === u.calculatedDuration && (u.calculatedDuration = Bt(u));
      const { calculatedDuration: c } = u,
        d = c + r;
      return {
        generator: u,
        mirroredGenerator: l,
        mapPercentToKeyframes: s,
        calculatedDuration: c,
        resolvedDuration: d,
        totalDuration: d * (n + 1) - r,
      };
    }
    onPostResolved() {
      const { autoplay: e = !0 } = this.options;
      ri.mainThread++,
        this.play(),
        "paused" !== this.pendingPlayState && e
          ? (this.state = this.pendingPlayState)
          : this.pause();
    }
    tick(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const { resolved: n } = this;
      if (!n) {
        const { keyframes: e } = this.options;
        return { done: !0, value: e[e.length - 1] };
      }
      const {
        finalKeyframe: r,
        generator: i,
        mirroredGenerator: o,
        mapPercentToKeyframes: a,
        keyframes: s,
        calculatedDuration: l,
        totalDuration: u,
        resolvedDuration: c,
      } = n;
      if (null === this.startTime) return i.next(0);
      const {
        delay: d,
        repeat: f,
        repeatType: h,
        repeatDelay: p,
        onUpdate: m,
      } = this.options;
      this.speed > 0
        ? (this.startTime = Math.min(this.startTime, e))
        : this.speed < 0 &&
          (this.startTime = Math.min(e - u / this.speed, this.startTime)),
        t
          ? (this.currentTime = e)
          : null !== this.holdTime
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(e - this.startTime) * this.speed);
      const g = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
        v = this.speed >= 0 ? g < 0 : g > u;
      (this.currentTime = Math.max(g, 0)),
        "finished" === this.state &&
          null === this.holdTime &&
          (this.currentTime = u);
      let y = this.currentTime,
        b = i;
      if (f) {
        const e = Math.min(this.currentTime, u) / c;
        let t = Math.floor(e),
          n = e % 1;
        !n && e >= 1 && (n = 1), 1 === n && t--, (t = Math.min(t, f + 1));
        Boolean(t % 2) &&
          ("reverse" === h
            ? ((n = 1 - n), p && (n -= p / c))
            : "mirror" === h && (b = o)),
          (y = Fn(0, 1, n) * c);
      }
      const w = v ? { done: !1, value: s[0] } : b.next(y);
      a && (w.value = a(w.value));
      let { done: x } = w;
      v ||
        null === l ||
        (x = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
      const S =
        null === this.holdTime &&
        ("finished" === this.state || ("running" === this.state && x));
      return (
        S && void 0 !== r && (w.value = ti(s, this.options, r)),
        m && m(w.value),
        S && this.finish(),
        w
      );
    }
    get duration() {
      const { resolved: e } = this;
      return e ? pn(e.calculatedDuration) : 0;
    }
    get time() {
      return pn(this.currentTime);
    }
    set time(e) {
      (e = hn(e)),
        (this.currentTime = e),
        null !== this.holdTime || 0 === this.speed
          ? (this.holdTime = e)
          : this.driver &&
            (this.startTime = this.driver.now() - e / this.speed);
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(e) {
      const t = this.playbackSpeed !== e;
      (this.playbackSpeed = e), t && (this.time = pn(this.currentTime));
    }
    play() {
      if (
        (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
      )
        return void (this.pendingPlayState = "running");
      if (this.isStopped) return;
      const { driver: e = Ii, onPlay: t, startTime: n } = this.options;
      this.driver || (this.driver = e((e) => this.tick(e))), t && t();
      const r = this.driver.now();
      null !== this.holdTime
        ? (this.startTime = r - this.holdTime)
        : this.startTime
        ? "finished" === this.state && (this.startTime = r)
        : (this.startTime =
            null !== n && void 0 !== n ? n : this.calcStartTime()),
        "finished" === this.state && this.updateFinishedPromise(),
        (this.cancelTime = this.startTime),
        (this.holdTime = null),
        (this.state = "running"),
        this.driver.start();
    }
    pause() {
      var e;
      this._resolved
        ? ((this.state = "paused"),
          (this.holdTime =
            null !== (e = this.currentTime) && void 0 !== e ? e : 0))
        : (this.pendingPlayState = "paused");
    }
    complete() {
      "running" !== this.state && this.play(),
        (this.pendingPlayState = this.state = "finished"),
        (this.holdTime = null);
    }
    finish() {
      this.teardown(), (this.state = "finished");
      const { onComplete: e } = this.options;
      e && e();
    }
    cancel() {
      null !== this.cancelTime && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise();
    }
    teardown() {
      (this.state = "idle"),
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        (this.startTime = this.cancelTime = null),
        this.resolver.cancel(),
        ri.mainThread--;
    }
    stopDriver() {
      this.driver && (this.driver.stop(), (this.driver = void 0));
    }
    sample(e) {
      return (this.startTime = 0), this.tick(e, !0);
    }
  }
  const Ui = new Set(["opacity", "clipPath", "filter", "transform"]);
  const Wi = Ot(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
  const Hi = { anticipate: Dn, backInOut: zn, circInOut: Nn };
  class Yi extends ni {
    constructor(e) {
      super(e);
      const {
        name: t,
        motionValue: n,
        element: r,
        keyframes: i,
      } = this.options;
      (this.resolver = new Gr(
        i,
        (e, t) => this.onKeyframesResolved(e, t),
        t,
        n,
        r
      )),
        this.resolver.scheduleResolve();
    }
    initPlayback(e, t) {
      let {
        duration: n = 300,
        times: r,
        ease: i,
        type: o,
        motionValue: a,
        name: s,
        startTime: l,
      } = this.options;
      if (!a.owner || !a.owner.current) return !1;
      var u;
      if (
        ("string" === typeof i && qt() && i in Hi && (i = Hi[i]),
        $t((u = this.options).type) || "spring" === u.type || !Qt(u.ease))
      ) {
        const {
            onComplete: t,
            onUpdate: a,
            motionValue: s,
            element: l,
            ...u
          } = this.options,
          c = (function (e, t) {
            const n = new $i({
              ...t,
              keyframes: e,
              repeat: 0,
              delay: 0,
              isGenerator: !0,
            });
            let r = { done: !1, value: e[0] };
            const i = [];
            let o = 0;
            for (; !r.done && o < 2e4; )
              (r = n.sample(o)), i.push(r.value), (o += 10);
            return {
              times: void 0,
              keyframes: i,
              duration: o - 10,
              ease: "linear",
            };
          })(e, u);
        1 === (e = c.keyframes).length && (e[1] = e[0]),
          (n = c.duration),
          (r = c.times),
          (i = c.ease),
          (o = "keyframes");
      }
      const c = (function (e, t, n) {
        let {
          delay: r = 0,
          duration: i = 300,
          repeat: o = 0,
          repeatType: a = "loop",
          ease: s = "easeInOut",
          times: l,
        } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        const u = { [t]: n };
        l && (u.offset = l);
        const c = Jt(s, i);
        Array.isArray(c) && (u.easing = c), dt.value && ri.waapi++;
        const d = e.animate(u, {
          delay: r,
          duration: i,
          easing: Array.isArray(c) ? "linear" : c,
          fill: "both",
          iterations: o + 1,
          direction: "reverse" === a ? "alternate" : "normal",
        });
        return (
          dt.value &&
            d.finished.finally(() => {
              ri.waapi--;
            }),
          d
        );
      })(a.owner.current, s, e, {
        ...this.options,
        duration: n,
        times: r,
        ease: i,
      });
      return (
        (c.startTime = null !== l && void 0 !== l ? l : this.calcStartTime()),
        this.pendingTimeline
          ? (Ut(c, this.pendingTimeline), (this.pendingTimeline = void 0))
          : (c.onfinish = () => {
              const { onComplete: n } = this.options;
              a.set(ti(e, this.options, t)),
                n && n(),
                this.cancel(),
                this.resolveFinishedPromise();
            }),
        { animation: c, duration: n, times: r, type: o, ease: i, keyframes: e }
      );
    }
    get duration() {
      const { resolved: e } = this;
      if (!e) return 0;
      const { duration: t } = e;
      return pn(t);
    }
    get time() {
      const { resolved: e } = this;
      if (!e) return 0;
      const { animation: t } = e;
      return pn(t.currentTime || 0);
    }
    set time(e) {
      const { resolved: t } = this;
      if (!t) return;
      const { animation: n } = t;
      n.currentTime = hn(e);
    }
    get speed() {
      const { resolved: e } = this;
      if (!e) return 1;
      const { animation: t } = e;
      return t.playbackRate;
    }
    set speed(e) {
      const { resolved: t } = this;
      if (!t) return;
      const { animation: n } = t;
      n.playbackRate = e;
    }
    get state() {
      const { resolved: e } = this;
      if (!e) return "idle";
      const { animation: t } = e;
      return t.playState;
    }
    get startTime() {
      const { resolved: e } = this;
      if (!e) return null;
      const { animation: t } = e;
      return t.startTime;
    }
    attachTimeline(e) {
      if (this._resolved) {
        const { resolved: t } = this;
        if (!t) return ut;
        const { animation: n } = t;
        Ut(n, e);
      } else this.pendingTimeline = e;
      return ut;
    }
    play() {
      if (this.isStopped) return;
      const { resolved: e } = this;
      if (!e) return;
      const { animation: t } = e;
      "finished" === t.playState && this.updateFinishedPromise(), t.play();
    }
    pause() {
      const { resolved: e } = this;
      if (!e) return;
      const { animation: t } = e;
      t.pause();
    }
    stop() {
      if (
        (this.resolver.cancel(), (this.isStopped = !0), "idle" === this.state)
      )
        return;
      this.resolveFinishedPromise(), this.updateFinishedPromise();
      const { resolved: e } = this;
      if (!e) return;
      const {
        animation: t,
        keyframes: n,
        duration: r,
        type: i,
        ease: o,
        times: a,
      } = e;
      if ("idle" === t.playState || "finished" === t.playState) return;
      if (this.time) {
        const {
            motionValue: e,
            onUpdate: t,
            onComplete: s,
            element: l,
            ...u
          } = this.options,
          c = new $i({
            ...u,
            keyframes: n,
            duration: r,
            type: i,
            ease: o,
            times: a,
            isGenerator: !0,
          }),
          d = hn(this.time);
        e.setWithVelocity(c.sample(d - 10).value, c.sample(d).value, 10);
      }
      const { onStop: s } = this.options;
      s && s(), this.cancel();
    }
    complete() {
      const { resolved: e } = this;
      e && e.animation.finish();
    }
    cancel() {
      const { resolved: e } = this;
      e && e.animation.cancel();
    }
    static supports(e) {
      const {
        motionValue: t,
        name: n,
        repeatDelay: r,
        repeatType: i,
        damping: o,
        type: a,
      } = e;
      if (!t || !t.owner || !(t.owner.current instanceof HTMLElement))
        return !1;
      const { onUpdate: s, transformTemplate: l } = t.owner.getProps();
      return (
        Wi() &&
        n &&
        Ui.has(n) &&
        !s &&
        !l &&
        !r &&
        "mirror" !== i &&
        0 !== o &&
        "inertia" !== a
      );
    }
  }
  const qi = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
    Ki = { type: "keyframes", duration: 0.8 },
    Xi = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
    Qi = (e, t) => {
      let { keyframes: n } = t;
      return n.length > 2
        ? Ki
        : gn.has(e)
        ? e.startsWith("scale")
          ? {
              type: "spring",
              stiffness: 550,
              damping: 0 === n[1] ? 2 * Math.sqrt(550) : 30,
              restSpeed: 10,
            }
          : qi
        : Xi;
    };
  const Gi = function (e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
      i = arguments.length > 4 ? arguments[4] : void 0,
      o = arguments.length > 5 ? arguments[5] : void 0;
    return (a) => {
      const s = It(r, e) || {},
        l = s.delay || r.delay || 0;
      let { elapsed: u = 0 } = r;
      u -= hn(l);
      let c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...s,
        delay: -u,
        onUpdate: (e) => {
          t.set(e), s.onUpdate && s.onUpdate(e);
        },
        onComplete: () => {
          a(), s.onComplete && s.onComplete();
        },
        name: e,
        motionValue: t,
        element: o ? void 0 : i,
      };
      (function (e) {
        let {
          when: t,
          delay: n,
          delayChildren: r,
          staggerChildren: i,
          staggerDirection: o,
          repeat: a,
          repeatType: s,
          repeatDelay: l,
          from: u,
          elapsed: c,
          ...d
        } = e;
        return !!Object.keys(d).length;
      })(s) || (c = { ...c, ...Qi(e, c) }),
        c.duration && (c.duration = hn(c.duration)),
        c.repeatDelay && (c.repeatDelay = hn(c.repeatDelay)),
        void 0 !== c.from && (c.keyframes[0] = c.from);
      let d = !1;
      if (
        ((!1 === c.type || (0 === c.duration && !c.repeatDelay)) &&
          ((c.duration = 0), 0 === c.delay && (d = !0)),
        (Cn || st) && ((d = !0), (c.duration = 0), (c.delay = 0)),
        d && !o && void 0 !== t.get())
      ) {
        const e = ti(c.keyframes, s);
        if (void 0 !== e)
          return (
            ht.update(() => {
              c.onUpdate(e), c.onComplete();
            }),
            new Ft([])
          );
      }
      return !o && Yi.supports(c) ? new Yi(c) : new $i(c);
    };
  };
  function Zi(e, t) {
    let { protectedKeys: n, needsAnimating: r } = e;
    const i = n.hasOwnProperty(t) && !0 !== r[t];
    return (r[t] = !1), i;
  }
  function Ji(e, t) {
    let {
      delay: n = 0,
      transitionOverride: r,
      type: i,
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    var o;
    let {
      transition: a = e.getDefaultTransition(),
      transitionEnd: s,
      ...l
    } = t;
    r && (a = r);
    const u = [],
      c = i && e.animationState && e.animationState.getState()[i];
    for (const d in l) {
      const t = e.getValue(
          d,
          null !== (o = e.latestValues[d]) && void 0 !== o ? o : null
        ),
        r = l[d];
      if (void 0 === r || (c && Zi(c, d))) continue;
      const i = { delay: n, ...It(a || {}, d) };
      let s = !1;
      if (window.MotionHandoffAnimation) {
        const t = En(e);
        if (t) {
          const e = window.MotionHandoffAnimation(t, d, ht);
          null !== e && ((i.startTime = e), (s = !0));
        }
      }
      xn(e, d),
        t.start(
          Gi(
            d,
            t,
            r,
            e.shouldReduceMotion && vn.has(d) ? { type: !1 } : i,
            e,
            s
          )
        );
      const f = t.animation;
      f && u.push(f);
    }
    return (
      s &&
        Promise.all(u).then(() => {
          ht.update(() => {
            s &&
              (function (e, t) {
                const n = Mt(e, t);
                let {
                  transitionEnd: r = {},
                  transition: i = {},
                  ...o
                } = n || {};
                o = { ...o, ...r };
                for (const s in o)
                  bn(e, s, ((a = o[s]), yn(a) ? a[a.length - 1] || 0 : a));
                var a;
              })(e, s);
          });
        }),
      u
    );
  }
  function eo(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    var r;
    const i = Mt(
      e,
      t,
      "exit" === n.type
        ? null === (r = e.presenceContext) || void 0 === r
          ? void 0
          : r.custom
        : void 0
    );
    let { transition: o = e.getDefaultTransition() || {} } = i || {};
    n.transitionOverride && (o = n.transitionOverride);
    const a = i ? () => Promise.all(Ji(e, i, n)) : () => Promise.resolve(),
      s =
        e.variantChildren && e.variantChildren.size
          ? function () {
              let r =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0;
              const {
                delayChildren: i = 0,
                staggerChildren: a,
                staggerDirection: s,
              } = o;
              return (function (e, t) {
                let n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 0,
                  r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 0,
                  i =
                    arguments.length > 4 && void 0 !== arguments[4]
                      ? arguments[4]
                      : 1,
                  o = arguments.length > 5 ? arguments[5] : void 0;
                const a = [],
                  s = (e.variantChildren.size - 1) * r,
                  l =
                    1 === i
                      ? function () {
                          return (
                            (arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 0) * r
                          );
                        }
                      : function () {
                          return (
                            s -
                            (arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 0) *
                              r
                          );
                        };
                return (
                  Array.from(e.variantChildren)
                    .sort(to)
                    .forEach((e, r) => {
                      e.notify("AnimationStart", t),
                        a.push(
                          eo(e, t, { ...o, delay: n + l(r) }).then(() =>
                            e.notify("AnimationComplete", t)
                          )
                        );
                    }),
                  Promise.all(a)
                );
              })(e, t, i + r, a, s, n);
            }
          : () => Promise.resolve(),
      { when: l } = o;
    if (l) {
      const [e, t] = "beforeChildren" === l ? [a, s] : [s, a];
      return e().then(() => t());
    }
    return Promise.all([a(), s(n.delay)]);
  }
  function to(e, t) {
    return e.sortNodePosition(t);
  }
  function no(e, t) {
    if (!Array.isArray(t)) return !1;
    const n = t.length;
    if (n !== e.length) return !1;
    for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
    return !0;
  }
  function ro(e) {
    return "string" === typeof e || Array.isArray(e);
  }
  const io = [
      "animate",
      "whileInView",
      "whileFocus",
      "whileHover",
      "whileTap",
      "whileDrag",
      "exit",
    ],
    oo = ["initial", ...io],
    ao = oo.length;
  function so(e) {
    if (!e) return;
    if (!e.isControllingVariants) {
      const t = (e.parent && so(e.parent)) || {};
      return void 0 !== e.props.initial && (t.initial = e.props.initial), t;
    }
    const t = {};
    for (let n = 0; n < ao; n++) {
      const r = oo[n],
        i = e.props[r];
      (ro(i) || !1 === i) && (t[r] = i);
    }
    return t;
  }
  const lo = [...io].reverse(),
    uo = io.length;
  function co(e) {
    return (t) =>
      Promise.all(
        t.map((t) => {
          let { animation: n, options: r } = t;
          return (function (e, t) {
            let n,
              r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
            if ((e.notify("AnimationStart", t), Array.isArray(t))) {
              const i = t.map((t) => eo(e, t, r));
              n = Promise.all(i);
            } else if ("string" === typeof t) n = eo(e, t, r);
            else {
              const i = "function" === typeof t ? Mt(e, t, r.custom) : t;
              n = Promise.all(Ji(e, i, r));
            }
            return n.then(() => {
              e.notify("AnimationComplete", t);
            });
          })(e, n, r);
        })
      );
  }
  function fo(e) {
    let t = co(e),
      n = mo(),
      r = !0;
    const i = (t) => (n, r) => {
      var i;
      const o = Mt(
        e,
        r,
        "exit" === t
          ? null === (i = e.presenceContext) || void 0 === i
            ? void 0
            : i.custom
          : void 0
      );
      if (o) {
        const { transition: e, transitionEnd: t, ...r } = o;
        n = { ...n, ...r, ...t };
      }
      return n;
    };
    function o(o) {
      const { props: a } = e,
        s = so(e.parent) || {},
        l = [],
        u = new Set();
      let c = {},
        d = 1 / 0;
      for (let t = 0; t < uo; t++) {
        const f = lo[t],
          h = n[f],
          p = void 0 !== a[f] ? a[f] : s[f],
          m = ro(p),
          g = f === o ? h.isActive : null;
        !1 === g && (d = t);
        let v = p === s[f] && p !== a[f] && m;
        if (
          (v && r && e.manuallyAnimateOnMount && (v = !1),
          (h.protectedKeys = { ...c }),
          (!h.isActive && null === g) ||
            (!p && !h.prevProp) ||
            jt(p) ||
            "boolean" === typeof p)
        )
          continue;
        const y = ho(h.prevProp, p);
        let b = y || (f === o && h.isActive && !v && m) || (t > d && m),
          w = !1;
        const x = Array.isArray(p) ? p : [p];
        let S = x.reduce(i(f), {});
        !1 === g && (S = {});
        const { prevResolvedValues: k = {} } = h,
          E = { ...k, ...S },
          C = (t) => {
            (b = !0),
              u.has(t) && ((w = !0), u.delete(t)),
              (h.needsAnimating[t] = !0);
            const n = e.getValue(t);
            n && (n.liveStyle = !1);
          };
        for (const e in E) {
          const t = S[e],
            n = k[e];
          if (c.hasOwnProperty(e)) continue;
          let r = !1;
          (r = yn(t) && yn(n) ? !no(t, n) : t !== n),
            r
              ? void 0 !== t && null !== t
                ? C(e)
                : u.add(e)
              : void 0 !== t && u.has(e)
              ? C(e)
              : (h.protectedKeys[e] = !0);
        }
        (h.prevProp = p),
          (h.prevResolvedValues = S),
          h.isActive && (c = { ...c, ...S }),
          r && e.blockInitialAnimation && (b = !1);
        b &&
          (!(v && y) || w) &&
          l.push(...x.map((e) => ({ animation: e, options: { type: f } })));
      }
      if (u.size) {
        const t = {};
        if ("boolean" !== typeof a.initial) {
          const n = Mt(e, Array.isArray(a.initial) ? a.initial[0] : a.initial);
          n && n.transition && (t.transition = n.transition);
        }
        u.forEach((n) => {
          const r = e.getBaseTarget(n),
            i = e.getValue(n);
          i && (i.liveStyle = !0),
            (t[n] = null !== r && void 0 !== r ? r : null);
        }),
          l.push({ animation: t });
      }
      let f = Boolean(l.length);
      return (
        !r ||
          (!1 !== a.initial && a.initial !== a.animate) ||
          e.manuallyAnimateOnMount ||
          (f = !1),
        (r = !1),
        f ? t(l) : Promise.resolve()
      );
    }
    return {
      animateChanges: o,
      setActive: function (t, r) {
        var i;
        if (n[t].isActive === r) return Promise.resolve();
        null === (i = e.variantChildren) ||
          void 0 === i ||
          i.forEach((e) => {
            var n;
            return null === (n = e.animationState) || void 0 === n
              ? void 0
              : n.setActive(t, r);
          }),
          (n[t].isActive = r);
        const a = o(t);
        for (const e in n) n[e].protectedKeys = {};
        return a;
      },
      setAnimateFunction: function (n) {
        t = n(e);
      },
      getState: () => n,
      reset: () => {
        (n = mo()), (r = !0);
      },
    };
  }
  function ho(e, t) {
    return "string" === typeof t ? t !== e : !!Array.isArray(t) && !no(t, e);
  }
  function po() {
    return {
      isActive: arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {},
    };
  }
  function mo() {
    return {
      animate: po(!0),
      whileInView: po(),
      whileHover: po(),
      whileTap: po(),
      whileDrag: po(),
      whileFocus: po(),
      exit: po(),
    };
  }
  class go {
    constructor(e) {
      (this.isMounted = !1), (this.node = e);
    }
    update() {}
  }
  let vo = 0;
  const yo = {
    animation: {
      Feature: class extends go {
        constructor(e) {
          super(e), e.animationState || (e.animationState = fo(e));
        }
        updateAnimationControlsSubscription() {
          const { animate: e } = this.node.getProps();
          jt(e) && (this.unmountControls = e.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          const { animate: e } = this.node.getProps(),
            { animate: t } = this.node.prevProps || {};
          e !== t && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var e;
          this.node.animationState.reset(),
            null === (e = this.unmountControls) || void 0 === e || e.call(this);
        }
      },
    },
    exit: {
      Feature: class extends go {
        constructor() {
          super(...arguments), (this.id = vo++);
        }
        update() {
          if (!this.node.presenceContext) return;
          const { isPresent: e, onExitComplete: t } = this.node.presenceContext,
            { isPresent: n } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || e === n) return;
          const r = this.node.animationState.setActive("exit", !e);
          t &&
            !e &&
            r.then(() => {
              t(this.id);
            });
        }
        mount() {
          const { register: e, onExitComplete: t } =
            this.node.presenceContext || {};
          t && t(this.id), e && (this.unmount = e(this.id));
        }
        unmount() {}
      },
    },
  };
  function bo(e, t, n) {
    let r =
      arguments.length > 3 && void 0 !== arguments[3]
        ? arguments[3]
        : { passive: !0 };
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
  }
  function wo(e) {
    return { point: { x: e.pageX, y: e.pageY } };
  }
  function xo(e, t, n, r) {
    return bo(
      e,
      t,
      (
        (e) => (t) =>
          an(t) && e(t, wo(t))
      )(n),
      r
    );
  }
  const So = (e, t) => Math.abs(e - t);
  class ko {
    constructor(e, t) {
      let {
        transformPagePoint: n,
        contextWindow: r,
        dragSnapToOrigin: i = !1,
      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      if (
        ((this.startEvent = null),
        (this.lastMoveEvent = null),
        (this.lastMoveEventInfo = null),
        (this.handlers = {}),
        (this.contextWindow = window),
        (this.updatePoint = () => {
          if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
          const e = Po(this.lastMoveEventInfo, this.history),
            t = null !== this.startEvent,
            n =
              (function (e, t) {
                const n = So(e.x, t.x),
                  r = So(e.y, t.y);
                return Math.sqrt(n ** 2 + r ** 2);
              })(e.offset, { x: 0, y: 0 }) >= 3;
          if (!t && !n) return;
          const { point: r } = e,
            { timestamp: i } = mt;
          this.history.push({ ...r, timestamp: i });
          const { onStart: o, onMove: a } = this.handlers;
          t ||
            (o && o(this.lastMoveEvent, e),
            (this.startEvent = this.lastMoveEvent)),
            a && a(this.lastMoveEvent, e);
        }),
        (this.handlePointerMove = (e, t) => {
          (this.lastMoveEvent = e),
            (this.lastMoveEventInfo = Eo(t, this.transformPagePoint)),
            ht.update(this.updatePoint, !0);
        }),
        (this.handlePointerUp = (e, t) => {
          this.end();
          const {
            onEnd: n,
            onSessionEnd: r,
            resumeAnimation: i,
          } = this.handlers;
          if (
            (this.dragSnapToOrigin && i && i(),
            !this.lastMoveEvent || !this.lastMoveEventInfo)
          )
            return;
          const o = Po(
            "pointercancel" === e.type
              ? this.lastMoveEventInfo
              : Eo(t, this.transformPagePoint),
            this.history
          );
          this.startEvent && n && n(e, o), r && r(e, o);
        }),
        !an(e))
      )
        return;
      (this.dragSnapToOrigin = i),
        (this.handlers = t),
        (this.transformPagePoint = n),
        (this.contextWindow = r || window);
      const o = Eo(wo(e), this.transformPagePoint),
        { point: a } = o,
        { timestamp: s } = mt;
      this.history = [{ ...a, timestamp: s }];
      const { onSessionStart: l } = t;
      l && l(e, Po(o, this.history)),
        (this.removeListeners = fi(
          xo(this.contextWindow, "pointermove", this.handlePointerMove),
          xo(this.contextWindow, "pointerup", this.handlePointerUp),
          xo(this.contextWindow, "pointercancel", this.handlePointerUp)
        ));
    }
    updateHandlers(e) {
      this.handlers = e;
    }
    end() {
      this.removeListeners && this.removeListeners(), pt(this.updatePoint);
    }
  }
  function Eo(e, t) {
    return t ? { point: t(e.point) } : e;
  }
  function Co(e, t) {
    return { x: e.x - t.x, y: e.y - t.y };
  }
  function Po(e, t) {
    let { point: n } = e;
    return {
      point: n,
      delta: Co(n, Ao(t)),
      offset: Co(n, To(t)),
      velocity: Ro(t, 0.1),
    };
  }
  function To(e) {
    return e[0];
  }
  function Ao(e) {
    return e[e.length - 1];
  }
  function Ro(e, t) {
    if (e.length < 2) return { x: 0, y: 0 };
    let n = e.length - 1,
      r = null;
    const i = Ao(e);
    for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > hn(t))); ) n--;
    if (!r) return { x: 0, y: 0 };
    const o = pn(i.timestamp - r.timestamp);
    if (0 === o) return { x: 0, y: 0 };
    const a = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
    return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
  }
  function Lo(e) {
    return (
      e &&
      "object" === typeof e &&
      Object.prototype.hasOwnProperty.call(e, "current")
    );
  }
  function jo(e) {
    return e.max - e.min;
  }
  function zo(e, t, n) {
    let r =
      arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.5;
    (e.origin = r),
      (e.originPoint = ii(t.min, t.max, e.origin)),
      (e.scale = jo(n) / jo(t)),
      (e.translate = ii(n.min, n.max, e.origin) - e.originPoint),
      ((e.scale >= 0.9999 && e.scale <= 1.0001) || isNaN(e.scale)) &&
        (e.scale = 1),
      ((e.translate >= -0.01 && e.translate <= 0.01) || isNaN(e.translate)) &&
        (e.translate = 0);
  }
  function Do(e, t, n, r) {
    zo(e.x, t.x, n.x, r ? r.originX : void 0),
      zo(e.y, t.y, n.y, r ? r.originY : void 0);
  }
  function Mo(e, t, n) {
    (e.min = n.min + t.min), (e.max = e.min + jo(t));
  }
  function Oo(e, t, n) {
    (e.min = t.min - n.min), (e.max = e.min + jo(t));
  }
  function No(e, t, n) {
    Oo(e.x, t.x, n.x), Oo(e.y, t.y, n.y);
  }
  function _o(e, t, n) {
    return {
      min: void 0 !== t ? e.min + t : void 0,
      max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0,
    };
  }
  function Fo(e, t) {
    let n = t.min - e.min,
      r = t.max - e.max;
    return (
      t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r }
    );
  }
  const Io = 0.35;
  function Vo(e, t, n) {
    return { min: Bo(e, t), max: Bo(e, n) };
  }
  function Bo(e, t) {
    return "number" === typeof e ? e : e[t] || 0;
  }
  const $o = () => ({ x: { min: 0, max: 0 }, y: { min: 0, max: 0 } });
  function Uo(e) {
    return [e("x"), e("y")];
  }
  function Wo(e) {
    let { top: t, left: n, right: r, bottom: i } = e;
    return { x: { min: n, max: r }, y: { min: t, max: i } };
  }
  function Ho(e) {
    return void 0 === e || 1 === e;
  }
  function Yo(e) {
    let { scale: t, scaleX: n, scaleY: r } = e;
    return !Ho(t) || !Ho(n) || !Ho(r);
  }
  function qo(e) {
    return (
      Yo(e) ||
      Ko(e) ||
      e.z ||
      e.rotate ||
      e.rotateX ||
      e.rotateY ||
      e.skewX ||
      e.skewY
    );
  }
  function Ko(e) {
    return Xo(e.x) || Xo(e.y);
  }
  function Xo(e) {
    return e && "0%" !== e;
  }
  function Qo(e, t, n) {
    return n + t * (e - n);
  }
  function Go(e, t, n, r, i) {
    return void 0 !== i && (e = Qo(e, i, r)), Qo(e, n, r) + t;
  }
  function Zo(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
      r = arguments.length > 3 ? arguments[3] : void 0,
      i = arguments.length > 4 ? arguments[4] : void 0;
    (e.min = Go(e.min, t, n, r, i)), (e.max = Go(e.max, t, n, r, i));
  }
  function Jo(e, t) {
    let { x: n, y: r } = t;
    Zo(e.x, n.translate, n.scale, n.originPoint),
      Zo(e.y, r.translate, r.scale, r.originPoint);
  }
  const ea = 0.999999999999,
    ta = 1.0000000000001;
  function na(e, t) {
    (e.min = e.min + t), (e.max = e.max + t);
  }
  function ra(e, t, n, r) {
    let i =
      arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0.5;
    Zo(e, t, n, ii(e.min, e.max, i), r);
  }
  function ia(e, t) {
    ra(e.x, t.x, t.scaleX, t.scale, t.originX),
      ra(e.y, t.y, t.scaleY, t.scale, t.originY);
  }
  function oa(e, t) {
    return Wo(
      (function (e, t) {
        if (!t) return e;
        const n = t({ x: e.left, y: e.top }),
          r = t({ x: e.right, y: e.bottom });
        return { top: n.y, left: n.x, bottom: r.y, right: r.x };
      })(e.getBoundingClientRect(), t)
    );
  }
  const aa = (e) => {
      let { current: t } = e;
      return t ? t.ownerDocument.defaultView : null;
    },
    sa = new WeakMap();
  class la {
    constructor(e) {
      (this.openDragLock = null),
        (this.isDragging = !1),
        (this.currentDirection = null),
        (this.originPoint = { x: 0, y: 0 }),
        (this.constraints = !1),
        (this.hasMutatedConstraints = !1),
        (this.elastic = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
        (this.visualElement = e);
    }
    start(e) {
      let { snapToCursor: t = !1 } =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const { presenceContext: n } = this.visualElement;
      if (n && !1 === n.isPresent) return;
      const { dragSnapToOrigin: r } = this.getProps();
      this.panSession = new ko(
        e,
        {
          onSessionStart: (e) => {
            const { dragSnapToOrigin: n } = this.getProps();
            n ? this.pauseAnimation() : this.stopAnimation(),
              t && this.snapToCursor(wo(e).point);
          },
          onStart: (e, t) => {
            const {
              drag: n,
              dragPropagation: r,
              onDragStart: i,
            } = this.getProps();
            if (
              n &&
              !r &&
              (this.openDragLock && this.openDragLock(),
              (this.openDragLock =
                "x" === (o = n) || "y" === o
                  ? en[o]
                    ? null
                    : ((en[o] = !0),
                      () => {
                        en[o] = !1;
                      })
                  : en.x || en.y
                  ? null
                  : ((en.x = en.y = !0),
                    () => {
                      en.x = en.y = !1;
                    })),
              !this.openDragLock)
            )
              return;
            var o;
            (this.isDragging = !0),
              (this.currentDirection = null),
              this.resolveConstraints(),
              this.visualElement.projection &&
                ((this.visualElement.projection.isAnimationBlocked = !0),
                (this.visualElement.projection.target = void 0)),
              Uo((e) => {
                let t = this.getAxisMotionValue(e).get() || 0;
                if (Zn.test(t)) {
                  const { projection: n } = this.visualElement;
                  if (n && n.layout) {
                    const r = n.layout.layoutBox[e];
                    if (r) {
                      t = jo(r) * (parseFloat(t) / 100);
                    }
                  }
                }
                this.originPoint[e] = t;
              }),
              i && ht.postRender(() => i(e, t)),
              xn(this.visualElement, "transform");
            const { animationState: a } = this.visualElement;
            a && a.setActive("whileDrag", !0);
          },
          onMove: (e, t) => {
            const {
              dragPropagation: n,
              dragDirectionLock: r,
              onDirectionLock: i,
              onDrag: o,
            } = this.getProps();
            if (!n && !this.openDragLock) return;
            const { offset: a } = t;
            if (r && null === this.currentDirection)
              return (
                (this.currentDirection = (function (e) {
                  let t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 10,
                    n = null;
                  Math.abs(e.y) > t
                    ? (n = "y")
                    : Math.abs(e.x) > t && (n = "x");
                  return n;
                })(a)),
                void (
                  null !== this.currentDirection &&
                  i &&
                  i(this.currentDirection)
                )
              );
            this.updateAxis("x", t.point, a),
              this.updateAxis("y", t.point, a),
              this.visualElement.render(),
              o && o(e, t);
          },
          onSessionEnd: (e, t) => this.stop(e, t),
          resumeAnimation: () =>
            Uo((e) => {
              var t;
              return (
                "paused" === this.getAnimationState(e) &&
                (null === (t = this.getAxisMotionValue(e).animation) ||
                void 0 === t
                  ? void 0
                  : t.play())
              );
            }),
        },
        {
          transformPagePoint: this.visualElement.getTransformPagePoint(),
          dragSnapToOrigin: r,
          contextWindow: aa(this.visualElement),
        }
      );
    }
    stop(e, t) {
      const n = this.isDragging;
      if ((this.cancel(), !n)) return;
      const { velocity: r } = t;
      this.startAnimation(r);
      const { onDragEnd: i } = this.getProps();
      i && ht.postRender(() => i(e, t));
    }
    cancel() {
      this.isDragging = !1;
      const { projection: e, animationState: t } = this.visualElement;
      e && (e.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        (this.panSession = void 0);
      const { dragPropagation: n } = this.getProps();
      !n &&
        this.openDragLock &&
        (this.openDragLock(), (this.openDragLock = null)),
        t && t.setActive("whileDrag", !1);
    }
    updateAxis(e, t, n) {
      const { drag: r } = this.getProps();
      if (!n || !ua(e, r, this.currentDirection)) return;
      const i = this.getAxisMotionValue(e);
      let o = this.originPoint[e] + n[e];
      this.constraints &&
        this.constraints[e] &&
        (o = (function (e, t, n) {
          let { min: r, max: i } = t;
          return (
            void 0 !== r && e < r
              ? (e = n ? ii(r, e, n.min) : Math.max(e, r))
              : void 0 !== i &&
                e > i &&
                (e = n ? ii(i, e, n.max) : Math.min(e, i)),
            e
          );
        })(o, this.constraints[e], this.elastic[e])),
        i.set(o);
    }
    resolveConstraints() {
      var e;
      const { dragConstraints: t, dragElastic: n } = this.getProps(),
        r =
          this.visualElement.projection && !this.visualElement.projection.layout
            ? this.visualElement.projection.measure(!1)
            : null === (e = this.visualElement.projection) || void 0 === e
            ? void 0
            : e.layout,
        i = this.constraints;
      t && Lo(t)
        ? this.constraints || (this.constraints = this.resolveRefConstraints())
        : (this.constraints =
            !(!t || !r) &&
            (function (e, t) {
              let { top: n, left: r, bottom: i, right: o } = t;
              return { x: _o(e.x, r, o), y: _o(e.y, n, i) };
            })(r.layoutBox, t)),
        (this.elastic = (function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Io;
          return (
            !1 === e ? (e = 0) : !0 === e && (e = Io),
            { x: Vo(e, "left", "right"), y: Vo(e, "top", "bottom") }
          );
        })(n)),
        i !== this.constraints &&
          r &&
          this.constraints &&
          !this.hasMutatedConstraints &&
          Uo((e) => {
            !1 !== this.constraints &&
              this.getAxisMotionValue(e) &&
              (this.constraints[e] = (function (e, t) {
                const n = {};
                return (
                  void 0 !== t.min && (n.min = t.min - e.min),
                  void 0 !== t.max && (n.max = t.max - e.min),
                  n
                );
              })(r.layoutBox[e], this.constraints[e]));
          });
    }
    resolveRefConstraints() {
      const { dragConstraints: e, onMeasureDragConstraints: t } =
        this.getProps();
      if (!e || !Lo(e)) return !1;
      const n = e.current;
      Ir(
        null !== n,
        "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
      );
      const { projection: r } = this.visualElement;
      if (!r || !r.layout) return !1;
      const i = (function (e, t, n) {
        const r = oa(e, n),
          { scroll: i } = t;
        return i && (na(r.x, i.offset.x), na(r.y, i.offset.y)), r;
      })(n, r.root, this.visualElement.getTransformPagePoint());
      let o = (function (e, t) {
        return { x: Fo(e.x, t.x), y: Fo(e.y, t.y) };
      })(r.layout.layoutBox, i);
      if (t) {
        const e = t(
          (function (e) {
            let { x: t, y: n } = e;
            return { top: n.min, right: t.max, bottom: n.max, left: t.min };
          })(o)
        );
        (this.hasMutatedConstraints = !!e), e && (o = Wo(e));
      }
      return o;
    }
    startAnimation(e) {
      const {
          drag: t,
          dragMomentum: n,
          dragElastic: r,
          dragTransition: i,
          dragSnapToOrigin: o,
          onDragTransitionEnd: a,
        } = this.getProps(),
        s = this.constraints || {},
        l = Uo((a) => {
          if (!ua(a, t, this.currentDirection)) return;
          let l = (s && s[a]) || {};
          o && (l = { min: 0, max: 0 });
          const u = r ? 200 : 1e6,
            c = r ? 40 : 1e7,
            d = {
              type: "inertia",
              velocity: n ? e[a] : 0,
              bounceStiffness: u,
              bounceDamping: c,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...i,
              ...l,
            };
          return this.startAxisValueAnimation(a, d);
        });
      return Promise.all(l).then(a);
    }
    startAxisValueAnimation(e, t) {
      const n = this.getAxisMotionValue(e);
      return (
        xn(this.visualElement, e),
        n.start(Gi(e, n, 0, t, this.visualElement, !1))
      );
    }
    stopAnimation() {
      Uo((e) => this.getAxisMotionValue(e).stop());
    }
    pauseAnimation() {
      Uo((e) => {
        var t;
        return null === (t = this.getAxisMotionValue(e).animation) ||
          void 0 === t
          ? void 0
          : t.pause();
      });
    }
    getAnimationState(e) {
      var t;
      return null === (t = this.getAxisMotionValue(e).animation) || void 0 === t
        ? void 0
        : t.state;
    }
    getAxisMotionValue(e) {
      const t = `_drag${e.toUpperCase()}`,
        n = this.visualElement.getProps(),
        r = n[t];
      return (
        r ||
        this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0)
      );
    }
    snapToCursor(e) {
      Uo((t) => {
        const { drag: n } = this.getProps();
        if (!ua(t, n, this.currentDirection)) return;
        const { projection: r } = this.visualElement,
          i = this.getAxisMotionValue(t);
        if (r && r.layout) {
          const { min: n, max: o } = r.layout.layoutBox[t];
          i.set(e[t] - ii(n, o, 0.5));
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      const { drag: e, dragConstraints: t } = this.getProps(),
        { projection: n } = this.visualElement;
      if (!Lo(t) || !n || !this.constraints) return;
      this.stopAnimation();
      const r = { x: 0, y: 0 };
      Uo((e) => {
        const t = this.getAxisMotionValue(e);
        if (t && !1 !== this.constraints) {
          const n = t.get();
          r[e] = (function (e, t) {
            let n = 0.5;
            const r = jo(e),
              i = jo(t);
            return (
              i > r
                ? (n = Kt(t.min, t.max - r, e.min))
                : r > i && (n = Kt(e.min, e.max - i, t.min)),
              Fn(0, 1, n)
            );
          })({ min: n, max: n }, this.constraints[e]);
        }
      });
      const { transformTemplate: i } = this.visualElement.getProps();
      (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
        n.root && n.root.updateScroll(),
        n.updateLayout(),
        this.resolveConstraints(),
        Uo((t) => {
          if (!ua(t, e, null)) return;
          const n = this.getAxisMotionValue(t),
            { min: i, max: o } = this.constraints[t];
          n.set(ii(i, o, r[t]));
        });
    }
    addListeners() {
      if (!this.visualElement.current) return;
      sa.set(this.visualElement, this);
      const e = xo(this.visualElement.current, "pointerdown", (e) => {
          const { drag: t, dragListener: n = !0 } = this.getProps();
          t && n && this.start(e);
        }),
        t = () => {
          const { dragConstraints: e } = this.getProps();
          Lo(e) &&
            e.current &&
            (this.constraints = this.resolveRefConstraints());
        },
        { projection: n } = this.visualElement,
        r = n.addEventListener("measure", t);
      n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()),
        ht.read(t);
      const i = bo(window, "resize", () =>
          this.scalePositionWithinConstraints()
        ),
        o = n.addEventListener("didUpdate", (e) => {
          let { delta: t, hasLayoutChanged: n } = e;
          this.isDragging &&
            n &&
            (Uo((e) => {
              const n = this.getAxisMotionValue(e);
              n &&
                ((this.originPoint[e] += t[e].translate),
                n.set(n.get() + t[e].translate));
            }),
            this.visualElement.render());
        });
      return () => {
        i(), e(), r(), o && o();
      };
    }
    getProps() {
      const e = this.visualElement.getProps(),
        {
          drag: t = !1,
          dragDirectionLock: n = !1,
          dragPropagation: r = !1,
          dragConstraints: i = !1,
          dragElastic: o = Io,
          dragMomentum: a = !0,
        } = e;
      return {
        ...e,
        drag: t,
        dragDirectionLock: n,
        dragPropagation: r,
        dragConstraints: i,
        dragElastic: o,
        dragMomentum: a,
      };
    }
  }
  function ua(e, t, n) {
    return (!0 === t || t === e) && (null === n || n === e);
  }
  const ca = (e) => (t, n) => {
    e && ht.postRender(() => e(t, n));
  };
  var da = n(579);
  const fa = (0, r.createContext)(null);
  const ha = (0, r.createContext)({}),
    pa = (0, r.createContext)({}),
    ma = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
  function ga(e, t) {
    return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
  }
  const va = {
      correct: (e, t) => {
        if (!t.target) return e;
        if ("string" === typeof e) {
          if (!Jn.test(e)) return e;
          e = parseFloat(e);
        }
        return `${ga(e, t.target.x)}% ${ga(e, t.target.y)}%`;
      },
    },
    ya = {
      correct: (e, t) => {
        let { treeScale: n, projectionDelta: r } = t;
        const i = e,
          o = hr.parse(e);
        if (o.length > 5) return i;
        const a = hr.createTransformer(e),
          s = "number" !== typeof o[0] ? 1 : 0,
          l = r.x.scale * n.x,
          u = r.y.scale * n.y;
        (o[0 + s] /= l), (o[1 + s] /= u);
        const c = ii(l, u, 0.5);
        return (
          "number" === typeof o[2 + s] && (o[2 + s] /= c),
          "number" === typeof o[3 + s] && (o[3 + s] /= c),
          a(o)
        );
      },
    },
    ba = {};
  const { schedule: wa, cancel: xa } = ft(queueMicrotask, !1);
  class Sa extends r.Component {
    componentDidMount() {
      const {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
          layoutId: r,
        } = this.props,
        { projection: i } = e;
      !(function (e) {
        for (const t in e) (ba[t] = e[t]), $r(t) && (ba[t].isCSSVariable = !0);
      })(Ea),
        i &&
          (t.group && t.group.add(i),
          n && n.register && r && n.register(i),
          i.root.didUpdate(),
          i.addEventListener("animationComplete", () => {
            this.safeToRemove();
          }),
          i.setOptions({
            ...i.options,
            onExitComplete: () => this.safeToRemove(),
          })),
        (ma.hasEverUpdated = !0);
    }
    getSnapshotBeforeUpdate(e) {
      const {
          layoutDependency: t,
          visualElement: n,
          drag: r,
          isPresent: i,
        } = this.props,
        o = n.projection;
      return o
        ? ((o.isPresent = i),
          r || e.layoutDependency !== t || void 0 === t
            ? o.willUpdate()
            : this.safeToRemove(),
          e.isPresent !== i &&
            (i
              ? o.promote()
              : o.relegate() ||
                ht.postRender(() => {
                  const e = o.getStack();
                  (e && e.members.length) || this.safeToRemove();
                })),
          null)
        : null;
    }
    componentDidUpdate() {
      const { projection: e } = this.props.visualElement;
      e &&
        (e.root.didUpdate(),
        wa.postRender(() => {
          !e.currentAnimation && e.isLead() && this.safeToRemove();
        }));
    }
    componentWillUnmount() {
      const {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
        } = this.props,
        { projection: r } = e;
      r &&
        (r.scheduleCheckAfterUnmount(),
        t && t.group && t.group.remove(r),
        n && n.deregister && n.deregister(r));
    }
    safeToRemove() {
      const { safeToRemove: e } = this.props;
      e && e();
    }
    render() {
      return null;
    }
  }
  function ka(e) {
    const [t, n] = (function () {
        let e =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const t = (0, r.useContext)(fa);
        if (null === t) return [!0, null];
        const { isPresent: n, onExitComplete: i, register: o } = t,
          a = (0, r.useId)();
        (0, r.useEffect)(() => {
          e && o(a);
        }, [e]);
        const s = (0, r.useCallback)(() => e && i && i(a), [a, i, e]);
        return !n && i ? [!1, s] : [!0];
      })(),
      i = (0, r.useContext)(ha);
    return (0, da.jsx)(Sa, {
      ...e,
      layoutGroup: i,
      switchLayoutGroup: (0, r.useContext)(pa),
      isPresent: t,
      safeToRemove: n,
    });
  }
  const Ea = {
    borderRadius: {
      ...va,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: va,
    borderTopRightRadius: va,
    borderBottomLeftRadius: va,
    borderBottomRightRadius: va,
    boxShadow: ya,
  };
  const Ca = (e, t) => e.depth - t.depth;
  class Pa {
    constructor() {
      (this.children = []), (this.isDirty = !1);
    }
    add(e) {
      wt(this.children, e), (this.isDirty = !0);
    }
    remove(e) {
      xt(this.children, e), (this.isDirty = !0);
    }
    forEach(e) {
      this.isDirty && this.children.sort(Ca),
        (this.isDirty = !1),
        this.children.forEach(e);
    }
  }
  function Ta(e, t) {
    const n = bt.now(),
      r = (i) => {
        let { timestamp: o } = i;
        const a = o - n;
        a >= t && (pt(r), e(a - t));
      };
    return ht.read(r, !0), () => pt(r);
  }
  function Aa(e) {
    const t = wn(e) ? e.get() : e;
    return (
      (n = t),
      Boolean(n && "object" === typeof n && n.mix && n.toValue)
        ? t.toValue()
        : t
    );
    var n;
  }
  const Ra = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    La = Ra.length,
    ja = (e) => ("string" === typeof e ? parseFloat(e) : e),
    za = (e) => "number" === typeof e || Jn.test(e);
  function Da(e, t) {
    return void 0 !== e[t] ? e[t] : e.borderRadius;
  }
  const Ma = Na(0, 0.5, On),
    Oa = Na(0.5, 0.95, ut);
  function Na(e, t, n) {
    return (r) => (r < e ? 0 : r > t ? 1 : n(Kt(e, t, r)));
  }
  function _a(e, t) {
    (e.min = t.min), (e.max = t.max);
  }
  function Fa(e, t) {
    _a(e.x, t.x), _a(e.y, t.y);
  }
  function Ia(e, t) {
    (e.translate = t.translate),
      (e.scale = t.scale),
      (e.originPoint = t.originPoint),
      (e.origin = t.origin);
  }
  function Va(e, t, n, r, i) {
    return (
      (e = Qo((e -= t), 1 / n, r)), void 0 !== i && (e = Qo(e, 1 / i, r)), e
    );
  }
  function Ba(e, t, n, r, i) {
    let [o, a, s] = n;
    !(function (e) {
      let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.5,
        i = arguments.length > 4 ? arguments[4] : void 0,
        o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : e,
        a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : e;
      Zn.test(t) &&
        ((t = parseFloat(t)), (t = ii(a.min, a.max, t / 100) - a.min));
      if ("number" !== typeof t) return;
      let s = ii(o.min, o.max, r);
      e === o && (s -= t),
        (e.min = Va(e.min, t, n, s, i)),
        (e.max = Va(e.max, t, n, s, i));
    })(e, t[o], t[a], t[s], t.scale, r, i);
  }
  const $a = ["x", "scaleX", "originX"],
    Ua = ["y", "scaleY", "originY"];
  function Wa(e, t, n, r) {
    Ba(e.x, t, $a, n ? n.x : void 0, r ? r.x : void 0),
      Ba(e.y, t, Ua, n ? n.y : void 0, r ? r.y : void 0);
  }
  function Ha(e) {
    return 0 === e.translate && 1 === e.scale;
  }
  function Ya(e) {
    return Ha(e.x) && Ha(e.y);
  }
  function qa(e, t) {
    return e.min === t.min && e.max === t.max;
  }
  function Ka(e, t) {
    return (
      Math.round(e.min) === Math.round(t.min) &&
      Math.round(e.max) === Math.round(t.max)
    );
  }
  function Xa(e, t) {
    return Ka(e.x, t.x) && Ka(e.y, t.y);
  }
  function Qa(e) {
    return jo(e.x) / jo(e.y);
  }
  function Ga(e, t) {
    return (
      e.translate === t.translate &&
      e.scale === t.scale &&
      e.originPoint === t.originPoint
    );
  }
  class Za {
    constructor() {
      this.members = [];
    }
    add(e) {
      wt(this.members, e), e.scheduleRender();
    }
    remove(e) {
      if (
        (xt(this.members, e),
        e === this.prevLead && (this.prevLead = void 0),
        e === this.lead)
      ) {
        const e = this.members[this.members.length - 1];
        e && this.promote(e);
      }
    }
    relegate(e) {
      const t = this.members.findIndex((t) => e === t);
      if (0 === t) return !1;
      let n;
      for (let r = t; r >= 0; r--) {
        const e = this.members[r];
        if (!1 !== e.isPresent) {
          n = e;
          break;
        }
      }
      return !!n && (this.promote(n), !0);
    }
    promote(e, t) {
      const n = this.lead;
      if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
        n.instance && n.scheduleRender(),
          e.scheduleRender(),
          (e.resumeFrom = n),
          t && (e.resumeFrom.preserveOpacity = !0),
          n.snapshot &&
            ((e.snapshot = n.snapshot),
            (e.snapshot.latestValues = n.animationValues || n.latestValues)),
          e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
        const { crossfade: r } = e.options;
        !1 === r && n.hide();
      }
    }
    exitAnimationComplete() {
      this.members.forEach((e) => {
        const { options: t, resumingFrom: n } = e;
        t.onExitComplete && t.onExitComplete(),
          n && n.options.onExitComplete && n.options.onExitComplete();
      });
    }
    scheduleRender() {
      this.members.forEach((e) => {
        e.instance && e.scheduleRender(!1);
      });
    }
    removeLeadSnapshot() {
      this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
    }
  }
  const Ja = { nodes: 0, calculatedTargetDeltas: 0, calculatedProjections: 0 },
    es = ["", "X", "Y", "Z"],
    ts = { visibility: "hidden" };
  let ns = 0;
  function rs(e, t, n, r) {
    const { latestValues: i } = t;
    i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
  }
  function is(e) {
    if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
    const { visualElement: t } = e.options;
    if (!t) return;
    const n = En(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
      const { layout: t, layoutId: r } = e.options;
      window.MotionCancelOptimisedAnimation(n, "transform", ht, !(t || r));
    }
    const { parent: r } = e;
    r && !r.hasCheckedOptimisedAppear && is(r);
  }
  function os(e) {
    let {
      attachResizeListener: t,
      defaultParent: n,
      measureScroll: r,
      checkIsScrollRoot: i,
      resetTransform: o,
    } = e;
    return class {
      constructor() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null === n || void 0 === n
              ? void 0
              : n();
        (this.id = ns++),
          (this.animationId = 0),
          (this.children = new Set()),
          (this.options = {}),
          (this.isTreeAnimating = !1),
          (this.isAnimationBlocked = !1),
          (this.isLayoutDirty = !1),
          (this.isProjectionDirty = !1),
          (this.isSharedProjectionDirty = !1),
          (this.isTransformDirty = !1),
          (this.updateManuallyBlocked = !1),
          (this.updateBlockedByResize = !1),
          (this.isUpdating = !1),
          (this.isSVG = !1),
          (this.needsReset = !1),
          (this.shouldResetTransform = !1),
          (this.hasCheckedOptimisedAppear = !1),
          (this.treeScale = { x: 1, y: 1 }),
          (this.eventHandlers = new Map()),
          (this.hasTreeAnimated = !1),
          (this.updateScheduled = !1),
          (this.scheduleUpdate = () => this.update()),
          (this.projectionUpdateScheduled = !1),
          (this.checkUpdateFailed = () => {
            this.isUpdating &&
              ((this.isUpdating = !1), this.clearAllSnapshots());
          }),
          (this.updateProjection = () => {
            (this.projectionUpdateScheduled = !1),
              dt.value &&
                (Ja.nodes =
                  Ja.calculatedTargetDeltas =
                  Ja.calculatedProjections =
                    0),
              this.nodes.forEach(ls),
              this.nodes.forEach(ms),
              this.nodes.forEach(gs),
              this.nodes.forEach(us),
              dt.addProjectionMetrics && dt.addProjectionMetrics(Ja);
          }),
          (this.resolvedRelativeTargetAt = 0),
          (this.hasProjected = !1),
          (this.isVisible = !0),
          (this.animationProgress = 0),
          (this.sharedNodes = new Map()),
          (this.latestValues = e),
          (this.root = t ? t.root || t : this),
          (this.path = t ? [...t.path, t] : []),
          (this.parent = t),
          (this.depth = t ? t.depth + 1 : 0);
        for (let n = 0; n < this.path.length; n++)
          this.path[n].shouldResetTransform = !0;
        this.root === this && (this.nodes = new Pa());
      }
      addEventListener(e, t) {
        return (
          this.eventHandlers.has(e) || this.eventHandlers.set(e, new St()),
          this.eventHandlers.get(e).add(t)
        );
      }
      notifyListeners(e) {
        const t = this.eventHandlers.get(e);
        for (
          var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1;
          i < n;
          i++
        )
          r[i - 1] = arguments[i];
        t && t.notify(...r);
      }
      hasListeners(e) {
        return this.eventHandlers.has(e);
      }
      mount(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : this.root.hasTreeAnimated;
        if (this.instance) return;
        var r;
        (this.isSVG = (r = e) instanceof SVGElement && "svg" !== r.tagName),
          (this.instance = e);
        const { layoutId: i, layout: o, visualElement: a } = this.options;
        if (
          (a && !a.current && a.mount(e),
          this.root.nodes.add(this),
          this.parent && this.parent.children.add(this),
          n && (o || i) && (this.isLayoutDirty = !0),
          t)
        ) {
          let n;
          const r = () => (this.root.updateBlockedByResize = !1);
          t(e, () => {
            (this.root.updateBlockedByResize = !0),
              n && n(),
              (n = Ta(r, 250)),
              ma.hasAnimatedSinceResize &&
                ((ma.hasAnimatedSinceResize = !1), this.nodes.forEach(ps));
          });
        }
        i && this.root.registerSharedNode(i, this),
          !1 !== this.options.animate &&
            a &&
            (i || o) &&
            this.addEventListener("didUpdate", (e) => {
              let {
                delta: t,
                hasLayoutChanged: n,
                hasRelativeLayoutChanged: r,
                layout: i,
              } = e;
              if (this.isTreeAnimationBlocked())
                return (
                  (this.target = void 0), void (this.relativeTarget = void 0)
                );
              const o =
                  this.options.transition || a.getDefaultTransition() || Ss,
                { onLayoutAnimationStart: s, onLayoutAnimationComplete: l } =
                  a.getProps(),
                u = !this.targetLayout || !Xa(this.targetLayout, i),
                c = !n && r;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                c ||
                (n && (u || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(t, c);
                const e = { ...It(o, "layout"), onPlay: s, onComplete: l };
                (a.shouldReduceMotion || this.options.layoutRoot) &&
                  ((e.delay = 0), (e.type = !1)),
                  this.startAnimation(e);
              } else
                n || ps(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = i;
            });
      }
      unmount() {
        this.options.layoutId && this.willUpdate(),
          this.root.nodes.remove(this);
        const e = this.getStack();
        e && e.remove(this),
          this.parent && this.parent.children.delete(this),
          (this.instance = void 0),
          pt(this.updateProjection);
      }
      blockUpdate() {
        this.updateManuallyBlocked = !0;
      }
      unblockUpdate() {
        this.updateManuallyBlocked = !1;
      }
      isUpdateBlocked() {
        return this.updateManuallyBlocked || this.updateBlockedByResize;
      }
      isTreeAnimationBlocked() {
        return (
          this.isAnimationBlocked ||
          (this.parent && this.parent.isTreeAnimationBlocked()) ||
          !1
        );
      }
      startUpdate() {
        this.isUpdateBlocked() ||
          ((this.isUpdating = !0),
          this.nodes && this.nodes.forEach(vs),
          this.animationId++);
      }
      getTransformTemplate() {
        const { visualElement: e } = this.options;
        return e && e.getProps().transformTemplate;
      }
      willUpdate() {
        let e =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked()))
          return void (
            this.options.onExitComplete && this.options.onExitComplete()
          );
        if (
          (window.MotionCancelOptimisedAnimation &&
            !this.hasCheckedOptimisedAppear &&
            is(this),
          !this.root.isUpdating && this.root.startUpdate(),
          this.isLayoutDirty)
        )
          return;
        this.isLayoutDirty = !0;
        for (let i = 0; i < this.path.length; i++) {
          const e = this.path[i];
          (e.shouldResetTransform = !0),
            e.updateScroll("snapshot"),
            e.options.layoutRoot && e.willUpdate(!1);
        }
        const { layoutId: t, layout: n } = this.options;
        if (void 0 === t && !n) return;
        const r = this.getTransformTemplate();
        (this.prevTransformTemplateValue = r
          ? r(this.latestValues, "")
          : void 0),
          this.updateSnapshot(),
          e && this.notifyListeners("willUpdate");
      }
      update() {
        this.updateScheduled = !1;
        if (this.isUpdateBlocked())
          return (
            this.unblockUpdate(),
            this.clearAllSnapshots(),
            void this.nodes.forEach(ds)
          );
        this.isUpdating || this.nodes.forEach(fs),
          (this.isUpdating = !1),
          this.nodes.forEach(hs),
          this.nodes.forEach(as),
          this.nodes.forEach(ss),
          this.clearAllSnapshots();
        const e = bt.now();
        (mt.delta = Fn(0, 1e3 / 60, e - mt.timestamp)),
          (mt.timestamp = e),
          (mt.isProcessing = !0),
          gt.update.process(mt),
          gt.preRender.process(mt),
          gt.render.process(mt),
          (mt.isProcessing = !1);
      }
      didUpdate() {
        this.updateScheduled ||
          ((this.updateScheduled = !0), wa.read(this.scheduleUpdate));
      }
      clearAllSnapshots() {
        this.nodes.forEach(cs), this.sharedNodes.forEach(ys);
      }
      scheduleUpdateProjection() {
        this.projectionUpdateScheduled ||
          ((this.projectionUpdateScheduled = !0),
          ht.preRender(this.updateProjection, !1, !0));
      }
      scheduleCheckAfterUnmount() {
        ht.postRender(() => {
          this.isLayoutDirty
            ? this.root.didUpdate()
            : this.root.checkUpdateFailed();
        });
      }
      updateSnapshot() {
        !this.snapshot &&
          this.instance &&
          ((this.snapshot = this.measure()),
          !this.snapshot ||
            jo(this.snapshot.measuredBox.x) ||
            jo(this.snapshot.measuredBox.y) ||
            (this.snapshot = void 0));
      }
      updateLayout() {
        if (!this.instance) return;
        if (
          (this.updateScroll(),
          (!this.options.alwaysMeasureLayout || !this.isLead()) &&
            !this.isLayoutDirty)
        )
          return;
        if (this.resumeFrom && !this.resumeFrom.instance)
          for (let n = 0; n < this.path.length; n++) {
            this.path[n].updateScroll();
          }
        const e = this.layout;
        (this.layout = this.measure(!1)),
          (this.layoutCorrected = {
            x: { min: 0, max: 0 },
            y: { min: 0, max: 0 },
          }),
          (this.isLayoutDirty = !1),
          (this.projectionDelta = void 0),
          this.notifyListeners("measure", this.layout.layoutBox);
        const { visualElement: t } = this.options;
        t &&
          t.notify(
            "LayoutMeasure",
            this.layout.layoutBox,
            e ? e.layoutBox : void 0
          );
      }
      updateScroll() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "measure",
          t = Boolean(this.options.layoutScroll && this.instance);
        if (
          (this.scroll &&
            this.scroll.animationId === this.root.animationId &&
            this.scroll.phase === e &&
            (t = !1),
          t)
        ) {
          const t = i(this.instance);
          this.scroll = {
            animationId: this.root.animationId,
            phase: e,
            isRoot: t,
            offset: r(this.instance),
            wasRoot: this.scroll ? this.scroll.isRoot : t,
          };
        }
      }
      resetTransform() {
        if (!o) return;
        const e =
            this.isLayoutDirty ||
            this.shouldResetTransform ||
            this.options.alwaysMeasureLayout,
          t = this.projectionDelta && !Ya(this.projectionDelta),
          n = this.getTransformTemplate(),
          r = n ? n(this.latestValues, "") : void 0,
          i = r !== this.prevTransformTemplateValue;
        e &&
          (t || qo(this.latestValues) || i) &&
          (o(this.instance, r),
          (this.shouldResetTransform = !1),
          this.scheduleRender());
      }
      measure() {
        let e =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        const t = this.measurePageBox();
        let n = this.removeElementScroll(t);
        var r;
        return (
          e && (n = this.removeTransform(n)),
          Cs((r = n).x),
          Cs(r.y),
          {
            animationId: this.root.animationId,
            measuredBox: t,
            layoutBox: n,
            latestValues: {},
            source: this.id,
          }
        );
      }
      measurePageBox() {
        var e;
        const { visualElement: t } = this.options;
        if (!t) return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
        const n = t.measureViewportBox();
        if (
          !(
            (null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot) ||
            this.path.some(Ts)
          )
        ) {
          const { scroll: e } = this.root;
          e && (na(n.x, e.offset.x), na(n.y, e.offset.y));
        }
        return n;
      }
      removeElementScroll(e) {
        var t;
        const n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
        if (
          (Fa(n, e),
          null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot)
        )
          return n;
        for (let r = 0; r < this.path.length; r++) {
          const t = this.path[r],
            { scroll: i, options: o } = t;
          t !== this.root &&
            i &&
            o.layoutScroll &&
            (i.wasRoot && Fa(n, e), na(n.x, i.offset.x), na(n.y, i.offset.y));
        }
        return n;
      }
      applyTransform(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
        Fa(n, e);
        for (let r = 0; r < this.path.length; r++) {
          const e = this.path[r];
          !t &&
            e.options.layoutScroll &&
            e.scroll &&
            e !== e.root &&
            ia(n, { x: -e.scroll.offset.x, y: -e.scroll.offset.y }),
            qo(e.latestValues) && ia(n, e.latestValues);
        }
        return qo(this.latestValues) && ia(n, this.latestValues), n;
      }
      removeTransform(e) {
        const t = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
        Fa(t, e);
        for (let n = 0; n < this.path.length; n++) {
          const e = this.path[n];
          if (!e.instance) continue;
          if (!qo(e.latestValues)) continue;
          Yo(e.latestValues) && e.updateSnapshot();
          const r = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
          Fa(r, e.measurePageBox()),
            Wa(
              t,
              e.latestValues,
              e.snapshot ? e.snapshot.layoutBox : void 0,
              r
            );
        }
        return qo(this.latestValues) && Wa(t, this.latestValues), t;
      }
      setTargetDelta(e) {
        (this.targetDelta = e),
          this.root.scheduleUpdateProjection(),
          (this.isProjectionDirty = !0);
      }
      setOptions(e) {
        this.options = {
          ...this.options,
          ...e,
          crossfade: void 0 === e.crossfade || e.crossfade,
        };
      }
      clearMeasurements() {
        (this.scroll = void 0),
          (this.layout = void 0),
          (this.snapshot = void 0),
          (this.prevTransformTemplateValue = void 0),
          (this.targetDelta = void 0),
          (this.target = void 0),
          (this.isLayoutDirty = !1);
      }
      forceRelativeParentToResolveTarget() {
        this.relativeParent &&
          this.relativeParent.resolvedRelativeTargetAt !== mt.timestamp &&
          this.relativeParent.resolveTargetDelta(!0);
      }
      resolveTargetDelta() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        var t;
        const n = this.getLead();
        this.isProjectionDirty ||
          (this.isProjectionDirty = n.isProjectionDirty),
          this.isTransformDirty || (this.isTransformDirty = n.isTransformDirty),
          this.isSharedProjectionDirty ||
            (this.isSharedProjectionDirty = n.isSharedProjectionDirty);
        const r = Boolean(this.resumingFrom) || this !== n;
        if (
          !(
            e ||
            (r && this.isSharedProjectionDirty) ||
            this.isProjectionDirty ||
            (null === (t = this.parent) || void 0 === t
              ? void 0
              : t.isProjectionDirty) ||
            this.attemptToResolveRelativeTarget ||
            this.root.updateBlockedByResize
          )
        )
          return;
        const { layout: i, layoutId: o } = this.options;
        if (this.layout && (i || o)) {
          if (
            ((this.resolvedRelativeTargetAt = mt.timestamp),
            !this.targetDelta && !this.relativeTarget)
          ) {
            const e = this.getClosestProjectingParent();
            e && e.layout && 1 !== this.animationProgress
              ? ((this.relativeParent = e),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = {
                  x: { min: 0, max: 0 },
                  y: { min: 0, max: 0 },
                }),
                (this.relativeTargetOrigin = {
                  x: { min: 0, max: 0 },
                  y: { min: 0, max: 0 },
                }),
                No(
                  this.relativeTargetOrigin,
                  this.layout.layoutBox,
                  e.layout.layoutBox
                ),
                Fa(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          if (this.relativeTarget || this.targetDelta) {
            var a, s, l;
            if (
              (this.target ||
                ((this.target = {
                  x: { min: 0, max: 0 },
                  y: { min: 0, max: 0 },
                }),
                (this.targetWithTransforms = {
                  x: { min: 0, max: 0 },
                  y: { min: 0, max: 0 },
                })),
              this.relativeTarget &&
              this.relativeTargetOrigin &&
              this.relativeParent &&
              this.relativeParent.target
                ? (this.forceRelativeParentToResolveTarget(),
                  (a = this.target),
                  (s = this.relativeTarget),
                  (l = this.relativeParent.target),
                  Mo(a.x, s.x, l.x),
                  Mo(a.y, s.y, l.y))
                : this.targetDelta
                ? (Boolean(this.resumingFrom)
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : Fa(this.target, this.layout.layoutBox),
                  Jo(this.target, this.targetDelta))
                : Fa(this.target, this.layout.layoutBox),
              this.attemptToResolveRelativeTarget)
            ) {
              this.attemptToResolveRelativeTarget = !1;
              const e = this.getClosestProjectingParent();
              e &&
              Boolean(e.resumingFrom) === Boolean(this.resumingFrom) &&
              !e.options.layoutScroll &&
              e.target &&
              1 !== this.animationProgress
                ? ((this.relativeParent = e),
                  this.forceRelativeParentToResolveTarget(),
                  (this.relativeTarget = {
                    x: { min: 0, max: 0 },
                    y: { min: 0, max: 0 },
                  }),
                  (this.relativeTargetOrigin = {
                    x: { min: 0, max: 0 },
                    y: { min: 0, max: 0 },
                  }),
                  No(this.relativeTargetOrigin, this.target, e.target),
                  Fa(this.relativeTarget, this.relativeTargetOrigin))
                : (this.relativeParent = this.relativeTarget = void 0);
            }
            dt.value && Ja.calculatedTargetDeltas++;
          }
        }
      }
      getClosestProjectingParent() {
        if (
          this.parent &&
          !Yo(this.parent.latestValues) &&
          !Ko(this.parent.latestValues)
        )
          return this.parent.isProjecting()
            ? this.parent
            : this.parent.getClosestProjectingParent();
      }
      isProjecting() {
        return Boolean(
          (this.relativeTarget ||
            this.targetDelta ||
            this.options.layoutRoot) &&
            this.layout
        );
      }
      calcProjection() {
        var e;
        const t = this.getLead(),
          n = Boolean(this.resumingFrom) || this !== t;
        let r = !0;
        if (
          ((this.isProjectionDirty ||
            (null === (e = this.parent) || void 0 === e
              ? void 0
              : e.isProjectionDirty)) &&
            (r = !1),
          n &&
            (this.isSharedProjectionDirty || this.isTransformDirty) &&
            (r = !1),
          this.resolvedRelativeTargetAt === mt.timestamp && (r = !1),
          r)
        )
          return;
        const { layout: i, layoutId: o } = this.options;
        if (
          ((this.isTreeAnimating = Boolean(
            (this.parent && this.parent.isTreeAnimating) ||
              this.currentAnimation ||
              this.pendingAnimation
          )),
          this.isTreeAnimating ||
            (this.targetDelta = this.relativeTarget = void 0),
          !this.layout || (!i && !o))
        )
          return;
        Fa(this.layoutCorrected, this.layout.layoutBox);
        const a = this.treeScale.x,
          s = this.treeScale.y;
        !(function (e, t, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          const i = n.length;
          if (!i) return;
          let o, a;
          t.x = t.y = 1;
          for (let s = 0; s < i; s++) {
            (o = n[s]), (a = o.projectionDelta);
            const { visualElement: i } = o.options;
            (i && i.props.style && "contents" === i.props.style.display) ||
              (r &&
                o.options.layoutScroll &&
                o.scroll &&
                o !== o.root &&
                ia(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
              a && ((t.x *= a.x.scale), (t.y *= a.y.scale), Jo(e, a)),
              r && qo(o.latestValues) && ia(e, o.latestValues));
          }
          t.x < ta && t.x > ea && (t.x = 1), t.y < ta && t.y > ea && (t.y = 1);
        })(this.layoutCorrected, this.treeScale, this.path, n),
          !t.layout ||
            t.target ||
            (1 === this.treeScale.x && 1 === this.treeScale.y) ||
            ((t.target = t.layout.layoutBox),
            (t.targetWithTransforms = {
              x: { min: 0, max: 0 },
              y: { min: 0, max: 0 },
            }));
        const { target: l } = t;
        l
          ? (this.projectionDelta && this.prevProjectionDelta
              ? (Ia(this.prevProjectionDelta.x, this.projectionDelta.x),
                Ia(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
            Do(
              this.projectionDelta,
              this.layoutCorrected,
              l,
              this.latestValues
            ),
            (this.treeScale.x === a &&
              this.treeScale.y === s &&
              Ga(this.projectionDelta.x, this.prevProjectionDelta.x) &&
              Ga(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
              ((this.hasProjected = !0),
              this.scheduleRender(),
              this.notifyListeners("projectionUpdate", l)),
            dt.value && Ja.calculatedProjections++)
          : this.prevProjectionDelta &&
            (this.createProjectionDeltas(), this.scheduleRender());
      }
      hide() {
        this.isVisible = !1;
      }
      show() {
        this.isVisible = !0;
      }
      scheduleRender() {
        let e =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        var t;
        if (
          (null === (t = this.options.visualElement) ||
            void 0 === t ||
            t.scheduleRender(),
          e)
        ) {
          const e = this.getStack();
          e && e.scheduleRender();
        }
        this.resumingFrom &&
          !this.resumingFrom.instance &&
          (this.resumingFrom = void 0);
      }
      createProjectionDeltas() {
        (this.prevProjectionDelta = {
          x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
        }),
          (this.projectionDelta = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          }),
          (this.projectionDeltaWithTransform = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          });
      }
      setAnimationOrigin(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const n = this.snapshot,
          r = n ? n.latestValues : {},
          i = { ...this.latestValues },
          o = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          };
        (this.relativeParent && this.relativeParent.options.layoutRoot) ||
          (this.relativeTarget = this.relativeTargetOrigin = void 0),
          (this.attemptToResolveRelativeTarget = !t);
        const a = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } },
          s =
            (n ? n.source : void 0) !==
            (this.layout ? this.layout.source : void 0),
          l = this.getStack(),
          u = !l || l.members.length <= 1,
          c = Boolean(
            s && !u && !0 === this.options.crossfade && !this.path.some(xs)
          );
        let d;
        (this.animationProgress = 0),
          (this.mixTargetDelta = (t) => {
            const n = t / 1e3;
            var l, f, h, p, m, g;
            bs(o.x, e.x, n),
              bs(o.y, e.y, n),
              this.setTargetDelta(o),
              this.relativeTarget &&
                this.relativeTargetOrigin &&
                this.layout &&
                this.relativeParent &&
                this.relativeParent.layout &&
                (No(
                  a,
                  this.layout.layoutBox,
                  this.relativeParent.layout.layoutBox
                ),
                (h = this.relativeTarget),
                (p = this.relativeTargetOrigin),
                (m = a),
                (g = n),
                ws(h.x, p.x, m.x, g),
                ws(h.y, p.y, m.y, g),
                d &&
                  ((l = this.relativeTarget),
                  (f = d),
                  qa(l.x, f.x) && qa(l.y, f.y)) &&
                  (this.isProjectionDirty = !1),
                d || (d = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
                Fa(d, this.relativeTarget)),
              s &&
                ((this.animationValues = i),
                (function (e, t, n, r, i, o) {
                  i
                    ? ((e.opacity = ii(
                        0,
                        void 0 !== n.opacity ? n.opacity : 1,
                        Ma(r)
                      )),
                      (e.opacityExit = ii(
                        void 0 !== t.opacity ? t.opacity : 1,
                        0,
                        Oa(r)
                      )))
                    : o &&
                      (e.opacity = ii(
                        void 0 !== t.opacity ? t.opacity : 1,
                        void 0 !== n.opacity ? n.opacity : 1,
                        r
                      ));
                  for (let a = 0; a < La; a++) {
                    const i = `border${Ra[a]}Radius`;
                    let o = Da(t, i),
                      s = Da(n, i);
                    (void 0 === o && void 0 === s) ||
                      (o || (o = 0),
                      s || (s = 0),
                      0 === o || 0 === s || za(o) === za(s)
                        ? ((e[i] = Math.max(ii(ja(o), ja(s), r), 0)),
                          (Zn.test(s) || Zn.test(o)) && (e[i] += "%"))
                        : (e[i] = s));
                  }
                  (t.rotate || n.rotate) &&
                    (e.rotate = ii(t.rotate || 0, n.rotate || 0, r));
                })(i, r, this.latestValues, n, c, u)),
              this.root.scheduleUpdateProjection(),
              this.scheduleRender(),
              (this.animationProgress = n);
          }),
          this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
      }
      startAnimation(e) {
        this.notifyListeners("animationStart"),
          this.currentAnimation && this.currentAnimation.stop(),
          this.resumingFrom &&
            this.resumingFrom.currentAnimation &&
            this.resumingFrom.currentAnimation.stop(),
          this.pendingAnimation &&
            (pt(this.pendingAnimation), (this.pendingAnimation = void 0)),
          (this.pendingAnimation = ht.update(() => {
            (ma.hasAnimatedSinceResize = !0),
              ri.layout++,
              (this.currentAnimation = (function (e, t, n) {
                const r = wn(e) ? e : Pt(e);
                return r.start(Gi("", r, t, n)), r.animation;
              })(0, 1e3, {
                ...e,
                onUpdate: (t) => {
                  this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
                },
                onStop: () => {
                  ri.layout--;
                },
                onComplete: () => {
                  ri.layout--,
                    e.onComplete && e.onComplete(),
                    this.completeAnimation();
                },
              })),
              this.resumingFrom &&
                (this.resumingFrom.currentAnimation = this.currentAnimation),
              (this.pendingAnimation = void 0);
          }));
      }
      completeAnimation() {
        this.resumingFrom &&
          ((this.resumingFrom.currentAnimation = void 0),
          (this.resumingFrom.preserveOpacity = void 0));
        const e = this.getStack();
        e && e.exitAnimationComplete(),
          (this.resumingFrom =
            this.currentAnimation =
            this.animationValues =
              void 0),
          this.notifyListeners("animationComplete");
      }
      finishAnimation() {
        this.currentAnimation &&
          (this.mixTargetDelta && this.mixTargetDelta(1e3),
          this.currentAnimation.stop()),
          this.completeAnimation();
      }
      applyTransformsToTarget() {
        const e = this.getLead();
        let {
          targetWithTransforms: t,
          target: n,
          layout: r,
          latestValues: i,
        } = e;
        if (t && n && r) {
          if (
            this !== e &&
            this.layout &&
            r &&
            Ps(this.options.animationType, this.layout.layoutBox, r.layoutBox)
          ) {
            n = this.target || { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
            const t = jo(this.layout.layoutBox.x);
            (n.x.min = e.target.x.min), (n.x.max = n.x.min + t);
            const r = jo(this.layout.layoutBox.y);
            (n.y.min = e.target.y.min), (n.y.max = n.y.min + r);
          }
          Fa(t, n),
            ia(t, i),
            Do(this.projectionDeltaWithTransform, this.layoutCorrected, t, i);
        }
      }
      registerSharedNode(e, t) {
        this.sharedNodes.has(e) || this.sharedNodes.set(e, new Za());
        this.sharedNodes.get(e).add(t);
        const n = t.options.initialPromotionConfig;
        t.promote({
          transition: n ? n.transition : void 0,
          preserveFollowOpacity:
            n && n.shouldPreserveFollowOpacity
              ? n.shouldPreserveFollowOpacity(t)
              : void 0,
        });
      }
      isLead() {
        const e = this.getStack();
        return !e || e.lead === this;
      }
      getLead() {
        var e;
        const { layoutId: t } = this.options;
        return (
          (t &&
            (null === (e = this.getStack()) || void 0 === e
              ? void 0
              : e.lead)) ||
          this
        );
      }
      getPrevLead() {
        var e;
        const { layoutId: t } = this.options;
        return t
          ? null === (e = this.getStack()) || void 0 === e
            ? void 0
            : e.prevLead
          : void 0;
      }
      getStack() {
        const { layoutId: e } = this.options;
        if (e) return this.root.sharedNodes.get(e);
      }
      promote() {
        let {
          needsReset: e,
          transition: t,
          preserveFollowOpacity: n,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const r = this.getStack();
        r && r.promote(this, n),
          e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
          t && this.setOptions({ transition: t });
      }
      relegate() {
        const e = this.getStack();
        return !!e && e.relegate(this);
      }
      resetSkewAndRotation() {
        const { visualElement: e } = this.options;
        if (!e) return;
        let t = !1;
        const { latestValues: n } = e;
        if (
          ((n.z ||
            n.rotate ||
            n.rotateX ||
            n.rotateY ||
            n.rotateZ ||
            n.skewX ||
            n.skewY) &&
            (t = !0),
          !t)
        )
          return;
        const r = {};
        n.z && rs("z", e, r, this.animationValues);
        for (let i = 0; i < es.length; i++)
          rs(`rotate${es[i]}`, e, r, this.animationValues),
            rs(`skew${es[i]}`, e, r, this.animationValues);
        e.render();
        for (const i in r)
          e.setStaticValue(i, r[i]),
            this.animationValues && (this.animationValues[i] = r[i]);
        e.scheduleRender();
      }
      getProjectionStyles(e) {
        var t, n;
        if (!this.instance || this.isSVG) return;
        if (!this.isVisible) return ts;
        const r = { visibility: "" },
          i = this.getTransformTemplate();
        if (this.needsReset)
          return (
            (this.needsReset = !1),
            (r.opacity = ""),
            (r.pointerEvents =
              Aa(null === e || void 0 === e ? void 0 : e.pointerEvents) || ""),
            (r.transform = i ? i(this.latestValues, "") : "none"),
            r
          );
        const o = this.getLead();
        if (!this.projectionDelta || !this.layout || !o.target) {
          const t = {};
          return (
            this.options.layoutId &&
              ((t.opacity =
                void 0 !== this.latestValues.opacity
                  ? this.latestValues.opacity
                  : 1),
              (t.pointerEvents =
                Aa(null === e || void 0 === e ? void 0 : e.pointerEvents) ||
                "")),
            this.hasProjected &&
              !qo(this.latestValues) &&
              ((t.transform = i ? i({}, "") : "none"),
              (this.hasProjected = !1)),
            t
          );
        }
        const a = o.animationValues || o.latestValues;
        this.applyTransformsToTarget(),
          (r.transform = (function (e, t, n) {
            let r = "";
            const i = e.x.translate / t.x,
              o = e.y.translate / t.y,
              a = (null === n || void 0 === n ? void 0 : n.z) || 0;
            if (
              ((i || o || a) && (r = `translate3d(${i}px, ${o}px, ${a}px) `),
              (1 === t.x && 1 === t.y) ||
                (r += `scale(${1 / t.x}, ${1 / t.y}) `),
              n)
            ) {
              const {
                transformPerspective: e,
                rotate: t,
                rotateX: i,
                rotateY: o,
                skewX: a,
                skewY: s,
              } = n;
              e && (r = `perspective(${e}px) ${r}`),
                t && (r += `rotate(${t}deg) `),
                i && (r += `rotateX(${i}deg) `),
                o && (r += `rotateY(${o}deg) `),
                a && (r += `skewX(${a}deg) `),
                s && (r += `skewY(${s}deg) `);
            }
            const s = e.x.scale * t.x,
              l = e.y.scale * t.y;
            return (
              (1 === s && 1 === l) || (r += `scale(${s}, ${l})`), r || "none"
            );
          })(this.projectionDeltaWithTransform, this.treeScale, a)),
          i && (r.transform = i(a, r.transform));
        const { x: s, y: l } = this.projectionDelta;
        (r.transformOrigin = `${100 * s.origin}% ${100 * l.origin}% 0`),
          o.animationValues
            ? (r.opacity =
                o === this
                  ? null !==
                      (n =
                        null !== (t = a.opacity) && void 0 !== t
                          ? t
                          : this.latestValues.opacity) && void 0 !== n
                    ? n
                    : 1
                  : this.preserveOpacity
                  ? this.latestValues.opacity
                  : a.opacityExit)
            : (r.opacity =
                o === this
                  ? void 0 !== a.opacity
                    ? a.opacity
                    : ""
                  : void 0 !== a.opacityExit
                  ? a.opacityExit
                  : 0);
        for (const u in ba) {
          if (void 0 === a[u]) continue;
          const { correct: e, applyTo: t, isCSSVariable: n } = ba[u],
            i = "none" === r.transform ? a[u] : e(a[u], o);
          if (t) {
            const e = t.length;
            for (let n = 0; n < e; n++) r[t[n]] = i;
          } else
            n
              ? (this.options.visualElement.renderState.vars[u] = i)
              : (r[u] = i);
        }
        return (
          this.options.layoutId &&
            (r.pointerEvents =
              o === this
                ? Aa(null === e || void 0 === e ? void 0 : e.pointerEvents) ||
                  ""
                : "none"),
          r
        );
      }
      clearSnapshot() {
        this.resumeFrom = this.snapshot = void 0;
      }
      resetTree() {
        this.root.nodes.forEach((e) => {
          var t;
          return null === (t = e.currentAnimation) || void 0 === t
            ? void 0
            : t.stop();
        }),
          this.root.nodes.forEach(ds),
          this.root.sharedNodes.clear();
      }
    };
  }
  function as(e) {
    e.updateLayout();
  }
  function ss(e) {
    var t;
    const n =
      (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) ||
      e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
      const { layoutBox: t, measuredBox: r } = e.layout,
        { animationType: i } = e.options,
        o = n.source !== e.layout.source;
      "size" === i
        ? Uo((e) => {
            const r = o ? n.measuredBox[e] : n.layoutBox[e],
              i = jo(r);
            (r.min = t[e].min), (r.max = r.min + i);
          })
        : Ps(i, n.layoutBox, t) &&
          Uo((r) => {
            const i = o ? n.measuredBox[r] : n.layoutBox[r],
              a = jo(t[r]);
            (i.max = i.min + a),
              e.relativeTarget &&
                !e.currentAnimation &&
                ((e.isProjectionDirty = !0),
                (e.relativeTarget[r].max = e.relativeTarget[r].min + a));
          });
      const a = {
        x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
        y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
      };
      Do(a, t, n.layoutBox);
      const s = {
        x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
        y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
      };
      o ? Do(s, e.applyTransform(r, !0), n.measuredBox) : Do(s, t, n.layoutBox);
      const l = !Ya(a);
      let u = !1;
      if (!e.resumeFrom) {
        const r = e.getClosestProjectingParent();
        if (r && !r.resumeFrom) {
          const { snapshot: i, layout: o } = r;
          if (i && o) {
            const a = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
            No(a, n.layoutBox, i.layoutBox);
            const s = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
            No(s, t, o.layoutBox),
              Xa(a, s) || (u = !0),
              r.options.layoutRoot &&
                ((e.relativeTarget = s),
                (e.relativeTargetOrigin = a),
                (e.relativeParent = r));
          }
        }
      }
      e.notifyListeners("didUpdate", {
        layout: t,
        snapshot: n,
        delta: s,
        layoutDelta: a,
        hasLayoutChanged: l,
        hasRelativeLayoutChanged: u,
      });
    } else if (e.isLead()) {
      const { onExitComplete: t } = e.options;
      t && t();
    }
    e.options.transition = void 0;
  }
  function ls(e) {
    dt.value && Ja.nodes++,
      e.parent &&
        (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
        e.isSharedProjectionDirty ||
          (e.isSharedProjectionDirty = Boolean(
            e.isProjectionDirty ||
              e.parent.isProjectionDirty ||
              e.parent.isSharedProjectionDirty
          )),
        e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
  }
  function us(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
  }
  function cs(e) {
    e.clearSnapshot();
  }
  function ds(e) {
    e.clearMeasurements();
  }
  function fs(e) {
    e.isLayoutDirty = !1;
  }
  function hs(e) {
    const { visualElement: t } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
      e.resetTransform();
  }
  function ps(e) {
    e.finishAnimation(),
      (e.targetDelta = e.relativeTarget = e.target = void 0),
      (e.isProjectionDirty = !0);
  }
  function ms(e) {
    e.resolveTargetDelta();
  }
  function gs(e) {
    e.calcProjection();
  }
  function vs(e) {
    e.resetSkewAndRotation();
  }
  function ys(e) {
    e.removeLeadSnapshot();
  }
  function bs(e, t, n) {
    (e.translate = ii(t.translate, 0, n)),
      (e.scale = ii(t.scale, 1, n)),
      (e.origin = t.origin),
      (e.originPoint = t.originPoint);
  }
  function ws(e, t, n, r) {
    (e.min = ii(t.min, n.min, r)), (e.max = ii(t.max, n.max, r));
  }
  function xs(e) {
    return e.animationValues && void 0 !== e.animationValues.opacityExit;
  }
  const Ss = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
    ks = (e) =>
      "undefined" !== typeof navigator &&
      navigator.userAgent &&
      navigator.userAgent.toLowerCase().includes(e),
    Es = ks("applewebkit/") && !ks("chrome/") ? Math.round : ut;
  function Cs(e) {
    (e.min = Es(e.min)), (e.max = Es(e.max));
  }
  function Ps(e, t, n) {
    return (
      "position" === e ||
      ("preserve-aspect" === e &&
        ((r = Qa(t)), (i = Qa(n)), (o = 0.2), !(Math.abs(r - i) <= o)))
    );
    var r, i, o;
  }
  function Ts(e) {
    var t;
    return (
      e !== e.root &&
      (null === (t = e.scroll) || void 0 === t ? void 0 : t.wasRoot)
    );
  }
  const As = os({
      attachResizeListener: (e, t) => bo(e, "resize", t),
      measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop,
      }),
      checkIsScrollRoot: () => !0,
    }),
    Rs = { current: void 0 },
    Ls = os({
      measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
      defaultParent: () => {
        if (!Rs.current) {
          const e = new As({});
          e.mount(window), e.setOptions({ layoutScroll: !0 }), (Rs.current = e);
        }
        return Rs.current;
      },
      resetTransform: (e, t) => {
        e.style.transform = void 0 !== t ? t : "none";
      },
      checkIsScrollRoot: (e) =>
        Boolean("fixed" === window.getComputedStyle(e).position),
    }),
    js = {
      pan: {
        Feature: class extends go {
          constructor() {
            super(...arguments), (this.removePointerDownListener = ut);
          }
          onPointerDown(e) {
            this.session = new ko(e, this.createPanHandlers(), {
              transformPagePoint: this.node.getTransformPagePoint(),
              contextWindow: aa(this.node),
            });
          }
          createPanHandlers() {
            const {
              onPanSessionStart: e,
              onPanStart: t,
              onPan: n,
              onPanEnd: r,
            } = this.node.getProps();
            return {
              onSessionStart: ca(e),
              onStart: ca(t),
              onMove: n,
              onEnd: (e, t) => {
                delete this.session, r && ht.postRender(() => r(e, t));
              },
            };
          }
          mount() {
            this.removePointerDownListener = xo(
              this.node.current,
              "pointerdown",
              (e) => this.onPointerDown(e)
            );
          }
          update() {
            this.session &&
              this.session.updateHandlers(this.createPanHandlers());
          }
          unmount() {
            this.removePointerDownListener(),
              this.session && this.session.end();
          }
        },
      },
      drag: {
        Feature: class extends go {
          constructor(e) {
            super(e),
              (this.removeGroupControls = ut),
              (this.removeListeners = ut),
              (this.controls = new la(e));
          }
          mount() {
            const { dragControls: e } = this.node.getProps();
            e && (this.removeGroupControls = e.subscribe(this.controls)),
              (this.removeListeners = this.controls.addListeners() || ut);
          }
          unmount() {
            this.removeGroupControls(), this.removeListeners();
          }
        },
        ProjectionNode: Ls,
        MeasureLayout: ka,
      },
    };
  function zs(e, t, n) {
    const { props: r } = e;
    e.animationState &&
      r.whileHover &&
      e.animationState.setActive("whileHover", "Start" === n);
    const i = r["onHover" + n];
    i && ht.postRender(() => i(t, wo(t)));
  }
  function Ds(e, t, n) {
    const { props: r } = e;
    if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
    e.animationState &&
      r.whileTap &&
      e.animationState.setActive("whileTap", "Start" === n);
    const i = r["onTap" + ("End" === n ? "" : n)];
    i && ht.postRender(() => i(t, wo(t)));
  }
  const Ms = new WeakMap(),
    Os = new WeakMap(),
    Ns = (e) => {
      const t = Ms.get(e.target);
      t && t(e);
    },
    _s = (e) => {
      e.forEach(Ns);
    };
  function Fs(e, t, n) {
    const r = (function (e) {
      let { root: t, ...n } = e;
      const r = t || document;
      Os.has(r) || Os.set(r, {});
      const i = Os.get(r),
        o = JSON.stringify(n);
      return (
        i[o] || (i[o] = new IntersectionObserver(_s, { root: t, ...n })), i[o]
      );
    })(t);
    return (
      Ms.set(e, n),
      r.observe(e),
      () => {
        Ms.delete(e), r.unobserve(e);
      }
    );
  }
  const Is = { some: 0, all: 1 };
  const Vs = {
      inView: {
        Feature: class extends go {
          constructor() {
            super(...arguments),
              (this.hasEnteredView = !1),
              (this.isInView = !1);
          }
          startObserver() {
            this.unmount();
            const { viewport: e = {} } = this.node.getProps(),
              { root: t, margin: n, amount: r = "some", once: i } = e,
              o = {
                root: t ? t.current : void 0,
                rootMargin: n,
                threshold: "number" === typeof r ? r : Is[r],
              };
            return Fs(this.node.current, o, (e) => {
              const { isIntersecting: t } = e;
              if (this.isInView === t) return;
              if (((this.isInView = t), i && !t && this.hasEnteredView)) return;
              t && (this.hasEnteredView = !0),
                this.node.animationState &&
                  this.node.animationState.setActive("whileInView", t);
              const { onViewportEnter: n, onViewportLeave: r } =
                  this.node.getProps(),
                o = t ? n : r;
              o && o(e);
            });
          }
          mount() {
            this.startObserver();
          }
          update() {
            if ("undefined" === typeof IntersectionObserver) return;
            const { props: e, prevProps: t } = this.node,
              n = ["amount", "margin", "root"].some(
                (function (e) {
                  let { viewport: t = {} } = e,
                    { viewport: n = {} } =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                  return (e) => t[e] !== n[e];
                })(e, t)
              );
            n && this.startObserver();
          }
          unmount() {}
        },
      },
      tap: {
        Feature: class extends go {
          mount() {
            const { current: e } = this.node;
            e &&
              (this.unmount = fn(
                e,
                (e, t) => (
                  Ds(this.node, t, "Start"),
                  (e, t) => {
                    let { success: n } = t;
                    return Ds(this.node, e, n ? "End" : "Cancel");
                  }
                ),
                { useGlobalTarget: this.node.props.globalTapTarget }
              ));
          }
          unmount() {}
        },
      },
      focus: {
        Feature: class extends go {
          constructor() {
            super(...arguments), (this.isActive = !1);
          }
          onFocus() {
            let e = !1;
            try {
              e = this.node.current.matches(":focus-visible");
            } catch (vu) {
              e = !0;
            }
            e &&
              this.node.animationState &&
              (this.node.animationState.setActive("whileFocus", !0),
              (this.isActive = !0));
          }
          onBlur() {
            this.isActive &&
              this.node.animationState &&
              (this.node.animationState.setActive("whileFocus", !1),
              (this.isActive = !1));
          }
          mount() {
            this.unmount = fi(
              bo(this.node.current, "focus", () => this.onFocus()),
              bo(this.node.current, "blur", () => this.onBlur())
            );
          }
          unmount() {}
        },
      },
      hover: {
        Feature: class extends go {
          mount() {
            const { current: e } = this.node;
            e &&
              (this.unmount = (function (e, t) {
                let n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                const [r, i, o] = nn(e, n),
                  a = (e) => {
                    if (!rn(e)) return;
                    const { target: n } = e,
                      r = t(n, e);
                    if ("function" !== typeof r || !n) return;
                    const o = (e) => {
                      rn(e) && (r(e), n.removeEventListener("pointerleave", o));
                    };
                    n.addEventListener("pointerleave", o, i);
                  };
                return (
                  r.forEach((e) => {
                    e.addEventListener("pointerenter", a, i);
                  }),
                  o
                );
              })(
                e,
                (e, t) => (
                  zs(this.node, t, "Start"), (e) => zs(this.node, e, "End")
                )
              ));
          }
          unmount() {}
        },
      },
    },
    Bs = { layout: { ProjectionNode: Ls, MeasureLayout: ka } },
    $s = (0, r.createContext)({ strict: !1 }),
    Us = (0, r.createContext)({});
  function Ws(e) {
    return jt(e.animate) || oo.some((t) => ro(e[t]));
  }
  function Hs(e) {
    return Boolean(Ws(e) || e.variants);
  }
  function Ys(e) {
    const { initial: t, animate: n } = (function (e, t) {
      if (Ws(e)) {
        const { initial: t, animate: n } = e;
        return {
          initial: !1 === t || ro(t) ? t : void 0,
          animate: ro(n) ? n : void 0,
        };
      }
      return !1 !== e.inherit ? t : {};
    })(e, (0, r.useContext)(Us));
    return (0, r.useMemo)(() => ({ initial: t, animate: n }), [qs(t), qs(n)]);
  }
  function qs(e) {
    return Array.isArray(e) ? e.join(" ") : e;
  }
  const Ks = "undefined" !== typeof window,
    Xs = {
      animation: [
        "animate",
        "variants",
        "whileHover",
        "whileTap",
        "exit",
        "whileInView",
        "whileFocus",
        "whileDrag",
      ],
      exit: ["exit"],
      drag: ["drag", "dragControls"],
      focus: ["whileFocus"],
      hover: ["whileHover", "onHoverStart", "onHoverEnd"],
      tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
      pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
      inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
      layout: ["layout", "layoutId"],
    },
    Qs = {};
  for (const bu in Xs)
    Qs[bu] = { isEnabled: (e) => Xs[bu].some((t) => !!e[t]) };
  const Gs = Symbol.for("motionComponentSymbol");
  function Zs(e, t, n) {
    return (0, r.useCallback)(
      (r) => {
        r && e.onMount && e.onMount(r),
          t && (r ? t.mount(r) : t.unmount()),
          n && ("function" === typeof n ? n(r) : Lo(n) && (n.current = r));
      },
      [t]
    );
  }
  const Js = Ks ? r.useLayoutEffect : r.useEffect;
  function el(e, t, n, i, o) {
    var a, s;
    const { visualElement: l } = (0, r.useContext)(Us),
      u = (0, r.useContext)($s),
      c = (0, r.useContext)(fa),
      d = (0, r.useContext)(Tt).reducedMotion,
      f = (0, r.useRef)(null);
    (i = i || u.renderer),
      !f.current &&
        i &&
        (f.current = i(e, {
          visualState: t,
          parent: l,
          props: n,
          presenceContext: c,
          blockInitialAnimation: !!c && !1 === c.initial,
          reducedMotionConfig: d,
        }));
    const h = f.current,
      p = (0, r.useContext)(pa);
    !h ||
      h.projection ||
      !o ||
      ("html" !== h.type && "svg" !== h.type) ||
      (function (e, t, n, r) {
        const {
          layoutId: i,
          layout: o,
          drag: a,
          dragConstraints: s,
          layoutScroll: l,
          layoutRoot: u,
        } = t;
        (e.projection = new n(
          e.latestValues,
          t["data-framer-portal-id"] ? void 0 : tl(e.parent)
        )),
          e.projection.setOptions({
            layoutId: i,
            layout: o,
            alwaysMeasureLayout: Boolean(a) || (s && Lo(s)),
            visualElement: e,
            animationType: "string" === typeof o ? o : "both",
            initialPromotionConfig: r,
            layoutScroll: l,
            layoutRoot: u,
          });
      })(f.current, n, o, p);
    const m = (0, r.useRef)(!1);
    (0, r.useInsertionEffect)(() => {
      h && m.current && h.update(n, c);
    });
    const g = n[kn],
      v = (0, r.useRef)(
        Boolean(g) &&
          !(null === (a = window.MotionHandoffIsComplete) || void 0 === a
            ? void 0
            : a.call(window, g)) &&
          (null === (s = window.MotionHasOptimisedAnimation) || void 0 === s
            ? void 0
            : s.call(window, g))
      );
    return (
      Js(() => {
        h &&
          ((m.current = !0),
          (window.MotionIsMounted = !0),
          h.updateFeatures(),
          wa.render(h.render),
          v.current && h.animationState && h.animationState.animateChanges());
      }),
      (0, r.useEffect)(() => {
        h &&
          (!v.current && h.animationState && h.animationState.animateChanges(),
          v.current &&
            (queueMicrotask(() => {
              var e;
              null === (e = window.MotionHandoffMarkAsComplete) ||
                void 0 === e ||
                e.call(window, g);
            }),
            (v.current = !1)));
      }),
      h
    );
  }
  function tl(e) {
    if (e)
      return !1 !== e.options.allowProjection ? e.projection : tl(e.parent);
  }
  function nl(e) {
    let {
      preloadedFeatures: t,
      createVisualElement: n,
      useRender: i,
      useVisualState: o,
      Component: a,
    } = e;
    var s, l;
    function u(e, t) {
      let s;
      const l = { ...(0, r.useContext)(Tt), ...e, layoutId: rl(e) },
        { isStatic: u } = l,
        c = Ys(e),
        d = o(e, u);
      if (!u && Ks) {
        !(function () {
          (0, r.useContext)($s).strict;
          0;
        })();
        const e = (function (e) {
          const { drag: t, layout: n } = Qs;
          if (!t && !n) return {};
          const r = { ...t, ...n };
          return {
            MeasureLayout:
              (null === t || void 0 === t ? void 0 : t.isEnabled(e)) ||
              (null === n || void 0 === n ? void 0 : n.isEnabled(e))
                ? r.MeasureLayout
                : void 0,
            ProjectionNode: r.ProjectionNode,
          };
        })(l);
        (s = e.MeasureLayout),
          (c.visualElement = el(a, d, l, n, e.ProjectionNode));
      }
      return (0, da.jsxs)(Us.Provider, {
        value: c,
        children: [
          s && c.visualElement
            ? (0, da.jsx)(s, { visualElement: c.visualElement, ...l })
            : null,
          i(a, e, Zs(d, c.visualElement, t), d, u, c.visualElement),
        ],
      });
    }
    t &&
      (function (e) {
        for (const t in e) Qs[t] = { ...Qs[t], ...e[t] };
      })(t),
      (u.displayName = `motion.${
        "string" === typeof a
          ? a
          : `create(${
              null !==
                (l =
                  null !== (s = a.displayName) && void 0 !== s ? s : a.name) &&
              void 0 !== l
                ? l
                : ""
            })`
      }`);
    const c = (0, r.forwardRef)(u);
    return (c[Gs] = a), c;
  }
  function rl(e) {
    let { layoutId: t } = e;
    const n = (0, r.useContext)(ha).id;
    return n && void 0 !== t ? n + "-" + t : t;
  }
  function il(e, t) {
    let { layout: n, layoutId: r } = t;
    return (
      gn.has(e) ||
      e.startsWith("origin") ||
      ((n || void 0 !== r) && (!!ba[e] || "opacity" === e))
    );
  }
  const ol = (e, t) => (t && "number" === typeof e ? t.transform(e) : e),
    al = {
      x: "translateX",
      y: "translateY",
      z: "translateZ",
      transformPerspective: "perspective",
    },
    sl = mn.length;
  function ll(e, t, n) {
    const { style: r, vars: i, transformOrigin: o } = e;
    let a = !1,
      s = !1;
    for (const l in t) {
      const e = t[l];
      if (gn.has(l)) a = !0;
      else if ($r(l)) i[l] = e;
      else {
        const t = ol(e, xr[l]);
        l.startsWith("origin") ? ((s = !0), (o[l] = t)) : (r[l] = t);
      }
    }
    if (
      (t.transform ||
        (a || n
          ? (r.transform = (function (e, t, n) {
              let r = "",
                i = !0;
              for (let o = 0; o < sl; o++) {
                const a = mn[o],
                  s = e[a];
                if (void 0 === s) continue;
                let l = !0;
                if (
                  ((l =
                    "number" === typeof s
                      ? s === (a.startsWith("scale") ? 1 : 0)
                      : 0 === parseFloat(s)),
                  !l || n)
                ) {
                  const e = ol(s, xr[a]);
                  l || ((i = !1), (r += `${al[a] || a}(${e}) `)),
                    n && (t[a] = e);
                }
              }
              return (
                (r = r.trim()),
                n ? (r = n(t, i ? "" : r)) : i && (r = "none"),
                r
              );
            })(t, e.transform, n))
          : r.transform && (r.transform = "none")),
      s)
    ) {
      const { originX: e = "50%", originY: t = "50%", originZ: n = 0 } = o;
      r.transformOrigin = `${e} ${t} ${n}`;
    }
  }
  const ul = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {},
  });
  function cl(e, t, n) {
    for (const r in t) wn(t[r]) || il(r, n) || (e[r] = t[r]);
  }
  function dl(e, t) {
    const n = {};
    return (
      cl(n, e.style || {}, e),
      Object.assign(
        n,
        (function (e, t) {
          let { transformTemplate: n } = e;
          return (0, r.useMemo)(() => {
            const e = {
              style: {},
              transform: {},
              transformOrigin: {},
              vars: {},
            };
            return ll(e, t, n), Object.assign({}, e.vars, e.style);
          }, [t]);
        })(e, t)
      ),
      n
    );
  }
  function fl(e, t) {
    const n = {},
      r = dl(e, t);
    return (
      e.drag &&
        !1 !== e.dragListener &&
        ((n.draggable = !1),
        (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
        (r.touchAction =
          !0 === e.drag ? "none" : "pan-" + ("x" === e.drag ? "y" : "x"))),
      void 0 === e.tabIndex &&
        (e.onTap || e.onTapStart || e.whileTap) &&
        (n.tabIndex = 0),
      (n.style = r),
      n
    );
  }
  const hl = new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "custom",
    "inherit",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "globalTapTarget",
    "ignoreStrict",
    "viewport",
  ]);
  function pl(e) {
    return (
      e.startsWith("while") ||
      (e.startsWith("drag") && "draggable" !== e) ||
      e.startsWith("layout") ||
      e.startsWith("onTap") ||
      e.startsWith("onPan") ||
      e.startsWith("onLayout") ||
      hl.has(e)
    );
  }
  let ml = (e) => !pl(e);
  function gl(e) {
    e && (ml = (t) => (t.startsWith("on") ? !pl(t) : e(t)));
  }
  try {
    gl(require("@emotion/is-prop-valid").default);
  } catch (yu) {}
  const vl = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "switch",
    "symbol",
    "svg",
    "text",
    "tspan",
    "use",
    "view",
  ];
  function yl(e) {
    return (
      "string" === typeof e &&
      !e.includes("-") &&
      !!(vl.indexOf(e) > -1 || /[A-Z]/u.test(e))
    );
  }
  const bl = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
    wl = { offset: "strokeDashoffset", array: "strokeDasharray" };
  function xl(e, t, n) {
    return "string" === typeof e ? e : Jn.transform(t + n * e);
  }
  function Sl(e, t, n, r) {
    let {
      attrX: i,
      attrY: o,
      attrScale: a,
      originX: s,
      originY: l,
      pathLength: u,
      pathSpacing: c = 1,
      pathOffset: d = 0,
      ...f
    } = t;
    if ((ll(e, f, r), n))
      return void (e.style.viewBox && (e.attrs.viewBox = e.style.viewBox));
    (e.attrs = e.style), (e.style = {});
    const { attrs: h, style: p, dimensions: m } = e;
    h.transform && (m && (p.transform = h.transform), delete h.transform),
      m &&
        (void 0 !== s || void 0 !== l || p.transform) &&
        (p.transformOrigin = (function (e, t, n) {
          return `${xl(t, e.x, e.width)} ${xl(n, e.y, e.height)}`;
        })(m, void 0 !== s ? s : 0.5, void 0 !== l ? l : 0.5)),
      void 0 !== i && (h.x = i),
      void 0 !== o && (h.y = o),
      void 0 !== a && (h.scale = a),
      void 0 !== u &&
        (function (e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1,
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0,
            i =
              !(arguments.length > 4 && void 0 !== arguments[4]) ||
              arguments[4];
          e.pathLength = 1;
          const o = i ? bl : wl;
          e[o.offset] = Jn.transform(-r);
          const a = Jn.transform(t),
            s = Jn.transform(n);
          e[o.array] = `${a} ${s}`;
        })(h, u, c, d, !1);
  }
  const kl = () => ({
      style: {},
      transform: {},
      transformOrigin: {},
      vars: {},
      attrs: {},
    }),
    El = (e) => "string" === typeof e && "svg" === e.toLowerCase();
  function Cl(e, t, n, i) {
    const o = (0, r.useMemo)(() => {
      const n = {
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
        attrs: {},
      };
      return (
        Sl(n, t, El(i), e.transformTemplate),
        { ...n.attrs, style: { ...n.style } }
      );
    }, [t]);
    if (e.style) {
      const t = {};
      cl(t, e.style, e), (o.style = { ...t, ...o.style });
    }
    return o;
  }
  function Pl() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (t, n, i, o, a) => {
      let { latestValues: s } = o;
      const l = (yl(t) ? Cl : fl)(n, s, a, t),
        u = (function (e, t, n) {
          const r = {};
          for (const i in e)
            ("values" === i && "object" === typeof e.values) ||
              ((ml(i) ||
                (!0 === n && pl(i)) ||
                (!t && !pl(i)) ||
                (e.draggable && i.startsWith("onDrag"))) &&
                (r[i] = e[i]));
          return r;
        })(n, "string" === typeof t, e),
        c = t !== r.Fragment ? { ...u, ...l, ref: i } : {},
        { children: d } = n,
        f = (0, r.useMemo)(() => (wn(d) ? d.get() : d), [d]);
      return (0, r.createElement)(t, { ...c, children: f });
    };
  }
  const Tl = (e) => (t, n) => {
    const i = (0, r.useContext)(Us),
      o = (0, r.useContext)(fa),
      a = () =>
        (function (e, t, n, r) {
          let {
            scrapeMotionValuesFromProps: i,
            createRenderState: o,
            onUpdate: a,
          } = e;
          const s = { latestValues: Al(t, n, r, i), renderState: o() };
          return (
            a &&
              ((s.onMount = (e) => a({ props: t, current: e, ...s })),
              (s.onUpdate = (e) => a(e))),
            s
          );
        })(e, t, i, o);
    return n ? a() : At(a);
  };
  function Al(e, t, n, r) {
    const i = {},
      o = r(e, {});
    for (const f in o) i[f] = Aa(o[f]);
    let { initial: a, animate: s } = e;
    const l = Ws(e),
      u = Hs(e);
    t &&
      u &&
      !l &&
      !1 !== e.inherit &&
      (void 0 === a && (a = t.initial), void 0 === s && (s = t.animate));
    let c = !!n && !1 === n.initial;
    c = c || !1 === a;
    const d = c ? s : a;
    if (d && "boolean" !== typeof d && !jt(d)) {
      const t = Array.isArray(d) ? d : [d];
      for (let n = 0; n < t.length; n++) {
        const r = Dt(e, t[n]);
        if (r) {
          const { transitionEnd: e, transition: t, ...n } = r;
          for (const r in n) {
            let e = n[r];
            if (Array.isArray(e)) {
              e = e[c ? e.length - 1 : 0];
            }
            null !== e && (i[r] = e);
          }
          for (const r in e) i[r] = e[r];
        }
      }
    }
    return i;
  }
  function Rl(e, t, n) {
    var r;
    const { style: i } = e,
      o = {};
    for (const a in i)
      (wn(i[a]) ||
        (t.style && wn(t.style[a])) ||
        il(a, e) ||
        void 0 !==
          (null === (r = null === n || void 0 === n ? void 0 : n.getValue(a)) ||
          void 0 === r
            ? void 0
            : r.liveStyle)) &&
        (o[a] = i[a]);
    return o;
  }
  const Ll = {
    useVisualState: Tl({
      scrapeMotionValuesFromProps: Rl,
      createRenderState: ul,
    }),
  };
  function jl(e, t) {
    try {
      t.dimensions =
        "function" === typeof e.getBBox
          ? e.getBBox()
          : e.getBoundingClientRect();
    } catch (vu) {
      t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
    }
  }
  function zl(e, t, n, r) {
    let { style: i, vars: o } = t;
    Object.assign(e.style, i, r && r.getProjectionStyles(n));
    for (const a in o) e.style.setProperty(a, o[a]);
  }
  const Dl = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
  ]);
  function Ml(e, t, n, r) {
    zl(e, t, void 0, r);
    for (const i in t.attrs) e.setAttribute(Dl.has(i) ? i : Sn(i), t.attrs[i]);
  }
  function Ol(e, t, n) {
    const r = Rl(e, t, n);
    for (const i in e)
      if (wn(e[i]) || wn(t[i])) {
        r[
          -1 !== mn.indexOf(i)
            ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
            : i
        ] = e[i];
      }
    return r;
  }
  const Nl = ["x", "y", "width", "height", "cx", "cy", "r"],
    _l = {
      useVisualState: Tl({
        scrapeMotionValuesFromProps: Ol,
        createRenderState: kl,
        onUpdate: (e) => {
          let {
            props: t,
            prevProps: n,
            current: r,
            renderState: i,
            latestValues: o,
          } = e;
          if (!r) return;
          let a = !!t.drag;
          if (!a)
            for (const l in o)
              if (gn.has(l)) {
                a = !0;
                break;
              }
          if (!a) return;
          let s = !n;
          if (n)
            for (let l = 0; l < Nl.length; l++) {
              const e = Nl[l];
              t[e] !== n[e] && (s = !0);
            }
          s &&
            ht.read(() => {
              jl(r, i),
                ht.render(() => {
                  Sl(i, o, El(r.tagName), t.transformTemplate), Ml(r, i);
                });
            });
        },
      }),
    };
  function Fl(e, t) {
    return function (n) {
      let { forwardMotionProps: r } =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : { forwardMotionProps: !1 };
      return nl({
        ...(yl(n) ? _l : Ll),
        preloadedFeatures: e,
        useRender: Pl(r),
        createVisualElement: t,
        Component: n,
      });
    };
  }
  const Il = { current: null },
    Vl = { current: !1 };
  const Bl = [...Xr, ir, hr],
    $l = new WeakMap();
  const Ul = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ];
  class Wl {
    scrapeMotionValuesFromProps(e, t, n) {
      return {};
    }
    constructor(e) {
      let {
          parent: t,
          props: n,
          presenceContext: r,
          reducedMotionConfig: i,
          blockInitialAnimation: o,
          visualState: a,
        } = e,
        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      (this.current = null),
        (this.children = new Set()),
        (this.isVariantNode = !1),
        (this.isControllingVariants = !1),
        (this.shouldReduceMotion = null),
        (this.values = new Map()),
        (this.KeyframeResolver = _r),
        (this.features = {}),
        (this.valueSubscriptions = new Map()),
        (this.prevMotionValues = {}),
        (this.events = {}),
        (this.propEventSubscriptions = {}),
        (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
        (this.render = () => {
          this.current &&
            (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection
            ));
        }),
        (this.renderScheduledAt = 0),
        (this.scheduleRender = () => {
          const e = bt.now();
          this.renderScheduledAt < e &&
            ((this.renderScheduledAt = e), ht.render(this.render, !1, !0));
        });
      const { latestValues: l, renderState: u, onUpdate: c } = a;
      (this.onUpdate = c),
        (this.latestValues = l),
        (this.baseTarget = { ...l }),
        (this.initialValues = n.initial ? { ...l } : {}),
        (this.renderState = u),
        (this.parent = t),
        (this.props = n),
        (this.presenceContext = r),
        (this.depth = t ? t.depth + 1 : 0),
        (this.reducedMotionConfig = i),
        (this.options = s),
        (this.blockInitialAnimation = Boolean(o)),
        (this.isControllingVariants = Ws(n)),
        (this.isVariantNode = Hs(n)),
        this.isVariantNode && (this.variantChildren = new Set()),
        (this.manuallyAnimateOnMount = Boolean(t && t.current));
      const { willChange: d, ...f } = this.scrapeMotionValuesFromProps(
        n,
        {},
        this
      );
      for (const h in f) {
        const e = f[h];
        void 0 !== l[h] && wn(e) && e.set(l[h], !1);
      }
    }
    mount(e) {
      (this.current = e),
        $l.set(e, this),
        this.projection &&
          !this.projection.instance &&
          this.projection.mount(e),
        this.parent &&
          this.isVariantNode &&
          !this.isControllingVariants &&
          (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
        Vl.current ||
          (function () {
            if (((Vl.current = !0), Ks))
              if (window.matchMedia) {
                const e = window.matchMedia("(prefers-reduced-motion)"),
                  t = () => (Il.current = e.matches);
                e.addListener(t), t();
              } else Il.current = !1;
          })(),
        (this.shouldReduceMotion =
          "never" !== this.reducedMotionConfig &&
          ("always" === this.reducedMotionConfig || Il.current)),
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext);
    }
    unmount() {
      this.projection && this.projection.unmount(),
        pt(this.notifyUpdate),
        pt(this.render),
        this.valueSubscriptions.forEach((e) => e()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
      for (const e in this.events) this.events[e].clear();
      for (const e in this.features) {
        const t = this.features[e];
        t && (t.unmount(), (t.isMounted = !1));
      }
      this.current = null;
    }
    bindToMotionValue(e, t) {
      this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
      const n = gn.has(e);
      n && this.onBindTransform && this.onBindTransform();
      const r = t.on("change", (t) => {
          (this.latestValues[e] = t),
            this.props.onUpdate && ht.preRender(this.notifyUpdate),
            n && this.projection && (this.projection.isTransformDirty = !0);
        }),
        i = t.on("renderRequest", this.scheduleRender);
      let o;
      window.MotionCheckAppearSync &&
        (o = window.MotionCheckAppearSync(this, e, t)),
        this.valueSubscriptions.set(e, () => {
          r(), i(), o && o(), t.owner && t.stop();
        });
    }
    sortNodePosition(e) {
      return this.current &&
        this.sortInstanceNodePosition &&
        this.type === e.type
        ? this.sortInstanceNodePosition(this.current, e.current)
        : 0;
    }
    updateFeatures() {
      let e = "animation";
      for (e in Qs) {
        const t = Qs[e];
        if (!t) continue;
        const { isEnabled: n, Feature: r } = t;
        if (
          (!this.features[e] &&
            r &&
            n(this.props) &&
            (this.features[e] = new r(this)),
          this.features[e])
        ) {
          const t = this.features[e];
          t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
      return this.current
        ? this.measureInstanceViewportBox(this.current, this.props)
        : { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
    }
    getStaticValue(e) {
      return this.latestValues[e];
    }
    setStaticValue(e, t) {
      this.latestValues[e] = t;
    }
    update(e, t) {
      (e.transformTemplate || this.props.transformTemplate) &&
        this.scheduleRender(),
        (this.prevProps = this.props),
        (this.props = e),
        (this.prevPresenceContext = this.presenceContext),
        (this.presenceContext = t);
      for (let n = 0; n < Ul.length; n++) {
        const t = Ul[n];
        this.propEventSubscriptions[t] &&
          (this.propEventSubscriptions[t](),
          delete this.propEventSubscriptions[t]);
        const r = e["on" + t];
        r && (this.propEventSubscriptions[t] = this.on(t, r));
      }
      (this.prevMotionValues = (function (e, t, n) {
        for (const r in t) {
          const i = t[r],
            o = n[r];
          if (wn(i)) e.addValue(r, i);
          else if (wn(o)) e.addValue(r, Pt(i, { owner: e }));
          else if (o !== i)
            if (e.hasValue(r)) {
              const t = e.getValue(r);
              !0 === t.liveStyle ? t.jump(i) : t.hasAnimated || t.set(i);
            } else {
              const t = e.getStaticValue(r);
              e.addValue(r, Pt(void 0 !== t ? t : i, { owner: e }));
            }
        }
        for (const r in n) void 0 === t[r] && e.removeValue(r);
        return t;
      })(
        this,
        this.scrapeMotionValuesFromProps(e, this.prevProps, this),
        this.prevMotionValues
      )),
        this.handleChildMotionValue && this.handleChildMotionValue(),
        this.onUpdate && this.onUpdate(this);
    }
    getProps() {
      return this.props;
    }
    getVariant(e) {
      return this.props.variants ? this.props.variants[e] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode
        ? this
        : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
    }
    addVariantChild(e) {
      const t = this.getClosestVariantNode();
      if (t)
        return (
          t.variantChildren && t.variantChildren.add(e),
          () => t.variantChildren.delete(e)
        );
    }
    addValue(e, t) {
      const n = this.values.get(e);
      t !== n &&
        (n && this.removeValue(e),
        this.bindToMotionValue(e, t),
        this.values.set(e, t),
        (this.latestValues[e] = t.get()));
    }
    removeValue(e) {
      this.values.delete(e);
      const t = this.valueSubscriptions.get(e);
      t && (t(), this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState);
    }
    hasValue(e) {
      return this.values.has(e);
    }
    getValue(e, t) {
      if (this.props.values && this.props.values[e])
        return this.props.values[e];
      let n = this.values.get(e);
      return (
        void 0 === n &&
          void 0 !== t &&
          ((n = Pt(null === t ? void 0 : t, { owner: this })),
          this.addValue(e, n)),
        n
      );
    }
    readValue(e, t) {
      var n;
      let r =
        void 0 === this.latestValues[e] && this.current
          ? null !== (n = this.getBaseTargetFromProps(this.props, e)) &&
            void 0 !== n
            ? n
            : this.readValueFromInstance(this.current, e, this.options)
          : this.latestValues[e];
      var i;
      return (
        void 0 !== r &&
          null !== r &&
          ("string" === typeof r && (Vr(r) || _n(r))
            ? (r = parseFloat(r))
            : ((i = r), !Bl.find(Kr(i)) && hr.test(t) && (r = Er(e, t))),
          this.setBaseTarget(e, wn(r) ? r.get() : r)),
        wn(r) ? r.get() : r
      );
    }
    setBaseTarget(e, t) {
      this.baseTarget[e] = t;
    }
    getBaseTarget(e) {
      var t;
      const { initial: n } = this.props;
      let r;
      if ("string" === typeof n || "object" === typeof n) {
        const i = Dt(
          this.props,
          n,
          null === (t = this.presenceContext) || void 0 === t
            ? void 0
            : t.custom
        );
        i && (r = i[e]);
      }
      if (n && void 0 !== r) return r;
      const i = this.getBaseTargetFromProps(this.props, e);
      return void 0 === i || wn(i)
        ? void 0 !== this.initialValues[e] && void 0 === r
          ? void 0
          : this.baseTarget[e]
        : i;
    }
    on(e, t) {
      return (
        this.events[e] || (this.events[e] = new St()), this.events[e].add(t)
      );
    }
    notify(e) {
      if (this.events[e]) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        this.events[e].notify(...n);
      }
    }
  }
  class Hl extends Wl {
    constructor() {
      super(...arguments), (this.KeyframeResolver = Gr);
    }
    sortInstanceNodePosition(e, t) {
      return 2 & e.compareDocumentPosition(t) ? 1 : -1;
    }
    getBaseTargetFromProps(e, t) {
      return e.style ? e.style[t] : void 0;
    }
    removeValueFromRenderState(e, t) {
      let { vars: n, style: r } = t;
      delete n[e], delete r[e];
    }
    handleChildMotionValue() {
      this.childSubscription &&
        (this.childSubscription(), delete this.childSubscription);
      const { children: e } = this.props;
      wn(e) &&
        (this.childSubscription = e.on("change", (e) => {
          this.current && (this.current.textContent = `${e}`);
        }));
    }
  }
  class Yl extends Hl {
    constructor() {
      super(...arguments), (this.type = "html"), (this.renderInstance = zl);
    }
    readValueFromInstance(e, t) {
      if (gn.has(t)) {
        const e = kr(t);
        return (e && e.default) || 0;
      }
      {
        const r = ((n = e), window.getComputedStyle(n)),
          i = ($r(t) ? r.getPropertyValue(t) : r[t]) || 0;
        return "string" === typeof i ? i.trim() : i;
      }
      var n;
    }
    measureInstanceViewportBox(e, t) {
      let { transformPagePoint: n } = t;
      return oa(e, n);
    }
    build(e, t, n) {
      ll(e, t, n.transformTemplate);
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return Rl(e, t, n);
    }
  }
  class ql extends Hl {
    constructor() {
      super(...arguments),
        (this.type = "svg"),
        (this.isSVGTag = !1),
        (this.measureInstanceViewportBox = $o),
        (this.updateDimensions = () => {
          this.current &&
            !this.renderState.dimensions &&
            jl(this.current, this.renderState);
        });
    }
    getBaseTargetFromProps(e, t) {
      return e[t];
    }
    readValueFromInstance(e, t) {
      if (gn.has(t)) {
        const e = kr(t);
        return (e && e.default) || 0;
      }
      return (t = Dl.has(t) ? t : Sn(t)), e.getAttribute(t);
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return Ol(e, t, n);
    }
    onBindTransform() {
      this.current &&
        !this.renderState.dimensions &&
        ht.postRender(this.updateDimensions);
    }
    build(e, t, n) {
      Sl(e, t, this.isSVGTag, n.transformTemplate);
    }
    renderInstance(e, t, n, r) {
      Ml(e, t, 0, r);
    }
    mount(e) {
      (this.isSVGTag = El(e.tagName)), super.mount(e);
    }
  }
  const Kl = Lt(
    Fl({ ...yo, ...Vs, ...js, ...Bs }, (e, t) =>
      yl(e) ? new ql(t) : new Yl(t, { allowProjection: e !== r.Fragment })
    )
  );
  function Xl(e) {
    let { children: t, isValidProp: n, ...i } = e;
    n && gl(n),
      (i = { ...(0, r.useContext)(Tt), ...i }),
      (i.isStatic = At(() => i.isStatic));
    const o = (0, r.useMemo)(
      () => i,
      [JSON.stringify(i.transition), i.transformPagePoint, i.reducedMotion]
    );
    return (0, da.jsx)(Tt.Provider, { value: o, children: t });
  }
  function Ql(e, t) {
    let n;
    return function () {
      for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
        i[o] = arguments[o];
      window.clearTimeout(n), (n = window.setTimeout(() => e(...i), t));
    };
  }
  function Gl() {
    let {
      debounce: e,
      scroll: t,
      polyfill: n,
      offsetSize: i,
    } = arguments.length > 0 && void 0 !== arguments[0]
      ? arguments[0]
      : { debounce: 0, scroll: !1, offsetSize: !1 };
    const o =
      n || ("undefined" == typeof window ? class {} : window.ResizeObserver);
    if (!o)
      throw new Error(
        "This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills"
      );
    const [a, s] = (0, r.useState)({
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        bottom: 0,
        right: 0,
        x: 0,
        y: 0,
      }),
      l = (0, r.useRef)({
        element: null,
        scrollContainers: null,
        resizeObserver: null,
        lastBounds: a,
        orientationHandler: null,
      }),
      u = e ? ("number" == typeof e ? e : e.scroll) : null,
      c = e ? ("number" == typeof e ? e : e.resize) : null,
      d = (0, r.useRef)(!1);
    (0, r.useEffect)(
      () => (
        (d.current = !0),
        () => {
          d.current = !1;
        }
      )
    );
    const [f, h, p] = (0, r.useMemo)(() => {
      const e = () => {
        if (!l.current.element) return;
        const {
            left: e,
            top: t,
            width: n,
            height: r,
            bottom: o,
            right: a,
            x: u,
            y: c,
          } = l.current.element.getBoundingClientRect(),
          f = {
            left: e,
            top: t,
            width: n,
            height: r,
            bottom: o,
            right: a,
            x: u,
            y: c,
          };
        l.current.element instanceof HTMLElement &&
          i &&
          ((f.height = l.current.element.offsetHeight),
          (f.width = l.current.element.offsetWidth)),
          Object.freeze(f),
          d.current &&
            !eu(l.current.lastBounds, f) &&
            s((l.current.lastBounds = f));
      };
      return [e, c ? Ql(e, c) : e, u ? Ql(e, u) : e];
    }, [s, i, u, c]);
    function m() {
      l.current.scrollContainers &&
        (l.current.scrollContainers.forEach((e) =>
          e.removeEventListener("scroll", p, !0)
        ),
        (l.current.scrollContainers = null)),
        l.current.resizeObserver &&
          (l.current.resizeObserver.disconnect(),
          (l.current.resizeObserver = null)),
        l.current.orientationHandler &&
          ("orientation" in screen &&
          "removeEventListener" in screen.orientation
            ? screen.orientation.removeEventListener(
                "change",
                l.current.orientationHandler
              )
            : "onorientationchange" in window &&
              window.removeEventListener(
                "orientationchange",
                l.current.orientationHandler
              ));
    }
    function g() {
      l.current.element &&
        ((l.current.resizeObserver = new o(p)),
        l.current.resizeObserver.observe(l.current.element),
        t &&
          l.current.scrollContainers &&
          l.current.scrollContainers.forEach((e) =>
            e.addEventListener("scroll", p, { capture: !0, passive: !0 })
          ),
        (l.current.orientationHandler = () => {
          p();
        }),
        "orientation" in screen && "addEventListener" in screen.orientation
          ? screen.orientation.addEventListener(
              "change",
              l.current.orientationHandler
            )
          : "onorientationchange" in window &&
            window.addEventListener(
              "orientationchange",
              l.current.orientationHandler
            ));
    }
    return (
      (function (e, t) {
        (0, r.useEffect)(() => {
          if (t) {
            const t = e;
            return (
              window.addEventListener("scroll", t, {
                capture: !0,
                passive: !0,
              }),
              () => {
                window.removeEventListener("scroll", t, !0);
              }
            );
          }
        }, [e, t]);
      })(p, !!t),
      (function (e) {
        (0, r.useEffect)(() => {
          const t = e;
          return (
            window.addEventListener("resize", t),
            () => {
              window.removeEventListener("resize", t);
            }
          );
        }, [e]);
      })(h),
      (0, r.useEffect)(() => {
        m(), g();
      }, [t, p, h]),
      (0, r.useEffect)(() => m, []),
      [
        (e) => {
          !e ||
            e === l.current.element ||
            (m(),
            (l.current.element = e),
            (l.current.scrollContainers = Zl(e)),
            g());
        },
        a,
        f,
      ]
    );
  }
  function Zl(e) {
    const t = [];
    if (!e || e === document.body) return t;
    const {
      overflow: n,
      overflowX: r,
      overflowY: i,
    } = window.getComputedStyle(e);
    return (
      [n, r, i].some((e) => "auto" === e || "scroll" === e) && t.push(e),
      [...t, ...Zl(e.parentElement)]
    );
  }
  const Jl = ["x", "y", "top", "bottom", "left", "right", "width", "height"],
    eu = (e, t) => Jl.every((n) => e[n] === t[n]),
    tu = () => {
      const [e, t] = (0, r.useState)(window.innerWidth < 1e3),
        [n, i] = Gl({ scroll: !1 }),
        [o, a] = (0, r.useState)(!1),
        [s, l] = (0, r.useState)(!1),
        [u, c] = (0, r.useState)(!0),
        d = Rt(0),
        f = Rt(0),
        h = ee();
      (0, r.useEffect)(() => {
        const e = () => {
          t(window.innerWidth < 1e3);
        };
        window.addEventListener("resize", e);
        const n = () => {
          setTimeout(() => c(!1), 500);
        };
        return (
          window.addEventListener("load", n),
          () => {
            window.removeEventListener("resize", e),
              window.removeEventListener("load", n);
          }
        );
      }, []);
      return u
        ? (0, da.jsx)("div", {
            style: {
              backgroundColor: "black",
              color: "white",
              height: "100vh",
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "24px",
              fontWeight: "bold",
            },
            children: "Loading...",
          })
        : (0, da.jsxs)("div", {
            style: {
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              height: "100vh",
            },
            children: [
              (0, da.jsx)(Kl.div, {
                initial: { scale: 1, rotate: 0 },
                animate: s
                  ? { scale: 5, rotate: 360, opacity: 0 }
                  : { rotate: 360 },
                transition: {
                  duration: s ? 4 : 30,
                  ease: "linear",
                  repeat: 1 / 0,
                },
                style: {
                  marginBottom: e ? "20px" : 0,
                  marginRight: e ? "-5px" : 0,
                  position: "absolute",
                  width: e ? "500%" : "150%",
                  height: e ? "500%" : "400%",
                  backgroundImage: e
                    ? "url('/images/circular-binance-mobile-new.png')"
                    : "url('/images/circular-binance-new.png')",
                  backgroundPosition: "center",
                  filter: "brightness(110%)",
                  zIndex: 50,
                },
              }),
              (0, da.jsx)(Kl.img, {
                src: "/images/body.png",
                alt: "Body Image",
                initial: { y: 50 },
                animate: s
                  ? { y: e ? 500 : 50, opacity: 0 }
                  : o
                  ? { y: e ? -225 : -50 }
                  : { y: 300 },
                transition: { type: "spring", stiffness: 80 },
                style: {
                  position: "absolute",
                  bottom: e ? "10%" : "2%",
                  width: e ? "150px" : "400px",
                  zIndex: 40,
                },
              }),
              (0, da.jsx)(Kl.div, {
                initial: { opacity: 1 },
                animate: s ? { opacity: 0 } : { opacity: 1 },
                transition: { duration: 1.5, ease: "easeInOut" },
                style: {
                  position: "absolute",
                  zIndex: 69,
                  fontSize: e ? "16px" : "40px",
                  paddingBottom: e ? "125px" : "250px",
                  fontWeight: "bold",
                  color: "white",
                  textAlign: "center",
                  userSelect: "none",
                },
                children: "JOIN THE CULT",
              }),
              (0, da.jsx)("div", {
                style: {
                  position: "relative",
                  zIndex: 70,
                  textAlign: "center",
                  padding: "1rem",
                },
                children: (0, da.jsx)(Xl, {
                  transition: { duration: 0.3, ease: "easeInOut" },
                  children: (0, da.jsx)(Kl.img, {
                    ref: n,
                    src: "/images/bnb_button.png",
                    alt: "BNB Button",
                    initial: !1,
                    animate: o ? "hover" : "rest",
                    whileTap: "press",
                    variants: {
                      rest: { scale: 1 },
                      hover: { scale: 1.3 },
                      press: { scale: 1.1 },
                    },
                    onPointerDown: (e) => {
                      e.preventDefault(), d.set(0), f.set(0), a(!0);
                    },
                    onPointerUp: () => {
                      setTimeout(() => a(!1), 300);
                    },
                    onClick: () => {
                      l(!0),
                        setTimeout(() => {
                          h("/main");
                        }, 3e3);
                    },
                    style: {
                      width: e ? "75px" : "200px",
                      cursor: "pointer",
                      opacity: s ? 0 : 1,
                      transition: "opacity 1.5s ease",
                      paddingTop: e ? "0px" : "50px",
                      userSelect: "none",
                      WebkitUserDrag: "none",
                      MozUserSelect: "none",
                      msUserSelect: "none",
                    },
                  }),
                }),
              }),
            ],
          });
    },
    nu = () => {
      const [e, t] = (0, r.useState)(window.innerWidth < 1e3),
        [n, i] = (0, r.useState)(!1);
      (0, r.useEffect)(() => {
        const e = () => {
          t(window.innerWidth < 1e3);
        };
        return (
          window.addEventListener("resize", e),
          () => window.removeEventListener("resize", e)
        );
      }, []);
      const o = (e) => {
          navigator.clipboard.writeText(e).then(() => {
            alert("Copied to clipboard: " + e);
          });
        },
        a = () => {
          i(!n);
        },
        s = {
          position: "fixed",
          top: e ? 20 : 50,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80vw",
          height: e ? "40px" : "60px",
          backgroundColor: "rgba(243, 186, 47, 0.8)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          borderRadius: "50px",
          boxShadow: "0px 10px 8px rgba(0, 0, 0, 0.4)",
          zIndex: "1000",
        },
        l = {
          textDecoration: "none",
          color: "black",
          fontSize: "1.1rem",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          transition: "transform 0.2s ease-in-out",
        },
        u = {
          backgroundColor: "black",
          color: "white",
          padding: "10px 30px",
          borderRadius: "20px",
          fontSize: "0.8rem",
          textDecoration: "none",
          fontWeight: "bold",
          textAlign: "center",
          boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.3)",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        };
      return (0, da.jsxs)("header", {
        style: s,
        children: [
          (0, da.jsxs)("a", {
            href: "#top",
            style: {
              display: "flex",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: "1rem",
              textDecoration: "none",
              color: "black",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            },
            children: [
              (0, da.jsx)("img", {
                src: "/images/head.png",
                alt: "Logo",
                style: { height: e ? "30px" : "40px", marginRight: "10px" },
              }),
              "CHENGPANG ZHOA",
            ],
          }),
          e
            ? (0, da.jsxs)(da.Fragment, {
                children: [
                  (0, da.jsx)("button", {
                    onClick: a,
                    style: {
                      fontSize: "24px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    },
                    children: "?",
                  }),
                  n &&
                    (0, da.jsxs)("div", {
                      style: {
                        position: "fixed",
                        top: 0,
                        right: 0,
                        width: "60vw",
                        height: "100vh",
                        backgroundColor: "rgba(243, 186, 47, 0.95)",
                        boxShadow: "-5px 0 10px rgba(0, 0, 0, 0.3)",
                        transition: "right 0.3s ease-in-out",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "20px",
                        zIndex: "1001",
                      },
                      children: [
                        (0, da.jsx)("button", {
                          onClick: a,
                          style: {
                            position: "absolute",
                            top: "20px",
                            right: "20px",
                            fontSize: "24px",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                          },
                          children: "?",
                        }),
                        [
                          "TOKENOMICS",
                          "MEMES",
                        ].map((e) =>
                          (0, da.jsx)(
                            "a",
                            {
                              href: `#${e.toLowerCase()}`,
                              style: l,
                              onClick: a,
                              children: e,
                            },
                            e
                          )
                        ),
                        (0, da.jsx)("button", {
                          style: u,
                          onClick: () =>
                            o("0xcomingsoon"),
                          children: "COPY BSC CA",
                        }),
                        (0, da.jsx)("button", {
                          style: u,
                          onClick: () =>
                            (window.location.href =
                              "https://pancakeswap.finance/?outputCurrency=0xcomingsoon"),
                          children: "BUY NOW",
                        }),
                      ],
                    }),
                ],
              })
            : (0, da.jsxs)("div", {
                style: { display: "flex", gap: "30px", alignItems: "center" },
                children: [
                  [
                    "TOKENOMICS",
                    "MEMES",
                  ].map((e) =>
                    (0, da.jsx)(
                      "a",
                      {
                        href: `#${e.toLowerCase()}`,
                        style: l,
                        onMouseOver: (e) =>
                          (e.target.style.transform = "scale(1.1)"),
                        onMouseOut: (e) =>
                          (e.target.style.transform = "scale(1)"),
                        children: e,
                      },
                      e
                    )
                  ),
                  (0, da.jsx)("button", {
                    style: u,
                    onClick: () =>
                      o("0xcomingsoon"),
                    children: "COPY BSC CA",
                  }),
                  (0, da.jsx)("button", {
                    style: u,
                    onClick: () =>
                      (window.location.href =
                        "https://pancakeswap.finance/?outputCurrency=0xcomingsoon"),
                    children: "BUY NOW",
                  }),
                ],
              }),
        ],
      });
    },
    ru = () => {
      const [e, t] = (0, r.useState)(window.innerWidth < 1e3),
        [n, i] = (0, r.useState)(!1),
        o = (0, r.useRef)(null);
      return (
        (0, r.useEffect)(() => {
          const e = () => {
            t(window.innerWidth < 1e3);
          };
          return (
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
          );
        }, []),
        (0, r.useEffect)(() => {
          const e = new IntersectionObserver(
            (t) => {
              t.forEach((t) => {
                t.isIntersecting && (i(!0), e.unobserve(t.target));
              });
            },
            { threshold: 0.1 }
          );
          return (
            o.current && e.observe(o.current),
            () => {
              o.current && e.unobserve(o.current);
            }
          );
        }, []),
        (0, da.jsx)("div", {
          style: {
            width: "100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
            marginTop: e ? "6rem" : "10rem",
            marginBottom: e ? "2rem" : "5rem",
          },
          children: (0, da.jsxs)("div", {
            ref: o,
            style: {
              width: e ? "90vw" : "80vw",
              height: "80vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              position: "relative",
              backgroundColor: "black",
              borderRadius: "25px",
              borderStyle: "solid",
              borderColor: "gold",
              boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.8)",
              opacity: n ? 1 : 0,
              transform: n ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            },
            children: [
              (0, da.jsxs)("video", {
                muted: !0,
                autoPlay: !0,
                loop: !0,
                playsInline: !0,
                style: {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100vh",
                  objectFit: "cover",
                  zIndex: 1,
                  display: "block",
                  backgroundColor: "black",
                },
                onError: (e) =>
                  console.error("Video failed to load:", e.target.src),
                children: [
                  (0, da.jsx)("source", {
                    src: e
                      ? "/images/zhoa-jesus.mp4"
                      : "/images/zhoa-mcduck.mp4",
                    type: "video/mp4",
                  }),
                  "Your browser does not support the video tag.",
                ],
              }),
              (0, da.jsxs)("div", {
                style: {
                  position: "relative",
                  zIndex: 2,
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  padding: "2rem",
                  borderRadius: "15px",
                  maxWidth: e ? "80%" : "45%",
                  textAlign: "center",
                  color: "white",
                },
                children: [
                  (0, da.jsx)("h1", {
                    style: {
                      fontSize: e ? "1.5rem" : "3rem",
                      fontWeight: "bold",
                      textShadow: "10px 10px 10px rgba(0, 0, 0, 0.8)",
                      fontFamily: "Frijole",
                      padding: "0",
                      margin: "0",
                    },
                    children: "Chengpang Zhoa",
                  }),
                  (0, da.jsx)("h1", {
                    style: {
                      fontSize: e ? "2.2rem" : "6rem",
                      fontWeight: 800,
                      textShadow: "10px 10px 10px rgba(0, 0, 0, 0.8)",
                      fontFamily: "Slackey",
                      padding: "0",
                      margin: "0",
                    },
                    children: "JOIN THE CULT",
                  }),
                  (0, da.jsxs)("p", {
                    style: {
                      fontSize: e ? "1rem" : "1.5rem",
                      margin: "0 auto",
                    },
                    children: [
                      "Where we never stopped believing that $BNB was great, Chengpang Zhoa was launched on May 31, 2025, on four.meme. The ",
                      (0, da.jsx)("strong", { children: "$ZHOA" }),
                      " token aims to bring back the popularity of Binance\u2019s DeFi platform and rekindle its former memecoin glory.",
                    ],
                  }),
                ],
              }),
            ],
          }),
        })
      );
    },
    iu = () => {
      const [e, t] = (0, r.useState)(window.innerWidth < 1e3),
        [n, i] = (0, r.useState)(!1),
        o = (0, r.useRef)(null);
      (0, r.useEffect)(() => {
        const e = () => {
          t(window.innerWidth < 1e3);
        };
        return (
          window.addEventListener("resize", e),
          () => window.removeEventListener("resize", e)
        );
      }, []),
        (0, r.useEffect)(() => {
          const e = new IntersectionObserver(
            (t) => {
              t.forEach((t) => {
                t.isIntersecting &&
                  (setTimeout(() => i(!0), 200), e.unobserve(t.target));
              });
            },
            { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
          );
          return (
            o.current && e.observe(o.current),
            () => {
              o.current && e.unobserve(o.current);
            }
          );
        }, []);
      const a = {
        display: "inline-block",
        padding: "10px 20px",
        minWidth: "100px",
        fontSize: "1rem",
        fontWeight: "bold",
        color: "black",
        textDecoration: "none",
        backgroundColor: "rgba(243, 186, 47, 0.95)",
        boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.8)",
        borderRadius: "10px",
        textAlign: "center",
        transition: "background 0.3s",
        cursor: "pointer",
        marginTop: e ? "1.5rem" : "50px",
      };
      return (0, da.jsx)("div", {
        style: {
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          marginTop: e ? "2rem" : "5rem",
          marginBottom: e ? "1rem" : "5rem",
        },
        children: (0, da.jsxs)("div", {
          ref: o,
          style: {
            width: e ? "90vw" : "80vw",
            display: "flex",
            flexDirection: e ? "column" : "row",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: e ? "2rem" : "5rem",
            paddingBottom: e ? "2rem" : "5rem",
            position: "relative",
            overflow: "hidden",
            backgroundImage: e
              ? "url('/images/wormhole-mobile.jpg')"
              : "url('/images/wormhole.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "25px",
            borderStyle: "solid",
            borderColor: "gold",
            boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.8)",
            opacity: n ? 1 : 0,
            transform: n ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          },
          children: [
            (0, da.jsxs)("div", {
              style: {
                width: e ? "70%" : "40%",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                padding: e ? "1rem" : "2rem",
                borderRadius: "15px",
                color: "white",
                textAlign: "center",
                zIndex: 2,
                marginBottom: e ? "1rem" : "0",
              },
              children: [
                (0, da.jsx)("h1", {
                  style: {
                    fontSize: e ? "1.5rem" : "3rem",
                    textShadow: "10px 10px 10px rgba(0, 0, 0, 0.8)",
                    fontWeight: "bold",
                    marginBottom: e ? "10px" : "15px",
                    fontFamily: "Frijole",
                  },
                  children: "The ZHOA Wormhole",
                }),
                (0, da.jsx)("p", {
                  style: { fontSize: e ? "1rem" : "1.5rem", lineHeight: "1.5" },
                  children:
                    "Wrapped $ZHOA (wZHOA) is officially live on Pancake DEX on the Solana blockchain. That\u2019s right\u2014you can now trade, hold, and expand your $ZHOA journey across chains, using BSC\u2019s lightning-fast ecosystem and the ever-popular Metamask wallet.",
                }),
                (0, da.jsxs)("div", {
                  style: {
                    display: "flex",
                    flexDirection: e ? "column" : "row",
                    gap: e ? "10px" : "15px",
                    marginTop: e ? "10px" : "20px",
                    justifyContent: "center",
                    marginBottom: e ? "1rem" : "2rem",
                  },
                  children: [

                  ],
                }),
              ],
            }),
            (0, da.jsx)("img", {
              src: "/images/czworm.png",
              alt: "CZ Wormhole",
              style: {
                width: e ? "60%" : "500px",
                height: "auto",
                marginTop: e ? "10px" : "0",
              },
            }),
          ],
        }),
      });
    },
    ou = {
      backgroundColor: "rgba(63, 62, 44, 0.6)",
      padding: "20px",
      borderRadius: "10px",
      textAlign: "center",
      transition: "transform 0.3s ease-in-out",
      cursor: "pointer",
      color: "white",
    },
    au = {
      backgroundColor: "rgba(63, 62, 44, 0.6)",
      padding: "10px",
      borderRadius: "8px",
      textAlign: "center",
      transition: "transform 0.3s ease-in-out",
      cursor: "pointer",
      color: "white",
    },
    su = () => {
      const [e, t] = (0, r.useState)({
          marketCap: "Loading...",
          volume: "Loading...",
          priceChange: "Loading...",
        }),
        [n, i] = (0, r.useState)(window.innerWidth < 1e3),
        [o, a] = (0, r.useState)(!1),
        s = (0, r.useRef)(null);
      return (
        (0, r.useEffect)(() => {
          const e = () => i(window.innerWidth < 1e3);
          return (
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
          );
        }, []),
        (0, r.useEffect)(() => {
          const e = async () => {
            try {
              const e = await fetch(
                  "https://api.dexscreener.com/latest/dex/tokens/0xcomingsoon"
                ),
                n = await e.json();
              n.pairs &&
                n.pairs.length > 0 &&
                t({
                  marketCap: `$${parseFloat(
                    n.pairs[0].marketCap
                  ).toLocaleString()}`,
                  volume: `$${parseFloat(
                    n.pairs[0].volume.h24
                  ).toLocaleString()}`,
                  priceChange: parseFloat(n.pairs[0].priceChange.h24).toFixed(
                    2
                  ),
                });
            } catch (e) {
              console.error("Error fetching market data:", e);
            }
          };
          e();
          const n = setInterval(() => e(), 1e4);
          return () => clearInterval(n);
        }, []),
        (0, r.useEffect)(() => {
          const e = new IntersectionObserver(
            (t) => {
              t.forEach((t) => {
                t.isIntersecting && (a(!0), e.unobserve(t.target));
              });
            },
            { threshold: 0.1 }
          );
          return (
            s.current && e.observe(s.current),
            () => {
              s.current && e.unobserve(s.current);
            }
          );
        }, []),
        (0, da.jsx)("div", {
          style: {
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            overflow: "hidden",
            marginTop: n ? "1rem" : "5rem",
            marginBottom: n ? "1rem" : "5rem",
          },
          children: (0, da.jsxs)("div", {
            ref: s,
            id: "tokenomics",
            style: {
              width: n ? "90vw" : "80vw",
              backgroundImage: "url('/images/bnb_background.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "25px",
              borderStyle: "solid",
              borderColor: "gold",
              position: "relative",
              display: n ? "block" : "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              marginTop: "3rem",
              marginBottom: n ? "2rem" : "5rem",
              marginLeft: "auto",
              marginRight: "auto",
              boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.8)",
              opacity: o ? 1 : 0,
              transform: o ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            },
            children: [
              (0, da.jsx)("h1", {
                style: {
                  fontSize: n ? "1.5rem" : "3rem",
                  textShadow: "10px 10px 10px rgba(0, 0, 0, 0.8)",
                  fontWeight: "bold",
                  marginBottom: 0,
                  marginTop: n ? "2rem" : "10rem",
                  fontFamily: "Frijole",
                  color: "white",
                },
                children: "ZHOA",
              }),
              (0, da.jsx)("h1", {
                style: {
                  fontSize: n ? "1.5rem" : "3rem",
                  textShadow: "10px 10px 10px rgba(0, 0, 0, 0.8)",
                  fontWeight: "bold",
                  marginBottom: n ? "1rem" : "5rem",
                  marginTop: 0,
                  fontFamily: "Frijole",
                  color: "white",
                },
                children: "TOKENOMICS",
              }),
              (0, da.jsx)("div", {
                style: {
                  display: "grid",
                  gridTemplateColumns: n ? "1fr 1fr" : "1fr 1fr 1fr 1fr",
                  gap: n ? "10px" : "20px",
                  width: n ? "90%" : "80%",
                  maxWidth: n ? "900px" : "1200px",
                  margin: "0 auto 5rem auto",
                },
                children: [
                  { label: "Circ Supply", value: "1,000,000,000" },
                  { label: "Liquidity", value: "Burned", color: "#ff4444" },
                  { label: "Contract", value: "Renounced", color: "#44ff44" },
                  { label: "Tax", value: "0% Buy/Sell", color: "#ffaa00" },
                ].map((e, t) =>
                  (0, da.jsxs)(
                    "div",
                    {
                      style: n
                        ? { ...au, color: e.color || "white" }
                        : { ...ou, color: e.color || "white" },
                      children: [
                        (0, da.jsx)("h2", {
                          style: { fontSize: n ? "1.3rem" : "1.8rem" },
                          children: e.label,
                        }),
                        (0, da.jsx)("p", {
                          style: { fontSize: n ? "1rem" : "1.5rem" },
                          children: e.value,
                        }),
                      ],
                    },
                    t
                  )
                ),
              }),
              (0, da.jsx)("div", {
                style: {
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: "10px",
                  width: n ? "90vw" : "70vw",
                  margin: "0 auto",
                  paddingBottom: n ? "2rem" : 0,
                },
                children: [
                  "zhoa-motorcycle.png",
                  "zhoa-machine.png",
                  "zhoa-workout.png",
                ].map((e, t) =>
                  (0, da.jsx)(
                    "img",
                    {
                      src: `/images/${e}`,
                      alt: `Zhoa ${e.split("-")[1]}`,
                      style: { width: "100%" },
                    },
                    t
                  )
                ),
              }),
            ],
          }),
        })
      );
    },
    lu = () => {
      const [e, t] = (0, r.useState)("images"),
        [n, i] = (0, r.useState)(window.innerWidth < 1e3),
        [o, a] = (0, r.useState)("/images/1.jpg"),
        [s, l] = (0, r.useState)("/images/v1.mp4"),
        [u, c] = (0, r.useState)(0),
        d = (0, r.useRef)(null),
        [f, h] = (0, r.useState)(!1),
        p = (0, r.useRef)(null);
      (0, r.useEffect)(() => {
        const e = () => i(window.innerWidth < 1e3);
        return (
          window.addEventListener("resize", e),
          () => window.removeEventListener("resize", e)
        );
      }, []),
        (0, r.useEffect)(() => {
          const e = new IntersectionObserver(
            (t) => {
              t.forEach((t) => {
                t.isIntersecting && (h(!0), e.unobserve(t.target));
              });
            },
            { threshold: 0.1 }
          );
          return (
            p.current && e.observe(p.current),
            () => {
              p.current && e.unobserve(p.current);
            }
          );
        }, []);
      const m =
          "images" === e
            ? [
                "/images/1.jpg",
                "/images/2.jpg",
                "/images/3.jpg",
                "/images/4.jpg",
                "/images/5.jpg",
                "/images/6.jpg",
                "/images/7.jpg",
                "/images/8.jpg",
                "/images/9.jpg",
                "/images/10.jpg",
                "/images/11.jpg",
                "/images/12.jpg",
                "/images/13.jpg",
                "/images/14.jpg",
                "/images/15.jpg",
                "/images/16.jpg",
                "/images/17.jpg",
                "/images/18.jpg",
                "/images/19.jpg",
                "/images/20.jpg",
              ]
            : [
                "/images/v1.mp4",
                "/images/v2.mp4",
                "/images/v3.mp4",
                "/images/v4.mp4",
                "/images/v5.mp4",
                "/images/v6.mp4",
                "/images/v7.mp4",
                "/images/v8.mp4",
                "/images/v9.mp4",
                "/images/v10.mp4",
                "/images/v11.mp4",
                "/images/v12.mp4",
                "/images/v13.mp4",
                "/images/v14.mp4",
                "/images/v15.mp4",
                "/images/v16.mp4",
                "/images/v17.mp4",
                "/images/v18.mp4",
                "/images/v19.mp4",
                "/images/v20.mp4",
              ],
        g = (e) => {
          if (d.current) {
            const t = n ? 100 : 200;
            d.current.scrollBy({ left: e * t, behavior: "smooth" });
          }
        };
      return (0, da.jsx)("div", {
        style: {
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          marginTop: n ? "0" : "1rem",
          marginBottom: n ? "0" : "1rem",
        },
        children: (0, da.jsxs)("div", {
          ref: p,
          id: "memes",
          style: {
            width: n ? "90vw" : "80vw",
            backgroundImage: "url('/images/bnb_memes.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            paddingBottom: n ? "2rem" : 0,
            textAlign: "center",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: "hidden",
            justifyContent: n ? "flex-start" : "center",
            borderRadius: "25px",
            borderStyle: "solid",
            borderColor: "gold",
            marginTop: "1rem",
            marginBottom: n ? "0" : "1rem",
            boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.8)",
            opacity: f ? 1 : 0,
            transform: f ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          },
          children: [
            (0, da.jsx)("h1", {
              style: {
                fontSize: n ? "1.5rem" : "3rem",
                fontWeight: "bold",
                fontFamily: "Frijole",
                textShadow: "10px 10px 10px rgba(0, 0, 0, 0.8)",
                marginBottom: n ? "1rem" : "15px",
                marginTop: n ? "3rem" : "4rem",
                color: "white",
              },
              children: "ZHOA Memes",
            }),
            (0, da.jsxs)("div", {
              style: {
                display: "flex",
                justifyContent: "center",
                marginBottom: "1rem",
                marginTop: n ? "2rem" : "1rem",
              },
              children: [
                (0, da.jsx)("button", {
                  onClick: () => t("images"),
                  style: {
                    padding: n ? "5px 25px" : "20px 50px",
                    margin: "0 10px",
                    background:
                      "images" === e ? "rgba(243, 186, 47, 0.95)" : "#0d1013",
                    fontSize: n ? ".7rem" : "1rem",
                    fontWeight: "bold",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginBottom: "1rem",
                  },
                  children: "Images",
                }),
                (0, da.jsx)("button", {
                  onClick: () => t("videos"),
                  style: {
                    padding: n ? "10px 25px" : "20px 50px",
                    margin: "0 10px",
                    background:
                      "videos" === e ? "rgba(243, 186, 47, 0.95)" : "#0d1013",
                    fontSize: n ? ".7rem" : "1rem",
                    fontWeight: "bold",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginBottom: "1rem",
                  },
                  children: "Videos",
                }),
              ],
            }),
            (0, da.jsx)("div", {
              style: {
                width: "100%",
                height: n ? "40%" : "50%",
                marginBottom: n ? "0rem" : "2rem",
                display: "flex",
                justifyContent: "center",
              },
              children:
                "images" === e
                  ? (0, da.jsx)("div", {
                      style: {
                        width: "60%",
                        height: "100%",
                        borderRadius: "25px",
                        overflow: "hidden",
                      },
                      children: (0, da.jsx)("img", {
                        src: o,
                        alt: "Selected Meme",
                        style: {
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        },
                      }),
                    })
                  : (0, da.jsx)("div", {
                      style: {
                        width: "60%",
                        height: "100%",
                        borderRadius: "25px",
                        overflow: "hidden",
                      },
                      children: (0, da.jsx)(
                        "video",
                        {
                          controls: !0,
                          autoPlay: !0,
                          muted: !0,
                          style: { width: "100%", height: "100%" },
                          children: (0, da.jsx)("source", {
                            src: s,
                            type: "video/mp4",
                          }),
                        },
                        u
                      ),
                    }),
            }),
            (0, da.jsxs)("div", {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: n ? "1rem" : "2rem",
                width: n ? "90%" : "100%",
              },
              children: [
                (0, da.jsx)("button", {
                  onClick: () => g(-1),
                  style: {
                    background: "rgba(255, 255, 255, 0.5)",
                    border: "none",
                    borderRadius: "25px",
                    width: "40px",
                    height: "40px",
                    cursor: "pointer",
                    marginRight: "10px",
                  },
                  children: "\u25c0",
                }),
                (0, da.jsx)("div", {
                  ref: d,
                  style: {
                    display: "flex",
                    gap: "10px",
                    overflowX: "auto",
                    whiteSpace: "nowrap",
                    width: "80%",
                    paddingBottom: "10px",
                    scrollbarWidth: "none",
                  },
                  children: m.map((t, n) =>
                    "images" === e
                      ? (0, da.jsx)(
                          "img",
                          {
                            src: t,
                            alt: `Meme ${n + 1}`,
                            onClick: () => a(t),
                            style: {
                              width: "100px",
                              height: "100px",
                              objectFit: "cover",
                              cursor: "pointer",
                              borderRadius: "25px",
                              border: o === t ? "2px solid white" : "none",
                            },
                          },
                          n
                        )
                      : (0, da.jsx)(
                          "video",
                          {
                            onClick: () => {
                              l(t), c((e) => e + 1);
                            },
                            style: {
                              width: "100px",
                              height: "100px",
                              objectFit: "cover",
                              cursor: "pointer",
                              borderRadius: "25px",
                              border: s === t ? "2px solid white" : "none",
                            },
                            children: (0, da.jsx)("source", {
                              src: t,
                              type: "video/mp4",
                            }),
                          },
                          n
                        )
                  ),
                }),
                (0, da.jsx)("button", {
                  onClick: () => g(1),
                  style: {
                    background: "rgba(255, 255, 255, 0.5)",
                    border: "none",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    cursor: "pointer",
                    marginLeft: "10px",
                  },
                  children: "\u25b6",
                }),
              ],
            }),
          ],
        }),
      });
    },
    uu = () => {
      const [e, t] = (0, r.useState)(window.innerWidth < 1e3),
        n = e ? 1 : 8,
        [i, o] = (0, r.useState)(!1),
        a = (0, r.useRef)(null);
      (0, r.useEffect)(() => {
        const e = new IntersectionObserver(
          (t) => {
            t.forEach((t) => {
              t.isIntersecting &&
                (setTimeout(() => o(!0), 200), e.unobserve(t.target));
            });
          },
          { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
        );
        return (
          a.current && e.observe(a.current),
          () => {
            a.current && e.unobserve(a.current);
          }
        );
      }, []);
      const s = [
        {
          name: "DexScreener",
          src: "/images/dexscreener.png",
          url: "https://dexscreener.com/bsc/0xcomingsoon",
        },
        {
          name: "PancakeSwap",
          src: "/images/pcs.png",
          url: "https://pancakeswap.finance/swap?outputCurrency=0xcomingsoon",
        },
        {
          name: "Telegram",
          src: "/images/tg.png",
          url: "https://t.me/ChengpangzhoaonBNB",
        },
        { name: "X", src: "/images/x.png", url: "https://x.com/ZhoaonBNB" },
      ];
      let l;
      if (e) l = s;
      else {
        const e = Math.ceil(s.length / n) * n - s.length;
        l = [...s, ...s.slice(0, e)];
      }
      const u = [...l, ...l],
        c = l.length,
        d = 11 * c,
        f = 2 * c + "s";
      (0, r.useEffect)(() => {
        const e = () => t(window.innerWidth < 1e3);
        return (
          window.addEventListener("resize", e),
          () => window.removeEventListener("resize", e)
        );
      }, []);
      const h = {
          width: e ? "90vw" : "80vw",
          overflow: "hidden",
          position: "relative",
          marginTop: "2rem",
        },
        p = {
          display: "flex",
          width: 11 * u.length + "rem",
          animation: `scroll ${f} linear infinite`,
        },
        m = {
          width: e ? "7rem" : "10rem",
          height: e ? "7rem" : "10rem",
          border: "2px solid gold",
          borderRadius: "25px",
          margin: "0 0.5rem",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.8)",
        };
      return (0, da.jsxs)("div", {
        ref: a,
        id: "memes",
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100vw",
          marginTop: "5rem",
          marginBottom: "1rem",
          opacity: i ? 1 : 0,
          transform: i ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        },
        children: [
          (0, da.jsx)("header", {
            style: { width: "100%", textAlign: "center", marginBottom: "1rem" },
            children: (0, da.jsx)("h1", {
              style: {
                fontFamily: "Frijole",
                fontSize: e ? "1.5rem" : "3rem",
                margin: 0,
                color: "white",
              },
              children: "LINKS",
            }),
          }),
          (0, da.jsxs)("div", {
            style: h,
            children: [
              (0, da.jsx)("style", {
                children: `\n            @keyframes scroll {\n              from { transform: translateX(0); }\n              to { transform: translateX(-${d}rem); }\n            }\n            .slides-wrapper:hover {\n              animation-play-state: paused !important;\n            }\n          `,
              }),
              (0, da.jsx)("div", {
                className: "slides-wrapper",
                style: p,
                children: u.map((e, t) =>
                  (0, da.jsx)(
                    "div",
                    {
                      style: { ...m, backgroundImage: `url(${e.src})` },
                      children: (0, da.jsx)("a", {
                        href: e.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: {
                          display: "block",
                          width: "100%",
                          height: "100%",
                        },
                      }),
                    },
                    t
                  )
                ),
              }),
            ],
          }),
        ],
      });
    },
    cu = () => {
      const [e, t] = (0, r.useState)(window.innerWidth < 1e3),
        [n, i] = (0, r.useState)(!1),
        o = (0, r.useRef)(null);
      (0, r.useEffect)(() => {
        const e = () => t(window.innerWidth < 1e3);
        return (
          window.addEventListener("resize", e),
          () => window.removeEventListener("resize", e)
        );
      }, []),
        (0, r.useEffect)(() => {
          const e = new IntersectionObserver(
            (t) => {
              t.forEach((t) => {
                t.isIntersecting &&
                  (setTimeout(() => i(!0), 200), e.unobserve(t.target));
              });
            },
            { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
          );
          return (
            o.current && e.observe(o.current),
            () => {
              o.current && e.unobserve(o.current);
            }
          );
        }, []);
      const a = [
          {
            name: "Chris Campbell aka SuperBennyBear",
            role: "CEO",
            image: "/images/benny.jpg",
            description:
              "BNB Maxi since 2021. The main developer of $ZHOA has always believed that BNBchain is the best blockchain and lives and breathes the Binance ecosystem even though it is currently heavily regulated in his home country of Canada!",
          },
          { name: "Gato", image: "/images/gato.png" },
          { name: "Jason", image: "/images/jason.png" },
          { name: "Slinky", image: "/images/slinky.png" },
        ],
        s = {
          display: "flex",
          flexDirection: "column",
          width: e ? "90vw" : "80vw",
          backgroundImage: e
            ? "url('/images/zhoa-team-mobile.png')"
            : "url('/images/zhoa-team.png')",
          backgroundSize: "cover",
          backgroundPosition: e ? "bottom" : "center",
          borderRadius: "25px",
          borderStyle: "solid",
          borderColor: "gold",
          marginTop: e ? "1rem" : "5rem",
          boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.8)",
          paddingBottom: e ? "15rem" : "0",
          opacity: n ? 1 : 0,
          transform: n ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        },
        l = {
          flex: 1,
          display: "flex",
          flexDirection: e ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          width: "100%",
        },
        u = {
          fontSize: e ? "1.5rem" : "3rem",
          fontWeight: "bold",
          fontFamily: "Frijole",
          textShadow: "10px 10px 10px rgba(0, 0, 0, 0.8)",
          color: "white",
          textAlign: "center",
          marginTop: "2rem",
        },
        c = {
          width: e ? "100%" : "50%",
          textAlign: "center",
          padding: e ? "0 1rem" : "0 20rem",
        },
        d = {
          width: e ? "70%" : "25rem",
          margin: "0 auto",
          background: "rgba(0, 0, 0, 0.6)",
          padding: "20px",
          borderRadius: "10px",
        },
        f = {
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: e ? ".2rem" : ".5rem",
          marginTop: "20px",
          marginBottom: "3rem",
        },
        h = {
          width: e ? "20%" : "150px",
          textAlign: "center",
          background: "rgba(0, 0, 0, 0.6)",
          padding: "10px",
          borderRadius: "10px",
        };
      return (0, da.jsx)("div", {
        ref: o,
        style: {
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          marginTop: "3rem",
          marginBottom: "3rem",
        },
        children: (0, da.jsxs)("div", {
          style: s,
          children: [
            (0, da.jsx)("h1", { style: u, children: "ZHOA TEAM" }),
            (0, da.jsx)("div", {
              style: l,
              children: (0, da.jsxs)("div", {
                style: c,
                children: [
                  (0, da.jsxs)("div", {
                    style: d,
                    children: [
                      (0, da.jsx)("img", {
                        src: a[0].image,
                        alt: a[0].name,
                        style: { width: "50%", borderRadius: "10px" },
                      }),
                      (0, da.jsx)("h3", {
                        style: {
                          fontSize: e ? "1rem" : "2rem",
                          fontWeight: "bold",
                          color: "white",
                        },
                        children: a[0].name,
                      }),
                      (0, da.jsx)("p", {
                        style: {
                          fontSize: e ? ".8rem" : "1rem",
                          color: "white",
                        },
                        children: a[0].description,
                      }),
                    ],
                  }),
                  (0, da.jsx)("div", {
                    style: f,
                    children: a
                      .slice(1)
                      .map((e, t) =>
                        (0, da.jsxs)(
                          "div",
                          {
                            style: h,
                            children: [
                              (0, da.jsx)("img", {
                                src: e.image,
                                alt: e.name,
                                style: { width: "100%", borderRadius: "10px" },
                              }),
                              (0, da.jsx)("h4", {
                                style: { fontSize: "1rem", color: "white" },
                                children: e.name,
                              }),
                            ],
                          },
                          t
                        )
                      ),
                  }),
                ],
              }),
            }),
          ],
        }),
      });
    },
    du = () => {
      const e = new Array(50).fill("LAUNCHED ON FOUR.MEME"),
        [t, n] = (0, r.useState)(window.innerWidth < 1e3);
      (0, r.useEffect)(() => {
        const e = () => n(window.innerWidth < 1e3);
        return (
          window.addEventListener("resize", e),
          () => window.removeEventListener("resize", e)
        );
      }, []);
      const i = {
          display: "flex",
          whiteSpace: "nowrap",
          animation: "marquee 500s linear infinite",
          color: "rgba(255, 255, 255, 0.5)",
          fontSize: t ? "2rem" : "5rem",
          fontFamily: "Slackey",
        },
        o = { marginRight: "3rem" };
      return (0, da.jsxs)(da.Fragment, {
        children: [
          (0, da.jsx)("style", {
            children:
              "\n        @keyframes marquee {\n          0% { transform: translateX(0); }\n          100% { transform: translateX(-50%); }\n        }\n      ",
          }),
          (0, da.jsx)("div", {
            style: {
              width: "100vw",
              overflow: "hidden",
              background: "transparent",
              display: "flex",
              alignItems: "center",
              padding: 0,
              margin: 0,
            },
            children: (0, da.jsxs)("div", {
              style: i,
              children: [
                (0, da.jsx)("div", {
                  style: { display: "flex" },
                  children: e.map((e, t) =>
                    (0, da.jsx)("span", { style: o, children: e }, t)
                  ),
                }),
                (0, da.jsx)("div", {
                  style: { display: "flex" },
                  children: e.map((e, t) =>
                    (0, da.jsx)("span", { style: o, children: e }, t)
                  ),
                }),
              ],
            }),
          }),
        ],
      });
    },
    fu = () => {
      const [e, t] = (0, r.useState)(window.innerWidth < 1e3);
      return (
        (0, r.useEffect)(() => {
          const e = () => {
            t(window.innerWidth < 1e3);
          };
          return (
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
          );
        }, []),
        (0, da.jsx)("footer", {
          style: {
            position: "relative",
            width: "100%",
            textAlign: "center",
            fontSize: e ? "8px" : "12px",
            color: "white",
            padding: "10px 0",
          },
          children: (0, da.jsx)("p", {
            children:
              "COPYRIGHT @2025 CHENGPANG ZHOA. LEGAL DISCLAIMER: $ZHOA IS A MEME COIN WITH NO INTRINSIC VALUE OR EXPECTATION OF FINANCIAL RETURN. IT IS COMPLETELY USELESS AND ONLY FOR ENTERTAINMENT PURPOSES. WHEN YOU BUY $ZHOA YOU ARE AGREEING TO THIS DISCLAIMER. Email us at admin@zhoa.fun",
          }),
        })
      );
    },
    hu = () => {
      const [e, t] = (0, r.useState)(window.innerWidth < 1e3),
        [n, i] = (0, r.useState)(!1),
        o = (0, r.useRef)(null);
      (0, r.useEffect)(() => {
        const e = () => {
          t(window.innerWidth < 1e3);
        };
        return (
          window.addEventListener("resize", e),
          () => window.removeEventListener("resize", e)
        );
      }, []),
        (0, r.useEffect)(() => {
          const e = new IntersectionObserver(
            (t) => {
              t.forEach((t) => {
                t.isIntersecting &&
                  (setTimeout(() => i(!0), 200), e.unobserve(t.target));
              });
            },
            { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
          );
          return (
            o.current && e.observe(o.current),
            () => {
              o.current && e.unobserve(o.current);
            }
          );
        }, []);
      const a = {
        display: "inline-block",
        padding: "10px 20px",
        minWidth: "100px",
        fontSize: "1rem",
        fontWeight: "bold",
        color: "black",
        textDecoration: "none",
        backgroundColor: "rgba(243, 186, 47, 0.95)",
        boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.8)",
        borderRadius: "10px",
        textAlign: "center",
        transition: "background 0.3s",
        cursor: "pointer",
        marginTop: e ? "1.5rem" : "50px",
      };
      return (0, da.jsx)("div", {
        style: {
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          marginTop: e ? "2rem" : "5rem",
          marginBottom: e ? "1rem" : "5rem",
        },
        children: (0, da.jsxs)("div", {
          ref: o,
          style: {
            width: e ? "90vw" : "80vw",
            display: "flex",
            flexDirection: e ? "column" : "row",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: e ? "2rem" : "5rem",
            paddingBottom: e ? "2rem" : "5rem",
            position: "relative",
            overflow: "hidden",
            backgroundImage: "url('/images/staking.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "25px",
            borderStyle: "solid",
            borderColor: "gold",
            boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.8)",
            opacity: n ? 1 : 0,
            transform: n ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          },
          children: [
            (0, da.jsxs)("div", {
              style: {
                width: e ? "70%" : "40%",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                padding: e ? "1rem" : "2rem",
                borderRadius: "15px",
                color: "white",
                textAlign: "center",
                zIndex: 2,
                marginBottom: e ? "1rem" : "0",
              },
              children: [
                (0, da.jsx)("h1", {
                  style: {
                    fontSize: e ? "1.5rem" : "3rem",
                    textShadow: "10px 10px 10px rgba(0, 0, 0, 0.8)",
                    fontWeight: "bold",
                    marginBottom: e ? "10px" : "15px",
                    fontFamily: "Frijole",
                  },
                  children: "The ZHOA HODL Club",
                }),
                (0, da.jsx)("p", {
                  style: { fontSize: e ? "1rem" : "1.5rem", lineHeight: "1.5" },
                  children:
                    "Introducing the Chengpang Zhoa ($ZHOA) HODL Club: a staking haven for diamond hand believers in the BNB Chain meme token inspired by Binance\u2019s CZ. With the tagline \u201cIf Yu C*nt Holdl Yu Wund bi reech!\u201d, $ZHOA rewards dedicated HODLers through its new staking service.",
                }),
                (0, da.jsx)("div", {
                  style: {
                    display: "flex",
                    flexDirection: e ? "column" : "row",
                    gap: e ? "10px" : "15px",
                    marginTop: e ? "10px" : "20px",
                    marginBottom: e ? "1rem" : "2rem",
                    justifyContent: "center",
                  },
                  children: (0, da.jsx)("a", {
                    href: "https://pancakeswap.finance/swap?outputCurrency=%220xcomingsoon%22",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    style: a,
                    children: "BUY $ZHOA",
                  }),
                }),
              ],
            }),
            (0, da.jsx)("img", {
              src: "/images/zhoa-balloon.png",
              alt: "CZ Wormhole",
              style: {
                width: e ? "60%" : "500px",
                height: "auto",
                marginTop: e ? "10px" : "0",
              },
            }),
          ],
        }),
      });
    },
    pu = () =>
      (0, da.jsxs)(Kl.div, {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 2 },
        children: [
          (0, da.jsx)(nu, {}),
          (0, da.jsx)(ru, {}),
          (0, da.jsx)(du, {}),
          (0, da.jsx)(iu, {}),
          (0, da.jsx)(su, {}),
          (0, da.jsx)(hu, {}),
          (0, da.jsx)(lu, {}),
          (0, da.jsx)(uu, {}),
          (0, da.jsx)(cu, {}),
          (0, da.jsx)(fu, {}),
        ],
      });
  const mu = function () {
      const [e, t] = (0, r.useState)(window.innerWidth < 1e3);
      return (
        (0, r.useEffect)(() => {
          const e = () => t(window.innerWidth < 1e3);
          return (
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
          );
        }, []),
        (0, da.jsx)(Ge, {
          children: (0, da.jsx)("div", {
            className: "App",
            children: (0, da.jsxs)(ve, {
              children: [
                (0, da.jsx)(me, { path: "/", element: (0, da.jsx)(tu, {}) }),
                (0, da.jsx)(me, {
                  path: "/main",
                  element: (0, da.jsx)(pu, {}),
                }),
              ],
            }),
          }),
        })
      );
    },
    gu = (e) => {
      e &&
        e instanceof Function &&
        n
          .e(488)
          .then(n.bind(n, 488))
          .then((t) => {
            let { getCLS: n, getFID: r, getFCP: i, getLCP: o, getTTFB: a } = t;
            n(e), r(e), i(e), o(e), a(e);
          });
    };
  i
    .createRoot(document.getElementById("root"))
    .render((0, da.jsx)(r.StrictMode, { children: (0, da.jsx)(mu, {}) })),
    gu();
})();
//# sourceMappingURL=main.8efbf49d.js.map
