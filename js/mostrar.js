const $ = (selector) => document.querySelector(selector);

let avatarDom = $("#avatar-dom");
let nameDom = $("#name-dom");
let usernameDom = $("#username-dom");
let created = $("#created-dom");
let bioDom = $("#bio-dom");
let reposDom = $("#repos-dom");
let followersDom = $("#followers-dom");
let followingDom = $("#following-dom");
let locationDom = $("#location-dom");
let blogDom = $("#blog-dom");
let twitterDom = $("#twitter-dom");
let companyDom = $("#company-dom");

export function avatar(avatar) {
  avatarDom.src = avatar;
}

export function name(name) {
  nameDom.textContent = name;
}

export function username(username) {
  usernameDom.textContent = username;
  usernameDom.href = `https://github.com/${username}`;
}

export function biografia(bio) {
  bioDom.textContent = bio;
}

export function repositorio(repos) {
  reposDom.textContent = repos;
}

export function seguidores(followers) {
  followersDom.textContent = followers;
}

export function seguiendo(following) {
  followingDom.textContent = following;
}

export function localizacion(location) {
  locationDom.textContent = location;
}

export function blog(blog) {
  if (blog === "") {
    return (blogDom.textContent = "No tiene blog");
  }
  blogDom.textContent = blog;
  blogDom.href = blog;
}

export function twitter(twitter) {
  if (twitter === "") {
    return (twitterDom.textContent = "No tiene twitter");
  }
  twitterDom.textContent = twitter;
  twitterDom.href = `https://twitter.com/${twitter}`;
}

export function company(company) {
  if (company === "") {
    return (twitterDom.textContent = "No trabaja");
  }
  companyDom.textContent = company;
}
