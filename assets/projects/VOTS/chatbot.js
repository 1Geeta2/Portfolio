// Hospital data
const hospitals = [
    // Maharashtra Hospitals
    { state: 'Maharashtra', city: 'Mumbai', name: 'KEM Hospital', phone: '022-24136051', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Maharashtra', city: 'Mumbai', name: 'Sion Hospital', phone: '022-24076381', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Maharashtra', city: 'Mumbai', name: 'J.J. Hospital', phone: '022-23735555', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Maharashtra', city: 'Mumbai', name: "St. George's Hospital", phone: '022-22620344', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Maharashtra', city: 'Pune', name: 'Sassoon Hospital', phone: '020-26128000', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Maharashtra', city: 'Pune', name: 'Aundh General Hospital', phone: '020-25888700', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Maharashtra', city: 'Pune', name: 'B.J. Medical College & Hospital', phone: '020-26123371', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Maharashtra', city: 'Nagpur', name: 'Indira Gandhi Medical College', phone: '0712-2743588', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Maharashtra', city: 'Nagpur', name: 'Government Medical College & Hospital', phone: '0712-2701688', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Maharashtra', city: 'Nashik', name: 'Dr. Vasantrao Pawar Medical College', phone: '0253-2303999', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Maharashtra', city: 'Nashik', name: 'Civil Hospital Nashik', phone: '0253-2578101', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Maharashtra', city: 'Thane', name: 'Thane Civil Hospital', phone: '022-25470307', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Maharashtra', city: 'Thane', name: 'Chhatrapati Shivaji Maharaj Hospital', phone: '022-25301002', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Maharashtra', city: 'Kolhapur', name: 'Chhatrapati Pramila Raje Hospital', phone: '0231-2642799', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Maharashtra', city: 'Kolhapur', name: 'Govt. Medical College & Hospital', phone: '0231-2656021', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Maharashtra', city: 'Sangli', name: 'Sangli Civil Hospital', phone: '0233-2375206', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Maharashtra', city: 'Sangli', name: 'Miraj Government Hospital', phone: '0233-2223703', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Maharashtra', city: 'Solapur', name: 'Solapur Civil Hospital', phone: '0217-2621601', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Maharashtra', city: 'Solapur', name: 'Dr. Vaishampayan Memorial Government Medical College', phone: '0217-2324743', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Maharashtra', city: 'Aurangabad', name: 'Government Medical College & Hospital', phone: '0240-2402412', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Maharashtra', city: 'Aurangabad', name: 'Civil Hospital Aurangabad', phone: '0240-2331177', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Maharashtra', city: 'Amravati', name: 'Amravati Civil Hospital', phone: '0721-2662744', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Maharashtra', city: 'Amravati', name: 'Dr. Panjabrao Deshmukh Medical College', phone: '0721-2662356', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Maharashtra', city: 'Jalgaon', name: 'Civil Hospital Jalgaon', phone: '0257-2231796', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Maharashtra', city: 'Jalgaon', name: 'Government Medical College', phone: '0257-2221765', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Maharashtra', city: 'Satara', name: 'Satara Civil Hospital', phone: '02162-234450', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Maharashtra', city: 'Satara', name: 'Krishna Institute of Medical Sciences', phone: '02162-241558', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Maharashtra', city: 'Akola', name: 'Akola Civil Hospital', phone: '0724-2438220', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Maharashtra', city: 'Akola', name: 'Government Medical College', phone: '0724-2431960', type: 'Government', speciality: 'Multi-speciality' },

    // Uttar Pradesh Hospitals
    { state: 'Uttar Pradesh', city: 'Lucknow', name: 'KGMU Hospital', phone: '0522-2258880', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Uttar Pradesh', city: 'Lucknow', name: 'Dr. Ram Manohar Lohia Institute', phone: '0522-2665000', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Uttar Pradesh', city: 'Kanpur', name: 'GSVM Medical College', phone: '0512-2535483', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Uttar Pradesh', city: 'Kanpur', name: 'Lala Lajpat Rai Hospital', phone: '0512-2567580', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Uttar Pradesh', city: 'Varanasi', name: 'IMS BHU Hospital', phone: '0542-2367568', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Uttar Pradesh', city: 'Varanasi', name: 'Shree Shiv Prasad Gupta District Hospital', phone: '0542-2508380', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Uttar Pradesh', city: 'Agra', name: 'SN Medical College', phone: '0562-2260353', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Uttar Pradesh', city: 'Agra', name: 'District Hospital Agra', phone: '0562-2520695', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Uttar Pradesh', city: 'Meerut', name: 'MM Medical College & Hospital', phone: '0121-2766630', type: 'Government', speciality: 'Multi-speciality' },

    // Madhya Pradesh Hospitals
    { state: 'Madhya Pradesh', city: 'Bhopal', name: 'Hamidia Hospital', phone: '0755-2763655', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Madhya Pradesh', city: 'Indore', name: 'MediCiti Hospital', phone: '0731-2423650', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Madhya Pradesh', city: 'Jabalpur', name: 'Jabalpur District Hospital', phone: '0761-2672321', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Madhya Pradesh', city: 'Gwalior', name: 'Gwalior District Hospital', phone: '0751-2437200', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Madhya Pradesh', city: 'Ujjain', name: 'Civil Hospital Ujjain', phone: '0734-2534625', type: 'Government', speciality: 'Multi-speciality' },

    // Gujarat Hospitals
    { state: 'Gujarat', city: 'Ahmedabad', name: 'Civil Hospital Ahmedabad', phone: '079-27661810', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Gujarat', city: 'Surat', name: 'SMC Civil Hospital', phone: '0261-2345000', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Gujarat', city: 'Rajkot', name: 'Rajkot Civil Hospital', phone: '0281-2466721', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Gujarat', city: 'Vadodara', name: 'S.S.G. Hospital', phone: '0265-2411230', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Gujarat', city: 'Bharuch', name: 'Bharuch District Hospital', phone: '02642-240098', type: 'Government', speciality: 'Multi-speciality' },

    // Tamil Nadu Hospitals
    { state: 'Tamil Nadu', city: 'Chennai', name: 'Government General Hospital', phone: '044-25360313', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Tamil Nadu', city: 'Madurai', name: 'Government Rajaji Hospital', phone: '0452-2583332', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Tamil Nadu', city: 'Coimbatore', name: 'Coimbatore Medical College Hospital', phone: '0422-2571200', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Tamil Nadu', city: 'Trichy', name: 'Mahathma Gandhi Memorial Government Hospital', phone: '0431-2773237', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Tamil Nadu', city: 'Salem', name: 'Salem Government Hospital', phone: '0427-2426880', type: 'Government', speciality: 'Multi-speciality' },

    // Rajasthan Hospitals
    { state: 'Rajasthan', city: 'Jaipur', name: 'SMS Hospital', phone: '0141-2632195', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Rajasthan', city: 'Udaipur', name: 'M.B. Hospital', phone: '0294-2527000', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Rajasthan', city: 'Ajmer', name: 'Ajmer District Hospital', phone: '0145-2634124', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Rajasthan', city: 'Jodhpur', name: 'Mahatma Gandhi Hospital', phone: '0291-2725630', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Rajasthan', city: 'Alwar', name: 'Alwar District Hospital', phone: '0144-2230466', type: 'Government', speciality: 'Multi-speciality' },

    // Haryana Hospitals
    { state: 'Haryana', city: 'Gurugram', name: 'Civil Hospital Gurugram', phone: '0124-2270815', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Haryana', city: 'Faridabad', name: 'Civil Hospital Faridabad', phone: '0129-2275616', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Haryana', city: 'Panipat', name: 'Civil Hospital Panipat', phone: '0180-2662205', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Haryana', city: 'Karnal', name: 'Karnal Civil Hospital', phone: '0184-2257450', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Haryana', city: 'Ambala', name: 'Ambala District Hospital', phone: '0171-2634773', type: 'Government', speciality: 'Multi-speciality' },

    // Bihar Hospitals
    { state: 'Bihar', city: 'Patna', name: 'Patna Medical College and Hospital', phone: '0612-2674539', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Bihar', city: 'Muzaffarpur', name: 'Muzaffarpur Medical College', phone: '0621-2242467', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Bihar', city: 'Bhagalpur', name: 'Jawaharlal Nehru Medical College', phone: '0641-2221325', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Bihar', city: 'Gaya', name: 'Gaya District Hospital', phone: '0631-2221578', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Bihar', city: 'Darbhanga', name: 'Darbhanga Medical College', phone: '06272-242026', type: 'Government', speciality: 'Multi-speciality' },

    // Kerala Hospitals
    { state: 'Kerala', city: 'Thiruvananthapuram', name: 'Government Medical College Hospital', phone: '0471-2557007', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Kerala', city: 'Kochi', name: 'Ernakulam General Hospital', phone: '0484-2351717', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Kerala', city: 'Calicut', name: 'Calicut Medical College', phone: '0495-2357022', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Kerala', city: 'Kottayam', name: 'Kottayam Government Medical College', phone: '0481-2572101', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Kerala', city: 'Thrissur', name: 'Government Medical College Thrissur', phone: '0487-2432277', type: 'Government', speciality: 'Multi-speciality' },

    // Karnataka Hospitals
    { state: 'Karnataka', city: 'Bangalore', name: 'Victoria Hospital', phone: '080-22346251', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Karnataka', city: 'Bangalore', name: 'Bowring Hospital', phone: '080-22212121', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Karnataka', city: 'Mysore', name: 'Mysore Medical College', phone: '0821-2419247', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Karnataka', city: 'Hubli', name: 'KIMS Hubli', phone: '0836-2322750', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Karnataka', city: 'Bellary', name: 'Bellary District Hospital', phone: '08392-233145', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Karnataka', city: 'Udupi', name: 'Udupi District Hospital', phone: '0820-2527027', type: 'Government', speciality: 'Multi-speciality' },

    // West Bengal Hospitals
    { state: 'West Bengal', city: 'Kolkata', name: 'S.S.K.M. Hospital', phone: '033-22120699', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'West Bengal', city: 'Kolkata', name: 'NRS Medical College', phone: '033-22551111', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'West Bengal', city: 'Howrah', name: 'Howrah District Hospital', phone: '033-26530329', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'West Bengal', city: 'Durgapur', name: 'Durgapur Steel Plant Hospital', phone: '0343-2542015', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'West Bengal', city: 'Asansol', name: 'Asansol District Hospital', phone: '0341-2254773', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'West Bengal', city: 'Malda', name: 'Malda Medical College Hospital', phone: '03512-252426', type: 'Government', speciality: 'Multi-speciality' },

    // Andhra Pradesh Hospitals
    { state: 'Andhra Pradesh', city: 'Visakhapatnam', name: 'King George Hospital', phone: '0891-2741215', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Andhra Pradesh', city: 'Vijayawada', name: 'Government General Hospital', phone: '0866-2477777', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Andhra Pradesh', city: 'Tirupati', name: 'Tirupati District Hospital', phone: '0877-2285677', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Andhra Pradesh', city: 'Nellore', name: 'Nellore District Hospital', phone: '0861-2322969', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Andhra Pradesh', city: 'Kakinada', name: 'Kakinada Government Hospital', phone: '0884-2373100', type: 'Government', speciality: 'Multi-speciality' },

    // Telangana Hospitals
    { state: 'Telangana', city: 'Hyderabad', name: 'Osmania General Hospital', phone: '040-27689081', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Telangana', city: 'Hyderabad', name: 'Gandhi Hospital', phone: '040-27502000', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Telangana', city: 'Warangal', name: 'Warangal District Hospital', phone: '0870-2457007', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Telangana', city: 'Khammam', name: 'Khammam Government Hospital', phone: '08742-242330', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Telangana', city: 'Karimnagar', name: 'Karimnagar District Hospital', phone: '0878-2244178', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Telangana', city: 'Nizamabad', name: 'Nizamabad District Hospital', phone: '08462-220646', type: 'Government', speciality: 'Multi-speciality' },

    // Punjab Hospitals
    { state: 'Punjab', city: 'Amritsar', name: 'Guru Nanak Dev Hospital', phone: '0183-2503825', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Punjab', city: 'Ludhiana', name: 'Dayanand Medical College', phone: '0161-2410205', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Punjab', city: 'Jalandhar', name: 'Civil Hospital Jalandhar', phone: '0181-2221321', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Punjab', city: 'Patiala', name: 'Rajindra Hospital', phone: '0175-2216011', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Punjab', city: 'Bhatinda', name: 'Civil Hospital Bathinda', phone: '0164-2210787', type: 'Government', speciality: 'Multi-speciality' },

    // Other States Hospitals
    { state: 'Assam', city: 'Guwahati', name: 'Guwahati Medical College', phone: '0361-2528417', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Jharkhand', city: 'Ranchi', name: 'Rajendra Institute of Medical Sciences', phone: '0651-2541533', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Odisha', city: 'Bhubaneswar', name: 'AIIMS Bhubaneswar', phone: '0674-2476789', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Chhattisgarh', city: 'Raipur', name: 'Dr. Bhimrao Ambedkar Memorial Hospital', phone: '0771-2888000', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Goa', city: 'Panaji', name: 'Goa Medical College', phone: '0832-2458727', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Meghalaya', city: 'Shillong', name: 'NEIGRIHMS', phone: '0364-2538029', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Manipur', city: 'Imphal', name: 'RIMS Imphal', phone: '0385-2414629', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Nagaland', city: 'Kohima', name: 'Naga Hospital Authority', phone: '0370-2220123', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Tripura', city: 'Agartala', name: 'Agartala Government Medical College', phone: '0381-2357000', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Mizoram', city: 'Aizawl', name: 'Civil Hospital Aizawl', phone: '0389-2322310', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Sikkim', city: 'Gangtok', name: 'STNM Hospital', phone: '03592-202222', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Arunachal Pradesh', city: 'Itanagar', name: 'Tomato Memorial Hospital', phone: '0360-2212424', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Uttarakhand', city: 'Dehradun', name: 'Doon Medical College', phone: '0135-2726020', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Himachal Pradesh', city: 'Shimla', name: 'Indira Gandhi Medical College', phone: '0177-2659966', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Jammu and Kashmir', city: 'Srinagar', name: 'Sher-i-Kashmir Institute of Medical Sciences', phone: '0194-2401013', type: 'Government', speciality: 'Multi-speciality' },
    { state: 'Ladakh', city: 'Leh', name: 'SNM Hospital Leh', phone: '01982-252012', type: 'Government', speciality: 'Multi-speciality' }
];

// Recipient data
const recipients = [
    { id: 'R001', name: 'John Doe', age: 45, bloodGroup: 'A+', organNeeded: 'Kidney', status: 'Active', location: 'Mumbai, Maharashtra' },
    { id: 'R002', name: 'Jane Smith', age: 32, bloodGroup: 'B+', organNeeded: 'Liver', status: 'Active', location: 'Bangalore, Karnataka' },
    { id: 'R003', name: 'Robert Johnson', age: 28, bloodGroup: 'O+', organNeeded: 'Heart', status: 'Active', location: 'Chennai, Tamil Nadu' },
    { id: 'R004', name: 'Emily Davis', age: 35, bloodGroup: 'AB+', organNeeded: 'Lungs', status: 'Active', location: 'Hyderabad, Telangana' },
    { id: 'R005', name: 'Michael Wilson', age: 50, bloodGroup: 'A-', organNeeded: 'Kidney', status: 'Active', location: 'Kolkata, West Bengal' }
];

// Update knowledge base with VOTS summary and website focus
const knowledgeBase = {
    general: {
        responses: [
            "VOTS (Vidyalankar Organ and Tissue Transplantation) is a website dedicated to organ donation and transplantation awareness and education. We provide information about organ donation and transplantation, registration process, and connect donors with hospitals.",
            "Welcome to VOTS! We're an online platform promoting organ donation  and transplantation and transplantation, connecting donors with recipients and hospitals.awareness and providing information about the donation process.",
            "VOTS is a website that helps people understand and participate in organ donation  and transplantation. One donor can save up to 8 lives."
        ]
    },
    vots: {
        keywords: ['vots', 'what is vots', 'about vots', 'tell me about vots', 'explain vots'],
        responses: [
            "<i class='bi bi-globe'></i> VOTS (Vidyalankar Organ and Tissue Transplantation) is a website that:<br>" +
            "<i class='bi bi-check-circle'></i> Promotes organ donation awareness<br>" +
            "<i class='bi bi-check-circle'></i> Provides information about donation process<br>" +
            "<i class='bi bi-check-circle'></i> Connects donors with hospitals<br>" +
            "<i class='bi bi-check-circle'></i> Educates about organ donation benefits",
            
            "<i class='bi bi-info-circle'></i> VOTS is an online platform that:<br>" +
            "<i class='bi bi-arrow-right'></i> Raises awareness about organ donation<br>" +
            "<i class='bi bi-arrow-right'></i> Guides through registration process<br>" +
            "<i class='bi bi-arrow-right'></i> Provides hospital information<br>" +
            "<i class='bi bi-arrow-right'></i> Supports donors and recipients",
            
            "<i class='bi bi-heart'></i> VOTS - A website dedicated to:<br>" +
            "<i class='bi bi-dot'></i> Organ donation education<br>" +
            "<i class='bi bi-dot'></i> Safe donation practices<br>" +
            "<i class='bi bi-dot'></i> Hospital connections<br>" +
            "<i class='bi bi-dot'></i> Donor support"
        ]
    },
    greetings: {
        keywords: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'whats up', 'how are you'],
        responses: [
            "<i class='bi bi-heart-pulse'></i> Hi! Welcome to VOTS website. One donor can save 8 lives. How can we help?",
            "<i class='bi bi-hospital'></i> Hello! VOTS - Your online guide to organ donation and transplantation. What would you like to know?",
            "<i class='bi bi-people'></i> Greetings! VOTS website is here to help with organ donation and transplantation. How can we assist? "
        ]
    },
    contact: {
        keywords: ['contact', 'email', 'phone', 'number', 'reach', 'get in touch'],
        responses: [
            "<i class='bi bi-telephone'></i> Phone: 7715079304<br><i class='bi bi-envelope'></i> Email: zuveriakazi2808@gmail.com"
        ]
    },
    emergency: {
        keywords: ['emergency', 'urgent', 'help', 'immediate', 'critical'],
        responses: [
            "<i class='bi bi-exclamation-triangle'></i> For emergencies, please call 7715079304 immediately."
        ]
    },
    eligibility: {
        keywords: ['eligib', 'who can', 'qualif', 'age', 'medical', 'condition', 'health'],
        responses: [
            "Most people can donate organs. Age and medical conditions are evaluated case by case.",
            "Anyone can register as a donor. Medical suitability is determined at the time of donation.",
            "Living donors must be healthy adults. Deceased donors are evaluated based on organ function."
        ]
    },
    registration: {
        keywords: ['register', 'registration', 'sign up', 'how to register', 'how to sign up', 'become donor', 'join'],
        responses: [
            "<i class='bi bi-person-plus'></i> Registration on VOTS website:<br>" +
            "<i class='bi bi-check-circle'></i> Simple Registration: Basic details required<br>" +
            "<i class='bi bi-check-circle'></i> Document Registration: Upload required documents<br>" +
            "<i class='bi bi-check-circle'></i> Both options available on our website",
            
            "<i class='bi bi-clipboard-check'></i> To register as a donor:<br>" +
            "<i class='bi bi-arrow-right'></i> Visit our website<br>" +
            "<i class='bi bi-arrow-right'></i> Choose registration type<br>" +
            "<i class='bi bi-arrow-right'></i> Fill required details<br>" +
            "<i class='bi bi-arrow-right'></i> Submit for approval",
            
            "<i class='bi bi-person-badge'></i> Registration Process:<br>" +
            "<i class='bi bi-dot'></i> Two types: Simple and Document-based<br>" +
            "<i class='bi bi-dot'></i> Complete online form<br>" +
            "<i class='bi bi-dot'></i> Get registration confirmation"
        ]
    },
    login: {
        keywords: ['login', 'sign in', 'how to login', 'how to sign in', 'access account'],
        responses: [
            "<i class='bi bi-person-check'></i> Login Information:<br>" +
            "<i class='bi bi-check-circle'></i> Login available after successful registration<br>" +
            "<i class='bi bi-check-circle'></i> Use registered email and password<br>" +
            "<i class='bi bi-check-circle'></i> Access your donor profile",
            
            "<i class='bi bi-box-arrow-in-right'></i> To login:<br>" +
            "<i class='bi bi-arrow-right'></i> Complete registration first<br>" +
            "<i class='bi bi-arrow-right'></i> Use your credentials<br>" +
            "<i class='bi bi-arrow-right'></i> Access your account",
            
            "<i class='bi bi-shield-lock'></i> Login Process:<br>" +
            "<i class='bi bi-dot'></i> Registration required first<br>" +
            "<i class='bi bi-dot'></i> Secure login system<br>" +
            "<i class='bi bi-dot'></i> Manage your donor profile"
        ]
    },
    process: {
        keywords: ['process', 'how does it work', 'what happens', 'procedure', 'step'],
        responses: [
            "Process: 1) Medical evaluation 2) Family consent 3) Organ recovery 4) Transplantation",
            "After brain death confirmation, organs are evaluated and matched to recipients.",
            "The entire process takes 4-6 hours and is conducted with utmost respect."
        ]
    },
    benefits: {
        keywords: ['benefit', 'advantage', 'why', 'important', 'impact', 'help'],
        responses: [
            "Benefits: Save lives, comfort for donor families, improved recipient quality of life.",
            "One donor can save 8 lives and improve many more through tissue donation.",
            "Donation gives recipients a second chance at life and normal activities."
        ]
    },
    types: {
        keywords: ['type', 'kind', 'what can', 'which', 'organ', 'tissue'],
        responses: [
            "Types: Heart, lungs, liver, kidneys, pancreas, intestines, corneas, skin, bones.",
            "Living donors can donate kidney, part of liver, or lung lobe.",
            "Tissues like corneas, skin, bones, and heart valves can be donated."
        ]
    },
    support: {
        keywords: ['support', 'help', 'service', 'counsel', 'assist', 'care'],
        responses: [
            "VOTS provides 24/7 support, counseling, and financial assistance.",
            "Support services include donor family counseling and recipient care.",
            "Contact VOTS helpline for immediate assistance and guidance."
        ]
    },
    legal: {
        keywords: ['legal', 'law', 'right', 'protect', 'consent', 'ethical'],
        responses: [
            "Organ donation is protected by law. Consent is required from donor or family.",
            "The process is confidential and follows strict ethical guidelines.",
            "Donors can change their decision anytime. All donations are voluntary."
        ]
    },
    blood: {
        keywords: ['blood', 'group', 'type', 'compatibility', 'match'],
        responses: [
            "Blood group compatibility is crucial for organ transplantation. Common groups include A, B, AB, and O.",
            "Blood type matching is essential for successful organ transplants.",
            "Organ donation requires matching blood groups between donor and recipient."
        ]
    },
    recipients: {
        keywords: ['recipient', 'need', 'patient', 'search', 'find'],
        responses: [
            "Here are some recipients looking for organ donations:",
            "We have a list of active recipients in need of organ donations."
        ]
    },

help : {
        keywords: ['help', 'assistance', 'support', 'aid', 'guide'],
        responses: [
            "How can I assist you? Please ask your question.",
            "I'm here to help! What do you need assistance with?",
            "Feel free to ask any questions. I'm here to support you."
        ]
    },
    advice: {
        keywords: ['advice', 'suggestion', 'sugession', 'recommendation', 'tip'],
        responses: [
            "Always consult a medical professional before making health decisions.",
            "Stay informed about organ donation and its impact on lives.",
            "Consider discussing organ donation with your family."

        ]
    },
     family: {
        keywords: ['family',  'care'],
        responses: [
            "Family support is crucial for both donors and recipients.",
            "Discuss organ donation with your family to ensure everyone is informed.",
            "Family members can provide emotional and practical support during the process."
        ]
    },
    hospitals: {
        keywords: [ 'medical center', 'medical college'],
        responses: [
            "Here are some hospitals in India that specialize in organ transplantation:",
            "We have a list of hospitals that can assist with organ donation and transplantation, to find out hospitals in India specializing in organ donation and transplantation , please visit our website.",
            "You can find hospitals in your state that are equipped for organ donation and transplantation."
        ]
    },
    
    proffesional: {
        keywords: ['professional', 'expert', 'specialist', 'consultant'],
        responses: [
            "Consult a medical professional for personalized advice on organ donation.",
            "Medical professionals can provide detailed information about the donation process.",
            "It's important to seek expert guidance when considering organ donation."
        ]
    },
    feedback: {
        keywords: ['feedback', 'suggestion', 'comment', 'review'],
        responses: [
            "We value your feedback! Please share your thoughts about our website.",
            "Your suggestions help us improve. What do you think about VOTS?",
            "Feel free to leave a comment or suggestion for our team."
        ]
    },
    events : {
        keywords: ['events', 'activities', 'programs', 'campaigns'],
        responses: [
            "We organize various events to promote organ donation awareness.",
            "Stay tuned for upcoming events and campaigns on organ donation.",
            "Join us in our efforts to raise awareness about organ donation."
        ]
    },
    volunteer : {
        keywords: ['volunteer', 'participate', 'join', 'help out'],
        responses: [
            "We welcome volunteers to help us spread awareness about organ donation.",
            "If you're interested in volunteering, please contact us for more information.",
            "Join our team of volunteers to make a difference in the community."
        ]
    },
    resources: {
        keywords: ['resources', 'information', 'materials', 'guides'],
        responses: [
            "We provide various resources on organ donation and transplantation.",
            "Check our website for informative materials and guides.",
            "You can find brochures, articles, and videos about organ donation."
        ]
    },
    news: {
        keywords: ['news', 'updates', 'articles'],
        responses: [
            "Stay updated with the latest news on organ donation and transplantation.",
            "We share articles and updates related to organ donation on our website.",
            "Follow us for news and developments in the field of organ donation."
        ]
    },
    statistics: {
        keywords: ['statistics', 'data', 'numbers', 'figures'],
        responses: [
            "Organ donation statistics show the impact of donations on saving lives.",
            "We provide data on organ donation rates and success stories.",
            "Check our website for statistics related to organ donation."
        ]
    },
    awareness: {
        keywords: ['awareness', 'education', 'knowledge'],
        responses: [
            "We aim to raise awareness about organ donation through education.",
            "Our website provides information to help people understand organ donation.",
            "Join us in spreading awareness about the importance of organ donation."
        ]
    },
    myths: {
        keywords: ['myths', 'misconceptions', 'facts'],
        responses: [
            "There are many myths about organ donation. We aim to clarify them.",
            "Don't believe everything you hear about organ donation. Check our facts.",
            "We debunk common myths about organ donation on our website."
        ]
    },
    form : {
        keywords: ['form', 'application', 'registration form', 'donor form'],
        responses: [
            "To register as a donor, please fill out the registration form on our website.",
            "You can find the donor registration form in the 'Register' section.",
            "Complete the application form to become an organ donor."
        ]
    },
    process: {
        keywords: ['process', 'procedure', 'steps', 'how to'],
        responses: [
            "The organ donation process involves several steps, including registration and medical evaluation.",
            "To become a donor, follow the steps outlined on our website.",
            "The process includes filling out a form and undergoing medical assessments."
        ]
    },
    document : {
        keywords: ['document', 'upload', 'file', 'paperwork'],
        responses: [
            "You may need to upload documents during the registration process.",
            "Ensure you have the required documents ready for submission.",
            "Upload necessary files as part of your donor registration."
        ]
    },
    
};

// Function to calculate similarity between strings
function calculateSimilarity(str1, str2) {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    const longerLength = longer.length;
    if (longerLength === 0) return 1.0;
    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

// Function to calculate edit distance
function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    const costs = [];
    for (let i = 0; i <= s1.length; i++) {
        let lastValue = i;
        for (let j = 0; j <= s2.length; j++) {
            if (i === 0) {
                costs[j] = j;
            } else if (j > 0) {
                let newValue = costs[j - 1];
                if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
                    newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
                }
                costs[j - 1] = lastValue;
                lastValue = newValue;
            }
        }
        if (i > 0) costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}

// Function to find the best matching topic
function findBestMatch(message) {
    let bestMatch = { topic: 'general', score: 0 };
    const lowerMessage = message.toLowerCase();

    // Check for exact matches first
    for (const [topic, data] of Object.entries(knowledgeBase)) {
        if (topic === 'general') continue;
        
        for (const keyword of data.keywords) {
            if (lowerMessage.includes(keyword)) {
                return { topic, score: 1 };
            }
        }
    }

    // If no exact match, calculate similarity
    for (const [topic, data] of Object.entries(knowledgeBase)) {
        if (topic === 'general') continue;
        
        for (const keyword of data.keywords) {
            const similarity = calculateSimilarity(lowerMessage, keyword);
            if (similarity > bestMatch.score) {
                bestMatch = { topic, score: similarity };
            }
        }
    }

    return bestMatch.score > 0.3 ? bestMatch : { topic: 'general', score: 0 };
}

// Function to get a random response from a topic
function getRandomResponse(topic) {
    const responses = knowledgeBase[topic].responses;
    return responses[Math.floor(Math.random() * responses.length)];
}

// Function to add a message to the chat
function addMessage(content, isUser = false) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
    
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    messageContent.innerHTML = content;
    
    messageDiv.appendChild(messageContent);
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to show typing indicator
function showTypingIndicator() {
    const chatMessages = document.getElementById('chat-messages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'typing-indicator';
    typingDiv.innerHTML = '<span></span><span></span><span></span>';
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return typingDiv;
}

// Function to remove typing indicator
function removeTypingIndicator(typingDiv) {
    typingDiv.remove();
}

// Function to toggle chatbot visibility
function toggleChatbot() {
    console.log("Toggle");
    const container = document.querySelector('.chatbot-container');
    console.log(container.classList);
    if(container.classList.contains('minimized')) {
        container.classList.remove('minimized');
    } else {
        container.classList.add('minimized');
    }
    console.log(container.classList);
}

// Add state to track conversation context
let conversationContext = {
    waitingForState: false,
    waitingForCity: false,
    lastState: '',
    lastCity: ''
};

// State abbreviations and common misspellings
const stateVariations = {
    'maharashtra': ['mh', 'maha'],
    'delhi': ['dl', 'new delhi', 'ncr'],
    'karnataka': ['ka', 'bangalore', 'bengaluru', 'mysore'],
    'tamil nadu': ['tn', 'chennai', 'madras', 'south india'],
    'kerala': ['kl', 'trivandrum', 'kochi', 'cochin'],
    'gujarat': ['gj', 'gujjo', 'surat'],
    'west bengal': ['wb', 'kolkata', 'calcutta'],
    'andhra pradesh': ['ap', 'hyderabad', 'vizag'],
    'telangana': ['ts', 'hyderabad'],
    'punjab': ['pb', 'punjabi', 'amritsar'],
    'rajasthan': ['rj', 'jaipur', 'udaipur'],
    'haryana': ['hr', 'gurgaon', 'faridabad'],
    'bihar': ['br', 'patna', 'muzaffarpur'],
    'uttar pradesh': ['up', 'lucknow', 'kanpur'],
    'odisha': ['or', 'bhubaneswar', 'cuttack'],
    'chhattisgarh': ['cg', 'raipur'],
    'jharkhand': ['jh', 'ranchi', 'jamshedpur'],
    'assam': ['as', 'guwahati'],
    'tripura': ['tr', 'agartala'],
    'meghalaya': ['ml', 'shillong'],
    'manipur': ['mn', 'imphal'],
    'nagaland': ['ng', 'kohima'],
    'arunachal pradesh': ['ar', 'itanagar'],
    'sikkim': ['sk', 'gangtok'],
    'goa': ['ga', 'panaji'],
    'himachal pradesh': ['hp', 'shimla'],
    'goa': ['ga', 'panaji'],
    'ladakh': ['ld', 'leh'],
    'uttarakhand': ['uk', 'dehradun'],
    'jammu and kashmir': ['jk', 'srinagar'],
    'chandigarh': ['ch', 'chd'],
    'telangana': ['ts', 'hyderabad'],
    'arunachal pradesh': ['ar', 'itanagar'],

};

// Function to normalize state name
function normalizeState(state) {
    const lowerState = state.toLowerCase().trim();
    
    // Check for exact match first
    for (const [correctState, variations] of Object.entries(stateVariations)) {
        if (lowerState === correctState) {
            return correctState;
        }
    }
    
    // Check for variations
    for (const [correctState, variations] of Object.entries(stateVariations)) {
        if (variations.includes(lowerState)) {
            return correctState;
        }
    }
    
    // Check for partial matches
    for (const [correctState, variations] of Object.entries(stateVariations)) {
        if (correctState.includes(lowerState) || lowerState.includes(correctState)) {
            return correctState;
        }
    }
    
    return state;
}

// Function to find hospitals by state and city
function findHospitals(state, city) {
    // Normalize input
    const normalizedState = normalizeState(state);
    const normalizedCity = city.toLowerCase().trim();
    
    // Find exact matches first
    let matches = hospitals.filter(hospital => 
        hospital.state.toLowerCase() === normalizedState && 
        hospital.city.toLowerCase() === normalizedCity
    );
    
    // If no exact matches, try partial matches
    if (matches.length === 0) {
        matches = hospitals.filter(hospital => 
            hospital.state.toLowerCase().includes(normalizedState) && 
            hospital.city.toLowerCase().includes(normalizedCity)
        );
    }
    
    return matches;
}

// Function to get all hospitals in a state
function getHospitalsByState(state) {
    const normalizedState = normalizeState(state);
    return hospitals.filter(hospital => 
        hospital.state.toLowerCase().includes(normalizedState)
    );
}

// Function to get all unique cities in a state
function getCitiesByState(state) {
    const hospitalsInState = getHospitalsByState(state);
    return [...new Set(hospitalsInState.map(h => h.city))];
}

// Function to find recipients by location
function findRecipientsByLocation(state, city) {
    const normalizedState = normalizeState(state);
    const normalizedCity = city.toLowerCase().trim();
    
    return recipients.filter(recipient => {
        const [recipientCity, recipientState] = recipient.location.split(', ').map(s => s.toLowerCase());
        return recipientState.includes(normalizedState) && 
               (normalizedCity === '' || recipientCity.includes(normalizedCity));
    });
}

// Function to find recipients by organ type
function findRecipientsByOrgan(organ) {
    const normalizedOrgan = organ.toLowerCase().trim();
    return recipients.filter(recipient => 
        recipient.organNeeded.toLowerCase().includes(normalizedOrgan)
    );
}

// Function to find recipients by blood group
function findRecipientsByBloodGroup(bloodGroup) {
    const normalizedBloodGroup = bloodGroup.toUpperCase().trim();
    return recipients.filter(recipient => 
        recipient.bloodGroup === normalizedBloodGroup
    );
}

// Function to process user message and generate response
function processMessage(message) {
    const lowerMessage = message.toLowerCase();
    
    // Check for recipient-related queries
    if (lowerMessage.includes('recipient') || 
        lowerMessage.includes('patient') || 
        lowerMessage.includes('need organ') || 
        lowerMessage.includes('waiting list')) {
        
        // Check if specific organ is mentioned
        const organs = ['kidney', 'liver', 'heart', 'lungs', 'pancreas'];
        const mentionedOrgan = organs.find(organ => lowerMessage.includes(organ));
        
        if (mentionedOrgan) {
            const recipientsByOrgan = findRecipientsByOrgan(mentionedOrgan);
            if (recipientsByOrgan.length > 0) {
                let response = `<i class='bi bi-people'></i> Recipients needing ${mentionedOrgan}:<br>`;
                recipientsByOrgan.forEach(recipient => {
                    response += `<br><i class='bi bi-person'></i> ID: ${recipient.id}<br>` +
                               `<i class='bi bi-person-badge'></i> Name: ${recipient.name}<br>` +
                               `<i class='bi bi-heart'></i> Blood Group: ${recipient.bloodGroup}<br>` +
                               `<i class='bi bi-geo-alt'></i> Location: ${recipient.location}<br>` +
                               `<i class='bi bi-info-circle'></i> Status: ${recipient.status}<br>`;
                });
                return response;
            } else {
                return `<i class='bi bi-exclamation-circle'></i> No recipients currently waiting for ${mentionedOrgan}.`;
            }
        }
        
        // Check if blood group is mentioned
        const bloodGroups = ['a+', 'a-', 'b+', 'b-', 'ab+', 'ab-', 'o+', 'o-'];
        const mentionedBloodGroup = bloodGroups.find(group => lowerMessage.includes(group));
        
        if (mentionedBloodGroup) {
            const recipientsByBloodGroup = findRecipientsByBloodGroup(mentionedBloodGroup);
            if (recipientsByBloodGroup.length > 0) {
                let response = `<i class='bi bi-people'></i> Recipients with blood group ${mentionedBloodGroup.toUpperCase()}:<br>`;
                recipientsByBloodGroup.forEach(recipient => {
                    response += `<br><i class='bi bi-person'></i> ID: ${recipient.id}<br>` +
                               `<i class='bi bi-person-badge'></i> Name: ${recipient.name}<br>` +
                               `<i class='bi bi-heart'></i> Organ Needed: ${recipient.organNeeded}<br>` +
                               `<i class='bi bi-geo-alt'></i> Location: ${recipient.location}<br>` +
                               `<i class='bi bi-info-circle'></i> Status: ${recipient.status}<br>`;
                });
                return response;
            } else {
                return `<i class='bi bi-exclamation-circle'></i> No recipients with blood group ${mentionedBloodGroup.toUpperCase()} currently waiting.`;
            }
        }
        
        // If no specific organ or blood group mentioned, show all recipients
        let response = "<i class='bi bi-people'></i> Current Recipients:<br>";
        recipients.forEach(recipient => {
            response += `<br><i class='bi bi-person'></i> ID: ${recipient.id}<br>` +
                       `<i class='bi bi-person-badge'></i> Name: ${recipient.name}<br>` +
                       `<i class='bi bi-heart'></i> Organ Needed: ${recipient.organNeeded}<br>` +
                       `<i class='bi bi-droplet'></i> Blood Group: ${recipient.bloodGroup}<br>` +
                       `<i class='bi bi-geo-alt'></i> Location: ${recipient.location}<br>` +
                       `<i class='bi bi-info-circle'></i> Status: ${recipient.status}<br>`;
        });
        return response;
    }
    
    // Check if we're waiting for state input
    if (conversationContext.waitingForState) {
        const normalizedState = normalizeState(message);
        conversationContext.lastState = normalizedState;
        conversationContext.waitingForState = false;
        conversationContext.waitingForCity = true;
        
        // Get all cities in the state
        const cities = getCitiesByState(normalizedState);
        if (cities.length > 0) {
            let response = `<i class='bi bi-geo-alt'></i> Please enter your city and below is the list of city of hospital in which government hospitals available in ${normalizedState}:<br>`;
            cities.forEach(city => {
                response += `<br><i class='bi bi-building'></i> ${city}`;
            });
            return response;
        } else {
            // Suggest possible states if no match found
            let suggestions = "<i class='bi bi-exclamation-circle'></i> No hospitals found. Did you mean:<br>";
            for (const [correctState, variations] of Object.entries(stateVariations)) {
                if (correctState.includes(normalizedState) || normalizedState.includes(correctState)) {
                    suggestions += `<br><i class='bi bi-arrow-right'></i> ${correctState}`;
                }
            }
            return suggestions;
        }
    }
    
    // Check if we're waiting for city input
    if (conversationContext.waitingForCity) {
        conversationContext.lastCity = message.trim();
        conversationContext.waitingForCity = false;
        
        const foundHospitals = findHospitals(conversationContext.lastState, conversationContext.lastCity);
        const foundRecipients = findRecipientsByLocation(conversationContext.lastState, conversationContext.lastCity);
        
        let response = '';
        
        if (foundHospitals.length > 0) {
            response += `<i class='bi bi-hospital'></i> Hospitals in ${conversationContext.lastCity}, ${conversationContext.lastState}:<br>`;
            foundHospitals.forEach(hospital => {
                response += `<br><i class='bi bi-building'></i> ${hospital.name}<br>` +
                           `<i class='bi bi-telephone'></i> Phone: ${hospital.phone}<br>` +
                           `<i class='bi bi-info-circle'></i> Type: ${hospital.type}<br>` +
                           `<i class='bi bi-heart'></i> Speciality: ${hospital.speciality}<br>`;
            });
        }
        
        if (foundRecipients.length > 0) {
            response += `<br><i class='bi bi-people'></i> Recipients in ${conversationContext.lastCity}, ${conversationContext.lastState}:<br>`;
            foundRecipients.forEach(recipient => {
                response += `<br><i class='bi bi-person'></i> ID: ${recipient.id}<br>` +
                           `<i class='bi bi-person-badge'></i> Name: ${recipient.name}<br>` +
                           `<i class='bi bi-heart'></i> Organ Needed: ${recipient.organNeeded}<br>` +
                           `<i class='bi bi-droplet'></i> Blood Group: ${recipient.bloodGroup}<br>` +
                           `<i class='bi bi-info-circle'></i> Status: ${recipient.status}<br>`;
            });
        }
        
        if (foundHospitals.length === 0 && foundRecipients.length === 0) {
            response = `<i class='bi bi-exclamation-circle'></i> No hospitals or recipients found in ${conversationContext.lastCity}, ${conversationContext.lastState}.`;
        }
        
        // Add emergency contact at the end
        response += `<br><br><i class='bi bi-exclamation-triangle'></i> For immediate assistance, call: 7715079304`;
        return response;
    }
    
    // Check for location-related queries
    if (lowerMessage.includes('hospital') || 
        lowerMessage.includes('location') || 
        lowerMessage.includes('nearby') || 
        lowerMessage.includes('center') || 
        lowerMessage.includes('clinic')) {
        
        conversationContext.waitingForState = true;
        return "<i class='bi bi-geo-alt'></i> Please enter your state:";
    }
    
    // Check for emergency queries
    if (lowerMessage.includes('emergency') || 
        lowerMessage.includes('urgent') || 
        lowerMessage.includes('help') || 
        lowerMessage.includes('immediate') || 
        lowerMessage.includes('critical')) {
        
        conversationContext.waitingForState = true;
        return "<i class='bi bi-exclamation-triangle'></i> For immediate assistance, please enter your state:";
    }
    
    // Process other queries
    const { topic } = findBestMatch(message);
    return getRandomResponse(topic);
}

// Function to send a message
function sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value.trim();
    
    if (message) {
        // Add user message
        addMessage(message, true);
        
        // Clear input
        input.value = '';
        
        // Show typing indicator
        const typingIndicator = showTypingIndicator();
        
        // Process message and generate response
        setTimeout(() => {
            removeTypingIndicator(typingIndicator);
            const response = processMessage(message);
            addMessage(response);
        }, 1000);
    }
}

// Function to handle Enter key press
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        sendMessage();
    }
}
