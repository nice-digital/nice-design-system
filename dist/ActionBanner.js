"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionBanner = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var Remove_1 = __importDefault(require("@nice-digital/icons/lib/Remove"));
require("../scss/action-banner.scss");
var ActionBanner = /** @class */ (function (_super) {
    __extends(ActionBanner, _super);
    function ActionBanner(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isClosed: false
        };
        _this.closeClickHandler = _this.closeClickHandler.bind(_this);
        return _this;
    }
    ActionBanner.prototype.closeClickHandler = function () {
        this.setState({
            isClosed: true
        });
        if (typeof this.props.onClosing === "function")
            this.props.onClosing(this);
        else
            throw new Error("The onClosing prop should be a function");
    };
    ActionBanner.prototype.render = function () {
        var _a;
        if (this.state.isClosed)
            return null;
        var _b = this.props, variant = _b.variant, onClosing = _b.onClosing, title = _b.title, children = _b.children, cta = _b.cta, className = _b.className, rest = __rest(_b, ["variant", "onClosing", "title", "children", "cta", "className"]);
        var classes = (_a = {
                "action-banner": true,
                "action-banner--closeable": onClosing
            },
            _a["action-banner--".concat(variant)] = variant,
            _a["".concat(className)] = className,
            _a);
        return ((0, jsx_runtime_1.jsx)("section", __assign({ className: (0, classnames_1.default)(classes) }, rest, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "action-banner__container" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "action-banner__inner" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "action-banner__text" }, { children: [(0, jsx_runtime_1.jsx)("h2", __assign({ className: "action-banner__title" }, { children: title })), children && (0, jsx_runtime_1.jsx)("p", __assign({ className: "action-banner__intro" }, { children: children }))] })), cta && (0, jsx_runtime_1.jsx)("div", __assign({ className: "action-banner__actions" }, { children: cta })), onClosing && ((0, jsx_runtime_1.jsxs)("button", __assign({ type: "button", className: "action-banner__close", onClick: this.closeClickHandler }, { children: [(0, jsx_runtime_1.jsx)(Remove_1.default, {}), (0, jsx_runtime_1.jsxs)("span", __assign({ className: "visually-hidden" }, { children: ["Close ", title] }))] })))] })) })) })));
    };
    return ActionBanner;
}(react_1.default.Component));
exports.ActionBanner = ActionBanner;
