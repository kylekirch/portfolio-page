"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var google_1 = require("next/font/google");
require("./globals.css");
var Navbar_1 = require("./components/blocKit/Navbar");
var Footer_1 = require("./components/blocKit/Footer");
var heading_Anton = google_1.Anton({
    weight: "400",
    variable: "--font-anton",
    subsets: ["latin"]
});
var sub_Revalia = google_1.Goldman({
    weight: "400",
    variable: "--font-goldman",
    subsets: ["latin"]
});
var body_Iceland = google_1.Iceland({
    weight: "400",
    variable: "--font-iceland",
    subsets: ["latin"]
});
exports.metadata = {
    title: "Kyle Kirchgessner - Portfolio",
    description: "A webpage dedicated to displaying my personal achievements and curriculum vitae"
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", { className: heading_Anton.variable + " " + sub_Revalia.variable + " " + body_Iceland.variable },
            React.createElement(Navbar_1["default"], { leftIcon: ["/favicon.svg",
                    "#"], leftText: ["Shop", "#"], navbarTitle: ["", "#"], rightText: ["Contact", "#"], rightIcon: ["/favicon.svg", "https://kirch.wiki"], id: "defaultNavbar" }),
            children,
            React.createElement(Footer_1["default"], { iconData: [
                    ["/favicon.svg", "https://x.com/="],
                    ["/favicon.svg", "https://instagram.com/"],
                    ["/favicon.svg", "https://github.com/"],
                    ["/favicon.svg", "https://linkedin.com/"]
                ], hyperlinkData: [
                    ["Legal", "#defaultFooter"],
                    ["Contact", "#defaultFooter"],
                    ["More", "#defaultFooter"]
                ], descriptions: [
                    "Copyright Kyle Kirchgessner",
                    "All rights reserved, 2025"
                ], id: "defaultFooter" }))));
}
exports["default"] = RootLayout;
