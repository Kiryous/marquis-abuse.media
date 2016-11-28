// Чтение и вставка файла из инпута
function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object
    var cover = document.getElementById('cover');

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

        // Only process image files.
        if (!f.type.match('image.*')) {
            continue;
        }

        var reader = new FileReader();

        // Closure to capture the file information.
        reader.onload = (function(theFile) {
            return function(e) {
                // Render thumbnail.
                cover.style.backgroundImage = 'url(' + e.target.result + ')';
                var backgroundImage = document.getElementById('background-image');
                backgroundImage.src = e.target.result;
            };
        })(f);
        // Read in the image file as a data URL.
        reader.readAsDataURL(f);
    }
    setTimeout(createImage, 100);
}
