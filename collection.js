var productcontainer = document.getElementById("products")
var search = document.getElementById("search")
var productlist = productcontainer.querySelectorAll("div")

search.addEventListener("keyup", function () {
    var entertedValue = event.target.value.toUpperCase()

    for (count = 0; count < productlist.length; count = count + 1) {
        var produtname = productlist[count].querySelector("p").textContent

        if (produtname.toUpperCase().indexOf(entertedValue) < 0) {
            productlist[count].style.display = "none"
        }
        else {
            productlist[count].style.display = "block"
        }
    }
})