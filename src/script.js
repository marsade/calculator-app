$(document).on("jt:toggled:multi", function (event, target) {
	console.info($(target).parent().index());
	if ($(target).parent().index() === 1) {
		$("#theme").attr("href", "dist/css/theme2.css");
	} else if ($(target).parent().index() === 2) {
		$("#theme").attr("href", "dist/css/theme3.css");
	} else if ($(target).parent().index() === 0) {
		$("#theme").attr("href", "dist/css/style.css");
	}
});
