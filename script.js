
const canvas = new fabric.Canvas('canvas', {
    width: 800,
    height: 600,
    backgroundColor: '#fff'
});

function addPrinter() {
    fabric.Image.fromURL('printer.png', function(img) {
        img.set({
            left: 100,
            top: 100,
            scaleX: 0.5,
            scaleY: 0.5
        });
        canvas.add(img);
    });
}

function addServer() {
    fabric.Image.fromURL('server.png', function(img) {
        img.set({
            left: 200,
            top: 100,
            scaleX: 0.5,
            scaleY: 0.5
        });
        canvas.add(img);
    });
}

function addRouter() {
    fabric.Image.fromURL('router.png', function(img) {
        img.set({
            left: 300,
            top: 100,
            scaleX: 0.5,
            scaleY: 0.5
        });
        canvas.add(img);
    });
}

function addText() {
    const text = new fabric.IText('Enter text here', {
        left: 100,
        top: 200,
        fontSize: 20
    });
    canvas.add(text);
}

function uploadImage(event) {
    const reader = new FileReader();
    reader.onload = function(event) {
        const imgObj = new Image();
        imgObj.src = event.target.result;
        imgObj.onload = function() {
            const img = new fabric.Image(imgObj);
            img.set({
                left: 100,
                top: 300,
                scaleX: 0.5,
                scaleY: 0.5
            });
            canvas.add(img);
        }
    }
    reader.readAsDataURL(event.target.files[0]);
}

function exportCanvas() {
    const dataURL = canvas.toDataURL({
        format: 'png',
        quality: 1
    });
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'canvas.png';
    link.click();
}
