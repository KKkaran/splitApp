from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_restx import Resource, fields, Api

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False    

api = Api(app)
db = SQLAlchemy(app)

##############  MODELS  ###################
class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    email = db.Column(db.String(100), unique=True)
    date_joined = db.Column(db.Date, default=datetime.utcnow)

    def __repr__(self):
        return f'<User:{self.email}>'

class Purchase(db.Model):
    __tablename__ = 'purchase'
    id = db.Column(db.Integer, primary_key=True)
    description
    price
    user


##############  serializers  ####################
user_serializer = api.model('Model', {
    'id': fields.Integer(readOnly=True, description='The unique identifier of user'),
    'name': fields.String(required=True, description='The name of user'),
    'email': fields.String(required=True, description='The email address of user'),
    'date_joined': fields.Date(required=True, description='The date when user joined')
})

##############  ROUTES  ##################
@app.route("/home")
def home():
    return "Karan Singh Sodhi"

@api.route('/users')
class Users(Resource):
    @api.marshal_with(user_serializer, envelope='resource')
    def get(self):
        return User.query.all()
