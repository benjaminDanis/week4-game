var lukeDiv = $("<div>");
var obiDiv = $("<div>");
var maulDiv = $("<div>");
var sidDiv = $("<div>");


var lukeSkywalker = 
		{	
			name : "Luke Skywalker",
			hp : 100,
			attack: 19,
			counter: 18,

			attackEnemy: function(obj){

				obj.hp = obj.hp - lukeSkywalker.attack;
				lukeSkywalker.attack = lukeSkywalker.attack + 8;
				lukeSkywalker.hp = lukeSkywalker.hp - obj.counter;

			},

			createPlayer: function(){
				
				$(lukeDiv).addClass("playerDiv animated zoomInDown");
				$(lukeDiv).attr("id", "lukeSkywalker");
				lukeDiv.html(lukeSkywalker.name + " HP: " +lukeSkywalker.hp);
				$("#divBox").append(lukeDiv);



			}
		}

var obiWan =
		{
			name : "Obi Wan",
			hp: 180,
			attack: 9,
			counter: 10,

			attackEnemy: function (obj){

				
				obj.hp = obj.hp - obiWan.attack;
				obiWan.attack = obiWan.attack + 6;
				obiWan.hp = obiWan.hp - obj.counter;
				


			},

			createPlayer: function(){
				
				$(obiDiv).addClass("playerDiv animated zoomInDown");
				$(obiDiv).attr("id", "obiWan");
				obiDiv.html(obiWan.name + " HP: " + obiWan.hp);
				$("#divBox").append(obiDiv);


			}


		}


var darthMaul =
		{
			name : "Darth Maul",
			hp: 140,
			attack: 14,
			counter: 15,

			attackEnemy: function(obj){
				obj.hp = obj.hp - darthMaul.attack;
				darthMaul.attack = darthMaul.attack + 10;
				darthMaul.hp = darthMaul.hp - obj.counter;
			},

			createPlayer: function(){
				
				$(maulDiv).addClass("playerDiv animated zoomInDown");
				$(maulDiv).attr("id", "darthMaul");
				maulDiv.html(darthMaul.name + " HP: " + darthMaul.hp);
				$("#divBox").append(maulDiv);
			}
		}


var darthSid =
		{
			name : "Darth Sidious",
			hp: 120,
			attack: 16,
			counter: 18,

			attackEnemy: function(obj){
				obj.hp = obj.hp - darthSid.attack;
				darthSid.attack = darthSid.attack + 8;
				darthSid.hp = darthSid.hp - obj.counter;
			},

			createPlayer: function(){
				
				$(sidDiv).addClass("playerDiv animated zoomInDown");
				$(sidDiv).attr("id", "darthSid");
				sidDiv.html(darthSid.name + " HP: " + darthMaul.hp);
				$("#divBox").append(sidDiv);


			}

			
		}






$( document ).ready(function(){

	var count = 1;
	var opponentCount = 0;

	$("#enemyChoiceLbl").css("visibility", "hidden");
	$("#defenderLbl").css("visibility", "hidden");
	$("#playerChoiceLbl").css("visibility", "hidden");

	$("#playerStats").css("visibility", "hidden");
	$("#newGame").css("visibility", "hidden");
	$("#attackBtn").css("visibility", "hidden");


	$("#enemyChoiceLbl").html("Enemies Available to Attack: ");
	$("#defenderLbl").html("Defender: ");

	lukeSkywalker.createPlayer();
	obiWan.createPlayer();
	darthMaul.createPlayer();
	darthSid.createPlayer();

	
	$("#label").html("<h1>Choose your player</h1>");

	var divBox = $("#divBox");


var playerArray = [];
var opponentArray = [];
var idArray = [];

	$(".playerDiv").on("click", function(){

		$("#enemyChoice").html(divBox); //enemies moved 
		$(".playerDiv").removeClass("animated zoomInDown");
		$("#playerChoiceLbl").css("visibility", "visible");



		playerArray.push($(this));	
		var id = this.getAttribute( "id" );	//store id of this
		
			switch(id){					//determine which player has been chosen, push player into array
				case "lukeSkywalker":
				idArray.push(lukeSkywalker);
				break;
				case "obiWan":
				idArray.push(obiWan)
				break;
				case "darthMaul":
				idArray.push(darthMaul);
				break;
				case "darthSid":
				idArray.push(darthSid);
				break;
		}


		$("#playerChoice").html(playerArray[0]);		
		console.log(playerArray[0]);
		$("#enemyChoiceLbl").css("visibility", "visible");
		$("#defenderLbl").css("visibility", "visible");

		

		if (playerArray[0] !== "") {

			$("#label").html("<h1>Choose your opponent</h1>");
			$(".playerDiv").on("click", function(){

				var id = this.getAttribute( "id" );
				opponentArray.push($(this));
				switch(id){					//determine which player has been chosen, push player into array
					case "lukeSkywalker":
					idArray.push(lukeSkywalker);
					break;
					case "obiWan":
					idArray.push(obiWan)
					break;
					case "darthMaul":
					idArray.push(darthMaul);
					break;
					case "darthSid":
					idArray.push(darthSid);
					break;
				}
				$("#label").html("<h1>Fight!</h1>");

				$("#defender").html(opponentArray[0]);
				$("#attackBtn").css("visibility", "visible");

				console.log(opponentArray[0]);

			})
		}

	})

	function startFight(){

		

		if (playerArray[0] !== "") {
			$(".playerDiv").on("click", function(){

				var id = this.getAttribute( "id" );
				opponentArray.push($(this));
				opponentCount++;

					switch(id){					//determine which player has been chosen, push player into array
							case "lukeSkywalker":
							idArray.push(lukeSkywalker);
							break;
							case "obiWan":
							idArray.push(obiWan)
							break;
							case "darthMaul":
							idArray.push(darthMaul);
							break;
							case "darthSid":
							idArray.push(darthSid);
							break;
						}

				
				$("#defender").html(opponentArray[opponentCount]);
				$("#label").html("<h1>Fight!</h1>");
				count++;
				console.log(opponentCount);
				
				$("#attackBtn").prop("disabled", false);
				

				

			})
		}

	}

	$("#attackBtn").on("click", function initiateAttack(){



			$("#playerStats").css("visibility", "visible");

				$(".enemy").html(idArray[count].name);
				$("#attackPoints").html(idArray[0].attack);
				$("#counterPoints").html(idArray[count].counter);

				
				console.log(idArray[count].name);


			

			idArray[0].attackEnemy(idArray[count]);

			playerArray[0].html(idArray[0].name + " HP: " + idArray[0].hp);


			opponentArray[opponentCount].html(idArray[count].name + " HP: " + idArray[count].hp);
			console.log(count);


			$("#playerChoice").html(playerArray[0]);


			$("#defender").html(opponentArray[opponentCount]);

			var healthBar = (idArray[count].hp/120);
			var userHealth = (idArray[0].hp/120);

			if( healthBar < .5)
			{
				$(opponentArray[opponentCount]).css("color", "orange");
			}

			if( healthBar < .3)
			{
				$(opponentArray[opponentCount]).css("color", "red");
			}

			if(userHealth < .5)
			{
				$(playerArray[0]).css("color", "orange");
			}

			if(userHealth < .3)
			{
				$(playerArray[0]).css("color", "red");
			}

			if (idArray[count].hp <= 0) {

				count++;
				$("#label").html("<h1>Choose your next opponent</h1>");

				$("#attackBtn").prop("disabled", true);
				$("#outcome").html("You've defeated " + idArray[count].name);
				startFight();


			}

			if (idArray[0].hp <= 0) {
				$("#attackBtn").prop("disabled", true);
				$("#outcome").html("You have been defeated! Press restart to play again.");
				$("#newGame").css("visibility", "visible")
				$("#newGame").on("click", function(){
					location.reload();
				})
			}


	})
	

});
	
	




			

	










