// ==UserScript==
// @name         MDN Theme
// @namespace    lanrengm
// @version      1.0
// @description  Theme of MDN Docs. MDN文档皮肤。
// @author       lanrengm@gmail.com
// @icon         https://developer.mozilla.org/favicon-48x48.cbbd161b.png
// @match        https://developer.mozilla.org/*/docs/*
// @resource css file://G:/Portables/MDNTheme/MDNTheme.user.css
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

// 将本文件的内容复制到油猴插件中才可生效

(function() {
    'use strict';
    GM_addStyle(GM_getResourceText("css"));
})();
