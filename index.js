const $ = (e) => document.querySelector(e);

const form = $("#dataForm");

const phone = $("#phone");
const fullname = $("#fullname");
const zipCode = $("#zipCode");
const salary = $("#salary");
const observations = $("#observations");
const age = $("#age");
const studyLevel = $("#studyLevel");
const isAlive = $("#isAlive");

const data = [
  phone,
  fullname,
  zipCode,
  salary,
  observations,
  age,
  studyLevel,
  isAlive,
];

//validation
form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateNumber(phone.value)
    ? phone.classList.remove("error")
    : phone.classList.add("error");

  /^[a-zA-Z()]+$/.test(fullname.value)
    ? fullname.classList.remove("error")
    : fullname.classList.add("error");

  validateNumber(zipCode.value)
    ? zipCode.classList.remove("error")
    : zipCode.classList.add("error");

  validateNumber(salary.value)
    ? salary.classList.remove("error")
    : salary.classList.add("error");

  validateNumber(age.value)
    ? age.classList.remove("error")
    : age.classList.add("error");

  validateNumber(studyLevel.value)
    ? studyLevel.classList.remove("error")
    : studyLevel.classList.add("error");

  data.some((e) => e.classList.contains("error"))
    ? alert("Por favor, verifique los campos.")
    : alert("Dados validados con éxito!");
});

const validateNumber = (number) => !isNaN(+number) && number.length > 0;
