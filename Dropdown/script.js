let item = document.getElementsByClassName("container");
let show = document.getElementsByClassName("show");
let hide = document.getElementsByClassName("hide");
// console.log(item);

for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("click", function myFun() {
        let result = item[i].classList.toggle("active");

        if (result == true) {
            show[i].style.display = "none";
            hide[i].style.display = "block"
        } else {
            show[i].style.display = "block";
            hide[i].style.display = "none";
        }
    })
}