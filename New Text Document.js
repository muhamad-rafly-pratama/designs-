// Slider untuk section B
function initSectionBSlider() {
    let currentIndexB = 0;
    const imagesB = document.querySelectorAll('.B img');
    const totalImagesB = imagesB.length;

    function showNextImageB() {
        imagesB[currentIndexB].classList.remove('active');
        currentIndexB = (currentIndexB + 1) % totalImagesB;
        imagesB[currentIndexB].classList.add('active');
    }

    function prevImageB() {
        imagesB[currentIndexB].classList.remove('active');
        currentIndexB = (currentIndexB - 1 + totalImagesB) % totalImagesB;
        imagesB[currentIndexB].classList.add('active');
    }

    // Ekspos fungsi ke global scope jika diperlukan
    window.prevImage = prevImageB;
    window.nextImage = showNextImageB;

    // Inisialisasi
    if(imagesB.length > 0) {
        imagesB[0].classList.add('active');
        setInterval(showNextImageB, 3000);
    }
}

// Slider untuk section C dengan encapsulation
function initSectionCSlider() {
    const postersC = document.querySelectorAll('.C .Poster');

    postersC.forEach(poster => {
        let currentIndexC = 0;
        const imagesC = poster.querySelectorAll('.poster-img');
        const categoryText = poster.querySelector('.category-text');
        let intervalC;

        function updateCategoryText() {
            const activeImage = poster.querySelector('.poster-img.active');
            categoryText.textContent = activeImage.dataset.category || '';
        }

        function showNextImageC() {
            imagesC[currentIndexC].classList.remove('active');
            currentIndexC = (currentIndexC + 1) % imagesC.length;
            imagesC[currentIndexC].classList.add('active');
            updateCategoryText();
        }

        function startIntervalC() {
            intervalC = setInterval(showNextImageC, 3000);
        }

        // Initialize
        if(imagesC.length > 0) {
            imagesC[0].classList.add('active');
            updateCategoryText();
            startIntervalC();
            
            // Hover effects
            poster.addEventListener('mouseenter', () => {
                clearInterval(intervalC);
                poster.querySelector('.poster-img.active').style.transform = 'scale(1.1)';
                categoryText.style.opacity = '1';
            });

            poster.addEventListener('mouseleave', () => {
                startIntervalC();
                poster.querySelector('.poster-img.active').style.transform = 'scale(1)';
                categoryText.style.opacity = '0';
            });
        }
    });
}

// Inisialisasi semua slider
document.addEventListener('DOMContentLoaded', () => {
    initSectionBSlider();
    initSectionCSlider();
});