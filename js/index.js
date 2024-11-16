function toggleContent() {
    var moreContent = document.querySelector(".more-content");
    var btn = document.querySelector(".btn-read-more");
    if (moreContent.style.display === "none"){
        moreContent.style.display ="inline";
        btn.innerText = "Read Less";
        btn.style.marginTop = "20px";
    }
    else{
        moreContent.style.display ="none";
        btn.innerText = "Read More";
    }
}

function showWriteUp() {
    let writeUp = document.querySelector(".more-write-up");
    let readMoreBtn = document.querySelector(".read-more");
    if (
        writeUp.style.display === "none"){
        writeUp.style.display ="inline";
        readMoreBtn.innerText = "Read Less";
        readMoreBtn.style.marginTop = "20px";

        }
    else{
        writeUp.style.display ="none";
        readMoreBtn.innerText = "Read More";
    }
}


document.addEventListener("DOMContentLoaded", function() {
    // Function to increment numbers
    function animateCounter(counterElement) {
        const target = +counterElement.getAttribute('data-target');
        const speed = 200; // The higher the value, the slower the counter

        const updateCount = () => {
            const current = +counterElement.innerText;
            const increment = target / speed;

            if (current < target) {
                counterElement.innerText = Math.ceil(current + increment);
                setTimeout(updateCount, 10);
            } else {
                counterElement.innerText = target;
            }
        };

        updateCount();
    }

    // Create an IntersectionObserver to detect when the counter section is in view
    const observerOptions = {
        threshold: 0.5 // Starts animation when 50% of the counter is visible
    };

    const counters = document.querySelectorAll('.counter');

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target); // Stop observing after animating
            }
        });
    }, observerOptions);

    // Observe each counter element
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
});
