let url = "http://localhost:3005/GETSQLDATA"; //адрес сервера/адрес запроса

async function getSQLData(id) {
  let json;
  let startId = 1;
  if (id !== undefined) {
    startId = id;
  }
  let response = await fetch(url, {
    //промис запроса
    method: "POST", //метод запроса
    headers: {
      "Content-Type": "application/json", //вид отсылаемых данных
    },
    body: JSON.stringify({ id: startId }),
  }); //данные //!временно беcсмысленные
  if (response.ok) {
    //если запрос ок
    json = await response.json(); //ответ парсим из джсон и получаем
    console.log(json); //выводим ответ //!временно
    return json;
  } else {
    console.log(`error ${response.status}`);
  }
}

export default getSQLData;
