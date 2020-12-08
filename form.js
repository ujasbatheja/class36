class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2');
        title.html("car racing game");
        title.position(350,0);
        var input = createInput("name");
        var button = createButton("play");
        var greeting = createElement("h3");
        input.position(350,160);
        button.position(350,200);
        button.mousePressed(function()
            {
            var name = input.value();
            playerCount+=1;
            player.updatePlayerName(name);
            player.updatePlayerCount(playerCount);
            input.hide();
            button.hide();
            greeting.html("Hello "+name);
            greeting.position(350,150);
        }
        )
    }
}