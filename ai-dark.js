

// ==UserScript==
// @name         UPLOAD TO BLOGER
// @namespace    https://workshop.wallpaperhdv.net/
// @version      0.1
// @description  :)
// @author       ANI-VN
// @oujs:author  ANI-VN
// @match        https://steamcommunity.com/workshop/browse/?appid=431960**
// @homepageURL  https://github.com/unfaiyted/line-stickershop-copier
// @grant        GM_addStyle
// @grant        GM_setClipboard
// @run-at       document-end
// ==/UserScript==

GM_addStyle(`

.workshopItemSubscriptionControls{
visibility: visible !important;
}

`);


(function() {
    window.addEventListener('load', function() {
        'use strict';

        // Here You can type your custom JavaScript...


        function testlog(){
            console.log('aaaa');
        }


        const body = document.getElementsByTagName('body')[0];
        const images = document.querySelectorAll('.workshopItem');
        //mdCMN09LiInner
        //mdCMN09Image

        images.forEach((image) => {
            const item = image.getElementsByClassName('.workshopItemPreviewHolder')[0];
            const id = item.getAttribute("id").replace("sharedfile_","/w0-h0-c/");

            console.log(id);

            const copyText = sticker
            .replace('url("','')
            .replace('")','');

            const btn = '<div class="workshopItemSubscriptionControls aspectratio_square hdv" style="top: 8px;"><a href="" class="general_btn subscribe "><div class="subscribeIcon"></div></a></div>';
          '

            image.appendChild(btn);

            btn.addEventListener("click", (e) => {
                const copyText = e.target.getAttribute('data-clipboard-text');
                console.log("copy clicked");

                //  GM_setClipboard(copyText);

                navigator.clipboard.writeText(copyText).then(function() {
                    console.log('Async: Copying to clipboard was successful!');
                }, function(err) {
                    console.error('Async: Could not copy text: ', err);
                });

            });

        });

        // Your code here...

    }, false);

})();



images.forEach((image) => {

    const id = image.getAttribute("id").replace("sharedfile_","");
    console.log(item);

    var ret = GM_xmlhttpRequest({
        method: "GET",
        url: "http://localhost:2002/check.php?id=" + id,
        onload: function(res) {
            console.log(res.responseText);
        }
    });


});
