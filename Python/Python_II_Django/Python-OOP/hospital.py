class Patient(object):
    patient_id = 0
    def __init__(self,name, allergies):
        self.id = Patient.patient_id
        self.allergies = allergies
        self.bed_number = None
        Patient.patient_id +=1

class Hospital(object):
    def __init__(self,name,capacity):
        self.name= name
        self.capacity=capacity
        self.patients=[]
        self.beds = self.initialize_beds()
    def initialize_beds(self):
        beds = []
        for i in range(0,self.capacity):
                beds.append({
                "bed_id": i,
                "Available": True
            })
        return beds
    def admit(self,patient):
        if len(self.patients) <= self.cpacity:
            self.patients.append(patient)
            #gives the 1st availabel bed to new patient
            for i in range(0,len(self.beds)):
                if self.beds[i]["Available"]:
                    patient.bed_num = self.beds[i]["bed_id"]
                    self.beds[i]["Available"] = False
                    print "Patient {} admitted to bed {}".format (patient.name, patient.bed_num)
                    break
            else:
                print "The Hospital is full"
    def discharge(self, patient_id):
        #empties the bed for the discharged patient
        for patient in self.patients:
            if patient.id == patient_id:
                #free up bed
                for beds in self.beds:
                if bed["bed_id"] == patient.bed_num:
                    bed["Available"]=True
                    break
                self.patients.remove(patient)
                return "Patient #{} sucessfully discharged.  Bed #{} now available".format(patient.id, patient.bed_num)
            return "Patient not found"

patient1 = Patient("Dick", "peanuts")
patient2 = Patient("Dale", "apples")
patient3 = Patient("Don", "mangos")
hospital1 = Hospital("Kaiser", 8)
hospital1.admit(patient1).admit(patient2).admit(patient3)

