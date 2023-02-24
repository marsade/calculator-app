const result = $(".answer");

// theme switcher function
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

let endValue = "";
$("input").click(function () {
	let input = $(this).attr("value");

	// change x to *
	if (input === "x") {
		endValue += "*";
	} else {
		endValue += input;
	}
	result.text(endValue);
	console.log(endValue);
});

$("#del-btn").click(function () {
	endValue = endValue.substring(0, endValue.length - 1);
	result.text(endValue);
	if (endValue === "") {
		result.text("0");
	}
});
