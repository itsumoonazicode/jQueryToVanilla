var mousewheelevent = 'onwheel' in document ? 'wheel'
										: 'onmousewheel' in document ? 'mousewheel'
										: 'DOMMouseScroll';

document.addEventListener(mousewheelevent, function(e) {
	$(function () {
		scrLength = 350;
		scrSpeed = 600;
		scrEasing = 'easeOutCirc';
	
		e.preventDefault();
		var delta = e.deltaY ? -(e.deltaY) : e.wheelDelta ? e.wheelDelta : -(e.detail);
		if (delta < 0) {
			scrSet = $(document).scrollTop() + scrLength;
		} else {
			scrSet = $(document).scrollTop() - scrLength;
		}
		$('html,body').stop().animate({ scrollTop: scrSet }, scrSpeed, scrEasing);
		return false;
	});
}, {passive: false});
