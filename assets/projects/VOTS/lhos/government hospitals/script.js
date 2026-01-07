// List of districts for each state
const districtsData = {
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Thane", "Kolhapur", "Sangli", "Solapur", "Aurangabad", "Amravati", "Jalgaon", "Satara", "Akola"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", "Vellore", "Thanjavur", "Erode", "Thoothukudi"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra", "Allahabad", "Ghaziabad", "Noida", "Meerut", "Gorakhpur", "Jhansi"],
    "Karnataka": ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum", "Gulbarga", "Shimoga", "Davanagere", "Bellary", "Udupi"],
    "West Bengal": ["Kolkata", "Howrah", "Asansol", "Durgapur", "Siliguri", "Darjeeling", "Kharagpur", "Malda", "Bardhaman", "Jalpaiguri"],
    "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar", "Bhavnagar", "Jamnagar", "Junagadh", "Anand", "Navsari"],
    "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer", "Bikaner", "Alwar", "Sikar", "Bhilwara", "Bharatpur"],
    "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain", "Sagar", "Rewa", "Satna", "Ratlam", "Khandwa"],
    "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Puri", "Sambalpur", "Brahmapur", "Balasore", "Jeypore", "Bargarh", "Bhadrak"],
    "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam", "Palakkad", "Alappuzha", "Kannur", "Kottayam", "Malappuram"],
    "Arunachal Pradesh": ["Tawang", "West Kameng", "East Kameng", "Papum Pare", "Kurung Kumey", "Kra Daadi", "Lower Subansiri", "Upper Subansiri", "West Siang", "East Siang", "Siang", "Upper Siang", "Lower Siang", "Lower Dibang Valley", "Dibang Valley", "Anjaw", "Lohit", "Namsai", "Changlang", "Tirap", "Longding"],
    "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Tirupati", "Kakinada", "Rajahmundry", "Anantapur", "Kadapa"],
    "Assam": ["Guwahati", "Dibrugarh", "Silchar", "Jorhat", "Nagaon", "Tinsukia", "Tezpur", "Bongaigaon", "Diphu", "Goalpara"],
    "Bihar": ["Patna", "Gaya", "Muzaffarpur", "Bhagalpur", "Darbhanga", "Purnia", "Arrah", "Begusarai", "Katihar", "Munger"],
    "Chhattisgarh": ["Raipur", "Bilaspur", "Durg", "Rajnandgaon", "Korba", "Jagdalpur", "Raigarh", "Ambikapur", "Dhamtari", "Mahasamund"],
    "Goa": ["Panaji"],
    "Haryana": ["Gurugram", "Faridabad", "Panipat", "Ambala", "Karnal", "Hisar", "Rohtak", "Sonipat", "Panchkula", "Yamunanagar"],
    "Himachal Pradesh": ["Shimla", "Mandi", "Dharamshala", "Kullu", "Solan", "Hamirpur", "Una", "Bilaspur", "Chamba", "Kinnaur"],
    "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Hazaribagh", "Deoghar", "Dumka", "Giridih", "Ramgarh", "Chaibasa"],
    "Manipur": ["Imphal East", "Imphal West", "Thoubal", "Bishnupur", "Churachandpur", "Ukhrul", "Chandel", "Senapati", "Tamenglong", "Jiribam"],
    "Meghalaya": ["East Khasi Hills", "West Khasi Hills", "South West Khasi Hills", "East Jaintia Hills", "West Jaintia Hills", "Ri-Bhoi", "West Garo Hills", "East Garo Hills", "South Garo Hills", "North Garo Hills"],
    "Mizoram": ["Aizawl", "Lunglei", "Champhai", "Kolasib", "Serchhip", "Lawngtlai", "Siaha", "Mamit", "Khawzawl", "Saitual"],
    "Nagaland": ["Kohima", "Dimapur", "Mokokchung", "Wokha", "Zunheboto", "Phek", "Tuensang", "Mon", "Kiphire", "Longleng"],
    "Punjab": ["Amritsar", "Ludhiana", "Jalandhar", "Patiala", "Bathinda", "Mohali", "Hoshiarpur", "Pathankot", "Moga", "Sangrur"],
    "Sikkim": ["East Sikkim", "West Sikkim", "North Sikkim", "South Sikkim"],
    "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam", "Secunderabad", "Nalgonda", "Mahbubnagar", "Suryapet", "Siddipet"],
    "Tripura": ["West Tripura", "South Tripura", "North Tripura", "Dhalai", "Khowai", "Sepahijala", "Gomati", "Unakoti"],
    "Uttarakhand": ["Dehradun", "Haridwar", "Nainital", "Udham Singh Nagar", "Almora", "Tehri Garhwal", "Pauri Garhwal", "Pithoragarh", "Chamoli", "Rudraprayag"],
    "Jammu & Kashmir": ["Srinagar", "Jammu", "Anantnag", "Baramulla", "Kathua", "Udhampur", "Rajouri", "Budgam", "Pulwama", "Kupwara"],
    "Delhi": ["Central Delhi", "East Delhi", "New Delhi", "North Delhi", "North East Delhi", "North West Delhi", "South Delhi", "South East Delhi", "South West Delhi", "West Delhi"]
};

// Hospital Data (Government Hospitals in India)
const hospitalData = {
    // Maharashtra
    "Mumbai": [
        { name: "KEM Hospital", phone: "022-24136051" },
        { name: "Sion Hospital", phone: "022-24076381" },
        { name: "J.J. Hospital", phone: "022-23735555" },
        { name: "St. George's Hospital", phone: "022-22620344" }
    ],
    "Pune": [
        { name: "Sassoon Hospital", phone: "020-26128000" },
        { name: "Aundh General Hospital", phone: "020-25888700" },
        { name: "B.J. Medical College & Hospital", phone: "020-26123371" }
    ],
    "Thane": [
        { name: "Thane Civil Hospital", phone: "022-25470307" },
        { name: "Chhatrapati Shivaji Maharaj Hospital", phone: "022-25301002" }],

    "Nagpur": [
        { name: "Indira Gandhi Medical College", phone: "0712-2743588" },
        { name: "Government Medical College & Hospital", phone: "0712-2701688" }
    ],
    "Nashik": [
        { name: "Dr. Vasantrao Pawar Medical College", phone: "0253-2303999" },
        { name: "Civil Hospital Nashik", phone: "0253-2578101" }
    ],
    "Thane": [
        { name: "Thane Civil Hospital", phone: "022-25470307" },
        { name: "Chhatrapati Shivaji Maharaj Hospital", phone: "022-25301002" }
    ],

    

    "Kolhapur": [
        { name: "Chhatrapati Pramila Raje Hospital", phone: "0231-2642799" },
        { name: "Govt. Medical College & Hospital", phone: "0231-2656021" }
    ],
    "Sangli": [
        { name: "Sangli Civil Hospital", phone: "0233-2375206" },
        { name: "Miraj Government Hospital", phone: "0233-2223703" }
    ],
    "Solapur": [
        { name: "Solapur Civil Hospital", phone: "0217-2621601" },
        { name: "Dr. Vaishampayan Memorial Government Medical College", phone: "0217-2324743" }
    ],
    "Aurangabad": [
        { name: "Government Medical College & Hospital", phone: "0240-2402412" },
        { name: "Civil Hospital Aurangabad", phone: "0240-2331177" }
    ],
    "Amravati": [
        { name: "Amravati Civil Hospital", phone: "0721-2662744" },
        { name: "Dr. Panjabrao Deshmukh Medical College", phone: "0721-2662356" }
    ],
    "Jalgaon": [
        { name: "Civil Hospital Jalgaon", phone: "0257-2231796" },
        { name: "Government Medical College", phone: "0257-2221765" }
    ],
    "Satara": [
        { name: "Satara Civil Hospital", phone: "02162-234450" },
        { name: "Krishna Institute of Medical Sciences", phone: "02162-241558" }
    ],
    "Akola": [
        { name: "Akola Civil Hospital", phone: "0724-2438220" },
        { name: "Government Medical College", phone: "0724-2431960" }
    ],
    
    "Panaji": [
        { name: "Goa Medical College", phone: "0832-2412400" }],
        
        // Tamil Nadu
    "Chennai": [
        { name: "Rajiv Gandhi Government General Hospital", phone: "044-25305000" },
        { name: "Kilpauk Medical College", phone: "044-28364951" },
        { name: "Stanley Medical College", phone: "044-25281347" }
    ],
    "Coimbatore": [
        { name: "Coimbatore Medical College", phone: "0422-2574375" },
        { name: "ESI Hospital Coimbatore", phone: "0422-2557633" }
    ],
    "Madurai": [
        { name: "Madurai Medical College", phone: "0452-2532535" },
        { name: "Government Rajaji Hospital", phone: "0452-2532535" }
    ],
    "Tiruchirappalli": [
        { name: "K.A.P. Viswanatham Government Medical College", phone: "0431-2407318" },
        { name: "Mahatma Gandhi Memorial Government Hospital", phone: "0431-2407318" }
    ],
    "Salem": [
        { name: "Government Mohan Kumaramangalam Medical College", phone: "0427-2311992" },
        { name: "Government Hospital Salem", phone: "0427-2311992" }
    ],
    
    // Uttar Pradesh
    "Lucknow": [
        { name: "KGMU Hospital", phone: "0522-2258880" },
        { name: "Dr. Ram Manohar Lohia Institute", phone: "0522-2665000" }
    ],
    "Kanpur": [
        { name: "GSVM Medical College", phone: "0512-2535483" },
        { name: "Lala Lajpat Rai Hospital", phone: "0512-2567580" }
    ],
    "Varanasi": [
        { name: "IMS BHU Hospital", phone: "0542-2367568" },
        { name: "Shree Shiv Prasad Gupta District Hospital", phone: "0542-2508380" }
    ],
    "Agra": [
        { name: "SN Medical College", phone: "0562-2260353" },
        { name: "District Hospital Agra", phone: "0562-2520695" }
    ],
    "Allahabad": [
        { name: "Motilal Nehru Medical College", phone: "0532-2256711" },
        { name: "Swaroop Rani Nehru Hospital", phone: "0532-2256711" }
    ],
    
    // Karnataka
    "Bangalore": [
        { name: "NIMHANS", phone: "080-26995000" },
        { name: "Bangalore Medical College", phone: "080-26704342" },
        { name: "Victoria Hospital", phone: "080-26701150" }
    ],
    "Mysore": [
        { name: "K.R. Hospital", phone: "0821-2520512" },
        { name: "Mysore Medical College", phone: "0821-2520512" }
    ],
    "Hubli": [
        { name: "KIMS Hospital", phone: "0836-2370057" },
        { name: "Karnataka Institute of Medical Sciences", phone: "0836-2370057" }
    ],
    "Mangalore": [
        { name: "Wenlock Hospital", phone: "0824-2423830" },
        { name: "Government Medical College Mangalore", phone: "0824-2422271" }
    ],
    "Belgaum": [
        { name: "BIMS Hospital", phone: "0831-2420173" },
        { name: "Belgaum Institute of Medical Sciences", phone: "0831-2420173" }
    ],
    
    // West Bengal
    "Kolkata": [
        { name: "IPGMER SSKM Hospital", phone: "033-22236000" },
        { name: "R.G. Kar Medical College", phone: "033-25557656" },
        { name: "Calcutta National Medical College", phone: "033-22443474" }
    ],
    "Howrah": [
        { name: "Howrah General Hospital", phone: "033-26660102" },
        { name: "Howrah District Hospital", phone: "033-26660102" }
    ],
    "Asansol": [
        { name: "Asansol District Hospital", phone: "0341-2303999" },
        { name: "Asansol Medical College", phone: "0341-2302475" }
    ],
    "Durgapur": [
        { name: "Durgapur Sub-Divisional Hospital", phone: "0343-2556401" },
        { name: "ESI Hospital Durgapur", phone: "0343-2543231" }
    ],
    "Siliguri": [
        { name: "North Bengal Medical College", phone: "0353-2585478" },
        { name: "Siliguri District Hospital", phone: "0353-2523688" }
    ],
    
    // Gujarat
    "Ahmedabad": [
        { name: "Civil Hospital", phone: "079-22680074" },
        { name: "B.J. Medical College", phone: "079-22683721" }
    ],
    "Surat": [
        { name: "New Civil Hospital", phone: "0261-2659000" },
        { name: "Government Medical College Surat", phone: "0261-2244175" }
    ],
    "Vadodara": [
        { name: "Sayaji Hospital", phone: "0265-2424848" },
        { name: "Medical College Baroda", phone: "0265-2413222" }
    ],
    "Rajkot": [
        { name: "Rajkot Civil Hospital", phone: "0281-2450500" },
        { name: "P.D.U. Medical College", phone: "0281-2470085" }
    ],
    "Gandhinagar": [
        { name: "GMERS Medical College", phone: "079-23240295" },
        { name: "Civil Hospital Gandhinagar", phone: "079-23240170" }
    ],
    
    // Arunachal Pradesh
    "Tawang": [
        { name: "District Hospital Tawang", phone: "03794-222222" },
        { name: "Community Health Center Tawang", phone: "03794-222333" }
    ],
    "West Kameng": [
        { name: "District Hospital Bomdila", phone: "03782-222222" },
        { name: "Primary Health Center Dirang", phone: "03782-223333" }
    ],
    "East Kameng": [
        { name: "District Hospital Seppa", phone: "03787-222222" },
        { name: "Community Health Center Bameng", phone: "03787-222333" }
    ],
    "Papum Pare": [
        { name: "Tomo Riba Institute of Health & Medical Sciences", phone: "0360-2351801" },
        { name: "RK Mission Hospital", phone: "0360-2212510" }
    ],
    "Upper Subansiri": [
        { name: "District Hospital Daporijo", phone: "03792-223456" },
        { name: "Community Health Center Upper Subansiri", phone: "03792-223457" }
    ],
    "Lower Subansiri": [
        { name: "District Hospital Ziro", phone: "03788-224555" },
        { name: "PHC Hapoli", phone: "03788-224666" }
    ],
    "West Siang": [
        { name: "District Hospital Aalo", phone: "03783-222255" },
        { name: "CHC Basar", phone: "03783-222266" }
    ],
    "East Siang": [
        { name: "District Hospital Pasighat", phone: "03801-222222" },
        { name: "Bakin Pertin General Hospital", phone: "03801-222223" }
    ],
    "Changlang": [
        { name: "District Hospital Changlang", phone: "03808-222222" },
        { name: "CHC Miao", phone: "03808-222223" }
    ],
    "Lohit": [
        { name: "District Hospital Tezu", phone: "03804-222222" },
        { name: "CHC Sunpura", phone: "03804-222223" }
    ],
    
    // Delhi
    "Central Delhi": [
        { name: "Lady Hardinge Medical College", phone: "011-23408906" },
        { name: "Ram Manohar Lohia Hospital", phone: "011-23365525" }
    ],
    "East Delhi": [
        { name: "Guru Teg Bahadur Hospital", phone: "011-22586262" },
        { name: "Lal Bahadur Shastri Hospital", phone: "011-22518767" }
    ],
    "New Delhi": [
        { name: "AIIMS Delhi", phone: "011-26588500" },
        { name: "Safdarjung Hospital", phone: "011-26707000" }
    ],
    "North Delhi": [
        { name: "Hindu Rao Hospital", phone: "011-23905600" },
        { name: "Kasturba Hospital", phone: "011-23274376" }
    ],
    "South Delhi": [
        { name: "AIIMS Trauma Centre", phone: "011-26731178" },
        { name: "Deen Dayal Upadhyay Hospital", phone: "011-25401000" }
    ],
    
    // Andhra Pradesh
    "Visakhapatnam": [
        { name: "King George Hospital", phone: "0891-2564891" },
        { name: "Andhra Medical College", phone: "0891-2564891" }
    ],
    "Vijayawada": [
        { name: "Government General Hospital", phone: "0866-2570621" },
        { name: "Siddhartha Medical College", phone: "0866-2471835" }
    ],
    "Guntur": [
        { name: "Government General Hospital", phone: "0863-2222222" },
        { name: "Guntur Medical College", phone: "0863-2226666" }
    ],
    
    // Bihar
    "Patna": [
        { name: "AIIMS Patna", phone: "0612-2451105" },
        { name: "Patna Medical College and Hospital", phone: "0612-2300343" }
    ],
    "Gaya": [
        { name: "Anugrah Narayan Magadh Medical College", phone: "0631-2420208" },
        { name: "Sadar Hospital Gaya", phone: "0631-2222222" }
    ],
    "Muzaffarpur": [
        { name: "Sri Krishna Medical College", phone: "0621-2200080" },
        { name: "Sadar Hospital Muzaffarpur", phone: "0621-2220022" }
    ]
};

// Function to populate districts based on selected state
function populateDistricts() {
    let state = document.getElementById("state").value;
    let districtSelect = document.getElementById("district");

    // Reset district dropdown
    districtSelect.innerHTML = '<option value="">--Select District--</option>';

    if (state && districtsData[state]) {
        districtsData[state].forEach(district => {
            let option = document.createElement("option");
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }
}

// Fetch hospitals based on selected district
function fetchHospitals() {
    let district = document.getElementById("district").value;
    let hospitalList = document.getElementById("hospitalList");

    // Clear previous list
    hospitalList.innerHTML = "";

    if (!district) {
        alert("Please select a district first.");
        return;
    }

    if (hospitalData[district]) {
        hospitalData[district].forEach(hospital => {
            let listItem = document.createElement("li");
            listItem.textContent = `${hospital.name} - Contact: ${hospital.phone}`;
            hospitalList.appendChild(listItem);
        });
    } else {
        hospitalList.innerHTML = "<li>No hospitals found for this district.</li>";
    }
}

// Make functions globally accessible
window.populateDistricts = populateDistricts;
window.fetchHospitals = fetchHospitals;

// Initialize the page - remove the default "Loading Districts" message
document.addEventListener("DOMContentLoaded", function() {
    let districtSelect = document.getElementById("district");
    districtSelect.innerHTML = '<option value="">--Select District--</option>';
});