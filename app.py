
from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route('/')
def index():
    return send_from_directory('', 'index.html')

@app.route('/styles.css')
def styles():
    return send_from_directory('', 'styles.css')

@app.route('/script.js')
def script():
    return send_from_directory('', 'script.js')

@app.route('/printer.png')
def printer():
    return send_from_directory('', 'printer.png')

@app.route('/server.png')
def server():
    return send_from_directory('', 'server.png')

@app.route('/router.png')
def router():
    return send_from_directory('', 'router.png')

if __name__ == '__main__':
    app.run(debug=True)
