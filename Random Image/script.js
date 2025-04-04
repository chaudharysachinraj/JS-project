const imgContainer = document.querySelector(".img-container")

const btnE1 = document.querySelector(".btn")

btnE1.addEventListener("click", () => {
    console.log("You clicked me")
    updateImg();
})

function updateImg() {
    for (let i = 0; i < 8; i++) {
        const newImg = document.createElement("img")
        newImg.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 1000000)}`
        imgContainer.appendChild(newImg)
    }
}