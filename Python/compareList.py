#Assignment: Compare Lists
#Write a program that compares two lists and 
# prints a message depending on if the inputs are identical or not.

#Your program should be able to accept and compare two lists: 
# list_one and list_two. 
# If both lists are identical print "The lists are the same".
#  If they are not identical print "The lists are not the same." 

def compare_lst(my_lst_1, my_lst_2):
    if (my_lst_1 == my_lst_2 ):
        print "The lists are the same"
    else:
        print "The list are not the same"



list_one = [1,2,5,6,2]
list_two = [1,2,5,6,2]
compare_lst(list_one, list_two)

list_one = [1,2,5,6,5]
list_two = [1,2,5,6,5,3]
compare_lst(list_one, list_two)

list_one = [1,2,5,6,5,16]
list_two = [1,2,5,6,5]
compare_lst(list_one, list_two)

list_one = ['celery','carrots','bread','milk']
list_two = ['celery','carrots','bread','cream']
compare_lst(list_one, list_two)    
    