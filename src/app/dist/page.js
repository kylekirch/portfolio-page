"use strict";
exports.__esModule = true;
var page_module_css_1 = require("./page.module.css");
var CardDeck_1 = require("./components/blocKit/CardDeck");
var Carousel_1 = require("./components/blocKit/Carousel");
var ContactForm_1 = require("./components/blocKit/ContactForm");
var Subtitle_1 = require("./components/blocKit/Subtitle");
var Hyperlink_1 = require("./components/blocKit/Hyperlink");
var dotenv = require("dotenv");
function Home() {
    dotenv.config();
    var EMAILJS_USER_ID = process.env.REACT_APP_EMAILJS_USER_ID ?
        process.env.REACT_APP_EMAILJS_USER_ID
        :
            'ERROR';
    var EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID ?
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID
        :
            'ERROR';
    var imgSrc = "/favicon.svg";
    return (React.createElement("div", { className: page_module_css_1["default"].main },
        React.createElement("div", { className: page_module_css_1["default"].titleSection },
            React.createElement(Subtitle_1["default"], { text: "Portfolio - Made with Next.js", id: "underlined" }),
            React.createElement(Hyperlink_1["default"], { text: "Docs", href: "https://kirch.wiki" })),
        React.createElement(CardDeck_1["default"], { deckTitle: "About Myself", cardData: [
                ["Trait",
                    "This is why the trait aligns with me."
                ],
                ["Trait",
                    "This is why the trait aligns with me."
                ],
                ["Trait",
                    "This is why the trait aligns with me."
                ],
            ], id: "defaultDeck" }),
        React.createElement(Carousel_1["default"], { numModals: 3, modalData: [
                ["-Project 1-",
                    "My first project",
                    imgSrc,
                    "#"],
                ["-Project 2-",
                    "My second project",
                    imgSrc,
                    "#"],
                ["-Project 3-",
                    "My third project",
                    imgSrc,
                    "#"]
            ] }),
        React.createElement(ContactForm_1["default"], { EMAILJS_KEY: EMAILJS_USER_ID, TEMPLATE_ID: EMAILJS_TEMPLATE_ID })));
}
exports["default"] = Home;
