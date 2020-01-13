"use strict";
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
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var clsx_1 = __importDefault(require("clsx"));
var Typography_1 = __importDefault(require("../Typography"));
function Divider(_a) {
    var _b = _a.align, align = _b === void 0 ? 'center' : _b, children = _a.children, className = _a.className, otherProps = __rest(_a, ["align", "children", "className"]);
    var classes = clsx_1["default"]('brew-Divider', "brew-Divider--align-" + align, { 'brew-Divider--isChildless': Boolean(!children) }, className);
    return (react_1["default"].createElement("div", __assign({ className: classes }, otherProps), children ? (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("hr", null),
        react_1["default"].createElement(Typography_1["default"], { variant: "label" }, children),
        react_1["default"].createElement("hr", null))) : (react_1["default"].createElement("hr", null))));
}
exports["default"] = Divider;
