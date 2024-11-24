document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('pdfFile');
    const pdfNameInput = document.getElementById('pdfName');
    
    if (fileInput.files.length === 0) {
        displayMessage("Please select a PDF file.", "error");
        return;
    }

    const file = fileInput.files[0];
    
    if (file.type !== "application/pdf") {
        displayMessage("Please upload a valid PDF file.", "error");
        return;
    }

    // Simulating file upload and adding to the list
    addPdfToList(pdfNameInput.value, URL.createObjectURL(file));
    
    // Clear input fields
    fileInput.value = '';
    pdfNameInput.value = '';
    
    displayMessage("PDF uploaded successfully!", "success");
});

function displayMessage(message, type) {
    const messageDiv = document.getElementById('message');
    
    messageDiv.textContent = message;

    if (type === "success") {
        messageDiv.style.color = "green";
    } else {
        messageDiv.style.color = "red";
    }
}

function addPdfToList(name, url) {
    const pdfList = document.getElementById('pdfList');
    
    const listItem = document.createElement('li');
    
    listItem.innerHTML = `<a href="${url}" target="_blank">${name}</a>`;
    
    pdfList.appendChild(listItem);
}