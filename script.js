






const button = document.getElementById("myButton");
const dropdown = document.getElementById("dropdownMenu");

button.addEventListener("click", (event) => {
    event.stopPropagation();
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

window.addEventListener("click", (event) => {
  if (!event.target.matches('#myButton')) {
    dropdown.style.display = "none";
  }
});


fetch("https://dummyjson.com/products")
.then((res)=>res.json())
.then((data)=>{console.log(data);
   theData(data.products)})
.catch((err)=>console.error(err))

function theData(arr){
  let container = document.querySelector("#container")

  arr.forEach((prod) => {
    const {brand,price,rating,thumbnail,title}=prod;
    const proCard = document.createElement("div")
    proCard.innerHTML= `<img src='${thumbnail}' alt=''/>
    <h3>${title} - ${brand}</h3>
    <h6>${price}</h6>
    <h5>${rating}</h5>
    <button>BookNow</button>
    `
    container.appendChild(proCard)
  })
  
}