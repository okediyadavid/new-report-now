document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-link');
    
    links.forEach(link => {
        link.addEventListener('click', function() {
            links.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".right img, top-notch-left");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "scale(1)";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    images.forEach(image => {
        observer.observe(image);
    });
});

fetch('./nav.html')
.then(response => response.text())
.then(data => {
    document.getElementById('nav').innerHTML = data;
});

document.getElementById('requestDemo').addEventListener('click', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const email = document.getElementById('email').value.trim();
    const country = document.getElementById('country').value;
    const message = document.getElementById('message').value.trim();
    const organizationType = document.getElementById('organizationType').value.trim();

    if (!firstName || !phoneNumber || !email || !country || !message || !organizationType) {
        alert('Please fill in all fields.');
        return;
    }


    alert('Request submitted successfully!');
});

document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Adjust as needed to control when the animation triggers
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-section').forEach(section => {
        observer.observe(section);
    });
});
