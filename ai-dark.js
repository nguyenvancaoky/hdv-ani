function looppagecurrentg(e) {
    var a = "";
    pageNumber = parseInt(numPages / 2), pageNumber == numPages - pageNumber && (numPages = 2 * pageNumber + 1), pageStart = currentPageNo - pageNumber, pageStart < 1 && (pageStart = 1), lastPageNo = parseInt(e / perPage) + 1, lastPageNo - 1 == e / perPage && (lastPageNo -= 1), pageEnd = pageStart + numPages - 1, pageEnd > lastPageNo && (pageEnd = lastPageNo), a += "<span class='showpageOf'>Trang " + currentPageNo + "/" + lastPageNo + "</span>";
    var t = parseInt(currentPageNo) - 1;
    currentPageNo > 1 && (a += "page" == currentPage ? '<span class="showpage firstpage"><a href="' + home_page + '">' + firstText + "</a></span>" : '<span class="displaypageNum firstpage"><a href="/search/label/' + postLabel + "?&max-results=" + perPage + '">' + firstText + "</a></span>"), currentPageNo > 2 && (a += 3 == currentPageNo ? "page" == currentPage ? '<span class="showpage"><a href="' + home_page + '">' + prevText + "</a></span>" : '<span class="displaypageNum"><a href="/search/label/' + postLabel + "?&max-results=" + perPage + '">' + prevText + "</a></span>" : "page" == currentPage ? '<span class="displaypageNum"><a href="#" onclick="redirectpage(' + t + ');return false">' + prevText + "</a></span>" : '<span class="displaypageNum"><a href="#" onclick="redirectlabel(' + t + ');return false">' + prevText + "</a></span>"), pageStart > 1 && (a += "page" == currentPage ? '<span class="displaypageNum"><a href="' + home_page + '">1</a></span>' : '<span class="displaypageNum"><a href="/search/label/' + postLabel + "?&max-results=" + perPage + '">1</a></span>'), pageStart > 2 && (a += " ... ");
    for (var s = pageStart; s <= pageEnd; s++) a += currentPageNo == s ? '<span class="pagecurrent">' + s + "</span>" : 1 == s ? "page" == currentPage ? '<span class="displaypageNum"><a href="' + home_page + '">1</a></span>' : '<span class="displaypageNum"><a href="/search/label/' + postLabel + "?&max-results=" + perPage + '">1</a></span>' : "page" == currentPage ? '<span class="displaypageNum"><a href="#" onclick="redirectpage(' + s + ');return false">' + s + "</a></span>" : '<span class="displaypageNum"><a href="#" onclick="redirectlabel(' + s + ');return false">' + s + "</a></span>";
    pageEnd < lastPageNo - 1 && (a += "...  "), pageEnd < lastPageNo && (a += "page" == currentPage ? '<span class="displaypageNum"><a href="#" onclick="redirectpage(' + lastPageNo + ');return false">' + lastPageNo + "</a></span>" : '<span class="displaypageNum"><a href="#" onclick="redirectlabel(' + lastPageNo + ');return false">' + lastPageNo + "</a></span>");
    var r = parseInt(currentPageNo) + 1;
    currentPageNo < lastPageNo - 1 && (a += "page" == currentPage ? '<span class="displaypageNum"><a href="#" onclick="redirectpage(' + r + ');return false">' + nextText + "</a></span>" : '<span class="displaypageNum"><a href="#" onclick="redirectlabel(' + r + ');return false">' + nextText + "</a></span>"), currentPageNo < lastPageNo && (a += "page" == currentPage ? '<span class="displaypageNum lastpage"><a href="#" onclick="redirectpage(' + lastPageNo + ');return false">' + lastText + "</a></span>" : '<span class="displaypageNum lastpage"><a href="#" onclick="redirectlabel(' + lastPageNo + ');return false">' + lastText + "</a></span>");
    for (var p = document.getElementsByName("pageArea"), n = document.getElementById("blog-pager"), l = 0; l < p.length; l++) p[l].innerHTML = a;
    p && p.length > 0 && (a = ""), n && (n.innerHTML = a)
}

function totalcountdata(e) {
    var a = e.feed,
        t = parseInt(a.openSearch$totalResults.$t, 10);
    looppagecurrentg(t)
}

function pagecurrentg() {
    var e = urlactivepage; - 1 != e.indexOf("/search/label/") && (postLabel = -1 != e.indexOf("?updated-max") ? e.substring(e.indexOf("/search/label/") + 14, e.indexOf("?updated-max")) : e.substring(e.indexOf("/search/label/") + 14, e.indexOf("?&max"))), -1 == e.indexOf(".html") && (-1 == e.indexOf("/search/label/") ? (currentPage = "page", currentPageNo = -1 != urlactivepage.indexOf("#PageNo=") ? urlactivepage.substring(urlactivepage.indexOf("#PageNo=") + 8, urlactivepage.length) : 1, -1 == e.indexOf("q=") ? document.write('<script src="' + home_page + 'feeds/posts/summary?max-results=1&alt=json-in-script&callback=totalcountdata"></script>') : document.write('<script src="' + home_page + "feeds/posts/summary?q=" + e.split("?")[1].split("q=")[1].split("&")[0] + '&alt=json-in-script&callback=totalcountdata"></script>')) : (currentPage = "label", -1 == e.indexOf("&max-results=") && (perPage = 20), currentPageNo = -1 != urlactivepage.indexOf("#PageNo=") ? urlactivepage.substring(urlactivepage.indexOf("#PageNo=") + 8, urlactivepage.length) : 1, document.write('<script src="' + home_page + "feeds/posts/summary/-/" + postLabel + '?alt=json-in-script&callback=totalcountdata&max-results=1" ></script>')))
}

function redirectpage(e) {
    jsonstart = (e - 1) * perPage, noPage = e;
    var a = document.getElementsByTagName("head")[0],
        t = document.createElement("script");
    t.type = "text/javascript", -1 == urlactivepage.indexOf("?q=") ? t.setAttribute("src", home_page + "feeds/posts/summary?start-index=" + jsonstart + "&max-results=1&alt=json-in-script&callback=finddatepost") : t.setAttribute("src", home_page + "feeds/posts/summary?start-index=" + jsonstart + "&alt=json-in-script&q=" + urlactivepage.split("?")[1].split("q=")[1].split("&")[0] + "&callback=finddatepost"), a.appendChild(t)
}

function redirectlabel(e) {
    jsonstart = (e - 1) * perPage, noPage = e;
    var a = document.getElementsByTagName("head")[0],
        t = document.createElement("script");
    t.type = "text/javascript", t.setAttribute("src", home_page + "feeds/posts/summary/-/" + postLabel + "?start-index=" + jsonstart + "&max-results=1&alt=json-in-script&callback=finddatepost"), a.appendChild(t)
}

function finddatepost(e) {
    post = e.feed.entry[0];
    var a = post.published.$t.substring(0, 19) + post.published.$t.substring(23, 29),
        t = encodeURIComponent(a);
    if ("page" == currentPage)
        if (-1 == urlactivepage.indexOf("?q=")) var s = "/search?updated-max=" + t + "&max-results=" + perPage + "#PageNo=" + noPage;
        else var s = "/search?updated-max=" + t + "&q=" + urlactivepage.split("?")[1].split("q=")[1].split("&")[0] + "&max-results=" + perPage + "#PageNo=" + noPage;
    else var s = "/search/label/" + postLabel + "?updated-max=" + t + "&max-results=" + perPage + "#PageNo=" + noPage;
    location.href = s
}

"undefined" == typeof firstText && (firstText = "First"), "undefined" == typeof lastText && (lastText = "Last");
var noPage, currentPage, currentPageNo, postLabel;
pagecurrentg();
