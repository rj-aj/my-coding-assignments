#Integer
#If the integer is greater than or equal to 100, print "That's a big number!" 
#If the integer is less than 100, print "That's a small number"
def filterNum(num):
    if(num >= 100):
        print "That's a big number!"
    elif (num < 100):
        print "That's a small number"

filterNum(55)

#String
#If the string is greater than or equal to 50 characters print "Long sentence." 
# If the string is shorter than 50 characters print "Short sentence."

str = 'If the string is greater than or equal to 50 characters'
if (len(str) >= 50):
    print "Long sentence"
elif (len(str) < 50):
    print "Short sentence"

#List
#If the length of the list is greater than or equal to 10 print "Big list!" 
# If the list has fewer than 10 values print "Short list."
my_list=[1,2,3,4,5,6,"hello","worls","RJ",7,8,9,10]
if (len(my_list) >= 10):
    print "Big List !"
elif (len(my_list < 10)):
    print "Short list."
