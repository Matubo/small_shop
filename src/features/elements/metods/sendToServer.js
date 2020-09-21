let url = "http://localhost:3005/SENDSQLDATA"; //адрес сервера/адрес запроса

async function sendSQLData(name, number, order_data) {
  let json = JSON.stringify({ name, number, order_data });

  let response = await fetch(url, {
    //промис запроса
    method: "POST", //метод запроса
    headers: {
      "Content-Type": "application/json", //вид отсылаемых данных
    },
    body: JSON.stringify({ data: json }),
  });
  if (response.ok) {
    json = await response.json(); //ответ парсим из джсон и получаем
    console.log(json); //выводим ответ
    console.log(json);
  } else {
    console.log(`error ${response.status}`);
  }
}

export default sendSQLData;
