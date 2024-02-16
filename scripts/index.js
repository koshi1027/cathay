const initGtagEvents = () => {
	$('.india1').on('click', function () {
		gtag('event', 'click', {
			'event_category': 'button',
			'event_label': '題目1_印度',
		});
	});

	$('.global1').on('click', function () {
		gtag('event', 'click', {
			'event_category': 'button',
			'event_label': '題目1_環品',
		});
	});

	$('.india2').on('click', function () {
		gtag('event', 'click', {
			'event_category': 'button',
			'event_label': '題目2_印度',
		});
	});

	$('.global2').on('click', function () {
		gtag('event', 'click', {
			'event_category': 'button',
			'event_label': '題目2_環品',
		});
	});

	$('.india3').on('click', function () {
		gtag('event', 'click', {
			'event_category': 'button',
			'event_label': '題目3_印度',
		});
	});

	$('.global3').on('click', function () {
		gtag('event', 'click', {
			'event_category': 'button',
			'event_label': '題目3_環品',
		});
	});

	$('.result2').on('click', function () {
		gtag('event', 'click', {
			'event_category': 'button',
			'event_label': '答案_印度',
		});
	});

	$('.result1').on('click', function () {
		gtag('event', 'click', {
			'event_category': 'button',
			'event_label': '答案_環品',
		});
	});

	$('.restart').on('click', function () {
		gtag('event', 'click', {
			'event_category': 'button',
			'event_label': '重新測驗',
		});
	});

	$('.prev-question').on('click', function () {
		gtag('event', 'click', {
			'event_category': 'button',
			'event_label': '上一步',
		});
	});

	$('.global-info').on('click', function () {
		gtag('event', 'click', {
			'event_category': 'button',
			'event_label': '基金資料_環品',
		});
	});

	$('.global-dm').on('click', function () {
		gtag('event', 'click', {
			'event_category': 'button',
			'event_label': '基金DM_環品',
		});
	});

	$('.global-org').on('click', function () {
		gtag('event', 'click', {
			'event_category': 'button',
			'event_label': '銷售機構_環品',
		});
	});

	$('.india-info').on('click', function () {
		gtag('event', 'click', {
			'event_category': 'button',
			'event_label': '基金資料_印度',
		});
	});

	$('.india-dm').on('click', function () {
		gtag('event', 'click', {
			'event_category': 'button',
			'event_label': '基金DM_印度',
		});
	});

	$('.india-org').on('click', function () {
		gtag('event', 'click', {
			'event_category': 'button',
			'event_label': '銷售機構_印度',
		});
	});

	$('').on('click', function () {
		gtag('event', 'click', {
			'event_category': 'button',
			'event_label': '影片',
		});
	});

	$('.video-toggle').on('click', function () {
		gtag('event', 'click', {
			'event_category': 'button',
			'event_label': 'TOP',
		});
	});
};

const initSection1Animation = () => {
	const $section1 = $('.section1');

	const animate = () => {
		$section1.addClass('animate1');

		setTimeout(() => {
			$section1.removeClass('animate1');
		}, 3500);

		setTimeout(() => {
			$section1.addClass('animate2');
		}, 4000);

		setTimeout(() => {
			$section1.removeClass('animate2');
		}, 7500);
	};

	animate();

	setInterval(() => {
		animate();
	}, 8000);
};

const initQuiz = () => {
	const quiz = {
		q1: '',
		q2: '',
		q3: '',
	};

	$('.section2 .choice').on('click', function () {
		const self = $(this);
		const question = self.data('question');
		const choice = self.data('choice');

		quiz[`q${question}`] = choice;

		self.find('.check').addClass('active');
		self.siblings().find('.check').removeClass('active');

		$(`.section2 .q${question}`).removeClass('active');

		if (question < 3) {
			$('.section2 .prev-question').addClass('active');
			$(`.section2 .q${question + 1}`).addClass('active');
			$(`.section2 .qq${question + 1}`).addClass('active').siblings().removeClass('active');
		}

		if (question === 3) {
			$('.section2 .prev-question').removeClass('active');
			$('.section2 .result-wrap').addClass('active');

			const result = Object.values(quiz).reduce((acc, cur) => {
				if (!acc[cur]) acc[cur] = 0;
				acc[cur]++;
				return acc;
			}, {});

			const max = Object.keys(result).reduce((a, b) => result[a] > result[b] ? a : b);

			$(`.section2 .result${max}`).addClass('active');
			$('.section2 .finished-wrap').addClass('active');
			$('.section2 .current-question').addClass('hide');
			$('.reveal-wrap').addClass('active');
			$('.section2 .title').addClass('active');
		}
	});

	$('.section2 .restart').on('click', function () {
		quiz.q1 = '';
		quiz.q2 = '';
		quiz.q3 = '';

		$('.section2 .choice .check').removeClass('active');
		$('.section2 .qq1').addClass('active').siblings().removeClass('active');
		$('.section2 .question-wrap.q1').addClass('active').siblings().removeClass('active');
		$('.section2 .result').removeClass('active');
		$('.section2 .finished-wrap').removeClass('active');
		$('.section2 .current-question').removeClass('hide');
		$('.reveal-wrap').removeClass('active');
		$('.section2 .title').removeClass('active');
	});

	$('.section2 .prev-question').on('click', function () {
		const currentQuestion = $('.section2 .question-wrap.active');

		if (currentQuestion.hasClass('q3')) {
			$('.section2 .q2').addClass('active');
			$('.section2 .qq2').addClass('active');
			$('.section2 .qq3').removeClass('active');
		}

		if (currentQuestion.hasClass('q2')) {
			$('.section2 .q1').addClass('active');
			$('.section2 .qq1').addClass('active');
			$('.section2 .qq2').removeClass('active');
			$('.section2 .prev-question').removeClass('active');
		}

		currentQuestion.removeClass('active');
	});

	$('.section2 .result1').on('click', function () {
		$('html, body').animate({
			scrollTop: $('.section3').offset().top,
		}, 500);
	});

	$('.section2 .result2').on('click', function () {
		$('html, body').animate({
			scrollTop: $('.section5').offset().top,
		}, 500);
	});
};

const initSlides = () => {
	$('.slider').each(function () {
		const self = $(this);
		const prev = self.parent().find('.prev');
		const next = self.parent().find('.next');
		const navigation = self.parent().parent().find('.navigation');

		self.slick({
			dots: false,
			arrows: true,
			prevArrow: prev,
			nextArrow: next,
			infinite: true,
			speed: 300,
			adaptiveHeight: true,
		});

		self.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
			navigation.eq(nextSlide).addClass('active').siblings().removeClass('active');

			const tag = navigation.eq(nextSlide).data('gtag');

			gtag('event', 'click', {
				'event_category': 'button',
				'event_label': tag,
			});
		});

		navigation.on('click', function () {
			const index = $(this).index();
			self.slick('slickGoTo', index);
		});
	});
};

const initToTop = () => {
	$('.totop').on('click', function () {
		$('html, body').animate({
			scrollTop: 0,
		}, 500);
	});
};

const initVideo = () => {
	const src = $('.video iframe').attr('src');

	$('.video-toggle').on('click', function () {
		$('.video-popup').addClass('active');
		$('.video iframe').attr('src', src + '?autoplay=1&mute=1');
	});

	$('.video-popup .close').on('click', function () {
		$('.video-popup').removeClass('active');
		$('.video iframe').attr('src', src);
	});
};

const initScrollRevealFixedButtons = () => {
	$(window).on('scroll', function () {
		const scrollTop = $(window).scrollTop();
		const windowHeight = $(window).height();

		if (scrollTop > windowHeight) {
			$('.fixed-buttons').addClass('active');
		} else {
			$('.fixed-buttons').removeClass('active');
		}
	});
};

$(() => {
	initGtagEvents();
	initSection1Animation();
	initQuiz();
	initSlides();
	initToTop();
	initVideo();
	initScrollRevealFixedButtons();
});
