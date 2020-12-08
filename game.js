class Game{
    constructor(){
        
    }
    getGameState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data)
        {
            gameState = data.val();
        })
        console.log("getGameState"+gameState);
    }
    setGameState(state){
        database.ref("/").update({
            gamestate: state
        })
        console.log("setGameState"+state);
    }
    start(){
        if (gameState===0){
            console.log("startingGame");
            player = new Player();
            player.getPlayerCount();
            form = new Form();
            form.display();
        }
    }
}