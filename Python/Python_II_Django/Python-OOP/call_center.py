class Call(object):
    	def __init__(self, id, name, phone, time, reason):
		self.id = id
		self.name = name
		self.number = phone
		self.time = time
		self.reason = reason
        
        def display_all(self):
		    print "ID: ", str(self.id)
		    print "Name: ", self.name
		    print "Number: ", str(self.number)
		    print "Time:", str(self.time)
		    print "Reason: ", self.reason

class CallCenter(object):
    def __init__(self):
        self.calls = []
    def queue_size(self):
        len(self.calls)
    def add(self,call):
        self.calls.append(call)
        self.queue_size += 1
        return self
    def remove(self):
        del self.calls[0]
        self.queue_size -= 1
        return self
    def info(self):
        for call in self.calls:
            print "Caller Name: ", call.name
            print "Phone No.: " , call.number
            print "In Queue: ", self.queue_size

callcenter = CallCenter()
callcenter.add(Call(1, "Anne", "309-709-109", "4:00", "Doc.Appt."))
callcenter.add(Call(2,"Mary","309-709-200","5:00", "Meeting"))
callcenter.info()