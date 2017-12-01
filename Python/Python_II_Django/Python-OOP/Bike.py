#OOP - define the Bike class
class Bike(object):
    def __init__(self, price,max_speed):
        self.price=price
        self.max_speed=max_speed
        self.miles=0
    
    def displayInfo(self):
        print 'Price is: $' + str(self.price)
        print 'Max speed: ' + str(self.max_speed) + 'mph'
        print 'Total miles: ' + str(self.miles) + ' miles'
    
    def ride(self):
        print "Driving"
        self.miles+=10

    def reverse(self):
        print 'Reversing'
        # prevent negative miles
        if self.miles >= 5:
            self.miles -= 5

# create instances and run methods
bike1 = Bike(80.00, 15)
bike1.ride()
bike1.ride()
bike1.ride()
bike1.reverse()
bike1.displayInfo()

bike2=Bike(50.00, 35)
bike2.ride()
bike2.ride()
bike2.reverse()
bike2.reverse()
bike2.displayInfo()