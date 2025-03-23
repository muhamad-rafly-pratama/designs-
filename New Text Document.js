let currentIndex = 0;
const images = document.querySelectorAll('.B img');
const totalImages = images.length;

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalImages;
    images[currentIndex].classList.add('active');
}

function prevImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    images[currentIndex].classList.add('active');
}

function nextImage() {
    showNextImage();
}

// Inisialisasi gambar pertama
images[currentIndex].classList.add('active');

// Otomatis geser gambar setiap 3 detik
setInterval(showNextImage, 3000);

// Javascript untuk mengatur pergantian gambar 
function slideImages() {
    const posters = document.querySelectorAll('.C .Poster');

    posters.forEach(poster => {
        const imageContainer = poster.querySelector('.image-container');
        let currentPosition = 0;

        setInterval(() => {
            currentPosition = (currentPosition - 33.33) % 100;
            imageContainer.style.transform = `translateX(${currentPosition}%)`;
        }, 3000);
    });
}

window.onload = slideImages;