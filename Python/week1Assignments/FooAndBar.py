Optional Assignment: Foo and Bar
Write a program that prints all the prime numbers 
and all the perfect squares for all numbers between 100 and 100000.

For all numbers between 100 and 100000 test that number for 
whether it is prime or a perfect square. 
If it is a prime number print "Foo". 
If it is a perfect square print "Bar". 
If it is neither print "FooBar". 
Do not use the python math library for this exercise. 
For example, if the number you are evaluating is 25, 
you will have to figure out if it is a perfect square. It is, so print "Bar".

This assignment is extra challenging! 
Try pair programming and pulling up a white board.
for n in range(1, 100):
    for x in range(2, n):
        if n % x == 0:
            print(n, 'equals', x, '*', n//x)
            if()
            break
    else:
        # loop fell through without finding a factor
        print(n, 'is a prime number')
        print "Foo"