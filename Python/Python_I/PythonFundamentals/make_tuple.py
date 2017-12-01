#Write a function that takes in a dictionary and returns a list of tuples 
# where the first tuple item is the key and the second is the value. 
# Here's an example:# function input
# my_dict = {
#   "Speros": "(555) 555-5555",
#   "Michael": "(999) 999-9999",
#   "Jay": "(777) 777-7777"
# }
# #function output
# [("Speros", "(555) 555-5555"), ("Michael", "(999) 999-9999"), ("Jay", "(777) 777-7777")]

def tuple_print(dict_info) :
    new_lst = []
    for some_key, some_value in dict_info.iteritems():
        new_lst.append((some_key,some_value))
    
    return new_lst

dict_info = {
  "Speros": "(555) 555-5555",
  "Michael": "(999) 999-9999",
  "Jay": "(777) 777-7777"
}

new_lst = tuple_print(dict_info)
print new_lst
        
