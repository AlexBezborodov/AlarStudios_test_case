const body = document.querySelector('body'),
      wrapper = document.createElement('div'),
      mainCanvas = document.createElement('canvas'),
      smallCanvas = document.createElement('canvas'),
      ct1 = mainCanvas.getContext('2d');  //big Canvas
      ct2 = smallCanvas.getContext('2d'); //small Canvas

function AddWrapper() {
    body.style.cssText = 'display:flex; justify-content: center;';
    CreateBigCanvas();   
    CreateSmallCanvas();
    wrapper.append(mainCanvas);
    wrapper.append(smallCanvas);
    wrapper.style.cssText = "width: 600px;";
    body.append(wrapper);
    
}  
function CreateBigCanvas() {
            
    mainCanvas.width = 600;
    mainCanvas.height = 600;
    mainCanvas.style.border = 'black 2px solid';
    DrowCanvasElement(75,100,5,15,30,'red');
    DrowCanvasElement(525,100,5,15,30,'blue');
    DrowCanvasElement(300,300,5,15,30,'green');
    DrowCanvasElement(100,525,5,15,30,'yellow');
    DrowCanvasElement(525,525,5,15,30,'black');
            
        
}

function CreateSmallCanvas() {
            
    smallCanvas.width = 600;
    smallCanvas.height = 50;
    smallCanvas.style.border = 'black 2px solid';
    
}

function DrowCanvasElement(cx, cy, spikes, outerRadius, innerRadius, color) {

    let rot = Math.PI/2*3,
        x = cx,
        y = cy,
        step = Math.PI/spikes;

        ct1.beginPath();
        ct1.moveTo(cx, cy - outerRadius);
        for (i = 0; i < spikes; i++) {
            x = cx + Math.cos(rot) * outerRadius;
            y = cy + Math.sin(rot) * outerRadius;
            ct1.lineTo(x, y);
            rot += step;

            x = cx + Math.cos(rot) * innerRadius;
            y = cy + Math.sin(rot) * innerRadius;
            ct1.lineTo(x, y);
            rot += step;

        }

        ct1.lineTo(cx, cy - outerRadius)
        ct1.closePath();
        ct1.fillStyle = `${color}`;
        ct1.fill();
    // ct1.fillStyle = 'red';
    // ct1.fillRect(10, 10, 100, 100);
    // ct1.fillStyle = 'blue';
    // ct1.fillRect(300, 300, 190, 190);

}

AddWrapper();

const getPixelColor = e => {

    let x = e.offsetX || e.originalEvent.layerX || e.layerX,
        y = e.offsetY || e.originalEvent.layerY || e.layerY,
        pixel = ct1.getImageData(x, y, 1, 1);
        smallCanvasFill(pixel);


};

mainCanvas.addEventListener('click', getPixelColor);

function smallCanvasFill(pixel) {

    smallCanvas.style.backgroundColor = `rgba(${pixel.data[0]}, ${pixel.data[1]}, ${pixel.data[2]}, ${pixel.data[3]})`;
    
}
    
