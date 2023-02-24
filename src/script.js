$(document).on("jt:toggled:multi", function (event, target) {
	console.info($(target).parent().index());
	if ($(target).parent().index() === 1) {
		if ($("body").hasClass("theme3-body")) {
			$("body").removeClass("theme3-body");
		}
		$("body").addClass("theme2-body");
	} else if ($(target).parent().index() === 2) {
		if ($("body").hasClass("theme2-body")) {
			$("body").addClass("theme3-body");
			$("body").removeClass("theme2-body");
		}
	} else if ($(target).parent().index() === 0) {
		$("body").removeClass();
	}
});
