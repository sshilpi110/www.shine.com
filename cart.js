let arrOfData = JSON.parse(localStorage.getItem("courses")) || [];

let data = document.getElementById("products_data");

function display(arrOfData){

    arrOfData.forEach(function(el){


                let div = document.createElement("div");
                div.setAttribute("id","dividerJS")
        
                let img = document.createElement("img");
                img.setAttribute("id","imaOne");
                img.src = el.img
                // console.log(img.src)
        
                let name = document.createElement("h2")
                name.innerText = el.name
        
                // let rating = document.createElement("p")
                // rating.innerText = el.rating
        
                // let duration = document.createElement("p")
                // duration.innerText = el.duration
        
                let price = document.createElement("h3")
                price.innerText = "₹"+el.price
                let a = parseInt(price);

                let total = document.getElementById("total");
                total.innerText = "Total price: - ₹"+el.price
                
                // let DIV=document.createElement("div")
                // DIV.setAttribute("id","DIV")
        
                // let p = document.createElement("p")
                // p.innerText = el.p
                // p.setAttribute("id","explore")
        
                // let btn = document.createElement("button")
                // btn.innerText = "Buy Now"
                // btn.setAttribute("id","btn");
                // btn.addEventListener("click",function(){
                //     addeData(el);
                // })
            
        
                // DIV.append(p,btn)
                
                
                div.append(img,name,price)
                data.append(div)
        
            })
        }


        display(arrOfData);

        function checkout(){
            alert("Order Placed Successfully", window.location = "home.html")
        }