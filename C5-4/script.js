function isInputError(value) {
  if (value < 100 | value > 300) {
    const warning_message = "Одно из чисел вне диапазона от 100 до 300!";  
    return warning_message;
} else if (isNaN(value)) {
    const warning_message = "Одно из введеных значений не число!";
    return warning_message;
} else {
    return false
  }
}; 

function get_image() {
  let input1_value = document.getElementById('input1').value;
  let input2_value = document.getElementById('input2').value;
  let warningNode = document.getElementById('warning');
  let imageNode = document.getElementById('image');
  let input1_error = isInputError(input1_value);
  let input2_error = isInputError(input2_value);
  if (input1_error) {
    warningNode.innerHTML = `<span>${input1_error}</span>`;
  } else if (input2_error) {
    warningNode.innerHTML = `<span>${input2_error}</span>`;
  }
  else {
    fetch(`https://picsum.photos/${input1_value}/${input2_value}`)
      .then(response => {
        imageNode.src=response.url;
        warningNode.innerHTML = ''})
      .catch(() => {console.log('error')});
  }
};

get_images_btn.onclick = get_image

// ПРИМЕЧАНИЕ. Если парсить методом response.json() то выдает пустой объект {} и дальше дает ошибку и попадает в catch с выводом 'error' в консоль. На экран картинку по ссылке `https://picsum.photos/${input1_value}/${input2_value}` выводит код выше именно в таком виде.