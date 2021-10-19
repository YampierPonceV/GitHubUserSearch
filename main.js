import { getUser } from "./js/api.js";
import { cambiarModo } from "./js/mode.js";

const $ = (selector) => document.querySelector(selector);

const btnBuscar = $("#btn-sarch");
const inputBuscar = $("#input-search");
const user = "yampierponcev";
const loaderIcon = $("#loader-icon");
const txtButon = $("#text-search");
const alertMensaje = $("#alert-mensaje");

getUser(user);

btnBuscar.onclick = () => {
  if (inputBuscar.value === "") {
    inputBuscar.focus();
    alertMensaje.classList.add("alert-mensaje-mostrar");
    return;
  }
  alertMensaje.classList.remove("alert-mensaje-mostrar");
  const user = inputBuscar.value;
  loaderIcon.classList.add("icon-loader-mostrar");
  txtButon.classList.add("text-search");

  setTimeout(() => {
    getUser(user);
    inputBuscar.value = "";
    inputBuscar.focus();
    loaderIcon.classList.remove("icon-loader-mostrar");
    txtButon.classList.remove("text-search");
  }, 1000);
};

cambiarModo();
