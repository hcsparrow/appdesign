var gameOver=false;
var interval;
var random;
var time = 0;

Template.numberGuess.events({

	"submit #formEnter": function(event){
	event.preventDefault();
		var number = $("#number").val();

		alert("please enter a number");

		if(number.length==0){
			alert("please enter a number");
		}
		else{
			var number2= parseInt(number);

			
			
	

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