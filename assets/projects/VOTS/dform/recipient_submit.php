<?php
require 'db.php';

// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Create upload directory if it doesn't exist
$uploadDir = 'uploads/';
if (!file_exists($uploadDir)) {
    mkdir($uploadDir, 0777, true);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Debug: Print received data
    error_log("POST Data received: " . print_r($_POST, true));
    error_log("FILES Data received: " . print_r($_FILES, true));

    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $organ_needed = $_POST['organ_needed'] ?? '';
    $needed_by = $_POST['needed_by'] ?? '';
    $response = array('success' => false, 'message' => '', 'type' => 'recipient');

    // Debug: Print extracted values
    error_log("Extracted values - Name: $name, Email: $email, Phone: $phone, Organ: $organ_needed, Needed by: $needed_by");

    // Validate required fields (only name and email are mandatory)
    if (empty($name) || empty($email)) {
        echo json_encode(['success' => false, 'message' => '❌ Name and Email are required.', 'type' => 'recipient']);
        exit;
    }

    // Check if files are uploaded
    if (!isset($_FILES['aadhaar']) || !isset($_FILES['medicalReport'])) {
        error_log("Missing files in upload: " . print_r($_FILES, true));
        echo json_encode(['success' => false, 'message' => '❌ Please select both Aadhaar and medical report files.', 'type' => 'recipient']);
        exit;
    }

    // Validate Aadhaar file
    $aadhaar_file = $_FILES['aadhaar'];
    $aadhaar_ext = strtolower(pathinfo($aadhaar_file['name'], PATHINFO_EXTENSION));
    if ($aadhaar_ext !== 'pdf') {
        echo json_encode(['success' => false, 'message' => '❌ Aadhaar file must be in PDF format.', 'type' => 'recipient']);
        exit;
    }

    // Validate Medical Report file
    $medical_file = $_FILES['medicalReport'];
    $medical_ext = strtolower(pathinfo($medical_file['name'], PATHINFO_EXTENSION));
    if ($medical_ext !== 'pdf') {
        echo json_encode(['success' => false, 'message' => '❌ Medical Report must be in PDF format.', 'type' => 'recipient']);
        exit;
    }

    // Generate unique filenames
    $aadhaar_filename = uniqid() . '_aadhaar.' . $aadhaar_ext;
    $medical_filename = uniqid() . '_medical.' . $medical_ext;

    // Move uploaded files
    if (!move_uploaded_file($aadhaar_file['tmp_name'], $uploadDir . $aadhaar_filename)) {
        error_log("Failed to move Aadhaar file: " . $aadhaar_file['error']);
        echo json_encode(['success' => false, 'message' => '❌ Failed to upload Aadhaar file. Please try again.', 'type' => 'recipient']);
        exit;
    }

    if (!move_uploaded_file($medical_file['tmp_name'], $uploadDir . $medical_filename)) {
        error_log("Failed to move Medical Report file: " . $medical_file['error']);
        // Clean up the already uploaded Aadhaar file
        unlink($uploadDir . $aadhaar_filename);
        echo json_encode(['success' => false, 'message' => '❌ Failed to upload Medical Report. Please try again.', 'type' => 'recipient']);
        exit;
    }

    // Read files for database storage
    $aadhaarContent = file_get_contents($uploadDir . $aadhaar_filename);
    $medicalContent = file_get_contents($uploadDir . $medical_filename);

    if ($aadhaarContent !== false && $medicalContent !== false) {
        // Prepare the statement
        $stmt = $conn->prepare("INSERT INTO recipient (name, email, phone, organ_needed, needed_by, aadhaar, medical_report) VALUES (?, ?, ?, ?, ?, ?, ?)");
        if (!$stmt) {
            error_log("Prepare failed: " . $conn->error);
            $response['message'] = "❌ Database error: " . $conn->error;
            echo json_encode($response);
            exit();
        }

        // Bind parameters
        if (!$stmt->bind_param("sssssss", $name, $email, $phone, $organ_needed, $needed_by, $aadhaarContent, $medicalContent)) {
            error_log("Binding parameters failed: " . $stmt->error);
            $response['message'] = "❌ Error binding parameters: " . $stmt->error;
            echo json_encode($response);
            exit();
        }

        // Execute and check result
        if ($stmt->execute()) {
            error_log("Query executed successfully. Insert ID: " . $stmt->insert_id);
            $response['success'] = true;
            $response['message'] = "✅ Form submitted successfully.";
        } else {
            error_log("Execute failed: " . $stmt->error);
            $response['message'] = "❌ Error: " . $stmt->error;
            unlink($uploadDir . $aadhaar_filename);
            unlink($uploadDir . $medical_filename);
        }

        $stmt->close();
    } else {
        error_log("Failed to read file contents");
        $response['message'] = "❌ Error reading uploaded files.";
        unlink($uploadDir . $aadhaar_filename);
        unlink($uploadDir . $medical_filename);
    }

    $conn->close();
    echo json_encode($response);
} else {
    echo json_encode(array('success' => false, 'message' => '❌ Invalid request.', 'type' => 'recipient'));
}
?>
