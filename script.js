const element = document.getElementById("message");
 alert("running interval ")

 setInterval(function() {element.innerHTML += "Hello"}, 5000);
let tp2=0;
let counter=0; 

intervalhandler2=setInterval(drawnextrow, 250);



// Initialize canvas
  var canvas = new fabric.Canvas('canvas');
var canvas2 = new fabric.Canvas('canvasdynamic');

  let numofcol=30;
  let numofrow=20;
  let gap=15; 
  let tp=50;
  let lp=0; 
  let color = 'green';
  let color2='red';
  let size=10;

  for (let row=0; row<numofrow; row++)
  {
    tp = tp + gap; 

  for (let col = 0; col < numofcol; col++) {


    // Create a rectangle object
    var rect = new fabric.Rect({
      'left': lp + col *gap, // Distance from left of canvas
      'top': tp, // Distance from top of canvas

      fill: color,
      width: size,
      height:size
    });

    canvas.add(rect);

  }
  }


function drawnextrow()
{
  counter++;
  if (counter >20) clearInterval(intervalhandler2);

  tp2= counter*gap;

for (let col = 0; col < numofcol; col++) {


  // Create a rectangle object
  var rect = new fabric.Rect({
    'left': lp + col *gap, // Distance from left of canvas
    'top': tp2, // Distance from top of canvas

    fill: color2,
    width: size,
    height:size
  });

  // Add the rectangle to the canvas
  canvas2.add(rect);

}
}
