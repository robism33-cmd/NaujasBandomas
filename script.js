console.log("Hello World");
// console.log(document);
// console.dir(document);
// alert("Atsargiai");
// DOM tai HTML dokumento struktura kuria Javascript mato kaip objektu medi
// mums tai padeda oasiimti ir keisti elementus tame medyje

// Selektoriai-elemento  pasirinkimas is DOM
// 1. Elemento pasirinkimas pagal ID
// sita selektoriu dazniausiai  naudojame kai reikia issikviesti vieninteli norima objekta esanciame dokumente
// const document = {
//   html: {
//     body: {},
//   },
//   getElementById function () {

//   } ()
// };
// console.dir(getElementById("main-title"));
// document.getElementById("main-title").textContent = "Hello World";
// console.log(document.getElementById("main-title"));
// document.getElementById("main-title").style.border = "1px solid black";
const mainTitle = document.getElementById("main-title");
// Gali buti ir sitaip:
mainTitle.textContent = "Hello World";
mainTitle.style.border = "1px solid black";
mainTitle.style.color = "red";
// jei mainTitle null false teiksme if nebus vykdoma
// jei mainTitle true vykdomas kodas if-e
if (mainTitle) {
  mainTitle.style.border = "1px solid black";
  mainTitle.style.textContent = "Hello World";
  mainTitle.style.color = "red";
}
// 2 Elemento pasirinkimas pagal klase si selektoriu naudojame kai norime pakeisti DOM struktura daugiau nei vienu elementu
const descriptions = document.getElementsByClassName("description");
// console.log(descriptions);
descriptions[0].style.color = "green";
descriptions[0].textContent = "Cia yra pakeistas kontentas";
descriptions[1].style.color = "green";
descriptions[1].textContent = "Cia yra pakeistas kontentas";
// console.log(descriptions[0]);
for (let index in descriptions) {
  descriptions[index].style.color = "green";
  descriptions[index].textContent = "Cia yra pakeistas kontentas 2";
}
for (let i = 0; i < descriptions.length; i++) {
  descriptions[i].style.color = "orange";
  descriptions[i].textContent = "Cia yra pakeistas kontentas 3";
}
// 3. Elemento pasirinkimas pagal TAG
// Kai norima pasirinkti visus elementus
const allParagrafs = document.getElementsByTagName("p");
for (let i; i < allParagrafs.length; i++) {
  allParagrafs[i].style.fontStyle = "italic";
  allParagrafs[i].textContent = "green";
}
// 4 QuerySelector- kaI REIKIA SURASTI TIK PIRMA ATITINKANTI ELEMENTA
const firstBox = document.querySelector(".box");
firstBox.style.backgroundColor = "red";
// 5.querySelectorAll
// kai reikai surasti visus elementus
const allBoxes = document.querySelectorAll(".box");
allBoxes.forEach((box) => {
  box.style.cursor = "pointer";
});
