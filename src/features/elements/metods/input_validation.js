function input_validation(name, number) {
  let reg_number = /^[78]9[0-9]{9}$/; //проверяем что в начале 7 или 8 потом 9 и 9 цифр
  let feedback = {
    flag: true,
    name: {
      message: "Верный формат данных",
      data: "",
    },
    number: {
      message: "Верный формат данных",
      data: "",
    },
  };

  if (!name) {
    feedback.flag = false;
    feedback.name.message = "Пустое поле";
  } else if (name.length > 150) {
    feedback.flag = false;
    feedback.name.message = "Превышена длинна строки";
  } else {
    feedback.name.data = name;
  }
  if (!number) {
    feedback.flag = false;
    feedback.number.message = "Пустое поле";
  } else {
    number = number.replace(/\D/g, ""); //удаляем все нецифровые символы напр +()-
    if (!reg_number.test(number)) {
      //если тест на подх данные не пройден, записываем что все плохенько
      feedback.flag = false;
      feedback.number.message = "Неверный формат данных";
    } else {
      feedback.number.data = number;
    }
  }

  return feedback;
}

export default input_validation;
