var users = {
    'Students': [ 
        {first_name:  'Michael', last_name : 'Jordan'},
        {first_name : 'John', last_name : 'Rosales'},
        {first_name : 'Mark', last_name : 'Guillen'},
        {first_name : 'KB', last_name : 'Tonel'}
     ],
    'Instructors': [
        {first_name : 'Michael', last_name : 'Choi'},
        {first_name : 'Martin', last_name : 'Puryear'}
     ]
    }

function studentName_Print(students) {
for (var i = 0; i <= students.length; i++) {


    console.log((i + 1) + " - " + students[i].first_name + "  " + students[i].last_name);
}
}

studentName_Print(students);

