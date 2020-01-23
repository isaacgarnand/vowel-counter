$(document).ready(function () {
	$("form#input").submit(function (event) {
		event.preventDefault();

		var string = $("#input1").val();
		var vowelCount = 0;

		for(i = 0; i < string.length; i++) {
			if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u' ) {
				vowelCount += 1;
			}
		}
		$(".output").text(vowelCount);
	});
});