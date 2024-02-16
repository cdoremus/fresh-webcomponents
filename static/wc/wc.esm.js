// deno-lint-ignore-file

// components/wc/CounterWC.ts
var CounterWC = class extends HTMLElement {
  buttons;
  counterCount;
  /** @constructor */
  constructor() {
    super();
    this.buttons = this.querySelectorAll("button");
    this.counterCount = this.querySelector("#counter-count");
  }
  /** @method */
  connectedCallback() {
    for (const button of this.buttons) {
      button.addEventListener("click", () => {
        const countHTML = parseInt(this.counterCount.innerHTML);
        this.counterCount.innerHTML = (countHTML + parseInt(button.innerHTML)).toString();
      });
    }
  }
};
customElements.define("counter-wc", CounterWC);

// components/wc/HelloWC.ts
var HelloWC = class extends HTMLElement {
  message;
  /** @constructor */
  constructor() {
    super();
    this.message = this.getAttribute("message") ?? "World";
  }
  /** @method */
  connectedCallback() {
    this.innerHTML = `<div style="border: 2px solid black; border-radius: 10px; margin: 10px 5px; padding: 5px 10px;">
        <h4>Hello ${this.message}!!</h4>
      </div>`;
  }
};
customElements.define("hello-wc", HelloWC);

// https://esm.sh/v134/@lit/reactive-element@2.0.2/denonext/reactive-element.mjs
var l = globalThis;
var p = l.ShadowRoot && (l.ShadyCSS === void 0 || l.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var f = Symbol();
var _ = /* @__PURE__ */ new WeakMap();
var h = class {
  constructor(t2, e, s) {
    if (this._$cssResult$ = true, s !== f)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t2, this.t = e;
  }
  get styleSheet() {
    let t2 = this.o, e = this.t;
    if (p && t2 === void 0) {
      let s = e !== void 0 && e.length === 1;
      s && (t2 = _.get(e)), t2 === void 0 && ((this.o = t2 = new CSSStyleSheet()).replaceSync(this.cssText), s && _.set(e, t2));
    }
    return t2;
  }
  toString() {
    return this.cssText;
  }
};
var m = (r) => new h(typeof r == "string" ? r : r + "", void 0, f);
var v = (r, ...t2) => {
  let e = r.length === 1 ? r[0] : t2.reduce((s, i, o3) => s + ((n) => {
    if (n._$cssResult$ === true)
      return n.cssText;
    if (typeof n == "number")
      return n;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + r[o3 + 1], r[0]);
  return new h(e, r, f);
};
var S = (r, t2) => {
  if (p)
    r.adoptedStyleSheets = t2.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else
    for (let e of t2) {
      let s = document.createElement("style"), i = l.litNonce;
      i !== void 0 && s.setAttribute("nonce", i), s.textContent = e.cssText, r.appendChild(s);
    }
};
var d = p ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t2) => {
  let e = "";
  for (let s of t2.cssRules)
    e += s.cssText;
  return m(e);
})(r) : r;
var { is: w, defineProperty: P, getOwnPropertyDescriptor: C, getOwnPropertyNames: U, getOwnPropertySymbols: A, getPrototypeOf: R } = Object;
var u = globalThis;
var E = u.trustedTypes;
var O = E ? E.emptyScript : "";
var T = u.reactiveElementPolyfillSupport;
var c = (r, t2) => r;
var y = { toAttribute(r, t2) {
  switch (t2) {
    case Boolean:
      r = r ? O : null;
      break;
    case Object:
    case Array:
      r = r == null ? r : JSON.stringify(r);
  }
  return r;
}, fromAttribute(r, t2) {
  let e = r;
  switch (t2) {
    case Boolean:
      e = r !== null;
      break;
    case Number:
      e = r === null ? null : Number(r);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(r);
      } catch {
        e = null;
      }
  }
  return e;
} };
var g = (r, t2) => !w(r, t2);
var $ = { attribute: true, type: String, converter: y, reflect: false, hasChanged: g };
Symbol.metadata ??= Symbol("metadata"), u.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var a = class extends HTMLElement {
  static addInitializer(t2) {
    this._$Ei(), (this.l ??= []).push(t2);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t2, e = $) {
    if (e.state && (e.attribute = false), this._$Ei(), this.elementProperties.set(t2, e), !e.noAccessor) {
      let s = Symbol(), i = this.getPropertyDescriptor(t2, s, e);
      i !== void 0 && P(this.prototype, t2, i);
    }
  }
  static getPropertyDescriptor(t2, e, s) {
    let { get: i, set: o3 } = C(this.prototype, t2) ?? { get() {
      return this[e];
    }, set(n) {
      this[e] = n;
    } };
    return { get() {
      return i?.call(this);
    }, set(n) {
      let b2 = i?.call(this);
      o3.call(this, n), this.requestUpdate(t2, b2, s);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t2) {
    return this.elementProperties.get(t2) ?? $;
  }
  static _$Ei() {
    if (this.hasOwnProperty(c("elementProperties")))
      return;
    let t2 = R(this);
    t2.finalize(), t2.l !== void 0 && (this.l = [...t2.l]), this.elementProperties = new Map(t2.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(c("finalized")))
      return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(c("properties"))) {
      let e = this.properties, s = [...U(e), ...A(e)];
      for (let i of s)
        this.createProperty(i, e[i]);
    }
    let t2 = this[Symbol.metadata];
    if (t2 !== null) {
      let e = litPropertyMetadata.get(t2);
      if (e !== void 0)
        for (let [s, i] of e)
          this.elementProperties.set(s, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (let [e, s] of this.elementProperties) {
      let i = this._$Eu(e, s);
      i !== void 0 && this._$Eh.set(i, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t2) {
    let e = [];
    if (Array.isArray(t2)) {
      let s = new Set(t2.flat(1 / 0).reverse());
      for (let i of s)
        e.unshift(d(i));
    } else
      t2 !== void 0 && e.push(d(t2));
    return e;
  }
  static _$Eu(t2, e) {
    let s = e.attribute;
    return s === false ? void 0 : typeof s == "string" ? s : typeof t2 == "string" ? t2.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$Eg = new Promise((t2) => this.enableUpdating = t2), this._$AL = /* @__PURE__ */ new Map(), this._$ES(), this.requestUpdate(), this.constructor.l?.forEach((t2) => t2(this));
  }
  addController(t2) {
    (this._$E_ ??= /* @__PURE__ */ new Set()).add(t2), this.renderRoot !== void 0 && this.isConnected && t2.hostConnected?.();
  }
  removeController(t2) {
    this._$E_?.delete(t2);
  }
  _$ES() {
    let t2 = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (let s of e.keys())
      this.hasOwnProperty(s) && (t2.set(s, this[s]), delete this[s]);
    t2.size > 0 && (this._$Ep = t2);
  }
  createRenderRoot() {
    let t2 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return S(t2, this.constructor.elementStyles), t2;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$E_?.forEach((t2) => t2.hostConnected?.());
  }
  enableUpdating(t2) {
  }
  disconnectedCallback() {
    this._$E_?.forEach((t2) => t2.hostDisconnected?.());
  }
  attributeChangedCallback(t2, e, s) {
    this._$AK(t2, s);
  }
  _$EO(t2, e) {
    let s = this.constructor.elementProperties.get(t2), i = this.constructor._$Eu(t2, s);
    if (i !== void 0 && s.reflect === true) {
      let o3 = (s.converter?.toAttribute !== void 0 ? s.converter : y).toAttribute(e, s.type);
      this._$Em = t2, o3 == null ? this.removeAttribute(i) : this.setAttribute(i, o3), this._$Em = null;
    }
  }
  _$AK(t2, e) {
    let s = this.constructor, i = s._$Eh.get(t2);
    if (i !== void 0 && this._$Em !== i) {
      let o3 = s.getPropertyOptions(i), n = typeof o3.converter == "function" ? { fromAttribute: o3.converter } : o3.converter?.fromAttribute !== void 0 ? o3.converter : y;
      this._$Em = i, this[i] = n.fromAttribute(e, o3.type), this._$Em = null;
    }
  }
  requestUpdate(t2, e, s, i = false, o3) {
    if (t2 !== void 0) {
      if (s ??= this.constructor.getPropertyOptions(t2), !(s.hasChanged ?? g)(i ? o3 : this[t2], e))
        return;
      this.C(t2, e, s);
    }
    this.isUpdatePending === false && (this._$Eg = this._$EP());
  }
  C(t2, e, s) {
    this._$AL.has(t2) || this._$AL.set(t2, e), s.reflect === true && this._$Em !== t2 && (this._$Ej ??= /* @__PURE__ */ new Set()).add(t2);
  }
  async _$EP() {
    this.isUpdatePending = true;
    try {
      await this._$Eg;
    } catch (e) {
      Promise.reject(e);
    }
    let t2 = this.scheduleUpdate();
    return t2 != null && await t2, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending)
      return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (let [i, o3] of this._$Ep)
          this[i] = o3;
        this._$Ep = void 0;
      }
      let s = this.constructor.elementProperties;
      if (s.size > 0)
        for (let [i, o3] of s)
          o3.wrapped !== true || this._$AL.has(i) || this[i] === void 0 || this.C(i, this[i], o3);
    }
    let t2 = false, e = this._$AL;
    try {
      t2 = this.shouldUpdate(e), t2 ? (this.willUpdate(e), this._$E_?.forEach((s) => s.hostUpdate?.()), this.update(e)) : this._$ET();
    } catch (s) {
      throw t2 = false, this._$ET(), s;
    }
    t2 && this._$AE(e);
  }
  willUpdate(t2) {
  }
  _$AE(t2) {
    this._$E_?.forEach((e) => e.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t2)), this.updated(t2);
  }
  _$ET() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$Eg;
  }
  shouldUpdate(t2) {
    return true;
  }
  update(t2) {
    this._$Ej &&= this._$Ej.forEach((e) => this._$EO(e, this[e])), this._$ET();
  }
  updated(t2) {
  }
  firstUpdated(t2) {
  }
};
a.elementStyles = [], a.shadowRootOptions = { mode: "open" }, a[c("elementProperties")] = /* @__PURE__ */ new Map(), a[c("finalized")] = /* @__PURE__ */ new Map(), T?.({ ReactiveElement: a }), (u.reactiveElementVersions ??= []).push("2.0.2");

// https://esm.sh/v134/lit-html@3.1.0/denonext/lit-html.mjs
var U2 = globalThis;
var M = U2.trustedTypes;
var L = M ? M.createPolicy("lit-html", { createHTML: (o3) => o3 }) : void 0;
var O2 = "$lit$";
var d2 = `lit$${(Math.random() + "").slice(9)}$`;
var R2 = "?" + d2;
var K = `<${R2}>`;
var v2 = document;
var H = () => v2.createComment("");
var N = (o3) => o3 === null || typeof o3 != "object" && typeof o3 != "function";
var z = Array.isArray;
var Z = (o3) => z(o3) || typeof o3?.[Symbol.iterator] == "function";
var P2 = `[ 	
\f\r]`;
var x = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var W = /-->/g;
var k = />/g;
var u2 = RegExp(`>|${P2}(?:([^\\s"'>=/]+)(${P2}*=${P2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
var D = /'/g;
var V = /"/g;
var q = /^(?:script|style|textarea|title)$/i;
var F = (o3) => (t2, ...s) => ({ _$litType$: o3, strings: t2, values: s });
var X = F(1);
var Y = F(2);
var b = Symbol.for("lit-noChange");
var A2 = Symbol.for("lit-nothing");
var j = /* @__PURE__ */ new WeakMap();
var g2 = v2.createTreeWalker(v2, 129);
function G(o3, t2) {
  if (!Array.isArray(o3) || !o3.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return L !== void 0 ? L.createHTML(t2) : t2;
}
var J = (o3, t2) => {
  let s = o3.length - 1, e = [], i, n = t2 === 2 ? "<svg>" : "", r = x;
  for (let _2 = 0; _2 < s; _2++) {
    let h2 = o3[_2], $2, a2, l3 = -1, c2 = 0;
    for (; c2 < h2.length && (r.lastIndex = c2, a2 = r.exec(h2), a2 !== null); )
      c2 = r.lastIndex, r === x ? a2[1] === "!--" ? r = W : a2[1] !== void 0 ? r = k : a2[2] !== void 0 ? (q.test(a2[2]) && (i = RegExp("</" + a2[2], "g")), r = u2) : a2[3] !== void 0 && (r = u2) : r === u2 ? a2[0] === ">" ? (r = i ?? x, l3 = -1) : a2[1] === void 0 ? l3 = -2 : (l3 = r.lastIndex - a2[2].length, $2 = a2[1], r = a2[3] === void 0 ? u2 : a2[3] === '"' ? V : D) : r === V || r === D ? r = u2 : r === W || r === k ? r = x : (r = u2, i = void 0);
    let p2 = r === u2 && o3[_2 + 1].startsWith("/>") ? " " : "";
    n += r === x ? h2 + K : l3 >= 0 ? (e.push($2), h2.slice(0, l3) + O2 + h2.slice(l3) + d2 + p2) : h2 + d2 + (l3 === -2 ? _2 : p2);
  }
  return [G(o3, n + (o3[s] || "<?>") + (t2 === 2 ? "</svg>" : "")), e];
};
var C2 = class o {
  constructor({ strings: t2, _$litType$: s }, e) {
    let i;
    this.parts = [];
    let n = 0, r = 0, _2 = t2.length - 1, h2 = this.parts, [$2, a2] = J(t2, s);
    if (this.el = o.createElement($2, e), g2.currentNode = this.el.content, s === 2) {
      let l3 = this.el.content.firstChild;
      l3.replaceWith(...l3.childNodes);
    }
    for (; (i = g2.nextNode()) !== null && h2.length < _2; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes())
          for (let l3 of i.getAttributeNames())
            if (l3.endsWith(O2)) {
              let c2 = a2[r++], p2 = i.getAttribute(l3).split(d2), T2 = /([.?@])?(.*)/.exec(c2);
              h2.push({ type: 1, index: n, name: T2[2], strings: p2, ctor: T2[1] === "." ? E2 : T2[1] === "?" ? S2 : T2[1] === "@" ? I : m2 }), i.removeAttribute(l3);
            } else
              l3.startsWith(d2) && (h2.push({ type: 6, index: n }), i.removeAttribute(l3));
        if (q.test(i.tagName)) {
          let l3 = i.textContent.split(d2), c2 = l3.length - 1;
          if (c2 > 0) {
            i.textContent = M ? M.emptyScript : "";
            for (let p2 = 0; p2 < c2; p2++)
              i.append(l3[p2], H()), g2.nextNode(), h2.push({ type: 2, index: ++n });
            i.append(l3[c2], H());
          }
        }
      } else if (i.nodeType === 8)
        if (i.data === R2)
          h2.push({ type: 2, index: n });
        else {
          let l3 = -1;
          for (; (l3 = i.data.indexOf(d2, l3 + 1)) !== -1; )
            h2.push({ type: 7, index: n }), l3 += d2.length - 1;
        }
      n++;
    }
  }
  static createElement(t2, s) {
    let e = v2.createElement("template");
    return e.innerHTML = t2, e;
  }
};
function f2(o3, t2, s = o3, e) {
  if (t2 === b)
    return t2;
  let i = e !== void 0 ? s._$Co?.[e] : s._$Cl, n = N(t2) ? void 0 : t2._$litDirective$;
  return i?.constructor !== n && (i?._$AO?.(false), n === void 0 ? i = void 0 : (i = new n(o3), i._$AT(o3, s, e)), e !== void 0 ? (s._$Co ??= [])[e] = i : s._$Cl = i), i !== void 0 && (t2 = f2(o3, i._$AS(o3, t2.values), i, e)), t2;
}
var w2 = class {
  constructor(t2, s) {
    this._$AV = [], this._$AN = void 0, this._$AD = t2, this._$AM = s;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t2) {
    let { el: { content: s }, parts: e } = this._$AD, i = (t2?.creationScope ?? v2).importNode(s, true);
    g2.currentNode = i;
    let n = g2.nextNode(), r = 0, _2 = 0, h2 = e[0];
    for (; h2 !== void 0; ) {
      if (r === h2.index) {
        let $2;
        h2.type === 2 ? $2 = new y2(n, n.nextSibling, this, t2) : h2.type === 1 ? $2 = new h2.ctor(n, h2.name, h2.strings, this, t2) : h2.type === 6 && ($2 = new B(n, this, t2)), this._$AV.push($2), h2 = e[++_2];
      }
      r !== h2?.index && (n = g2.nextNode(), r++);
    }
    return g2.currentNode = v2, i;
  }
  p(t2) {
    let s = 0;
    for (let e of this._$AV)
      e !== void 0 && (e.strings !== void 0 ? (e._$AI(t2, e, s), s += e.strings.length - 2) : e._$AI(t2[s])), s++;
  }
};
var y2 = class o2 {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t2, s, e, i) {
    this.type = 2, this._$AH = A2, this._$AN = void 0, this._$AA = t2, this._$AB = s, this._$AM = e, this.options = i, this._$Cv = i?.isConnected ?? true;
  }
  get parentNode() {
    let t2 = this._$AA.parentNode, s = this._$AM;
    return s !== void 0 && t2?.nodeType === 11 && (t2 = s.parentNode), t2;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t2, s = this) {
    t2 = f2(this, t2, s), N(t2) ? t2 === A2 || t2 == null || t2 === "" ? (this._$AH !== A2 && this._$AR(), this._$AH = A2) : t2 !== this._$AH && t2 !== b && this._(t2) : t2._$litType$ !== void 0 ? this.g(t2) : t2.nodeType !== void 0 ? this.$(t2) : Z(t2) ? this.T(t2) : this._(t2);
  }
  k(t2) {
    return this._$AA.parentNode.insertBefore(t2, this._$AB);
  }
  $(t2) {
    this._$AH !== t2 && (this._$AR(), this._$AH = this.k(t2));
  }
  _(t2) {
    this._$AH !== A2 && N(this._$AH) ? this._$AA.nextSibling.data = t2 : this.$(v2.createTextNode(t2)), this._$AH = t2;
  }
  g(t2) {
    let { values: s, _$litType$: e } = t2, i = typeof e == "number" ? this._$AC(t2) : (e.el === void 0 && (e.el = C2.createElement(G(e.h, e.h[0]), this.options)), e);
    if (this._$AH?._$AD === i)
      this._$AH.p(s);
    else {
      let n = new w2(i, this), r = n.u(this.options);
      n.p(s), this.$(r), this._$AH = n;
    }
  }
  _$AC(t2) {
    let s = j.get(t2.strings);
    return s === void 0 && j.set(t2.strings, s = new C2(t2)), s;
  }
  T(t2) {
    z(this._$AH) || (this._$AH = [], this._$AR());
    let s = this._$AH, e, i = 0;
    for (let n of t2)
      i === s.length ? s.push(e = new o2(this.k(H()), this.k(H()), this, this.options)) : e = s[i], e._$AI(n), i++;
    i < s.length && (this._$AR(e && e._$AB.nextSibling, i), s.length = i);
  }
  _$AR(t2 = this._$AA.nextSibling, s) {
    for (this._$AP?.(false, true, s); t2 && t2 !== this._$AB; ) {
      let e = t2.nextSibling;
      t2.remove(), t2 = e;
    }
  }
  setConnected(t2) {
    this._$AM === void 0 && (this._$Cv = t2, this._$AP?.(t2));
  }
};
var m2 = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t2, s, e, i, n) {
    this.type = 1, this._$AH = A2, this._$AN = void 0, this.element = t2, this.name = s, this._$AM = i, this.options = n, e.length > 2 || e[0] !== "" || e[1] !== "" ? (this._$AH = Array(e.length - 1).fill(new String()), this.strings = e) : this._$AH = A2;
  }
  _$AI(t2, s = this, e, i) {
    let n = this.strings, r = false;
    if (n === void 0)
      t2 = f2(this, t2, s, 0), r = !N(t2) || t2 !== this._$AH && t2 !== b, r && (this._$AH = t2);
    else {
      let _2 = t2, h2, $2;
      for (t2 = n[0], h2 = 0; h2 < n.length - 1; h2++)
        $2 = f2(this, _2[e + h2], s, h2), $2 === b && ($2 = this._$AH[h2]), r ||= !N($2) || $2 !== this._$AH[h2], $2 === A2 ? t2 = A2 : t2 !== A2 && (t2 += ($2 ?? "") + n[h2 + 1]), this._$AH[h2] = $2;
    }
    r && !i && this.O(t2);
  }
  O(t2) {
    t2 === A2 ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t2 ?? "");
  }
};
var E2 = class extends m2 {
  constructor() {
    super(...arguments), this.type = 3;
  }
  O(t2) {
    this.element[this.name] = t2 === A2 ? void 0 : t2;
  }
};
var S2 = class extends m2 {
  constructor() {
    super(...arguments), this.type = 4;
  }
  O(t2) {
    this.element.toggleAttribute(this.name, !!t2 && t2 !== A2);
  }
};
var I = class extends m2 {
  constructor(t2, s, e, i, n) {
    super(t2, s, e, i, n), this.type = 5;
  }
  _$AI(t2, s = this) {
    if ((t2 = f2(this, t2, s, 0) ?? A2) === b)
      return;
    let e = this._$AH, i = t2 === A2 && e !== A2 || t2.capture !== e.capture || t2.once !== e.once || t2.passive !== e.passive, n = t2 !== A2 && (e === A2 || i);
    i && this.element.removeEventListener(this.name, this, e), n && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
  }
  handleEvent(t2) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t2) : this._$AH.handleEvent(t2);
  }
};
var B = class {
  constructor(t2, s, e) {
    this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = s, this.options = e;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2) {
    f2(this, t2);
  }
};
var Q = U2.litHtmlPolyfillSupport;
Q?.(C2, y2), (U2.litHtmlVersions ??= []).push("3.1.0");
var et = (o3, t2, s) => {
  let e = s?.renderBefore ?? t2, i = e._$litPart$;
  if (i === void 0) {
    let n = s?.renderBefore ?? null;
    e._$litPart$ = i = new y2(t2.insertBefore(H(), n), n, void 0, s ?? {});
  }
  return i._$AI(o3), i;
};

// https://esm.sh/v134/lit-element@4.0.2/denonext/lit-element.js
var t = class extends a {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    let e = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= e.firstChild, e;
  }
  update(e) {
    let r = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = et(r, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(true);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(false);
  }
  render() {
    return b;
  }
};
t._$litElement$ = true, t["finalized"] = true, globalThis.litElementHydrateSupport?.({ LitElement: t });
var l2 = globalThis.litElementPolyfillSupport;
l2?.({ LitElement: t });
(globalThis.litElementVersions ??= []).push("4.0.2");

// components/wc/MyLitMessage.ts
var MyLitMessage = class extends t {
  // @property()
  // Properties are the component attributes
  static get properties() {
    return {
      message: ""
    };
  }
  static get styles() {
    return [
      v`p {font-weight: bold }`,
      v`.message {color:red}`
    ];
  }
  constructor() {
    super();
  }
  render() {
    return X`
    <p>The message: <span class="message">${this.message}</span></p>
    `;
  }
};
customElements.define(
  "my-lit-message",
  MyLitMessage
);

// components/wc/LitCounter.js
var LitCounter = class _LitCounter extends t {
  static #INITIAL_COUNT = 3;
  static properties = { count: 0 };
  constructor() {
    super();
    this.count = _LitCounter.#INITIAL_COUNT;
  }
  // Turn off shadow DOM
  createRenderRoot() {
    return this;
  }
  increment = () => {
    this.count = this.count + 1;
  };
  decrement = () => {
    this.count = this.count - 1;
  };
  render() {
    return X`
      <div class="flex gap-8 py-6">
        <button class="px-2 py-1 border-gray-500 border-2 rounded bg-white hover:bg-gray-200 transition-colors"
          @click=${this.decrement}>
          -1
        </button>
        <p class="text-3xl">${this.count}</p>
        <button class="px-2 py-1 border-gray-500 border-2 rounded bg-white hover:bg-gray-200 transition-colors"
          @click=${this.increment}>
          +1
        </button>
      </div>
    `;
  }
};
customElements.define(
  "lit-counter",
  LitCounter
);

// components/wc/LitAlertWC.ts
var CustomAlert = class extends t {
  static get styles() {
    return v`
      :host {
        background: var(--bg, #f0f0f0);
        color: var(--text);
        display: grid;
        gap: 0.5rem;
        grid-template-columns: 1fr 24px auto 1fr;
        align-items: start;
        padding: 1rem 0.5rem;
      }
      :host([hidden]) {
        display: none;
      }
      :host([theme="danger"]) {
        --bg: red!important;
        --text: white!important;
      }
      :host([theme="warn"]) {
        --bg: gold!important;
        --text: black!important;
      }
      svg {
        grid-column: 2 / 3;
      }
      button {
        grid-column: 4;
        grid-row: 1;
        justify-self: end;
        margin-right: 8px;
      }
      ::slotted(*) {
        grid-column: 3 / 4;
        margin: 0;
        max-width: 66ch;
        line-height: 1.6;
      }
    `;
  }
  static get properties() {
    return {
      icon: { type: String },
      theme: { type: String }
    };
  }
  constructor() {
    super();
    this.setAttribute("role", "alert");
    this.setAttribute("aria-live", "polite");
  }
  _close() {
    this.hidden = true;
  }
  render() {
    return X`
      <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="note" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          />
        </symbol>
        <symbol id="warn" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </symbol>
      </svg>

      <svg part="icon" height="24" width="24"><use href="#${this.icon}"></use></svg>
      <slot></slot>
      <button part="button" @click="${this._close}">Close</button>
    `;
  }
};
customElements.define("custom-alert", CustomAlert);

// components/wc/EmojiPickerWrapper.js
var EmojiPickerWrapper = class extends HTMLElement {
  connectedCallback() {
    let emoji = "";
    this.innerHTML = `
      <div>
        <div>
          <emoji-picker></emoji-picker>
        </div>
        <div id="emoji"></div>
      </div>`;
    document.querySelector("emoji-picker").addEventListener("emoji-click", (event) => {
      emoji = event.detail.unicode;
      console.log("Emoji: ", emoji);
      document.getElementById("emoji").innerHTML = `Selected Emoji: ${emoji}`;
    });
  }
};
customElements.define("emoji-picker-wrapper", EmojiPickerWrapper);

// components/wc/ToolTipWC.ts
var template = document.createElement("template");
template.innerHTML = `
  <style>
    .tooltip {
      position: relative;
      display: inline-block;
      border-bottom: 1px dotted black;
    }

    .tooltip .tooltiptext {
      visibility: hidden;
      width: 200px;
      font-size: 1.0rem;
      background-color: black;
      color: #fff;
      text-align: center;
      border-radius: 6px;
      padding: 5px 0;

      /* Position the tooltip */
      position: absolute;
      z-index: 1;
      bottom: 100%;
      left: 50%;
  }
    .tooltip:hover .tooltiptext {
      visibility: visible;
  }
    </style>
  <div class="tooltip"><slot></slot><span class="tooltiptext"></span></div>
  `;
var ToolTipWC = class extends HTMLElement {
  /**  @constructor */
  constructor() {
    super();
  }
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    const templateClone = template.content.cloneNode(true);
    shadowRoot.append(templateClone);
    const tip = this.getAttribute("tip");
    const text = shadowRoot.querySelector(".tooltiptext");
    text.textContent = tip;
  }
};
customElements.define("tool-tip", ToolTipWC);

// components/wc/TableWC.ts
var MYTable = class extends HTMLElement {
  css = `
    table {
      border: 4px solid black;
      min-width: 400px;
    }
    th, td {
      border: 3px solid black;
      text-align: center;
    }
  `;
  constructor() {
    super();
  }
  connectedCallback() {
    const json = this.getAttribute("data-feed") ?? "[]";
    const data = JSON.parse(json);
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `
    <style>${this.css}</style>
    <table>
      <thead><th>ID</th><th>Name</th><th>Email</th></thead>
      <tbody>
      ${data.map(
      (item) => `<tr><td>${item.id}</td><td>${item.name}</td><td>${item.email}</td></tr>`
    )}
      </tbody>
    </table>
    `;
  }
};
customElements.define("data-table", MYTable);
export {
  CustomAlert,
  LitCounter,
  MyLitMessage
};
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
/*! Bundled license information:

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
/*! Bundled license information:

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
/*! Bundled license information:

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
