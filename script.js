
const canvas = new fabric.Canvas('canvas');

// Add Printer
function addPrinter() {
    fabric.Image.fromURL('printer.png', function(img) {
        img.scale(0.5);
        canvas.add(img);
    });
}

// Add Server
function addServer() {
    fabric.Image.fromURL('server.png', function(img) {
        img.scale(0.5);
        canvas.add(img);
    });
}

// Add Router
function addRouter() {
    fabric.Image.fromURL('router.png', function(img) {
        img.scale(0.5);
        canvas.add(img);
    });
}

// Add Text
function addText() {
    const text = new fabric.Textbox('Enter text here', {
        left: 100,
        top: 100,
        width: 200,
        fontSize: 20
    });
    canvas.add(text);
}

// Add One Direction Arrow
function addOneDirectionArrow() {
    const arrow = new fabric.Path('M 0 0 L 100 0 L 90 -10 M 100 0 L 90 10', {
        fill: '',
        stroke: 'black',
        strokeWidth: 2,
        left: 100,
        top: 100
    });
    canvas.add(arrow);
}

// Add Two Direction Arrow
function addTwoDirectionArrow() {
    const arrow = new fabric.Path('M 0 0 L 100 0 L 90 -10 M 100 0 L 90 10 M 0 0 L 10 -10 M 0 0 L 10 10', {
        fill: '',
        stroke: 'black',
        strokeWidth: 2,
        left: 100,
        top: 100
    });
    canvas.add(arrow);
}

// Delete Selected Object
function deleteSelected() {
    const activeObject = canvas.getActiveObject();
    if (activeObject) {
        canvas.remove(activeObject);
    }
}

// Upload Image
function uploadImage(event) {
    const reader = new FileReader();
    reader.onload = function(event) {
        const imgObj = new Image();
        imgObj.src = event.target.result;
        imgObj.onload = function() {
            const img = new fabric.Image(imgObj);
            img.scale(0.5);
            canvas.add(img);
        }
    }
    reader.readAsDataURL(event.target.files[0]);
}

// Export Canvas as PNG
function exportCanvas() {
    const dataURL = canvas.toDataURL({
        format: 'png',
        quality: 1.0
    });
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'canvas.png';
    link.click();
}
