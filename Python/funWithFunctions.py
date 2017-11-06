"""
Assignment: Fun with Functions
Create a series of functions based on the below descriptions.

Odd/Even:
Create a function called odd_even that counts from 1 to 2000. 
As your loop executes have your program print the number of that iteration 
and specify whether it's an odd or even number.

Your program output should look like below:

Number is 1.  This is an odd number.
Number is 2.  This is an even number.
Number is 3.  This is an odd number.
...
Number is 2000.  This is an even number.
"""
def odd_even():
    for number in range(1, 2001):
        if ((number%2)!=0):
            print "Number is", number,"."," ", "This is  odd number"
        else:
            print "Number is", number,"."," ", "This is even number"

odd_even()

"""
Multiply:
Create a function called 'multiply' that iterates through each value in a list
(e.g. a = [2, 4, 10, 16]) and returns a list where each value has been multiplied by 5.

The function should multiply each value in the list by the second argument. For example, let's say:
a = [2,4,10,16]
Then:
b = multiply(a, 5)
print b
Should print [10, 20, 50, 80 ].
"""
"""
Hacker Challenge:
Write a function that takes the multiply function call as an argument. 
Your new function should return the multiplied list as a two-dimensional list. 
Each internal list should contain the 1's times the number in the original list.
"""

def multiply(my_list, multiple):
    new_list=[]
    for i in my_list:
        new_list.append(i*multiple)
    return new_list

arr1=[10, 20, 50, 80 ]
arr2=multiply(arr1, 5)
print "New List : ", arr2

def layered_multiples(arr):
    print arr
    new_array = []
    for num in arr:
        temp_arr = []
        for index in range(0,num):
            temp_arr.append(1)
        new_array.append(temp_arr)
    return new_array

new_arr = layered_multiples(multiply([2,4,5],3))
print new_arr
