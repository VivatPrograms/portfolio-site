document.addEventListener("DOMContentLoaded", function() {
    // Disable scroll initially
    document.body.classList.add('no-scroll');

    // Text animation
    const texts = ["scale your online presence", "put yourself out there", "be different"];
    let index = 0;
    const animatedText = document.getElementById("animatedText");

    animatedText.addEventListener("animationiteration", function() {
        animatedText.textContent = texts[index];
        index = (index + 1) % texts.length;
    });

    // Scroll into view
    const elements = document.querySelectorAll('h1, h2, h3, p, .text-element, .nav-button');
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => {
        observer.observe(element);
    });

    // Get Started button click handler
    document.getElementById("getStarted").addEventListener("click", function() {
        document.body.classList.remove('no-scroll');
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
        setTimeout(function() {
            document.getElementById('about').classList.add('visible');
        }, 0); 
    });

    // Start the automatic slide change every 3 seconds
    // setInterval(function() {
    //     changeSlide(1);
    // }, 3000);
});

let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    const slides = document.getElementsByClassName("carousel-item");
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[slideIndex].classList.add("active");
}

function visitCurrentSlide() {
    const slides = document.getElementsByClassName("carousel-item");
    const activeSlide = Array.from(slides).find(slide => slide.classList.contains('active'));
    if (activeSlide) {
        const activeIndex = Array.from(slides).indexOf(activeSlide);
        const urls = [
            "https://elitedigitalagency.com/",
            "https://square1.lt/?gad_source=1&gclid=CjwKCAjwjqWzBhAqEiwAQmtgT1P01pwIjjy015-PJwXMSdYLwZW3CJeY8r_oi2YOrRMBanh-PNB4EBoC_w0QAvD_BwE",
            "https://hobbyfitness.lt/",
            "https://www.likethestock.com/",
            // Add more URLs for additional images
        ];
        if (urls[activeIndex]) {
            // Open the URL in a new window
            window.open(urls[activeIndex], "_blank");
        }
    }
}
