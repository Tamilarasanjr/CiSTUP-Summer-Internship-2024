function handleUpload() {
    const input = document.getElementById('imageInput');
    const originalImage = document.getElementById('originalImage');
    const processedImage = document.getElementById('processedImage');

    const file = input.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            originalImage.src = e.target.result;
            // Here you can add code to send the image to your backend for object detection processing
            // and update the processedImage.src accordingly
        }
        reader.readAsDataURL(file);
    } else {
        // Handle case when no file is selected
        alert('Please select an image file.');
    }
}
