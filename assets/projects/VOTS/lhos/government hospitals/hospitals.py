import csv
import json
import sys
import cgi

# Enable CORS by sending proper headers
print("Content-Type: application/json")
print("Access-Control-Allow-Origin: *")  # Allow requests from any origin
print("Access-Control-Allow-Methods: GET, POST, OPTIONS")
print("Access-Control-Allow-Headers: Content-Type")
print()  # Required blank line after headers

# Load hospitals from CSV
def load_hospital_data():
    hospitals = []
    try:
        with open("hospitals.csv", "r", encoding="utf-8") as file:
            reader = csv.DictReader(file)
            for row in reader:
                hospitals.append(row)
    except FileNotFoundError:
        return []
    return hospitals

# Fetch unique states
def get_states():
    hospitals = load_hospital_data()
    states = sorted(set(h["State"] for h in hospitals))
    return json.dumps(states)

# Fetch districts based on state
def get_districts(state):
    hospitals = load_hospital_data()
    districts = sorted(set(h["District"] for h in hospitals if h["State"] == state))
    return json.dumps(districts)

# Fetch hospitals based on state & district
def get_hospitals(state, district):
    hospitals = load_hospital_data()
    result = [h for h in hospitals if h["State"] == state and h["District"] == district]
    return json.dumps(result, indent=4)

# Handle requests from the frontend
data = cgi.FieldStorage()
state = data.getvalue("state")
district = data.getvalue("district")
get_states_flag = data.getvalue("getStates")

if get_states_flag:
    print(get_states())
elif state and not district:
    print(get_districts(state))
elif state and district:
    print(get_hospitals(state, district))
else:
    print(json.dumps({"error": "Invalid request"}))

