/*! Google Fonts and Analytics */
WebFontConfig = {
  google: { families: [ 'Fira+Mono:400,700:latin' ] }
};
(function() {
  var wf = document.createElement('script');
  wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();
window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;
ga('create','{{ .Site.GoogleAnalytics }}','auto');ga('send','pageview');