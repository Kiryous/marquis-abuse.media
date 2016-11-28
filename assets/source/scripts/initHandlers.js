$('#bg-position').on('input', (e) => {
  let value = e.target.value;
  changeBgPosition(value);
});

$('#imageUrl').on('change', (e) => {
  let value = e.target.value;
  changeBg(value);
});

$('#download-button').on('click', (e) => {
  let link = e.target;
  downloadImg(link, 'image-debug');
});
