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
let persona;

const getUser = (user) => {
  fetch(URL + user)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.edad);
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
      /* persona.name = data.name;
      persona.login = data.login;
      persona.created = data.created_at;
      persona.bio = data.bio;
      persona.repos = data.public_repos;
      persona.followers = data.followers;
      persona.following = data.following;
      persona.location = data.location;
      persona.blog = data.blog;
      persona.edad = data.edad;
      persona.location = data.location;
      persona.blog = data.blog;
      persona.twitter = data.twitter_username;
      persona.company = data.company; */
    });

  return console.log(persona);
};

/* async function getUsuarios(id) {
  var response = { result: true };
  try {
    const pokemon = await fetch(`${URL}${id}`);
    const data = await pokemon.json();
    response = { ...response, ...data };
  } catch (e) {
    response = { result: false, name: "" };
  }
  return reponse;
} */

export { getUser, persona };
