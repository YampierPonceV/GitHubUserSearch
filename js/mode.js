const $ = (selector) => document.querySelector(selector);

const body = $("body");
const btnSwitch = $("#mode-switch");
const inputBuscar = $("#input-search");
const cardDark = $(".card");
const informationDark = $(".information");

function cambiarModo() {
  btnSwitch.onclick = () => {
    body.classList.toggle("dark");
    btnSwitch.classList.toggle("dark");
    inputCambiarADark();
    buttonCambiarImage();
    cardDarkCambiar();
    informationDarkCambiar();
  };
}

function inputCambiarADark() {
  inputBuscar.classList.toggle("dark-input");
}

function buttonCambiarImage() {
  btnSwitch.classList.toggle("mode-switch-icon");
}

function cardDarkCambiar() {
  cardDark.classList.toggle("dark-card");
}

function informationDarkCambiar() {
  informationDark.classList.toggle("information-dark");
}

export { cambiarModo };
