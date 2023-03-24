function imagesRequest(input_value, callback, outputNode) {
    var xhr = new XMLHttpRequest();
    url = `https://picsum.photos/v2/list?limit=${input_value}`
    xhr.open('GET', url)
    
    xhr.onload = function() {
      if (xhr.status != 200) {
        console.log('Статус ответа: ', xhr.status);
      } else {
        const result = JSON.parse(xhr.response);
        if (callback) {
          callback(result, outputNode);
        }
      }
    };
  
  xhr.onerror = function() {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  };
  
  xhr.send();
  };
  
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
  };
  
function get_images() {
  var input_value = document.getElementById('num_input').value;
  const resultNode = document.getElementById('result')
  if (input_value < 1 | input_value > 10) {
    resultNode.innerHTML = "<br><span>Число вне диапазона от 1 до 10!</span>"
  } else {
    imagesRequest(input_value, displayResult, resultNode)
  }
};

get_images_btn.onclick = get_images