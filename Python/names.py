users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }

num=0
print 'Students'
for item in users['Students']:
  num+=1
  name_len= ((len(item['first_name'])) + (len(item['last_name'])))
  print num, item['first_name'], item['last_name'], name_len

number=0
print 'Instructors'
for item in users['Instructors']:
  number+=1
  name_len= ((len(item['first_name'])) + (len(item['last_name'])))
  print number, item['first_name'], item['last_name'], name_len