class Animal(object):
    def __init__(self,name, health=100):
        self.name=name
        self.health=health
    def walk(self):
        self.health -=1
        return self
    def run(self):
        self.health -=5
        return self
    def Displayinfo(self):
        print 'Name: ', self.name
        print 'Health: '+ str(self.health) + 'pts'
   

class Dog(Animal):
    def __init__ (self, name):
        super(Dog, self).__init__(name,150)
    def pet(self):
        self.health +=5
        return self

class Dragon(Animal):
    def __init__(self,name):
        super(Dragon, self).__init__(name,170)
    def fly(self):
        self.health +=10
        return self
    def Displayinfo(self):
        print"I am Dragon"
        super(Dragon, self).Displayinfo()

class newAnimal(Animal):
    def __init__(self,name):
        super(newAnimal,self).__init__(name)

animal1 = newAnimal("Molly")
animal1.run().walk().Displayinfo()
animal1.fly().Displayinfo()
animal1.pet().Displayinfo()

dragon=Dragon("Fiery")
dragon.walk().walk().walk().run().run().fly().Displayinfo()
#dragon.pet()

doggy = Dog("Bruno")
doggy.walk().walk().walk().run().run().pet().Displayinfo()
#doggy.fly()

animal=Animal("Chipmunk")
animal.walk().walk().walk().run().run().Displayinfo()


