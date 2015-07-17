var gameOver=false;
var interval;
var random;
var time = 0;

Template.numberGuess.events({

	"click #guessButton": function(event){
		var number = $("#number").val();


		if(number.length==0){
			alert("please enter a number");
		}
		else{
			var number2= parseInt(number);

			if(number2 == random){
				gameOver = true;
				$("#message").html("Correct")
				$("#endGame").html("You have finished the game. Your time is " + (time/1000) + " seconds.")
			}
			else if(number2 < random){
				$("#message").html("higher");
				$("#number").val("");
			}
			else if(number2 < 0 || number2 > 100){
				$("#message").html("number has to be between 0 and 100");
				$("#number").val("");
			}
			else{
				$("#message").html("lower");
				$("#number").val("");
			}
	

		}

	}


})

function braction(){
	
	if(!gameOver){
	time = time +1;
	}
}


Template.numberGuess.rendered = function(){
		interval=Meteor.setInterval(braction, 1);
		random=Math.floor((Math.random() * 100) + 1);
		$("#test").html(random);

};