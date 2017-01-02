$(document).ready(function(){

	for (var i = 1; i <=100; i++) {
		if ((i % 5 == 0) && (i % 3 == 0)){
			$('.fizzbuzz').append('fizz buzz, ');
		}
		else if (i % 5 == 0){
			$('.fizzbuzz').append('buzz, ');
		}
		else if (i % 3 == 0){
			$('.fizzbuzz').append('fizz, ');
		}
		else {
			$('.fizzbuzz').append(i+', ');
		}
	}
});