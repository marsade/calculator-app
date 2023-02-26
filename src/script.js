const items = ["default", "theme1", "theme2"];
const result = $(".answer");
const currentTheme = localStorage.getItem("theme");

let endValue = "";
$("input").click(function () {
	let input = $(this).attr("value");

	// change x to *
	if (input === "x") {
		endValue += "*";
	} else if (input === "Del") {
		endValue = endValue;
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

$("#result-btn").click(function () {
	let calculatedValue = eval(endValue);
	if (isNaN(calculatedValue)) {
		result.text("Error");
		setTimeout(() => {
			result.text("0");
		}, 1300);
	} else if (calculatedValue === Infinity) {
		setTimeout(() => {
			result.text("Infinity");
			endValue = "0";
		}, 1300);
	} else {
		result.text(calculatedValue);
	}

	endValue = calculatedValue;
	console.log(calculatedValue);
});
$("#reset-btn").click(function () {
	result.text("0");
	endValue = "";
});
$(window).keypress(function (e) {
	e.preventDefault();
	//grabbing the liveScreen

	//numbers
	if (e.key === "0") {
		endValue += "0";
		result.text(endValue);
	} else if (e.key === "1") {
		endValue += "1";
		result.text(endValue);
	} else if (e.key === "2") {
		endValue += "2";

		result.text(endValue);
	} else if (e.key === "3") {
		endValue += "3";

		result.text(endValue);
	} else if (e.key === "4") {
		endValue += "4";

		result.text(endValue);
	} else if (e.key === "5") {
		endValue += "5";

		result.text(endValue);
	} else if (e.key === "6") {
		endValue += "6";

		result.text(endValue);
	} else if (e.key === "7") {
		endValue += "7";

		result.text(endValue);
	} else if (e.key === "8") {
		endValue += "8";

		result.text(endValue);
	} else if (e.key === "9") {
		endValue += "9";

		result.text(endValue);
	}

	//operators
	if (e.key === "+") {
		endValue += "+";
		result.text(endValue);
	} else if (e.key === "-") {
		endValue += "-";
		result.text(endValue);
	} else if (e.key === "*") {
		endValue += "*";
		result.text(endValue);
	} else if (e.key === "/") {
		endValue += "/";
		result.text(endValue);
	}

	//decimal key
	if (e.key === ".") {
		endValue += ".";
		result.text(endValue);
	}

	//press enter to see result
	if (e.key === "Enter") {
		let calculatedKeyboardValue = eval(endValue);
		if (isNaN(calculatedKeyboardValue)) {
			result.text("Error");
			setTimeout(() => {
				result.text("0");
			}, 1300);
		} else if (calculatedKeyboardValue === Infinity) {
			setTimeout(() => {
				result.text("Infinity");
				endValue = "0";
			}, 1300);
		} else {
			result.text(calculatedKeyboardValue);
		}

		endValue = calculatedKeyboardValue;
		console.log(calculatedKeyboardValue);
	}

	//backspace
	if (e.key === "Backspace") {
		endValue = endValue.substring(0, endValue.length - 1);
		result.text(endValue);
		if (endValue === "") {
			result.text("0");
		}
	}
});

$(document).on("jt:toggled:multi", function (event, target) {
	if (target.checked === true && $(target).parent().index() === 1) {
		$("#theme").attr("href", "dist/css/theme2.css");
		localStorage.setItem("theme", items[1]);
		console.log(localStorage.getItem("theme"));
	} else if (target.checked === true && $(target).parent().index() === 2) {
		$("#theme").attr("href", "dist/css/theme3.css");
		localStorage.setItem("theme", items[2]);
		console.log(localStorage.getItem("theme"));
	} else if (target.checked === true && $(target).parent().index() === 0) {
		$("#theme").attr("href", "dist/css/style.css");
		localStorage.setItem("theme", items[0]);
		console.log(localStorage.getItem("theme"));
	}
});
if (currentTheme === "theme1") {
	$("#theme").attr("href", "dist/css/theme2.css");
} else if (currentTheme === "theme2") {
	$("#theme").attr("href", "dist/css/theme3.css");
} else {
	$("#theme").attr("href", "dist/css/style.css");
}
