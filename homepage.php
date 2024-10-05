<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smart Card Payment</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container">
        <header>
            <div class="logo-container">
                <img src="assets/logo.png" alt="College Logo" class="logo">
                <h1>Smart Card Payment</h1>
            </div>
        </header>

        <main>
            <!-- Scanner Section -->
            <section class="scanner" id="scannerSection">
                <h2>Scan to Pay</h2>
                <video id="cameraPreview" autoplay></video>
                <button id="scanButton">Start QR Code Scan</button>
            </section>

            <!-- Payment Form Section (Initially Hidden) -->
            <section class="payment" id="paymentSection" style="display: none;">
                <h2>Payment Details</h2>

                <div class="payment-details">
                    <p><strong>Pay to:</strong> <span id="recipientName"></span></p>
                    <p><strong>UPI ID:</strong> <span id="upiId"></span></p>
                </div>

                <form id="paymentForm">
                    <div class="form-group">
                        <label for="amount">Enter Amount:</label>
                        <input type="number" id="amount" placeholder="Enter Amount" required>
                    </div>

                    <div class="form-group">
                        <label for="upiPin">Enter UPI Pin:</label>
                        <input type="password" id="upiPin" placeholder="Enter UPI Pin" required>
                    </div>

                    <button type="submit">Proceed to Pay</button>
                </form>
            </section>

            <!-- Payment Success Section (Initially hidden) -->
            <section class="payment-success" id="successSection" style="display: none;">
                <h2>Payment Successful!</h2>
                <img src="assets/success-check.png" alt="Success" class="success-icon">
                <p><strong>Transaction ID:</strong> <span id="transactionID"></span></p>
                <p><strong>Amount Paid:</strong> ₹<span id="paidAmount"></span></p>
            </section>

            <!-- Instructions Section -->
            <section class="instructions">
                <h2>How to Scan</h2>
                <ol>
                    <li>Ensure your camera is functioning properly.</li>
                    <li>Click on "Start QR Code Scan" button.</li>
                    <li>Point your camera at the UPI QR code until it scans automatically.</li>
                    <li>Check the details displayed and enter the amount and UPI PIN.</li>
                    <li>Click "Proceed to Pay" to complete your transaction.</li>
                </ol>
            </section>
        </main>

        <footer>
            <p>&copy; 2024 Smart Card System. All rights reserved.</p>
            <p>"Empowering students through technology."</p>
        </footer>
    </div>

    <!-- Instascan.js for QR Code Scanning -->
    <script src="https://rawgit.com/schmich/instascan-builds/master/instascan.min.js"></script>
    <script src="script.js"></script>
</body>
</html>
