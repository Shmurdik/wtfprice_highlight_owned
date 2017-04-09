// ==UserScript==
// @name         wtfprice - Highlight owned
// @namespace    https://github.com/Shmurdik/wtfprice_highlight_owned
// @version      1.2
// @description  Highlight owned games in the wtfprice list
// @author       Shmurdik
// @match        http://185.159.131.4/~wtfprice/
// @match        http://wtfprice.ru
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    var appIDs = [ appID1 , appID2 , ... ];

    jQuery("tr[id^='999']").css("background-color","Grey");
    appIDs.forEach(function(appid) {
        jQuery("tr[id='" + appid + "']").css("background-color","LightPink");
    });
})();
