function checkLogin() {
    let mobile = document.getElementById('mobileNumber').value;

    // This is a simple test. In a real app, this connects to your database.
    if (mobile === "9999") { 
        alert("Welcome Teacher! Opening Teacher Panel...");
        window.location.href = "teacher.html"; 
    } else {
        alert("Student Login successful for number: " + mobile);
    }
}
