const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat (name) {
  cats.push(name);
}

function destructivelyPrependCat (name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat () {
  cats.pop();
}

function destructivelyRemoveFirstCat () {
  cats.shift();
}

function appendCat (name) {
  return [...cats, name];
}

function prependCat (name) {
  return [name, ...cats];
}

function removeFirstCat () {
  return cats.slice(1);
}

function removeLastCat () {
  return
tune kivasu
10:21 AM
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver (name) {
  drivers.push(name);
}

function destructivelyPrependDriver (name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver () {
  drivers.pop();
}

function destructivelyRemoveFirstDriver () {
  drivers.shift();
}

function appendDriver (name) {
  return [...drivers, name];
}

function prependDriver (name) {
  return [name, ...drivers];
}

function removeFirstDriver () {
  return drivers.slic
