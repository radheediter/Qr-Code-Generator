document.getElementById("generateBtn").addEventListener("click", function() {
    const linkInput = document.getElementById("linkInput").value;
    const qrcodeDiv = document.getElementById("qrcode");

    if (linkInput.trim() !== "") {
        const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(linkInput)}`;
        const qrCodeImg = document.createElement("img");
        qrCodeImg.src = qrCodeUrl;

        qrcodeDiv.innerHTML = "";
        qrcodeDiv.appendChild(qrCodeImg);

        // Enable share button
        const shareBtn = document.createElement("button");
        shareBtn.innerText = "Share QR Code";
        shareBtn.addEventListener("click", function() {
            // Create a pop-up window with sharing options
            const popup = window.open("", "Share QR Code", "width=500,height=300");

            // HTML content for the pop-up window
            const popupContent = `
                <h2>Select where you want to share the QR Code:</h2>
                <ul>
                <li><a href="https://api.whatsapp.com/send?text=${encodeURIComponent(qrCodeUrl)}" target="_blank"><img src="whatsapp.png" alt="WhatsApp"></a></li>
                <li><a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(qrCodeUrl)}" target="_blank"><img src="facebook.png" alt="Facebook"></a></li>
                <li><a href="https://twitter.com/intent/tweet?url=${encodeURIComponent(qrCodeUrl)}" target="_blank"><img src="twitter.png" alt="Twitter"></a></li>
                <li><a href="https://www.instagram.com/share?url=${encodeURIComponent(qrCodeUrl)}" target="_blank"><img src="instagram.png" alt="Instagram"></a></li>
                <li><a href="https://www.snapchat.com/share?url=${encodeURIComponent(qrCodeUrl)}" target="_blank"><img src="snapchat.png" alt="Snapchat"></a></li>
                <!-- Add more social media platforms here -->
            </ul>
            
            `;

            popup.document.body.innerHTML = popupContent;
        });

        qrcodeDiv.appendChild(shareBtn);
    } else {
        qrcodeDiv.innerHTML = "";
    }
});
