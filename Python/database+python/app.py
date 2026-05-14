from sqlalchemy.orm import sessionmaker
from models import User,engine

Session=sessionmaker(bind=engine)

session=Session()

# user=User(name='Catalin',age=18)
# user2=User(name='Mihaela',age=18)
# user3=User(name='Ion',age=18)
# user4=User(name='Calin',age=18)
# session.add_all([user2,user3,user4])

# session.commit()

# users=session.query(User).all()

# user=users[4]
# print(user)
# print(user.name)
# print(user.id)
# print(user.age)

# for user in users:
#     print(f'User id:{user.id} name:{user.name} age:{user.age}')

# users=session.query(User).filter_by(id=1).all()
users=session.query(User).filter_by(id=4).one_or_none()
print('id:',users.id)
print('age:',users.age)
print('name:',users.name)