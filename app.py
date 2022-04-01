from json.tool import main
from flask import Flask, url_for, render_template
import json


app = Flask(__name__)



@app.route("/")
def index():
    return render_template("index.html")

@app.route("/wordl")
def wordl():
    return render_template("wordl.html")
    
    
    
if __name__ == '__main__':
    app.run()
    