//Handle files select
document.getElementById('files').
  addEventListener('change', handleFileSelect, false);

//Handle change background image url
document.getElementById('imageUrl')
  .addEventListener('change', (e) => {
    let value = e.target.value;
    setBackgroundImage(value);
  }, false);

//Handle title change
document.getElementById('title')
  .addEventListener('change', createImage, false);

//Handle input vertical background position
document.getElementById('bg-position')
  .addEventListener('input', (e) => {
    let value = e.target.value;
    changeBgPosition(value);
  }, false);

//Handle download
document.getElementById('download-button')
  .addEventListener('click', (e) => {
    let link = e.target;
    downloadImg(link, 'image-debug');
  }, false);
