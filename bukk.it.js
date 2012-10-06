// load on bukk.it
// receive lolgif slideshow
var i = 4;
var links = document.links;
var stop = links.length;
var heading = document.body.getElementsByTagName("h1")[0];
function makeIMG(href) { var img = document.createElement("img"); img.src = href; return img; }
function funLoop(imghndl) { setTimeout( function() { ++i; var hndl = makeIMG(links[i].href); console.log(hndl); document.body.replaceChild(hndl,imghndl); if ( i < stop ) { funLoop(hndl) }},10000); }
function begin () { var first = makeIMG(links[i].href); document.body.replaceChild(first,heading); funLoop(first); return first; }
begin();
