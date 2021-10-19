import {
  name,
  avatar,
  username,
  biografia,
  repositorio,
  seguidores,
  seguiendo,
  localizacion,
  blog,
  twitter,
  company,
} from "./mostrar.js";
const URL = "https://api.github.com/users/";
const $ = (selector) => document.querySelector(selector);

const card = $(".card");
const mensaje = $("#mensaje");

const getUser = (user) => {
  fetch(URL + user)
    .then((response) => {
      if (response.ok) {
        card.classList.remove("card-no-encontrado");
        mensaje.classList.remove("mensaje-mostrar");
        return response.json();
      } else {
        card.classList.add("card-no-encontrado");
        mensaje.classList.add("mensaje-mostrar");
        throw new Error("Error en la peticion");
      }
    })
    .then((data) => {
      avatar(data.avatar_url);
      name(data.name);
      username(data.login);
      biografia(data.bio);
      repositorio(data.public_repos);
      seguidores(data.followers);
      seguiendo(data.following);
      localizacion(data.location);
      blog(data.blog);
      twitter(data.twitter_username);
      company(data.company);
    });
};

export { getUser };
