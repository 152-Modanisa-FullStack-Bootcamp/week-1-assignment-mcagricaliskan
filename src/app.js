import "./styles.css";
import axios from "axios";

axios
  .get("https://my-json-server.typicode.com/modanisatech/bootcamp-db/products")
  .then((response) => {
    // Firstly, log response to the console,
    // inspect the response and see that it has data field
    console.log(response)
    
    // Assign data field of the response to
    // products variable below by destructuring
    // You can use alias
    const products = response["data"];
    // console.log(products)

    // Print names of all product to the console
    // by calling foreach  method (use arrow function)
    products.forEach(element => {
      console.log(element["name"])
    });

    // Get all products that contain "Şal" in their name (use filter method)
    // map filtered products to new object having only image and name field
    // assign mapped items to mappedProducts variable
    const mappedProducts = products.filter(element => element["name"].includes("Şal"))
    .map(element => {
      return {name: element["name"], image: element["image"]}
    });
    console.log(mappedProducts)
    

    // Display the images and names of mappedProducts
    // You need to add them to the DOM
    // you need to use forEach method
    // You need to use flexbox
    // Position of image and text is up to you
    // You can use any style you wish
    var productList = document.getElementById("products")

    mappedProducts.forEach(element => {
        var el = document.createElement("div");
        console.log(element)
        el.innerHTML = `<div class="product">
                              <img src="${element["image"]}">
                              <h1>${element["name"]}</h1>              
                            </div>`
        productList.appendChild(el.firstChild)
    });
  });
