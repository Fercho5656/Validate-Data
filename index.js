const $ = e => document.querySelector(e);
const $$ = e => document.querySelectorAll(e);

const dataTypes = {
    'string': 'string',
    'number': 'number',
    'boolean': 'boolean',
}

const form = $('#dataForm');

const phone = $('#phone');
const fullname = $('#fullname');
const zipCode = $('#zipCode');
const salary = $('#salary');
const observations = $('#observations');
const age = $('#age');
const studyLevel = $('#studyLevel');
const isAlive = $('#isAlive');
//const validateInfoBtn = $('#validateInfo');

const data = [
    phone,
    fullname,
    zipCode,
    salary,
    observations,
    age,
    studyLevel,
    isAlive
]

form.addEventListener('submit', e => {
    e.preventDefault();
    !isNaN(+phone.value) ? phone.classList.remove('error') : phone.classList.add('error');
    /^[a-zA-Z()]+$/.test(fullname.value) ? fullname.classList.remove('error') : fullname.classList.add('error');
    !isNaN(+zipCode.value) ? zipCode.classList.remove('error') : zipCode.classList.add('error');
    !isNaN(+salary.value) ? salary.classList.remove('error') : salary.classList.add('error');
    !isNaN(+age.value) ? age.classList.remove('error') : age.classList.add('error');
    data.any(e => e.classList.contains('error')) ? alert('Por favor, verifique los campos.') : alert('Dados validados con éxito!');
});

const validateType = (data, type) => {
    return typeof data === type;
}