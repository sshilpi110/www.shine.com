let container=document.getElementById("bac")
let data=[
    {
        img:'https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1640851375_8085.png&w=1920&q=75',
        name:"Backend Devloper in Java",
        rating:"TestPrep Training",
        duration:"Duration : 51hrs | Mode : Online",
        price:12999,
        p:"Explore",
        btn:"Buy Now"
    },
    {
        img:'https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1640851637_4621.png&w=1920&q=75',
        name:"Backend Devloper in Python",
        rating:"TestPrep Training",
        duration:"Duration : 20hrs | Mode : Online",
        price:12999,
        p:"Explore",
        btn:"Buy Now"
    },
    {
        img:'https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fproduct_image%2Fimages_all%2F1652953799_9984.png&w=1920&q=75',
        name:"Backend Devloper in Node.js",
        rating:"TestPrep Training",
        duration:"Duration : 41hrs | Mode : Online",
        price:12999,
        p:"Explore",
        btn:"Buy Now"
    }
]
console.log(products)
products(data)
function products(data){
    data.forEach(function(el){
        let div = document.createElement("div")

        let img = document.createElement("img");
        img.src = el.img

        let name = document.createElement("h2")
        name.innerText = el.name

        let rating = document.createElement("p")
        rating.innerText = el.rating

        let duration = document.createElement("p")
        duration.innerText = el.duration

        let price = document.createElement("h3")
        price.innerText = "₹"+el.price
        
        let DIV=document.createElement("div")
        DIV.setAttribute("id","DIV")

        let p = document.createElement("p")
        p.innerText = el.p
        p.setAttribute("id","explore")

        let btn = document.createElement("button")
        btn.innerText = "Buy Now"
        btn.setAttribute("id","btn")

        DIV.append(p,btn)
        
        
        div.append(img,name,rating,duration,price,DIV)
        container.append(div)

    })
}



let data1=[
    {
        img:'https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fproduct_image%2F3704%2F1563203388_5718.png&w=1920&q=75',
        name:"Securities Market Basic Module (Foundation)",
        rating:"TestPrep Training",
        duration:"Duration : 30min",
        price:999,
        p:"Explore",
        btn:"Buy Now"
    },
    {
        img:'https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fproduct_image%2F3857%2F1562912456_1442.png&w=1920&q=75',
        name:"Debt Recovery Test",
        rating:"TestPrep Training",
        duration:"Duration : 365 | Mode : Online",
        price:999,
        p:"Explore",
        btn:"Buy Now"
    },
    {
        img:'https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fproduct_image%2F3868%2F1562940589_4501.png&w=1920&q=75',
        name:"Maintenance and Reliability Test",
        rating:"TestPrep Training",
        duration:"Duration : 365 | Mode : Online",
        price:999,
        p:"Explore",
        btn:"Buy Now"
    }
]
function products1(data1){
    data1.forEach(function(el){
        let div = document.createElement("div")

        let img = document.createElement("img");
        img.src = el.img

        let name = document.createElement("h2")
        name.innerText = el.name

        let rating = document.createElement("p")
        rating.innerText = el.rating

        let duration = document.createElement("p")
        duration.innerText = el.duration

        let price = document.createElement("h3")
        price.innerText = "₹"+el.price
        
        let DIV=document.createElement("div")
        DIV.setAttribute("id","DIV")

        let p = document.createElement("p")
        p.innerText = el.p
        p.setAttribute("id","explore")

        let btn = document.createElement("button")
        btn.innerText = "Buy Now"
        btn.setAttribute("id","btn")

        DIV.append(p,btn)
        
        
        div.append(img,name,rating,duration,price,DIV)
        sec.append(div)

    })
}
products1(data1)