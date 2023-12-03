let button;

let boardSize = 600; //How big the board is; should not change
let xBoardSizeZoomed = 600; //How big the board is; changed based on zoom // this variable == width
let yBoardSizeZoomed = xBoardSizeZoomed; // this variable == height
let boardYPos = 101;
let boardZoom = xBoardSizeZoomed / boardSize;

var amplitude;
let volHistory = [];

let musicSwitch = 0;

let img = [];

//--------Resize window---------
let redrawLock = false; //Create the buttons once in the setup
//let resizeLock = false;
//------------------------------


function createTemplateButton(txt/*, properties*/) {
    let tempButton = createButton(txt);
    
    // minimum font 9px
    tempButton.style('font-size', Math.max((18 * boardZoom), 9) + 'px');

    tempButton.style('cursor', 'pointer');
    tempButton.size(200 * boardZoom, 75 * boardZoom);
    return tempButton;
}

function textZoomed(txt, x=0, y=0) {
    text(txt, x * boardZoom, y * boardZoom);
}

function textSizeZoomed(n) {
    textSize(Math.max(n * boardZoom, 9));
}




//preloads the sound and images
function preload(){
    backgroundSound = loadSound('sounds/Dreams.mp3');
    img.push(loadImage('images/sonic.png'));
    img.push(loadImage('images/tails.jpg'));
    img.push(loadImage('images/amy.png'));
}



function setup(){

    let div = createCanvas(xBoardSizeZoomed, yBoardSizeZoomed);
    div.position(0, 0); // X does nothing with horizontal below
    div.style("border", "5px solid cyan");

    if (redrawLock !== false){
        return;
    }
    //-------------button-----------
    button = createTemplateButton("Play");
    button.style('color', 'black');
    button.style('border', '5px solid cyan');
    button.mousePressed(playMusic);
    //------------------------------

    //Set the amplitude
    amplitude = new p5.Amplitude();

    redrawLock = true;
}




function draw(){
    button.position(203, boardYPos+60*boardZoom);
    switch(musicSwitch){
        case -1:
            setup();
            button.hide();
            backgroundSound.stop();
            button.html("Play");
            volHistory = [];
            break;
        case 0:
            setup();
            button.show();
            button.html("Play");
            break;
        case 1:
            setup();
            visualAudio();
            break;
    }


    fill('orange');
    textSizeZoomed(25);
    // ---Tails singing---
    // I close my eyes and I can see
    // The world that's waiting up for me
    // That I call my own
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 10.8 && backgroundSound.currentTime() < 13.81){
        rect(245, 20, 110, 110);
        textZoomed("I close my eyes and I can see", boardYPos+35.66*boardZoom, 500);
    }
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 13.9 && backgroundSound.currentTime() < 17.22){
        rect(245, 20, 110, 110);
        textZoomed("The world that's waiting up for me", boardYPos+15.66*boardZoom, 500);
    }
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 18.02 && backgroundSound.currentTime() < 20.78){
        rect(245, 20, 110, 110);
        textZoomed("That I call my own", boardYPos+93.66*boardZoom, 500);
    }

    // Through the dark, through the door
    // Through where no one's been before
    // But it feels like home
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 24.29 && backgroundSound.currentTime() < 27){
        rect(245, 20, 110, 110);
        textZoomed("Through the dark, through the door", boardYPos+7.66*boardZoom, 500);
    }
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 27.5 && backgroundSound.currentTime() < 30.3){
        rect(245, 20, 110, 110);
        textZoomed("Through where no one's been before", boardYPos+0.66*boardZoom, 500);
    }
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 31.1 && backgroundSound.currentTime() < 33.9){
        rect(245, 20, 110, 110);
        textZoomed("But it feels like home", boardYPos+82.66*boardZoom, 500);
    }

    // They can say, they can say it all sounds crazy
    // They can say, they can say I've lost my mind
    // I don't care, I don't care, so call me crazy
    // We can live in a world that we design
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 36.7 && backgroundSound.currentTime() < 41.24){
        rect(245, 20, 110, 110);
        textZoomed("They can say, they can say it all sounds crazy", boardYPos-55*boardZoom, 500);
    }
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 43.1 && backgroundSound.currentTime() < 48.02){
        rect(245, 20, 110, 110);
        textZoomed("They can say, they can say I've lost my mind", boardYPos-50*boardZoom, 500);
    }
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 49.6 && backgroundSound.currentTime() < 55.5){
        rect(245, 20, 110, 110);
        textZoomed("I don't care, I don't care, so call me crazy", boardYPos-20*boardZoom, 500);
    }
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 56 && backgroundSound.currentTime() < 61.50){
        rect(245, 20, 110, 110);
        textZoomed("We can live in a world that we design", boardYPos-5*boardZoom, 500);
    }





    // 'Cause every night I lie in bed
    // The brightest colours fill my head
    // A million dreams are keeping me awake
    // I think of what the world could be
    // A vision of the one I see
    // A million dreams is all it's gonna take
    // Oh a million dreams for the world we're gonna make
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 62.3 && backgroundSound.currentTime() < 64.87){
        rect(245, 20, 110, 110);
        textZoomed("'Cause every night I lie in bed", boardYPos+35.66*boardZoom, 500);
    }
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 65.5 && backgroundSound.currentTime() < 68.05){
        rect(245, 20, 110, 110);
        textZoomed("The brightest colours fill my head", boardYPos+15.66*boardZoom, 500);
    }
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 68.63 && backgroundSound.currentTime() < 74.6){
        rect(245, 20, 110, 110);
        textZoomed("A million dreams are keeping me awake", boardYPos-20*boardZoom, 500);
    }
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 75 && backgroundSound.currentTime() < 77.83){
        rect(245, 20, 110, 110);
        textZoomed("I think of what the world could be", boardYPos+20.66*boardZoom, 500);
    }
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 78.39 && backgroundSound.currentTime() < 81.14){
        rect(245, 20, 110, 110);
        textZoomed("A vision of the one I see", boardYPos+63.66*boardZoom, 500);
    }
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 81.58 && backgroundSound.currentTime() < 87.64){
        rect(245, 20, 110, 110);
        textZoomed("A million dreams is all it's gonna take", boardYPos*boardZoom, 500);
    }
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 88.01 && backgroundSound.currentTime() < 91.66){
        rect(245, 20, 110, 110);
        textZoomed("Oh a million dreams for the world we're gonna make", boardYPos-90*boardZoom, 500);
    }


    // There's a house we can build
    // Every room inside is filled
    // With things from far away
    // The special things I compile
    // Each one there to make you smile
    // On a rainy day
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 98.7 && backgroundSound.currentTime() < 101.7){
        rect(245, 20, 110, 110);
        textZoomed("There's a house we can build", boardYPos+38.66*boardZoom, 500);
    }
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 102.10 && backgroundSound.currentTime() < 105.16){
        rect(245, 20, 110, 110);
        textZoomed("Every room inside is filled", boardYPos+55.66*boardZoom, 500);
    }
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 105.92 && backgroundSound.currentTime() < 110.91){
        rect(245, 20, 110, 110);
        textZoomed("With things from far away", boardYPos+57.66*boardZoom, 500);
    }
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 111.7 && backgroundSound.currentTime() < 114.64){
        rect(245, 20, 110, 110);
        textZoomed("The special things I compile", boardYPos+45.66*boardZoom, 500);
    }
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 114.88 && backgroundSound.currentTime() < 118.21){
        rect(245, 20, 110, 110);
        textZoomed("Each one there to make you smile", boardYPos+13.66*boardZoom, 500);
    }
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 118.7 && backgroundSound.currentTime() < 124.01){
        rect(245, 20, 110, 110);
        textZoomed("On a rainy day", boardYPos+115.66*boardZoom, 500);
    }


    // They can say, they can say it all sounds crazy
    // They can say, they can say we've lost our minds
    // I don't care, I don't care if they call us crazy
    // Runaway to a world that we design
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 124.48 && backgroundSound.currentTime() < 129.91){
        rect(245, 20, 110, 110);
        textZoomed("They can say, they can say it all sounds crazy", boardYPos-55*boardZoom, 500);
    }
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 131 && backgroundSound.currentTime() < 136){
        rect(245, 20, 110, 110);
        textZoomed("They can say, they can say we've lost our minds", boardYPos-65*boardZoom, 500);
    }
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 137.23 && backgroundSound.currentTime() < 143){
        rect(245, 20, 110, 110);
        textZoomed("I don't care, I don't care if they call us crazy", boardYPos-40*boardZoom, 500);
    }
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 143.67 && backgroundSound.currentTime() < 149.5){
        rect(245, 20, 110, 110);
        textZoomed("Runaway to a world that we design", boardYPos+10*boardZoom, 500);
    }



    // ---Sonic singing---
    fill('#1c50fc');
    // Every night I lie in bed
    // The brightest colours fill my head
    // A million dreams are keeping me awake
    // I think of what the world could be
    // A vision of the one I see
    // A million dreams is all it's gonna take
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 149.94 && backgroundSound.currentTime() < 152.5){
        rect(45, 20, 110, 110);
        textZoomed("Every night I lie in bed", boardYPos+73.66*boardZoom, 500);
    }
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 153 && backgroundSound.currentTime() < 155.79){
        rect(45, 20, 110, 110);
        textZoomed("The brightest colours fill my head", boardYPos+15.66*boardZoom, 500);
    }
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 156.23 && backgroundSound.currentTime() < 162.2){
        rect(45, 20, 110, 110);
        textZoomed("A million dreams are keeping me awake", boardYPos-20*boardZoom, 500);
    }
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 162.74 && backgroundSound.currentTime() < 165.5){
        rect(45, 20, 110, 110);
        textZoomed("I think of what the world could be", boardYPos+20.66*boardZoom, 500);
    }
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 166.10 && backgroundSound.currentTime() < 168.84){
        rect(45, 20, 110, 110);
        textZoomed("A vision of the one I see", boardYPos+63.66*boardZoom, 500);
    }
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 169.3 && backgroundSound.currentTime() < 175.29){
        rect(45, 20, 110, 110);
        textZoomed("A million dreams is all it's gonna take", boardYPos*boardZoom, 500);
    }
    // Oh a million dreams for the world we're gonna make
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 175.35 && backgroundSound.currentTime() < 179.04){
        rect(45, 20, 110, 110);
        textZoomed("Oh a million dreams for the world we're gonna make", boardYPos-90*boardZoom, 500);
    }






    // ---Amy singing---
    fill('#db12c7');
    // However big, however small
    // Let me be part of it all
    // Share your dreams with me
    // You may be right, you may be wrong
    // But say that you'll bring me along
    // To the world you see

    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 179.79 && backgroundSound.currentTime() < 182.59){
        rect(445, 20, 110, 110);
        textZoomed("However big, however small", boardYPos+46.66*boardZoom, 500);
    }
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 183.16 && backgroundSound.currentTime() < 186.45){
        rect(445, 20, 110, 110);
        textZoomed("Let me be part of it all", boardYPos+76.66*boardZoom, 500);
    }
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 187.05 && backgroundSound.currentTime() < 191.90){
        rect(445, 20, 110, 110);
        textZoomed("Share your dreams with me", boardYPos+50.66*boardZoom, 500);
    }
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 192.70 && backgroundSound.currentTime() < 195.73){
        rect(445, 20, 110, 110);
        textZoomed("You may be right, you may be wrong", boardYPos+1.66*boardZoom, 500);
    }
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 196.15 && backgroundSound.currentTime() < 199.28){
        rect(445, 20, 110, 110);
        textZoomed("But say that you'll bring me along", boardYPos+20.66*boardZoom, 500);
    }
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 199.85 && backgroundSound.currentTime() < 202.79){
        rect(445, 20, 110, 110);
        textZoomed("To the world you see", boardYPos+80.66*boardZoom, 500);
    }




    // ---Sonic and Amy singing---
    // To the world I close my eyes to see
    // I close my eyes to see
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 202.98 && backgroundSound.currentTime() < 207.05){
        // Amy
        fill('#db12c7');
        rect(445, 20, 110, 110);

        // Sonic
        fill('#1c50fc');
        rect(45, 20, 110, 110);


        fill('#9F2B68');
        textZoomed("[Sonic and Amy]", boardYPos+100.66*boardZoom, 450);
        textZoomed("To the world I close my eyes to see", boardYPos+1.66*boardZoom, 500);
    }
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 207.35 && backgroundSound.currentTime() < 213.1){
        // Amy
        fill('#db12c7');
        rect(445, 20, 110, 110);

        // Sonic
        fill('#1c50fc');
        rect(45, 20, 110, 110);
        
        fill('#9F2B68');
        textZoomed("[Sonic and Amy]", boardYPos+100.66*boardZoom, 450);
        textZoomed("I close my eyes to see", boardYPos+73.66*boardZoom, 500);
    }


    // ---Sonic singing---
    fill('#1c50fc');
    // Every night I lie in bed
    // The brightest colours fill my head
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 213.34 && backgroundSound.currentTime() < 215.74){
        rect(45, 20, 110, 110);
        textZoomed("Every night I lie in bed", boardYPos+75.66*boardZoom, 500);
    }
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 216.20 && backgroundSound.currentTime() < 218.96){
        rect(45, 20, 110, 110);
        textZoomed("The brightest colours fill my head", boardYPos+17.66*boardZoom, 500);
    }


    // ---Amy then Sonic singing---
    fill('#db12c7');
    // A million dreams are keeping me awake
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 219.35 && backgroundSound.currentTime() < 225.82){
        rect(445, 20, 110, 110);
        textZoomed("A million dreams are keeping me awake", boardYPos-19*boardZoom, 500);
        
        fill('#1c50fc');
        // A million dreams, a million dreams
        if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 222.1 && backgroundSound.currentTime() < 225.82){
            rect(45, 20, 110, 110);
            textZoomed("A million dreams, a million dreams", boardYPos+15.66*boardZoom, 550);
        }
    }



    // ---Sonic and Amy singing---
    // I think of what the world could be
    // A vision of the one I see
    // A million dreams is all it's gonna take
    // A million dreams for the world we're gonna make (yoo)
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 226 && backgroundSound.currentTime() < 228.65){
        // Amy
        fill('#db12c7');
        rect(445, 20, 110, 110);

        // Sonic
        fill('#1c50fc');
        rect(45, 20, 110, 110);

        fill('#9F2B68');
        textZoomed("[Sonic and Amy]", boardYPos+100.66*boardZoom, 450);
        textZoomed("I think of what the world could be", boardYPos+19.66*boardZoom, 500);
    }
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 229.20 && backgroundSound.currentTime() < 231.99){
        
        // Amy
        fill('#db12c7');
        rect(445, 20, 110, 110);

        // Sonic
        fill('#1c50fc');
        rect(45, 20, 110, 110);

        fill('#9F2B68');
        textZoomed("[Sonic and Amy]", boardYPos+100.66*boardZoom, 450);
        textZoomed("A vision of the one I see", boardYPos+62.66*boardZoom, 500);
    }
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 232.5 && backgroundSound.currentTime() < 238.36){
        
        // Amy
        fill('#db12c7');
        rect(445, 20, 110, 110);

        // Sonic
        fill('#1c50fc');
        rect(45, 20, 110, 110);

        fill('#9F2B68');
        textZoomed("[Sonic and Amy]", boardYPos+100.66*boardZoom, 450);
        textZoomed("A million dreams is all it's gonna take", boardYPos-5*boardZoom, 500);
    }
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 238.83 && backgroundSound.currentTime() < 248.64){
        
        // Amy
        fill('#db12c7');
        rect(445, 20, 110, 110);

        // Sonic
        fill('#1c50fc');
        rect(45, 20, 110, 110);

        fill('#9F2B68');
        textZoomed("[Sonic and Amy]", boardYPos+100.66*boardZoom, 450);
        textZoomed("A million dreams for the world we're gonna make", boardYPos-68*boardZoom, 500);
    }


    // For the world we're gonna make
    fill('white');
    if (backgroundSound.isPlaying() && backgroundSound.currentTime() >= 249.9 && backgroundSound.currentTime() < 254.96){
        textZoomed("[All]", boardYPos+173.66*boardZoom, 450);
        textZoomed("For the world we're gonna make", boardYPos+20*boardZoom, 500);

        // Amy
        fill('#db12c7');
        rect(445, 20, 110, 110);

        // Tails
        fill('orange');
        rect(245, 20, 110, 110);

        // Sonic
        fill('#1c50fc');
        rect(45, 20, 110, 110);
    }


    //Loop
    if (!backgroundSound.isPlaying() && musicSwitch === 1){
        backgroundSound.stop();
        backgroundSound.play();
    }

    //set up images
    //rect(45, 20, 110, 110);
    image(img[0], 50, 25, 100, 100);

    //rect(245, 20, 110, 110);
    image(img[1], 250, 25, 100, 100);

    //rect(445, 20, 110, 110);
    image(img[2], 450, 25, 100, 100);


    //debugging purposes for the sound to keep track of its timeframe
    //console.log(backgroundSound.currentTime());
}

//Refresh everything
function windowResized() {
    setup();
}

function playMusic(){
    if (!backgroundSound.isPlaying()){
        backgroundSound.play();
        button.html("Pause");
        //console.log("Now playing");
        musicSwitch = 1;
    }else{
        backgroundSound.pause();
        button.html("Play");
        //console.log("Now Stopped");
        musicSwitch = 0;
    }
}

//Show the audio
function visualAudio(){
    let vol = amplitude.getLevel();
  
    volHistory.push(vol);
  
    if(volHistory.length > xBoardSizeZoomed*1) volHistory.splice(0,1); //width map
  
    stroke('cyan');
    noFill();
    beginShape();
    for(let i=0; i<volHistory.length; i++) {
        let y = map(volHistory[i], 0, 1, yBoardSizeZoomed/2, 0); //position map
        vertex(i, y);
    }
    endShape();
  
    stroke(11, 37, 52);
    line(volHistory.length, 0, volHistory.length, yBoardSizeZoomed);
}
