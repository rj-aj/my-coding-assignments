var students = [ 
    {first_name:  'Michael', last_name : 'Jordan'},
    {first_name : 'John', last_name : 'Rosales'},
    {first_name : 'Mark', last_name : 'Guillen'},
    {first_name : 'KB', last_name : 'Tonel'}
];


function studentName_Print(students){
for (var i = 0; i<=students.length; i++ ){
    
    
    console.log( (i+1) + " - " + students[i].first_name + "  " + students[i].last_name);
}
}

studentName_Print(students);


/*Create a program that outputs:

Michael Jordan
John Rosales
Mark Guillen
KB Tonel
Part II (Optional)

Now, given the following dictionary:

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
Create a program that prints  the following format (including the number of characters in each combined name):

Students
1 - MICHAEL JORDAN - 13
2 - JOHN ROSALES - 11
3 - MARK GUILLEN - 11
4 - KB TONEL - 7
Instructors
1 - MICHAEL CHOI - 11
2 - MARTIN PURYEAR - 13
*/