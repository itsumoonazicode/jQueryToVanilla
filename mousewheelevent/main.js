scrLength = 350;
scrSpeed = 600;
scrEasing = 'easeOutCirc';


var mousewheelevent = 'onwheel' in document ? 'wheel'
										: 'onmousewheel' in document ? 'mousewheel'
										: 'DOMMouseScroll';

var smoothScroll = function (range) {
	var position = 0; // スクロールする位置
	var progress = 0; // 現在の進捗 0 ～ 100
	var start = window.pageYOffset; // スクロール開始時の位置
	var diff = range - start; // 目的の位置までの差分
	var isUp = diff <= 0; // 上下どちらのスクロールを行うのかは、差分が負の値かどうかで判断することができる
	var easeOut = function (p) { // ease-out に当てはめた値を返す
		return p * (2 - p);
	};
	var isMovable = true; // スクロール可能

	return new Promise(function (resolve, reject) {
		var stopScrollHandler = function (e) {
			if (
				e.type !== 'wheel' &&
				e.type !== 'keydown' &&
				e.keyCode === 27 && // ESC
				e.keyCode === 32 && // スペース
				e.keyCode === 38 && // 上
				e.keyCode === 40 // 下
			) {
				return;
			}

			e.preventDefault();
			isMovable = false;
			// reject(); // 中断
			window.removeEventListener('wheel', stopScrollHandler);
			window.removeEventListener('keydown', stopScrollHandler);
		};
		var move = function () { // 実際にスクロールを行う
			progress++; // 進捗を進める
			position = start + (diff * easeOut(progress / 100)); // スクロールする位置を計算する

			window.scrollTo(0, position); // スクロールさせる

			if (
				isMovable &&
				(
					(
						isUp &&
						range < position
					) ||
					(
						!isUp &&
						position < range
					)
				)
			) {
				// 現在位置が目的位置より進んでいなければアニメーションを続行させる
				requestAnimationFrame(move);

				return;
			}

			resolve(); // 処理の完了
			window.removeEventListener('wheel', stopScrollHandler);
			window.removeEventListener('keydown', stopScrollHandler);
		};

		window.addEventListener('wheel', stopScrollHandler, {passive:false});
		window.addEventListener('keydown', stopScrollHandler, { passive: false });
		requestAnimationFrame(move); // 初回呼び出し
	});
};

document.addEventListener(mousewheelevent, function(e) {
	e.preventDefault();

	var delta = e.deltaY ? -(e.deltaY)
						: e.wheelDelta ? e.wheelDelta
						: -(e.detail);
	console.log(delta);

	if(delta < 0) {
		scrSet = document.scrollingElement.scrollTop + scrLength;
	} else {
		scrSet = document.scrollingElement.scrollTop - scrLength;
	}
	console.log(scrSet);
	smoothScroll(scrSet);
},{passive:false});


$(function () {
	scrLength = 350;
	scrSpeed = 600;
	scrEasing = 'easeOutCirc';



	// $(document).on(mousewheelevent, function (e) {
	// 	e.preventDefault();
	// 	var delta = e.originalEvent.deltaY ? -(e.originalEvent.deltaY) : e.originalEvent.wheelDelta ? e.originalEvent.wheelDelta : -(e.originalEvent.detail);
	// 	if (delta < 0) {
	// 		scrSet = $(document).scrollTop() + scrLength;
	// 	} else {
	// 		scrSet = $(document).scrollTop() - scrLength;
	// 	}
	// 	$('html,body').stop().animate({ scrollTop: scrSet }, scrSpeed, scrEasing);
	// 	return false;
	// });
});