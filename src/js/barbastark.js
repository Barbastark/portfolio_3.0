"use strict";
(function(){

function _id(selector) { return document.getElementById(selector) }
function _class(selector) { return document.getElementsByClassName(selector) }
function _q(selector) { return document.querySelector(selector); }	
function _qAll(selector) { return document.querySelectorAll(selector) }

function toggleColor(el, color) {
	for(var i = 0; i < el.length; i++) {
		el[i].setAttribute('style', 'stroke:' + color + ';');
	}
}

const toggleMobileNavigation = function(navBtn, nav, body, navContainer, navLink, logo) {

	for(let i = 0; i < navLink.length; i++) {
	  	navLink[i].addEventListener('click', () => {
	  		body.removeAttribute('style','overflow: hidden;');
			nav.classList.remove('sitenav-sm-show');
			navBtn.classList.remove('open');
		});
	}
	
	navBtn.addEventListener('click', () => {
		if(nav.classList.contains('sitenav-sm-show')) {
			body.removeAttribute('style','overflow: hidden;');
			nav.classList.remove('sitenav-sm-show');
			navBtn.classList.remove('open');
			if(window.pageYOffset > window.innerHeight - navContainer.clientHeight){
				navContainer.setAttribute('style','background:rgba(85, 138, 182, 0.9);');
				//toggleColor(logo, '#be2835');
			}
		} else {
			body.setAttribute('style','overflow: hidden;');
			nav.classList.add('sitenav-sm-show');
			navBtn.classList.add('open');
			if(window.pageYOffset > window.innerHeight - navContainer.clientHeight){
				navContainer.setAttribute('style','background:transparent;');
				//toggleColor(logo, '#fff');
			}
		}
	});
}.call(this,_q('#nav-icon'),_q('.sitenav-sm'),_q('body'),_q('.nav-container'),_qAll('.navigation-link'),_qAll('.letter-2'));

const fadeIn = function(target) {

	const text = ['JavaScript Utvecklare','PHP Utvecklare','HTML Utvecklare', 'CSS Utvecklare','Webb Utvecklare'];
	let i = 0;
	let val = 0;
	
	target.setAttribute('style', `opacity:${val};`);
	target.innerHTML = text[4];	
	
	setTimeout( () => {
		setInterval( () => {
			if(i === text.length) {
				i = 0;
			}
			val = 0;
			target.innerHTML = text[i];
			target.setAttribute('style', `opacity:${val};`);
			i++;
		},5000);

		setInterval( () => {
			if(val < 1) {
				val+=0.04;
				target.setAttribute('style', `opacity:${val};`);
			}
			
		},80);
	},1500);	
}.call(this, _q('#hero-text h2'));

const parallax = function(bg) {
	if(!isMobile) {
		for(var i = 0; i < bg.length; i++) {
			window.addEventListener('scroll', () => {
				let index = i-1;
				let yPos = -(window.pageYOffset / parseInt(bg[index].dataset.speed));
				let coords = `0 ${yPos}px`;
				bg[index].setAttribute(`style`,`background-position: ${coords}`);
			}) 
		}
	} 
 	
}.call(this,_qAll('section[data-type="background"]'));

const toggleNavContainerOnScroll = function(navContainer, logo, navBtn) {

	let offset;
	let lastScrollTop = 0;
		
	window.addEventListener('scroll', () => { 

		if(window.pageYOffset > 150) {
			offset = window.pageYOffset; 
			if(offset > lastScrollTop + 1) {
				navContainer.classList.add('nav-container-hidden');
				lastScrollTop = offset;
			}
			if(offset < lastScrollTop - 100) {
				navContainer.classList.remove('nav-container-hidden');
				lastScrollTop = offset;
			}
		}
		if(window.pageYOffset < window.innerHeight - navContainer.clientHeight && window.innerWidth > 800) {

			navContainer.setAttribute('style', 'background-color: transparent;');
			toggleColor(logo, '#fff');
		}
		if(window.pageYOffset > window.innerHeight - navContainer.clientHeight && window.innerWidth > 800) {

			if(!isMobile) {
				navContainer.setAttribute('style', 'background-color: rgba(255,255,255,0.9);)');
				toggleColor(logo, '#be2835');
			}
		}
		if(window.pageYOffset < window.innerHeight - navContainer.clientHeight && window.innerWidth < 800) {

			navContainer.setAttribute('style', 'background-color: transparent;');
			//toggleColor(logo, '#fff');

			for (let i = 0; i < navBtn.length; i++) {
				navBtn[i].setAttribute('style', 'background-color: #558ab6;');
			}
			
		}
		if(window.pageYOffset > window.innerHeight - navContainer.clientHeight && window.innerWidth < 800) {

			navContainer.setAttribute('style', 'background-color: rgba(85, 138, 182, 0.9);');
			//toggleColor(logo, '#be2835');

			for (let i = 0; i < navBtn.length; i++) {
				navBtn[i].setAttribute('style', 'background-color: #fff;');
			}
		}
	});
}.call(this, _q('.nav-container'), _qAll('.letter-2'), _qAll('#nav-icon span'));

}());
