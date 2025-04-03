const btnEle = document.querySelector(".btn");
const imgEle = document.getElementById("qr-img");
const boxEle = document.getElementById("img-box");
const inputEle = document.getElementById("qr-text");

btnEle.addEventListener("click", () => {
    if (inputEle.value.length > 0) {
        imgEle.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputEle.value}`
        boxEle.classList.add("show-img");
    }
});