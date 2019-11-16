$(function () {
	scrLength = 350;
	scrSpeed = 600;
	scrEasing = 'easeOutCirc';

	var mousewheelevent = 'onwheel' in document ? 'wheel'
											: 'onmousewheel' in document ? 'mousewheel'
											: 'DOMMouseScroll';

	document.addEventListener(mousewheelevent, function(e) {
		e.preventDefault();
	},{passive:false});


	$(document).on(mousewheelevent, function (e) {
		e.preventDefault();
		var delta = e.originalEvent.deltaY ? -(e.originalEvent.deltaY) : e.originalEvent.wheelDelta ? e.originalEvent.wheelDelta : -(e.originalEvent.detail);
		if (delta < 0) {
			scrSet = $(document).scrollTop() + scrLength;
		} else {
			scrSet = $(document).scrollTop() - scrLength;
		}
		$('html,body').stop().animate({ scrollTop: scrSet }, scrSpeed, scrEasing);
		return false;
	});
});