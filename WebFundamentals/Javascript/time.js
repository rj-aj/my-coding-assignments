
	
		var HOUR = 8;
		var MINUTE = 10;
		var PERIOD = "AM";

		var str = "It's ";

		if(MINUTE > 30){
			str += "almost " + (HOUR + 1);
		}else{
			str += "just after " + HOUR;
		}

		if(PERIOD == "PM"){
			str += " in the evening."
		}else{
			str += " in the morning."
		}

		console.log(str);



