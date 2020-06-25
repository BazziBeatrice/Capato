// setTimeout(function(){
//     odometer.innerHTML = 60;
// }, 2000);
// setTimeout(function(){
//     odometer2.innerHTML = 45;
// }, 2000);

// in the example above, assign the result
var timeoutHandle = window.setTimeout(function(){
    odometer.innerHTML = 60;
}, 2000);
var timeoutHandle2 = window.setTimeout(function(){
  odometer2.innerHTML = 45;
 }, 2000);

// $(window).scroll(function(){
// var scroll = $(window).scrollTop();
// if (scroll > 2000) {window.clearTimeout(timeoutHandle);}
//   if (scroll > 2000) {timeoutHandle = window.setTimeout(function(){
//       odometer.innerHTML = 60;
//   }, 2000);}
// });

$(window).scroll(function(){
var scroll = $(window).scrollTop();
if (scroll >= 1900) {
  setTimeout(timeoutHandle);
setTimeout(timeoutHandle2);}
if (scroll < 1900){
  window.clearTimeout(timeoutHandle);
    window.clearTimeout(timeoutHandle2);
}
});
