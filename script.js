// Initialize the QR scanner
let scanner = new Instascan.Scanner({ video: document.getElementById('cameraPreview') });
scanner.addListener('scan', function (content) {
    console.log('Scanned content:', content);

    // Check if it's a valid UPI QR code (starts with 'upi://pay')
    if (content.startsWith('upi://')) {
        const params = new URLSearchParams(content.split('upi://pay?')[1]);
        const recipientName = params.get('pn');  // Payee name
        const upiId = params.get('pa');         // UPI ID
        const amount = params.get('am');        // Amount (optional)

        // Show the payment form and populate details
        document.getElementById('paymentSection').style.display = 'block';
        document.getElementById('recipientName').textContent = recipientName;
        document.getElementById('upiId').textContent = upiId;

        // If the amount is provided in the QR, set it in the input field
        if (amount) {
            document.getElementById('amount').value = amount;
        } else {
            document.getElementById('amount').value = ''; // Clear amount field if not provided
        }

        // Stop the scanner after a successful scan
        scanner.stop();
        document.getElementById('cameraPreview').style.display = 'none'; // Hide the video preview
    } else {
        alert('Invalid QR code. Please scan a valid UPI payment QR code.');
    }
});

// Start the QR code scan when the button is clicked
document.getElementById('scanButton').addEventListener('click', function () {
    // Check if the device is mobile (screen width <= 768px)
    if (window.innerWidth <= 768) {
        // Start the scanner
        Instascan.Camera.getCameras().then(function (cameras) {
            if (cameras.length > 0) {
                scanner.start(cameras[0]); // Start with the first camera
                document.getElementById('cameraPreview').style.display = 'block'; // Show the video element
            } else {
                alert('No cameras found.');
            }
        }).catch(function (e) {
            console.error(e);
            alert('Error accessing camera.');
        });
    } else {
        // If the screen is larger than mobile, show an alert
        alert('Camera scanning is not supported on devices larger than mobile screens.');
    }
});

// Payment Form Submission
document.getElementById('paymentForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent page refresh on form submission

    // Get form values
    const amount = document.getElementById('amount').value;
    const upiPin = document.getElementById('upiPin').value;

    if (upiPin.length !== 6) {
        alert('UPI Pin should be 6 digits.');
        return;
    }

    // Generate a random Transaction ID
    const transactionID = 'TXN' + Math.floor(Math.random() * 1000000);

    // Hide Payment Form and Show Success Section
    document.getElementById('paymentSection').style.display = 'none';
    document.getElementById('successSection').style.display = 'block';

    // Display Success Details
    document.getElementById('transactionID').textContent = transactionID;
    document.getElementById('paidAmount').textContent = amount;
});
