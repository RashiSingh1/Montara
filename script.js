// EMAILJS 
emailjs.init("hG2mo7izLO4Q5avo9");

const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    multiplier: 1,
    lerp: 0.1
});

window.addEventListener("load", () => {
    scroll.update();
    scroll.scrollTo(0, {
        duration: 0,
        disableLerp: true
    });
});

function progressBar() {
    scroll.on("scroll", (obj) => {
        let scrollPercent = (obj.scroll.y / obj.limit.y) * 100;
        document.getElementById("progressBar").style.width = scrollPercent + "%";
    });
}
progressBar();

// HAMBURGER MENU
function toggleMenu() {
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");
    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("active");
        mobileMenu.classList.toggle("active");
    });
}
toggleMenu();

// DESTINATION SEARCH

function searchDestinations() {
    let cards = document.querySelectorAll(".Cards");
    let searchInput = document.querySelector(".destination input");
    let noResults = document.querySelector("#noResults");

    searchInput.addEventListener("input", function () {
        let searchValue = searchInput.value.toLowerCase();
        let found = false;

        cards.forEach(function (card) {
            let title = card.querySelector("h1").innerText.toLowerCase();
            let description = card.querySelector(".shortPara").innerText.toLowerCase();

            if (
                title.startsWith(searchValue) ||
                description.startsWith(searchValue)
            ) {
                card.style.display = "block";
                card.classList.add("show"); 
                found = true;
            } else {
                card.style.display = "none";
                card.classList.remove("show");
            }
        });

        if (noResults) {
            if (searchValue === "") {
                noResults.style.display = "none";
            } else if (found) {
                noResults.style.display = "none";
            } else {
                noResults.style.display = "block";
            }
        }
    });
}
searchDestinations();

// FORM VALIDATION

function formValidation() {
    let form = document.querySelector("#travelForm");
    let nameInput = document.querySelector("#name");
    let emailInput = document.querySelector("#email");
    let destinationInput = document.querySelector("#destination");
    let dateInput = document.querySelector("#date");
    let messageInput = document.querySelector("#message");
    let successMessage = document.querySelector("#successMessage");
    let errorElements = document.querySelectorAll(".error");
    let mailError = document.querySelector("#mailError");
    let destinationError = document.querySelector("#destinationError");

    let validDestinations = [
        "leh",
        "ooty",
        "coorg",
        "shimla",
        "chamba",
        "chini",
        "pangi valley",
        "gulmarg",
        "kodaikanal",
        "kalpa",
        "pahalgam"
    ];

    const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        errorElements.forEach(function (error) {
            error.innerText = "";
        });

        mailError.style.display = "none";
        destinationError.style.display = "none";
        successMessage.style.display = "none";

        let isValid = true;

        // NAME VALIDATION

        if (nameInput.value.trim() === "") {
            errorElements[0].innerText = "Name is required";
            isValid = false;
        }

        // EMAIL VALIDATION

        if (emailInput.value.trim() === "") {
            errorElements[1].innerText = "Email is required";
            isValid = false;
        } else if (!mailRegex.test(emailInput.value)) {
            mailError.style.display = "block";
            isValid = false;
        }

        // DESTINATION VALIDATION

        let destinationValue = destinationInput.value.trim().toLowerCase();
        if (destinationValue === "") {
            errorElements[2].innerText = "Destination is required";
            isValid = false;
        } else if (!validDestinations.includes(destinationValue)) {
            destinationError.style.display = "block";
            isValid = false;
        }

        // DATE VALIDATION
        if (dateInput.value === "") {
            errorElements[3].innerText = "Travel date is required";
            isValid = false;
        }

        // MESSAGE VALIDATION

        if (messageInput.value.trim() === "") {
            errorElements[4].innerText = "Message is required";
            isValid = false;
        }

        // SEND EMAIL VIA EMAILJS

        if (isValid) {
            emailjs.sendForm("service_ndk161v", "template_05ho04w", form)
                .then(function () {
                    successMessage.style.display = "block";
                    form.reset();
                }, function (error) {
                    alert("Failed to send message. Please try again.");
                    console.log("EmailJS error:", error);
                });
                
        }
    });
}
formValidation();

// GSAP ANIMATIONS

gsap.registerPlugin(TextPlugin);

gsap.to("#heroText", {
    duration: 4,
    text: "Hill Stations to Visit for a rejuvenating trip in Nature's Lap",
    ease: "none"
});

// CARD ANIMATIONS

function animateCards() {
    const cards = document.querySelectorAll(".Cards");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("show");
                }, index * 150);
            }
        });
    }, {
        threshold: 0.2
    });

    cards.forEach((card) => {
        observer.observe(card);
    });
}
animateCards();

// WEATHER API

const WEATHER_API_KEY = 'e415b84fea6c644d842303226480fb58';

async function fetchWeather(city) {
    try {

        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
        );

        console.log(city, res.status);

        if (!res.ok) throw new Error('failed');

        const data = await res.json();

        console.log(data);

        return {
            temp: Math.round(data.main.temp),
            desc: data.weather[0].description
        };

    } catch (error) {
        console.log("Error:", city, error);
        return null;
    }
}

async function loadAllWeather() {
    const cards = document.querySelectorAll('.Cards[data-city]');

    for (const card of cards) {
        const city = card.dataset.city;
        const badge = card.querySelector('.weather-badge');
        if (!badge) continue;

        const tempEl = badge.querySelector('.weather-temp');
        const descEl = badge.querySelector('.weather-desc');

        
        const spinner = document.createElement('div');
        spinner.className = 'spinner';
        badge.appendChild(spinner);
        tempEl.classList.add('hidden');
        descEl.classList.add('hidden');

        const weather = await fetchWeather(city);
        spinner.remove();

        if (weather) {
            tempEl.classList.remove('hidden');
            descEl.classList.remove('hidden');
            badge.classList.remove('error');
            tempEl.textContent = `${weather.temp}°C`;
            descEl.textContent = weather.desc;
        } else {
            badge.classList.add('error');
            tempEl.classList.add('hidden');
            descEl.classList.remove('hidden');
            descEl.textContent = 'unavailable';
        }
    }
}

loadAllWeather().then(() => {
    scroll.update();
});