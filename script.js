
let title =document.querySelector(".every_categories")

function category(){
    let promise = fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then((res) => {
        res.forEach(product => {
            let list = document.createElement("li")
            list.classList.add('lists')
            list.innerHTML = product
            let unorderd_list = document.querySelector(".categories_list")
            unorderd_list.append(list)

            list.addEventListener('click', ()=> {
                
                title.innerHTML = list.innerHTML
                
                

               
                
                
                
                
            })
            
    
            
        });
        

    })
       
}

category()

function getall_products(){
    let all_products = 
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((res) =>{

        

        
        
        
        

        let number = 9
        
        let array = res.products.slice(0,number)
        array.forEach(element =>{

            
            let items_div = document.createElement("div")
            items_div.classList.add("grid_items")
            const container = document.querySelector(".grid_container")
            container.append(items_div)
            let for_images = document.createElement("div")
            for_images.classList.add("for_images")
            items_div.append(for_images)
            let img = document.createElement("img")
            img.classList.add("images")
            for_images.append(img)
            let image = element.images[0]
            img.src = image
            let for_titles = document.createElement("div")
            for_titles.classList.add("for_titles")
            items_div.append(for_titles)
            let text = document.createElement("h2")
            text.classList.add("product_title")
            for_titles.append(text)
            text.innerHTML = element.title
            let prices_div = document.createElement("div")
            prices_div.classList.add("for_prices")
            for_titles.append(prices_div)
            let first_price = document.createElement("h3")
            let second_price = document.createElement("h3")
            first_price.classList.add("firstprice")
            second_price.classList.add("secondprice")
            prices_div.append(first_price)
            prices_div.append(second_price)
            first_price.innerHTML = `$${element.price}.00`

            let first_variable = element.discountPercentage/100
            let second_variable = 1 - first_variable
            let third_variable = element.price/second_variable
            second_price.innerHTML = `$${Math.round(third_variable*100)/100}` 
            let cart_button = document.createElement("button")
            cart_button.classList.add("cart_button")
            for_images.append(cart_button)
            cart_button.innerHTML = "Add to cart"

            

            

            
           
           


            



           
      
            
            
            
            })
    })
    
}


getall_products()





