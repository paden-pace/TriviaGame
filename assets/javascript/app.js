
$(document).ready(function(){

	console.log("page opens")


	var eachone = [	
		// 0
		{
		question: 'In the movie "Brink!" (1998), Brink is the nickname of which character?',
		option1: { 	answer : "Andy Brinker",
					truth : true
					},
		option2: { 	answer : "Jordy Brinker",
					truth : false
					},
		option3: { 	answer : "Val Brinkman",
					truth : false
					},
		option4: { 	answer : "James Brinkman",
					truth : false
					},
		gif: "<img src='assets/images/brink.gif' width='200px'/>"
		},
		// 1
		{
		question: 'In the movie "Zenon: Girl of the 21st Century" (1999), what is the name of the pop star Zenon idolizes?',
		option1: { 	answer : "Aaron Carter",
					truth : false
					},
		option2: { 	answer : "Pluto Jones",
					truth : false
					},
		option3: { 	answer : "Proto Zoa",
					truth : true
					},
		option4: { 	answer : "Jake Neptune",
					truth : false
					},
		gif: "<img src='assets/images/zenon.gif' width='200px'/>"
		},
		// 2
		{
		question: 'In the movie "The Luck of the Irish" (2001), what is the name of the main character?',
		option1: { 	answer : "Ryan Johnson",
					truth : false
					},
		option2: { 	answer : "Kyle Johnson",
					truth : true
					},
		option3: { 	answer : "Jack Johnson",
					truth : false
					},
		option4: { 	answer : "Aaron Johnson",
					truth : false
					},
		gif: "<img src='assets/images/irish.gif' width='200px'/>"
		},
		// 3
		{
		question: "In the movie 'Motocrossed' (2001), what is the name of Andrea's Twin Brother?",
		option1: { 	answer : "Andrew",
					truth : true
					},
		option2: { 	answer : "Aaron",
					truth : false
					},
		option3: { 	answer : "Alex",
					truth : false
					},
		option4: { 	answer : "Alan",
					truth : false
					},
		gif: "<img src='assets/images/motocrossed.gif' width='200px'/>"
		},
		// 4
		{
		question: 'In the movie "Up, Up and Away" (2000), what is the weakness of the Marshalls?',
		option1: { 	answer : "Heat",
					truth : false
					},
		option2: { 	answer : "Rust",
					truth : false
					},
		option3: { 	answer : "Foil",
					truth : true
					},
		option4: { 	answer : "Cold",
					truth : false
					},
		gif: "<img src='assets/images/dcom.gif' width='200px'/>"
		},
		// 5
		{
		question: 'In the movie "The Thirteenth Year" (1999), what does Cody Griffin begin to become after his 13th birthday?',
		option1: { 	answer : "Werewolf",
					truth : false
					},
		option2: { 	answer : "Vampire",
					truth : false
					},
		option3: { 	answer : "Leprechaun",
					truth : false
					},
		option4: { 	answer : "Merman",
					truth : true
					},
		gif: "<img src='assets/images/13year.gif' width='200px'/>"
		},
		// 6
		{
		question: 'In the movie "Halloweentown" (1998), what is the name of the mayor?',
		option1: { 	answer : "Kalabar",
					truth : true
					},
		option2: { 	answer : "Skeletor",
					truth : false
					},
		option3: { 	answer : "Excelsior",
					truth : false
					},
		option4: { 	answer : "Zandor",
					truth : false
					},
		gif: "<img src='assets/images/halloweentown.gif' width='200px'/>"
		},
		// 7
		{
		question: "In the movie 'Johnny Tsunami', what member of Johnny Kapahaala's family is Johnny Tsunami?",
		option1: { 	answer : "his father",
					truth : false
					},
		option2: { 	answer : "his grandfather",
					truth : true
					},
		option3: { 	answer : "his brother",
					truth : false
					},
		option4: { 	answer : "his uncle",
					truth : false
					},
		gif: "<img src='assets/images/johnny.gif' width='200px'/>"
		},
		// 8
		{
		question: 'In the movie "Smart House" (1999), what is the name of the house that Ben wins?',
		option1: { 	answer : "Kathy",
					truth : false
					},
		option2: { 	answer : "Tracy",
					truth : false
					},
		option3: { 	answer : "Pat",
					truth : true
					},
		option4: { 	answer : "Sam",
					truth : false
					},
		gif: "<img src='assets/images/house.gif' width='200px'/>"
		},
		// 9
		{
		question: 'In the movie "Alley Cat Strike", what is signifanct about the final bowl?',
		option1: { 	answer : "It's a strike.",
					truth : false
					},
		option2: { 	answer : "It's a gutterball.",
					truth : false
					},
		option3: { 	answer : "It's a perfect game.",
					truth : false
					},
		option4: { 	answer : "It's a 7 - 10 Split.",
					truth : true
					},
		gif: "<img src='assets/images/strike.gif' width='200px'/>"
		},
	];

	var intervalId5;
	var intervalId30;

	$("#start-button").on("click", function(){

		console.log(eachone);

		// reseting and stating all the variables used
		var correctAnswers = 0;
		var incorrectAnswers = 0;
		var unansweredAnswers = 0;
		var guessedIt;

		// the variable to pass through the object array starts at 0
		var count = 0;

		function restart() {
			console.log("restarting...");
			var correctAnswers = 0;
			var incorrectAnswers = 0;
			var unansweredAnswers = 0;
			var count = 0;
			return false;
		}

			// Creating the 30 second question timer call name startTime30();
			var time30;
			var timesUp30 = false;

			function startTime30(){
				console.log("startTime30 at least starts")
				time30 = 16;
				var timesUp5 = false;
				intervalId30 = setInterval(displayTime30, 1000);
				displayTime30();
			};

			function displayTime30(){
				time30--;
				if (time30 > 0){
					$("#row-timer").html(time30 + " seconds left");
				} else {
					$("#row-timer").html("Times Up!")
					unansweredAnswers++;
					timesUpFunc30();
				}
			};

			function timesUpFunc30(){
				clearInterval(intervalId30);
				time30 = 11;
				answerPage();
			};

		 
			// Creating the 5 second answerPage timer call name startTime5();
			var time5;
			var timesUp5 = false;

			function startTime5(){
				console.log("startTime5 at least starts")
				time5 = 6;
				var timesUp5 = false;
				intervalId5 = setInterval(displayTime5, 1000);
				displayTime5();
			};

			function displayTime5(){
				time5--;
				if (time5 > 0){
					$("#row-timer").html(time5 + " seconds left");
				} else {
					$("#row-timer").html("");
					timesUpFunc5();
				}
			};

			function timesUpFunc5(){
				clearInterval(intervalId5);
				time5 = 6;
				nextQuestion();
			};
		



		//checking if the statment is true or false for each button clickable and adding to CA and IA
		function trueOrFalse1() {
		 	console.log(eachone[count].option1.truth);
		 	if (eachone[count].option1.truth == true){
		 		correctAnswers++;
		 		guessedIt = true;
		 	} else {
		 		incorrectAnswers++;
		 		guessedIt = false;
		 	};
		};
		function trueOrFalse2() {
		 	console.log(eachone[count].option2.truth);
		 	if (eachone[count].option2.truth == true){
		 		correctAnswers++;
		 		guessedIt = true;
		 	} else {
		 		incorrectAnswers++;
		 		guessedIt = false;
		 	};
		};
		function trueOrFalse3() {
		 	console.log(eachone[count].option3.truth);
		 	if (eachone[count].option3.truth == true){
		 		correctAnswers++;
		 		guessedIt = true;
		 	} else {
		 		incorrectAnswers++;
		 		guessedIt = false;
		 	};
		};
		function trueOrFalse4() {
		 	console.log(eachone[count].option4.truth);
		 	if (eachone[count].option4.truth == true){
		 		correctAnswers++;
		 		guessedIt = true;
		 	} else {
		 		incorrectAnswers++;
		 		guessedIt = false;
		 	};
		 };


		 // nextQuestion function should bring about the next function if time runs out
		function displayQuestion() {
			$("#question").html(eachone[count].question);
			$("#option1").html(eachone[count].option1.answer);
			$("#option2").html(eachone[count].option2.answer);
			$("#option3").html(eachone[count].option3.answer);
			$("#option4").html(eachone[count].option4.answer);
			$("#okButton").html("");
			startTime30();	
		};



		function finalPage() {
			$("#start-button").html("Restart?");
			$("#question").html("Let's see how you did!");
			$("#option1").html("Correct Answers: " + correctAnswers);
			$("#option2").html("Incorrect Answers: " + incorrectAnswers);
			$("#option3").html("Unanswered Answers: " + unansweredAnswers);
			$("#option4").html("");
			count = 0;
			correctAnswers = 0;
			incorrectAnswers = 0;
			unansweredAnswers = 0;
			return false;
		};

		// ISSUE!!!!!!! currenlty next question runs 1 time, 2, times, 3 times, 
		// ISSUE!!!!!!! if you replace function straight with nextQuestion(); it skips right to next question
		// function answerPage() {
		// 	answer();

		// };

		// function startTime5(){
		// 		intervalId5 = setInterval(displayTime5, 1000);
		// 		displayTime5();
		// 	};

		// 	function displayTime5(){
		// 		time5--;
		// 		if (time5 > 0){
		// 			$("#row-timer").html(time5 + " seconds left");
		// 		} else {
		// 			$("#row-timer").html("Times Up!");
		// 			timesUpFunc5()
		// 			return;
		// 		}
		// 	};

		// 	function timesUpFunc5(){
		// 		clearInterval(intervalId5);
		// 		timesUp5 = true;
		// 		nextQuestion();
		// 	};



		function answerPage() {
			// debugger;
			
			if (guessedIt == true) {
				$("#question").html("Correct! The answer was: ");
			} else if (guessedIt == false) {
				$("#question").html("Incorrect! The correct answer was: ");
			};
			if(eachone[count].option1.truth == false) {
				$("#option1").html("");
			};
			if(eachone[count].option2.truth == false) {
				$("#option2").html("");
			};
			if(eachone[count].option3.truth == false) {
				$("#option3").html("");
			};
			if(eachone[count].option4.truth == false) {
				$("#option4").html("");
			};
			$("#gifLocation").html(eachone[count].gif);
			// $("#okButton").html("Next Question");
			// $("#okButton").on("click", function(){
				startTime5();	
			// });

		}

		function nextQuestion() {
			console.log("count: " + count);
			count++;
			$("#gifLocation").html("");
			console.log("CA: " + correctAnswers + " IA: " + incorrectAnswers + " UA: " + unansweredAnswers);
			if (count === eachone.length) {
				finalPage();
			} else {
				displayQuestion();
				};
			};




			console.log(eachone.length);
			displayQuestion();
		
			$("#option1").on("click", function(){
				trueOrFalse1();
				timesUpFunc30();
			});
			$("#option2").on("click", function(){
				trueOrFalse2();
				timesUpFunc30();
			});
			$("#option3").on("click", function(){
				trueOrFalse3();
				timesUpFunc30();
			});
			$("#option4").on("click", function(){
				trueOrFalse4();
				timesUpFunc30();
			});

			// if (timesUp5 == true){
			// 	alert(timesUp5);
			// };

	});




});