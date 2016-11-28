// Отрисовка цитаты канвасом
function createImage() {
    var canvasId = 'image-debug';
    var canvas = document.getElementById(canvasId),
        ctx = canvas.getContext('2d'),
        cover = document.getElementById('cover'),
        text = document.getElementById('text'),
        title = document.getElementById('title'),
        // subtitle = document.getElementById('subtitle'),
        backgroundImage = window.backgroundImage,
        bgPosition = document.getElementById('bg-position').value;

    // Собираем параметры заголовка из скрытых полей
    var titleFontFamily = document.getElementById('title-font-family').value,
        titleFontSize = document.getElementById('title-font-size').value,
        titleFontWeight = document.getElementById('title-font-weight').value;

     // Склеиваем параметры заголовка
    var titleFontStyle = `${titleFontWeight} ${titleFontSize}px ${titleFontFamily}`,
        maxWidth = '750';

    // Включаем видимость канваса
    document.getElementById(canvasId).style.display='block';

    canvas.height = cover.offsetHeight;
    canvas.width = cover.offsetWidth;

    // Получаем высоту фоновой картинки
    var scaleW = canvas.width / backgroundImage.width;
    var scaleH = canvas.height / backgroundImage.height;
    var scale = scaleW > scaleH ? scaleW : scaleH;
    var cropWidth = backgroundImage.width * scale;
    var cropHeight = backgroundImage.height * scale;

    // Рисуем отцентрованную по вертикали картинку
    ctx.drawImage(backgroundImage, 0, -bgPosition*0.01*(cropHeight-canvas.offsetHeight), cropWidth, cropHeight);

    // Затемняем картинку
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(0,0,0,0.6)';
    ctx.fill();

    // Пишем заголовок
    ctx.font = titleFontStyle;
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.textAlign = 'center';
    wrapText(ctx, title.value, 485, title.clientHeight + 85, maxWidth, 1.618 * titleFontSize);

    // Пишем логотип
    ctx.font = '32px Permian Sans';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.textAlign = 'center';
    ctx.fillText('abuse.media', 480, 442);
}

function changeBgPosition(position) {
	document.getElementById('cover').style.backgroundPosition = `center ${position}%`;
	createImage();
}

// Создание кнопки скачивания
function downloadImg(link, canvasId) {
	var canvas = document.getElementById(canvasId),
      title = document.getElementById('title'),
      filename = transLit(title.value.slice(0,15))+'(quote)….png';
  link.href = canvas.toDataURL("image/png");
  link.download = filename;
}

function showPreview(button) {
    var canvas = document.getElementById('image-debug');
    createImage();
    if (canvas.style.visibility == 'hidden' || !canvas.style.visibility) {
        canvas.style.visibility = 'visible';
        button.className='button button_selected';
    } else if (canvas.style.visibility == 'visible') {
        canvas.style.visibility = 'hidden';
        button.className='button';
    }
}
