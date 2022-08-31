import email
from app import db, User, Purchase

db.drop_all()
db.create_all()

user1 = User(name="Karan Sodhi",email="karanpreetsodhi1997@gmail.com")
user2 = User(name="Tim Hortons",email="tim@gmail.com")
user3 = User(name="Vic Demin", email="vic123@gmail.com")

purch1 = Purchase(description="Eggs and Milk",price=25.50, user_id=2)
purch2 = Purchase(description="Toilet Paper",price=25.50, user_id=1)
purch3 = Purchase(description="Jet for toilet",price=25.50, user_id=3)
purch4 = Purchase(description="Cheese Moo",price=25.50, user_id=1)

db.session.add(user1)
db.session.add(user2)
db.session.add(user3)

db.session.add(purch1)
db.session.add(purch2)
db.session.add(purch3)
db.session.add(purch4)

db.session.commit()
