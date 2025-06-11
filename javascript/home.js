const userData=JSON.parse(localStorage.getItem("signupData"));
if(!userData){
    alert("invalid session data, Please login again.");
    window.location.href="login.html";
    }
    else{
        document.getElementById("welcomeMessage").textContent= `Welcome back,${userData.username}`;
    }



document.addEventListener("DOMContentLoaded", () => {
    // Set welcome message from localStorage
    const user = localStorage.getItem("username") || "Guest";
    document.getElementById("welcome-msg").textContent = `Welcome, ${user}`;



    // Set cart count from localStorage
    const cartCountSpan = document.querySelector(".cart-count");
    let cartCount = parseInt(localStorage.getItem("cartCount")) || 0;
    cartCountSpan.textContent = cartCount;



    // Carousel functionality
    const images = document.querySelectorAll(".carousel-image");
    let current = 0;




    function showSlide(index) {
        images.forEach((img, i) => {
            img.classList.remove("active");
        });
        images[index].classList.add("active");
    }




    document.querySelector(".carousel-btn.left").addEventListener("click", () => {
        current = (current - 1 + images.length) % images.length;
        showSlide(current);
    });




    document.querySelector(".carousel-btn.right").addEventListener("click", () => {
        current = (current + 1) % images.length;
        showSlide(current);
    });




    showSlide(current);


    // Add to Cart button functionality
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            cartCount++;
            localStorage.setItem("cartCount", cartCount);
            cartCountSpan.textContent = cartCount;
            alert("Item added to cart!");
        });
    });


    // Search functionality
    const searchInput = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");


    if (searchBtn && searchInput) {
        searchBtn.addEventListener("click", () => {
            const query = searchInput.value.toLowerCase();
            alert(`You searched for: ${query}`); // Replace this with actual search logic
        });
    }
});



const imgs=document.querySelectorAll('.header-slider ul img');
const prev_btn=document.querySelector('.control_prev');
const next_btn=document.querySelector('.control_next');



let n=0;
function changeSlide(){
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display='none';   /*remove all the images from the webpage*/
        }
        imgs[n].style.display='block';    /*for displaying first image*/
}
changeSlide();


prev_btn.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }
    else{
        n=imgs.length-1;
    }
    changeSlide();
})



next_btn.addEventListener('click',(e)=>{
    if(n<imgs.length-1){
        n++;
    }
    else{
        n=0;
    }
    changeSlide();
})

