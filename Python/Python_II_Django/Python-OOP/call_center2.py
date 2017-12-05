class Call(object):
    	def __init__(self, id, name, phone, time, reason):
		    self.id = id
		    self.name = name
		    self.number = phone
		    self.time = time
		    self.reason = reason
        def display(self):
            print "Call {}: Name: {}, Number: {}, Time: {}, Reason: {}".format(self.id, self.name, self.number, self.time, self.reason)

class CallCenter(object):
        def __init__(self):
            self.calls = []
        def get_queue_size(self):
            return len(self.calls)
        def add(self, call):
            self.calls.append(call)
            return self
        def remove(self):
            del self.calls[0]
            self.get_queue_size()
            return self
        def info(self):
            for call in self.calls:
                call.display()
            print "Queue =", self.get_queue_size()
        def remove_number(self,ph_number):
            for x in range(0,len(self.calls)):
                if self.calls[x].number == ph_number:
                    print "Deleting Number:", ph_number
                    del self.calls[x]
                    self.get_queue_size()
                    return self
                else:
                    print"Number {} not found".format(ph_number)
            return self    

       
callcenter = CallCenter()
callcenter.add(Call(1, "Anne", "309-709-1091", "4:00", "Doc.Appt."))
callcenter.add(Call(2, "Mary", "309-708-1001", "5:00", "Meeting"))
callcenter.info()
callcenter.remove_number("309-908-1002")
callcenter.info()