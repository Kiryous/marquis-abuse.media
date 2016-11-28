function setBackgroundImage(url) {
  // TODO: add preloader

  var cover = document.getElementById('cover');
  cover.style.backgroundImage = `url(${url})`;

  window.backgroundImage = new Image();
  window.backgroundImage.src = url;
  window.backgroundImage.onload = () => {
    createImage();
  };
}
