function addToCart(title, description, image) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];


  const item = {
    title: title,
    description: description,
    image: image,
    price: 100,
    quantity: 1
  };


  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));


  alert(`${title} added to cart`);
}



function filterProducts() {
    const input = document.getElementById("inpu").value.toLowerCase();
    const cards = document.querySelectorAll(".card");


    cards.forEach((card) => {
        const productName = card.querySelector("h3").textContent.toLowerCase();
        const productDesc = card.querySelector("p").textContent.toLowerCase();

        if (productName.includes(input) || productDesc.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// Carousel script for sliding images on nav buttons and auto-slide

const carouselImages = document.querySelector('.carousel-images');
const carouselBtns = document.querySelectorAll('.carousel-btn');
const totalImages = document.querySelectorAll('.carousel-image').length;

let currentIndex = 0;

function updateCarousel() {
  const offset = -currentIndex * 100; // each image takes 100% width
  carouselImages.style.transform = `translateX(${offset}%)`;
}



// Left button click
carouselBtns[0].addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateCarousel();
});



// Right button click
carouselBtns[1].addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel();
});



// Auto slide every 4 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel();
}, 4000);



// Initialize carousel on page load
updateCarousel();



function payment(){
  location.href="payment.html"
}



// Show arrow when user scrolls down
  window.onscroll = function () {
    const arrow = document.getElementById("top-arrow");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      arrow.style.display = "block";
    } else {
      arrow.style.display = "none";
    }
  };
  

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }