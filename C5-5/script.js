function displayResult(apiData, outputNode) {
  let cards = '';
  // console.log('start cards', cards);

  apiData.forEach(item => {
    const cardBlock = `
        <div class="card">
          <img
            src="${item.download_url}"
            class="card-image"
          />
          <p>${item.author}</p>
        </div>
      `;
    cards = cards + cardBlock;
  });

  // console.log('end cards', cards);

  outputNode.innerHTML = cards;
  
  localStorage.setItem('last_images', cards)
};


function isInputError(value) {
  if ((value < 1 | value > 10) | isNaN(value)) {
    return true;
} else {
    return false
  }
}; 

function get_images() {
  let pageNo_value = document.getElementById('input1').value;
  let limit_value = document.getElementById('input2').value;
  let outputNode = document.getElementById('output');
  // let imageNode = document.getElementById('image');
  let pageNo_error = isInputError(pageNo_value);
  let limit_error = isInputError(limit_value);
  if (pageNo_error && limit_error) {
    outputNode.innerHTML = `<span>Номер страницы и лимит вне диапазона от 1 до 10</span>`;
  } else if (pageNo_error) {
    outputNode.innerHTML = `<span>Номер страницы вне диапазона от 1 до 10</span>`;
  } else if (limit_error) {
    outputNode.innerHTML = `<span>Лимит вне диапазона от 1 до 10</span>`;
  }
  else {
    fetch(`https://picsum.photos/v2/list?page=${pageNo_value}&limit=${limit_value}`)
      .then((response) => {return response.json();})
      .then((response) => {
        console.log(response);
        displayResult(response, outputNode)})
      .catch(() => {console.log('error')});
  }
};

get_images_btn.onclick = get_images

// Вывод последних изображений из предыдущей сессии, если таковые имеются
if (localStorage.getItem('last_images')) {
  let outputNode = document.getElementById('output')
  outputNode.innerHTML = localStorage.getItem('last_images')
}
