let url = "/GETSQLDATA"; //адрес сервера/адрес запроса

async function getSQLData(id) {
  let json;
  let startId = 1;
  if (id !== undefined) {
    startId = id;
  }
  try {
    let response = await fetch(url, {
      //промис запроса
      method: "POST", //метод запроса
      headers: {
        "Content-Type": "application/json", //вид отсылаемых данных
      },
      body: JSON.stringify({ id: startId }),
    });
    if (response.ok) {
      //если запрос ок
      json = await response.json(); //ответ парсим из джсон и получаем
      console.log(json); //выводим ответ //!временно
      return { status: true, data: json };
    } else {
      console.log(`error ${response.status}`);
      return { status: false, data: response.status };
    }
  } catch (e) {
    return { status: false, data: "Сервер не доступен, попробуйте позже" };
  }
}

export default getSQLData;
