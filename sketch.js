var gameState = 0;
var playerCount = 0;
var form, player, game;
var database;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    game = new Game();
    game.getGameState();
    game.start();
    console.log(database);
}

function draw(){
    background("white");
    
}