/* 딜리버리 환급반 공통 221213 syh */
//상단 지폐
const NUMBER_OF_LEAVES = 25;
const width = window.screen.width;

function init() {
	var container = document.getElementById('leafContainer');
	for (var i = 0; i < NUMBER_OF_LEAVES; i++) {
		container.appendChild(createALeaf());
	}
}
function randomInteger(low, high) {
	return low + Math.floor(Math.random() * (high - low));
}
function randomFloat(low, high) {
	return low + Math.random() * (high - low);
}
function pixelValue(value) {
	return value + 'px';
}
function durationValue(value) {
	return value + 's';
}
function createALeaf() {
	var leafDiv = document.createElement('div');
	var image = document.createElement('img');
	image.src = '/asset/skin/mint/mobile/img/event/delivery_toeic/ver2/cash' + randomInteger(1, 6) + '.png'; //230823 hyj 수정
	leafDiv.style.top = "-10px";
	leafDiv.style.left = pixelValue(randomInteger(0, width));
	var spinAnimationName = (Math.random() < 0.5) ? 'clockwiseSpin' : 'counterclockwiseSpinAndFlip';
	leafDiv.style.webkitAnimationName = 'fade, drop';
	image.style.webkitAnimationName = spinAnimationName;
	var fadeAndDropDuration = durationValue(randomFloat(1, 3));
	var spinDuration = durationValue(randomFloat(1, 4));
	leafDiv.style.webkitAnimationDuration = fadeAndDropDuration + ', ' + fadeAndDropDuration;
	var leafDelay = durationValue(randomFloat(0, 0));
	leafDiv.style.webkitAnimationDelay = leafDelay + ', ' + leafDelay;
	image.style.webkitAnimationDuration = spinDuration;
	leafDiv.appendChild(image);
	return leafDiv;
}
window.addEventListener('load', init, false);

// 공통 탭
$(document).ready(function(){
	$(".toggleBtn").click(function(){
		$(this).next(".toggleBox").slideToggle(250);
		$(this).toggleClass('on');
	});
});

//슬롯머신
var isVisible = false;
$(window).on('scroll',function() {
	if (checkVisible($('#secReturn'))&&!isVisible) {
		bounty.default({ el: ".price_slot", value: "6,395,728,888" }); //슬롯머신 금액 240223 hyj 수정
		isVisible=true;
	}
});
function checkVisible( elm, eval ) {
	eval = eval || "object visible";
	var viewportHeight = $(window).height(), // Viewport Height
	scrolltop = $(window).scrollTop(), // Scroll Top
	y = $(elm).offset().top,
	elementHeight = $(elm).height();

	if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
	if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}

!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.bounty=e():t.bounty=e()}(this,function(){return function(t){function e(r){if(a[r])return a[r].exports;var n=a[r]={exports:{},id:r,loaded:!1};return t[r].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var a={};return e.m=t,e.c=a,e.p="/",e(0)}([function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(1);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r(n)["default"]}})},function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(2),l=r(n),i=a(5),o=a(10),u=r(o),c=10,f=3,d=function(t,e,a,r){var n,l=[0,1,2,3,4,5,6,7,8,9,0],o=(n=(n=i.append.call(t,"g"),i.attr).call(n,"id","digit-"+r),i.style).call(n,"filter","url(#motionFilter-"+r+")");return l.forEach(function(t,r){var n;(n=(n=i.append.call(o,"text"),i.attr).call(n,"y",-r*e*a),i.text).call(n,t)}),o},s=function(t,e,a){var r;return(r=(r=(r=i.append.call(t,"g"),i.append).call(r,"text"),i.style).call(r,"filter","url(#createShadowFailFilter)"),i.text).call(r,e)},p=function(t,e){var a;return(a=(a=(a=(a=(a=(a=(a=i.append.call(t,"filter"),i.attr).call(a,"id","motionFilter-"+e),i.attr).call(a,"width","300%"),i.attr).call(a,"x","-100%"),i.append).call(a,"feGaussianBlur"),i.attr).call(a,"class","blurValues"),i.attr).call(a,"in","SourceGraphic"),i.attr).call(a,"stdDeviation","0 0")},v=function(t){var e;return(e=(e=(e=(e=(e=i.append.call(t,"filter"),i.attr).call(e,"id","createShadowFailFilter"),i.attr).call(e,"width","300%"),i.attr).call(e,"x","-100%"),i.append).call(e,"feGaussianBlur"),i.attr).call(e,"stdDeviation","0 0")},y=function(t,e){var a;return(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=(a=i.append.call(t,"linearGradient"),i.attr).call(a,"id","gradient-"+e),i.attr).call(a,"x1","0%"),i.attr).call(a,"y1","0%"),i.attr).call(a,"x2","0%"),i.attr).call(a,"y2","100%"),i.append).call(a,"stop"),i.attr).call(a,"offset","0"),i.attr).call(a,"stop-color","white"),i.attr).call(a,"stop-opacity","0"),i.select).call(a,"#gradient-"+e),i.append).call(a,"stop"),i.attr).call(a,"offset","0.2"),i.attr).call(a,"stop-color","white"),i.attr).call(a,"stop-opacity","1"),i.select).call(a,"#gradient-"+e),i.append).call(a,"stop"),i.attr).call(a,"offset","0.8"),i.attr).call(a,"stop-color","white"),i.attr).call(a,"stop-opacity","1"),i.select).call(a,"#gradient-"+e),i.append).call(a,"stop"),i.attr).call(a,"offset","1"),i.attr).call(a,"stop-color","white"),i.attr).call(a,"stop-opacity","0")},h=function(t,e){var a;return(a=(a=(a=(a=(a=(a=(a=i.append.call(t,"mask"),i.attr).call(a,"id","mask-"+e),i.append).call(a,"rect"),i.attr).call(a,"x",0),i.attr).call(a,"y",0),i.attr).call(a,"width","100%"),i.attr).call(a,"height","100%"),i.attr).call(a,"fill","url(#gradient-"+e+")")},g=function(t,e,a){i.attr.call(t,"width",e),i.attr.call(t,"height",a),i.attr.call(t,"viewBox","0 0 "+e+" "+a),i.style.call(t,"overflow","hidden")};e["default"]=function(t){var e,a=t.el,r=t.value,n=t.initialValue,o=void 0===n?null:n,m=t.lineHeight,b=void 0===m?1.35:m,_=t.letterSpacing,x=void 0===_?1:_,j=t.animationDelay,w=void 0===j?100:j,M=t.letterAnimationDelay,P=void 0===M?100:M,O=(0,i.select)(a),S=window.getComputedStyle(O),N=parseInt(S.fontSize,10),D=(N*b-N)/2+N/10,F=N*b-D,E=Date.now(),B=0,k=N*b+D;O.innerHTML="";var A=i.append.call(O,"svg"),G=(e=i.append.call(A,"svg"),i.attr).call(e,"mask","url(#mask-"+E+")"),I=i.append.call(A,"defs");y(I,E),h(I,E),v(I);var C=function(t,e){for(var a=String(t).replace(/ /g," ").split(""),r=String(t).search(/\d/);e.length>a.length;){var n=e[e.length-a.length-1+r];a.splice(r,0,isNaN(parseInt(n,10))?n:"0")}return a},q=String(o||"0"),H=C(String(r),q),V=C(q,String(r)),z=H.map(function(t,e){var a=e+"-"+E;return isNaN(parseInt(t,10))||isNaN(parseInt(V[e],10))?{isDigit:!1,node:s(G,t,N),value:t,offset:{x:0,y:F}}:{isDigit:!0,id:a,node:d(G,N,b,a),filter:p(I,a),value:Number(t),initial:Number(V[e]),offset:{x:0,y:F+Number(V[e])*(N*b)}}}),L=[],T=z.filter(function(t){return t.isDigit});T.forEach(function(t,e){var a=t.initial*(N*b),r=(f*c+t.value)*(N*b),n=(0,u["default"])({from:a,to:r,delay:(T.length-1-e)*P+w,step:function(e){var n;t.offset.y=F+e%(N*b*c),(n=t.node,i.attr).call(n,"transform","translate("+t.offset.x+", "+t.offset.y+")");var l=(a+r)/2,o=(Math.abs(Math.abs(e-l)-l)-a)/100;(n=t.filter,i.attr).call(n,"stdDeviation","0 "+o)},end:0===e?function(){return K()}:function(t){return t}});L.push(n)});var J=function(t){B=0,z.forEach(function(t){var e=t.node.getBBox(),a=e.width;t.offset.x=B,B+=a+x}),z.forEach(function(t){var e;(e=t.node,i.attr).call(e,"transform","translate("+t.offset.x+", "+t.offset.y+")")}),g(A,B,k),L.forEach(function(e){return e.update(t)})},K=(0,l["default"])(J);return K}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t){var e=void 0,a=function r(a){e=requestAnimationFrame(r),t(a)};return a(0),function(){return cancelAnimationFrame(e)}}},function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t){var e=document.createElementNS(l["default"].svg,t);return this.appendChild(e),e};var n=a(6),l=r(n)},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t,e){return this.setAttribute(t,e),this}},function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(7);Object.defineProperty(e,"select",{enumerable:!0,get:function(){return r(n)["default"]}});var l=a(3);Object.defineProperty(e,"append",{enumerable:!0,get:function(){return r(l)["default"]}});var i=a(4);Object.defineProperty(e,"attr",{enumerable:!0,get:function(){return r(i)["default"]}});var o=a(8);Object.defineProperty(e,"style",{enumerable:!0,get:function(){return r(o)["default"]}});var u=a(9);Object.defineProperty(e,"text",{enumerable:!0,get:function(){return r(u)["default"]}})},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={svg:"http://www.w3.org/2000/svg"}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t){return t===String(t)?document.querySelector(t):t}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return this.style.setProperty(t,e,a),this}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t){return this.textContent=t,this}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2};e["default"]=function(t){var e=t.from,r=t.to,n=t.duration,l=void 0===n?3e3:n,i=t.delay,o=void 0===i?0:i,u=t.easing,c=void 0===u?a:u,f=t.start,d=void 0===f?function(t){return t}:f,s=t.step,p=void 0===s?function(t){return t}:s,v=t.end,y=void 0===v?function(t){return t}:v,h=e,g=0,m=!1,b=function(t){if(!m){g||(g=t,d(h));var a=Math.min(Math.max(t-g-o,0),l)/l;h=c(a)*(r-e)+e,p(h),1===a&&(m=!0,y(h))}};return{update:b}}}])});
/* //딜리버리 환급반 공통 221213 syh */