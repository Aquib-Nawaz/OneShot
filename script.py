from pymongo import MongoClient
import random
client = MongoClient()

db = client['node-react-starter']
collection = db.colleges

states = ["Uttar Pardesh", "Bihar", "Maharashtra", "West Bengal", "Madhya Pardesh", "Rajasthan", "Tamil Nadu", "Karnataka", "Gujarata", "Andhra Pardesh"]
ratio = [17.35, 9.10, 8.98, 7.26, 6.22, 5.91, 5.68, 4.93, 4.66, 3.93]
courses = ['MBA', 'BBA', 'B.Tech', 'B.Arch', 'M.tech', 'ME', 'BE', 'BCA', 'MCA', 'Mass-Communication', 'B.Com', 'MBBS', 'LLB', 'Fine.Arts', 'B.Sc', 'B.Ed', 'Psychology', 'Economics', 'Sociology', 'Hotel Management']
sum_ratio = 0
for i in ratio:
    sum_ratio += i
for i in range(len(ratio)):
    ratio[i] = ratio[i]/sum_ratio
collection.drop()
for i in range (100):
    id = i
    state = random.choices(states, weights=ratio)[0]
    name = "College{}".format(i)
    founded = random.randint(1950, 2000)
    country = "India"
    numStudents = random.randint(50, 70)*20
    Courses = random.sample(courses, random.randint(5, 10))
    j = 0
    while states[j] != state:
        j+=1
    city = "City{}{}".format(j, random.randint(1,5))
    
    document = {
        "id": id,
        "name": name,
        "yearFounded": founded,
        "city": city,
        "state": state,
        "country": country,
        "numStudents": numStudents,
        "courses": Courses 
    }
    
    collection.insert_one(document)
