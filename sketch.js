const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg;
var hour;

function preload() {
    getBackgroundImg();
}

function setup() {
    createCanvas(1200, 700);
    engine = Engine.create();
    world = engine.world;
}

function draw() {
    // add condition to check if any background image is there to add
    if(backgroundImg) {
        background(backgroundImg);
    }

    Engine.update(engine);

    // write code to display time in correct format here
    push();
    fill("white");
    textSize(35);
    var timeText;
    if(hour >= 00 && hour <= 11) {
        timeText = "AM";
    } else {
        timeText = "PM";
    }
    var modifiedHour;
    if(hour == 00) {
        modifiedHour = "12";
    } else if(hour == 13) {
        modifiedHour = "1";
    } else if(hour == 14) {
        modifiedHour = "2";
    } else if(hour == 15) {
        modifiedHour = "3";
    } else if(hour == 16) {
        modifiedHour = "4";
    } else if(hour == 17) {
        modifiedHour = "5";
    } else if(hour == 18) {
        modifiedHour = "6";
    } else if(hour == 19) {
        modifiedHour = "7";
    } else if(hour == 20) {
        modifiedHour = "8";
    } else if(hour == 21) {
        modifiedHour = "9";
    } else if(hour == 22) {
        modifiedHour = "10";
    } else if(hour == 23) {
        modifiedHour = "11";
    }
    text("Time: " + modifiedHour + " " + timeText, 600, 300);
    pop();
}

async function getBackgroundImg() {
    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/America/New_York");

    //change the data in JSON format
    var responseJSON = await response.json();

    // write code slice the datetime
    hour = responseJSON.datetime.slice(11, 13);

    // add conditions to change the background images from sunrise to sunset
    if(hour >= 05 && hour <= 06) {
        bg = "sunrise1.png";
    } else if(hour >= 06 && hour <= 07) {
        bg = "sunrise2.png";
    } else if(hour >= 07 && hour <= 08) {
        bg = "sunrise3.png";
    } else if(hour >= 08 && hour <= 09) {
        bg = "sunrise4.png";
    } else if(hour >= 09 && hour <= 12) {
        bg = "sunrise5.png";
    } else if(hour >= 13 && hour <= 16) {
        bg = "sunrise6.png";
    } else if(hour >= 17 && hour <= 18) {
        bg = "sunset7.png";
    } else if(hour >= 18 && hour <= 19) {
        bg = "sunset8.png";
    } else if(hour >= 19 && hour <= 20) {
        bg = "sunset9.png";
    } else if(hour >= 20 && hour <= 21) {
        bg = "sunset10.png";
    } else if(hour >= 21 && hour <= 22) {
        bg = "sunset11.png";
    } else if(hour >= 22 && hour <= 00) {
        bg = "sunset12.png";
    }

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}
