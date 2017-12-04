class Product(object):
    def __init__(self, price, item_name, weight, brand):
        self.price=price
        self.item_name=item_name
        self.weight=weight
        self.brand=brand
        self.status="for sale" 
    
    def sell(self):
        self.status="sold"
        return self
    
    def add_tax(self, tax_amt):
        self.price+=tax_amt
        return self.price

    def return_item(self, reason):
        if reason == "defective":
            self.status="defective"
            self.price=0
        elif reason == "new":
            self.status = "for Sale"
        elif reason == "opened":
            self.status = "used"
            self.price *= 0.80
        return self
        
    def display_info(self):
        print 'Price : $', self.price
        print 'Item Name: $', self.item_name
        print 'Weight:', self.weight
        print 'Brand', self.brand
        print 'Status', self.status
        return self

product1 =  Product(45, "sport_shoes", "3lbs", "Nike")
product2 =  Product(35, "walking_shoes", "2lbs", "puma")

product1.display_info()
product1.add_tax(0.8)
product1.return_item("opened").display_info()
        
        
    
def subtract(self, *nums):
        subtract_total = 0
        for i in range(len(nums)):
            if type(nums[i]) == list or type(nums[i]) == tuple:
                mini_sum = sum(nums[i])
                subtract_total -= mini_sum
			else:
                subtract_total -= (nums[i])
        self.total += subtract_total
        return self

    def result(self):
        print self.total

md = MathDojo()
md.add(2).add(2,5).subtract(3,2).result()

md = MathDojo()
md.add([1], 3,4).add([3,5,7,8], [2,4.3,1.25]).subtract(2, [2,3], [1.1,2.3]).result()
