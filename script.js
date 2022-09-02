            //onclick to change the image of the large image 
            let bigShoe = document.getElementById('big-shoe')
            let firstShoe = document.getElementById('first-small-shoe')
            let secondShoe = document.getElementById('second-small-shoe')
            let thirdShoe = document.getElementById('third-small-shoe')
            let forthShoe = document.getElementById('forth-small-shoe')


            //normal function declaration
            firstShoe.addEventListener("click",function(){
               bigShoe.src = "/images/image-product-1.jpg"
            })

            //normal function declaration
            const theSecodShoe =secondShoe.addEventListener("click",function(){
               bigShoe.src=  "/images/image-product-2.jpg"
            })

            //ES6 arrow function declation
            thirdShoe.addEventListener("click",e=>{
               bigShoe.src = "/images/image-product-3.jpg"
            })

            //ES6 arrow function declation
            forthShoe.addEventListener("click",e=>{
               bigShoe.src = "/images/image-product-4.jpg"
            })



               //onclick on the plus and minus icon in the cart
               let minus = document.getElementById('minus')
               let number = document.getElementById('number')
               let plus = document.getElementById('plus')
 
     
         
          
            let addMinus = 0
            minus.addEventListener("click",function decrease(){
             //An if statement that decreases the cart number and prevents the number from going below 0
             if(addMinus == 0){
                number.innerHTML = "0"
             }else if(addMinus > 0){
                 addMinus-- 
                 number.innerHTML = addMinus
               }
            })

            //increment icon 
            plus.addEventListener("click",function(){
            addMinus++
            number.innerHTML = addMinus
            })
            
   



         //THE CART DROP-DOWN
         const dropDown = document.getElementById("cart-drop-down-id")
         const cartDropDown = document.getElementsByClassName("cart-drop-down")
         
            
       
        function togglebtn(){
         if(dropDown.classList == "cart-drop-down"){   
           dropDown.classList.add("remove-cart-drop-down")
         }else{
             dropDown.classList.remove("remove-cart-drop-down")
         }        
       }



      //ADDING EVENT LISTENER OF A CLICK ON THE CART BUTTON
      const cartBtn = document.getElementById("cart-btn")
      const cartParagraph = document.getElementById("cart-paragraph-id")
      const number0fPairs = document.getElementById("number-of-pairs")
      const totalAmount = document.getElementById("total-amount")
      const emptyCart =document.getElementById("empty-cart")
      const shoeName =document.getElementById("shoe-name")
      const checkOutbtn = document.getElementById("checkout-button")
      const checkWord = document.getElementById("check-word")
      const cartedShoe = document.getElementById("carted-shoe")
      const deleteCart = document.getElementById("delete-cart")
      const cartedValue = document.getElementById("carted-value")
      const cartedNumber = document.getElementById("carted-number")
      

          let total;
     
            cartBtn.addEventListener("click",function(){
            
             total = addMinus * 125
             totalAmount.innerHTML =  " $" + total + ".00"
             totalAmount.style.color = "black"
             totalAmount.style.fontSize = "25px"
             totalAmount.style.fontWeight = "1000"

             number0fPairs.innerHTML = "125 x   " + addMinus

             emptyCart.innerHTML = ""
             shoeName.innerHTML = "Fall Limited Edition Sneakers"

             checkOutbtn.classList.add("checkout-button")
             checkWord.innerHTML ="Checkout"
             checkWord.style.display = "flex"
             checkWord.style.justifyContent = "center"
             checkWord.style.padding = "20px"


             cartedShoe.style.display = "flex"
             deleteCart.style.display = "flex"
            
             cartedValue.style.display ="flex"
             cartedNumber.innerHTML = addMinus
           
       })
      
  
       

      
      

      
