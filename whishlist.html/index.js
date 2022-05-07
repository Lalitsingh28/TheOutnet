
var wishlistArr = [
    {
        image: "https://www.theoutnet.com/variants/images/45666037504191100/R/w358_q80.jpg",
        title: "FRAME",
        category: "Cotton-blend twill chinos",
        price: "$129",
        cuttOff: "$323",
        discount: "60% off"
    },
    {
        image: "https://www.theoutnet.com/variants/images/1647597279346426/R/w720_q80.jpg",
        title: "PESERICO",
        category: "Logo-appliquéd cotton-gabardine field jacket",
        price: "$292",
        cuttOff: "$731",
        discount: "60% off"
    },
    {
        image: "https://www.theoutnet.com/variants/images/43769801095699650/R/w720_q80.jpg",
        title: "KENZO",
        category: "Cropped cotton-gabardine cargo pants",
        price: "$124",
        cuttOff: "$246",
        discount: "50% off"
    },
    {
        image: "https://www.theoutnet.com/variants/images/46376663162562917/R/w720_q80.jpg",
        title: "RAG & BONE",
        category: "Logo-embroidered cotton-jersey T-shirt",
        price: "$38",
        cuttOff: "$96",
        discount: "60% off"
    }
]

localStorage.setItem("wishlistItem", JSON.stringify(wishlistArr));
var wishlistData = JSON.parse(localStorage.getItem("wishlistItem"));
displayData(wishlistData)
var bagArr = JSON.parse(localStorage.getItem("bagItem")) || []
var count = JSON.parse(localStorage.getItem("count")) || 0;

function displayData(data) {
    document.querySelector("#grid").innerHTML = "";
    data.forEach(function (elem, index) {
        var card = document.createElement("div")

        var img = document.createElement("img")
        img.setAttribute("src", elem.image)

        var title = document.createElement("p")
        title.innerText = elem.title

        var category = document.createElement("p")
        category.innerText = elem.category

        var price = document.createElement("p")
        price.innerText = elem.price

        var discount = document.createElement("div")
        discount.setAttribute("class", "disPrice")

        var dis = document.createElement("span")
        dis.innerText = elem.cuttOff

        var off = document.createElement("span")
        off.innerText = elem.discount

        var btn = document.createElement("button")
        btn.setAttribute("class", "btn1")
        btn.innerText = "Add To Bag"
        btn.addEventListener("click", function () {
            btn.innerText = "Added"
            addToBag(elem)
        })

        var del = document.createElement("button")
        del.setAttribute("class", "btn2")
        del.innerText = "Delete"
        del.addEventListener("click", function () {
            Delete(elem, index)
        })

        discount.append(dis, off)
        card.append(img, title, category, price, discount, btn, del)
        document.querySelector("#grid").append(card)
    })
}

function addToBag(elem) {
    count++;
    bagArr.push(elem)
    localStorage.setItem("bagItem", JSON.stringify(bagArr))
}

function Delete(elem, index) {
    wishlistData.splice(index, 1)
    count--;
    localStorage.setItem("wishlistItem", JSON.stringify(wishlistData))
    displayData(wishlistData)
}

document.querySelector("#sort").addEventListener("change", sort)
function sort() {
    var value = document.querySelector("#sort").value
    if (value == "") {
        displayData
    }
}