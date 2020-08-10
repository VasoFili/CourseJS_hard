const lang = prompt("Введите язык");

if (lang === "ru") {
   console.log('Пн', 'Вт', 'СР', 'Чт', 'Пт', 'Сб', 'Вс');
} else if (lang === "en") {
   console.log('Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun');
};

switch (lang) {
   case "ru":
      console.log('Пн', 'Вт', 'СР', 'Чт', 'Пт', 'Сб', 'Вс');
      break;
   case "en":
      console.log('Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun');
      break;
};

// Я старался выполнить этот способ самостоятельно, но по совету сэнсея я начал гуглить и нагуглил)))
const lang_array = [];
lang_array["ru"] = ['Пн', 'Вт', 'СР', 'Чт', 'Пт', 'Сб', 'Вс'];
lang_array["en"] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
console.log(lang_array[lang]);

const namePerson = prompt("Введите имя");
let result = namePerson === "Артем" ? "Директор" : "Максим" ? "Преподаватель" : "Студент";
console.log(result);