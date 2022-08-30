from flask import Flask
#from flask_restx import Resource, fields, Api

app = Flask(__name__)
#api = Api(app)

@app.route("/")
def home():
    return "Karan Singh Sodhi"
