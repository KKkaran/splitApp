from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_restx import Resource, fields, Api
#from flask_cors import CORS
app = Flask(__name__)

#CORS(app, resources={r"*": {"origins": "*"}})
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
    description = db.Column(db.String(50))
    price = db.Column(db.Float)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = db.relationship(
        'User', backref=db.backref('user', lazy=True))


##############  serializers  ####################
user_serializer = api.model('Model', {
    'id': fields.Integer(readOnly=True, description='The unique identifier of user'),
    'name': fields.String(required=True, description='The name of user'),
    'email': fields.String(required=True, description='The email address of user'),
    'date_joined': fields.Date(required=True, description='The date when user joined')
})

purchase_serializer = api.model('Model', {
    'id': fields.Integer(readOnly=True, description='The unique identifier of a purchase'),
    'description': fields.String(required=True, description='The details of a purchase'),
    'price': fields.Integer(required=True, description='The price of a purchase'),
    'user_id': fields.Integer(required=True, description='The unique identifier of a purchaser'),
})

##############  ROUTES  ##################
@app.route("/home")
def home():
    return "Karan Singh Sodhi"

#route for the list of users
@api.route('/users')
class Users(Resource):
    @api.marshal_with(user_serializer, envelope='resource')
    def get(self):
        return User.query.all()

#route for the list of purchases
@api.route('/purchases')
class Purchases(Resource):
    @api.marshal_with(purchase_serializer, envelope='resource')
    def get(self):
        return Purchase.query.all()
