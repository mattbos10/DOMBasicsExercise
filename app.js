// DOM BASICS EXERCISE
// 1
console.log(`Number 1`);
const portillos = document.getElementById(`portillos`);
console.dir(portillos);

// 2
console.log(`Number 2`);
const images = document.getElementsByTagName(`img`);
console.dir(images);

// 3
console.log(`Number 3`);
const centered = document.getElementsByClassName(`center`);
console.dir(centered);

// 4
console.log(`Number 4`);
const ginosEast = document.querySelector(`#ginos`);
// OR
// const ginosEast = document.querySelector(`div`);
console.dir(ginosEast);

// 5
console.log(`Number 5`);
const pTags = document.querySelectorAll(`p`);
console.dir(pTags);

// 6a
console.log(`Number 6`);
const h1 = document.querySelector(`h1`);
// OR
// Using getElementsByTagName will return an HTMLCollection with the h1 at the index of 0
// const h1 = document.getElementsByTagName(`h1`);
console.dir(h1);

// 6b
h1.innerText = "Matt's Favorite Places To Eat In Sweet Home Chicago!";

// 7a
console.log(`Number 7`);
const others = document.querySelector(`#others`);
// OR
// const others = document.getElementById(`others`);
console.dir(others);

// 7b
others.innerHTML = `<h3>Other Favorites</h3>`;

// 8a
console.log(`Number 8`);
const aTag = document.querySelector(`a`);
// OR
// const aTag = document.getElementsByTagName(`a`);
console.dir(aTag);

// 8b
aTag.href = `https://www.choosechicago.com/articles/food-drink/5-classic-chicago-foods/`;

// 9
h1.classList.add(`background`, `text-color`);

// 10
h1.classList.remove(`background`);

// 11a
const h4 = document.createElement(`h4`);

// 11b
h4.innerText = "CHICAGO: A great place to eat!";

// 11c
const bodySection = document.querySelector(`body`);
bodySection.prepend(h4);
// OR
// document.querySelector(`body`).prepend(h4);

// 12a
const h5 = document.createElement(`h5`);

// 12b
h5.innerText = "See you in the Windy City Sometime!";

// 12c
aTag.insertAdjacentElement(`afterend`, h5);

// 13
document.querySelector(`ul > li`).remove();
// OR
// const li = document.querySelector(`li`).remove();
// li.remove()

// BONUS
// 14a
console.log(`Number 14`);
const divs = document.getElementsByTagName(`div`);
// OR
// const divs = document.querySelectorAll(`div`);
console.dir(divs);

// 14b
for (d of divs){
  d.classList.toggle(`background`);
}

// 15a
const hungry = [
  "Thanks",
  "A",
  "Lot",
  "Now",
  "I",
  "Am",
  "Hungry"
];

// 15b
const end = document.querySelector(`body`);
for (a of hungry){
  const span = document.createElement(`span`);
  // `${a} ` is used to create spaces between the words
  span.innerText = `${a} `;
  // OR
  // span.innerHTML = `${a} `;
  end.append(span);
}
// OR
// for (a of hungry){
//   const span = document.createElement(`span`);
//   span.innerText = a;
//   document.querySelector(`body`).append(span);
// }
// OR (Using a For Loop)
// const end = document.querySelector(`body`);
// for (i = 0; i < hungry.length; i++){
//   const span = document.createElement(`span`);
//   span.innerText = hungry[i];
//   end.append(span);
// }