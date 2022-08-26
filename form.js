document.querySelector('main').insertAdjacentHTML('beforeend', `
  <form action="#" method="get">
  <select name="select">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>4</option>
  </select>
  <input type="text" name="field-first" placeholder="введите здесь данные">
  <input type="text" name="field-second" placeholder="введите здесь данные">
  <button type="submit">Отправить данные</button>
  </form>
`);

const formNode = document.querySelector('form')
let object = {};

formNode.addEventListener('submit', getData);
formNode.addEventListener('submit', handleFormSubmit);
function getData (e) {
  e.preventDefault()
  const { elements } = formNode;
  const data = Array.from(elements)
    .filter((item) => !!item.name)
    .map((element) => {
      const { name, value } = element

      return { name, value }
    })

  const json = JSON.stringify(data);
  const dataObject = document.createElement('div');
  dataObject.textContent = json;
  document.querySelector('main').appendChild(dataObject)

  const response = sendData(json);
  const { status } = response;

  if (status === 200) {
    alert('Ваша заявка отправлена!')
  } else   alert('Ваша заявка не отправлена!')

  formNode.reset();

  return response
}

function sendData(data) {
  return sendRequest({
    method: "GET",
    headers: { "Content-Type": "multipart/form-data" },
    body: data,
  });
}

function sendRequest({ method, headers, body }) {
  return body;
};
