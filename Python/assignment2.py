# Multiples 

for i in range(0,1000+1) :
    if(i%2!=0) :
        print i # Part 1 : prints all the odd numbers from 1 to 1000. use for loop

#Part II - Create another program that prints all the multiples of 5 from 5 to 1,000,000.
for i in range(5, 100000+1) :
        if(i%5==0) :
                print i

#Sum List
# print the sum of all the values in the list: a = [1, 2, 5, 10, 255, 3]
num = [1, 2, 5, 10, 255, 3]
total = 0
for i in num:
    total += i
    print total

#Average List
#Create a program that prints the average of the values in the list: a = [1, 2, 5, 10, 255, 3]
numList = [1, 2, 5, 10, 255, 3]
sum = 0
numOfnum = len(numList)
print numOfnum
for i in numList:
    sum+= i

print sum
average = sum/numOfnum
print "average", average
word = "Python"
print[:2]

my_dict = {
    'key1': 'value1',
    'key2': 'value2',
    'key3': 'value3'
    }
for item in my_dict:
    print item

for key, value in my_dict.iteritems():
    print key, value