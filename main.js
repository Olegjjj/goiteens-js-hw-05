const backdroping = document.querySelector(".backdrop");
const openModal = document.querySelector('[data-action="open-modal"]');
const closeModal = document.querySelector('[data-action="close-modal"]');
    openModal.addEventListener("click", ()=> {
        backdroping.style.display = "flex";
    });
    closeModal.addEventListener("click", ()=> {
        backdroping.style.display = "none";
    });

const colorRed = document.querySelector('[value="red"]');
const colorWhite = document.querySelector('[value="white"]');
const colorGreen = document.querySelector('[value="green"]');
colorRed.addEventListener("click", ()=> {
    document.body.style.background = "red";
 });


colorWhite.addEventListener("click", ()=> {
    document.body.style.background = "white";
 });


colorGreen.addEventListener("click", ()=> {
   document.body.style.background = "green";
});

const hOne = document.querySelector("h1")
const outPut = document.querySelector("#output");
const nameInput = document.querySelector("#name-input");
nameInput.addEventListener("input", () => {
if (nameInput.value.trim() !== "") {
    hOne.style.display = "flex";
    outPut.textContent = nameInput.value.trim();
}
else {
    hOne.style.display = "flex";
    outPut.textContent = "незнайомець";
}
});

const validationInput = document.querySelector("#validation-input");
validationInput.addEventListener("blur", () => {
    console.log(validationInput.value.length);
    if (validationInput.getAttribute('data-length') > validationInput.value.length) { 
        validationInput.classList.remove('valid');
        validationInput.classList.add('invalid');
    } else {
        validationInput.classList.remove('invalid');
        validationInput.classList.add('valid');
    }
  });

const fontSizeControl = document.querySelector("#font-size-control");
const inputTextRef = document.querySelector("#text");
fontSizeControl.addEventListener( "input", () => {
    inputTextRef.style.fontSize = `${fontSizeControl.value}px`;
  });