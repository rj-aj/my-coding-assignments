import random

def coin_toss(rounds):
    attempt_count = 1
    head_count = 0
    tail_count = 0
    result = ""
    for i in range(1, rounds):
        toss = random.randint(0, 1)
        if toss == 1:
            head_count += 1
            result = "head"
            print "Attempt #", attempt_count, ": Throwing a coin... It's a ", result, "! Got ", head_count, "head(s) so far and", tail_count, "tail(s) so far"
        else:
            tail_count += 1
            result = "tail"
            print "Attempt #", attempt_count, ": Throwing a coin... It's a ", result, "! Got ", head_count, "head(s) so far and", tail_count, "tail(s) so far"
        attempt_count += 1
        "Ending the program, thank you!"


coin_toss(5001)
