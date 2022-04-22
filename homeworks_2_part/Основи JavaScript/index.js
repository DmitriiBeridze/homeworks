let userName = prompt("Як ваше ім'я?");
let userLastName = prompt("Як ваше прізвище?");

alert(`Доброго дня,  ${userName + " " + userLastName} !`);

const currentYear = 2020;
let yearBirth = prompt("Назвіть рік вашого народження");
let yearOld = currentYear - yearBirth;
alert("Ваш вік:" + " " + yearOld + "рік");

let userLength = prompt("Введіть потрібну довжину в см.");
alert(`Периметр прямокутника складає:  ${4 * userLength} см.`);

let userRadius = prompt("Введіть потрібний радіус в см. ");
alert(
  `Площа кола складає: ${userRadius * userRadius * Math.PI.toFixed(2)} см.`
);

let distance = prompt(
  userName + ", " + "вкажіть відстань між двома містами в км."
);
let time = prompt(
  userName + ", " + "вкажіть час, за який треба подолати відстань в год."
);
alert(`Швидкість, з якою необхідно рухатися: ${distance / time} км/год.  `);

const currency = 29;
let userCash = prompt(userName + ", " + "введіть потрібну суму для обміну USD");
alert(`Сума після конвертаціі: ${currency * userCash} грн.`);
