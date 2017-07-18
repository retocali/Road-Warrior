var winState = {

    create: function() {

        console.log("Win!");

		var winText = game.add.text(game.world.centerX, game.world.centerY + TILE_SIZE*3,"Click on the You Win to start new level", {font: "20px Arial", fill: "#0ff0ff"});
		winText.anchor.setTo(0.5,0.5);

		// Start button
		gameStart = game.add.button(game.world.centerX , game.world.centerY, 'winScreen', winClick, this);
		gameStart.scale.setTo(0.75,0.75);
		gameStart.anchor.setTo(0.5,0.5);

		winMusic();

		// Win on Click function
		function winClick() {
			game.state.start('lose');
		}	

	    function winMusic() {
	    	winSound.play("",0,1,false);
		}

    }
};