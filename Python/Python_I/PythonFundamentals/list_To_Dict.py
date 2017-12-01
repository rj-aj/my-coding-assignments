def make_dict(list1, list2):
    new_dict = {}
    longer_list=[]
    shorter_list=[]
    if len(list1) > len(list2):
         longer_list = list1
         shorter_list = list2
    elif len(list1) < len(list2):
        longer_list = list2
        shorter_list = list1
    else:
        longer_list = list1
        shorter_list = list2
        
    new_dict= zip(longer_list,shorter_list)
    return new_dict
# dictionary = zip(key, values)
 
    # for i in range(0, len(list1)):
    #     the_dict[list1[i]] = list2[i]
    # return the_dict

name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"]
favorite_animal = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas"]

new_dict = make_dict(name,favorite_animal)
print(new_dict)