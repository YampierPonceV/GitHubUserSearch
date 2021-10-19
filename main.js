import { getUser } from "./js/api.js";

const $ = (selector) => document.querySelector(selector);

const btnBuscar = $("#btn-sarch");
const inputBuscar = $("#input-search");
const user = "yampierponcev";
const loaderIcon = $("#loader-icon");
const txtButon = $("#text-search");

getUser(user);

btnBuscar.onclick = () => {
  if (inputBuscar.value === "") {
    inputBuscar.focus();
    return alert("Ingrese un nombre de usuario");
  }
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
