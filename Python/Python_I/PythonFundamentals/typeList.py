""" Write a program that takes a list and prints a message 
for each element in the list, based on that element's data type.

1. Your program input will always be a list. 
 2. For each item in the list, test its data type. 
3. If the item is a string, concatenate it onto a new string. 
4. If it is a number, add it to a running sum. 
5. At the end of your program print the string,
    the number and an analysis of what the list contains. 
    If it contains only one type, 
    print that type, otherwise, print 'mixed'.

#input
l = ['magical unicorns',19,'hello',98.98,'world']
#output
"The list you entered is of mixed type"
"String: magical unicorns hello world"
"Sum: 117.98"
"""

def print_lst_type(my_list):
    myStr = ''
    sum = 0
    for item in my_list:
        if (isinstance(item, int) or isinstance(item, float)):
            sum += item
        elif isinstance(item, str):
            myStr += item
    if sum and myStr:
        print "The list you entered is of mixed type"
        print "String:", myStr
        print "Sum:", sum
    elif myStr:
        print "The list you entered is of string type"
        print "String:", myStr
    else:
        print "The list you entered is of number type"
        print "Sum", sum

print_lst_type(['magical unicorns',19,'hello',98.98,'world'])
    
  
        