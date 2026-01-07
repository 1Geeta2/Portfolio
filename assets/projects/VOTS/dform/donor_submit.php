<?php
require 'db.php';

// Create upload directory if it doesn't exist
$uploadDir = 'uploads/';
if (!file_exists($uploadDir)) {
    mkdir($uploadDir, 0777, true);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $response = array('success' => false, 'message' => '', 'type' => 'donor');

    // Check file uploads
    if (isset($_FILES['aadhaar']) && $_FILES['aadhaar']['error'] === UPLOAD_ERR_OK &&
        isset($_FILES['medicalReport']) && $_FILES['medicalReport']['error'] === UPLOAD_ERR_OK) {
        
        // Check file formats
        $aadhaarInfo = pathinfo($_FILES['aadhaar']['name']);
        $medicalInfo = pathinfo($_FILES['medicalReport']['name']);
        $aadhaarExt = strtolower($aadhaarInfo['extension']);
        $medicalExt = strtolower($medicalInfo['extension']);
        
        // Define allowed formats
        $allowedFormats = array('pdf', 'doc', 'docx', 'jpg', 'jpeg', 'png');
        
        if (!in_array($aadhaarExt, $allowedFormats) || !in_array($medicalExt, $allowedFormats)) {
            $response['message'] = "❌ Invalid file format. Allowed formats: PDF, DOC, DOCX, JPG, JPEG, PNG";
            echo json_encode($response);
            exit();
        }

        // Generate unique filenames
        $aadhaarFileName = uniqid('aadhaar_') . '_' . basename($_FILES['aadhaar']['name']);
        $medicalFileName = uniqid('medical_') . '_' . basename($_FILES['medicalReport']['name']);
        
        // Set complete upload paths
        $aadhaarPath = $uploadDir . $aadhaarFileName;
        $medicalPath = $uploadDir . $medicalFileName;
        
        // Move files to upload directory
        if (move_uploaded_file($_FILES['aadhaar']['tmp_name'], $aadhaarPath) &&
            move_uploaded_file($_FILES['medicalReport']['tmp_name'], $medicalPath)) {
            
            // Read files for database storage
            $aadhaarContent = file_get_contents($aadhaarPath);
            $medicalContent = file_get_contents($medicalPath);
            
            if ($aadhaarContent !== false && $medicalContent !== false) {
                // Prepare the statement
                $stmt = $conn->prepare("INSERT INTO donor (name, email, phone, aadhaar, medical_report) VALUES (?, ?, ?, ?, ?)");
                if (!$stmt) {
                    $response['message'] = "❌ Database error: " . $conn->error;
                    echo json_encode($response);
                    exit();
                }
                
                // Bind parameters
                $stmt->bind_param("sssss", $name, $email, $phone, $aadhaarContent, $medicalContent);
                
                // Execute and check result
                if ($stmt->execute()) {
                    $response['success'] = true;
                    $response['message'] = "✅ Donor Registration Successful!";
                   } else {
                    $response['success'] = false;
                    $response['message'] = "❌ Error: " . $stmt->error;
                    unlink($aadhaarPath);
                    unlink($medicalPath);
                }
                
                
                $stmt->close();
            } else {
                $response['message'] = "❌ Error reading uploaded files.";
                unlink($aadhaarPath);
                unlink($medicalPath);
            }
        } else {
            $response['message'] = "❌ Error moving uploaded files to destination.";
        }
    } else {
        $response['message'] = "❌ Please select both Aadhaar and medical report files.";
    }

    $conn->close();
    echo json_encode($response);
} else {
    echo json_encode(array('success' => false, 'message' => '❌ Invalid request.', 'type' => 'donor'));
}
?>
