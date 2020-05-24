var msgList = new Array();
var timeList = new Array();
var xPos = new Array();
var yPos = new Array();
var dir = new Array();


var msgText = new Array();
var msgTime = new Array();


var hue;
var saturation;
var balance;

var timeSinceStart = 0;

function setup() {
	
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');

  hue = 306;
  saturation = 10;
  balance = 100;

  colorMode(HSB);
	background(hue, saturation, balance);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  colorMode(HSB);
	background(hue, saturation, balance);
}

function draw() {
	timeSinceStart += deltaTime/1000;

	hue = (timeSinceStart / 8) + 306;
	saturation = (timeSinceStart/2) + 10;

	if(hue > 323) {
		hue = 323;
	}

	if(saturation > 100) {
		saturation = 100;
	}

  colorMode(HSB);
	background(hue, saturation, balance);

	// birds
	for (var i = 0; i < msgList.length; i++) {
		fill(204);
		xPos[i] += dir[i];
		
		if (
	    mouseX > xPos[i] - 20 &&
	    mouseX < xPos[i] + 20 &&
	    mouseY > yPos[i] - 20 &&
	    mouseY < yPos[i] + 20
	  ) {
	    // mouse is over bird
	  	//convert to msg
	  	msgText.push(msgList[i]);
	  	msgTime.push(0);
	  	clearBird(i);
	  } 

	  // Draw the bird
	  ellipse(xPos[i],yPos[i],20,20);

    timeList[i] += deltaTime/1000;
    if(timeList[i] > 10.0) {    	
			clearBird(i);
		}
	}

	// messages
	var textYPos = 22;
	for (var j = 0; j < msgText.length; j++) {
		textSize(30);
		text(msgText[j], 0, textYPos);
		textYPos += 22;

		msgTime[j] += deltaTime/1000;
    if(msgTime[j] > 15.0) {    	
			clearMsg(j);
		}
	}
}

function clearBird(index) {
	msgList.splice(index,1);
	timeList.splice(index,1);
	xPos.splice(index,1);
	yPos.splice(index,1);
	dir.splice(index,1);
}

function clearMsg(index) {
	msgText.splice(index,1);
	msgTime.splice(index,1);
}
