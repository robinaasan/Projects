from json.tool import main
from flask import Flask 
import json


app = Flask(__name__)



@app.route("/")
def index():
    return app.send_static_file("index.html")
    
    
if __name__ == '__main__':
    app.run()
    