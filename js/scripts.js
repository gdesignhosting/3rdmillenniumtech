$(document).ready(function () {
	$('[data-toggle="offcanvas"]').click(function () {
		$('.row-offcanvas').toggleClass('active')
	});

	if (window.location.hash) {
		$(window.location.hash).addClass('heading-highlight');
	}
});