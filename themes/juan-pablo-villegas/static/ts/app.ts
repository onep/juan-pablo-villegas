// import utils = require('./utils')

console.log('Hello wworld');

declare var isMobile: any;
declare var Modernizr: any;

Modernizr.addTest('ismobile', function() {
 return isMobile.any();
});

console.log(Modernizr.ismobile);