var name = ["red", "orange", "yellow", "green", "blue", "pink", "purple", "brown", "black"];
var color = ["#ff0000", "#ff6600", "#ffff00", "#33cc33", "#0000ff", "#ff33cc", "#990099", "#663300", "#000000"];
var limit = 15

Template.colorGame.events({
	"click #colorButton": function(event){

		if(limit > 0)
		{
			var n = Math.floor(Math.random() * 8);
			var c = Math.floor(Math.random() * 8);

			var a = name[n];
			var b = color[c];

			$("#displayColorName").html(a);
			$("#displayColorName").css("color", b);

			var userInput = $("#exampleInputColor").val();

			if(a != userInput)
			{
				$("#incorrectMessage").html('Your answer is incorrect. Try again.');
			}
			else
			{
				limit--;
			}
		}
		else
		{
			// game over
		}

	}
})

Template.colorGame.rendered = function(){
		var n = Math.floor(Math.random() * 8);
		var c = Math.floor(Math.random() * 8);

		var a = name[n];
		var b = color[c];

		$("#displayColorName").html(a);
		$("#displayColorName").css("color", b);

		var userInput = $("#exampleInputColor").val();
}