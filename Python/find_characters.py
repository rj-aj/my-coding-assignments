"""
Write a program that takes a list of strings 
and a string containing a single character, 
and prints a new list of all the strings containing that character.

Here's an example:
# input
word_list = ['hello','world','my','name','is','Anna']
char = 'o'
# output
new_list = ['hello','world']
"""
def find_char(word_list,character):
    new_lst=[]
    
    index = 0
    while index < len(word_list):
        temp_str= word_list[index]
        split_str= temp_str
        for item in split_str:
            if (item == char):
                new_lst.append(temp_str)
        index += 1


word_list = ['hello','world','my','name','is','Anna']
char ='o'
find_char(word_list, char)
print "new_list = ", new_lst
