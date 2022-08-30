import email
from app import db, User

db.create_all()

user1 = User(name="Karan Sodhi",email="karanpreetsodhi1997@gmail.com")
user2 = User(name="Tim Hortons",email="tim@gmail.com")
user3 = User(name="Vic Demin", email="vic123@gmail.com")

db.session.add(user1)
db.session.add(user2)
db.session.add(user3)

db.session.commit()
