import { getUser } from "./js/api.js";

const $ = (selector) => document.querySelector(selector);

const btnBuscar = $("#btn-sarch");
const inputBuscar = $("#input-search");
const user = "yampierponcev";

getUser(user);

btnBuscar.onclick = () => {
  const user = inputBuscar.value;
  getUser(user);
};